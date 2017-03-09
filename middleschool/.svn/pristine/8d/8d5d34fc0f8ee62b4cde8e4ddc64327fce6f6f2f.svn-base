$(document).ready(function(){
	var dis=$('.ffcs-fileUploadSpan :button').attr("disabled");
	if(dis){
		$('.ffcs-fileUploadSpan :button').bind('click',function(){
			var tar=this;
			handler(tar);
		});
	}else{
		$('.ffcs-fileUploadSpan :button').live('click',function(){
			var tar=this;
			handler(tar);
		});
	}
	
	var handler=function(tar){
		var limit=$(tar).prev().prevAll(":text").attr('filelimit'); 
		var type=$(tar).prev().prevAll(":text").attr('filetype'); 
		var size=$(tar).prev().prevAll(":text").attr('filesize'); 
		limit=!limit?10:parseInt(limit);
		$.upload({
			filelimit:limit,
			filetype:type,
			filesize:size,
			onComplete:function(filenames,filepaths){
				if(!$.isArray(filenames)|| filenames.length==0){
					return;
				}
				if(!$.isArray(filepaths)|| filepaths.length==0){
					return;
				}
				var files="";
				for(var i=0;i<filenames.length;i++){
					files+=filenames[i]+",";
				}
				var hfiles="";
				$.each(filepaths,function(i,n){
					hfiles+=hfiles+n+",";
				});
				files=trim(files).substring(0,files.length-1);
				hfiles=trim(hfiles).substring(0,hfiles.length-1);
				$(tar).prev().prevAll(":text").val(files);
				$(tar).prevAll(":hidden").val(hfiles);
			}
		});
	}
});

