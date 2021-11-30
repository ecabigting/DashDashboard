import { Visibility } from "@material-ui/icons"
import "./widgetSm.css"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                New Users
            </span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2017/05/11/08/48/woman-2303361_960_720.jpg" 
                    alt="Dany Targ" className="widgetSmImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Dany Targ</span>
                        <span className="widgetSmallUserTitle">Queen Intern</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="visibIc"/>
                        View
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg" 
                    alt="Liz Keen" className="widgetSmImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Liz Keen</span>
                        <span className="widgetSmallUserTitle">Profiler</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="visibIc"/>
                        View
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_960_720.jpg" 
                    alt="Beth Smith" className="widgetSmImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Beth Smith</span>
                        <span className="widgetSmallUserTitle">Horse Surgeon</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="visibIc"/>
                        View
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_960_720.jpg" 
                    alt="Olenna Tyr" className="widgetSmImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Olenna Tyrl</span>
                        <span className="widgetSmallUserTitle">The Queen</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="visibIc"/>
                        View
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2015/03/05/19/18/woman-660806_960_720.jpg" 
                    alt="Jesse Rabz" className="widgetSmImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Jesse Rabz</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="visibIc"/>
                        View
                    </button>
                </li>
            </ul>
        </div>
    )
}
