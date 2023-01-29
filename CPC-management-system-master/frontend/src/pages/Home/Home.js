import React from "react";
import { ReactComponent as Logo } from './developer.svg';

function Home() {
    return (
        <div className="flex bg-white justify-center min-h-[80vh]">
            <div className="flex lg:flex-row flex-col items-center justify-around">
                <div className="flex flex-col p-2">
                    <div className="text-violet-500 text-4xl lg:text-7xl font-bold pb-5">Welcome back! </div>
                    <div className="text-xl lg:text-2xl font-medium lg:w-[80%] "> Create resources, manage enrollment, track the performance of each trainee and build learning community — all in one place.</div>
                </div>
                <Logo />
            </div>
        </div>
    );
}

export default Home;