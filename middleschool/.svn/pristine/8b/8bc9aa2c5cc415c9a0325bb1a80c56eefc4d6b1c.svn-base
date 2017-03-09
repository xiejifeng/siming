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
				<img src="<%=path%>resources/app/common/imgs/back.png" onclick="Common.back(4,2);"/>
			</span>
			<h1 class="title">学生验证</h1>
			<span class="g-right-icon">
					<button class="sign-btn" onclick="Personal.index();"><img style="width: 0.4rem;" src="<%=path%>resources/app/common/imgs/qd.png" /></button>
			</span>
		</div>
		<div class="g-form-group-box">
			<dl class="student-table">
				<dt><span></span><span>姓名</span><span>手机号码</span><span>申请时间</span></dt>
				<c:forEach items="${studentsInfo}" var="st">
				<dd><span style="padding-top:25px;"><input type="checkbox" id="${st.userId}"/></span><span>${st.name}</span><span>${st.tel}</span><span>${st.applytime}</span></dd>
				</c:forEach>
			</dl>
		</div>
		<div class="g-btn-bottom-box">
			<button class="sure-btn" onclick="Personal.passCheckStudentInfo()">通过验证</button>
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
</html>