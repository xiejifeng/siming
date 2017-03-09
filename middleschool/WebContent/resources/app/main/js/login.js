$(function(){
	/**
        $.openWindow({
            id:"win",
            title:'登录窗口',
            width:320,
            height:235,
//            style:'width: 320px; height: 220px;',
            collapsible:false,
            minimizable:false,
            maximizable:false,
            resizable:false,
            draggable:true,
            closable:false,
            zIndex:-1,
            context:$("#win").html()
        },true);
        **/
	$("#loginName").validate({
		required:true,
		missingMessage:'用户名不可为空!',
		validType:'regexp',
		regular:/^[A-Za-z0-9_-]+$/,
        invalidMessage:'用户名只能为20位以内英文字母及数字!'
	});
	$("#loginPwd").validate({
		required:true,
		missingMessage:'登录密码不可为空!',
		validType:'regexp',
		regular:/^[A-Za-z0-9_-]+$/,
        invalidMessage:'登录密码只能为20位以内英文字母及数字!'
	});
	
	/*if($("#loginName").val()&&$("#loginName").val()!='请输入用户名'&&$("#loginPwd").val()&&$("#loginPwd").val()!='请输入密码'){
		$('#loginbtn').attr("disabled",false);
		$('#resetbtn').attr("disabled",false);
	}*/
	
	
	$('#loginbtn').click(function(){
		if($('#loginbtn').attr("disabled")){
			
			return ;
		}
		
		if($("#loginName").value!=null&&$("#loginName").value!='请输入用户名'&&$("#loginPwd").value&&$("#loginPwd").value!='请输入密码'){
			$('#loginbtn').attr("disabled",false);
			
		}
		
        $('#loginForm').ajaxForm("submit",{
			url:web_path+'j_spring_security_check',
                        isLoadMsg:true,
                        loadMsg:'登录中,请稍候...',
			onSubmit:function(){				
				var flag=$("#loginName").validate("isValid");
				flag=flag && $("#loginPwd").validate("isValid");
        //        flag=flag && $("#valid_Code").validate("isValid");
				return flag;
			},
			success:function(data){
				var resultMsg=data['result'];
				if(resultMsg=="S"){
                    $.addMask("加载中,请稍候.....");
                    window.top.location=web_path+'main/main.srp';
				}
				else{
					//$("#validImage").attr("src",web_path+'main/doCheckCode.srp?'+(new Date()).getTime());
				//	$("#loginPwd").val("");
					var msg=data['message'];
					$.message.alert({
						title:'错误提示',
						msg:msg,
						type:'error'
					});
					$("#error").val(msg);
				}
			}
		});
	});

	$('#resetbtn').click(function(){
		alert(1);
		if($('#resetbtn').attr("disabled")){
			alert(2);
			return ;
		}
		if($("#loginName").value!=null&&$("#loginName").value!='请输入用户名'&&$("#loginPwd").value&&$("#loginPwd").value!='请输入密码'){
			$('#resetbtn').attr("disabled",false);
		}
		
		$('#loginForm').ajaxForm('clear');
	});
       /* $("#validCode").click(function(){
            $("#validImage").attr("src",web_path+'main/doCheckCode.srp?'+(new Date()).getTime());
        });*/
	
	/**
	 * 回车登录
	 */
	$(document).keydown(function(event){
	    var curKey = event.which; 
	    if(curKey == 13){
	    	$("#loginbtn").click();
	    }
    });
});

function changeType(obj){
	if (obj.value =='请输入密码'){
		$("#pass").html("<input type='password' id='loginPwd' name='j_password' style='width: 100%;' maxlength='20' value=''>");
		$("#loginPwd").validate({
			required:true,
			missingMessage:'登录密码不可为空!',
			validType:'regexp',
			regular:/^[A-Za-z0-9_-]+$/,
	        invalidMessage:'登录密码只能为20位以内英文字母及数字!'
		});
	}
}

function changeType1(obj){
//	alert(1);
}




