(function($, undefined) {

	var options = {
		async : true,
		cache : true,
		contentType : 'application/x-www-form-urlencoded',//'application/json; charset=UTF-8',
		timeout : 1000000,
		processData:true,
		dataType : 'json',
		type : 'POST',
		url : '',
		data : {},
		message : '',// 请求前提示消息的内容
		ismessage : false,// 请求前是否提示消息
		messageArgs :[],//请求前提示消息参数
		successmsg : '',// 请求成功后提示消息内容
		issuccessmsg : false,// 请求成功后是否提示消息,
		successmsgArgs:[],//请求成功后提示消息参数
		loadMsg:'',//遮罩提示信息
		isLoadMsg:false,//是否加遮罩
		headers:{"X-Requested-With":"XMLHttpRequest"},
		success : function(data, textStatus) {
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
		},
		complete : function(XMLHttpRequest, textStatus) {
		},
                beforeSend:function(XMLHttpRequest){
                   XMLHttpRequest.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                }
	};

	var parseMsg = function(messages,status) {
		var flag = $.isArray(messages) && messages.length > 0;
		if ($.isArray(messages) && messages.length > 0) {
			var iswarn = false, iserror = false, isinfo = false;
			var warn = "<div style='color:#cdb42d;'><ul>";
			var error = "<div style='color:#f01000;'><ul>";
			var info = "<div><ul>";
			$.each(messages, function(i, n) {
				        // 去除消息ID
				        if(n['text']){
				        	var index = n['text'].indexOf(": ");
				        	if(index >= 0){
				        		n['text'] = n['text'].substring(index+1);
				        	}
				        }
						switch (n['type']) {
							case 'EXCEPTION':
							case 'ERROR' :
								error += "<li><div>" + n['text']
										+ "</div></li>";
								iserror = true;
								break;
							case 'WARN' :
							case 'VALID':
								warn += "<li><div>" + n['text']
										+ "</div></li>";
								iswarn = true;
								break;
							case 'INFO' :
								info += "<li><div>" + n['text']
										+ "</div></li>";
								isinfo = true;
								break;
							default :
								break;
						}
					});
			error += "</ul></div>";
			warn += "</ul></div>";
			info += "</ul></div>";
			// $.showMessage({'msg':msg,'iconCls':'icon-error'});
			if (iserror) {
				$.message.alert({
							'title' : global_variable.error_title_default,
							'msg' : error,
							type : 'error'
						}, function(){
							if(global_fn && $.isFunction(global_fn)){
								global_fn(status);
								global_fn = null;
							}
						});
			}
			if (iswarn) {
				$.message.alert({
							'title' : global_variable.warn_title_default,
							'msg' : warn,
							type : 'warning'
						}, function(){
							if(global_fn && $.isFunction(global_fn)){
								global_fn(status);
								global_fn = null;
							}
						});
			}
			if (isinfo) {
				$.message.alert({
							'title' : global_variable.message_title_default,
							'msg' : info,
							type : 'info'
						}, function(){
							if(global_fn && $.isFunction(global_fn)){
								global_fn(status);
								global_fn = null;
							}
						});
			}
		}
		return flag;
	};
	/**
	 * 异步提交统一回调函数
	 * 
	 * @param {Object}
	 *            data json对象
	 * @param {Object}
	 *            status 状态
	 */
	var complete_client = function(data, status, fn_callback, fn_error) {
		if ("success" != status) {
			$.showMessage("<font color='red'>"
					+ global_message.frame_ajax_status + "</font>");
			return;
		}
		if (!data || !$.isPlainObject(data)) {
			return;
		}
		var result = data.result;
		var token = data.token;
		var messages = data.message;
		$("input[type='hidden'][name='struts.token']").val(token);
		switch ($.trim(result)) {
			// 正常返回
			case "token_result" : {
				if ($.isFunction(fn_callback)) {
					fn_callback(data["data"], status);
				}
				parseMsg(messages,"success");
//				global_fn = null;
				break;
			}
				// 后台异常
			case "bussess_error" :
			case "normal_exception" : {
				var flag = parseMsg(messages,"exception");
				if (!flag) {
					$.message.alert({
								'title' : global_variable.error_title_default,
								'msg' : "<div style='color:red;'>"
										+ global_message.frame_ajax_error
										+ "</div>",
								type : 'error'
							}, function(){
							if(global_fn && $.isFunction(global_fn)){
								global_fn("exception");
								global_fn = null;
							}
						});
				}
				if ($.isFunction(fn_error)) {
					fn_error(data["data"], status);
				}
//				global_fn = null;
				break;
			}
			case "security_error" : {
				if ($.type(messages) == 'string') {
					$.message.show({
								'title' : global_variable.warn_title_default,
								'msg' : messages,
								'iconCls':'icon-warning',
								type : 'warning'
							}, global_fn);
				}
				global_fn = null;
				break;
			}
//			case "bussess_error" : {
//				window.top.opts.popUpMessage(messages);
//				break;
//			}
				// 后台验证异常
			case "valid_exception" : {
				if ($.isArray(messages)) {
					var msg = "<div style='color:red;'><ul>";
					$.each(messages, function(i, n) {
								msg += "<li><div>" + n['text'] + "</div></li>";
							});
					msg += "</ul></div>";
					$.showMessage({
								'msg' : msg,
								'iconCls' : 'icon-error'
							});
				} else {
					$.showMessage({
								'msg' : "<div style='color:red;'>"
										+ global_message.frame_ajax_error
										+ "</div>",
								'iconCls' : 'icon-error'
							});
				}
				break;
			}

		}
	};
	$.ffcsAjax = function(settings) {
		$.extend(options, settings);
		
		options.success = function(data, status) {
			
			if (data && "token_result"==data.result && settings.issuccessmsg) {
				var msg = global_message['frame_ajax_success'];
				if (options.successmsg) {
					msg = message_collection[options.successmsg] || window.top.opts.message_collection[options.successmsg];
					msg = msg ? msg : options.successmsg;
					if($.isArray(options.successmsgArgs)){
						msg = $.replaceReg(msg, options.successmsgArgs);
					}
				}

				$.message.alert(msg, function() {
							complete_client(data, status, settings.success,
									settings.error);
						});
			} else {
				complete_client(data, status, settings.success, settings.error);
			}

		};
		options.complete = function(request, status) {
			var responseText = request.responseText;
			var sessionstatus = request.getResponseHeader("sessionstatus");
			if (sessionstatus == 'timeout') {
				window.top.opts.showLoginWindow();
				return;
			}
			var data = "";
			if (responseText) {
				data = eval('(' + responseText + ')');
			}
			if (settings.complete) {
				complete_client(data, status, settings.complete, settings.error);
			}
			if(settings.isLoadMsg){
				$.removeMask();
			}
		};
		options.error = function(request, textStatus, errorThrown) {
			var responseText = request.responseText;
			var data = "";
			if (responseText) {
				data = eval('(' + responseText + ')');
			}
			complete_client(data, "success", settings.error, settings.error);
			if(settings.isLoadMsg){
				$.removeMask();
			}
			// if ($.isFunction(settings.error)) {
			// settings.error(data, textStatus, errorThrown);
			// }
		};
		
		if (settings.ismessage) {
			var msg = global_message['frame_ajax_message'];
			if (options.message) {
				msg = message_collection[options.message] || window.top.opts.message_collection[options.message];
				msg = msg ? msg : options.message;
				if($.isArray(options.messageArgs)){
					msg = $.replaceReg(msg, options.messageArgs);
				}
			}

			$.message.confirm(msg, function() {
						if(settings.isLoadMsg){
							$.addMask(options.loadMsg);
						}
						$.ajax(options);
					}, function() {
						return;
					});
		} else {
			if(settings.isLoadMsg){
				$.addMask(options.loadMsg);
			}
			$.ajax(options);
		}

	};
	$.fn.ffcsLoad = function(url, data, callback,isMask,maskMsg) {
		var onComplete = function(context, status, request) {
//			var responseText = request.responseText;
			var sessionstatus = request.getResponseHeader("sessionstatus");
			if (sessionstatus == 'timeout') {
				window.top.opts.showLoginWindow();
				return;
			}
			if ($.isFunction(callback)) {
				callback(context);
			}
			if (isMask) {
				$.removeMask();
			}
		};
		if(isMask){
			$.addMask(maskMsg);
		}
		$(this).load(url, data, onComplete);
	};
	/**
	 * 获取表单元素值
	 * 
	 * @param {Object}
	 *            frm
	 */
	$.formItems = function(frm) {
		param = "";
		var chks = $(frm).find("input:checked[disabled!=true]");
		var inps = $(frm).find("input:text[input:enabled]");
		var pwds = $(frm).find("input:password[input:enabled]");
		var hids = $(frm).find("input:hidden[input:enabled]");

		var areas = $(frm).find("textarea[disabled!=true]");

		var sels = $(frm).find("select[disabled!=true]");

		$.merge(inps, pwds);
		$.merge(inps, hids);
		$.merge(inps, chks);
		$.merge(inps, areas);
		$.merge(inps, sels);

		$.each(inps, function(i, n) {
					var name = $(n).attr("name");
					var value = $(n).val();
					if (name) {
						param = "\"" + name + "\":\"" + value + "\"," + param;
					}
				});
//		param = "{" + param.substring(0, param.lastIndexOf(",")) + "}";
		param = "{" + param.replace(/,$/,"") + "}";
		param=param.replace(/\n|\r/g,"  ");
//                eval("(" + param + ")"); 
		return $.parseJSON(param);
	};
	// **********************************************************************window
	// start*****************************************************
	/**
	 * 弹出窗口
	 * 
	 * @param {Object}
	 *            options Dependencies:easyui.css icon.css jquery.panel.js
	 *            jquery.parser.js jquery.resizable.js jquery.window.js
	 *            jquery.draggable.js jquery.linkbutton.js jquery.dialog.js
	 */
	$.openWindow = function(opts, isLocal) {
		if (!isLocal) {
			window.top.opts.openWindow(opts);
			return;
		}
		var setting = {
			id : 'window' + new Date().getTime(),
			zIndex : 9000,
			draggable : true,
			resizable : true,
			shadow : true,
			modal : false,
			inline : false,
			title : "New Window",
			collapsible : false,
			minimizable : false,
			maximizable : false,
			closable : true,
			closed : false,
			type : 'div', // html,iframe
			context : '',// html内容
			url : '',
			iconCls : null,
			reload : true, // 重新加载url,
			params : {},
			windowType : 'window',// 窗口类型，'window','dialog'
			style : '',
			toolbar : [],
			buttons : [],
			onLoadSuccess : function(data) {
			}// type为html时加载成功后触发
		};

		$.extend(setting, opts);
		setting.onClose = function() {
			var param = $(this).data("params");
			param = param ? param : {};
			if ($.isFunction(opts.onClose))
				opts.onClose(param);
			$(this).removeData("params");
			if (setting.reload) {
				setTimeout(function() {
							$("#"+setting.id).parent().remove();
						}, 100);
			}
			if("html"==setting.type){
				$(".validatebox-tip").remove();
  			   	$(".combo-panel").parent().remove();
			}
		};
		if ($("#" + setting.id).size() > 0) {
			if (setting.reload) {
				$("#" + setting.id).empty();
				loadHtml(setting);
			}
		} else {
			$("body").append("<div class='easyui-window' id='" + setting.id
					+ "' style='" + setting.style + "'></div>");
			setting.inline = false;
			if (setting.type != 'iframe' && setting.windowType != 'dialog') {
				loadHtml(setting);
			}

		}
		setting.windowType == 'dialog'
				? $("#" + setting.id).dialog(setting)
				: $("#" + setting.id).window(setting);
		if (setting.type == 'iframe' || setting.windowType == 'dialog') {
			loadHtml(setting);
		}
	};

	function loadHtml(setting) {
		var obj = $("#" + setting.id), type = setting.type, url = setting.url, context = setting.context, params = setting.params;
		switch (type) {
			case 'html' : {
				var callBack=function(data){
					try{
						data=eval("("+data+")");
					}catch(e){}
					
	    			if($.isPlainObject(data)){
	    				$.doShowMessage(data.message,"1");
	    				$(obj).closeWindow();
	    			}else{
	    				if($.isFunction(setting.onLoadSuccess)){
	    					setting.onLoadSuccess();
						}
	    			}
					
				};
				var target=obj;
				if(setting.windowType == 'dialog'){
					target=obj.children(".panel").children(".dialog-content");
				}
				$(target).ffcsLoad(url, params, callBack);
				break;
			}
			case 'iframe' : {
				if (!$.isEmptyObject(params)) {
					var p = '';
					$.each(params, function(i, n) {
								p = p + i + "=" + n + "&";
							});
					if (p.indexOf("&") > -1) {
						p.substring(0, p.lastIndexOf("&"));
						if (url.indexOf("?") > -1) {
							url = url + "&" + p;
						} else {
							url = url + '?' + p;
						}
					}
				}
//				$(obj).empty();
				var iframeid=setting.id+"_window_iframe";
				var iframe=$('#'+iframeid,obj);
				if(!iframe[0]){
					iframe = $("<iframe id='"+iframeid+"' src='"
						+ url
						+ "' frameBorder='0' style='width:100%;height:100%;'></iframe>");
					$(obj).append(iframe);
				}
				break;
			}
			default : {
				if (context) {
					$(obj).append(context);
				}
				break;
			}
		}
	}
	/**
	 * 关闭弹出窗
	 * 
	 * @param {Object}
	 *            param 回传参数
	 * @param {Object}
	 *            isNoRefresh 是否销毁窗口
	 * @param {Object}
	 *            windowType 窗口类型 window、dialog
	 */
	$.fn.closeWindow = function(param, windowType, isNoRefresh) {
		if ($(this).size() > 0) {
			$(this).data("params", param);

			if ('dialog' == windowType) {
				$(this).dialog("close");
			} else {
				$(this).window("close");
			}
			if (!isNoRefresh) {
				$(this).parent().empty().detach();
			}
		} else {
			if (window.parent.opts) {
				window.parent.opts.closeWindow($(this).selector, param,
						windowType, isNoRefresh);
				return;
			}
		}
	};
	// **********************************************************************window
	// end *****************************************************

	// **********************************************************************autocomplete/selectParam*****************************************************
	/**
	 * Dependencies:easyui.css icon.css 导入js顺序如下： 1、jquery.validatebox.js
	 * 2、jquery.combo.js 3、jquery.combobox.js 4、jquery.panel.js
	 * 
	 * @param {Object}
	 *            options
	 * @param {Object}
	 *            param
	 */
	$.fn.autocomplete = function(options, param) {
		var defaults = {
			valueField : "value",
			textField : "text",
			mode : "local",
			method : "post",
			url : null,
			data : null,
			params : null,// url参数
			width : "auto",
			panelWidth : null,
			panelHeight : 200,
			multiple : false,
			separator : ",",
			editable : true,
			disabled : false,
			hasDownArrow : true,
			isFilterByValue : false,// 通过valueField字段过滤
			isShowValue : false,// 是否显示value值
			valueTextSeparator : ' | ',// value与text分隔符
			isContainValid : false,// 是否允许输入非data中的值
			promptMessage : '',// 提示信息
			isShowPromptMsg : false,// 是否显示提示信息
			isNoInit:false,//是否不初始化数据
			defaultValue : '',
			required : false,
			validType : null,
			addAllOpt : false,
			allOptTxt : '',
			// missingMessage : 'This field is required.',
			invalidMessage : null,
			regular : null,
			onShowPanel : function() {
			},
			onHidePanel : function() {
			},
			onChange : function(newValue, oldValue) {
			},
			// filter:function(query,row){},
			// formatter:function(row){},
			onLoadSuccess : function() {
			},
			onLoadError : function() {
			},
			onSelect : function(row) {
			},
			onUnselect : function(row) {
			}
		};
		if (typeof options == 'string') {
			if (options == 'setData') {
				setData(this, param);
			} else if (options == 'removeData') {
				removeData(this, param);
			} else if (options == 'setOptions') {
				setOptions(this, param);
			} else if (options == 'setDefault') {
				setDefault(this);
			} else if (options == 'getOptions') {
				return getOptions(this);
			} else if (options == 'removeAll') {
				removeAllData(this);
			} else {
				return $(this).combobox(options, param);
			}
		} else {
			$.extend(defaults, options);
			var target = this;
			defaults.onLoadSuccess = function() {
				if (options['onLoadSuccess']
						&& $.isFunction(options['onLoadSuccess'])) {
					options.onLoadSuccess();
				}
				setDefault(target);
			};
//			if(defaults.defaultValue){
//				defaults.value=defaults.defaultValue;
//			}
			$(this).combobox(defaults);

		}
		function setOptions(target, param) {
			var opts = $(target).combobox("options");
			$.extend(opts, param);
			$(target).combobox(opts);
		}
		function setDefault(target) {
			var opts = $.data(target[0], "combobox").options;
			if (!opts.defaultValue && opts['isShowPromptMsg']) {
				$(target).combobox("setText", opts.promptMessage);
			} else if (opts.defaultValue) {
				$(target).combobox("setValue", opts.defaultValue);
			}

		}
		function getOptions(target) {
			var opts = $.data(target[0], "combobox").options;
			return opts;
		}
		/**
		 * 
		 * @param {Object}
		 *            param 新数据项数组
		 */
		function setData(target, param) {
			var data = $(target).combobox("getData");
			$.merge(data, param);
			$(target).combobox("loadData", data);
		}
		/**
		 * 
		 * @param {Object}
		 *            target
		 * @param {Object}
		 *            param 数组 格式[{'name':'属性名','value':'值'}]
		 */
		function removeData(target, param) {
			var data = $(target).combobox("getData");

			var ndata = $.grep(data, function(n, i) {
						var flag = false;
						if ($.isArray(param)) {

							$.each(param, function(j, m) {
										if (n[m['name']] == m['value']) {
											flag = true;
										};
									});

						} else {
							flag = n[param['name']] == param['value'];
						}
						return flag;
					}, true);
			if (ndata && $.isArray(ndata) && data && $.isArray(data)
					&& ndata.length < data.length) {
				$(target).combobox("loadData", ndata);
			}
		}
		/**
		 * 移除所有选项
		 */
		function removeAllData(target) {
			var data = [];
			$(target).combobox("loadData", data);
		}
	};
	// **********************************************************************autocomplete
	// end*****************************************************
	// **********************************************************************form
	// start*****************************************************
	/**
	 * Dependencies:easyui.css icon.css jquery.parser.js jquery.form.js
	 * jquery.validatebox.js
	 * 
	 * @param {Object}
	 *            opts
	 * @param {Object}
	 *            param
	 */
	$.fn.ajaxForm = function(opts, param, alias, excludes) {
		var defaults = {
			url : null,
			onSubmit : function() {
			},
			success : function(data) {
			},
			onBeforeLoad : function(data) {
			},
			onLoadSuccess : function(data) {
			},
			onLoadError : function() {
			},
			autoValid : true,
			data : {}
		};
		if (typeof opts == 'string') {
			var options = $.data(this, "form").options;
			$.extend(defaults, options);
			if ($.isPlainObject(param)) {
				$.extend(defaults, param);
			}else{
                            defaults=param;
                        }
			if ("submit" == opts) {

				var flag = valideForm(this, defaults, defaults.onSubmit);
				if (!flag) {
					return;
				}
				var params = $.formItems($(this));
				if ($.isFunction(param.success)) {
					defaults.success = function(data) {
						try {
							data = eval("(" + data + ")");
						} catch (e) {

						}
						if (!$.isPlainObject(data) && $.type(data) == "string") {
							$.showMessage("<font color='red'>" + data
									+ "</font>");
						} else {
							param.success(data);
						}
					};
				}
				var datas = $.isPlainObject(defaults.data) ? defaults.data : {};
				$.extend(datas, params);
				defaults.data = datas;
				$.ffcsAjax(defaults);
			} else {
				$(this).form(opts, defaults, alias, excludes);
			}

		} else {
			$.extend(defaults, opts);
			$(this).form(defaults, param);
		}
		function valideForm(target, options, onSubmit) {
			var flag = true;
			if ($.isFunction(onSubmit)) {
				flag = onSubmit();
				flag = (flag == undefined ? true : flag);
				if (!flag) {
					return flag;
				}
			}
			if (options.autoValid) {
				return $(target).valideForm();
			}
		}
	};
	$.fn.valideForm=function(){
		var flag = true;
		var arrs = $(this).find("input[type='hidden']:enabled");
		$.merge(arrs, $(this).find("input[type='text']:enabled"));
		$.merge(arrs, $(this).find("input[type='password']:enabled"));
		$.merge(arrs, $(this).find("input[type='file']:enabled"));
		$.merge(arrs, $(this).find("textarea:enabled"));
		$.merge(arrs, $(this).find("select:enabled"));
		var firstObj=undefined;
		$.each(arrs, function(i, n) {
			var comb = $(this).find(
					".combobox-f[comboName='" + $(n).attr("name") + "']");
			if (comb.length && comb['combobox']) {
				var opts = $(comb).autocomplete("getOptions");
				if (opts && !opts['isContainValid'] && !opts.disabled) {
					var bl = false;
					var field = opts['valueField'];
					var value = $(comb).combobox("getValue");
					var data = $(comb).combobox("getData");
					if (value) {
						for ( var d in data) {
							if (value == data[d][field]) {
								bl = true;
								break;
							}
						}
					}

					if (!bl) {
						// $(comb).combobox("setValue", "");
						flag = flag && bl;
					} else {
						flag = flag && $(comb).combobox("isValid");
					}
				}
			} else {
				if ($.data($(n), "validatebox")) {
					flag = flag && $(n).validate("isValid");
				}
			}
			if (!flag) {
				$(n).focus();
			}
			if(!firstObj && $(n).attr("type")!="hidden" && !flag){
				firstObj=$(n);
			}
		});
		if(firstObj){
			firstObj.focus();
		}
		return flag;
	};
	// **********************************************************************form
	// end*****************************************************
	// **********************************************************************validate
	// start*****************************************************

	/**
	 * Dependencies:easyui.css icon.css jquery.parser.js jquery.validatebox.js
	 * 
	 * @param {Object}
	 *            opts
	 * @param {Object}
	 *            param
	 */
	$.fn.validate = function(opts, param,param2) {
		var defaults = {
			required : false,
			msgPoint:'R',//R：右端 D：底部
			validType : null, // email,url,length,remote,regexp
			// missingMessage : null,
			// invalidMessage : null,
			regular : null
			// 正则式
		};
		if (typeof opts == 'string') {
			if (opts == 'removeClass') {// 去除验证样式
				if ($(this).hasClass("validatebox-text")) {
					$(this).removeClass("validatebox-invalid");
				} else if ($(this).hasClass("combobox-f")
						&& $(this).hasClass("combo-f")) {
					$(this).next("span.combo")
							.children("input.validatebox-text")
							.removeClass("validatebox-invalid");
				}
				$(this).addClass("validate_remove");
				$("div.validatebox-tip").remove();
			} else if (opts == 'destroy') {
				if ($(this).hasClass("validatebox-text")) {
					$(this).validatebox("destroy", true);
					if ($(this).next("span.required")
							&& $(this).next("span.required")[0]) {
						$(this).next("span.required").hide();
					}
				} else if ($(this).hasClass("combobox-f")
						&& $(this).hasClass("combo-f")) {
					$(this).combobox("removeValid");
					$(this)
							.next("span.combo")
							.children("input.validatebox-invalid,input.validatebox-text")
							.validatebox("destroy", true);
					if ($(this).next("span.combo").next("span.required")
							&& $(this).next("span.combo").next("span.required")[0]) {
						$(this).next("span.combo").next("span.required").hide();
					}
				}
			} else if (opts == 'reValid') {
				param = setOptions(param, this);
				if ($(this).hasClass("combobox-f")
						&& $(this).hasClass("combo-f")) {
					$(this).next("span.combo").children("input.combo-text")
							.validate(param);
					$(this).next("span.combo").children("input.combo-text")
							.addClass("validatebox-text");
					$(this).combobox("addValid", param);
					if ($(this).next("span.combo").next("span.required")[0]) {
						$(this).next("span.combo").next("span.required").show();
					} else {
						$(this)
								.next("span.combo")
								.after("<span class='required'>&nbsp;*&nbsp;</span>");
					}
				} else {
					$(this).validatebox(param);
					$(this).addClass("validatebox-text");
					if ($(this).next("span.required")[0]) {
						$(this).next("span.required").show();
					} else {
						$(this)
								.after("<span class='required'>&nbsp;*&nbsp;</span>");
					}
				}
			} else {
				return $(this).validatebox(opts, param,param2);
			}
		} else {
			$.extend(defaults, opts);
			defaults = setOptions(defaults, this);
			var msg=defaults.invalidMessage;
			if(msg){
				var nmsg=message_collection[msg] || window.top.opts.message_collection[msg];
				defaults.invalidMessage=nmsg?nmsg:msg;
			}
			return $(this).validatebox(defaults, param,param2);
		}
		function setOptions(opts, target) {
			if (opts.regular) {
				opts.validType = "regexp";
			}
			if ("regexp" == opts.validType) {
				if ($(target).attr("regular") && !opts.regular) {
					opts.regular = $(target).attr("regular");
				}
				if ($.type(opts.regular) == 'string') {
					var v = opts.regular;
					opts.regular = regexpCollection[v]['validator'];
					opts.invalidMessage = regexpCollection[v]['message'];
				}
			}
			return opts;
		}
	};
	// **********************************************************************validate
	// end*****************************************************
	// **********************************************************************messager
	// end*****************************************************
	/**
	 * Dependencies:easyui.css icon.css jquery.parser.js jquery.combobox.js
	 * jquery.validatebox.js jquery.combo.js jquery.panel.js jquery.messager.js
	 */
	$.message = {
		show : function(options) {
			$.messager.show(options);
		},
		/**
		 * 
		 * @param {Object}
		 *            opts {title:'',msg:'',type:''} or string type type:error
		 *            info question warning
		 * @param {Object}
		 *            okFn
		 * @param {Object}
		 *            cancelFn
		 */
		alert : function(opts, okFn) {
			var defaults = {
				title : global_variable.message_title_default,
				msg : '',
				type : 'info'
			};
			if ($.type(opts) == 'string') {
				defaults['msg'] = opts;
			} else if ($.isPlainObject(opts)) {
				$.extend(defaults, opts);
			}
			var btns = [{
						label : global_button.ok
					}];
			btns[0]['fn'] = function() {
				if ($.isFunction(okFn)) {
					okFn();
				}
			};
			$.messager.alert(defaults['title'], defaults['msg'],
					defaults['type'], btns);
		},
		/**
		 * 
		 * @param {Object}
		 *            context {title:'',msg:''} or string
		 * @param {Object}
		 *            opts [{label:'是',fn:function(){}}] or function(){}
		 * @param {Object}
		 *            cancelFn function(){}
		 */
		confirm : function(context, opts, cancelFn) {
			var defaults = {
				title : global_variable.message_title_default,
				msg : ''
			};
			if ($.type(context) == 'string') {
				defaults['msg'] = context;
			} else if ($.isPlainObject(context)) {
				$.extend(defaults, context);
			}
			var btns = configMessage(defaults['title'], defaults['msg'], opts,
					cancelFn);
			$.messager.confirm(defaults['title'], defaults['msg'], btns);
		},
		prompt : function(context, opts, cancelFn) {
			var defaults = {
				title : global_variable.message_title_default,
				msg : ''
			};
			if ($.type(context) == 'string') {
				defaults['msg'] = context;
			} else if ($.isPlainObject(context)) {
				$.extend(defaults, context);
			}
			var btns = configMessage(defaults['title'], defaults['msg'], opts,
					cancelFn);
			$.messager.prompt(defaults['title'], defaults['msg'], btns);
		}
	};
	function configMessage(title, msg, opts, cancelFn) {
		var btns = [{
					label : global_button.ok
				}, {
					label : global_button.cancel
				}];
		if ($.isArray(opts) && opts.length > 0) {
			btns = opts;
		} else if ($.isFunction(opts)) {
			btns[0]['fn'] = function(value) {
				opts(value);
			};
			if ($.isFunction(cancelFn)) {
				btns[1]['fn'] = function(value) {
					cancelFn(value);
				};
			}
		}
		return btns;
	}
	$.showMessage = function(options) {
		window.top.opts.showMessage(options);
	};
	/**
	 * 
	 * @param {Object}
	 *            msgId 消息编码
	 * @param {Object}
	 *            msgType 消息类型 0：消息 1：警告 2：错误
	 */
	$.doShowMessage = function(msgId, msgType,msgData) {
		var msgText = message_collection[msgId] || window.top.opts.message_collection[msgId];
		if (!msgText) {
			msgText = msgId;
		}
		if (!msgType) {
			msgType = "0";
		}
		if (msgData) {
			msgText = $.replaceReg(msgText, msgData);
		}
		switch (msgType.toString()) {
			case "0" : {
				$.showMessage({
							'title' : global_variable.message_title_default,
							'msg' : msgText,
							'iconCls' : 'icon-info'
						});
				break;
			}
			case "1" : {
				msgText = "<div style='color:#cdb42d;'>" + msgText+ "</div>";
				$.showMessage({
							'title' : global_variable.warn_title_default,
							'msg' : msgText,
							'iconCls' : 'icon-warning'
						});
				break;
			}
			case "2" : {
				msgText = "<div style='color:#f01000;'>" + msgText
						+ "</div>";
				$.showMessage({
							'title' : global_variable.error_title_default,
							'msg' : msgText,
							'iconCls' : 'icon-error'
						});
				break;
			}
		}
	};

	/**
	 * 带有占位符替换的消息显示
	 * 
	 * @param {Object}
	 *            msgId 消息编码
	 * @param {Object}
	 *            msgData 占位符填充数据
	 * @param {Object}
	 *            msgType 消息类型 0：提示 1：警告 2：错误
	 * @param {Object}
	 *            okFn 确定回调函数
	 * @param {Object}
	 *            cancelFn 取消回调函数 
	 * @param {Object}
	 *            isDoubleShow 是否可以重复提示
	 *@param {Object}
	 *            isHiddenId 是否隐藏消息
	 */
	$.popUpMessage = function(msgId, msgData, msgType, okFn, cancelFn,isDoubleShow,isHiddenId) {
		// 隐藏消息ID
		isHiddenId = true;
		var msg = $("div.messager-body");
		if (msg[0] && !isDoubleShow) {
			return;
		}
		var msgText = message_collection[msgId] || window.top.opts.message_collection[msgId];
		if (!msgText) {
			msgText = msgId;
		} else if(!isHiddenId){
			msgText = msgId + ":" + msgText;
		}
		if (msgData) {
			msgText = $.replaceReg(msgText, msgData);
		}

		if (!msgType) {
			msgType = "0";
		}
		switch (msgType) {
			case "0" : {
				if (cancelFn) {
					$.message.confirm({
								'title' : global_variable.message_title_default,
								'msg' : msgText
							}, okFn, cancelFn);
				} else {
					$.message.alert({
								'title' : global_variable.message_title_default,
								'msg' : msgText,
								type : 'info'
							}, okFn);
				}
				break;
			}
			case "1" : {
				var msgText = "<div style='color:#cdb42d;'>" + msgText
						+ "</div>";
				$.message.alert({
							'title' : global_variable.warn_title_default,
							'msg' : msgText,
							type : 'warning'
						}, okFn);
				break;
			}
			case "2" : {
				var msgText = "<div style='color:#f01000;'>" + msgText
						+ "</div>";
				$.message.alert({
							'title' : global_variable.error_title_default,
							'msg' : msgText,
							type : 'error'
						}, okFn);
				break;
			}
		}
	};
	// **********************************************************************messager
	// end*****************************************************
	// **********************************************************************number
	// start*****************************************************
	/**
	 * Dependencies:easyui.css icon.css jquery.parser.js jquery.validatebox.js
	 * jquery.numberbox.js jquery.spinner.js jquery.numberspinner.js
	 * 
	 * @param {Object}
	 *            opts
	 * @param {Object}
	 *            param
	 * @param {Object}
	 *            isNoSpinner
	 */
	$.fn.number = function(opts, param, isNoSpinner) {
		var defaults = {
			disabled : false,
			min : null,
			max : null,
			precision : 0,
			isSeptation : false,// 是否金额千位用","分隔
			isNoSpinner : false,// 是否有滑块
			required : false,
			invalidMessage : '请输入一个有效的数字.',
			width : "auto",
			value : "",
			increment : 1,
			editable : true,
			onSpinUp : function() {
			},
			onSpinDown : function() {
			}
		};
		if ($.type(param) == "boolean") {
			isNoSpinner = param;
		}
		if ($.type(opts) == 'string') {
			var ops = $.data(this[0], "numberbox").options;
			if(isNoSpinner){
				ops = $.data(this[0], "numberspinner").options;
			}
			if(opts=="destroy"){
				$(this).validate("destroy");
				$(this).next(".required").remove();
				if(ops.isSeptation){
					$(this).nextAll("input:hidden").first().val("");
					$(this).nextAll("input:hidden").first().next(".required").remove();
				}
			}else if (opts == "reValid") {
				$(this).validate("reValid",{required:true});
				$(this).next(".required").remove();
				if(ops.isSeptation){
					$(this).nextAll("input:hidden").first().next(".required").remove();
					$(this).nextAll("input:hidden").first().after("<span class='required'>*</span>");
				}else{
					$(this).after("<span class='required'>*</span>");
				}
				
			}else {
				if (opts == "disable") {
					$(this).addClass("disabled");
				}
				else 
					if (opts == "enable") {
						$(this).removeClass("disabled");
					}
				if (!isNoSpinner) {
					return $(this).numberbox(opts, param);
				}
				else {
					return $(this).numberspinner(opts, param);
				}
			}
		} else {
			$.extend(defaults, opts);
			if (defaults.isNoSpinner && !defaults.isSeptation) {
				$(this).numberspinner(defaults);
			} else {
				$(this).numberbox(defaults);
			}
//			if(defaults.required){
//				$(this).next(".required").remove();
//				if(defaults.isSeptation){
//					$(this).next("input:hidden").first().next(".required").remove();//顾虑原先已有代码
//					$(this).next("input:hidden").first().after("<span class='required'>*</span>");
//				}else{
//					$(this).after("<span class='required'>*</span>");
//				}
//			}
		}
		function format(num){
			if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(num)) { 
		        return NaN;
		    }
		    var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
		    var re = new RegExp();
		    re.compile("(\\d)(\\d{3})(,|$)"); 
		    while(re.test(b)) { 
		        b = b.replace(re, "$1,$2$3");
		    }
		    return a +""+ b +""+ c; 
		}
	};
	// **********************************************************************number
	// end*****************************************************
	// **********************************************************************tabs
	// starts*****************************************************
	/**
	 * Dependencies:easyui.css icon.css jquery.parser.js jquery.panel.js
	 * jquery.linkbutton.js jquery.tabs.js
	 * 
	 * @param {Object}
	 *            opts
	 * @param {Object}
	 *            param update {tab:tabObject,options:{},icon:iconCls}
	 */
	$.fn.jTabs = function(opts, param) {
		var defaults = {
			width : "auto",
			height : "auto",
			plain : false,
			fit : false,
			border : true,
			tools : null,
			scrollIncrement : 100,
			scrollDuration : 400,
			onLoad : function(data) {
			},
			onSelect : function(title) {
			},
			onBeforeClose : function(title) {
			},
			onClose : function(title) {
			},
			onAdd : function(title) {
			},
			onUpdate : function(title) {
			},
			onContextMenu : function(e, title) {
			}
		};
		if ($.type(opts) == 'string') {
			var options = param;
			if ($.isPlainObject(param)) {
				var setting = param;
				var isUpdate = false;
				if (opts == 'update') {
					setting = param.options;
					isUpdate = true;
				}
				options = $.extend({}, {
							title : 'New Tab',
							iconCls : null,
							cache : true,
							content : null,
							href : null,
							closable : true
						}, setting);
				if (isUpdate) {
					$.extend(param.options, options);
					options = param;
				}
			}
			return $(this).tabs(opts, options);
		} else {
			$.extend(defaults, opts);
			return $(this).tabs(defaults);
		}
	};
	// **********************************************************************number
	// end*****************************************************
	// **********************************************************************datagrid
	// start*****************************************************
	/**
	 * Dependencies:easyui.css icon.css jquery.panel.js, jquery.resizable.js,
	 * jquery.linkbutton.js, jquery.pagination.js
	 * 
	 * @param {Object}
	 *            opts
	 * @param {Object}
	 *            param
	 */
	$.fn.jDatagrid = function(opts, param, _pa) {
		var _editors = {
			selectParam : {
				init : function(tr, opts) {
					var _16a = $("<input type=\"text\">").appendTo(tr);
					opts.flag = true;
					_16a.selectParam(opts);
					return _16a;
				},
				destroy : function(_16b) {
					$(_16b).selectParam("destroy",'', true);
				},
				getValue : function(_16c) {
					return $(_16c).selectParam("getValue",'', true);
				},
				setValue : function(_16d, _16e) {
					$(_16d).selectParam("setValue", '',true);
				},
				resize : function(_16f, _170) {
					$(_16f).selectParam("resize", _170 ,true);
				}
			},
			autocomplete : {
				init : function(tr, opts) {
					var _16a = $("<input type=\"text\">").appendTo(tr);
					_16a.autocomplete(opts);
					return _16a;
				},
				destroy : function(_16b) {
					$(_16b).autocomplete("destroy");
				},
				getValue : function(_16c) {
					return $(_16c).autocomplete("getValue");
				},
				setValue : function(_16d, _16e) {
					$(_16d).autocomplete("setValue", _16e);
				},
				resize : function(_16f, _170) {
					$(_16f).autocomplete("resize", _170);
				}
			},
			date : {
				init : function(_13c, _13d) {
					var opts = {
						doubleCalendar : true,
						dateFmt : 'yyyy.MM.dd',
						errDealMode : 1,
						isShowClear : true,
						readOnly : false,
						minDate : '',
						maxDate : ''
					};
					$.extend(opts, _13d);
					var str = "";
					$.each(opts, function(i, n) {
								if($.type(n)=='string'){
									str = str + i + ":'" + n + "',";
								}else{
									str = str + i + ":" + n + ",";
								}
								
							});
					str.substring(0, str.lastIndexOf(","));
					var _13e = $('<input style="height:14px;" class="Wdate datagrid-editable-input" type="text" onfocus="WdatePicker({'
							+ str + '})"/>').appendTo(_13c);
					return _13e;
				},
				getValue : function(_13f) {
					return $(_13f).val();
				},
				setValue : function(_140, _141) {
					$(_140).val(_141);
				},
				resize : function(_142, _143) {
					var _144 = $(_142);
					if ($.boxModel == true) {
						_144.width(_143 - (_144.outerWidth() - _144.width()));
					} else {
						_144.width(_143);
					}
				}
			},
			validate : {
				init : function(_15e, _15f) {
					var _159 = $("<input type=\"text\" class=\"datagrid-editable-input\">");
					var _160 =_159.appendTo(_15e);
					if($.isFunction(_15f.handler)){
						_15f.handler(_159);
					};
					_160.validate(_15f);
					return _160;
				},
				destroy : function(_161) {
					$(_161).validate("destroy");
				},
				getValue : function(_162) {
					return $(_162).val();
				},
				setValue : function(_163, _164) {
					$(_163).val(_164);
				},
				resize : function(_165, _166) {
					var _167 = $(_165);
					if ($.boxModel == true) {
						_167.width(_166 - (_167.outerWidth() - _167.width()));
					} else {
						_167.width(_166);
					}
				}
			},
			number : {
				init : function(_154, _155) {
					var _156 = $('<input type=\"text\" class=\"datagrid-editable-input\">')
							.appendTo(_154);
					_156.number(_155);
					return _156;
				},
				destroy : function(_157) {
					$(_157).number("destroy");
				},
				getValue : function(_158) {
					return $(_158).number("getValue");
				},
				setValue : function(_159, _15a) {
					$(_159).number("setValue", _15a);
				},
				resize : function(_15b, _15c) {
					var _15d = $(_15b);
					if ($.boxModel == true) {
						_15d.width(_15c - (_15d.outerWidth() - _15d.width()));
					} else {
						_15d.width(_15c);
					}
				}
			},
            jCombogrid : {
				init : function(_154, _155) {
					var _156 = $('<input style="height:12px;" type=\"text\" class=\"datagrid-editable-input\">')
							.appendTo(_154);
					_156.jCombogrid(_155);
					return _156;
				},
				destroy : function(_157) {
					$(_157).jCombogrid("destroy");
				},
				getValue : function(_158) {
					return $(_158).jCombogrid("getValue");
				},
				setValue : function(_159, _15a) {
					$(_159).jCombogrid("setValue", _15a);
				},
				resize : function(_15b, _15c) {
					var _15d = $(_15b);
					if ($.boxModel == true) {
						_15d.width(_15c - (_15d.outerWidth() - _15d.width()));
					} else {
						_15d.width(_15c);
					}
				}
			}
		};
		$.extend(_editors, $.fn.datagrid.defaults.editors);
		var defaults = {
			width : 'auto',
			height : 'auto',
			nowrap : false,
			striped : true,
			singleSelect : true,
			showHeader : true,
			showFooter : false,
			fitColumns : false,
			collapsible : false,
			paginationObject : 'pageModel',
			queryParams : {},
			url : '',
			sortName : '',
			sortOrder : 'asc',
			remoteSort : false,
			idField : '',
			pageList : [5, 10, 20, 30, 40, 50],
			toolbar : null,
			frozenColumns : [],
			columns : [],
			pagination : true,
			pageNumber : 1,
			currentPageNumber : 1,
			pageSize : 10,
			rownumbers : true,
			isInitLoad : false,// 初始化是否加载数据
			editors : _editors,
			selectedRows : null,// 选中行集合
			onBeforeLoad : function(queryParams) {
			},
			onLoadSuccess : function() {
			}
		};

		/**
		 * 扩展datagrid的功能函数，添加resetQueryParams自定义函数，
		 * 重新封装queryParams属性值，可随带前台已变更数据到后台
		 */
		$.extend($.fn.datagrid.methods, {
			resetChangedData : function(jq) {
				var rows = [];
				var deleted_rows = jQuery(jq).datagrid('getChanges', "deleted");
				var updated_rows = jQuery(jq).datagrid('getChanges', "updated");
				var inserted_rows = jQuery(jq).datagrid('getChanges',
						"inserted");

				for (var n = 0; n < deleted_rows.length; n++) {
					if (typeof deleted_rows[n] == 'object') {
						deleted_rows[n].action = "deleted";
						rows.push(deleted_rows[n]);
					}
				}
				for (var i = 0; i < inserted_rows.length; i++) {
					if (typeof inserted_rows[i] == 'object') {
						inserted_rows[i].action = "inserted";
						rows.push(inserted_rows[i]);
					}
				}
				for (var j = 0; j < updated_rows.length; j++) {
					if (typeof updated_rows[j] == 'object') {
						updated_rows[j].action = "updated";
						rows.push(updated_rows[j]);
					}
				}

				var opt = jQuery(jq).datagrid('options');
				var queryParams = jQuery(opt).attr('queryParams');
				queryParams['data'] = '[';

				if (rows.length == 0)
					return;
				for (var i = 0; i < rows.length; i++) {
					var jsonStr = getJsonString(rows[i]);
					queryParams['data'] += jsonStr;
				}
				queryParams['data'] = queryParams['data'].substring(0,
						queryParams['data'].length - 1)
						+ "]";
			}
		});
		if ($.type(opts) == 'string') {
			return $(this).datagrid(opts, param, _pa);
		} else {
			$.extend(defaults, opts);
			defaults.onBeforeLoad = function(data) {
				var flag=true;
				if (opts['onBeforeLoad'] && $.isFunction(opts['onBeforeLoad'])) {
					flag=opts.onBeforeLoad(data);
				}
				var opt = $(this).jDatagrid("options");

				var rows = $(this).jDatagrid("getSelections");

				if (!opt['selectedRows']) {
					opt.selectedRows = {};
				}
				var str = "{'page" + opt.currentPageNumber + "':[]}";
				var obj = eval("(" + str + ")");
				$.merge(obj["page" + opt.currentPageNumber], rows);
				$.extend(opt.selectedRows, obj);
				
				return flag;
			};
			defaults.onLoadSuccess = function() {
				var opt = $(this).jDatagrid("options");
				if (opts['onLoadSuccess']
						&& $.isFunction(opts['onLoadSuccess'])) {
					opts.onLoadSuccess(opt.selectedRows);
				}
				opt.currentPageNumber = opt.pageNumber;
				if (opt.idField) {
					var selRows = opt.selectedRows;
					var target = this;
					if (selRows && $.isPlainObject(selRows)) {
						var curPage = selRows['page' + opt.currentPageNumber];
						if (curPage && $.isArray(curPage)) {
							$.each(curPage, function(i, n) {
										var id = n[opt.idField];
										if (id) {
											var rowIndex = $(target).jDatagrid(
													"getRowIndex", id);
											$(target).jDatagrid("selectRow",
													rowIndex);
										}
									});
						}
					}
				}

			};
			return $(this).datagrid(defaults, param, _pa);
		}

	};
	// **********************************************************************datagrid
	// end*****************************************************
	// **********************************************************************tree
	// start*****************************************************
	/**
	 * Dependencies:easyui.css icon.css jquery.parser.js jquery.draggable.js
	 * jquery.droppable.js jquery.menu.js jquery.tree.js
	 * 
	 * @param {Object}
	 *            opts
	 * @param {Object}
	 *            param
	 */
	$.fn.jTree = function(opts, param) {
		var defaults = {
			url : null,
			method : "post",
			animate : false,
			checkbox : false,
			cascadeCheck : true,
			onlyLeafCheck : false,
			dnd : false,
			data : null,
			isClickChecked : false,// 单击选中、取消
			isDblClickExpand : false,// 双击展开、收缩
			onBeforeLoad : function(a, b) {
			},
			onLoadSuccess : function(a, tree) {
			},
			onLoadError : function() {
			},
			onClick : function(node) {
			},
			onDblClick : function(node) {
			},
			onBeforeExpand : function(param) {
			},
			onExpand : function(param) {
			},
			onBeforeCollapse : function(param) {
			},
			onCollapse : function(param) {
			},
			onCheck : function(node, ischecked) {
			},
			onBeforeSelect : function(node) {
			},
			onSelect : function(node) {
			},
			onContextMenu : function(e, node) {
			},
			onDrop : function(a, b, c) {
			},
			onBeforeEdit : function(node) {
			},
			onAfterEdit : function(node) {
			},
			onCancelEdit : function(node) {
			}
		};
		if ($.type(opts) == 'string') {
			return $(this).tree(opts, param);
		} else {
			$.extend(defaults, opts);
			defaults.onClick = function(node) {
				if (defaults.isClickChecked) {
					var checked = node.checked;
					if (checked) {
						$(this).tree('uncheck', node.target);
					} else {
						$(this).tree('check', node.target);
					};
				}
				if ($.isFunction(opts.onClick)) {
					opts.onClick(node);
				}
			};
			defaults.onDblClick = function(node) {
				if (defaults.isDblClickExpand) {
					$(this).tree('toggle', node.target);
				}
				if ($.isFunction(opts.onDblClick)) {
					opts.onDblClick(node);
				}
			};
			return $(this).tree(defaults, param);
		}
	};
	// **********************************************************************tree
	// end*******************************************************
	$.fn.jTreegrid = function(opts,param,queryParam){
		return $(this).treegrid(opts,param,queryParam);
	};
	// **********************************************************************menu
	// start*******************************************************
	/**
	 * Dependencies:easyui.css icon.css jquery.parser.js jquery.menu.js
	 * 
	 * @param {Object}
	 *            opts
	 * @param {Object}
	 *            param
	 */
	$.fn.jMenu = function(opts, param) {
		
		return $(this).menu(opts, param);
	};
	// **********************************************************************menu
	// end*******************************************************
	// ******************************************************************button
	// start********************************************************
	$.fn.jButton = function(opts,value) {
		return $(this).linkbutton(opts,value);
	};
	// ******************************************************************button
	// end********************************************************
	// **********************************************************************upload
	// start***************************************************
	$.upload = function(opts) {
		var setting = {
			filesize : "10240",
			filelimit : 10,
			filetype : "*.jpg;*.gif;*.zip;*.pdf;*.doc;*.rar;*.png;*.jpeg;*.txt",
			filepath : "/upload",//不配置默认存放java.io.tmpdir
			isfiletemp : "Y",//是否绝对路径
			onComplete : function(filenames, filepaths) {//filenames:文件名的集合 filepaths:服务端文件路径
			}
		};
		$.extend(setting, opts ? opts : {});
		var timestamp = Date.parse(new Date());
		var id = 'uploadFileWindow' + timestamp;
		$.openWindow({
					id : id,
					title : '文件上传',
					width : 470,
					modal : true,
					shadow : false,
					closed : false,
					closable : false,
					height : 400,
					type : 'iframe',
					url : web_path + 'plugins/swfupload/upload.jsp',
					params : {
						"windowid" : id,
						"filesize" : setting.filesize,
						"filelimit" : setting.filelimit,
						"filetype" : setting.filetype,
						"filepath" : setting.filepath,
						"isfiletemp" : setting.isfiletemp
					},
					onClose : function(param) {
						if ($.isFunction(setting.onComplete)) {
							setting.onComplete(param['filenames'],
									param['filepaths']);
						}
					}
				});
	};
	// **********************************************************************upload
	// end******************************************************
	// ********************************************遮罩 start****************************************************
	/**
	 * 添加遮罩
	 * 
	 * @param {Object}
	 *            msg 显示消息
	 */
	$.addMask = function(msg) {
		if(!msg){
			msg="loading......";
		}
		var width = document.compatMode=="CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth; 
		var wrap = $("body");
		$("<div class=\"datagrid-mask\" style=\"z-index : 9999;\"></div>").css({
					display : "block",
					width : width,
//					height : document.documentElement.clientHeight
					height : document.documentElement.clientHeight>document.body.scrollHeight?
						document.documentElement.clientHeight:document.body.scrollHeight+15
				}).appendTo(wrap);
		$("<div class=\"datagrid-mask-msg\" style=\"z-index : 9999;\"></div>").html(msg)
				.appendTo(wrap).css({
					display : "block",
					left : (width - $(
							"div.datagrid-mask-msg", wrap).outerWidth())
							/ 2,
					top : ($(window).height() - $(
							"div.datagrid-mask-msg", wrap).outerHeight())
							/2+$(document).scrollTop()

				});
	};
	/**
	 * 移除遮罩
	 */
	$.removeMask = function(){
		$("body").children("div.datagrid-mask-msg").remove();
		$("body").children("div.datagrid-mask").remove();
	};
	// ********************************************遮罩 end****************************************************
    //********************************************combogrid start****************************************************
    $.fn.jCombogrid=function(options,param){
        return $(this).combogrid(options,param);
    };
    $.fn.jCombotree=function(options,param){
        return $(this).combotree(options,param);
    };
    //********************************************combogrid end****************************************************
    /**
     * 
     */    
    $.encodeHtml =function(s){
    	var regx_html_encode = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
    	s = (s != undefined) ? s : this.toString();  
        return (typeof s != "string") ? s :  
            s.replace(regx_html_encode,   
                      function($0){  
                          var c = $0.charCodeAt(0), r = ["&#"];  
                          c = (c == 0x20) ? 0xA0 : c;  
                          r.push(c); r.push(";");  
                          return r.join("");  
                      });  
    };
    
    /**
     * 
     */
    $.decodeHtml=function(s){
    	var regx_html_decode = /&\w+;|&#(\d+);/g;
    	
    	var html_decode = {  
    	        "&lt;" : "<",   
    	        "&gt;" : ">",   
    	        "&amp;" : "&",   
    	        "&nbsp;": " ",   
    	        "&quot;": "\"",   
    	        "&copy;": ""  
    	  };  
        s = (s != undefined) ? s : this.toString();  
        return (typeof s != "string") ? s :  
            s.replace(regx_html_decode,  
                      function($0,$1){  
                          var c = html_decode[$0];  
                          if(c == undefined){  
                              // Maybe is Entity Number  
                              if(!isNaN($1)){  
                                  c = String.fromCharCode(($1==160)?32:$1);  
                              }else{  
                                  c = $0;  
                              }  
                          }  
                          return c;  
                      });  
    };
    
    $.getField=function(key,fileName,country,language){
    	if(!key){
    		return;
    	}
    	if(!fileName){
    		fileName="fields";
    	}
    	if(!country){
    		country=def_country;
    	}
    	if(!language){
    		language=def_language;
    	}
    	var localefileName=country?fileName+"_"+language+"_"+country:fileName+"_"+language;
    	if($.isEmptyObject(opts.locale_fields) || !opts.locale_fields[localefileName] || $.isEmptyObject(opts.locale_fields[localefileName])){
    		var str = '<script type="text/javascript" src="'+ web_path+ 'fields/'+ localefileName+ ".js"+ '"></script>';
			$("head").append($(str));
			var m={};
			try{
				m=fields;
			}catch(e){
				
			}
			var ff={};
			ff[localefileName]=m;
			$.extend(opts.locale_fields, ff);
			if(!opts.locale_fields[localefileName] || $.isEmptyObject(opts.locale_fields[localefileName])){
				str = '<script type="text/javascript" src="'+ web_path+ 'fields/'+ fileName+ ".js"+ '"></script>';
				$("head").append($(str));
				m=fields || {};
				var ff={};
				ff[localefileName]=m;
				$.extend(opts.locale_fields, ff);
			}
    	}
    	return opts.locale_fields[localefileName][key];
    };
    /**
     * 加载js文件
     */
    $.loadJs=function(urls){
    	if($.isArray(urls)){
    		$.each(urls,function(i,url){
    			var str = '<script type="text/javascript" src="'+ web_path+ url + '"></script>';
    	    	$("head").append(str);
//    			$.ajax({type:"GET",url:web_path+ url,dataType: "script"});
    		});
    	}else{
//    		$.ajax({type:"GET",url:web_path+ urls,dataType: "script"});
    		var str = '<script type="text/javascript" src="'+ web_path+ urls + '"></script>';
//    		$("head").append(str);
    		$(str).appendTo("head");
//    		document.writeln(str);
    	}
    };
    /**日期**/
    $.fn.jDatetimebox=function(opts,param){
    	var defaults={
    		panelWidth : 180,
			panelHeight : "auto",
    		showSeconds : true,
    		formatter : function(_22) {
    			var y = _22.getFullYear();
				var m = _22.getMonth() + 1;
				var d = _22.getDate();
				var h = _22.getHours();
				var M = _22.getMinutes();
				var s = _22.getSeconds();
				function _23(_24) {
					return (_24 < 10 ? "0" : "") + _24;
				};
				return y + "-" + _23(m) + "-" + _23(d)+ " " + _23(h)
						+ ":" + _23(M) + ":" + _23(s);
			},
    		onSelect : function(_1c) {
			}
    	};
    	if ($.type(opts) == 'string') {
			return $(this).datetimebox(opts, param);
		} else {
			$.extend(defaults, opts);
			return $(this).datetimebox(defaults);
		}
    };
    
    $.fn.jDatebox=function(opts,param){
    	var defaults={
    		panelWidth : 180,
			panelHeight : "auto",
			formatter : function(_22) {
    			var y = _22.getFullYear();
				var m = _22.getMonth() + 1;
				var d = _22.getDate();
				function _23(_24) {
					return (_24 < 10 ? "0" : "") + _24;
				};
				return y + "-" + _23(m) + "-" + _23(d);
			},
    		onSelect : function(_1c) {
			}
    	};
    	if ($.type(opts) == 'string') {
			return $(this).datebox(opts, param);
		} else {
			$.extend(defaults, opts);
			return $(this).datebox(defaults);
		}
    };
    /**
     * 占位符替换<br/> <b>【例如】</b><br/>
     * 
     * @param {Object}
     *            str 需要操作的字符串
     * @param {Object}
     *            data 替换的数据
     */
    $.replaceReg=function(str, data) {
    	var rs = "";
    	var index = 0;
    	for (var i = 0; i < data.length; i++) {
    		var s = "{" + i + "}";
    		var n = str.indexOf(s);
    		rs += str.substring(index, n);
    		rs += data[i];
    		index = i > 9 && i < 100 ? n + 4 : n + 3;
    	}
    	rs += str.substring(index);
    	return rs;
    };
    
    $.fn.jPropertygrid=function(opts,param){
    	return $(this).propertygrid(opts,param);
    };

}(jQuery));

var opts = {
	closeWindow : function(id, param, windowType, isNoRefresh) {
		if ($(id).size == 0) {
			return;
		}
		$(id).data("params", param);
		if (!isNoRefresh) {
			setTimeout(function() {
						$(id).parent().empty().detach();
					}, 100);
		}
		if ('dialog' == windowType) {
			$(id).dialog("close");
		} else {
			$(id).window("close");
		}
	},
	openWindow : function(options) {
		$.openWindow(options, true);
	},
	showMessage : function(options) {
		var defaults = {
			title : global_variable.showMessage_title_default,
			msg : '',
			timeout : 5000,
			showType : 'slide',
			width : 280,
			height : 120
		};
		if ($.type(options) == 'string') {
			defaults['msg'] = options;
		} else if ($.isPlainObject(options)) {
			$.extend(defaults, options);
		}
		$.messager.show(defaults);
	},
	showLoginWindow : function() {
		top.window.location = web_path +"main/login.srp";
		/*$.openWindow({
					id : 'loginWindow',
					title : '登录',
					width : 340,
					modal : true,
					shadow : false,
					closed : false,
					height : 150,
					type : 'html',
					style : 'padding-top:10px;',
					context : '',
					url : web_path + 'main/innerLogin.srp',
					onLoadSuccess : function() {
						var loginuser = globalMap.get(loginuser_info_key);
						$("#loginName").val(loginuser['loginName']);
						$("#loginbtn").jButton({
									"icon" : "icon-login"
								});
					}
				});*/
	},
	message_collection : {},
	locale_fields:{},
	popUpMessage : function(msgId, msgData, msgType, okFn, cancelFn) {
		var msg = $("div.messager-body");
		if (!msg[0]) {
			$.popUpMessage(msgId, msgData, msgType, okFn, cancelFn);
		}
	},
	global_is_print_error : false,
    addTab:function(title,url,icon,cache){
            var tab=$('#content-main').jTabs("getTab",title);
            if(tab){
                $('#content-main').jTabs("select",title);
                return;
            }
             $('#content-main').jTabs('add',{
                    title:title,
                    content:'<iframe src="'+url+'" frameBorder="0" style="width:100%;height:100%;margin: 0;"></iframe> ',
                    iconCls:icon,
                    cache:!cache,
                    closable:true
             });
        },
    addContentTab:function(title,content,icon){
    	if(!content){
    		return;
    	}
    	var tab=$('#content-main').jTabs("getTab",title);
        if(tab){
            $('#content-main').jTabs("close",title);
        }
        $('#content-main').jTabs('add',{
            title:title,
            content:content,
            iconCls:icon,
            closable:true
     });
    },
    closeTab:function(title){
    	var sel=title;
    	if(!sel){
    		var tab=$("#content-main").jTabs("getSelected");
    		sel=tab.panel('options').title;
    	}
    	
    	$("#content-main").jTabs("close",sel);
    },
    closeAllTabs:function(){
    	var tabs=$('#content-main').jTabs("tabs");
    	$.each(tabs,function(i,tab){
    		if(tab.panel('options').closable){
    			$("#content-main").jTabs("close",tab.panel('options').title);
    		}
    	});
    },
    selectTab:function(title){
    	$("#content-main").jTabs("select",title);
    },
    getSelectedTab:function(){
    	var tab=$("#content-main").jTabs("getSelected");
		return tab.panel('options').title;
    }
};

$(function() {
	$.ajaxSetup({
		cache : false// 关闭AJAX相应的缓存
		});
	setTimeout(function() {
				message_collection = window.top.opts.message_collection || {};
				if (global_is_load_message
						&& $.isEmptyObject(message_collection)) {

					$.each(global_message_file_collection, function(i, n) {
								var url="message/"+n;
								if(def_language){
									url=url+"_"+def_language;
								}
								if(def_country){
									url=url+"_"+def_country;
								}
								url=url+".js";
								$.loadJs(url);
								var m = eval("(" + n + ")");
								$.extend(message_collection, m);
							});
				}
			}, 1000);

});
