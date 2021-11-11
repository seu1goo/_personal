if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};
// javascript

// if (navigator.userAgent.indexOf('Trident') > 0) {
//   location.href = "microsoft-edge:" + location.href;
//   document.querySelector('#ieFalse .first').innerText = '이 페이지는 최신 기반의 브라우져에서 동작하므로,'
//   document.querySelector('#ieFalse .second').innerText = 'IE (인터넷 익스플로어) 브라우져에서 확인이 불가능합니다.'
//   document.querySelector('#ieFalse h3').innerText = '잠시 후, Microsoft Edge (마이크로소프트 엣지) 브라우져로 이동됩니다.'
//   setTimeout(close);
// };
// exploer -> edge

const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
//section-animation

// const loading = document.querySelector('#loading');
// gsap.registerEffect({
//   name: "fade",
//   defaults: {
//     duration: 1,
//   }, 
//   effect: (targets, config) => {
//     return gsap.to(targets, {
//       duration: config.duration,
//       delay: 2,
//       opacity: 0
//     });
//   }
// });

// window.addEventListener("load", function () {
//   gsap.effects.fade(loading);
// });
// loading

const header = document.querySelector('header');
const logo = document.querySelector('.logo img');
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY == 0) {
    header.classList.remove('move-down')
  } else {
    header.classList.add('move-down')
  }
}));

$('nav ul li a').click(function (e) {
  e.preventDefault();

  var id = $(this).attr("href");
  var offset = 50;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
});

const mobMenu = document.querySelector('header .mobMenu');
const mobMenuClose = document.querySelector('header .mobMenuClose');
const nav = document.querySelector('header nav');
const navList = document.querySelectorAll('header nav ul li');

if (window.matchMedia("max-width: 640px")) {
  mobMenu.addEventListener('click', function() {
    nav.classList.add('slide-right')
  })
  mobMenuClose.addEventListener('click', function() {
    nav.classList.remove('slide-right')
  })
}
// header

var swiperMain = new Swiper("#mainVisual .swiper-container", {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".paging .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".paging .swiper-button-next",
    prevEl: ".paging .swiper-button-prev",
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
// main

swiper = new Swiper("#graphic .mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    },
    1399: {
      slidesPerView: 6
    }
  }
});

swiper2 = new Swiper("#graphic .mySwiper2", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  }
});

const mySwiper2 = document.querySelector('.mySwiper2 .swiper-wrapper');
mySwiper2.addEventListener('mouseenter', function () {
  swiper2.autoplay.stop()
});

mySwiper2.addEventListener('mouseleave', function () {
  swiper2.autoplay.start()
});
// graphic

$('.portfolioTab li').each(function () {
  var portBtn = $(this);
  var portCon = $('.portfolioCon > div');

  portCon.eq(0).siblings().hide();
  portBtn.click(function (e) {
    e.preventDefault();

    var target = $(this);
    var index = target.index();

    portCon.eq(index).css({
      display: 'block'
    });
    portCon.eq(index).siblings().css({
      display: 'none'
    });

    target.find('a').addClass('active');
    target.siblings().find('a').removeClass('active');
  });
});

const ikeaBtnSite = document.querySelector('.ikea .btnPro');
const ikeaReport = document.querySelector('.ikeaReport');
const ikeaBtnClose = document.querySelector('.ikeaReport .reClose');

ikeaBtnSite.addEventListener('click', function () {
  ikeaReport.classList.add('showPro');
  projectSwiper = new Swiper("#projectDocument .swiper-container", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
});

ikeaBtnClose.addEventListener('click', function () {
  ikeaReport.classList.remove('showPro');
});

const ansimBtnSite = document.querySelector('.ansimpet .btnPro');
const ansimReport = document.querySelector('.ansimReport');
const ansimBtnClose = document.querySelector('.ansimReport .reClose');

ansimBtnSite.addEventListener('click', function () {
  ansimReport.classList.add('showPro');
  projectSwiper = new Swiper("#projectDocument .swiper-container", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
});

ansimBtnClose.addEventListener('click', function () {
  ansimReport.classList.remove('showPro');
});

const preBtn2 = document.querySelector('.preparing2');

preBtn2.addEventListener('click', function() {
  alert('준비중입니다.')
});

// portfolio

(function () {
  emailjs.init('user_p8YuJr9GUBTfmnGkPUSgp');
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm('sg95811', 'template_0hwno9s', this)
      .then(function () {
        console.log('SUCCESS!');
        alert('메일 전송이 완료되었습니다. 😄');
      }, function (error) {
        console.log('FAILED...', error);
        alert('메일 전송이 실패했습니다. 😞');
      });
  });
};
// contact

const toTopEl = document.querySelector('#topBtn');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY == 0) {
    gsap.to('#topBtn', 0.2, {
      x: 100
    });
  } else {
    gsap.to('#topBtn', 0.2, {
      x: 0
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});
// topBtn