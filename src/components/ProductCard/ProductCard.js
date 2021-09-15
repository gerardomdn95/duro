import React from 'react';
import './productCard.scss';

const ProductCard = (
  { company, cpn,
    createdBy, description,
    created, eid, modified,
    name, revision }
) => {
  return (
    <section className="product-card">
      <h1>{name}</h1>
      <h1>{company}</h1>
      <p>{description}</p>
    </section>
  )
}

export default ProductCard;
