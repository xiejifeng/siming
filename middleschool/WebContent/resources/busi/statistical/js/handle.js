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
						url : web_path + "statistical/listOpthis.do",
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
									title : '姓名',
									field : 'name',
									width : 200,
									align : 'left'
								},
								{
									title : '登录时间',
									field : 'login_time',
									width : 200,
									align : 'left'
								},
								{
									title : '登录ip',
									field : 'login_ip',
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
		"tel" : $("#tel").val().toString(),
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
