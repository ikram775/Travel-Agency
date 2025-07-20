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

  //email js code to send email
 
// function sendMail() {
//   const templateParams = {
//     name: document.getElementById("#name").value,
//     email: document.getElementById("#email").value,
//     subject: document.getElementById("#Subject").value,
//     message: document.getElementById("#message").value
//   }

//   emailjs.send("service_jm8c7q4", "template_v2cdolo", templateParams).then((
//   ) => {
//     alert("email sent").catch(()=>alert("Email not send"));
//   });
// }
