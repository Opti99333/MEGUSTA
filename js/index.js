document.addEventListener('DOMContentLoaded', () => {
  const hero       = document.getElementById('hero-img');
  const defaultSrc = hero.src;
  const smena1     = document.getElementById('smena1');
  const smena2     = document.getElementById('smena2');

  function swapTo(src) {
    hero.classList.remove('swap-in');
    hero.classList.add('swap-out');

    function onOut(e) {
      if (e.animationName !== 'swap-out') return;
      hero.removeEventListener('animationend', onOut);

      hero.src = src;
      requestAnimationFrame(() => {
        hero.classList.remove('swap-out');
        hero.classList.add('swap-in');
      });
    }
    hero.addEventListener('animationend', onOut);
  }

  if (smena1) {
    smena1.addEventListener('mouseenter', () => swapTo('./assets/GUSTA.png'));
    smena1.addEventListener('mouseleave', () => swapTo(defaultSrc));
  }
  if (smena2) {
    smena2.addEventListener('mouseenter', () => swapTo('./assets/NOT SURE.png'));
    smena2.addEventListener('mouseleave', () => swapTo(defaultSrc));
  }
});



document.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('.bio-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: false,
     autoplay: {
      delay: 5000,                 
      disableOnInteraction: true,  
    },
  });

  const markers = document.querySelectorAll('.bio-scale-marker');

  markers.forEach(marker => {
    const idx = +marker.dataset.index;
    marker.addEventListener('click', () => {
      swiper.slideTo(idx);
    });
  });
  

  swiper.on('slideChange', () => {
    markers.forEach(m => m.classList.remove('active'));
    const active = document.querySelector(`.bio-scale-marker[data-index="${swiper.activeIndex}"]`);
    if (active) active.classList.add('active');
  });

  markers[0].classList.add('active');

  
});

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.gusta-slider');

  function initSlider(slider) {
    const track    = slider.querySelector('.gusta-track');
    const itemHTML = track.innerHTML;                  
    track.innerHTML = itemHTML;                  
    while (track.scrollWidth < slider.offsetWidth * 2) {
      track.innerHTML += itemHTML;
    }
  }

  sliders.forEach(initSlider);

  window.addEventListener('resize', () => {
    sliders.forEach(initSlider);
  });
});


document.addEventListener('DOMContentLoaded', () => {

 document.addEventListener('DOMContentLoaded', () => {
  const steps   = document.querySelectorAll('.step-card');
  const markers = document.querySelectorAll('.progress-marker');


  function setActive(step) {
    steps.forEach(s => s.classList.toggle('active', s.id === `step-${step}`));
    markers.forEach(m => m.classList.toggle('active', m.dataset.step === String(step)));
  }


  setActive(1);


  markers.forEach(m => {
    m.addEventListener('click', () => {
      const step = m.dataset.step;
      setActive(step);
      document
        .getElementById(`step-${step}`)
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
});


  setActive(1);


  const buyBtn = document.querySelector('.btn-sketch');
  buyBtn.addEventListener('click', () => {

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.3 }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  VanillaTilt.init(document.querySelectorAll('.step-card'), {
    max: 10,
    speed: 400,
    glare: false
  });

  const cards   = document.querySelectorAll('.step-card');
  const markers = document.querySelectorAll('.progress-marker');

  function setActive(step) {
    cards.forEach(c => c.classList.toggle('active', c.dataset.step === step));
    markers.forEach(m => m.classList.toggle('active', m.dataset.step === step));
  }


  cards.forEach(c => {
    c.addEventListener('click', () => {
      setActive(c.dataset.step);
    });
  });

  markers.forEach(m => {
    m.addEventListener('click', () => {
      setActive(m.dataset.step);
    });
  });

  setActive('1');
});

document.addEventListener('mousemove', e => {
  const eyes = document.querySelectorAll('.hero-image .eye');
  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;


    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const angle = Math.atan2(dy, dx);
    const radius = 15;  

    const moveX = Math.cos(angle) * radius;
    const moveY = Math.sin(angle) * radius;

    eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

});
