import axios from 'axios';

export default {
  getPalette: async (username) => {
    let res = await axios.get(`/api/photo/`+username);
    return res.data || [];
  }
}