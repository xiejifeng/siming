<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/plugins/customer/jsp/appcommon.jsp"%>
<!DOCTYPE>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	<title>用户注册</title>
	<link rel="stylesheet" type="text/css" href="<%=path%>resources/app/common/appcss/common.css">
	<link rel="stylesheet" href="<%=path%>resources/app/common/appcss/formPro.css"></head>
<body>
<div class="tab1-box">
	<header class="wrapper">
		<h2>用户注册</h2>
		<a onclick="Common.back(1,1);" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
		<a  class="home" onclick="Personal.index();"></a>
	</header>
	<section class="logo-icon wrapper">
		<img src="<%=path%>resources/app/common/images/logo.jpg">
	</section>
	<section class="user-reg">
		<form action="#" method="post">
			<div class="form-group">
				<label class="fl" for="phone">手机号码：</label>
				<input type="text" id = "tel" placeholder="必填"  onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="11" class="fl txt">
			</div>
			<div class="form-group">
				<label class="fl" for="phone">验证码：</label>
				<input type="text" id="validateCode" placeholder="必填"class="fl txt code-text">
				<a id="validateTime" onclick="appLogin.getValidateCode(1);" class="code">获 取</a>
			</div>
			<div class="form-group">
				<label class="fl" for="phone">密码设置：</label>
				<input type="password"  placeholder="必填" id="pwd" maxlength="18" min="6" onkeyup="value=value.replace(/[\W]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" class="fl txt">
			</div>
			<div class="form-group h-auto">
			<div class="service-box">
				<h5>服务条款</h5>
				<p>1．1　用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击"同意"按钮即表示用户与思明公司达成协议，完全接受本协议项下的全部条款。</p>
				<p>1．2　用户注册成功后，思明将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。</p>
				<p>1．3　用户一经注册思明帐号，除非子频道要求单独开通权限，用户有权利用该账号使用思明各个频道的单项服务，当用户使用思明各单项服务时，用户的使用行为视为其对该单项服务的服务条款以及思明在该单项服务中发出的各类公告的同意。</p>
				<p>1．4　思明会员服务协议以及各个频道单项服务条款和公告可由思明公司随时更新，且无需另行通知。您在使用相关服务时,应关注并遵守其所适用的相关条款。 您在使用思明提供的各项服务之前，应仔细阅读本服务协议。如您不同意本服务协议及/或随时对其的修改，您可以主动取消思明提供的服务；您一旦使用思明服务，即视为您已了解并完全同意本服务协议各项内容，包括思明对服务协议随时所做的任何修改，并成为思明用户。</p>
			</div> 
				<p class="agree active" id="agree_p">同意该服务条款</p>
			</div>
			<div class="btn-wrap wrapper"  onclick="appLogin.userRegistryValidateTel();">
				<a name="sub" class="btn-pro">下一步</a>
			</div>
		</form>
	</section>
</div>
<div class="tab2-box" style="display: none;">
<header class="wrapper">
	<h2>用户注册</h2>
	<a class="back" onclick="appLogin.backRegisty1();"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
</header>
	<section class="user-reg">
		<form action="#" method="post">
			<div class="form-group">
				<label class="fl" for="realname">真实姓名：</label>
				<input type="text" class="realname" name="realname" id="realname" class="fl">
				<span>*</span>
			</div>
			<div class="form-group">
				<select name="sex" id="select_sex">
					<option selected value="0">选择性别</option>
				</select>
				<span>*</span>
			</div>
			<div class="form-group">
				<select name="city" id="select_city" disabled="disabled">
				</select>
				<span>*</span>
			</div>
			<div class="form-group">
				<select name="area" id="select_area">
					<option value="0" selected>所在区县</option>
				</select>
				<span>*</span>
			</div>
			<div class="form-group">
				<select name="school" id="select_school">
					<option value="0" selected>所在学校</option>
				</select>
				<span>*</span>
			</div>
			<div class="form-group">
				<select name="grade" id="select_grade">
					<option value="0" selected>就学年级</option>
				</select>
				<span>*</span>
			</div>
			<div class="form-group h-auto">
				<label class="fl" for="address">收货地址：</label>
				<textarea id="address"></textarea>
			</div>
			<div class="btn-wrap wrapper" onclick="appLogin.userRegistryPwdSet();">
				<a  name="sub" class="btn-pro">提交</a>
			</div>
		</form>
	</section>
</div>
<div class="tab3-box" style="display: none;">
<header class="wrapper">
	<h2>用户注册</h2>
	<a href="javascript:;" class="back"  onclick="appLogin.backRegisty2();"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
</header>
<section class="user-reg">
	<form action="#" method="post">
		<div class="dp">
			<a href="javascript:;" style="height: auto;">
				<img  id="pre_user_img" src="" style="width: 88px;height: 87px;">
				<p onclick="user_img.click();">编辑头像</p>
				<div style="display: none;">
				   <input type="file" id="user_img" accept="image/*;capture=camera" onchange="Personal.getBase64Image(this);">
				</div>
			</a>
		</div>
		<div class="form-group">
			<label class="fl" for="usercall">用户昵称：</label>
			<input type="text" name="nickname" id="nickname" class="fl txt">
		</div>
		<div class="btn-wrap wrapper" onclick="appLogin.userRegistryInfo();">
			<a  name="sub" class="btn-pro">提交</a>
		</div>
	</form>
</section>
</div>
<script>
changeWidth();
function changeWidth(){
	var rem=32/320*document.documentElement.clientWidth;
	document.documentElement.style.fontSize=rem+'px';
}
window.addEventListener('resize',changeWidth,false);
//性别
Common.getDictionaryByCode("1M",function(data){
	$("#select_sex").append(data);
});
//性别
Common.getDictionaryByCode("1N",function(data){
	$("#select_city").append(data);
	$("#select_city").val("1N00");
});
//区县
Common.getDictionaryByCode("18",function(data){
	$("#select_area").append(data);
});
//年级
Common.getDictionaryByCode("1G",function(data){
	$("#select_grade").append(data);
});

$(document).ready(function() {
	$("#select_area").bind("change",function(){
		var areaId=$(this).val();
		Common.getSchoolInfo("",areaId,function(data){
	          var html = "";
              for(var i=0;i<data.length;i++){
              	html+="<option value='"+data[i].id+"'>"+data[i].value+"</option>";
              }
              $("#select_school").html(html);
		});
		
	});
	
	$("#agree_p").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
});
</script>
</body>
</html>
