import React, { useContext } from 'react';
import './Display.css';
import { StoreContext } from '../../Context/StoreContext';
import Displayitem from '../Item/Item';
 
function Display({ category }) {
  const { display_list } = useContext(StoreContext);

  return (
    <div className='Display' id='Display'>
      <h2>New Arrivals</h2>
      <div className="display-list">
        {display_list
          .filter(item => category === 'All' || category === item.category)
          .map(item => (
            <Displayitem
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
