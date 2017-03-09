$(function(){
	initOptHisTable();
	var height = $(window).height();
	$("#opthisTable").datagrid('resize', {
		height : height - 57
	}); 
	
	//艺考类型
	$("#subject").selectParam({
		required:true,
		typeId:'1B',
		defaultValue:'1B00',
		panelHeight:100,
		invalidMessage:'',
		width:'98%'
	});
	
	//艺考类型
	$("#status").selectParam({
		required:true,
		typeId:'1D',
		defaultValue:'1D02',
		panelHeight:100,
		invalidMessage:'',
		width:'98%'
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
						url : web_path + "topic/listBrushAnalysisInfo.do",
						remoteSort : true,
						isInitLoad : true,
						rownumbers : true,
						sortName : 'id',
						sortOrder : 'desc',
						pagination : true,
						columns : [ [
								{
									title :'用户昵称',
									field : 'nickname',
									width : 200,
									align : 'center'
								},
								{
									title : '姓名',
									field : 'name',
									width : 200,
									align : 'center'
								},
								{
									title :'手机号',
									field : 'tel',
									width : 200,
									align : 'center'
								},
								{
									title : '答题数',
									field : 'total',
									width : 100,
									align : 'center'
								},
								{
									title : '正确数',
									field : 'imgname',
									width : 100,
									align : 'center',
								    formatter : function(value, row, rowindex) {
										return Number(row['total'])-Number(row['errortotal']);
									}
								},
								{
									title : '错误数',
									field : 'errortotal',
									width : 100,
									align : 'center'
								},
								{
									title : '正确率',
									field : 'id',
									width : 100,
									align : 'center',
								    formatter : function(value, row, rowindex) {
								    	var right = ((Number(row['total'])-Number(row['errortotal']))/Number(row['total']))*100+""
								    	if(right.length>5){
								    		right = right.substr(0,4)+"%";
								    	}else{
								    		right = right+"%";
								    	}
										return right;
									}
								},
								{
									title : '总积分',
									field : 'score',
									width : 100,
									align : 'center'
								}
								 ] ]

					});
}

function queryBehaviorByParams() {
	var params = {
		"tel" : $("#tel").val().toString(),
		"username" : $("#username").val().toString()
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
