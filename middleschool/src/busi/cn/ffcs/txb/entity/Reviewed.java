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
 * 用户审核记录
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
@Entity
@Table(name="reviewed")
@DynamicUpdate(false)
@JsonAutoDetect
public class Reviewed {
	private BigInteger id;
	private BigInteger user_id;
	private BigInteger teacher_id;
	private String teacher_tel;
	private Date createtime;
	private String reviewed_before_type;
	private String reviewed_after_type;

	
	
	
	public Reviewed() {
		
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
	@Column(name="createtime", columnDefinition="createtime comment '创建时间'")
	public Date getCreatetime() {
		return createtime;
	}
	@Column(name="teacher_id")
	public BigInteger getTeacher_id() {
		return teacher_id;
	}
	@Column(name="teacher_tel")
	public String getTeacher_tel() {
		return teacher_tel;
	}
	@Column(name="reviewed_before_type")
	public String getReviewed_before_type() {
		return reviewed_before_type;
	}
	@Column(name="reviewed_after_type")
	public String getReviewed_after_type() {
		return reviewed_after_type;
	}
	
	
	
	
	public void setId(BigInteger id) {
		this.id = id;
	}
	public void setUser_id(BigInteger user_id) {
		this.user_id = user_id;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	public void setTeacher_id(BigInteger teacher_id) {
		this.teacher_id = teacher_id;
	}
	public void setTeacher_tel(String teacher_tel) {
		this.teacher_tel = teacher_tel;
	}
	public void setReviewed_before_type(String reviewed_before_type) {
		this.reviewed_before_type = reviewed_before_type;
	}
	public void setReviewed_after_type(String reviewed_after_type) {
		this.reviewed_after_type = reviewed_after_type;
	}
	
	
	
	


}
