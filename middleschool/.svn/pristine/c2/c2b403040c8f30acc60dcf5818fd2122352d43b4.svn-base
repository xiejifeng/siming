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
	
	
	$("#save").click(function(){
		var flag=$("#remark").validate("isValid");
		if(!flag){
			$("#remark").focus();
			return;
		}
		endEditRow();
		var rows=$("#item_grid").jDatagrid("getChanges","inserted");
		var items={};
		var indx=0;
		$.each(rows,function(i,row){
			var str='{"dicts['+indx+'].category.remark":"'+$("#remark").val()+'","dicts['+indx+'].text":"'+row.text+'","dicts['+indx+'].priority":'+row.priority
				+',"dicts['+indx+'].systemLevel":'+row.systemLevel+',"dicts['+indx+'].keyword":"'+row.keyword+'","dicts['+indx+'].enabled":'+row.enabled+'}';
			var jsonObj=eval("("+str+')');
			$.extend(items,jsonObj);
			indx++;
		});
		if($.isEmptyObject(items)){
			return;
		}
		$.ffcsAjax({
			url:web_path+"dictionary/saveDict.srp",
			ismessage:true,
			issuccessmsg:false,
			isLoadMsg:true,
			data:items,
			success:function(data){
				if(data){
					$("#new_dict_win").closeWindow();
					$("#dict_grid").jTreegrid("reload");
				}
			}
		});
	});
	$("#reset").click(function(){
		$("#remark").val("");
		$("#item_grid").jDatagrid("clearGrid");
	});
});