$(function(){
	<#list elements as element>
	<#import "tag/${element.definition.scriptTemplate}" as script/>
	<@script.genScript attributes=element.attributes styles=element.styles children=element.children/>
	</#list>
});
