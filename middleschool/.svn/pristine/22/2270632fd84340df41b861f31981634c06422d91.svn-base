<#include "common.ftl">
package ${packageName};

import java.util.Map;

import cn.ffcs.srp.core.service.IService;
import cn.ffcs.srp.ui.model.PaginationData;
import ${entityPackageName}.${ed.entityName};
import ${pdtoPackageName}.${ed.entityName}PaginationDTO;

/**
 * 
 * 功能描述：${ed.name}<#if ed.comment??  && ed.comment?trim!="">(${ed.comment})</#if>
 *
 * @author ：${author}
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public interface I${ed.entityName}Service extends IService{
	
	void save(${ed.entityName} ${ed.entityName?uncap_first});
	
	void update(${ed.entityName} ${ed.entityName?uncap_first});
	
	void removeById(<@primaryKeys delimiter=","/>);
	
	${ed.entityName} findById(<@compress single_line=true><@primaryKeys delimiter=","/></@compress>);
	
	PaginationData<Map<String,Object>> findByPagination(${ed.entityName}PaginationDTO pagination);
}