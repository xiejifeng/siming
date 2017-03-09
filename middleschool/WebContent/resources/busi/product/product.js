$(function(){
	initDatagrid();
	
	//城市
	$("#status").selectParam({
		required:true,
		typeId:'1J',
		defaultValue:'1J02',
		panelHeight:100,
		invalidMessage:'',
		width:'98%'
	});
	$("#score").selectParam({
		required:true,
		typeId:'1L',
		defaultValue:'1L04',
		panelHeight:100,
		invalidMessage:'',
		width:'98%'
	});
	//删除物品
	$("#deleteProduct").click(function(){
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
			$.popUpMessage('您要删除这些物品?',null, '0', function(){
				$.ffcsAjax({
					url:web_path + 'product/deleteProduct.do',
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
	//上架物品
	$("#upproduct").click(function(){
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
			$.popUpMessage('您要上架这些物品?',null, '0', function(){
				$.ffcsAjax({
					url:web_path + 'product/upProduct.do',
					data:{"ids":userIds},
					success:function(data){
						if(data){
							$.popUpMessage('上架成功',null, '0',function(){
								$("#user_grid").jDatagrid("reload");
							},false,true);
						}else{
							$.popUpMessage('上架失败',null, '0',function(){
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
	//下架物品
	$("#downproduct").click(function(){
		var selectedRow = $('#user_grid').datagrid('getSelections');
		var userIds="";
		if(selectedRow.length==0){
			$.popUpMessage("请选择一条记录",null,'0');
			return false;
		}else{
			for(var i=0;i<selectedRow.length;i++){
				if(userIds==""){
					userIds =selectedRow[i].id;
					status =selectedRow[i].status;
				}else{
					userIds=userIds+","+selectedRow[i].id;
				}
			}
			$.popUpMessage('您要下架这些物品?',null, '0', function(){
				$.ffcsAjax({
					url:web_path + 'product/downProduct.do',
					data:{"ids":userIds},
					success:function(data){
						if(data){
							$.popUpMessage('下架成功',null, '0',function(){
								$("#user_grid").jDatagrid("reload");
							},false,true);
						}else{
							$.popUpMessage('下架失败',null, '0',function(){
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
	
	$("#product_search").click(function(){
		var params = {
				"name" : $("#name").val(),
				"startTime" : $("#startTime").val(),
				"endTime" : $("#endTime").val(),
				"status" : $("#status").combo("getValue"),
				"score" : $("#score").combo("getText")
			};
		$("#user_grid").jDatagrid("load",params);
	});
	
	$("#addAdvertisement").click(function(){
		$.openWindow({
			   id:"add_user_win",
			   resizable:false,
			   draggable:false,
			   title:"物品新增",
			   type:'iframe',
			   width:1080,
			   height:482,
			   modal:true,
			   url:web_path+"product/productAddInit.do",
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
		url:web_path+"product/listAllProduct.do",
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
		          {title:'物品图片',field:'main_img',width:100,align:'center',
				   formatter : function(value, row, rowindex) {
					return'<img width="60px" height="50px" src='+ row['main_img'] + '>';
				  }},
				  {title:'id',field:'status',hidden:true},
		          {title:'物品名称',field:'name',width:150,align:'center'},
		          {title:'兑换积分',field:'score',width:50,align:'center'},
		          {title:'库存',field:'stock',width:50,align:'center'},
		          {title:'状态',
			             field:"statusname",
			             width:50,
			             align:'center'
		                },
		          {title:'发布时间',field:'createtime',width:80,align:'center'},
		          {title:'操作',
		             field:"id",
		             width:100,
		             align:'center',
		             formatter:function(value,row,rowindex){
		            	   var html='<img src="'+web_path+'resources/app/common/img/btnEditor.jpg" name ="edit" onclick="editProduct('+row['id']+');"/>';
		                   return html;
		             }
	              }
		]],

		onLoadSuccess:function(){

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

function editProduct(id){
	$.openWindow({
		   id:"edit_user_win",
		   resizable:false,
		   draggable:false,
		   title:"物品编辑",
		   type:'iframe',
		   width:1080,
		   height:482,
		   modal:true,
		   url:web_path+"product/productEditInit.do?id="+id,
		   onLoadSuccess:function(data){
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

