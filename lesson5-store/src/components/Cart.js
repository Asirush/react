import React from "react";

export default function Cart({...props}){
    let counter = props.cart.length;

    return(
        <div className="Cart">
            <button className="btn btn-primary" onClick={() => {document.querySelector(".Cart > div").style.display = "block"}}>Cart {counter > 0 && counter}</button>

            <div className="card" style={{zIndex: 9999}} onMouseLeave={() => {document.querySelector(".Cart > div").style.display = "none"}}>
                <ul>
                {
                    props.cart.map(item => {
                        return (
                            <li>
                                <img src={item.img} alt="" width={30}></img>
                                {item.name}
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}