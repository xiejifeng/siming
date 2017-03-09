$(function(){
    var loginUser = $.loginUser();
    $("#old_password").validate({
	    required:true
    });
    $("#new_password,#confirm_password").validate({
	    required:true,
		validType:'regexp',
		regular:/^[A-Za-z0-9_-]+$/,
        invalidMessage:'登录密码只能为20位以内英文字母及数字!'
    });
    
    $("#save").click(function(){
        var flag=$("#old_password,#new_password,#confirm_password").validate("isValid");
        if(!flag){
            return;
        }
        var password=$("#new_password").val();
        var cpassword=$("#confirm_password").val();
        if(password != cpassword){
             $.popUpMessage("MSG_UserExpand_013",'','0');
             return;
        }
        
        $.ffcsAjax({
            isLoadMsg:true,
            url:web_path+"userExpand/doUpdatePwd.do",
            data:{
            	"oldPwd":$("#old_password").val(),
                "newPwd":password
            },
            success:function(data){
                if(data){
                    $.popUpMessage("MSG_UserExpand_016","","0",function(){
                        window.location.href=web_path+"main/login.srp";
                    });
                    
                }
            }
        });
        $("#reset").click(function(){
            $("#frm").ajaxForm("clear");
        });
    });
});

