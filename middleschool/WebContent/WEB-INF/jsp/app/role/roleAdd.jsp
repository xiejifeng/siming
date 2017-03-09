<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<script type="text/javascript" src="<%=path%>resources/app/role/js/roleAdd.js"></script>
</head>
<body>
	<div class="Box Window">
		<div class="con">
		<form id="frm" method="post">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tbody>
					<tr>
						<td valign="top" class="tdW80">
							<spring:message code="app.role.name"></spring:message>：
						</td>
						<td class="tdW200">
							<input type="text" name="name" id="name" class="inputW180" value="请输入角色名" onblur="change1(this)" onfocus="change(this)">
						</td>
						<td><span class="red">*</span></td>
					</tr>
					<tr>
						<td valign="top" class="tdW80">
							<spring:message code="app.role.remark"></spring:message>：
						</td>
						<td colspan="2">
							<textarea rows="" id="remark" name="remark" style="height:160px; width:230px;"></textarea>
						</td>
					</tr>
					<tr>
						<td colspan="3" style="text-align:center; padding-top:30px;">
							<a id="save" class="btnOrange0" href="javascript:void(0);"><spring:message code="common.btn.save"></spring:message></a>
							<a id="reset" class="btnBlue0" href="javascript:void(0);" style="margin-left: 8px;"><spring:message code="common.btn.reset"></spring:message></a>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
		</div>
	</div>
</body>