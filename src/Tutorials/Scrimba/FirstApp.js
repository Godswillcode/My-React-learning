import React from 'react'

function FirstApp() {
    
    return (
        <div style={{gap: "25px"}} className="container d-flex flex-wrap justify-content-center">
          <ContactCard name="Bread" img="images/item-1.jpeg" phone="+234 904 456 56" rating="fa fa-star"/>
          <ContactCard name="Fred Rice" img="images/item-2.jpeg" phone="+234 256 789 12" rating="fa fa-star"/>
          <ContactCard name="Goat Meat" img="images/item-4.jpeg" phone="+234 098 567 98" rating="fa fa-star"/>
          <ContactCard name="Jellof Rice" img="images/item-5.jpeg" phone="+234 235 987 06" rating="fa fa-star"/>
          <ContactCard name="White Rice" img="images/item-6.jpeg" phone="+234 235 987 06" rating="fa fa-star"/>
          <ContactCard name="Lunch" img="images/item-7.jpeg" phone="+234 235 987 06" rating="fa fa-star"/>
        </div>
    )
}

function ContactCard({img, name, phone, rating}){
   
    return(
        <div className="text-center img-thumbnail mb-4">
            <img src={img} width="300" height="300" className="img-thumbnail"/>
             <h4>{name}</h4>
             <p>Phone: {phone}</p>
             <div>
               <i className={rating}></i>
               <i className={rating}></i>
               <i className={rating}></i>
            </div>
        </div>
    )
}

export default FirstApp
