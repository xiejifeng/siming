$(function(){
	initOptHisTable();
	var height = $(window).height();
	$("#opthisTable").datagrid('resize', {
		height : height - 57
	}); 
});

function initOptHisTable() {
	$("#opthisTable")
			.jDatagrid(
					{
						height : "auto",
						width : "100%",
						fit : false,
						fitColumns : true,
						nowrap : false,
						striped : true,
						singleSelect : true,
						collapsible : true,
						url : web_path + "opthis/listOpthis.do",
						remoteSort : true,
						isInitLoad : false,
						rownumbers : true,
						sortName : 'id',
						sortOrder : 'desc',
						pagination : true,
						columns : [ [
								{
									title : $.getBusinessField("updateDate",
									"OPTHIS"),
									field : 'updateDate',
									width : 50,
									align : 'center'
								},
								{
									title : $.getBusinessField("userName",
									"OPTHIS"),
									field : 'username',
									width : 50,
									align : 'center'
								},
								{
									title : $.getBusinessField("logContent",
									"OPTHIS"),
									field : 'logContent',
									width : 200,
									align : 'left'
								}
								 ] ]

					});
}

function queryBehaviorByParams() {
	var startTime = $("#startTime").val();
	var endTime = $("#endTime").val();
	var username = $("#username").val();
	if(username=="请输入..."){
		$("#username").val("");
	}
	
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
		"username" : $("#username").val().toString(),
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
