window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.dialog').forEach(dialog => {
      if(document.querySelectorAll('.fslightbox-absoluted').length == 0) {
        dialog.classList.add('hidden')
      }
    })
  }
})

document.querySelectorAll('.article').forEach(article => {
  article.querySelector('article').addEventListener('click', () => {
    article.querySelector('.dialog').classList.remove('hidden')
  })
  article.querySelector('button').addEventListener('click', () => {
    article.querySelector('.dialog').classList.add('hidden')
  })
})

refreshFsLightbox(); // Vuelve a escanear el DOM