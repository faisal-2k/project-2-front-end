import React from 'react';
import img from '../assests/page_not_found.png'

const NotFoundPage = () => {
    return (
        <div className='Page'>
            <div className='flex justify-center mt-40'>
                <img src={img} />
            </div>
        </div>
    );
};

export default NotFoundPage;