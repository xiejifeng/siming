$(function(){
	initDatagrid();
	$("#status").selectParam({
		required:true,
		typeId:'17',
		defaultValue:'1700',
		panelHeight:100,
		invalidMessage:'获取账户状态失败',
		width:'98%'
	});
	
	//城市
	$("#cityorqx").selectParam({
		required:true,
		typeId:'18',
		defaultValue:'1813',
		panelHeight:100,
		invalidMessage:'获取城市信息失败',
		width:'98%'
	});
	//培训学校
	$("#tschool").selectParam({
		required:true,
		typeId:'1A',
		defaultValue:'1A48',
		panelHeight:100,
		invalidMessage:'获取培训学校信息失败',
		width:'98%'
	});
	$.busiAuthButton("F0002",function(){
		//查询用户
			var params = {
					"tel" : $("#tel").val().toString(),
					"cityorqx" : $("#cityorqx").combo("getValue"),
					"status" : $("#status").combo("getValue"),
					"tschool" : $("#tschool").combo("getValue")
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
	
	//操作0：审核 1 冻结 2解冻
	//审核
	$.busiAuthButton("F0003",function(){
			var selectedRow = $('#user_grid').datagrid('getSelections');
			var userIds="";
			if(selectedRow.length==0){
				$.popUpMessage("MSG_UserExpand_014",null,'0');
				return false;
			}else{
				 for(var i=0;i<selectedRow.length;i++){
					 userIds=userIds+selectedRow[i].userId+"#"+selectedRow[i].status+"#0,";
				 }
				 if(userIds.indexOf("1702")>0||userIds.indexOf("1703")>0){
					 $.popUpMessage("所选择的账户中存在已被审核或已被冻结",null,'0');
						return false;
				 }
				 $.popUpMessage('MSG_UserExpand_006', ['完成教师审核'], '0', function(){
						$.ffcsAjax({
							url:web_path + 'teacher/passCheck.do',
							data:{"userIds":userIds},
							success:function(data){
								if(data){
									$.popUpMessage('审核成功',null, '0',function(){
										 $("#user_grid").jDatagrid("reload");
									},false,true);
								}else{
									$.popUpMessage('审核成功',null, '0',function(){
										 $("#user_grid").jDatagrid("reload");
									},false,true);
								}
								
							}
						});	
					}, function (){
						return;
					});
					
			}
	},"teachercheck");
	
	//冻结
	$.busiAuthButton("F0003",function(){
			var selectedRow = $('#user_grid').datagrid('getSelections');
			var userIds="";
			if(selectedRow.length==0){
				$.popUpMessage("MSG_UserExpand_014",null,'0');
				return false;
			}else{
				 for(var i=0;i<selectedRow.length;i++){
					 userIds=userIds+selectedRow[i].userId+"#"+selectedRow[i].status+"#1,";
					}
				 if(userIds.indexOf("1703")>0){
					 $.popUpMessage("所选择的账户中存在状态已被冻结，不可重复操作",null,'0');
						return false;
				 }
					$.popUpMessage('MSG_UserExpand_006', ['冻结该教师账户'], '0', function(){
						$.ffcsAjax({
							url:web_path + 'teacher/passCheck.do',
							data:{"userIds":userIds},
							success:function(data){
								    $("#user_grid").jDatagrid("reload");
							}
						});	
					}, function (){
						return;
					});
			}
	},"lockAccount");
	
	//账户解冻
	$.busiAuthButton("F0003",function(){
		var selectedRow = $('#user_grid').datagrid('getSelections');
		var userIds="";
		if(selectedRow.length==0){
			$.popUpMessage("MSG_UserExpand_014",null,'0');
			return false;
		}else{
			for(var i=0;i<selectedRow.length;i++){
				userIds=userIds+selectedRow[i].userId+"#"+selectedRow[i].status+"#2,";
			}
			if(userIds.indexOf("1700")>0||userIds.indexOf("1701")>0||userIds.indexOf("1702")>0){
				$.popUpMessage("请确认所选的账户都是已冻结账户！",null,'0');
				return false;
			}
			$.popUpMessage('MSG_UserExpand_006', ['解冻该教师账户'], '0', function(){
				$.ffcsAjax({
					url:web_path + 'teacher/passCheck.do',
					data:{"userIds":userIds},
					success:function(data){
						$("#user_grid").jDatagrid("reload");
					}
				});	
			}, function (){
				return;
			});
		}
	},"unLockAccount");
	
	$("#deleteUser").click(function(){
		var selectedRow = $('#user_grid').datagrid('getSelections');
		var userIds="";
		if(selectedRow.length==0){
			$.popUpMessage("MSG_UserExpand_014",null,'0');
			return false;
		}else{
			for(var i=0;i<selectedRow.length;i++){
				if(userIds==""){
					userIds =selectedRow[i].userId;
				}else{
					userIds=userIds+","+selectedRow[i].userId;
				}
			}
			$.popUpMessage('您要删除这些用户?',null, '0', function(){
				$.ffcsAjax({
					url:web_path + 'userExpand/deleteUser.do',
					data:{"userIds":userIds},
					success:function(data){
						if(data){
							$.popUpMessage('删除成功',null, '0',function(){
								$("#user_grid").jDatagrid("reload");
							},false,true);
						}else{
							$.popUpMessage('删除失败',null, '0',function(){
								$("#user_grid").jDatagrid("reload");
							},false,true);
						}
						
					}
				});	
			}, function (){
				return;
			});
			
		}
	});
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
		width:"auto",
		fit:false,
		fitColumns:true,
		nowrap:false,
		striped:true,
		singleSelect:false,
		collapsible : true,
		url:web_path+"teacher/listUsers.do",
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
		          {title:'手机号',field:'tel',width:100,align:'center'},
		          {title:'id',field:'userId',hidden:true},
		          {title:'id',field:'status',hidden:true},
//		          {title:'昵称',field:'nickname',width:70,align:'center'},
		          {title:'姓名',field:'name',width:100,align:'center'},
		          {title:'城市',field:'cityname',width:100,align:'center'},
//		          {title:'区县',field:'qx',width:100,align:'center'},
//		          {title:'学校',field:'school',width:70,align:'center'},
//		          {title:'年级',field:'grade',width:30,align:'center'},
		          {title:'培训学校',field:'tschoolname',width:150,align:'center'},
//		          {title:'艺考类型',field:'arttype',width:30,align:'center'},
//		          {title:'积分',field:'score',width:30,align:'center'},
//		          {title:'推荐人',field:'referee',width:30,align:'center'},
		          {title:'注册时间',field:'insertDate',width:150,align:'center'},
//		          {title:$.getLocaleField("user_creater","user"),field:'createName',width:160,align:'center'},
		          {title:'状态',
			             field:"statusname",
			             width:120,
			             align:'center'
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
