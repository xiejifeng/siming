$(function(){
	<#list elements as element>
	<#if (element.definition.scriptTemplate)?? && (element.definition.scriptTemplate)?trim!="">
	<#import "script/${element.definition.scriptTemplate}" as script/>
	<@script.genScript attributes=element.attributes styles=element.styles children=element.children/>
	</#if>
	</#list>
});