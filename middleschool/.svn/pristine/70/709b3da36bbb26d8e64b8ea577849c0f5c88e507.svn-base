<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><fmt:message key="app.role.main.title"></fmt:message> </title>
<script type="text/javascript" src="<%=path%>resources/app/role/js/roleMain.js"></script>
</head>
<body>
		<div class="search">
			<form id="frmSearch" method="post">
				<span><spring:message code="app.role.name"></spring:message>：</span>
				<input type="text" name="name" id="name" style="width:200px;" class="inputUserName inputUserName2" value="请输入..." onblur="change1(this)" onfocus="change(this)">
				<!-- 
				<a id="search" href="javascript:void(0);"><spring:message code="common.btn.search"></spring:message></a>
				 -->
				<input type="button" id="search" class="btnOrange" style="margin-left: 10px;" value="<spring:message code="common.btn.search"></spring:message>"/>
				<input type="button" id="add" class="btnBlue" style="margin-left: 10px;" value="<spring:message code="common.btn.add"></spring:message>" onclick="openAddRoleWindow()"/>
			</form>
		</div>
		<div class="tableDiv">
			<table id="role_grid" style="height: 100%;"></table>
		</div>
</body>
</html>