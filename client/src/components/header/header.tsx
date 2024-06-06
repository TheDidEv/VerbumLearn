import { Link, Outlet } from 'react-router-dom';
import { Logo } from './logo';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';

export const Header = () => {
    const [username, setUsername]: any = useState();
    const userProfilDataInfo = useAppSelector((state) => state.auth.basicUserInfo);

    useEffect(() => {
        function name() {
            setUsername(userProfilDataInfo?.UserName);
        }
        name();
    }, [username])

    return (
        <div className="w-full flex items-center justify-between p-6 space-x-6 border-b-2 border-gray-300 shadow-lg rounded-b-lg">
            <div>
                <Link to='/'><Logo /></Link>
            </div>
            <div className="flex">
                <Link to='/' className="mx-4 bg-gray-0 hover:bg-purple-300 focus:outline-none rounded font-bold text-lg hover:shadow-lg">Home</Link>
                <Link to='/Rules' className="bg-gray-0 hover:bg-purple-300 focus:outline-none rounded font-bold text-lg hover:shadow-lg">Rules</Link>
            </div>
            <div>
                <Link to='/userPage' className="bg-gray-0 hover:bg-purple-300 focus:outline-none rounded font-bold hover:shadow-lg">{username}</Link>    
            </div>
            <Outlet />
        </div>
    );
}