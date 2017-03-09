/**
 * 全局异步提示框
 * @author wuhb
 */
(function($) {
    $.extend($, {
    	ecOverlay:function(text){
    		$("#overlay-modal-content").html(text);
    		$("#overlay-modal").modal('show');
    	},
      	unecOverlay:function(){
      		$(".modal-backdrop").remove();
    		$("#overlay-modal").modal('hide');
    	}
    });
})(jQuery, this);