/**
 * AudioInfo.java	  V1.0   2014年12月9日 下午4:23:10
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
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

/**
 * 
 * 功能描述：声讯字段
 *
 * @author ：林炳兴
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public class AudioInfo {
    private Logger log = Logger.getLogger(getClass());
    JSONObject json;
    public AudioInfo( JSONObject json){
        this.json = json;
    }
    public AudioInfo(String jsonStr) {
        try {
            this.json = new JSONObject(jsonStr);
        } catch (JSONException e) {
            this.json = new JSONObject();
            log.error("json is not valid,error:"+ e.getMessage());
        }
    }
    /**
     * 
     * 功能描述：获取item
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getItem(){
        String item ="";
        try {
            if(json.has("item")){
                item = json.getString("item");
            }
        } catch (JSONException e) {
            log.error("获取声讯item错误,error:"+ e.getMessage());
        }
        return item;
    }
    /**
     * 
     * 功能描述：获取类型
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getType(){
        String type ="";
        try {
            if(json.has("type")){
                type = json.getString("type");
            }
        } catch (JSONException e) {
            log.error("获取声讯type错误,error:"+ e.getMessage());
        }
        return type;
    }
    /**
     * 
     * 功能描述：获取专辑名称
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:33:12
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getAlbum(){
        String album ="";
        try {
            if(json.has("album")){
                album = json.getString("album");
            }
        } catch (JSONException e) {
            log.error("获取声讯album错误,error:"+ e.getMessage());
        }
        return album;
    }
    /**
     * 
     * 功能描述：获取标题
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:33:27
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getName(){
        String name ="";
        try {
            if(json.has("name")){
                name = json.getString("name");
            }
        } catch (JSONException e) {
            log.error("获取声讯name错误,error:"+ e.getMessage());
        }
        return name;
    }
    /**
     * 
     * 功能描述：获取作者
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getAuthor(){
        String author ="";
        try {
            if(json.has("author")){
                author = json.getString("author");
            }
        } catch (JSONException e) {
            log.error("获取声讯author错误,error:"+ e.getMessage());
        }
        return author;
    }
    /**
     * 
     * 功能描述：获取播放时长
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getDuration(){
        String duration ="";
        try {
            if(json.has("duration")){
                duration = getDuration(json.getInt("duration"));
            }
        } catch (JSONException e) {
            log.error("获取声讯duration错误,error:"+ e.getMessage());
        }
        return duration;
    }
    /**
     * 
     * 功能描述：获取播放时长
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public int getDur(){
    	int duration =0;
    	try {
    		if(json.has("duration")){
    			duration = json.getInt("duration");
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return duration;
    }
    /**
     * 
     * 功能描述：获取播放时长
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public int getSize(){
    	int size =0;
    	try {
    		if(json.has("size")){
    			size = json.getInt("size");
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return size;
    }
    /**
     * 
     * 功能描述：获取播放时长
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getSizeFormatter(){
    	String sizeFormatter="";
    	try {
    		if(json.has("size")){
    			int size = json.getInt("size");
    			float tmp = size/(1024f*1024f);
    			sizeFormatter = String.format("%.2f", tmp);  			
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return sizeFormatter;
    }
    /**
     * 
     * 功能描述：获取信息来源
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getSource(){
        String source ="";
        try {
            if(json.has("source")){
                source = json.getString("source");
            }
        } catch (JSONException e) {
            log.error("获取声讯source错误,error:"+ e.getMessage());
        }
        return source;
    }
    /**
     * 
     * 功能描述：获取信息来源
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getUrl(){
    	String source ="";
    	try {
    		if(json.has("url")){
    			source = json.getString("url");
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return source;
    }
    /**
     * 
     * 功能描述：获取信息来源
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getIcon(){
    	String source ="";
    	try {
    		if(json.has("icon")){
    			source = json.getString("icon");
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return source;
    }
    /**
     * 
     * 功能描述：获取信息来源
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getDescription(){
    	String source ="";
    	try {
    		if(json.has("description")){
    			source = json.getString("description");
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return source;
    }
    /**
     * 
     * 功能描述：获取信息来源
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getMd5sum(){
    	String source ="";
    	try {
    		if(json.has("md5sum")){
    			source = json.getString("md5sum");
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return source;
    }
    /**
     * 
     * 功能描述：获取信息来源
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public int getMinute(){
    	int minute =0;
    	try {
    		if(json.has("duration")){
    			int duration = json.getInt("duration");
    			minute = duration/60;
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return minute;
    }
    /**
     * 
     * 功能描述：获取信息来源
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public int getSecond(){
    	int second =0;
    	try {
    		if(json.has("duration")){
    			int duration = json.getInt("duration");
    			second = duration%60;
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return second;
    }
    /**
     * 
     * 功能描述：获取信息来源
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String[] getTags(){
    	String[] tags ={};
    	try {
    		if(json.has("tags")){
    		JSONArray	array =   json.getJSONArray("tags");
    		tags = new String[array.length()];
    		for(int i=0;i<array.length();i++){
    			tags[i] = array.getString(i);
    		}
    		
    		}
    	} catch (JSONException e) {
    		e.printStackTrace();
    	}
    	return tags;
    }
    /**
     * 
     * 功能描述：获取更新时间
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月9日 下午4:32:17
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getTimestamp(){
        String timestamp ="";
        try {
            if(json.has("timestamp")){
                timestamp = json.getString("timestamp").replace("T", " ").replace("-", ".").replace("+08:00", "");
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return timestamp;
    }
    /**
     * 
     * 功能描述：获取返回结果码
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月11日 上午8:48:31
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public int getErrorCode() {
        int result = -1;
        try {
            if(json.has("status")){
                result = json.getJSONObject("status").getInt("code");
            }
            if (result == 200) {
                result = 0;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    /**
     * 
     * 功能描述：获取声讯详细信息
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月10日 上午10:00:09
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public ArrayList<AudioInfo> getItems() {
        ArrayList<AudioInfo> result = new ArrayList<AudioInfo>();
        try {
            if(json.has("item")){
                JSONArray array = json.getJSONArray("item");
                for (int i = 0; i < array.length(); i++) {
                    result.add(new AudioInfo(array.getJSONObject(i)));
                } 
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    /**
     * 
     * 功能描述：获取声讯详细信息
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月10日 上午10:00:09
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public AudioInfo getSingleItem() {
    	JSONObject object = null;
    	try {
    		if(json.has("item")){
    			object = json.getJSONObject("item");
    		}
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	return new AudioInfo(object);
    }
    public ArrayList<AudioInfo> getUpdateItems() {
        ArrayList<AudioInfo> result = new ArrayList<AudioInfo>();
        try {
            if(json.has("items")){
                JSONArray array = json.getJSONArray("items");
                for (int i = 0; i < array.length(); i++) {
                    result.add(new AudioInfo(array.getJSONObject(i)));
                } 
            }
        } catch (Exception e) {
            log.error("获取声讯items错误,error:"+ e.getMessage());
        }
        return result;
    }
    /**
     * 
     * 功能描述：获取总条数
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月11日 上午8:49:01
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public int getTotalCount(){
        int total = 0;
        try {
            if(json.has("total")){
                total = json.getInt("total");
            }
        } catch (Exception e) {
            log.error("获取声讯total错误,error:"+ e.getMessage());
        }
        return total;
    }
    public int getTotal_Count(){
        int total = 0;
        try {
            if(json.has("total_count")){
                total = json.getInt("total_count");
            }
        } catch (Exception e) {
            log.error("获取声讯total_count错误,error:"+ e.getMessage());

        }
        return total;
    }
    /**
     * 
     * 功能描述：获取专辑分类详细信息
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月10日 上午11:25:32
     *
     * @param json
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public ArrayList<Map<String,String>> getAlbumType(){
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
        } catch (Exception e) {
            log.error("获取声讯albums错误,error:"+ e.getMessage());
        }
        return list;
    }

    /**
     * 
     * 功能描述：转化时间格式
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月12日 上午9:39:15
     *
     * @param durationSeconds
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public static String getDuration(int durationSeconds){  
        int hours = durationSeconds /(60*60);  
        int leftSeconds = durationSeconds % (60*60);  
        int minutes = leftSeconds / 60;  
        int seconds = leftSeconds % 60;  
          
        StringBuffer sBuffer = new StringBuffer();  
        sBuffer.append(addZeroPrefix(hours));  
        sBuffer.append(":");  
        sBuffer.append(addZeroPrefix(minutes));  
        sBuffer.append(":");  
        sBuffer.append(addZeroPrefix(seconds));  
          
        return sBuffer.toString();  
    }  
      
    public static String addZeroPrefix(int number){  
        if(number < 10){  
            return "0"+number;  
        }else{  
            return ""+number;  
        }  
      
    }  
}
