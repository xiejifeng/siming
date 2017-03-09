/**
 * 登录
 */
CommonUtils.regNamespace("Personal");

Personal = (function() {

	// 今日课堂
	var _todayClass = function() {
		var url = web_path + "appStudent/todayClass.html";
		Common.changeURL(url);
	};
	// 首页
	var _index = function() {
		var url = web_path + "appLogin/index.html";
		Common.changeURL(url);
	};
	// 流量兑换引导页
	var _introduceflow = function() {
		var flag = Common.checkCurrentUserIsLogin();
		if(!flag){
			$("#div_pop").removeClass("dis-none");
			return;
		}
		var url = web_path + "appStudent/introduceflow.html";
		Common.changeURL(url);
	};
	// 我要刷题
	var _brushExercises = function() {
		var flag = Common.checkCurrentUserIsLogin();
		if(!flag){
			$("#div_pop").removeClass("dis-none");
			return;
		}
		var url = web_path + "appStudent/brushExercises.html";
		Common.changeURL(url);
	};
	
	// 错里回顾
	var _brushErrorExercises = function() {
		var url = web_path + "appStudent/brushExercises.html?type=error";
		Common.changeURL(url);
	};
	// 今日榜单
	var _todatOrder = function() {
//		var flag = Common.checkCurrentUserIsLogin();
//		if(!flag){
//			$("#div_pop").removeClass("dis-none");
//			return;
//		}
		var url = web_path + "appStudent/personal.html";
		Common.changeURL(url);
	};

	// 流量兑换 --学生
	var _flowExchange = function(url) {
		_scoreExchange();

	};
	// 个人中心 --老师
	var _personal = function(url) {
		var url = web_path + "appTeacher/personal.html";
		Common.changeURL(url);
	};

	// 个人信息--学生
	var _studentInfo = function() {
		var url = web_path + "appStudent/userInfo.html";
		Common.changeURL(url);
	};
	// 视频直播
	var _liveVideo = function(actId, name, type,time) {
		var url = web_path + "appStudent/liveVideo.html?courseId=" + actId
				+ "&courseName=" + name + "&type=" + type+"&time="+time;
		Common.changeURL(url);
	};
	// 刷题排行--学生
	var _brushOrder = function() {
		var url = web_path + "appStudent/brushOrder.html";
		Common.changeURL(url);
	};
	// 学生签到--学生
	var _sign = function() {
		var url = web_path + "appStudent/sign.html";
		Common.changeURL(url);
	};
	// 问题反馈--学生
	var _feedback = function() {
		var url = web_path + "appStudent/feedback.html";
		Common.changeURL(url);
	};
	// 积分兑换
	var _scoreExchange = function() {
		var url = web_path + "appScore/getProducts.html";
		Common.changeURL(url);
	};
	// 版本信息
	var _train = function() {
		var url = web_path + "schart/getIntroductionById.html";
		Common.changeURL(url);
	};
	// 学生验证--学生
	var _studentValidate = function() {
		var status = $("#status").val();
		if (status == 1701) {
			Common.showMessage("您当前未通过教师资格审核,无法审核", "warn");
			return;
		}
		var url = web_path + "appTeacher/studentValidate.html";
		Common.changeURL(url);
	};

	// 个人信息--老师
	var _teacherInfo = function() {
		var url = web_path + "appTeacher/userInfo.html";
		Common.changeURL(url);
	};

	// 问题反馈
	var _submitFeedBack = function() {
		var context = $("#feedbackContext").val();
		if (!context) {
			Common.showMessage("反馈内容不能为空哦!", "warn");
			return;
		}
		var url = web_path + "appStudent/submitFeedBack.html";
		$
				.ajax({
					url : url,
					type : "post",
					data : {
						"context" : context
					},
					beforeSend : function(XMLHttpRequest) {
						Common.showMask();
					},
					complete : function(XMLHttpRequest, textStatus) {
						
					},
					success : function(response) {
						var data = jQuery.parseJSON(response).data;
						if ("0" == data.resultCode) {
							Common.showMessage(data.resultMsg, "succ");
							window.setTimeout(
											'Common.redirectURL(web_path + "appStudent/personal.html")',
											500);
						} else {
							Common.showMessage(data.resultMsg, "error");
						}
					}
				});
	};

	// 修改个人信息
	var _modifyPersonalInfo = function() {
		// 昵称
		var nickname = $("#nickname").val();
		if (!nickname) {
			Common.showMessage("昵称不能为空", "warn");
			return;
		}
		Common.userInfo.nickname = nickname;
		// 真实姓名
		var name = $("#realname").val();
		if (!name) {
			Common.showMessage("真实姓名不能为空", "warn");
			return;
		}
		Common.userInfo.name = name;
		var area = $("#select_area").val();
		// 城市
		if (!area) {
			Common.showMessage("区域不能为空", "warn");
			Common.userInfo.area = "";
			return;
		}else{
			Common.userInfo.area = area;
		}
		var school = $("#select_school").val();
		// 学校
		if (!school) {
			Common.userInfo.school = "";
			Common.showMessage("学校不能为空", "warn");
			return;
		} else {
			Common.userInfo.school = school;
		}

		var grade = $("#select_grade").val();
		// 年级
		if (!grade) {
			Common.userInfo.grade = "";
			Common.showMessage("年级不能为空", "warn");
			return;
		} else {
			Common.userInfo.grade = grade;
		}
		
		//收货地址
		Common.userInfo.address = $("#address").val();
		
		var url = web_path + "appStudent/modifyPersonalInfo.html";
		$
				.ajax({
					url : url,
					type : "post",
					data : Common.userInfo,
					beforeSend : function(XMLHttpRequest) {
						Common.showMask();
					},
					complete : function(XMLHttpRequest, textStatus) {
						Common.hideMask();
					},
					success : function(response) {
						var data = jQuery.parseJSON(response).data;
						if (data.resultCode == "0") {
							Common.showMessage(data.resultMsg, "succ");
							window
									.setTimeout(
											'Common.redirectURL(web_path + "appStudent/personal.html")',
											500);
						} else {
							Common.showMessage("系统异常,更新个人信息失败", "error");
						}
					}
				});

	};
	// 修改个人信息
	var _modifyTeacherInfo = function() {
		// 真实姓名
		var name = $("#name").val().trim();
		if (!name) {
			Common.showMessage("真实姓名不能为空", "warn");
			return;
		}
		Common.userInfo.name = name;
		// 城市
		if (!Common.userInfo.city) {
			Common.userInfo.city = $("#oldCity").val();
		}

		var oldtschool = $("#oldtschool").val();
		// 培训学校
		if (!Common.userInfo.tschool) {
			if (oldtschool) {
				Common.userInfo.tschool = oldtschool;
			}
		}

		var oldArttype = $("#oldArttype").val();
		// 培训学校
		if (!Common.userInfo.arttype) {
			if (oldArttype) {
				Common.userInfo.arttype = oldArttype;
			}
		}

		var url = web_path + "appStudent/modifyPersonalInfo.html";
		$
				.ajax({
					url : url,
					type : "post",
					data : Common.userInfo,
					beforeSend : function(XMLHttpRequest) {
						Common.showMask();
					},
					complete : function(XMLHttpRequest, textStatus) {
						Common.hideMask();
					},
					success : function(response) {
						var data = jQuery.parseJSON(response).data;
						if (data.resultCode == "0") {
							Common.showMessage(data.resultMsg, "succ");
							window
									.setTimeout(
											'Common.redirectURL(web_path + "appTeacher/personal.html")',
											2000);
						} else {
							Common.showMessage("系统异常,更新个人信息失败", "error");
						}
					}
				});

	};
	// 老师审核学生
	var _passCheckStudentInfo = function() {
		var userId = "";
		$('input:checkbox:checked').each(function() {
			if (userId == "") {
				userId = userId + $(this).attr("id");
			} else {
				userId = userId + "," + $(this).attr("id");
			}
		});
		if (!userId) {
			Common.showMessage("请选择待审核的学生条目", "warn");
			return;
		}
		var url = web_path + "appTeacher/doPassCheckStuInfo.html";
		$.callServiceAsJsonGet(
						url,
						{
							"userIds" : userId
						},
						{
							"before" : function() {
								Common.showMask();
							},
							"always" : function() {
								Common.hideMask();
							},
							"done" : function(response) {
								var data = response.data;
								if ("0" == data.resultCode) {
									Common.showMessage(data.resultMsg, "succ");
									window
											.setTimeout(
													'Common.redirectURL(web_path + "appTeacher/personal.html")',
													2000);
								} else {
									Common.showMessage(data.resultMsg, "error");
								}
							},
							fail : function(response) {
								Common.hideMask();
							}
						});
	};

	// 签到
	var _submitSign = function(id, name) {
		var flag = Common.checkCurrentUserIsLogin();
		if(!flag){
//            $("#msg").html("您当前还未登陆,无法签到");
			if($("#div_pop").hasClass("dis-none")){
				$("#div_pop").removeClass("dis-none");
			}
			return;
		}
		var url = web_path + "appStudent/submitSign.html";
		$.callServiceAsJsonGet(url, {
			"courseId" : id,
			"courseName" : name
		}, {
			"before" : function() {
				Common.showMask();
			},
			"always" : function() {
				Common.hideMask();
			},
			"done" : function(response) {
				var data = response.data;
				if ("0" == data.resultCode) {
					Common.showMessage(data.resultMsg, "succ");
				} else {
					Common.showMessage(data.resultMsg, "error");
				}
			},
			fail : function(response) {
				Common.hideMask();
			}
		});
	};

	// 积分兑换
	var _submitScoreExchange = function(info) {
		var checkStatus= $("#checkStatus").val();
		if(checkStatus=='1701'){
			$("#div_information").removeClass("dis-none");
			return;
		}
		var url = web_path + "appStudent/submitScoreExchange.html";
		$.callServiceAsJsonGet(url, {
			"info" : info
		}, {
			"before" : function() {
				Common.showMask();
			},
			"always" : function() {
				Common.hideMask();
			},
			"done" : function(response) {
				var data = response.data;
				if ("0" == data) {
					Common.showMessage("积分兑换成功", "succ");
				} else if ("1" == data) {
					Common.showMessage("积分兑换失败", "error");
				} else if ("3" == data) {
					$("#div_information").removeClass("dis-none");
				} else {
					$("#div_score").removeClass("dis-none");
				}
			},
			fail : function(response) {
				Common.hideMask();
			}
		});
	};

	// 初始化直播
	var _initLive = function() {
		var player = new CloudLivePlayer();
		var activityId = $("#activityId").val();
		player.init({
			activityId : activityId
		});
	};
	/**
	 * 注销
	 */
	var _signOut = function() {
		if(!$("#div_pop").hasClass("dis-none")){
			$("#div_pop").addClass("dis-none");
		}
		Common.redirectURL(web_path + "appLogin/cancel.html");
	};

	/**
	 * html5 获取图片的base64 字符串
	 */
	var _getBase64Image = function(obj) {
		var file = obj.files[0];
		var Orientation = null;  
		// 判断类型是不是图片
		if (!/image\/\w+/.test(file.type)) {
			Common.showMessage("请确保文件为图像类型", "warn");
			return false;
		}
	    //获取照片方向角属性，用户旋转控制  
        EXIF.getData(file, function() {  
           // alert(EXIF.pretty(this));  
            EXIF.getAllTags(this);   
            //alert(EXIF.getTag(this, 'Orientation'));   
            Orientation = EXIF.getTag(this, 'Orientation');  
            //return;  
        });
        
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(e) {
			var result = this.result;
			var img = new Image();
			img.src = result;
			img.onload = function() {  
                var expectWidth = this.naturalWidth;  
                var expectHeight = this.naturalHeight;  
                if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {  
                    expectWidth = 800;  
                    expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;  
                } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {  
                    expectHeight = 1200;  
                    expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;  
                }  
                var canvas = document.createElement("canvas");  
                var ctx = canvas.getContext("2d");  
                canvas.width = expectWidth;  
                canvas.height = expectHeight;  
                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);  
                var base64 = null;  
                //修复ios  
                if (navigator.userAgent.match(/iphone/i)) {  
//                    console.log('iphone');  
//                    alert(expectWidth + ',' + expectHeight);  
                    //如果方向角不为1，都需要进行旋转 added by lzk  
                    if(Orientation != "" && Orientation != 1){  
//                        alert('旋转处理');  
                        switch(Orientation){  
                            case 6://需要顺时针（向左）90度旋转  
//                                alert('需要顺时针（向左）90度旋转');  
                                _rotateImg(this,'left',canvas);  
                                break;  
                            case 8://需要逆时针（向右）90度旋转  
//                                alert('需要顺时针（向右）90度旋转');  
                                _rotateImg(this,'right',canvas);  
                                break;  
                            case 3://需要180度旋转  
//                                alert('需要180度旋转');  
                                _rotateImg(this,'right',canvas);//转两次  
                                _rotateImg(this,'right',canvas);  
                                break;  
                        }         
                    }  
                    base64 = canvas.toDataURL("image/jpeg", 0.8);  
                }else if (navigator.userAgent.match(/Android/i)) {// 修复android  
                	   base64 = canvas.toDataURL("image/jpeg", 0.8); 
//                    var encoder = new JPEGEncoder();  
//                    base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);  
                }else{  
                    if(Orientation != "" && Orientation != 1){  
//                        alert('旋转处理');  
                        switch(Orientation){  
                            case 6://需要顺时针（向左）90度旋转  
//                                alert('需要顺时针（向左）90度旋转');  
                                _rotateImg(this,'left',canvas);  
                                break;  
                            case 8://需要逆时针（向右）90度旋转  
//                                alert('需要顺时针（向右）90度旋转');  
                                _rotateImg(this,'right',canvas);  
                                break;  
                            case 3://需要180度旋转  
//                                alert('需要180度旋转');  
                                _rotateImg(this,'right',canvas);//转两次  
                                _rotateImg(this,'right',canvas);  
                                break;  
                        }         
                    }  
                      
                    base64 = canvas.toDataURL("image/jpeg", 0.8);  
                }  
        		var image = new Image();
        		image.src = base64;
        		// 图片加载完毕之后进行压缩，然后上传
        		if (image.complete) {
        			callback();
        		} else {
        			image.onload = callback;
        		}
        		function callback() {
        			var data = _compress(image);
        			$("#pre_user_img").attr("src",data);
        			image = null;
        		}

            };  
		};
	};

	/**
	 * 查询积分记录
	 */
	var _getScoreRecord = function() {
		var url = web_path + "appStudent/getScoreRecord.html";
		Common.changeURL(url);
	};

	// 上传图片
	var _modifyUserImg = function(obj) {
		var file = obj.files[0];
		var Orientation = null;  
		// 判断类型是不是图片
		if (!/image\/\w+/.test(file.type)) {
			Common.showMessage("请确保文件为图像类型", "warn");
			return false;
		}
	    //获取照片方向角属性，用户旋转控制  
        EXIF.getData(file, function() {  
           // alert(EXIF.pretty(this));  
            EXIF.getAllTags(this);   
            //alert(EXIF.getTag(this, 'Orientation'));   
            Orientation = EXIF.getTag(this, 'Orientation');  
            //return;  
        });
        
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(e) {
			var result = this.result;
			var img = new Image();
			img.src = result;
			img.onload = function() {  
                var expectWidth = this.naturalWidth;  
                var expectHeight = this.naturalHeight;  
                if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {  
                    expectWidth = 800;  
                    expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;  
                } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {  
                    expectHeight = 1200;  
                    expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;  
                }  
                var canvas = document.createElement("canvas");  
                var ctx = canvas.getContext("2d");  
                canvas.width = expectWidth;  
                canvas.height = expectHeight;  
                ctx.drawImage(this, 0, 0, expectWidth, expectHeight);  
                var base64 = null;  
                //修复ios  
                if (navigator.userAgent.match(/iphone/i)) {  
                    console.log('iphone');  
//                    alert(expectWidth + ',' + expectHeight);  
                    //如果方向角不为1，都需要进行旋转 added by lzk  
                    if(Orientation != "" && Orientation != 1){  
//                        alert('旋转处理');  
                        switch(Orientation){  
                            case 6://需要顺时针（向左）90度旋转  
//                                alert('需要顺时针（向左）90度旋转');  
                                _rotateImg(this,'left',canvas);  
                                break;  
                            case 8://需要逆时针（向右）90度旋转  
//                                alert('需要顺时针（向右）90度旋转');  
                                _rotateImg(this,'right',canvas);  
                                break;  
                            case 3://需要180度旋转  
//                                alert('需要180度旋转');  
                                _rotateImg(this,'right',canvas);//转两次  
                                _rotateImg(this,'right',canvas);  
                                break;  
                        }         
                    }  
                    base64 = canvas.toDataURL("image/jpeg", 0.8);  
                }else if (navigator.userAgent.match(/Android/i)) {// 修复android  
//                    var encoder = new JPEGEncoder();  
                    base64 = canvas.toDataURL("image/jpeg", 0.8); 
                }else{  
                    if(Orientation != "" && Orientation != 1){  
                        //alert('旋转处理');  
                        switch(Orientation){  
                            case 6://需要顺时针（向左）90度旋转  
//                                alert('需要顺时针（向左）90度旋转');  
                                _rotateImg(this,'left',canvas);  
                                break;  
                            case 8://需要逆时针（向右）90度旋转  
//                                alert('需要顺时针（向右）90度旋转');  
                                _rotateImg(this,'right',canvas);  
                                break;  
                            case 3://需要180度旋转  
//                                alert('需要180度旋转');  
                                _rotateImg(this,'right',canvas);//转两次  
                                _rotateImg(this,'right',canvas);  
                                break;  
                        }         
                    }  
                      
                    base64 = canvas.toDataURL("image/jpeg", 0.8);  
                }  
        		var image = new Image();
        		image.src = base64;
        		// 图片加载完毕之后进行压缩，然后上传
        		if (image.complete) {
        			callback();
        		} else {
        			image.onload = callback;
        		}
        		function callback() {
        			var data = _compress(image);
        			$("#pre_user_img").attr("src",data);
        			image = null;
        			$.ajax({
        				url : web_path + "appStudent/modifyUserImg.html",
        				type : "post",
        				data : {
        					"img" : data
        				},
        				beforeSend : function(XMLHttpRequest) {
        				},
        				complete : function(XMLHttpRequest, textStatus) {
        				},
        				success : function(response) {
        					var data = jQuery.parseJSON(response).data;
        					if (data.code == "0") {
        						$("#pre_user_img").attr("src", data.msg);
        					} else {
        						Common.showMessage("更新头像失败", "error");
        					}
        				}
        			});
        		}

            };  

		};
	};
	// 压缩图片

	var _compress = function(img) {
		// 用于压缩图片的canvas
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext('2d');
		// 瓦片canvas
		var tCanvas = document.createElement("canvas");
		var tctx = tCanvas.getContext("2d");
		var initSize = img.src.length;
		var width = img.width;
		var height = img.height;
		// 如果图片大于四百万像素，计算压缩比并将大小压至400万以下
		var ratio;
		if ((ratio = width * height / 4000000) > 1) {
			ratio = Math.sqrt(ratio);
			width /= ratio;
			height /= ratio;
		} else {
			ratio = 1;
		}
		canvas.width = width;
		canvas.height = height;
		// 铺底色
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		// 如果图片像素大于100万则使用瓦片绘制
		var count;
		if ((count = width * height / 1000000) > 1) {
			count = ~~(Math.sqrt(count) + 1); // 计算要分成多少块瓦片
			// 计算每块瓦片的宽和高
			var nw = ~~(width / count);
			var nh = ~~(height / count);
			tCanvas.width = nw;
			tCanvas.height = nh;
			for ( var i = 0; i < count; i++) {
				for ( var j = 0; j < count; j++) {
					tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw
							* ratio, nh * ratio, 0, 0, nw, nh);
					ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
				}
			}
		} else {
			ctx.drawImage(img, 0, 0, width, height);
		}
		// 进行最小压缩
		var ndata = canvas.toDataURL('image/jpeg', 0.1);
		tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
		return ndata;
	};

	//图片旋转
	var _rotateImg = function (img, direction,canvas) {    
        //最小与最大旋转方向，图片旋转4次后回到原方向    
        var min_step = 0;    
        var max_step = 3;    
        //var img = document.getElementById(pid);    
        if (img == null)return;    
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错    
        var height = img.height;    
        var width = img.width;    
        //var step = img.getAttribute('step');    
        var step = 2;    
        if (step == null) {    
            step = min_step;    
        }    
        if (direction == 'right') {    
            step++;    
            //旋转到原位置，即超过最大值    
            step > max_step && (step = min_step);    
        } else {    
            step--;    
            step < min_step && (step = max_step);    
        }    
        var degree = step * 90 * Math.PI / 180;    
        var ctx = canvas.getContext('2d');    
        switch (step) {    
            case 0:    
                canvas.width = width;    
                canvas.height = height;    
                ctx.drawImage(img, 0, 0);    
                break;    
            case 1:    
                canvas.width = height;    
                canvas.height = width;    
                ctx.rotate(degree);    
                ctx.drawImage(img, 0, -height);    
                break;    
            case 2:    
                canvas.width = width;    
                canvas.height = height;    
                ctx.rotate(degree);    
                ctx.drawImage(img, -width, -height);    
                break;    
            case 3:    
                canvas.width = height;    
                canvas.height = width;    
                ctx.rotate(degree);    
                ctx.drawImage(img, -width, 0);    
                break;    
        }    
    };
    /**
     * 查看评论
     */
    var _viewComment =function(){
    	$(".chat-tab1-box").addClass("dis-none");
    	$(".chat-tab2-box").removeClass("dis-none");
    };
    /**
     * 回聊天室
     */
    var _backChatRoom =function(){
    	$(".chat-tab1-box").removeClass("dis-none");
    	$(".chat-tab2-box").addClass("dis-none");
    };
    /**
     * 发送评论
     */
    var _sendComment =function(){
        var message = $("#messageContent").val();
        var id = $("#topicId").val();
        var user_name =$("#user_id").val();
        var imgurl =$("#imgurl").val();
        if(!message){
        	return;
        }
		$.ajax({
			url : web_path + "appStudent/sendComment.html",
			type : "post",
			data : {
				"message" : message,
				"uv":id
			},
			beforeSend : function(XMLHttpRequest) {
			},
			complete : function(XMLHttpRequest, textStatus) {
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
				if(data.code==0){
					var html ="<li><p>";
						html=html+"<span><img src='"+imgurl+"' class='user-img'/></span>";
						html=html+"<span class='user-name'>"+user_name+"</span>";
						html=html+"<span class='time fr'>"+Common.getNowFormatDate()+"</span>";
						html=html+"</p>";
						html=html+"<p class='pl'>"+message+"</p>";
						html=html+"</li>";
						if( $("#ul_messageList").children().length==0){
							$("#ul_messageList").append(html);
						}else{
							$("#ul_messageList").html(html+$("#ul_messageList").html());
						}
				      $("#messageContent").val("");
				}
			}
		});
    };
    //积分不足
    var _scoreLessConfirm =function(){
    	$("#div_score").addClass("dis-none");
    	if(!$("#div_information").hasClass("dis-none")){
    		$("#div_information").addClass("dis-none");
    	}
    };
    var _startOpenWin =function(){
		//判断是否登录未登录2分钟后弹出登录按钮

		var flag = Common.checkCurrentUserIsLogin();
		if(!flag){
			setInterval(function(){
				if($("#div_pop").hasClass("dis-none")){
					$("#div_pop").removeClass("dis-none");
					//$("#msg").html("还没登录哦,赶紧去登录吧！");
				}
			 }, 1000*120); //一秒执行一次
		
		}
		if(!$("#div_pop").hasClass("dis-none")){
			$("#div_pop").addClass("dis-none");
			//$("#msg").html("还没登录哦,赶紧去登录吧！");
		}
    };
    
    var _advertisementImg_click= function(urls){
    	if(urls){
    		var url = web_path + "appLogin/advertisementPage.html?url="+urls;
    		Common.changeURL(url);
    	}
    };
	//初始化评论列表
	var _initMessageList = function(){
		var courseId = $("#topicId").val();
		$.ajax({
			url : web_path + "appStudent/getMessageList.html",
			type : "post",
			data : {"uv":courseId},
			beforeSend : function(XMLHttpRequest) {
			},
			complete : function(XMLHttpRequest, textStatus) {
			},
			success : function(response) {
				var data = jQuery.parseJSON(response).data;
                for(var i=0;i<data.length;i++){
                	var html="";
                	html ="<li><p>";
					html=html+"<span><img src='"+data[i].img+"' class='user-img'/></span>";
					html=html+"<span class='user-name'>"+data[i].nickname+"</span>";
					html=html+"<span class='time fr'>"+data[i].createtime+"</span>";
					html=html+"</p>";
					html=html+"<p  class='pl'>"+data[i].message+"</p>";
					html=html+"</li>";
					$("#ul_messageList").append(html);
                }
			}
		});
	};
	return {
		flowExchange : _flowExchange,
		personal : _personal,
		studentInfo : _studentInfo,
		teacherInfo : _teacherInfo,
		scoreExchange : _scoreExchange,
		brushOrder : _brushOrder,
		sign : _sign,
		feedback : _feedback,
		train : _train,
		studentValidate : _studentValidate,
		submitFeedBack : _submitFeedBack,
		modifyPersonalInfo : _modifyPersonalInfo,
		passCheckStudentInfo : _passCheckStudentInfo,
		todayClass : _todayClass,
		brushExercises : _brushExercises,
		todatOrder : _todatOrder,
		liveVideo : _liveVideo,
		submitSign : _submitSign,
		modifyTeacherInfo : _modifyTeacherInfo,
		submitScoreExchange : _submitScoreExchange,
		initLive : _initLive,
		signOut : _signOut,
		getBase64Image : _getBase64Image,
		getScoreRecord : _getScoreRecord,
		modifyUserImg : _modifyUserImg,
		brushErrorExercises : _brushErrorExercises,
		viewComment   : _viewComment,
		backChatRoom  : _backChatRoom,
		sendComment   : _sendComment,
		scoreLessConfirm : _scoreLessConfirm,
		index  : _index,
		introduceflow  :_introduceflow,
		startOpenWin  : _startOpenWin,
		initMessageList  : _initMessageList,
		advertisementImg_click :_advertisementImg_click
	};

})();