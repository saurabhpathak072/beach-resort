import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../Components/Banner/Banner'
import Hero from '../../Components/Hero/Hero'

const Error = () => {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title='404' subtitle='Page not found'>
                    <Link to="/" className='btn-primary'>
                        return home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error
