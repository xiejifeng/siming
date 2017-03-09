<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/plugins/customer/jsp/appcommon.jsp"%>
<!DOCTYPE>
<html>
<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
		<title>思明E学</title>
	    <link rel="stylesheet" type="text/css" href="<%=path%>resources/app/common/appcss/common.css">
	    <link rel="stylesheet" href="<%=path%>resources/app/common/appcss/formPro.css"></head>
</head>
<body>
<header class="wrapper">
	<h2>找回密码</h2>
	<a onclick="Common.back(1,1);" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
	<a  class="home" onclick="Personal.index();"></a>
</header>
<section class="user-reg">
	<form action="#" method="post">
		<div class="form-group">
			<label class="fl" for="phone">手机号码：</label>
			<input type="text" id="tel" class="fl txt">
		</div>
		<div class="form-group">
			<label class="fl" for="phone">验证码：</label>
			<input type="text" id="code" class="fl txt code-text">
			<a name="code" id="validateTime" onclick="appLogin.getValidateCode(2);" class="code">获取</a>
		</div>
		<div class="form-group">
			<label class="fl" for="phone">新密码：</label>
			<input type="password" id = "newPwd" maxlength="18" min="6" onkeyup="value=value.replace(/[\W]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))"class="fl txt">
		</div>
		<div class="btn-wrap wrapper" onclick="appLogin.reSetPwd();">
			<a  name="sub" class="btn-pro">提交</a>
		</div>
	</form>
</section>
<script>
changeWidth();
function changeWidth(){
	var rem=32/320*document.documentElement.clientWidth;
	document.documentElement.style.fontSize=rem+'px';
}
window.addEventListener('resize',changeWidth,false);
</script>
</body>
</html>