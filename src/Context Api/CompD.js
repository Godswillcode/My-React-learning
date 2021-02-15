import React, {useContext} from "react";
import { UserNameContext } from "./ContextApp";

function CompD() {
   const userName = useContext(UserNameContext)
   const [myName, setMyName, userNameData] = userName
     
  return (
    <>
      <div className="text-center mt-4">

       {userNameData.map(person => <h4 key={person.id}>My name is {person.name}</h4>)}
       <p>My name is {myName? 'John' : 'Smile'}</p>
        <button onClick={() => setMyName(!myName)}>Change Name</button>
      </div>
    </>
  );
}

export default CompD;
