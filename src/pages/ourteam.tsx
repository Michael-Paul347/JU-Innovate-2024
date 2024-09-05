import React from 'react'

import Image from 'next/image'

import { useRouter } from 'next/router';
import NewNavBar from '@/components/NavBar';
import { BackgroundGradient } from "@/components/ui/background-gradient";


const teamDetails = [
    {
        name: 'Devansh',
        image: 'https://i.postimg.cc/W1zVD8WH/RAKSHITA-PARIHAR.png',
        year: "Technical",
       

    },
    {
        name: 'Name 2',
        image: 'https://i.postimg.cc/MZYJdNgL/NANDINI-SHARMA.png',
         year: "Technical",
       

    },
    {
        name: '',
        image: 'https://i.postimg.cc/x8ffxGvg/ARPIT-SHARMA.png',
         year: "",
       
    },
    {
        name: '',
        image: 'https://i.postimg.cc/brhVQYzv/ASHMIT-SINGH.png',
         year: "",

      

    },
    {
        name: 'Name 3',
        image: 'https://i.postimg.cc/TYHqx2ZW/DAKSH-NAGAR.png',
       year: "3",

       
    },
    {
        name: 'Name 4',
        image: 'https://i.postimg.cc/vHRxtgFh/DHRUV-SINGH.png',
         year: "4",
       

    },

  
    {
        name: '',
        image: 'https://i.postimg.cc/rwB1dnyV/AWEZ-KHAN.png',
       year: "",

      

    },
    {
        name: '',
        image: 'https://i.postimg.cc/qMYbLGBY/SHRISHTI-MISHRA.png',
       year: "",

      

    },
    {
        name: '',
        image: 'https://i.postimg.cc/J0YTSNNs/SAKSHAM-TAMBI.png',
       year: "",

      

    },
    {
        name: '',
        image: 'https://i.postimg.cc/FsHDmLqp/SOHAN-BENIWAL.png',
       year: "",

        
    },
    {
        name: '',
        image: 'https://i.postimg.cc/52KxpTQJ/RAJSHEKAR-SINGH.png',
       year: "",

    
    },
  
    {
        name: '',
        image: 'https://i.postimg.cc/DzQXS7Y6/ADITYA-JAIN.png',
       year: "",


    },

   
    {
        name: '',
        image: 'https://i.postimg.cc/Hx491wgp/ISHA-SONI.png',
       year: "",

        

    },
  
    {
        name: '',
        image: 'https://i.postimg.cc/LsZMDXMk/SAJAL-BATWARA.png',
       year: "",

      

    },

    {
        name: '',
        image: 'https://i.postimg.cc/gkB57Wsg/SAJAL-GOYAL.png',
       year: "",

       

    },
    {
        name: '',
        image:'https://i.postimg.cc/PqBdnDMF/NAVIN-JAIN.png',
       year: "",

       

    },
    {
        name: '',
        image: 'https://i.postimg.cc/8z6ynrjC/SAKSHI-SRIVASTAVA.png',
       year: "",

       
    },
    {
        name: '',
        image:'https://i.postimg.cc/mgz3gfsp/CHAITANYA-MEHTA.png' ,
       year: "",

       
    },
    
    {
        name: '',
        image:'https://i.postimg.cc/y6D02PNJ/Dhruv-Tomar.png' ,
       year: "",

       
    },
    {
        name: '',
        image:'https://i.postimg.cc/MGHkTPZ1/Dhruvi-Vaid1.png' ,
       year: "",

       
    },

   
    {
        name: '',
        image:'https://i.postimg.cc/W4XYCr3f/Charvi-Agarwal.png' ,
       year: "",

       
    },
    {
        name: '',
        image:'https://i.postimg.cc/XY6PC4mx/Devansh-Verma.png' ,
       year: "",

       
    },
   
    {
        name: '',
        image:'https://i.postimg.cc/qRFbMT2s/Akshat-Pratap-Singh.png' ,
       year: "",

       
    },
    {
        name: '',
        image:'https://i.postimg.cc/L5ZyJbVr/Nihar-Patel.png' ,
       year: "",

       
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
                                <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium" style={{ fontFamily: "Shuri" }}>
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