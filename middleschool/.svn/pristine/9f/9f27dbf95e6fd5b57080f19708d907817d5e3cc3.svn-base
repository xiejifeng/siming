package cn.ffcs.txb.service.userExpand.impl;


import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.springframework.security.authentication.encoding.MessageDigestPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import cn.ffcs.srp.app.role.entity.Role;
import cn.ffcs.srp.app.user.dao.IUserDAO;
import cn.ffcs.srp.app.user.entity.User;
import cn.ffcs.srp.message.MessageContext;
import cn.ffcs.srp.message.MsgTypeEnum;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.srp.util.web.WebContextUtil;
import cn.ffcs.txb.back.controller.teacher.TeacherPaginationDTO;
import cn.ffcs.txb.common.log.OperationLogService;
import cn.ffcs.txb.common.model.Constant;
import cn.ffcs.txb.controller.userExpand.UserExpandPaginationDTO;
import cn.ffcs.txb.dao.userExpand.IUserExpandDAO;
import cn.ffcs.txb.entity.UserExpand;
import cn.ffcs.txb.service.userExpand.IUserExpandService;


@Service
public class UserExpandServiceImpl implements IUserExpandService {

    @Resource
    private IUserExpandDAO dao;
    
    @Resource
    private IUserDAO userDAO;
    
    @Resource
    private MessageDigestPasswordEncoder passwordEncoder;

    @Resource
    private OperationLogService operationLogService;
    /**
     * 根据用户id获取用户扩展表
     */
//	public UserExpand getUserExpand(BigInteger id) {
//		UserExpand userExpand = dao.findUnique("from UserExpand where userId=?", new Object[]{id});
//		return userExpand;
//	}


	/**
	 * 更新用户扩展表
	 */
	public boolean updateUserExpand(UserExpand userExpand) {
		boolean result = true;
		try {
			dao.update(userExpand);
		} catch (Exception e) {
			e.printStackTrace();
			operationLogService.saveLogOperation("林舒涛", "【用户扩展信息保存】cn.ffcs.txb.service.userExpand.impl.UserExpandServiceImpl", new Date());
			result = false;
		}
		return result;
	}


	/**
	 *
	 * 根据用户id获取角色
	 */
    @Override
    public List<Map<String, Object>> findRoleByUserId(String user_id) {
        List<Map<String, Object>> sysRole = null;
        List<Object> values = new ArrayList<Object>();
        values.add(user_id);
        sysRole = this.dao.findBySqlAndNamedQuery("SQL_USEREXPAND_3",values.toArray());
        return sysRole;
    }

    /**
     * 
     * 功能描述：得到子节点列表
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月29日 下午3:38:41
     *
     * @param list
     * @param id
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    private List<Map<String,Object>> getChildList(List<Map<String,Object>> list, BigInteger id) {
        List<Map<String,Object>> nodeList = new ArrayList<Map<String,Object>>();
        for(Map<String, Object> map : list) {
            BigInteger parent = (BigInteger) map.get("parent");
            if (parent.equals(id)) {
                nodeList.add(map);
            }
        }
        return nodeList;
    }
    /**
     * 
     * 功能描述：判断是否有子节点
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月29日 下午3:36:49
     *
     * @param list
     * @param id
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    private boolean hasChild(List<Map<String,Object>> list, BigInteger id) {
        return getChildList(list, id).size() > 0 ? true : false;
    }
    /**
     * 
     * 功能描述：获取子节点信息
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月29日 下午3:36:29
     *
     * @param list
     * @param id
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    private List<Map<String, Object>> getAllChildList(List<Map<String,Object>> list, BigInteger id){
        List<Map<String,Object>> resultList = new ArrayList<Map<String,Object>>();
        List<Map<String, Object>> tempList = getChildList(list, id);
        list.removeAll(tempList);
        for(int i = 0; i < tempList.size(); i++) {
              BigInteger tmpId = (BigInteger) tempList.get(i).get("id");
              Map<String, Object> temp = new HashMap<String,Object>();
              temp = tempList.get(i);
              if(hasChild(list,tmpId)){
                  temp.put("children", getChildList(list, tmpId));
                  temp.put("state", "closed");
                  getAllChildList(list,tmpId);
              }
              resultList.add(temp);
        }
        return resultList;
    }
    /**
     * 
     * 获取功能点
     */
    @Override
    public List<Map<String, Object>> findFunctionPointByRoleId(String sysRoleId,boolean flag) {
        String[] roles = sysRoleId.split(",");
        List<Map<String, Object>> resultMap = new ArrayList<>();
        List<Map<String, Object>> newResultMap = new ArrayList<>();
        if(flag){
          //根据角色id获取所有相关功能点
            List<Map<String, Object>> functionPoint = (List<Map<String, Object>>) this.dao
                    .findBySqlAndNamedQuery(
                            "SQL_USEREXPAND_16", null);
           for(int i = 0; i < functionPoint.size(); i++) {
               Map<String, Object> map = functionPoint.get(i);
                BigInteger id = (BigInteger) map.get("id");
                //如果有子节点，继续获取
                if(hasChild(functionPoint,id)){
                    map.put("children", getAllChildList(functionPoint,id));
                    map.put("state", "closed");
                }
                resultMap.add(map);
            }
        }else{
            for(String roleId : roles) {
                //根据角色id获取所有相关功能点
                List<Map<String, Object>> functionPoint = (List<Map<String, Object>>) this.dao
                        .findBySqlAndNamedQuery(
                                "SQL_USEREXPAND_2", new Object[] { roleId });
               for(int i = 0; i < functionPoint.size(); i++) {
                   Map<String, Object> map = functionPoint.get(i);
                    BigInteger id = (BigInteger) map.get("id");
                    //如果有子节点，继续获取
                    if(hasChild(functionPoint,id)){
                        map.put("children", getAllChildList(functionPoint,id));
                        map.put("state", "closed");
                    }
                    resultMap.add(map);
                    
                }
            }
        }
        //去除重复的数据项
        Set<BigInteger> set = new HashSet<>();
        for(int i = 0; i < resultMap.size(); i++) {
            Map<String, Object> dto = resultMap.get(i);
            boolean temp = set.add((BigInteger)dto.get("id"));
            if (temp) {
                newResultMap.add(dto);
            }
        }
        return newResultMap;
    }

    /**
     * 获得所有角色
     */
    @Override
    public List<Map<String, Object>> findAllRole() {
        List<Map<String, Object>> sysRole = null;
        List<Role> roles = WebContextUtil.getCurrentUser().getRoles();
        boolean flag = false;
        //判断是否是超级系统管理员
        for(int i = 0; i < roles.size(); i++) {
            if("ROLE_XITONGGUANLIYUAN".equalsIgnoreCase(roles.get(i).getAuthority())){
                flag = true;
                break;
            }
        }
        if(flag){
            sysRole = this.dao.findBySqlAndNamedQuery("SQL_USEREXPAND_14",new Object[]{});
        }else{
            sysRole = this.dao.findBySqlAndNamedQuery("SQL_USEREXPAND_1",new Object[]{WebContextUtil.getCurrentUser().getUsername()});
        }
        return sysRole;
    }
 

    /**
     * 根据用户id查询用户
     */
    @Override
    public User getUserById(String userId) {
        User user = this.userDAO.get(Long.valueOf(userId));
        if(user == null){
            MessageContext.throwMessage("APP0006", MsgTypeEnum.INFO, null, false);
        }
        return user;
    }


    /**
     * 重置用户的密码
     */
    @Override
    public int updatePassword(String userIds) {
        if (null == userIds || "".equals(userIds.trim()) || "null".equals(userIds)) {
            return 0;
        }else{
            String[] sysUserIds = userIds.split(",");
            int rows = 0;
            for(String userId : sysUserIds) {
                User user = this.userDAO.get(Long.valueOf(userId));
                String pwd=this.passwordEncoder.encodePassword("123456", user.getUsername());
                rows = rows + this.userDAO.doExecuteSqlAndNamedQuery("SQL_USEREXPAND_4",
                        new Object[] { pwd,userId});
            }
            if(rows > 0){
                operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "用户重置密码成功", new Date());

                MessageContext.throwMessage("APP0017", MsgTypeEnum.INFO, null, false);
                // 记录日志
            }else{
                operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "用户重置密码失败", new Date());

                MessageContext.throwMessage("APP0018", MsgTypeEnum.ERROR, null, true);
            }
          
             return rows;
        }
    }


    /**
     * 分页查询用户信息
     */
    @Override
    public PaginationData<Map<String, Object>> findPagination(
            UserExpandPaginationDTO paginationDTO) {
        List<Object> values = new ArrayList<Object>();
        PaginationData<Map<String, Object>> paginationData = null;
        List<Role> roles = WebContextUtil.getCurrentUser().getRoles();
        boolean flag = false;
        String roleIds = "";
        //判断是否是超级系统管理员
        for(int i = 0; i < roles.size(); i++) {
            if("ROLE_XITONGGUANLIYUAN".equalsIgnoreCase(roles.get(i).getAuthority())){
                flag = true;
                break;
            }else{
            	if("".equals(roleIds)){
            		roleIds=String.valueOf(roles.get(i).getId());
            	}else{
            		roleIds = roleIds+","+String.valueOf(roles.get(i).getId());
            	}
            }
        }
    	if(Constant.CITY_All.equals(paginationDTO.getCityorqx())){
    		paginationDTO.setCityorqx("");
    	}
    	if(Constant.GRADE_All.equals(paginationDTO.getGrade())){
    		paginationDTO.setGrade("");
    	}
    	if(Constant.TSCHOOL_All.equals(paginationDTO.getTschool())){
    		paginationDTO.setTschool("");
    	}
    	if(Constant.USERTYPE_All.equals(paginationDTO.getStatus())){
    		paginationDTO.setStatus("");
    	}
       	paginationDTO.setSortName("insertDate");
       	paginationDTO.setSortOrder("DESC");
        if(flag){
        	paginationDTO.setRoleIds(roleIds);
            paginationData = this.dao.findByPaginationAndDynamicCondition("SQL_All_9",paginationDTO, new String[][] { new String[] { "insertDate", "date",
            "yyyy.MM.dd HH:mm:ss" }});
        }else{
        	paginationDTO.setRoleIds(roleIds);
            paginationData = this.dao.findByPaginationAndDynamicCondition("SQL_All_9",paginationDTO, new String[][] { new String[] { "insertDate", "date",
            "yyyy.MM.dd HH:mm:ss" }});
        }
        return paginationData;
    }


    /**
     * 保存用户信息
     */
    @Override
    public int saveUser(UserExpandPaginationDTO userDTO) {
        int row = 0;
        User user = new User();
        if(null != userDTO.getUsername() || !"".equals(userDTO.getUsername()) || !"null".equals(userDTO.getUsername())){
            //判断用户名是否存在
            User temp = userDAO.findUnique("from User where username=?", new Object[]{userDTO.getUsername()});
            if(temp != null){
                //提示用户已经存在
                MessageContext.throwMessage("APP0002", MsgTypeEnum.INFO, new Object[]{userDTO.getUsername()}, false);
                return 0;
            }else{
                user.setUsername(userDTO.getUsername());
                if(null != userDTO.getPassword() || !"".equals(userDTO.getPassword()) || !"null".equals(userDTO.getPassword())){
                    //对密码进行加密
                    String pwd=this.passwordEncoder.encodePassword(userDTO.getPassword(), userDTO.getUsername());
                    user.setPassword(pwd);
                }else{
                    //如果密码为空，设置默认值为123456
                    String pwd=this.passwordEncoder.encodePassword("123456", userDTO.getUsername());
                    user.setPassword(pwd);
                }
                //保存用户
                row =  this.dao.doExecuteSqlAndNamedQuery("SQL_USEREXPAND_9", new Object[] { user.getUsername(),user.getPassword(),true,true,true,true});
                //保存用户成功，同时进行用户角色表、用户扩展表的操作
                if(row > 0){
                   row = row + saveUserExpandAndRole(userDTO);
                   operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "用户新增成功", new Date());
                }
            }
        }
        return row;
    }

    /**
     * 
     * 功能描述：保存用户扩展表和用户角色
     *
     * @author ：林炳兴
     * 创建日期 ：2014年8月29日 下午3:34:22
     *
     * @param userDTO
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public int saveUserExpandAndRole(UserExpandPaginationDTO userDTO){
        //得到用户的id
        int row = 0;
        BigInteger userId = null;
        Map<String,Object> userMap = this.userDAO.findUniqueBySqlAndNamedQuery("SQL_USEREXPAND_6", null);
        if(userMap != null){
            userId = (BigInteger) userMap.get("userId");
        }
        //根据用户id,保存用户的角色
        if(userId != null){
            //角色id
            if(userDTO.getRoleId() != null || userDTO.getRoleId().size() > 0){
                for(int i = 0; i < userDTO.getRoleId().size(); i++) {
                    String roleid = userDTO.getRoleId().get(i);
                    row = row + this.dao.doExecuteSqlAndNamedQuery("SQL_USEREXPAND_7", new Object[] { userId, roleid });
                }
            }
            //用户扩展表
            UserExpand userExpand = new UserExpand();
            userExpand.setUserId(userId);
            userExpand.setInsertDate(new Date());
            userExpand.setUpdateDate(new Date());
            userExpand.setCreateName(WebContextUtil.getCurrentUser().getUsername());
            userExpand.setUpdateName("");
            userExpand.setLogingCount(0);
            this.dao.save(userExpand);
            //日志操作
            operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "用户扩展新增成功", new Date());
        }
        return row;
    }

    /**
     * 根据用户id更新用户的角色
     */
    @Override
    public int updateUser(List<String> roleList, String userId) {

        //删除原先的角色
       int row = this.dao.doExecuteSqlAndNamedQuery("SQL_USEREXPAND_11", new Object[] { userId});
       for(int i = 0; i < roleList.size(); i++) {
           String roleid = roleList.get(i);
           row = row + this.dao.doExecuteSqlAndNamedQuery("SQL_USEREXPAND_7", new Object[] { userId, roleid });
       }
        //日志记录
       if(row > 0){
           operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "用户更新成功", new Date());
       }else{
           operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "用户删除失败", new Date());

       }
       return row;
    }


    /**
     * 根据用户id删除用户
     */
    @Override
    public int deleteUser(String userIds) {
        if (null == userIds || "".equals(userIds.trim()) || "null".equals(userIds)) {
            return 0;
        }else{
            String[] sysUserIds = userIds.split(",");
            int rows = 0;
            for(String userId : sysUserIds) {
                //先删除用户角色关系表、用户扩展表，才删除用户表
                //删除原先的角色
                rows =rows + this.dao.doExecuteSqlAndNamedQuery("SQL_USEREXPAND_11", new Object[] { userId});
                rows = rows + this.dao.doExecuteSqlAndNamedQuery("SQL_USEREXPAND_12",new Object[] {userId});
            }
            if(rows > 0){
                operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "用户删除成功", new Date());
                //记录日志
            }else{
                operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "用户删除失败", new Date());
            }
             return rows;
        }
    }


    /**
     * 根据用户名查询该用户是否存在
     */
    @Override
    public int findUserByName(String username) {
        User temp = userDAO.findUnique("from User where username=?", new Object[]{username});
        if(temp != null){
            return 1;
        }else{
            return 0;
        }
    }
    
    /**
     * 修改密码
     */
    public boolean updateUserPwd(String oldPwd, String newPwd){
        User user = userDAO.get(WebContextUtil.getCurrentUser().getId());
        if(user == null){
            MessageContext.throwMessage("APP0022", MsgTypeEnum.ERROR, null, true);
        }
        if(!user.getPassword().equals(this.passwordEncoder.encodePassword(oldPwd, user.getUsername()))){
            MessageContext.throwMessage("APP0023", MsgTypeEnum.ERROR, null, true);
        }
        user.setPassword(this.passwordEncoder.encodePassword(newPwd, user.getUsername()));
        userDAO.save(user);
        return true;
    }


	@Override
	public PaginationData<Map<String, Object>> findPagination(
			TeacherPaginationDTO paginationDTO) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public int saveUser(TeacherPaginationDTO userDTO) {
		// TODO Auto-generated method stub
		return 0;
	}


	@Override
	public PaginationData<Map<String, Object>> findTeacherPagination(
			TeacherPaginationDTO paginationDTO) {
        List<Object> values = new ArrayList<Object>();
        PaginationData<Map<String, Object>> paginationData = null;
        List<Role> roles = WebContextUtil.getCurrentUser().getRoles();
        boolean flag = false;
        String roleIds = "";
        String status = paginationDTO.getStatus();
        //判断是否是超级系统管理员
        for(int i = 0; i < roles.size(); i++) {
            if("ROLE_XITONGGUANLIYUAN".equalsIgnoreCase(roles.get(i).getAuthority())){
                flag = true;
                break;
            }else{
            	if("".equals(roleIds)){
            		roleIds=String.valueOf(roles.get(i).getId());
            	}else{
            		roleIds = roleIds+","+String.valueOf(roles.get(i).getId());
            	}
            }
        }
    	if(Constant.TEACHER_ACCOUNT_ALL.equals(status)){
    		paginationDTO.setStatus("");
    	}
    	if(Constant.CITY_All.equals(paginationDTO.getCityorqx())){
    		paginationDTO.setCityorqx("");
    	}
    	if(Constant.ART_All.equals(paginationDTO.getArttype())){
    		paginationDTO.setArttype("");
    	}
    	if(Constant.TSCHOOL_All.equals(paginationDTO.getTschool())){
    		paginationDTO.setTschool("");
    	}
    	paginationDTO.setSortName("insertDate");
       	paginationDTO.setSortOrder("DESC");
        if(flag){
        	paginationDTO.setRoleIds(roleIds);
            paginationData = this.dao.findByPaginationAndDynamicCondition("SQL_All_10",paginationDTO, new String[][] { new String[] { "insertDate", "date",
            "yyyy.MM.dd HH:mm:ss" }});
        }else{
        	paginationDTO.setRoleIds(roleIds);
            paginationData = this.dao.findByPaginationAndDynamicCondition("SQL_All_5",paginationDTO, new String[][] { new String[] { "insertDate", "date",
            "yyyy.MM.dd HH:mm:ss" }});
        }
        return paginationData;
	}


	public int doCheckeTeacherUser(String userIds) {
        if (null == userIds || "".equals(userIds.trim()) || "null".equals(userIds)) {
            return 0;
        }else{
            String[] sysUserIds = userIds.split(",");
            int rows = 0;
            for(String info : sysUserIds) {
            	String [] userInfo = info.split("#");
            	if(userInfo[2].equals("0")){
            		 rows =rows + this.dao.doExecuteSqlAndNamedQuery("SQL_All_6", new Object[] {Constant.TEACHER_ACCOUNT_CHECK,userInfo[0]});
            	}else if(userInfo[2].equals("1")){
            		 rows =rows + this.dao.doExecuteSqlAndNamedQuery("SQL_All_6", new Object[] {Constant.TEACHER_ACCOUNT_LOCK,userInfo[0]});
            	}else{
            		 rows =rows + this.dao.doExecuteSqlAndNamedQuery("SQL_All_6", new Object[] {Constant.TEACHER_ACCOUNT_UNCHECK,userInfo[0]});
            	}
            }
            if(rows > 0){
                operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "教师审核通过", new Date());
                //记录日志
            }else{
                operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "教师审核失败", new Date());
            }
            return rows;
        }
	}


	@Override
	public PaginationData<Map<String, Object>> findPaginationBack(
			UserExpandPaginationDTO paginationDTO) {
        List<Object> values = new ArrayList<Object>();
        PaginationData<Map<String, Object>> paginationData = null;
        if (StringUtils.hasText(paginationDTO.getUsername())) {
            values.add("%" + paginationDTO.getUsername() + "%");
        }
        List<Role> roles = WebContextUtil.getCurrentUser().getRoles();
        boolean flag = false;
        //判断是否是超级系统管理员
        for(int i = 0; i < roles.size(); i++) {
            if("ROLE_XITONGGUANLIYUAN".equalsIgnoreCase(roles.get(i).getAuthority())){
                flag = true;
                break;
            }
        }
    	if(Constant.CITY_All.equals(paginationDTO.getCityorqx())){
    		paginationDTO.setCityorqx("");
    	}
    	if(Constant.ART_All.equals(paginationDTO.getArttype())){
    		paginationDTO.setArttype("");
    	}
    	if(Constant.TSCHOOL_All.equals(paginationDTO.getTschool())){
    		paginationDTO.setTschool("");
    	}
        if(flag){
            paginationData = this.dao
                    .findByPaginationAndDynamicCondition("SQL_USEREXPAND_15", values.toArray(),
                            paginationDTO, new String[][] { new String[] { "insertDate", "date",
                            "yyyy.MM.dd HH:mm:ss" }});
        }else{
            values.add(WebContextUtil.getCurrentUser().getUsername());
            paginationData = this.dao
                   .findByPaginationAndDynamicCondition("SQL_USEREXPAND_5", values.toArray(),
                           paginationDTO, new String[][] { new String[] { "insertDate", "date",
                           "yyyy.MM.dd HH:mm:ss" }});
        }
        return paginationData;
	}


	@Override
	public int findDicMaxNum() {
		return this.dao.findIntBySqlAndNamedQuery("SQL_All_29", new Object[]{}, "code");
	}


	@Override
	public void saveDic(String texts,int  num) {
		this.dao.doExecuteSqlAndNamedQuery("SQL_All_30", new Object[]{"1A"+num,texts});
	}
    
}
