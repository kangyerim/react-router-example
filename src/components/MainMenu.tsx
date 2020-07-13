import React from "react";
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const selectStyle  = {
    backgroundColor : "white", color: "slategray"
}

const MainMenu = () => <nav className="main-menu">
    <NavLink to = {'/'}><FaHome/></NavLink>
    <NavLink to = {'/about'} activeStyle = {selectStyle}> [회사 소개] </NavLink>
    <NavLink to = {'/events'} activeStyle = {selectStyle}> [events] </NavLink>
    <NavLink to = {'/products'} activeStyle = {selectStyle}> [products] </NavLink>
    <NavLink to = {'/contacts'} activeStyle = {selectStyle}> [contacts] </NavLink>
</nav>

export default MainMenu