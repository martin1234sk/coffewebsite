
    // PAGE LOADING

    const aboutSection = document.getElementById('about-section')
    const aboutImgContent = document.querySelector('.about-img-contetnt')
    const aboutSectionText = document.querySelector('.about-section-text-content')

    loadAboutSection = () =>{
        if(aboutSection.getBoundingClientRect().top < window.innerHeight / 1.2){
            moveLeft(aboutImgContent, 0)
            moveRight(aboutSectionText, 0)
            fadeIn(aboutImgContent, 1)
            fadeIn(aboutSectionText, 1)

            window.removeEventListener('scroll', loadAboutSection)
        }

    }

    window.addEventListener('scroll', loadAboutSection)

    const menuSection = document.getElementById('menu-section')
    const menuSectionHeader = document.querySelector('.menu-section-header')
    const menuWrapper = document.querySelector('.menu-wrapper')
    const hoursWrapper = document.querySelector('.opening-hours-wrapper')

    loadMenuSection = () =>{
        if(menuSection.getBoundingClientRect().top < window.innerHeight / 1.2){
            moveTop(menuSectionHeader, 0)
            moveLeft(menuWrapper, 0)
            moveRight(hoursWrapper, 0)
            fadeIn(menuSectionHeader, 1)
            fadeIn(menuWrapper, 1)
            fadeIn(hoursWrapper, 1)

            window.removeEventListener('scroll', loadMenuSection)
        }
    }

    window.addEventListener('scroll', loadMenuSection)

    const brandSection = document.getElementById('brand-section')
    const brandHeading = document.querySelector('.brands-heading')
    const brandsImgs = document.querySelector('.brand-logos-wrapper')

    loadBrandSection = ()=>{
        if(brandSection.getBoundingClientRect().top < window.innerHeight / 1.2){
            moveTop(brandHeading, 0)
            moveTop(brandsImgs, 0)
            fadeIn(brandHeading, 1)
            fadeIn(brandsImgs, 1)
            window.removeEventListener('scroll', loadBrandSection)
        }
    }

    window.addEventListener('scroll', loadBrandSection)

    const reviewSection = document.getElementById('review-section')
    const reviewsHeader = document.querySelector('.reviews-header')
    const reviewsSlider = document.querySelector('.reviews-slider')

    loadReviewSection = ()=>{
        if(reviewSection.getBoundingClientRect().top < window.innerHeight / 1.2){
            moveTop(reviewsHeader, 0)
            moveTop(reviewsSlider, 0)
            fadeIn(reviewsHeader, 1)
            fadeIn(reviewsSlider, 1)
            window.removeEventListener('scroll', loadReviewSection)
        }
    }

    window.addEventListener('scroll', loadReviewSection)

    const newsletterSection = document.getElementById('newsletter-section')
    const newsletterHeading = document.querySelector('.newsletter-heading')
    const newsletterParagraph = document.querySelector('.newsletter-paragraph')
    const newsletterForm = document.querySelector('.newsletter-form')

    loadNewsletter = ()=>{
        if(newsletterSection.getBoundingClientRect().top < window.innerHeight / 1.2){
            moveTop(newsletterHeading, 0)
            moveTop(newsletterParagraph, 0)
            moveTop(newsletterForm, 0)
            fadeIn(newsletterHeading, 1)
            fadeIn(newsletterParagraph, 1)
            fadeIn(newsletterForm, 1)
            window.removeEventListener('scroll', loadNewsletter)
        }
    }

    window.addEventListener('scroll', loadNewsletter)

    const footer = document.getElementById('main-footer')
    const footerCols = document.querySelectorAll('.footer-col')

    loadFooter = ()=>{
        if(footer.getBoundingClientRect().top < window.innerHeight / 1.2){
            footerCols.forEach(col=>{
                moveTop(col, 0)
                fadeIn(col, 1)
                window.removeEventListener('scroll', loadFooter)
            })
        }
    }

    window.addEventListener('scroll', loadFooter)

    const arrowUp = document.querySelector('.scroll-up-btn')

    function toggleArrow() {
        if(window.scrollY > 500){
            fadeIn(arrowUp, 1)
        } else if(window.scrollY < 500){
            fadeOut(arrowUp, 0)
        }
    }

    window.addEventListener('scroll', ()=>{
        toggleArrow()
    })

        const mainHeader = document.getElementById('main-header')
        const navLinks = document.querySelectorAll('.menu-link')
        const logo = document.querySelector('.nav-logo')
        const phoneNum = document.querySelector('.phone-number')
        const navToggle = document.getElementById('nav-toggle')
        const closeToggle = document.getElementById('close-toggle')
        const responsiveNav = document.getElementById('responsive-nav')
        const resposniveLinks = document.querySelectorAll('.responsive-menu-link')
        const homeSection = document.getElementById('home-section')

    //navbar object

    const navbarObj = {
        fixNavbar: function () {
            if(window.scrollY>50){
                mainHeader.style.backgroundColor = '#fff'
                logo.style.color = '#333'
                phoneNum.style.color = '#333'
                navToggle.style.color = '#333'
                navLinks.forEach(link=>{
                    link.style.color = '#333'
                })
            } else if(window.scrollY<50){
                mainHeader.style.background = 'transparent'
                logo.style.color = '#fff'
                phoneNum.style.color = '#fff'
                navToggle.style.color = '#fff'
                navLinks.forEach(link=>{
                    link.style.color = '#fff'
                })
            }
        },

        navLinksActivity: function (activeLink) {
            navLinks.forEach(link=>{
                link.classList.remove('active-menu-link')
            })
            activeLink.classList.add('active-menu-link')
        },

        showResponsiveNav: function () {
            responsiveNav.style.width = '30%'
        },

        hideResposniveNav: function () {
            responsiveNav.style.width = 0
        },

        responsiveLinksActivity: function(activeLink){
            resposniveLinks.forEach(link=>{
                link.classList.remove('responsive-link-active')
            })
            activeLink.classList.add('responsive-link-active')
        }
    }

   class Slider {
        constructor( slidesClass, sliderControlsClass, responsiveControls){
            this.slides = document.querySelectorAll(slidesClass)
            this.sliderControls = document.querySelectorAll(sliderControlsClass)
            this.responsiveControls = document.querySelectorAll(responsiveControls)
        }

        showSliderControls(){
            this.sliderControls.forEach(control=>{
                fadeIn(control, 1)
            })
        }

        hideSliderControls(){
            this.sliderControls.forEach(control=>{
                fadeOut(control, 0)
            })
        }

        index = 0

        slideNext(){
            this.slides[this.index].style.animation = 'next1 .5s ease-in forwards'
            if(this.index >= this.slides.length - 1){
                this.index = 0
            } else{
                this.index++
            }

            this.slides[this.index].style.animation = 'next2 .5s ease-in forwards'
        }

        slidePrev(){
            this.slides[this.index].style.animation = 'prev1 .5s ease-in forwards'
            if(this.index == 0){
                this.index = this.slides.length - 1
            } else{
                this.index--
            }
            this.slides[this.index].style.animation = 'prev2 .5s ease-in forwards'
        }

        switchImages(clickedControl){
            this.responsiveControls.forEach(control =>{
                control.classList.remove('active-control')
            })

            clickedControl.classList.add('active-control')

            let nextSlideIndex = parseFloat(clickedControl.dataset.index)

            if(nextSlideIndex > this.index){
                this.slides[this.index].style.animation = 'next1 .5s ease-in forwards'
                this.index = nextSlideIndex
                this.slides[this.index].style.animation = 'next2 .5s ease-in forwards'
            } else if(nextSlideIndex == this.index){
                return
            }else{
                this.slides[this.index].style.animation = 'prev1 .5s ease-in forwards'
                this.index = nextSlideIndex
                this.slides[this.index].style.animation = 'prev2 .5s ease-in forwards'
            }
        }
   }

   const homeSliderObj = new Slider('.home-section-slide', '.slider-control', '.home-slider-responsive-control')

   const reviewsSliderObj = new Slider('.reviews-slide', '.review-slider-arrow', '.review-slider-responsive-control')

   function checkNewsletterInput() {
        const newsletterInput = document.querySelector('.newsletter-input')
        const errorAlert = document.querySelector('.newsletter-error-alert')
        const messageSentAlert = document.querySelector('.newsletter-message-sent-alert')
        let pattern = /[@ .]/

        if(newsletterInput.value.trim() == '' ){
            errorAlert.innerHTML = 'Zadajte mail'
            show(errorAlert)
            return
        }
        if(!pattern.test(newsletterInput.value)){
            errorAlert.innerHTML = 'Zadajte platný mail'
            show(errorAlert)
            return
        } 
        if(!errorAlert.classList.contains('hide')){
            hide(errorAlert)
        }

        fadeIn(messageSentAlert, 1)

        setTimeout(()=>{
            fadeOut(messageSentAlert, 0)
        }, 2500)
   }

   // EVENTS


 window.addEventListener('scroll', ()=>{
    navbarObj.fixNavbar()
})


navLinks.forEach(link=>{
    link.addEventListener('click', (event)=>{
        navbarObj.navLinksActivity(event.target)
    })
})

resposniveLinks.forEach(link=>{
    link.addEventListener('click', (event)=>{
        navbarObj.responsiveLinksActivity(event.target)
    })
})


navToggle.addEventListener('click', (event)=>{
    navbarObj.showResponsiveNav()
    dissableBrowserScrolling()
})

closeToggle.addEventListener('click', ()=>{
    navbarObj.hideResposniveNav()
    enableBrowserScrolling()
}) 

const homeSectionSlider = document.querySelector('.home-section-slider')

homeSectionSlider.addEventListener('mouseenter', ()=>{
    homeSliderObj.showSliderControls()
})

homeSectionSlider.addEventListener('mouseleave', ()=>{
    homeSliderObj.hideSliderControls()
})

const leftSliderControl = document.querySelectorAll('.left-slider-control')

leftSliderControl.forEach(control=>{
    control.addEventListener('click', ()=>{
        homeSliderObj.slidePrev()
    })
})

const rightSliderControl = document.querySelectorAll('.right-slider-control')

rightSliderControl.forEach(control=>{
    control.addEventListener('click', ()=>{
        homeSliderObj.slideNext()
    })
})

const homeSliderResponsiveControls = document.querySelectorAll('.home-slider-responsive-control')

homeSliderResponsiveControls.forEach(control=>{
    control.addEventListener('click', (event)=>{
        homeSliderObj.switchImages(event.target)
    })
})

reviewsSlider.addEventListener('mouseenter', ()=>{
    reviewsSliderObj.showSliderControls()
})

reviewsSlider.addEventListener('mouseleave', ()=>{
    reviewsSliderObj.hideSliderControls()
})

const reviewSliderLeftArrow = document.querySelectorAll('.review-slider-arrow-left')

reviewSliderLeftArrow.forEach(arrow=>{
    arrow.addEventListener('click', (event)=>{
        event.preventDefault()
        reviewsSliderObj.slidePrev()
    })
})


const reviewsSliderRightArrow = document.querySelectorAll('.review-slider-arrow-right')

reviewsSliderRightArrow.forEach(arrow=>{
    arrow.addEventListener('click', (event)=>{
        event.preventDefault()
        reviewsSliderObj.slideNext()
    })
})

const responsiveSliderControls = document.querySelectorAll('.review-slider-responsive-control')

responsiveSliderControls.forEach(control=>{
    control.addEventListener('click', (event)=>{
        reviewsSliderObj.switchImages(event.target)
    })
})

const newsletterBtn = document.getElementById('sub-btn')

newsletterBtn.addEventListener('click', (event)=>{
     event.preventDefault()
     checkNewsletterInput()
})

