import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='w-full flex items-center justify-between p-6 space-x-6 text-white border-b-2 border-indigo-900 shadow-lg rounded'> {/*shadow-xl || rounded-md*/}
            LOGO
            <div className="flex">
                <Link to='/' className="mr-4">Home</Link>
                <Link to='/Rules'>Rules</Link>
            </div>
            <div>user</div>
            <Outlet />
        </div>
    );
}