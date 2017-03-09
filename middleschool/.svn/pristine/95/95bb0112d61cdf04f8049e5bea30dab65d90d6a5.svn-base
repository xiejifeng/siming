/**
 * jQuery EasyUI 1.2.3
 * 
 * Licensed under the GPL terms To use it on other terms please contact us
 * 
 * Copyright(c) 2009-2011 stworthy [ stworthy@gmail.com ]
 * 
 */
(function($) {
	function _1(el, _2, _3, _4) {
		var _5 = $(el).window("window");
		if (!_5) {
			return;
		}
		switch (_2) {
			case null :
				_5.show();
				break;
			case "slide" :
				_5.slideDown(_3);
				break;
			case "fade" :
				_5.fadeIn(_3);
				break;
			case "show" :
				_5.show(_3);
				break;
		}
		var _6 = null;
		if (_4 > 0) {
			_6 = setTimeout(function() {
						_7(el, _2, _3);
					}, _4);
		}
		_5.hover(function() {
					if (_6) {
						clearTimeout(_6);
					}
				}, function() {
					if (_4 > 0) {
						_6 = setTimeout(function() {
									_7(el, _2, _3);
								}, _4);
					}
				});
	};
	function _7(el, _8, _9) {
		if (el.locked == true) {
			return;
		}
		el.locked = true;
		var _a = $(el).window("window");
		if (!_a) {
			return;
		}
		switch (_8) {
			case null :
				_a.hide();
				break;
			case "slide" :
				_a.slideUp(_9);
				break;
			case "fade" :
				_a.fadeOut(_9);
				break;
			case "show" :
				_a.hide(_9);
				break;
		}
		setTimeout(function() {
					$(el).window("destroy");
				}, _9);
	};
	function _b(_c, _d, _e) {
		var _f = $("<div class=\"messager-body\"></div>").appendTo("body");
		_f.append(_d);
		var fos;
		if (_e) {
			var tb = $("<div class=\"messager-button\"></div>").appendTo(_f);
			var i=0;
			for (var _10 in _e) {
				var a=$("<a></a>").attr("href", "javascript:void(0)").text(_10).css(
						"margin-left", 10);
				if(i++==0){
					fos=a;
				}
				a.attr("tabIndex",999+i);
				a.bind("click", eval(_e[_10]))
						.appendTo(tb).linkbutton();
			}
		}
		_f.window({
					title : _c,
					width : 300,
					height : "auto",
					modal : true,
					collapsible : false,
					minimizable : false,
					maximizable : false,
					resizable : false,
					onClose : function() {
						setTimeout(function() {
									_f.window("destroy");
								}, 100);
					}
				});
		if(fos){
			fos.focus();
		}
		return _f;
	};
	$.messager = {
		show : function(_11) {
			var _12 = $.extend({
						showType : "slide",
						showSpeed : 600,
						width : 250,
						height : 100,
						msg : "",
						title : "Message",
						timeout : 4000
					}, _11 || {});
			var win = $("<div class=\"messager-body\"></div>").html(_12.msg)
					.appendTo("body");
			win.window({
						title : _12.title,
						width : _12.width,
						height : _12.height,
						collapsible : false,
						minimizable : false,
						maximizable : false,
						shadow : false,
						draggable : false,
						iconCls:_12.iconCls,
						resizable : false,
						closed : true,
						onBeforeOpen : function() {
							_1(this, _12.showType, _12.showSpeed, _12.timeout);
							return false;
						},
						onBeforeClose : function() {
							_7(this, _12.showType, _12.showSpeed);
							return false;
						}
					});
			win.window("window").css({
				left :(window.innerWidth- document.documentElement.width)/2,
				top : 5,
				right : 0,
				zIndex : $.fn.window.defaults.zIndex++,
				bottom : null
			});
			win.window("open");
		},
		alert : function(_13, msg, _14, opts) {
			var _15 = "<div>" + msg + "</div>";
			switch (_14) {
				case "error" :
					_15 = "<div class=\"messager-icon messager-error\"></div>"
							+ _15;
					break;
				case "info" :
					_15 = "<div class=\"messager-icon messager-info\"></div>"
							+ _15;
					break;
				case "question" :
					_15 = "<div class=\"messager-icon messager-question\"></div>"
							+ _15;
					break;
				case "warning" :
					_15 = "<div class=\"messager-icon messager-warning\"></div>"
							+ _15;
					break;
			}
			_15 += "<div style=\"clear:both;\"/>";
			getButtons(_13,_15,opts);
		},
		confirm : function(_17, msg, opts) {
			var _18 = "<div class=\"messager-icon messager-question\"></div>"
					+ "<div>" + msg + "</div>" + "<div style=\"clear:both;\"/>";
			getButtons(_17,_18,opts);
		},
		prompt : function(_1a, msg, opts) {
			var _1b = "<div class=\"messager-icon messager-question\"></div>"
					+ "<div>" + msg + "</div>" + "<br/>"
					+ "<input class=\"messager-input\" type=\"text\"/>"
					+ "<div style=\"clear:both;\"/>";
			
			getButtons(_1a,_1b,opts,'prompt');
		}
	};
	$.messager.defaults = [{
		label:'Ok',
		fn:function(){}
	},{
		label:'Cancel',
		fn:function(){}
	}];
	function getButtons(_17,_18,opts,param){
		var buttons=($.isArray(opts) && opts.length>0)?opts:$.messager.defaults;
		var _19 = {};
		$.each(buttons,function(i,n){
			_19[n['label']] = function() {
				win.window("close");
				if (n['fn']) {
					if(param){
						n['fn']($(".messager-input", win).val());
					}else{
						n['fn'](param);
					}	
					return false;
				}
			};
		});								
		var win = _b(_17, _18, _19);
	}
})(jQuery);
