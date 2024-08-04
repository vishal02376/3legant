import React, { useContext } from 'react';
import './Display.css';
import { StoreContext } from '../../Context/StoreContext';
import Fooditem from '../Item/Item';
 
function Fooddisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='Display' id='Display'>
      <h2>New Arrivals</h2>
      <div className="display-list">
        {food_list
          .filter(item => category === 'All' || category === item.category)
          .map(item => (
            <Fooditem
              key={item.id}
              id={item.id}
              name={item.name}
            
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}

export default Fooddisplay;
