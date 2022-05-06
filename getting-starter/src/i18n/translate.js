const translate = {
  "pt-br" : {
    slogan: "Link de visualização personalizado.",
    text_url_example: "Exemplo da URL",
    text_about: "Sobre",
    text_create_by: "Desenvolvido por",
    title_params_u: "parâmetro url",
    title_params_t: "parâmetro title",
    title_params_e: "Sinal de & para concatenar com um próximo parâmetro",
    table_desc_u: "URL/Link que deseja compartilhar",
    table_desc_t: "Título da pré visualização",
    table_desc_d: "Descrição da pré visualização",
    table_desc_i: "URL/Link da imagem da pré visualização",
  }, 
  "en-us" : {
    slogan: "Custom preview link to share.",
    text_url_example: "URL Example",
    text_about: "About",
    text_create_by: "Developed by",
    title_params_u: "url parameter",
    title_params_t: "title parameter",
    title_params_e: "& sign to concatenate with a next parameter",
    table_desc_u: "URL/Link you want to share",
    table_desc_t: "Preview title",
    table_desc_d: "Description of preview",
    table_desc_i: "Preview Image URL/Link",
  }
}





let text = translate['en-us']

let langls = localStorage.getItem('lang')
if(langls) {
  text = translate[langls]
} 

const changeLang = (lang) => {
  localStorage.setItem('lang', lang)
  window.location.reload()
}

//Set Translation
document.querySelectorAll('[data-text]').forEach(e => {
  e.innerHTML = text[e.dataset.text]
})
document.querySelectorAll('[data-title]').forEach(e => {
  e.setAttribute('title', text[e.dataset.title])
})


