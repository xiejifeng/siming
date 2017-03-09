package cn.ffcs.txb.common.util;

import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by levey-pc on 2016/8/25.
 * 基础工具类，用于处理乐视云加密方案，若非需要，请勿修改。
 */
public class LeUtil {

    public static String getParamStr(String method,Map<String, String> params){
        String paramStr="";
        Set<String> key = params.keySet();
        String beginLetter="";
        if (method.equalsIgnoreCase("get"))
        {
            beginLetter="?";
        }
        for (String s : key) {
            if (paramStr.equals("")) {
                paramStr += beginLetter + s + "=" + params.get(s);
            } else {
                paramStr += "&" + s + "=" + params.get(s);
            }
        }
        return paramStr;
    }


    public static String sign(Map<String, String> params, String secret) {
        StringBuilder result = new StringBuilder();
        List<String> keys = new ArrayList<>(params.keySet());
        Collections.sort(keys);
        for (Iterator<String> iterator = keys.iterator(); iterator.hasNext(); ) {
            String key = iterator.next();
            if (!"sign".equalsIgnoreCase(key)) {
                result.append(key).append(params.get(key));
            }
        }

        //lambda 表达式需jdk8支持, 上面是支持jdk7的源生版本。
//        keys.stream().filter(key -> !"sign".equalsIgnoreCase(key)).forEach(key -> result.append(key).append(params.get(key)));

        result.append(secret);
        return MD5(result.toString());
    }

    private static String MD5(String src) {
        try {
            if (src == null) {
                return "";
            }
            byte[] result;
            MessageDigest alg = MessageDigest.getInstance("MD5");
            result = alg.digest(src.getBytes("utf-8"));
            return byte2hex(result);
        } catch (Exception e) {
            throw new RuntimeException();
        }

    }

    private static String byte2hex(byte[] b) {
        if (b == null) {
            return "";
        }
        StringBuilder hs = new StringBuilder();
        String stmp;
        for (byte aB : b) {
            stmp = Integer.toHexString(aB & 0XFF);
            if (stmp.length() == 1) {
                hs.append("0");
            }
            hs.append(stmp);
        }
        return hs.toString();
    }
}
