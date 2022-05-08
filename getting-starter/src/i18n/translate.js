const translate = {
  "pt-br" : {
    slogan: "Pré visualização de link personalizado.",
    text_url_example: "Exemplo da URL",
    text_about: "Sobre",
    text_debuggers: "Depuradores de Links",
    text_create_by: "Desenvolvido por",
    title_params_u: "parâmetro url",
    title_params_t: "parâmetro title",
    title_params_e: "Sinal de & para concatenar com um próximo parâmetro",
    table_desc_u: "URL/Link que deseja compartilhar",
    table_desc_t: "Título da pré visualização",
    table_desc_d: "Descrição da pré visualização",
    table_desc_i: "URL/Link da imagem da pré visualização",
    table_desc_sn: "Nome do site ou url",
    about: `
    <p>Em um momento eu precisava compartilhar uma url, mas essa url não tinha metadados em sua página, e como sabemos um bom compartilhamento é quando ela mostra os metadados dessa url, como título, descrição, imagem e nome do site.</p>
    <p>Por isso criei esta ferramenta gratuita na qual você pode adicionar uma url com título, descrição e imagem e compartilhá-la com uma prévia dessas informações.</p>
    `,
    form_t: "Título",
    form_sn: "Nome do Site",
    form_u: "Url",
    form_i: "Url da Imagem",
    form_d: "Descrição",
    text_btn_generate: "Gerar URL"
  }, 
  "en-us" : {
    slogan: "Custom preview link to share.",
    text_url_example: "URL Example",
    text_about: "About",
    text_debuggers: "Links Debuggers",
    text_create_by: "Developed by",
    title_params_u: "url parameter",
    title_params_t: "title parameter",
    title_params_e: "& sign to concatenate with a next parameter",
    table_desc_u: "URL/Link you want to share",
    table_desc_t: "Preview title",
    table_desc_d: "Description of preview",
    table_desc_i: "Preview Image URL/Link",
    table_desc_sn: "Site name or URL name",
    about: `
    <p>At one point I needed to share a url, but this url had no metadata on its page, and as we know a good share is when it shows the metadata of that url, such as a title, description, image and site name.</p>
    <p>Because of that I created this free tool in which you can add a url with title, description and image and share it with a preview of this information.</p>
    `,
    form_t: "Title",
    form_sn: "Site name",
    form_u: "Url",
    form_i: "Image url",
    form_d: "Description",
    text_btn_generate: "Generate URL"
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
document.querySelectorAll('[data-name]').forEach(e => {
  e.setAttribute('placeholder', text[e.dataset.name])
})


