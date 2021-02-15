import React from 'react'

function Children() {
    return (
        <div>
          <Profile>
             <h4>Mr. Joshua</h4>
          </Profile> 
          <Profile>
              <hr/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <img src="images/item-1.jpeg" width="200"/>
          </Profile> 
        </div>
    )
}



function Profile({children}){
    return(
        <div>
         {children}
        </div>
    )
}


export default Children
