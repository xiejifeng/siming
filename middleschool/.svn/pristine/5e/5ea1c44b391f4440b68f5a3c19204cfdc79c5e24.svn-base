/**
 * 电子渠道集团代理商共用工具类
 * 
 * @author tang
 */
CommonUtils.regNamespace("ec.agent", "page");
/**
 * 导航菜单加载工具
 */
ec.agent.page = (function(){
	//首页头部导航菜单加载不同的子页面功能
	/**
	 * @param url 加载地址
	 * @parm target 替换页面目标id
	 */
	var _pageChildLoad= function(url,target,fun){
		$.callServiceAsHtmlGet(url,{
			"before":function(){
				var target$=null;
				if(typeof target=="string"){
					target$=$("#"+target);
				}else {
					target$=target;
				}
				target$.data("old_html",target$.html());
				target$.html('<div style="margin:5px 0 5px 0;widht:100%,height:100%;text-align:center;">'+
			     '<img src="'+contextPath+'/image/ajax-loader.gif"></div>');
			},
			"done" : function(response){
			
				if(!response){
					 response.data='<div style="margin:2px 0 2px 0;widht:100%,height:100%;text-align:center;"><strong>not data return,please try reload again.</strong></div>';
				}
				var content$=null;
				if(typeof target=="string"){
					content$=$("#"+target);
				}else {
					content$=target;
				}
				content$.addClass("pageright").removeClass("in out").addClass("out");
				setTimeout(function(){
					 if(response.code==1103 ||  response.code==1104){
						content$.html(content$.data("old_html")).removeClass("cuberight in out").addClass("pop in");
					} else if(response.code==0){
						content$.html(response.data).removeClass("cuberight in out").addClass("pop in");
					}
					setTimeout(function(){
						content$.removeClass("pop in out");
					},500);
					if($.isFunction(fun)){
						fun.apply(this,[response]);
					}
				},500);

			}
		,"fail":function(response){
				if($.isFunction(fun)){
						fun.apply(this,[response]);
				}else {
					var target$=null;
					if(typeof target=="string"){
						target$=$("#"+target);
					}else {
						target$=target;
					}
					if(response.code==0){
						
					}
					if(response.code==1103 ||  response.code==1104){
						content$.html(content$.data("old_html"));
					}else{
						target$.html('<div style="margin:2px 0 2px 0;widht:100%,height:100%;text-align:center;"><strong>加载页面失败,请重新加载!.</strong></div>');
					}
	
				}
			}
		});	
	};
	/**
	 * @param url 加载地址
	 */
	var _pageNewLoad= function(url){
		//跳转地址前判断是否登录超时
		if(login.windowpub.checkLogin()){
			window.location.href=url;
		}
	};
	//与_pageChildLoad方法相同，去掉HTML5效果
	var _pageChildLoadNoHTML5= function(url,target,fun){
		$.callServiceAsHtmlGet(url,{
			"before":function(){
				var target$=null;
				if(typeof target=="string"){
					target$=$("#"+target);
				}else {
					target$=target;
				}
				target$.data("old_html",target$.html());
				target$.html('<div style="margin:5px 0 5px 0;widht:100%,height:100%;text-align:center;">'+
			     '<img src="'+contextPath+'/image/ajax-loader.gif"></div>');
			},
			"done" : function(response){
				if(!response){
					 response.data='<div style="margin:2px 0 2px 0;widht:100%,height:100%;text-align:center;"><strong>not data return,please try reload again.</strong></div>';
				}
				var content$=null;
				if(typeof target=="string"){
					content$=$("#"+target);
				}else {
					content$=target;
				}
				setTimeout(function(){
					 if(response.code==1103 ||  response.code==1104){
						content$.html(content$.data("old_html"));
					} else if(response.code==0){
						content$.html(response.data);
					}
					if($.isFunction(fun)){
						fun.apply(this,[response]);
					}
				},500);

			}
		,"fail":function(response){
				if($.isFunction(fun)){
						fun.apply(this,[response]);
				}else {
					var target$=null;
					if(typeof target=="string"){
						target$=$("#"+target);
					}else {
						target$=target;
					}
					if(response.code==0){
						
					}
					if(response.code==1103 ||  response.code==1104){
						content$.html(content$.data("old_html"));
					}else{
						target$.html('<div style="margin:2px 0 2px 0;widht:100%,height:100%;text-align:center;"><strong>加载页面失败,请重新加载!.</strong></div>');
					}
	
				}
			}
		});	
	};
	return {
		pageChildLoad		:_pageChildLoad,
		pageChildLoadNoHTML5:_pageChildLoadNoHTML5,
		pageNewLoad			:_pageNewLoad
	};
})();