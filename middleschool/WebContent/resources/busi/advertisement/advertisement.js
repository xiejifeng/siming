$(function(){
	initDatagrid();
	$("#deleteUser").click(function(){
		var selectedRow = $('#user_grid').datagrid('getSelections');
		var userIds="";
		if(selectedRow.length==0){
			 $.popUpMessage("请选择一条记录",null,'0');
			return false;
		}else{
			for(var i=0;i<selectedRow.length;i++){
				if(userIds==""){
					userIds =selectedRow[i].id;
				}else{
					userIds=userIds+","+selectedRow[i].id;
				}
			}
			$.popUpMessage('您要删除这些广告?',null, '0', function(){
				$.ffcsAjax({
					url:web_path + 'advertisement/deleteAdvertisement.do',
					data:{"ids":userIds},
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
	
	$("#addAdvertisement").click(function(){
		$.openWindow({
			   id:"add_user_win",
			   resizable:false,
			   draggable:false,
			   title:"广告新增",
			   type:'iframe',
			   width:680,
			   height:377,
			   modal:true,
			   url:web_path+"advertisement/advertisementAddInit.do",
			   onLoadSuccess:function(data){
			   },
			   onClose:function(data){
					if (data.result == "reload") {
						$("#user_grid").jDatagrid("reload");
					}
			   }
		},true);
	});
	
	/**
	 * 新增广告
	 */
	$("#saveAddAdvertisement").click(function(){
		var click_url =$("#click_url").val();
		var status = $("#status").combo("getValue");
		var priority = $("#priority").val();
		var keeptime = $("#keeptime").val();
		if(!priority){
			priority=0;
		}
		if(!keeptime){
			keeptime=3;
		}
		var data={
				"click_url":click_url,
				"status":status,
				"priority":priority,
				"keeptime":keeptime
		};
		$.popUpMessage('您要新增这条广告?',null, '0',function(){
			$.addMask();
			$.ajaxFileUpload({
				url : web_path+'advertisement/saveAdvertisement.do',
				secureuri : false,
				data : data,
				fileElementId :['cover'],
				dataType : 'json',
				success : function(data) {
					$.removeMask();
					if(data.code==true){
						$.popUpMessage('新增成功',null, '0',function(){
							$("#add_user_win").closeWindow({"result":"reload"});
						},false,true);
					}else{
						$.popUpMessage('新增成功',null, '0',function(){
							$("#add_user_win").closeWindow({"result":"reload"});
						},false,true);
					}
				},
				error : function(data) {
					
				}
			});	
		},false,true);
	});
	/**
	 * 编辑广告
	 */
	$("#saveEditAdvertisement").click(function(){
		var id =$("#advertisementId").val();
		var click_url =$("#click_url").val();
		var status = $("#status").combo("getValue");
		var pre_cover = $("#pre_cover").attr("src");
		var priority = $("#priority").val();
		var keeptime = $("#keeptime").val();
		if(!priority){
			priority=0;
		}
		var data={
				"id":id,
				"click_url":click_url,
				"status":status,
				"priority":priority,
				"img_url":pre_cover,
				"keeptime":keeptime
		};
		$.popUpMessage('您确定要修改这条广告?',null, '0',function(){
			$.addMask();
			$.ajaxFileUpload({
				url : web_path+'advertisement/editAdvertisement.do',
				secureuri : false,
				data : data,
				fileElementId :['cover'],
				dataType : 'json',
				success : function(data) {
					$.removeMask();
					if(data.code==true){
						$.popUpMessage('修改成功',null, '0',function(){
							$("#edit_user_win").closeWindow({"result":"reload"});
						},false,true);
					}else{
						$.popUpMessage('修改失败',null, '0',function(){
							$("#edit_user_win").closeWindow({"result":"reload"});
						},false,true);
					}
				},
				error : function(data) {
					
				}
			});	
		},false,true);
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
		url:web_path+"advertisement/listAllAdvertisement.do",
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
		          {title:'广告图片',field:'img_url',width:100,align:'center',
				   formatter : function(value, row, rowindex) {
					return'<img width="60px" height="50px" src='+ row['img_url'] + '>';
				  }},
		          {title:'id',field:'status',hidden:true},
//		          {title:'昵称',field:'nickname',width:70,align:'center'},
		          {title:'连接地址',field:'click_url',width:250,align:'center'},
		          {title:'优先级',field:'priority',width:50,align:'center'},
		          {title:'持续时间',field:'keeptime',width:50,align:'center'},
//		          {title:'区县',field:'qx',width:100,align:'center'},
//		          {title:'学校',field:'school',width:70,align:'center'},
//		          {title:'年级',field:'grade',width:30,align:'center'},
//		          {title:'培训学校',field:'tschoolname',width:150,align:'center'},
//		          {title:'艺考类型',field:'arttype',width:30,align:'center'},
//		          {title:'积分',field:'score',width:30,align:'center'},
//		          {title:'推荐人',field:'referee',width:30,align:'center'},
		          {title:'创建时间',field:'createtime',width:80,align:'center'},
//		          {title:$.getLocaleField("user_creater","user"),field:'createName',width:160,align:'center'},
		          {title:'上/下架状态',
			             field:"text",
			             width:50,
			             align:'center'
		                },
		          {title:'操作',
		             field:"id",
		             width:100,
		             align:'center',
		             formatter:function(value,row,rowindex){
		            	   var html='<img src="'+web_path+'resources/app/common/img/btnEditor.jpg" name ="edit" onclick="editAvertisement('+row['id']+');"/>';
		                   return html;
		             }
	              }
		]],

		onLoadSuccess:function(){
//			if($("a[name='edit']").size()!=0){
//				$("a[name='edit']").authButton("F0011",function(target,data){
//					$.openWindow({
//			    		   id:"edit_user_win",
//			    		   resizable:false,
//			    		   draggable:false,
//			    		   title:data.name,
//			    		   type:'html',
//			    		   width:580,
//			    		   height:457,
//			    		   modal:true,
//			    		   url:web_path+"user/userEdit.srp?userId="+$(target).attr("code"),
//			    		   onLoadSuccess:function(data){
//			    			   $.loadJs("resources/app/user/js/userEdit.js");
//			    		   },
//			    		   onClose:function(data){
//			    			   
//			    		   }
//			    	   },true);
//				},true);
//			}
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

function editAvertisement (id){
		$.openWindow({
		   id:"edit_user_win",
		   resizable:false,
		   draggable:false,
		   title:"广告编辑",
		   type:'iframe',
		   width:680,
		   height:377,
		   modal:true,
		   url:web_path+"advertisement/advertisementEditInit.do?id="+id,
		   onLoadSuccess:function(data){
			   $.loadJs("resources/busi/advertisement/advertisementEdit.js");
		   },
		   onClose:function(data){
				if (data.result == "reload") {
					$("#user_grid").jDatagrid("reload");
				} 
		   }
	},true);
}
// 上传图片
function _modifyUserImg(obj) {
	var file = obj.files[0];
	// 判断类型是不是图片
	if (!/image\/\w+/.test(file.type)) {
		Common.showMessage("请确保文件为图像类型", "warn");
		return false;
	}   
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e) {
		var result = this.result;
        $("#pre_cover").attr("src",result); 
	};
};

