<#include "common.ftl">
package ${packageName};

import java.util.Map;
import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.ffcs.srp.core.service.impl.ServiceImpl;
import cn.ffcs.srp.ui.model.PaginationData;
import ${entityPackageName}.${ed.entityName};
import ${daoPackageName}.I${ed.entityName}DAO;
import ${servicePackageName}.I${ed.entityName}Service;
import ${pdtoPackageName}.${ed.entityName}PaginationDTO;

/**
 * 
 * 功能描述：${ed.name}<#if ed.comment??  && ed.comment?trim!="">(${ed.comment})</#if>
 *
 * @author ：${author}
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Service
public class ${ed.entityName}ServiceImpl extends ServiceImpl implements I${ed.entityName}Service{
	
	@Resource
	private I${ed.entityName}DAO ${ed.entityName?uncap_first}DAO;
	
	
	@Override
	public void save(${ed.entityName} ${ed.entityName?uncap_first}){
		
		this.${ed.entityName?uncap_first}DAO.save(${ed.entityName?uncap_first});
	}
	
	@Override
	public void update(${ed.entityName} ${ed.entityName?uncap_first}){
		
		this.${ed.entityName?uncap_first}DAO.update(${ed.entityName?uncap_first});
	}
	
	@Override
	public void removeById(<@primaryKeys delimiter=","/>){
		
		this.${ed.entityName?uncap_first}DAO.doExecuteUpdateAndNamedQuery("${entityPackageName}.${ed.entityName?uncap_first}.removeById", new Object[]{<@primaryValues delimiter=","/>});
	}
	
	<#macro primaryNames>
	<#assign size=0>
	<#list ed.properties as pd><#if pd.primary><#if size &gt; 0> , </#if>"${pd.propertyName}"<#assign size=1></#if></#list><#t>
	</#macro>
	@Override
	public ${ed.entityName} findById(<@compress single_line=true><@primaryKeys delimiter=","/></@compress>){
		
		<#if ed.keys?size==1>
		return this.${ed.entityName?uncap_first}DAO.get(<@primaryValues delimiter=","/>);
		<#else>
		return this.${ed.entityName?uncap_first}DAO.findByPropertiesAndUnique(new String[]{<@primaryNames />},new Object[]{<@primaryValues delimiter=","/>});
		</#if>
	}
	
	@Override
	public PaginationData<Map<String,Object>> findByPagination(${ed.entityName}PaginationDTO pagination){
		
		return this.${ed.entityName?uncap_first}DAO.findByPaginationAndDynamicCondition("${entityPackageName}.${ed.entityName?uncap_first}.findByPagination",pagination);
	}
}