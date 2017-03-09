/**
 * 积分兑换
 */
CommonUtils.regNamespace("ScoreExchange");
ScoreExchange = (function() {
	
	var _checkForm = function() {
		$("#msg").hide();
		var name = $("#name").val();
		var tel = $("#tel").val();
		var address = $("#address").val();
		if (name.trim.length == 0) {
			$("#msg").show();
			return false;
		}
		if (tel.trim.length == 0) {
			$("#msg").show();
			return false;
		}
		if (address.trim.length == 0) {
			$("#msg").show();
			return false;
		}
	};
	var _isExchange = function(idVal) {
		var url = web_path + "appScore/isExchange.html?id="+idVal;
		Common.changeURL(url);
		/*
		$.ffcsAjax({
			url : web_path+'appScore/isExchange.html',
			data:{id: idVal},
			success:function(retData){
				if(retData){
					$.openWindow({
						   id:"win_userAddress",
						   resizable:false,
						   draggable:false,
						   title:"收货信息填写",
						   type:'iframe',
						   width:800,
						   height:500,
						   modal:true,
						   url:web_path+"schart/introductionEditInit.do?id="+id,
						   onLoadSuccess:function(data){
							  // $.loadJs("resources/busi/schart/schartEdit.js");
						   },
						   onClose:function(data){
								if (data.result == "reload") {
									$("#user_grid").jDatagrid("reload");
								} 
						   }
					},true);				
			
					$.popUpMessage('修改成功',null, '0',function(){
						$("#edit_user_win").closeWindow({"result":"reload"});
					},false,true);
				}else{
					$.popUpMessage('修改失败',null, '0',function(){
						$("#edit_user_win").closeWindow({"result":"reload"});
					},false,true);
				}	
			}
		});*/
	};

	return {
		isExchange   : _isExchange,
		checkForm : _checkForm
	};
	
})();