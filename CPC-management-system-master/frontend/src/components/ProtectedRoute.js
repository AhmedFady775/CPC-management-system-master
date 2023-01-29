import React, { useContext } from "react";
import { Store } from "./Store";

export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo ? children : <div className="flex text-4xl font-meduim min-h-screen justify-center items-center"> Access Denied </div>;
}
