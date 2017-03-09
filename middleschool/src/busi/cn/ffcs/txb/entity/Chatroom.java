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
@Table(name="chatroom")
@DynamicUpdate(false)
@JsonAutoDetect
public class Chatroom {
	private int id;
	private String name;
	private String targetId;
	private int status;
	private Date createtime;
	
	
	
	public Chatroom() {
		
	}
	@Id
	@GeneratedValue
	@Column(name="id", columnDefinition="bigint(20) comment '主键ID'")
	public int getId() {
		return id;
	}
	@Column(name="name")
	public String getName() {
		return name;
	}
	@Column(name="targetId")
	public String getTargetId() {
		return targetId;
	}
	@Column(name="status")
	public int getStatus() {
		return status;
	}
	@Column(name="createtime", columnDefinition="createtime comment '创建时间'")
	public Date getCreatetime() {
		return createtime;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setTargetId(String targetId) {
		this.targetId = targetId;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	
	
	

	
	
	


}
