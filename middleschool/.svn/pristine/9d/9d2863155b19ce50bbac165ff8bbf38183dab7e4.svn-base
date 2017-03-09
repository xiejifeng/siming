<#macro genScript attributes styles children=[]>
<#assign id="">
<#list attributes as attribute>
		<#if (attribute.attributeValue)?? && (attribute.attributeValue?trim!='') && attribute.definition.code='id'>
			<#assign id="${attribute.attributeValue}">
		</#if>
</#list>
<@compress single_line=false>
	$("#${id}").jDatebox({
		<#list attributes as attribute>
			<#if (attribute.attributeValue)?? && (attribute.attributeValue?trim!='') && attribute.definition.code!='id'>
				${attribute.definition.code}:"${attribute.attributeValue}"<#if attribute_has_next>,</#if>
			</#if>
		</#list>
	});
</@compress>
</#macro>