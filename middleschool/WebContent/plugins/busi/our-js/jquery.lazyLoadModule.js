/*
 * 该插件实现页面内容分屏向后台做AJAX请求，返回
 * 返回HTML文本内容．
 *主要是针对页面内容比较长的时候，延迟分屏加载
 * div class 要有lazyloadModule,且action为请求路径
 *<pre>
 *<div id="foot" class="lazyloadModule" action="${contextPath}/product/foot">
 *	<#include "/mall-loading-template.html"/>
 *</div
 *
 *</pre>
 *@author tang zhengyu
 */
(function($) {

    $.fn.lazyloadModule = function(options) {
        var settings = {
            threshold    : 0,
            failurelimit : 0,
            event        : "scroll",
            effect       : "show",
            effectspeed:1000,
            container    : window,
            callback:null
        };
                
        if(options) {
            $.extend(settings, options);
        }

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        var elements = this;
        if ("scroll" == settings.event) {
            $(settings.container).bind("scroll", function(event) {
                
                var counter = 0;
                elements.each(function() {
                    if ($.abovethetop(this, settings) ||
                        $.leftofbegin(this, settings)) {
                            /* Nothing. */
                    } else if (!$.belowthefold(this, settings) &&
                        !$.rightoffold(this, settings)) {
                            $(this).trigger("appear");
                    } else {
                        if (counter++ > settings.failurelimit) {
                            return false;
                        }
                    }
                });
                /* Remove image from array so it is not looped next time. */
                var temp = $.grep(elements, function(element) {
                    return !element.loaded;
                });
                elements = $(temp);
            });
        }
        
        this.each(function() {
            var self = this;
            
            /* Save original only if it is not defined in HTML. */
            if (undefined == $(self).attr("action") || "" == $(self).attr("action")) {
                $(self).html("attr action not exist");     
                return true;
            }

            if ("scroll" != settings.event || 
                    undefined == $(self).attr("action") || 
                    settings.placeholder == $(self).attr("tip") || 
                    ($.abovethetop(self, settings) ||
                     $.leftofbegin(self, settings) || 
                     $.belowthefold(self, settings) || 
                     $.rightoffold(self, settings) )) {
            		if (settings.placeholder) {
            			$(self).html( settings.placeholder);      
            		}
                self.loaded = false;
            } else {
                self.loaded = true;
            }
            
            /* When appear is triggered load original image. */
            $(self).one("appear", function() {
                if (!this.loaded) {
                     var param=$(self).attr("param");
                     var method=$(self).attr("method");
                     var data_type=$(self).attr("dataType");
                     var callback=$(self).attr("callback");
                     if(!param){
                    	 param={};
                     }
                     if(!method){
                    	 method="GET";
                     }
                     if(!data_type){
                    	 data_type="html";
                     }
                	 var headers = {
                				_mall_token : getToken()
                	};
        	         $.ajax({
        	             url:$(self).attr("action"),
        	             contentType: "application/json;charset=utf-8",//请求是json
        	             dataType:data_type,//返回是html
        	             type : method,
        	             data:param,
        	             timeout : 10000,
        	             beforeSend : function(xhr) {
        	 				$.each(headers, function(key, value) {
        	 							xhr.setRequestHeader(key,value);
        	 				});
        	 			}
        	         }).done(function(data,status, xhr){
        	        	 if(!data){
        	        		 data='<div style="margin:2px 0 2px 0;widht:100%,height:100%;text-align:center;"><strong>not data return,please try reload again.</strong></div>';
        	        	 }
        	            $(self).html(data)[settings.effect](settings.effectspeed);
       	        	 	if(!!callback&& settings.callback ){
    	        	 		if($.isFunction(settings.callback[$(self).attr("callback")])){
    	        	 			var code=xhr.getResponseHeader("respCode");
    	        	 			var msg=decodeURIComponent(xhr.getResponseHeader("respMsg"));
    	        	 			if(!code){
    	        	 				code=0;
    	        	 				msg="";
    	        	 			}
    	        	 			settings.callback[$(self).attr("callback")].apply(this,[self,true,code,msg]);
    	        	 		}
    	        	 	}
        	         }).fail(function(xhr,textStatus){
        	        	 $(self).html('<div style="margin:2px 0 2px 0;widht:100%,height:100%;text-align:center;"><strong>loading error!</strong></div>')[settings.effect](settings.effectspeed);
     	        	 	if(!!callback&& settings.callback ){
    	        	 		if($.isFunction(settings.callback[$(self).attr("callback")])){
    	        	 			settings.callback[$(self).attr("callback")].apply(this,[self,false,1]);
    	        	 		}
    	        	 	}
        	         }).always(function() { 
        	        	 	self.loaded = true;
        	         });
     
                };
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if ("scroll" != settings.event) {
                $(self).bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $(self).trigger("appear");
                    }
                });
            }
        });
        
        /* Force initial check if images should appear. */
        $(settings.container).trigger(settings.event);
        
        return this;

    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $(element).offset().top - settings.threshold;
    };
    
    $.rightoffold = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).width() + $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left + $(settings.container).width();
        }
        return fold <= $(element).offset().left - settings.threshold;
    };
        
    $.abovethetop = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top;
        }
        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left;
        }
        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };
    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() */

    $.extend($.expr[':'], {
        "below-the-fold" : "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold" : "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold"  : "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold"   : "!$.rightoffold(a, {threshold : 0, container: window})"
    });
    
})(jQuery);