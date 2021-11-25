import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredInfo.css"


export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $9856
                    </span>
                    <span className="featuredMoneyRate">-12% <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $8523
                    </span>
                    <span className="featuredMoneyRate">+45% <ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $4561
                    </span>
                    <span className="featuredMoneyRate">+78% <ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
