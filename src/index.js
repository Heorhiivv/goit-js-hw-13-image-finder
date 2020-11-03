import './styles.css';
import './js/apiService.js'
import refs from './js/apiService'

refs.formArea.addEventListener('submit', refs.startPageFunction);
refs.searchBtn.addEventListener('click', refs.startPageFunction);
refs.loadBtn.addEventListener('click', refs.handleLoadMore);
refs.loadBtn.classList.add('is-hidden');