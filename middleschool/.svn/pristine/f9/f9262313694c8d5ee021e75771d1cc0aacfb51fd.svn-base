
$(function(){
	$('#roleTree').jTree({
        checkbox: true,
        url:web_path+"userExpand/getUserRole.do",
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
	$("#username").validate({
		required:true,
		validType:'regexp',
		regular:/^\S{4,32}$/,
		invalidMessage:'user.username'
	});
	$("#password").validate({
		required:true,
		validType:'regexp',
		regular:/^\S{6,36}$/,
		invalidMessage:'user.password'
	});
	$("#comfirmPwd").validate({
		required:true
	});
	var flag=false;
	$("#comfirmPwd").keyup(function(){
		if($(this).val() && $(this).val()!=$("#password").val()){
			$("#comfirmPwd").validate("showTip",$.getMessage("user.confirm.password"));
			$("#comfirmPwd").focus();
			flag=false;
		}else{
			$("#comfirmPwd").validate("hideTip");
			flag=true;
		}
	});
	$("#username").keyup(function(){
		$.ffcsAjax({
			url:web_path + 'userExpand/findUserByName.do',
			data:{"username":$.trim($("#username").val())},
			success:function(data){
				if(data==1){
					$("#username").validate("showTip",$.getMessage("user.username.confirm"));
					$("#username").focus();
				}else{
					$("#username").validate("hideTip");
				}
				
			}
		});	
	});
	$("#comfirmPwd").blur(function(){
		if(!flag){
			$("#comfirmPwd").focus();
		}
	});
	$("#save").click(function(){

		var username = $.trim($("#username").val());
		if(username =='请输入用户名' || username == null || username ==''){
			$.popUpMessage('MSG_UserExpand_011',null,'0',null,false,true);
			return;
		}
		
//		if(!flag){
//			return;
//		}
		
		
		var pwd = $.trim($("#password").val());
		var comfirmPwd = $.trim($("#comfirmPwd").val());
		if(pwd == '' || pwd == null || pwd != comfirmPwd){
			$.popUpMessage('MSG_UserExpand_012',null,'0',null,false,true);
			return;
		}
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
		$("#addfrm").ajaxForm("submit",{
				url:web_path+"userExpand/saveUser.do",
				data:{"roleId":roleId},
				ismessage:true,
				issuccessmsg:false,
				isLoadMsg:false,
				success:function(data,status){
					if(data){
						$.popUpMessage('MSG_UserExpand_008',null, '0',function(){
							$("#add_user_win").closeWindow();
							$("#user_grid").jDatagrid("load");
						},false,true);
					}
				}
		}); 
	});
	$("#reset").click(function(){
		$("#addfrm").ajaxForm("clear"); 
		$("#username").focus();
	});

});


function change(obj){
	if(obj.value =='请输入用户名'){
		obj.value = "";
	}
}

function change1(obj){
	if(obj.value ==''){
		obj.value = "请输入用户名";
	}
}


