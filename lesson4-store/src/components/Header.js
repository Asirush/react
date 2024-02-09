import React from "react";
import SearchQuery from "./SearchQuery";

const Header = (props) =>{
    return(
        <div>
        <input onInput={(event) => props.setSearchName(event.target.value)} value={props.searchName}></input>
      <SearchQuery
       searchName={props.searchName}/>
       </div>
    )
}

export default Header