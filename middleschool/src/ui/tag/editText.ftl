<#macro genTag attributes styles children>
<@compress single_line=true>
<#list attributes as attribute>
	<#if attribute.definition.code="label">
		<label>${attribute.attributeValue}</label>
		<#break>
	</#if>
</#list>
<input
	<#list attributes as attribute>
		<#if (attribute.attributeValue)?? && (attribute.attributeValue?trim!="") && (attribute.definition.code!="label")>
		${attribute.definition.code}="${attribute.attributeValue}"
		</#if>
	</#list>
	<#if (styles)?? && (styles?size>0)>
		style="
	</#if>
	<#list styles as style>
		<#if (style.value)?? && (style.value?trim!="")>
		${style.definition.code}:${style.value};
		</#if>
	</#list>
	<#if (styles)?? && (styles?size>0)>
		"
	</#if>
>
</@compress>
</#macro>