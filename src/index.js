import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchApi } from './js/fetchImagesApi';
import cards from './templates/cards.hbs';
// import '..css/style.css';
import './css/style.css';

const input = document.querySelector('input');
const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
}
