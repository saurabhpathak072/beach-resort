import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from '../Loading/Loading';
import { withRoomConsumer } from '../../Context/Context'

const RoomsContainer = ({context}) => {
    const {loading,sortedRooms,rooms}=context;
    if(loading){
        return <Loading/>
    }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>                        
        </>
    )
}

export default withRoomConsumer(RoomsContainer);


// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import Loading from '../Loading/Loading';
// import {RoomConsumer} from '../../Context/Context';

// const RoomsContainer = () => {
//     return (

//         <div>
//             <RoomConsumer>
//                 {
//                     (value)=>{
//                         const {loading,sortedRooms,rooms}=value
//                         if(loading){
//                             return <Loading/>
//                         }
//                         return <div>
//                             hello from room container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     }
//                 }
//             </RoomConsumer>
            
//         </div>
//     )
// }

// export default RoomsContainer
