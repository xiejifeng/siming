/**
 * BroadcastUtil.java	  V1.0   2014年8月26日 上午9:44:47
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.common.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.activiti.engine.impl.util.json.JSONObject;

import cn.ffcs.srp.util.web.WebContextUtil;
import cn.ffcs.txb.entity.Broadcastinfo;
/**
 * 
 * 功能描述：广播信息下发接口实现
 *
 * @author ：林炳兴
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public class BroadcastUtil {
    //post
    public static String CON_URL = "http://121.40.68.137/xiaobao/api/v1/push/broadcast.json";
    
    /**
     * 
     * 功能描述：广播信息下发
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月26日 下午3:45:49
     *
     * @param broadcastinfo
     * @param type
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public static boolean broadcastinfoClient(Broadcastinfo broadcastinfo,String type) {
        PrintWriter out = null ;
        BufferedReader in = null;
        HttpURLConnection conn = null;
        String result = "";
        int code = -1 ;
        try {
            //设置代理,没有代理需要去掉
            System.setProperty("http.proxyHost","192.168.13.19");
            System.setProperty("http.proxyPort","7777");
            URL url  = new URL(CON_URL);
            conn = (HttpURLConnection)url.openConnection();
            conn.setRequestProperty("Authorization", "Bearer 383w9JKJLJFw4ewpie2wefmjdlJLDJF");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("User-Agent", "xiaobao-device/xiaobao-app");
//            conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT; DigExt)");
            // 发送POST请求必须设置如下两行
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setDoInput(true);
            conn.setUseCaches(false);//不缓存
            // 获取URLConnection对象对应的输出流
            out = new PrintWriter(conn.getOutputStream());
            // 发送请求参数
            JSONObject params =  StringtoJson(broadcastinfo,type);
            out.print(params);
            // flush输出流的缓冲
            out.flush();
            // 定义BufferedReader输入流来读取URL的响应
            if(conn.getResponseCode() ==200){
                in = new BufferedReader(
                        new InputStreamReader(conn.getInputStream(), "UTF-8"));
                String line;
                while ((line = in.readLine()) != null) {
                    result += line;
                }
            }
            if(result != null && !"".equals(result.trim())){
                JSONObject obj = new JSONObject(result).getJSONObject("status");
                code = obj.getInt("code");
            }
             System.out.println(result);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }finally{
            try {
                if(in != null){
                    in.close();
                }
                if(out != null){
                    out.close();
                }
                if(conn != null){
                    conn.disconnect();//关闭连接
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return code ==0?true:false;
    }


    /**
     * 
     * 功能描述：转化为json格式
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月26日 下午3:45:13
     *
     * @param broadcastinfo
     * @param type
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public  static JSONObject StringtoJson(Broadcastinfo broadcastinfo,String type){
        JSONObject object = new JSONObject();
        //发送者
//        object.put("sender",WebContextUtil.getCurrentUser().getUsername());
        object.put("sender","admin");
        //时间戳
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
        object.put("timestamp", dateFormat.format(new Date())+"T"+timeFormat.format(new Date()));
        //失效时间
        object.put("timeout", 3600);
        //标题内容
        object.put("title", broadcastinfo.getPrimaryContent());
        //标题详细内容
        object.put("content", broadcastinfo.getExtendedContent());
        if("0".equals(type)){
            //指定用户
            String username[] =broadcastinfo.getIssueObject().split(",");
            object.put("users", username);
        }else if("1".equals(type)){
            //设备状态   work 、suspend、jam
            if(broadcastinfo.getIssueObject().equals("1200")){
                object.put("deviceState","work");
            }else if(broadcastinfo.getIssueObject().equals("1201")){
                object.put("deviceState","suspend");
            }else if(broadcastinfo.getIssueObject().equals("1202")){
                object.put("deviceState","jam");
            }
        }else if("2".equals(type)){
            //设备所在区域
            object.put("deviceInDistrict",broadcastinfo.getProvince()+broadcastinfo.getCity()+broadcastinfo.getArea() );
        }
        return object;
        
    }
    
    //测试
    public static void main(String[] args) {
        Broadcastinfo broadcastinfo = new Broadcastinfo();
        broadcastinfo.setPrimaryContent("测试");
        broadcastinfo.setExtendedContent("测试扩展");
        broadcastinfo.setIssueObject("1200");
        BroadcastUtil.broadcastinfoClient(broadcastinfo,"1");
    }
}
