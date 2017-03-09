<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.new.title"></spring:message> </title>
<script type="text/javascript" src="<%=path%>resources/app/user/js/userNew.js"></script>
</head>
<body>
	<form id="frm" method="post">
		<table class="form_tabel">
			<tr>
				<td class="td_title" style="width:25%;">
					<spring:message code="app.user.username"></spring:message><span class="required">*</span>
				</td>
				<td class="td_detail">
					<input type="text" name="username" id="username" style="width:98%;">
				</td>
			</tr>
			<tr>
				<td class="td_title">
					<spring:message code="app.user.password"></spring:message><span class="required">*</span>
				</td>
				<td class="td_detail">
					<input type="password" name="password" id="password" style="width:98%;">
				</td>
			</tr>
			<tr>
				<td class="td_title">
					<spring:message code="app.user.password.comfirm"></spring:message><span class="required">*</span>
				</td>
				<td class="td_detail">
					<input type="password" name="comfirmPwd" id="comfirmPwd" style="width:98%;">
				</td>
			</tr>
			<tr>
				<td class="td_title">
					<spring:message code="app.user.roles"></spring:message>
				</td>
				<td class="td_detail">
					<table style="width:100%;">
						<tr>
							<td style="width: 80%;">
								<select multiple="multiple" id="role" size="10" style="width: 100%;"></select>
							</td>
							<td>
								<div style="margin-bottom: 10px;">
									<a id="add" href="javascript:void(0);"></a>
								</div>
								<div>
									<a id="sub" href="javascript:void(0);"></a>
								</div>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center" style="padding-top: 15px;">
					<a id="save" href="javascript:void(0);"><spring:message code="common.btn.save"></spring:message></a>
					<a id="reset" href="javascript:void(0);"><spring:message code="common.btn.back"></spring:message></a>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>