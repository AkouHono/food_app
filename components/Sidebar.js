import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link, useLocation} from "react-router-dom";



export default function Sidebar({ links, close }) {

    const location = useLocation() 
    function handleSidebarClick(e) {
        e.stopPropagation(); // Prevent the click from propagating to the parent
    }

    return (
        <div className="sidebar" onClick={close}>
            <div className="sidebar-content" onClick={handleSidebarClick}>
                {links.map(link => (
                    <Link  to = {link.path} className= {location.pathname === link.path ?"sidebar-link active" : "sidebar-link"}  key={link.name}>
                        <FontAwesomeIcon icon={link.icon} />
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
