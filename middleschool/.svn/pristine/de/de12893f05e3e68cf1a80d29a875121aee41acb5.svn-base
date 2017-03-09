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
		<link rel="stylesheet" href="<%=path%>resources/app/common/appcss/index.css">
		<link rel="stylesheet" type="text/css" href="<%=path%>resources/app/common/appcss/swiper-3.4.0.min.css">
</head>
<body>
<input type="hidden" value="${hasTopic}" id = "hasTopic"> 
<header class="wrapper">
	<h1 class="logo">思明E学</h1>
	<c:if test="${empty LOGIN_USER_INFO.img}">
		<a onclick="Personal.todatOrder();" class="personal"><img src="<%=path%>resources/app/common/images/personal-icon.png" /></a>
	</c:if>
	<c:if test="${not empty LOGIN_USER_INFO.img }">
		<a onclick="Personal.todatOrder();" class="personal"><img src="${LOGIN_USER_INFO.img}" /></a>
	</c:if>
</header>
<section class="swiper-container banner wrapper">
    <div class="swiper-wrapper">
    <c:forEach items="${advertisement}" var="item">
        <div class="swiper-slide">
        	<a onclick="Common.changeURL('${item.click_url}')">
        		<img src="${item.img}">
        	</a>
        </div>
    </c:forEach>
    </div>
    <div class="swiper-pagination"></div>
</section>
<nav class="wrapper">
	<ul class="tab-head">
		<li class="active">
			<a>
				<img src="<%=path%>resources/app/common/images/sx.png">
			</a>
		</li>
		<li>
			<a>
				<img src="<%=path%>resources/app/common/images/yw.png">
			</a>
		</li>
		<li>
			<a>
				<img src="<%=path%>resources/app/common/images/yy.png">
			</a>
		</li>
	</ul>
	<div class="container" id="wrapper">
		<ul class="tab-body">
			<c:forEach items="${sx}" var="item" varStatus="status">
			  <c:if test="${item.isnew==1 }">
				<li class="new">
					<div class="icon"></div>
					<a  onclick="Brush.getBrushTmDetail('${item.subjectid}','${item.subjectid}','sx.png','${item.topicid}');">
						<p>${status.index+1}. ${item.name}(${item.pubdate})</p>
					</a>
					<hr>
				</li>
			  </c:if>
			  <c:if test="${item.isnew==0}">
			  	<li>
					<div class="icon"></div>
					<a  onclick="Brush.getBrushTmDetail('${item.subjectid}','${item.subjectid}','sx.png','${item.topicid}');">
						<p>${status.index+1}. ${item.name}(${item.pubdate})</p>
					</a>
					<hr>
				</li>
			  </c:if>
			</c:forEach>
		</ul>
		<ul class="tab-body">
			<c:forEach items="${yw}" var="item" varStatus="status">
			  <c:if test="${item.isnew==1 }">
				<li class="new">
					<div class="icon"></div>
					<a  onclick="Brush.getBrushTmDetail('${item.subjectid}','${item.subjectid}','yw.png','${item.topicid}');">
						<p>${status.index+1}. ${item.name}(${item.pubdate})</p>
					</a>
					<hr>
				</li>
			  </c:if>
			  <c:if test="${item.isnew==0}">
			  	<li>
					<div class="icon"></div>
					<a  onclick="Brush.getBrushTmDetail('${item.subjectid}','${item.subjectid}','yw.png','${item.topicid}');">
						<p>${status.index+1}. ${item.name}(${item.pubdate})</p>
					</a>
					<hr>
				</li>
			  </c:if>
			</c:forEach>
		</ul>
		<ul class="tab-body">
			<c:forEach items="${yy}" var="item" varStatus="status">
			  <c:if test="${item.isnew==1 }">
				<li class="new">
					<div class="icon"></div>
					<a  onclick="Brush.getBrushTmDetail('${item.subjectid}','${item.subjectid}','yy.png','${item.topicid}');">
						<p>${status.index+1}. ${item.name}(${item.pubdate})</p>
					</a>
					<hr>
				</li>
			  </c:if>
			  <c:if test="${item.isnew==0}">
			  	<li>
					<div class="icon"></div>
					<a  onclick="Brush.getBrushTmDetail('${item.subjectid}','${item.subjectid}','yy.png','${item.topicid}');">
						<p>${status.index+1}. ${item.name}(${item.pubdate})</p>
					</a>
					<hr>
				</li>
			  </c:if>
			</c:forEach>
		</ul>
	</div>
</nav>
<script src="<%=path%>resources/app/common/js/jquery.tab.js"></script>
<script src="<%=path%>resources/app/common/js/index.js"></script>
<script src="<%=path%>resources/app/common/js/swiper-3.4.0.min.js"></script>
<script>
$(document).ready(function() {
	changeWidth();
	var hasTopic = $("#hasTopic").val();
	if(hasTopic=="1"){
		loadTopicResult();
	}
});
function changeWidth(){
	var rem=32/320*document.documentElement.clientWidth;
	document.documentElement.style.fontSize=rem+'px';
}

function loadTopicResult(){
	var url = web_path + "appLogin/getTopicResult.html";
   Common.changeURL(url);
}

window.addEventListener('resize',changeWidth,false);
</script>
</body>
</html>