/** 
 * You can use this map like this:
 * var myMap = new Map();
 * myMap.put("key","value");
 * var key = myMap.get("key");
 * myMap.remove("key");
 */
function Map(){

	this.elements = new Array();
	
	this.size = function(){
		return this.elements.length;
	};
	
	this.isEmpty = function(){
		return (this.elements.length < 1);
	};
	
	this.clear = function(){
		this.elements = new Array();
	};
	
	this.put = function(_key, _value){
		this.remove(_key);
		this.elements.push({key: _key, value: _value});
	};
	
	this.remove = function(_key){
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					this.elements.splice(i, 1);
					return true;
				}
			}
		} catch (e) {
			return false;
		}
		return false;
	}
	
	this.get = function(_key){
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) { return this.elements[i].value; }
			}
		} catch (e) {
			return null;
		}
	}
	
	this.element = function(_index){
		if (_index < 0 || _index >= this.elements.length) { return null; }
		return this.elements[_index];
	}
	
	this.containsKey = function(_key){
		try {
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					return true;
				}
			}
		} catch (e) {
			return false;
		}
		return false;
	}
	
	this.values = function(){
		var arr = new Array();
		for (i = 0; i < this.elements.length; i++) {
			arr.push(this.elements[i].value);
		}
		return arr;
	}
	
	this.keys = function(){
		var arr = new Array();
		for (i = 0; i < this.elements.length; i++) {
			arr.push(this.elements[i].key);
		}
		return arr;
	}
}
/**
 * 日期格式化
 * @param {Object} format
 */
Date.prototype.format = function(format)
{
    var o =
    {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(),  //day
        "h+" : this.getHours(),   //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
        "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format))
    format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
    if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
};
// 说明：用 Javascript 操作 Cookie
// 整理：http://www.CodeBit.cn
 
function getCookie( name ) {
    var start = document.cookie.indexOf( name + "=" );
    var len = start + name.length + 1;
    if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
        return null;
    }
    if ( start == -1 ) return null;
    var end = document.cookie.indexOf( ';', len );
    if ( end == -1 ) end = document.cookie.length;
    return unescape( document.cookie.substring( len, end ) );
}
 
function setCookie( name, value, expires, path, domain, secure ) {
    var today = new Date();
    if ( expires ) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date( today.getTime() + expires);
    document.cookie = name+'='+escape( value ) +
        ( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) + //expires.toGMTString()
        ( ( path ) ? ';path=' + path : '' ) +
        ( ( domain ) ? ';domain=' + domain : '' ) +
        ( ( secure ) ? ';secure' : '' );
}
 
function deleteCookie( name, path, domain ) {
    if ( getCookie( name ) ) document.cookie = name + '=' +
            ( ( path ) ? ';path=' + path : '') +
            ( ( domain ) ? ';domain=' + domain : '' ) +
            ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}
//逗号分隔千位数，如1,234.00
Number.prototype.format = function(){ //给javascript里所有的数字添加一个原型函数，叫format()
    if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(this)) { //用正则表达式给使用该函数的数字做测试，如果不符合[正负（可有可无）]、[数字（重复一次以上）]、[小数点（可有可无）、数字（可有可无）]的形式。
        return NaN; //返回Not A Number，终止。
    }
    var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3; //否则将刚正则表达式里的[]里三部分放入a b c三个变量中
    var re = new RegExp(); //定义一个新的正则表达式变量re
    re.compile("(\\d)(\\d{3})(,|$)"); //给re内部编译[一个数字]、[三个数字]、[,或者结束]的正则表达式，这里我给改了下，原版在re = new RegExp()后面直接跟.compile的写法Google Chrome的V8引擎认不出，Firefox和破IE倒都正常，所以分开写了
    while(re.test(b)) { //循环测试第一个正则表达式中的第二部分，即正负号后，小数点前的部分，如果符合第二个正则。
        b = b.replace(re, "$1,$2$3"); //就执行将第二部分转换为三部分，并将第一部分之后加入逗号，直到循环测试正则失败。
    }
    return a +""+ b +""+ c; //最后拼接返回第一个正则的三部分。
};

Number.prototype.formatTime = function() {
	// 计算
	var h = 0, i = 0, s = parseInt(this);
	if (s > 60) {
		i = parseInt(s / 60);
		s = parseInt(s % 60);
		if (i > 60) {
			h = parseInt(i / 60);
			i = parseInt(i % 60);
		}
	}
	// 补零
	var zero = function(v) {
		return (v >> 0) < 10 ? "0" + v : v;
	};
	return [ zero(h), zero(i), zero(s) ].join(":");
};
