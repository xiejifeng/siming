//首页今日课堂入口按钮点击效果
$('.g-entrance-box li').on('touchstart', function() {
	$(this).addClass('active');
});
$('.g-entrance-box li').on('touchend', function() {
	$(this).removeClass('active');
});
//首页课程列表点击效果
$('.g-list-box li').on('touchstart', function() {
	$(this).addClass('active');
});
$('.g-list-box li').on('touchend', function() {
	$(this).removeClass('active');
});

//顶部标题栏返回按钮点击
$('.g-left-icon').on('touchstart', function() {
	$(this).addClass('active');
});
$('.g-left-icon').on('touchend', function() {
	$(this).removeClass('active');
});


//登陆页面点击登录按钮点击
$('.submite-btn').on('touchstart', function() {
	$(this).addClass('active');
});
$('.submite-btn').on('touchend', function() {
	$(this).removeClass('active');
});
//设置登陆页面高度等于屏幕高度
var loHe = window.screen.height;
$('.g-login-box').css('height', loHe);
//全部红色按钮点击效果{
$('.btn').on('touchstart', function() {
	$(this).addClass('active');
});
$('.btn').on('touchend', function() {
	$(this).removeClass('active');
});
//顶部tab页面切换
$('.g-tab-box .tab-list a').on('touchend',function(){
    var className = $(this).parent().attr("class");
    if(className.indexOf("tab3")>0){
    	return;
    }
	if($(this).attr("class")=="tab3-box"){
		reutrn;
	}
	$('.active').removeClass('active');
	$(this).addClass('active');
	$('.tab1-box, .tab2-box, .tab3-box').css('display','none');
	$('.'+className.substring(className.length-4)+'-box').css('display','block');
});
//积分兑换页面点击效果
$('.g-integral-group .integral-list').on('touchstart', function() {
	$(this).addClass('active');
});
$('.g-integral-group .integral-list').on('touchend', function() {
	$(this).removeClass('active');
});

//学籍卡 教师证列表点击效果
$('.g-user-group .user-list').on('touchstart', function() {
	$(this).addClass('active');
});
$('.g-user-group .user-list').on('touchend', function() {
	$(this).removeClass('active');
});

//刷题列表点击效果
$('.g-sub-list-box .sub-list').on('touchstart', function() {
	$(this).addClass('active');
});
$('.g-sub-list-box .sub-list').on('touchend', function() {
	$(this).removeClass('active');
});

//聊天室聊天窗口实现滚动效果
$('.chat-his-btn').on('touchend', function() {
	if($('.chat-box-position').hasClass('his')){
		$('.chat-box-position').removeClass('his');
		$('.chat-his-btn').html('聊天记录');
	}else{
		$('.chat-box-position').addClass('his');
		$('.chat-his-btn').html('回聊天室');
	}
});

//直播页面更多菜单开关
$('.more').on('touchend',function(){
	if($('.g-more-box').hasClass('dis-none')){
		$('.g-more-box').removeClass('dis-none');
		$(".more").text("收起");
	}
	else{
		$('.g-more-box').addClass('dis-none');
		$(".more").text("更多");
	}
});

//注册页面用户协议打开和关闭事件
$('.read-more').on('touchend',function(){
	if($('.agreement-box').hasClass('active')){
		$('.agreement-box').removeClass('active');
		$('.read-more').html('滚动阅读');
	}
	else{
		$('.agreement-box').addClass('active');
		$('.read-more').html('收回全文');
	}
});