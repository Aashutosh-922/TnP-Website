// hemants js
var header = document.querySelector('header');
const graph = document.getElementById('top_x_div');
const drop = document.querySelector('.soc-list-container');
const socials = document.querySelector('.socials-dropdown');
document.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
        header.classList.add('p-0');
    }
    else if (window.scrollY == 0) {
        header.classList.remove('p-0');
    }
}

if (screen.width < 900) {
    // graph.setAttribute('style', 'height: 400px; width: 200px;');

}

socials.addEventListener('click', () => {
    if (drop.classList.contains('soc-list-container')) {
        drop.classList.remove('soc-list-container');
        drop.classList.add('mobile-dropdown');
    }
    else {
        drop.classList.add('soc-list-container');
        drop.classList.remove('mobile-dropdown');
    }
})



// if (sw < 810) {
//     navbar.classList.remove('ms-auto');
//     logo.classList.add('me-auto');
//     navbar.setAttribute("style", "margin-left: 12px;");
// }


// hemants js
//  us section()popups   --hgauri

var popbtns = document.querySelectorAll('.popup-open')
popbtns.forEach(function (btn) {
    btn.onclick = function () {
        var pop = btn.getAttribute('data-modal');
        document.getElementById(pop).style.display = 'inline-block';
    };
});

var closebtns = document.querySelectorAll('.popup-close-btn')
closebtns.forEach(function (btn) {
    btn.onclick = function () {
        var pop = (btn.closest(".popup").style.display = "none");
    };
});


// ----------ABHAY OUR TEAM STARTS-----------


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});


// ----------ABHAY OUR TEAM ENDS----------