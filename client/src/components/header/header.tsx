import { Link, Outlet } from 'react-router-dom';
import { Logo } from './logo';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

export const Header = () => {
    // const dispatch = useAppDispatch();
    // const userProfilDataInfo = useAppSelector((state) => state.auth.basicUserInfo);

    // console.log(userProfilDataInfo?.user.Email);
    return (
        <div className='w-full flex items-center justify-between p-6 space-x-6 border-b-2 border-gray-300 shadow-lg rounded-b-lg'> {/*shadow-xl || rounded-md*/}
            <div>
                <Link to='/'><Logo /></Link>
            </div>
            <div className="flex">
                <Link to='/' className="mr-4 bg-gray-0 hover:bg-gray-100 focus:outline-none rounded">Home</Link>
                <Link to='/Rules' className='bg-gray-0 hover:bg-gray-100 focus:outline-none rounded'>Rules</Link>
            </div>
            <div>Username</div>
            <Outlet />
        </div>
    );
}