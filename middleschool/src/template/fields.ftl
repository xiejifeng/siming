var fields={
	"grid_operate":"操作",
	"grid_title":"${ed.name}列表",
	<#list ed.properties as pd>
	"${pd.propertyName}":"<#if (pd.name)?? && pd.name?trim!=''>${pd.name}<#else>${pd.propertyName}</#if>"<#if pd_has_next>,</#if>
	</#list>
};