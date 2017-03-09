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