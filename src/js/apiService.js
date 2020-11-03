import galleryCard from './templates/galleryCard.hbs';

const refs = {
  formArea: document.querySelector('#search-form'),
  searchBtn: document.querySelector('.search_button'),
  gallery: document.querySelector('.gallery'),
  loadBtn: document.querySelector('.load_more'),

  key: '18890613-7ee27e7de9432b6f472efa8f6',
  page: 1,
  

  startPageFunction (e) {
    e.preventDefault();
    refs.gallery.innerHTML = "";
    refs.page = 1;
    if (!refs.formArea.query.value) {
      
      return
    }
    refs.handleSearchImg();
  },

  handleSearchImg () {
  fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${refs.formArea.query.value}&page=${refs.page}&per_page=12&key=${refs.key}`)
    .then(res => res.json())
    .then(data => {
      data.hits.map(el => refs.gallery.insertAdjacentHTML("beforeend", `${galleryCard(el)}`))
    refs.loadBtn.classList.remove('is-hidden')
   
     console.log(document.documentElement.scrollHeight);
    }).then(res => {
      window.scrollTo({
        top: document.documentElement.scrollHeight - 1410,
        behavior: 'smooth',
       })
    })
  },

  handleLoadMore () {
    refs.page += 1;
    refs.handleSearchImg(refs.formArea.query.value)
  },
}

export default refs
