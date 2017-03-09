
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
 * @author ：ruanzhzh
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@SuppressWarnings("serial")
@Entity
@Table(name="category")
@DynamicUpdate(false)
@JsonAutoDetect
public class Category implements IEntity{
	
	private Integer id;
		
	private String category;
		
	private String type;
		
	private String coder;
		
	private String name;
		
	private String description;
		
	private String image;
		
	private Integer total;
		
	private Integer order;
		
	private Integer cache;
		
	private Boolean model;
		
	private Date start;
		
	private Date end;
		
	private Boolean authority;
		
	private Date createtime;
		
	private String columns;
		
	private String issuetype;
		
	private String issuefrequency;
		
	private String timingissueweek;
		
	private String timingissuetime;
		
	
	/**
	  * 
	  * 功能描述：ID(ID)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
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
	  * 功能描述：ID(ID)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
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
	  * 功能描述：节目ID(节目ID)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="Category")
	public String getCategory(){
		
		return category;
	}
		
	/**
	  * 
	  * 功能描述：节目ID(节目ID)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setCategory(String category){
		
		this.category=category;
	}
	/**
	  * 
	  * 功能描述：节目类型(节目类型)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="type")
	public String getType(){
		
		return type;
	}
		
	/**
	  * 
	  * 功能描述：节目类型(节目类型)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setType(String type){
		
		this.type=type;
	}
	/**
	  * 
	  * 功能描述：编号(编号)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="coder")
	public String getCoder(){
		
		return coder;
	}
		
	/**
	  * 
	  * 功能描述：编号(编号)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setCoder(String coder){
		
		this.coder=coder;
	}
	/**
	  * 
	  * 功能描述：节目名称(节目名称)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="name")
	public String getName(){
		
		return name;
	}
		
	/**
	  * 
	  * 功能描述：节目名称(节目名称)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setName(String name){
		
		this.name=name;
	}
	/**
	  * 
	  * 功能描述：描述(描述)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="description")
	public String getDescription(){
		
		return description;
	}
		
	/**
	  * 
	  * 功能描述：描述(描述)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setDescription(String description){
		
		this.description=description;
	}
	/**
	  * 
	  * 功能描述：图片位置(图片位置)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="image")
	public String getImage(){
		
		return image;
	}
		
	/**
	  * 
	  * 功能描述：图片位置(图片位置)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setImage(String image){
		
		this.image=image;
	}
	/**
	  * 
	  * 功能描述：数量(数量)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="total")
	public Integer getTotal(){
		
		return total;
	}
		
	/**
	  * 
	  * 功能描述：数量(数量)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setTotal(Integer total){
		
		this.total=total;
	}
	/**
	  * 
	  * 功能描述：排序(排序)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="order")
	public Integer getOrder(){
		
		return order;
	}
		
	/**
	  * 
	  * 功能描述：排序(排序)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setOrder(Integer order){
		
		this.order=order;
	}
	/**
	  * 
	  * 功能描述：缓存(缓存)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="cache")
	public Integer getCache(){
		
		return cache;
	}
		
	/**
	  * 
	  * 功能描述：缓存(缓存)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setCache(Integer cache){
		
		this.cache=cache;
	}
	/**
	  * 
	  * 功能描述：目录类型(目录类型)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="model")
	public Boolean getModel(){
		
		return model;
	}
		
	/**
	  * 
	  * 功能描述：目录类型(目录类型)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setModel(Boolean model){
		
		this.model=model;
	}
	/**
	  * 
	  * 功能描述：生命期起始时间(生命期起始时间)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="start")
	public Date getStart(){
		
		return start;
	}
		
	/**
	  * 
	  * 功能描述：生命期起始时间(生命期起始时间)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setStart(Date start){
		
		this.start=start;
	}
	/**
	  * 
	  * 功能描述：生命期终止时间(生命期终止时间)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="end")
	public Date getEnd(){
		
		return end;
	}
		
	/**
	  * 
	  * 功能描述：生命期终止时间(生命期终止时间)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setEnd(Date end){
		
		this.end=end;
	}
	/**
	  * 
	  * 功能描述：授权(授权)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="authority")
	public Boolean getAuthority(){
		
		return authority;
	}
		
	/**
	  * 
	  * 功能描述：授权(授权)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setAuthority(Boolean authority){
		
		this.authority=authority;
	}
	/**
	  * 
	  * 功能描述：创建时间(创建时间)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="createtime")
	public Date getCreatetime(){
		
		return createtime;
	}
		
	/**
	  * 
	  * 功能描述：创建时间(创建时间)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setCreatetime(Date createtime){
		
		this.createtime=createtime;
	}
	/**
	  * 
	  * 功能描述：栏目(栏目)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="columns")
	public String getColumns(){
		
		return columns;
	}
		
	/**
	  * 
	  * 功能描述：栏目(栏目)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setColumns(String columns){
		
		this.columns=columns;
	}
	/**
	  * 
	  * 功能描述：发布类型(发布类型)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="issueType")
	public String getIssuetype(){
		
		return issuetype;
	}
		
	/**
	  * 
	  * 功能描述：发布类型(发布类型)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setIssuetype(String issuetype){
		
		this.issuetype=issuetype;
	}
	/**
	  * 
	  * 功能描述：发布频率(发布频率)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="issueFrequency")
	public String getIssuefrequency(){
		
		return issuefrequency;
	}
		
	/**
	  * 
	  * 功能描述：发布频率(发布频率)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setIssuefrequency(String issuefrequency){
		
		this.issuefrequency=issuefrequency;
	}
	/**
	  * 
	  * 功能描述：定时发布星期(定时发布星期)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="timingIssueWeek")
	public String getTimingissueweek(){
		
		return timingissueweek;
	}
		
	/**
	  * 
	  * 功能描述：定时发布星期(定时发布星期)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setTimingissueweek(String timingissueweek){
		
		this.timingissueweek=timingissueweek;
	}
	/**
	  * 
	  * 功能描述：定时发布时间点(定时发布时间点)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	@Column(name="timingIssueTime")
	public String getTimingissuetime(){
		
		return timingissuetime;
	}
		
	/**
	  * 
	  * 功能描述：定时发布时间点(定时发布时间点)
	  *
	  * @author ：ruanzhzh
	  * 创建日期 ：2014-12-12 09:37:31
	  *
	  * @return
	  *
	  * 修改历史 ：(修改人，修改时间，修改原因/内容)
	  */
	public void setTimingissuetime(String timingissuetime){
		
		this.timingissuetime=timingissuetime;
	}
}