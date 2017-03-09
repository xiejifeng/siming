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
						url : web_path + "answer/listAnswerAnalysisInfo.do",
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
									title : '总刷题数',
									field : 'total',
									width : 200,
									align : 'left'
								},
								{
									title : '总正确率',
									field : 'accuracy',
									width : 200,
									align : 'left',
									formatter : function(value, row, rowindex) {
										return value+"%";
									}
								},
								{
									title : '周刷题数',
									field : 'week_total',
									width : 200,
									align : 'left',
									formatter : function(value, row, rowindex) {
										if(!value){
											return 0;
										}
										return value;
									}
								},
								{
									title : '周正确率',
									field : 'week_accuracy',
									width : 200,
									align : 'left',
									formatter : function(value, row, rowindex) {
										if(!value){
											return "0%";
										}
										return value+"%";
									}
								}
								 ] ]

					});
}

function queryBehaviorByParams() {
	var params = {
		"tel" : $("#tel").val().toString()
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
