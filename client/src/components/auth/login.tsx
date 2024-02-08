import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { login } from "../../slices/authSlice";
import { Link } from "react-router-dom";

export const Login = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = async () => {
        if (email && password) {
            try {
                await dispatch(
                    login({
                        Email: email,
                        Password: password,
                    })
                ).unwrap();
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log("Error login");
        }
    }

    return (
        <div className="w-60 p-5 flex flex-col bg-gray-100 rounded-lg">
            <form onSubmit={() => { handlerSubmit(); }}>
                <input
                    className="m-3 rounded-lg"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                />

                <input
                    className="m-3 rounded-lg"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="password"
                />
            </form>

            <button
                onClick={() => { handlerSubmit(); }}
                className="m-3 bg-white rounded-lg border hover:border-gray-300  focus:outline-none"
            >
                Login
            </button>
            <Link to='/register' className='bg-gray-0 hover:bg-gray-100 focus:outline-none rounded'>Register</Link>
        </div>
    );
}