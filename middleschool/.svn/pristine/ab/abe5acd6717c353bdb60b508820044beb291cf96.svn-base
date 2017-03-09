$(document).ready(function(){

	//头部导航
    $('.nav_list li').hover(function () {
        $(this).addClass('nav_contenton');
    }, function () {
        $(this).removeClass('nav_contenton');
    });	
			
   //2级tab切换
   //$(".order_tab_panel:first").show();
  // $(".order_content").hide();
   $(".order_nav ul li").each(function(index){
	 $(this).click(function(){
		$(".tips").hide();
		//$(".order_content").show();
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parents(".order_nav").siblings(".order_content").find(".order_tab_panel").eq(index).show().siblings().hide();
		});
	});
	
   //3级tab切换
   $(".phone_tab_panel:first").show();
   $(".phone_nav li").each(function(index){
	 $(this).click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parents(".phone_nav").siblings(".phone_tab_content").find(".phone_tab_panel").eq(index).show().siblings().hide();
		})
	})
	
	//填单界面主副卡
   //$(".pdcardcon:first").show();
   //$(".pdcard li:first").addClass("setcon");
   $(".pdcard li").each(function(index){
	 $(this).click(function(){
		$(this).addClass("setcon").siblings().removeClass("setcon");
		$(this).parent().parent().next(".cardtabcon").find(".pdcardcon").eq(index).show().siblings().hide();
		})
	})
	
	//填单界面批量业务
   $(".ordertabcon:first").show();
   $(".ordertab li:first").addClass("setorder");
   $(".ordertab li").each(function(index){
	 $(this).click(function(){
		$(this).addClass("setorder").siblings().removeClass("setorder");
		$(this).parents(".ordernav").siblings(".ordercon").find(".ordertabcon").eq(index).show().siblings().hide();
		})
	})
	
	//首页热门推荐切换
   $(".main_title a:first").addClass("hottab");
  // $(".order_content").hide();
   $(".main_title a").each(function(index){
	 $(this).click(function(){
		$(this).addClass("hottab").siblings().removeClass("hottab");
		$(this).parents(".main_title").siblings(".main_index").find(".phone_warp").find(".phone_list").eq(index).show().siblings().hide();
		});
	});
	
   //2级菜单下分类
   $(".tc_tab_panel:first").show();
   $(".tc_nav li").each(function(index){
	 $(this).click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parents(".tc_nav").siblings(".tc_tab_content").find(".tc_tab_panel").eq(index).show().siblings().hide();
		})
	})		
	
   $(".add_service_tab_panel:first").show();
   $(".add_service_nav li").each(function(index){
	 $(this).click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parents(".add_service_nav").siblings(".add_service_tab_content").find(".add_service_tab_panel").eq(index).show().siblings().hide();
		})
	})	
		
   $(".contract_tab_panel:first").show();
   $(".contract_nav li").each(function(index){
	 $(this).click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parents(".contract_nav").siblings(".contract_tab_content").find(".contract_tab_panel").eq(index).show().siblings().hide();
		})
	})
	
   //点击套餐切换
	$(".plan_box ul li").hover(function(){
		    $(this).parent().find("li").removeClass("on");
			$(this).addClass("on");
		},function(){
			$(this).find("li").removeClass("on");	
		});		
	
   //菜单样式的添加
    $('.main_list_ul').hover(function () {
        $(this).addClass('main_list_ul_hover');
    }, function () {
        $(this).removeClass('main_list_ul_hover');
    });
	
   //首页中热卖套餐tab切换
   $(".selser_tab_panel:first").show();
   $(".side_nav li").each(function(index){
	 $(this).click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parents(".side_nav").siblings(".selser_tab_content").find(".selser_tab_panel").eq(index).show().siblings().hide();
		});
	});	
	
   //首页中最新信息展示tab切换
   $(".news_tab_panel:first").show();
   $(".news_nav li").each(function(index){
	 $(this).click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(this).parents(".news_nav").siblings(".news_tab_content").find(".news_tab_panel").eq(index).show().siblings().hide();
		});
	});	
	
		
   //返回顶部
   $(this).scroll(function(){ 
	 $("#GoTop").css("top",$(this).scrollTop()+200); 
   }) 
   
   //合约套餐的显示与隐藏
  	$("#sel_plan").click(function(){
  		$("#sel_plan_content").toggle();
  	});
	   
   //显示合约的月份
   $("#cf").click(function(){
		$(".hy_content").toggle();
   });
   $("#gj").click(function(){
		$(".hy_content").toggle();
   });  
   
	 //省份选择
	$(".city-pop .subbut").click(function(){
		$(".city-pop").hide();
		$(".cur-city").removeClass("act").addClass('default');
		});		 
  	$(".cur-city").click(function(){
        $(this).removeClass('default').addClass('act');
  		$(".city-pop ").toggle();
  	});

	 //快捷方式的添加与删除
   $(".ul_list ul").each(function(index){
	 $(this).click(function(){
		$(this).toggleClass("ul_sel");	
		$(".ul_list ul a.close:first").show();
		});
	});	

});
//更多菜单的展开和收起
function more_layer(){
	var more_nav_content= document.getElementById("more_nav_content");
	var more_nav_btn= document.getElementById("more_nav_btn");
	if(more_nav_content.style.display=="none"){
		$.get( function(data){
			$('#more_nav_content').html(data);
		}); 
		more_nav_content.style.display="block";
		more_nav_btn.className="more_nav_open"
	}else{
		more_nav_content.style.display="none";
		more_nav_btn.className="more_nav_close"
	}
}


//定制的展开和收起
function more_layer2(){
	var add_service_content= document.getElementById("add_service_content");
	var o_btn= document.getElementById("o_btn");
	if(add_service_content.style.display=="none"){
		$.get( function(data){
			$('#add_service_content').html(data);
		}); 
		add_service_content.style.display="block";
		o_btn.className="o_btn_close"
	}else{
		add_service_content.style.display="none";
		o_btn.className="o_btn_open"
	}
}

//品牌全部展示与部分展示
function view_termManf_div(termManf_div_id){
	document.getElementById("termManf_small").style.display="none";
	document.getElementById("termManf_all").style.display="none";
	document.getElementById(termManf_div_id).style.display="";	
	document.getElementById("view_termManf_param").value=termManf_div_id;
}

//乐享3G上网版套餐的切换
function showtc(obj,showid){
			$('.tctab').hide()
			$('.'+showid).show();
}

//现金充值的切换
function showhm(obj,showid){
			$('.hmtab').hide()
			$('.'+showid).show();
}
function showcp(obj,showid){
			$('.cptab').hide()
			$('.'+showid).show();
}

//快捷菜单的切换
function showside(obj,showid){
		$('.side_nav a').removeClass('side_nav_hover');
			$(obj).addClass('side_nav_hover');$('.sidelisthide').hide()
			$('.'+showid).show();
}
