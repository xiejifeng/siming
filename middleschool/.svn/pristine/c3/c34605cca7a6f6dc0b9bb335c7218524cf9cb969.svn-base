/**
 * 前台分页工具类
 * 结合宏modelPagination ,simplePagination使用
 * @class ec.pagination
 * @author liusd
 * @createDate 2012-06-13
 */
CommonUtils.regNamespace("ec", "pagination");
ec.pagination = (function(){
	//回调提交事件入参为当前页码
	var _gotoPage = function(curPage){
		var _cb = $("#ec-pagination").attr("callBack");
		var _backCallFunc = eval(_cb);
		if(typeof _backCallFunc !="undefined" && $.isFunction(_backCallFunc)){
			if(_chkInParam(_backCallFunc)){
				_backCallFunc.apply(this,[curPage]);
			}else{
				throw new Error("分页回调函数必须拥有页码入参");
			}
 		}else{
 			throw new Error("无效的分页回调函数");
 		}
	};
	//判断入参个数与位置
	var _chkInParam = function(func){
		var fn = func.toString();
		var args=fn.substring(fn.indexOf('(')+1,fn.indexOf(')')).split(',');
		return (args.length>=1 && args[0]!="");
	}
	//绑定事件
	var _pageInit = function(){
		$("a[id^='ec-page-'],span[id^='ec-page-']").each(function(){
			$(this).off("click.page").on("click.page",function(){_gotoPage($(this).attr("page"))});
		});
		//上一页，下一页功能,暂时取消，影响input框输入
		/**
		document.onkeydown = function(e){
		    var ev = document.all ? window.event : e;
		    
		    if(ev.keyCode==39) {
		    	_gotoPage($("#ec-page-next").attr("page"));
		    }else  if(ev.keyCode==37) {
		    	_gotoPage($("#ec-page-prevs").attr("page"));
		    }
		    
		};
		*/
		$("#ec-btn-jump").off("click.page").on("click.page",function(){
			var maxPage = $("#ec-total-page").attr("page");
			var curPage = $("#ec-input-spec").val();
			if(curPage == ""){
				$.alert("提示信息","跳转页码不能为空，请输入。");
				return false;
			}
			if(parseInt(curPage)>parseInt(maxPage)){
				$.alert("提示信息","已超出最大页码["+maxPage+"]，请重新输入.");
				return false;
			}
			if(!(/^[1-9]\d*$/.test(curPage))){
				$.alert("提示信息","页码格式不正确，必须为有效数字。");
				return false;
			}
			_gotoPage(curPage);
		});
		$("#ec-input-spec").keypress(function(e) {
			var k = e.keyCode || e.which;
			return (k>=48 && k<=57);
		});
	};
	return {
		gotoPage:_gotoPage,
		pageInit:_pageInit
	};
})()
$(function(){
	ec.pagination.pageInit();
});