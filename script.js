//Text typing Animation

let typingEffect= new Typed(".name-spc",{
    strings:["MUHAMMED ADIL","FULL STACK DEVELOPER"],
    loop:true,
    typeSpeed:80,
    backSpeed:50,
    startDelay:500,
    backDelay:2500
})

//For Smooth Scrolling

const navLinks = document.querySelectorAll('.mylink');
const nav = document.querySelector('nav');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    const targetSection = document.getElementById(this.hash.substring(1));

    // Enhanced smooth scrolling with optional offset for navbar height
    if (window.innerWidth <= 768) { // Adjust the width as needed for your mobile breakpoint
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: targetSection.offsetTop - (nav.offsetHeight || 50),
          behavior: 'smooth'
        });
      }
  });
});
