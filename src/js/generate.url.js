const get = (name) => document.querySelector(`[data-name='${name}']`)

const generated_url = get('generated-url')

generateButton.addEventListener('click', () => {
  let params = {
    u: get('url').value,
    t: get('title').value,
    d: get('description').value,
    i: get('image').value
  }

  if(params.u) {
    var queryString = Object.keys(params).map((key) => {
      //params[key] && encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
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

get('url').addEventListener('focus', removeRequired)
function removeRequired(e){
  e.target.classList.remove('required')
  get('url').removeEventListener('input', removeRequired)
}


copyUrl.addEventListener('click', () => {
  let textarea = document.querySelector('#result .generate-url textarea')

  astronaut.copy(textarea.value)
})