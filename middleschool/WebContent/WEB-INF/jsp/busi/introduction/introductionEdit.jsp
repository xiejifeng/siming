<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.main.title"></spring:message>
</title>
<script type="text/javascript"src="<%=path%>resources/busi/introduction/introduction.js"></script>
</head>
<body>
	<div class="Box Window">
		<div class="con">
			<form id="editfrm" method="post">
			   	    <input type="hidden" id="id" value="${introduction.id}">
			   	    <input type="hidden" id="status" value="${introduction.status}">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tbody>
										<tr>
						<td valign="top" class="tdW80">
							说明内容：
						</td>
						<td  colspan="2" >
						   <textarea rows="25" cols="100" id="content" >${introduction.content}</textarea>
						</td>
					  </tr>
					<tr>
					<tr>
						<td colspan="3" style="text-align:center; padding-top:30px;">
							<a class="btnOrange0" id="saveEditAdvertisement">保存</a>
						</td>
					</tr>
					</tbody>
				</table>
			</form>
		</div>
	</div>
</body>
</html>