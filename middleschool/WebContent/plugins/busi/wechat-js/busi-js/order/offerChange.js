/**
 * 销售品变更
 * 
 * @author 
 * date 2016-5-12
 */
CommonUtils.regNamespace("offerChange");

offerChange = (function() {
	//缓存套餐列表，减少请求次数
	var _offerList =[];
	//验证码等待时间
	var wait = 60;
	//定时器
	var clock = '';
	//验证码是否已发送
	var validateCodeSendFlag =false;	
	//初始化套餐变更页面
	var _init = function (){
//		_queryOfferList();
		_backOfferList();
	};
	
	//查询主套餐
	var _queryOfferList = function(params){
		if(!params){
			params = {};
			//初始化主套餐查询
			if(_offerList.length>0){
				var html = template('offer-item', _offerList);
				$('#initOfferList').html(html);
				return;
			}
		}
		var url = web_path+"/test/getData.html";
		
		$.callServiceAsJsonGet(url,params, {
			"before":function(){
			},
			"always":function(){
				
			},
			"done" : function(response){
                 console.info(response.data);
			},
			fail:function(response){
				console.info(response);
			}
		});
	};
	
//	//初始化办理套餐
//	var _initDealOffer = function(offerSpecId){
//		var url = contextPath+"/offerChange/initDealOffer";
//		
//		$.callServiceAsHtmlGet(url,{"offerSpecId":offerSpecId}, {
//			"before":function(){
//				$("#seach_price").attr("onchange","");
//				$("#search_other").attr("onchange","");
//				$("#page-loader").removeClass("hide");
//			},
//			"always":function(){
//				
//			},
//			"done" : function(response){
//				var content$ = $("#main_content");
//				content$.html(response.data);
//				content$.show();
//				App.init();
//				$('.selectpicker').selectpicker('render');
//				$("#page-loader").addClass("hide");
//				var offerList = _offerList.resultlst;
//				for(var i=0;i<offerList.length;i++){
//					if(offerSpecId==offerList[i].offerSpecId){
//						var html = template('template_offerInfo', offerList[i]);
//						$('#offerInfo_div').html(html);
//					}
//				}
//				_queryBusiConfirm(offerSpecId);
//			
//			},
//			fail:function(response){
//				$("#page-loader").addClass("hide");
//				$.alert("提示","套餐加载失败，请稍后再试！");
//			}
//		});
//	};
//	
//	//查询业务确认信息
//	var _queryBusiConfirm = function(offerSpecId){
//		var url = contextPath+"/offerChange/queryBusiConfirm";
//		$.callServiceAsJsonGet(url,{"offerSpecId":offerSpecId}, {
//			"before":function(){
//				$("#page-loader").removeClass("hide");
//			},
//			"always":function(){
//				
//			},
//			"done" : function(response){
//				$("#page-loader").addClass("hide");
//				if(response.data.resultCode=="0"){
//					var data ={
//							"oldOfferInfo":response.data
//					};
//					var offerList = _offerList.resultlst;
//					for(var i=0;i<offerList.length;i++){
//						if(offerSpecId==offerList[i].offerSpecId){
//							data.newOfferInfo =offerList[i]
//						}
//					}
//					var html = template('template_busiConfirm', data);
//					$('#busiConfirm_div').html(html);
//				}else{
//					$.alert("提示","业务确认信息查询失败，请稍后再试！");
//				}
//
//			},
//			fail:function(response){
//				$("#page-loader").addClass("hide");
//				$.alert("提示","套餐加载失败，请稍后再试！");
//			}
//		});
//	}
	//重选
	var _backOfferList = function(){
		var url = web_path+"/test/getData.html";
			$.callServiceAsHtmlGet(url,{}, {
				"before":function(){
//					$("#page-loader").removeClass("hide");
				},
				"always":function(){
					
				},
				"done" : function(response){
//					$("#page-loader").addClass("hide");
//					var content$ = $("#main_content");
					console.info(response.data);
//					content$.show();
//					App.init();
//					$('.selectpicker').selectpicker('render');
//					if(_offerList.resultlst.length>0){
//						var html = template('offer-item', _offerList);
//						$('#initOfferList').html(html);
//						return;
//					}
//					_queryOfferList();
				},
				fail:function(response){
//					$("#page-loader").addClass("hide");
//					$.alert("提示","套餐加载失败，请稍后再试！");
				}
			});
	};
//	//短信验证
//	var _messageAuth = function(){
//		var url = contextPath+"/offerChange/messageAuth";
//		var validateCode = $("#validateCode").val();
//		if(!validateCodeSendFlag){
//			var html ='<div class="alert alert-danger fade in m-b-15">请您先获取短信验证码!<span class="close" data-dismiss="alert">&times;</span></div>';
//			$("#showValidateMessage").html(html);
//			return ;	
//		}
//		if(!validateCode){
//			var html ='<div class="alert alert-danger fade in m-b-15">请您输入短信验证码!<span class="close" data-dismiss="alert">&times;</span></div>';
//			$("#showValidateMessage").html(html);
//			return ;
//		}else if(validateCode.trim()==""){
//			var html ='<div class="alert alert-danger fade in m-b-15">请您输入短信验证码!<span class="close" data-dismiss="alert">&times;</span></div>';
//			$("#showValidateMessage").html(html);
//			return ;			
//		}
//		$.callServiceAsJsonGet(url,{"validateCode":validateCode}, {
//			"before":function(){
//				$("#page-loader").removeClass("hide");
//			},
//			"always":function(){
//				$("#page-loader").addClass("hide");
//			},
//			"done" : function(response){
//				if(response.data.resultCode=="0"){
//					$("#modal-idcheck").removeClass("in");
//					$("#modal-idcheck").css("display","none");
//					$("#page-loader").addClass("hide");
//					_orderSubmit();
//				}else{
//					var html ='<div class="alert alert-danger fade in m-b-15">'+response.data.resultMsg+'<span class="close" data-dismiss="alert">&times;</span></div>';
//					$("#showValidateMessage").html(html);
//				}
//			},
//			fail:function(response){
//				$.alert("提示","短信校验失败，请稍后再试！");
//			}
//		});
//	};
//	
//	//订单提交
//	var _orderSubmit = function(){
//		var offerSpecIds ="";
//		$('input[name="canBuyPackage"]:checked').each(function(){
//			offerSpecIds=offerSpecIds+this.value+","
//		});
//		var url = contextPath+"/offerChange/orderSubmit";
//		$.callServiceAsHtmlGet(url,{"offerSpecIds":offerSpecIds}, {
//			"before":function(){
//				$("#page-loader").removeClass("hide");
//			},
//			"always":function(){
//				$("#page-loader").addClass("hide");
//			},
//			"done" : function(response){
//				var content$ = $("#main_content");
//				content$.html(response.data);
//				content$.show();
//				App.init();
//				$(".modal-backdrop").remove();
//			},
//			fail:function(response){
//				$.alert("提示","订单提交失败，请稍后再试！");
//			}
//		});
//	};
//	//搜索套餐
//	 var _searchOfferInfo = function(){
//		var	searchKey_price = $("#seach_price").val();
//		var	searchKey_other = $("#search_other").val();
//		if(searchKey_price==""&&searchKey_other==""){
//			_queryOfferList();
//			return;
//		}
//		var params = {
//				"searchKey_price":searchKey_price,
//				"searchKey_other" :searchKey_other
//		}
//		_queryOfferList(params);
//	 };
//	 //发送验证短信
//	 var _sendSmS = function(){
//			var url = contextPath+"/offerChange/sendSMS";
//			$.callServiceAsJsonGet(url,{}, {
//				"before":function(){
//					
//				},
//				"always":function(){
//					
//				},
//				"done" : function(response){
//                      if(response.data.resultCode=="0"){
//                    	  validateCodeSendFlag = true;
//                    	  _readSecond();
//                      }else{
//                    	  $.alert("提示","短信验证码发送失败!");
//                      }   
//				},
//				fail:function(response){
//					$.alert("提示","短信校验失败，请稍后再试！");
//				}
//			});
//	 };
//	 
//     //读秒操作
//	 var _readSecond = function sendCode(){ 
//		var html ='<div class="alert alert-danger fade in m-b-15">验证码将在5分钟后失效<span class="close" data-dismiss="alert">&times;</span></div>';
//		$("#showValidateMessage").html(html);
//		$("#validateTime").attr("onclick","javascript:void(0);");
//		$("#validateTime").text(wait+'秒后可重新获取');
//		 clock = setInterval(_doLoop, 1000); //一秒执行一次
//	 };
//	 
//	 var _doLoop = function doLoop(){
//		wait--;
//		 if(wait > 0){
//			 $("#validateTime").text(wait+'秒后可重新获取');
//		 }else{
//			 $("#validateTime").text("重新获取");
//		     $("#validateTime").attr("onclick","offerChange.sendSmS();");
//		     clearInterval(clock); //清除js定时器
//		     wait = 60; //重置时间
//	     }
//	  };
//	  
//	  //展示套餐详情
//	  var _showDetailMsg = function(id){
//		 $("#"+id).modal('show');
//	  };
//     //查询异常信息详情
//	  var _showErrorMsg = function(){
//		  $("#error_div").css("display","block");
//	  };
//	  
//	  //收费建档
//	  var _chargeSubmit = function(){
//		   
//			var url = contextPath+"/offerChange/chargeSubmit";
//			$.callServiceAsHtmlGet(url,{"olId":$("#olId").val()}, {
//				"before":function(){
//					$("#page-loader").removeClass("hide");
//					$("#page-container").removeClass("in");
//				},
//				"always":function(){
//					$("#page-loader").addClass("hide");
//				},
//				"done" : function(response){
//					var content$ = $("#main_content");
//					content$.html(response.data);
//					content$.show();
//					App.init();
//					$(".modal-backdrop").remove();
//				},
//				fail:function(response){
//					$.alert("提示","订单提交失败，请稍后再试！");
//				}
//			});  
//	  };
	return {
		init 					: 				_init
//		queryOfferList          :               _queryOfferList,
//		initDealOffer           :               _initDealOffer,
//		backOfferList           :               _backOfferList,
//		messageAuth             :               _messageAuth,
//		orderSubmit             :               _orderSubmit,
//		searchOfferInfo         :               _searchOfferInfo,
//		sendSmS                 :               _sendSmS,
//		showDetailMsg           :               _showDetailMsg,
//		showErrorMsg            :               _showErrorMsg,
//		chargeSubmit            :               _chargeSubmit
		
	};
})();