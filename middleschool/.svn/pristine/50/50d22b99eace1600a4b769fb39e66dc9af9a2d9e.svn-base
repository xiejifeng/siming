$(function(){
	// 查询按钮
	$.busiAuthButton("F0013",function(){
		$("#dict_grid").jTreegrid("reload",null,$.formItems($("#frmSearch")));
    },"search");
	
	// 新增按钮
	$.busiAuthButton("F0012",function(data){
		$.openWindow({
		   id:"new_dict_win",
 		   resizable:false,
 		   draggable:false,
 		   //iconCls:data.iconCls,
 		   title:data.name,
 		   type:'iframe',
 		   width:600,
 		   height:420,
 		   modal:true,
 		   url:web_path+"dictionary/dictNew.srp",
 		   onLoadSuccess:function(data){
 			  
 		   },
 		   onClose:function(data){
 			   
 		   }
 	   },true);
    },"add");
	
	// 高度
	var height = $(window).height() - 57;
	$("#dict_grid").jTreegrid({
		treeField:'code',
		idField:'code',
//		title:$.getLocaleField("grid_title","dict"),
		height:height,
		width:"100%",
		fit:false,
		fitColumns:true,
		nowrap:false,
		striped:true,
		singleSelect:true,
		collapsible :false,
		url:web_path+"dictionary/listDicts.srp",
		remoteSort : true,
		isInitLoad : true,
		rownumbers:true,
		nodeAutoLoad:false,//节点下无子项，点击是否自动请求加载
//		queryParams:{},
		pagination : true,
		frozenColumns:[[
		                {title:$.getLocaleField("dict_code","dict"),
			             field:"code",
			             width:160
		                },
		                {title:$.getLocaleField("dict_text","dict"),
				             field:"text",
				             width:160
			            }
		]],
		columns:[[
		          {title:$.getLocaleField("dict_systemLevel","dict"),field:'systemLevel',width:100,align:'center',formatter:function(value,row){var yn=value?"boolean_yes":"boolean_no";return row.category?$.getLocaleField(yn,"dict"):"";}},
		          {title:$.getLocaleField("dict_enabled","dict"),field:'enabled',width:100,align:'center',formatter:function(value,row){var yn=value?"boolean_yes":"boolean_no";return row.category?$.getLocaleField(yn,"dict"):"";}},
		          {title:$.getLocaleField("dict_priority","dict"),field:'priority',width:100,align:'center',formatter:function(value,row){return row.category?value:"";}},
		          {title:$.getLocaleField("dict_keyword","dict"),field:'keyword',width:160,align:'center'}
		          
		]],
		onLoadSuccess:function(){
			
		},
		onContextMenu: function(e,row){
			e.preventDefault();
			$(this).jTreegrid('unselectAll');
			$(this).jTreegrid('select', row.code);
			var childs=$("#dict_grid").jTreegrid("getChildren",row.code);
			if(!row.category){
				$("#append").hide();
				$("#edit").show();
				
			}else{
				if(childs || childs.length==0){
					$("#edit").hide();
				}
				$("#append").show();
			}
			
			if(row.systemLevel){
				$("#remove").hide();
			}else{
				$("#remove").show();
			}
			if(childs && childs.length>0){
				var flag=false;
				for(var i=0;i<childs.length;i++){
					flag=childs[i].systemLevel;
					if(flag){
						break;
					}
				}
				if(flag){
					$("#remove").hide();
				}
			}
			$('#optMenu').jMenu('show', {
				left: e.pageX,
				top: e.pageY
			});
		}
	});
	$("#optMenu").jMenu();
	$("#optMenu").jMenu("appendItem",{
		id:'edit',
		text:$.getLocaleField("opt_edit","dict"),
		iconCls:'icon-edit',
		handler:function(){
			var node = $("#dict_grid").jTreegrid('getSelected');
			$.openWindow({
	    		   id:"edit_dict_win",
	    		   resizable:false,
	    		   draggable:false,
	    		   //iconCls:"icon-edit",
	    		   title:$.getLocaleField("opt_edit","dict"),
	    		   type:'iframe',
	    		   width:600,
	    		   height:420,
	    		   modal:true,
	    		   url:web_path+"dictionary/dictEdit.srp?categoryCode="+node.code,
	    		   onLoadSuccess:function(data){
	    			   
	    		   },
	    		   onClose:function(data){
	    			   
	    		   }
	    	   },true);
		}
	});
	$("#optMenu").jMenu("appendItem",{
		id:'append',
		text:$.getLocaleField("opt_edit","dict"),
		iconCls:'icon-edit',
		handler:function(){
			var node = $("#dict_grid").jTreegrid('getSelected');
			$.openWindow({
	    		   id:"add_dict_win",
	    		   resizable:false,
	    		   draggable:false,
	    		   iconCls:'icon-edit',
	    		   title:$.getLocaleField("opt_edit","dict"),
	    		   type:'iframe',
	    		   width:600,
	    		   height:440,
	    		   modal:true,
	    		   url:web_path+"dictionary/dictAdd.srp?code="+node.code,
	    		   onLoadSuccess:function(data){
	    			   
	    		   },
	    		   onClose:function(data){
	    			   
	    		   }
	    	   },true);
		}
	});
	$("#optMenu").jMenu("appendItem",{
		id:'remove',
		text:$.getLocaleField("opt_remove","dict"),
		iconCls:'icon-remove',
		handler:function(){
			var node = $("#dict_grid").jTreegrid('getSelected');
			var parent=$("#dict_grid").jTreegrid("getParent",node.code);
			var childs=parent?$("#dict_grid").jTreegrid("getChildren",parent.code):[];
			var subChilds=$("#dict_grid").jTreegrid("getChildren",node.code);
			var data={"code":node.code,"type":"dictionary"};
			var code =node.code;
			var bflag=childs && childs.length>1;//是否有同级数>1
			var cflag=subChilds && subChilds.length>0;//是否有子项
			var tflag=!node.category;//是否类别
			
			if(tflag){
				data.type="category";
			}else{
				if(cflag){
					data.type="association";
				}
				if(!bflag){
					code=parent.code;
				}
			}
			removeItem(data,code);
		}
	});
	var removeItem=function(data,code){
		$.ffcsAjax({
			url:web_path+"dictionary/removeDict.srp",
			data:data,
			ismessage:true,
			success:function(data){
				if(data){
					$("#dict_grid").jTreegrid("remove",code);
				}
			}
		});
	};
});