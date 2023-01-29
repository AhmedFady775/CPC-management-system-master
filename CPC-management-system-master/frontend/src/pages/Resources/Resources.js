import React from "react";
import { useState } from "react";
function Resources() {

  const [resource, setResource] = useState('');

  return (
    <div className="flex flex-col items-center min-h-[80vh] py-20">
      <h2 className="text-6xl text-violet-500 font-bold"> Manage Your Resources</h2>
      <form className='py-10 flex flex-row w-[50%]'>
        <input
          className='w-full p-2 border-2 border-gray-500 rounded'
          placeholder='Enter your resource..'
          onChange={(e) => setResource(e.target.value)}
        ></input>
        <button className='py-2 px-6 text-white rounded bg-violet-500 ml-2' type="submit">Add</button>
      </form>
      <div className="flex p-2 border-2 border-gray-500 flex-row w-[50%]">
        <div>
          <p className="text-xl">Your Current Resources: </p>
        </div>
      </div>
    </div>
  );
}

export default Resources;