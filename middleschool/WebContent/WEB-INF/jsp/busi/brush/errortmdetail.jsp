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
</head>
	<body>
	    <input type="hidden" value="${uuid}" id="uuid">
	    <input type="hidden" value="${ids}" id="ids">
		<header class="wrapper">
			<h2>习题练习</h2>
			<a  onclick="Common.back(5,2);" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
			<a  class="home" onclick="Personal.index();"></a>
		</header>
		<div id="topic_div">
			<section class="pra-content wrap" id="tmHtml">
			
			</section>
			<section class="praxis wrap" id="tmAnswerHtml">
			
			</section>
		</div>
		<div class="btn-wrap wrapper sub-btn" id="resultSubmit" >
		    <a name="sub" value=""  onclick="Brush.videoPlay();" class="btn-pro">视频讲解</a>
        </div>
	</body>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/width.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/btn.js"></script>
	<script type="text/javascript">
	$(document).ready(function(){ 
		var uuid = $("#uuid").val();
		Brush.initErrorTopicDetail(uuid);
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