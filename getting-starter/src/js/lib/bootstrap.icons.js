const style = document.createElement('style')
style.id="icons.svg.js"
style.textContent = `
  /*icons.svg.js*/
  i[icon]{
    display:flex;
    align-items:center;
    justify-content:center;
  }
`
document.head.append(style)

const svg = (element, path) => {
  let elementById = document.querySelector('#'+element)
  let svghtml = (element) => `<svg xmlns="http://www.w3.org/2000/svg" width="${element.attributes?.size?.value ?? 16}" height="${element.attributes?.size?.value ?? 16}" fill="${element.attributes?.color?.value ?? 'currentColor'}" viewBox="0 0 16 16">${path}</svg>`

  if(elementById) {
    elementById.innerHTML = svghtml(elementById)
  } else {
    let elements = document.querySelectorAll('.'+element)
    elements.forEach(e => {
      e.innerHTML = svghtml(e)
    });
  }
  if(elementById && elementById.attributes?.href){elementById.addEventListener('click', () => window.open(elementById.attributes?.href?.value))}
}

const icon = {
  "IconTranslate": '<path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/><path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>',
  "LockFill": ' <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>',
  "CloudFill": '<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>'
}

svg('IconTranslate', icon.IconTranslate)
svg('LockFill', icon.LockFill)
svg('CloudFill', icon.CloudFill)