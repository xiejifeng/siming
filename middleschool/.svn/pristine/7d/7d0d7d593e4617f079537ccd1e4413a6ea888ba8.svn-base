<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<style>
		td {
			line-height: 35px;
			text-align: left;
		}
	</style>
	<script type="text/javascript" src="<%=path%>resources/app/dictionary/js/dictAdd.js"></script>
</head>
<body style="background: #FFFFFF;">
	<div class="Box Window">
	<form id="frm">
	    <div style="padding: 0px 10px;margin-top: 5px;margin-bottom: 10px;">
		<table class="form_tabel">
			<tr>
				<td class="td_title" style="width:25%;">
					<spring:message code="app.dict.remark"></spring:message><span class="required">*</span>
				</td>
				<td class="td_detail">
					<input type="text" id="remark" name="category.remark" readonly="readonly" value="${dictionary.category.remark}" style="width:98%;">
					<input type="hidden" id="categoryCode" name="category.categoryCode" value="${dictionary.category.categoryCode}">
				</td>
			</tr>
			<tr>
				<td class="td_title">
					<spring:message code="app.dict.association"></spring:message><span class="required">*</span>
				</td>
				<td class="td_detail">
					<input type="text" id="association" readonly="readonly" value="${dictionary.text}" style="width:98%;">
					<input type="hidden" id="association_code" name="association" value="${dictionary.code}">
				</td>
			</tr>
		</table>
		</div>
		<div class="tableDiv">
			<table id="item_grid"></table>
		</div>
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tbody>
				<tr>
					<td style="text-align:center; padding-top:5px;">
						<input id="save" class="btnOrange0" type="button" value='<spring:message code="common.btn.save"></spring:message>' />　
					</td>
				</tr>
			</tbody>
		</table>
	</form>
	</div>
</body>
</html>