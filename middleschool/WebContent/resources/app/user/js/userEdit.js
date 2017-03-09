$(function(){
	$("#save").click(function(){
		var nodes = $('#roleTree').jTree('getChecked');
		var roleId = "";
		for ( var i = 0; i < nodes.length; i++) {
			roleId = roleId + nodes[i].id + ",";
		}
		if (roleId != "" && roleId.length > 1) {
			roleId = roleId.substring(0, roleId.length - 1);
		}
		if(roleId==""){
			$.popUpMessage('MSG_UserExpand_010',null,'0',null,false,true);
			return;
		}

		$("#editfrm").ajaxForm("submit",{
				url:web_path+"userExpand/updateUser.do",
				ismessage:true,
				issuccessmsg:false,
				isLoadMsg:false,
				data:{"roleId":roleId,"userId":$("#id").val()},
				success:function(data,status){
					$.popUpMessage('MSG_UserExpand_009',null, '0',function(){
						$("#edit_user_win").closeWindow();
						$("#user_grid").jDatagrid("load");
					},false,true);
				}
		}); 
	});
	loadTree();
});

/**
 * 加载角色树
 */
function loadTree() {
	$('#roleTree').jTree({
        checkbox: true,
        url:web_path+"userExpand/getUserRoleChecked.do?sysUserId="+$("#id").val(),
        onCheck:function(node,checked){
        	var selectedRow = $('#roleTree').tree('getChecked');
        	var nodeid="";
            if(selectedRow.length != 0){
            	for(var i=0;i<selectedRow.length;i++){
            		nodeid=nodeid+selectedRow[i].id+",";
            	}
            	$("#extandFunction").empty();
            	$('#extandFunction').jTree({
            		 checkbox: false,
            	     url:web_path+"userExpand/getRoleFunctionPoint.do?roleId="+nodeid
            	});
        	}else{
        		$("#extandFunction").empty();
        	}
        }
    });

}
