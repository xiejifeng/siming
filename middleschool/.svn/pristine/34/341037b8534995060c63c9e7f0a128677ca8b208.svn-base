/**
 * 初始化修改密码以及密码周期内修改密码
 *  modified by gongr
 * @author gongr 
 */
CommonUtils.regNamespace("pwd","check");
/**
 * 工具包
 */
pwd.check=(function(){
	
	/**
	 * 登录后弹出密码修改框
	 */
	var _alertUpdatePwdWindow = function(){
		var title = "用户初次登入系统，请修改密码";
		var content = "<div style='text-align:center;'><form id='pwdForm'>" + 
	 	"<div style='margin-bottom:10px;'>输入新密码：<input id='newPassword' type='password' style='width:160px;height:22px;border:1px solid #CCCCCC' placeholder='请输入您的新密码...' data-validate='validate(required:密码不能为空, rangelength:密码长度必须 在 {arg1}和 {arg2}之间.(6,12)) on(keyup blur)' maxlength='12'></div>" + 
	 	"<div>确认新密码：<input id='surePassword' type='password' style='width:160px;height:22px;border:1px solid #CCCCCC' placeholder='请输入您的新密码...' data-validate='validate(depEq:两次密码必须一致(newPassword)) on(keyup blur)' maxlength='12'></div>" +
	 	"<div id='errorMessage' style='display:none;text-align:right;color:red;margin-top:10px;'></div></form></div>";
		_dialogDefault(title,content);
	};
	var _alertPwdCycleWindow = function(){
		var title = "用户旧密码使用时间过长，请修改密码";
		var content = "<div style='text-align:center;'><form id='pwdForm'>" + 
	 	"<div style='margin-bottom:10px;'>输入新密码：<input id='newPassword' type='password' style='width:160px;height:22px;border:1px solid #CCCCCC' placeholder='请输入您的新密码...' data-validate='validate(required:密码不能为空, rangelength:密码长度必须 在 {arg1}和 {arg2}之间.(6,12)) on(keyup blur)' maxlength='12'></div>" + 
	 	"<div>确认新密码：<input id='surePassword' type='password' style='width:160px;height:22px;border:1px solid #CCCCCC' placeholder='请输入您的新密码...' data-validate='validate(depEq:两次密码必须一致(newPassword)) on(keyup blur)' maxlength='12'></div>" +
	 	"<div id='errorMessage' style='display:none;text-align:right;color:red;margin-top:10px;'></div></form></div>";
		_dialogDefault(title,content);
	}
	//密码修改框初始化
	var _dialogDefault = function(title,content){
		var position;
//		var ua = navigator.userAgent.toLowerCase(); 
//		if(ua.match(/iPad/i)=="ipad") { 
//	    	position = ['center', 'top + 20'];
//		}else {
			position = ['left + 500', 'top + 180'];
//		}
		new $.Zebra_Dialog(content, {
			'open_speed':true,
			'keyboard'	:false,
			'modal'		:true,
			'animation_speed':500,
			'overlay_close':false,
			'overlay_opacity':.5,
		    'type'		: false,
		    'vcenter_short_message':true,
		    'title'		: title,
		    'position' 	: position,
		    'width'		: 300,
		    'buttons'	: ['确认修改']
		});
		$("#oldPassword").focus();
		//绑定表单验证
		$(".ZebraDialog_Button0").attr("id","btn_zebra_update");
		$('#pwdForm').bind('formIsValid', function(event, form) {
			//后台修改密码
			_updatePassword();
		}).ketchup({bindElement:"btn_zebra_update"});
		//绑定回车事件
		document.onkeydown = function(e){
		    var ev = document.all ? window.event : e; 
		    if(ev.keyCode==13) {
		    	$("#btn_zebra_update").focus().click();
		    }
		};
	};
	
	//后台修改密码
	var _updatePassword = function(){
		var password = $.trim($("#password").val());
		var newPassword = $.trim($("#newPassword").val());
		//修改后的密码不能和原来密码相同
		if(password == newPassword) {
			$("#errorMessage").html("*新密码不能和旧密码相同");
			$("#errorMessage").show();
			return;
		}
		var params = _buildPwdInParam();
		//20130808去除staffMgr
		$_zebraClose();
		_redirectUrl();
//		$.callServiceAsJson(contextPath+"/staffMgr/enforceUpdatePwd", params, {
//			"before" : function(){
//				$.ecOverlay("<strong>数据提交中，请稍等...</strong>");
//			},
//			"always" : function(){
//				$.unecOverlay();
//			},
//			"done"   : function(response){
//				if (response.code == 0) {
//					$_zebraClose();
//					_redirectUrl();
//				} else if (response.code == 1) {
//					$("#errorMessage").html("*旧密码不正确");
//					$("#errorMessage").show();
//				} else if(response.code == 2) {
//					$("#errorMessage").html("*不能修改为初始化密码");
//					$("#errorMessage").show();
//				}else {
//					$("#errorMessage").html("*密码修改失败，请稍后再试");
//					$("#errorMessage").show();
//				}
//			},
//			fail : function(response){
//				$.alert("提示信息","请求可能发生异常，请稍候！");
//			}
//		});
	};
	
	//后台验证密码周期是否到期
	var _validatePwdCycle = function(){
		var params={"staffCode":$("#staffCode").val()};
		//20130808去除staffMgr
		_redirectUrl();
//		$.callServiceAsJson(contextPath+"/staffMgr/pwdcheck/cycle", params, {
//			"before":function(){
//				$.ecOverlay("<strong>正在验证，请稍等...</strong>");
//			},
//			"done" : function(response){
//				if(response.code == "0") {
//					//如果是0，则弹出修改密码窗，否则进入系统
//					if(response.data == "0") {
//						_alertPwdCycleWindow();
//					}else {
//						_redirectUrl();
//					}
//				}else {
//					$.alert("提示信息",response.data);
//				}
//				
//			},
//			"always":function(){
//				$.unecOverlay();
//			}
//		});
	}
	
	//弹出渠道选择框
	var _dialogChannelChoose = function(data){
		var content = "";
		for( var i = 0;i < data.length;i++) {
			var channel = data[i];
			content +=
					"<div style='cursor:pointer;font-size:16px;margin-bottom:5px' ><input type='radio' value='"
							+ channel.id + "' name='rdo_range_channel' channelname='"+channel.name+"' />"+ channel.name + "</div><br/>";
		}
		new $.Zebra_Dialog("<div style='margin-left:25px;max-height:200px;overflow:auto;word-wrap:break-word;'>"+content+"</div><div id='channel_error' style='color:red;text-align:right;'></div>", {
			'open_speed':true,
			'keyboard'	:false,
			'modal'		:true,
			'animation_speed':500,
			'overlay_close':false,
			'overlay_opacity':.5,
		    'type'		: false,
		    'vcenter_short_message':true,
		    'title'		: "选择渠道",
		    'position' 	: ['left + 500', 'top + 180'],
		    'width'		: 500,
		    'buttons'	: ['确认选择'],
		    'onClose'   :function(caption){
				if(caption == "确认选择") {
					var $rdo_check = $("input[name='rdo_range_channel']:checked");
					if($rdo_check.length <= 0){
						$("#channel_error").html("*请选择渠道");
						return false;
					}else {
						$("#channel_error").html("");
						var channelId= $rdo_check.val();
						var channelName = $rdo_check.attr("channelname");
						var setUrl  = contextPath + "/staffMgr/setCurrentChannel";
						var param = {"channelId":channelId,"channelName":channelName};
						var response = $.callServiceAsJson(setUrl,param);
						if(response.code == 0) {
							_redirectUrl();
						}else {
							$("#channel_error").html("*"+response.data);
							return false;
						}
//						$.callServiceAsJson(setUrl, param, {
//							"before":function(){
//								$.ecOverlay("<strong>请稍等...</strong>");
//							},
//							"done" : function(response){
//								if(response.code == "0") {
//									_redirectUrl();
//								}else {
//									$.alert("提示信息",response.data);
//								}
//								
//							},
//							"always":function(){
//								$.unecOverlay();
//							}
//						});
					}
					
				}
			}
		});
	}
	
	//绑定密码入参
	var _buildPwdInParam = function(){
		var enforcePwd = 1;    //是否是强制密码修改标识
		var staffCode = $.trim($("#staffCode").val());
		var password = $.trim($("#password").val());
		//加密
		password = MD5(password);
		//获取5位随机码
		var randomCode = ec.util.getNRandomCode(5);
		password += randomCode;
		var newPassword = $.trim($("#newPassword").val());
		//加密
		newPassword = MD5(newPassword);
		//获取5位随机码
		var randomCode2 = ec.util.getNRandomCode(5);
		newPassword += randomCode2;
		var lanIp = "127.0.0.1";
		return {
			"staffCode":staffCode,
			"password":password,
			"newPassword":newPassword,
			"lanIp":lanIp,
			"enforcePwd":enforcePwd
		}
	};
	//关闭弹出窗
	var $_zebraClose = function(){
		$(".ZebraDialogOverlay").remove();
		$(".ZebraDialog").remove();
	};
	//跳转地址
	var _redirectUrl = function() {
		var lastUrl=$.cookie("_last_url");
		if(!!lastUrl && lastUrl.indexOf("/")>=0 && lastUrl.indexOf("/staff/login") <0){
			$.cookie("_last_url",null,{path:"/"});
			window.location.href=CommonUtils.replaceAll(lastUrl,'"','');
		} else {
			$.cookie("_last_url",null,{path:"/"});
			window.location.href=contextPath+"/main/home";
		}
	};
	
	//要暴露出的公共方法
	return {
		alertUpdatePwdWindow	:_alertUpdatePwdWindow,
		alertPwdCycleWindow     :_alertPwdCycleWindow,
		validatePwdCycle       :_validatePwdCycle
	};
})();

