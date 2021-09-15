import React from 'react';
import './relatedRow.scss'

const RelatedRow = ({eid, name, created, status, company}) => {
  return (
    <>
      <hr />
      <section className="row-element">
        <input type="checkbox" />
        <p>{eid}</p>
        <p>{name.name}</p>
        <p>{created}</p>
        <p>{company.name}</p>
        <span>{status}</span>
        <button>Action</button>
      </section>
    </>
  )
}

export default RelatedRow
