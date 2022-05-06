const easyModal = {
  open(text, okClose = false) {
    body = document.body;

    easyModalHTML = `
    <div id="easyModal">
      <div class="modal">
        <div class="content">${text}</div>
        ${okClose && `
          <div class="btn">
            <button id="okClose" type="button" class="info">Ok</button>
          </div>
        `}
        <i class="close bi bi-x-lg"><i class="gg-close"></i></i>
      </div>
    </div>
    `
    body.insertAdjacentHTML('beforeend', easyModalHTML)
    easyModalSeletor = document.querySelector('#easyModal')
    btnClose = easyModalSeletor.querySelector('.close')
    btnOkClose = easyModalSeletor.querySelector('#okClose')
    setTimeout(() => {
      easyModalSeletor.classList.add('show')
    }, 50);

    btnClose.addEventListener('click', () => {
      this.close(0)
    })
    btnOkClose.addEventListener('click', () => {
      this.close(0)
    })
  }, 
  close() {
    easyModalSeletor = document.querySelector('#easyModal')
    easyModalSeletor.classList.remove('show')
    setTimeout(() => {
      easyModalSeletor.remove()
    }, 150);
  }


}