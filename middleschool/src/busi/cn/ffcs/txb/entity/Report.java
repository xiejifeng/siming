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
 * 签到记录实体
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
@Entity
@Table(name="report")
@DynamicUpdate(false)
@JsonAutoDetect
public class Report {
	private BigInteger id;
	private BigInteger user_id;
	private String  topic_id;
	private String course_id;
	private String status;
	private String topic_name;
	private String imgname;
	private String paperid;
	private Date createtime;

	
	public Report() {
		
	}
	@Id
	@GeneratedValue
	@Column(name="id", columnDefinition="bigint(20) comment '主键ID'")
	public BigInteger getId() {
		return id;
	}
	@Column(name="user_id", unique=true, columnDefinition="bigint(20) comment '用户ID'")
	public BigInteger getUser_id() {
		return user_id;
	}
	@Column(name="topic_id")
	public String getTopic_id() {
		return topic_id;
	}
	@Column(name="course_id")
	public String getCourse_id() {
		return course_id;
	}
	@Column(name="status")
	public String getStatus() {
		return status;
	}
	@Column(name="createtime")
	public Date getCreatetime() {
		return createtime;
	}
	@Column(name="topic_name")
	public String getTopic_name() {
		return topic_name;
	}
	@Column(name="imgname")
	public String getImgname() {
		return imgname;
	}
	@Column(name="paperid")
	public String getPaperid() {
		return paperid;
	}
	public void setPaperid(String paperid) {
		this.paperid = paperid;
	}
	public void setImgname(String imgname) {
		this.imgname = imgname;
	}
	public void setTopic_name(String topic_name) {
		this.topic_name = topic_name;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public void setUser_id(BigInteger user_id) {
		this.user_id = user_id;
	}
	public void setTopic_id(String topic_id) {
		this.topic_id = topic_id;
	}
	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}

	
	
	
	
	


}
