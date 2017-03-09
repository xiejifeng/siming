<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="pageDefinition.page.preview"></spring:message> </title>
<style type="text/css">
	body{font-size:12px; }
</style>
<script type="text/javascript" src="<%=path%>resources/app/pageDefinition/js/pagePreview.js"></script>
</head>
<body>
	<#list elements as element>
	<#import "tag/${element.definition.tagTemplate}" as tag/>
	<@tag.genTag attributes=element.attributes styles=element.styles children=element.children/>
	</#list>
</body>
</html>