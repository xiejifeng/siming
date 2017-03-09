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
				<img src="<%=path%>resources/app/common/imgs/back.png" onclick="Common.back(3,2);"/>
			</span>
			<h1 class="title">刷题排行版</h1>
			<span class="g-right-icon">
					<button class="sign-btn" onclick="Personal.index();"><img style="width: 0.4rem;" src="<%=path%>resources/app/common/imgs/qd.png" /></button>
			</span>
		</div>
		<div class="g-form-group-box">
			<div class="g-subject-box">
				<div class="g-subject-level-box">
					<span class="level">${OrderInfo.order}<c:if test="${empty OrderInfo.order}">0</c:if></span>
				</div>
				<div class="g-subject-message-box">
					<p class="subject">本周刷题：<span class="red">${OrderInfo.total}<c:if test="${empty OrderInfo.total}">0</c:if></span>道</p>
					<p class="subject">其中正确：<span class="red">${OrderInfo.righttotal}<c:if test="${empty OrderInfo.righttotal}">0</c:if></span>道</p>
					<p class="subject">正确率：<span class="red">${OrderInfo.week_accuracy}<c:if test="${empty OrderInfo.week_accuracy}">0</c:if></span>%</p>
					<p class="subject">总人数：<span class="red">${OrderInfo.count} <c:if test="${empty OrderInfo.count}">0</c:if></span>人</p>
				</div>
			</div>
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