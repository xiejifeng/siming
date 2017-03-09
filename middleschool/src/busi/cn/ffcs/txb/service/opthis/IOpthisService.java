/**
 * IOpthisService.java	  V1.0   2014年7月18日 上午11:03:40
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.opthis;

import java.util.Map;

import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.controller.opthis.OpthisPaginationDTO;


/**
 * 功能描述：
 *
 * @author ：陈贵婷
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
public interface IOpthisService {
    /**
     * 
     * 功能描述：'查询系统日志分页对象'
     *
     * @author ：陈贵婷
     * 创建日期 ：2014年8月29日 上午10:27:02
     *
     * @param opthisPaginationDTO
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    PaginationData<Map<String, Object>> findPaginationOpthis(OpthisPaginationDTO opthisPaginationDTO);
}
