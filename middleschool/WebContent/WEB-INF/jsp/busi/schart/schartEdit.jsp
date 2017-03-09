<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.main.title"></spring:message>
</title>
<script type="text/javascript" src="<%=path%>resources/busi/schart/schart.js"></script>
<script type="text/javascript" src="<%=path%>resources/busi/schart/schartEdit.js"></script>
</head>
<body>
	<div class="Box Window">
		<div class="con">
			<form id="editfrm" method="post">
			    <input type="hidden" id="schartid" value="${schart.id}">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tbody>
					<tr>
						<td valign="top" class="tdW80">
							区域：
						</td>
						<td class="tdW200">
							<input type="text" disabled="disabled"class="inputW180" value="${schart.areaname}">
						</td>
						<td></td>
					  </tr>
					<tr>
						<td valign="top" class="tdW80">
							学校：
						</td>
						<td class="tdW200">
							<input type="text"  disabled="disabled" class="inputW180" value="${schart.schoolname}">
						</td>
						<td></td>
					</tr>
					<tr>
						<td valign="top" class="tdW80">
							优先级：
						</td>
						<td class="tdW200">
							<input type="text" name="priority" id="priority" class="inputW180" value="${schart.priority}">
						</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3" style="text-align:center; padding-top:30px;">
							<a class="btnOrange0" id="saveEditSchart">保存</a>
						</td>
					</tr>
					</tbody>
				</table>
			</form>
		</div>
	</div>
</body>
</html>