package cn.ffcs.txb.entity;

import java.math.BigInteger;

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
@Table(name="paper_report")
@DynamicUpdate(false)
@JsonAutoDetect
public class PaperReport {
	private int id;
	private BigInteger userid;
	private String paperid;

	
	public PaperReport() {
		
	}
	@Id
	@GeneratedValue
	@Column(name="id", columnDefinition="bigint(20) comment '主键ID'")
	public int getId() {
		return id;
	}
	@Column(name="userid", unique=true, columnDefinition="bigint(20) comment '用户ID'")
	public BigInteger getUserid() {
		return userid;
	}
	@Column(name="paperid")
	public String getPaperid() {
		return paperid;
	}
	public void setPaperid(String paperid) {
		this.paperid = paperid;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setUserid(BigInteger userid) {
		this.userid = userid;
	}

	


	
	
	
	
	


}
