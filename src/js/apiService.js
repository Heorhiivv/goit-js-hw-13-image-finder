import galleryCard from './templates/galleryCard.hbs';
import '@pnotify/core/dist/BrightTheme.css';
import { error, Stack } from "@pnotify/core";

const stackBottomModal = new Stack({
  dir1: "up", // With a dir1 of "up", the stacks will start appearing at the bottom.
  // Without a `dir2`, this stack will be horizontally centered, since the `dir1` axis is vertical.
  firstpos1: 20, // The notices will appear 25 pixels from the bottom of the context.
  // Without a `spacing1`, this stack's notices will be placed 25 pixels apart.
  push: "top", // Each new notice will appear at the bottom of the screen, which is where the "top" of the stack is. Other notices will be pushed up.
  modal: true, // When a notice appears in this stack, a modal overlay will be created.
  overlayClose: true, // When the user clicks on the overlay, all notices in this stack will be closed.
  context: document.querySelector(".gallery") // The notices will be placed in the "page-container" element.
});

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
      error({
        title: "Alert",
        text: "You should write a correct category!",
        width: "auto",
        type: ["error"],
        stack: stackBottomModal,
      });
      refs.loadBtn.classList.add('is-hidden')
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
        top: document.documentElement.scrollHeight - 1120,
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
