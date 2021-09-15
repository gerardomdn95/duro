import React from 'react';
import ProductCard from '../../components/ProductCard';
import RelatedCard from '../../components/RelatedCard/RelatedCard';
import './mainContainer.scss';

const MainContainer = ({ data }) => {
  const {
    name, company, cpn,
    created, createdBy, description,
    eid, modified, related, revision
  } = data;
  return (
    <main>
      { name && <ProductCard
        company={company}
        cpn={cpn}
        createdBy={createdBy}
        description={description}
        created={created}
        eid={eid}
        modified={modified}
        name={name}
        revision={revision}
      /> }
      {related && <RelatedCard related={related} />}
    </main>
  )
}

export default MainContainer;
