package cn.ffcs.txb.common.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class DateCommonUtils {
	public static String getTheDate() {
		SimpleDateFormat sd = new SimpleDateFormat("yyyy-MM-dd");
		String dateStr = sd.format(new Date());
	//	print("*******得到今天的日期*******" + dateStr);
		return dateStr;
	}

	public static Map getWeekDay() {
		Map<String, String> map = new HashMap<String, String>();
		map.put("mon",getFirstDayOfWeek(new Date()));
		map.put("sun", getLastDayOfWeek(new Date()));
		return map;
	}

	public static Map getMonthDate() {
		Map<String, String> map = new HashMap<String, String>();
		// 获取Calendar
		Calendar calendar = Calendar.getInstance();
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd 00:00:00");
		// 设置时间,当前时间不用设置
		// calendar.setTime(new Date());
		calendar.set(Calendar.DATE, calendar.getActualMinimum(Calendar.DATE));
		map.put("monthF", format.format(calendar.getTime()));
		print("*********得到本月的最小日期**********"
				+ format.format(calendar.getTime()));
		// 设置日期为本月最大日期
		calendar.set(Calendar.DATE, calendar.getActualMaximum(Calendar.DATE));
		// 打印
		map.put("monthL", format.format(calendar.getTime()));
		print("*********得到本月的最大日期**********"
				+ format.format(calendar.getTime()));
		return map;
	}

	private static void print(Object o) {
		System.out.println(o.toString());
	}

	public static void main(String[] args) {
		System.out.println(getTheDate());
	}
	
    /**
     * 取得当前日期所在周的第一天
     *
     * @param date
     * @return
     */
    public static String getFirstDayOfWeek(Date date) {
    	SimpleDateFormat sf =new SimpleDateFormat("yyyy-MM-dd");
        Calendar calendar = Calendar.getInstance();
        calendar.setFirstDayOfWeek(Calendar.SUNDAY);
        calendar.setTime(date);
        calendar.set(Calendar.DAY_OF_WEEK, calendar.getFirstDayOfWeek()); // Sunday
        return sf.format(calendar.getTime())+" 00:00:00";
    }
    
    /**
     * 取得当前日期所在周的最后一天
     *
     * @param date
     * @return
     */
    public static String getLastDayOfWeek(Date date) {
    	SimpleDateFormat sf =new SimpleDateFormat("yyyy-MM-dd");
        Calendar calendar = Calendar.getInstance();
        calendar.setFirstDayOfWeek(Calendar.SUNDAY);
        calendar.setTime(date);
        calendar.set(Calendar.DAY_OF_WEEK,
                     calendar.getFirstDayOfWeek() + 6); // Saturday
        return sf.format(calendar.getTime())+" 23:59:59";
    }
}
