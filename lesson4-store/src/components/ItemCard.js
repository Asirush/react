import React from "react";

export default function ItemCard(props){
    return(
        <div className="Card">
            <h3>{props.item.name}</h3>
            <p>{props.item.discription}</p>
            <img src={props.item.img}></img>
        </div>
    )
}