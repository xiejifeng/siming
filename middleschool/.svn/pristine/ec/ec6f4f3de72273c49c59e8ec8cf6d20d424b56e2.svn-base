$(function(){
	$("#today").html(getNowFormatDate());
	
	$.post("../userExpand/getUserInfo.do", {}, function(returnedData, status) {
		$("#username").html(returnedData.data.user.username);
		$("#loginCount").html(returnedData.data.result+1);
	},"json");
	
});


function getNowFormatDate() {
	var day = new Date();
	var Year = 0;
	var Month = 0;
	var Day = 0;
	var CurrentDate = "";
	Year = day.getFullYear(); 
	Month = day.getMonth() + 1;
	Day = day.getDate();
	Hour = day.getHours(); 
	Minute = day.getMinutes(); 
	Second = day.getSeconds(); 
	CurrentDate += Year + "-";
	if (Month >= 10) {
		CurrentDate += Month + "-";
	} else {
		CurrentDate += "0" + Month  + "-";
	}
	if (Day >= 10) {
		CurrentDate += Day;
	} else {
		CurrentDate += "0" + Day;
	}
	return CurrentDate;
}