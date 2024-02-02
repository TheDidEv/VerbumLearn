import { useState } from "react";
import AuthService from "../../services/auth-service";

export const Registration = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const hendlerSubmit = (e: any) => {
        AuthService.Registration(email, password, userName)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
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
                    placeholder="password"
                />
            </form>

            <button
                onClick={(e) => { hendlerSubmit(e) }}
                className="m-3 bg-white rounded-lg border  hover:border-gray-300  focus:outline-none"
            >
                Registration
            </button>
        </div>
    );
}