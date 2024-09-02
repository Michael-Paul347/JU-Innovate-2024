import React, { useEffect, useState } from 'react'



import Image from 'next/image'
import { useRouter } from 'next/router'

import NewNavBar from '@/components/NavBar';
const images = [
    {
        image: 'https://i.postimg.cc/GpXThpd3/DSC-0019.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/LXhYqM8t/DSC-0320.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/Qx77kskS/DSC-0202.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/Hk4SpFnW/DSC-0168.jpg',
        className: 'tall'
    },
    {
        image:'https://i.postimg.cc/B6y8Hwjd/DSC-2182.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/d0sTYCMS/DSC-0275.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/WbZWydPk/DSC-0489-2.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/zDVPndtp/DSC-2823.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/BbLKzGWS/DSC-4181.jpg',
        className: 'tall',
    },
    {
        image: 'https://i.postimg.cc/SQ38Mj8J/DSC-8396.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/0yRkgKKR/DSC-1060.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/NLv5P97D/DSC-9318.jpg',
        className: 'small'
    },
    {
        image: 'https://i.postimg.cc/fyG9ngZx/DSC-4264.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/Sx6ymQcX/DSC-1057.jpg',
        className: 'tall'
    },
    {
        image: 'https://i.postimg.cc/Lsmm5dVx/DSC-1062.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/6p4yNNpg/DSC-0150.jpg',
        className: 'tall'   
    },
    {
        image: 'https://i.postimg.cc/4xbhq509/DSC-0575.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/BnGKmym3/DSC-8436.jpg',
        className: 'small'   
    },
    {
        image: 'https://i.postimg.cc/WpKVcqqp/DSC-0312.jpg',
        className: 'small'
    },
]

const Gallery = () => {
    const router = useRouter();
    let showNav = router.query.showNav;
    const [isShowNav, setIsShowNav] = useState(showNav === 'true');

    useEffect(() => {
        const handlePopstate = () => {
            setIsShowNav(false);
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);
    return (
        <>
        <NewNavBar/>
            <section className='p-10 md:p-20'>
                <div className="   md:px-12 xl:px-6">         
                 <div className="relative pt-12 ">
                    <div className="lg:w-2/3 md:text-center  mx-auto">
                        <h1 className=" team2 text-white font-bold text-4xl md:text-6xl xl:text-7xl ">Glimpses Of JU Rhythm</h1>

                    </div>
                </div>
                </div>
                <div className="grid-wrapper  mt-10" >
                    {images.map((item) => (
                        <div className={item.className}>
                            <Image src={item.image} alt="" height={100} width={100} />
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}

export default Gallery