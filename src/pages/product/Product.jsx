import "./product.css"
import { Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummydata"

export default function Product({userId}) {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={ productData } dataKey="Sales" title="Product Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="productInfoImg" />
                        <span className="productName">Products</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">$423</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottonm">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Products"/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <label>Status</label>
                        <select name="status" id="status">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/3687999/pexels-photo-3687999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="productUploadImage" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" name="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
