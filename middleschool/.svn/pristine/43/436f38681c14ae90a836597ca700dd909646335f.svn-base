<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title><spring:message code="app.main.title"></spring:message></title>
	<script type="text/javascript" src="<%=path %>resources/app/main/js/main.js"></script>
</head>
<body>
	<div class="header">
		<div class="logo"><img  src="<%=path%>resources/app/common/img/logo.jpg" height="40px;"></div>
		<div class="userInfo">
			<spring:message code="app.main.welcome"></spring:message>，<img src="<%=path%>resources/app/common/img/iconUserInfo.jpg" />${currentUser.username}
			&nbsp;&nbsp;<img src="<%=path%>resources/app/common/img/iconPassword.jpg" /> <a id="password" title="<spring:message code="app.login.update.password"></spring:message>" href="#"><spring:message code="app.login.update.password"></spring:message></a>
			&nbsp;&nbsp;<img src="<%=path%>resources/app/common/img/iconExit.jpg" /><a id="login" href="javascript:void(0);" title="<spring:message code="app.main.logout"></spring:message>"><spring:message code="app.main.logout"></spring:message></a>
		</div>
	</div>
	<div class="contain">
		<div id="menu" class="left">
			
		</div>
		<div class="right">
			<iframe id="home" frameborder="0" src="<%=path%>main/home.srp" style="width:100%;height:100%;margin: 0;"></iframe>
		</div>
	</div>
</body>
</html>
