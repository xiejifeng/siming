<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>


<script type="text/javascript"
	src="<%=path%>resources/app/user/js/userAdd.js"></script>
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
	<div class="Box Window">
		<div class="con">
			<form id="addfrm" method="post">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tbody>
						<tr>
							<td valign="top" class="tdW80"><spring:message
									code="app.user.username"></spring:message>&nbsp;:&nbsp;&nbsp;</td>
							<td class="tdW200"><input type="text" class="inputW180"
								value="请输入用户名" name="username" id="username"
								onblur="change1(this)" onfocus="change(this)" /></td>
							<td><span class="red">*</span></td>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td valign="top" class="tdW80"><spring:message
									code="app.user.password"></spring:message>&nbsp;:&nbsp;&nbsp;</td>
							<td class="tdW200"><input type="password" name="password"
								id="password" class="inputW180" /></td>
							<td><span class="red">*</span></td>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td valign="top" class="tdW80"><spring:message
									code="app.user.password.comfirm"></spring:message>&nbsp;:&nbsp;&nbsp;</td>
							<td class="tdW200"><input type="password" name="comfirmPwd"
								id="comfirmPwd" class="inputW180" /></td>
							<td><span class="red">*</span></td>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td valign="top" class="tdW80"><spring:message
									code="app.user.roles"></spring:message>&nbsp;:&nbsp;&nbsp;</td>
							<td><div class="divW180" style="width: 195px;">
									<ul id="roleTree" class="ztree"></ul>
								</div></td>
							<td valign="top" class="tdW80"><spring:message
									code="app.user.extandFunction"></spring:message>&nbsp;:&nbsp;&nbsp;</td>
							<td><div class="divW180">
									<ul id="extandFunction" class="ztree"
										style="width: 150px; overflow: auto;"></ul>
								</div></td>
						</tr>
						<tr>
							<td colspan="4" style="text-align: center; padding-top: 30px;">
								<input class="btnOrange0" type="button"
								value="<spring:message code="common.btn.save"></spring:message>"
								id="save" />&nbsp;&nbsp;&nbsp;&nbsp; <input class="btnBlue0" type="button"
								value="<spring:message code="common.btn.reset"></spring:message>"
								id="reset" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	</div>
</body>
</html>