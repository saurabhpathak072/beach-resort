import React from 'react'

const Hero = ({children,hero}) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
Hero.defalultProps={
    hero:'defaultHero'
}


export default Hero
