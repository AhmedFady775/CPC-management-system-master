import React from 'react';
import { Store } from "../../components/Store";
import { useContext } from "react";

function Profile() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <div className="flex items-center flex-col min-h-[80vh] py-10">
      <div className="flex flex-col items-center p-4">
        <div className="flex h-72 w-72">
          <img className="rounded-3xl" src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.6435-9/175204929_2338518289624711_5349343489063856599_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Z9efIBKVsY0AX_QZEvR&_nc_ht=scontent-hbe1-1.xx&oh=00_AfDA7I5D_MzMFZ9cODg_5vIhoBrnfqh1uQ3yRr0S4DZhGg&oe=63CC6162"></img>
        </div>
        <div className="flex flex-col pt-10">
          <span className="proLabel">Email: {userInfo.email} </span>
          <span className="proLabel">Name: {userInfo.name} </span>
          <span className="proLabel">Age:  </span>
          <span className="proLabel">ID: {userInfo._id}</span>
          <span className="proLabel">Password: {userInfo.password}</span>
        </div>
      </div>
    </div>
  );
}
export default Profile;