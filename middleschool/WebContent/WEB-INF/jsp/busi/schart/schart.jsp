<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.main.title"></spring:message>
</title>
<script type="text/javascript"src="<%=path%>resources/busi/schart/schart.js"></script>
</head>
<body>
	<div class="search">
		<span>区域：</span>
		<input type="text" id="city" class="inputUserName" />
		<span style="margin-left: 15px;">学校:</span>
		<input type="text" id="tschool" class="inputUserName" />
		<input style="margin-left: 15px;" type="button" onclick="queryBehaviorByParams()" value="<spring:message code="busi.Opthis.queryBut"></spring:message>" class="btnOrange"/>
	</div>
	<div class="search">
		<input class="btnOrange" type="button" value="新增" id="addschart" /> 
		 &nbsp;&nbsp;<input class="btnBlue" type="button" value="删除" id="deleteUser" />
	</div>
	<div class="tableDiv">
		<table id="user_grid"></table>
	</div>
</body>
</html>