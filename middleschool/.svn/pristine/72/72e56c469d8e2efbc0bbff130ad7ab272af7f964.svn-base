/**
 * RoleExpandController.java	  V1.0   2014年12月23日 下午12:03:49
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.controller.roleExpand;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.srp.app.role.entity.Role;
import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.srp.util.web.WebContextUtil;
import cn.ffcs.txb.service.roleExpand.IRoleExpandService;
import cn.ffcs.txb.service.userExpand.IUserExpandService;


@Controller
@RequestMapping(value = "/roleExpand")
public class RoleExpandController extends AbstractController{
    @Resource
    private IRoleExpandService service;
    
    @Resource
    private IUserExpandService userservice;
    /**
     * 
     * 功能描述：获取当前用户的创建的角色
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月23日 下午12:47:33
     *
     * @param dto
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/listRoles.do", method = RequestMethod.POST)
    @ResponseBody
    public PaginationData<Map<String, Object>> getRolesList(RoleExpandPaginationDTO dto) {
        PaginationData<Map<String, Object>> paginationData = this.service.ListRoles(dto);
        return super.wrapReturnObject(paginationData, PaginationData.class);
    }
    
    
    @RequestMapping(value="/saveRoleExpand.do")
    @ResponseBody
    public int saveRoleExpand(String roleId){
        return this.service.saveRoleExpand(roleId);
    }

    @RequestMapping(value="/deleteRoleExpand.do")
    @ResponseBody
    public int deleteRoleExpand(BigInteger roleId){
        return this.service.deleteRoleExpand(roleId);
    }
    
    /**
     * 
     * 功能描述：根据当前登录用户的角色获取功能
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月23日 下午2:19:14
     *
     * @param roleId
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @SuppressWarnings("unchecked")
    @RequestMapping(value = "/getRoleFunctionPoint.do",method={RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public List<Map<String, Object>> getRoleFunctionPoint(String roleid) {
        boolean flag = false;
        //根据当前用户登录信息获取所属角色
        List<Role> list = WebContextUtil.getCurrentUser().getRoles();
        String roleId = "";
        for(int i = 0; i < list.size(); i++) {
            //获取角色id
            Role role = list.get(i);
            roleId = roleId + role.getId()+",";
        }
      //判断是否是超级系统管理员
        for(int i = 0; i < list.size(); i++) {
            if("ROLE_XITONGGUANLIYUAN".equalsIgnoreCase(list.get(i).getAuthority())){
                flag = true;
                break;
            }
        }
        List<Map<String, Object>> resultList;
        //根据当前用户获取角色拥有的功能
        if(flag){
             resultList = this.userservice
                    .findFunctionPointByRoleId(roleId,true);
        }else{
             resultList = this.userservice
                    .findFunctionPointByRoleId(roleId,false);
        }
        
       //根据角色id获取角色拥有的功能
        List<Map<String, Object>> checkList = this.userservice
                .findFunctionPointByRoleId(roleid,false);
        //勾选角色的功能 
        List<Map<String, Object>> treeData = getCheck(resultList,checkList);
        return super.wrapReturnObject(treeData, List.class);
    }
    /**
     * 
     * 功能描述：勾选角色的原有的功能
     *
     * @author ：林炳兴
     * 创建日期 ：2014年12月24日 下午2:49:12
     *
     * @param childrenlist
     * @param cchildrenlist
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @SuppressWarnings("unchecked")
    public List<Map<String, Object>> getCheck( List<Map<String, Object>> childrenlist,List<Map<String, Object>> cchildrenlist){
        List<Map<String, Object>> treeData = new ArrayList<Map<String, Object>>();
        Map<String, Object> model = null;
        for(int i = 0; i < childrenlist.size(); i++) {
            model = new HashMap<>();
            Map<String,Object> map = childrenlist.get(i);
            model.put("id", map.get("id"));
            model.put("text", map.get("text"));
            model.put("priority", map.get("priority"));
            model.put("state", map.get("state"));
            model.put("parent", map.get("parent"));
            model.put("iconCls", map.get("iconCls"));
            model.put("roleId", map.get("roleId"));
            for(int j = 0; j < cchildrenlist.size(); j++) {
                Map<String,Object> cmap = cchildrenlist.get(j);
                if(map.get("id").equals(cmap.get("id"))){
                    if(map.containsKey("children")){
                        List<Map<String, Object>> pchildrenlist = (List<Map<String, Object>>) map.get("children"); 
                        if(cmap.containsKey("children")){
                            List<Map<String, Object>> pcchildrenlist = (List<Map<String, Object>>) cmap.get("children");
                            List<Map<String, Object>> ptreeData = getCheck(pchildrenlist, pcchildrenlist);
                            model.put("children", ptreeData);
                        }
                    }else{
                        model.put("checked", true);
                    }
                }
            }
            if(map.containsKey("children")){
                if(!model.containsKey("children")){
                    model.put("children", map.get("children"));
                }
            }
            treeData.add(model);
        }
        return treeData;
        
    }
}
