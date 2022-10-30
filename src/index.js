import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchImages } from './js/fetchImagesApi';
import cards from './templates/cards.hbs';

import './css/style.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('input');
const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const searchBtn = document.querySelector('button[type="submit"]');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a');
let page = 1;
let searchQuery = '';

searchForm.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);
loadMoreBtn.style.display = 'none';

function onSubmit(e) {
  e.preventDefault();
  clearGallery();
  searchQuery = input.value.trim();
  if (searchQuery) {
    fetchImages(searchQuery, page)
      .then(data => {
        if (data.hits.length === 0) {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        } else {
          renderCards(data.hits);
          Notify.success(`Hooray! We found ${data.totalHits} images.`);
          loadMoreBtn.style.display = 'block';
          lightbox.refresh();
        }
      })
      .catch(function (error) {
        console.log('Error', error.message);
      });
  } else if (searchQuery === '') {
    Notify.failure('Oops, please enter data in the search field');
  }
}

function onLoadMore() {
  page += 1;
  searchQuery = input.value.trim();
  console.log(searchQuery);
  fetchImages(searchQuery, page).then(data => {
    renderCards(data.hits);
    lightbox.refresh();
    const totalPage = data.totalHits / 40;
    if (totalPage <= page) {
      loadMoreBtn.style.display = 'none';
      Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
    }
  });
}

function renderCards(images) {
  gallery.insertAdjacentElement('beforebegin', cards(images));
}
function clearGallery() {
  page = 1;
  loadMoreBtn.style.display = 'none';
  gallery.innerHTML = '';
}
