<#macro primaryKeys delimiter>
<#assign size=0>
<#list ed.properties as pd><#if pd.primary><#if size &gt; 0> ${delimiter} </#if>${pd.javaType.name} ${pd.propertyName}<#assign size=1></#if></#list><#t>
</#macro>
<#macro primaryValues delimiter>
<#assign size=0>
<#list ed.properties as pd><#if pd.primary><#if size &gt; 0> ${delimiter} </#if>${pd.propertyName}<#assign size=1></#if></#list><#t>
</#macro>

<#assign suffix="srp">