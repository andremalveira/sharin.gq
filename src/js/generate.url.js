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
      return params[key] && encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');
  
  
    generated_url.innerHTML = `https://sharin.gq?${queryString}`
  } else {
    get('url').classList.add('required')
    get('url').addEventListener('input')
  }

})


function removeRequired(){

}
