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
@Table(name="sign")
@DynamicUpdate(false)
@JsonAutoDetect
public class Sign {
	private BigInteger id;
	private BigInteger user_id;
	private String course_id;
	private Date signtime;
	private Date createtime;
	private String course_name;
	
	
	
	public Sign() {
		
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
	@Column(name="course_id", columnDefinition="course_id comment '课程id'")
	public String getCourse_id() {
		return course_id;
	}
	@Column(name="signtime", columnDefinition="signtime comment '签到时间'")
	public Date getSigntime() {
		return signtime;
	}
	@Column(name="createtime", columnDefinition="createtime comment '创建时间'")
	public Date getCreatetime() {
		return createtime;
	}
	
	
	@Column(name="course_name", columnDefinition="course_name comment '课程名称'")
	public String getCourse_name() {
		return course_name;
	}
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public void setUser_id(BigInteger user_id) {
		this.user_id = user_id;
	}
	
	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	public void setSigntime(Date signtime) {
		this.signtime = signtime;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	
	
	
	


}
