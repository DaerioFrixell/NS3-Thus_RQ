import axios from "axios";


export const baseUrl = 'https://api.spacexdata.com/v3';
export const endpointInfo = '/info';

export const getSomething_Req = async () => {
  const response = await axios.get(baseUrl + endpointInfo);

  return response.data;
};