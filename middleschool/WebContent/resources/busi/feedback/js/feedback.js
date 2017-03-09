$(function(){
	initOptHisTable();
	var height = $(window).height();
	$("#opthisTable").datagrid('resize', {
		height : height - 57
	}); 
});

function initOptHisTable() {
	var height = $(window).height()-20;
	$("#opthisTable")
			.jDatagrid(
					{
						height : height,
						width : "100%",
						fit : false,
						fitColumns : true,
						nowrap : false,
						striped : true,
						singleSelect : true,
						collapsible : true,
						url : web_path + "feedback/listFeedback.do",
						remoteSort : true,
						isInitLoad : true,
						rownumbers : true,
						sortName : 'id',
						sortOrder : 'desc',
						pagination : true,
						columns : [ [
								{
									title :'手机号',
									field : 'tel',
									width : 200,
									align : 'center'
								},
								{
									title : '昵称',
									field : 'nickname',
									width : 200,
									align : 'left'
								},
								{
									title : '用户名',
									field : 'username',
									width : 200,
									align : 'left'
								},
								{
									title : '内容',
									field : 'feedback_content',
									width : 350,
									align : 'left',
									formatter : function(value, row, rowindex) {
										if(value.length>30){
											return '<a href="javascript:void(0);" title="'+value+'">'+value.substr(0,30)+"..."+"</a>";
										}
										return value;
									}
								},
								{
									title : '登记时间',
									field : 'createtime',
									width : 200,
									align : 'left'
								}
								 ] ]

					});
}

function queryBehaviorByParams() {
	var startTime = $("#startTime").val();
	var endTime = $("#endTime").val();
	if (startTime != '') {
		if(endTime == ''){
			$.popUpMessage("MSG_OPTHIS_001", "", "0");
			return;
		}
	}else if(endTime != ''){
		if(startTime == ''){
			$.popUpMessage("MSG_OPTHIS_001", "", "0");
			return;
		}
	}
	
	var params = {
		"startTime" : startTime.toString(),
		"endTime" : endTime.toString()  
	};

	$("#opthisTable").jDatagrid("load", params);
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
