package cn.ffcs.txb.app.controller.main;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.activiti.engine.impl.util.json.JSONArray;
import org.activiti.engine.impl.util.json.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.siming.wx.WeixinAuth;
import com.taobao.api.ApiException;

import cn.ffcs.srp.util.i18n.GlobalUtil;
import cn.ffcs.txb.common.model.Constant;
import cn.ffcs.txb.common.util.BaseService;
import cn.ffcs.txb.common.util.FileOperateUtil;
import cn.ffcs.txb.common.util.JsonUtil;
import cn.ffcs.txb.common.util.PinyinUtils;
import cn.ffcs.txb.common.util.SmsUtil;
import cn.ffcs.txb.common.util.Util;
import cn.ffcs.txb.common.util.ValidateCode;
import cn.ffcs.txb.service.paper.IPaperService;
import cn.ffcs.txb.service.personal.IPersonalService;

@Controller
@RequestMapping(value = "/appLogin")
public class AppLoginController {
	private static final Logger logger = LoggerFactory.getLogger(AppLoginController.class);
	@Resource
	private IPersonalService  personalService;
	@Resource
	private IPaperService  paperService;
    /**
     * 
     * 功能描述：初始化登录页面
     *
     * @author ：余冬平
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/initLogin.html")
    public String initLogin(){
        return "main/login";
    }
    @RequestMapping(value="/advertisementPage.html")
    public String advertisementPage(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request){
    	request.setAttribute("url", reqMap.get("url"));
    	return "main/advertisementPage";
    }
    /**
     * 
     * 功能描述：初始化登录页面
     *
     * @author ：余冬平
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/main.html")
    public String showUpdatePwd(){
    	return "main/main";
    }
    /**
     * 
     * 功能描述：初始化登录页面
     *
     * @author ：余冬平
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     * @throws Exception 
     */
    @RequestMapping(value="/index.html")
    public String index(HttpServletRequest request) throws Exception{
    	Map<String, Object> userInfo = (Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
    	if(userInfo!=null){
        	String result  =  BaseService.doGet(GlobalUtil.getValue("topic_get_category"));
        	JSONObject  json = new JSONObject(result);
        	if("ok".equals(json.get("status"))){
        		List<Map<String, Object>> data = JsonUtil.parseToListMap(json.getJSONArray("data"));
        		for(Map<String, Object> map:data){
        			if("小学".equals(map.get("label"))){
        				JSONArray array = new JSONArray(map.get("children").toString());
        			    for(int i=0;i<array.length();i++){
        			    	List<Map<String, Object>> paperdata = this.paperService.getPaperInfoBySubjectId(array.getJSONObject(i).get("id").toString(),userInfo.get("userId"));
        			    	request.setAttribute(PinyinUtils.getPinYinHeadChar(array.getJSONObject(i).get("label").toString()), paperdata);
        			    }
        			}
        		}
        		request.setAttribute("subject",data); 
        	}
        	Object object = request.getSession().getAttribute(Constant.TOPICINFO);
        	if(object!=null)
        	   request.setAttribute("hasTopic", "1");
        	else
        	   request.setAttribute("hasTopic", "0");
        	
    	}else{
        	String result  =  BaseService.doGet(GlobalUtil.getValue("topic_get_category"));
        	JSONObject  json = new JSONObject(result);
        	if("ok".equals(json.get("status"))){
        		List<Map<String, Object>> data = JsonUtil.parseToListMap(json.getJSONArray("data"));
        		for(Map<String, Object> map:data){
        			if("小学".equals(map.get("label"))){
        				JSONArray array = new JSONArray(map.get("children").toString());
        			    for(int i=0;i<array.length();i++){
        			    	List<Map<String, Object>> paperdata = this.paperService.getPaperInfoBySubjectId(array.getJSONObject(i).get("id").toString());
        			    	request.setAttribute(PinyinUtils.getPinYinHeadChar(array.getJSONObject(i).get("label").toString()), paperdata);
        			    }
        			}
        		}
        		request.setAttribute("subject",data); 
        	}
    	}	
    	
    	//广告信息
    	request.setAttribute("advertisement", this.personalService.listAdvertisement());
    	Integer wechatFlag = FileOperateUtil.getWechatFlag();
    	if (wechatFlag == 0) {
    	//绑定微信openid
		if("bind".equals(request.getParameter("type"))) {
			String code = request.getParameter("code");
			Map<String,String> result = WeixinAuth.getUserInfoAccessToken(code);
			String openId = result.get("openid");
			if (StringUtils.isNotEmpty(openId)) {
				logger.info("try getting user info. [openid={}]", openId);
				Map<String, String> wechatuserInfo = WeixinAuth.getUserInfo(result.get("access_token"), openId);//使用access_token获取用户信息
				logger.info("received user info. [result={}]", wechatuserInfo);
				Calendar cal = Calendar.getInstance();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
				cal.add(Calendar.HOUR,2);
                personalService.updateWechatInfoUserInfo(userInfo.get("id").toString(),result.get("access_token"),
						result.get("refresh_token"),sdf.format(cal.getTime()),
						openId,wechatuserInfo.get("sex"),
                        wechatuserInfo.get("nickname"),wechatuserInfo.get("province"),
                        wechatuserInfo.get("headimgurl"),wechatuserInfo.get("city")
                );
				return "main/index_student";
			}
		}
    	//end 绑定微信openid
    	}
    	return "main/index_student";
    }
    
    /**
     * 登录
     * @param tagName
     * @return
     */
	@RequestMapping(value = "/login.html")
	@ResponseBody
	public Map<String, Object> login(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request) {
		
		String username = reqMap.get("username").toString();
		String password = reqMap.get("password").toString();
		String code = reqMap.get("code").toString();
		String ipAddr = Util.getIpAddr(request);
		int errorCount = request.getSession().getAttribute(Constant.LOGIN_ERR_COUNT)==null?0:(int)request.getSession().getAttribute(Constant.LOGIN_ERR_COUNT);
		if(errorCount>=5){
			String loginCode  = request.getSession().getAttribute(Constant.LOGIN_VAl_CODE).toString();
			if(!code.equalsIgnoreCase(loginCode)){
				Map<String, Object> result = new HashMap<>();
				result.put("resultCode", "1");
				result.put("resultMsg", "验证输入错误，请重新输入");
				return result;
			}
		}
        //判断当前用户名 手机号是否存在
		Map<String, Object>  userInfo  = personalService.checkLoginInfo(username, password,ipAddr);
		String resultCode = userInfo.get("resultCode").toString();
        if(Constant.SUCC_CODE.equals(resultCode)){
            String status =userInfo.get("status").toString();
            if("1703".equals(status)){
            	Map<String, Object> result = new HashMap<>();
				result.put("resultCode", "1");
				result.put("resultMsg", "此账户被冻结,暂无法登陆");
				return result;
            }
    		HttpSession session = request.getSession();
    		session.setAttribute("sessionId", session.getId());
    		session.setAttribute(Constant.LOGIN_USER_INFO, userInfo);
    		request.getSession().removeAttribute(Constant.LOGIN_VAl_CODE);
    		
        	Integer wechatFlag = FileOperateUtil.getWechatFlag();
        	if (wechatFlag == 0) {
    		// 绑定微信openid
    		String bind_code = request.getParameter("bind_code");
			if( bind_code != null && !"".equals(bind_code) ){
				if(userInfo.get("wechat_openid") == null || "".equals(userInfo.get("wechat_openid"))){
                    Map<String,String> result = WeixinAuth.getUserInfoAccessToken(code);
                    String openId = result.get("openid");
                    if (StringUtils.isNotEmpty(openId)) {
                        logger.info("try getting user info. [openid={}]", openId);
                        Map<String, String> wechatuserInfo = WeixinAuth.getUserInfo(result.get("access_token"), openId);//使用access_token获取用户信息
                        logger.info("received user info. [result={}]", userInfo);
						Calendar cal = Calendar.getInstance();
						SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
						cal.add(Calendar.HOUR,2);
                        personalService.updateWechatInfoUserInfo(userInfo.get("id").toString(),wechatuserInfo.get("access_token"),
                                                                wechatuserInfo.get("refresh_token"),sdf.format(cal.getTime()),
                                                                wechatuserInfo.get("openid"),wechatuserInfo.get("sex"),
                                                                wechatuserInfo.get("nickname"),wechatuserInfo.get("wechat_province"),
                                                                wechatuserInfo.get("wechat_headimgurl"),wechatuserInfo.get("wechat_city")
                                                                );

                    }
				}
			}
			userInfo.remove("resultCode");
			userInfo.remove("resultMsg");
			userInfo.put("resultCode","2");
			userInfo.put("resultMsg", getRequestCodeUrl(FileOperateUtil.getDomainPath()+"/appLogin/index.html?type=bind"));
			// end 绑定微信openid
        	}
        }else{
        	request.getSession().setAttribute(Constant.LOGIN_ERR_COUNT, errorCount+1);
        	userInfo.put("errCount", errorCount+1);
        }
        userInfo.remove("password");
		return userInfo;
	}
	
	/**
	 * 获取字典信息
	 * @param tagName
	 * @return
	 */
	@RequestMapping(value = "/getDictionaryByCode.html")
	@ResponseBody
	public List<Map<String, Object>> getDictionaryByCode(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request) {
		String code = reqMap.get("code").toString();
		return this.personalService.findDictionaryInfoByCode(code,"0");
	}
	
	@RequestMapping(value = "/getSchoolInfo.html")
	@ResponseBody
	public List<Map<String, Object>> getSchoolInfo(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request) {
		String code = reqMap.get("code")==null?"":reqMap.get("code").toString().trim();
		String city = reqMap.get("city")==null?"":reqMap.get("city").toString().trim();
		return this.personalService.getSchoolInfos(code,city);
	}
	
	/**
	 * 用户注册
	 * @param tagName
	 * @return
	 */
	@RequestMapping(value = "/registry.html")
	@ResponseBody
	public Map<String, Object> registry(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request) {
		String userImg = reqMap.get("img").toString();
		String checkCode = reqMap.get("checkCode").toString();
		String sms_code = request.getSession().getAttribute(Constant.SMS_CODE).toString();
		String ipAddr = Util.getIpAddr(request);
		if(!sms_code.equals(checkCode)){
			Map<String, Object> result =new HashMap<>();
			result.put("resultCode", "1");
			result.put("resultMsg", "短信验证码有误,请重新获取");
			return result;
		}
		if(userImg.indexOf("base64")>0){
			Map<String, String> map = FileOperateUtil.GenerateImage(userImg, request);
			reqMap.put("img",map.get("url"));
		}else{
			if(Constant.SEX_BOY.equals(reqMap.get("sex").toString())){
				reqMap.put("img",GlobalUtil.getValue("netfilepath")+"boy.png");
			}else{
				reqMap.put("img",GlobalUtil.getValue("netfilepath")+"girl.png");
			}
		}
		Map<String, Object> result = this.personalService.saveUser(reqMap);
		Map<String, Object>  userInfo  = personalService.checkLoginInfo(reqMap.get("username").toString(), reqMap.get("pwd").toString(),ipAddr);
		if("0".equals(result.get("resultCode"))){
    		HttpSession session = request.getSession();
    		session.setAttribute("sessionId", session.getId());
    		session.setAttribute(Constant.LOGIN_USER_INFO, userInfo);
    		request.getSession().removeAttribute(Constant.LOGIN_VAl_CODE);
		}
		return result;
	}
	
	/**
	 * 用户注册
	 * @param 获取手机验证码
	 * @return
	 * 1:用户注册
	 * 2:忘记密码
	 */
	@RequestMapping(value = "/getTelCode.html")
	@ResponseBody
	public Map<String, Object> getTelCode(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request) {
		Map<String, Object> result = new HashMap<String, Object>();
		String tel = reqMap.get("tel").toString();
		String type = reqMap.get("type").toString();
		boolean flag = this.personalService.isExistUserNameOrTel(tel);
		Map<String , Object> paramsMap = new HashMap<>();
		if("1".equals(type)){
			if(flag){
				result.put("resultCode", "1");
				result.put("resultMsg", "该手机号码已经注册！");
			}else{
				//短信发送
				String code = Util.createRandom(true, 4);
				paramsMap.put("code", code);
				paramsMap.put("product", Constant.PRODUCT_NAME);
				try {
					boolean success = SmsUtil.sendSMS(Constant.ALIDAYU_SIGNNAME_REGISTER, new JSONObject(paramsMap).toString(), tel, Constant.ALIDAYU_TEMPALTE_REGISTER);
					if(!success){
						result.put("resultCode", "1");
						result.put("resultMsg", "短信验证码发送失败");
						return result;
					}
				} catch (ApiException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					result.put("resultCode", "1");
					result.put("resultMsg", "短信验证码发送失败");
					return result;
				}
				request.getSession().setAttribute(Constant.SMS_CODE, code);
				System.out.println(code);
				result.put("resultCode", "0");
				result.put("resultMsg", "短信发送成功");
			}
		}else if("2".equals(type)){
			if(flag){
				//短信发送
				String code = Util.createRandom(true, 4);
				paramsMap.put("code", code);
				paramsMap.put("product", Constant.PRODUCT_NAME);
				try {
					boolean success = SmsUtil.sendSMS(Constant.ALIDAYU_SIGNNAME_PWDCHANGE, new JSONObject(paramsMap).toString(), tel, Constant.ALIDAYU_TEMPALTE_PWDCHANGE);
					if(!success){
						result.put("resultCode", "1");
						result.put("resultMsg", "短信验证码发送失败");
						return result;
					}
				}catch (ApiException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					result.put("resultCode", "1");
					result.put("resultMsg", "短信验证码发送失败");
					return result;
				}
				request.getSession().setAttribute(Constant.SMS_CODE, code);
				System.out.println(code);
				result.put("resultCode", "0");
				result.put("resultMsg", "短信发送成功");
			}else{
				result.put("resultCode", "1");
				result.put("resultMsg", "该手机号码未注册！");
			}
		}
		return result;
	}
	/**
	 * 判断注册用户名是否已经存在
	 * @param tagName
	 * @return
	 */
	@RequestMapping(value = "/checkUserName.html")
	@ResponseBody
	public Map<String, Object> checkUserName(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request) {
		Map<String, Object> result = new HashMap<String, Object>();
		String username = reqMap.get("username").toString();
		String code = reqMap.get("code").toString();
		String smsCode = request.getSession().getAttribute(Constant.SMS_CODE)==null?"":request.getSession().getAttribute(Constant.SMS_CODE).toString();
		if(!code.equals(smsCode)){
			result.put("resultCode", "1");
			result.put("resultMsg", "验证码错误，请重新输入");
			return result;
		}
		boolean flag = this.personalService.isExistUserNameOrTel(username);
		if(flag){
			result.put("resultCode", "1");
			result.put("resultMsg", "该用户名已经被注册！");
		}else{
			result.put("resultCode", "0");
		}
		return result;
	}
	
	/**
	 * 重置密码
	 * @param tagName
	 * @return
	 */
	@RequestMapping(value = "/reSetPwd.html")
	@ResponseBody
	public Map<String, Object> reSetPwd(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request) {
		Map<String, Object> result = new HashMap<String, Object>();
		String tel = reqMap.get("tel").toString();
		String code = reqMap.get("code").toString();
		String newPwd = reqMap.get("newPwd").toString();
		String smsCode = request.getSession().getAttribute(Constant.SMS_CODE)==null?"":request.getSession().getAttribute(Constant.SMS_CODE).toString();
		if(code.equals(smsCode)){
			request.getSession().removeAttribute(Constant.SMS_CODE);
			int rows = this.personalService.updateUserPwd(tel, newPwd);
			if(rows!=0){
				result.put("resultCode", "0");
				result.put("resultMsg", "密码重置成功");
			}else{
				result.put("resultCode", "1");
				result.put("resultMsg", "密码重置失败,请联系管理员！");
			}
		}else{
			result.put("resultCode", "1");
			result.put("resultMsg", "短信验证码有误,请重新获取");
		}
		return result;
	}
	
	/**
	 * 获取验证码
	 * @return
	 * @throws IOException 
	 */
    @RequestMapping(value="/getValidateCode.html")
    public void getValidateCode(HttpServletRequest reqeust,HttpServletResponse response) throws IOException{
    	 // 设置响应的类型格式为图片格式  
        response.setContentType("image/jpeg");  
        //禁止图像缓存。  
        response.setHeader("Pragma", "no-cache");  
        response.setHeader("Cache-Control", "no-cache");  
        response.setDateHeader("Expires", 0);  
        HttpSession session = reqeust.getSession();  
        ValidateCode vCode = new ValidateCode(112,47,4,100);  
        session.setAttribute(Constant.LOGIN_VAl_CODE, vCode.getCode());  
        vCode.write(response.getOutputStream());  
    }
    
    /**
     * 忘记密码
     * @return
     */
    @RequestMapping(value="/forgetPassword.html")
    public String forgetPassword(){
    	
        return "main/forgetPassword";
    }
    
    /**
     * 用户注册
     * @return
     */
    @RequestMapping(value="/userRegistry.html")
    public String userRegistry(){
    	
    	return "main/userRegistry";
    }
    
    /**
     * 注销
     */
    /**
     * 用户注册
     * @return
     */
    @RequestMapping(value="/cancel.html")
    public String cancel(HttpServletRequest reqeust,HttpServletResponse response){
    	reqeust.getSession().removeAttribute(Constant.LOGIN_USER_INFO);
    	reqeust.getSession().removeAttribute("sessionId");
    	return "main/login";
    }
    
    @RequestMapping(value="/checkCurrentUserIsLogin.html")
    @ResponseBody
    public boolean checkCurrentUserIsLogin(HttpServletRequest reqeust,HttpServletResponse response){
    	Map<String, Object> userInfo = (Map<String, Object>)reqeust.getSession().getAttribute(Constant.LOGIN_USER_INFO);
    	if(userInfo!=null){
    		return true;
    	}
    	return false;
    }
    @RequestMapping(value="/getAdvertisementList.html")
    @ResponseBody
    public List<Map<String,Object>> getAdvertisementList(HttpServletRequest reqeust,HttpServletResponse response){
        return this.personalService.listAdvertisement();
    }
    
    @RequestMapping(value="/getTopicResult.html")
    public String getTopicResult(HttpServletRequest request,HttpServletResponse response){
    	Map<String, Object> topicInfo =(Map<String, Object>)request.getSession().getAttribute(Constant.TOPICINFO);
		Map<String, Object> userInfo =(Map<String, Object>) request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
    	try {
    		    boolean falg = this.personalService.isExistTopicInReport(topicInfo,userInfo);
    		    if(falg){
    		    	request.setAttribute("isExist", "1");
    		    }else{
    		    	request.setAttribute("isExist", "0");
    		    }
    			request.setAttribute("topicInfo", topicInfo);
    			request.removeAttribute("hasTopic");
    			request.getSession().removeAttribute(Constant.TOPICINFO);
    			return "main/tmdetail";
    	} catch (Exception e) {
    		e.printStackTrace(); 
    		return "error";
    	}
    }
    //一天题目已经刷完
    @RequestMapping(value="/topicover.html")
    public String topicover(){
        return "main/topicover";
    }
    
    /**
     * 微信重定向带code过来的请求
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value="/subscribe.html")
    public String subscribe(HttpServletRequest request,HttpServletResponse response){
		String code = request.getParameter("code");
		String redirect_url = request.getParameter("redirect_url");
		redirect_url = redirect_url== null?"":redirect_url;

		if(code==null || "".equals(code)){
			code = "";
		}else{//检测是否已经绑定用户
            Map<String,String> result = WeixinAuth.getUserInfoAccessToken(code);
            String openId = result.get("openid");
            Map<String,Object> userInfo = null;
			if(openId!=null){
				if(!personalService.existWechatUser(openId)){//未绑定用户,添加用户信息
						if (StringUtils.isNotEmpty(openId)) {
							userInfo = (Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO);

							if(userInfo==null) return "redirect:/appLogin/index.html";
							logger.info("try getting user info. [openid={}]", openId);
							Map<String, String> wechatuserInfo = WeixinAuth.getUserInfo(result.get("access_token"), openId);//使用access_token获取用户信息
							logger.info("received user info. [result={}]", userInfo);
							Calendar cal = Calendar.getInstance();
							SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
							cal.add(Calendar.HOUR,2);
							personalService.updateWechatInfoUserInfo(userInfo.get("id").toString(),result.get("access_token"),
									result.get("refresh_token"),sdf.format(cal.getTime()),
									result.get("openid"),wechatuserInfo.get("sex"),
									wechatuserInfo.get("nickname"),wechatuserInfo.get("province"),
									wechatuserInfo.get("headimgurl"),wechatuserInfo.get("city")
							);
						}
				}
				//已绑定用户
				userInfo = personalService.checkWechatUserInfo(openId,Util.getIpAddr(request));
				if(userInfo.get("wechat_openid")==null) return "main/login";
				HttpSession session = request.getSession();
				session.setAttribute("sessionId", session.getId());
				session.setAttribute(Constant.LOGIN_USER_INFO, userInfo);
				request.getSession().removeAttribute(Constant.LOGIN_VAl_CODE);
				/*
				String userType = userInfo.get("account_non_locked")==null?"":userInfo.get("account_non_locked").toString();
				if(Constant.USER_TYPE_TE.equals(userType)){
					if(!"".equals(redirect_url))
						return "redirect:"+redirect_url;
					else
						return "main/index_teacher";
				}
				*/
				if(!"".equals(redirect_url)){
					return "redirect:"+redirect_url;
				}else
					return "main/index_student";

            }
        }
        return "main/login";
		//return "main/login.html?type=bind&bind_code="+code;
	}
    
	/**
	 * 生成用于获取access_token的Code的Url
	 *
	 * @param redirectUrl
	 * @return
	 */
	public  String getRequestCodeUrl(String redirectUrl) {
		try {
			String url =  URLEncoder.encode(redirectUrl,"UTF-8");
			return String.format("https://open.weixin.qq.com/connect/oauth2/authorize?appid=%s&redirect_uri=%s&response_type=code&scope=%s&state=%s#wechat_redirect",
                    GlobalUtil.getValue("APPID"),url, "snsapi_userinfo", "bind_state");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "";
	}
	
    /**
     * 用户注册后绑定微信登录
     * 微信绑定的菜单：http://e.i3ke.com/appLogin/wxlogin.html?redirect_url=/appLogin/index.html
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "/wxlogin.html")
    public String wxLogin(HttpServletRequest request,HttpServletResponse response){
    	Integer wechatFlag = FileOperateUtil.getWechatFlag();
    	if (wechatFlag == 1) {
    		//重定向
    		try {
				request.getRequestDispatcher("/appLogin/index.html").forward(request, response);
			} catch (ServletException | IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    	}
		Map<String, Object> userInfo = (Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO);
		String redirect_url = request.getParameter("redirect_url");
		redirect_url = redirect_url== null?"/appLogin/index.html":redirect_url;
		String domainPath = FileOperateUtil.getDomainPath();
		if(userInfo!=null){
			if(userInfo.containsKey("openId"))//已绑定微信
				return "/index.html";
			else//未绑定微信
				return "redirect:" +getRequestCodeUrl(domainPath+"/appLogin/subscribe.html?redirect_url="+redirect_url);//调用微信接口，返回code
		}else{
			return "redirect:" + getRequestCodeUrl(domainPath+"/appLogin/subscribe.html?redirect_url="+redirect_url);
		}
	}
}
