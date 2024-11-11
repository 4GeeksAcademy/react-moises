import React from "react";

const Card = (props) => {
    const { image, title, description } = props.cards;
    return (
        <div className="card h-100">
            <img src={image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer bg-white">
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    )
}
export default Card;