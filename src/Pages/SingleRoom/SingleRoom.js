import React, { Component } from 'react';
import defaultBcg from '../../images/room-1.jpeg';
// import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import {RoomContext} from '../../Context/Context';
import {Link, withRouter} from 'react-router-dom';
import StyledHero from '../../Components/StyledHero/StyledHero';

 class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    componentDidMount(){

    }
    render() {
        const {getRoom}=this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (<div className="error">
                <h3>No such room could be found</h3>
                <Link to='/rooms' className="btn-primary">
                    back to room
                </Link>
            </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
        const [...defaultBcg]=images;
        return (
            <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title={`${name} room`}
><Link to="/rooms" className='btn-primary'>
    back to room
</Link>
    </Banner>            </StyledHero>
    <section className="single-room">
        <div className="single-room-images">
        {defaultBcg.map((item,index)=>{
        return    <img key={index} src={item} alt={name}/>
        })}
        </div>
        <div className="single-room-info">
            <article className="desc">
                <h3>details</h3>
    <p>{description}</p>
            </article>
            <article className="info">
                <h3>
                    info
                </h3>
    <h6>price : ${price}</h6>
    <h6>size: ${size} SQFT</h6>
    <h6>
        max capacity :{
            capacity > 1 ? `${capacity} people` : `${capacity} person `
        }
    </h6>
    <h6>
        {pets ? "pets Allowed" : "No Pets allowed"}
    </h6>
    <h6>
        {breakfast && "free breakfast included"}
    </h6>
            </article>
        </div>
    </section>
    <section className='room-extras'>
        <h6>Extras</h6>
        <ul className="extras">
            {
                extras.map((item,index)=>{
                return <li key ={index}>- {item}</li>
                })
            }
        </ul>
    </section>
    </>
        )
    }
}

export default withRouter(SingleRoom);
