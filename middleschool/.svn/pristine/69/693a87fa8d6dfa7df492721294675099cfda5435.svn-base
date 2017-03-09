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
	<link rel="stylesheet" type="text/css" href="<%=path%>resources/app/common/appcss/common.css">
	<link rel="stylesheet" href="<%=path%>resources/app/common/appcss/comPro.css">
</head>
<body>
<header class="wrapper">
	<h2>答题记录</h2>
	<a  onclick="Common.back(2,2);" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
	<a  class="home" onclick="Personal.index();"></a>
</header>
<nav class="wrapper">
	<ul class="tab-head">
		<li class="active">
			<a href="javascript:;">查看全部</a>
		</li>
		<li>
			<a href="javascript:;">查看错题</a>
		</li>
	</ul>
	<div class="container">
		<ul class="tab-body">
		<c:forEach items="${errorList}" var="item">
			 <c:if test="${item.status=='1D00'}">
			 	<li class="correct" id="${item.topic_id}" onclick="Brush.initGetErrorTopicDetail(${item.topic_id},'${item.course_id}');">
					<a>
						<span class="day">${item.createtime}</span>
						<span class="time">${item.topic_id}</span>
						<div class="icon"></div>
					</a>
				</li>
			  </c:if>
		      <c:if test="${item.status=='1D01'}">
			  	<li class="error" id="${item.topic_id}" onclick="Brush.initGetErrorTopicDetail(${item.topic_id},'${item.course_id}');">
				    <a>
						<span class="day">${item.createtime}</span>
						<span class="time">${item.topic_id}</span>
						<div class="icon"></div>
				    </a>
				</li>
		      </c:if>
		</c:forEach>
		</ul>
		<ul class="tab-body">
		    <c:forEach items="${errorList}" var="item">
		      <c:if test="${item.status=='1D01'}">
			  	<li class="error" id="${item.topic_id}" onclick="Brush.initGetErrorTopicDetail(${item.topic_id},'${item.course_id}');">
				    <a>
						<span class="day">${item.createtime}</span>
						<span class="time">${item.topic_id}</span>
						<div class="icon"></div>
				    </a>
				</li>
		      </c:if>
			  </c:forEach>
		</ul>
	</div>
</nav>
<script src="<%=path%>resources/app/common/js/jquery.tab.js"></script>
<script>
$(function (){
	changeWidth();
	$("nav").tab();
});
function changeWidth(){
	var rem=32/320*document.documentElement.clientWidth;
	document.documentElement.style.fontSize=rem+'px';
}
window.addEventListener('resize',changeWidth,false);
</script>
</body>
</html>