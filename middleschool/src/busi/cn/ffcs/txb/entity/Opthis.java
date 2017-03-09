
package cn.ffcs.txb.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import cn.ffcs.srp.core.entity.IEntity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

/**
 * 
 * 功能描述：
 *
 * @author ：g-chengt
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@SuppressWarnings("serial")
@Entity
@Table(name="opt_his")
@DynamicUpdate(false)
@JsonAutoDetect
public class Opthis implements IEntity{
	
	private Integer id;
		
	private String username;
		
	private Date updateDate;
		
	private String logContent;
		
	
	/**
	  * 
	  * 功能描述：
	  *
	  * @author ：g-chengt
	  * 创建日期 ：2014-07-18 09:59:53
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	public Integer getId(){
		
		return id;
	}
		
	/**
	  * 
	  * 功能描述：
	  *
	  * @author ：g-chengt
	  * 创建日期 ：2014-07-18 09:59:53
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setId(Integer id){
		
		this.id=id;
	}
	/**
	  * 
	  * 功能描述：
	  *
	  * @author ：g-chengt
	  * 创建日期 ：2014-07-18 09:59:53
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="username")
	public String getUsername(){
		
		return username;
	}
		
	/**
	  * 
	  * 功能描述：
	  *
	  * @author ：g-chengt
	  * 创建日期 ：2014-07-18 09:59:53
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setUsername(String username){
		
		this.username=username;
	}
	/**
	  * 
	  * 功能描述：
	  *
	  * @author ：g-chengt
	  * 创建日期 ：2014-07-18 09:59:53
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="updateDate")
	public Date getUpdateDate(){
		
		return updateDate==null?new Date("CURRENT_TIMESTAMP"):updateDate;
	}
		
	/**
	  * 
	  * 功能描述：
	  *
	  * @author ：g-chengt
	  * 创建日期 ：2014-07-18 09:59:53
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setUpdateDate(Date updateDate){
		
		this.updateDate=updateDate;
	}
	/**
	  * 
	  * 功能描述：
	  *
	  * @author ：g-chengt
	  * 创建日期 ：2014-07-18 09:59:53
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="logContent")
	public String getLogContent(){
		
		return logContent;
	}
		
	/**
	  * 
	  * 功能描述：
	  *
	  * @author ：g-chengt
	  * 创建日期 ：2014-07-18 09:59:53
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setLogContent(String logContent){
		
		this.logContent=logContent;
	}
}