package cn.ffcs.txb.back.controller.product;


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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.message.MessageContext;
import cn.ffcs.srp.message.MsgTypeEnum;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.common.util.FileOperateUtil;
import cn.ffcs.txb.entity.Product;
import cn.ffcs.txb.entity.ProductImg;
import cn.ffcs.txb.service.product.IProductService;
import cn.ffcs.txb.service.productimg.IProductImgService;


@Controller
@RequestMapping(value = "/product")
public class ProductController extends AbstractController{
    @Resource
    private IProductService productService;
    @Resource
    private IProductImgService productImgService;
    
    
    @RequestMapping(value = "/productInit.do", method = RequestMethod.GET)
    public String view() {
        return "product/product";
    }
    
    @RequestMapping(value = "/productEditInit.do", method = RequestMethod.GET)
    public String productEditInit(HttpServletRequest request,String id) {
    	Product product = this.productService.findProductById(id);
    	request.setAttribute("product",product);
    	return "product/productEdit";
    }
    
    @RequestMapping(value = "/productAddInit.do", method = RequestMethod.GET)
    public String productAddInit(HttpServletRequest request,String id) {
    	return "product/productAdd";
    }
    
    @RequestMapping(value = "/listAllProduct.do")
    @ResponseBody
    public PaginationData<Map<String, Object>> listAllAdvertisement(ProductPaginationDTO dto) {
        PaginationData<Map<String, Object>>  paginationData = this.productService.listAllProduct(dto);
        //判断查询出的数据是否为空
        if(paginationData==null || paginationData.getTotal()==0){
            MessageContext.throwMessage("MSG_COM_001", MsgTypeEnum.INFO, null, false);
        }   
    	return paginationData;
    }
    
    @RequestMapping(value = "/deleteProduct.do")
    @ResponseBody
    public String deleteProduct(String ids) {
    	try {
    		String [] idsArray = ids.split(",");
    		for(String id : idsArray){
    			this.productService.deleteProductByid(id);
    		}
    		return "1";
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
    }
    @RequestMapping(value = "/upProduct.do")
    @ResponseBody
    public String upProduct(String ids) {
    	try {
    		String [] idsArray = ids.split(",");
    		for(String id : idsArray){
    			this.productService.doupProductByid(id);
    		}
    		return "1";
    	} catch (Exception e) {
    		// TODO: handle exception
    		return null;
    	}
    }
    @RequestMapping(value = "/downProduct.do")
    @ResponseBody
    public String downProduct(String ids) {
    	try {
    		String [] idsArray = ids.split(",");
    		for(String id : idsArray){
    			this.productService.downProductByid(id);
    		}
    		return "1";
    	} catch (Exception e) {
    		// TODO: handle exception
    		return null;
    	}
    }
    
    @RequestMapping(value = "/saveProduct.do")
    @ResponseBody
    public Map<String, Object> saveProduct(HttpServletRequest request,HttpServletResponse response,Product product) {
		if(product.getMainimg().indexOf("base64")>0){
			Map<String, String> map = FileOperateUtil.GenerateImage(product.getMainimg(), request);
			product.setMainimg(map.get("url"));
			Map<String, Object> result = this.productService.saveProduct(product);
			return result;
		}
		return null;
    }
    @RequestMapping(value = "/saveEditProduct.do")
    @ResponseBody
    public Map<String, Object> saveEditProduct(HttpServletRequest request,HttpServletResponse response,Product product) {
    	if(product.getMainimg().indexOf("base64")>0){
    		Map<String, String> map = FileOperateUtil.GenerateImage(product.getMainimg(), request);
    		product.setMainimg(map.get("url"));
    		Map<String, Object> result = this.productService.doSaveEditProduct(product);
    		return result;
    	}
    	Map<String, Object> result = this.productService.doSaveEditProduct(product);
    	return result;
    }
    @RequestMapping(value = "/uploadImg.do")
    @ResponseBody
    public Map<String, Object> uploadImg(HttpServletRequest request,HttpServletResponse response,ProductImg productImg) {
    	if(productImg.getImg().indexOf("base64")>0){
    		Map<String, String> map = FileOperateUtil.GenerateImage(productImg.getImg(), request);
    		productImg.setImg(map.get("url"));
    		Map<String, Object> result = this.productImgService.saveProductImg(productImg);
    		return result;
    	}
    	return null;
    }
    
    @RequestMapping(value = "/getProductImg.do")
    @ResponseBody
    public List<Map<String, Object>> getProductImg(HttpServletRequest request,HttpServletResponse response,String id) {
 
    	return this.productImgService.getProductImg(id);
    }
    
    @RequestMapping(value = "/editProduct.do")
    @ResponseBody
    public String editAdvertisement(HttpServletRequest request,HttpServletResponse response,Product product) {
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
    						
    						flag =true;
    					}
    				} catch (IOException e) {
    					// TODO Auto-generated catch block
    					e.printStackTrace();
    				}
    			}
    		}
    		if(!flag){
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
    		JSONObject result = new JSONObject();
    		result.put("code", true);
    		response.setContentType("text/html");
    	}
    	return null;
    }
    
    

}
