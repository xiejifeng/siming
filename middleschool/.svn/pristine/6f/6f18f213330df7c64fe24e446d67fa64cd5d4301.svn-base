/**
 * RoleExpandServiceImpl.java	  V1.0   2014年12月23日 下午12:45:03
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.roleExpand.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import cn.ffcs.srp.app.role.dao.IRoleDAO;
import cn.ffcs.srp.app.role.entity.Role;
import cn.ffcs.srp.message.MessageContext;
import cn.ffcs.srp.message.MsgTypeEnum;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.srp.util.web.WebContextUtil;
import cn.ffcs.txb.common.log.OperationLogService;
import cn.ffcs.txb.controller.roleExpand.RoleExpandPaginationDTO;
import cn.ffcs.txb.dao.roleExpand.IRoleExpandDAO;
import cn.ffcs.txb.service.roleExpand.IRoleExpandService;

@Service
public class RoleExpandServiceImpl implements IRoleExpandService {

    @Resource
    private IRoleExpandDAO roleExpandDAO;
    
    @Resource
    private IRoleDAO roleDAO;
    
    
    @Resource
    private OperationLogService operationLogService;
    
    @Override
    public PaginationData<Map<String, Object>> ListRoles(RoleExpandPaginationDTO dto) {
        List<Object> values = new ArrayList<Object>();
        PaginationData<Map<String, Object>> paginationData;
        if (StringUtils.hasText(dto.getName())) {
            values.add("%" + dto.getName() + "%");
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
        if(!flag){
            values.add(WebContextUtil.getCurrentUser().getUsername());
            paginationData = this.roleExpandDAO
                    .findByPaginationAndDynamicCondition("SQL_ROLEEXPAND_1", values.toArray(),
                            dto, new String[][] { new String[] { "insertDate", "date",
                            "yyyy.MM.dd HH:mm:ss" }});
        }else{
            paginationData = this.roleExpandDAO
                    .findByPaginationAndDynamicCondition("SQL_ROLEEXPAND_8", values.toArray(),
                            dto, new String[][]{});
        }
        if (paginationData == null || paginationData.getTotal() == 0) {
            MessageContext.throwMessage("MSG_COM_001", MsgTypeEnum.INFO, null, false);
        }
        return paginationData;
    }

    @Override
    public int saveRoleExpand(String roleId) {
        int row = 0;
        //插入角色表扩展表
        if(roleId != null){
            row =  this.roleExpandDAO.doExecuteSqlAndNamedQuery("SQL_ROLEEXPAND_4", new Object[]{roleId,new Date(),WebContextUtil.getCurrentUser().getUsername()});
        }
        if(row > 0){
            operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "插入角色表扩展表成功", new Date());
        }else{
            operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "插入角色表扩展表失败", new Date());
        }
        return row;
    }
    
    
    @Override
    public int deleteRoleExpand(BigInteger roleId){
        //先查下角色用户表看是否关联
        int row = 0;
        BigInteger role_id = roleId;
        List<Map<String,Object>> list = this.roleDAO.findBySqlAndNamedQuery("SQL_ROLEEXPAND_9", new Object[]{role_id});
        if(list.size() <= 0){
            //删除角色表扩展表和角色表
            if(roleId != null){
                BigInteger id = roleId;
                //删除角色资源表
                row =row+ this.roleExpandDAO.doExecuteSqlAndNamedQuery("SQL_ROLEEXPAND_10", new Object[]{role_id});
                //删除角色表
                row =row+ this.roleExpandDAO.doExecuteSqlAndNamedQuery("SQL_ROLEEXPAND_7", new Object[]{id});
                //删除角色扩展表
                row =row+ this.roleExpandDAO.doExecuteSqlAndNamedQuery("SQL_ROLEEXPAND_6", new Object[]{roleId});
            }
        }else{
            MessageContext.throwMessage("APP0024", MsgTypeEnum.ERROR, null, false);
        }
        if(row > 0){
            operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "删除角色成功", new Date());
        }else{
            operationLogService.saveLogOperation(WebContextUtil.getCurrentUser().getUsername(), "删除角色失败", new Date());
        }
        return row;
    }
}
