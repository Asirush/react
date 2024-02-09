import './App.css';
import React, { useState } from 'react';
import SearchQuery from './components/SearchQuery';

function App() {
  
  let [searchName, setSearchName] = useState("")//input

  let items = [
    {
      "name": "dishwasher",
      "discription": "washing mashine for a dish",
      "img": "https://static.tildacdn.com/tild6163-3337-4434-b035-653033623363/image.png"
    },
    {
      "name": "iphone",
      "discription": "phone",
      "img": "https://static.tildacdn.com/tild6163-3337-4434-b035-653033623363/image.png"
    },
    {
      "name": "dell xps",
      "discription": "notebook",
      "img": "https://static.tildacdn.com/tild6163-3337-4434-b035-653033623363/image.png"
    },
  ]
 
  return (
    <div className='App'>
      <input onInput={(event) => setSearchName(event.target.value)} value={searchName}></input>
      <SearchQuery
       items={items} 
       searchName={searchName}/>
    </div>
  );
}

export default App;