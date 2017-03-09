function openAddRoleWindow(){
 	   $.openWindow({
 		   id:"add_role_win",
 		   resizable:false,
 		   draggable:false,
 		   title:$.getLocaleField("add_role",
			"role"),
 		   type:'iframe',
 		   width:530,
 		   height:334,
 		   modal:true,
 		   url:web_path+"role/addRole.srp",
 		   onClose:function(data){
 			  if(data){
 				 $("#role_grid").jDatagrid("load");
 			  }
 		   }
 	   },true);
}

$(function(){
	var height = $(window).height()-105;
	$("#role_grid").jDatagrid({
		height:height,
		fit:false,
		fitColumns:true,
		width:'100%',
		nowrap:false,
		striped:true,
		singleSelect:true,
		collapsible : true,
		url:web_path+"roleExpand/listRoles.do",
		remoteSort : true,
		isInitLoad : true,
		rownumbers:true,
		sortName:'id',
		sortOrder:'desc',
		queryParams:{},
		pagination : true,
		frozenColumns:[[
		]],
		columns:[[
		          {title:$.getLocaleField("role_name","role"),field:'name',width:160,align:'center'},
		          {title:$.getLocaleField("grid_operate","role"),
		             field:"id",
		             width:280,
		             align:'center',
		             formatter:function(value,row,rowindex){
		                	return '<a href="javascript:void(0);" name ="grant" code="'+row['id']+'"></a>'+"&nbsp&nbsp"
		                		+'<a href="javascript:void(0);"   name ="edit" code="'+row['id']+'"></a>'+"&nbsp&nbsp"
		                		+'<a href="javascript:void(0);"  name="delete" code="'+row['id']+'"></a>';
		             }
	              },
	              {title:$.getLocaleField("role_remark","role"),field:'remark',width:260,align:'center'}
		]],
		onLoadSuccess:function(){
			if($("a[name='edit']").size()!=0){
				$("a[name='delete']").authButton("F0010",function(target,data){
//					$.ffcsAjax({
//						url:web_path+"role/removeRole.srp",
//						data:{'id':$(target).attr("code")},
//						ismessage:true,
//						isLoadMsg:true,
//						issuccessmsg:true,
//						success:function(data){
//							if(data==1){
//								alert(data);
//								deleteRoleExpand($(target).attr("code"));
////								$("#role_grid").jDatagrid("reload");
//							}
//						}
//					});
					$.ffcsAjax({
					url:web_path+"roleExpand/deleteRoleExpand.do",
					data:{'roleId':$(target).attr("code")},
					ismessage:true,
					isLoadMsg:true,
					issuccessmsg:false,
					success:function(data){
						if(data){
							$("#role_grid").jDatagrid("reload");
						}
					}
				});
				},true);
				
				$("a[name='edit']").authButton("F0009",function(target,data){
					$.openWindow({
			    		   id:"edit_role_win",
			    		   resizable:false,
			    		   draggable:false,
			    		   title:$.getLocaleField("edit_role",
							"role"),
			    		   type:'iframe',
			    		   width:530,
			    		   height:334,
			    		   modal:true,
			    		   url:web_path+"role/editRole.srp?id="+$(target).attr("code"),
			    		   onClose:function(data){
			    			   $("#role_grid").jDatagrid("load");
			    		   }
			    	   },true);
				},true);
				
				$("a[name='grant']").authButton("F0008",function(target,data){
					$.openWindow({
			    		   id:"grant_role_win",
			    		   resizable:false,
			    		   draggable:false,
			    		   title:$.getLocaleField("resource_grant",
							"role"),
			    		   type:'iframe',
			    		   reload:true,
			    		   width:530,
			    		   height:334,
			    		   modal:true,
			    		   url:web_path+"role/showResource.srp?id="+$(target).attr("code"),
			    		   onClose:function(data){
			    			   
			    		   }
			    	   },true);
				},true);
			}
		}
	});
	
	
	$.busiAuthButton('F0006',function(data){
		var name = $("#name").val();
		if(name=="请输入..."){
			$("#name").val("");
		}
		
		$("#role_grid").jDatagrid("load",$.formItems($("#frmSearch")));
		
	 },'search');
	
	var height = $(window).height();
	$("#role_grid").datagrid('resize', {
		height : height - 57
	}); 
	
});

function deleteRoleExpand(id){
	$.ffcsAjax({
		url:web_path+"roleExpand/deleteRoleExpand.do",
		data:{'roleId':id},
		ismessage:false,
		isLoadMsg:false,
		issuccessmsg:false,
		success:function(data){
			if(data){
				$("#role_grid").jDatagrid("reload");
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


