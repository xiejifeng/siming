var regexpCollection = {
	
	/**
	 * 只能输入英文字符、数字或下划线
	 * 
	 * @param {Object}
	 *            value
	 */
	
	only_ennumline : {
		validator : /^\w+$/,
		message : '只能输入英文字符、数字或下划线'
	},
	/**
	 * 只能输入中文字符
	 * 
	 * @param {Object}
	 *            value
	 */
	only_zh : {
		validator : /^([\u4e00-\u9fa5]*)$/,
		message : '只能输入中文字符'
	},
	/**
	 * 验证电话号码（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）
	 * 
	 * @param {Object}
	 *            value
	 */
	telephone : {
		validator : /^0\d{2,3}[-]?\d{7,8}([-]\d{1,4})?$/,
		message : '电话号码格式不正确（以零开头的3-4位区号，7-8位直拨号码，1－4位分机号。如：021-12345678-8）'
	},
	telephone2 : {
		validator : /^0\d{2,3}[-]?\d{7,8}([-]\d{1,4})?$|(1[0-9]{10}?$)/,
		message : '请输入正确电话号码（如：021-12345678-8）或手机号码'
	},
    mobile_phone:{
        validator:/^1[0-9]{10}$/,
        message:'请输入正确的手机号码'
    },
	
	/**
	 * 邮政编码
	 * 
	 * @param {Object}
	 *            value
	 */
	postcode : {
		validator : /[1-9]\d{5}(?!\d)/,
		message : '邮政编码格式不正确'
	},
	
	/**
	 * 身份证号码
	 * 
	 * @param {Object}
	 *            value
	 */
	idNumber : {
		validator : /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
		message : '身份证号码格式不正确'
	},
	
	/**
	 * IP地址
	 * 
	 * @param {Object}
	 *            value
	 */
	ipAddress : {
		validator : /\d+\.\d+\.\d+\.\d+/,
		message : 'IP地址格式不正确'
	},
	
	/**
	 * 匹配正整数
	 * 
	 * @param {Object}
	 *            value
	 */
	zNumber : {
		validator : /^[1-9]\d*$/,
		message : '该项须输入的值为正整数'
	},
	
	/**
	 * 匹配整数
	 * 
	 * @param {Object}
	 *            value
	 */
	number : {
		validator : /^-?[1-9]\d*$/,
		message : '该项须输入的值为整数'
	},
	
	/**
	 * 只能输入数字，不能输入小数点
	 * 
	 * @param {Object}
	 *            value
	 */
	num1 : {
		validator : /^[0-9]*$/,
		message : '只能输入数字（不包含小数点）'
	},
	
	/**
	 * 只能输入数字，能输入小数点
	 * 
	 * @param {Object}
	 *            value
	 */
	num2 : {
		validator : /\d/,
		message : '只能输入数字（包含小数点）'
	},
	
	zh_length:{
		validator:function(value,param){
			var len=lenByByte(value);
			return len >= param[0] && len <= param[1];
		},
		message:'请输入{0}到{1}个字符(1个汉字算2个字符)'
	},
	
	bc_length:{
		validator:function(value,param){
			var len=value.length;
			return len >= param[0] && len <= param[1];
		},
		message:'请输入{0}到{1}个字'
	},
	
	/*
	 * 验证N位数字
	 * */
	num_length:{
		validator:function(value,param){
			var len = lenByByte(value);
			var regExp = new RegExp('[0-9]{'+param[0]+'}');
			return len == param[0] && regExp.test(value);
		},
		message:'请输入{0}位数字的{1}'	
	},
	/*
	 * 验证制定大小范围的数值
	 * */
	num_range:{
		validator:function(value,param){
			return parseFloat(value)>=parseFloat(param[0]) && parseFloat(value)<=parseFloat(param[1]) && !isNaN(value);
		},
		message:'请输入{0}到{1}的正数'
	},
	/**
	 * 验证指定范围的正整数
	 */
	num_zh_range:{
		validator : function(value,param){
			var len = lenByByte(value);
			var regExp = new RegExp('^[1-9][0-9]*$');
			return parseFloat(value)>=parseFloat(param[0]) && parseFloat(value)<=parseFloat(param[1]) && regExp.test(value);
			//
		},
		message:'请输入{0}到{1}的正整数'
	},
	/**
	 * 验证指定范围的可带1-2位小数的整数
	 */
	num_pt_range:{
		validator : function(value,param){
			var len = lenByByte(value);
			var regExp = new RegExp('^[1-9][0-9]*(\.[0-9]{1,2})?$');
			return parseFloat(value)>=parseFloat(param[0]) && parseFloat(value)<=parseFloat(param[1]) && regExp.test(value);
			//
		},
		message:'请输入{0}到{1}的正数（可带最多两位小数）'
	},
	/*
	 * 邮箱验证
	 */
	email:{
		validator:/^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/,
		message:'邮箱格式不正确'
	}
	
};

function lenByByte(str){
	var len = 0;
	for(var i=0; i<$.trim(str).length; i++){
		var alen=escape(str.charAt(i)).length;
		if(alen>=4){
			len = len + 2;
		} else {
			len = len + 1;
		}
	}
	return len;
}

