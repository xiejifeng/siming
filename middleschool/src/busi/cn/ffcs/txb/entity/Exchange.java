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
 * 商品兑换记录
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
@Entity
@Table(name="exchange")
@DynamicUpdate(false)
@JsonAutoDetect
public class Exchange {
	private int id;
	private BigInteger user_id;
	private int productid;
	private Date exporttime;
	private Date applytime;
	private String status;
	private String address;
	private String name;
	private String tel;
	
	public Exchange() {
		
	}
	@Id
	@GeneratedValue
	@Column(name="id", columnDefinition="int(11) comment '主键ID'")
	public int getId() {
		return id;
	}
	@Column(name="user_id", unique=true, columnDefinition="bigint(20) comment '用户ID'")
	public BigInteger getUser_id() {
		return user_id;
	}
	@Column(name="exporttime")
	public Date getExporttime() {
		return exporttime;
	}
	@Column(name="applytime")
	public Date getApplytime() {
		return applytime;
	}

	public void setId(int id) {
		this.id = id;
	}
	public void setUser_id(BigInteger user_id) {
		this.user_id = user_id;
	}

	public void setExporttime(Date exporttime) {
		this.exporttime = exporttime;
	}
	public void setApplytime(Date applytime) {
		this.applytime = applytime;
	}
	@Column(name="product_id", columnDefinition="int(11) comment '商品id'")
	public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	
	@Column(name="status")
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	@Column(name="address")
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	
}
