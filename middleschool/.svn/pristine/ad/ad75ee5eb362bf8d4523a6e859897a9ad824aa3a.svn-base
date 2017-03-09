<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/plugins/customer/jsp/appcommon.jsp"%>
<!DOCTYPE>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	<title></title>
	<link href="<%=path%>resources/app/common/css/style.css" rel="stylesheet">
	<link href="<%=path%>resources/app/common/css/iosSelect.css" rel="stylesheet">
</head>
	<body>
		<div class="title-box">
			<span class="g-left-icon"  onclick="Common.back(2,2);">
				<img src="<%=path%>resources/app/common/imgs/back.png" />
			</span>
			<h1 class="title">E学课堂</h1>
					<span class="g-right-icon">
					<button class="sign-btn" onclick="Personal.index();"><img style="width: 0.4rem;" src="<%=path%>resources/app/common/imgs/qd.png" /></button>
			</span>
		</div>
		<div class="g-curriculumlist-box">
			<ul class="g-list-box tab1-box">
				 <c:forEach items="${zhiboList}" var="item" >
					<li onclick="Personal.liveVideo('${item.activityId}','${item.activityName}','1');">
						<div class="g-curriculumlist-img-box">
							<img src="${item.coverImgUrl}" />
						</div>
						<div class="g-curriculumlist-info-box">
							<span class="cur-name">${item.activityName}</span>
							<span class="cur-tec">思明教育</span>
							<span class="cur-date">${item.startTime}</span>
							<span class="cur-tatus">直播中</span>
						</div>
					</li>
				</c:forEach>
				<c:forEach items="${isOverList}" var="item">
					<li onclick="Personal.liveVideo('${item.video_unique}','${item.video_name}','2','${item.complete_time}');">
							<div class="g-curriculumlist-img-box">
								<img src="${item.img}" />
							</div>
							<div class="g-curriculumlist-info-box">
								<span class="cur-name">${item.video_name}</span>
								<span class="cur-tec">思明教育</span>
								<span class="cur-date">${item.complete_time}</span>
								<span class="cur-tatus">已结束</span>
							</div>
					</li>
				</c:forEach>
				<c:forEach items="${yugaoList}" var="item" >
					<li>
						<div class="g-curriculumlist-img-box">
							<img src="${item.coverImgUrl}" />
						</div>
						<div class="g-curriculumlist-info-box">
							<span class="cur-name">${item.activityName}</span>
							<span class="cur-tec">思明教育</span>
							<span class="cur-date">${item.startTime}</span>
							<span class="cur-tatus">预告</span>
						</div>
					</li>
				</c:forEach>
			     <c:if test="${empty yugaoList}">
			            <c:if test="${empty zhiboList}">
			               <c:if test="${empty isOverList}">
			 			<div class="empty-box"><!--我是没有课程的时候消息提示框-->
							<img src="<%=path%>resources/app/common/imgs/biaoqing.png" />
							<span>老师又跑去厕所抽烟了！！</span>
						</div>    
						 </c:if>
					</c:if>
			     </c:if>
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
	<script type="text/javascript" src="<%=path%>resources/app/common/js/iosSelect.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/iscroll.js"></script>
</html>