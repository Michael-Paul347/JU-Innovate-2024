import React from 'react';

// Define the type for the props
interface HeaderProps {
    onRegisterClick: () => void; // Specify that the prop is a function that returns void
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => { // Use HeaderProps as the type for the props
    return (
        <>
            <header>
                <div className="relative inset-x-0 overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            position: 'fixed',
                            width: '100%',
                            height: '142vh',
                            objectFit: 'cover',
                            zIndex: -3,
                            opacity: 0.9,
                        }}
                    >
                        <source src="goku web.mp4" type="video/mp4" />
                    </video>

                    <div className="flex items-center justify-center">
                        <div className="relative w-[500px] max-w-screen-md lg:mt-0 -mt-14" style={{ fontFamily: "Customfont" }}>
                            <div className="relative h-0 pb-[80%] md:pb-[65%] lg:mt-12 mt-0 mb-7">
                                <Image src="/test3.png" alt="logo" className="glowing-text light-bulb -mt-auto absolute inset-0 w-full object-contain" width={100} height={100} />
                            </div>
                            <div className='flex h-[80px] justify-center gap-10 text-center mb-10 lg:mt-0 -mt-20'>
                                <h1 className='text-white mb-12' style={{ fontSize: "50px" }}>27Sept - 28Sept</h1>
                            </div>
                            <div className='relative z-40'>
                                <div className='flex justify-center lg:mt-15 mt-10 gap-10 text-center custom-md:mt-10'>
                                    <div className='button-85 rounded-3xl p-2 text-3xl text-bold hover:scale-105 hover:shadow hover:shadow-white'>
                                        <a href="guidelines.pdf" download>Guidelines</a>
                                    </div>
                                    <div className='button-85 rounded-3xl p-2 text-3xl text-bold hover:scale-105 hover:shadow hover:shadow-white' style={{ fontFamily: "Customfont" }}>
                                        <button onClick={onRegisterClick}>Register</button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center gap-10 text-center mb-10 lg:mt-0 -mt-5'>
                                {/* Additional content if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;






