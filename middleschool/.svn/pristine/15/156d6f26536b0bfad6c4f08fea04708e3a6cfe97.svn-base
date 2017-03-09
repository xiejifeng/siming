package cn.ffcs.txb.common.util;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.security.MessageDigest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;

import org.activiti.engine.impl.util.json.JSONArray;

public class Util {

	/**
	 * 
	 * 新的md5签名，首尾放secret。
	 * 
	 * @param secret
	 *            分配给您的APP_SECRET
	 */

	public static String md5Signature(TreeMap<String, String> params,
			String secret) {

		String result = null;

		StringBuffer orgin = getBeforeSign(params, new StringBuffer(secret));

		if (orgin == null)

			return result;

		orgin.append(secret);

		try {

			MessageDigest md = MessageDigest.getInstance("MD5");

			result = byte2hex(md.digest(orgin.toString().getBytes("utf-8")));

		} catch (Exception e) {

			throw new java.lang.RuntimeException("sign error !");

		}

		return result;

	}

	/**
	 * 
	 * 二行制转字符串
	 */

	private static String byte2hex(byte[] b) {

		StringBuffer hs = new StringBuffer();

		String stmp = "";

		for (int n = 0; n < b.length; n++) {

			stmp = (java.lang.Integer.toHexString(b[n] & 0XFF));

			if (stmp.length() == 1)

				hs.append("0").append(stmp);

			else

				hs.append(stmp);

		}

		return hs.toString().toUpperCase();

	}

	/**
	 * 
	 * 添加参数的封装方法
	 */

	private static StringBuffer getBeforeSign(TreeMap<String, String> params,
			StringBuffer orgin) {

		if (params == null)

			return null;

		Map<String, String> treeMap = new TreeMap<String, String>();

		treeMap.putAll(params);

		Iterator<String> iter = treeMap.keySet().iterator();

		while (iter.hasNext()) {

			String name = (String) iter.next();

			orgin.append(name).append(params.get(name));

		}

		return orgin;

	}

	public static String getXiaMiUrl(String xiamiUrl, String methodName,
			String appkey, String secret, TreeMap<String, String> params) {

		TreeMap<String, String> apiparamsMap = new TreeMap<String, String>();

		if (params != null) {
			apiparamsMap.putAll(params);
		}

		apiparamsMap.put("format", "json");

		apiparamsMap.put("method", methodName);

		apiparamsMap.put("sign_method", "md5");

		apiparamsMap.put("app_key", appkey);

		apiparamsMap.put("v", "2.0");

		String timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
				.format(new Date());

		apiparamsMap.put("timestamp", timestamp);

		// 生成签名

		String sign = Util.md5Signature(apiparamsMap, secret);

		apiparamsMap.put("sign", sign);

		StringBuilder param = new StringBuilder();

		for (Iterator<Map.Entry<String, String>> it = apiparamsMap.entrySet()

		.iterator(); it.hasNext();) {

			Map.Entry<String, String> e = it.next();

			param.append("&").append(e.getKey()).append("=")
					.append(e.getValue());

		}

		return param.toString().substring(1);

	}

	/**
	 * 获取n天后的日期
	 * 
	 * @param datestr
	 *            日期字符串
	 * @param day
	 *            相对天数，为正数表示之后，为负数表示之前
	 * @return 指定日期字符串n天之前或者之后的日期
	 */
	public static java.sql.Date getBeforeAfterDate(String datestr, int day) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		java.sql.Date olddate = null;
		try {
			df.setLenient(false);
			olddate = new java.sql.Date(df.parse(datestr).getTime());
		} catch (ParseException e) {
			throw new RuntimeException("日期转换错误");
		}
		Calendar cal = new GregorianCalendar();
		cal.setTime(olddate);

		int Year = cal.get(Calendar.YEAR);
		int Month = cal.get(Calendar.MONTH);
		int Day = cal.get(Calendar.DAY_OF_MONTH);

		int NewDay = Day + day;

		cal.set(Calendar.YEAR, Year);
		cal.set(Calendar.MONTH, Month);
		cal.set(Calendar.DAY_OF_MONTH, NewDay);

		return new java.sql.Date(cal.getTimeInMillis());
	}

	/**
	 * @Title: getIpAddr
	 * @author kaka www.zuidaima.com
	 * @Description: 获取客户端IP地址
	 * @param @return
	 * @return String
	 * @throws
	 */
	public static String getIpAddr(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
			if (ip.equals("127.0.0.1")) {
				// 根据网卡取本机配置的IP
				InetAddress inet = null;
				try {
					inet = InetAddress.getLocalHost();
				} catch (UnknownHostException e) {
					e.printStackTrace();
				}
				ip = inet.getHostAddress();
			}
		}
		// 对于通过多个代理的情况，第一个IP为客户端真实IP,多个IP按照','分割
		if (ip != null && ip.length() > 15) {
			if (ip.indexOf(",") > 0) {
				ip = ip.substring(0, ip.indexOf(","));
			}
		}
		return ip;
	}

	/**
	 * 创建指定数量的随机字符串
	 * 
	 * @param numberFlag
	 *            是否是数字
	 * @param length
	 * @return
	 */
	public static String createRandom(boolean numberFlag, int length) {
		String retStr = "";
		String strTable = numberFlag ? "1234567890"
				: "1234567890abcdefghijkmnpqrstuvwxyz";
		int len = strTable.length();
		boolean bDone = true;
		do {
			retStr = "";
			int count = 0;
			for (int i = 0; i < length; i++) {
				double dblR = Math.random() * len;
				int intR = (int) Math.floor(dblR);
				char c = strTable.charAt(intR);
				if (('0' <= c) && (c <= '9')) {
					count++;
				}
				retStr += strTable.charAt(intR);
			}
			if (count >= 2) {
				bDone = false;
			}
		} while (bDone);
		return retStr;
	}
	
    public  static List<Map<String,Object>> cleanListByMapKey(List<Map<String,Object>> list, String toBeRemoved) {
    	  List<Map<String, Object>> listMap = new ArrayList<Map<String,Object>>();
    	  Map<String, Map> msp = new HashMap<String, Map>();
          //把list中的数据转换成msp,去掉同一id值多余数据，保留查找到第一个id值对应的数据
          for(int i = list.size()-1 ; i>=0; i--){
              Map map = list.get(i);
              String id = (String)map.get(toBeRemoved);
              map.remove(toBeRemoved);
              msp.put(id, map);
          }
           //把msp再转换成list,就会得到根据某一字段去掉重复的数据的List<Map>
          Set<String> mspKey = msp.keySet();
          for(String key: mspKey){
              Map newMap = msp.get(key);
              newMap.put(toBeRemoved, key);
              listMap.add(newMap);
          }

          listMap = JsonUtil.parseToListMap(new JSONArray(listMap));
    	  return listMap;
    }
    
    public static List<Map<String, Object>> cleanDataBySchool(List<Map<String, Object>> data){
    	List<Map<String, Object>> result = new ArrayList<>();
    	Set<String> set = new HashSet<>();
    	if(data==null|| data.size()<=0){
    	    return new ArrayList<>();
    	}
    	for(Map<String, Object> map:data){
    		if(set.add(map.get("id").toString())){
    			result.add(map);
    		}
    	}
    	
    	return result;
    }
       
	public static void main(String[] args) {
		 // TODO Auto-generated method stub
        Map<String, Map> msp = new HashMap<String, Map>();
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> listMap = new ArrayList<Map<String,Object>>();
        Map<String, Object> map1 = new HashMap<String, Object>();
        map1.put("id", "1");
        map1.put("name", "p");
        Map<String, Object> map2 = new HashMap<String, Object>();
        map2.put("id", "3");
        map2.put("name", "h");
        Map<String, Object> map3 = new HashMap<String, Object>();
        map3.put("id", "3");
        map3.put("name", "f");
        list.add(map1);
        list.add(map3);
        list.add(map2);
       
        System.out.println("初始数据：" + list.toString());
        //把list中的数据转换成msp,去掉同一id值多余数据，保留查找到第一个id值对应的数据
        for(int i = list.size()-1 ; i>=0; i--){
            Map map = list.get(i);
            String id = (String)map.get("id");
            map.remove("id");
            msp.put(id, map);
        }
         //把msp再转换成list,就会得到根据某一字段去掉重复的数据的List<Map>
        Set<String> mspKey = msp.keySet();
        for(String key: mspKey){
            Map newMap = msp.get(key);
            newMap.put("id", key);
            listMap.add(newMap);
        }
       
        System.out.println("去掉重复数据后的数据：" + listMap.toString());
    }
	
}