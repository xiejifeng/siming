<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<script type="text/javascript" src="<%=path%>resources/app/role/js/resourceSel.js"></script>
</head>
<body>
<div class="Box Window">
	<input type="hidden" value="${param.id}" id="roleId">
	<ul id="resource-tree" animate="true"></ul>
	<div class="con">
	<table width="100%" border="0" cellspacing="0" cellpadding="0">
	 <tbody>
		  <tr>
			<td style="text-align:center; padding-top:30px;">
				<input id="save" class="btnOrange0" type="button" value="<spring:message code="common.btn.save"></spring:message>"/></td>
		  </tr>
	  </tbody>
	</table>
	</div>
</div>
</body>