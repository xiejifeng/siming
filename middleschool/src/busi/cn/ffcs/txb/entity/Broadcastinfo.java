
package cn.ffcs.txb.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import cn.ffcs.srp.core.entity.IEntity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

/**
 * 
 * 功能描述：
 * 
 * @author ：g-linbingxing
 * 
 *         修改历史：(修改人，修改时间，修改原因/内容)
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "broadcast_info")
@DynamicUpdate(false)
@JsonAutoDetect
public class Broadcastinfo implements IEntity {

    /**
     * 广播信息ID
     */
    private String broadcastInfoId;

    /**
     * 一级内容
     */
    private String primaryContent;

    /**
     * 扩展内容
     */
    private String extendedContent;

    /**
     * 广播类型
     */
    private String broadcastType;

    /**
     * 发布类型
     */
    private String issueType;

    /**
     * 定时发布星期
     */
    private String timingIssueWeek;

    /**
     * 定时发布时间点
     */
    private String timingIssueTime;

    /**
     * 发布对象类型
     */
    private String issueObjectType;

    /**
     * 发布对象
     */
    private String issueObject;
    /**
     * 省
     */
    private String province;
    /**
     * 市
     */
    private String city;
    /**
     * 区域
     */
    private String area;
    /**
     * 发布状态
     */
    private String issueStatus;

    /**
     * 更新次数
     */
    private Integer updateCount;

    /**
     * 新增年月日
     */
    private Date insertDate;

    /**
     * 新增用户ID
     */
    private String insertUserId;

    /**
     * 新增程序ID
     */
    private String insertProgramId;

    /**
     * 更新年月日
     */
    private Date updateDate;

    /**
     * 更新用户ID
     */
    private String updateUserId;

    /**
     * 更新程序ID
     */
    private String updateProgramId;

    /**
     * 
     * 功能描述：‘广播信息ID’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "broadcastInfoId")
    public String getBroadcastInfoId() {

        return broadcastInfoId;
    }

    /**
     * 
     * 功能描述：‘广播信息ID’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param broadcastInfoId
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setBroadcastInfoId(String broadcastInfoId) {

        this.broadcastInfoId = broadcastInfoId;
    }

    /**
     * 
     * 功能描述：‘一级内容’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "PRIMARYCONTENT")
    public String getPrimaryContent() {

        return primaryContent;
    }

    /**
     * 
     * 功能描述：‘一级内容’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param primaryContent
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setPrimaryContent(String primaryContent) {

        this.primaryContent = primaryContent;
    }

    /**
     * 
     * 功能描述：‘扩展内容’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "EXTENDEDCONTENT")
    public String getExtendedContent() {

        return extendedContent;
    }

    /**
     * 
     * 功能描述：‘扩展内容’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param extendedContent
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setExtendedContent(String extendedContent) {

        this.extendedContent = extendedContent;
    }

    /**
     * 
     * 功能描述：‘广播类型’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "BROADCASTTYPE")
    public String getBroadcastType() {

        return broadcastType;
    }

    /**
     * 
     * 功能描述：‘广播类型’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param broadcastType
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setBroadcastType(String broadcastType) {

        this.broadcastType = broadcastType;
    }

    /**
     * 
     * 功能描述：‘发布类型’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "ISSUETYPE")
    public String getIssueType() {

        return issueType;
    }

    /**
     * 
     * 功能描述：‘发布类型’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param issueType
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setIssueType(String issueType) {

        this.issueType = issueType;
    }

    /**
     * 
     * 功能描述：‘定时发布星期’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "TIMINGISSUEWEEK")
    public String getTimingIssueWeek() {

        return timingIssueWeek;
    }

    /**
     * 
     * 功能描述：‘定时发布星期’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param timingIssueWeek
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setTimingIssueWeek(String timingIssueWeek) {

        this.timingIssueWeek = timingIssueWeek;
    }

    /**
     * 
     * 功能描述：‘定时发布时间点’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "TIMINGISSUETIME")
    public String getTimingIssueTime() {

        return timingIssueTime;
    }

    /**
     * 
     * 功能描述：‘定时发布时间点’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param timingIssueTime
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setTimingIssueTime(String timingIssueTime) {

        this.timingIssueTime = timingIssueTime;
    }

    /**
     * 
     * 功能描述：‘发布对象类型’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "ISSUEOBJECTTYPE")
    public String getIssueObjectType() {

        return issueObjectType;
    }

    /**
     * 
     * 功能描述：‘发布对象类型’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param issueObjectType
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setIssueObjectType(String issueObjectType) {

        this.issueObjectType = issueObjectType;
    }

    /**
     * 
     * 功能描述：‘发布对象’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "ISSUEOBJECT")
    public String getIssueObject() {

        return issueObject;
    }

    /**
     * 
     * 功能描述：‘发布对象’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param issueObject
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setIssueObject(String issueObject) {

        this.issueObject = issueObject;
    }

    /**
     * 
     * 功能描述：‘发布状态’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "ISSUESTATUS")
    public String getIssueStatus() {

        return issueStatus;
    }

    /**
     * 
     * 功能描述：‘发布状态’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param issueStatus
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setIssueStatus(String issueStatus) {

        this.issueStatus = issueStatus;
    }

    /**
     * 
     * 功能描述：‘更新次数’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : Integer
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "UPDATECOUNT")
    public Integer getUpdateCount() {

        return updateCount;
    }

    /**
     * 
     * 功能描述：‘更新次数’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param updateCount
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setUpdateCount(Integer updateCount) {

        this.updateCount = updateCount;
    }

    /**
     * 
     * 功能描述：‘新增年月日’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : Date
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "INSERTDATE")
    public Date getInsertDate() {

        return insertDate;
    }

    /**
     * 
     * 功能描述：‘新增年月日’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param insertDate
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setInsertDate(Date insertDate) {

        this.insertDate = insertDate;
    }

    /**
     * 
     * 功能描述：‘新增用户ID’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "INSERTUSERID")
    public String getInsertUserId() {

        return insertUserId;
    }

    /**
     * 
     * 功能描述：‘新增用户ID’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param insertUserId
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setInsertUserId(String insertUserId) {

        this.insertUserId = insertUserId;
    }

    /**
     * 
     * 功能描述：‘新增程序ID’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "INSERTPROGRAMID")
    public String getInsertProgramId() {

        return insertProgramId;
    }

    /**
     * 
     * 功能描述：‘新增程序ID’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param insertProgramId
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setInsertProgramId(String insertProgramId) {

        this.insertProgramId = insertProgramId;
    }

    /**
     * 
     * 功能描述：‘更新年月日’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : Date
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "UPDATEDATE")
    public Date getUpdateDate() {

        return updateDate;
    }

    /**
     * 
     * 功能描述：‘更新年月日’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param updateDate
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setUpdateDate(Date updateDate) {

        this.updateDate = updateDate;
    }

    /**
     * 
     * 功能描述：‘更新用户ID’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "UPDATEUSERID")
    public String getUpdateUserId() {

        return updateUserId;
    }

    /**
     * 
     * 功能描述：‘更新用户ID’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param updateUserId
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setUpdateUserId(String updateUserId) {

        this.updateUserId = updateUserId;
    }

    /**
     * 
     * 功能描述：‘更新程序ID’取值
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @return : String
     * 
     *         修改历史：（修改人，修改时间，修改原因/内容)
     */
    @Column(name = "UPDATEPROGRAMID")
    public String getUpdateProgramId() {

        return updateProgramId;
    }

    /**
     * 
     * 功能描述：‘更新程序ID’设置
     * 
     * @author：Tool(By 陈雄华) 创建日期：2014-08-01 09:26:15
     * 
     * @param updateProgramId
     * 
     *            修改历史：（修改人，修改时间，修改原因/内容)
     */
    public void setUpdateProgramId(String updateProgramId) {

        this.updateProgramId = updateProgramId;
    }

    /**
     * 
     * 功能描述：'省份'取值
     * 
     * @author ：chenshj 创建日期 ：2014年8月29日 上午9:28:12
     * 
     * @return
     * 
     *         修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getProvince() {

        return province;
    }

    /**
     * 
     * 功能描述：'省份'设置
     * 
     * @author ：chenshj 创建日期 ：2014年8月29日 上午9:28:53
     * 
     * @param province
     * 
     *            修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public void setProvince(String province) {

        this.province = province;
    }

    /**
     * 
     * 功能描述：'城市'取值
     * 
     * @author ：chenshj 创建日期 ：2014年8月29日 上午9:29:14
     * 
     * @return
     * 
     *         修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getCity() {

        return city;
    }

    /**
     * 
     * 功能描述：'城市'设置
     * 
     * @author ：chenshj 创建日期 ：2014年8月29日 上午9:30:11
     * 
     * @param city
     * 
     *            修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public void setCity(String city) {

        this.city = city;
    }

    /**
     * 
     * 功能描述：'地区'取值
     * 
     * @author ：chenshj 创建日期 ：2014年8月29日 上午9:32:40
     * 
     * @return
     * 
     *         修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public String getArea() {

        return area;
    }

    /**
     * 
     * 功能描述：‘地区’设置
     * 
     * @author ：chenshj 创建日期 ：2014年8月29日 上午9:33:06
     * 
     * @param area
     * 
     *            修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    public void setArea(String area) {

        this.area = area;
    }

}
