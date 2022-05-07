const get = (name) => document.querySelector(`[data-name='${name}']`)

const generated_url = get('generated-url')

generateButton.addEventListener('click', () => {
  let params = {
    u: get('form_u').value,
    t: get('form_t').value,
    d: get('form_d').value,
    i: get('form_i').value,
    sn: get('form_sn').value
  }

  if(params.u) {
    var queryString = Object.keys(params).map((key) => {
      //params[key] && encodeURIComponent(key) + '=' + encodeURIComponent(params[key])

      if(params[key] && (key == 't' || key == 'd')){
        return key + '=' + params[key].replaceAll(' ' , '%20')
      }

      return params[key] && key + '=' + params[key]
    }).join('&');
  
    document.querySelector('form.generateurl')

    document.querySelector('#result').classList.add('show');
    document.querySelector('#result .generate-url').innerHTML= `
      <textarea data-name="generated-url">https://sharin.gq?${queryString}</textarea>
    `





  } else {
    get('url').classList.add('required')
    get('url').addEventListener('input', removeRequired)
  }

})

get('form_u').addEventListener('focus', removeRequired)
function removeRequired(e){
  e.target.classList.remove('required')
  get('form_u').removeEventListener('input', removeRequired)
}


copyUrl.addEventListener('click', () => {
  let textarea = document.querySelector('#result .generate-url textarea')
  astronaut.copy(textarea.value, document.querySelector('#result'))
})


