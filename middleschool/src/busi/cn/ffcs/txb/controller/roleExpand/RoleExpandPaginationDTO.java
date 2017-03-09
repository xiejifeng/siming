/**
 * RoleExpandPaginationDTO.java	  V1.0   2014年8月6日 上午10:01:27
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.controller.roleExpand;

import cn.ffcs.srp.ui.model.PaginationModel;


public class RoleExpandPaginationDTO extends PaginationModel{
    
    private String name;
    
    private String remark;
    
    private String authority;

    
    public String getName() {
    
        return name;
    }

    
    public void setName(String name) {
    
        this.name = name;
    }

    
    public String getRemark() {
    
        return remark;
    }

    
    public void setRemark(String remark) {
    
        this.remark = remark;
    }

    
    public String getAuthority() {
    
        return authority;
    }

    
    public void setAuthority(String authority) {
    
        this.authority = authority;
    }
    
    

}
