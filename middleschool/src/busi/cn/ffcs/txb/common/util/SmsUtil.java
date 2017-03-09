package cn.ffcs.txb.common.util;

import org.activiti.engine.impl.util.json.JSONObject;

import cn.ffcs.txb.common.model.Constant;

import com.taobao.api.ApiException;
import com.taobao.api.DefaultTaobaoClient;
import com.taobao.api.TaobaoClient;
import com.taobao.api.request.AlibabaAliqinFcSmsNumSendRequest;
import com.taobao.api.response.AlibabaAliqinFcSmsNumSendResponse;

public class SmsUtil {
	
	public static  boolean  sendSMS(String singName,String paramStr,String tel, String templateCode ) throws ApiException{
		TaobaoClient client = new DefaultTaobaoClient(Constant.ALIDAYU_URL, Constant.ALIDAYU_APPKEY, Constant.ALIDAYU_SECRET);
		AlibabaAliqinFcSmsNumSendRequest req = new AlibabaAliqinFcSmsNumSendRequest();
		req.setExtend("");
		req.setSmsType("normal");
		req.setSmsFreeSignName(singName);
		req.setSmsParamString(paramStr);
		req.setRecNum(tel);
		req.setSmsTemplateCode(templateCode);
		AlibabaAliqinFcSmsNumSendResponse rsp = client.execute(req);
		JSONObject result = (new JSONObject(rsp.getBody())).getJSONObject("alibaba_aliqin_fc_sms_num_send_response");
		return result.getJSONObject("result").getBoolean("success");
	}
	
//	public static void main(String[] args) {
//		try {
//			sendSMS("注册验证","{code:'1142',product:'思明早课'}","18084725345",Constant.ALIDAYU_TEMPALTE_REGISTER);
//		} catch (ApiException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}

}
