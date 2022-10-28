const axios = require('axios').default;

const BASE_URL = 'https://pixabay.com/api';
const KEY = '30885562 - a2eefab65b39820f24403263b';

export async function fetchImages() {
  const response = await axios(`${BASE_URL}?key=${KEY}&;.....`);

  console.log(response.data);
  return response.data;
}
