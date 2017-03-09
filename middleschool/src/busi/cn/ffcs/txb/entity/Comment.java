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
@Table(name="comment")
@DynamicUpdate(false)
@JsonAutoDetect
public class Comment {
	private int id;
	private BigInteger user_id;
	private String message;
	private String course_id;
	private Date createtime;
	
	public Comment() {
		
	}
	@Id
	@GeneratedValue
	@Column(name="id", columnDefinition="bigint(20) comment '主键ID'")
	public int getId() {
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
	@Column(name="message", columnDefinition="createtime comment '评论内容'")
	public String getMessage() {
		return message;
	}
	@Column(name="course_id", columnDefinition="createtime comment '评论内容'")
	public String getCourse_id() {
		return course_id;
	}
	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setUser_id(BigInteger user_id) {
		this.user_id = user_id;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	


}
