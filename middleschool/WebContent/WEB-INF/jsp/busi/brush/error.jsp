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
				<img src="<%=path%>resources/app/common/imgs/back.png" onclick="Common.back(5,2);"/>
			</span>
			<h1 class="title">刷题结果</h1>
			<span class="g-right-icon">
					<button class="sign-btn" onclick="Personal.index();"><img style="width: 0.4rem;" src="<%=path%>resources/app/common/imgs/qd.png" /></button>
			</span>
		</div>
		<div class="g-form-group-box">
			<div class="answer-result">
				<img src="<%=path%>resources/app/common/imgs/fail.png" class="" />
				<h2>很遗憾答错了</h2>
				<p>不要灰心，继续努力！</p>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/width.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/btn.js"></script>
</html>