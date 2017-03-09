$(function(){
	$("#search").jButton({
		plain:false,
		iconCls:'icon-search'
	});
	$("#username").validate({
		required:false,
		validType:'regexp',
		regular:/^\S{4,32}$/,
		invalidMessage:'user.username'
	});
	$("#reset").jButton({
		plain:false,
		iconCls:'icon-undo'
	});
	
	$("#reset").click(function(){
		$("#frm").ajaxForm("clear"); 
	});
	
	$("#search").click(function(){
		$("#user_grid").jDatagrid("load",$.formItems($("#frm")));
		$("#search_user_win").closeWindow();
	});
});