<#macro genTag attributes styles children=[]>
<@compress single_line=true>
<input type="text" 
	<#list attributes as attribute>
		<#if (attribute.attributeValue)?? && (attribute.attributeValue?trim!='') && attribute.definition.code='id'>
			id="${attribute.attributeValue}"
			<#break>
		</#if>
	</#list>
>
</@compress>
</#macro>