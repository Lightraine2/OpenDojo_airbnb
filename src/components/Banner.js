import React from 'react';
import './Banner.css';
import { Button } from "@material-ui/core"

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner__info'> 
            <h1>Time to Train</h1>
            <h5>
                Search for classes near you. Any style, any ability. The Dojos are open. 
            </h5>
            <Button variant='outlined'>
            Search Nearby
            </Button>
            </div>
        </div>
    )
}

export default Banner
