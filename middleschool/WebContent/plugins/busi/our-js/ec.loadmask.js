(function($) {
	var _maskDlg = null;
	$.extend($,{
		mask : function(content) {
			if(_maskDlg!=null){
				_maskDlg.close();
				_maskDlg = null;
			}
			_maskDlg = $.Zebra_Dialog('<div id="loadmask" class="loadmask-msg"><div>'+content+'</div></div>',{
            	'buttons': false,
            	'type': false,
            	'keyboard':false,
            	'modal':true,
            	'overlay_close':false
            });
            $(".ZebraDialog").width($("#loadmask").width()+6);
		},
		unmask : function() {
			if(_maskDlg!=null){
				_maskDlg.close();
			}
		}
	});
})(jQuery);