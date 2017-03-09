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
@Table(name = "user_expand")
public class UserExpand implements Serializable {
	private BigInteger id;
	private BigInteger userId;
	private Date insertDate;
	private Date updateDate;
	private String createName;
	private String updateName;
	private int logingCount;
	private String nickname;
	private String tel;
	private String city;
	private String area;
	private String school;
	private String grade;
	private int score;
	private String name;
	private String sex;
	private String status;
	private String img;
	private String address;

	private String wechatAccessToken;
	private String wechatRefreshToken;
	private String wechatExpiresDate;
	private String wechatOpenid;
	private String wechatSex;
	private String wechatNickName;
	private String wechatProvince;
	private String wechatHeadimgurl;
	private String wechatCity;
	
	public UserExpand() {}
	@Id
	@GeneratedValue
	@Column(name="id", columnDefinition="bigint(20) comment '主键ID'")
	public BigInteger getId() {
		return id;
	}
	@Column(name="userId", unique=true, columnDefinition="bigint(20) comment '用户ID'")
	public BigInteger getUserId() {
		return userId;
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
	@Column(name="logingCount", columnDefinition="int(20) comment '登录次数'")
	public int getLogingCount() {
		return logingCount;
	}
	@Column(name="nickname", columnDefinition="int(20) comment '昵称'")
	public String getNickname() {
		return nickname;
	}
	@Column(name="tel", columnDefinition="int(20) comment '手机号'")
	public String getTel() {
		return tel;
	}
	@Column(name="city", columnDefinition="int(20) comment '城市'")
	public String getCity() {
		return city;
	}
	@Column(name="school", columnDefinition="int(20) comment '学校'")
	public String getSchool() {
		return school;
	}
	@Column(name="grade", columnDefinition="int(20) comment '年级'")
	public String getGrade() {
		return grade;
	}

	@Column(name="score", columnDefinition="int(20) comment '积分'")
	public int getScore() {
		return score;
	}
	@Column(name="name", columnDefinition="int(20) comment '姓名'")
	public String getName() {
		return name;
	}
	@Column(name="status", columnDefinition="int(20) comment '账户状态'")
	public String getStatus() {
		return status;
	}
	@Column(name="img", columnDefinition="图片base64")
	public String getImg() {
		return img;
	}
	@Column(name="area")
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public void setUserId(BigInteger userId) {
		this.userId = userId;
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
	public void setLogingCount(int logingCount) {
		this.logingCount = logingCount;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public void setCity(String city) {
		this.city = city;
	}

	public void setSchool(String school) {
		this.school = school;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	@Column(name="sex")
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}	
	@Column(name="address")
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
	@Column(name="wechat_access_token",columnDefinition = "wechat_access_token")
	public String getWechatAccessToken() {return wechatAccessToken;}
	@Column(name="wechat_refresh_token",columnDefinition = "wechat_refresh_token")
	public String getWechatRefreshToken() {return wechatRefreshToken;}
	@Column(name="wechat_expires_date",columnDefinition = "wechat_expires_date")
	public String getWechatExpiresDate() {return wechatExpiresDate;}
	@Column(name = "wechat_openid",columnDefinition = "wechat_openid")
	public String getWechatOpenid() {return wechatOpenid;}
	@Column(name="wechat_sex",columnDefinition = "wechat_sex")
	public String getWechatSex() {return wechatSex;}
	@Column(name = "wechat_nickname",columnDefinition = "wechat_nickname")
	public String getWechatNickName() {return wechatNickName;}
	@Column(name="wechat_province",columnDefinition = "wechat_province")
	public String getWechatProvince() {return wechatProvince;}
	@Column(name="wechat_headimgurl",columnDefinition = "wechat_headimgurl")
	public String getWechatHeadimgurl() {return wechatHeadimgurl;}
	@Column(name = "wechat_city",columnDefinition = "wechat_city")
	public String getWechatCity() {return wechatCity;}
	
	public void setWechatAccessToken(String wechatAccessToken) {this.wechatAccessToken = wechatAccessToken;}
	public void setWechatRefreshToken(String wechatRefreshToken) {this.wechatRefreshToken = wechatRefreshToken;}
	public void setWechatExpiresDate(String wechatExpiresDate) {this.wechatExpiresDate = wechatExpiresDate;}
	public void setWechatOpenid(String wechatOpenid) {this.wechatOpenid = wechatOpenid;}
	public void setWechatSex(String wechatSex) {this.wechatSex = wechatSex;}
	public void setWechatNickName(String wechatNickName) {this.wechatNickName = wechatNickName;}
	public void setWechatProvince(String wechatProvince) {this.wechatProvince = wechatProvince;}
	public void setWechatHeadimgurl(String wechatHeadimgurl) {this.wechatHeadimgurl = wechatHeadimgurl;}
	public void setWechatCity(String wechatCity) {this.wechatCity = wechatCity;}
	
}
