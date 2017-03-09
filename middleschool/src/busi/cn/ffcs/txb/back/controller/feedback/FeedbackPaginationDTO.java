/**
 * OpthisPaginationDTO.java	  V1.0   2014年7月18日 上午11:09:23
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.back.controller.feedback;


import cn.ffcs.srp.ui.model.PaginationModel;


/**
 * 功能描述：
 *
 * @author ：陈贵婷
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public class FeedbackPaginationDTO extends PaginationModel{
    private String startTime;
    private String endTime;
   

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
