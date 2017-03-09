<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.main.title"></spring:message>
</title>
<script type="text/javascript"
	src="<%=path%>resources/busi/user/js/userMain.js"></script>
</head>
<body>
	<div class="search">
		<form id="searchfrm">
			<spring:message code="app.user.username"></spring:message>
			<input type="text" class="inputUserName inputUserName2" name="username" id="username" value="请输入..." onblur="change1(this)"
				onfocus="change(this)" /> 
			 &nbsp;&nbsp;<input class="btnOrange" type="button" value="<spring:message code="app.user.query"></spring:message>" id="user_search" /> 
			 &nbsp;&nbsp;<input class="btnBlue" type="button" value="<spring:message code="app.user.newUser"></spring:message>" id="user_add" />
		</form>
	</div>
	<div class="tableDiv">
		<table id="user_grid"></table>
	</div>
	<div class="search">
		<input class="btnOrange" type="button" value="<spring:message code="app.user.deleteUser"></spring:message>" id="deleteUser" /> 
		 &nbsp;&nbsp;<input class="btnBlue" type="button" value="<spring:message code="app.user.resetPwd"></spring:message>" id="resetPwd" />
	</div>
</body>
</html>