const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        navBar = document.getElementById('navbar')
        
        
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

navMenu.addEventListener('blur' ,(e) => {
  console.log(e.target);
    // navMenu.classList.remove('show-menu')
    

})

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

    const sendEmail = (e) =>{
      e.preventDefault()
     
      if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'write all the input fields📩'
      }else{
        emailjs.sendForm('service_w0jzmc5','template_ul65vbf','#contact-form','aIeDzi6kn_U1LF55O')
        .then(() =>{

          contactMessage.classList.add('color-blue')
          contactMessage.textContent = 'Message sent ✅'

          setTimeout( () =>{
            contactMessage.textContent = ''          
          }, 5000)
        })
        .catch(err => {
          contactMessage.classList.add('color-red')

          contactMessage.textContent = err.text;
        })

        //to clear input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''

      }
    }      

    console.log(contactForm);
    
    contactForm.addEventListener('submit', sendEmail)


    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)