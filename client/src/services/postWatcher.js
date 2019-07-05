import axios from 'axios';

const postWatcher = props =>
  axios.post(`${process.env.HOST}/api/auction/product`, {
    params: props,
  });

export default postWatcher;
