${ed.entityName?uncap_first}.page.main = ${ed.name}首页
${ed.entityName?uncap_first}.page.add = ${ed.name}新建
${ed.entityName?uncap_first}.page.edit = ${ed.name}编辑
${ed.entityName?uncap_first}.page.search = ${ed.name}检索

<#list ed.properties as pd>
${ed.entityName?uncap_first}.${pd.propertyName} = <#if (pd.name)?? && pd.name?trim!=''>${pd.name}<#else>${pd.propertyName}</#if>
</#list>