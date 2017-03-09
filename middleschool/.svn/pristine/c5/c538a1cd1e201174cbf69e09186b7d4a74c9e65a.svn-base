<#include "common.ftl">
$(function(){
	$("#${ed.entityName?uncap_first}_grid").jDatagrid({
		title:$.getLocaleField("grid_title","${ed.entityName?uncap_first}"),
		height:"auto",
		width:"100%",
		fit:false,
		fitColumns:true,
		nowrap:false,
		striped:true,
		singleSelect:true,
		collapsible : true,
		url:web_path+"${ed.entityName?uncap_first}/${ed.entityName?uncap_first}List.${suffix}",
		remoteSort : true,
		isInitLoad : true,
		rownumbers:true,
		sortName:'id',
		sortOrder:'desc',
		queryParams:{},
		pagination : true,
		frozenColumns:[[
		                {title:$.getLocaleField("grid_operate","${ed.entityName?uncap_first}"),
			             field:"id",
			             width:70,
			             formatter:function(value,row,rowindex){
			                	return '<a href="javascript:void(0);" name="edit" code="'+row['id']+'"></a>'
			                		+'<a href="javascript:void(0);" name="delete" code="'+row['id']+'"></a>';
			                }
		                }
		]],
		columns:[[
				<#list ed.properties as pd>
				<#if !pd.primary>
				{title:$.getLocaleField("${pd.propertyName}","${ed.entityName?uncap_first}"),field:'${pd.columnName}',width:120,align:'center'}<#if pd_has_next>,</#if>
				</#if>
				</#list>
		]],
		toolbar:[$.authButton('新增功能编码',function(data){
		    	   $.openWindow({
		    		   id:"add_${ed.entityName?uncap_first}_win",
		    		   resizable:false,
		    		   draggable:false,
		    		   iconCls:data.iconCls,
		    		   title:data.name,
		    		   type:'html',
		    		   width:380,
		    		   height:365,
		    		   modal:true,
		    		   url:web_path+"${ed.entityName?uncap_first}/${ed.entityName?uncap_first}Add.srp",
		    		   onLoadSuccess:function(data){
		    			   $.loadJs("${jsPath}/${ed.entityName?uncap_first}Add.js");
		    		   },
		    		   onClose:function(data){
							
		    		   }
		    	   },true);
		       }),'-',$.authButton('检索功能编码',function(data){
		    	   $.openWindow({
		    		   id:"search_${ed.entityName?uncap_first}_win",
		    		   resizable:false,
		    		   draggable:false,
		    		   iconCls:data.iconCls,
		    		   title:data.name,
		    		   type:'html',
		    		   width:380,
		    		   height:205,
		    		   modal:true,
		    		   url:web_path+"${ed.entityName?uncap_first}/${ed.entityName?uncap_first}Search.${suffix}",
		    		   onLoadSuccess:function(data){
		    			   $.loadJs("${jsPath}/${ed.entityName?uncap_first}Search.js");
		    		   },
		    		   onClose:function(data){

		    		   }
		    	   },true);
		       }),'-'],
		onLoadSuccess:function(){
			$("a[name='edit']").authButton("编辑编码",function(target,data){
				$.openWindow({
		    		   id:"edit_${ed.entityName?uncap_first}_win",
		    		   resizable:false,
		    		   draggable:false,
		    		   iconCls:data?data.iconCls:'icon-edit',
		    		   title:data?data.name:'edit',
		    		   type:'html',
		    		   width:380,
		    		   height:305,
		    		   modal:true,
		    		   url:web_path+"${ed.entityName?uncap_first}/${ed.entityName?uncap_first}Edit.srp?id="+$(target).attr("code"),
		    		   onLoadSuccess:function(data){
		    			   $.loadJs("${jsPath}/${ed.entityName?uncap_first}Edit.js");
		    		   },
		    		   onClose:function(data){
		    			   
		    		   }
		    	   },true);
			},true);
			$("a[name='delete']").authButton("删除功能编码",function(target){
				$.ffcsAjax({
					url:web_path+"${ed.entityName?uncap_first}/delete${ed.entityName}.${suffix}",
					data:{'id':$(target).attr("code")},
					ismessage:true,
					isLoadMsg:true,
					issuccessmsg:true,
					success:function(data){
						if(data){
							$("#${ed.entityName?uncap_first}_grid").jDatagrid("reload");
						}
					}
				});
			},true);
			
		}
	});
});