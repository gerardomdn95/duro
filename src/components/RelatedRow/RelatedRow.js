import React from 'react';
import './relatedRow.scss';
import StatusChip from '../StatusChip';

const RelatedRow = ({ eid, name, created, status, company }) => {
  const countryCode = name.code.toUpperCase()
  return (
    <tr className="row-element">
      <td>
        <div className="row">
          <input type="checkbox" />
          <p>{eid}</p>
        </div>
      </td>
      <td>
        <div className="column">
          <p>{name.name}</p>
          <p className="secondary">Code: {countryCode}</p>
        </div>
      </td>
      <td>
        <p className="date">{created}</p>
      </td>
      <td>
        <div className="column">
          <p>{company.name}</p>
          <p className="secondary">{company.profile}</p>
        </div>
      </td>
      <td>
        <StatusChip status={status} />
      </td>
      <td>
        <button>A</button>
        <button>B</button>
        <button>C</button>
      </td>
    </tr>
  )
}

export default RelatedRow
