<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title><spring:message code="app.resource.main.title"></spring:message> </title>
	<script type="text/javascript" src="<%=path%>resources/app/resource/js/resourceMain.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=path%>resources/app/resource/css/resourceMain.css">
	<style>
		td {
			line-height: 35px;
			text-align: left;
		}
	</style>
</head>
<body>
	<div class="leftDiv">
		<fieldset>
			<legend title='<fmt:message key="resource.main.tree.title"></fmt:message>'><spring:message code="resource.main.tree.title"></spring:message> </legend>
			<div class="treeDiv">
				<ul id="resource-tree" animate="true"></ul>
			</div>
		</fieldset>
	</div>
	<div class="rightDiv">
		<fieldset>
			<legend title='<fmt:message key="elementDefinition.main.details.title"></fmt:message>'><spring:message code="elementDefinition.main.details.title"></spring:message> </legend>
			<form id="frm" method="post">
				<table class="form_tabel">
					<tr>
						<td class="td_title">
							<spring:message code="app.resource.resourceKey"><span class="required">*</span></spring:message>
						</td>
						<td class="td_detail">
							<input type="text" id="resourceKey" name="resourceKey" readonly="readonly">
							<input type="hidden" name="id" id="id">
						</td>
						<td class="td_title">
							<spring:message code="app.resource.name"><span class="required">*</span></spring:message>
						</td>
						<td class="td_detail">
							<input type="text" id="name" name="name">
						</td>
					</tr>
					<tr>
						<td class="td_title">
							<spring:message code="app.resource.parent"><span class="required">*</span></spring:message>
						</td>
						<td class="td_detail">
							<input type="text" id="parentName" readonly="readonly">
							<input type="hidden" id="parent" name="parent">
						</td>
						<td class="td_title">
							<spring:message code="app.resource.priority"></spring:message>
						</td>
						<td class="td_detail">
							<input type="text" id="priority" name="priority">
						</td>
					</tr>
					<tr>
						<td class="td_title">
							<spring:message code="app.resource.viewType"><span class="required">*</span></spring:message>
						</td>
						<td class="td_detail">
							<input type="text" id="viewType" name="viewType">
						</td>
						<td class="td_title">
							<spring:message code="app.resource.iconCls"></spring:message>
						</td>
						<td class="td_detail">
							<input type="text" id="iconCls" name="iconCls">
						</td>
					</tr>
					<tr>
						<td class="td_title">
							<spring:message code="app.resource.enabled"><span class="required">*</span></spring:message>
						</td>
						<td class="td_detail">
							<input type="radio" name="enabled" id="enabledY" checked="checked" value="1">
							<label for="enabledY"><spring:message code="common.boolean.yes"></spring:message> </label>
							<input type="radio" name="enabled" id="enabledN" value="0">
							<label for="enabledN"><spring:message code="common.boolean.no"></spring:message> </label>
						</td>
						<td class="td_title">
							<spring:message code="app.resource.isPublic"><span class="required">*</span></spring:message>
						</td>
						<td class="td_detail">
							<input type="radio" name="isPublic" id="isPublicY" value="1">
							<label for="isPublicY"><spring:message code="common.boolean.yes"></spring:message> </label>
							<input type="radio" name="isPublic" id="isPublicN" checked="checked" value="0">
							<label for="isPublicN"><spring:message code="common.boolean.no"></spring:message> </label>
						</td>
					</tr>
					<tr>
						<td class="td_title">
							<spring:message code="app.resource.remark"></spring:message>
						</td>
						<td class="td_detail">
							<input type="text" id="remark" name="remark">
						</td>
						<td class="td_title"></td>
						<td class="td_detail"></td>
					</tr>
				</table>
			</form>
			<table id="item_grid"></table>
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tbody>
					<tr>
						<td style="text-align:center; padding-top:5px;">
							<input id="save" class="btnOrange0" type="button" value='<spring:message code="common.btn.save"></spring:message>' />　
						</td>
					</tr>
				</tbody>
			</table>
		</fieldset>
	</div>
	<div id="mm" class="easyui-menu" style="width:120px;">
		<div id="append" iconCls="icon-add">
			<spring:message code="resource.operate.append"></spring:message>
		</div>
		<div class="menu-sep"></div>
		<div id="delete" iconCls="icon-remove">
			<spring:message code="resource.operate.remove"></spring:message>
		</div>
	</div>
</body>
</html>