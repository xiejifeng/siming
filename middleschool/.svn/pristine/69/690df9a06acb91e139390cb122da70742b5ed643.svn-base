<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<% String path=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/"; %>
<script type="text/javascript">
	var web_path="<%=path%>";
	var def_country="<%=request.getLocale().getCountry()%>";
	var def_language="<%=request.getLocale().getLanguage()%>";
</script>
<html>
	<head>
		<title>文件上传</title>
		<link rel="stylesheet" type="text/css" href="<%=path %>plugins/customer/css/frame.css">
		<script type="text/javascript" src="<%=path %>plugins/jquery/js/min/jquery-1.4.4.min.gzjs"></script>
		<script type="text/javascript" src="<%=path %>plugins/customer/js/source/utils.js"></script>
		<script type="text/javascript" src="<%=path %>plugins/customer/const/globalConst.js"></script>
		<script type="text/javascript" src="<%=path %>plugins/customer/js/source/frame.js"></script>
		<script type="text/javascript" src="<%=path%>plugins/swfupload/swfupload.gzjs"></script>
		<script type="text/javascript" src="<%=path%>plugins/swfupload/handler.js"></script>
		<script type="text/javascript">
		$(function(){
			var filepath="${param.filepath}";
			var filesize="${param.filesize}";
			var filetype="${param.filetype}";
			var filelimit="${param.filelimit}";
			var isfiletemp="${param.isfiletemp}";
			$("#spanButtonPlaceholder").focus();
			swfu = new SWFUpload({
						button_image_url : "<%=path%>plugins/swfupload/img/XPButtonUploadText_61x22.png",//指向图片按钮的位置
						button_placeholder_id : "spanButtonPlaceholder",//该按钮的ID名字
						button_width: 61,//按钮的宽度
						button_height: 22,//按钮的高度
						//button_text : '选择文件',//按钮中的文字
						flash_url : "<%=path%>plugins/swfupload/swfupload.swf"  ,//指向FLASH文件的位置
						upload_url: "<%=path%>file/swfupload.srp;jsessionid=<%=request.getSession().getId()%>",//指向web项目下的名为upload的action
						file_post_name:"Filedata",
						post_params:{"filePath":filepath?filepath:""},
						file_types : filetype?filetype:"*.jpg;*.gif;*.zip;*.pdf;*.doc;*.rar;*.png;*.jpeg;*.txt",
						file_size_limit : filesize?filesize:"10240",
						file_upload_limit : filelimit?filelimit:10,
						file_queue_limit : 5,
						upload_complete_handler:uploadComplete,//用于处理文件上传结束的事件
						//file_dialog_complete_handler : fileDialogComplete,//用于处理选择文件后触发的事件
						file_queue_error_handler : fileQueueError,//用于处理文件选择错误
						file_queued_handler : fileQueued,//用于处理选择文件后触发的事件
						upload_error_handler:uploadError,//用于处理上传失败触发的事件
						upload_progress_handler:uploadProgress,//用于上传过程
						upload_success_handler:uploadSuccess,//用于处理上传成功触发的事件
						upload_start_handler:function(file){
							var filename=file.name;
							filename=new Date().getTime()+"."+filename.substr(filename.lastIndexOf(".")+1);
							swfu.addPostParam("fileName",filename);
							swfu.addPostParam("isFileTemp",isfiletemp);
						}
					});
					$("#btn_upload").click(function(){
						//var v=$("#filesTable").find("tr:eq(1)").find("td:eq(0)").html();
						swfu.startUpload();
					});
					var windowId="${param.windowid}";
					$("#btn_close").click(function(){
						if(!windowId){
							return;
						}
						$("#"+windowId).closeWindow({"filepaths":filepaths,"filenames":filenames});
					});
		});
				
		</script>
		
		<style type="text/css">
			table {
				border-collapse: separate;
				border-spacing: 0;
			}
			table.uploadFileList {
				height: 5px;
				border: solid 1px #999999;
			}
			tr.uploadTitle{vertical-align: middle;background-color: #CCCDDD;height:22px;color:#000000}
			tr.uploadTR{color:#234245;height:22px;}
			td.uploadTD{border-top: 1px dotted #CCCCCC}
		</style>
	</head>

	<body>
		
		<table cellspacing="4" cellpadding="4" border="0"
			bgcolor="#FCFCFC">
			<tr>
				<td class="DH1">
					
					<!-- 头信息 -->
					<table cellspacing="4" cellpadding="4" border="0"
						bgcolor="#FCFCFC">
						<tr>
							<td class="DH2">
								<STRONG>批量上传文件 (支持的文件类型：<c:choose>
									<c:when test="${!empty param.filetype }">${param.filetype}</c:when>
									<c:otherwise>"*.jpg;*.gif;*.zip;*.pdf;*.doc;*.rar;*.png;*.jpeg;*.txt"</c:otherwise>
								</c:choose>;
													<br/>单个文件最大不能超过：<c:choose>
														<c:when test="${!empty param.filesize}">${param.filesize}KB</c:when>
														<c:otherwise>10MB</c:otherwise>
													</c:choose>)</STRONG>
							</td>
							<td class="DH2" align="right"></td>
						</tr>
					</table>
					
					<!-- 内容开始 -->
					<div id="content">
							<!-- 控制按钮 -->
							<table cellspacing="0" cellpadding="4" border="0">
								<tr>
									<td width="60">
										<span id="spanButtonPlaceholder" tabindex="1"></span>								
									</td>
									<td colspan="2" align="left">
										<input type="button" id="btn_upload" style="font-size: 12px;height: 22px;" value="上传文件" tabindex="2">										
									</td>
									<td>
										<input type="button" id="btn_close" style="font-size: 12px;height: 22px;" value="退出窗口" tabindex="3">
									</td>
								</tr>
							</table>
							<br/>
							<!-- 文件列表 -->
							<table id="filesTable" class="uploadFileList">
							
								<tr class="uploadTitle">
									<td width="260">
									文件名
									</td>
									<td width="80">
									大小
									</td>
									<td width="80">
									状态
									</td>
									<td width="80">
									操作
									</td>
								</tr>
							</table>
					</div>
				</td>
			</tr>
		</table>
	</body>
</html>
