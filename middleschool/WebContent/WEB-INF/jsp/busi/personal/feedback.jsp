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
	<h2>意见反馈</h2>
	<a onclick="Common.back(3,2);" class="back"><img src="<%=path%>resources/app/common/images/back.png" class="back_btn" /></a>
	<a  class="home" onclick="Personal.index();"></a>
</header>
<section class="question-return wrap">
	<form action="#" method="post">
		<div class="form-group h-auto">
			<textarea id="feedbackContext" placeholder="这里填下你要说的话。。"></textarea>
		</div>
		<div class="btn-wrap wrapper"  onclick="Personal.submitFeedBack();">
			<a name="sub"  class="btn-pro">提交</a>
		</div>
	</form>
</section>
<script src="js/jquery-1.11.1.min.js"></script>
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