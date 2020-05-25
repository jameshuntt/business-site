import React from 'react';
import "./Card.scss";
const Card = props=>{
    return(
        <div className="card text-center">
            <div className="class overflow">
                <img src={props.imgsrc} className="card-img-top" alt="card-image"/>
             </div>
             <div className="card-body text-dark">
                 <h4 className="card-title">{props.title}</h4>
                 <p className="card-text text-secondary">{props.text}</p>
             <a href="#" className="btn btn-outline-success"> Go Anywhere </a>    
             </div>
        </div>
    );
};

export default Card;