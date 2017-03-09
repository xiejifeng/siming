package cn.ffcs.txb.entity;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@SuppressWarnings("serial")
@Entity
@Table(name = "role_expand")
public class RoleExpand implements Serializable {
	private BigInteger id;
	private BigInteger roleId;
	private Date insertDate;
	private Date updateDate;
	private String createName;
	private String updateName;
	
	public RoleExpand() {}
	@Id
	@GeneratedValue
	@Column(name="id", columnDefinition="bigint(20) comment '主键ID'")
	public BigInteger getId() {
		return id;
	}
	@Column(name="roleId", unique=true, columnDefinition="bigint(20) comment '用户ID'")
	public BigInteger getRoleId() {
		return roleId;
	}
	@Column(name="insertDate", columnDefinition="datetime comment '新增年月日'")
	public Date getInsertDate() {
		return insertDate;
	}
	@Column(name="updateDate", columnDefinition="datetime comment '更新年月日'")
	public Date getUpdateDate() {
		return updateDate;
	}
	@Column(name="createName", columnDefinition="varchar(32) comment '创建人'")
	public String getCreateName() {
		return createName;
	}
	@Column(name="updateName", columnDefinition="varchar(32) comment '修改人'")
	public String getUpdateName() {
		return updateName;
	}
	
	
	public void setId(BigInteger id) {
		this.id = id;
	}
	public void setRoleId(BigInteger roleId) {
		this.roleId = roleId;
	}
	public void setInsertDate(Date insertDate) {
		this.insertDate = insertDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public void setCreateName(String createName) {
		this.createName = createName;
	}
	public void setUpdateName(String updateName) {
		this.updateName = updateName;
	}
	
}
