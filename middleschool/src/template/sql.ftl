<?xml version="1.0"?>
<!DOCTYPE hibernate-mapping PUBLIC "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
"http://hibernate.sourceforge.net/hibernate-mapping-3.0.dtd">
<hibernate-mapping package="${packageName}">
	<query name="${packageName}.${ed.entityName?uncap_first}.removeById">
		<![CDATA[
			<#assign size=0>
			<@compress single_line=true>delete ${ed.entityName} where <#list ed.properties as pd><#if pd.primary><#if size &gt; 0> and </#if>${pd.propertyName}=?<#assign size=1></#if></#list></@compress>
		]]>
	</query>
	<sql-query name="${packageName}.${ed.entityName?uncap_first}.findByPagination">
		<![CDATA[
			select * from ${ed.tableName}
		]]>
	</sql-query>
</hibernate-mapping>