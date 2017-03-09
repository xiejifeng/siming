<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/plugins/customer/jsp/appcommon.jsp"%>
<!DOCTYPE>
<html>
<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
		<title>思明E学</title>
		<link href="<%=path%>resources/app/common/css/style.css" rel="stylesheet">
		<link href="<%=path%>resources/app/common/css/iosSelect.css" rel="stylesheet">
	</head>
	<body>
		<div class="title-box">
			<span class="g-left-icon">
			<img src="<%=path%>resources/app/common/imgs/back.png" onclick="Common.back(4,2);" />
		</span>
			<h1 class="title">个人中心</h1>
			<span class="g-right-icon">
					<button class="sign-btn" onclick="Personal.index();"><img style="width: 0.4rem;" src="<%=path%>resources/app/common/imgs/qd.png" /></button>
			</span>
		</div>
		<div class="g-form-group-box">
		  <input type="hidden" id ="status" value="${personalInfo.status}"/>
			<ul class="g-form-group">
				<li class="form-list">
					<label>真实姓名：</label>
					<input type="text" id="name" value="${personalInfo.name}"/>
				</li>
				<li class="form-list">
					<label>所在城市：</label>
					<div class="g-select-box">
					    <input type="hidden" id = "oldCity" value="${personalInfo.city}">
						<input type="hidden" name="bank_id1" id="bankId1" value="">
						<span id="showBank1" class="g-select">${personalInfo.cityname}</span>
					</div>
				</li>
				<li class="form-list">
					    <input type="hidden" id="oldtschool" value="${personalInfo.tschool}">
					<label>培训学校：</label>
					<div class="g-select-box" id="div_school">
						<input type="hidden" name="bank_id2" id="bankId2" value="">
						<span id="showBank2" class="g-select">${personalInfo.tschoolname}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="g-btn-bottom-box">
			<c:choose>    
			   <c:when test="${LOGIN_USER_INFO.status=='1701'}">
			      <button class="sure-btn" onclick="Personal.modifyTeacherInfo();">提交</button>
			   </c:when>  
			</c:choose> 
		</div>
	<!--加载层组件-->
	<div id = "mask" class="g-loading-bg-box dis_none">
		<div class="g-loading-box">
			<div class="typing_loader"></div>
			<p class="loading-text">努力加载中</p>
		</div>
	</div>
	</body>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/width.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/btn.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/iosSelect.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/iscroll.js"></script>
	<script type="text/javascript">
		var showBankDom1 = document.querySelector('#showBank1');
		var bankIdDom1 = document.querySelector('#bankId1');
		Common.getDictionaryByCode("18",function(data){
		showBankDom1.addEventListener('click', function() {
			var bankId1 = showBankDom1.dataset['id'];
			var bankName1 = showBankDom1.dataset['value'];
			var bankSelect1 = new IosSelect(1, [data], {
				title: '城市选择',
				itemHeight: 35,
				oneLevelId: bankId1,
				callback: function(selectOneObj) {
					Common.userInfo.city= selectOneObj.id;
					bankIdDom1.value = selectOneObj.id;
					showBankDom1.innerHTML = selectOneObj.value;
					showBankDom1.dataset['id'] = selectOneObj.id;
					showBankDom1.dataset['value'] = selectOneObj.value;
					$("#showBank2").remove();
					var html ="<span id='showBank2' placeholder='选填' class='g-select'></span>";
					$("#div_school").append(html);
					var showBankDom2 = document.querySelector('#showBank2');
					var bankIdDom2 = document.querySelector('#bankId2');
					Common.getSchoolInfo("",selectOneObj.id,function(data){
					showBankDom2.addEventListener('click', function() {
						var bankId2 = showBankDom2.dataset['id'];
						var bankName2 = showBankDom2.dataset['value'];
						var bankSelect2 = new IosSelect(1, [data], {
							title: '培训学校',
							itemHeight: 35,
							oneLevelId: bankId2,
							callback: function(selectOneObj) {
								Common.userInfo.tschool= selectOneObj.id;
								bankIdDom2.value = selectOneObj.id;
								showBankDom2.innerHTML = selectOneObj.value;
								showBankDom2.dataset['id'] = selectOneObj.id;
								showBankDom2.dataset['value'] = selectOneObj.value;
							}
						});
					});
				});
				}
			});
		});
	 });

	</script>
<script type="text/javascript">
	$(document).ready(function(){ 
		var status = $("#status").val();
		if("1702"==status){
			$("li").each(function(){
				$(this).css("pointer-events","none");
			});
		}
		
		var oldCity =$("#oldCity").val();
		var showBankDom2 = document.querySelector('#showBank2');
		var bankIdDom2 = document.querySelector('#bankId2');
		Common.getSchoolInfo("",oldCity,function(data){
		showBankDom2.addEventListener('click', function() {
			var bankId2 = showBankDom2.dataset['id'];
			var bankName2 = showBankDom2.dataset['value'];
			var bankSelect2 = new IosSelect(1, [data], {
				title: '培训学校',
				itemHeight: 35,
				oneLevelId: bankId2,
				callback: function(selectOneObj) {
					if(selectOneObj.value){
					Common.userInfo.tschool= selectOneObj.id;
					bankIdDom2.value = selectOneObj.id;
					showBankDom2.innerHTML = selectOneObj.value;
					showBankDom2.dataset['id'] = selectOneObj.id;
					showBankDom2.dataset['value'] = selectOneObj.value;
					}else{
						showBankDom4.dataset['id'] ="";
						showBankDom4.dataset['value'] = "";
					}
				}
			});
		});
    });	
		
	});
</script>
</html>