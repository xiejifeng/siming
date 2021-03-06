package com.siming.wx;

import cn.ffcs.srp.util.i18n.GlobalUtil;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

public class WeixinAuth {

    private static final Logger logger = LoggerFactory.getLogger(WeixinAuth.class);

    public Map<String,String> auth(String code)
    {
        Map<String, String> data = new HashMap();
        Map<String, String> result = getUserInfoAccessToken(code);//通过这个code获取access_token
        String openId = result.get("openid");
        if (StringUtils.isNotEmpty(openId)) {
            logger.info("try getting user info. [openid={}]", openId);
            Map<String, String> userInfo = WeixinAuth.getUserInfo(result.get("access_token"), openId);//使用access_token获取用户信息
            logger.info("received user info. [result={}]", userInfo);
            return userInfo;
        }
        return data;
    }

    /**
     * 获取请求用户信息的access_token
     *
     * @param code
     * @return
     */
    public static Map<String, String> getUserInfoAccessToken(String code) {
        JsonObject object = null;
        Map<String, String> data = new HashMap();
        try {
            String url = String.format("https://api.weixin.qq.com/sns/oauth2/access_token?appid=%s&secret=%s&code=%s&grant_type=authorization_code",
                    GlobalUtil.getValue("APPID"), GlobalUtil.getValue("APPSECRET"), code);
            logger.info("request accessToken from url: {}", url);
            DefaultHttpClient httpClient = new DefaultHttpClient();
            HttpGet httpGet = new HttpGet(url);
            HttpResponse httpResponse = httpClient.execute(httpGet);
            HttpEntity httpEntity = httpResponse.getEntity();
            String tokens = EntityUtils.toString(httpEntity, "utf-8");
            Gson token_gson = new Gson();
            object = token_gson.fromJson(tokens, JsonObject.class);
            logger.info("request accessToken success. [result={}]", object);
            data.put("openid", object.get("openid").toString().replaceAll("\"", ""));
            data.put("refresh_token",object.get("refresh_token").toString().replaceAll("\"", ""));
            data.put("expires_in",object.get("expires_in").toString().replaceAll("\"", ""));
            data.put("access_token", object.get("access_token").toString().replaceAll("\"", ""));
        } catch (Exception ex) {
            logger.error("fail to request wechat access token. [error={}]", ex);
        }
        return data;
    }

    /**
     * 获取用户信息
     *
     * @param accessToken
     * @param openId
     * @return
     */
    public static Map<String, String> getUserInfo(String accessToken, String openId) {
        Map<String, String> data = new HashMap();
        String url = "https://api.weixin.qq.com/sns/userinfo?access_token=" + accessToken + "&openid=" + openId + "&lang=zh_CN";
        logger.info("request user info from url: {}", url);
        JsonObject userInfo = null;
        try {
            DefaultHttpClient httpClient = new DefaultHttpClient();
            HttpGet httpGet = new HttpGet(url);
            HttpResponse httpResponse = httpClient.execute(httpGet);
            HttpEntity httpEntity = httpResponse.getEntity();
            String response = EntityUtils.toString(httpEntity, "utf-8");
            Gson token_gson = new Gson();
            userInfo = token_gson.fromJson(response, JsonObject.class);
            logger.info("get userinfo success. [result={}]", userInfo);
            data.put("openid", userInfo.get("openid").toString().replaceAll("\"", ""));
            data.put("nickname", userInfo.get("nickname").toString().replaceAll("\"", ""));
            data.put("city", userInfo.get("city").toString().replaceAll("\"", ""));
            data.put("province", userInfo.get("province").toString().replaceAll("\"", ""));
            data.put("country", userInfo.get("country").toString().replaceAll("\"", ""));
            data.put("sex",userInfo.get("sex").toString().replaceAll("\"", ""));
            data.put("headimgurl", userInfo.get("headimgurl").toString().replaceAll("\"", ""));
        } catch (Exception ex) {
            logger.error("fail to request wechat user info. [error={}]", ex);
        }
        return data;
    }
    
    /**
     * 发送模板消息
     * @param openId
     */
    public static void sendTemplateMsg(String openId)  throws Exception {
    	String accessToken = getAccessToken();
    	if(accessToken == null) {
    		logger.info("send template message error: fail to get access_token.");
    		return;
    	}
        String jsonStr = "{\"touser\": \"%s\", \"template_id\": \"%s\", \"url\": \"%s\", \"data\": {"+
        	        "\"first\": {\"value\": \"%s\", \"color\": \"#173177\"},"+
        	        "\"keyword1\": {\"value\": \"%s\",\"color\": \"#173177\"},"+
        	        "\"keyword2\": {\"value\": \"%s\",\"color\": \"#173177\"},"+
        	        "\"keyword3\": {\"value\": \"%s\",\"color\": \"#173177\"},"+
        	        "\"remark\": {\"value\": \"%s\",\"color\": \"#173177\"}"+
        	        "}}";
        
        String purl = GlobalUtil.getValue("domainPath")+"/appLogin/wxlogin.html?redirect_url=/appLogin/index.html";
        String first = "小升初-私立名校名师每日每科三题免费练习";
        String keyword1 = "思明E学-小升初";
        Calendar cal=Calendar.getInstance();
        java.text.SimpleDateFormat f=new java.text.SimpleDateFormat("yyyy年MM月dd日"); 
        String keyword2 = f.format(cal.getTime());//日期
        String keyword3 = "亲爱的家长、同学，今天题目已推出，加油！坚持！（还有视频讲解哦）.每日每科三题,每周一至周五免费放送,服务广大学生家长";
        String remark = "";
        String TEMPLATE_ID = GlobalUtil.getValue("TEMPLATE_ID");
        String reqStr = String.format(jsonStr,openId,TEMPLATE_ID,purl,first,keyword1,keyword2,keyword3,remark);

        String url = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token="+accessToken;
        logger.info("send template message from url: {}", url);
		try {
			HttpPost httpPost = new HttpPost(url);
			StringEntity reqEntity = new StringEntity(reqStr, "UTF-8");
			httpPost.setEntity(reqEntity);
			HttpResponse httpResponse = new DefaultHttpClient().execute(httpPost);
			int statusCode = httpResponse.getStatusLine().getStatusCode();
			logger.info("send template message http response status:{}", statusCode);
			if (statusCode == 200) {
				HttpEntity httpEntity = httpResponse.getEntity();
				String respStr = EntityUtils.toString(httpEntity, "UTF-8");
				System.out.println(respStr);
				// {"errcode":0,"errmsg":"ok","msgid":200228332}
				Gson gson = new Gson();
				JsonObject jsonObj = gson.fromJson(respStr, JsonObject.class);
				logger.info("send template message done. [result={}]", jsonObj);
			}
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw e;
		} 
    }
    /**
     * 获取access_token
     * @return
     */
    public static String getAccessToken() throws Exception {
    	String accessToken = null;
    	try {
    		JsonObject respJsonObj = null;
    		//String appId="wxa9206d3c49764cb1";
    		//String appSecret="c1ac3cfd5c97ad1d519150561343a6ee";
    		String appId = GlobalUtil.getValue("APPID");
    		String appSecret = GlobalUtil.getValue("APPSECRET");

    		String url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appId + "&secret=" +appSecret;
    		logger.info("request access_token from url: {}", url);
    		HttpGet httpGet = new HttpGet(url);
    		HttpResponse httpResponse = new DefaultHttpClient().execute(httpGet);
			int statusCode = httpResponse.getStatusLine().getStatusCode();
			logger.info("request wechat access_token http response status:{}", statusCode);
			if (statusCode == 200) {
				HttpEntity httpEntity = httpResponse.getEntity();
				// {"access_token":"ACCESS_TOKEN","expires_in":7200}
				// {"errcode":40013,"errmsg":"invalid appid"}
				String respStr = EntityUtils.toString(httpEntity, "utf-8");
				Gson gson = new Gson();
				respJsonObj = gson.fromJson(respStr, JsonObject.class);
				logger.info("request wechat access_token done. [result={}]", respJsonObj);
				accessToken = respJsonObj.get("access_token").toString().replaceAll("\"", "");
			}
    	} catch (Exception ex) {
    		logger.error("fail to request wechat access_token. [error={}]", ex);
    		throw ex;
    	}
        return accessToken;
    }
    
    public static void main(String[] args) {
		try {
			WeixinAuth.sendTemplateMsg("o2t3-wiHog-peNivCKia1agvw8j8");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
