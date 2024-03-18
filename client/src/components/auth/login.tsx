import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { login } from "../../slices/authSlice";
import { Link } from "react-router-dom";

export const Login = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let userError: any = useAppSelector((state) => state.auth.error);

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
            userError = true;
        }
    }

    return (
        <div className="flex justify-center py-60">
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
                <Link to='/register' className="m-3 bg-white rounded-lg border hover:border-gray-300  focus:outline-none">Register</Link>

                {userError ? <div className="bg-red-200 rounded">Not valid user data</div> : null}
            </div>
        </div>
    );
}