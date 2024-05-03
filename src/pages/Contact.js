import React from 'react';
import profile from '../assests/cliparts/profile_clipart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faMessage, faMobileAndroid } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard, faEnvelope } from '@fortawesome/fontawesome-free-solid';

const Contact = () => {
    return (
        <div className='Page mb-48'>
        <div className='px-32'>
            <p className='my-10 text-xl'>Contact Us</p>
            <div className='mt-12 grid gap-10 grid-cols-1 md:grid-cols-2'>
                    <div className='flex'>
                        <div>
                            <img className='w-24 mx-auto' src={profile}/>
                        </div>                    
                    <div className='text-left mx-5'>
                        <p className=' text-orange-600 font-bold'>Faisal Abdullah Al Baki</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faMobileAndroid} /> +966500171458</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faEnvelope} />  442814491@kku.edu.sa</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faAddressCard} /> Abha, Saudi Arabia</p>
                    </div>
                </div>
                
                    <div className='flex'>
                        <div>
                            <img className='w-24 mx-auto' src={profile}/>
                        </div>                    
                        <div className='text-left mx-5'>
                        <p className=' text-orange-600 font-bold'>Abdul Salam</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faMobileAndroid} /> +966500171458</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faEnvelope} />  442814491@kku.edu.sa</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faAddressCard} /> Abha, Saudi Arabia</p>
                    </div>
                </div>
                
                    <div className='flex'>
                        <div>
                            <img className='w-24 mx-auto' src={profile}/>
                        </div>                    
                        <div className='text-left mx-5'>
                        <p className=' text-orange-600 font-bold'>Turky</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faMobileAndroid} /> +966500171458</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faEnvelope} />  442814491@kku.edu.sa</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faAddressCard} /> Abha, Saudi Arabia</p>
                    </div>
                </div>
                
                    <div className='flex'>
                        <div>
                            <img className='w-24 mx-auto' src={profile}/>
                        </div>                    
                        <div className='text-left mx-5'>
                        <p className=' text-orange-600 font-bold'>Muhammad Naser</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faMobileAndroid} /> +966500171458</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faEnvelope} />  442814491@kku.edu.sa</p>
                        <p><FontAwesomeIcon className='text-slate-400 ml-4' icon={faAddressCard} /> Abha, Saudi Arabia</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default Contact;