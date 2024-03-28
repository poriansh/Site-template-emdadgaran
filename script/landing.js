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


let menuactive  = document.querySelectorAll('.all-sevices-scroller__link')

menuactive.forEach(function (item) {

    item.addEventListener('click', function (e) {
        // e.preventDefault()
        document.querySelector('.all-sevices-scroller__link--active').classList.remove('all-sevices-scroller__link--active')
        this.classList.add('all-sevices-scroller__link--active')

        // کد های کامنت شده پاک نشود در صورت لزوم و تغییرات استفاده میشود
        // let dateSection = this.getAttribute('data-section')
        // let getSection = document.getElementsByClassName(dateSection)[0].offsetTop
        // window.scrollTo({

        //     top: getSection - 100,
        //     behavior: "smooth"

        // })
    })

})