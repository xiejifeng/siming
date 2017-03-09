package cn.ffcs.txb.back.controller.advertisement;


import java.io.IOException;
import java.util.Date;
import java.util.Iterator;
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
import cn.ffcs.srp.util.i18n.GlobalUtil;
import cn.ffcs.srp.util.web.WebContextUtil;
import cn.ffcs.txb.common.util.BaseService;
import cn.ffcs.txb.common.util.FileOperateUtil;
import cn.ffcs.txb.entity.Advertisement;
import cn.ffcs.txb.service.statistical.IStatisticalService;


@Controller
@RequestMapping(value = "/advertisement")
public class AdvertisementController extends AbstractController{
    @Resource
    private IStatisticalService statisticalService;
    
    
    @RequestMapping(value = "/advertisementInit.do", method = RequestMethod.GET)
    public String opthisPage() {

        return "advertisement/advertisement";
    }
    
    @RequestMapping(value = "/advertisementEditInit.do", method = RequestMethod.GET)
    public String advertisementEditInit(HttpServletRequest request,String id) {
    	Advertisement advertisement = this.statisticalService.findAdvertisemrntById(id);
    	request.setAttribute("advertisement",advertisement);
    	return "advertisement/advertisementEdit";
    }
    
    @RequestMapping(value = "/advertisementAddInit.do", method = RequestMethod.GET)
    public String advertisementAddInit(HttpServletRequest request,String id) {
    	return "advertisement/advertisementAdd";
    }
    
    @RequestMapping(value = "/listAllAdvertisement.do")
    @ResponseBody
    public PaginationData<Map<String, Object>> listAllAdvertisement(AdvertisementPaginationDTO dto) {
        PaginationData<Map<String, Object>>  paginationData = this.statisticalService.listAllAdvertisement(dto);
        //判断查询出的数据是否为空
        if(paginationData==null || paginationData.getTotal()==0){
            MessageContext.throwMessage("MSG_COM_001", MsgTypeEnum.INFO, null, false);
        }   
    	return paginationData;
    }
    
    @RequestMapping(value = "/deleteAdvertisement.do")
    @ResponseBody
    public String deleteAdvertisement(String ids) {
    	try {
    		String [] idsArray = ids.split(",");
    		for(String id : idsArray){
    			this.statisticalService.deleteAdvertisement(id);
    		}
    		return "1";
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
    }
    
    @RequestMapping(value = "/saveAdvertisement.do")
    @ResponseBody
    public String addVdvertisement(HttpServletRequest request,HttpServletResponse response,Advertisement advertisement) {
		CommonsMultipartResolver resolver = new CommonsMultipartResolver(
				request.getServletContext());
		if (resolver.isMultipart(request)) {
			MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
			// 取得request中的所有文件名
			Iterator<String> iter = multiRequest.getFileNames();
			while (iter.hasNext()) {
				String fileName = iter.next();
				// 取得上传文件
				MultipartFile file = multiRequest.getFile(fileName);
				String originalFilename = file.getOriginalFilename();
				if ("cover".equals(fileName) && !"".equals(originalFilename)) {
					try {
						Map<String, String> map= FileOperateUtil.GenerateImage(request,file.getInputStream(),originalFilename);
						if(map!=null){
							advertisement.setImg_url(map.get("url"));
						}
						this.statisticalService.saveAdvertisement(advertisement);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
			JSONObject result = new JSONObject();
			result.put("code", true);
			response.setContentType("text/html");
			try {
				response.getWriter().write(result.toString());
			} catch (IOException e) {
				e.printStackTrace();
			}

		}
		return null;
    }
    
    @RequestMapping(value = "/editAdvertisement.do")
    @ResponseBody
    public String editAdvertisement(HttpServletRequest request,HttpServletResponse response,Advertisement advertisement) {
    	CommonsMultipartResolver resolver = new CommonsMultipartResolver(request.getServletContext());
    	boolean flag = false;
    	if (resolver.isMultipart(request)) {
    		MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
    		// 取得request中的所有文件名
    		Iterator<String> iter = multiRequest.getFileNames();
    		while (iter.hasNext()) {
    			String fileName = iter.next();
    			// 取得上传文件
    			MultipartFile file = multiRequest.getFile(fileName);
    			String originalFilename = file.getOriginalFilename();
    			if ("cover".equals(fileName) && !"".equals(originalFilename)) {
    				try {
    					Map<String, String> map= FileOperateUtil.GenerateImage(request,file.getInputStream(),originalFilename);
    					if(map!=null){
    						advertisement.setImg_url(map.get("url"));
    						this.statisticalService.updateAdvertisement(advertisement);
    						flag =true;
    					}
    				} catch (IOException e) {
    					// TODO Auto-generated catch block
    					e.printStackTrace();
    				}
    			}
    		}
    		if(!flag){
    			this.statisticalService.updateAdvertisement(advertisement);
    		}
    		JSONObject result = new JSONObject();
    		result.put("code", true);
    		response.setContentType("text/html");
    		try {
    			response.getWriter().write(result.toString());
    		} catch (IOException e) {
    			e.printStackTrace();
    		}
    	}else{
    		this.statisticalService.updateAdvertisement(advertisement);
    		JSONObject result = new JSONObject();
    		result.put("code", true);
    		response.setContentType("text/html");
    	}
    	return null;
    }
    
    

}
