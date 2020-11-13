import React from 'react';
import ProductList from '../utils/ProductList';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

const Products = () => {
  return (
    <div className='product-list'>
      {ProductList.map((item, index) => (
        <div key={index} className='product-item'>
          <Link to={`products/${item.sku}`}><img src={item.image} alt='product-item' /></Link>
          <h4>{item.name}</h4>
          <h5>${item.price}</h5>
          <Rating name='half-rating-read' defaultValue={item.rating} precision={0.5} readOnly />
        </div>
      ))}
    </div>
  )
}

export default Products;