$(function(){
	var singleSel=$("#user_grid").attr("lang");
	singleSel="true"==singleSel?true:false;
	$("#user_grid").jDatagrid({
		title:"",
		height:356,
		width:"100%",
		fit:false,
		fitColumns:true,
		nowrap:false,
		striped:true,
		singleSelect:singleSel,
		collapsible : true,
		url:web_path+"user/listUsers.srp",
		remoteSort : true,
		isInitLoad : true,
		rownumbers:true,
		idField:"id",
		sortName:'id',
		sortOrder:'desc',
		queryParams:{"enabled":true,"accountNonLocked":true,"accountNonExpired":true,"credentialsNonExpired":true},
		pagination : true,
		frozenColumns:[[
		                {
			             field:"id",
			             align:"center",
			             checkbox:true
		                }
		]],
		columns:[[
		          {title:$.getLocaleField("user_username","user"),field:'username',width:160,align:'center'},
		          {title:$.getLocaleField("user_enabled","user"),field:'enabled',width:100,align:'center',formatter:function(value,row){var yn=value?"boolean_yes":"boolean_no";return $.getLocaleField(yn,"user");}},
		          {title:$.getLocaleField("user_locked","user"),field:'accountNonLocked',width:100,align:'center',formatter:function(value,row){var yn=value?"boolean_no":"boolean_yes";return $.getLocaleField(yn,"user");}},
		          {title:$.getLocaleField("user_account_expried","user"),field:'accountNonExpired',width:100,align:'center',formatter:function(value,row){var yn=value?"boolean_no":"boolean_yes";return $.getLocaleField(yn,"user");}}
		]],
		toolbar:[{
			id:'btnadd',
			text:$.getLocaleField("operate_save","user"),
			iconCls:'icon-save',
			handler:function(){
				var rows = $('#user_grid').datagrid('getSelections');
				$("#sel_user_win").closeWindow(rows);
			}
		},'-',{
			id:'btnclean',
			text:$.getLocaleField("operate_clean","user"),
			iconCls:'icon-cancel',
			handler:function(){
				$("#sel_user_win").closeWindow({"id":"","username":""});
			}
		},'-'],
		onLoadSuccess:function(){
			
		}
	});
});