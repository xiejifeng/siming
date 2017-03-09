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
@Table(name="score")
@DynamicUpdate(false)
@JsonAutoDetect
public class Score {
	private BigInteger id;
	private BigInteger user_id;
	private BigInteger flow_exchange_id;
	private int now_score;
	private int incr_score;
	private int last_score;
	private String score_change_type;
	private String remark;
	private Date createtime;

	
	
	public Score() {
		
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
	@Column(name="flow_exchange_id", columnDefinition="int(20) comment '流量兑换记录'")
	public BigInteger getFlow_exchange_id() {
		return flow_exchange_id;
	}
	@Column(name="now_score", columnDefinition="int(20) comment '当前积分'")
	public int getNow_score() {
		return now_score;
	}
	@Column(name="incr_score", columnDefinition="int(20) comment '积分增量'")
	public int getIncr_score() {
		return incr_score;
	}
	@Column(name="last_score", columnDefinition="int(20) comment '最后积分'")
	public int getLast_score() {
		return last_score;
	}
	@Column(name="score_change_type", columnDefinition="int(20) comment '积分兑换类型'")
	public String getScore_change_type() {
		return score_change_type;
	}
	@Column(name="remark", columnDefinition="varchar(200) comment '备注'")
	public String getRemark() {
		return remark;
	}
	
	@Column(name="createtime", columnDefinition="创建时间")
	public Date getCreatetime() {
		return createtime;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public void setUser_id(BigInteger user_id) {
		this.user_id = user_id;
	}
	public void setFlow_exchange_id(BigInteger flow_exchange_id) {
		this.flow_exchange_id = flow_exchange_id;
	}
	public void setNow_score(int now_score) {
		this.now_score = now_score;
	}
	public void setIncr_score(int incr_score) {
		this.incr_score = incr_score;
	}
	public void setLast_score(int last_score) {
		this.last_score = last_score;
	}
	public void setScore_change_type(String score_change_type) {
		this.score_change_type = score_change_type;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	

	
	
	
	


}
