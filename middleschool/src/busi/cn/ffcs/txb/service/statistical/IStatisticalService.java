/**
 * IPodcastsService.java	  V1.0   2014年12月9日 下午3:29:25
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.statistical;

import java.util.List;
import java.util.Map;

import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.back.controller.advertisement.AdvertisementPaginationDTO;
import cn.ffcs.txb.back.controller.answer.AnswerPaginationDTO;
import cn.ffcs.txb.back.controller.feedback.FeedbackPaginationDTO;
import cn.ffcs.txb.back.controller.schart.SchartPaginationDTO;
import cn.ffcs.txb.back.controller.scoreflow.ScoreFlowPaginationDTO;
import cn.ffcs.txb.back.controller.statistical.StatisticalPaginationDTO;
import cn.ffcs.txb.back.controller.topic.TopicPaginationDTO;
import cn.ffcs.txb.common.model.ScoreFlow;
import cn.ffcs.txb.entity.Advertisement;
import cn.ffcs.txb.entity.Introduction;
import cn.ffcs.txb.entity.UserExpand;

/**
 * 
 * 功能描述：统计查询
 * 
 * @author ：林炳兴
 * 
 *         修改历史：(修改人，修改时间，修改原因/内容)
 */
public interface IStatisticalService {
	/**
	 * 
	 * 功能描述：分页查询
	 * 
	 * @author ：林炳兴 创建日期 ：2014年12月9日 下午3:47:34
	 * 
	 * @param dto
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	PaginationData<Map<String, Object>> listLoginLogInfo(
			StatisticalPaginationDTO dto) throws Exception;

	/**
	 * 
	 * 功能描述：分页查询
	 * 
	 * @author ：林炳兴 创建日期 ：2014年12月9日 下午3:47:34
	 * 
	 * @param dto
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	PaginationData<Map<String, Object>> listScoreFlowInfo(
			ScoreFlowPaginationDTO dto) throws Exception;

	/**
	 * 
	 * 功能描述：分页查询
	 * 
	 * @author ：林炳兴 创建日期 ：2014年12月9日 下午3:47:34
	 * 
	 * @param dto
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	PaginationData<Map<String, Object>> listFeedbackInfo(
			FeedbackPaginationDTO dto) throws Exception;

	/**
	 * 
	 * 功能描述：分页查询
	 * 
	 * @author ：林炳兴 创建日期 ：2014年12月9日 下午3:47:34
	 * 
	 * @param dto
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 * 
	 */
	List<ScoreFlow> findExportData(String userIds,String ids);
	
	
	int updateScoreFlowStatus(String userIds);
	
	/**
	 * 
	 * 功能描述：分页查询
	 * 
	 * @author ：林炳兴 创建日期 ：2014年12月9日 下午3:47:34
	 * 
	 * @param dto
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	PaginationData<Map<String, Object>> listAnswerAnalysisInfo(AnswerPaginationDTO dto) throws Exception;
	/**
	 * 
	 * 功能描述：分页查询
	 * 
	 * @author ：林炳兴 创建日期 ：2014年12月9日 下午3:47:34
	 * 
	 * @param dto
	 * @return
	 * @throws Exception
	 * 
	 *             修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	PaginationData<Map<String, Object>> listBrushAnalysisInfo(AnswerPaginationDTO dto) throws Exception;
	
	
	void updateBackFolwExchange(String info);
	
	void updateSuccessFolwExchange(String info);
	/**
	 * 新增广告
	 * @param mapInfo
	 */
	void saveAdvertisement(Advertisement advertisement);
	/**
	 * 删除广告
	 * @param id
	 */
	void deleteAdvertisement(String id);
    /**
     * 列表
     */
	PaginationData<Map<String, Object>> listAllAdvertisement(AdvertisementPaginationDTO dto);
	/**
	 * 编辑
	 */
	void updateAdvertisement(Advertisement advertisement);

	/**
	 * 查找广告记录
	 */
	Advertisement findAdvertisemrntById(String id);

	PaginationData<Map<String, Object>> listAllSchart(SchartPaginationDTO dto);


	void deleteSchart(String id);
	
	void saveSchart(Map<String, Object> info);
	
	PaginationData<Map<String, Object>> listAllIntroduction(SchartPaginationDTO dto);

	Introduction findIntroductionById(Integer id);

	void updateIntroduction(Introduction introduction);

	Map<String, Object> getSchartInfo(String id);

	void updateSchart(String id, String priority);

	PaginationData<Map<String, Object>> listBrushAnalysisData(
			TopicPaginationDTO answerPaginationDTO);

	PaginationData<Map<String, Object>> listBrushdata(
			TopicPaginationDTO answerPaginationDTO);

}