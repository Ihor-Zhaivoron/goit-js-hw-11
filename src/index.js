import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { fetchApi } from './js/fetchImagesApi';
import cards from './templates/cards.hbs';

import './css/style.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('input');
const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const searchBtn = document.querySelector('button[type="submit"]');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);
loadMoreBtn.style.display = 'none';

function onSubmit(e) {
  e.preventDefault();
  cleanImages();
  const searchValue = e.target.input.value.trim();

  if (searchValue) {
    const a = 10;
  }
}
