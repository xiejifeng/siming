package cn.ffcs.txb.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

/**
 * 商品实体
 * 
 * @author Administrator
 * 
 */
@SuppressWarnings("serial")
@Entity
@Table(name = "product_img")
@DynamicUpdate(false)
@JsonAutoDetect
public class ProductImg {
	private int id;
	private int productid;
	private String img;

	public ProductImg() {

	}

	@Id
	@GeneratedValue
	@Column(name = "id")
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "product_id", unique = true)
	public int getProductid() {
		return productid;
	}

	public void setProductid(int productid) {
		this.productid = productid;
	}

	@Column(name = "product_img")
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

}
