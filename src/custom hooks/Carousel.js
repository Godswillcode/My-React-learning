import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/style.css';

function Carousel() {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
     
    const events = {
        onDragged: function(event) {...},
        onChanged: function(event) {...}
    };
    return (
        <div>
           <OwlCarousel ref="car" options={options} events={events} >
       <div><img src="/images/item-1.jpeeg" alt="The Last of us"/></div>
       <div><img src="/images/item-2.jpeg" alt="GTA V"/></div>
       <div><img src="/images/item-3.jpeg" alt="Mirror Edge"/></div>
        </OwlCarousel> 
        </div>
    )
}

export default Carousel
