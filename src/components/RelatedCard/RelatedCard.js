import React from 'react';
import RelatedRow from '../RelatedRow';
import './relatedCard.scss';

const RelatedCard = ({related}) => {
  return (
    <section className="related-card">
      <h2>Related Products</h2>
      {related
        .map(element =>
          <RelatedRow
            id={element.id}
            eid={element.eid}
            name={element.country}
            created={element.created}
            status={element.status}
            company={element.company}
          />)
      }
    </section>
  )
}

export default RelatedCard
