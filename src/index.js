import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.get('/users').then(res => {
  console.log(res.data);
});
