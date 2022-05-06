astronaut.table({
  selector: '#params-table',
  thead:['Parameter -> width:6rem','Alias -> width:5rem', 'Meta -> width:15rem', 'Description'],
  tbody:[
    ['url -> attr:attr', 'u -> attr:attr', 'og / twitter:url', `${text.table_desc_u} -> attr:text`],
    ['title -> attr:attr', 't -> attr:attr', 'og / twitter:title', `${text.table_desc_t} -> attr:text`],
    ['description -> attr:attr', 'd -> attr:attr', 'og / twitter:description', `${text.table_desc_d} -> attr:text`],
    ['image -> attr:attr', 'i -> attr:attr', 'og / twitter:image', `${text.table_desc_i} -> attr:text`],
  ],
  style: {
    borderInside: '1px #373e47 false true'
  }
})


//@warn: Tippys
const dtippy = {
  animation: 'shift-away',
}
tippy('#title_params_u', {content: text.title_params_u,...dtippy});
tippy('#title_params_e', {content: text.title_params_e,...dtippy});
tippy('#title_params_t', {content: text.title_params_t,...dtippy});

tippy('#IconTranslate', {
  trigger: 'click',
  interactive: true,
  content: `
    <div id="translate-options" >
      <span onclick="changeLang('en-us')">English</span>
      <span onclick="changeLang('pt-br')">Português</span>
    </div>
  `,
  allowHTML: true,
});


document.querySelector('[data-modal="about"]').addEventListener('click', () => {

  easyModal.open(`
  
  `, true)
})