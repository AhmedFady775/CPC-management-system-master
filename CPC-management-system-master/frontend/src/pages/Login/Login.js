import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from '../../services/axios';
import { useContext, useEffect } from 'react';
import { Store } from '../../components/Store';
import { HOMEPAGE } from '../../frontend_urls';
import { LOGIN } from "../../backend_urls"

function Login() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : HOMEPAGE;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { data } = await axios.post("http://localhost:5000/login",
                {
                    email,
                    password,
                }
            );
            ctxDispatch({ type: "USER_SIGNIN", payload: data });
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate(redirect || HOMEPAGE);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return (
        <div className="flex items-center h-screen flex-col py-36  bg-white">
            <div className="flex flex-col items-center pb-32">
                <strong className="text-6xl text-violet-500">Sign In</strong>
            </div>

            <form onSubmit={submitHandler} className="flex items-center  flex-col w-[70%] lg:w-[30%]">
                <div className="flex flex-col mb-12 w-full">
                    <div className="flex flex-col p-2 border-b-2  border-slate-600 mb-8">
                        <input
                            placeholder="E-mail"
                            className="bg-transparent focus:outline-none focus:placeholder:text-transparent"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-row p-2 border-b-2 border-slate-600">
                        <input
                            className="bg-transparent focus:outline-none focus:placeholder:text-transparent"
                            placeholder="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                {loading?(<div className="flex flex-col">
                    <button className='py-2 px-6 text-white rounded bg-gray-500' type="submit">Signing In</button>
                </div>):
                    <div className="flex flex-col">
                        <button className='py-2 px-6 text-white rounded bg-violet-500' type="submit">Sign In</button>
                    </div>
                }
                
            </form>
        </div>
    );
}

export default Login;