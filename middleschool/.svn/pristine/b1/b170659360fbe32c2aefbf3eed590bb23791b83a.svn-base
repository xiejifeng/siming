$(function(){
	$("#remark").validate({
		required:true,
		validType:'valid["zh_length[0,64]"]'
	});
	
	var lastIndex;
	$("#item_grid").jDatagrid({
		//title:$.getLocaleField("grid_title","dict"),
		height:240,
		width:"100%",
		fit:false,
		fitColumns:true,
		idField:'code',
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
		        	  title:'code',
		        	  field:'code',
		        	  hidden:true
		          },
		          {
		        	  title:$.getLocaleField("dict_text","dict"),
		        	  field:'text',
		        	  width:140,
		        	  align:'center',
		        	  editor:{
		        		  type:'validate',
		        		  options: {
		        			  required:true,
		        			  validType:'length[1,64]',
		        			  width:100
		        		  }
		        	  }
		          },
		          {
		        	  title:$.getLocaleField("dict_systemLevel","dict"),
		        	  field:'systemLevel',
		        	  width:80,
		        	  align:'center',
		        	  formatter:function(value,row){
		        		  var flag=value;
		        		  if(value=="0"){
		        			  flag=false;
		        		  }
		        		  var yn=flag?"boolean_yes":"boolean_no";
		        		  return $.getLocaleField(yn,"dict");
		        	  },
		        	  editor:{
		        		  type:"checkbox",
		        		  options:{
		        			  on:1,
		        			  off:0
		        		  }
		        	  }
		          },
		          {
		        	  title:$.getLocaleField("dict_enabled","dict"),
		        	  field:'enabled',
		        	  width:80,
		        	  align:'center',
		        	  formatter:function(value,row){
		        		  var flag=value;
		        		  if(value=="0"){
		        			  flag=false;
		        		  }
		        		  var yn=flag?"boolean_yes":"boolean_no";
		        		  return $.getLocaleField(yn,"dict");
		        	  },
		        	  editor:{
		        		  type:"checkbox",
		        		  options:{
		        			  on:1,
		        			  off:0
		        		  }
		        	  }
		          },
		          {
		        	  title:$.getLocaleField("dict_keyword","dict"),
		        	  field:'keyword',
		        	  width:120,
		        	  align:'center',
		        	  editor:{
		        		  type:'validate',
		        		  options: {
		        			  required:false,
		        			  validType:'length[1,128]',
		        			  width:140
		        		  }
		        	  }
		          },
		          {
		        	  title:$.getLocaleField("dict_priority","dict"),
		        	  field:'priority',
		        	  width:80,
		        	  align:'center',
		        	  editor:{
		        		  type:'number',
		        		  options: {
		        			  min:0,
		        			  max:9999
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
					text:'',
					systemLevel:1,
					enabled:1,
					keyword:'',
					priority:0
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
	var oRemark="";
	$.ffcsAjax({
		url:web_path+"dictionary/queryItems.srp",
		data:{"code":$("#categoryCode").val()},
		success:function(data){
			oRemark=data[0]['category']['remark'];
			$("#remark").val(oRemark);
			$('#item_grid').jDatagrid('loadData', data);
		}
	});
	
	$("#save").click(function(){
		var flag=$("#remark").validate("isValid");
		if(!flag){
			$("#remark").focus();
			return;
		}
		endEditRow();
		var rows=$("#item_grid").jDatagrid("getRows");
		var isUpdate=false;//判断类别名称是否变化
		if(oRemark!=$("#remark").val()){
			isUpdate=true;
			$.each(rows,function(i,row){
				row.state="UPDATE";
				row.category.remark=$("#remark").val();
			});
		}
		var addRows=$("#item_grid").jDatagrid("getChanges","inserted");
		var addRowText  ="";
		var addRowFlag = false;
		$.each(addRows,function(i,row){
			if(addRowText==""){
				addRowText=row.text;
			}else{
				addRowText=addRowText+","+row.text;
			}
			row.state="NEW";
			row.category={};
			row.category.remark=$("#remark").val();
			row.category.categoryCode=$("#categoryCode").val();
		});
		if(addRows.length!=0){
			if(addRows[0].category.categoryCode=="1A"){
				addRowFlag =true;
				$.ffcsAjax({
					url:web_path+"userExpand/addSchoolDic.do",
					ismessage:true,
					issuccessmsg:false,
					isLoadMsg:true,
					data:{
						"texts":addRowText
					},
					success:function(data){
						if(data){
							$("#edit_dict_win").closeWindow();
							$("#dict_grid").jTreegrid("reload",$("#categoryCode").val());
							$("#dict_grid").jTreegrid("expandAll",$("#categoryCode").val());
						}
					}
				});
			}
		}
		if(addRowFlag){
			return;
		}
		if(!isUpdate){
			var updateRows=$("#item_grid").jDatagrid("getChanges","updated");
			$.each(updateRows,function(i,row){
				row.state="UPDATE";
			});
		}
		
		var deleteRows=$("#item_grid").jDatagrid("getChanges","deleted");
		var items=[];
		$.each(deleteRows,function(i,row){
			row.state="REMOVE";
			items.push(row);
		});
		
		if(rows){
			items=items.concat(rows);
		}
		if(items.length==0){
			$("#new_dict_win").closeWindow();
			return;
		}
		var datas={};
		var indx=0;
		$.each(items,function(i,row){
			var str='{"dicts['+indx+'].category.remark":"'+row.category.remark+'","dicts['+indx+'].category.categoryCode":"'+row.category.categoryCode+'","dicts['+indx+'].text":"'+row.text
				+'","dicts['+indx+'].code":"'+row.code+'","dicts['+indx+'].state":"'+row.state+'","dicts['+indx+'].priority":'+row.priority
				+',"dicts['+indx+'].systemLevel":'+row.systemLevel+',"dicts['+indx+'].keyword":"'+row.keyword+'","dicts['+indx+'].enabled":'+row.enabled+'}';
			var jsonObj=eval("("+str+')');
			$.extend(datas,jsonObj);
			indx++;
		});
		$.ffcsAjax({
			url:web_path+"dictionary/saveOrUpdateDict.srp",
			ismessage:true,
			issuccessmsg:false,
			isLoadMsg:true,
			data:datas,
			success:function(data){
				if(data){
					$("#edit_dict_win").closeWindow();
					$("#dict_grid").jTreegrid("reload",$("#categoryCode").val());
					$("#dict_grid").jTreegrid("expandAll",$("#categoryCode").val());
				}
			}
		});
	});
	$("#reset").click(function(){
		$("#frm").ajaxForm("clear"); 
	});
});