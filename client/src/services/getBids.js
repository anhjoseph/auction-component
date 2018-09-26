import axios from 'axios';

const getBids = props =>
  axios.get(`${process.env.IP}/api/auction/bid`, {
    params: props,
  });

export default getBids;
