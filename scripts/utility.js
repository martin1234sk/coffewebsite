
    // GENERAL FUNCTIONS    

    // show and hide functions

    function show(element) {
        element.classList.remove('hide')
    }

    function hide(element) {
        element.classList.add('hide')
    }

    // dissable and enable scrolling
    
    function dissableBrowserScrolling() {
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
    }

    function enableBrowserScrolling() {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
    }

    // ANIMATIONS

    // fade in and fade out

    function fadeIn(element, opacity) {
        element.style.opacity = opacity
    }

    function fadeOut(element, opacity) {
        element.style.opacity = opacity
    }

    // move element

    function moveLeft(element, distance) {
        let currentLeft = parseInt(element.style.left) || 0
        let newLeft = currentLeft + distance

        element.style.left = newLeft + "px"
    }

    function moveRight(element, distance) {
        let currentRight = parseInt(element.style.right) || 0
        let newRight = currentRight + distance

        element.style.right = newRight + "px"
    }

    function moveTop(element, distance) {
        let currentTop = parseInt(element.style.top) || 0
        let newTop = currentTop + distance

        element.style.top = newTop + "px"
    }

    function moveBottom(element, distance) {
        let currentBottom = parseInt(element.style.bottom) || 0
        let newBottom = currentBottom + distance

        element.style.bottom = newBottom + "px"
    }

    // scroll left and scroll right

    function scrollRight(element, distance) {
        element.scrollLeft += distance
    }

    function scrollLeft(element, distance) {
        element.scrollLeft -= distance
    }