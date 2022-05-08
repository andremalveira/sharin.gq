const get = (name) => document.querySelector(`[data-name='${name}']`)

const form = document.querySelector('form.generateurl')
const params = new Object();

const GenerateUrl = () => {
  let inputs = {
    u: get('form_u').value ?? null,
    t: get('form_t').value ?? null,
    d: get('form_d').value ?? null,
    i: get('form_i').value ?? null,
    sn: get('form_sn').value ?? null
  }

  Object.keys(inputs).filter(e => inputs[e] ? params[e] = inputs[e] : null)

  if(params.u) {
    if(!params.u.includes('https')){
      console.log('https not found!')
      addRequired({httpsRequire: true})
    } else {
      var queryString = Object.keys(params).map((key) => {
  
        if(params[key] && (key == 't' || key == 'd' || key == 'sn')){
          return key + '=' + params[key].replaceAll(' ' , '%20')
        }
  
        return params[key] && key + '=' + params[key]
      }).join('&');
    
      document.querySelector('form.generateurl')
  
      document.querySelector('#result').classList.add('show');
      document.querySelector('#result .generate-url').innerHTML= `
        <textarea data-name="generated-url">https://sharin.gq?${queryString}</textarea>
      `
    }


  } else {
    addRequired()
  } 
}


form.addEventListener('submit', e => {
  e.preventDefault()
  GenerateUrl()
})


get('form_u').addEventListener('change', removeRequired)

function removeRequired(e){
  e.target.classList.remove('required')
  get('form_u').removeEventListener('input', removeRequired)
  document.querySelector('#urlInput .input-error').innerHTML = ''

}
function addRequired(props){
  let httpsRequire = props && props.httpsRequire

  get('form_u').classList.add('required')
  get('form_u').addEventListener('input', removeRequired)

  if(httpsRequire) {
    document.querySelector('#urlInput .input-error').innerHTML = '<span> https is Required!</span>'
  }
}


copyUrl.addEventListener('click', () => {
  let textarea = document.querySelector('#result .generate-url textarea')
  astronaut.copy(textarea.value, document.querySelector('#result'))
})


