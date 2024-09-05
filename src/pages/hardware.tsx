
import EventCardCultural from '../components/EventCardCultural'
import React from 'react'

import NewNavBar from '../components/NavBar.jsx'
export default function Technical() {

  const events = [
    {
      "name": "",

  
      "alias": "Monostrokes",
      "image": 'https://i.postimg.cc/R0XyN467/mono-strokes.png',
      "aboutEvent":": Unleash your creativity on canvas and breathe life into your imagination. Our painting event invites participants to express themselves through vibrant strokes, creating a visual symphony that transcends boundaries and captivates the senses.",
      "eventDetail": [
       ""
      ],
      "rules": [
        "	Duration: 2 hours.",
        	"Participants must bring their own necessary materials for the competition.",
        	"Participants are required to bring their own painting materials, including canvas, brushes, and paints.",
        	"Reference material cannot be carried by the participant.",
       	"No phones are allowed in that duration.",
        	"Any specific theme or requirement will be communicated in advance.",
        	"Violation of rules may lead to disqualification.",
        	"The decision of the judges and event organisers is final.",
        
       
      ],
     
      "coordinators":{"name":'Meenakshi Lahoti:7014793340',"name2":'Aditya Garg: 9079171380'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Raptrap",
      "image": 'https://i.postimg.cc/BZrSqBGq/rap-trap.png',
      "aboutEvent": ": Enter the electrifying world of Rap War, where lyrical prowess meets rhythmic mastery. Unleash your verbal dexterity in a fierce battle of words, complemented by the pulsating beats. Only the most skilled wordsmiths will rise victorious in this ultimate test of creative expression and musical finesse.",
      "eventDetail": [""],
      "rules": [
        "	Preliminary Round: Duration: 2 minutes.",
        	"Showcase Round: Duration: 2-3 minutes.",
        	"Costumes should complement the participant's style.",
       	"Keep lyrics clean and free from explicit content.",
        	"Submit any required music or beat details during registration.",
        "	Strictly adhere to the specified time limits for each round.",
        	"Violation of rules may lead to disqualification.",
        	"The decision of the judges and event organisers is final."
        
       
      ],
      "coordinators":{"name":'Harshit Sinha: 9799043706',"name2":'Prayushman Kaushal: 8824483045'},
     
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
   
    
    {
      "name": "",
      "alias": "Rhythmic relay",
      "image": 'https://i.postimg.cc/021vg5pj/rhytmic-relay-poetry.png',
      "aboutEvent": "Unlock the power of words in our Poetry Corner, where eloquence meets emotion. Immerse yourself in the rhythmic beauty of verse, as players weave linguistic tapestries to captivate hearts and minds.",
      "eventDetail": [
      ""
      ],
      "rules": [
        	"Round 1: In this round every participant will get an opportunity to give their best poetry performance. The time of performance will be 3 to 5 min.",
	        "Round 2(final round): In this round every participant will get some words, based on that participants have to create a poem on the spot.",
	        "Use of offensive language or inappropriate content is strictly prohibited.",
	        "Keep the poetry suitable for a diverse audience.",
	        "Dress in accordance to theme will be appreciated.",
	        "Strictly adhere to the specified time limits for each performance.",
	         "Violation of rules may lead to disqualification.",
          "The decision of the judges and event organisers is final.",


       
      ],
      "coordinators":{"name":'Krati Gupta: 9549692639',"name2":'Devansh	: 9680770891'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Rhythmic relay",
      "image": 'https://i.postimg.cc/021vg5pj/rhytmic-relay-poetry.png',
      "aboutEvent": "Unlock the power of words in our Poetry Corner, where eloquence meets emotion. Immerse yourself in the rhythmic beauty of verse, as players weave linguistic tapestries to captivate hearts and minds.",
      "eventDetail": [
      ""
      ],
      "rules": [
        	"Round 1: In this round every participant will get an opportunity to give their best poetry performance. The time of performance will be 3 to 5 min.",
	        "Round 2(final round): In this round every participant will get some words, based on that participants have to create a poem on the spot.",
	        "Use of offensive language or inappropriate content is strictly prohibited.",
	        "Keep the poetry suitable for a diverse audience.",
	        "Dress in accordance to theme will be appreciated.",
	        "Strictly adhere to the specified time limits for each performance.",
	         "Violation of rules may lead to disqualification.",
          "The decision of the judges and event organisers is final.",


       
      ],
      "coordinators":{"name":'Krati Gupta: 9549692639',"name2":'Devansh	: 9680770891'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Rhythmic relay",
      "image": 'https://i.postimg.cc/021vg5pj/rhytmic-relay-poetry.png',
      "aboutEvent": "Unlock the power of words in our Poetry Corner, where eloquence meets emotion. Immerse yourself in the rhythmic beauty of verse, as players weave linguistic tapestries to captivate hearts and minds.",
      "eventDetail": [
      ""
      ],
      "rules": [
        	"Round 1: In this round every participant will get an opportunity to give their best poetry performance. The time of performance will be 3 to 5 min.",
	        "Round 2(final round): In this round every participant will get some words, based on that participants have to create a poem on the spot.",
	        "Use of offensive language or inappropriate content is strictly prohibited.",
	        "Keep the poetry suitable for a diverse audience.",
	        "Dress in accordance to theme will be appreciated.",
	        "Strictly adhere to the specified time limits for each performance.",
	         "Violation of rules may lead to disqualification.",
          "The decision of the judges and event organisers is final.",


       
      ],
      "coordinators":{"name":'Krati Gupta: 9549692639',"name2":'Devansh	: 9680770891'},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },

  ]

  const handleEventsClick = () => {
    // Handle the events click
    console.log('Events clicked');
};

const handleAboutClick = () => {
    // Handle the about click
    console.log('About clicked');
};

  return (
    <>
      
      <div className=" bg-dot-white/[0.2] z-50 lg:w-full md:w-[1500px]" style={{backgroundColor:"black"}}>
      <div className="pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       <NewNavBar onEventsClick={handleEventsClick} onAboutClick={handleAboutClick} />
      <div className='flex flex-col text-center justify-center gap-10 mt-6'>
        <div className='text-white text-6xl'>
          <p className='m-2' style={{fontFamily:"Shuri",letterSpacing:"5px"}}>HARDWARE</p>
        </div>
        <div className='flex flex-col mx-16 md:grid gap-10'>
          {events.map((element, index) => (
            <EventCardCultural
              key={index}
              title={element.alias}
              image={element.image}
              date={element.schedule.day}
              time={element.schedule.time}
              venue={element.schedule.venue}
              about={element.aboutEvent}
              details={element.eventDetail}
              rules={element.rules}
              coordinator1={element.coordinators.name}
              coordinator2={element.coordinators.name2}
            />
          ))}
        </div>
      </div>   </div> 
    </>
  )
}
