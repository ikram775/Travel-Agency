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

//SendMail Script

  function sendMail() {
    const sendBtn = document.querySelector("button[onclick='sendMail()']");
    sendBtn.disabled = true;
    sendBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Sending...`;

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_jm8c7q4", "template_v2cdolo", templateParams)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for contacting us. We’ll get back to you soon.',
          confirmButtonColor: '#3085d6'
        });
        document.getElementById("contact-form").reset();
        sendBtn.disabled = false;
        sendBtn.innerHTML = `Send Message`;
      }, (error) => {
        console.error("FAILED...", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send your message. Please try again later.',
          confirmButtonColor: '#d33'
        });
        sendBtn.disabled = false;
        sendBtn.innerHTML = `Send Message`;
      });
  }
