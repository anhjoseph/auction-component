import axios from 'axios';

const postBid = props =>
  axios.post(`${process.env.IP}/api/auction/bid`, {
    id: props.id,
    bidInput: props.bidInput,
  });

export default postBid;
