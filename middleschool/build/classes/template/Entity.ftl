
package ${packageName};

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
<#if ed.keys?? && (ed.keys?size>1)>
import javax.persistence.IdClass;
</#if>
<#if ed.keys?? && (ed.keys?size>0)>
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
</#if>

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
<#list ed.imports as imp>
<#if (imp??) && (imp?trim != "")>

import ${imp};
</#if>
</#list>

import cn.ffcs.srp.core.entity.IEntity;
import cn.ffcs.srp.validator.group.Edit;

/**
 * 
 * 功能描述：${ed.name}<#if ed.comment?? && ed.comment?trim!="">(${ed.comment})</#if>
 *
 * @author ：${author}
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@SuppressWarnings("serial")
<#if ed.keys?? && (ed.keys?size>1)>
@IdClass(${ed.entityName}PK.class)
</#if>
@Entity
@Table(name="${ed.tableName}")
@DynamicUpdate(false)
@JsonAutoDetect
public class ${ed.entityName} implements IEntity{
	
<#list ed.properties as pd>
	<#if pd.notNullable>
	<#if pd.javaType.name=='String'>
	@NotBlank(message="{${ed.entityName?uncap_first}.${pd.propertyName}.notblank}"<#if pd.primary> ,groups={Edit.class}</#if>)
	<#else>
	@NotNull(message="{${ed.entityName?uncap_first}.${pd.propertyName}.notblank}"<#if pd.primary> ,groups={Edit.class}</#if>)
	</#if>
	</#if>
	<#if (pd.length>0 && pd.javaType.name=='String')>
	@Length(max=${pd.length},message="{${ed.entityName?uncap_first}.${pd.propertyName}.length}")
	</#if>
	<#if pd.max??>
	@DecimalMax(value="${pd.max}",message="{${ed.entityName?uncap_first}.${pd.propertyName}.max}")
	</#if>
	<#if pd.min??>
	@DecimalMin(value="${pd.min}",message="{${ed.entityName?uncap_first}.${pd.propertyName}.min}")
	</#if>
	<#if pd.precision &gt; 0 && pd.length &gt; 0>
	@Digits(fraction=${pd.precision},integer=${pd.length},message="{${ed.entityName?uncap_first}.${pd.propertyName}.digits}")
	</#if>
	private ${pd.javaType.name} ${pd.propertyName};
		
</#list>
	
<#list ed.properties as pd>
	/**
	  * 
	  * 功能描述：${pd.name}<#if pd.comment?? && pd.comment?trim!="">(${pd.comment})</#if>
	  *
	  * @author ：${author}
	  * 创建日期 ：${createDate}
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	<#if pd.primary>
	@Id
	</#if>
	<#if pd.identity>
	@GeneratedValue(strategy=GenerationType.AUTO)
	</#if>
	@Column(name="${pd.columnName}")
	public ${pd.javaType.name} get${pd.propertyName?cap_first}(){
		
		<#if (pd.defaultValue)??>
		return ${pd.propertyName}==null?new ${pd.javaType.name}("${pd.defaultValue}"):${pd.propertyName};
		<#else>	
		return ${pd.propertyName};
		</#if>
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
	public void set${pd.propertyName?cap_first}(${pd.javaType.name} ${pd.propertyName}){
		
		this.${pd.propertyName}=${pd.propertyName};
	}
</#list>
}