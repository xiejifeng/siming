<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<script type="text/javascript" src="<%=path%>resources/app/dictionary/js/dictNew.js"></script>
</head>
	<body style="background: #FFFFFF;">
		<div class="Box Window">
		<form id="frm">
		    <div class="search">
				<spring:message code="app.dict.remark"></spring:message>：
				<input type="text" id="remark" name="category.remark" />
				<span class="red">*</span>
			</div>
			<div class="tableDiv">
				<table id="item_grid"></table>
			</div>
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tbody>
					<tr>
						<td style="text-align:center; padding-top:10px;">
							<input id="save" class="btnOrange0" type="button" value='<spring:message code="common.btn.save"></spring:message>' />　
							<input id="reset" class="btnBlue0" type="button" value='<spring:message code="common.btn.reset"></spring:message>' />
						</td>
					</tr>
				</tbody>
			</table>
		</form>
		</div>
	</body>
</html>