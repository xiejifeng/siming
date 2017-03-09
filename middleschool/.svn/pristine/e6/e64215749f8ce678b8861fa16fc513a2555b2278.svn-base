$(function(){
//	$("#save").jButton({
//		plain:false,
//		disabled:true,
//		iconCls:'icon-save'
//	});
	$("#viewType").selectParam({
		required:true,
		typeId:'00',
		defaultValue:'0001',
		panelHeight:100,
		invalidMessage:$.getMessage('resource.viewType'),
		width:'98%'
	});
	$("#name").validate({
		required:true,
		validType:'valid["zh_length[0,64]"]'
	});
	$("#priority").number({
		min:0,
		max:9999
	});
	$("#iconCls").validate({
		required:false,
		validType:'length[0,32]'
	});
	$("#remark").validate({
		required:false,
		validType:'valid["zh_length[0,128]"]'
	});
	var itemList="";
	$.getParamList("01",function(data){
		itemList=data;
	});
	var getItemText=function(code){
		if(!$.isArray(itemList)){
			return "";
		}
		var size=itemList.length;
		for(var i=0;i<size;i++){
			if(code==itemList[i]['code']){
				return itemList[i]['text'];
			}
		}
	};
	var clearForm=function(){
		$("#frm").ajaxForm("clear");
		$("#enabledY").attr("checked",true);
		$("#isPublicN").attr("checked",true);
		$("#item_grid").jDatagrid("clearGrid");
//		$("#save").jButton("disable");
		$("#priority").val(9999);
		$("#viewType").selectParam("setDefault","0001",true);
	};
	
	$('#resource-tree').jTree({
        checkbox: false,
        url:web_path+"resource/showResourceTree.srp",
        onClick:function(node){
        	if(parseInt(node.id)==0){
        		clearForm();
        		return;
        	}
        	$.ffcsAjax({
        		url:web_path+"resource/findResource.srp",
        		data:{"id":node.id},
        		success:function(data){
        			if(data){
        				clearForm();
        				$("#frm").ajaxForm("load",data);
        				if(data.enabled){
        					$("#enabledY").attr("checked",true);
        				}else{
        					$("#enabledN").attr("checked",true);
        				}
        				if(data.isPublic){
        					$("#isPublicY").attr("checked",true);
        				}else{
        					$("#isPublicN").attr("checked",true);
        				}
        				var pNode=$('#resource-tree').jTree("getParent",node.target);
        				if(parseInt(pNode.id)>0){
        					$("#parentName").val(pNode.text);
        				}
        				$("#viewType").selectParam("setValue",data.viewType,true);
//        				$("#save").jButton("enable");
        				$("#item_grid").jDatagrid("loadData",data.resourceItems);
        				
        			}
        		}
        	});
        },
        onContextMenu: function(e, node){
            e.preventDefault();
            $('#resource-tree').jTree('select', node.target);
            $('#mm').jMenu('show', {
				left: e.pageX,
				top: e.pageY
			});
        }
    });
	var lastIndex;
	$("#item_grid").jDatagrid({
		//title:$.getLocaleField("grid_title","resource"),
		height:240,
		width:"100%",
		fit:false,
		fitColumns:true,
		idField:'id',
		nowrap:false,
		striped:true,
		singleSelect:true,
		collapsible : false,
		url:"",
		remoteSort : false,
		isInitLoad : false,
		rownumbers:true,
		queryParams:{},
		pagination : false,
		columns:[[
		          {
		        	  title:'id',
		        	  field:'id',
		        	  hidden:true
		          },{
		        	  title:$.getLocaleField("resource_item_type","resource"),
		        	  field:'type',
		        	  width:100,
		        	  align:'center',
		        	  editor:{
		        		  type:'selectParam',
		        		  options: {
		        			  required:true,
		        			  typeId:'01',
		        			  defaultValue:'0101',
		        			  width:100,
		        			  panelHeight:60,
		        			  invalidMessage:$.getMessage('resource.item.type')
		        		  }
		        	  },
		        	  formatter:function(value,row){
		        		  return getItemText(value);
		        	  }
		          },
		          {
		        	  title:$.getLocaleField("resource_item_desc","resource"),
		        	  field:'resourceDesc',
		        	  width:400,
		        	  align:'center',
		        	  editor:{
		        		  type:'validate',
		        		  options: {
			        		  validType:'length[4,128]',
			        		  width : 400,
			        		  required:true
		        		  }
		        	  }
		          },
		          {
		        	  title:$.getLocaleField("resource_item_isMain","resource"),
		        	  field:'isMain',
		        	  width:100,
		        	  align:'center',
		        	  formatter:function(value,row){
		        		  var flag=value;
		        		  if(value=="0"){
		        			  flag=false;
		        		  }
		        		  var yn=flag?"boolean_yes":"boolean_no";
		        		  return $.getLocaleField(yn,"resource");
		        	  },
		        	  editor:{
		        		  type:"checkbox",
		        		  options:{
		        			  on:1,
		        			  off:0
		        		  }
		        	  }
		          }
		]],
		toolbar:[{
			id:'btnAdd',
			text:'',
			iconCls:'icon-add',
			handler:function(){
				endEditRow();
				$('#item_grid').jDatagrid('appendRow',{
					type:'',
					resourceDesc:'',
					isMain:0
				});
				lastIndex= $('#item_grid').jDatagrid('getRows').length-1;
				$('#item_grid').jDatagrid('selectRow', lastIndex);
				$('#item_grid').jDatagrid('beginEdit', lastIndex);
			}
		},'-',{
			id:'btnremove',
			text:'',
			iconCls:'icon-remove',
			disabled:false,
			handler:function(){
				var row = $('#item_grid').jDatagrid('getSelected');
				if (row){
					var index = $('#item_grid').jDatagrid('getRowIndex', row);
					$('#item_grid').jDatagrid('deleteRow', index);
					$('#item_grid').jDatagrid('selectRow', index-1);
				}
			}
		},'-',{
			id:'btnUndo',
			text:'',
			iconCls:'icon-undo',
			handler:function(){
				$("#item_grid").jDatagrid("rejectChanges");
			}
		},'-'],
		onDblClickRow:function(rowIndex,row){
			endEditRow();
			$('#item_grid').jDatagrid('beginEdit', rowIndex);
		}
	});
	var endEditRow=function(){
		var rowsNum = $('#item_grid').jDatagrid('getRows').length;
		for(var i=0;i<rowsNum;i++){
			$('#item_grid').jDatagrid('endEdit', i);
		}
	};
	/**
	 * 新增
	 */
	$("#append").click(function(){
		clearForm();
//		$("#save").jButton("enable");
		var pNode=$('#resource-tree').jTree("getSelected");
		if(parseInt(pNode.id)>0){
			$("#parentName").val(pNode.text);
		}
		$("#parent").val(pNode.id);
	});
	/**
	 * 删除
	 */
	$("#delete").click(function(){
		var curNode=$('#resource-tree').jTree("getSelected");
		var pNode=$('#resource-tree').jTree("getParent",curNode.target);
		if(!pNode || curNode.id==0){
			return;
		}
		$.ffcsAjax({
			url:web_path+"resource/removeResource.srp",
			data:{"id":curNode.id},
			ismessage:true,
			isLoadMsg:true,
			success:function(data){
				if(data){
					clearForm();
					$('#resource-tree').tree('reload', pNode.target);
				}
			}
		});
	});
	/**
	 * 保存
	 */
	$("#save").click(function(){
		endEditRow();
		var isNew=$("#id").val()?false:true;
		var addRows=$("#item_grid").jDatagrid("getChanges","inserted");
		var updateRows=$("#item_grid").jDatagrid("getChanges","updated");
		var deleteRows=$("#item_grid").jDatagrid("getChanges","deleted");
		var items={};
		var indx=0;
		$.each(addRows,function(i,row){
			var str='{"resourceItems['+indx+'].state":"NEW","resourceItems['+indx+'].type":"'+row.type
				+'","resourceItems['+indx+'].resourceDesc":"'+row.resourceDesc+'","resourceItems['+indx+'].isMain":'+row.isMain+'}';
			var jsonObj=eval("("+str+')');
			$.extend(items,jsonObj);
			indx++;
		});
		$.each(updateRows,function(i,row){
			var str='{"resourceItems['+indx+'].id":'+row.id+',"resourceItems['+indx+'].type":"'+row.type
				+'","resourceItems['+indx+'].resourceDesc":"'+row.resourceDesc+'","resourceItems['+indx+'].isMain":'+row.isMain
				+',"resourceItems['+indx+'].state":"UPDATE"}';
			var jsonObj=eval("("+str+')');
			$.extend(items,jsonObj);
			indx++;
		});
		$.each(deleteRows,function(i,row){
			var str='{"resourceItems['+indx+'].id":'+row.id+',"resourceItems['+indx+'].type":"'+row.type
				+'","resourceItems['+indx+'].resourceDesc":"'+row.resourceDesc+'","resourceItems['+indx+'].isMain":'+row.isMain
				+',"resourceItems['+indx+'].state":"REMOVE"}';
			var jsonObj=eval("("+str+')');
			$.extend(items,jsonObj);
			indx++;
		});
		var url=web_path+"resource/saveResource.srp";
		if(!isNew){
			url=web_path+"resource/editResource.srp";
		}
		$("#frm").ajaxForm("submit",{
			url:url,
			ismessage:true,
			issuccessmsg:true,
			isLoadMsg:true,
			data:items,
			success:function(data,status){
				//新增项目赋id值
				if(data){
					if(isNew){
						$("#id").val(data.id);
						$("#resourceKey").val(data.resourceKey);
					}
					var node = $('#resource-tree').tree('getSelected');
					$('#resource-tree').tree('reload', node.target);
					$("#item_grid").jDatagrid("acceptChanges");
					var ritems=data.resourceItems;
					if(ritems && $.isArray(ritems)){
						var rows=$("#item_grid").jDatagrid("getRows");
						var size=ritems.length;
						var rsize=rows.length;
						for(var k=0;k<rsize;k++){
							if(rows[k].id){
								continue;
							}
							for(var i=0;i<size;i++){
								if(rows[k].resourceDesc==ritems[i].resourceDesc && rows[k].type==ritems[i].type){
									$("#item_grid").jDatagrid("updateRow",{index:k,row:ritems[i]});
									break;
								}
							}
						}
					}
				}
			}
		});
	});
	/**
	 * 初始化
	 */
	clearForm();
});