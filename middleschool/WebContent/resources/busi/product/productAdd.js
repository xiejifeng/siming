$(function() {
	vaildateForm();
	
	/**
	 * 新增物品
	 */
	$("#saveAddProduct").click(function(){
		if(!$("#addfrm").valid()){
			return;
		}
		var name =$("#name").val();
		var status = $("#status").combo("getValue");
		var score = $("#score").val();
		var stock = $("#stock").val();
		var introduce = $("#introduce").val();
		var mainimg = $("#main_img").attr("src");
		var data={
				"name":name,
				"status":status,
				"score":score,
				"stock":stock,
				"introduce":introduce,
				"mainimg":mainimg
		};
		$.popUpMessage('您要新增该物品?',null, '0',function(){
			$.addMask();
			$.ajax({
				url : web_path+'product/saveProduct.do',
				type : "post",
				data : data,
				beforeSend:function(XMLHttpRequest){
				},
				complete:function(XMLHttpRequest, textStatus){
				},
				success : function(response) {
					var data = jQuery.parseJSON(response).data;
					var product_id = data.entity;
					if(data.resultCode=="0"){
						$("img[name='product_img']").each(function(){
							var data ={
									"productid":product_id,
									"img":$(this).attr("src")
							};
							uploadImg(data);
						});
						$.removeMask();
						$.popUpMessage('新增成功',null, '0',function(){
							$("#add_user_win").closeWindow({"result":"reload"});
						},false,true);
					}else{
						$.removeMask();
						$.popUpMessage('新增失败',null, '0',function(){
							$("#add_user_win").closeWindow({"result":"reload"});
						},false,true);
					}
				}
			});
		},false,true);
	});
	
});

//上传图片
function _modifyUserImg(obj,id) {
	var file = obj.files[0];
	// 判断类型是不是图片
	if (!/image\/\w+/.test(file.type)) {
		Common.showMessage("请确保文件为图像类型", "warn");
		return false;
	}   
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e) {
		var result = this.result;
        $("#"+id).attr("src",result); 
	};
};

function uploadImg(data){
	$.ajax({
		url : web_path+'product/uploadImg.do',
		type : "post",
		data : data,
		async: false,
		beforeSend:function(XMLHttpRequest){
		},
		complete:function(XMLHttpRequest, textStatus){
		},
		success : function(response) {

		}
	});
}

function vaildateForm(){
    $("#addfrm").validate({
        rules: {
            name:{
                required: true,
            },
            score:{
                required: true,
                maxlength: 11,
                digits:true
            },
            stock:{
                required: true,
                digits:true
            },
            introduce:{
                required: true
            }
        }
    });
}