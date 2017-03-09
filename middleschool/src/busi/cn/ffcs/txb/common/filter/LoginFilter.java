package cn.ffcs.txb.common.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginFilter implements Filter {

	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) res;
		// 个人开发使用，免登录
		//chain.doFilter(request, response);
		HttpSession session = request.getSession();
		String sessionId = null;
		if(session.getAttribute("sessionId") != null){
			sessionId = session.getAttribute("sessionId").toString();
		}
		String url = null;
		url = request.getServletPath().toString().trim();
		if(sessionId != null && sessionId.equals(session.getId())){
			if(url.contains("/appLogin/initLogin")){
				request.getRequestDispatcher("/appLogin/index.html").forward(request,response);
				return;
			}else{
				chain.doFilter(request, response);
			}
		}else{
			if((url != null && url.contains("/appLogin/"))
			   ||url.contains("appStudent/todayClass")
			   ||url.contains("appStudent/liveVideo")
			   ||url.contains("appBrush/getTopicDetail")
			   ||url.contains("appBrush/brushTmDetail")
			   ||url.contains("appBrush/checkTopicIsOver")
			   ||url.contains("appStudent/getMessageList")
			   ||url.contains("appBrush/submitBrushResult")
			 ){
				//request.getRequestDispatcher("/appLogin/initLogin.html").forward(request,response);
				chain.doFilter(request, response);
//				return;
			}else if(url != null && !url.contains("/appLogin/")){
					request.getRequestDispatcher("/appLogin/initLogin.html").forward(request,response);
					return;
				}
				else chain.doFilter(request, response);
			}

	}

	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub

	}

}
