import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__icon">OpenDojoLogo</div>

            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>List your Dojo</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>

            </div>
        </div>
    )
}

export default Header
