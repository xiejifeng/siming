/**
 * JsonUtil.java	  V1.0   2014年12月17日 上午10:26:37
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.activiti.engine.impl.util.json.JSONArray;
import org.activiti.engine.impl.util.json.JSONObject;
import org.apache.log4j.Logger;

import cn.ffcs.srp.util.StringUtil;

/**
 * 
 * 功能描述：json工具类
 *
 * @author ：阮张忠
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public class JsonUtil {
    
    private static Logger log = Logger.getLogger(JsonUtil.class);
    
    /**
     * 
     * 功能描述：将JSONObject对象转成Map对象
     *
     * @author ：阮张忠
     * 创建日期 ：2014年12月17日 上午10:31:15
     *
     * @param json JSONObject
     * @return Map<String, Object>
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @SuppressWarnings("rawtypes")
    public static Map<String, Object>  parseToMap(JSONObject json){
        if(json == null){
            return null;
        }
        Map<String, Object> map = new HashMap<String, Object>();
        Iterator iterator = json.keys();
        while (iterator.hasNext()) {
            String key = (String) iterator.next();
            map.put(key, json.getString(key));
        }
        return map;
    }
    /**
     * 
     * 功能描述：将JSONObject对象转成Map对象
     *
     * @author ：阮张忠
     * 创建日期 ：2014年12月17日 上午10:31:15
     *
     * @param json JSONObject
     * @return Map<String, Object>
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public static List<Map<String, Object>>  parseToListMap(JSONArray array){
    	List<Map<String, Object>>  data = new ArrayList<>();
    	if(array == null){
    		return null;
    	}
    
    	for(int i=0;i<array.length();i++){
    		Map<String , Object> map = parseToMap(array.getJSONObject(i));
    		data.add(map);
    	}
    	if(!(data.size()>0)){
    		return new ArrayList<>();
    	}
         if(data.get(0).containsKey("startTime")){
    		Collections.sort(data, new MapComparator2());
    		for(int i=0;i<data.size();i++){
    			Map<String , Object> map = data.get(i);
    			if(map.containsKey("startTime")){
    				SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    				Date date = new Date(Long.valueOf(map.get("startTime").toString()));
    				map.put("startTime", sdf.format(date));
    			}
    			//data.add(map);
    		}
    	}else if(data.get(0).containsKey("createTime")){
    		Collections.sort(data, new MapComparator());
    		for(int i=0;i<data.size();i++){
    			Map<String , Object> map = data.get(i);
    			if(map.containsKey("createTime")){
    				SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    				Date date = new Date(Long.valueOf(map.get("createTime").toString()));
    				map.put("createTime", sdf.format(date));
    			}
    			//data.add(map);
    		}
    	}else if(data.get(0).containsKey("createtime")){
    		Collections.sort(data, new MapComparator3());
    	}
    	return data;
    }
    
    /**
     * 
     * 功能描述：判断是否正确的json字符串
     *
     * @author ：阮张忠
     * 创建日期 ：2014年12月19日 下午2:27:59
     *
     * @param json
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public static boolean isValidJson(String json){
        // 判断是否为空
        if(StringUtil.isEmpty(json)){
            log.error("json is empty");
            return false;
        }
        // 判断是否"{}"
        Pattern pattern = Pattern.compile("^\\{.*\\}$");   
        Matcher matcher = pattern.matcher(json);   
        if(!matcher.matches()){
            log.error("json is not valid,not begin { or end }");
            return false;
        }
        try{
            JSONObject jsonObj = new JSONObject(json);
        }catch(Exception e){
            log.error("json is not valid,error:"+ e.getMessage());
            return false;
        }
        return true;
    }
    
    
    public static class MapComparator implements Comparator<Map<String, Object>> {
    	  @Override
    	  public int compare(Map<String, Object> o1, Map<String, Object> o2) {
    	   // TODO Auto-generated method stub
    	   long b1 = Long.parseLong(o1.get("createtime").toString());
    	   long b2 = Long.parseLong(o2.get("createtime").toString());
    	   if(b1>b2)
    		   return 1;
    	   else{
    		   return -1;
    	   }
 
    	  }
    }
    public static class MapComparator2 implements Comparator<Map<String, Object>> {
    	@Override
    	public int compare(Map<String, Object> o1, Map<String, Object> o2) {
    		// TODO Auto-generated method stub
    		long b1 = Long.parseLong(o1.get("startTime").toString());
    		long b2 = Long.parseLong(o2.get("startTime").toString());
    		if(b1>b2)
    			return 1;
    		else{
    			return -1;
    		}
    		
    	}
    }
    public static class MapComparator3 implements Comparator<Map<String, Object>> {
    	@Override
    	public int compare(Map<String, Object> o1, Map<String, Object> o2) {
    		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
 
    		long b1=0;
    		long b2=0;
			try {
				b1 = df.parse(o1.get("createtime").toString()).getTime();
				b2 = df.parse(o2.get("createtime").toString()).getTime();
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    		if(b1>b2)
    			return -1;
    		else{
    			return 1;
    		}
    		
    	}
    }
}
