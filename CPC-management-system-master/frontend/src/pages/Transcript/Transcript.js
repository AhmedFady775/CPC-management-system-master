import ProgressList from "./ProgressList";
import React, { useEffect, useState } from "react";
import axios from '../../services/axios';

function Transcript() {

    const [progressList, setProgressList] = useState([]);
    const getProgressList = async () => {
        const contestID = 433506
        try {
            const response = await axios.post("/progresspercontest", JSON.stringify({ contestID }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response)

        } catch (err) {
            console.log(err)

        }
        // do get request to backend
        /*
        RESPONSE FORMAT

        Contest week no.
        Contest topic
        no. of problems in contest
        no. of problems solved by trainee
        Trainee's zone in contest

        */
        // call setProgressList

    }

    useEffect(() => {
        getProgressList()
    }, []);


    return (
        <div>

            <header>
                <div>Transcript</div>
                <div>
                    <div>Trainee's name</div>
                    <div>Mentor's name</div>
                </div>
            </header>

            {/* <ProgressList progressList = {progressList}/ > */}
        </div>
    );

}

export default Transcript;