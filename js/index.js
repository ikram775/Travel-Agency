 AOS.init();

    const scrollBtn = document.querySelector('.scroll-top');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';

      if (window.scrollY > 50) {
        navbar.classList.add('sticky');
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.remove('sticky');
        navbar.classList.add('transparent');
      }
    });


    //auto slider index page

  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 3000, // 3 seconds
      ride: 'carousel'
    });
  }

