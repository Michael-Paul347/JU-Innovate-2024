import React from 'react'

import Image from 'next/image'

import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';
import { BackgroundGradient } from "@/components/ui/background-gradient";


const teamDetails = [
    {
        name: 'Arpit Sharma',
        image: 'https://i.postimg.cc/0N0XYPxB/Arpit-Sharma.png',
        year: "Technical Secretary",
       

    },
    {
        name: 'Dhruv Tomar',
        image: 'https://i.postimg.cc/HnVS1MMq/Dhruv-Tomar.png',
         year: "Software Head",
       

    },
    {
        name: 'Devansh Verma',
        image: 'https://i.postimg.cc/43gFHmCc/Devansh-Verma.png',
         year: "E-Sports Head",
       
    },
    {
        name: 'Garvit Raj Bhati',
        image: 'https://i.postimg.cc/BZVYch94/Garvit-Raj-Bhati.png',
         year: "Hardware Head",

      

    },
    {
        name: 'Keshav Khandelwal',
        image: 'https://i.postimg.cc/15VWWps6/Keshav-Khandelwal.png',
       year: "Software Head",

       
    },
    {
        name: 'Mukund Verma',
        image: 'https://i.postimg.cc/Z5rwm495/Mukund-Verma.png',
         year: "E-Sports Head",
       

    },

  
    {
        name: 'Amit Jain',
        image: 'https://i.postimg.cc/qvn572F0/Amit-Jain.png',
       year: "Hardware Head",

      

    },
    {
        name: 'Dhruvi Vaid',
        image: 'https://i.postimg.cc/HxSSNzr0/Dhruvi-Vaid.png',
       year: "PR & Collaboration Head",

      

    },
    {
        name: 'Isha Soni',
        image: 'https://i.postimg.cc/x8h6fdyc/Isha-Soni.png',
       year: "PR & Collaboration Head",

      

    },
    {
        name: 'Nandini Sharma',
        image: 'https://i.postimg.cc/PqyKLyQG/Nandini-Sharma.png',
       year: "Logistics Head",

        
    },
    {
        name: 'Madhusudhan',
        image: 'https://i.postimg.cc/0ygVhby4/Madhusudhan-Shrivastava.png',
       year: "Logistics Head",

    
    },
  
    {
        name: 'Daksh Nagar',
        image: 'https://i.postimg.cc/tTRSDw4C/Daksh-Nagar.png',
       year: "Media Head",


    },

   
    {
        name: 'Saksham Saraogi',
        image: 'https://i.postimg.cc/Y9y3RSPb/Saksham-Saraogi.png',
       year: "Graphics Head",

        

    },
  
    {
        name: 'Piyush Bhagchandani',
        image: 'https://i.postimg.cc/SKkDN387/Piyush-Bhagchandani.png',
       year: "Graphics Head",

      

    },

    {
        name: 'Priyanshi Bhardwaj',
        image: 'https://i.postimg.cc/hvz05BWg/Priyanshi-Bhardwaj.png',
       year: "Operations Head",

       

    },
    {
        name: 'Pradyuman',
        image:'https://i.postimg.cc/QtMmc7fF/Pradyuman-Shrivastava.png',
       year: "Operations Head",

       

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
const Ourteam = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            <NewNavBar onEventsClick={handleEventsClick} onAboutClick={handleAboutClick} />
            <div className="flex justify-center bg-black z-50">
                <div className="md:px-12 xl:px-0">
                    <div className="relative pt-36 bg-black">
                        <div className="lg:w-2/3 text-center mx-auto">
                            <h1 className="text-white text-4xl md:text-6xl xl:text-8xl" style={{ fontFamily: "Shuri", letterSpacing: "5px" }}>Our Team</h1>
                        </div>
                    </div>
                    {/* Top Image */}
                    <div className="flex justify-center m-10 ">
                        <div className="w-[400px] px-6 py-6 text-center bg--200 rounded-lg">
                            <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                <Image className="mx-auto rounded-[22px] h-50 w-50 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={teamDetails[0].image} alt="author avatar" width={400} height={100} />
                            </BackgroundGradient>
                            <div className="space-y-2">
                                <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium pt-5" style={{ fontFamily: "Shuri" }}>
                                    <h1 className="text-white text-2xl">{teamDetails[0].name}</h1>
                                    <p className='text-white'>{teamDetails[0].year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Remaining Images in Rows of 3 */}
                    <div className="grid md:grid-cols-3 gap-6 sm:grid-cols-1 m-10">
                        {teamDetails.slice(1).map((item) => (
                            <div key={item.name} className="w-[400px] px-6 py-6 text-center bg--200 rounded-lg lg:mt-0 xl:px-10">
                                <div className="space-y-4 xl:space-y-6">
                                    <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-1 bg-white bg-zinc-900">
                                        <Image className="mx-auto rounded-[22px] h-50 w-50 transition-transform duration-300 transform hover:scale-105 cursor-pointer" src={item.image} alt="author avatar" width={400} height={100} />
                                    </BackgroundGradient>
                                    <div className="space-y-2">
                                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium" style={{ fontFamily: "Shuri" }}>
                                            <h1 className="text-white text-2xl">{item.name}</h1>
                                            <p className='text-white'>{item.year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Ourteam