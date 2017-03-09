<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.dict.main.title"></spring:message> </title>
<script type="text/javascript" src="<%=path%>resources/app/dictionary/js/dictMain.js"></script>
</head>
<body>
    <div class="search">
		<form id="frmSearch" method="post">
			<spring:message code="app.dict.category"></spring:message>：
			<input type="text" name="code" id="categoryCode" style="width:200px;" class="inputUserName inputUserName2">
			<spring:message code="app.dict.remark"></spring:message>：
			<input type="text" name="text" id="remark" style="width:200px;" class="inputUserName inputUserName2">
			<input type="button" id="search" class="btnOrange" style="margin-left: 10px;" value="<spring:message code="common.btn.search"></spring:message>"/>
		    <input type="button" id="add" class="btnBlue" style="margin-left: 10px;" value="<spring:message code="common.btn.add"></spring:message>"/>
		</form>
	</div>
	<div class="tableDiv">
		<table id="dict_grid"></table>
		<div id="optMenu" style="width:120px;"></div>
	</div>
</body>
</html>