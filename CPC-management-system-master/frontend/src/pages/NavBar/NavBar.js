import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Store } from "../../components/Store";
import { Drawer } from "@mui/material";

function NavBar() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const { dispatch: ctxDispatch } = useContext(Store);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const list = () => <div className="w-[80vw] h-full bg-[f7f7f7]">
    <ul className="text-black lg:flex flex-row ">
      <li className="nav-item">
        <NavLink
          onClick={toggleDrawer(false)}
          to="/homepage"
          className={(navData) => (navData.isActive ? "active" : null)}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          onClick={toggleDrawer(false)}
          to="/profile"
          className={(navData) => (navData.isActive ? "active" : null)}
        >
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          onClick={toggleDrawer(false)}
          to="/overview"
          className={(navData) => (navData.isActive ? "active" : null)}
        >
          Overview
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          onClick={toggleDrawer(false)}
          to="/transcript"
          className={(navData) => (navData.isActive ? "active" : null)}
        >
          My Assessment History
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          onClick={toggleDrawer(false)}
          to="/resources"
          className={(navData) => (navData.isActive ? "active" : null)}
        >
          Resources
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          onClick={toggleDrawer(false)}
          to="/userentry"
          className={(navData) => (navData.isActive ? "active" : null)}
        >
          Add Users
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          onClick={toggleDrawer(false)}
          to="/mentees"
          className={(navData) => (navData.isActive ? "active" : null)}
        >
          View Mentees
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : null)}
          onClick={signoutHandler}
        >
          Sign out
        </NavLink>
      </li>


    </ul></div>;


  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
  };

  return (
    <>
      {
        userInfo ?
          <nav className="flex flex-row py-4 justify-between px-4 lg:justify-around items-center bg-black  text-white">
            < span className="flex lg:hidden mr-4" >
              <img src="https://img.icons8.com/ios-filled/30/ffffff/menu-rounded.png" onClick={toggleDrawer(true)} />
              <Drawer open={open} anchor="left" onClose={toggleDrawer(false)}>
                {list()}
              </Drawer>
            </span >

            <NavLink className="text-3xl" to="/homepage">
              ASUFE CPC
            </NavLink>

            <ul className="hidden lg:flex flex-row ">
              <li className="nav-item">
                <NavLink
                  to="/homepage"
                  className={(navData) => (navData.isActive ? "active" : null)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={(navData) => (navData.isActive ? "active" : null)}
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/overview"
                  className={(navData) => (navData.isActive ? "active" : null)}
                >
                  Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/transcript"
                  className={(navData) => (navData.isActive ? "active" : null)}
                >
                  My Assessment History
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/resources"
                  className={(navData) => (navData.isActive ? "active" : null)}
                >
                  Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/userentry"
                  className={(navData) => (navData.isActive ? "active" : null)}
                >
                  Add Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/mentees"
                  className={(navData) => (navData.isActive ? "active" : null)}
                >
                  View Mentees
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={(navData) => (navData.isActive ? "active" : null)}
                  onClick={signoutHandler}
                >
                  Sign out
                </NavLink>
              </li>
            </ul>
          </nav > : null
      }
    </>
  );

}

export default NavBar;