<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="from"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<div class="Box Window">
	<form id="frm" method="post">
	    <div class="con">
		    <table style="width:100%;">
		        <tr>
		            <td style="width:30%;"><spring:message code="app.main.old.password"></spring:message><label style="color:red;">*</label></td>
		            <td>
		                <input type="password" id="old_password" style="width:200px;"/>
		            </td>
		        </tr>
		        <tr>
		            <td><spring:message code="app.main.new.password"></spring:message><label style="color:red;">*</label></td>
		            <td><input type="password" id="new_password"/ style="width:200px;"></td>
		        </tr>
		        <tr>
		            <td><spring:message code="app.main.confirm.password"></spring:message><label style="color:red;">*</label></td>
		            <td><input type="password" id="confirm_password" style="width:200px;"/></td>
		        </tr>
		        <tr>
		            <td colspan="2" style="text-align: center;">
		                <input class="btnOrange0" type="button" value="<spring:message code="common.btn.save"></spring:message>" id="save" />&nbsp;&nbsp;&nbsp;&nbsp; 
						<input class="btnBlue0" type="button" value="<spring:message code="common.btn.reset"></spring:message>" id="reset" />
		            </td>
		        </tr>
		    </table>
	    </div>
	</form>
</div>
