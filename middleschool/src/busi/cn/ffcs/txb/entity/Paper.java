package cn.ffcs.txb.entity;

import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

/**
 * 试卷表
 * @author Administrator
 */
@SuppressWarnings("serial")
@Entity
@Table(name="paper")
@DynamicUpdate(false)
@JsonAutoDetect
public class Paper {
	private int id;
	private String paperid;
	private String name;
	private Date createtime;
	private String subjectid;
	private String questnum;
	private String isNew;
	
	
	
	public Paper() {
		
	}
	@Id
	@GeneratedValue
	@Column(name="id", columnDefinition="bigint(20) comment '主键ID'")
	public int getId() {
		return id;
	}
	@Column(name="createtime", columnDefinition="createtime comment '创建时间'")
	public Date getCreatetime() {
		return createtime;
	}
	@Column(name="paperid", columnDefinition="createtime comment '创建时间'")
	public String getPaperid() {
		return paperid;
	}
	public void setPaperid(String paperid) {
		this.paperid = paperid;
	}
	@Column(name="name", columnDefinition="createtime comment '创建时间'")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Column(name="subjectid", columnDefinition="createtime comment '创建时间'")
	public String getSubjectid() {
		return subjectid;
	}
	@Column(name="quesnum")
	public String getQuestnum() {
		return questnum;
	}
	
	@Column(name="isnew")
	public String getIsNew() {
		return isNew;
	}
	public void setIsNew(String isNew) {
		this.isNew = isNew;
	}
	public void setQuestnum(String questnum) {
		this.questnum = questnum;
	}
	public void setSubjectid(String subjectid) {
		this.subjectid = subjectid;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	
	
	
	


}
