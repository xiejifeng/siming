$(function(){
	/**
	 * 保存修改
	 */
	$("#saveEditSchart").click(function(){
		var id =$("#schartid").val();
		var priority = $("#priority").val();
		if(!priority){
			priority=0;
		}
		var data={
				"id":id,
				"priority":priority
		};
		$.popUpMessage('确认修改?',null, '0',function(){
			$.ffcsAjax({
				url:web_path + 'schart/editShart.do',
				data:data,
				success:function(data){
					if(data==1){
						$.popUpMessage('修改成功',null, '0',function(){
							$("#edit_user_win").closeWindow({"result":"reload"});
						},false,true);
					}else{
						$.popUpMessage('修改成功',null, '0',function(){
							$("#edit_user_win").closeWindow({"result":"reload"});
						},false,true);
					}
					
				}
			});	
		},false,true);
	});
	
});


