import React, { Component } from 'react'
import Title from '../Title/Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info:"React was released by Facebook's web development team in 2013 as a view library. React is one of the best choices for building modern web applications. "
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:"React was released by Facebook's web development team in 2013 as a view library. React is one of the best choices for building modern web applications. "
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:"React was released by Facebook's web development team in 2013 as a view library. React is one of the best choices for building modern web applications. "
            },
            {
                icon:<FaBeer/>,
                title:'Strongest beer',
                info:"React was released by Facebook's web development team in 2013 as a view library. React is one of the best choices for building modern web applications. "
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title="services"/>
                <div className='services-center'>
                    {
                        this.state.services.map((item,index)=>{
                            return <article key={index} className='service'>
                                <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>
            </section>
        )
    }
}
