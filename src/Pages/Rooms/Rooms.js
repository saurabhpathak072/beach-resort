import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Hero from '../../Components/Hero/Hero';
import RoomsContainer from '../../Components/RoomsContainer/RoomsContainer';


const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner  title="our rooms">
                    <Link to='/'
                    className='btn-primary'
                    >
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </div>
    )
}

export default Rooms
