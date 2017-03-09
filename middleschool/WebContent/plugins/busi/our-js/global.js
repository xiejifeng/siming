jQuery(function(){
	jQuery("a").filter(function(i){
		var href   = $(this).attr("href");
		var alctag = $(this).attr("alctag");
		return typeof href !="undefined" &&  !!href && href.indexOf("javascript:")!=0 && href != "#" && href != "#loc-page" && alctag != "nochecklogin";
	}).unbind("click").bind("click",function(event){
		var response = $.callServiceAsJson(contextPath+"/staff/login/isLogin");
		if (response.code !=0){
			//阻止原元素默认事件发生,如 a标签href跳转事件
			//弹出登录窗口
			event.preventDefault();
			login.windowpub.alertLoginWindow(response.data);
			//如果提供了事件对象，则这是一个非IE浏览器
			if (event.stopPropagation){
				//因此它支持W3C的 stopPropagation()方法
				event.stopPropagation();
			} else{
				//否则，我们需要使用IE的方式来取消事件冒泡
				event.cancelBubble = true;
			}
		}
	});
});