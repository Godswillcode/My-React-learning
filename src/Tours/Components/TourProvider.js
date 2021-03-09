import React, {useEffect, useState, createContext} from 'react';


export const TourContext =  createContext()

const TourProvider = (props) => {

    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    const getTours = () => {
  
    fetch("https://course-api.com/react-tours-project")
    .then(resp => resp.json())
    .then(data => {
        console.log({data});
        setTours(data)
        setIsLoading(false)
    })
    .catch(err => {
        setIsError(true);
        setIsLoading(false);
    })
}

  
    useEffect(() => {
      getTours();
    }, []);


    return (
        <TourContext.Provider value={[tours, setTours, isLoading, isError]}>
            {props.children}
        </TourContext.Provider>
    )
}

export default TourProvider
