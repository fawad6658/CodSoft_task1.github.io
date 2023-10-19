/*==========3========== toggle icon navbar ===========3=========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');      // x icon 
    navbar.classList.toggle('active');
};

// ________________________________________________________________________



/*=========1=========== scroll sections active link ============1========*/
// Select all section elements and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Listen for the scroll event
window.onscroll = () => {
    // Loop through each section
    sections.forEach(sec => {
        // Get the current scroll position
        let top = window.scrollY;

        // Calculate the offset position for the section with a small buffer (150 pixels)
        let offset = sec.offsetTop - 150;

        // Get the height of the section
        let height = sec.offsetHeight;

        // Get the 'id' attribute of the section
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the section's bounds
        if (top >= offset && top < offset + height) {
            // Remove the 'active' class from all navigation links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add the 'active' class to the navigation link associated with the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
    // ___________________________________________________________________________________
    
    
    
    /*===========2========= sticky navbar ===========2=========*/
    
    // Select the navigation bar element
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    
    
    // ______________________________________________________________________________
    
    /*==========4========== remove toggle icon and navbar when click navbar link (scroll) ===========4=========*/
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};


// _____________________________________________________________________________________

    /*==========5========== scroll reveal ===========5=========*/
    ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
    ScrollReveal().reveal('.home-conten h1, .about-img', {origin: 'left'});
    ScrollReveal().reveal('.home-conten p, .about-content', {origin: 'right'});



    // _______________________________________________________________

    /*===========6========= typed js ===========6=========*/
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Web Developer!', 'Frontend Web Developer!', 'WordPress Developer!', 'Graphics Designer!'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    


    /*____________________ JavaScript Code End _________________________*/
        /*____________________ FAWAD6658 _________________________*/

