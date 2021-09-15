import React from 'react';
import './mainContainer.scss';

const MainContainer = ({ data }) => {
  const { company, cpn, created, createdBy, description, eid, modified, name, related, revision } = data;
  return (
    <main>
      <h1>{company}</h1>
    </main>
  )
}

export default MainContainer;
