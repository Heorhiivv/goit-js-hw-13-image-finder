import './styles.css';
import './js/apiService.js'
import refs from './js/apiService'
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/src/styles/main.scss';

refs.formArea.addEventListener('submit', refs.startPageFunction);
refs.searchBtn.addEventListener('click', refs.startPageFunction);
refs.loadBtn.addEventListener('click', refs.handleLoadMore);
refs.loadBtn.classList.add('is-hidden');
refs.gallery.addEventListener('click', (e) => {
  if (!refs.formArea.query.value) {
    return
  };
  basicLightbox
  .create(`<img width="1400" height="900" src="${e.target.dataset['modal']}">`)
  .show()
})
