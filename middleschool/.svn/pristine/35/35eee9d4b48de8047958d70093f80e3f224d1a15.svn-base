
var pageTitle = $("head title").text();
//当前弹窗的服务器IP
var alertIP = pageTitle.substring(pageTitle.indexOf("["), pageTitle.lastIndexOf("]") + 1);
//当前弹窗的时间戳
var getAlertTimeStamp = function(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var date = now.getDate();
	var hour = now.getHours();
	if(hour<10){
		hour = "0"+hour;
	}
	var minute = now.getMinutes();
	if(minute<10){
		minute = "0"+minute;
	}
	var second = now.getSeconds();
	if(second<10){
		second = "0"+second;
	}
	return year+"/"+month+"/"+date+" "+hour+":"+minute+":"+second;
};

(function($) {
	$.extend($,{
		//error, warning, question, information 
		confirm : function(title,content,options,type) {
			var confirmTitle = title + alertIP + getAlertTimeStamp();
			var buttons= ['确定', '取消'];
			if(!$.isFunction(options.no)){
				buttons= ['确定'];
			}
			new $.Zebra_Dialog(content,{
				'keyboard':false,
            	'modal':true,
            	'overlay_close':false,
            	'overlay_opacity':.5,
                'type':    !!type?type:'confirmation',
                'title':    confirmTitle,
                'buttons':  buttons,
                'onClose':  function(caption) {
                    if(caption == '确定'){
                    	if($.isFunction(options.yes)){
                    		options.yes();
                    	} 
                    	if($.isFunction(options.yesdo)){
                    		$(".ZebraDialog").remove();
                			$(".ZebraDialogOverlay").remove();
                    		options.yesdo();
                    		return;
                    	} 
                    }else{
                    	if($.isFunction(options.no)){
                    		options.no();
                    	}
                    }
                    $(".ZebraDialog").remove();
                	$(".ZebraDialogOverlay").remove();
                }
			});
		},
		//error, warning, question, information,confirmation
		alert:function(title,content,type,callBack){
			var alertTitle = title + alertIP + getAlertTimeStamp();
			if(typeof(callBack)=="function"){
				new $.Zebra_Dialog(content, {
					'open_speed':0,
					'keyboard':false,
	            	'modal':true,
	            	'overlay_close':false,
	            	'overlay_opacity':.5,
	                'type':     !!type?type:'information',
	                'title':    alertTitle,
	                'buttons' :  ['确定'],
	                'onClose' : callBack
				});
			}else{
				new $.Zebra_Dialog(content, {
					'open_speed':0,
					'keyboard':false,
	            	'modal':true,
	            	'overlay_close':false,
	            	'overlay_opacity':.5,
	                'type':     !!type?type:'information',
	                'title':    alertTitle,
	                'buttons' :  ['确定']
				});
			}
		},
		alertW:function(title,content,type,callBack,width){//可自定义宽度弹出窗
			var alertTitle = title + alertIP + getAlertTimeStamp();
			if(typeof(callBack)=="function"){
				new $.Zebra_Dialog(content, {
					'open_speed':0,
					'keyboard':false,
	            	'modal':true,
	            	'overlay_close':false,
	            	'overlay_opacity':.5,
	                'type':     !!type?type:'information',
	                'title':    alertTitle,
	                'width' :  width,
	                'buttons' :  ['确定'],
	                'onClose' : callBack
				});
			}else{
				new $.Zebra_Dialog(content, {
					'open_speed':0,
					'keyboard':false,
	            	'modal':true,
	            	'overlay_close':false,
	            	'overlay_opacity':.5,
	                'type':     !!type?type:'information',
	                'width':    width,
	                'title':    alertTitle,
	                'buttons' :  ['确定']
				});
			}
		},
		alertFast:function(title,content,type){
			new $.Zebra_Dialog(content, {
				'open_speed':0,
				'keyboard':false,
				'modal':true,
				'overlay_close':false,
				'overlay_opacity':.5,
				'type':     !!type?type:'information',
						'title':    title,
						'buttons':  ['确定']
			});
		},
		alertOpt:function(title,content,opt){
			new $.Zebra_Dialog(content, $.extend({
				'open_speed':1000,
				'keyboard':false,
				'modal':true,
				'overlay_close':false,
				'overlay_opacity':.5,
				'type':     !!type?type:'information',
						'title':    title,
						'buttons':  ['确定']
			}, opt));
		},
		//同步执行，关闭时执行后面的js动作
		alertSync:function(title,content,type,callBack){
			new $.Zebra_Dialog(content, {
				'open_speed'	:1000,
				'keyboard'		:false,
            	'modal'			:true,
            	'overlay_close'	:false,
            	'overlay_opacity':.5,
                'type'			: !!type?type:'information',
                'title'			: title,
                'buttons'		: ['确定'],
                'onClose'		: callBack
			});
		},
		//error, warning, question, information,confirmation
		alertM:function(err,callBack){
			var rand = ec.util.getNRandomCode(5);
			var opId = "alertMoreOp" + rand;
			var contId = "alertMoreContent" + rand;
			var errData = ec.util.defaultStr(err.errData, "未知");
			var c  = '<div>';
			var errTitle = '异常信息' + alertIP + getAlertTimeStamp();
			var typeIcon = 'error';
			if (errData == 'ERR_RULE_-2') {
				errTitle = '规则提示' + alertIP + getAlertTimeStamp();
				typeIcon = 'warning';
				c += '<div class="am_baseMsg">';
				c += '规则编码【'+ec.util.defaultStr(err.errCode, "未知") + '】' + ec.util.encodeHtml(ec.util.defaultStr(err.errMsg, "未知"));
				if (err.errorInstNbr) {
					c += '【' + err.errorInstNbr + '】';
				}
				c += '</div>';
			} else {
				c += '<div class="am_baseMsg">';
				var logSeqId = '';
				// InterfaceException
				if (err.logSeqId != undefined && err.logSeqId != '') {
					logSeqId = '<br />日志标识ID【' + ec.util.defaultStr(err.logSeqId, "未知") + '】';
				}
				// BusinessException
				if (jQuery.parseJSON(err.resultMap) != undefined && jQuery.parseJSON(err.resultMap).logSeqId != undefined && jQuery.parseJSON(err.resultMap).logSeqId != '') {
					logSeqId = '<br />日志标识ID【' + ec.util.defaultStr(jQuery.parseJSON(err.resultMap).logSeqId, "未知") + '】';
				}
				c += '错误编码【'+ec.util.defaultStr(err.errCode, "未知") + '】' + ec.util.defaultStr(err.errMsg, "未知") + logSeqId;
				if (err.errorInstNbr) {
					c += '【' + err.errorInstNbr + '】';
				}
				c += '</div>';
				c += '<div class="am_more"><a id="'+ opId +'" href="javascript:void(0);" onclick="">&nbsp;【更多】&nbsp;</a></div>';
				c += '<div id="'+ contId +'" class="am_moreMsg"><font>【详细信息】</font><br/>';
				if (err.resultMap) {
				    c += '<font>回参：</font><br/><span>'+ec.util.defaultStr(err.resultMap, "未知")+'</span><br/>';
				}
				c += '<font>异常信息：</font><br/><span>'+ec.util.encodeHtml(errData)+'</span><br/>';
				c += '<font>入参：</font><br/><span>'+ec.util.encodeHtml(ec.util.defaultStr(err.paramMap, "未知"))+'</span><br/>';
			}
			c += '</div></div>';
			if(typeof(callBack)=="function"){
				new $.Zebra_Dialog(c, {
					'keyboard'	:true,
	            	'modal'		:true,
	            	'animation_speed':500,
	            	'overlay_close':false,
	            	'overlay_opacity':.5,
	                'type'		: typeIcon,
	                'title'		: errTitle,
	                'position' 	: ['left + 380', 'top + 100'],
	                'width'		: 430,
	                'buttons'	: ['确定'],
	                'onClose' : callBack
				});
			}else{
				new $.Zebra_Dialog(c, {
					'keyboard'	:true,
	            	'modal'		:true,
	            	'animation_speed':500,
	            	'overlay_close':false,
	            	'overlay_opacity':.5,
	                'type'		: typeIcon,
	                'title'		: errTitle,
	                'position' 	: ['left + 380', 'top + 100'],
	                'width'		: 430,
	                'buttons'	: ['确定']
				});
			}
//			$("#alertMoreOp").off("click").on("click",function(){$("#alertMoreContent").slideDown("slow");});
			$("#"+opId).off("click").toggle(
				function(){
					$("#"+contId).slideDown("normal");
				},
				function(){
					$("#"+contId).slideUp("fast");
				}
			);
		},
		//error, warning, question, information,confirmation
		alertMore:function(title,bNumber,bContent,mContent,type){
			var c  = '<div>';
				c += '<div class="am_baseMsg">'+bNumber+'</div>';
				c += '<div class="am_baseMsg">'+bContent+'</div>';
			    c += '<div class="am_more"><a id="alertMoreOp" href="javascript:void(0);" onclick="">&nbsp;【更多】&nbsp;</a></div>';
			    c += '<div id="alertMoreContent" class="am_moreMsg"><font>详细信息：</font><br/><p>'+mContent+'</p></div>';
			    c += '</div>';
			
			new $.Zebra_Dialog(c, {
				'keyboard'	:true,
            	'modal'		:true,
            	'animation_speed':500,
            	'overlay_close':false,
            	'overlay_opacity':.5,
                'type'		: !!type?type:'information',
                'title'		: title,
                'position' 	: ['left + 380', 'top + 180'],
                'width'		: 430,
                'buttons'	: ['确定']
			});
			$("#alertMoreOp").off("click").on("click",function(){$("#alertMoreContent").slideDown("slow");});
		},
		mask : function(content) {
			$.blockUI({
        		message:  '<div id="loadmask" class="loadmask-msg" style="z-index:30000;"><div>'+content+'</div></div>'
		    });
		    $("#blockMsg").width($("#loadmask").width()+10);
		    $("#blockUI").css("opacity","0.1");
		    $("#blockMsg").css("opacity","1");
		    $("#blockOverlay").css("opacity","0.1");
		    $("#blockMsg").css("border","0");
		},
		unmask : function() {
			$.unblockUI();
		}
	});
})(jQuery);