$(function(){
	initOptHisTable();
	var height = $(window).height();
	$("#opthisTable").datagrid('resize', {
		height : height - 57
	}); 
	
	//艺考类型
	$("#username").selectParam({
		required:true,
		typeId:'1B',
		defaultValue:'1B00',
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
						url : web_path + "topic/listBrushdata.do",
						remoteSort : true,
						isInitLoad : true,
						rownumbers : true,
						sortName : 'id',
						sortOrder : 'desc',
						pagination : true,
						columns : [ [
								{
									title : '科目',
									field : 'topic_name',
									width : 200,
									align : 'center'
								},
								{
									title : '题目ID',
									field : 'topic_id',
									width : 200,
									align : 'center'
								},
								{
									title : '答题人数',
									field : 'total',
									width : 200,
									align : 'center'
								},
								{
									title : '正确率',
									field : 'righttotal',
									width : 200,
									align : 'center',
									formatter : function(value, row, rowindex) {
								    	var right = (Number(value)/Number(row['total']))*100+"";
								    	if(right.length>5){
								    		right = right.substr(0,4)+"%";
								    	}else{
								    		right = right+"%";
								    	}
										return right;
									}
								}
				
								 ] ]

					});
}

function queryBehaviorByParams() {
	var params = {
		"tel" : $("#tel").val().toString(),
		"username":$("#username").combo("getText"),
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
