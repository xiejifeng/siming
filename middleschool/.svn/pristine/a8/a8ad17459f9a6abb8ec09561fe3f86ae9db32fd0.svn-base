<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.main.title"></spring:message>
</title>
<link rel="stylesheet" type="text/css" href="<%=path%>resources/busi/musicmanager/css/index.css" />
<script type="text/javascript"
	src="<%=path%>resources/busi/teacher/js/teacher.js"></script>
</head>
<body>
	<div class="search">
		<form id="searchfrm">
			手机号:
			<input type="text" class="inputUserName inputUserName2" name="tel" id="tel" /> &nbsp; &nbsp;
			城市:
			<input type="text" class="inputUserName inputUserName2" name="cityorqx" id="cityorqx"/> &nbsp;&nbsp;
			培训学校:
			<input type="text" class="inputUserName inputUserName2" name="tschool" id="tschool"/> &nbsp;&nbsp;
			账户状态:
			<input type="text" class="inputUserName inputUserName2" name="status" id="status"/> 
			 &nbsp;&nbsp;<input class="btnOrange" type="button" value="<spring:message code="app.user.query"></spring:message>" id="user_search" />
		</form>
	</div>
	<div class="tableDiv">
		<table id="user_grid"></table>
	</div>
	<div class="search">
		<input class="btnOrange" type="button" value="教师审核" id="teachercheck" />&nbsp;&nbsp;
		<input class="btnBlue" type="button" value="账户冻结" id="lockAccount" />&nbsp;&nbsp;
		<input class="btnBlue" type="button" value="账户解冻" id="unLockAccount" />&nbsp;&nbsp;
		<input class="btnBlue" type="button" value="批量删除" id="deleteUser" />
	</div>
</body>
</html>