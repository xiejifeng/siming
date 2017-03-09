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

		$("#frm").ajaxForm("submit",{
				url:web_path+"role/saveRole.srp",
				ismessage:true,
				issuccessmsg:false,
				isLoadMsg:true,
				success:function(data,status){
					$.popUpMessage('MSG_RoleExpand_009',null, '0',function(){
						if(data.id){
							$("#edit_role_win").closeWindow();
						}
					},false,true);
				}
		}); 
	});
	$("#reset").click(function(){
		var id=$("#roleId").val();
		$("#frm").ajaxForm("clear"); 
		$("#roleId").val(id);
	});
});