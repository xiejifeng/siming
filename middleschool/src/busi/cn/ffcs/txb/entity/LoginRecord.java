package cn.ffcs.txb.entity;

import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
@SuppressWarnings("serial")
@Entity
@Table(name="login_record")
@DynamicUpdate(false)
@JsonAutoDetect
public class LoginRecord {
	private BigInteger id;
	private BigInteger user_id;
	private String login_ip;
	private Date login_time;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	public BigInteger getId() {
		return id;
	}
	@Column(name="user_id")
	public BigInteger getUser_id() {
		return user_id;
	}
	@Column(name="login_ip")
	public String getLogin_ip() {
		return login_ip;
	}
	@Column(name="login_time")
	public Date getLogin_time() {
		return login_time;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public void setUser_id(BigInteger user_id) {
		this.user_id = user_id;
	}
	public void setLogin_ip(String login_ip) {
		this.login_ip = login_ip;
	}
	public void setLogin_time(Date login_time) {
		this.login_time = login_time;
	}
	
	


}
