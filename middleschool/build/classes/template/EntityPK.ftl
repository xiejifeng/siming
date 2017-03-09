
package ${packageName};

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
<#list ed.imports as imp>
<#if (imp??) && (imp?trim != "")>

import ${imp};
</#if>
</#list>

import cn.ffcs.srp.core.entity.IEntity;

/**
 * 
 * 功能描述：${ed.name}主键<#if ed.comment??  && ed.comment?trim!="">(${ed.comment})</#if>
 *
 * @author ：${author}
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
<#assign className=ed.entityName+"PK">
@SuppressWarnings("serial")
public class ${className} implements IEntity{
	
	<#list ed.keys as pd>
	private ${pd.javaType.name} ${pd.propertyName};
	</#list>
	
	<#list ed.keys as pd>
	/**
	 * 
	 * 功能描述：${pd.name}<#if pd.comment??  && pd.comment?trim!="">(${pd.comment})</#if>
	 *
	 * @author ：${author}
	 * 创建日期 ：${createDate}
	 *
	 * @return
	 *
	 * 修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	public ${pd.javaType.name} get${pd.propertyName?capitalize}(){
			
		return ${pd.propertyName};
	}
		
	/**
	 * 
	 * 功能描述：${pd.name}<#if pd.comment??  && pd.comment?trim!="">(${pd.comment})</#if>
	 *
	 * @author ：${author}
	 * 创建日期 ：${createDate}
	 *
	 * @return
	 *
	 * 修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	public void set${pd.propertyName?capitalize}(${pd.javaType.name} ${pd.propertyName}){
		
		this.${pd.propertyName}=${pd.propertyName};
	}
	</#list>
	
	@Override
    public int hashCode() {

        return new HashCodeBuilder()
        		<#list ed.keys as pd>
                .append(get${pd.propertyName?capitalize}())
                </#list>
        		.toHashCode();
    }

    @Override
    public boolean equals(Object obj) {

        if (obj == null) {
            return false;
        }
        if (obj == this) {
            return true;
        }
        if (obj.getClass() != getClass()) {
            return false;
        }
        ${className} e = (${className}) obj;
        return new EqualsBuilder()
                .appendSuper(super.equals(obj))
                <#list ed.keys as pd>
                .append(get${pd.propertyName?capitalize}(), e.get${pd.propertyName?capitalize}())
                </#list>
                .isEquals();
    }
}