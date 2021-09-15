import React, { useEffect } from 'react';
import MainContainer from './MainContainer';
import obtainProductDetails from '../../utils/api';
import { connect } from 'react-redux';

const MainContainerHoc = ({data, AppLoad}) => {

  useEffect(() => AppLoad(), [AppLoad])

  return <MainContainer data={data} />
}

const mapStateToProps = state => ({
  data: {
    name: state.name,
    company: state.company,
    description: state.description,
    cpn: state.cpn,
    eid: state.eid,
    revision: state.revision,
    created: state.created,
    createdBy: state.createdBy,
    modified: state.modified,
    related: state.related
  }
});

const mapDispatchToProps = dispatch => ({
  AppLoad() {
    obtainProductDetails()
      .then(data => {
        dispatch({
          type: 'APP_LOAD',
          data
        })
      })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainerHoc);

