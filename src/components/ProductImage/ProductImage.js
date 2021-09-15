import React from 'react';
import './productImage.scss';

const ProductImage = ({ source, color }) => {
  return (
    <figure className="product-image">
      <img src={source} style={{ background: color }} alt="product" />
    </figure>
  )
}

export default ProductImage;
