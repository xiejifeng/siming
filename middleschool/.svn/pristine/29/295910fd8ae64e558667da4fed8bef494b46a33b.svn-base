var filenames=new Array();
var filepaths=new Array();
var swfu;
function fileQueueError(file, errorCode, message){
	if(!file){
		alert(showStatus(errorCode));
		return;
	}
	var tr = $("<tr class='uploadTR' id='" + file.id + "' style='color:red;'></tr>");
	$("#filesTable").append(tr);
	$(tr).append("<td class='uploadTD' width='260'>" + file.name + "</td>");
	var size = file.size;
	if (size / (1024 * 1024) > 1) {
		size = Math.round(size / (1024 * 1024) * 100) / 100 + "MB";
	} else {
		size = Math.round(size / 1024 * 100) / 100 + "KB";
	}
	$(tr).append("<td class='uploadTD' width='80'>" + size + "</td>");
	$(tr).append("<td class='uploadTD' width='80'>" + showStatus(errorCode) + "</td>");
	$(tr).append("<td class='uploadTD' width='80'><a href='javascript:void(0);' name='a_cancel'>删除</a></td>");
	$("a[name='a_cancel']").click(function(){
		var tr=$(this).parent().parent();
		swfu.cancelUpload($(tr).attr("id"));
		$(tr).remove();
	});
}
function fileQueued(file) {
	var tr = $("<tr class='uploadTR' id='" + file.id + "'></tr>");
	$("#filesTable").append(tr);
	$(tr).append("<td class='uploadTD' width='260'>" + file.name + "</td>");
	var size = file.size;
	if (size / (1024 * 1024) > 1) {
		size = Math.round(size / (1024 * 1024) * 100) / 100 + "MB";
	} else {
		size = Math.round(size / 1024 * 100) / 100 + "KB";
	}
	$(tr).append("<td class='uploadTD' width='80'>" + size + "</td>");
	$(tr).append("<td class='uploadTD' width='80'>" + showStatus(file) + "</td>");
	$(tr).append("<td class='uploadTD' width='80'><a href='javascript:void(0);' name='a_cancel'>删除</a></td>");
	$("a[name='a_cancel']").click(function(){
		var tr=$(this).parent().parent();
		swfu.cancelUpload($(tr).attr("id"));
		$(tr).remove();
	});
}
// QUEUED - indicates the this file is waiting in the queue.
// ERROR - indicates that this file caused a queue or upload error.
// COMPLETE - indicates that this file was successfully transmitted to the
// server.
function showStatus(file) {
	var status=file;
	if(typeof file =="object"){
		status=file.filestatus;
	}
	
	var word;
	switch (status) {
		case SWFUpload.UPLOAD_ERROR.HTTP_ERROR :
			word = "HTTP错误";
			break;
		case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL :
			word = "URL错误";
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED :
			word ="上传失败";
			break;
		case SWFUpload.UPLOAD_ERROR.IO_ERROR :
			word ="读写错误";
			break;
		case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR :
			word = "安全错误";
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED :
			word = "文件太大 ";
			break;
		case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED :
			word = "上传数超出 ";
			break;
		case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT :
			word="文件太大";
			break;
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
			word ="0字节文件";
			break;
		case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
			word= "文件类型错误";
			break;
		case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND :
			word = "文件不存在";
			break;
		case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED :
			word = "验证失败";
			break;
		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED :
			word = "上传中断";
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED :
			word = "上传停止";
			break;
		case SWFUpload.FILE_STATUS.QUEUED :
			word = "等待上传";
			break;
		case SWFUpload.FILE_STATUS.ERROR :
			word = "上传失败";
			break;
		case SWFUpload.FILE_STATUS.COMPLETE :
			word = "上传成功";
			break;
		default :
			word = "未知错误";
			break;
	}
	return word;
}
// The uploadSuccess event handler. This function variable is assigned to
// upload_success_handler in the settings object
function uploadSuccess(file, server_data, receivedResponse) {
	$("#" + file.id).find("td:eq(2)").html(showStatus(file.filestatus));
	$("#" + file.id).find("td:eq(3)").find("a").unbind("click");
	$("#" + file.id).find("td:eq(3)").html("");
	var arr=/^(?:<(string)>)(.*)(?:<\/\1>)$/.exec(server_data);
	var data=arr?RegExp.$2:"";
	filepaths.push(data);
	filenames.push(file.name);
}
// The uploadError event handler. This function variable is assigned to
// upload_error_handler in the settings object
function uploadError(file, errorCode, message) {
	if(file){
		$("#" + file.id).find("td:eq(2)").html("<span style='color:red;'>"+showStatus(file.filestatus)+"</span>");
	}
}
function uploadComplete(file) {
	if(file){
		this.startUpload();// continue to upload the next file
	}
}

function uploadProgress(file, bytesLoaded, bytesTotal){
	var percent = Math.ceil((bytesLoaded / bytesTotal) * 100);
	var txt="完成:"+percent+"%";
	$("#" + file.id).find("td:eq(2)").html("<span style='color:blue;'>"+txt+"</span>");
}

