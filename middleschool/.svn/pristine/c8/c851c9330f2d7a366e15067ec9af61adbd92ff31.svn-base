/**
 * YY010Service.java V1.0 2014年7月17日下午3:36:49
 * 
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 * 
 * Modification history(By Time Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.back.controller.statistical;

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
@RequestMapping(value = "/statistical")
public class StatisticalController extends AbstractController {

    @Resource
    private IStatisticalService statisticalService;

    /**
     * 
     * 功能描述：'初始化系统日志界面'
     *
     * @author ：yudp
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/loginLogInit.do", method = RequestMethod.GET)
    public String loginLogInit() {

        return "statistical/loginLogInfo";
    }
    /**
     * 
     * 功能描述：'初始化系统日志界面'
     *
     * @author ：yudp
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/handleInit.do", method = RequestMethod.GET)
    public String handleInit() {
    	
//    	return "statistical/handle";
    	return "main/home";
    }

    /**
     * 
     * 功能描述：刷题统计
     *
     * @author ：yudp
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/brushExercisesInit.do", method = RequestMethod.GET)
    public String brushExercisesInit() {
    	
    	return "main/home";
//    	return "statistical/brushExercises";
    }
    /**
     * 
     * 功能描述：'获取当前系统日志的分页对象'
     *
     * @author ：yudp
     * 创建日期 ：2014年8月29日 上午9:42:38
     *
     * @param opthisPaginationDTO 
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     * @throws Exception 
     */
     @SuppressWarnings("unchecked")
     @RequestMapping(value = "/listOpthis.do", method = RequestMethod.POST)
     @ResponseBody
     public PaginationData<Map<String, Object>> getOpenDoorList(StatisticalPaginationDTO statisticalPaginationDTO) throws Exception {
         
         PaginationData<Map<String, Object>> paginationData = null;
         // 是否查询
             paginationData = this.statisticalService.listLoginLogInfo(statisticalPaginationDTO);
            
         return super.wrapReturnObject(paginationData, PaginationData.class);
     }
    
}
