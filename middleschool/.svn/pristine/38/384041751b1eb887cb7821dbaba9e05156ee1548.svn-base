package cn.ffcs.txb.controller.userExpand;


import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.srp.app.user.entity.User;
import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.message.MessageContext;
import cn.ffcs.srp.message.MsgTypeEnum;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.srp.util.web.WebContextUtil;
import cn.ffcs.txb.entity.UserExpand;
import cn.ffcs.txb.service.userExpand.IUserExpandService;


@Controller
@RequestMapping(value = "/userExpand")
public class UserExpandController extends AbstractController{
    @Resource
    private IUserExpandService service;
    
  

//    @RequestMapping(value = "/getUserInfo.do")
//    @ResponseBody
//    public Map<String, Object> getUserInfo() { 
//    	User user = WebContextUtil.getCurrentUser();
//    	
//    	int count = 0;
//    	UserExpand userExpand = service.getUserExpand(new java.math.BigInteger(user.getId() + ""));
//    	SimpleDateFormat s = new SimpleDateFormat("yyyyMMdd");
//    	if (userExpand.getUpdateDate() == null || !s.format(new Date()).equals(s.format(userExpand.getUpdateDate()))) {
//    		userExpand.setLogingCount(0);
//    	} else {
//    		count = userExpand.getLogingCount() + 1;
//    		userExpand.setLogingCount(count);
//    	}
//    	userExpand.setUpdateDate(new Date());
//    	service.updateUserExpand(userExpand);
//    	
//		Map<String, Object> map = new HashMap<String, Object>();
//		map.put("user", user);
//		map.put("result", count);
//        return map;
//    }
    /**
     * 
     * 功能描述：查询用户列表
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月6日 上午10:05:35
     *
     * @param PaginationDTO
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/listUsers.do", method = RequestMethod.POST)
    @ResponseBody
    public PaginationData<Map<String, Object>> getUsersList(UserExpandPaginationDTO PaginationDTO) {
        
        PaginationData<Map<String, Object>> paginationData = null;
        // 是否查询
        paginationData = this.service.findPagination(PaginationDTO);
      //判断查询出的数据是否为空
        if(paginationData==null || paginationData.getTotal()==0){
            MessageContext.throwMessage("MSG_COM_001", MsgTypeEnum.INFO, null, false);
        }   
        return super.wrapReturnObject(paginationData, PaginationData.class);
    }
    
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/listBackUsers.do", method = RequestMethod.POST)
    @ResponseBody
    public PaginationData<Map<String, Object>> listBackUsers(UserExpandPaginationDTO PaginationDTO) {
    	
    	PaginationData<Map<String, Object>> paginationData = null;
    	// 是否查询
    	paginationData = this.service.findPaginationBack(PaginationDTO);
    	//判断查询出的数据是否为空
    	if(paginationData==null || paginationData.getTotal()==0){
    		MessageContext.throwMessage("MSG_COM_001", MsgTypeEnum.INFO, null, false);
    	}   
    	return super.wrapReturnObject(paginationData, PaginationData.class);
    }
    
    /**
     * 
     * 功能描述：获取当前登录用户所属的角色和创建的角色
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月5日 上午9:58:51
     *
     * @param sysUserId
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/getUserRole.do")
    @ResponseBody
    public List<Map<String, Object>> getUserRole() {
        //当前用户所属的角色
        List<Map<String, Object>> resultList = this.service
                .findAllRole();
        return super.wrapReturnObject(resultList, List.class);
    }
    
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/addSchoolDic.do")
    @ResponseBody
    public String addSchoolDic(@RequestParam Map<String, Object> map,HttpServletRequest request) {
    	String texts = map.get("texts")==null?"":map.get("texts").toString();
    	int num = this.service.findDicMaxNum();
        if(!"".equals(texts)){
        	String textArr[] = texts.split(",");
        	for(String text:textArr){
        		num = num+1;
        		this.service.saveDic(text, num);
        	}
        }  
        return "1";
    }
    /**
     * 
     * 功能描述：根据用户获取角色
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月5日 下午2:29:25
     *
     * @param sysUserId
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/getUserRoleChecked.do",method={RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public List<Map<String,Object>> getUserRoleChecked(@RequestParam(value="sysUserId") String sysUserId){
        BigInteger id ;
        BigInteger updateId;
        List<Map<String, Object>> resultList = this.service
                .findAllRole();
        List<Map<String, Object>> updateUserRole = this.service.findRoleByUserId(sysUserId);
        
       for (int j = 0; j < resultList.size(); j++) {
            id = (BigInteger) resultList.get(j).get("id");
            for (int k = 0; k < updateUserRole.size(); k++) {
                updateId = (BigInteger) updateUserRole.get(k).get("id");
                if (id.equals(updateId)) {
                    resultList.get(j).put("checked", true);
                }
            }
        }
        return resultList;
    }
    /**
     * 
     * 功能描述：根据角色获取个别功能
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月5日 上午10:01:21
     *
     * @param roleId
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/getRoleFunctionPoint.do",method={RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public List<Map<String, Object>> getRoleFunctionPoint(@RequestParam(value="roleId")String roleId) {

        List<Map<String, Object>> resultList = this.service
                .findFunctionPointByRoleId(roleId,false);
        return super.wrapReturnObject(resultList, List.class);
    }

    
    /**
     * 
     * 功能描述：重置密码
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月5日 下午4:44:57
     *
     * @param userId
     * @param password
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/updatePwd.do",method={RequestMethod.POST})
    public @ResponseBody int updateUserPwd(String userIds){
       int flag = this.service.updatePassword(userIds);
       return flag;
    }
    /**
     * 
     * 功能描述：保存新增用户
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月6日 上午10:42:32
     *
     * @param userDTO
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/saveUser.do")
    public @ResponseBody int saveUser(UserExpandPaginationDTO userDTO,@RequestParam(value="roleId") String roleId){
        String[] roles = roleId.split(",");
        List<String> roleList = new ArrayList<>();
        for (String s : roles) {
            roleList.add(s);
        }
        userDTO.setRoleId(roleList);
       return this.service.saveUser(userDTO);
    }
    /**
     * 
     * 功能描述：更新用户权限
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月6日 下午1:21:35
     *
     * @param roleId
     * @param userId
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/updateUser.do")
    public @ResponseBody int updateUserRole(@RequestParam(value="roleId") String roleId,@RequestParam(value="userId") String userId){
        String[] roles = roleId.split(",");
        List<String> roleList = new ArrayList<>();
        for (String s : roles) {
            roleList.add(s);
        }
        return this.service.updateUser(roleList,userId);
    }
    /**
     * 
     * 功能描述：批量删除用户
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月7日 上午8:44:30
     *
     * @param userIds
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/deleteUser.do",method={RequestMethod.POST})
    public @ResponseBody int deleteUser(String userIds){
        return this.service.deleteUser(userIds);
    }
    
    /**
     * 
     * 功能描述：查询用户名是否存在
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月18日 上午11:22:28
     *
     * @param username
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/findUserByName.do",method={RequestMethod.POST})
    public @ResponseBody int findUserByName(String username){
        return this.service.findUserByName(username);
    }
    
    /**
     * 
     * 功能描述：修改密码初始化
     *
     * @author ：阮张忠
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/showUpdatePwd.srp")
    public String showUpdatePwd(){
        return "main/passwordedit";
    }
    
    /**
     * 
     * 功能描述：修改密码
     *
     * @author ：阮张忠
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/doUpdatePwd.do")
    @ResponseBody
    public boolean doUpdatePwd(String oldPwd, String newPwd){
        return this.service.updateUserPwd(oldPwd, newPwd);
    }
}
