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

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						          : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})