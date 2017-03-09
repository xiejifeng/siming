<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<% 
String path=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";
   
response.setHeader("Pragma","No-cache");
response.setHeader("Cache-Control","no-cache");
response.setDateHeader("Expires",   0);
%>
<script type="text/javascript">
	var web_path="<%=path%>";
	var def_country="<%=request.getLocale().getCountry()%>";
	var def_language="<%=request.getLocale().getLanguage()%>";
</script>
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
		<iframe id="home" frameborder="0" src="<%=path%>appLogin/index.html" style="width:100%;height:100%;margin: 0;"></iframe>
	</body>
</html>