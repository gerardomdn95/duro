import axios from 'axios';

const BASE_URL = 'https://virtserver.swaggerhub.com'

const obtainProductDetails = async () => {
  const ROUTE = '/don-chambitas/duro_code_challenge/1.0.0/view-detail';
  const { data } = await axios.post(BASE_URL + ROUTE);
  return data;
}

export default obtainProductDetails;
