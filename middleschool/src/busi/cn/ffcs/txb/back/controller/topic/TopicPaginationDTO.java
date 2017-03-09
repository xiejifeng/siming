/**
 * OpthisPaginationDTO.java	  V1.0   2014年7月18日 上午11:09:23
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.back.controller.topic;


import cn.ffcs.srp.ui.model.PaginationModel;


/**
 * 功能描述：
 *
 * @author ：陈贵婷
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public class TopicPaginationDTO extends PaginationModel{
    private String tel;
    private String startTime;
    private String endTime;
    private String status;
    private String subject;
    private String username;
    
    public String getTel() {
		return tel;
	}


	public void setTel(String tel) {
		if(tel==null||"".equals(tel)){
			this.tel = tel;
		}else{
			this.tel = "%"+tel+"%";
		}
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


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getSubject() {
		return subject;
	}


	public void setSubject(String subject) {
		this.subject = subject;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		if(username==null||"".equals(username)){
			this.username = username;
		}else{
			this.username = "%"+username+"%";
		}
	}
    
    

} 