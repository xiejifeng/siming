<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<form id="loginFrm">
    <table align="center" style="font-size: 12px;">
	    <tbody>
	    	<tr>
				<td>用户名</td>
				<td>
                                    <input type="text" id="loginName" name="loginUser.loginName" style="width: 230px;" readonly="readonly"/>
				</td>
			</tr>
	        <tr>
	            <td>
	               	密码
	            </td>
	            <td>
	                <input type="password" id="loginPwd" name="loginUser.loginPwd"  style="width: 230px;"/>
	            </td>
	        </tr>
	        
	        <tr>
	        <td></td>
	        </tr>
	        <tr>
	            <td colspan="2" align="center">
	                <a href="javascript:void(0);" id="loginbtn" onclick="onLoginHandler();">登录</a>
	            </td>
	        </tr>
	    </tbody>
	</table>
</form>