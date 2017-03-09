/**
 * JQM分页滚动控件
 * @author liusd
 * @createDate 2014-08-02
 * nameSpace:命名空间防止重复,_backCallFunc:页面分页查询方法用于回调
 */
(function($) {
	var _myScroll,_pullDownEl, _pullDownOffset,_pullUpEl, _pullUpOffset ,_nameSpace,_startPos,_cur_page,_total_pages,_backCallFunc;
	var _pageFinish = function(){
		$("#"+_nameSpace+"_fnt_scroll_cur_page").text(_cur_page);
		_myScroll.refresh();
	}
	$.extend($,{
		scrollObj : function(){
			return _myScroll;
		},
		scrollInit:function(nameSpace){
			_nameSpace = nameSpace;
			_pullDownEl = document.getElementsByName(_nameSpace+'_pull_down')[0];
			_pullDownOffset = _pullDownEl.offsetHeight;
			_pullUpEl = document.getElementsByName(_nameSpace+'_pull_up')[0];	
			_pullUpOffset = _pullUpEl.offsetHeight;
			var _cb = $("#"+_nameSpace+"_wrapper").attr("callBack");
			_backCallFunc = eval(_cb);
			
			_myScroll = new iScroll(_nameSpace+'_wrapper', {
				scrollbarClass: 'myScrollbar',
				useTransition: false,
				topOffset: _pullDownOffset,
				scrollbars: true,
				onRefresh: function () {
					if (_pullDownEl.className.match('loading')) {
						_pullDownEl.className = '';
						_pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
					} else if (_pullUpEl.className.match('loading') && _cur_page >=_total_pages) {
						_pullUpEl.className = '';
						_pullUpEl.querySelector('.pullUpLabel').innerHTML = '已到最后一页';
					} else if (_pullUpEl.className.match('loading')) {
						_pullUpEl.className = '';
						_pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
					}
				},onBeforeScrollMove : function(){
					_startPos = this.y;
				},
				onScrollMove: function () {
					if (this.y > 5 && !_pullDownEl.className.match('flip') && (_startPos < this.y)) {
						_pullDownEl.className = 'flip';
						_pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始刷新...';
						this.minScrollY = 0;
					} else if (this.y < 5 && _pullDownEl.className.match('flip')) {
						_pullDownEl.className = '';
						_pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
						this.minScrollY = -_pullDownOffset;
					} else if (this.y < (this.maxScrollY - 5) && !_pullUpEl.className.match('flip') && (_startPos > this.y)) {
						_pullUpEl.className = 'flip';
						_pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始加载...';
						this.maxScrollY = this.maxScrollY;
					} else if (this.y > (this.maxScrollY + 5) && _pullUpEl.className.match('flip')) {
						_pullUpEl.className = '';
						_pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
						this.maxScrollY = _pullUpOffset;
					}
				},
				onScrollEnd: function () {
					if (_pullDownEl.className.match('flip')) {
						_pullDownEl.className = 'loading';
						_pullDownEl.querySelector('.pullDownLabel').innerHTML = '刷新中...';	
						if(_backCallFunc && $.isFunction(_backCallFunc)){
							try{
								_backCallFunc.apply(this,[{"page":1,"scroll":_myScroll}]);
							}catch(e){
								throw new Error("分页回调函数必须拥有json入参");
							}
						}
					} else if (_pullUpEl.className.match('flip')) {
						_pullUpEl.className = 'loading';
						_pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
						_cur_page = parseInt($("#"+_nameSpace+"_fnt_scroll_cur_page").text())+1;
						_total_pages = parseInt($("#"+_nameSpace+"_fnt_scroll_total_pages").text());
						if(_total_pages >= _cur_page){
							try{
								_backCallFunc.apply(this,[{"page":_cur_page,"scroll":_pageFinish}]);
							}catch(e){
								throw new Error("分页回调函数必须拥有json入参");
							}
						}else{
							_myScroll.refresh();
						}
					}
				}
			});
			_cur_page = parseInt($("#"+_nameSpace+"_fnt_scroll_cur_page").text());
			_total_pages = parseInt($("#"+_nameSpace+"_fnt_scroll_total_pages").text());
			if(_total_pages <= _cur_page){
				_pullUpEl.className = '';
				_pullUpEl.querySelector('.pullUpLabel').innerHTML = '已到最后一页';
				_pullUpEl.style.display = "none";
			}
			//在ipad会不能滚动
			//$(document).off("touchmove").on('touchmove', function (e) { e.preventDefault();}, false);
		}
	});
})(jQuery);