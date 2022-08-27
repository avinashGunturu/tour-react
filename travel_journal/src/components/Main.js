import React from 'react'
import location from '../images/location.png'
import './Main.css'

const Main =(props)=>{
    console.log(props.item.description)
    return (
        <div className='container'>
            <div className='c_img'>
                <img src={props.item.imageUrl} className='c_visited_img'/>
            </div>
            <div className='c_details'>
                <div className='c_location'>
                    <img src={location}/>
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl} target='_blank'>view on Google Map</a>
                </div>
                <h2 className='c_visited_place'>{props.item.title}</h2>
                <h4 className='c_visited_date'>{props.item.startDate} - {props.item.endDate}</h4>
                <p className='c_visited_about '>{props.item.description}.</p>
            </div>
        </div>

    );
}
export default Main;