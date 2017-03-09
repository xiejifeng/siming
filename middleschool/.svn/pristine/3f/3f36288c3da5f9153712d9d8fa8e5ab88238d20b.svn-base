<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/plugins/customer/jsp/common.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="app.user.main.title"></spring:message>
</title>
</head>
<body>
	<div class="Box Window">
		<div class="con">
			<form id="editfrm" method="post">
			    <input type="hidden" id="book_id" value="${bookInfo.id}">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tbody>
					<tr id="tr_city">
						<td valign="top" class="tdW80">
							区域:
						</td>
						<td class="tdW200">
						    <input type="hidden" id="defaultType" value="">
							<input type="text" name="city" id="city" class="inputW180">
						</td>
						<td></td>
					</tr>
					<tr>
						<td valign="top" class="tdW80">
							学校：
						</td>
						<td  colspan="3" id="school_td">
							
						</td>
					</tr>
					<tr>
						<td colspan="3" style="text-align:center; padding-top:30px;">
							<a class="btnOrange0" id="saveAchart">保存</a>
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
	$.ffcsAjax({
		url:web_path + 'schart/getDictionaryByCode.do',
		data:{"code":"1A"},
		isLoadMsg:true,
		success:function(data){
			var html="";
			for(var i=0;i<data.length;i++){
				if(data[i].value=='全部'){
					continue;
				}
				html=html+"<input name='school' type='checkbox' value='"+data[i].id+"' />"+data[i].value;
			}
			$("#school_td").html(html);
		}
	});	

	$("#city").selectParam({
		required:true,
		typeId:'18',
		defaultValue:'1813',
		panelHeight:100,
		invalidMessage:'获取运营商信息失败',
		width:'98%'
	});	
	$("#saveAchart").click(function(){
		var area_id = $("#city").combo("getValue");
		var schoolIds ="";
		$('input:checkbox[name=school]:checked').each(function(){
			if(schoolIds==""){
				schoolIds = $(this).val();
			}else{
				schoolIds = schoolIds+","+$(this).val();
			}
		});
		
		if(area_id=="1813"){
			$.popUpMessage("请选择区域",null,'0');
			return;
		}
		if(schoolIds==""){
			$.popUpMessage("请选择关联关系对应的学校",null,'0');
			return;
		}
		var params = {
				"area_id":area_id,
				"schoolIds":schoolIds
		 };
	$.popUpMessage('您要新增这些对应关系?',null, '0', function(){	
		$.ffcsAjax({
			url:web_path + 'schart/saveschart.do',
			data:params,
			isLoadMsg:true,
			success:function(data){
                if(data){
					$.popUpMessage('添加成功',null, '0',function(){
						$("#add_user_win").closeWindow({"result":"reload"});
					},false,true);
                }
			}
		});	
	}, function (){
		return;
	});
	});
});
</script>

</html>