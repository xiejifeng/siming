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
	<link href="<%=path%>resources/app/common/css/style.css" rel="stylesheet">
	<link href="<%=path%>resources/app/common/css/iosSelect.css" rel="stylesheet">
<!-- 	<script src="http://res.websdk.rongcloud.cn/RongIMClient.emoji-0.9.2.min.js"></script> -->
    <script src="http://cdn.ronghub.com/RongIMLib-2.1.3.min.js"></script>
<!-- 	<script type="text/javascript" src="http://res.websdk.rong.io/RongIMClient.min.js"></script> -->
	<script type="text/javascript">
	  RongIMClient.init('uwd1c0sxdd2v1');//这是初始化，需要填参数就是你的APPKEY。这个不难理解。
		// 设置连接监听状态 （ status 标识当前连接状态）
		  
	  // 消息监听器
	  RongIMClient.setOnReceiveMessageListener({
	     // 接收到的消息
	     onReceived: function (message) {
	    	 //console.log(message.content.content);
	         // 判断消息类型
	         switch(message.messageType){
	             case RongIMClient.MessageType.TextMessage:
	            	 var messageArray =message.content.content.split("@#$%^&*!*******&&^^%%$$#");
	            	 if(messageArray[2]==$("#user_id").val()){
		            	 var html ='<li class="chat-list right"><div class="chat"><div class="chat-user-box"><span class="user-id">'+messageArray[2]+'</span><img src="'+messageArray[1]+'" /><span class="caret"></span></div><span class="chat-info">'+messageArray[0]+'</span></div></li>';
					     $("#messageList").append(html);
	            	 }else{
		            	 var html ='<li class="chat-list left"><div class="chat"><div class="chat-user-box"><span class="user-id">'+messageArray[2]+'</span><img src="'+messageArray[1]+'" /><span class="caret"></span></div><span class="chat-info">'+messageArray[0]+'</span></div></li>';
					     $("#messageList").append(html);
	            	 }
	                 //发送的消息内容将会被打印
	                 break;
	             case RongIMClient.MessageType.ImageMessage:
	                 // do something...
	                  
	                 break;
	             case RongIMClient.MessageType.DiscussionNotificationMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.LocationMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.RichContentMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.DiscussionNotificationMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.InformationNotificationMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.ContactNotificationMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.ProfileNotificationMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.CommandNotificationMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.CommandMessage:
	                 // do something...
	                 break;
	             case RongIMClient.MessageType.UnknownMessage:
	                 // do something...
	                 break;
	             default:
	                 // 自定义消息
	                 // do something...
	         }
	     }
	 });
		 // 连接状态监听器
	  RongIMClient.setConnectionStatusListener({
		    onChanged: function (status) {
		        switch (status) {
		            //链接成功
		            case RongIMLib.ConnectionStatus.CONNECTED:
		               // console.log('链接成功');
		                Rong.getHistoryMsg();
		                break;
		            //正在链接
		            case RongIMLib.ConnectionStatus.CONNECTING:
		                //console.log('正在链接');
		                break;
		            //重新链接
		            case RongIMLib.ConnectionStatus.DISCONNECTED:
		            	 Rong.initRongYun();
		                break;
		            //其他设备登陆
		            case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
		                //console.log('其他设备登陆');
		                break;
		              //网络不可用
		            case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
		              //console.log('网络不可用');
		              break;
		            }
		    }});
	</script>
</head>

	<body>
	    <input type="hidden" id="token" value="${token}">
	    <input type="hidden" id="imgurl" value="${LOGIN_USER_INFO.img}">
	    <input type="hidden" id="user_id" value="${LOGIN_USER_INFO.nickname}">
	    <input type="hidden" id="targetId" value="${targetId}">
	    <input type="hidden" id="uu" value="${uu}">
	    <input type="hidden" id="uv" value="${uv}">
		<div class="title-box">
			<span class="g-left-icon" onclick="Common.back(6,2);">
				<img src="<%=path%>resources/app/common/imgs/back.png" />
			</span>
			<h1 class="title" onclick="Rong.sendMessage();">${courseName}</h1>
			<span class="g-right-icon">
					<button class="sign-btn" onclick="Personal.index();"><img style="width: 0.4rem;" src="<%=path%>resources/app/common/imgs/qd.png" /></button>
			</span>
		</div>
		<div class="g-form-group-box">
			<div id="player" style="width:3.2rem;height:2rem; z-index: 100;">
			    <script type="text/javascript" charset="utf-8" src="http://yuntv.letv.com/player/vod/bcloud.js"></script>
			    <script>
			        var player = new CloudVodPlayer();
			        player.init({uu:$("#uu").val(),vu:$("#uv").val(),dfull:0,fullscreen:0,autoSize:1},"player");
			    </script>
			</div>
		<div class="chat-tab1-box">
			<div class="chat-title">
			    <c:if test="${canSign==1}">
              		 <p onclick="Personal.submitSign('${uv}','${courseName}');">签到送100M</p>
			    </c:if>
				<button class="chat-his-btn btn">聊天记录</button>
				<button class="comment-his-btn btn" onclick="Personal.viewComment();">查看评论</button>
			</div>
			<div class="g-chat-box">
				<div class="chat-box-position">
					<ul class="chat-box" id="messageList">
						
					</ul>
				</div>
			</div>
			<div class="chat-input-box">
				<input type="text" placeholder="来愉快的聊天吧" id="message"/>
				<button class="btn enter"  onclick="Rong.sendMessage();">发送</button>
				<button class="btn more">更多</button>
			</div>
			<div class="g-more-box dis-none">
				<button class="btn" onclick="Personal.brushExercises();">我要刷题</button>
				<button class="btn" onclick="Personal.train();">报名咨询</button>
				<button class="btn" onclick="Personal.scoreExchange();">我要挣流量</button>
			</div>
		</div>
		<div class="chat-tab2-box dis-none">
				<div class="chat-title">
					<p>热门评论</p>
					<button class="comment-his-btn2 btn" onclick="Personal.backChatRoom();">聊天室</button>
				</div>
				<div class="comment-box">
					<ul id="ul_messageList">
					</ul>
				</div>
				<div class="chat-input-box">
					<input type="text" placeholder="来吐槽吧" id="messageContent"/>
					<button class="btn enter" onclick="Personal.sendComment();">发送</button>
					<button class="btn more">更多</button>
				</div>
				<div class="g-more-box dis-none">
					<button class="btn" onclick="Personal.brushExercises();">我要刷题</button>
					<button class="btn" onclick="Personal.train();">报名咨询</button>
					<button class="btn" onclick="Personal.scoreExchange();">我要挣流量</button>
				</div>
			</div>
		</div>
<div class="popup-bg dis-none" id="div_pop" style="z-index: 99999;">
	<div class="popup-box">
		<div class="popup-message-box">
			<p>您还未登录哦,无法进行此项操作！</p>
			<p>新注册即送1000M流量，每天免费学,每月送3G流量！</p>
		</div>
		<div class="popup-btn-box">
			<button class="btn popup-close" onclick="appLogin.userRegistry();">去注册</button>
			<button class="btn popup-sure" onclick="Personal.signOut();">去登录</button>
		</div>
		<div class="popup-close-box">
			<img src="<%=path%>resources/app/common/imgs/close.png" class="close-img" onclick="Personal.startOpenWin();"/>
		</div>
	</div>
</div>
	</body>
	<script type="text/javascript">
	  $(function(){
		  Rong.initRongYun();
	  });
	</script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/width.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/btn.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/iosSelect.js"></script>
	<script type="text/javascript" src="<%=path%>resources/app/common/js/iscroll.js"></script>
</html>