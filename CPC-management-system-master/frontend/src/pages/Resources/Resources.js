import React, { useState, useEffect} from 'react' 
import axios from 'axios';
import URLS from '../../server_urls'

function Resources() {
  const [resources, setResources] = useState ([]);
  const [resourceTopic, setResourceTopic] = useState('');
  const [resourceLink, setResourceLink] = useState('');
  const [resourceLevel, setResourceLevel] = useState('');

  const getResources = async() =>{
      try {
        const response = await axios.get("http://localhost:5000/resources");
        setResources(response.data)
    } catch (error) {
        console.log(error)
    }
  }

  const enterResource = async(e) => {
    e.preventDefault()
    try {
        console.log("here")
        const response = await axios.post("http://localhost:5000/resources", JSON.stringify({resourceTopic, resourceLevel, resourceLink}),
            {
                headers: {'Content-Type': 'application/json'},
            });
        console.log(response)
        getResources()
       // alert("Form Submitted Successfully")
    } catch (error) {
        console.log(error)
        //return console.log(error)
    }
}
  useEffect ( () => {     // runs once when the browser is refreshed
    getResources()
  },[]);

  return (
    <div className="flex flex-col items-center min-h-[80vh] py-20">
      <h2 className="text-6xl text-violet-500 font-bold"> Manage Your Resources</h2>
      <form className='py-10 flex flex-row w-[50%] space-x-4' onSubmit={enterResource}>
        <input
          className='w-full p-2 border-2 border-gray-500 rounded'
          placeholder='Enter your resource..'
          onChange={(e) => setResourceTopic(e.target.value)}
        ></input>
        <input
          className='w-full p-2 border-2 border-gray-500 rounded'
          placeholder='Enter your resource..'
          onChange={(e) => setResourceLink(e.target.value)}
        ></input>
        <input
          type = 'number'
          className='w-full p-2 border-2 border-gray-500 rounded'
          placeholder='Enter your resource..'
          onChange={(e) => setResourceLevel(e.target.value)}
        ></input>
        <button className='py-2 px-6 text-white rounded bg-violet-500 ml-2' type="submit">Add</button>
      </form>
      <div className="flex p-2 border-2 border-gray-500 w-[50%] flex-col">
        <div>
          <p className="text-xl">Your Current Resources: </p>
        </div>
        <div className="flex-col flex">
          {resources.map(resource=>(<div className='flex-col flex space-y-2 border-b-2 py-2'>
            <span>Topic: <a href={resource.link}target="_blank" className='underline text-blue-800'>{resource.topic}</a></span>
            <span>Level: {resource.level}</span>
            
          </div>))}
        </div>
      </div>
    </div>
  );
}

export default Resources;