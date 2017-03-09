package cn.ffcs.txb.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

/**
 * 
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
@Entity
@Table(name="schart")
@DynamicUpdate(false)
@JsonAutoDetect
public class Schart {
	private int id;
	private Date createtime;
	private String school_id;
	private String area_id;
	private String status;
	private int priority;
	
	public Schart() {
		
	}
	@Id
	@GeneratedValue
	@Column(name="id")
	public int getId() {
		return id;
	}
	@Column(name="createtime", columnDefinition="createtime comment '创建时间'")
	public Date getCreatetime() {
		return createtime;
	}
	@Column(name="school_id", columnDefinition="createtime comment '创建时间'")
	public String getSchool_id() {
		return school_id;
	}
	

	@Column(name="status", columnDefinition="createtime comment '创建时间'")
	public String getStatus() {
		return status;
	}
	@Column(name="area_id", columnDefinition="createtime comment '创建时间'")
	public String getArea_id() {
		return area_id;
	}
	public void setArea_id(String area_id) {
		this.area_id = area_id;
	}
	@Column(name="priority", columnDefinition="createtime comment '创建时间'")
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setSchool_id(String school_id) {
		this.school_id = school_id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	
	
	
	


}
