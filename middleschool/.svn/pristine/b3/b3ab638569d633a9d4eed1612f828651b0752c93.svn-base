/**
 * YY010Service.java V1.0 2014年7月17日下午3:36:49
 * 
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 * 
 * Modification history(By Time Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.back.controller.answer;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.back.controller.statistical.StatisticalPaginationDTO;
import cn.ffcs.txb.common.util.DateCommonUtils;
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
@RequestMapping(value = "/answer")
public class AnswerController extends AbstractController {

    @Resource
    private IStatisticalService statisticalService;
    /**
     * 
     * 功能描述：答题统计
     *
     * @author ：yudp
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/answerInit.do", method = RequestMethod.GET)
    public String answerInit() {
    	
    	return "statistical/answer";
    }
    /**
     * 
     * 功能描述：答题统计
     *
     * @author ：yudp
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/brushInit.do", method = RequestMethod.GET)
    public String brushInit() {
    	
    	return "statistical/brushExercises";
    }
    
    /**
     * 
     * 功能描述：获取刷题统计
     *
     * @author ：
     * 创建日期 ：2014年8月29日 上午9:42:38
     *
     * @param opthisPaginationDTO 
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     * @throws Exception 
     */
     @SuppressWarnings("unchecked")
     @RequestMapping(value = "/listAnswerAnalysisInfo.do", method = RequestMethod.POST)
     @ResponseBody
     public PaginationData<Map<String, Object>> getOpenDoorList(AnswerPaginationDTO answerPaginationDTO) throws Exception {
         Map<String, String>  map = DateCommonUtils.getWeekDay();
         answerPaginationDTO.setStartTime(map.get("mon"));
         answerPaginationDTO.setEndTime(map.get("sun"));
         PaginationData<Map<String, Object>> paginationData = null;
         // 是否查询
             paginationData = this.statisticalService.listAnswerAnalysisInfo(answerPaginationDTO);
            
         return super.wrapReturnObject(paginationData, PaginationData.class);
     }
     
     /**
      * 
      * 功能描述：获取答题统计
      *
      * @author ：
      * 创建日期 ：2014年8月29日 上午9:42:38
      *
      * @param opthisPaginationDTO 
      * @return
      *
      * 修改历史 ：(修改人，修改时间，修改原因/内容)
      * @throws Exception 
      */
     @SuppressWarnings("unchecked")
     @RequestMapping(value = "/listBrushAnalysisInfo.do", method = RequestMethod.POST)
     @ResponseBody
     public PaginationData<Map<String, Object>> listBrushAnalysisInfo(AnswerPaginationDTO answerPaginationDTO) throws Exception {
    	 PaginationData<Map<String, Object>> paginationData = null;
    	 // 是否查询
    	 paginationData = this.statisticalService.listBrushAnalysisInfo(answerPaginationDTO);
  
    	 return super.wrapReturnObject(paginationData, PaginationData.class);
     }
    
}
