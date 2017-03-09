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
     <input type="hidden" id="status" value="${LOGIN_USER_INFO.status}">
	<div class="g-banner-box" id="canvas"></div>
	<div class="g-entrance-box">
		<ul>
			<li class="g-entrance"  onclick="Personal.todayClass();">
				<img src="<%=path%>resources/app/common/imgs/icon1.png"/ class="icon">
				<p class="icon-title">今日课堂</p>
			</li>
			<li class="g-entrance"  onclick="Personal.brushExercises();">
				<img src="<%=path%>resources/app/common/imgs/icon2.png"/ class="icon">
				<p class="icon-title">我要刷题</p>
			</li>
			<li class="g-entrance" onclick="Personal.studentValidate();">
				<img src="<%=path%>resources/app/common/imgs/icon3.png"/ class="icon">
				<p class="icon-title">学生验证</p>
			</li>
			<li class="g-entrance" onclick="Personal.personal();">
				<img src="<%=path%>resources/app/common/imgs/icon4.png"/ class="icon">
				<p class="icon-title">个人中心</p>
			</li>
		</ul>
	</div>
	<div class="g-curriculumlist-box">
		<div class="g-list-title-box">
			<h2>最新课程<span onclick="Personal.todayClass();">更多</span></h2>
		</div>
		<ul class="g-list-box">
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
			<c:forEach items="${yugaoList}" var="item">
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
			<c:forEach items="${isOverList}" var="item">
				<li onclick="Personal.liveVideo('${item.video_unique}','${item.video_name}','2');">
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
		</ul>
	 <c:if test="${empty yugaoList}">
	  <c:if test="${empty isOverList}">
	   <c:if test="${empty zhiboList}">
 			<div class="empty-box"><!--我是没有课程的时候消息提示框-->
				<img src="<%=path%>resources/app/common/imgs/biaoqing.png" />
				<span>老师又跑去厕所抽烟了！！</span>
			</div>    
		</c:if>
	  </c:if>
     </c:if>
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
<script type="text/javascript" src="<%=path%>resources/app/common/js/bannerBox.js"></script>
<script type="text/javascript" src="<%=path%>resources/app/common/js/btn.js"></script>
<script type="text/javascript">
	Common.getAdvertisementList(function(data){
		//初始化Slider 实例
		new Slider({	
			dom: document.getElementById('canvas'),
			list: data
		});
	});
</script>
</html>