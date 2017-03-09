(function($) {
	$.extend($,{
		//error, warning, question, information 
		confirm : function(title,content,options,type) {
		    $.beamDialog({
		        title:title,
		        content:content,
		        showCloseButton: false,
		        otherButtons: ["确定", "取消"],
		        otherButtonStyles: ['btn-primary btn-lg', 'btn-info btn-lg'],
		        clickButton: function (sender, modal, index) {
		        	if(index==0){
		        		if($.isFunction(options.yes)){
		            		options.yes();
		            	} 
		            	if($.isFunction(options.yesdo)){
		            		$(this).closeDialog(modal);
		            		options.yesdo();
		            		return;
		            	} 
		            	$(this).closeDialog(modal);
		        	}else{
		        		if($.isFunction(options.no)){
		        			$(this).closeDialog(modal);
		            		options.no();
		            		return;
		            	} 
		        		$(this).closeDialog(modal);
		        	}
		        }
		    });
//			$(".modal-backdrop").remove();
//			$("#confirm-modal").removeData("bs.modal");
//			$("#modal-confirm-title").html(title);
//			$("#modal-confirm-content").html(content);
//			$("#btn-comfirm-dialog-ok").off("click").on("click",function(){
//				if($.isFunction(options.yes)){
//            		options.yes();
//            	} 
//            	if($.isFunction(options.yesdo)){
//            		$("#confirm-modal").modal('hide');
//            		options.yesdo();
//            		return;
//            	} 
//            	$("#confirm-modal").modal('hide');
//			});
//			$("#confirm-modal").modal('show');
		},
		//error, warning, question, information,confirmation
		alert:function(title,content,type,callBack){
			if(typeof(callBack)=="function"){
				new $.Zebra_Dialog(content, {
					'open_speed':0,
					'keyboard':false,
	            	'modal':true,
	            	'overlay_close':false,
	            	'overlay_opacity':.5,
	                'type':     !!type?type:'information',
	                'title':    title,
	                'buttons' :  ['确定'],
	                'onClose' : callBack
				});
			}else{
				$.beamDialog({
			        title:title,
			        content:content,
			        showCloseButton: false,
			        otherButtons: ["确定"],
			        otherButtonStyles: ['btn-primary btn-lg'],
			        clickButton: function (sender, modal, index) {
			        		$(this).closeDialog(modal);
			        }
			    });
//				$('#alert-modal').modal({backdrop: 'static', keyboard: false});
//				$("#modal-title").html(title);
//				$("#modal-content").html(content);
//				$("#alert-modal").modal();
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
			$('#collapse-1').removeClass('in');
			var errData = ec.util.defaultStr(err.errData, "未知");
			var errTitle = '异常信息';
			if (errData == 'ERR_RULE_-2') {
				errTitle = '规则提示';
				var str='<span class="glyphicon glyphicon-warning" aria-hidden="true"></span>';
				$("#alertM-modal-title").html(str+errTitle);
				var content='规则编码【'+ec.util.defaultStr(err.errCode, "未知") + '】' + ec.util.encodeHtml(ec.util.defaultStr(err.errMsg, "未知"));
				if (err.errorInstNbr) {
					content += '【' + err.errorInstNbr + '】';
				}
				$("#content-title").html(content);
				
			} else {
				var re=new RegExp("&#10;","g");
				$("#alertM-modal-title").html('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+errTitle);
				var c = '错误编码【'+ec.util.defaultStr(err.errCode, "未知") + '】' + ec.util.defaultStr(err.errMsg, "未知");
				if (err.errorInstNbr) {
					c += '【' + err.errorInstNbr + '】';
				}
				$("#content-title").html(c);
				var str = '<font>【详细信息】</font><br/>';
				if (err.resultMap) {
					str += '<font>回参：</font><br/><span>'+ec.util.defaultStr(err.resultMap, "未知")+'</span><br/>';
				}
				str += '<font>异常信息：</font><br/><span>'+(ec.util.encodeHtml(errData).replace(re,"<br/>"))+'</span><br/>';
				str += '<font>入参：</font><br/><span>'+ec.util.encodeHtml(ec.util.defaultStr(err.paramMap, "未知"))+'</span><br/>';
				$("#content-body").html(str);
			}
			$("#order-error").show();
			$("#content").hide();
			$("#btn_error_info").off("click").on("click",function(){
				$("#order-error").hide();
				$("#content").show();
			});
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