<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="from"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<form id="frm" method="post">
	<table class="form_tabel">
		<#list ed.properties as pd>
		<#if !pd.primary>
		<tr>
			<td class="td_title" style="width:25%;">
				<spring:message code="${ed.entityName?uncap_first}.${pd.propertyName}"></spring:message><#if pd.notNullable><span class="required">*</span></#if>
			</td>
			<td class="td_detail">
				<#if pd.javaType.name='Boolean'>
				<input type="radio" value="1" id="${pd.propertyName}Y" name="${pd.propertyName}" value="${'$'}{${ed.entityName?uncap_first}.${pd.propertyName}}" <c:if test="${'$'}{${ed.entityName?uncap_first}.${pd.propertyName}}">checked</c:if>>
				<label for="${pd.propertyName}Y" >
					<spring:message code="common.boolean.yes"></spring:message>
				</label>
				<input type="radio" value="0" id="${pd.propertyName}N" name="${pd.propertyName}" value="${'$'}{${ed.entityName?uncap_first}.${pd.propertyName}}" <c:if test="${'$'}{!${ed.entityName?uncap_first}.${pd.propertyName}}">checked</c:if>>
				<label for="${pd.propertyName}N" >
					<spring:message code="common.boolean.no"></spring:message>
				</label>
				<#else>
				<input type="text" name="${pd.propertyName}" id="${pd.propertyName}" value="${'$'}{${ed.entityName?uncap_first}.${pd.propertyName}}">
				</#if>
			</td>
		</tr>
		</#if>
		</#list>
		<tr>
			<td colspan="2" align="center" style="padding-top: 15px;">
				<#list ed.keys as key>
					<input type="hidden" id="${key.propertyName}" name="${key.propertyName}" value="${'$'}{${ed.entityName?uncap_first}.${key.propertyName}}">
				</#list>
				<a id="save" href="javascript:void(0);"><spring:message code="common.btn.save"></spring:message></a>
				<a id="reset" href="javascript:void(0);"><spring:message code="common.btn.reset"></spring:message></a>
			</td>
		</tr>
	</table>
</form>