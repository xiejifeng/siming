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
	<h2>积分兑换</h2>
	<a href="javascript:history.back();" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
	<a  class="home" onclick="Personal.index();"></a>
</header>
<section class="list wrapper">
	<div class="wrap">
		<ul>
			<c:forEach items="${products}" var="item">
			<li class="clearFix">
				<a href="<%=path%>appScore/getProductDetail.html?id=${item.id}">
					<div class="pic fl">
						<img src="${item.main_img}" alt="" />
					</div>
					<div class="info fr">
						<p>物品名称：<span>${item.name}</span></p>
						<p>积分：<span>${item. score}</span></p>
						<p>库存：<span>${item. stock}</span></p>
					</div>
				</a>
			</li>
			</c:forEach>
		</ul>
	</div>
</section>
<footer class="now-score wrap">
	<p>当前积分:<span>${score}</span></p>
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