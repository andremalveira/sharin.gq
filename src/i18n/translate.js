const translate = {
  "pt-br" : {
    slogan: "Link de visualização personalizado.",
    text_url_example: "Exemplo da URL",
    title_params_u: "parâmetro url",
    title_params_t: "parâmetro title",
    title_params_e: "Sinal de & para concatenar com um próximo parâmetro",
  }, 
  "en-us" : {
    slogan: "Custom preview link.",
    text_url_example: "URL Example",
    title_params_u: "url parameter",
    title_params_t: "title parameter",
    title_params_e: "& sign to concatenate with a next parameter",
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



