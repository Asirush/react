import ItemCard from "./ItemCard";

export default function SearchQuery(props) {
    return (
        <div className="container my-3">
            { props.items.map(item => {
                if (item.name.toLowerCase().includes(props.searchName.toLowerCase())) {
                    return (<ItemCard 
                        item={item} // товары
                        addItemToCart={props.addItemToCart}/>);
                }
            }) }
        </div>
    )
}