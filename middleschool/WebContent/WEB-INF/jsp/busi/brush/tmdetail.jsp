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
	<link rel="stylesheet" href="<%=path%>resources/app/common/appcss/alertwin.css"></head>
	<link rel="stylesheet" href="<%=path%>resources/app/common/appcss/smjy.css"></head>
</head>
	<body>
	    <input type="hidden" value="${uuid}" id="uuid">
	    <input type="hidden" value="${paperid}" id="paperid">
	    <input type="hidden" value="${imgname}" id="imgname">
	    <input type="hidden" value="${topicid}" id="topicid">
<header class="wrapper">
	<h2>习题练习</h2>
	<a  onclick="Personal.index();" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
	<a  class="home" onclick="Personal.index();"></a>
</header>
<div id="topic_div">
	<section class="pra-content wrap" id="tmHtml">
	
	</section>
	<section class="praxis wrap" id="tmAnswerHtml">
	
	</section>
</div>
<div class="dis_none" id="result_div">

</div>
<div class="btn-wrap wrapper sub-btn" id="resultSubmit" >
		<a name="sub" value="" onclick="Brush.submitResult();" class="btn-pro">提交</a>
</div>
<div class="btn-wrap wrapper sub-btn dis_none" id="doubleButton">
	    <a name="sub"  style="width: 4.2rem; margin: 0 0.3rem;" onclick="Brush.videoPlay();"  class="btn-pro">视频讲解</a>
	    <a name="sub"  style="width: 4.2rem; margin: 0 0.3rem;"   onclick="Brush.submitResult();" class="btn-pro">下一题</a>
</div>
<div class="btn-wrap wrapper sub-btn dis_none" id="backButton" >
	   <a name="sub" onclick="Common.back(5,2);" class="btn-pro">返回</a>
</div>
</div>
<div class="alert-box dis_none" id="div_pop">
	<section class="wrapper">
		<div class="wrap">
			<div class="win">
				<div class="y"></div>
				<a  class="reg" onclick="appLogin.userRegistry();"></a>
				<a  class="login" onclick="Personal.signOut();"></a>
				<div class="word">
			     <p>您还未登陆哦，登陆后查看答题结果和视频讲解！</p>
				</div>
			</div>
		</div>
	</section>
</div>
<section class="go-top"></section>
</body>	
<script type="text/javascript">
	$(document).ready(function(){ 
		var uuid = $("#uuid").val();
		var courseName = $("#paperid").val();
		var topicid = $("#topicid").val();
		Brush.initTopicDetail(uuid,courseName,topicid);
	});
	changeWidth();
	function changeWidth(){
		var rem=32/320*document.documentElement.clientWidth;
		document.documentElement.style.fontSize=rem+'px';
	}
	window.addEventListener('resize',changeWidth,false);
	$(function (){
		$(".go-top").click(function (){
			$("html,body").animate({
				"scrollTop":0
			},1000);
		});
		$(".praxis dd").click(function (){
			$(this).siblings().removeClass("sel");
			$(this).addClass("sel");
		});
	});
	</script>
</html>