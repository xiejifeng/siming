package cn.ffcs.txb.app.controller.personal;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.txb.common.model.Constant;
import cn.ffcs.txb.service.personal.IPersonalService;

@Controller
@RequestMapping(value = "/appTeacher")
public class AppTeacherController {
	@Resource
	private IPersonalService  personalService;
	
    /**
     * 
     * 功能描述：个人中心
     *
     * @author ：余冬平
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/personal.html")
    public String initLogin(){

        return "personal/personal_teacher";
    }
    
    /**
     * 
     * 功能描述：个人信息
     *
     * @author ：余冬平
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/userInfo.html")
    public String userInfo(HttpServletRequest request){
		BigInteger userId = (BigInteger)((Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO)).get("userId");
        Map<String, Object> userInfo = this.personalService.findUserInfoForTeacher(String.valueOf(userId));
		request.setAttribute("personalInfo", userInfo);
    	return "personal/teacher_info";
    }
    
    /**
     * 
     * 功能描述：获取需要验证的学生信息
     *
     * @author ：余冬平
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/studentValidate.html")
    public String studentValidate(HttpServletRequest request){
    	String tschool = (String)((Map<String, Object>)request.getSession().getAttribute(Constant.LOGIN_USER_INFO)).get("tschool");
    	List<Map<String, Object>> studentsInfo = this.personalService.findUnPassStuInfo(tschool);
    	request.setAttribute("studentsInfo", studentsInfo);
    	return "personal/studentValidate";
    }
    
    /**
     * 
     * 功能描述：审核学生信息
     *
     * @author ：余冬平
     * 创建日期 ：2014年12月24日 上午10:16:59
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value="/doPassCheckStuInfo.html")
    @ResponseBody
    public Map<String, Object> doPassCheckStuInfo(@RequestParam Map<String, Object> reqMap,HttpServletRequest request){
    	String userIds[]  = reqMap.get("userIds").toString().split(",");
    	Map<String, Object>  result= null;
    	for (int i = 0; i < userIds.length; i++) {
    		result=	this.personalService.updateCheckStudentInfo(userIds[i]);
		}
    	return result;
    }
}
