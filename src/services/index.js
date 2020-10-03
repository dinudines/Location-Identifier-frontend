import axios from 'axios';
const API_URI = "http://localhost:8000/api/search";

export const SEARCH = (value) => {
  return axios
    .post(`${API_URI}`, {
        placeName: value
    })
    .then(response => {
      return response.data;
   })
   .catch(e => {
     return false;
   });
};