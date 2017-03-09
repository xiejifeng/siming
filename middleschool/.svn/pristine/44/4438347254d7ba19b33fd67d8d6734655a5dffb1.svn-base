/**
 * 会话超时弹出登录窗口
 *  modified by gongr
 * @author gongr 
 */
CommonUtils.regNamespace("login","windowpub");
/**
 * 工具包
 */
login.windowpub=(function(){
	
	/**
	 * 弹出登录框
	 */
	var _alertLoginWindow = function(info){
		if($("#zebra_login").length > 0) {
			return;
		}
		if(info == null){
			info = "";
		}
		//检测cookie是否存在
		var staffCookie = _getCookie("cookieUser");
		//弹出登陆窗口
		if(staffCookie != "") {
			$.unecOverlay();
			_dialogDefault(info);
		}else {
			CommonUtils.getRootWin().location.href=contextPath + "/staff/login/page";
		}
	};
	//弹出登陆框
	var _dialogDefault = function(info){
		var position;
		//判断是否为ipad
//		var ua = navigator.userAgent.toLowerCase(); 
//	    if(ua.match(/iPad/i)=="ipad") { 
//	    	position = ['center', 'top + 20'];
//		}else {
			position = ['left + 500', 'top + 180'];
//		}
		var c = "<div style='text-align:center;'><form id='zebraForm'><div id='loginDifferent' style='margin-bottom:10px;color:red;'>"+info+"</div><div style='margin-bottom:10px;'>工&nbsp;&nbsp;&nbsp;号：<input id='staffUserName1' type='text' style='width:160px;height:22px;' placeholder='请输入您的工号' data-validate='validate(required:工号不能为空) on(blur)'></div>" + 
	 	"<div>密&nbsp;&nbsp;&nbsp;码：<input id='staffPassword1' type='password' style='width:160px;height:22px;' placeholder='请输入您的密码' data-validate='validate(required:密码不能为空) on(blur)'>" + 
	 	"<div id='errorMessage' style='display:none;text-align:right;color:red;margin-top:10px;'></div></form></div>";
		new $.Zebra_Dialog(c, {
			'id':"zebra_login",
			'open_speed':true,
			'keyboard'	:false,
			'modal'		:true,
			'animation_speed':500,
			'overlay_close':false,
			'overlay_opacity':.5,
		    'type'		: false,
		    'vcenter_short_message':true,
		    'title'		: '员工登录',
		    'position' 	: position,
		    'width'		: 300,
		    'buttons'	: ['返回登录页','登录','重置'],
		    'onClose'   :function(caption) {
				if(caption == "重置"){
					$("#staffUserName1").val("");
					$("#staffPassword1").val("");
					return false;
				}
				if(caption == "返回登录页"){
					CommonUtils.getRootWin().location.href=contextPath + "/staff/login/page";
				}
			}
		});
		$("#staffUserName1").focus();
		//绑定表单验证
		$(".ZebraDialog_Button1").attr("id","btn_zebra_login");
		$('#zebraForm').bind('formIsValid', function(event, form) {
			//后台登录
			_loginCallback();
		}).ketchup({bindElement:"btn_zebra_login"});
		//绑定回车事件
		document.onkeydown = function(e){
		    var ev = document.all ? window.event : e; 
		    if(ev.keyCode==13) {
		    	$("#btn_zebra_login").focus().mousedown();
		    }
		};
	};
	
	var _getMyCookie = function(cookieName) {
		var re = new RegExp("\\b"+cookieName+"=([^;]*)\\b");
		var arr =  re.exec(document.cookie);
		return arr?arr[1]:"";
	};
	//后台验证登录
	var _loginCallback = function(){
		var staffCode = $("#staffUserName1").val();
		var pwd = $("#staffPassword1").val();
		//加密
		pwd = MD5(pwd);
		//获取5位随机码
//		var randomCode = ec.util.getNRandomCode(5);
//		pwd += randomCode;
		var lanIp = "127.0.0.1";
		var channelId = $("#_session_staff_info").attr("channelId");
		var channelName = $("#_session_staff_info").attr("channelName");
		var agentTypeCd = $("#ft_range_channel").attr("agenttypecd");
		var areaId = $("#ft_range_area").val();
		var areaCode = $("#ft_range_area").attr("areacode");
		var areaName = $("#ft_range_area").attr("areaname");
		var staffProvCode = _getMyCookie("login_area_id");
		if (!!staffProvCode && staffProvCode != "") {
			staffProvCode = staffProvCode.split("-")[0];
		}
		var params={
			"staffCode":staffCode,
			"password":pwd,
			"staffProvCode":staffProvCode,
			"lanIp":lanIp,
			"channelId":channelId,
			"channelName":channelName,
			"agentTypeCd":agentTypeCd,
			"areaId":areaId,
			"areaCode":areaCode,
			"areaName":areaName
		};
		
		$.callServiceAsJson(contextPath+"/staff/login/loginValid", params, {
			"before" : function(){
				$.ecOverlay("<strong>正在登录，请稍等...</strong>");
			},
			"always" : function(){
				$.unecOverlay();
			},
			"done"   : function(response){
				if(response.code == 0) {
					try {
						SoOrder.getToken(); //登录后重新初始化session及js中的token,防止订单提交失效
					} catch (e) {
					}
					//关闭Zebra_Dialog
					$_zebraClose();
				}
				///1444:用户需重新验证
				else if(response.code == 1444){
					//$.alert("提示信息",response.data);
					//$("#errorMessage").html("*"+response.data);
					//if(response.data.length > 20) {
						//$("#errorMessage").css("text-align","left");
					//}
					//$("#errorMessage").show();
					//alert(response.data);
					$.confirm("信息",response.data
							,{yes:function(
					){
						CommonUtils.getRootWin().location.href=contextPath + "/staff/login/page";
					},no:""},"error");
				}else {
					if(response.errorsList&& response.errorsList.length>0 ){
						//$.alert("提示信息",response.errorsList[0].message);
						$("#errorMessage").html("*"+response.errorsList[0].message);
						if(response.errorsList[0].message > 20) {
							$("#errorMessage").css("text-align","left");
						}
					} else {
						//$.alert("提示信息",response.data);
						$("#errorMessage").html("*"+response.data.message);
						if(response.data.message.length > 20) {
							$("#errorMessage").css("text-align","left");
						}
					}
					$("#errorMessage").show();
				}
			},
			fail : function(response){
				$.alert("提示信息","请求可能发生异常，请稍候！");
			}
		});
	};
	
	var $_zebraClose = function(){
		$(".ZebraDialogOverlay").remove();
		$(".ZebraDialog").remove();
	};
	
	/**
	 * 根据名称获取cookie
	 */
	var _getCookie = function(name){
		var staffCookie = "";
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		if(arr != null) {
			staffCookie = unescape(arr[2]);
		}
		return staffCookie;
	};
	
	/**
	 * 判断是否登录超时
	 */
	var _checkLogin = function(){
		//跳转地址前判断是否登录超时
		var response = $.callServiceAsJson(contextPath+"/staff/login/isLogin");
		if(response.code != 0) {
			login.windowpub.alertLoginWindow(response.data);
 			return false;
		}
		return true;
	};
	//要暴露出的公共方法
	return {
		alertLoginWindow	:_alertLoginWindow,
		checkLogin          :_checkLogin
	};
})();

