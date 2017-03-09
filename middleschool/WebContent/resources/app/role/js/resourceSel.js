$(function(){
	$('#resource-tree').jTree({
        checkbox: true,
         //       url:web_path+"role/queryResource.srp?roleId="+$("#roleId").val(),
        url:web_path+"roleExpand/getRoleFunctionPoint.do?roleid="+$("#roleId").val(),
        onClick:function(node){
        	
        },
        onLoadSuccess:function(){
        	$('#resource-tree').jTree('collapseAll');
        	var roots = $('#resource-tree').jTree('getRoots');
        	if(roots.length>0){
        		$('#resource-tree').jTree('expand', roots[0].target);
        	}
        }
    });
	
	$("#save").click(function(){

		var nodes = $('#resource-tree').tree('getAllChecked');
		var param={"id":$('#roleId').val()};
		for(var i=0; i<nodes.length; i++){
			var str='{"resources['+i+'].id":'+nodes[i].id+'}';
			var obj=eval("("+str+")");
			$.extend(param,obj);
		}
		$.ffcsAjax({
			url:web_path+"role/grantRole.srp",
			data:param,
			ismessage:true,
			isLoadMsg:true,
			issuccessmsg:true,
			success:function(data){
				if(data){
					$("#grant_role_win").closeWindow();
				}
			}
		});
	});
});