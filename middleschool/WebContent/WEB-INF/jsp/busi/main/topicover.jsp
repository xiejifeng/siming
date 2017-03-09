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
<header class="wrapper">
	<h2>习题练习</h2>
	<a onclick="Personal.index();" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
	<a onclick="Personal.index();" class="home"></a>
</header>
<section class="go-on wrapper">
	<div>
		<img src="<%=path%>resources/app/common/images/wc.png">
	</div>
	<h3 class="">该科目今天的题目已经刷完</h3>
	<h3>
		请明天再来吧
	</h3>
</section>
<footer class="btn-wrap wrapper">
	<a onclick="Personal.index();" class="btn-pro in-block">返回首页</a>
</footer>
<script>
changeWidth();
function changeWidth(){
	var rem=32/320*document.documentElement.clientWidth;
	document.documentElement.style.fontSize=rem+'px';
}
window.addEventListener('resize',changeWidth,false);
</script>
</body>
</html>