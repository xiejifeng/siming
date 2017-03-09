<%@ page contentType="text/html;charset=UTF-8"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>错误页面</title>
    <style type="text/css">
div.error {
    width: 260px;
    border: 2px solid red;
    background-color: yellow;
    text-align: center;
}
    </style>
  </head>
  <body style="text-align: center;">
    <h1>错误页面</h1>
    <hr>
    <div class="error">
      出错了:<br>
      ${requestScope['exception'].message}
    </div>
    <hr>
  </body>
</html>