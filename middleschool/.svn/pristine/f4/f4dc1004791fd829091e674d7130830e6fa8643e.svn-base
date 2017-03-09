<#include "common.ftl">
$(function(){
	$("#save").jButton({
		plain:false,
		iconCls:'icon-save'
	});
	$("#reset").jButton({
		plain:false,
		iconCls:'icon-undo'
	});
	<#list ed.properties as pd>
	<#if !pd.primary>
	<#if pd.javaType.name='String'>
	$("#${pd.propertyName}").validate({
		<#if pd.notNullable>required:true,</#if>
		<#if (pd.length>0)>validType:'length[0,${pd.length}]',</#if>
		msgPoint:'R'
	});
	<#elseif pd.javaType.name='BigDecimal' || pd.javaType.name='Double' || pd.javaType.name='Float' || pd.javaType.name='Integer' || pd.javaType.name='Short' || pd.javaType.name='Long'>
	$("#${pd.propertyName}").number({
		<#if pd.notNullable>required:true,</#if>
		<#if pd.max??>max:${pd.max},</#if>
		<#if pd.min??>min:${pd.min},</#if>
		<#if pd.precision??>precision:${pd.precision},</#if>
		msgPoint:'R'
	});
	<#elseif pd.javaType.name='Date'>
	$("#${pd.propertyName}").jDatetimebox();
	</#if>
	</#if>
	</#list>
	
	$("#save").click(function(){
		
		$("#frm").ajaxForm("submit",{
				url:web_path+"${ed.entityName?uncap_first}/save${ed.entityName}.${suffix}",
				ismessage:false,
				issuccessmsg:false,
				isLoadMsg:true,
				success:function(data,status){
					if(data.id){
						$("#add_${ed.entityName?uncap_first}_win").closeWindow();
						$("#${ed.entityName?uncap_first}_grid").jDatagrid("load");
					}
				}
		}); 
	});
	$("#reset").click(function(){
		$("#frm").ajaxForm("clear"); 
	});
});