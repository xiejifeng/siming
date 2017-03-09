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
				<img src="<%=path%>resources/app/common/imgs/back.png"  onclick="Common.back(3,2);"/>
			</span>
			<h1 class="title">上课签到记录</h1>
			<span class="g-right-icon">
					<button class="sign-btn" onclick="Personal.index();"><img style="width: 0.4rem;" src="<%=path%>resources/app/common/imgs/qd.png" /></button>
			</span>
		</div>
		<div class="g-form-group-box">
			<dl class="sign-table">
				<dt><span>日期</span><span>课程</span><span>上课情况</span></dt>
				<c:forEach items ="${signList}" var = "sign" >
				      <dd><span>${sign.signtime}</span><span>${sign.course_name}</span><span class="sign-status" style="padding-top: 15px;"><img src="<%=path%>resources/app/common/imgs/good.png" /></span></dd>
				</c:forEach>
<%-- 				<dd><span>2016-08-11</span><span class="sign-status"><img src="<%=path%>resources/app/common/imgs/good.png" /></span></dd>
				<dd><span>2016-08-10</span><span class="sign-status">缺课</span></dd>
				<dd><span>2016-08-19</span><span class="sign-status"><img src="<%=path%>resources/app/common/imgs/good.png" /></span></dd> --%>
			</dl>
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