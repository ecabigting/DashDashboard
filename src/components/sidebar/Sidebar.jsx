import React from 'react'
import { Assessment, Group, InsertChart, LineStyle, MapRounded, Person, Receipt, ShowChart, StoreMallDirectory, Timeline, TrendingUp } from '@material-ui/icons'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashdashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                        <li className="sidebarListItem">
                            <MapRounded className="sidebarIcon"/>
                            Geotargets
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <StoreMallDirectory  className="sidebarIcon"/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <Receipt className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <InsertChart className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MapRounded className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Team</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Group className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <ShowChart className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
