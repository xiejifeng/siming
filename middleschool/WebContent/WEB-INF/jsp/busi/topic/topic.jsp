<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/plugins/customer/jsp/common.jsp"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<script src="<%=path%>resources/busi/topic/js/topic.js"type="text/javascript"></script>
</head>
<body>
		<div class="search">
			<span>手机号：</span>
			<input type="text" id="tel" class="inputUserName" /> &nbsp; &nbsp;
			<span>学科：</span>
			<input type="text" id="subject" class="inputUserName" /> &nbsp; &nbsp;
	     	<span>用户姓名：</span>
			<input type="text" id="username" class="inputUserName" /> &nbsp; &nbsp;
			<span style="margin-left: 15px;"><spring:message code="busi.Opthis.queryDate"></spring:message>：</span>
			<input id="startTime" style="width: 10%;height:68%" class="Wdate"
				readonly="readonly" type="text"
				onFocus="WdatePicker({maxDate:'#F{$dp.$D(\'endTime\')||\'%y-%M-%d\'}'})" /> 
			<span>~</span>
			<input id="endTime" style="width: 10%;height:68%" class="Wdate"
				readonly="readonly" type="text"
				onFocus="WdatePicker({minDate:'#F{$dp.$D(\'startTime\')}',maxDate:'%y-%M-%d'})" />
			<input style="margin-left: 15px;" type="button" onclick="queryBehaviorByParams()" value="查询" class="btnOrange"/>
		</div>
		<div class="tableDiv">
			<table id="opthisTable" width="100%"></table>
		</div>
</body>
</html>