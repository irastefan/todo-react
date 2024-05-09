import React, { useCallback, useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import List from "../List/List";

const ShoppingList = () => {

  const [products, setProducts] = useState([
    { id: 1, text: "milk", isCompleted: false, image: "https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg" },
    { id: 2, text: "apple", isCompleted: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHB2LmJDE8mRo5vCggGcP-G5Jkov0nOYt700GGxzzQg&s"},
  ]);

  console.log(products);

  const toggleItem = useCallback((id) => {
      setProducts(prev => prev.map(item => {
        if(item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          }
        }
        return item;
      }));
    }
  , []);

  const memoizedCallback = React.useCallback(
    (props) => <ShoppingItem {...props}  toggleItem={() => toggleItem(props.id)} />
  , [toggleItem]);

  return (
    <div className="container">

         <List
            title={"Shopping List"}
            items={products}
            onChangeItems={setProducts}
            Component={memoizedCallback}
         />

    </div>
  );
};
export default ShoppingList;