window.addEventListener('scroll', function() {
    let logos = document.getElementsByClassName('logosdelluvia');
    for (let i = 0; i < logos.length; i++) {
      if (logos[i].classList.contains('hidden')) {
        logos[i].classList.remove('hidden');
        logos[i].style.left = Math.random() * window.innerWidth + 'px';
        logos[i].style.top = Math.random() * window.innerHeight + 'px';
      }
    }
  });
  

  

