/**
 * 刷题
 */
CommonUtils.regNamespace("Brush");
Brush = (function() {
	
	/**
	 * 筛选条件
	 */
	var _brushSearch = function(){
		var url = web_path + "appBrush/brushSearch.html?code=1B";
		Common.changeURL(url);
	};
	
	/**
	 * 题目详情
	 */
	var _tmDetail = function(isleaf,id,obj){
		if(isleaf==0){
			var html  ="";
			var data = Common.topicCategory.data;
			for(var i=0;i<data.length;i++){
				var cid = data[i].id;
				if(id==cid){
					var children = jQuery.parseJSON(data[i].children);
					for(var k=0;k<children.length;k++){
						html = html+"<li class='sub-list' name="+children[k].label+" onclick='Brush.tmDetail("+children[k].isleaf+","+children[k].id+",this)'>";
						html = html+"<img src='"+web_path+"resources/app/common/imgs/"+(pinyin.getCamelChars(children[k].label)).toLowerCase()+".png' class='icon-sub' />";
						html = html+"<span class='sub-title'>"+children[k].label+"</span>";
						html = html+"<img src='"+web_path+"resources/app/common/imgs/right.png' class='right-arrow'/></li>";
					}
				}
			}
			$("#topicCategoryList").html(html);
		}else{
			_getTopicSubjectDetail(id,obj);
		}
	};
	/**
	 * 提交作答结果
	 */
	var _submitResult = function(type){
		if(type){
			Common.topicInfo.type=type;
		}else{
			Common.topicInfo.type=0;
			type=0;
		}
		var index = $("#index").val();
		if($("#topic_div").hasClass("dis_none")){	
//			var url = web_path+"appBrush/checkTopicIsOver.html";
//			$.ajax({
//				url : url,
//				async: false,
//				type : "post",
//				data : {"subjectId":$("#uuid").val()},
//				beforeSend:function(XMLHttpRequest){
//				},
//				complete:function(XMLHttpRequest, textStatus){
//				},
//				success : function(response) {
//					if(jQuery.parseJSON(response).data.length>2){
//						var url = web_path + "appLogin/topicover.html";
//						Common.changeURL(url);
//					}else{
						$("#singleButton").removeClass("dis_none");
						$("#doubleButton").addClass("dis_none");
						$("#topic_div").removeClass("dis_none");
						$("#result_div").addClass("dis_none");
						_showTopicDetail(Number(index)+1);
//					}
//				}
//			});
			return;
		}
		Common.topicInfo.index =index;
		var allCheckedRadio = $('input:radio:checked');
		if(allCheckedRadio.length!=Common.topicInfo.countTopic){
			Common.showMessage("请做完该题所有小题后在提交","warn"); 
			return;
		}
		Common.topicInfo.totalCount =allCheckedRadio.length;
		Common.topicInfo.subjectName =$("#subjectName").text();
	    var errorCount = 0;
		var errorMsg = "";
		allCheckedRadio.each(function(index){
            var xuhao = Number(index)+1;
			var answer = $(this).attr("answer");
			var value = $(this).val();
			if(answer!=value){
				errorMsg =errorMsg+"<p>第"+xuhao+"题答错,正确答案"+answer+"</p>";
				errorCount=errorCount+1;
			}else{
				errorMsg =errorMsg+"<p>第"+xuhao+"题,答对了！</p>";
			}
		});
		Common.topicInfo.errorCount = errorCount;
		Common.topicInfo.errorMsg = errorMsg;
		_submitBrushResult(type);
	};
	
	/**
	 * 获取题目类别
	 */
	var _getTopicCategory = function(){
		var url = web_path + "appBrush/getTopicCategory.html";
		$.ajax({
			url : url,
			type : "post",
			data : {},
			beforeSend:function(XMLHttpRequest){
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
				if(data.length>0){
					Common.topicCategory.data =data;
					var html  ="";
					for(var i=0;i<data.length;i++){
						if(data[i].label=="高中"){
							_tmDetail(data[i].isleaf,data[i].id);
						}
//						html = html+"<li class='sub-list' onclick='Brush.tmDetail("+data[i].isleaf+","+data[i].id+")'>";
//						html = html+"<span class='icon-sub'>"+data[i].label+"</span>";
//						html = html+"<span class='sub-title'>"+data[i].label+"</span>";
//						html = html+"<img src='"+web_path+"resources/app/common/imgs/right.png' class='right-arrow'/></li>";
					}
//					$("#topicCategoryList").html(html);
				}
			}
		});
	};
	
	var _getTopicSubjectDetail = function(id,obj){
		var url = web_path + "appBrush/getTopicSubjectDetail.html";
		var subjectName = $(obj).attr("name");
		$.ajax({
			url : url,
			type : "post",
			data : {"subjectId":id},
			beforeSend:function(XMLHttpRequest){
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
				var uuid="";
				if(data.length>0){
					Common.topicCategory.data =data;
//					var html  ="";
					for(var i=0;i<data.length;i++){
						 uuid=uuid+(data[i].uuid).toString()+",";
					}
					_getBrushTmDetail(id,subjectName);
//					$("#topicCategoryList").html(html);
//					$("#tit_subject").text(subjectName);
				}else{
					Common.showMessage("咱无相关试题","warn");   
	                return false;   
				}
			}
		});
	};
	//获取题目
	var _getBrushTmDetail = function(id,courseName,imgname,topicid){
//		var url = web_path+"appBrush/checkTopicIsOver.html";
//		$.ajax({
//			url : url,
//			async: false,
//			type : "post",
//			data : {"subjectId":id},
//			beforeSend:function(XMLHttpRequest){
//			},
//			complete:function(XMLHttpRequest, textStatus){
//			},
//			success : function(response) {
//				if(jQuery.parseJSON(response).data.length>2){
//					var url = web_path + "appLogin/topicover.html";
//					Common.changeURL(url);
//				}else{
					var url = web_path + "appBrush/brushTmDetail.html?uuid="+id+"&paperid="+courseName+"&imgname="+imgname+"&topicid="+topicid;
					Common.changeURL(url);
//				}
//			}
//		});

	};
	
	/**
	 * 获取题目详情
	 */
	var _initTopicDetail = function(id,courseName,topicid){
		var url = web_path + "appBrush/getTopicDetail.html";
		$.ajax({
			url : url,
			type : "post",
			data : {"uuid":id,"paperid":courseName},
			beforeSend:function(XMLHttpRequest){
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				if(!response){
//					var html="<div class='answer-result'>";
//					html = html+ "<img src='"+web_path+"resources/app/common/imgs/fail.png'  />";
//					html = html+ "<h2>很抱歉,暂无相关试题哦！</h2></div>";
//				//	Common.showMessage("暂无相关试题哦","warn");   
//					$("#topic_div").html(html);
//					$("#singleButton").addClass("dis_none");
//	                return false;  
				}
				var data = jQuery.parseJSON(response).data;
				if(data.length>0){
					Common.topicCategory.topicData =data;
					var topicData = new Array();
					for(var i=0;i<Common.topicCategory.topicData.length;i++){
						if(topicid==Common.topicCategory.topicData[i].Qid){
							var tm = Common.topicCategory.topicData[i];
							var index =-1;
							if(tm.Xx==1){//大小题
								$("#tmHtml").html(tm.Qtxt);
								var subQuests = jQuery.parseJSON(tm.SubQuests);
								var html = "<input type='hidden' id='index' value='"+index+"'>";
								Common.topicInfo.countTopic = subQuests.length;
								for(var i=0;i<subQuests.length;i++){
									html = html +"<h4 class='sub-titleh2'>"+(i+1)+"."+subQuests[i].QuestContentHtml+"</h4>";
									var qoptjson = jQuery.parseJSON(subQuests[i].Qoptjson);
									for(var k=0;k<qoptjson.length;k++){
										html =html+"<label class='answer'>";
										html =html+"<input type='radio' name='"+subQuests[i].Id+"' answer='"+subQuests[i].CorrectAnswer.substring(0,1)+"' value='"+qoptjson[k].Key.substring(0,1)+"'/>"+qoptjson[k].Key+":"+qoptjson[k].Value+"";
										html =html+"</label>";
									}
								}
								$("#tmAnswerHtml").html(html);
				                Common.topicInfo.subjectId = tm.Qid;
				                Common.topicInfo.label = tm.label;
				        		Common.topicInfo.vlink = tm.Vlink;
				        		Common.topicInfo.isnew = tm.isnew;
							}else{
								$("#tmHtml").html(tm.Qtxt);
								var html = "<input type='hidden' id='index' value='"+index+"'>";
								Common.topicInfo.countTopic = 1;
								try {
									var qopt = jQuery.parseJSON(tm.Qopt);
									for(var k=0;k<qopt.length;k++){
										html =html+"<label class='answer'>";
										html =html+"<input type='radio' name='answer' answer='"+tm.Qok.substring(0,1)+"'value='"+qopt[k].Key.substring(0,1)+"' />"+qopt[k].Key+":"+qopt[k].Value+"";
										html =html+"</label>";
									}
								} catch (e) {
									
								}
								$("#tmAnswerHtml").html(html);
								Common.topicInfo.subjectId = tm.Qid;
								Common.topicInfo.label = tm.label;
								Common.topicInfo.vlink = tm.Vlink;
					      		Common.topicInfo.isnew = tm.isnew;
							}
						}else{
							topicData.push(Common.topicCategory.topicData[i]);
						}
					}
					Common.topicCategory.topicData =topicData;
					//_showTopicDetail(0);
	
				}else{
//					var html="<div class='answer-result'>";
//					html = html+ "<img src='"+web_path+"resources/app/common/imgs/success.png'  />";
//					html = html+ "<h2>今日已完成任务，明天继续努力哦！</h2></div>";
//				//	Common.showMessage("暂无相关试题哦","warn");   
//					$("#topic_div").html(html);
//					$("#singleButton").addClass("dis_none");
//	                return false;   
				}
			}
		});
	};
	
	/**
	 * 获取题目详情
	 */
	var _initErrorTopicDetail = function(id){
		var ids =$("#ids").val();
		var url = web_path + "appBrush/getErrorTopicDetail.html";
		$.ajax({
			url : url,
			type : "post",
			data : {"uuid":id,"ids":ids},
			beforeSend:function(XMLHttpRequest){
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
				if(data.length>0){
					Common.topicCategory.topicData =data;
					_showErrorTopicDetail(0);
	
				}else{
					Common.showMessage("暂无相关试题哦","warn");   
	                return false;   
				}
			}
		});
	};
	var _showTopicDetail = function(index){
		var size = Common.topicCategory.topicData.length;
		if(index<size){
			var tm = Common.topicCategory.topicData[index];
			if(tm.Xx==1){//大小题
				$("#tmHtml").html(tm.Qtxt);
				var subQuests = jQuery.parseJSON(tm.SubQuests);
				var html = "<input type='hidden' id='index' value='"+index+"'>";
				Common.topicInfo.countTopic = subQuests.length;
				for(var i=0;i<subQuests.length;i++){
					html = html +"<h4 class='sub-titleh2'>"+(i+1)+"."+subQuests[i].QuestContentHtml+"</h4>";
					var qoptjson = jQuery.parseJSON(subQuests[i].Qoptjson);
					for(var k=0;k<qoptjson.length;k++){
						html =html+"<label class='answer'>";
						html =html+"<input type='radio' name='"+subQuests[i].Id+"' answer='"+subQuests[i].CorrectAnswer.substring(0,1)+"' value='"+qoptjson[k].Key.substring(0,1)+"'/>"+qoptjson[k].Key+":"+qoptjson[k].Value+"";
						html =html+"</label>";
					}
				}
				$("#tmAnswerHtml").html(html);
                Common.topicInfo.subjectId = tm.Qid;
                Common.topicInfo.label = tm.label;
        		Common.topicInfo.vlink = tm.Vlink;
        		Common.topicInfo.isnew = tm.isnew;
			}else{
				$("#tmHtml").html(tm.Qtxt);
				var html = "<input type='hidden' id='index' value='"+index+"'>";
				Common.topicInfo.countTopic = 1;
				try {
					var qopt = jQuery.parseJSON(tm.Qopt);
					for(var k=0;k<qopt.length;k++){
						html =html+"<label class='answer'>";
						html =html+"<input type='radio' name='answer' answer='"+tm.Qok.substring(0,1)+"'value='"+qopt[k].Key.substring(0,1)+"' />"+qopt[k].Key+":"+qopt[k].Value+"";
						html =html+"</label>";
					}
				} catch (e) {
					
				}
				$("#tmAnswerHtml").html(html);
				Common.topicInfo.subjectId = tm.Qid;
				Common.topicInfo.label = tm.label;
				Common.topicInfo.vlink = tm.Vlink;
	      		Common.topicInfo.isnew = tm.isnew;
			}
		}else{
			var url = web_path + "appLogin/topicover.html";
			Common.changeURL(url);
            return false;   
		}
	};
	var _showErrorTopicDetail = function(index){
		var size = Common.topicCategory.topicData.length;
		if(index<size){
			var tm = Common.topicCategory.topicData[index];
			if(tm.Xx==1){//大小题
				$("#tmHtml").html(tm.Qtxt);
				var subQuests = jQuery.parseJSON(tm.SubQuests);
				var html = "<input type='hidden' id='index' value='"+index+"'>";
				Common.topicInfo.countTopic = subQuests.length;
				for(var i=0;i<subQuests.length;i++){
					html = html +"<h4 class='sub-titleh2'>"+(i+1)+"."+subQuests[i].QuestContentHtml+"</h4>";
					var qoptjson = jQuery.parseJSON(subQuests[i].Qoptjson);
					for(var k=0;k<qoptjson.length;k++){
						if(subQuests[i].CorrectAnswer==qoptjson[k].Key){
							html =html+"<label class='answer sel'>";
							html =html+qoptjson[k].Key+":"+qoptjson[k].Value+"";
							html =html+"</label>";
						}else{
							html =html+"<label class='answer'>";
							html =html+qoptjson[k].Key+":"+qoptjson[k].Value+"";
							html =html+"</label>";
						}
					}
				}
				$("#tmAnswerHtml").html(html);
				Common.topicInfo.subjectId = tm.Qid;
				Common.topicInfo.label = tm.label;
				Common.topicInfo.vlink = tm.Vlink;
	      		Common.topicInfo.isnew = tm.isNew;
			}else{
				$("#tmHtml").html(tm.Qtxt);
				var html = "<input type='hidden' id='index' value='"+index+"'>";
				Common.topicInfo.countTopic = 1;
				try {
					var qopt = jQuery.parseJSON(tm.Qopt);
					for(var k=0;k<qopt.length;k++){
						if(tm.Qok==qopt[k].Key){
							html =html+"<label class='answer sel'>";
							html =html+qopt[k].Key+":"+qopt[k].Value+"";
							html =html+"</label>";
						}else{
							html =html+"<label class='answer'>";
							html =html+qopt[k].Key+":"+qopt[k].Value+"";
							html =html+"</label>";
						}
					}
				} catch (e) {
					
				}
				$("#tmAnswerHtml").html(html);
				Common.topicInfo.subjectId = tm.Qid;
				Common.topicInfo.label = tm.label;
				Common.topicInfo.vlink = tm.Vlink;
	      		Common.topicInfo.isnew = tm.isNew;
			}
		}else{
			var url = web_path + "appLogin/topicover.html";
			Common.changeURL(url);
			return false;   
		}
	};
	//初始化筛选条件
	var _initSearchTopicCategory = function(){
		var url = web_path + "appBrush/getTopicCategory.html";
		$.ajax({
			url : url,
			type : "post",
			data : {},
			beforeSend:function(XMLHttpRequest){
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
				if(data.length>0){
					Common.topicCategory.data =data;
					var html  = " <li class='condition-list' onclick=''><button class='active'>全部</button></li>";
					for(var i=0;i<data.length;i++){
						if(data[i].label=="高中"){
								var children = jQuery.parseJSON(data[i].children);
								for(var k=0;k<children.length;k++){
									html = html +"<li class='condition-list' name="+children[k].label+" onclick='Brush.tmDetail("+children[k].isleaf+","+children[k].id+",this)'>";
									html = html +"<button>"+children[k].label+"</button></li>";
								}
							}
					}
					$("#topicCategoryList").html(html);
				}
			}
		});
	};

	//答题正确显示正确的页面
	var _showRightPage = function(type,score){
		var html ="<section class='go-on wrapper'><div class='correct'><img src='"+web_path+"resources/app/common/images/pra-correct.png'/></div><h3>您都答对了，真棒！</h3><p><span>本题共有"+Common.topicInfo.totalCount+"道小题<span><b>您全答对了,棒棒哒!获得积分"+score+"</b></p></div></section>";
		$("#topic_div").addClass("dis_none");
		$("#result_div").html(html);
		$("#result_div").removeClass("dis_none");
		$("#singleButton").addClass("dis_none");
		$("#doubleButton").removeClass("dis_none");
		var index = $("#index").val();
		var size = Common.topicCategory.topicData.length;
		if(index==(size-1)){
			var url = web_path + "appLogin/topicover.html";
			Common.changeURL(url);
			return false;   
		}
	};
	
	//答题错误显示错误的页面
	var _showErrorPage = function(rightTotal,type,score){
		var html ="<section class='go-on wrapper'><div><img src='"+web_path+"resources/app/common/images/pra-error.png'/></div><h3>继续努力，加油！</h3><p>"+Common.topicInfo.errorMsg+"</p>";
		if(rightTotal>0){
			html = html+"<p>您今天已答对了"+rightTotal+"道题,继续加油哦！获得积分"+score+"分</p></div>";
		}else{
			html = html+"<p>不要灰心，继续努力！获得积分"+score+"分</p></div>";
		}
		html = html+"</div></section>";
		if(type==1){
			$("#topic_div").addClass("dis_none");
			$("#result_div").html(html);
			$("#result_div").removeClass("dis_none");
			$("#singleButton").addClass("dis_none");
			$("#doubleButton").removeClass("dis_none");
		}else{
			$("#topic_div").addClass("dis_none");
			$("#result_div").html(html);
			$("#result_div").removeClass("dis_none");
			$("#singleButton").addClass("dis_none");
			$("#doubleButton").removeClass("dis_none");
		}
		var index = $("#index").val();
		var size = Common.topicCategory.topicData.length;
		if(index==(size-1)){
			var url = web_path + "appLogin/topicover.html";
			Common.changeURL(url);
			return false;   
		}
	};
	//答题错误显示错误的页面
	var _showExistPage = function(rightTotal,type){
		var html ="<section class='go-on wrapper'><div><img src='"+web_path+"resources/app/common/images/pra-error.png'/></div><h3>好遗憾,该题已经做过啦！</h3>";
		html = html+"</div></section>";
		if(type==1){
			$("#topic_div").addClass("dis_none");
			$("#result_div").html(html);
			$("#result_div").removeClass("dis_none");
			$("#singleButton").addClass("dis_none");
		}else{
			$("#topic_div").addClass("dis_none");
			$("#result_div").html(html);
			$("#result_div").removeClass("dis_none");
			$("#singleButton").addClass("dis_none");
		}
		$("#resultSubmit").addClass("dis_none");
		$(".go-top").addClass("dis_none");
		
	};
	
	//提交答题结果
	var _submitBrushResult = function(type){
		Common.topicInfo.paperid = $("#paperid").val();
		Common.topicInfo.courseid = $("#uuid").val();
		Common.topicInfo.imgname = $("#imgname").val();
		var url = web_path + "appBrush/submitBrushResult.html";
		$.ajax({
			url : url,
			type : "post",
			data :Common.topicInfo,
			beforeSend:function(XMLHttpRequest){
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
				var dataArray = data.split(",");
				if(dataArray[0]==0){
					if(Common.topicInfo.errorCount>0){
						_showErrorPage(Number(data),type,dataArray[1]);
					}else{
						_showRightPage(type,dataArray[1]);
					}
				}else if(data=='login'){
					$("#div_pop").removeClass("dis_none");
				}else if(data!='error'){
					if(Common.topicInfo.errorCount>0){
						_showErrorPage(Number(data),type,dataArray[1]);
					}else{
						_showRightPage(type,dataArray[1]);
					}
				}
			}
		});
	};
	
	//重新做题
	var _reSubmitResult =function(){
		$("#singleButton").removeClass("dis_none");
		$("#doubleButton").addClass("dis_none");
		$("#topic_div").removeClass("dis_none");
		$("#result_div").addClass("dis_none");
	};
	
	//错题列表
	var _initErrorTopicList = function(){
		var url = web_path + "appBrush/getErrorTopicCategory.html";
		$.ajax({
			url : url,
			type : "post",
			data : {},
			beforeSend:function(XMLHttpRequest){
				Common.showMask();
			},
			complete:function(XMLHttpRequest, textStatus){
				Common.hideMask();
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
    			var html  ="";
    			if(data.length>0){
    				for(var i=0;i<data.length;i++){
    					html = html+"<li name="+data[i].course_id+" onclick='Brush.getErrorTopicList(this);'><a><div class='wrap clearFix'><p class='fl xk-img-box'><img <img src='"+web_path+"resources/app/common/images/"+data[i].imgname+"' /></p></p>";
    					html = html+"<b class='fr'><img src='"+web_path+"resources/app/common/images/next.png' class='next_btn' /></b>";
    					html = html+"</div></a></li>";
    				}
    				$("#topicCategoryList").html(html);
    			}
			}
		});
	};
	//获取题目
	var _getErrorTopicList = function(obj){
		var url = web_path + "appBrush/getErrorTopicList.html?courseName="+$(obj).attr("name");
		Common.changeURL(url);
	};
	
	//获取错题
	var _initGetErrorTopicDetail =function(id,courseName){
		var ids="";
		$(".sub-list").each(function(){
		  if($(this).attr("id")!=id){
			  if(ids ==""){
				  ids = $(this).attr("id");
			  }else{
				  ids =ids +","+$(this).attr("id");
			  }
		  } 
		});
		var url = web_path + "appBrush/getErrorTopicDetailPage.html?id="+id+"&courseName="+courseName+"&ids="+ids;
		Common.changeURL(url);
	};
	
	//返回错题列表
	var _backErrorTopicList=function(){
		var url = web_path + "appBrush/getErrorTopicList.html?courseName="+Common.topicInfo.subjectName;
		Common.changeURL(url);
	};
	//返回错题列表
	var _videoPlay=function(){
		var url = web_path + "appBrush/videoPlay.html?vlink="+Common.topicInfo.vlink+"&id="+Common.topicInfo.subjectId;
		Common.changeURL(url);
	};
	return {
		brushSearch   : _brushSearch,
		tmDetail   :    _tmDetail,
		submitResult   : _submitResult,
		getTopicCategory :_getTopicCategory,
		initTopicDetail : _initTopicDetail,
		getBrushTmDetail :  _getBrushTmDetail,
		initSearchTopicCategory :_initSearchTopicCategory,
		submitBrushResult : _submitBrushResult,
		reSubmitResult   :_reSubmitResult,
		initErrorTopicList :_initErrorTopicList,
		getErrorTopicList :_getErrorTopicList,
		initErrorTopicDetail : _initErrorTopicDetail,
		initGetErrorTopicDetail :_initGetErrorTopicDetail,
		backErrorTopicList :_backErrorTopicList,
		showExistPage :_showExistPage,
		videoPlay :_videoPlay,
		showErrorTopicDetail : _showErrorTopicDetail
		
	};
	
})();