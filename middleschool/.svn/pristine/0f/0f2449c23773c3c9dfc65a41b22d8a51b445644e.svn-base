/**
 * OpthisServiceImpl.java	  V1.0   2014年7月18日 上午11:05:36
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.paper.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.ffcs.txb.dao.paper.IPaperDAO;
import cn.ffcs.txb.service.paper.IPaperService;


/**
 * 功能描述：
 *
 * @author ：yudp
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Service
public class PaperServiceImpl implements IPaperService {

    @Resource
    private IPaperDAO paperDAO;

	@Override
	public List<Map<String, Object>> getPaperInfoBySubjectId(String id,Object userid) {
		
		return this.paperDAO.findBySqlAndNamedQuery("SQL_PAPER_1", new Object[]{id,userid},new String[][] { new String[] { "pubdate", "date", "yyyy/MM/dd" }});
	}

	@Override
	public List<Map<String, Object>> getPaperInfoBySubjectId(String subjectd) {
		
		return this.paperDAO.findBySqlAndNamedQuery("SQL_PAPER_2", new Object[]{subjectd},new String[][] { new String[] { "pubdate", "date", "yyyy/MM/dd" }});
	}


    
}
