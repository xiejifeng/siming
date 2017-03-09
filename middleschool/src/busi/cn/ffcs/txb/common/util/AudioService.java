/**
 * AudioService.java	  V1.0   2014年12月9日 下午4:04:26
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.common.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.activiti.engine.impl.util.json.JSONArray;
import org.activiti.engine.impl.util.json.JSONObject;

import cn.ffcs.srp.util.StringUtil;
import cn.ffcs.srp.util.i18n.GlobalUtil;
import cn.ffcs.txb.entity.AudioInfo;

/**
 * 
 * 功能描述：查询声讯信息接口
 *
 * @author ：林炳兴
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public class AudioService {
    
   
    /**
     * 
     * 功能描述：请求声讯信息
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月10日 上午11:25:38
     *
     * @param type
     * @param name
     * @param ablum
     * @param timestamp
     * @param start
     * @param count
     * @return
     * @throws Exception
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getAlbumRequest(String type,String name,String ablum,String timestamp,int start,int count) throws Exception{
        String url = GlobalUtil.getValue("query_audioItem_url");
        String strAnd = "?";
        if(type != null && !"".equals(type.trim())){
            url = url+strAnd+"type="+type;
            strAnd = "&";
        }
        if(name != null && !"".equals(name.trim())){
            url = url+strAnd+"name="+name;
            strAnd = "&";
        }
        if(ablum != null && !"".equals(ablum.trim())){
            url = url+strAnd+"album="+ablum;
            strAnd = "&";
        }
        if(timestamp != null && !"".equals(timestamp.trim())){
            url = url+strAnd+"timestamp="+timestamp;
            strAnd = "&";
        }
        if(start >= 0){
            url = url+strAnd+"start="+start;
            strAnd = "&";
        }
        if(count >= 0 ){
            url = url+strAnd+"count="+count;
            strAnd = "&";
        }
        String jsonStr = BaseService.doGet(url);
        return jsonStr;
    }
    
    public String getUpdateAlbumRquest(String type,int page,int per_page) throws Exception{
        String url = String.format(GlobalUtil.getValue("update_ximalaya_url"), type,page,per_page);
        String t = null;
        String jsonStr =  BaseService.doPost(url,t);
        return jsonStr;
    }
    /**
     * 
     * 功能描述：请求专辑分类详细信息
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月10日 上午11:17:29
     *
     * @param type
     * @return
     * @throws Exception
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getAlbumTypeRequest(String type) throws Exception{
        String url =GlobalUtil.getValue("query_album_url");
        String strAnd = "?";
        if(type != null && !"".equals(type.trim())){
            url = url + strAnd+"types="+type;
        }
        String jsonStr = BaseService.doGet(url);
        return jsonStr;
    }
    /**
     * 
     * 功能描述：删除声讯信息请求
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月10日 上午11:31:44
     *
     * @param itemId
     * @return
     * @throws Exception
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String deleteAlbumRequest(String itemId) throws Exception{
        String url =GlobalUtil.getValue("delete_audioItem_url");
        String strAnd = "?";
        if(itemId != null && !"".equals(itemId.trim())){
            url = url+strAnd+"item="+itemId;
            strAnd = "&";
        }else{
            return null;
        }
        String jsonStr = BaseService.doDelete(url);
        return jsonStr;
    }
    
    public int getErrorCode( String resultStr){
        int result = -1;
        try {
            if(StringUtil.isNotEmpty(resultStr)){
                JSONObject json = new JSONObject(resultStr);
                result = json.getJSONObject("status").getInt("code");
                if (result == 200) {
                    result = 0;
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
    public ArrayList<AudioInfo> getItems(String jsonStr) {
        ArrayList<AudioInfo> result = new ArrayList<AudioInfo>();
        JSONObject json = null;
        try {
            if(jsonStr != null){
                json = new JSONObject(jsonStr);
                JSONArray array = json.getJSONArray("items");
                for (int i = 0; i < array.length(); i++) {
                    result.add(new AudioInfo(array.getJSONObject(i)));
                } 
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    
    public int getTotalCount(String jsonStr){
        int total = 0;
        JSONObject json = null;
        try {
            if(jsonStr != null){
                json = new JSONObject(jsonStr);
                total = json.getInt("total");
            }
        } catch (Exception e) {
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
    public ArrayList<Map<String,String>> getAlbumType(String jsonStr){
        ArrayList<Map<String,String>> list = new ArrayList<Map<String,String>>();
        JSONObject json = null;
        try {
            if(jsonStr != null){
                json = new JSONObject(jsonStr);
                JSONArray array = json.getJSONArray("albums");
                for (int i = 0; i < array.length(); i++) {
                    Map<String,String> map = new HashMap<String,String>();
                    JSONObject object = array.getJSONObject(i);
                    String id ="";
                    if(object.has("album")){
                        id = object.getString("album");
                        map.put("id", id);
                    }
                    String name ="";
                    if(object.has("name")){
                         name =  object.getString("name");
                         map.put("name", name);
                    }
                    list.add(map);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
    
    
    public static void main(String[] args) {
        AudioService audioService = new AudioService();
        try {
//            String result = BaseService.doXimalayaGet("http://3rd.ximalaya.com/explore/tracks?i_am=test20141119&condition=daily&page=1&per_page=10&uni=xxx");
//            System.out.println(result);
//          String result = BaseService.doGet("/xbot/v1/audio/manager/album/map/query?type=news&name=锵锵插话哥&subscribe=false[&start=0&count=10]");
          String result = BaseService.doGet("/xbot/v1/audio/manager/album/map?id=22c18bb2-fe93-4e35-8ddb-6e65cd643a8e");
          System.out.println(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
 
    }
}
