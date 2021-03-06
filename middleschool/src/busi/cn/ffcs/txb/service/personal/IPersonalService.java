/**
 * IOpthisService.java	  V1.0   2014年7月18日 上午11:03:40
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.personal;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;

import cn.ffcs.txb.entity.Exchange;
import cn.ffcs.txb.entity.Product;

/**
 * 功能描述：
 *
 * @author ：余冬平
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public interface IPersonalService {
	/**
	 * 用户注册
	 * @return
	 */
	Map<String, Object> saveUser(Map<String, Object> userInfo);
	/**
	 * 用户登录
	 */
	Map<String, Object> checkLoginInfo(String username,String password,String ipAddr);
	/**
	 * 获取字典信息
	 */
	List<Map<String, Object>> findDictionaryInfoByCode(String code,String type);
	/**
	 * 保存用户扩展表
	 * @param userInfo
	 * @return
	 */
	int saveUserExpand(Map<String, Object> userInfo);
	/**
	 * 判断用户是否存在
	 * @param username
	 * @return
	 */
	boolean isExistUserNameOrTel(String username);
	/**
	 * 重置密码
	 * @param tel
	 * @param newPwd
	 * @return
	 */
	int updateUserPwd(String tel,String newPwd);
	/**
	 * 保存反馈信息
	 * @param context
	 * @param userinfo
	 * @return
	 */
	Map<String, Object> saveFeedBack(String context,Map<String, Object> userinfo);
	
	/**
	 * 获取字典信息
	 */
	List<Map<String, Object>> findSignInfo(String userId,String startTime,String endTime);
	/**
	 * 获取个人信息
	 * @param userId
	 * @return
	 */
	Map<String, Object> findUserInfo(String userId);
	/**
	 * 获取个人信息
	 * @param userId
	 * @return
	 */
	Map<String, Object> findUserInfoForTeacher(String userId);
	/**
	 * 获取未审核学生信息
	 */
	List<Map<String, Object>> findUnPassStuInfo(String tel);
	
	/**
	 * 保存反馈信息
	 * @param context
	 * @param userinfo
	 * @return
	 */
	Map<String, Object> updateCheckStudentInfo(String userIds);
	/**
	 * 签到
	 * @param context
	 * @param userinfo
	 * @return
	 */
	Map<String, Object> saveSign(String course_id,String name,Map<String, Object> userinfo);
	/**
	 * 签到
	 * @param context
	 * @param userinfo
	 * @return
	 */
	int doApplyScoreChange(String info,Map<String, Object> userinfo);
	/**
	 * 判断用户是否存在
	 * @param username
	 * @return
	 */
	boolean isExistSignInfo(BigInteger userId,String courseId);
	
	/**
	 * 判断聊天室是否存在且在用
	 */
	Map<String, Object> isExistChatRoom(String courseId);
	
	/**
	 * 保存创建的聊天室
	 * @param userInfo
	 * @return
	 */
	Map<String, Object> saveChatRoomInfo(String targetId,String name);
	/**
	 * 签到
	 * @param context
	 * @param userinfo
	 * @return
	 */
	Map<String, Object> updateUserInfo(BigInteger userId,Map<String, Object> userInfo);
	
	/**
	 * 获取积分变化情况
	 * @param userId
	 * @return
	 */
	List<Map<String, Object>> findScoreChangeRecords (String userId);
	/**
	 * 新增答题记录
	 * 
	 */
	int doBrushTopic(Map<String, Object> userInfo,Map<String, Object> topicInfo); 
	/**
	 * 查询教师为审核的学生数
	 */
	List<Map<String, Object>> getUnCheckedStudentInfo(String tel);
	/**
	 * 获取用户当前排名情况
	 * @return
	 */
	Map<String, Object> getUserOrderInfo(String userId,String startTime,String endTime);
	
	void doModifyUserImg(String userId,String imgUrl);
	
	int findTodayRightTopicCount(String userId,String startTime,String endTime);
	
	List<Map<String, Object>> getErrorTopicList(String userId,String type);
	
	List<Map<String, Object>> getErrorTopicList(String userId,String courseName,String type);
	
	List<Map<String, Object>> loadMessageList(String course_id);
	
	List<Map<String, Object>> loadTopicList(String subjectId,String userId,String courseName);
	
	void saveMessage(BigInteger userId,String message,String course_id);
	
	int getChangeScore(BigInteger userId);
	
	List<Map<String, Object>> loadErrorTopicList(String subjectId);
	
	List<Map<String, Object>> listAdvertisement();
	
	List<Map<String, Object>> getSchoolInfos(String code,String city);
	
	Map<String, Object> getIntroductionInfo(String type);
	
	List<Map<String, Object>> loadTopicList(String subjectId, String paperid);
	// 用户申请积分兑换商品
	int doApplyScoreChange(Product prod,Map<String, Object> userinfo,Exchange exchangeParam);
	
	boolean isExistTopicInReport(Map<String, Object> topicInfo,Map<String, Object> userInfo);
	
	List<Map<String, Object>> getTotalTodayBySubject(String subJectId,
			BigInteger userId);
	
	/**
	 * 绑定微信用户信息
	 * @param userExpandId
	 * @param accessToken
	 * @param refreshToken
	 * @param expires_date
	 * @param openid
	 * @param sex
	 * @param nickname
	 * @param province
	 * @param headimgurl
	 * @param city
	 */
	void updateWechatInfoUserInfo(String userExpandId,String accessToken,String refreshToken,String expires_date,String openid,String sex,String nickname,String province,String headimgurl,String city);

	/**
	 * 查询是否绑定微信用户
	 * @param openId
	 * @return
	 */
	boolean existWechatUser(String openId);

	/**
	 * 微信绑定用户登录
	 * @param openId
	 * @param ipAddr
	 * @return
	 */
	public Map<String, Object> checkWechatUserInfo(String openId, String ipAddr);

}
