/**
 * YY010Service.java V1.0 2014年7月17日下午3:36:49
 * 
 * Copyright 2014 FUJIAN FUJITSU COMMUNICATION SOFTWARE CO., LTD. All rights reserved.
 * 
 * Modification history(By Time Reason):
 * 
 * Description:
 */

package cn.ffcs.txb.back.controller.scoreflow;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.ui.model.PaginationData;
import cn.ffcs.txb.common.model.ScoreFlow;
import cn.ffcs.txb.common.util.ExportExcel;
import cn.ffcs.txb.service.statistical.IStatisticalService;

/**
 * 
 * 功能描述：积分兑换
 * @author ：yudp
 * 修改历史：(修改人，修改时间，修改原因/内容)
 * 
 */
@Controller
@RequestMapping(value = "/scoreflow")
public class ScoreFlowController extends AbstractController {
	
	public static final String FILE_SEPARATOR = System.getProperties().getProperty("file.separator");

    @Resource
    private IStatisticalService statisticalService;

    @RequestMapping(value = "/init.do", method = RequestMethod.GET)
    public String opthisPage() {
        return "scoreflow/scoreflow";
    }
    /**
     * 
     * 功能描述：'初始化系统日志界面'
     *
     * @author ：陈贵婷
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/exportData.do", method = RequestMethod.GET)
    public void exportData(HttpServletRequest request,HttpServletResponse response) {
    	String userIds = request.getParameter("userIds");
    	String ids = request.getParameter("ids");
    	String docsPath = request.getSession().getServletContext().getRealPath("jasper");
    	List<ScoreFlow> exportData  = this.statisticalService.findExportData(userIds,ids);
    	ExportExcel.exportData(exportData, docsPath);
    	this.statisticalService.updateScoreFlowStatus(ids);
		String fileName = "scoreflow_report.xls";
		String filePath = docsPath + FILE_SEPARATOR + fileName;
		download(filePath, response);
    }
    /**
     * 
     * 功能描述：'初始化系统日志界面'
     *
     * @author ：陈贵婷
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/back.do")
    @ResponseBody
    public String back(HttpServletRequest request,HttpServletResponse response) {
    	String info = request.getParameter("ids");
        try {
        	this.statisticalService.updateBackFolwExchange(info);
		} catch (Exception e) {
			return "1";
		}
       return "0";
    }
    
    /**
     * 
     * 功能描述：'初始化系统日志界面'
     *
     * @author ：陈贵婷
     * 创建日期 ：2014年8月29日 上午9:42:33
     *
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     */
    @RequestMapping(value = "/success.do")
    @ResponseBody
    public String success(HttpServletRequest request,HttpServletResponse response) {
    	String info = request.getParameter("ids");
    	try {
    		this.statisticalService.updateSuccessFolwExchange(info);
    	} catch (Exception e) {
    		return "1";
    	}
    	return "0";
    }
    /**
     * 
     * 功能描述：'获取当前系统日志的分页对象'
     *
     * @author ：陈贵婷
     * 创建日期 ：2014年8月29日 上午9:42:38
     *
     * @param opthisPaginationDTO 
     * @return
     *
     * 修改历史 ：(修改人，修改时间，修改原因/内容)
     * @throws Exception 
     */
     @SuppressWarnings("unchecked")
     @RequestMapping(value = "/listScoreFlow.do", method = RequestMethod.POST)
     @ResponseBody
     public PaginationData<Map<String, Object>> getOpenDoorList(ScoreFlowPaginationDTO statisticalPaginationDTO) throws Exception {
         
         PaginationData<Map<String, Object>> paginationData = null;
         // 是否查询
             paginationData = this.statisticalService.listScoreFlowInfo(statisticalPaginationDTO);
            
         return super.wrapReturnObject(paginationData, PaginationData.class);
     }
     
    
 	private void download(String path, HttpServletResponse response) {
		try {
			// path是指欲下载的文件的路径。
			File file = new File(path);
			// 取得文件名。
			String filename = file.getName();
			// 以流的形式下载文件。
			InputStream fis = new BufferedInputStream(new FileInputStream(path));
			byte[] buffer = new byte[fis.available()];
			fis.read(buffer);
			fis.close();
			// 清空response
			response.reset();
			// 设置response的Header
			response.addHeader("Content-Disposition", "attachment;filename=" +new String(filename.getBytes()));
			response.addHeader("Content-Length", "" + file.length());
			OutputStream toClient = new BufferedOutputStream(
					response.getOutputStream());
			response.setContentType("application/vnd.ms-excel;charset=gb2312");
			toClient.write(buffer);
			toClient.flush();
			toClient.close();
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}
    
}
