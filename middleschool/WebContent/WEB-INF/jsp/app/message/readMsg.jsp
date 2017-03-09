<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="from"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<% 
String path=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
%>
<div class="toolbar panel-header" style="text-align: right;">
	<c:if test="${!empty message.action }">
		<input type="hidden" id="action" value="${message.action}">
		<a id="reset" href="javascript:void(0);"><spring:message code="app.message.action"></spring:message></a>
	</c:if>
	<a id="save" href="javascript:void(0);"><spring:message code="app.message.readed.button"></spring:message></a>
</div>
<table class="form_tabel" style="width: 100%;">
	<tr style="height: 25px;">
		<td class="td_title" style="width: 12%;">
			<spring:message code="app.message.title"></spring:message>
		</td>
		<td class="td_detail" colspan="3">
			<span>${message.msgTitle}</span>
			<input type="hidden" name="id" id="msgId" value="${message.id}"> 
		</td>
	</tr>
	<tr style="height: 25px;">
		<td class="td_title" style="width: 12%;">
			<spring:message code="app.message.grade"></spring:message>
		</td>
		<td class="td_detail" style="width:38%;">
			<span>${grade}</span>
		</td>
		<td class="td_title" style="width: 12%;">
			<spring:message code="app.message.type"></spring:message>
		</td>
		<td class="td_detail" style="width:38%;">
			<span>${msgType}</span>
		</td>
	</tr>
	<tr style="height: 25px;">
		<td class="td_title" style="width: 12%;">
			<spring:message code="app.message.sender"></spring:message>
		</td>
		<td class="td_detail" style="width:38%;">
			<span>${sender}</span>
		</td>
		<td class="td_title" style="width: 12%;">
			<spring:message code="app.message.sendDate"></spring:message>
		</td>
		<td class="td_detail" style="width:38%;">
			<span>${sendDate}</span>
		</td>
	</tr>
	<tr style="height: 115px;">
		<td class="td_title" style="width: 12%;">
			<spring:message code="app.message.content"></spring:message>
		</td>
		<td class="td_detail" colspan="3">
			<span>${message.msgContent}</span>
		</td>
	</tr>
	<tr style="height: 25px;">
		<td class="td_title" style="width: 12%;">
			<spring:message code="app.message.attachment"></spring:message>
		</td>
		<td class="td_detail" colspan="3">
			<ul>
			<c:forEach var="item" items="${message.attachments}">
				<li><a target='_blank' href="<%= path%>${item.filePath}">${item.fileName}</a></li>
			</c:forEach>
			</ul>
		</td>
	</tr>
</table>