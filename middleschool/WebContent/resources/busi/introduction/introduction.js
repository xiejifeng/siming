$(function(){
	initDatagrid();
	/**
	 * 编辑保存
	 */
	$("#saveEditAdvertisement").click(function(){
		var id =$("#id").val();
		var status = $("#status").val();
		var content = $("#content").val();
		var data={
				"id":id,
				"content":content,
				"status":status
		};
		$.popUpMessage('您确定要修改?',null, '0',function(){
			$.ffcsAjax({
				url : web_path+'schart/editIntroduction.do',
				data:data,
				success:function(data){
					if(data){
						$.popUpMessage('修改成功',null, '0',function(){
							$("#edit_user_win").closeWindow({"result":"reload"});
						},false,true);
					}else{
						$.popUpMessage('修改失败',null, '0',function(){
							$("#edit_user_win").closeWindow({"result":"reload"});
						},false,true);
					}
					
				}
			});	
		},false,true);
	});
	// 获取页面宽度
	var height = $(window).height();
	$("#user_grid").datagrid('resize', {
		height : height - 150
	});
	
	$("#addschart").click(function(){
		$.openWindow({
			   id:"add_user_win",
			   resizable:false,
			   draggable:false,
			   title:"新增关联",
			   type:'iframe',
			   width:750,
			   height:507,
			   modal:true,
			   url:web_path+"schart/schartAddInit.do",
			   onLoadSuccess:function(data){
			   },
			   onClose:function(data){
					if (data.result == "reload") {
						$("#user_grid").jDatagrid("reload");
					}
			   }
		},true);
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
		url:web_path+"schart/listAllIntroduction.do",
		remoteSort : true,
		isInitLoad : true,
		rownumbers:true,
		sortName:'id',
		sortOrder:'ASC',
		pagination : true,
		columns:[[
		          {title:'应用介绍内容',field:'content',width:1000,align:'center',	
		        	  formatter:function(value,row,rowindex){
	                    return "<div>"+value+"</div>";
	             }},
//		          {title:'id',field:'status',hidden:true},
//		          {title:'昵称',field:'nickname',width:70,align:'center'},
//		          {title:'创建时间',field:'schoolname',width:200,align:'center'},
		          
//		          {title:'城市',field:'cityname',width:200,align:'center'},
//		          {title:'优先级',field:'priority',width:50,align:'center'},
//		          {title:'区县',field:'qx',width:100,align:'center'},
//		          {title:'学校',field:'school',width:70,align:'center'},
//		          {title:'年级',field:'grade',width:30,align:'center'},
//		          {title:'培训学校',field:'tschoolname',width:150,align:'center'},
//		          {title:'艺考类型',field:'arttype',width:30,align:'center'},
//		          {title:'积分',field:'score',width:30,align:'center'},
//		          {title:'推荐人',field:'referee',width:30,align:'center'},
		          {title:'更新时间',field:'createtime',width:200,align:'center'},
//		          {title:'对应关系类型',field:'statusname',width:200,align:'center'},
//		          {title:$.getLocaleField("user_creater","user"),field:'createName',width:160,align:'center'},
		          /*
		          {title:'类型',
			             field:"status",
			             width:150,
			             align:'center',
			             formatter:function(value,row,rowindex){
			            	  if(value==0){
			            		  return "流量说明";
			            	  }else if(value==1){
			            		  return "培训咨询";
			            	  }
			             }
		          },*/
		          {title:'操作',
		             field:"id",
		             width:150,
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
		   title:"编辑",
		   type:'iframe',
		   width:800,
		   height:500,
		   modal:true,
		   url:web_path+"schart/introductionEditInit.do?id="+id,
		   onLoadSuccess:function(data){
			  // $.loadJs("resources/busi/schart/schartEdit.js");
		   },
		   onClose:function(data){
				if (data.result == "reload") {
					$("#user_grid").jDatagrid("reload");
				} 
		   }
	},true);
}
function queryBehaviorByParams() {
	var params = {
		"city_id":$("#city").combo("getValue"),
		"arttype_id":$("#arttype").combo("getValue"),
		"status" :$("#status").combo("getValue")
	};

	$("#user_grid").jDatagrid("load", params);
}

