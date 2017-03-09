/**
 * IRoleExpandService.java	  V1.0   2014年12月23日 下午12:43:38
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.service.roleExpand;

import java.math.BigInteger;
import java.util.Map;

import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.controller.roleExpand.RoleExpandPaginationDTO;


public interface IRoleExpandService {

    PaginationData<Map<String, Object>> ListRoles(RoleExpandPaginationDTO dto);

    int saveRoleExpand(String roleId);
    int  deleteRoleExpand(BigInteger roleId);
}
