<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="from"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<form id="frm" method="post">
	<table class="form_tabel">
		<tr>
			<td class="td_title" style="width:25%;">
				<spring:message code="app.dict.category"></spring:message>
			</td>
			<td class="td_detail">
				<input type="text" name="code" id="categoryCode" style="width:98%;">
			</td>
		</tr>
		<tr>
			<td class="td_title">
				<spring:message code="app.dict.remark"></spring:message>
			</td>
			<td class="td_detail">
				<input type="text" name="text" id="remark" style="width:98%;">
			</td>
		</tr>
		<tr>
			<td colspan="2" align="center" style="padding-top: 15px;">
				<a id="search" href="javascript:void(0);"><spring:message code="common.btn.search"></spring:message></a>
				<a id="reset" href="javascript:void(0);"><spring:message code="common.btn.reset"></spring:message></a>
			</td>
		</tr>
	</table>
</form>