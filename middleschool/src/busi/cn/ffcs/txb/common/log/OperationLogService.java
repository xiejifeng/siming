/**
 * OperationLogService.java	  V1.0   2014年8月4日 上午9:03:20
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */
package cn.ffcs.txb.common.log;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.ffcs.txb.dao.opthis.IOpthisDAO;
import cn.ffcs.txb.entity.Opthis;


/**
 * 功能描述：业务操作日志保存接口
 *
 * @author ：阮张忠
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Service
public class OperationLogService {
    
    @Resource
    private IOpthisDAO opthisDAO;

    /**
     * 
     * 功能描述：业务操作日志保存
     *
     * @author ：阮张忠
     * 创建日期 ：2014年8月4日 上午9:08:47
     *
     * @param userName
     * @param logContent
     * @param optDate
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public void saveLogOperation(String userName, String logContent, Date optDate) {
        Opthis opthis = new Opthis();
        opthis.setUsername(userName);
        opthis.setLogContent(logContent);
        opthis.setUpdateDate(optDate);
        opthisDAO.save(opthis);
    }

}
