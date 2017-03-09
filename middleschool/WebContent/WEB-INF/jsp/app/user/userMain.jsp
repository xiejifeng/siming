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
<script type="text/javascript" src="<%=path%>resources/app/user/js/userMain.js"></script>
</head>
<body>
	<div class="search">
		<form id="searchfrm">
			用户姓名:
			<input type="text" class="inputUserName inputUserName2" name="username" id="username"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			手机号:
			<input type="text" class="inputUserName inputUserName2" name="tel" id="tel" /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			用户状态:
			<input type="text" class="inputUserName inputUserName2" name="status" id="status"/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			 &nbsp;&nbsp;
			 注册时间:
			 <input id="startTime" style="width: 10%;height:68%" class="Wdate"
				readonly="readonly" type="text"
				onFocus="WdatePicker({maxDate:'#F{$dp.$D(\'endTime\')||\'%y-%M-%d\'}'})" /> 
			<span>~</span>
			<input id="endTime" style="width: 10%;height:68%" class="Wdate"
				readonly="readonly" type="text"
				onFocus="WdatePicker({minDate:'#F{$dp.$D(\'startTime\')}',maxDate:'%y-%M-%d'})" />
		</form>
	</div>
	<div class="search">
                               区域:
			<input type="text" class="inputUserName inputUserName2" name="cityorqx" id="cityorqx"/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			学校:
			<input type="text" class="inputUserName inputUserName2" name="tschool" id="tschool"/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			年级:
			<input type="text" class="inputUserName inputUserName2" name="grade" id="grade"/> &nbsp; &nbsp;&nbsp;
            <input class="btnOrange" type="button" value="<spring:message code="app.user.query"></spring:message>" id="user_search" />
	 </div>
	<div class="tableDiv">
		<table id="user_grid"></table>
	</div>
	<div class="search">
 	<input class="btnOrange" type="button" value="学生审核" id="teachercheck" />&nbsp;&nbsp;
 	<input class="btnBlue" type="button" value="账户冻结" id="lockAccount" />
 	<input class="btnBlue" type="button" value="账户解冻" id="unLockAccount" />
	<input class="btnOrange" type="button" value="批量删除" id="deleteUser" /> 
	</div>
</body>
</html>