import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/error-page-photo/error-page-pic.jpg';

const Error = () => {
    const error = useRouteError()
    return (
        <div className='my-20 flex flex-col items-center gap-10'>
        <div className='text-center'>
        <h2 className='text-5xl text-red-600 mb-3'>Something Went Wrong</h2>
        <p className='text-red-600 text-2xl'><i>{error.statusText || error.message}</i></p>
        </div>
        <img className='w-[800px]' src={errorImg} alt="" />
        <Link to='/'><button className='btn btn-primary'>Back to Homepage</button></Link>
    </div>
    );
};

export default Error;