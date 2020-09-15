window.onscroll = function() {scrollActivateNav(), scrollBoxes()};

const navbar = document.querySelector('.header-nav');

function scrollActivateNav() {
    let sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
    navbar.classList.add('fixed-nav')
    } else {
    navbar.classList.remove('fixed-nav');
  }
}

function scrollBoxes() {
    let appearElement = document.querySelector('section-characteristics__boxes');
    if (window.pageYOffset > appearElement) {
        appearElement.classList.add('appear');
        alert ('aparece');
    }
}

// function apearScroll() {
//     const html = document.querySelector('html');
//     let appearElement = document.querySelectorAll('section-characteristics__boxes-box');

//     document.addEventListener('wheel', function () {
//         let topWindows = html.scrollTop;
//         for (i = 0; i < appearElement.length, i++){
//             let topElement = appearElement[i].offsetTop;
//             if(topWindows > topElement - 400) {
//                 appearElement[i].classList.add('appear');    
//             }
//         }
//     })
// }

// apearScroll();

