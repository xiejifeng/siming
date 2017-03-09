package cn.ffcs.txb.common.model;

public class ScoreFlow {

	private String id;
	private String tel;
	private String name;
	private String pname;
	private String score;
	private String address;
	private String applytime;
	public ScoreFlow() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ScoreFlow(String id, String tel, String name, String pname,
			String score, String address, String applytime) {
		super();
		this.id = id;
		this.tel = tel;
		this.name = name;
		this.pname = pname;
		this.score = score;
		this.applytime = applytime;
		this.address = address;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getApplytime() {
		return applytime;
	}

	public void setApplytime(String applytime) {
		this.applytime = applytime;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getScore() {
		return score;
	}

	public void setScore(String score) {
		this.score = score;
	}
}
