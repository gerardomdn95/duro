import React from 'react';
import RelatedRow from '../RelatedRow';
import './relatedCard.scss';

const RelatedCard = ({ related }) => (
  <section className="related-card">
    <h2 className="related-header">Related Products</h2>
    <table>
      <tr className="header">
        <div className="row">
          <input type="checkbox" />
          <th>EID</th>
        </div>
        <th>Country</th>
        <th>Date & Status</th>
        <th>Company</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
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
    </table>
  </section>
)


export default RelatedCard
