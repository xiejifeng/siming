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
<script type="text/javascript" src="<%=path%>resources/busi/product/product.js"></script>
</head>
<body>
	<div class="search">
		<form id="searchfrm">
			物品名称:
			<input type="text" class="inputUserName inputUserName2" name="name" id="name"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		         状态:
			<input type="text" class="inputUserName inputUserName2" name="status" id="status"/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			 &nbsp;&nbsp;
		         积分范围:
			<input type="text" class="inputUserName inputUserName2" name="score" id="score"/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
			 &nbsp;&nbsp;
			 注册时间:
			 <input id="startTime" style="width: 10%;height:68%" class="Wdate"
				readonly="readonly" type="text"
				onFocus="WdatePicker({maxDate:'#F{$dp.$D(\'endTime\')||\'%y-%M-%d\'}'})" /> 
			<span>~</span>
			<input id="endTime" style="width: 10%;height:68%" class="Wdate"
				readonly="readonly" type="text"
				onFocus="WdatePicker({minDate:'#F{$dp.$D(\'startTime\')}',maxDate:'%y-%M-%d'})" />
		 	 &nbsp;&nbsp; <input class="btnOrange" type="button" value="<spring:message code="app.user.query"></spring:message>" id="product_search" />
		</form>
	</div>
	<div class="tableDiv">
		<table id="user_grid"></table>
	</div>
	<div class="search">
		<input class="btnOrange" type="button" value="物品新增" id="addAdvertisement" /> 
		 &nbsp;&nbsp;<input class="btnBlue" type="button" value="物品删除" id="deleteProduct" />
		 &nbsp;&nbsp;<input class="btnBlue" type="button" value="物品上架" id="upproduct" />
		 &nbsp;&nbsp;<input class="btnOrange" type="button" value="物品下架" id="downproduct" />
	</div>
</body>
</html>