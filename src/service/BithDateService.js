import axios from 'axios';
export const getBirthDate = birthDate => {
  return axios({
    method: 'get',
    url: `https://api.psy-calc.online/api/notnumero/${birthDate.value}`,
  })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.error('Error fetching birth date data:', error);
      throw error; // Rethrow the error so it's propagated to the caller
    });
};
