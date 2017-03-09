/**
 * AlbumMapInfo.java	  V1.0   2015年1月5日 下午4:59:38
 *
 * Copyright 2015 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.entity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.activiti.engine.impl.util.json.JSONArray;
import org.activiti.engine.impl.util.json.JSONException;
import org.activiti.engine.impl.util.json.JSONObject;
import org.apache.log4j.Logger;


public class AlbumMapInfo {

    private Logger log = Logger.getLogger(getClass());
    private JSONObject json;
    
    public AlbumMapInfo(JSONObject json) {
        this.json = json;
    }
    
    public AlbumMapInfo(String jsonStr) {
        try {
            this.json = new JSONObject(jsonStr);
        } catch (JSONException e) {
            this.json = new JSONObject();
            log.error("json is not valid,error:"+ e.getMessage());
        }
    }
    
   
    public ArrayList<AlbumMapInfo> getMaps() {
        ArrayList<AlbumMapInfo> result = new ArrayList<AlbumMapInfo>();
        try {
            if(json.has("maps")){
                JSONArray array = json.getJSONArray("maps");
                for (int i = 0; i < array.length(); i++) {
                    result.add(new AlbumMapInfo(array.getJSONObject(i)));
                } 
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    
    public String getType(){
        String type ="";
        try {
            if(json.has("type")){
                type = json.getString("type");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射type错误,error:"+ e.getMessage());
        }
        return type;
    }
    
    public String getId(){
        String id ="";
        try {
            if(json.has("id")){
                id = json.getString("id");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射id错误,error:"+ e.getMessage());
        }
        return id;
    }
    
    public String getName(){
        String name ="";
        try {
            if(json.has("name")){
                name = json.getString("name");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射name错误,error:"+ e.getMessage());
        }
        return name;
    }
    
    public String getCoverUrl(){
        String coverUrl ="";
        try {
            if(json.has("coverUrl")){
                coverUrl = json.getString("coverUrl");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射coverUrl错误,error:"+ e.getMessage());
        }
        return coverUrl;
    }
    
    public boolean  getSubscribe(){
        boolean subscribe =false;
        try {
            if(json.has("subscribe")){
                subscribe = json.getBoolean("subscribe");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射subscribe错误,error:"+ e.getMessage());
        }
        return subscribe;
    }
    
    public int  getSubscribedCount(){
        int subscribedCount =0;
        try {
            if(json.has("subscribedCount")){
                subscribedCount = json.getInt("subscribedCount");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射subscribedCount错误,error:"+ e.getMessage());
        }
        return subscribedCount;
    }
    
    
    public int  getPlayCount(){
        int playCount =0;
        try {
            if(json.has("playCount")){
                playCount = json.getInt("playCount");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射playCount错误,error:"+ e.getMessage());
        }
        return playCount;
    }
    
    public int  getTotal(){
        int total =0;
        try {
            if(json.has("total")){
                total = json.getInt("total");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射playCount错误,error:"+ e.getMessage());
        }
        return total;
    }
    
    public String  getTimestamp(){
        String timestamp ="";
        try {
            if(json.has("timestamp")){
                timestamp = json.getString("timestamp").replace("T", " ").replace("-", ".").replace("+08:00", "");
            }
        } catch (JSONException e) {
            log.error("获取专辑映射timestamp错误,error:"+ e.getMessage());
        }
        return timestamp;
    }
    
    
    public ArrayList<Map<String,String>>  getAlbums(){
        ArrayList<Map<String,String>> list = new ArrayList<Map<String,String>>();
        try {
            if(json.has("albums")){
                JSONArray array = json.getJSONArray("albums");
                for (int i = 0; i < array.length(); i++) {
                    Map<String,String> map = new HashMap<String,String>();
                    JSONObject object = array.getJSONObject(i);
                    String name = null;
                    String id = null;
                    if(object.has("album")){
                         id = object.getString("album");
                         map.put("id", id);
                    }else{
                        map.put("id", String.valueOf(i));
                    }
                    if(object.has("name")){
                        name = object.getString("name");
                        map.put("name", name);
                    }
                  
                    list.add(map);
                }
            }
        } catch (JSONException e) {
            log.error("获取专辑映射subscribe错误,error:"+ e.getMessage());
        }
        return list;
    }
	/**
	 * 
	 * 功能描述：获取tags
	 * 
	 * @author ：yudp 创建日期 ：2014年12月9日 下午4:32:17
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	public String getTags() {
	 String tags = "";
		try {
			if (json.has("tags")) {
				JSONArray	arr_tags = json.getJSONArray("tags");
				for(int i=0;i<arr_tags.length();i++){
					tags =tags+arr_tags.getString(i)+";";
				}
			}
		} catch (JSONException e) {
			log.error("获取type错误,error:" + e.getMessage());
		}
		return tags;
	}
}
