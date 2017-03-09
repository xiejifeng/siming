/**
 * 商城通用JS封装方法
 *  modified by liusd
 * @author tang 
 */
CommonUtils.regNamespace("ec","util");
/**
 * 工具包
 */
ec.util=(function(){
	
	/**
	 * 显示后台验证错误信息
	 * @param 错误数组
	 */
	var _showErrorsTip=function(errorArray,form){
		var elArray=[];
		if(!form) {
			form=$("body");
		}
		$.each(errorArray,function(i){
			var el=$("#"+this.element);
			if(!(el && el.length >0) ){
				el=$("input[name='"+this.element+"']",form);
				if(el.length==0) {
					el=$("select[name='"+this.element+"']",form);
				}
				if(el.length==0) {
					el=$("textarea[name='"+this.element+"']",form);
				}
				if(el.length>0) {
					el=el.eq(0);
				} else {
					return true;
				}
			}
			var container=$("#ketchup-"+this.element);
			var elOffset = el.offset(); 
			var leftTip=elOffset.left;
			var topTip= elOffset.top+el.outerHeight()+1;
			var elType=el.attr("type");
			var name=el.attr("name");
			if(elType=="radio" || elType=="checkbox"){
				$("input[type="+elType+"][name='"+name+"']",form).each(function(n){
					if(!$(this).hasClass("ketchup-input-error")){
						$(this).addClass("ketchup-input-error");
					}
				});
			} else {
				if(!el.hasClass("ketchup-input-error")){
					el.addClass("ketchup-input-error");
				}
			}
			if(container.length == 0 ){
				$('<div id="ketchup-'+this.element+'" style="display:none"><ul></ul><span class="centerdown"></span></div>')
				.addClass('ketchup-error')
				.css  ( {
								top : topTip,
								left: leftTip
				   }).appendTo('body');
				
			}
			container=$("#ketchup-"+this.element);
			var list = container.children('ul');

			if(list.length>0) {
				if($.inArray(this.element,elArray)<0){
					list.html("");
				}
				$('<li>'+this.message+'</li>').appendTo(list);
			}

			//需要处理不同的input select textarea
			//查找同组的值有变更就隐藏
		
			if(elType=="radio" || elType=="checkbox"){
				$("input[type="+elType+"][name='"+name+"']",form).on("mouseover",function() {
					var boj=this;
					container
					.css({top    : el.offset().top-el.height()-30})
					.animate({
						  top    : el.offset().top-el.height()-20,
						  opacity: "show"
						}, "fast");	
					$(boj).focus();
				 }).on("mouseout",function(){
						var boj=this;
						container
						.animate({
							  top    : el.offset().top-el.height()-30,
							  opacity: 0
							}, "fast", function() {
								
							});
					}).one("keyup",function(){
						$(boj).removeClass("ketchup-input-error");
						el.off("mouseover","**").off("mouseout","**");
						container.hide().remove();
					});
			} else {
				el.on("mouseover",function(){
					container
					.css({top    : el.offset().top-el.height()-30})
					.animate({
						  top    : el.offset().top-el.height()-20,
						  opacity: 1
						}, "fast").show();
					this.focus();
				}).on("mouseout",function(){
					container
					.animate({
						  top    : el.offset().top-el.height()-20,
						  opacity: 0
						}, "fast", function() {
							
						});
				}).one("keyup",function(){
					el.removeClass("ketchup-input-error");
					el.off("mouseover","**").off("mouseout","**");
					container.hide().remove();
				});
			}
	

			elArray.push(this.element);
			
		});
	};
	//参数支持两个,第一个源数据，第二个为替换数据
	var _defaultStr = function(){
		var len = arguments.length;
		if(len == 1)
			return typeof arguments[0] == "undefined" || arguments[0]==null?"":$.trim(arguments[0]);
		else if(len == 2)
			return typeof arguments[0] == "undefined" || arguments[0]==null?arguments[1]:$.trim(arguments[0]);
		else
			throw new Error("入参个数["+len+"]不正确");
	};
	/**
	 * 根据json对象取其中的值，异常或者不存在都为空字符串.
	 * @return {TypeName} 
	 * @exception {TypeName} 
	 */
	var _getJSONValByKey = function(){
		var len = arguments.length;
		if(len<=1){
			throw new Error("入参个数["+len+"]不正确");
		}
		if(len>=2){
			if(typeof arguments[0] !=="object"){
				throw new Error("第一个参数必须为JSON对象！");
			}
			for(var i=1;i<len;i++){
				if(typeof arguments[i] !=="string"){
					throw new Error("第"+(i+1)+"个参数必须为字符串！");
				}
			}
		}
		var args = [];
		for(var i=1;i<arguments.length;i++){
			args[i-1]=arguments[i];
		}
		return _loopJSONDef(arguments[0],args,"");
	};
	/**
	 * 根据json对象判断键值 是否存在，存在返回true，否则false
	 * @return true | false
	 */
	var _chkJSONValByKey = function(){
		var len = arguments.length;
		if(len<=1){
			throw new Error("入参个数["+len+"]不正确");
		}
		if(len>=2){
			if(typeof arguments[0] !="object"){
				throw new Error("第一个参数必须为JSON对象！");
			}
			for(var i=1;i<len;i++){
				if(typeof arguments[i] !="string"){
					throw new Error("第"+(i+1)+"个参数必须为字符串！");
				}
			}
		}
		var args = [];
		for(var i=1;i<arguments.length;i++){
			args[i-1]=arguments[i];
		}
		var val = _loopJSONDef(arguments[0],args,"");
		return ""==val?false:true;
	};
	/**
	 * 根据对象及数组key，取得相应json值.
	 * 用法：var json = {"a":{"b":{"c":"cc"}}};
	 *      var va = _loopJSONDef(json,["a","b","c"],"dd");//此时va="cc";
	 * @param {Object} o json对象
	 * @param {Object} arrArgs key数组
	 * @param {Object} def 默认值
	 * @return {TypeName} 
	 */
	var _loopJSONDef = function(o,arrArgs,def){
		var r = loopJSON(o,arrArgs);
		return typeof r === "undefined"?def:r;
	};
	
	var loopJSON = function(o,arrArgs){
		if(Object.prototype.toString.call(o)!=="[object Object]")
			throw new Error("参数必须为JSON对象！");
		if(Object.prototype.toString.call(arrArgs)!=="[object Array]")
			throw new Error("参数必须为数组对象！");
		if (arrArgs.length == 1){
	    	return o[arrArgs[0]]==null?"":o[arrArgs[0]];
	  	}else {
	  		//key值允许不同类型的值，不一定是字符串
	    	var arg = arrArgs.shift();
	    	if (typeof(o[arg]) !== "undefined" )
	      		return loopJSON(o[arg], arrArgs);
	    	else
	      		return; 
	  	}
	};
	/**
	 * 用于表单信息提示，入参：标签位置与提示信息
	 */
	var _showMsg = function(tagId,msg){
		$("#"+tagId).html("提示："+msg);
		$("#"+tagId).fadeIn("slow");
	};
	var _hideMsg = function(tagId){
		$("#"+tagId).html("");
		$("#"+tagId).fadeOut("slow");
	};
	//返回前一地址
	var _back = function(){
		var len = arguments.length;
		if(len == 1){
			if(typeof arguments[0] =="string" && arguments[0].length > 0) {
    			window.self.location.href = contextPath+arguments[0];
    		}
		}
		if(len == 0){		
			var url=document.referrer;
	    	if(typeof(url)=="string" && url.length > 0 && url.toLowerCase().indexOf("http") >= 0) {
	    		window.self.location.href = document.referrer;
	    	} else {
	    		window.self.location.href = "javascript:history.go(-1);";
	    	}
	    }
		return false;
	};
	/**
	 * JSON对象属性追加,不覆盖
	 * @param {Object} srcJson
	 * @param {Object} attrKey
	 * @param {Object} attrVal
	 * @return {TypeName} 
	 * @exception {TypeName} 
	 */
	var _addJsonAttr = function(srcJson,attrKey,attrVal){
		if(typeof srcJson =="undefined")throw new Error("源对象无效");
		if(typeof attrKey =="undefined")throw new Error("新属性名无效");
		var newJson = {};
		try{
			for(var ak in srcJson){
				if(ak==attrKey)throw new Error("新属性键名"+attrKey+"与原对象中属性冲突。"); 
				newJson[ak]= srcJson[ak];
			}
			newJson[attrKey] = attrVal;
		}catch(e){throw new Error(e.description);};
		return newJson;
	};
	/**
	 * JSON对象合并,不覆盖或者覆盖
	 * @param {Object} srcJson
	 * @param {Object} attrKey
	 * @param {Object} attrVal
	 * @param {Object} isOverRide
	 * @return {TypeName} 
	 * @exception {TypeName} 
	 */
	var _joinJSON = function(srcJson,oriJson,isOverRide){
		if(typeof srcJson =="undefined" || !$.isPlainObject(srcJson))throw new Error("源对象无效");
		if(typeof oriJson =="undefined" || !$.isPlainObject(oriJson))throw new Error("新对象无效");
		var newJson = srcJson;
		try{
			for(var j in srcJson){
				for(var k in oriJson){
					if(j==k && isOverRide){
						newJson[j] = oriJson[k];
					}else if(j==k && !isOverRide){
						newJson[j] = srcJson[j];
					}else{
						newJson[k] = oriJson[k];
					}
				}
			}
		}catch(e){throw new Error(e.description);};
		return newJson;
	};
	/**
	 * JSON对象属性追加,覆盖
	 * @param {Object} srcJson
	 * @param {Object} attrKey
	 * @param {Object} attrVal
	 * @return {TypeName} 
	 * @exception {TypeName} 
	 */
	var _addOrReplaceJsonAttr = function(srcJson,attrKey,attrVal){
		if(typeof srcJson =="undefined")throw new Error("源对象无效");
		if(typeof attrKey =="undefined")throw new Error("新属性名无效");
		var newJson = {};
		try{
			for(var ak in srcJson){ 
				newJson[ak]= srcJson[ak];
			}
			newJson[attrKey] = attrVal;
		}catch(e){throw new Error(e.description);};
		return newJson;
	};
	/**
	 * 行颜色切换
	 * @param {Object} tbId
	 * @param {Object} evenCls
	 * @param {Object} oddCls
	 */
	var _tableEOClass = function(tbId,evenCls,oddCls){
		$("#"+tbId+" tr:even").addClass(evenCls);
		$("#"+tbId+" tr:odd").addClass(oddCls);
	};
	/**
	 * 数字判断
	 * @param {Object} obj
	 */
	var _isDigit = function(val){
		return /^[0-9]+$/.test(val);
	};
	/**
	 * 数字和字母判断
	 * @param {Object} obj
	 */
	var _isDigitAndLetter = function(val){
		return /^[A-Za-z0-9]+$/.test(val);
	};
	/**
	 * 小数 判断
	 * @param {Object} obj
	 */
	var _isDecimals = function(val){
		return /^[0-9]+[.]{0,1}[0]*[1-9]*$/.test(val);
	};
	/**
	 * 替换指定长度字符
	 * @param {Object} src
	 * @param {Object} b
	 * @param {Object} e
	 * @param {Object} repStr
	 * @return {TypeName} 
	 */
	var _encryptStr = function(src,b,e,repStr){
		if(typeof src !== "string" || src == "") return "";
		if(typeof repStr !== "string" || repStr == "")return src;
		if(src.length < e || src.length < b || b < 0 || e < 0) return src;
		var es = "";
		for(var i=0;i<src.length;i++){
			if(i<b || i>e)
		 		es += src.charAt(i);
			else
				es +=repStr;
		}
		return es;
	};
	/**
	 * 生成m~n之间的随机数
	 */
	var _getMNRandomCode = function(m,n){
		return Math.floor(Math.random()*n)+m;
	};
	
	/**
	 * 生成n位随机数
	 */
	var _getNRandomCode = function(n){
		var num = "";
		for(var i=0;i<n;i++) {
			num += Math.floor(Math.random()*10); 
		}
		return num;
	};
	
	function _atoc(numberValue){  
		var numberValue=new String(Math.round(numberValue)); // 数字金额  
		var chineseValue=""; // 转换后的汉字金额  
		var String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字  
		var String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位  
		var len=numberValue.length; // numberValue 的字符串长度  
		var Ch1; // 数字的汉语读法  
		var Ch2; // 数字位的汉字读法  
		var nZero=0; // 用来计算连续的零值的个数  
		var String3=0; // 指定位置的数值  
		if(len>15){  
			alert("超出计算范围");  
			return "";  
		}  
		if (numberValue==0){  
			chineseValue = "零元整";  
			return chineseValue;  
		}  
		String2 = String2.substr(String2.length-len, len); // 取出对应位数的STRING2的值  
		for(var i=0; i<len; i++){  
			String3 = parseInt(numberValue.substr(i, 1),10); // 取出需转换的某一位的值  
			if ( i != (len - 3) && i != (len - 7) && i != (len - 11) && i !=(len - 15) ){  
				if ( String3 == 0 ){  
					Ch1 = "";  
					Ch2 = "";  
					nZero = nZero + 1;  
				}  
				else if ( String3 != 0 && nZero != 0 ){  
					Ch1 = "零" + String1.substr(String3, 1);  
					Ch2 = String2.substr(i, 1);  
					nZero = 0;  
				}  
				else{  
					Ch1 = String1.substr(String3, 1);  
					Ch2 = String2.substr(i, 1);  
					nZero = 0;  
				}  
			}  
			else{ // 该位是万亿，亿，万，元位等关键位  
				if( String3 != 0 && nZero != 0 ){  
					Ch1 = "零" + String1.substr(String3, 1);  
					Ch2 = String2.substr(i, 1);  
					nZero = 0;  
				}  
				else if ( String3 != 0 && nZero == 0 ){  
					Ch1 = String1.substr(String3, 1);  
					Ch2 = String2.substr(i, 1);  
					nZero = 0;  
				}  
				else if( String3 == 0 && nZero >= 3 ){  
					Ch1 = "";  
					Ch2 = "";  
					nZero = nZero + 1;  
				}  
				else{  
					Ch1 = "";  
					Ch2 = String2.substr(i, 1);  
					nZero = nZero + 1;  
				}  
				if( i == (len - 11) || i == (len - 3)){ // 如果该位是亿位或元位，则必须写上  
					Ch2 = String2.substr(i, 1);  
				}  
			}  
			chineseValue = chineseValue + Ch1 + Ch2;  
		}  
		if ( String3 == 0 ){ // 最后一位（分）为0时，加上“整”  
			chineseValue = chineseValue + "整";  
		}  
		return chineseValue;  
	};
	var _browser={ 
			versions:function(){ 
				var u = navigator.userAgent, app = navigator.appVersion; 
				return { //移动终端浏览器版本信息 
					trident: u.indexOf('Trident') > -1, //IE内核 
					presto: u.indexOf('Presto') > -1, //opera内核 
					webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核 
					gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核 
					mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
					iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器 
					iPad: u.indexOf('iPad') > -1, //是否iPad 
					webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部 
				}; 
			}(), 
			language:(navigator.browserLanguage || navigator.language).toLowerCase() 
	};
	var REGX_HTML_ENCODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;

    var REGX_HTML_DECODE = /&\w+;|&#(\d+);/g;
	var _encodeHtml = function(s){
        s = (s != undefined) ? s : this.toString();
        return (typeof s != "string") ? s :
            s.replace(REGX_HTML_ENCODE, 
                      function($0){
                          var c = $0.charCodeAt(0), r = ["&#"];
                          c = (c == 0x20) ? 0xA0 : c;
                          r.push(c); r.push(";");
                          return r.join("");
                      });
    };
    
    //判断是否是空对象
	var _isObj = function(obj){
		var flag = false;
		if(obj!=undefined && $.trim(obj)!="" && obj!=null){
			flag = true;
		}
		return flag;
	};
	
	//判断是否是空数组
	var _isArray = function(obj){
		if(!!obj && obj.length>0){
			return true;
		}else{
			return false;
		}
	};
	
	//排序
	var _sort = function(param){
		param.sort(
		    function(a, b){
		        if(a.itemSpecId < b.itemSpecId) return -1;
		        if(a.itemSpecId > b.itemSpecId) return 1;
		        return 0;
		    }
		);
	};
    
	//要暴露出的公共方法
	return {
		showErrors			:_showErrorsTip,
		defaultStr			:_defaultStr,
		back				:_back,
		hideMsg				:_hideMsg,
		showMsg				:_showMsg,
		addJsonAttr			:_addJsonAttr,
		addOrReplaceJsonAttr:_addOrReplaceJsonAttr,
		tableEOClass		:_tableEOClass,
		getJSONValByKey		:_getJSONValByKey,
		chkJSONValByKey     :_chkJSONValByKey,
		getJSONValByArrayKey:_loopJSONDef,
		isDigit				:_isDigit,
		isDigitAndLetter	:_isDigitAndLetter,
		isDecimals			:_isDecimals,
		joinJSON			:_joinJSON,
		encryptStr			:_encryptStr,
		getMNRandomCode     :_getMNRandomCode,
		getNRandomCode      :_getNRandomCode,
		atoc				:_atoc,
		browser             :_browser,
		encodeHtml			:_encodeHtml,
		isObj				:_isObj,
		isArray				:_isArray,
		sort				:_sort
	};
})();
