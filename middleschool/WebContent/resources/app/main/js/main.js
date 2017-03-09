var globalMap = new Map();
var selMenuTreeMap=new Map();
var loginuser_info_key="login_user_info";

$(function(){
    var index = 0;
    // 获取登录用户
    var loginUser={};
    $.ffcsAjax({
    	url:web_path+"main/queryCurrentUser.srp",
    	success:function(data){
    		$.extend(loginUser,data);
    		globalMap.put(loginuser_info_key, loginUser);
    	}
    });
    
    
    var showMainMenu = function(id){
    	$.ffcsAjax({
    		url:web_path+"main/renderTreeMenu.srp?resourceId="+id,
    		success:function(data){
    			$.each(data, function(i,n){
    				var menuDiv = '<div id=menu'+ n.id +' class="mymenu '+ n.iconCls +'"><a title="'+ n.text +'" href="javascript:void(0);">'+ n.text +'</a></div>';
    				$("#menu").append(menuDiv);
    				var childrenMenus = n.children;
    				// 判断是否有二级子菜单
    				var hasChildren = childrenMenus && childrenMenus.length > 0 ? true :false;
    				if(hasChildren){
    					var subMenuDiv = $('<div id=navSub'+ n.id +' class="navSub" style="display:none"></div>');
    					$("#menu").append(subMenuDiv);
    					$.each(childrenMenus, function(i,n){
    						subMenuDiv.append('<div id=submenu'+ n.id +' class="lineNav"><a href="javascript:void(0);">'+n.text+'</a></div>');
    						// 绑定二级菜单点击整件
    						$("#submenu"+n.id).click(function(){
    							// 更改选中样式
            					var text = $(".lineNavCurrent").html();
            					$(".lineNavCurrent").html('<a title="'+ text +'" href="javascript:void(0);">'+ text +'</a>');
            					$(".lineNavCurrent").removeClass("lineNavCurrent");
            					$(this).html(n.text);
            					$(this).addClass("lineNavCurrent");
            					$("#home").attr("src", web_path+n.attributes.url);
            				});
    					});
    				}
    				// 绑定一级菜单点击整件
    				$("#menu"+n.id).click(function(){
    					// 更改选中样式
    					var text = $(".currentMenu").html();
    					$(".currentMenu").html('<a title="'+ text +'" href="javascript:void(0);">'+ text +'</a>');
    					$(".currentMenu").removeClass("currentMenu");
    					$(this).html(n.text);
    					$(this).addClass("currentMenu");
    					$(".navSub").hide();
    					// 如果有子菜单时，展开子菜单;没有的话，展示页面。
    					if(hasChildren){
    						$("#navSub"+ n.id).show();
    					}else{
        					$("#home").attr("src", web_path+n.attributes.url);
    					}
    				});
    			});
    			$("#menu").append('<div class="clear"></div>');
    		}
    	});
	};
	
    $.ffcsAjax({
		url:web_path+"main/renderMainMenu.srp",
		success:function(data){
			$.each(data,function(i,n){
				if(i == 0){
					showMainMenu(n['id']);
				}
			});
		}
	});
    
    var getTime = function(){
        var curDate=new Date();
        var m=curDate.getMonth()+1;
        m=m<10?"0"+m:m;
        var d=curDate.getDate()<10?"0"+curDate.getDate():curDate.getDate();
        var h=curDate.getHours()<10?"0"+curDate.getHours():curDate.getHours();
        var mm=curDate.getMinutes()<10?"0"+curDate.getMinutes():curDate.getMinutes();
        var s=curDate.getSeconds()<10?"0"+curDate.getSeconds():curDate.getSeconds();
        //var cd=curDate.getFullYear()+"-"+m+"-"+d+" "+h+":"+mm+":"+s;
        var cd=curDate.getFullYear()+"-"+m+"-"+d;
        $("#today").html(cd);
    };
    getTime();
    
    //window.setInterval(getTime,1000);
    $("#login").click(function(){
    	window.location.href=web_path+"j_spring_security_logout";
    });

    $("#password").click(function(){
        $.openWindow({
                id:'edit_password_window',
                resizable:false,
                draggable:false,
                title:$.getLocaleField("edit_user_password_win_title","user"),
                type:'html',
                width:400,
                height:250,
                modal:true,
                url:web_path+"userExpand/showUpdatePwd.srp",
                onLoadSuccess:function(){
                	$.loadJs("resources/app/main/js/passwordedit.js");
                }
            });
    });
    
	//新增用户按钮
    $("#userAdd").click(function(){
		//新建用户
		 $.openWindow({
			   id:"add_user_win",
			   resizable:false,
			   draggable:false,
			   type:'iframe',
   		   title:'新增用户',
			   width:580,
			   height:450,
			   modal:true,
			   url:web_path+"user/userAdd.srp",
			   onLoadSuccess:function(data){
				   $.loadJs("resources/app/user/js/userAdd.js");
			   },
			   onClose:function(data){
			   }
		   },true);
    });
    
    // 登录次数，登录用户
    /* $.post("../userExpand/getUserInfo.do", {}, function(returnedData, status) {
		$("#username").html(returnedData.data.user.username);
		$("#loginCount").html(returnedData.data.result);
	},"json");*/
    	
});


