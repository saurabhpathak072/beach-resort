import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import FeaturedRoom from '../../Components/FeaturedRoom/FeaturedRoom';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';


const Home = () => {
    return (
        <>
        <Hero  hero="defaultHero">
            <Banner title="luxurious rooms"
            subtitle="deluxe rooms starting at  $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRoom/>
        
        </>
    )
}

export default Home
