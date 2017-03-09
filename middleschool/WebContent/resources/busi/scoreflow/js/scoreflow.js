$(function(){
	initOptHisTable();
	var height = $(window).height();
	$("#opthisTable").datagrid('resize', {
		height : height - 150
	}); 
	$("#status").selectParam({
		required:true,
		typeId:'15',
		defaultValue:'1500',
		panelHeight:100,
		invalidMessage:'获取运营商信息失败',
		width:'98%'
	});
	
//导出
	$("#export").click(function(){
		var selectedRow = $('#opthisTable').datagrid('getSelections');
		var userIds="";
		var status="";
		var ids = "";
		if(selectedRow.length==0){
			$.popUpMessage("MSG_UserExpand_014",null,'0');
			return false;
		}else{
			for(var i=0;i<selectedRow.length;i++){
				if(i==0){
					userIds=selectedRow[i].user_id;
					status=selectedRow[i].status;
					ids=selectedRow[i].id;
				}else{
					userIds=userIds+","+selectedRow[i].user_id;
					status=status+","+selectedRow[i].status;
					ids=ids+","+selectedRow[i].id;
				}
			}
			if(status.indexOf("1501")>=0||status.indexOf("1502")>=0||status.indexOf("1503")>=0){
				$.popUpMessage("所选记录中存在已操作记录,请重新选择！",null,'0');
				return false;
			}
			$.popUpMessage('MSG_UserExpand_006', ['导出所选条目'], '0', function(){
				var path = web_path + 'scoreflow/exportData.do?userIds='+ids+"&ids="+ids;
				window.location.href=path;
			}, function (){
				return;
			});
			
		}
	});
//兑换成功
	$("#success").click(function(){
		var selectedRow = $('#opthisTable').datagrid('getSelections');
		var userIds="";
		var status="";
		if(selectedRow.length==0){
			$.popUpMessage("MSG_UserExpand_014",null,'0');
			return false;
		}else{
			for(var i=0;i<selectedRow.length;i++){
				if(i==0){
					userIds=selectedRow[i].id+":"+selectedRow[i].score+":"+selectedRow[i].user_id;
					status=selectedRow[i].status;
				}else{
					userIds=userIds+","+selectedRow[i].id+":"+selectedRow[i].score+":"+selectedRow[i].user_id;
					status=status+","+selectedRow[i].status;
				}
			}
			if(status.indexOf("1500")>=0||status.indexOf("1503")>=0||status.indexOf("1502")>=0){
				$.popUpMessage("所选记录中存在未操作或发货成功记录,请重新选择！",null,'0');
				return false;
			}
			$.popUpMessage('MSG_UserExpand_006', ['发货成功'], '0', function(){
				var path = web_path + 'scoreflow/success.do';
				$.ffcsAjax({
					url:path,
					data:{"ids":userIds},
					success:function(data){
						if(data==0){
							$.popUpMessage('操作成功',null, '0',function(){
								$("#opthisTable").jDatagrid("reload");
							},false,true);
						}else{
							$.popUpMessage('操作失败',null, '0',function(){
								$("#opthisTable").jDatagrid("reload");
							},false,true);
						}
						
					}
				});
			}, function (){
				return;
			});
			
		}
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
						singleSelect : false,
						collapsible : true,
						url : web_path + "scoreflow/listScoreFlow.do",
						remoteSort : true,
						isInitLoad : true,
						rownumbers : true,
						sortName : 'id',
						sortOrder : 'desc',
						pagination : true,
						frozenColumns:[[
						                {title:" ",field:' ',width : 20,align:'center',checkbox:true}
						               
						]],
						columns : [ [
						        {title:'id',field:'user_id',hidden:true},
						        {title:'id',field:'id',hidden:true},
						        {title:'id',field:'status',hidden:true},
								{
									title :'手机号',
									field : 'tel',
									width : 200,
									align : 'center'
								},
								{
									title : '联系人',
									field : 'name',
									width : 200,
									align : 'center'
								},
								{
									title : '物品名称',
									field : 'pname',
									width : 200,
									align : 'center',
									formatter : function(value, row, rowindex) {
										return value;
									}
								},
								{
									title : '兑换积分',
									field : 'score',
									width : 200,
									align : 'center'
								},
								{
								title : '收货地址',
								field : 'address',
								width : 350,
								align : 'center'
							    },
								{
									title : '兑换时间',
									field : 'applytime',
									width : 200,
									align : 'center'
								},
								{
									title : '状态',
									field : 'statusname',
									width : 200,
									align : 'center'
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
		"username":$("#username").val(),
		"status":$("#status").combo("getValue"),
		"tel" : $("#tel").val(),
		"startTime" : startTime,
		"endTime" : endTime  
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
