<#list ed.properties as pd>
<#if pd.notNullable>
${ed.entityName?uncap_first}.${pd.propertyName}.notblank = ${pd.name}不能为空
</#if>
<#if (pd.length>0)>
${ed.entityName?uncap_first}.${pd.propertyName}.length = ${pd.name}长度要求不大于{max}位
</#if>
<#if pd.max??>
${ed.entityName?uncap_first}.${pd.propertyName}.max = ${pd.name}最大值为${pd.max}
</#if>
<#if pd.min??>
${ed.entityName?uncap_first}.${pd.propertyName}.min = ${pd.name}最小值为${pd.min}
</#if>
<#if pd.precision &gt; 0 && pd.length &gt; 0>
${ed.entityName?uncap_first}.${pd.propertyName}.digits = ${pd.name}要求${pd.length}位整数,${pd.precision}位小数
</#if>
</#list>