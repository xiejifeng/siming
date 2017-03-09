/**
 * 弹出层窗口
 * 
 * @author tang
 */
CommonUtils.regNamespace("ec.form","dialog");
/**
 * 依赖 ketchup jquery.simple 两个JS
 * 对 simple dialog二次封装
 */
ec.form.dialog = (function(){
	var defOptions={id:"",title:"","submitCallBack":null,"initCallBack":null,"closeCallBack":null,position:["15%"],modal:true,drag:false,width:null,height:null,close:true,
			beforeClose:null,afterClose:null,
			overlayLeft:null,overlayTop:null,
			zIndex:1000};//heihgt:250,submitCallBack:function(dialogForm,dialog)
	var defaultOptions={};
	var _createDialog=function(options){
		defaultOptions=$.extend({},defOptions,options||{});
		if(!(defaultOptions && defaultOptions.submitCallBack && $.isFunction(defaultOptions.submitCallBack))){
			alert("submitCallBack is must have");
			return;
		}
		// create a modal dialog with the data
		if(!defaultOptions.width){
			$("#ec-dialog-form-container"+defaultOptions.id).css({width:450});
		}else {
			$("#ec-dialog-form-container"+defaultOptions.id).css({width:defaultOptions.width});
		}
		if(defaultOptions.close){
			$("#ec-dialog-form-container"+defaultOptions.id).modal({
				closeHTML: '<a href="javascript:void(0)" title="关闭" class="modal-close simplemodal-close"><div class="modal-close"></div></a>',
				position: defaultOptions.position,
				autoResize:false,
				escClose:true,
				modal:defaultOptions.modal,
				overlayId: 'ec-dialog-overlay'+defaultOptions.id,
				containerId: 'ec-dialog-container'+defaultOptions.id,
				zIndex: defaultOptions.zIndex,
				onOpen: dialogForm.open,
				onShow: dialogForm.show,
				onClose: !!defaultOptions.onClose ? null : dialogForm.close
			});
		} else {
			$("#ec-dialog-form-container"+defaultOptions.id).modal({
				closeHTML: '',
				position: defaultOptions.position,
				autoResize:false,
				escClose:false,
				modal:defaultOptions.modal,
				overlayId: 'ec-dialog-overlay'+defaultOptions.id,
				containerId: 'ec-dialog-container'+defaultOptions.id,
				onOpen: dialogForm.open,
				onShow: dialogForm.show,
				onClose: dialogForm.close
			});
		}
			var isFixOverlay=false;
			if(defaultOptions.overlayLeft){
				isFixOverlay=true;
				$("#ec-dialog-overlay").css({"left":defaultOptions.overlayLeft});
			}
			if(defaultOptions.overlayTop){
				isFixOverlay=true;
				$("#ec-dialog-overlay").css({"top":defaultOptions.overlayTop});
			}
			if(!isFixOverlay){
				$([document,window]).off(".ecdo").on("scroll.ecdo resize.ecdo",function(){
					$("#ec-dialog-overlay"+defaultOptions.id).css({"width":width(),"height":height()});
				});
			}

	};

	   var height= function () {
	        var d, c;
	        if ($.browser.msie && $.browser.version < 7) {
	            d = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
	            c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
	            if (d < c) {
	                return $(window).height() ;
	            } else {
	                return d;
	            }
	        } else {
	            return $(window).height();
	        }
	    };
	   var  width= function () {
	        var c, d;
	        if ($.browser.msie && $.browser.version < 7) {
	            c = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
	            d = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
	            if (c < d) {
	                return $(window).width() ;
	            } else {
	                return c;
	            }
	        } else {
	            return $(window).width();
	        }
	    };
	var dialogForm={
			open:function (dialog) {
				
				// add padding to the buttons in firefox/mozilla
				if ($.browser.mozilla) {
					$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-button').css({
						'padding-bottom': '5px'
					});
				}
				// input field font size
				if ($.browser.safari) {
					$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-input').css({
						'font-size': '.9em'
					});
				}
				
				var title$=$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-title');
				var title = defaultOptions.title;
				if(title == "") {
					title = title$.html();
				}
				//var title=title$.html();
				if(!!title$.data("firsttitle")){
					title =title$.data("firsttitle");
				} else {
					title$.data("firsttitle",title);	
				}
				
				// dynamically determine height
				var h =$("#ec-dialog-container"+defaultOptions.id).height();
				h += 22;
				if(defaultOptions.height){
					h=defaultOptions.height;
				}
				if(h<45){
					h=$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').height()+h+title$.height();
					$("#ec-dialog-container"+defaultOptions.id).css({"height":h});
				}
				$("#ec-dialog-container"+defaultOptions.id).data("height",h);
				if($.ketchup)
				$.ketchup.removeErrorContainer($("#ec-dialog-form-container"+defaultOptions.id));
				title$.html('加载中...');
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-loading').show();
				
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').hide();
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-form').hide();

				if(defaultOptions.drag){
					try{
						$("#ec-dialog-container" +defaultOptions.id).draggable({handle: "div.ec-dialog-form-top", opacity: 0.65});
						$("#ec-dialog-form-container" +defaultOptions.id+" div.ec-dialog-form-top").css({"cursor":"move"});
					}catch(e){
						//jquery.ui.core,jquery.ui.widget,jquery.ui.mouse.query.ui.draggable three js file
					}
				}
				dialog.overlay.fadeIn(200, function () {
					dialog.container.fadeIn(200, function () {
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-content').css({height:"80"});
						if(defaultOptions.initCallBack && $.isFunction(defaultOptions.initCallBack)){
							defaultOptions.initCallBack.apply(this,[dialogForm,dialog]);
						}
						dialog.data.fadeIn(200, function () {
								title$.html(title);
								$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-loading').hide();
								$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-form').fadeIn(200, function () {
									var h=0;
									if(defaultOptions.height){
										h= defaultOptions.height;
									} else {
										h=$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-form').height();
										h += 22;
										if(h<25){
											h=$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-form').children().first().height();
										}
										h += 22;
									}
									if($("#ec-dialog-container"+defaultOptions.id).height()<h){
										var containerHeight=$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').height()+h+title$.height();
										$("#ec-dialog-container"+defaultOptions.id).css({"height":containerHeight});
									}
									$("#ec-dialog-container"+defaultOptions.id).data("height",h);
									$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-content').animate({
										height: h
									});
									// fix png's for IE 6
									var boolBtnDiv = $("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').attr("ifshow");
									//alert(boolBtnDiv);
									if(boolBtnDiv != "false") {
										$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').show();
									}
									if ($.browser.msie && $.browser.version < 7) {
										$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-button').each(function () {
											if ($(this).css('backgroundImage').match(/^url[("']+(.*\.png)[)"']+$/i)) {
												var src = RegExp.$1;
												$(this).css({
													backgroundImage: 'none',
													filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +  src + '", sizingMethod="crop")'
												});
											}
										});
									}
								});

						});
					});
				});
			},
			show:function (dialog) {
				if($.ketchup){
					$("#ec-dialog-form-container"+defaultOptions.id).bind('formIsValid', function(event, form) {
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').hide();
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-message').hide().empty();
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-title').html('提交中...');
						
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-form').fadeOut(200);
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-content').animate({
							height: '80'
						}, function () {
							$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-loading').fadeIn(200, function () {
								defaultOptions.submitCallBack.apply(this,[dialogForm,dialog]);
							});
						});
						
					}).ketchup({bindElement:"#ec-dialog-form-container"+defaultOptions.id+" .ec-dialog-form-send"});
				} else {
					$("#ec-dialog-form-container"+defaultOptions.id+" #dialogFormSubmit").click(function(){
					 $("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-message').hide().empty();
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-title').html('提交中...');
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').hide();
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-form').fadeOut(200);
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-content').animate({
							height: '80'
						}, function () {
							$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-loading').fadeIn(200, function () {
								defaultOptions.submitCallBack.apply(this,[dialogForm,dialog]);
							});
						});
					});
				}
			},
			close:function (dialog) {
				var modal=this;
				if($.isFunction(defaultOptions.beforeClose)){
					if(!defaultOptions.beforeClose.apply(this)){
						modal.bindEvents();
						modal.occb = false;
						return;
					};
				}
				if($.isFunction(defaultOptions.closeCallBack)) {
					defaultOptions.closeCallBack.apply(this);
				}
				if($.ketchup){
					$.ketchup.removeErrorContainer($('#dialogForm'));
					$("#ec-dialog-form-container"+defaultOptions.id).unbind('formIsValid');
				}
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-message').hide().empty();
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-title').html('关闭...');
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-loading').show();
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').hide();
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-form').fadeOut(200);
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-content').animate({
					height: 10
				}, function () {
					dialog.data.fadeOut(200, function () {
						dialog.container.fadeOut(200, function () {
							dialog.overlay.fadeOut(200, function () {
								$.modal.close();
								if($.isFunction(defaultOptions.afterClose)){
									defaultOptions.afterClose.apply(this);
								}
							});
						});
					});
				});
			},
			showError: function (message) {
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-loading').hide();
				var message$=$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-message')
				.html($('<div class="ec-dialog-form-error"></div>').append(message)).show();
				$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-content').animate({
					height: $("#ec-dialog-container"+defaultOptions.id).data("height")+message$.height()
				}, function () {
					var title$=$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-title');
					title$.html(title$.data("firsttitle"));
					$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-form').fadeIn(200, function () {
						$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-bottom-button').show();
						// fix png's for IE 6
						if ($.browser.msie && $.browser.version < 7) {
							$("#ec-dialog-form-container"+defaultOptions.id+' .ec-dialog-form-button').each(function () {
								if ($(this).css('backgroundImage').match(/^url[("']+(.*\.png)[)"']+$/i)) {
									var src = RegExp.$1;
									$(this).css({
										backgroundImage: 'none',
										filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +  src + '", sizingMethod="crop")'
									});
								}
							});
						}
					});
				});
				
			}
	};
	// 要暴露出的公共方法
	return {
		createDialog:_createDialog
	};
})();