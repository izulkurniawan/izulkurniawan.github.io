window.onload = function () {
  
  ScrollReveal().reveal('#navbar', {
    origin: 'top',
    distance: '100px',
    duration: 1000,       
    easing: 'ease-in-out',
    opacity: 0,
    reset: false,
    delay: 0              
  });

  ScrollReveal().reveal('#imageReveal', {
    origin: 'bottom',
    distance: '10px',
    duration: 1000,
    easing: 'ease-in-out',
    opacity: 0,
    reset: false,
    delay: 750             
  });

  ScrollReveal().reveal('#coderText', {
    origin: 'left',
    distance: '200px',
    duration: 1500,
    easing: 'ease-in-out',
    opacity: 0,
    reset: false,
    delay: 1500             
  });

  ScrollReveal().reveal('#dataAnText', {
    origin: 'right',
    distance: '200px',
    duration: 1500,
    easing: 'ease-in-out',
    opacity: 0,
    reset: false,
    delay: 1500             
  });

  
  ScrollReveal().reveal('#cards', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    easing: 'ease-in-out',
    opacity: 0,
    reset: false,
    delay: 2500,  
    interval: 500 
  });
 
};






