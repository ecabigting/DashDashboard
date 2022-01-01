import "./product.css"
import { CalendarToday, EmailOutlined, PermIdentity, PhoneAndroidOutlined, PinDrop, Publish } from "@material-ui/icons"
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

                </div>
            </div>
            <div className="productBottonm">

            </div>
        </div>
    )
}
