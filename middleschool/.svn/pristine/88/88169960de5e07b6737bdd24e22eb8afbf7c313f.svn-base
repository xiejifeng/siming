package cn.ffcs.txb.back.controller.schart;


import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.activiti.engine.impl.util.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.message.MessageContext;
import cn.ffcs.srp.message.MsgTypeEnum;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.common.util.FileOperateUtil;
import cn.ffcs.txb.entity.Advertisement;
import cn.ffcs.txb.entity.Introduction;
import cn.ffcs.txb.service.personal.IPersonalService;
import cn.ffcs.txb.service.statistical.IStatisticalService;


@Controller
@RequestMapping(value = "/schart")
public class SchartController extends AbstractController{
    @Resource
    private IStatisticalService statisticalService;
    
	@Resource
	private IPersonalService  personalService;
    
    
    @RequestMapping(value = "/schartInit.do", method = RequestMethod.GET)
    public String opthisPage() {

        return "schart/schart";
    }
    
    @RequestMapping(value = "/schartEditInit.do", method = RequestMethod.GET)
    public String schartEditInit(HttpServletRequest request,String id) {
    	request.setAttribute("schart", this.statisticalService.getSchartInfo(id));
    	return "schart/schartEdit";
    }
    
    @RequestMapping(value = "/schartAddInit.do", method = RequestMethod.GET)
    public String schartAddInit(HttpServletRequest request,String id) {
    	return "schart/schartAdd";
    }
    
    @RequestMapping(value = "/listAllschart.do")
    @ResponseBody
    public PaginationData<Map<String, Object>> listAllschart(SchartPaginationDTO dto) {
        PaginationData<Map<String, Object>>  paginationData = this.statisticalService.listAllSchart(dto);
        //判断查询出的数据是否为空
        if(paginationData==null || paginationData.getTotal()==0){
            MessageContext.throwMessage("MSG_COM_001", MsgTypeEnum.INFO, null, false);
        }   
    	return paginationData;
    }
    
    @RequestMapping(value = "/deleteschart.do")
    @ResponseBody
    public String deleteschart(String ids) {
    	try {
    		String [] idsArray = ids.split(",");
    		for(String id : idsArray){
    			this.statisticalService.deleteSchart(id);
    		}
    		return "1";
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return null;
		}
    }
    
    @RequestMapping(value = "/saveschart.do")
    @ResponseBody
    public String addVdvertisement(@RequestParam Map<String, Object> reqMap,HttpServletRequest request,HttpServletResponse response) {
        String[] schoolIds = reqMap.get("schoolIds").toString().split(",");
        try {
        	for(int i=0;i<schoolIds.length;i++){
        		reqMap.put("school_id", schoolIds[i]);
        		this.statisticalService.saveSchart(reqMap);
        	}
			
		} catch (Exception e) {
           e.printStackTrace();		
           return null;
		}
		return "1";
    }
    
	/**
	 * 获取字典信息
	 * @param tagName
	 * @return
	 */
	@RequestMapping(value = "/getDictionaryByCode.do")
	@ResponseBody
	public List<Map<String, Object>> getDictionaryByCode(@RequestParam Map<String, Object> reqMap ,HttpServletRequest request) {
		String code = reqMap.get("code").toString();
		return this.personalService.findDictionaryInfoByCode(code,"0");
	}
	
	/**
	 * 后台应用介绍页面初始化
	 * @return
	 */
    @RequestMapping(value = "/initIntroduction.do", method = RequestMethod.GET)
    public String initIntroduction() {
    	return "introduction/introduction";
    }
    
    @RequestMapping(value = "/introductionEditInit.do", method = RequestMethod.GET)
    public String introductionEditInit(HttpServletRequest request,String id) {
    	Introduction introduction = this.statisticalService.findIntroductionById(Integer.valueOf(id));
    	request.setAttribute("introduction",introduction);
    	return "introduction/introductionEdit";
    }
	
    /**
     * 修改保存应用介绍
     * @param request
     * @param id
     * @return
     */
    @RequestMapping(value = "/editIntroduction.do", method = RequestMethod.POST)
    @ResponseBody
    public String editIntroduction(Introduction intro) {
    	//Introduction intro=null;
    	try {
    		this.statisticalService.updateIntroduction(intro);
    	} catch (Exception e) {
			e.printStackTrace();
			return null;
    	}
    	return "0";
    }
    
    @RequestMapping(value = "/listAllIntroduction.do")
    @ResponseBody
    public PaginationData<Map<String, Object>> listAllIntroduction(SchartPaginationDTO dto) {
        PaginationData<Map<String, Object>>  paginationData = this.statisticalService.listAllIntroduction(dto);
        //判断查询出的数据是否为空
        if(paginationData==null || paginationData.getTotal()==0){
            MessageContext.throwMessage("MSG_COM_001", MsgTypeEnum.INFO, null, false);
        }   
    	return paginationData;
    }
    
	/**
	 * 获取应用介绍内容HTML
	 * @param request
	 * @param id
	 * @return
	 */
    @RequestMapping(value = "/getIntroductionById.html", method = RequestMethod.GET)
    public String getIntroductionById(HttpServletRequest request) {
    	request.setAttribute("introduction", this.statisticalService.findIntroductionById(1));
    	return "personal/train";
    }
    
    @RequestMapping(value = "/editShart.do")
    @ResponseBody
    public String editAdvertisement(HttpServletRequest request,HttpServletResponse response,String id,String priority) {
    	try {
			
    		this.statisticalService.updateSchart(id,priority);
		} catch (Exception e) {
			return "0";
		}
    	return "1";
    }
}
