package cn.ffcs.txb.service.userExpand;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;

import cn.ffcs.srp.app.user.entity.User;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.back.controller.teacher.TeacherPaginationDTO;
import cn.ffcs.txb.controller.userExpand.UserExpandPaginationDTO;
import cn.ffcs.txb.entity.UserExpand;


public interface IUserExpandService {
	/**
	 * 
	 * 功能描述：'获取用户扩展信息'
	 *
	 * @author ：linbingxing
	 * 创建日期 ：2014年8月29日 上午10:09:21
	 *
	 * @param id
	 * @return
	 *
	 * 修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
//	UserExpand getUserExpand(BigInteger id);
	/**
	 * 
	 * 功能描述：'更新用户扩展信息'
	 *
	 * @author ：linbingxing
	 * 创建日期 ：2014年8月29日 上午10:09:31
	 *
	 * @param userExpand
	 * @return
	 *
	 * 修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
	boolean updateUserExpand(UserExpand userExpand);

	/**
	 * 
	 * 功能描述：'根据用户id查询出所对应的角色列表'
	 *
	 * @author ：linbingxing
	 * 创建日期 ：2014年8月29日 上午10:09:51
	 *
	 * @param sysUserId
	 * @return
	 *
	 * 修改历史 ：(修改人，修改时间，修改原因/内容)
	 */
    List<Map<String, Object>> findRoleByUserId(String sysUserId);

    /**
     * 
     * 功能描述：'根据角色id 查询所有功能点信息'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:09:55
     *
     * @param roleId
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    List<Map<String, Object>> findFunctionPointByRoleId(String roleId,boolean flag);

    /**
     * 
     * 功能描述：'查询出所有角色'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:01
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    List<Map<String, Object>> findAllRole();

    /**
     * 
     * 功能描述：'根据用户id查找用户信息'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:06
     *
     * @param userId
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    User getUserById(String userId);

    /**
     * 
     * 功能描述：'根据 用户ids 批量更新用户密码'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:11
     *
     * @param userIds
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    int updatePassword(String userIds);

    /**
     * 
     * 功能描述：'查询用户分页对象'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:18
     *
     * @param paginationDTO
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    PaginationData<Map<String, Object>> findPagination(UserExpandPaginationDTO paginationDTO);
    
    PaginationData<Map<String, Object>> findPaginationBack(UserExpandPaginationDTO paginationDTO);

    /**
     * 
     * 功能描述：'新增用户保存'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:22
     *
     * @param userDTO
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    int saveUser(UserExpandPaginationDTO userDTO);

    /**
     * 
     * 功能描述：'根据用户id及其对应的角色列表更新用户信息'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:26
     *
     * @param roleList
     * @param userId
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    int updateUser(List<String> roleList, String userId);

    /**
     * 
     * 功能描述：'根据用户ids批量删除用户'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:30
     *
     * @param userIds
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    int deleteUser(String userIds);
    
    /**
     * 
     * 功能描述：'根据用户ids批量审核用户'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:30
     *
     * @param userIds
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    int doCheckeTeacherUser(String userIds);

    /**
     * 
     * 功能描述：'根据用户名查找用户'
     *
     * @author ：linbingxing
     * 创建日期 ：2014年8月29日 上午10:10:42
     *
     * @param username
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    int findUserByName(String username);
    
    /**
     * 
     * 功能描述：修改密码
     *
     * @author ：阮张忠
     * 创建日期 ：2014年12月24日 上午10:47:44
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    boolean updateUserPwd(String oldPwd, String newPwd);
	PaginationData<Map<String, Object>> findPagination(
			TeacherPaginationDTO paginationDTO);
	
	
	int saveUser(TeacherPaginationDTO userDTO);
	PaginationData<Map<String, Object>> findTeacherPagination(
			TeacherPaginationDTO paginationDTO);

	int findDicMaxNum();
	void saveDic (String texts,int num);
	
}