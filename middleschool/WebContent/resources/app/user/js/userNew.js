$(function(){
	$("#save").jButton({
		plain:false,
		iconCls:'icon-save'
	});
	$("#reset").jButton({
		plain:false,
		iconCls:'icon-undo'
	});
	$("#add").jButton({
		plain:false,
		iconCls:'icon-add'
	});
	$("#sub").jButton({
		plain:false,
		iconCls:'icon-remove'
	});
	
	$("#add").click(function(){
		$.openWindow({
	 		   id:"sel_role_win",
	 		   resizable:false,
	 		   draggable:true,
	 		   iconCls:"icon-member-add",
	 		   title:$.getLocaleField("grid_title","role"),
	 		   type:'html',
	 		   width:430,
	 		   height:395,
	 		   modal:false,
	 		   zIndex:999999,
	 		   url:web_path+"role/selRole.srp",
	 		   onLoadSuccess:function(data){
	 			   $.loadJs("resources/app/role/js/roleSel.js");
	 		   },
	 		   onClose:function(data){
	 			   	var opts=$("#role")[0].options;
	 				var ids = [];
	 				for(var i=0;i<opts.length;i++){
	 					ids.push(parseInt(opts[i].value));
	 				}
	 			   $.each(data,function(i,n){
	 				   if($.inArray(n.id,ids)==-1){
	 					  $("#role").append("<option value='"+n.id+"'>"+n.name+"</option>");
	 				   }
	 			   });
	 		   }
	 	   },true);
	});
	$("#sub").click(function(){
		var opts=$("#role option:selected");
		$(opts).remove();
	});
	
	$("#username").validate({
		required:true,
		msgPoint:'D',
		validType:'regexp',
		regular:/^\S{4,32}$/,
		invalidMessage:'user.username'
	});
	$("#password").validate({
		required:true,
		msgPoint:'D',
		validType:'regexp',
		regular:/^\S{4,64}$/,
		invalidMessage:'user.password'
	});
	$("#comfirmPwd").validate({
		required:true,
		msgPoint:'D'
	});
	var flag=false;
	$("#comfirmPwd").keyup(function(){
		if($(this).val() && $(this).val()!=$("#password").val()){
			$("#comfirmPwd").validate("showTip",$.getMessage("user.confirm.password"),"D");
			$("#comfirmPwd").focus();
			flag=false;
		}else{
			$("#comfirmPwd").validate("hideTip");
			flag=true;
		}
	});
	$("#comfirmPwd").blur(function(){
		if(!flag){
			$("#comfirmPwd").focus();
		}
	});
	
	$("#save").click(function(){
//		if(!flag){
//			return;
//		}
		var opts=$("#role")[0].options;
		var role={};
		for(var i=0;i<opts.length;i++){
			var str='{"roles['+i+'].id":'+opts[i].value+'}';
			$.extend(role,eval("("+str+")"));
		}
		$("#frm").ajaxForm("submit",{
				url:web_path+"user/saveUser.srp",
				ismessage:false,
				issuccessmsg:false,
				isLoadMsg:true,
				data:role,
				onBeforeLoad:function(data){
					return flag;
				},
				success:function(data,status){
					window.location.href=web_path+"user/userMain.srp";
				}
		}); 
	});
	$("#reset").click(function(){
		window.location.href=web_path+"user/userMain.srp";
	});
});