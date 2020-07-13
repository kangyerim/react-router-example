import React from 'react';
import { NavLink } from 'react-router-dom'

const selectStyle  = {
    backgroundColor : "white", color: "slategray"
}

const AboutMenu = ({match}) => <div className={"about-menu"}>
    <li>
        <NavLink to={'/about'} style={match.isExact && selectStyle}>회사</NavLink>
    </li>    
    <li>
        <NavLink to={'/about/history'} activeStyle={selectStyle}>연혁</NavLink>
    </li>    
    <li>
        <NavLink to={'/about/services'} activeStyle={selectStyle}>서비스</NavLink>
    </li>    
    <li>
        <NavLink to={'/about/location'} activeStyle={selectStyle}>위치</NavLink>
    </li>
</div>

export default AboutMenu