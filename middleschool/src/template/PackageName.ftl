<@compress single_line=true>
<#assign basePackage="cn.ffcs.txb">
<#switch type>
	<#case "entity">
		${basePackage}.entity
	<#break>
	<#case "dao">
		${basePackage}.dao.${ed.entityName?uncap_first}
	<#break>
	<#case "daoImpl">
		${basePackage}.dao.${ed.entityName?uncap_first}.impl
	<#break>
	<#case "service">
		${basePackage}.${ed.entityName?uncap_first}.service
	<#break>
	<#case "serviceImpl">
		${basePackage}.${ed.entityName?uncap_first}.service.impl
	<#break>
	<#case "controller">
		${basePackage}.${ed.entityName?uncap_first}.controller
	<#break>
	<#case "pdto">
		${basePackage}.${ed.entityName?uncap_first}.dto
	<#break>
	<#case "sqls">
		sqls.app
	<#break>
	<#case "resources">
		resources.app
	<#break>
	<#case "validators">
		validators.app
	<#break>
	<#case "jsp">
		WEB-INF/jsp/app/${ed.entityName?uncap_first}
	<#break>
	<#case "js">
		resources/app/${ed.entityName?uncap_first}/js
	<#break>
	<#case "field">
		fields/app/${ed.entityName?uncap_first}_zh_CN.js
	<#break>
	<#case "message">
		message
	<#break>
	<#default>
		${basePackage}.${ed.entityName?uncap_first}
</#switch>
</@compress>
