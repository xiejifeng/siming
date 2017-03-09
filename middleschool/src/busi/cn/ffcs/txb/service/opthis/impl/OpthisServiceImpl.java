/**
 * OpthisServiceImpl.java	  V1.0   2014年7月18日 上午11:05:36
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.opthis.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import cn.ffcs.srp.message.MessageContext;
import cn.ffcs.srp.message.MsgTypeEnum;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.controller.opthis.OpthisPaginationDTO;
import cn.ffcs.txb.dao.opthis.IOpthisDAO;
import cn.ffcs.txb.service.opthis.IOpthisService;


/**
 * 功能描述：
 *
 * @author ：陈贵婷
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Service
public class OpthisServiceImpl implements IOpthisService {

    @Resource
    private IOpthisDAO opthisDao;
    
    /**
     * 分页查询系统日志
     */
    @Override
    public PaginationData<Map<String, Object>> findPaginationOpthis(
            OpthisPaginationDTO opthisPaginationDTO) {

        List<Object> values = new ArrayList<Object>();
        PaginationData<Map<String, Object>> paginationData;
        
        
        if (StringUtils.hasText(opthisPaginationDTO.getUsername())) {
            values.add("%" + opthisPaginationDTO.getUsername() + "%");
        }
        
        if (opthisPaginationDTO.getStartTime() != null && opthisPaginationDTO.getStartTime().trim().length()!=0) {
            values.add(opthisPaginationDTO.getStartTime()+" 00:00:00");
        }
        if (opthisPaginationDTO.getEndTime() != null && opthisPaginationDTO.getEndTime().trim().length()!=0) {
            values.add(opthisPaginationDTO.getEndTime()+ " 23:59:59");
        }
        
 //       values.add(opthisPaginationDTO.getStartTime());
   //     values.add(opthisPaginationDTO.getEndTime());
       
        paginationData = this.opthisDao
                .findByPaginationAndDynamicCondition("SQL_OPTHIS_1", values.toArray(),
                        opthisPaginationDTO, new String[][] { new String[] { "updateDate", "date",
                        "yyyy-MM-dd HH:mm:ss" }});
        if (paginationData == null || paginationData.getTotal() == 0) {
            MessageContext.throwMessage("MSG_OPTHIS_001", MsgTypeEnum.INFO, null, false);
        }
        return paginationData;
    }
    
}
