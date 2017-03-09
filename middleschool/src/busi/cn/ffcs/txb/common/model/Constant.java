package cn.ffcs.txb.common.model;

public final  class Constant {
	
    // 直播活动信息查询接口
    public static final String LE_SEARCH = "lecloud.cloudlive.activity.search";
    //获取直播地址
    public static final String LIVEURL = "lecloud.cloudlive.activity.playerpage.getUrl";
	/**
	 * 教师账户状态
	 */
    //全部状态
    public static final String EXCHANGE_ALL ="1503";
	//全部状态
	public static final String TEACHER_ACCOUNT_ALL ="1700";
    //未审核
	public static final String TEACHER_ACCOUNT_UNCHECK= "1701";
	//已审核
	public static final String TEACHER_ACCOUNT_CHECK= "1702";
	//已锁定
	public static final String TEACHER_ACCOUNT_LOCK= "1703";
	

	/**
	 * 运营商
	 */
	//移动
	public static final String YYS_YIDONG= "1401";
	//联通
	public static final String YYS_LIANTONG= "1402";
	//电信
	public static final String YYS_DIANXIN= "1400";
	//全部
	public static final String YYS_All= "1403";
	
	
	//题目类型
	//新题
	public static final String TOPIC_NEW= "1";
	public static final String TOPIC_OLD= "0";
	/**
	 * 积分流量操作状态
	 */
	//未操作
	public static final String SF_WCZ= "1500";
	//已操作
	public static final String SF_YCZ= "1501";
	//回退
	public static final String EXCHANGE_YCZ= "1502";
	//兑换成功
	public static final String EXCHANGE_All= "1503";
	
	/**
	 * 前台用户类型
	 */
	//学生类型
	public static final String USER_TYPE_ST = "0";
	//教师类型
	public static final String USER_TYPE_TE = "1";
	
	/**
	 * 城市全部
	 */
	public static final String CITY_All = "1813";
	
	/**
	 * 艺考类型
	 */
	public static final String ART_All = "1909";
	/**
	 * 艺考类型
	 */
	public static final String GRADE_All = "1G06";
	
	/**
	 * 培训学校
	 */
	public static final String TSCHOOL_All = "1A48";
	
	/**
	 * 用户类型
	 */
	public static final String USERTYPE_All = "1700";
	
	/**
	 * 答题正确
	 */
	public static final String ANSWERSTATUS_All = "1D02";
	
	/**
	 * 科目全部
	 */
	public static final String SUBJECT_All = "全部";
	/**
	 * 物品全部
	 */
	public static final String PRODUCT_All = "1J02";
	/**
	 * 物品上架
	 */
	public static final String PRODUCT_UP = "1J00";
	/**
	 * 物品下架
	 */
	public static final String PRODUCT_DOWN = "1J01";
	
	
	/**
	 * 成功失败状态码
	 */
	public static final String SUCC_CODE ="0";
	public static final String FAIL_CODE ="1";
	
	/**
	 * 用户类型
	 */
	public static final String DIC_USERTYPE_STUDENT ="1601";
	public static final String DIC_USERTYPE_TEACHER ="1600";
	
	/**
	 * 短信验证码
	 */
	public static final String SMS_CODE ="SMS_CODE";
	/**
	 * 登录失败次数
	 */
	public static final String LOGIN_ERR_COUNT ="LOGIN_ERR_COUNT";
	/**
	 * 登录验证码
	 */
	public static final String LOGIN_VAl_CODE ="LOGIN_VAl_CODE";
	/**
	 * 用户信息KEY
	 */
	public static final String LOGIN_USER_INFO ="LOGIN_USER_INFO";
	/**
	 * 题目信息
	 */
	public static final String TOPICINFO ="TOPICINFO";
	
	/**
	 * 融云appKey
	 */
	public static final String RONG_APPKEY ="uwd1c0sxdd2v1";
	/**
	 * 融云秘钥
	 */
	public static final String RONG_SECRET ="gTmafVxRTffqF";
	
    /**
     * 乐视云
     */
	public static final String LE_USER_UNIQUE = "d7sypmh13c";
	
	public static final String LE_USER_ID = "859647";
    /**
     * 乐视云
     */
	public static final String LE_SECRET = "05983db82dc7d4e9d9486c03735dd51a";
	/**
	 * http状态码
	 */
	public static final int HTTP_SUCC =200;
	
	/**
	 * 阿里大于
	 */
	public static final String ALIDAYU_APPKEY = "23444363";
	
	public static final String ALIDAYU_SECRET = "19d7b36bed072db802031570fa9ae291";
	
	public static final String ALIDAYU_URL = "http://gw.api.taobao.com/router/rest";
	
	/**
	 * 短信签名
	 */
	public static final String ALIDAYU_SIGNNAME_PWDCHANGE = "变更验证";
	
	public static final String ALIDAYU_SIGNNAME_REGISTER = "注册验证";
	
	/**
	 * 短信模板id
	 */
	public static final String ALIDAYU_TEMPALTE_PWDCHANGE = "SMS_13745470";
	
	public static final String ALIDAYU_TEMPALTE_REGISTER = "SMS_13745472";
	
	public static final String PRODUCT_NAME = "思明E学";
	
	/**
	 * 积分变动类型
	 */

	public static final String SCORE_CHANGE_TYPE_SING ="1E00";
	
	public static final String SCORE_CHANGE_TYPE_FLOWEXCHANGE ="1E01";
	
	public static final String SCORE_CHANGE_TYPE_BRUSH ="1E02";
	
	/**
	 * 答题状态
	 */
   public static final String TOPIC_STATUS_RIGHT = "1D00";
   
   public static final String TOPIC_STATUS_ERROR = "1D01";
   
   /**
    * 题目集合key
    */
   public static final String TOPIC_LIST_KEY = "topic_list_key";

   //性别
   public static final String SEX_BOY = "1M00";
   public static final String SEX_GIRl = "1M01";
   
	
}
