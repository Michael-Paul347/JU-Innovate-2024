import React, { useState } from 'react'
import EventDetails from '../components/EventDetailsModal'
import Image from 'next/image';
export default function EventsCardCultural(props) {
    const [showModal,setShowModal]=useState(false)
    return (
        <div className='flex flex-col md:flex-row rounded-xl'>
          <div className='flex-shrink-0'>
            <p className='text-white team2 text-center text-3xl' style={{fontFamily:"Shuri"}}>{props.title}</p>
            <Image className="p-2 lg:ml-0 mx-auto" src={props.image} alt={props.alias} width={400} height={100} />
            <button className='button-85 team2 text-xl border-2 px-2 rounded-3xl mb-4 my-8'>
              <a href='https://rzp.io/l/innov8'>
                Register Now
              </a>
            </button>
          </div>
          <div className='flex flex-col p-4 text-center lg:ml-0 mx-auto xl:mx-auto'>
            
            <EventDetails 
              name={props.title}
              date={props.date}
              time={props.time}
              venue={props.venue}
              about={props.about}
              details={props.details}
              rules={props.rules}
              coordinator1={props.coordinator1}
              coordinator2={props.coordinator2}
            />
          </div>
        </div>
      );
}
