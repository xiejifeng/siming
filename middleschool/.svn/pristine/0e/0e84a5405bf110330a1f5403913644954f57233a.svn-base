$(function(){
	initDatagrid();
	
	
	$.busiAuthButton("F0002",function(){
		//查询用户
			var username = $("#username").val();
			if(username=="请输入..."){
				$("#username").val("");
			}
			var params = {
					"username" : $("#username").val().toString()
				};
			$("#user_grid").jDatagrid("load",params);
	},"user_search");
	
	
	
	
	
	//新增用户按钮
	$.busiAuthButton("F0001",function(){
		//新建用户
			 $.openWindow({
				   id:"add_user_win",
				   resizable:false,
				   draggable:false,
				   type:'iframe',
	    		   title:'新增用户',
				   width:580,
				   height:450,
				   modal:true,
				   url:web_path+"user/userAdd.srp",
				   onLoadSuccess:function(data){
					   $.loadJs("resources/app/user/js/userAdd.js");
				   },
				   onClose:function(data){
					   if(data){
			 				 $("#user_grid").jDatagrid("load");
			 			  }
				   }
			   },true);
	},"user_add");
	
	//删除用户按钮
	$.busiAuthButton("F0003",function(){
			var selectedRow = $('#user_grid').datagrid('getSelections');
			var userIds="";
			if(selectedRow.length==0){
				$.popUpMessage("MSG_UserExpand_014",null,'0');
				return false;
			}else{
				 for(var i=0;i<selectedRow.length;i++){
					 userIds=userIds+selectedRow[i].id+",";
				 }
				 $.popUpMessage('MSG_UserExpand_006', [$.getBusinessField("user_delete","user")], '0', function(){
						$.ffcsAjax({
							url:web_path + 'userExpand/deleteUser.do',
							data:{"userIds":userIds},
							success:function(data){
								if(data){
									$.popUpMessage('MSG_UserExpand_007',null, '0',function(){
										 $("#user_grid").jDatagrid("reload");
									},false,true);
								}else{
									$.popUpMessage('MSG_UserExpand_015',null, '0',function(){
										 $("#user_grid").jDatagrid("reload");
									},false,true);
								}
								
							}
						});	
					}, function (){
						return;
					});
					
			}
	},"deleteUser");
	
	//密码重置按钮
	$.busiAuthButton("F0003",function(){
			var selectedRow = $('#user_grid').datagrid('getSelections');
			var userIds="";
			if(selectedRow.length==0){
				$.popUpMessage("MSG_UserExpand_014",null,'0');
				return false;
			}else{
				 for(var i=0;i<selectedRow.length;i++){
					 userIds=userIds+selectedRow[i].id+",";
					}
					$.popUpMessage('MSG_UserExpand_006', [$.getBusinessField("user_password_reset","user")], '0', function(){
						$.ffcsAjax({
							url:web_path + 'userExpand/updatePwd.do',
							data:{"userIds":userIds},
							success:function(data){
								    $("#user_grid").jDatagrid("reload");
							}
						});	
					}, function (){
						return;
					});
			}
	},"resetPwd");
	
	
	// 获取页面宽度
	var height = $(window).height();
	$("#user_grid").datagrid('resize', {
		height : height - 150
	});
});

function initDatagrid(){
	var height = $(window).height()-120;
	$("#user_grid").jDatagrid({
		height:height,
		width:"100%",
		fit:false,
		fitColumns:true,
		nowrap:false,
		striped:true,
		singleSelect:false,
		collapsible : true,
		url:web_path+"userExpand/listBackUsers.do",
		remoteSort : true,
		isInitLoad : true,
		rownumbers:true,
		sortName:'id',
		sortOrder:'ASC',
		pagination : true,
		frozenColumns:[[
		                {title:" ",field:' ',width : 20,align:'center',checkbox:true}
		               
		]],
		columns:[[
		          {title:$.getLocaleField("user_username","user"),field:'username',width:160,align:'center'},
		          {title:$.getLocaleField("user_create_time","user"),field:'insertDate',width:160,align:'center'},
		          {title:$.getLocaleField("user_creater","user"),field:'createName',width:160,align:'center'},
		          {title:$.getLocaleField("grid_operate","user"),
			             field:"id",
			             width:120,
			             align:'center',
			             formatter:function(value,row,rowindex){
			                	return '<a href="javascript:void(0);" name="edit" code="'+row['id']+'" ></a>'
			                		+'<a href="javascript:void(0);" name="delete" code="'+row['id']+'"></a>'
			                		+'<a href="javascript:void(0);" name="password" code="'+row['id']+'"></a>'
			                		+'<a href="javascript:void(0);" name="logout" code="'+row['id']+'"></a>'
			                		+'<a href="javascript:void(0);" name="lock" code="'+row['id']+'"></a>';
			                }
		                }
		]],

		onLoadSuccess:function(){
			if($("a[name='edit']").size()!=0){
				$("a[name='edit']").authButton("F0011",function(target,data){
					$.openWindow({
			    		   id:"edit_user_win",
			    		   resizable:false,
			    		   draggable:false,
			    		   title:data.name,
			    		   type:'html',
			    		   width:580,
			    		   height:457,
			    		   modal:true,
			    		   url:web_path+"user/userEdit.srp?userId="+$(target).attr("code"),
			    		   onLoadSuccess:function(data){
			    			   $.loadJs("resources/app/user/js/userEdit.js");
			    		   },
			    		   onClose:function(data){
			    			   
			    		   }
			    	   },true);
				},true);
			}
		}
	});
}
function change(obj){
	if(obj.value =='请输入...'){
		obj.value = "";
	}
}



function change1(obj){
	if(obj.value ==''){
		obj.value = "请输入...";
	}
}
