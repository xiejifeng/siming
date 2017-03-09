$(function(){
	var seltag=jQuery('#AjaxSelectDiv select');
	
	if(jQuery.browser.msie&& jQuery.browser.version<7.0){		
		bind(seltag[0], "change", function() {
			submitSelect(this);
		}); 
	}else{		
		seltag.change(function(){
			submitSelect(this);
		});
	}
	
});

function submitSelect(obj){
	var selected_val=obj.value;
	var select_url=jQuery(obj).attr('urlstr');
	
	jQuery.ffcsAjax({
	   type: 'post',
	   url: select_url,
	   data: {"selected_val":selected_val},
	   dataType: 'json',
	   success: function(data){
		   writeXspanContent((data.msg[0]).value);
	   },
	   error: function(XMLHttpRequest, textStatus, errorThrown) {
		   alert(textStatus); 
	   }
	});
};

function writeXspanContent(data){
	var xspan=jQuery('#AjaxSelectDiv span');
	if(jQuery.browser.msie&& jQuery.browser.version<7.0){
		xspan[0].innerHTML=data;
	}else{
		xspan.html(data);
	}
}
