/**
 * YY010Service.java V1.0 2014年7月17日下午3:36:49
 * 
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 * 
 * Modification history(By Time Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.back.controller.feedback;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.service.statistical.IStatisticalService;

/**
 * 
 * 功能描述：广播系统
 *
 * @author ：林炳兴
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 * 
 */
@Controller
@RequestMapping(value = "/feedback")
public class FeedbackController extends AbstractController {

    @Resource
    private IStatisticalService statisticalService;

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
    @RequestMapping(value = "/init.do", method = RequestMethod.GET)
    public String opthisPage() {

        return "feedback/feedback";
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
     * @throws Exception 
     */
     @SuppressWarnings("unchecked")
     @RequestMapping(value = "/listFeedback.do", method = RequestMethod.POST)
     @ResponseBody
     public PaginationData<Map<String, Object>> getOpenDoorList(FeedbackPaginationDTO feedbackPaginationDTO) throws Exception {
         
         PaginationData<Map<String, Object>> paginationData = null;
         // 是否查询
             paginationData = this.statisticalService.listFeedbackInfo(feedbackPaginationDTO);
            
         return super.wrapReturnObject(paginationData, PaginationData.class);
     }
    
}
