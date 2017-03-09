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
@Table(name="introduction")
@DynamicUpdate(false)
@JsonAutoDetect
public class Introduction {
	private int id;
	private String content;
	private Date createtime;
	private String status;

	
	
	
	public Introduction() {
		
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
	@Column(name="content", columnDefinition="createtime comment '创建时间'")
	public String getContent() {
		return content;
	}
	@Column(name="status", columnDefinition="createtime comment '创建时间'")
	public String getStatus() {
		return status;
	}
	
	
	public void setContent(String content) {
		this.content = content;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	
	
	
	


}
