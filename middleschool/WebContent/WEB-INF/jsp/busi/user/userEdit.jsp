<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="from"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%
    String path = request.getScheme() + "://" + request.getServerName() + ":"
            + request.getServerPort() + request.getContextPath() + "/";
%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>

<!-- ztree -->
<link rel="stylesheet" href="<%=path%>plugins/ztree/css/zTreeStyle.css"
	type="text/css" />
<script type="text/javascript"
	src="<%=path%>plugins/ztree/js/min/jquery.ztree.core-3.5.min.js"></script>
<script type="text/javascript"
	src="<%=path%>plugins/ztree/js/min/jquery.ztree.excheck-3.5.min.js"></script>
<script type="text/javascript"
	src="<%=path%>plugins/ztree/js/min/jquery.ztree.exedit-3.5.min.js"></script>
</head>
<body>
	<div class="Box Window" id="EditorUser">
		<div class="con">
			<form id="editfrm" method="post">

				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td valign="top" class="tdW80"><spring:message
								code="app.user.username"></spring:message>：</td>
						<td class="tdW200"><input type="hidden" name="id" id="id"
							value="${user.id}"> <input type="text" class="inputW180"
							id="username" name="username" value="${user.username}"
							disabled="disabled" /></td>
						<td><span class="red">*</span></td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td valign="top" class="tdW80"><spring:message code="app.user.role"></spring:message></td>
						<td><div class="divW180">
								<ul id="roleTree" class="ztree"></ul>
							</div></td>
						<td valign="top" class="tdW80"><spring:message
								code="app.user.extandFunction"></spring:message>：</td>
						<td><div class="divW180">
								<ul id="extandFunction" class="ztree"
									style="width: 150px; overflow: auto;"></ul>
							</div></td>
					</tr>
					<tr>
						<td colspan="4" style="text-align: center; padding-top: 30px;"><input
							class="btnOrange0" type="button" id="save"
							value="<spring:message code="common.btn.save"></spring:message>" /></td>
					</tr>
				</table>

			</form>
		</div>
	</div>
</body>
</html>