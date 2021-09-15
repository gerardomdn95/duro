import React, { useEffect, useState } from 'react';
import obtainProductDetails from '../../utils/api';
import MainContainer from './MainContainer';

const MainContainerHoc = () => {

  const [data, setData] = useState(
    {
      "name": "Amazing Product",
      "company": "Amazing Company",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "cpn": "89-00001",
      "eid": "122-00987",
      "revision": 3,
      "created": "2018-03-12T00:00:00.000+0000",
      "createdBy": "Michael Corr",
      "modified": "2018-03-14T00:00:00.000+0000",
      "related": [
        {
          "eid": "56037-XDER",
          "country": {
            "name": "Brasil",
            "code": "br"
          },
          "created": "2020-05-28",
          "status": "Approved",
          "company": {
            "name": "Intertico",
            "profile": "Web, UI/UX Design"
          }
        },
        {
          "eid": "05822-FXSP",
          "country": {
            "name": "Belarus",
            "code": "by"
          },
          "created": "2020-02-04",
          "status": "In Progress",
          "company": {
            "name": "Agoda",
            "profile": "Houses & Hotels"
          }
        },
        {
          "eid": "00347-BCLQ",
          "country": {
            "name": "Philipines",
            "code": "ph"
          },
          "created": "2020-01-09",
          "status": "Success",
          "company": {
            "name": "RedGee",
            "profile": "Transportation"
          }
        },
        {
          "eid": "4472-QREX",
          "country": {
            "name": "Argentina",
            "code": "ar"
          },
          "created": "2020-03-09",
          "status": "Success",
          "company": {
            "name": "The Hill",
            "profile": "Software & Hardware"
          }
        }
      ]
    }
  );

  // useEffect(() => {
  //   setData(obtainProductDetails());
  // }, [])

  return <MainContainer data={data} />
}

export default MainContainerHoc;
