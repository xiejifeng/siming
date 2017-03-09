<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="${ed.entityName?uncap_first}.page.main"></spring:message> </title>
<script type="text/javascript" src="<%=path%>${jsPath}/${ed.entityName?uncap_first}Main.js"></script>
</head>
<body>
	<table id="${ed.entityName?uncap_first}_grid"></table>
</body>
</html>