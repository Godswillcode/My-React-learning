import React, { createContext, useState } from "react";
import CompA from "./CompA";
import {userNameData} from './userNameData'

export const UserNameContext = createContext();
function ContextApp() {
  const [myName, setMyName] = useState(false)
  return (
    <>
      <UserNameContext.Provider value={[myName, setMyName,userNameData]}>
        <CompA />
      </UserNameContext.Provider>
    </>
  );
}

export default ContextApp;
