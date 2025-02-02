import {Link, useLocation} from "react-router-dom";



import React, { useState } from 'react';
import "../styles/index.scss";
import Sidebar from "../components/Sidebar.js";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation() // Default to false

    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        },
    ];

    function closeSidebar() {
        setShowSidebar(false);
    }

    return (
        <>
            <div className="navbar container">
                <Link  to = "/" className="logo">
                    F<span>oo</span>diesHub
                </Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className= {location.pathname === link.path ? "active" : ""}  to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div
                    onClick={() => setShowSidebar(!showSidebar)} // Toggle sidebar visibility
                    className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {/* Conditionally render the sidebar */}
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    );
}
