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
@Table(name="feedback")
@DynamicUpdate(false)
@JsonAutoDetect
public class FeedBack {
	private BigInteger id;
	private BigInteger user_id;
	private String feedback_content;
	private Date createtime;
	
	public FeedBack() {
		
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
	@Column(name="feedback_content")
	public String getFeedback_content() {
		return feedback_content;
	}
	public void setFeedback_content(String feedback_content) {
		this.feedback_content = feedback_content;
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
	
	
	
	


}
