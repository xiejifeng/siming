$(document).ready(function() {
	var wheight = $(window).height();
	var wwidth = $(window).width();
	$(".ordercona").height(wheight - 54 - 326  - 67); //浏览器高度减去头部、中间固定高度、底部  填单界面订单信息固定高度
	$(".optionalcon").height(wheight - 54 - 67); //附属销售品订购滑出层固定高度
	$(".orderleft").height(wheight - 54 - 67 - 50);
	$(".orderright").height(wheight - 54 - 67 - 50);
	$(".ordertabs").height(wheight - 54 - 67 - 50);
	$(".orderleft .optionallist").height(wheight - 54 - 67 - 50 - 40);
	$(".orderright .optionallist").height(wheight - 54 - 67 - 50 - 40);
	
	$(".tabsdiv").width(wwidth - 36 - 36);
	$(".phonedetails.ui-grid-a > .ui-block-b").width(wwidth - 342 - 20);	
	
	$(".pop80").width(wwidth - 200);
	$(".pop80").height(wheight);
	$(".pop80 .ui-header").width(wwidth - 200);
	$(".pop80 .ui-content").width(wwidth - 200);
	$(".pop80 .ui-footer").width(wwidth - 200);
	$(".pop80 .ui-content").height(wheight - 43 - 67);
	
	$(".pop90").width(wwidth - 100);
	$(".pop90").height(wheight);
	$(".pop90 .ui-header").width(wwidth - 100);
	$(".pop90 .ui-content").width(wwidth - 100);
	$(".pop90 .ui-footer").width(wwidth - 100);
	$(".pop90 .ui-content").height(wheight - 43 - 67);
	
	$(".userordertitle").width(wwidth - 100);
	var navbarWidth = $(".navbar4g").width();
	var navbarL = $(".navbar4g").children('li').length;
	$(".navbar4g > li").width(navbarWidth/navbarL);
	
	$(".ui-panel-inner > .ui-listview").height(wheight);
});
