$(function(){
	
	/**
	 * 初始化
	 * @param {Object} target
	 */	
	function init(target){
		var nextNode=target.nextElementSibling;
		var span=document.createElement('span');
		var id=$(target).attr('id');
		
		$(span).addClass('textfield_'+id+'_span');
		$(span).prepend($(target));
		createHideInput(target);
		$(nextNode).before(span);
		
	}
	
	/**
	 * 创建隐藏域
	 * @param {Object} target
	 */
	function createHideInput(target){
		var name=$(target).attr('name').trim();
		var id=$(target).attr('id').trim();
		var index=id.indexOf('_org');
		var hideinput=$('#'+id+'~:hidden');
		
		if(hideinput[0]!=undefined){
			$(hideinput).remove();
		}
		
		$(target).removeAttr('name');
		if(index==-1){
			$(target).attr('id',id+'_org');
		}else{
			id=id.substring(0,index);
		}
		var hideinput = "<input type='hidden' id='"+id+"' class='textfield_hideinput' name='" + id + "' value=''/>";
		$(target).after(hideinput);
	}
	
	/**
	 * 销毁隐藏域
	 * @param {Object} target
	 */
	function destoryHideInput(target){
		var id=$(target).attr('id');
		var index=id.indexOf('_org');
		
		if(index>-1){
			var id_org=id.substring(0,index);
			var hidden_input=$('#'+id_org);			
			$(target).attr('name',hidden_input.attr('name'));
			$(target).attr('id',hidden_input.attr('id'));
			hidden_input.remove();
		}
	}
	
	/**
	 * 初始化提示信息
	 * @param {Object} target
	 * @param {Object} value
	 */
	function initMessage(target,value){
		if(typeof value=='object'){
			$(target).val(value.options.message);
		}
		if(typeof value=='string'){
			$(target).val(value);
		}
	}
	
	/**
	 * 设置样式
	 * @param {Object} target
	 * @param {Object} value
	 */
	function setStyle(target,value){
		$(target).attr('style',value.options.style);
	}

	/**
	 * 获取提示信息
	 * @param {Object} target
	 */
	function getMessage(target){
		var opt=$.data(target,'textfield').options;
		return opt.message;
	}

	/**
	 * 设置提示信息
	 * @param {Object} target
	 * @param {Object} text
	 * @param {Object} rq
	 */
	function setMessage(target,text,rq){
		
		if($(target).val()==undefined || $(target).val()==""){
			initMessage(target,text);
			setStyle(target,$.data(target,'textfield'));
			return false;
		}
		
		if(!rq){
			initMessage(target,text);
			setStyle(target,$.data(target,'textfield'));
			return false;
		}
		
		return true;
	}
	
	/**
	 * 事件处理
	 * @param {Object} target
	 * @param {Object} text
	 */
	function bindEvents(target,text){
		var rq=false;		//是否修改过文本框内容
		$(target).bind('click',function(){
			rq=clearMessage(target,rq);
		});
		$(target).bind('blur',function(){
			rq=setMessage(target,text,rq);
			if(rq)	destoryHideInput(target);
			else createHideInput(target);
		});
		$(target).bind('change',function(){
			rq=$(target).val()!=""?true:false;
			rq=clearMessage(target,rq);
		});
	}
	
	/**
	 * 清空提示信息
	 * @param {Object} target
	 * @param {Object} rq
	 */
	function clearMessage(target,rq){
		if(!rq){
			$(target).val('');
			return false;
		}else{
			$(target).css('color','');
			return true;
		}
	}

	/**
	 * 赋值内置属性
	 * @param {Object} target
	 * @param {Object} newopts
	 */
	function parseOptions(target,newopts){
		var t = $(target);
		return $.extend({},$.data(t,'textfield').options,newopts);
	}

	/**
	 * 构造函数
	 * @param {Object} options
	 * @param {Object} param
	 */
	$.fn.textfield = function(options,param){
		if(typeof options=='string'){		
			var method = $.fn.textfield.methods[options];
			if (method){
				var id=$(this).attr("id")+"_org";
				var target=$("#"+id);
				if(!target[0]){
					target=this;
				}
				var m=method(target, param);
				return m;
			} else {
				return this.textfield(options, param);
			}
		}
		
		options = options || {};
		return this.each(function(){
			var text = $.data(this, 'textfield');
			if (text){
				$.extend(text.options, options);
			} else {
				init(this);
				var t = $(this);
				text = $.data(this, 'textfield', {
					options:$.extend({},$.fn.textfield.options, parseOptions(this,{}), options)
				});
			}
			setStyle(this,text);
			initMessage(this,text);
			bindEvents(this,text);
		});
		
	};
	
	/**
	 * 对外提供的调用方法
	 * @param {Object} jq
	 * @param {Object} opts
	 */
	$.fn.textfield.methods = {
		parseOptions: function(jq,opts){
			$.extend(jq.textfield.options,opts);
			return jq;
		},
		options: function(jq){
			return $.data(jq[0], 'textfield').options;
		},
		setMessage:function(jq,str){
			return jq.each(function(){
				var id_org=$(jq).attr('id')+'_org';
				if($('#'+id_org)[0]!=undefined){
					jq=$('#'+id_org);
				}
				
				var opt = $.fn.textfield.options;
				opt.message=str;
				jq.textfield(opt);
			});
		},
		getMessage:function(jq){
			return getMessage(jq[0]);
		},
		reload:function(jq){
			var opt=$.data(jq,'textfield').options;
			return jq.textfield(opt);
		}
	};

	/**
	 * 内置属性
	 */
	$.fn.textfield.options = {
		message:'please enter string',
		style:'5px;color:#bbb;'
	};

})(jQuery);