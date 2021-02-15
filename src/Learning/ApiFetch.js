    import React, { useEffect, useState } from 'react'
    
    function ApiFetch() {
        const [tours, setTours] = useState([]);
        const [isLoading, setIsLoading] = useState(true)
        const [isError, setIsError] = useState(false)
        
        const getTours = () => {
            fetch('https://course-api.netlify.app/api/react-tours-project')
            .then(resp => resp.json())
            .then(data => {
                setTours(data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsError(true);
                setIsLoading(false);
            })
        }

        useEffect(() => {
           getTours()
        }, [])

        if(isLoading){
            return (
              <div className="text-center">
                    <img src="images/loader.gif" alt="loader" />
              </div>
            )
        }

        if(isError){
           return <h4>Oops! There was an error</h4>
        }
    
        return (
            <div>
               {tours.map(tour => <h4>{tour.name}</h4>)} 
            </div>
        )
    }
    
    export default ApiFetch
    