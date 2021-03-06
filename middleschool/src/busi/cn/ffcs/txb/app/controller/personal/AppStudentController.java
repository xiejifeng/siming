package cn.ffcs.txb.app.controller.personal;

import io.rong.ApiHttpClient;
import io.rong.models.ChatroomInfo;
import io.rong.models.FormatType;
import io.rong.models.SdkHttpResult;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.activiti.engine.impl.util.json.JSONArray;
import org.activiti.engine.impl.util.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.txb.common.api.LeApi;
import cn.ffcs.txb.common.model.Constant;
import cn.ffcs.txb.common.util.DateCommonUtils;
import cn.ffcs.txb.common.util.FileOperateUtil;
import cn.ffcs.txb.common.util.JsonUtil;
import cn.ffcs.txb.common.util.LetvCloudV1;
import cn.ffcs.txb.service.personal.IPersonalService;

@Controller
@RequestMapping(value = "/appStudent")
public class AppStudentController {
	@Resource
	private IPersonalService personalService;

	/**
	 * 
	 * 功能描述：今日课堂
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/todayClass.html")
	public String todayClass(HttpServletRequest request) {
        LeApi leApi = LeApi.getInstance();
        leApi.setUserId(Constant.LE_USER_ID);
        leApi.setSecret(Constant.LE_SECRET);
        Map<String,String> params = new HashMap<>();
        params.put("fetchSize","20");
        params.put("activityStatus","1");
        try {
        	String rst = leApi.get(Constant.LE_SEARCH,params);
        	request.setAttribute("zhiboList", JsonUtil.parseToListMap(new JSONArray(rst)));
        	LetvCloudV1 client = new LetvCloudV1(Constant.LE_USER_UNIQUE, Constant.LE_SECRET);
        	String result = client.videoList(1,100,10);
        	JSONObject  resultObj = new JSONObject(result);
        	if("0".equals(resultObj.getString("code"))){
        		request.setAttribute("isOverList", JsonUtil.parseToListMap(resultObj.getJSONArray("data")));
        	}
    		params = new HashMap<>();
    		params.put("fetchSize","5");
    		params.put("activityStatus","0");
    		rst = leApi.get(Constant.LE_SEARCH,params);
    		request.setAttribute("yugaoList", JsonUtil.parseToListMap(new JSONArray(rst)));
		} catch (Exception e) {
			request.setAttribute("yugaoList", new ArrayList<>());
			request.setAttribute("isOverList", new ArrayList<>());
			request.setAttribute("zhiboList", new ArrayList<>());
		}
		return "video/videoList";
	}
	/**
	 * 
	 * 功能描述：我要刷题
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/brushExercises.html")
	public String brushExercises(HttpServletRequest request) {
		String type = request.getParameter("type")==null?"":request.getParameter("type").toString();
		if("".equals(type)){
			return "brush/main";
		}
		return "brush/errormain";
	}
	
	/**
	 * 
	 * 功能描述：直播
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 * @throws Exception 
	 */
	@RequestMapping(value = "/liveVideo.html")
	public String liveVideo(@RequestParam Map<String, Object> reqMap,HttpServletRequest request) throws Exception {
		String courseId = reqMap.get("courseId").toString();
		String courseName = new String(reqMap.get("courseName").toString().getBytes("ISO-8859-1"), "UTF-8");
		String type = reqMap.get("type").toString();
		Map<String, Object> chatRoomInfo = this.personalService.isExistChatRoom(courseId);
        if(chatRoomInfo==null){
    		List<ChatroomInfo> chats = new ArrayList<ChatroomInfo>();
    		chats.add(new ChatroomInfo(courseId, courseName));
    		SdkHttpResult result = ApiHttpClient.createChatroom(Constant.RONG_APPKEY, Constant.RONG_SECRET, chats,FormatType.json);
    		if(Constant.HTTP_SUCC==result.getHttpCode()){
    			request.setAttribute("targetId",courseId);
    		}
    		this.personalService.saveChatRoomInfo(courseId, courseName);
        }else{
        	request.setAttribute("targetId",chatRoomInfo.get("targetId"));
        }
        
		Map<String, Object> userInfo = (Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
		if(userInfo!=null){
			String userId = String.valueOf((BigInteger)userInfo.get("userId"));
			String name = (String)userInfo.get("name");
			SdkHttpResult result = ApiHttpClient.getToken(Constant.RONG_APPKEY, Constant.RONG_SECRET, userId,name,"http://aa.com/a.png", FormatType.json);
			if(Constant.HTTP_SUCC==result.getHttpCode()){
				JSONObject json = new JSONObject(result.getResult());
				request.setAttribute("token", json.getString("token"));
			}
		}
		if("1".equals(type)){
			request.setAttribute("activityId",courseId);
			request.setAttribute("courseName",courseName);
		}else{
			String time = reqMap.get("time").toString();
			String today =DateCommonUtils.getTheDate();
			if(time.indexOf(today)>=0){
				request.setAttribute("canSign",1);
			}
			request.setAttribute("uu",Constant.LE_USER_UNIQUE);
			request.setAttribute("uv",courseId);
			request.setAttribute("courseName",courseName);
			return "video/videoVod";
		}
		return "video/videoLive";
	}
	/**
	 * 
	 * 功能描述：流量兑换
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/personal.html")
	public String initLogin() {
		return "personal/personal_student";
	}
	/**
	 * 
	 * 功能描述：流量兑换
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/introduceflow.html")
	public String introduceflow(HttpServletRequest request) {
		 request.setAttribute("trainInfo", this.personalService.getIntroductionInfo("0"));
		return "personal/introduceflow";
	}

	/**
	 * 
	 * 功能描述：个人信息
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/userInfo.html")
	public String userInfo(HttpServletRequest request) {
		BigInteger userId = (BigInteger)((Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO)).get("userId");
        Map<String, Object> userInfo = this.personalService.findUserInfo(String.valueOf(userId));
		request.setAttribute("personalInfo", userInfo);
		return "personal/student_info";
	}

	/**
	 * 
	 * 功能描述：积分换流量
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/scoreExchange.html")
	public String scoreExchange(HttpServletRequest request) {
		List<Map<String, Object>> data = this.personalService.findDictionaryInfoByCode("1C","2");
		for(Map<String, Object> map : data){
			String [] infos = map.get("keyword").toString().split(":");
			map.put("score", infos[0]);
			map.put("flow", infos[1]);
		}
		
		request.setAttribute("scoreExcahngeList",data);
    	Map<String, Object> userInfo = (Map<String, Object>) request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
    	BigInteger id = (BigInteger)userInfo.get("userId");
		request.setAttribute("totalScore",this.personalService.getChangeScore(id));
		return "personal/scoreExchange";
	}

	/**
	 * 
	 * 功能描述：刷题排行榜
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/brushOrder.html")
	public String brushOrder(HttpServletRequest request) {
		BigInteger userId = (BigInteger)((Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO)).get("userId");
        Map<String, String>  map = DateCommonUtils.getWeekDay();
		Map<String, Object> mapData = this.personalService.getUserOrderInfo(String.valueOf(userId),map.get("mon"),map.get("sun"));
		request.setAttribute("OrderInfo", mapData);
		return "personal/brushOrder";
	}

	/**
	 * 
	 * 功能描述：上课签到
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/sign.html")
	public String sign(HttpServletRequest request) {
		BigInteger userId = (BigInteger)((Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO)).get("userId");
        Map<String, Object> dateMap =  DateCommonUtils.getWeekDay();
		List<Map<String, Object>> signData =  this.personalService.findSignInfo(String.valueOf(userId), dateMap.get("mon").toString(), dateMap.get("sun").toString());
		request.setAttribute("signList", signData);
		return "personal/sign";
	}
	
	/**
	 * 
	 * 功能描述：积分记录
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/getScoreRecord.html")
	public String getScoreRecord(HttpServletRequest request) {
		BigInteger userId = (BigInteger)((Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO)).get("userId");
		List<Map<String, Object>> scoreRecord =  this.personalService.findScoreChangeRecords(userId.toString());
		request.setAttribute("scoreRecord", scoreRecord);
		return "personal/scoreRecord";
	}

	/**
	 * 
	 * 功能描述：问题反馈
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/feedback.html")
	public String feedback() {

		return "personal/feedback";
	}

	/**
	 * 
	 * 功能描述：培训咨询
	 * 
	 * @author ：余冬平 创建日期 ：2014年12月24日 上午10:16:59
	 * 
	 * @return
	 * 
	 *         修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	@RequestMapping(value = "/train.html")
	public String train(HttpServletRequest request) {
         request.setAttribute("trainInfo", this.personalService.getIntroductionInfo("1"));
		return "personal/train";
	}

	/**
	 * 内容反馈提交
	 * 
	 * @param tagName
	 * @return
	 */
	@RequestMapping(value = "/submitFeedBack.html")
	@ResponseBody
	public Map<String, Object> submitFeedBack(
			@RequestParam Map<String, Object> reqMap, HttpServletRequest request) {
		String context = reqMap.get("context").toString();
		Map<String, Object> userInfo = (Map<String, Object>) request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
		return this.personalService.saveFeedBack(context, userInfo);
	}
	
	/**
	 * 签到
	 * 
	 * @param tagName
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping(value = "/submitSign.html")
	@ResponseBody
	public Map<String, Object> submitSign(
			@RequestParam Map<String, Object> reqMap, HttpServletRequest request) throws UnsupportedEncodingException {
		String courseId = reqMap.get("courseId").toString();
		String courseName = new String(reqMap.get("courseName").toString().getBytes("ISO-8859-1"), "UTF-8");
		Map<String, Object> userInfo = (Map<String, Object>) request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
		Map<String, Object> result = this.personalService.saveSign(courseId, courseName,userInfo);
		int score =(int)userInfo.get("score");
		if("0".equals(result.get("resultCode"))){
			userInfo.put("score", score+100);
			request.getSession().setAttribute(Constant.LOGIN_USER_INFO, userInfo);
		}
		return result;
	}
	
	/**
	 * 签到
	 * 
	 * @param tagName
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping(value = "/submitScoreExchange.html")
	@ResponseBody
	public String submitScoreExchange(
			@RequestParam Map<String, Object> reqMap, HttpServletRequest request) throws UnsupportedEncodingException {
		String info = reqMap.get("info").toString();
		Map<String, Object> userInfo = (Map<String, Object>) request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
		Object name = userInfo.get("name");
		Object city = userInfo.get("city");
		if(name==null||"".equals(name)||city==null||"".equals(city)){
			return "3";
		}
		try {
			int score = this.personalService.doApplyScoreChange(info, userInfo);
			if(score<0){
				return "2";
			}
			userInfo.put("score", score);
			request.getSession().setAttribute(Constant.LOGIN_USER_INFO, userInfo);
		} catch (Exception e) {
			// TODO: handle exception
			return "1";
		}
		return "0";
	}
	
	/**
	 * 更新个人信息
	 * 
	 * @param tagName
	 * @return
	 */
	@RequestMapping(value = "/modifyPersonalInfo.html")
	@ResponseBody
	public Map<String, Object> modifyPersonalInfo(
			@RequestParam Map<String, Object> reqMap, HttpServletRequest request) {
		Map<String, Object> userInfo = (Map<String, Object>) request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
		BigInteger id = (BigInteger)userInfo.get("id");
		if(reqMap.containsKey("name")){
			userInfo.put("name", reqMap.get("name"));
			userInfo.put("nickname", reqMap.get("nickname"));
			userInfo.put("school", reqMap.get("school"));
			userInfo.put("grade", reqMap.get("grade"));
			userInfo.put("address", reqMap.get("address"));
			userInfo.put("area", reqMap.get("area"));
			request.getSession().setAttribute(Constant.LOGIN_USER_INFO, userInfo);
		}
		return this.personalService.updateUserInfo(id, reqMap);
	}
	
    /**
     * 修改头像
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/modifyUserImg.html", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> modifyUserImg(@RequestParam Map<String, Object> reqMap,HttpServletRequest request) throws Exception {
    	Map<String, Object> result = new HashMap<>();
    	String base64Str = reqMap.get("img").toString();
    	Map<String, String> map = FileOperateUtil.GenerateImage(base64Str, request);
    	Map<String, Object> userInfo = (Map<String, Object>) request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
		BigInteger id = (BigInteger)userInfo.get("userId");
    	try {
           this.personalService.doModifyUserImg(String.valueOf(id), map.get("url"));	
           result.put("code", "0");
           result.put("msg", map.get("url"));
           userInfo.put("img", map.get("url"));
           request.setAttribute(Constant.LOGIN_USER_INFO, userInfo);
		} catch (Exception e) {
	        result.put("code", "1");
		}
    	return result;
    }
    
    /**
     * 获取评论列表
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getMessageList.html", method = RequestMethod.POST)
    @ResponseBody
    public List<Map<String, Object>> getMessageList(@RequestParam Map<String, Object> reqMap,HttpServletRequest request) throws Exception {
    	String uv = reqMap.get("uv").toString();
    	try {
    		return this.personalService.loadMessageList(uv);
    	} catch (Exception e) {
    		return null;
    	}
    }
    /**
     * 保存评论
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/sendComment.html", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> sendComment(@RequestParam Map<String, Object> reqMap,HttpServletRequest request) throws Exception {
    	Map<String, Object> result = new HashMap<>();
    	String message = reqMap.get("message").toString();
    	String uv = reqMap.get("uv").toString();
    	Map<String, Object> userInfo = (Map<String, Object>) request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
    	BigInteger id = (BigInteger)userInfo.get("userId");
    	try {
            this.personalService.saveMessage(id, message,uv);
            result.put("code", "0");
    	} catch (Exception e) {
    		result.put("code", "1");
    	}
    	return result;
    }
}
