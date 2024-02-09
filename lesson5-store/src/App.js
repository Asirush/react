import { useState } from "react";
import SearchQuery from "./components/SearchQuery";
import Header from "./components/Header";
import Home from "./components/Home"
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  // Состояния приложения
  let [searchName, setSearchName] = useState(""); // input
  let [cart, setCart] = useState([]); // корзина

  let addItemToCart = (item) => {
    setCart([...cart, item])
  }

  // Товары
  let items = [
    {
      "name": "Apple Iphone 14 Pro",
      "desc": "",
      "img": "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265269_1.jpg&w=3840&q=85"
    },
    {
      "name": "Samsung Galaxy S23",
      "desc": "",
      "img": "https://sanmi.kz/upload/iblock/521/samsung-galaxy-s23-ultra-12-gb-256-gb-zelenyi-109174565-1.jpg"
    },
    {
      "name": "Xiaomi Mi13 Pro",
      "desc": "",
      "img": "https://static.tildacdn.com/tild6163-3337-4434-b035-653033623363/image.png"
    },
  ]

  // Вывод
  return (
    <Router>
      <div className='App'>
        <Header
          searchName={searchName}
          setSearchName={setSearchName}
          cart={cart}
          setCart={setCart}
        />

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <a></a> */}
          <Route path="/phones" element={
            <SearchQuery
            items={items} // товары
            searchName={searchName} // ввод с input
            addItemToCart={addItemToCart}
          />
          }/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;