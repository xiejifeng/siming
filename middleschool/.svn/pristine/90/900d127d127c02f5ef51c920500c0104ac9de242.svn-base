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
	</head>
	<body>
		<div class="title-box">
			<span class="g-left-icon">
				<img src="<%=path%>resources/app/common/imgs/back.png" onclick="Common.back(2,2);"/>
			</span>
			<h1 class="title">教师证件</h1>
			<span class="g-right-icon">
					<button class="sign-btn" onclick="Personal.index();"><img style="width: 0.4rem;" src="<%=path%>resources/app/common/imgs/qd.png" /></button>
			</span>
		</div>
		<div class="g-form-group-box">
			<div class="g-user-box">
				<div class="g-user-img-box">
					<img id ="pre_user_img" src="${LOGIN_USER_INFO.img}" onclick="user_img.click();"/>
					<div style="display: none;">
					   <input type="file" id="user_img" accept="image/*;capture=camera" onchange="Personal.modifyUserImg(this);">
					</div>
				</div>
				<div class="g-user-message-box">
				    <input type="hidden" id="status" value="${LOGIN_USER_INFO.status}">
					<span class="user-name">${LOGIN_USER_INFO.name}</span>
					<span class="user-status">
					<c:choose>    
					   <c:when test="${LOGIN_USER_INFO.status=='1701'}">
					        未认证    
					   </c:when>  
					   <c:otherwise>
					        已认证     
					   </c:otherwise>  
					</c:choose>  
					    </span>
					<span class="user-integral">M币：${LOGIN_USER_INFO.score}</span>
				</div>
			</div>
			<ul class="g-user-group">
				<li class="user-list"  onclick="Personal.teacherInfo();">
					<img src="<%=path%>resources/app/common/imgs/x-icon1.png" class="icon-img" />
					<span class="user-title">个人信息</span>
					<img src="<%=path%>resources/app/common/imgs/right.png" class="right-arrow" />
				</li>
				<li class="user-list"  onclick="Personal.studentValidate();">
					<img src="<%=path%>resources/app/common/imgs/x-icon2.png" class="icon-img" />
					<span class="user-title">学生验证</span>
					<img src="<%=path%>resources/app/common/imgs/right.png" class="right-arrow" />
				</li>
			  	<li class="user-list" onclick="Personal.signOut();">
					<img src="<%=path%>resources/app/common/imgs/shutdown.png" class="icon-img" />
					<span class="user-title">退出账号</span>
					<img src="<%=path%>resources/app/common/imgs/right.png" class="right-arrow" />
				</li>
			</ul>
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
</html>