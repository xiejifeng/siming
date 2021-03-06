/**
 * JokesServiceImpl.java	  V1.0   2014年12月9日 下午3:30:29
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.statistical.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import cn.ffcs.srp.message.MessageContext;
import cn.ffcs.srp.message.MsgTypeEnum;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.srp.util.web.WebContextUtil;
import cn.ffcs.txb.back.controller.advertisement.AdvertisementPaginationDTO;
import cn.ffcs.txb.back.controller.answer.AnswerPaginationDTO;
import cn.ffcs.txb.back.controller.feedback.FeedbackPaginationDTO;
import cn.ffcs.txb.back.controller.schart.SchartPaginationDTO;
import cn.ffcs.txb.back.controller.scoreflow.ScoreFlowPaginationDTO;
import cn.ffcs.txb.back.controller.statistical.StatisticalPaginationDTO;
import cn.ffcs.txb.back.controller.topic.TopicPaginationDTO;
import cn.ffcs.txb.common.log.OperationLogService;
import cn.ffcs.txb.common.model.Constant;
import cn.ffcs.txb.common.model.ScoreFlow;
import cn.ffcs.txb.dao.advertisement.IAdvertisementDAO;
import cn.ffcs.txb.dao.introduction.IIntroductionDAO;
import cn.ffcs.txb.dao.opthis.IOpthisDAO;
import cn.ffcs.txb.dao.schart.ISchartDAO;
import cn.ffcs.txb.dao.score.IScoreDAO;
import cn.ffcs.txb.entity.Advertisement;
import cn.ffcs.txb.entity.Introduction;
import cn.ffcs.txb.entity.Schart;
import cn.ffcs.txb.entity.Score;
import cn.ffcs.txb.service.statistical.IStatisticalService;

/**
 * 
 * 功能描述：段子管理
 *
 * @author ：林炳兴
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Service
public class StatisticalServiceImpl implements IStatisticalService {
	@Resource
	private IScoreDAO scoreDAO;
    @Resource
    private IOpthisDAO opthisDao;
    @Resource
    private OperationLogService operationLogService;
    @Resource
    private IAdvertisementDAO advertisementDAO;
    @Resource
    private ISchartDAO schartDAO;
    @Resource
    private IIntroductionDAO introductionDAO;
    @Override
    public PaginationData<Map<String, Object>> listLoginLogInfo(StatisticalPaginationDTO dto) throws Exception {

        List<Object> values = new ArrayList<Object>();
        PaginationData<Map<String, Object>> paginationData;
        
        
        if (StringUtils.hasText(dto.getTel())) {
            values.add("%" + dto.getTel() + "%");
        }
        
        if (dto.getStartTime() != null && dto.getStartTime().trim().length()!=0) {
            values.add(dto.getStartTime()+" 00:00:00");
        }
        if (dto.getEndTime() != null && dto.getEndTime().trim().length()!=0) {
            values.add(dto.getEndTime()+ " 23:59:59");
        }
       
        paginationData = this.opthisDao.findByPaginationAndDynamicCondition("SQL_All_1", values.toArray(),
                        dto, new String[][] { new String[] { "login_time", "date",
                        "yyyy-MM-dd HH:mm:ss" }});
        if (paginationData == null || paginationData.getTotal() == 0) {
        	
            MessageContext.throwMessage("MSG_OPTHIS_001", MsgTypeEnum.INFO, null, false);
        }
        return paginationData;
    }

	@Override
	public PaginationData<Map<String, Object>> listScoreFlowInfo(
			ScoreFlowPaginationDTO dto) throws Exception {
    	if(Constant.EXCHANGE_All.equals(dto.getStatus())){
    		dto.setStatus("");
    	}
        PaginationData<Map<String, Object>> paginationData = this.opthisDao.findByPaginationAndDynamicCondition("SQL_All_3", dto, new String[][] { new String[] { "applytime", "date", "yyyy-MM-dd HH:mm:ss" }});
        if (paginationData == null || paginationData.getTotal() == 0) {
            MessageContext.throwMessage("MSG_OPTHIS_001", MsgTypeEnum.INFO, null, false);
        }
        return paginationData;
	}

	@Override
	public PaginationData<Map<String, Object>> listFeedbackInfo(
			FeedbackPaginationDTO dto) throws Exception {
		List<Object> values = new ArrayList<Object>();
        PaginationData<Map<String, Object>> paginationData;
        if (dto.getStartTime() != null && dto.getStartTime().trim().length()!=0) {
            values.add(dto.getStartTime()+" 00:00:00");
        }
        if (dto.getEndTime() != null && dto.getEndTime().trim().length()!=0) {
            values.add(dto.getEndTime()+ " 23:59:59");
        }
       
        paginationData = this.opthisDao.findByPaginationAndDynamicCondition("SQL_All_4", values.toArray(),
                        dto, new String[][] { new String[] { "createtime", "date",
                        "yyyy-MM-dd HH:mm:ss" }});
        if (paginationData == null || paginationData.getTotal() == 0) {
        	
            MessageContext.throwMessage("MSG_OPTHIS_001", MsgTypeEnum.INFO, null, false);
        }
        return paginationData;
	}

	@Override
	public List<ScoreFlow> findExportData(String userIds,String ids) {
        String [] array = userIds.split(",");
        List<String> list = Arrays.asList(array);
        HashMap<String, Object> bean = new HashMap<>();
        bean.put("userids", list);
		List<ScoreFlow> data = this.opthisDao.findByDynamicCondition("SQL_All_7",bean,ScoreFlow.class,list.toArray());
		return data;
	}

	@Override
	public int updateScoreFlowStatus(String userIds) {
        if (null == userIds || "".equals(userIds.trim()) || "null".equals(userIds)) {
            return 0;
        }else{
            String[] sysUserIds = userIds.split(",");
            int rows = 0;
            for(String info : sysUserIds) {
            	rows =rows + this.opthisDao.doExecuteSqlAndNamedQuery("SQL_All_8", new Object[] {Constant.SF_YCZ,info});
            }
            if(rows > 0){
                operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "积分流量导出成功", new Date());
                //记录日志
            }else{
                operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "积分流量导出失败", new Date());
            }
            return rows;
        }
	}

	@Override
	public PaginationData<Map<String, Object>> listAnswerAnalysisInfo(AnswerPaginationDTO dto) throws Exception {
		dto.setSortName(null);
		dto.setSortOrder(null);
		return 	 this.opthisDao.findByPaginationAndDynamicCondition("SQL_All_11",dto, new String[][] { new String[] {}});
	}

	@Override
	public void updateBackFolwExchange(String info) {
		String[] idScoreArray = info.split(",");
		try {
			for(int i=0;i<idScoreArray.length;i++){
				String [] idScore = idScoreArray[i].split(":");
				//this.opthisDao.doExecuteSqlAndNamedQuery("SQL_All_12", new Object[]{Constant.SF_BACK,idScore[0]});
				this.opthisDao.doExecuteSqlAndNamedQuery("SQL_All_13", new Object[]{idScore[1],idScore[2]});
				Score  scoreInfo = new Score();
				scoreInfo.setIncr_score(Integer.parseInt(idScore[1]));
				scoreInfo.setUser_id((BigInteger.valueOf(Long.parseLong(idScore[2]))));
				scoreInfo.setScore_change_type(Constant.SCORE_CHANGE_TYPE_FLOWEXCHANGE);
				scoreInfo.setCreatetime(new Date());
				scoreInfo.setRemark("兑换失败回退");
				this.scoreDAO.save(scoreInfo);
			}
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
	@Override
	public void updateSuccessFolwExchange(String info) {
		String[] idScoreArray = info.split(",");
		try {
			for(int i=0;i<idScoreArray.length;i++){
				String [] idScore = idScoreArray[i].split(":");
				this.opthisDao.doExecuteSqlAndNamedQuery("SQL_All_12", new Object[]{Constant.EXCHANGE_YCZ,idScore[0]});
				Score  scoreInfo = new Score();
				scoreInfo.setIncr_score(Integer.parseInt(idScore[1]));
				scoreInfo.setUser_id((BigInteger.valueOf(Long.parseLong(idScore[2]))));
				scoreInfo.setScore_change_type(Constant.SCORE_CHANGE_TYPE_FLOWEXCHANGE);
				scoreInfo.setCreatetime(new Date());
				scoreInfo.setRemark("兑换失败回退");
				this.scoreDAO.save(scoreInfo);
			}
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}

	@Override
	public PaginationData<Map<String, Object>> listBrushAnalysisInfo(
			AnswerPaginationDTO dto) throws Exception {
    	if(Constant.ANSWERSTATUS_All.equals(dto.getStatus())){
    		dto.setStatus("");
    	}
    	if(Constant.SUBJECT_All.equals(dto.getSubject())){
    		dto.setSubject("");
    	}
		return  this.opthisDao.findByPaginationAndDynamicCondition("SQL_All_14",dto, new String[][] { new String[] {"createtime", "date",
	            "yyyy.MM.dd HH:mm:ss" }});
	}

	@Override
	public void saveAdvertisement(Advertisement advertisement) {
		try {
            advertisement.setCreatetime(new Date());
            this.advertisementDAO.save(advertisement);		
		} catch (Exception e) {
			throw new RuntimeException();
		}

	}

	@Override
	public void deleteAdvertisement(String id) {
		Advertisement advertisement = new Advertisement();
		advertisement.setId(Integer.parseInt(id));
		try {
            this.advertisementDAO.delete(advertisement);		
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}

	@Override
	public PaginationData<Map<String, Object>> listAllAdvertisement(AdvertisementPaginationDTO dto) {
		
		return this.advertisementDAO.findByPaginationAndNamedQuery("SQL_All_21", new Object[]{},dto,new String[][] { new String[] {"createtime", "date",
        "yyyy.MM.dd HH:mm:ss" }});
	}

	@Override
	public void updateAdvertisement(Advertisement advertisement) {
		try {
			advertisement.setCreatetime(new Date());
            this.advertisementDAO.update(advertisement);		
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
	
	@Override
	public void updateIntroduction(Introduction introduction) {
		try {
			introduction.setCreatetime(new Date());
			this.introductionDAO.update(introduction);		
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}

	@Override
	public Advertisement findAdvertisemrntById(String id) {
		return this.advertisementDAO.get(Integer.parseInt(id));
	}

	@Override
	public PaginationData<Map<String, Object>> listAllSchart(SchartPaginationDTO dto) {
		if("1909".equals(dto.getArttype_id())){
			dto.setArttype_id("");
		}
		if("1813".equals(dto.getArea_id())){
			dto.setArea_id("");
		}
		if("1K02".equals(dto.getStatus())){
			dto.setStatus("");
		}
		 return this.opthisDao.findByPaginationAndDynamicCondition("SQL_All_23",dto, new String[][] { new String[] {"createtime", "date",
         "yyyy.MM.dd HH:mm:ss" }});
	}

	@Override
	public void deleteSchart(String id) {
		this.schartDAO.doExecuteSqlAndNamedQuery("SQL_All_24", new Object[]{id});
	}

	@Override
	public void saveSchart(Map<String, Object> info) {
	    Schart schart = new Schart();
		schart.setCreatetime(new Date());
		schart.setStatus(info.get("status")==null?"":info.get("status").toString());
		schart.setArea_id(info.get("area_id")==null?"":info.get("area_id").toString());
		schart.setSchool_id(info.get("school_id")==null?"":info.get("school_id").toString());
		this.schartDAO.save(schart);
	}

	@Override
	public PaginationData<Map<String, Object>> listAllIntroduction(
			SchartPaginationDTO dto) {
		return this.advertisementDAO.findByPaginationAndNamedQuery("SQL_All_28", new Object[]{},dto,new String[][] { new String[] {"createtime", "date", "yyyy.MM.dd HH:mm:ss" }});
	}

	@Override
	public Introduction findIntroductionById(Integer id) {
		// TODO Auto-generated method stub
		return this.introductionDAO.get(id);
	}

	@Override
	public Map<String, Object> getSchartInfo(String id) {
		
		return this.schartDAO.findUniqueBySqlAndNamedQuery("SQL_All_31", new Object[]{id});
	}

	@Override
	public void updateSchart(String id, String priority) {
		this.schartDAO.doExecuteSqlAndNamedQuery("SQL_All_32", new Object[]{priority,id});
		
	}

	@Override
	public PaginationData<Map<String, Object>> listBrushAnalysisData(
			TopicPaginationDTO dto) {

		return  this.opthisDao.findByPaginationAndDynamicCondition("SQL_All_33",dto, new String[][] { new String[] {"createtime", "date",
        "yyyy.MM.dd HH:mm:ss" }});
	}

	@Override
	public PaginationData<Map<String, Object>> listBrushdata(
			TopicPaginationDTO dto) {
    	if(Constant.SUBJECT_All.equals(dto.getUsername())){
    		dto.setUsername("");
    	}
		return  this.opthisDao.findByPaginationAndDynamicCondition("SQL_All_34",dto, new String[][] { new String[] {"createtime", "date",
        "yyyy.MM.dd HH:mm:ss" }});
	}


}
