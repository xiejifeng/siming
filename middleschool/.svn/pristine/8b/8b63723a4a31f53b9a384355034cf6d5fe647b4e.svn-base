$(function(){
	/**
	* 扩展验证规则
	*/
	$.extend($.fn.validatebox.defaults.rules, {  
		/**
		 * 限制字符最大长度（支持中英文）
		 * @param {Object} value	字符
		 * @param {Object} param	限制最大长度
		 */
		maxlength: {  
		   validator: function(value, param){  
		       return value.length <= param;  
		   },  
		   message: '请输入{0}位以内的字符'  
		},
		
		/**
		 * 电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）
		 * @param {Object} value
		 * @param {Object} element
		 */
		telephone:{
			validator: function(value, element){
				return /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(value);
			},
			message: '电话号码格式不对（3-4位区号，7-8位直拨号码，1－4位分机号）'
		}, 
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
		}
	});  
});