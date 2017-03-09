/**
 * 登录
 */
CommonUtils.regNamespace("offerChange");

appLogin = (function() {
	//验证码等待时间
	var wait = 60;
	//定时器
	var clock = '';
	
	// 登录
	var _login = function() {
		var username =  $("#username").val().trim();
		var password =   $("#password").val().trim();
		var codeFlag = false;
		var code = null;
		if(!$("#code_div").hasClass("dis_none")){
			code = $("#code").val().trim();
			codeFlag =true;
		}
		if(!username){
			Common.showMessage("用户名不能为空", "warn");
			return;
		}
		if(!password){
			Common.showMessage("密码不能为空", "warn");
			return;
		}
		if(codeFlag){
			if(!code){
				Common.showMessage("验证码不能为空", "warn");
				return;
			}
		}
		var params = {
			"username" :username,
			"password" :password,
			"code":code
		};
		var url = web_path + "appLogin/login.html";
		$.ajax({
			url : url,
			type : "post",
			data : params,
			beforeSend:function(XMLHttpRequest){
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
				if ("0" == data.resultCode) {
					Common.redirectURL(web_path + "appLogin/index.html");
				} else if("2"== data.resultCode){	// 微信绑定
					Common.redirectURL(data.resultMsg);
				} else {
					var errCount = data.errCount;
					if(errCount>=5){
						if($("#code_div").hasClass("dis_none")){
							$("#code_div").removeClass("dis_none");
						}
						_changeValidateCode();
					}
					Common.showMessage(data.resultMsg, "error");
				}
			}
		});

	};

	// 更改验证码
	var _changeValidateCode = function() {
		var imgSrc = $("#validateCode");
		var src = imgSrc.attr("src");
		imgSrc.attr("src", src + "?num=" + Math.random());
	};

	// 忘记密码
	var _forgetPassword = function() {
		var url = web_path + "appLogin/forgetPassword.html";
		Common.redirectURL(url);
	};

	// 用户注册
	var _userRegistry = function() {
		var url = web_path + "appLogin/userRegistry.html";
		Common.redirectURL(url);
	};

	//短信验证
	var _getValidateCode = function(type){
		var tel =$("#tel").val();
		if(!tel){
			Common.showMessage("请输入手机号", "warn");
			return;
		}
		if(!Common.isPhoneNo(tel)){
			Common.showMessage("您输入的手机号不合法哦", "warn");
			return;			
		}
		var url = web_path + "appLogin/getTelCode.html";
		$.callServiceAsJsonGet(url, {"tel":tel,"type":type}, {
			"before" : function() {
				Common.showMask();
			},
			"always" : function() {
				Common.hideMask();
			},
			"done" : function(response) {
				var data = response.data;
				if ("0" == data.resultCode) {
					Common.showMessage("获取验证码成功", "succ");
					Common.userInfo.sendSuccValidate = true;
					_readSecond(type);
				} else {
					Common.showMessage(data.resultMsg, "error");
				}
			},
			fail : function(response) {
				Common.hideMask();
			}
		});
	};
	// 用户注册 --手机验证
	var _userRegistryValidateTel = function() {
		var tel = $("#tel").val(); 
		var validateCode = $("#validateCode").val(); 
		Common.userInfo.checkCode = validateCode;
		var pwd = $("#pwd").val();
		if(!tel){
			Common.showMessage("手机号码不能为空,请输入", "warn");
			return;
		}
		if(!Common.userInfo.sendSuccValidate){
			Common.showMessage("请获取手机验证码", "warn");
			return;
		}
		if(!Common.userInfo.checkCode){
			Common.showMessage("请输入验证码", "warn");
			return;
		}
		if(pwd.length<6){
			Common.showMessage("密码长度需6位以上", "warn");
			return;
	    }
		if(!$("#agree_p").hasClass('active')){
			Common.showMessage("请同意服务条款", "warn");
			return;
		}
		Common.userInfo.pwd = pwd;
		Common.userInfo.tel = tel;
		Common.userInfo.checkCode =validateCode;
		//判断用户名是否存在
		var url = web_path + "appLogin/checkUserName.html";
		$.callServiceAsJsonGet(url, {"username":Common.userInfo.tel,"code":Common.userInfo.checkCode}, {
			"before" : function() {
				Common.showMask();
			},
			"always" : function() {
				Common.hideMask();
			},
			"done" : function(response) {
				var data = response.data;
				if ("1" == data.resultCode) {
					Common.showMessage(data.resultMsg, "error");
					return;
				}else{
					Common.userInfo.userRegistryValidateTelFlag = true;
					$('.tab1-box').css('display', 'none');
					$('.tab2-box').css('display', 'block');
				}
			},
			fail : function(response) {
				Common.hideMask();
			}
		});

	};

	// 用户注册 --密码设置
	var _userRegistryPwdSet = function() {
		Common.userInfo.name = $("#realname").val();
		Common.userInfo.school = $("#select_school").val();
		Common.userInfo.grade = $("#select_grade").val();
		Common.userInfo.sex = $("#select_sex").val();
		Common.userInfo.city = $("#select_city").val();
		Common.userInfo.area = $("#select_area").val();
		
		if(!Common.userInfo.name){
			Common.showMessage("请输入真实姓名", "warn");
			return;
		}
		if(!Common.userInfo.sex||Common.userInfo.sex=="0"){
			Common.showMessage("请选择性别", "warn");
			return;
		}
		if(!Common.userInfo.area||Common.userInfo.area=="0"){
			Common.showMessage("请选择所在区域", "warn");
			return;
		}
		if(!Common.userInfo.school||Common.userInfo.school=="0"){
			Common.showMessage("请选择所在学校", "warn");
			return;
		}
		if(!Common.userInfo.grade||Common.userInfo.grade=="0"){
			Common.showMessage("请选择就读年级", "warn");
			return;
		}
		var img_url;
		if(Common.userInfo.sex=='1M00'){
			img_url = web_path + 'resources/app/common/images/boy.png';
			$("#pre_user_img").attr("src",img_url);
		}else{
			img_url = web_path + 'resources/app/common/images/girl.png';
			$("#pre_user_img").attr("src",img_url);
		}
		$('.tab2-box').css('display', 'none');
		$('.tab3-box').css('display', 'block');
	};

	// 用户注册 --信息填写
	var _userRegistryInfo = function() {
		var nickname = $("#nickname").val();
		var user_img = $("#pre_user_img").attr("src");
		if(!nickname){
			Common.showMessage("用户名称不能为空,请输入", "warn");
			return;
		}
		Common.userInfo.username = nickname;
		Common.userInfo.img = user_img;
		Common.userInfo.usertype ="1601";
		Common.userInfo.address =$("#address").val();
		
		var url = web_path + "appLogin/checkUserName.html";
		$.callServiceAsJsonGet(url, {"username":nickname,"code":Common.userInfo.checkCode}, {
			"before" : function() {
				Common.showMask();
			},
			"always" : function() {
				Common.hideMask();
			},
			"done" : function(response) {
				var data = response.data;
				if ("1" == data.resultCode) {
					Common.showMessage(data.resultMsg, "error");
					return;
				}else{
					var url = web_path + "appLogin/registry.html";
					$("#submitBut").attr("disabled",true);
					$.ajax({
						url : url,
						type : "post",
						data : Common.userInfo,
						beforeSend:function(XMLHttpRequest){
							Common.showMask();
						},
						complete:function(XMLHttpRequest, textStatus){
							
						},
						success : function(response) {
							var data = jQuery.parseJSON(response).data;
							if(data.resultCode=="0"){
								Common.showMessage(data.resultMsg, "succ");
								//window.setTimeout('Common.redirectURL(web_path + "appLogin/index.html")',2000);
								// 绑定微信
								window.setTimeout('Common.redirectURL(web_path + "appLogin/wxlogin.html")',2000);
							}else{
								$("#submitBut").attr("disabled",false);
								Common.showMessage(data.resultMsg, "error");
							}
						}
					});
				}
			},
			fail : function(response) {
				Common.hideMask();
			}
		});

	};
    //读秒操作
	 var _readSecond = function sendCode(type){ 
		$("#validateTime").attr("onclick","javascript:void(0);");
		$("#validateTime").text(wait+'s');
		 clock = setInterval(function(){
			 _doLoop(type);
		 }, 1000); //一秒执行一次
	 };
	 
	 var _doLoop = function doLoop(type){
			wait--;
			 if(wait > 0){
				 $("#validateTime").text(wait+'s');
			 }else{
				 $("#validateTime").text("获 取");
			     $("#validateTime").attr("onclick","appLogin.getValidateCode("+type+");");
			     clearInterval(clock); //清除js定时器
			     wait = 60; //重置时间
		     }
    };
    
    //密码重置
    var _reSetPwd = function(){
		var tel =   $("#tel").val().trim();
		var code =   $("#code").val().trim();
		var newPwd =   $("#newPwd").val().trim();
		if(!tel){
			Common.showMessage("手机号不能为空", "warn");
			return;
		}
		if(!code){
			Common.showMessage("短信验证码不能为空", "warn");
			return;
		}
		if(!newPwd){
			Common.showMessage("新密码不能为空", "warn");
			return;
		}
		var url = web_path + "appLogin/reSetPwd.html";
		$.callServiceAsJsonGet(url, {"tel":tel,"code":code,"newPwd":newPwd}, {
			"before" : function() {
				Common.showMask();
			},
			"always" : function() {
				Common.hideMask();
			},
			"done" : function(response) {
				var data = response.data;
				if ("1" == data.resultCode) {
					Common.showMessage(data.resultMsg, "error");
					return;
				}else{
					Common.showMessage(data.resultMsg, "succ");
					window.setTimeout('Common.redirectURL(web_path + "appLogin/initLogin.html")',500);
				}
			},
			fail : function(response) {
				Common.hideMask();
			}
		});	
		
    };
    
    //下一步
    var _nextStep = function(){
		if(!Common.userInfo.sendSuccValidate){
			Common.showMessage("请获取手机验证码", "warn");
			$("#div_confirm").addClass("dis_none");
			return;
		}
		if(!Common.userInfo.checkCode){
			Common.showMessage("请输入验证码", "warn");
			$("#div_confirm").addClass("dis_none");
			return;
		}
    	$("#div_confirm").addClass("dis_none");
		if(Common.userInfo.usertype=="1600"){
			$("#school_li").hide();
			$("#grade_li").hide();
			$("#arttype_li").hide();
			$("#educationStage").hide();
//			$("#teacher_li").hide();
		}else{
			$("#school_li").show();
			$("#grade_li").show();
			$("#arttype_li").show();
			$("#educationStage").show();
//			$("#teacher_li").show();
		}
		$('.tab2-box').css('display', 'none');
		$('.tab3-box').css('display', 'block');
    };
    //取消直接提交用户注册信息
    var _cancelAndSubmit = function(){
		if(!Common.userInfo.sendSuccValidate){
			Common.showMessage("请获取手机验证码", "warn");
			$("#div_confirm").addClass("dis_none");
			return;
		}
		if(!Common.userInfo.checkCode){
			Common.showMessage("请输入验证码", "warn");
			$("#div_confirm").addClass("dis_none");
			return;
		}
		var url = web_path + "appLogin/registry.html";
		$.ajax({
			url : url,
			type : "post",
			data : Common.userInfo,
			beforeSend:function(XMLHttpRequest){
				$("#div_confirm").addClass("dis_none");
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
				if(data.resultCode=="0"){
					Common.showMessage(data.resultMsg, "succ");
					//window.setTimeout('Common.redirectURL(web_path + "appLogin/index.html")',2000);
					// 绑定微信
					window.setTimeout('Common.redirectURL(web_path + "appLogin/wxlogin.html")',2000);
				}else{
					Common.showMessage(data.resultMsg, "error");
				}
			}
		});
    };
    
    //用户选择
    var _chooseUserType = function(obj){
    	var type =$(obj).val();
    	if(type==1600){
    		$("#div_pop").removeClass("dis-none");
    	}
    	Common.userInfo.usertype =type;
    };
    
    //放弃注册教师
    var _giveUpRegistryTeacher = function(){
    	$("#radio_student").attr("checked",true);
    	$("#div_pop").addClass("dis-none");
    	Common.userInfo.usertype ="1601";
    };
    //继续
    var _keepOnRegistryTeacher = function(){
    	$("#div_pop").addClass("dis-none");
    };
    
    function _backRegisty1(){
		$('.tab1-box').css('display', 'block');
		$('.tab2-box').css('display', 'none');
    }
    
    function _backRegisty2(){
		$('.tab2-box').css('display', 'block');
		$('.tab3-box').css('display', 'none');
    }
	return {
		login : _login,
		changeValidateCode : _changeValidateCode,
		forgetPassword : _forgetPassword,
		userRegistry : _userRegistry,
		userRegistryValidateTel : _userRegistryValidateTel,
		userRegistryPwdSet : _userRegistryPwdSet,
		userRegistryInfo : _userRegistryInfo,
		getValidateCode     : _getValidateCode,
		doLoop             : _doLoop,
		readSecond      :  _readSecond,
		reSetPwd       :  _reSetPwd,
		nextStep     :  _nextStep,
		cancelAndSubmit  :_cancelAndSubmit,
		chooseUserType  :  _chooseUserType,
		backRegisty1  :  _backRegisty1,
		backRegisty2  :  _backRegisty2,
		giveUpRegistryTeacher : _giveUpRegistryTeacher,
		keepOnRegistryTeacher : _keepOnRegistryTeacher
	};

})();