/**
 * CategoryOrder.java	  V1.0   2014年12月17日 下午3:51:52
 *
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 *
 * Modification history(By    Time    Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import cn.ffcs.srp.core.entity.IEntity;

@SuppressWarnings("serial")
@Entity
@Table(name="category_order")
@DynamicUpdate(false)
@JsonAutoDetect
public class CategoryOrder implements IEntity{
    
    private Long id;
    
    private Integer orderNum;
    
    /**
     * 
     * 功能描述：ID(ID)
     *
     * @author ：ruanzhzh
     * 创建日期 ：2014-12-12 09:37:31
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
   @Id
   @GeneratedValue(strategy=GenerationType.AUTO)
   @Column(name="id")
   public Long getId(){
       
       return id;
   }
       
   /**
     * 
     * 功能描述：ID(ID)
     *
     * @author ：ruanzhzh
     * 创建日期 ：2014-12-12 09:37:31
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
   public void setId(Long id){
       
       this.id=id;
   }

    @Column(name="orderNum")
    public Integer getOrderNum() {
    
        return orderNum;
    }

    
    public void setOrderNum(Integer orderNum) {
    
        this.orderNum = orderNum;
    }
    
}
