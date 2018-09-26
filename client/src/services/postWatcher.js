import axios from 'axios';

const postWatcher = props =>
  axios.post(`${process.env.IP}/api/auction/product`, {
    params: props,
  });

export default postWatcher;
