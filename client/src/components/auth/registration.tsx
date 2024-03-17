import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { register } from "../../slices/authSlice";
import { Link } from "react-router-dom";
import { registerValidator } from "./validator/schemaAuth";

export const Registration = () => {
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [isValidate, setIsValidate] = useState(false);

    const hendlerSubmit = async (e: any) => {
        let validData = {
            username: userName,
            email: email,
            password: password,
        }
        setIsValidate(!(await registerValidator.isValid(validData)));
        console.log(isValidate);
        try {
            if (email && userName && password) {
                await dispatch(
                    register({
                        Email: email,
                        Password: password,
                        UserName: userName,
                    })
                ).unwrap();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center py-60">
            <div className="w-60 p-5 flex flex-col bg-gray-100 rounded-lg">
                <form onSubmit={(e) => { hendlerSubmit(e) }}>
                    <input
                        className="m-3 rounded-lg"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        className="m-3 rounded-lg"
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        placeholder="Username"
                    />

                    <input
                        className="m-3 rounded-lg"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                    />
                </form>

                <button
                    onClick={(e) => { hendlerSubmit(e) }}
                    className="m-3 bg-white rounded-lg border  hover:border-gray-300  focus:outline-none"
                >
                    Registration
                </button>

                <Link to='/login' className="m-3 bg-white rounded-lg border hover:border-gray-300  focus:outline-none">Login</Link>

                {isValidate ?
                    <ul className="bg-red-200 rounded">
                        <li>Email must be valid(with @ and .com)</li>
                        <li>Password: min length 4 symbols max 15 symbols</li>
                        <li>Username: min length 2 symbols max 15 symbols</li>
                    </ul>
                    : null}
            </div>
        </div>

    );
}