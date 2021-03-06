/**
 * RoleExpandPaginationDTO.java	  V1.0   2014年8月6日 上午10:01:27
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.controller.userExpand;

import java.util.List;

import cn.ffcs.srp.ui.model.PaginationModel;


public class UserExpandPaginationDTO extends PaginationModel{
	
    private String username;

    private String password;
    
    private String comfirmPwd;
    
    private String tel;
    
    private String school;
    
    private String referee;
    
    private String grade;
    
    private String cityorqx;
    
    private String arttype;
    
    private String tschool;
    
    private String roleIds;
    
    private String status;
    
    private String startTime;
    
    private String endTime;
    
    /**
     * 关联角色
     */
    private List<String> roleId;
    
    public String getUsername() {
    
        return username;
    }

    
    public void setUsername(String username) {
        if(username==null||"".equals(username))
        this.username = username;
        else
        	this.username = "%"+username+"%";
    }


    
    public String getPassword() {
    
        return password;
    }


    
    public void setPassword(String password) {
    
        this.password = password;
    }


    
    public String getComfirmPwd() {
    
        return comfirmPwd;
    }


    
    public void setComfirmPwd(String comfirmPwd) {
    
        this.comfirmPwd = comfirmPwd;
    }


    
    public List<String> getRoleId() {
    
        return roleId;
    }


    
    public void setRoleId(List<String> roleId) {
    
        this.roleId = roleId;
    }


	public String getTel() {
		return tel;
	}


	public void setTel(String tel) {
		if(tel==null||tel==""){
			this.tel = tel;
		}else{
			this.tel = "%"+tel+"%";
		}
	}


	public String getSchool() {
		return school;
	}


	public void setSchool(String school) {
		if(school==null||school==""){
			this.school = school;
		}else{
			this.school = "%"+school+"%";
		}
	}


	public String getReferee() {
		return referee;
	}


	public void setReferee(String referee) {
		if(referee==null||referee==""){
			this.referee = referee;
		}else{
			this.referee = "%"+referee+"%";
		}
	}


	public String getGrade() {
		return grade;
	}


	public void setGrade(String grade) {
		this.grade = grade;
	}



	public String getCityorqx() {
		return cityorqx;
	}


	public void setCityorqx(String cityorqx) {
		this.cityorqx = cityorqx;
	}


	public String getArttype() {
		return arttype;
	}


	public void setArttype(String arttype) {
		this.arttype = arttype;
	}


	public String getTschool() {
		return tschool;
	}


	public void setTschool(String tschool) {
			this.tschool = tschool;
	}


	public String getRoleIds() {
		return roleIds;
	}


	public void setRoleIds(String roleIds) {
		this.roleIds = roleIds;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getStartTime() {
		return startTime;
	}


	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}


	public String getEndTime() {
		return endTime;
	}


	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	
}
