package cn.ffcs.txb.common.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.ParseException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import cn.ffcs.txb.common.util.LeUtil;
/**
 * Created by levey-pc on 2016/8/25.
 * 已封装的 Get 、 Post 接口，可根据需求修改。
 */
public class LeApi {


    private static final LeApi instance = new LeApi();
    private static CloseableHttpClient client;
    private String userId;
    private String secret;
    private int port = 80;
    private String ver = "4.0";
    private String baseUrl = "http://api.open.letvcloud.com/live/execute";


    public LeApi(){
        if(client == null){
            client = HttpClients.createDefault();
        }
    }

    public static LeApi getInstance() {
        return instance;
    }

    //返回json格式的String
    public String get(String method,Map<String, String> params) {
        try {
            HttpGet httpget = new HttpGet(baseUrl+ LeUtil.getParamStr("GET",getParams(method,params)));
            try (CloseableHttpResponse response = client.execute(httpget)) {
                HttpEntity entity = response.getEntity();
                if (entity != null) {
                    return EntityUtils.toString(entity,"UTF-8");
                }
            }
        } catch (ParseException | IOException e) {
            e.printStackTrace();
        }
        return "code:error";
    }



    //返回json格式的String
    public String post(String method,Map<String, String> params) {
        HttpPost httppost = new HttpPost(baseUrl);
        UrlEncodedFormEntity uefEntity;
        try {
            uefEntity = new UrlEncodedFormEntity(getPostParams(getParams(method,params)), "UTF-8");
            httppost.setEntity(uefEntity);
            try (CloseableHttpResponse response = client.execute(httppost)) {
                HttpEntity entity = response.getEntity();
                if (entity != null) {
                    return EntityUtils.toString(entity,"UTF-8");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "code:error";
    }

    private Map<String,String> getParams(String method,Map<String, String> params){
        Map<String, String> map = new HashMap<>();
        map.put("method", method);
        map.put("ver", ver);
        map.put("userid", this.getUserId());
        map.put("timestamp", String.valueOf(System.currentTimeMillis()));
        if (params != null) {
            map.putAll(params);
        }
        String sign = LeUtil.sign(map, this.getSecret());
        map.put("sign", sign);
        return map;
    }


    private List<NameValuePair> getPostParams(Map<String, String> map){
        List<NameValuePair> params = new ArrayList<>();
        Set<Map.Entry<String, String>> entrySet = map.entrySet();
        for (Map.Entry<String, String> e : entrySet) {
            String name = e.getKey();
            String value = e.getValue();
            NameValuePair pair = new BasicNameValuePair(name, value);
            params.add(pair);
        }
        return params;
    }

    public void close(){
        if(client !=null) {
            try {
                client.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public String getVer() {
        return ver;
    }

    public void setVer(String ver) {
        this.ver = ver;
    }
}
