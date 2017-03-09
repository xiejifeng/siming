$(function(){
	$("#role_grid").jDatagrid({
		title:'',
		height:356,
		width:'100%',
		nowrap:false,
		striped:true,
		singleSelect:false,
		collapsible : true,
//		pageSize:1,
//		pageList : [1, 2, 3, 40, 50],
		url:web_path+"role/listRoles.srp",
		remoteSort : true,
		isInitLoad : true,
		rownumbers:true,
		queryParams:{},
		pagination : true,
		idField:'id',
		frozenColumns:[[
		          {field:'id',checkbox:true}
		]],
		columns:[[
		          {title:$.getLocaleField("role_name","role"),field:'name',width:100,align:'center',sortable:true},
		          {title:$.getLocaleField("role_authority","role"),field:'authority',width:100,align:'center'},
		          {title:$.getLocaleField("role_remark","role"),field:'remark',width:140,align:'center'}
		]],
		toolbar:[{
			id:'btnadd',
			text:$.getLocaleField("operate_save","role"),
			iconCls:'icon-save',
			handler:function(){
				var rows = $('#role_grid').datagrid('getSelections');
				$("#sel_role_win").closeWindow(rows);
			}
		},'-',{
			id:'btnclean',
			text:$.getLocaleField("operate_clean","role"),
			iconCls:'icon-cancel',
			handler:function(){
				$("#sel_role_win").closeWindow({"id":"","name":""});
			}
		},'-'],
		onLoadSuccess:function(){
			
		}
	});
});