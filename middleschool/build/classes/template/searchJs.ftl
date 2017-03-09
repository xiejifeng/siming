$(function(){
	$("#search").jButton({
		plain:false,
		iconCls:'icon-search'
	});
	
	$("#reset").jButton({
		plain:false,
		iconCls:'icon-undo'
	});
	
	<#list ed.properties as pd>
	<#if !pd.primary && !pd.search>
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
	
	$("#reset").click(function(){
		$("#frm").ajaxForm("clear"); 
	});
	
	$("#search").click(function(){
		$("#${ed.entityName?uncap_first}_grid").jDatagrid("load",$.formItems($("#frm")));
		$("#search_${ed.entityName?uncap_first}_win").closeWindow();
	});
});