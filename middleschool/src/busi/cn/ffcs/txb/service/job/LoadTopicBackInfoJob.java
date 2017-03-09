package cn.ffcs.txb.service.job;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.activiti.engine.impl.util.json.JSONArray;
import org.activiti.engine.impl.util.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.siming.wx.WeixinAuth;
import com.taobao.api.internal.tmc.TmcClient;

import cn.ffcs.srp.util.i18n.GlobalUtil;
import cn.ffcs.txb.common.log.OperationLogService;
import cn.ffcs.txb.common.model.Constant;
import cn.ffcs.txb.common.util.BaseService;
import cn.ffcs.txb.common.util.JsonUtil;
import cn.ffcs.txb.common.util.PinyinUtils;
import cn.ffcs.txb.dao.opthis.IOpthisDAO;
import cn.ffcs.txb.dao.paper.IPaperDAO;
import cn.ffcs.txb.dao.topicback.ITopicBackDAO;
import cn.ffcs.txb.dao.topictemp.ITopicTempDAO;
import cn.ffcs.txb.entity.Paper;
import cn.ffcs.txb.entity.TopicBank;
import cn.ffcs.txb.entity.TopicTemp;
import cn.ffcs.txb.service.opthis.IOpthisService;
import cn.ffcs.txb.service.personal.IPersonalService;

@Component
public class LoadTopicBackInfoJob {

	private static final Logger logger = LoggerFactory.getLogger(LoadTopicBackInfoJob.class);
	@Resource
	private ITopicBackDAO topicDao;
	
	@Resource
	private IPaperDAO paperDAO;
	
	@Resource
	private ITopicTempDAO topicTempDAO;
	
    @Resource
    private OperationLogService operationLogService;
	
	public void doJob() {
    	
	    String result ="";
        //获取所有科目
	    List<Map<String, Object>> subjectList = new ArrayList<>();
	    //获取所有试卷
	    List<Map<String, Object>> papaerList = new ArrayList<>();
	    //获取所有试卷
	    List<Paper> allPapaerList = new ArrayList<>();
	    //获取试卷试题
	    List<Map<String, Object>> topicList = new ArrayList<>();
	    //所有题目
	    List<TopicBank> topicBacks = new ArrayList<>();
	    SimpleDateFormat format = new SimpleDateFormat("yy-MM-dd HH:mm:ss");
		try {
			result = BaseService.doGet(GlobalUtil.getValue("topic_get_category"));
			JSONObject  json = new JSONObject(result);
			if("ok".equals(json.get("status"))){
				subjectList =JsonUtil.parseToListMap(json.getJSONArray("data"));
			}
			for(Map<String, Object> subjectMap :subjectList){
				JSONArray subjectArray  = new JSONArray (subjectMap.get("children").toString());
				for(int i=0;i<subjectArray.length();i++){
					String id = subjectArray.getJSONObject(i).getString("id");
					String label = subjectArray.getJSONObject(i).getString("label");
					result  =  BaseService.doGet(GlobalUtil.getValue("topic_get_paperlist")+id+"?offset=0&limit=100&alive=2");
					json = new JSONObject(result);
			        if("ok".equals(json.get("status"))){
			        	papaerList = JsonUtil.parseToListMap(json.getJSONObject("data").getJSONArray("list"));
			        }
			        for(Map<String, Object> paperMap:papaerList){
			        	String uuid = paperMap.get("uuid").toString();
			        	Paper paper = new Paper();
			        	String d = paperMap.get("created_at").toString();
			        	paper.setPaperid(uuid);
			        	paper.setName(paperMap.get("name").toString());
			        	paper.setQuestnum(paperMap.get("ques_num").toString());
			        	paper.setSubjectid(paperMap.get("subject_id").toString());
			        	paper.setIsNew(Constant.TOPIC_NEW);
			        	d = d.substring(0, 10)+" "+d.substring(11, 19);
			    		Date date  = format.parse(d);
			    		paper.setCreatetime(date);
			        	allPapaerList.add(paper);
			        	result = BaseService.doGet(GlobalUtil.getValue("topic_get_detail")+uuid);
			        	json = new JSONObject(result);
			          	if("ok".equals(json.get("status"))){
				    		 topicList =  JsonUtil.parseToListMap(json.getJSONArray("data"));
				    		 for(Map<String, Object> topicMap :topicList){
				    			 TopicBank topicBack = new TopicBank();
				    			 topicBack.setQid(topicMap.get("Qid")==null?"":topicMap.get("Qid").toString());
				    			 topicBack.setPaperid(uuid);
				    			 topicBack.setXx(topicMap.get("Xx")==null?"":topicMap.get("Xx").toString());
				    			 topicBack.setSubjectId(topicMap.get("SubjectId")==null?"":topicMap.get("SubjectId").toString());
				    			 topicBack.setCoreid(topicMap.get("Coreid")==null?"":topicMap.get("Coreid").toString());
				    			 topicBack.setQtypeId(topicMap.get("QtypeId")==null?"":topicMap.get("QtypeId").toString());
				    			 topicBack.setQrows(topicMap.get("Qrows")==null?"":topicMap.get("Qrows").toString());
				    			 topicBack.setQcols(topicMap.get("Qcols")==null?"":topicMap.get("Qcols").toString());
				    			 topicBack.setQtxt(topicMap.get("Qtxt")==null?"":topicMap.get("Qtxt").toString());
				    			 topicBack.setKaodian(topicMap.get("Kaodian")==null?"":topicMap.get("Kaodian").toString());
				    			 topicBack.setFenxi(topicMap.get("Fenxi")==null?"":topicMap.get("Fenxi").toString());
				    			 topicBack.setJieda(topicMap.get("Jieda")==null?"":topicMap.get("Jieda").toString());
				    			 topicBack.setDianpin(topicMap.get("Dianpin")==null?"":topicMap.get("Dianpin").toString());
				    			 topicBack.setVlink(topicMap.get("Vlink")==null?"":topicMap.get("Vlink").toString());
				    			 topicBack.setIeasy(topicMap.get("Ieasy")==null?"":topicMap.get("Ieasy").toString());
				    			 topicBack.setIscore(topicMap.get("Iscore")==null?"":topicMap.get("Iscore").toString());
				    			 topicBack.setQtype2Id(topicMap.get("Qtype2Id")==null?"":topicMap.get("Qtype2Id").toString());
				    			 topicBack.setPage(topicMap.get("Page")==null?"":topicMap.get("Page").toString());
				    			 topicBack.setPoint(topicMap.get("Point")==null?"":topicMap.get("Point").toString());
				    			 topicBack.setQtypeParentId(topicMap.get("QtypeParentId")==null?"":topicMap.get("QtypeParentId").toString());
				    			 topicBack.setSubjectParentId(topicMap.get("SubjectParentId")==null?"":topicMap.get("SubjectParentId").toString());
				    			 topicBack.setSubQuests(topicMap.get("SubQuests")==null?"":topicMap.get("SubQuests").toString());
				    			 topicBack.setStatus("0");
				    			 topicBack.setQopt(topicMap.get("Qopt")==null?"":topicMap.get("Qopt").toString());
				    			 topicBack.setQok(topicMap.get("Qok")==null?"":topicMap.get("Qok").toString());
				    			 topicBack.setQyear(topicMap.get("Qyear")==null?"":topicMap.get("Qyear").toString());
				    			 topicBack.setQfrom(topicMap.get("Qfrom")==null?"":topicMap.get("Qfrom").toString());
				    			 topicBack.setCreatetime(new Date());
				    			 topicBack.setLabel(label);
				    			 topicBack.setIsNew(Constant.TOPIC_OLD);
				    			 topicBacks.add(topicBack);
				    		 }
				    	}
			        }
				}
			}
			List<Map<String, Object>> oldTopicData = this.topicDao.findBySqlAndNamedQuery("SQL_All_17", new Object[]{});
			List<Paper> paperList =  this.paperDAO.findAll();
			Set<String> oldQids = new HashSet<>();
			Set<String> oldPaperids = new HashSet<>();
			
			
			for(Map<String, Object> oldTopicMap :oldTopicData){
				oldQids.add(oldTopicMap.get("Qid").toString());
			}
			
			for(Paper paper :paperList){
				oldPaperids.add(paper.getPaperid());
			}
			
			List<TopicBank> newAddTopicBanks = new ArrayList<>();
			for(TopicBank topicBack: topicBacks){
				if(oldQids.add(topicBack.getQid())){
					newAddTopicBanks.add(topicBack);
				}
			}
			List<Paper> newAddPapers = new ArrayList<>();
			for(Paper paper: allPapaerList){
				if(oldPaperids.add(paper.getPaperid())){
					newAddPapers.add(paper);
				}
			}
			this.topicDao.save(newAddTopicBanks);
			this.paperDAO.save(newAddPapers);
			operationLogService.saveLogOperation("后台任务", "同步题库数据完成:当前远程库有"+topicBacks.size()+"条数据,重复数据有:"+(topicBacks.size()-oldTopicData.size())+"条,本地库有:"+oldTopicData.size()+"条数据，"+"新增"+(newAddTopicBanks.size())+"条数据", new Date());
		} catch (Exception e) {
			operationLogService.saveLogOperation("后台任务", "同步题库数据失败", new Date());
			e.printStackTrace();
		}
	}
	
	/**
	 * 发微信模板消息
	 * @throws Exception
	 */
	public void doSendMsg2Wechat() {
		Map<String, Object> flagMap = this.topicDao.findUniqueBySqlAndNamedQuery("SQL_App_SELECT_SEND_WECHAT_FLAG", null);
		if(flagMap != null && flagMap.get("value") != null) {
			String value = flagMap.get("value").toString();
			if ("0".equals(value)) {
		    	List<Map<String, Object>> mapList = this.topicDao.findBySqlAndNamedQuery("SQL_App_SELECT_WECHAT_OPENID",null);
		    	String openId;
		    	Integer userId;
		    	StringBuffer successStr = new StringBuffer();
		    	StringBuffer errorStr = new StringBuffer();
		    	int cnt = 0;
		    	for(Map<String, Object> itemMap : mapList) {
		    		openId = itemMap.get("wechat_openid").toString();
		    		userId = (Integer)itemMap.get("id");
		    		// 发送微信消息
		    		try {
						WeixinAuth.sendTemplateMsg(openId);
						successStr.append(userId);
						successStr.append(",");
						cnt++;
					} catch (Exception e) {
						logger.info("send template message throw exception. [openId={}]", openId);
			    		errorStr.append(userId);
			    		errorStr.append(",");
					}

		    	}
		    	if(cnt>0) {
		    		operationLogService.saveLogOperation("后台任务", "微信消息发送成功的用户数量有："+cnt, new Date());
		    	}
		    	if(errorStr !=null && errorStr.length()>0) {
		    		operationLogService.saveLogOperation("后台任务", "微信消息发送失败的用户有："+errorStr.toString(), new Date());
		    	}
			}
		}

	}
	
	public void doloadTopicIntoTemp() throws Exception {
		
		//更新中间表题目状态 是否为新题
		this.topicDao.doExecuteSqlAndNamedQuery("SQL_All_job_3", new Object[]{Constant.TOPIC_OLD});
		this.topicDao.doExecuteSqlAndNamedQuery("SQL_All_job_4", new Object[]{Constant.TOPIC_OLD});
       	String result  =  BaseService.doGet(GlobalUtil.getValue("topic_get_category"));
    	JSONObject  json = new JSONObject(result);
    	if("ok".equals(json.get("status"))){
    		List<Map<String, Object>> data = JsonUtil.parseToListMap(json.getJSONArray("data"));
    		for(Map<String, Object> map:data){
    			if("小学".equals(map.get("label"))){
    				JSONArray array = new JSONArray(map.get("children").toString());
    			    for(int i=0;i<array.length();i++){
    			    	List<Map<String, Object>> listMap = this.topicDao.findBySqlAndNamedQuery("SQL_All_job_1",new Object[]{array.getJSONObject(i).get("id").toString()});
    			    	for(Map<String, Object> map2:listMap){
    			    		TopicTemp temp = new TopicTemp();
    			    		temp.setPubdate(new Date());
    			    		temp.setTopicid(map2.get("Qid").toString());
    			    		temp.setSubjectid(map2.get("SubjectId").toString());
    			    		temp.setName(map2.get("name").toString());
    			    		temp.setIsnew(Constant.TOPIC_NEW);
    			    		topicTempDAO.save(temp);
    			    		this.topicDao.doExecuteSqlAndNamedQuery("SQL_All_job_2", new Object[]{map2.get("id")});
    			    		this.topicDao.doExecuteSqlAndNamedQuery("SQL_All_job_5", new Object[]{Constant.TOPIC_NEW,map2.get("id")});
    			    	}
    			   }
    			}
    		}
    	}
		
		operationLogService.saveLogOperation("后台任务", "每天更新题库状态完成", new Date());
	}
}
