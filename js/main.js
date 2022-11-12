const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
        
        
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    } )
}

if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    } )
}

const navLink =document.querySelectorAll ('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============ SWIPER PROJECTS ============*/ 
let swiperProjects = new Swiper(".projects__container", {
    loop : true,
    spaceBetween :24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        }
      },
  });

    /*----SWIPER TESTIMONIAL----*/   
    let swiperTestimonial = new Swiper(".testimonial__container", {
        grabCursor : true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    /*========== EMAILJS ==========*/
    const contactForm = document.getElementById('contact-form'),
          contactName = document.getElementById('contact-name'),
          contactEmail = document.getElementById('contact-email'),
          contactProject = document.getElementById('contact-project'),
          contactMessage = document.getElementById('contact-message')
