import React, { Component } from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/Dialogs"} activeClassName={s.active}>Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/News"} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/Users"} activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={"/Music"} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={`${s.active} ${s.item}`}>
            <NavLink to={"/Settings"} activeClassName={s.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;