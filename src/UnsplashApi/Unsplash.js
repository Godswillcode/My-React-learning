import React, {useEffect, useState} from 'react'


const Unsplash = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  


    const getTours = () => {
        const key = "r-mPIJf3XaqeFJxc-uQhixh2_MYilCdfOIx1TG53IE0"
        fetch(`https://api.unsplash.com/photos/?client_id=${key}`)
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
       getTours()
    }, [])

    return (
        <div>
        {tours.map(item => {
            return(
                <div>
                    <img src={item.urls.full} alt="unsplash"/>
                </div>
            )
        })}
        </div>
    )
}

export default Unsplash
