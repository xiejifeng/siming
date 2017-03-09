$(function(){
	$("#staffid").autocomplete({
		valueField:'staffid',
		textField:'staffname',
		editable:true,
		required:false,
		width:80,
		url:'/rdss/demo/getSysStaffinfos.action',
		onChange:function(newValue, oldValue) {
			$("#mapsrc").autocomplete('setOptions',{
				url:'/rdss/demo/getMapFilesSrc.action?staffid='+newValue
			});
		}
	});
	
	$("#mapsrc").autocomplete({
		valueField:'imgsrc',
		textField:'imgName',
		editable:true,
		required:false,
		width:80,
		url:'',
		onChange:function(newValue, oldValue) {
			var protocol=window.location.protocol;
			var host=window.location.host;
			var pathname=window.location.pathname;
			var pathnameIndex=pathname.indexOf('/');
			var prjname;
			if(pathnameIndex==0){
				pathname=pathname.substr(1);
				pathnameIndex=pathname.indexOf("/");
				prjname=pathname.substring(0,pathnameIndex);
			}
			
			$("#staticMap").html("<img src='"+protocol+"//"+host+"/"+prjname+newValue+"'></img>");
		}				
	});

});

var map;
var markersFlag=true;
var geocoder;
var markersArray = [];

/**
 * 初始化
 * @param {Object} comCode	所属公司编码
 */
function initialize(comCode,loginerId,loginerFamilyName,loginerFirstName,date) {

	var map_div=document.getElementById("map_canvas");

	//公司所在城市的经纬度
	var centerLatLng=[
		{'comCode':'100',region:'福州','lat':26.064955919923364,'lng':119.32027816772461},	//福州
		{'comCode':'101',region:'东莞','lat':23.041825229491746,'lng':113.73991012573242},	//东莞
		{'comCode':'102',region:'漳州','lat':24.51097003488642,'lng':117.67275810241699},	//漳州
		{'comCode':'200',region:'西安','lat':34.266296360583645,'lng':108.95536422729492}	//西安
	];
	//城市
	getCity(centerLatLng,comCode);
	//横坐标
	var lat=getComLat(centerLatLng,comCode);
	//纵坐标
	var lng=getComLng(centerLatLng,comCode);
	//创建地图对象
	createMap(lat,lng,map_div);
	//创建查询地址对象
	geocoder=new google.maps.Geocoder();
	//监听标记事件		
	addMarkers(loginerId,loginerFamilyName,loginerFirstName,date);
}

/**
 * 创建地图
 * @param {Object} lat	横坐标
 * @param {Object} lng	纵坐标
 * @param {Object} mapDiv	放置地图的div层
 */
function createMap(lat,lng,mapDiv){
	var myLatlng = new google.maps.LatLng(lat,lng);
	var myOptions = {
		zoom: 13,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(mapDiv, myOptions);
}

/**
 * 创建信息窗口
 * @param {Object} loginerId	操作者编码
 * @param {Object} loginerFamilyName	操作者姓
 * @param {Object} loginerFirstName	操作者名
 * @param {Object} date	标记日期
 */
function createInfoWindow(loginerId,loginerFamilyName,loginerFirstName,date){
	var contentStr="<div><table border='0'>"+
				"<tr><td>操作者编号：</td><td>"+loginerId+"</td></tr>"+
				"<tr><td>操作者姓：</td><td>"+loginerFamilyName+"</td></tr>"+
				"<tr><td>操作者名：</td><td>"+loginerFirstName+"</td></tr>"+
				"<tr><td>标记地址：</td><td>11111</td></tr>"+
				"<tr><td>标记日期：</td><td>"+date+"</td></tr>"+
				"</table></div>";
   	var infowindow = new google.maps.InfoWindow({
	    content:contentStr
	});
	return infowindow;
}

/**
 * 添加标记
 */
function addMarkers(loginerId,loginerFamilyName,loginerFirstName,date){
	//var infowindow=createInfoWindow(loginerId,loginerFamilyName,loginerFirstName,date);
	google.maps.event.addListener(map, 'click', function(overlay) {
		var marker = new google.maps.Marker({
		  position: overlay.latLng,
		  title:"'"+markersArray.length+"'",
		  map: map
		});
		//infowindow.open(map,marker);
		addMarkInfos(loginerId,loginerFamilyName,loginerFirstName,date,markersArray.length);
		markersArray.push(marker);
	});
}

/**
 * 添加地图标记信息
 * @param {Object} loginerId
 * @param {Object} loginerFmailyName
 * @param {Object} loginerFirstName
 * @param {Object} date
 */
function addMarkInfos(loginerId,loginerFamilyName,loginerFirstName,date,markTip){
	var contentStr="<div><table border='0'>"+
				"<tr style='color:red;'><td>标记号：</td><td>"+markTip+"</td></tr>"+
				"<tr><td>操作者编号：</td><td>"+loginerId+"</td></tr>"+
				"<tr><td>操作者姓：</td><td>"+loginerFamilyName+"</td></tr>"+
				"<tr><td>操作者名：</td><td>"+loginerFirstName+"</td></tr>"+
				"<tr><td>标记地址：</td><td>11111</td></tr>"+
				"<tr><td>标记日期：</td><td>"+date+"</td></tr>"+
				"</table></div>";
	var map_markinfos=document.getElementById("map_canvas_markinfos");
	map_markinfos.innerHTML=contentStr;
}

/**
 * 返回所在城市的经纬度的（横坐标）
 * @param {Object} centerLatLng	所在城市的地理信息
 * @param {Object} comCode	所属公司编码
 */
function getComLat(centerLatLng,comCode){
	for(var i=0;i<centerLatLng.length;i++){
		var com=centerLatLng[i];
		if(comCode==com.comCode){
			return com.lat;
		}
	}
}

/**
 * 返回所在城市的经纬度的（纵坐标）
 * @param {Object} centerLatLng	所在城市的地理信息
 * @param {Object} comCode	所属公司编码
 */
function getComLng(centerLatLng,comCode){
	for(var i=0;i<centerLatLng.length;i++){
		var com=centerLatLng[i];
		if(comCode==com.comCode){
			return com.lng;
		}
	}
}

/**
 * 得到所在城市名称 
 * @param {Object} centerLatLng	所在城市的地理信息
 * @param {Object} comCode	所属公司编码
 */
function getCity(centerLatLng,comCode){
	for(var i=0;i<centerLatLng.length;i++){
		var com=centerLatLng[i];
		if(comCode==com.comCode){
			document.getElementById("currentCity").innerHTML=com.region;
			break;
		}
	}
}

/**
 * 隐藏地图上的标记
 */
function clearOverlays() {
  if (markersArray) {
	for (i in markersArray) {
	  markersArray[i].setMap(null);
	}
	markersFlag=false;
  }
}

/**
 * 显示地图上的标记
 */
function showOverlays() {
  if (markersArray) {
	for (i in markersArray) {
	  markersArray[i].setMap(map);
	}
	markersFlag=true;
  }
}

/**
 * 删除地图上的标记
 */
function deleteOverlays() {
  if (markersArray) {
	for (i in markersArray) {
	  markersArray[i].setMap(null);
	}
	markersArray.length = 0;
	markersFlag=false;
  }
}

/**
 * 获取google静态地图
 */
function getStaticMap(){
	var mapCanvasDiv=document.getElementById("map_canvas");
	
	//产生截图的图片（未包括地图上的自定义标记）
	var url_str="http://maps.google.com/maps/api/staticmap?center="+map.getCenter().toUrlValue()+
		"&zoom="+map.getZoom()+"&size="+mapCanvasDiv.scrollHeight+"x"+mapCanvasDiv.scrollWidth+"&maptype=roadmap&sensor=false";
	
	//在地图上创建标记
	if(markersFlag && markersArray.length>0){		
		for(var i=0;i<markersArray.length;i++){
			url_str+="&markers=color:red|label:"+i+"|"+markersArray[i].getPosition().toUrlValue();
		}
	}
	
	return url_str;
}

/**
 * 查询地址
 */
function queryAddr(loginerId,loginerFamilyName,loginerFirstName,date){
	clearOverlays();
	var addr=document.getElementById("address").value;
	geocoder.geocode({
	 address: addr,
	 bounds:map.getBounds()
	},function(result,status){
		// 顯示結果
		if (status == google.maps.GeocoderStatus.OK)  {
			var infowindow=createInfoWindow(loginerId,loginerFamilyName,loginerFirstName,date);
			for (var i=0; i<result.length; i++) {
				var point = result[i].geometry.location;
				var marker = new google.maps.Marker({
					position: point,
					title:addr,
					map: map
				});
				infowindow.open(map,marker);
				google.maps.event.addListener(marker, 'click', function() {
				  	infowindow.open(map,marker);
				});
			}
			markersArray.push(marker);
			markersFlag=true;
		} 
		map.panTo(marker.getPosition());
	});
}

function save(realPath){
	var staticMapSrc=getStaticMap();
	var urlStr=realPath+"demo/saveAsImage.action"; 
	
	$.ffcsAjax({
	   type: 'post',
	   url: urlStr,
	   data:{'staticMapSrc':staticMapSrc},
	   dataType: 'json',
	   success: function(data){
		   $.message.alert("保存成功！");
		},
	   error: function(XMLHttpRequest, textStatus, errorThrown) {
		   alert(textStatus); 
	   }
	});
}
