import React, { Component } from 'react'
import {RoomContext} from '../../Context/Context';
import Rooms from '../Rooms/Rooms';
import Loading from '../Loading/Loading';
import Title from '../Title/Title';

export default class FeaturedRoom extends Component {
    static contextType =RoomContext;
    render() {
        let {loading,featuredRooms : rooms} = this.context;
rooms =rooms.map(room =>{
    return <Rooms key={room.id} room={room}/>
})
        return (
            <section className="featured-rooms">
                <Title title="Featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ?<Loading/>:rooms}
                </div>
            </section>
        )
    }
}
