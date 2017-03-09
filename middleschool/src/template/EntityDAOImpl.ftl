
package ${packageName};

import org.springframework.stereotype.Repository;

import cn.ffcs.srp.core.repository.impl.BaseDAOImpl;
import ${entityPackageName}.${ed.entityName};
import ${daoPackageName}.I${ed.entityName}DAO;

/**
 * 
 * 功能描述：${ed.name}<#if ed.comment??  && ed.comment?trim!="">(${ed.comment})</#if>
 *
 * @author ：${author}
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Repository
public class ${ed.entityName}DAOImpl extends BaseDAOImpl<${ed.entityName}> implements I${ed.entityName}DAO{
	
	
}