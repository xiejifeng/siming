/**
 * DefaultPublicField.java	  V1.0   2014年7月31日 上午9:32:46
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.common.model;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import cn.ffcs.srp.core.repository.publicField.IPublicField;
import cn.ffcs.srp.core.repository.publicField.PublicField;
import cn.ffcs.srp.util.web.WebContextUtil;

/**
 * 
 * 功能描述：公共字段
 *
 * @author ：阮张忠
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public class DefaultPublicField implements IPublicField {
    /**
     * 
     */
//    @Autowired 
//    private HttpServletRequest request; 
    
    public static final int PROGID_LENGTH = 30;
   
    /**
     * 
     * 功能描述：
     *
     * @author ：蒋佑胜
     * 创建日期 ：2014年8月29日 上午9:14:50
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @PublicField(columnName="insertDate")
    public Date getInsertDate(){
        
        return new Date();
    }
    /**
     * 
     * 功能描述：
     *
     * @author ：蒋佑胜
     * 创建日期 ：2014年8月29日 上午8:56:00
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @PublicField(columnName="insertUserId")
    public String getInsertUserId(){
        
        return "";
    }
    
    @PublicField(columnName="insertProgramId")
    public String getInsertProgramId(){
//        String progId = StringUtils.substringBetween(request.getServletPath(), "/").toUpperCase();
//        if(progId.length() > PROGID_LENGTH){
//            progId = progId.substring(0,PROGID_LENGTH);
//        }
        return "";
    }
    
    @PublicField(columnName="updateDate",isUpdate=true)
    public Date getUpdateDate(){
        
        return new Date();
    }
    
    @PublicField(columnName="updateUserId",isUpdate=true)
    public String getUpdateUserId(){
        
        return "";
    }
    
    @PublicField(columnName="updateProgramId")
    public String getUpdateProgramId(){
//        String progId = StringUtils.substringBetween(request.getServletPath(), "/").toUpperCase();
//        if(progId.length() > PROGID_LENGTH){
//            progId = progId.substring(0,PROGID_LENGTH);
//        }
        return "";
    }
    
    @PublicField(columnName="updateCount",isIdentity=true)
    public int getUpdateCount(){
        
        return 0;
    }

}
