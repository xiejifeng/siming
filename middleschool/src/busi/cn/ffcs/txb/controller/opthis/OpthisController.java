/**
 * OpthisController.java	  V1.0   2014年7月18日 上午11:08:37
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.controller.opthis;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.service.opthis.IOpthisService;



/**
 * 功能描述：
 *
 * @author ：陈贵婷
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Controller
@RequestMapping(value = "/opthis")
public class OpthisController extends AbstractController{
   
    @Resource
    private IOpthisService opthisservice;
    
    
    /**
     * 
     * 功能描述：'初始化系统日志界面'
     *
     * @author ：陈贵婷
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/opthis.do", method = RequestMethod.GET)
    public String opthisPage() {

        return "opthis/opthis";
    }
    
   /**
    * 
    * 功能描述：'获取当前系统日志的分页对象'
    *
    * @author ：陈贵婷
    * 创建日期 ：2014年8月29日 上午9:42:38
    *
    * @param opthisPaginationDTO 
    * @return
    *
    * 修改历史 ：(修改人，修改时间，修改原因/内容)
    */
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/listOpthis.do", method = RequestMethod.POST)
    @ResponseBody
    public PaginationData<Map<String, Object>> getOpenDoorList(OpthisPaginationDTO opthisPaginationDTO) {
        
        PaginationData<Map<String, Object>> paginationData = null;
        // 是否查询
            paginationData = this.opthisservice.findPaginationOpthis(opthisPaginationDTO);
           
        return super.wrapReturnObject(paginationData, PaginationData.class);
    }
    
}
