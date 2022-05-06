let loading = {
  start(e, options) {
    var bg = (options) ? options.style.bg : '',
        spinner = (options) ? options.style.spinner : ''

    e.insertAdjacentHTML('beforeend',`
      <div id="loading" style="${bg}">
      <svg class="spinner" viewBox="0 0 50 50" style="${spinner}">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
      </svg>
      </div>
    `);
  },
  stop() {
    if(document.querySelector("#loading")){
      var L = document.querySelector("#loading");
      L.style.transition='ease 0.2s';
      L.style.opacity='0';
      setTimeout(() => {if(document.querySelector("#loading")){document.querySelector("#loading").remove()}}, 200);
    }
  }, 
  auto(selector, options) {
    var time = (options) ? options.time : 500
    loading.start(selector, options)
    setTimeout(() => {
      loading.stop();
    }, time);
  }
}
