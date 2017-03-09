<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.main.title"></spring:message>
</title>
<script type="text/javascript" src="<%=path%>plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="<%=path%>resources/busi/product/productEdit.js"></script>

</head>
<body>
	<div class="Box Window">
		<div class="con">
			<form id="editfrm" method="post">
			    <input type="hidden" id="id" value="${product.id}">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tbody>
					<tr>
						<td valign="top" class="tdW80">
							物品名称：
						</td>
						<td class="tdW200">
							<input type="text" name="name" id="name" class="inputW180" value="${product.name }">
						</td>
						<td></td>
					  </tr>
					<tr>
						<td valign="top" class="tdW80">
							兑换积分：
						</td>
						<td class="tdW200">
							<input type="text" name="score" id="score" class="inputW180" value="${product.score }">
						</td>
						<td></td>
					</tr>
					<tr>
						<td valign="top" class="tdW80">
							库存：
						</td>
						<td class="tdW200">
							<input type="text" name="stock" id="stock" class="inputW180" value="${product.stock }">
						</td>
						<td></td>
					</tr>
					<tr>
						<td valign="top" class="tdW80">
							物品介绍：
						</td>
						<td class="tdW200" colspan="3" >
							<textarea style="width: 457px;height: 80px;" name="introduce" id="introduce" class="inputW180">${product.introduce}</textarea>
						</td>
						<td></td>
					</tr>
					<tr>
						<td valign="top" class="tdW80">
							是否上架：
						</td>
						<td colspan="2">
						    <input type="hidden" id="defaultType" value="${product.status }">
							<input type="text" name="status" id="status" class="inputW180">
						</td>
						<td></td>
					</tr>
					<tr>
						<td valign="top" class="tdW80">
							物品图片：
						</td>
						<td class="tdW200">
							<img alt="" id="main_img" style="height:100px; width:150px;"  src="${product.mainimg}" onclick="main_img.click();">
							<div style="display: none;">
							   <input type="file" id="main_img" onchange="javascript:_modifyUserImg(this,'main_img');" />
							</div>
						</td>
						<td class="tdW200">
						<img alt="" id="product_img_1" name="product_img" style="height:100px; width:150px;"  src="" onclick="product_img_1.click();">
						<div style="display: none;">
							   <input type="file" id="product_img_1" onchange="javascript:_modifyUserImg(this,'product_img_1');" />
						</div>
						</td>
						<td class="tdW200">
						<img alt="" id="product_img_2" name="product_img" style="height:100px; width:150px;"  src="" onclick="product_img_2.click();">
						<div style="display: none;">
							   <input type="file" id="product_img_2" onchange="javascript:_modifyUserImg(this,'product_img_2');" />
						</div>
						</td>
						<td class="tdW200">
						<img alt="" id="product_img_3" name="product_img" style="height:100px; width:150px;"  src="" onclick="product_img_3.click();">
						<div style="display: none;">
							   <input type="file" id="product_img_3" onchange="javascript:_modifyUserImg(this,'product_img_3');" />
						</div>
						</td>
						<td class="tdW200">
						<img alt="" id="product_img_4" name="product_img" style="height:100px; width:150px;"  src="" onclick="product_img_4.click();">
						<div style="display: none;">
							   <input type="file" id="product_img_4" onchange="javascript:_modifyUserImg(this,'product_img_4');" />
						</div>
						</td>
					</tr>
					<tr>
						<td colspan="6" style="text-align:center; padding-top:30px;">
							<a class="btnOrange0" id="saveEditProduct">保存</a>
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