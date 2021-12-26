// SIDEBAR: SUBMENU
const allSidebarSubmenu = document.querySelectorAll('#sidebar .sidebar__submenu')

allSidebarSubmenu.forEach(item=> {
    const a = item.previousElementSibling
    
    a.addEventListener('click', function (e) {
        e.preventDefault()

        if(this.classList.contains('clicked')) {
            this.classList.remove('clicked')
            item.classList.remove('active')
        } else {
            allSidebarSubmenu.forEach(i=> {
                i.previousElementSibling.classList.remove('clicked')
                i.classList.remove('active')
            })

            this.classList.add('clicked')
            item.classList.add('active')
        }
    })
})







// SIDEBAR: DROPDOWN MENU
const allSidebarDropdownMenu = document.querySelectorAll('#sidebar .sidebar__dropdown-menu')

allSidebarDropdownMenu.forEach(item=> {
    const a = item.previousElementSibling

    a.addEventListener('click', function (e) {
        e.preventDefault()

        if(item.classList.contains('active')) {
            item.classList.remove('active')
            this.classList.remove('active')
        } else {
            allSidebarDropdownMenu.forEach(i=> {
                i.previousElementSibling.classList.remove('active')
                i.classList.remove('active')
            })

            item.classList.add('active')
            this.classList.add('active')
        }
    })
})







// SIDEBAR MOBILE: TOGGLE SIDEBAR
const toggleSidebar = document.querySelector('#sidebar-mobile .toggle-sidebar')
const sidebar = document.querySelector('#sidebar')

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.add('active')
})







// MAIN: DROPDOWN
const allMainDropdown = document.querySelectorAll('#main .main__top .main__top__menu .main__dropdown')

allMainDropdown.forEach(item=> {
    const a = item.previousElementSibling

    a.addEventListener('click', function (e) {
        e.preventDefault()

        if(item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            allMainDropdown.forEach(i=> {
                i.classList.remove('active')
            })

            item.classList.add('active')
        }
    })
})







// DOCUMENT EVENT
document.addEventListener('click', function (e) {
    if(!e.target.matches('#sidebar, #sidebar *')) {
        allSidebarSubmenu.forEach(item=> {
            item.previousElementSibling.classList.remove('clicked')
            item.classList.remove('active')
        })
    }

    if(!e.target.matches('#sidebar, #sidebar *, #sidebar-mobile .toggle-sidebar')) {
        sidebar.classList.remove('active')
    }

    if(!e.target.matches('#main .main__top .main__top__menu, #main .main__top .main__top__menu *')) {
        allMainDropdown.forEach(item=> {
            item.classList.remove('active')
        })
    }
})