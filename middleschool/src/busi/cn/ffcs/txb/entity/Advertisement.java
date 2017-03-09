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
@Table(name="advertisement")
@DynamicUpdate(false)
@JsonAutoDetect
public class Advertisement {
	private int id;
	private Date createtime;
	private String img_url;
	private String click_url;
	private String priority;
	private String status;
	private int keeptime;


	
	
	
	public Advertisement() {
		
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
	@Column(name="img_url")
	public String getImg_url() {
		return img_url;
	}
	@Column(name="click_url")
	public String getClick_url() {
		return click_url;
	}
	@Column(name="priority")
	public String getPriority() {
		return priority;
	}
	@Column(name="status")
	public String getStatus() {
		return status;
	}
	
	@Column(name="keeptime")
	public int getKeeptime() {
		return keeptime;
	}
	public void setKeeptime(int keeptime) {
		this.keeptime = keeptime;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	public void setClick_url(String click_url) {
		this.click_url = click_url;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	


}
