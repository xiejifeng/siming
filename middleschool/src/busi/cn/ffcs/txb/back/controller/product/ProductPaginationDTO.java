/**
 * RoleExpandPaginationDTO.java	  V1.0   2014年8月6日 上午10:01:27
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.back.controller.product;

import java.util.List;

import cn.ffcs.srp.ui.model.PaginationModel;


public class ProductPaginationDTO extends PaginationModel{
	
    private String name;
    
    private String status;
    
    private String startTime;
    
    private String endTime;
    
    private String score;
    
    private String startScore;
    
    private String endScore;
   


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		if(name==null||"".equals(name)){
			this.name = name;
		}else{
			this.name = "%"+name+"%";
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


	public String getScore() {
		return score;
	}


	public void setScore(String score) {
		if(score==null||"".equals(score)){
			this.score = score;
		}else{
			String[] array =score.split("~");
			if(array.length==2){
				this.startScore = array[0];
				this.endScore = array[1];
			}
		}
	}


	public String getStartScore() {
		return startScore;
	}


	public void setStartScore(String startScore) {
		this.startScore = startScore;
	}


	public String getEndScore() {
		return endScore;
	}


	public void setEndScore(String endScore) {
		this.endScore = endScore;
	}
    
	
	
    
    

}
