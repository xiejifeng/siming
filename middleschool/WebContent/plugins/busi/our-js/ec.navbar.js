/**
 * 前台分页工具类
 * 结合宏NavBar使用
 * @class ec.navbar
 * @author liusd
 * @createDate 2013-04-13
 */
CommonUtils.regNamespace("ec", "navbar");
ec.navbar = (function(){
	//初始化导航条
	var _pageInit = function(){
		var nav$ = $("#ec-navbar");
		//存在导航条标记
		if(nav$.length>0){
			var html = "<a href='"+contextPath+"/main/home'>首页</a>";
			var menuId = nav$.attr("curMenuNo");
			$.callServiceAsJsonGet(contextPath+"/portal/menu/query4navbar?menuId="+menuId,{
				"before":function(){
					nav$.html("现在位置：<img src='"+contextPath+"/image/navbar.gif'/>");
				},
				"always":function(){
					
				},
				done:function(response){
					if (response.code == 0) {
						var list = response.data;
						if(list.length>0){
							$.each(list,function(i,menu){
								html += "&gt;<a href='"+contextPath+menu.MENU_PATH+"'>"+menu.RESOURCE_NAME+"</a>";
							});
						}
					}
					nav$.html("现在位置："+html);
				},
				fail:function(response){
					nav$.html("现在位置："+html);
				}
			});
		}
	};
	return {
		pageInit:_pageInit
	};
})()
$(function(){
	ec.navbar.pageInit();
});