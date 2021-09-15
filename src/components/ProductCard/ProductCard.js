import React from 'react';
import ProductImage from '../ProductImage';
import product from '../../assets/png/product.png';
import './productCard.scss';

const ProductCard = (
  { company, cpn,
    createdBy, description,
    created, eid, modified,
    name, revision }
) => {
  const color = '#FFCC69';

  const formatDate = (date) =>
    new Date(date)
      .getFullYear() + '-' + ("0" + (new Date()
        .getMonth() + 1)).slice(-2) + '-' + ("0" + new Date()
          .getDate())
          .slice(-2)

  return (
    <section className="product-card">
      <div className="product-container">
        <ProductImage source={product} color={color} />
        <div className="product-description">
          <h1>{name}</h1>
          <h3>from {company}</h3>
          <p>{description}</p>
        </div>
      </div>
      <footer className="product-footer">
        <div>
          <p className="legend">CPN</p>
          <p className="value">{cpn}</p>
        </div>
        <div>
          <p className="legend">EID</p>
          <p className="value">{eid}</p>
        </div>
        <div>
          <p className="legend">Revision</p>
          <p className="value">{revision}</p>
        </div>
        <div>
          <p className="legend">Created</p>
          <p className="value">{formatDate(created)}</p>
        </div>
        <div>
          <p className="legend">Created By</p>
          <p className="value">{createdBy}</p>
        </div>
        <div>
          <p className="legend">Modified</p>
          <p className="value">{formatDate(modified)}</p>
        </div>
      </footer>
    </section>
  )
}

export default ProductCard;
