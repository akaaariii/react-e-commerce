import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ProductList from '../utils/ProductList';
import Rating from '@material-ui/lab/Rating';

const ProductItem = (props) => {
  const [value, setValue] = useState();

  let id = props.match.params.id;
  if(isNaN(id)) {
    return <Redirect to='/products' />
  }

  const item = ProductList.find(p => p.sku === parseInt(id));
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={item.image} alt={`product ${item.sku}`} />
      </div>
      <div className='product-info'>
        <h3>{item.name}</h3>
        <h4>${item.price}</h4>
        <Rating
          name='simple-controlled'
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nemo quidem illo mollitia voluptatibus in dolores impedit maxime. Quos culpa eum tempora architecto dicta dolor ad facere vero temporibus sapiente?</p>
      </div>
    </div>
  )
}

export default ProductItem;