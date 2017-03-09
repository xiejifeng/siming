<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/plugins/customer/jsp/common.jsp"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.login.title"></spring:message> </title>
<style type="text/css">
	table {
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: 100%;
	}
	.title {
		text-align: left;
	}
	.login {
		padding-top: 0px;
	}
	.key {
		margin-right: 10px;
		margin-bottom: 5px;
	}
</style>

<script type="text/javascript" src="<%=path %>resources/app/main/js/login.js"></script>
</head>
<body class="loginBg">
		<form id="loginForm" method="post" action="/j_spring_security_check" >
			<div class="header">
				<div class="logo"><img src="<%=path%>resources/app/common/img/logo.jpg" height="40px;"/></div>
			</div>
			<table><tr><td>
				<div class="login">
					<div class="WelcomeLogin">
						<p>
						<strong><fmt:message key="app.login.peojectname"></fmt:message>
						</strong> <fmt:message key="app.login.welcome"></fmt:message> <span>!</span>
						</p>
						<fmt:message key="app.login.info1"></fmt:message><br />
						<fmt:message key="app.login.info2"></fmt:message>
					</div>
					<div class="loginBox">
						<div class="title"><fmt:message key="app.login.box.title"></fmt:message></div>
						<div class="con">
							<div class="inputBox">
								<label class="key"><spring:message code="app.login.username"></spring:message></label>
								<input type="text"  name="j_username" id="loginName" class="inputUser" value="<fmt:message key="app.login.input.username"></fmt:message>"  onblur="if (value ==''){value='<fmt:message key="app.login.input.username"></fmt:message>';}"
								 onfocus="if (value =='<fmt:message key="app.login.input.username"></fmt:message>'){value =''}" maxlength="20"/>
								<font color="red"> *</font><br />
								 
								<label class="key"><fmt:message key="app.login.password"></fmt:message>&nbsp;&nbsp;&nbsp;</label> 
								<!-- <input type="password"  id="loginPwd" class="iconWord"   name="j_password" value="<fmt:message key="app.login.input.password"></fmt:message>"  onblur="if (value ==''){value ='<fmt:message key="app.login.input.password"></fmt:message>'};changeType(this);" 
									onfocus="if (value =='<fmt:message key="app.login.input.password"></fmt:message>'){value =''};changeType(this);" maxlength="20"/> -->
								<input type="password"  id="loginPwd" class="iconWord"  name="j_password" maxlength="20"/>
								<font color="red"> *</font>
							</div>
							<input id="loginbtn" type="button" class="btnLogin floatR" value="<fmt:message key="app.login.loginnow"></fmt:message>" />
							<div class="clear"></div>
						</div>
					</div>
				</div>
			</td></tr></table>
		</form>
	
<!-- 
	<div id="win">
		<form id="loginForm" method="post" action="/j_spring_security_check"
			style="padding-top: 15px; padding-left: 15px; font-size: 12px;">
			<table border="0" align="center" cellspacing="2">
				<tr>
					<td style="padding-right: 10px; width: 25%; font-size: 12px;"><spring:message code="app.login.username"></spring:message> <font
						color="red">*</font></td>
					<td style="width:75%;"><input type="text" name="j_username" id="loginName" value="请输入用户名" style="width: 100%;" onblur="if (value ==''){value='请输入用户名';}" 
					    onfocus="if (value =='请输入用户名'){value =''}" maxlength="20"/></td>
				</tr>
				<tr>
					<td style="font-size: 12px;width: 25%; "><fmt:message key="app.login.password"></fmt:message> <font color="red">*</font></td>
					<td>
						<span id="pass">
							<input type="text" id="loginPwd" name="j_password" value="请输入密码" style="width: 100%;" onblur="changeType(this);" 
									   onfocus="changeType(this);" maxlength="20"/>
						</span>		   
					</td>
				</tr>
				<tr>
					<td><span id="error"></span></td>
				</tr>
				<tr>
					<td colspan="2">
						<div style="text-align: center; margin-top: 10px;">
							
							<a href="javascript:void(0);" id="loginbtn" class="easyui-linkbutton" icon="icon-login" disabled><spring:message code="app.login.button.login"></spring:message> </a> 
							<a href="javascript:void(0);" id="resetbtn" class="easyui-linkbutton" icon="icon-undo" disabled><spring:message code="common.btn.reset"></spring:message> </a>
						</div>
					</td>
				</tr>
			</table>
		</form>
	</div>
	 -->
</body>
</html>