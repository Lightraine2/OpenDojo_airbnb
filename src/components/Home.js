import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';


const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
            <Card
                src={process.env.PUBLIC_URL + 'karate.jpg'}
                title="Start Something New"
                description="Improve your health, fitness and self confidence across a range of martial arts"
            />
            <Card
                src={process.env.PUBLIC_URL + 'bjj-comp.jpg'}
                title="Aim for Gold"
                description="Competition focussed options for serious contenders."
            />
            <Card
                src={process.env.PUBLIC_URL + 'tkd-school.jpg'}
                title="For all the family"
                description="Classes for juniors and parents"
            />
            </div>
            <div className='home__section'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home
