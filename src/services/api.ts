import axios from 'axios';

const { REACT_APP_API_URL, REACT_APP_TOKEN } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

instance.defaults.headers.common.authorization = `Bearer ${REACT_APP_TOKEN}`;

export const UserAPI = {
  fetchJobs: async () => {
    const response = await instance.get(`/`);

    return response.data;
  },
};
