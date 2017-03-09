$(function(){
	$("#name").validate({
		required:true,
		validType:'valid["zh_length[2,32]"]'
	});

	$("#remark").validate({
		required:false,
		validType:'valid["zh_length[0,128]"]'
	});
	
	$("#save").click(function(){
		var name = $("#name").val();
		if(name=="请输入角色名"){
			$("#name").val("");
		}
		
		$("#frm").ajaxForm("submit",{
				url:web_path+"role/saveRole.srp",
				ismessage:true,
				issuccessmsg:false,
				isLoadMsg:true,
				success:function(data,status){
					$.popUpMessage('MSG_RoleExpand_008',null, '0',function(){
						if(data.id){
							addRoleExpand(data.id);
						}
					},false,true);
				}
		}); 
	});
	$("#reset").click(function(){
		$("#frm").ajaxForm("clear"); 
		$("#name").focus();
	});
});
function addRoleExpand(id){
	$.ffcsAjax({
		url:web_path+"roleExpand/saveRoleExpand.do",
		data:{'roleId':id},
		ismessage:false,
		isLoadMsg:false,
		issuccessmsg:false,
		success:function(data){
			if(data){
				$("#add_role_win").closeWindow(id);
			}
		}
	});
}
function change(obj){
	if(obj.value =='请输入角色名'){
		obj.value = "";
	}
}

function change1(obj){
	if(obj.value ==''){
		obj.value = "请输入角色名";
	}
}