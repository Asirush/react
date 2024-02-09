import React from "react";
import ItemCard from "./ItemCard";

export default function SearchQuery(props){
    return(
        <>
            {props.items.map(item => {
                if(item.name.toLowerCase().includes(props.searchName.toLowerCase())){
                    return(<ItemCard item={item}/>);
                }
            })}
        </>
    )
}