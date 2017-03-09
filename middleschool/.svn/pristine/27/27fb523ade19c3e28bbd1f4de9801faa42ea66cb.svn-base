$(function(){
	$("#save").jButton({
		plain:true,
		iconCls:'icon-email-go'
	});
	$("#reset").jButton({
		plain:true,
		iconCls:'icon-email-transfer'
	});
	var curUser=$.loginUser();
	$("#save").click(function(){
		$.ffcsAjax({
			url:web_path+"message/readMessage.srp",
			data:{"id":$("#msgId").val(),"receiver":curUser.id},
			success:function(data){
				if(data){
					$("#read_message_win").closeWindow();
					$("#message_grid").jDatagrid("reload");
				}
			}
		});
	});
	
	$("#reset").click(function(){
		var action=$("#action").val();
		if(action){
//			$("#read_message_win").closeWindow();
			$.addTab($.getLocaleField("msg_event","home"),web_path+action,'icon-email-transfer');
		}
	});
});