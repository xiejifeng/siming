<#macro genTag attributes styles children=[]>
<@compress single_line=true>
<table
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
<#if !(children??) || (children?size=0)>
</table>
</#if>
</@compress>
<#list children as child>
<#import "${child.definition.tagTemplate}" as childTag/>
<@childTag.genTag attributes=child.attributes styles=child.styles children=child.children/>
</#list>
</#macro>