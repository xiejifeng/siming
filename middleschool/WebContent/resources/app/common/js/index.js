$(function (){
	// 内容滚动
	// var aTabBody=document.getElementsByClassName("tab-body");
	// for(var i=0;i<aTabBody.length;i++){
	// 	aTabBody[i].addEventListener("touchstart",fnStart,false);
	// }

	// function fnStart(ev){
	// 	var x=-this.offsetWidth;
	// 	this.style.transition="none";
	// 	var disX = ev.targetTouches[0].pageX/rem - x;
	// 	function fn
	// }
	// function fnStart(ev){
	// 	var oldY=ev.targetTouches[0].pageY;
	// 	var conHeight=this.parentNode.offsetHeight;
	// 	var bodyHeight=this.offsetHeight;
	// 	var disY=oldY-$(this).offset().top;
	// 	function fnMove(ev){
	// 		var newY=ev.targetTouches[0].pageY;
	// 		var dis=newY-oldY;
	// 		// console.log(top)
	// 		// if(top<-(bodyHeight+conHeight)){
	// 		// 	top=bodyHeight-conHeight;
	// 		// }else if(top>0){
	// 		// 	top=0;
	// 		// }
	// 		this.style.webkitTransform="translateY("+dis+"px)";
	// 	}
	// 	function fnEnd(){
	// 		document.removeEventListener("touchmove",fnMove,false);
	// 		document.removeEventListener("touchend",fnEnd,false);
	// 	}
	// 	document.addEventListener("touchmove",fnMove,false);
	// 	document.addEventListener("touchend",fnEnd,false);
	// 	ev.preventDefault();
	// }
	// 选项卡
	$("nav").tab();

	//banner轮播
	$(function (){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay:2000,
		    pagination: '.swiper-pagination',
		    autoplayDisableOnInteraction: false
	  	});
	});
});