package cn.ffcs.txb.back.controller.backuser;


import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cn.ffcs.srp.core.controller.AbstractController;
import cn.ffcs.txb.service.userExpand.IUserExpandService;


@Controller
@RequestMapping(value = "/backuser")
public class BackUserController extends AbstractController{
    @Resource
    private IUserExpandService service;
    
    
    @RequestMapping(value = "/init.do", method = RequestMethod.GET)
    public String opthisPage() {

        return "user/userMain";
    }
 
}
