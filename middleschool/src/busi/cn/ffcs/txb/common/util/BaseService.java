package cn.ffcs.txb.common.util;

import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.TreeMap;

import javax.imageio.ImageIO;

import org.activiti.engine.impl.util.json.JSONArray;
import org.activiti.engine.impl.util.json.JSONObject;

import cn.ffcs.srp.util.i18n.GlobalUtil;

public class BaseService {
	
	private static final String SERVLET_GET = "GET";
	private static final String SERVLET_POST = "POST";
	private static final String SERVLET_PUT = "PUT";
	private static final String SERVLET_DELETE = "DELETE";
	// 声讯服务IP
	private static final String BASE_URL = GlobalUtil.getValue("rest_ip");
	// 是否开启代理
	private static final boolean PROXY_SUPPORT = "Y".equalsIgnoreCase(GlobalUtil.getValue("proxy_support"));
	// 代理IP
	private static final String PROXY_IP = GlobalUtil.getValue("proxy_ip");
	// 代理端口
	private static final String PROXY_PORT = GlobalUtil.getValue("proxy_port");
	//上传文件端口
	private static final String UPLOAD_PORT = GlobalUtil.getValue("upload_port");
	
	private static final int HTTPREQUEST_CODE_OK = 200;
    //虾米接口地址
	private static final String XIAMI_URL = GlobalUtil.getValue("xiami_url");
	//虾米应用appKey
	private static final String appKey = GlobalUtil.getValue("xiami_appkey");
	//虾米应用appSecret
	private static final String appSecret = GlobalUtil.getValue("xiami_appsecret");
	/**
	 * 
	 * 功能描述：get请求
	 * 
	 * @author ：yudp 创建日期 ：2014年9月22日 上午8:45:53
	 * 
	 * @param urlStr
	 * @param paramMap
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	public static String doGet(String urlStr) throws Exception {
		if (!urlStr.contains("http://")) {
			urlStr = BASE_URL + urlStr;
		}
		if(PROXY_SUPPORT){
		    System.setProperty("http.proxyHost", PROXY_IP);
	        System.setProperty("http.proxyPort", PROXY_PORT);
		}
		String result = "";
		try {
			URL url = new URL(urlStr);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod(SERVLET_GET);
			conn.setRequestProperty("User-Agent", "xbot-manager");
			conn.connect();
			String line;

			if (conn.getResponseCode() == HTTPREQUEST_CODE_OK) {
				BufferedReader br = new BufferedReader(new InputStreamReader(
						conn.getInputStream(),"UTF-8"));
				while ((line = br.readLine()) != null) {
					result += line;
				}
				br.close();
			} else {
				BufferedReader br = new BufferedReader(new InputStreamReader(
						conn.getErrorStream()));
				while ((line = br.readLine()) != null) {
					result += line;
				}
				br.close();
			}
			conn.disconnect();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	  
	/**
	 * 
	 * 功能描述：post请求
	 * 
	 * @author ：yudp 创建日期 ：2014年9月22日 上午8:45:53
	 * 
	 * @param urlStr
	 * @param paramMap
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	public static String doPost(String urlStr, String paramStr) {
	    urlStr = BASE_URL + urlStr;
        if(PROXY_SUPPORT){
            System.setProperty("http.proxyHost", PROXY_IP);
            System.setProperty("http.proxyPort", PROXY_PORT);
        }
		String result = "";
		try {
			URL url = new URL(urlStr);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod(SERVLET_POST);
			conn.setRequestProperty("User-Agent", "xbot-manager");
			conn.setRequestProperty("Content-Type", "application/json");
	        conn.setDoInput(true);
	        conn.setDoOutput(true);
	        if(paramStr != null){
                OutputStream os = conn.getOutputStream();     
                os.write(paramStr.getBytes("utf-8"));     
                os.close();  
           }
			conn.connect();
			String line;

			if (conn.getResponseCode() == HTTPREQUEST_CODE_OK) {
				BufferedReader br = new BufferedReader(new InputStreamReader(
						conn.getInputStream(),"UTF-8"));
				while ((line = br.readLine()) != null) {
					result += line;
				}
				System.out.println(result);
				br.close();
			} else {
				BufferedReader br = new BufferedReader(new InputStreamReader(
						conn.getErrorStream()));
				while ((line = br.readLine()) != null) {
					result += line;
				}
				System.out.println(conn.getResponseCode());
				br.close();
			}
			conn.disconnect();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}


	/**
	 * 
	 * 功能描述：put请求
	 * 
	 * @author ：yudp 创建日期 ：2014年9月22日 上午8:46:12
	 * 
	 * @param urlStr
	 * @param paramMap
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	public static String doPut(String urlStr,String paramStr) {
		urlStr = BASE_URL + urlStr;
		if(PROXY_SUPPORT){
            System.setProperty("http.proxyHost", PROXY_IP);
            System.setProperty("http.proxyPort", PROXY_PORT);
        }
		String result = "";
		try {
            URL url = new URL(urlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod(SERVLET_PUT);
            conn.setRequestProperty("User-Agent", "xbot-manager");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoInput(true);
            conn.setDoOutput(true);
            if(paramStr != null){
                PrintWriter out = new PrintWriter(conn.getOutputStream());
                out.print(paramStr);
                // flush输出流的缓冲
                out.flush();
            }
            String line;

			if (conn.getResponseCode() == 200) {
				System.out.println("成功");
				BufferedReader in = new BufferedReader(new InputStreamReader(
						conn.getInputStream(), "UTF-8"));
				while ((line = in.readLine()) != null) {
					result += line;
				}
				in.close();
			} else {
				BufferedReader br = new BufferedReader(new InputStreamReader(
						conn.getErrorStream()));
				while ((line = br.readLine()) != null) {
					result += line;
				}
				System.out.println(result);
				br.close();
			}
			conn.disconnect();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}
	/**
	 * 
	 * 功能描述：delete请求
	 * 
	 * @author ：yudp 创建日期 ：2014年9月22日 上午8:46:12
	 * 
	 * @param urlStr
	 * @param paramMap
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	public static String doDelete(String urlStr) {
		urlStr = BASE_URL + urlStr;
		if(PROXY_SUPPORT){
            System.setProperty("http.proxyHost", PROXY_IP);
            System.setProperty("http.proxyPort", PROXY_PORT);
        }
		String result = "";
		try {
			URL url = new URL(urlStr);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod(SERVLET_DELETE);
			conn.setRequestProperty("User-Agent", "xbot-manager");
			conn.setRequestProperty("Content-Type", "application/json");
			String line;
			
			if (conn.getResponseCode() == 200) {
				System.out.println("成功");
				BufferedReader in = new BufferedReader(new InputStreamReader(
						conn.getInputStream(), "UTF-8"));
				while ((line = in.readLine()) != null) {
					result += line;
				}
				in.close();
			} else {
				BufferedReader br = new BufferedReader(new InputStreamReader(
						conn.getErrorStream()));
				while ((line = br.readLine()) != null) {
					result += line;
				}
				System.out.println(result);
				br.close();
			}
			conn.disconnect();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}
	
	public static String doPostReturn(String pathUrl, JSONObject paramter){
		// 设置代理
	    if(PROXY_SUPPORT){
            System.setProperty("http.proxyHost", PROXY_IP);
            System.setProperty("http.proxyPort", PROXY_PORT);
        }
		pathUrl = BASE_URL + pathUrl;
		PrintWriter out = null;
		BufferedReader in = null;
		HttpURLConnection conn = null;
		String result = "";
		int code = -1;
		try {
			URL url = new URL(pathUrl);
			conn = (HttpURLConnection) url.openConnection();
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("User-Agent", "xbot-manager");
			conn.setRequestMethod(SERVLET_POST);
			conn.setDoOutput(true);
			conn.setDoInput(true);
			conn.setUseCaches(false);// 不缓存

			out = new PrintWriter(conn.getOutputStream());
			// 发送请求参数
			out.print(paramter);
			// flush输出流的缓冲
			out.flush();
			// 定义BufferedReader输入流来读取URL的响应
			if (conn.getResponseCode() == 200) {
				in = new BufferedReader(new InputStreamReader(
						conn.getInputStream(), "UTF-8"));
				String line;
				while ((line = in.readLine()) != null) {
					result += line;
				}
			}
			if (result != null && !"".equals(result.trim())) {
				JSONObject obj = new JSONObject(result).getJSONObject("status");
				code = obj.getInt("code");
			}else{
				in = new BufferedReader(new InputStreamReader(
						conn.getErrorStream(), "UTF-8"));
				String line;
				while ((line = in.readLine()) != null) {
					result += line;
				}
				System.out.println(conn.getResponseCode()+result);
			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (in != null) {
					in.close();
				}
				if (out != null) {
					out.close();
				}
				if (conn != null) {
					conn.disconnect();// 关闭连接
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return result;
	}
	
	public static boolean doPost(String pathUrl, JSONObject paramter) {
	    // 设置代理
	    if(PROXY_SUPPORT){
            System.setProperty("http.proxyHost", PROXY_IP);
            System.setProperty("http.proxyPort", PROXY_PORT);
        }
		pathUrl = BASE_URL + pathUrl;
		PrintWriter out = null;
		BufferedReader in = null;
		HttpURLConnection conn = null;
		String result = "";
		int code = -1;
		try {
			URL url = new URL(pathUrl);
			conn = (HttpURLConnection) url.openConnection();
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("User-Agent", "xbot-manager");
			conn.setRequestMethod(SERVLET_POST);
			conn.setDoOutput(true);
			conn.setDoInput(true);
			conn.setUseCaches(false);// 不缓存

			out = new PrintWriter(conn.getOutputStream());
			// 发送请求参数
			out.print(paramter);
			// flush输出流的缓冲
			out.flush();
			// 定义BufferedReader输入流来读取URL的响应
			if (conn.getResponseCode() == 200) {
				in = new BufferedReader(new InputStreamReader(
						conn.getInputStream(), "UTF-8"));
				String line;
				while ((line = in.readLine()) != null) {
					result += line;
				}
			}
			if (result != null && !"".equals(result.trim())) {
				JSONObject obj = new JSONObject(result).getJSONObject("status");
				code = obj.getInt("code");
			}else{
				in = new BufferedReader(new InputStreamReader(
						conn.getErrorStream(), "UTF-8"));
				String line;
				while ((line = in.readLine()) != null) {
					result += line;
				}
				System.out.println(conn.getResponseCode()+result);
			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (in != null) {
					in.close();
				}
				if (out != null) {
					out.close();
				}
				if (conn != null) {
					conn.disconnect();// 关闭连接
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return code == 0 ? true : false;
	}
	public static String doPostGetResult(String pathUrl, JSONObject paramter) {
		// 设置代理
		if(PROXY_SUPPORT){
			System.setProperty("http.proxyHost", PROXY_IP);
			System.setProperty("http.proxyPort", PROXY_PORT);
		}
		pathUrl = BASE_URL + pathUrl;
		PrintWriter out = null;
		BufferedReader in = null;
		HttpURLConnection conn = null;
		String result = "";
		int code = -1;
		try {
			URL url = new URL(pathUrl);
			conn = (HttpURLConnection) url.openConnection();
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("User-Agent", "xbot-manager");
			conn.setRequestMethod(SERVLET_POST);
			conn.setDoOutput(true);
			conn.setDoInput(true);
			conn.setUseCaches(false);// 不缓存
			
			out = new PrintWriter(conn.getOutputStream());
			// 发送请求参数
			out.print(paramter);
			// flush输出流的缓冲
			out.flush();
			// 定义BufferedReader输入流来读取URL的响应
			if (conn.getResponseCode() == 200) {
				in = new BufferedReader(new InputStreamReader(
						conn.getInputStream(), "UTF-8"));
				String line;
				while ((line = in.readLine()) != null) {
					result += line;
				}
			}
			if (result != null && !"".equals(result.trim())) {
				JSONObject obj = new JSONObject(result).getJSONObject("status");
				code = obj.getInt("code");
			}else{
				in = new BufferedReader(new InputStreamReader(
						conn.getErrorStream(), "UTF-8"));
				String line;
				while ((line = in.readLine()) != null) {
					result += line;
				}
			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (in != null) {
					in.close();
				}
				if (out != null) {
					out.close();
				}
				if (conn != null) {
					conn.disconnect();// 关闭连接
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		boolean flag = code == 0 ? true : false;
		
		if(flag){
			return new JSONObject(result).getString("itemID");
		}
		return "";
	}

	public static String upload(String httpurl, String fileName,
			InputStream inputStream) {
		String result = "";
		httpurl = BASE_URL + httpurl;
		try {
			if (PROXY_SUPPORT) {
				System.setProperty("http.proxyHost", BaseService.PROXY_IP);
				System.setProperty("http.proxyPort", BaseService.PROXY_PORT);
			}
			String BOUNDARY = "---------7d4a6d158c9"; // 定义数据分隔线
			URL url = new URL(httpurl);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			// 发送POST请求必须设置如下两行
			conn.setDoOutput(true);
			conn.setDoInput(true);
			conn.setUseCaches(false);
			conn.setRequestMethod("POST");
			conn.setRequestProperty("connection", "Keep-Alive");
			conn.setRequestProperty("user-agent",
					"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)");
			conn.setRequestProperty("Charsert", "UTF-8");
			conn.setRequestProperty("Content-Type",
					"multipart/form-data; boundary=" + BOUNDARY);
			OutputStream out = new DataOutputStream(conn.getOutputStream());
			byte[] end_data = ("\r\n--" + BOUNDARY + "--\r\n").getBytes();// 定义最后数据分隔线
			StringBuilder sb = new StringBuilder();
			sb.append("--");
			sb.append(BOUNDARY);
			sb.append("\r\n");
			sb.append("Content-Disposition: form-data;name=\"file" + 1
					+ "\";filename=\"" + fileName + "\"\r\n");
			sb.append("Content-Type:application/octet-stream\r\n\r\n");
			byte[] data = sb.toString().getBytes();
			out.write(data);
			DataInputStream in = new DataInputStream(inputStream);
			int bytes = 0;
			byte[] bufferOut = new byte[1024];
			while ((bytes = in.read(bufferOut)) != -1) {
				out.write(bufferOut, 0, bytes);
			}
			out.write("\r\n".getBytes()); // 多个文件时，二个文件之间加入这个
			in.close();
			inputStream.close();
			out.write(end_data);
			out.flush();
			out.close();
			// 定义BufferedReader输入流来读取URL的响应
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					conn.getInputStream()));

			String line = null;
			while ((line = reader.readLine()) != null) {
				result+=line;
			}
			reader.close();
			conn.disconnect();
			return new JSONObject(result).getString("url");
		} catch (Exception e) {
			System.out.println("发送POST请求出现异常！" + e);
		}	
		return result;
	}

	 public static String doXimalayaGet(String urlStr) throws Exception {
         if(PROXY_SUPPORT){
             System.setProperty("http.proxyHost", PROXY_IP);
             System.setProperty("http.proxyPort", PROXY_PORT);
         }
         String result = "";
         try {
             URL url = new URL(urlStr);
             HttpURLConnection conn = (HttpURLConnection) url.openConnection();
             conn.setRequestMethod(SERVLET_GET);
             conn.connect();
             String line;
             if (conn.getResponseCode() == HTTPREQUEST_CODE_OK) {
                 BufferedReader br = new BufferedReader(new InputStreamReader(
                         conn.getInputStream()));
                 while ((line = br.readLine()) != null) {
                     result += line;
                 }
                 System.out.println(result);
                 br.close();
             } else {
                 BufferedReader br = new BufferedReader(new InputStreamReader(
                         conn.getErrorStream()));
                 while ((line = br.readLine()) != null) {
                     result += line;
                 }
                 System.out.println(result);
                 br.close();
             }
             conn.disconnect();

         } catch (Exception e) {
             e.printStackTrace();
         }
         return result;
     }
	 
	 
		/** 连接到TOP服务器并获取数据 */

		public static String getXiaMiResult(String urlStr,String methodName, TreeMap<String, String> params) {
			String content  = 	Util.getXiaMiUrl(urlStr,methodName,appKey,appSecret,params);
			
			/** 连接到TOP服务器并获取数据 */
				URL url = null;

				HttpURLConnection connection = null;
				try {

					url = new URL(urlStr);

					connection = (HttpURLConnection) url.openConnection();

					connection.setDoOutput(true);

					connection.setDoInput(true);

					connection.setRequestMethod("POST");

					connection.setUseCaches(false);

					connection.connect();

					DataOutputStream out = new DataOutputStream(
							connection.getOutputStream());

					out.write(content.getBytes("utf-8"));

					out.flush();

					out.close();

					BufferedReader reader =

					new BufferedReader(new InputStreamReader(
							connection.getInputStream(), "utf-8"));

					StringBuffer buffer = new StringBuffer();

					String line = "";

					while ((line = reader.readLine()) != null) {

						buffer.append(line);

					}

					reader.close();

					return buffer.toString();

				} catch (IOException e) {

					e.printStackTrace();

				} finally {

					if (connection != null) {

						connection.disconnect();

					}

				}

				return null;
		}
		public static void main(String[] args) throws Exception {
//		    TreeMap<String, String> paramsMap = new TreeMap<String, String>();
//		    paramsMap.put("key", "周杰伦");
//		    paramsMap.put("page", "1");
//		    paramsMap.put("limit", "10");
//		    paramsMap.put("type", "music_all");
//		    paramsMap.put("object_id", "1773679434");
//		    paramsMap.put("object_type", "song");
//		    paramsMap.put("limit", "50");
//		    paramsMap.put("page", "1");
//		    paramsMap.put("tag", "华语");
//		    paramsMap.put("id", "1772500461");
		    //热门歌曲alibaba.xiami.api.artist.hotSongs.get
		    //歌曲详情 alibaba.xiami.api.song.detail.get 免费 
		    //榜单获取歌曲alibaba.xiami.api.rank.songs.get
		    //今日歌单alibaba.xiami.api.recommend.dailySongs.get
            //标签alibaba.xiami.api.song.songsByTag.get
//          System.out.println(getXiaMiResult(XIAMI_URL,"alibaba.xiami.api.search.songs.get",paramsMap));
//            System.out.println( getXiaMiResult(XIAMI_URL,"alibaba.xiami.api.rank.songs.get",paramsMap));
//              System.out.println( getXiaMiResult(XIAMI_URL,"alibaba.xiami.api.song.detail.get",paramsMap));
//            JSONObject result = new JSONObject(getXiaMiResult(XIAMI_URL,"alibaba.xiami.api.rank.songs.get",paramsMap));
//            JSONArray array = result.getJSONObject("user_get_response").getJSONObject("data").getJSONArray("songs");
//            System.out.println(result.toString());
//            for (int i = 0; i < array.length(); i++) {
//            	String logo = array.getJSONObject(i).get("logo")+"";
//    			if(logo != null && !("".equals(logo))){
//					String logo_format = logo.substring(logo.lastIndexOf(".")+1);
//					String logo_url = logo.substring(0,logo.lastIndexOf("."));
//					if(logo_url.endsWith("_1") || logo_url.endsWith("_3") || logo_url.endsWith("_4")){
//						logo_url =  logo_url.substring(0, logo_url.length() - 2) + "_2" ;
//					}
//					logo =   logo_url + "." +logo_format;
//				}
//        		URL url = new URL(logo);
//        		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//                BufferedImage sourceImg =ImageIO.read(conn.getInputStream());  
//                System.out.println(logo);
//                System.out.println(sourceImg.getWidth()+"----"+sourceImg.getHeight());  
//                
//			}
			System.out.println(BaseService.doGet("http://www.i3ke.com/api/v1.0/alive/papers/subject/27?offset=0&limit=10"));
			
			
		}
	

}
