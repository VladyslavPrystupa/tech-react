import axios from 'axios';
import { LIMIT_USERS } from './utils';

axios.defaults.baseURL = 'https://6442bb9576540ce2259439d3.mockapi.io/users';

export const fetchUsers = async page => {
  try {
    const { data } = await axios.get('', {
      params: {
        page,
        limit: LIMIT_USERS,
      },
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const putNewFollowers = async (user, followers) => {
  try {
    const { data } = await axios.put(`/${user}`, {
      followers,
    });

    return data;
  } catch (error) {
    console.error(error.message);
  }
};
