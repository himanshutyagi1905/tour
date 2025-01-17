import React from "react";
import Card from "./Card";

const Tours = (props) => {
    function removeHandler(id) {
        console.log(id);
        props.removeTours(id);
    }

    return (
     <div>
        <div className="container">
          <h2 className="title">Plan wiht Love</h2>  
        </div>
        <div className="cards">
            {
                props.tours.map((tour) =>{
                    return <Card {...tour} key={tour.id} removeTour={removeHandler}/>
                })
            }
        </div>
    </div>
    )
}

export default Tours;