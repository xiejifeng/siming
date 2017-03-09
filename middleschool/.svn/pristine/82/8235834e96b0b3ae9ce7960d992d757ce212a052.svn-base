<#include "common.ftl">
package ${packageName};

import java.util.Map;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.srp.ui.model.PaginationData;
import ${entityPackageName}.${ed.entityName};
import ${servicePackageName}.I${ed.entityName}Service;
import ${pdtoPackageName}.${ed.entityName}PaginationDTO;


/**
 * 
 * 功能描述：${ed.name}<#if ed.comment??  && ed.comment?trim!="">(${ed.comment})</#if>
 *
 * @author ：${author}
 *
 * 修改历史：(修改人，修改时间，修改原因/内容)
 */
@Controller
@RequestMapping("/${ed.entityName?uncap_first}")
public class ${ed.entityName}Controller extends AbstractController{
	
	@Resource
	private I${ed.entityName}Service ${ed.entityName?uncap_first}Service;
	
	@RequestMapping("/${ed.entityName?uncap_first}Main.${suffix}")
	public String show${ed.entityName}Main(){
	
		return "${ed.entityName?uncap_first}/${ed.entityName?uncap_first}Main";
	}
	
	@RequestMapping("/${ed.entityName?uncap_first}Add.${suffix}")
	public String show${ed.entityName}Add(){
	
		return "${ed.entityName?uncap_first}/${ed.entityName?uncap_first}Add";
	}
	
	@RequestMapping("/${ed.entityName?uncap_first}Edit.${suffix}")
	public String show${ed.entityName}Edit(<@primaryKeys delimiter=","/>,Model model){
		
		${ed.entityName} ${ed.entityName?uncap_first}=this.${ed.entityName?uncap_first}Service.findById(<@primaryValues delimiter=","/>);
		model.addAttribute(${ed.entityName?uncap_first});
		return "${ed.entityName?uncap_first}/${ed.entityName?uncap_first}Edit";
	}
	
	@RequestMapping("/${ed.entityName?uncap_first}Search.${suffix}")
	public String show${ed.entityName}search(){
	
		return "${ed.entityName?uncap_first}/${ed.entityName?uncap_first}Search";
	}
	
	@RequestMapping(value="/${ed.entityName?uncap_first}List.${suffix}")
	public @ResponseBody PaginationData<Map<String,Object>> ${ed.entityName?uncap_first}List(${ed.entityName}PaginationDTO pagination){
		
		return this.${ed.entityName?uncap_first}Service.findByPagination(pagination);
	}
	
	@RequestMapping(value="/save${ed.entityName}.${suffix}",method={RequestMethod.POST})
	public @ResponseBody ${ed.entityName} save(@Valid ${ed.entityName} ${ed.entityName?uncap_first}){
		
		this.${ed.entityName?uncap_first}Service.save(${ed.entityName?uncap_first});
		return ${ed.entityName?uncap_first};
	}
	
	@RequestMapping(value="/update${ed.entityName}.${suffix}",method={RequestMethod.POST})
	public @ResponseBody ${ed.entityName} update(@Valid ${ed.entityName} ${ed.entityName?uncap_first}){
		
		this.${ed.entityName?uncap_first}Service.update(${ed.entityName?uncap_first});
		return ${ed.entityName?uncap_first};
	}
	
	@RequestMapping(value="/find${ed.entityName}.${suffix}",method={RequestMethod.POST})
	public @ResponseBody ${ed.entityName} findById(<@primaryKeys delimiter=","/>){
	
		return this.${ed.entityName?uncap_first}Service.findById(<@primaryValues delimiter=","/>);
	}
	
	@RequestMapping(value="/delete${ed.entityName}.${suffix}",method={RequestMethod.POST})
	public @ResponseBody int delete(<@primaryKeys delimiter=","/>){
	
		this.${ed.entityName?uncap_first}Service.removeById(<@primaryValues delimiter=","/>);
		return 1;
	}
}