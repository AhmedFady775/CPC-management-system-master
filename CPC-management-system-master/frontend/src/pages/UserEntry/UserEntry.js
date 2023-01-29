import React, { useState } from 'react';
import APIService from '../../services/APIService';
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from '../../frontend_urls';

function UserEntry() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vjudgeHandle, setVjudgeHandle] = useState('');
    const [platformRole, setPlatformRole] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const navigate = useNavigate();
    const enterUser = () => {
        APIService.enterUser({ email, firstName, lastName, vjudgeHandle, platformRole })
            .catch(error => console.log('error', error))
    }
    const enterFile = () => {
        APIService.enterFile(selectedFile)
            .catch(error => console.log('error', error))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = enterUser()
        setEmail('')
        setFirstName('')
        setLastName('')
        setVjudgeHandle('')
        setPlatformRole('')
        console.log(res)
        navigate(HOMEPAGE);
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        const res = enterFile()
        setSelectedFile()
        console.log(res)
    }

    return (

        <div className="flex flex-col items-center min-h-[80vh] py-20">
            <h2 className="text-6xl text-violet-500 font-bold"> Add New User</h2>
            <form className='py-10 flex flex-col w-[50%]'>
                <div className='pb-4'>
                    <input
                        className='w-full p-2 border-2 border-gray-500 rounded'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='pb-4'><input
                    className='w-full p-2 border-2 border-gray-500 rounded'
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                /></div>
                <div className='pb-4'><input
                    className='w-full p-2 border-2 border-gray-500 rounded'
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                /></div>
                <div className='pb-4'><input
                    className='w-full p-2 border-2 border-gray-500 rounded'
                    placeholder='Enter your resource..'
                    onChange={(e) => setVjudgeHandle(e.target.value)}
                /></div>
                <div className='pb-4'><label htmlFor="Platform Role">Platform Role*</label>
                    <select
                        value={platformRole}
                        onChange={(e) => setPlatformRole(e.target.value)}
                        type="string"
                        placeholder="Platform Role"
                        id="platformRole"
                        name="platformRole">
                        <option>Admin</option>
                        <option>Trainee</option>
                        <option>Mentor</option>
                        <option>Mentor Head</option>
                    </select></div>

                <div className='pb-4'> <form className="userEntry-file" onSubmit={handleSubmitFile}>
                    <input
                        type="file"
                        //value={selectedFile}
                        accept=".xls,.xlsx"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                    <button type="submit">Add Users from file</button>
                </form></div>
                <button className='py-2 px-6 text-white rounded bg-violet-500 ml-2' type="submit">Add User</button>
            </form>
        </div>
    );
}




export default UserEntry;