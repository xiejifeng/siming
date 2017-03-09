/**
 * 销售品变更
 * 
 * @author yudp
 * date 2013-9-22
 */
CommonUtils.regNamespace("templateHelper");

templateHelper = (function() {
	
	template.helper("isExist", function(a,offerSpecId){  
    	if(a){
    		return a
    	}
        return 0; 
    }); 
	
	template.helper("aliasNameIsNull", function(aliasName,offerSpecName){  
		if(aliasName){
			return aliasName
		}
		return offerSpecName; 
	}); 
	
})();