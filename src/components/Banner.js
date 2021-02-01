import React, { useState } from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

const Banner = () => {
    const [showSearch, setShowSearch] = useState (false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Time to Train</h1>
                <h5>
                    Find Martial Arts classes near you.
                </h5>
                <Button>Search Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
