(function($, undefined) {
	//新增一个tab页
     $.addTab=function(title,url,iconCls){
         return window.top.opts.addTab(title,url,iconCls);
     };
     $.addContentTab=function(title,content,iconCls){
    	return window.top.opts.addContentTab(title,content,iconCls); 
     };
     //关闭指定title页tab   
     $.closeTab=function(title){
        return window.top.opts.closeTab(title);
     };
     //关闭所有tab页   
     $.closeAllTabs=function(){
        return window.top.opts.closeAllTabs();
     };
     //选中指定title页tab
     $.selectTab=function(title){
    	return window.top.opts.selectTab(title); 
     };
     //获取已选中tab页title
     $.getSelectedTab=function(){
    	return window.top.opts.getSelectedTab(); 
     };
     //获取指定title或菜单resourceKey的tab页的window对象
     $.getTabIframeWin=function(resKey){
    	 return $("#"+resKey,window.top.document)[0].contentWindow;
     };
     //获取指定title或菜单resourceKey的tab页的document jquery对象
     $.getTabIframeDoc=function(resKey){
    	 return $("#"+resKey,window.top.document)[0].contentWindow.document;
     };
     
     $.getMessage=function(key,args){
    	 var msg=window.top.opts.message_collection[key];
    	 msg=msg?msg:key;
    	 msg=args?$.replaceReg(msg,args):msg;
    	return  msg;
     };
     
     $.getLocaleField=function(key,fileName,country,language){
    	 
    	 return $.getField(key,"app/"+fileName,country,language);
     };
     
     $.getBusinessField=function(key,fileName,country,language){
    	 
    	 return $.getField(key,"business/"+fileName,country,language);
     };
     //通过树形菜单的resourceKey获取Tab页的title
     $.getTabTitleByResKey=function(resKey){
    	 return window.top.selMenuTreeMap.get(resKey);
     };
	// ******************************************获取用户登录信息*********
    $.currentUserInfo=function(){
    	return window.top.globalMap.get(window.top.loginuser_info_key);
    };
	$.loginUser = function() {
		return $.currentUserInfo().user;
	};
	$.getFunction = function(key){
		var currentUserInfo=$.currentUserInfo();
        var funKeys=currentUserInfo?currentUserInfo['affiliatedObject']['functions']:{};
        return funKeys[key];
	};
    $.isHaveAuthority=function(key){
            var fun=$.getFunction(key);
            return $.isPlainObject(fun)?fun.ownership:false;
    };
    //*******************************************权限按钮************
    $.fn.authButton=function(funKey,handler,plain){
    	var fun=$.getFunction(funKey);
    	var name = $(this).attr("name");
    	// 按钮图片名称结尾
    	var suffixPic = "";
    	// 按钮是否可用
    	var isDisabled = !fun || fun.ownership;
    	if(isDisabled){
    		suffixPic = "0";
    	}
    	// 根据名称，选择图片
    	if(name.indexOf("edit") >= 0){
    		$(this).html('<img src="'+web_path+'resources/app/common/img/btnEditor'+suffixPic+'.jpg" style="border:0;margin-right:10px;"/>');
    	}else if(name.indexOf("delete") >= 0){
    		$(this).html('<img src="'+web_path+'resources/app/common/img/btnDel'+suffixPic+'.jpg" style="border:0;;margin-right:10px;"/>');
    	}else if(name.indexOf("grant") >= 0){
    		$(this).html('<img src="'+web_path+'resources/app/common/img/btnRes'+suffixPic+'.jpg" style="border:0;;margin-right:10px;"/>');
    	//后面添加的
    	}else if(name.indexOf("password") >= 0){
    		if(isDisabled){
    			$(this).html('<input class="btnGray0" type="button" value="重置密码" style="border:0;;margin-right:10px;"/>');
    		}else{
    			$(this).html('<input class="btnBlue" type="button" value="重置密码" style="border:0;;margin-right:10px;"/>');
    		}
    	}else if(name.indexOf("look") >= 0){
    		if(isDisabled){
    			$(this).html('<input class="btnGray0" type="button" value="查看" style="border:0;;margin-right:10px;"/>');
    		}else{
    			$(this).html('<input class="btnBlue" type="button" value="查看" style="border:0;;margin-right:10px;"/>');
    		}
    	}else{
    		if(isDisabled){
    			$(this).html('<input class="btnBlue" type="button" value="'+ name +'" style="border:0;;margin-right:10px;"/>');
    		}else{
    			$(this).html('<input class="btnGray0" type="button" value="'+ name +'" style="border:0;;margin-right:10px;"/>');
    		}
    	}
    	if(isDisabled){
    		return;
    	}
    	$(this).bind("click",function(){
    		if($.isFunction(handler)){
    			handler(this,fun);
    		}
    	});
    };
    $.authButton = function(funKey,handler,id){
    	id=id?id:funKey;
    	var fun=$.getFunction(funKey);
    	if(!fun){
    		return {};
    	}
    	var callBack=function(){
    		if($("#"+id).jButton("options").disabled){
    			return;
    		}
    		if($.isFunction(handler)){
    			handler(fun);
    		}
    	};
    	var opts={'id':id,'text':fun.name,'iconCls':fun.iconCls,'disabled':fun.ownership,'handler':callBack};
    	return opts;
    };
    /**
     * 普通按钮权限验证
     * funKey 资源KEY,
     * handler 回调函数,
     * id html ID
     * isDisabled 是否置灰、不可用。默认为不可见
     */
    $.busiAuthButton = function(funKey,handler,id,isDisabled){
    	id=id?id:funKey;
    	var fun=$.getFunction(funKey);
    	if(!fun || fun.ownership){
    		if(isDisabled){
    			$("#"+id).attr("disabled","disabled");
    			$("#"+id).removeClass();
    			$("#"+id).addClass("btnGray0");
    		}else{
    			$("#"+id).remove();
    		}
    	}else if($.isFunction(handler)){
    		$("#"+id).click(function(){
    			handler(fun);
    		});
		}
    };
    /**
     * 表格里的按钮权限判断
     * funKey 资源KEY,
     * handler 回调函数,
     */
    $.fn.busiAuthGridButton = function(funKey,handler){
    	// 按钮权限判断先不做
    	/*var fun=$.getFunction(funKey);
    	if(!fun || fun.ownership){
    		$(this).attr("disabled","disabled");
			$(this).removeClass();
			$(this).css("background","#C9C9C9");
			$(this).css("cursor","default");
    	}else if($.isFunction(handler)){
    		$(this).click(function(){
    			handler(this,fun);
    		});
		}*/
    	if($.isFunction(handler)){
    		$(this).click(function(){
    			handler(this,null);
    		});
		}
    };
	// ******************************************系统参数下拉********
	$.fn.selectParam = function(opts,param,flag) {
		var defaults = {
			valueField : 'code',
			textField : 'text',
			url : web_path + 'dictionary/findByCategory.srp',
			typeId : '',
			disabled : false,
			editable : true,
			isFilterByValue : false,
			isCodeValue : false,
			isContainValid : false,
			isShowValue : false,
			valueTextSeparator : '.',
			defaultValue : '',
			required : false,
			invalidMessage : '请重新选择',
			panelWidth : null,
			panelHeight : 200,
			width : null,
			// missingMessage:'请选择参数',
			onChange : function(newValue, oldValue) {
			},
			onSelect : function(row) {
			}
		};
		opts = opts ? opts : {};
		if ($.type(opts) == 'string') {
			if (flag) {
				return $(this).autocomplete(opts, param);
			} else {
				opts = {
					"typeId" : opts
				};
			}

		}
		$.extend(defaults, opts);
		defaults.params = {
			'code' : defaults.typeId,
			'isShowValue' : opts.isShowValue == undefined
					? true
					: opts.isShowValue,
			'valueTextSeparator' : defaults.valueTextSeparator
		};

		// if(defaults.isCodeValue){
		// defaults.formatter=function(row){
		// return row['CODE']+". "+row['VALUE'];
		// }
		// }
		$(this).autocomplete(defaults);
		
	};
	// ******************************************获取参数列表值***********
	$.getParamList = function(typeCode, fn) {
		if (!typeCode) {
			return;
		}
		$.ffcsAjax({
					url : web_path + 'dictionary/findByCategory.srp',
					data : {
						"code" : typeCode
					},
					success : function(data) {
						if (data && $.isFunction(fn)) {
							fn(data);
						}
					}
				});
	};
	// ******************************************获取参数值*********
	$.getParamValue = function(code, fn) {
		if (!code) {
			return;
		}
		$.ffcsAjax({
					url : web_path + "dictionary/findByCode.srp",
					data : {
						"code" : code
					},
					success : function(data) {
						if (data && $.isFunction(fn)) {
							fn(data['text']);
						}
					}
				});
	};
	
	// **********************************************报表打印*******************
	$.printReport = function(url, params, fn, msg,isNoShowMsg) {
		if (!url) {
			$.popUpMessage("打印报表路径错误!");
			return;
		}
		if (!isNoShowMsg) {
			msg=msg?msg:"MSG_COM_013";
			$.popUpMessage(msg, null, '0', function() {
						print(url, params, fn);
					},function(){
						return;
					},true);
		} else {
			print(url, params, fn);
		}

		function print(url, params, fn) {
			var data = "";
			if ($.isPlainObject(params)) {

				$.each(params, function(i, n) {
							data = data + i + "=" + n + "&";
						});

			}
			if (data) {
				if (url.indexOf("?") > 0) {
					data = "&" + data;
				} else {
					data = "?" + data;
				}
				data = data.substring(0, data.lastIndexOf("&"));
			}
			url = url + data;
			var printFrame = window.top.document
					.getElementById("printPdfFrame");
			$(printFrame).attr("src", "");

			$(printFrame).attr("src", url);

			if($.browser.msie){
				printIe();				
			}else{
				printFF();
			}
			function printFF(){
				printFrame.onload = function(){
					if (!window.top.opts.global_is_print_error) {
						if (fn && $.isFunction(fn)) {
							fn();
						}
					}
					else {
						window.top.opts.global_is_print_error = false;
					}
				};
			}
			function printIe(){
				printFrame.onreadystatechange = function() {
					if (printFrame.readyState == 'loaded'
							|| printFrame.readyState == "complete") {
						if (!window.top.opts.global_is_print_error) {
							if (fn && $.isFunction(fn)) {
								setTimeout(function() {
											fn();
										}, 2000);
							}
						} else {
							window.top.opts.global_is_print_error = false;
						}

					}
				};
			}
		}
	};
	
	// **********************************************报表打印*******************
	$.viewReport = function(url, params, fn) {
		$.openWindow({
					title : '报表预览',
					type : 'iframe',
					url : web_path
							+ "jsp/global/printView.jsp?width=1000&height=500&action="
							+ url,
					maximizable : true,
					width : 1000,
					height : 500
				});
	};
	
	// ***********************************隐藏日期控件******************************************
	/**
	 * 设置焦点，隐藏日期控件面板
	 * 
	 * @param {Object}
	 *            isRequired 失去焦点后是否显示面板
	 */
	$.fn.hideDatePanel = function(isRequired) {
		$(this).focus();
		$(this).validate("removeClass");
		if ($.browser.msie) {
			var flag = true;
			$(this).focus(function() {
						if (flag) {
							$("#_my97DP", window.top.document).hide();
							flag = false;
						}

					});
		} else {
			$("#_my97DP", window.top.document).hide();
		}
		if (isRequired) {
			$(this).blur(function() {
						if (!$(this).val()) {
							$(this).focus();
							$(this).validate("removeClass");
						}
					});
		}
	};
	// **********************************************消除验证信息*********************************************
	/**
	 * 设置焦点，消除验证信息
	 * 
	 * @param {Object}
	 *            isRequired 是否必输
	 */
	$.fn.hideValidMsg = function(isRequired) {
		var pflag=false;
		var tar=$(this);
		if ($(this).hasClass("validatebox-text")) {
					$(this).focus();
				} else if ($(this).hasClass("combobox-f")
						&& $(this).hasClass("combo-f")) {
					$(this).next("span.combo")
							.children("input.validatebox-text")
							.focus();
					pflag=true;
					tar=$(this).next("span.combo").children("input.validatebox-text");
				}
		if ($.browser.msie) {
			var flag = true;
			$(tar).focus(function() {
						if (flag) {
							$(this).validate("removeClass");
							flag = false;
						}
					});

		} else {
			$(this).validate("removeClass");
		}

		if (isRequired) {
			$(tar).blur(function() {
						if (!flag && !$(this).validate("isValid")) {
							$(this).focus();
						}
						if(flag && $(this).combobox("isValid")){
							$(tar).focus();
						}
					});
		}
	};
	
	/**
	 * 添加到节目
	 * itemIds-声讯ID数组
	 * itemNames-声讯名称数组
	 */
	$.addItemToCategory = function(itemIds, itemNames){
    	/*var opts = {
    	    itemId:"0"
    	};
    	$.extend(opts, settings);*/
		if(itemIds == null || itemNames == null){
			$.popUpMessage("MSG_CATEGORY_003");
			return;
		}
    	$.openWindow({
 		   id:"add_item_to_category_win",
  		   resizable:false,
  		   draggable:false,
  		   title:$.getBusinessField("add_item_to_category_win_title","category"),
  		   type:'iframe',
  		   width:550,
  		   height:180,
  		   modal:true,
  		   url:web_path+"category/initAddItemToCategory.do",
  		   params:{
  			   "itemIds":itemIds.toString(),
  			   "itemNames":itemNames.toString()
  		   },
  		   onLoadSuccess:function(data){
  			   
  		   },
  		   onClose:function(data){
  			   
  		   }
  	   },true);
    };
}(jQuery));