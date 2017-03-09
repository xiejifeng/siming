/**
 * OpthisServiceImpl.java	  V1.0   2014年7月18日 上午11:05:36
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.productimg.impl;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.ffcs.txb.dao.productimg.IProductImgDAO;
import cn.ffcs.txb.entity.ProductImg;
import cn.ffcs.txb.service.productimg.IProductImgService;


/**
 * 功能描述：
 *
 * @author ：yudp
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Service
public class ProductImgServiceImpl implements IProductImgService {

    @Resource
    private IProductImgDAO productImgDAO;

	@Override
	public Map<String, Object> saveProductImg(ProductImg productImg) {
		// TODO Auto-generated method stub
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			Serializable entity = this.productImgDAO.save(productImg);
			result.put("resultCode", "0");
			result.put("entity",entity);
		} catch (Exception e) {
			result.put("resultCode", "1");
			throw new RuntimeException();
		}
		return result;
	}

	@Override
	public List<Map<String, Object>> getProductImg(String id) {
		
		return this.productImgDAO.findBySqlAndNamedQuery("SQL_PRODUCT_2", new Object[]{id});
	}


    
}
