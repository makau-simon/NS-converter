if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(registration => {
  }).catch(err => {
    alert(err);
  })
}else{
  alert('Installation of this app is not supported by your browser!')
}