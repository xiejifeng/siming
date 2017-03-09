;(function (){
	$.fn.extend({
		"tab":function (){
			this.each(function (index,element){
				var $aHead=$(element).find(".tab-head li"),
					$oContainer=$(element).children(".container");
				var $oWrap=$(element);
				$aHead.each(function (index,element){
					$(this).on("click",function (){
						var oBodyWid=$oWrap.find(".tab-body").outerWidth();
						var now=index;
						$aHead.removeClass("active");
						$aHead.eq(now).addClass("active");
						$oContainer.css("transform","translateX("+-now*oBodyWid+"px)");
					});
				});
			});
			return this;
		}
	});
})(jQuery)