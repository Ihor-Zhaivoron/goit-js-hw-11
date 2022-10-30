// const axios = require('axios').default;
import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api';
const KEY = '30885562 - a2eefab65b39820f24403263b';
// const otherParams = {
//   KEY:'30885562 - a2eefab65b39820f24403263b',
//   q: searchQuery,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   per_page,
//   page,
// };

export async function fetchImages(searchQuery, page) {
  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  console.log(response.data);
  return response.data;
}
