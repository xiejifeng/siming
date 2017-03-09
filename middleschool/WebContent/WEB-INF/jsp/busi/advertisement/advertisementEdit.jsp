<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.main.title"></spring:message>
</title>
<script type="text/javascript"
	src="<%=path%>resources/busi/advertisement/advertisement.js"></script>
</head>
<body>
	<div class="Box Window">
		<div class="con">
			<form id="editfrm" method="post">
			    <input type="hidden" id="advertisementId" value="${advertisement.id}">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tbody>
					<tr>
						<td valign="top" class="tdW80">
							连接地址：
						</td>
						<td class="tdW200">
							<input type="text" name="click_url" id="click_url" class="inputW180" value="${advertisement.click_url}">
						</td>
						<td></td>
					  </tr>
					<tr>
						<td valign="top" class="tdW80">
							是否上架：
						</td>
						<td class="tdW200">
						    <input type="hidden" id="defaultType" value="${advertisement.status}">
							<input type="text" name="status" id="status" class="inputW180">
						</td>
						<td></td>
					</tr>
					<tr>
						<td valign="top" class="tdW80">
							优先级：
						</td>
						<td class="tdW200">
							<input type="text" name="priority" id="priority" class="inputW180" value="${advertisement.priority}">
						</td>
						<td></td>
					</tr>
					<tr>
					<td valign="top" class="tdW80">
							持续时间：
						</td>
						<td class="tdW200">
							<input type="text" name="keeptime" id="keeptime" class="inputW180" value="${advertisement.keeptime}">
						</td>
						<td></td>
					</tr>
	            	<tr>
						<td valign="top" class="tdW80">
							封面：
						</td>
						<td class="tdW200">
							<img alt="" id="pre_cover" style="height:100px; width:200px;"  src="${advertisement.img_url}">
						</td>
						<td>
						  <input type="file" name="cover" id="cover" onchange="javascript:_modifyUserImg(this);">
						</td>
					</tr>
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
<script type="text/javascript">
$(document).ready(function(){ 
	$("#status").selectParam({
		required:true,
		typeId:'1J',
		defaultValue:$("#defaultType").val(),
		panelHeight:100,
		invalidMessage:'获取账户状态失败',
		width:'98%'
	});
});
</script>
</html>