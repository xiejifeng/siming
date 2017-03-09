<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/plugins/customer/jsp/appcommon.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	<title>思明E学</title>
	<link rel="stylesheet" type="text/css" href="<%=path%>resources/app/common/appcss/common.css">
	<link rel="stylesheet" href="<%=path%>resources/app/common/appcss/comPro.css">
	<script type="text/javascript" src="<%=path%>resources/app/busi-js/personal/scoreExchange.js"></script>
</head>
<body>
<header class="wrapper">
	<h2>积分兑换</h2>
	<a href="javascript:history.back();" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
	<a  class="home" onclick="Personal.index();"></a>
</header>
<section class="banner wrap">
	<div class="product">
		<img src="${product.mainimg}" class="sp-img">
	</div>
	<div class="introduce">
		<div class="title">
			<h3 class="fl">${product.name}</h3>
			<span class="fr">
				<div>所需积分：${product.score}</div>
				<div>库存：${product.stock}</div>
			</span>
		</div>
		<div class="context">
			<small>商品介绍</small>
			<p>${product.introduce}</p>
		</div>
	</div>
</section>
<div class="btn-wrap wrapper">
	<a class="btn-pro" onClick="ScoreExchange.isExchange(${product.id});">兑换</a>
</div>
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