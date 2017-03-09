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
	<link rel="stylesheet" href="<%=path%>resources/app/common/appcss/comPro.css"></head>
	<link rel="stylesheet" href="<%=path%>resources/app/common/appcss/smjy.css"></head>
</head>
<body>
<header class="wrapper fix-header">
	<h2>视频讲解</h2>
	<a onclick="Common.back(5,2);" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
	<a onclick="Personal.index();" class="home"></a>
</header>
<div id="player" class="video wrapper fix-video">
	<video src="${vlink}" width="100%" height="100%" style="background: #444;" controls autobuffer></video>
</div>
<input type="hidden" id="topicId" value="${id}">
<input type="hidden" id="imgurl" value="${LOGIN_USER_INFO.img}">
<input type="hidden" id="user_id" value="${LOGIN_USER_INFO.nickname}">
<section class="record wrapper clearFix fix-record">
   <p style="color: #fff; font-size: 0.5rem; line-height: 1.31rem; padding-left: 0.3rem;">评论</p>
</section>
<section class="chat-word">
	<ul id="ul_messageList">
	</ul>
</section>
<section class="chat wrapper clearFix">
	<input type="text" name="chat-text"  style="width: 6.5rem;" placeholder="发表评论"  id="messageContent" class="fl chat-text">
	<a class="fr more" style="width: 2.6rem;" onclick="Personal.sendComment();">发布</a>
</section>
<script>
$(function(){
	Personal.initMessageList();
});
changeWidth();
function changeWidth(){
	var rem=32/320*document.documentElement.clientWidth;
	document.documentElement.style.fontSize=rem+'px';
}
window.addEventListener('resize',changeWidth,false);
</script>
</body>
</html>