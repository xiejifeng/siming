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
					<tr>
						<td valign="top" class="tdW80">
							关联关系:
						</td>
						<td class="tdW200">
							<input type="text" name="status" id="status" class="inputW180" value="">
						</td>
						<td></td>
					  </tr>
					<tr id="tr_city" style="display: none;">
						<td valign="top" class="tdW80">
							所属城市:：
						</td>
						<td class="tdW200">
						    <input type="hidden" id="defaultType" value="">
							<input type="text" name="city" id="city" class="inputW180">
						</td>
						<td></td>
					</tr>
					<tr id="tr_art" style="display: none;">
						<td valign="top" class="tdW80">
							艺考类型：
						</td>
						<td class="tdW200">
							<input type="text" name="arttype" id="arttype" class="inputW180" value="">
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
	
	$("#arttype").selectParam({
		required:true,
		typeId:'19',
		defaultValue:'1909',
		panelHeight:100,
		invalidMessage:'',
		width:'98%',
		onChange : function(newValue, oldValue) {
			if(newValue=='1909'){
				return;
			}
			
		}
	});
	$("#city").selectParam({
		required:true,
		typeId:'18',
		defaultValue:'1813',
		panelHeight:100,
		invalidMessage:'获取运营商信息失败',
		width:'98%',
		onChange : function(newValue, oldValue) {
			if(newValue=='1813'){
				return;
			}
		}
	});
	$("#status").selectParam({
		required:true,
		typeId:'1K',
		defaultValue:'1K02',
		panelHeight:100,
		invalidMessage:'获取运营商信息失败',
		width:'98%',
		onChange : function(newValue, oldValue) {
			if(newValue=='1K02'){
				return;
			}else if(newValue=='1K00'){
				$("#tr_city").show();
				$("#tr_art").hide();
			}else if(newValue=='1K01'){
				$("#tr_city").hide();
				$("#tr_art").show();
			}
		},
	});
	
	$("#saveAchart").click(function(){
		var status = $("#status").combo("getValue");
		var city_id = $("#city").combo("getValue");
		var arttype_id = $("#arttype").combo("getValue");
		var schoolIds ="";
		$('input:checkbox[name=school]:checked').each(function(){
			if(schoolIds==""){
				schoolIds = $(this).val();
			}else{
				schoolIds = schoolIds+","+$(this).val();
			}
		});
		
		if(status=="1K02"){
			$.popUpMessage("请选择关联关系",null,'0');
			return;
		}
		if(schoolIds==""){
			$.popUpMessage("请选择关联关系对应的学校",null,'0');
			return;
		}
		var params = {
				"city_id":city_id,
				"arttype_id":arttype_id,
				"status" :status,
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