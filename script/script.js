var swiper1 = new Swiper(".Swiper1", {
    
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        // when window width is >= 320px

        768: {

            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },



    },

});

var swiper2 = new Swiper(".Swiper2", {
    
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
      },
      breakpoints: {
        // when window width is >= 320px

        768: {

            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },



    },

});

var swiper3 = new Swiper(".Swiper3", {
    
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next3",
        prevEl: ".prev3",
      },
      breakpoints: {
        // when window width is >= 320px

        768: {

            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },



    },

});

var swiper4 = new Swiper(".Swiper4", {
    
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next4",
        prevEl: ".prev4",
      },
      breakpoints: {
        // when window width is >= 320px

        768: {

            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },



    },

});
var swiper5 = new Swiper(".Swiper5", {
    
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next5",
        prevEl: ".prev5",
      },
      breakpoints: {
        // when window width is >= 320px

        768: {

            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },



    },

});
var swiper6 = new Swiper(".Swiper6", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next6",
        prevEl: ".prev6",
      },

});

let togelmenu = document.querySelector('.toggel-menu')
let menumobailitem = document.querySelectorAll('.menu-item')
let dropdownmobail = document.querySelector('.dropdown')
let menumobailitemsub = document.querySelectorAll('.menu-item__sub')
let subsub = document.querySelectorAll('.sub-sub')
togelmenu.addEventListener('click', function () {
    
    document.querySelector(".toggel-menu__line").classList.toggle('toggel-menu__line--active')
   
    document.querySelector('.nav-mobail').classList.toggle('nav-mobail--active')

})
dropdownmobail.addEventListener('click', function () {

    menumobailitem.forEach(function (item) {

        item.classList.toggle('menu-item--active')

    })


})
menumobailitemsub.forEach(function (item) {

    item.addEventListener('click', function () {

        document.querySelectorAll('.menu-item__sub').forEach(function (item) {

            item.classList.add('height-drop')

        })
        document.querySelectorAll('.menu-item-sub--active').forEach(function (item) {


            item.classList.remove('menu-item-sub--active')

        })
        this.classList.toggle('menu-item-sub--active')


    })

})
subsub.forEach(function (item) {

    item.addEventListener('click', function () {

        document.querySelectorAll('.sub-sub').forEach(function (item) {

            item.classList.add('height-drop')

        })
        document.querySelectorAll('.sub-sub--active').forEach(function (item) {


            item.classList.remove('sub-sub--active')

        })
        this.classList.toggle('sub-sub--active')


    })

})