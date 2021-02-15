import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiAxios() {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

   const getTours = () => {
       axios.get('https://course-api.netlify.app/api/react-tours-project')
       .then(response => {
        setTours(response.data)
        setIsLoading(false)
       })

       .catch(err => {
        setIsError(true);
        setIsLoading(false);
    })
   }

    useEffect(() => {
        getTours();
     }, [])

     if(isLoading){
         return (
           <div className="text-center">
                 <img src="images/loader.gif" alt="loader" />
           </div>
         )
     }

     if(isError){
        return (
            <div className="text-center">
                <h4>Oops! There was an error</h4>
            </div>
        )
     }

    return (
        <div>
           {tours.map(tour => <h4>{tour.name}</h4>)}   
        </div>
    )
}

export default ApiAxios
