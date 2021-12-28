// SIDEBAR: SUBMENU
const allSidebarSubmenu = document.querySelectorAll('#sidebar .sidebar__submenu')

allSidebarSubmenu.forEach(item => {
    const a = item.previousElementSibling

    a.addEventListener('click', function(e) {
        e.preventDefault()

        if (this.classList.contains('clicked')) {
            this.classList.remove('clicked')
            item.classList.remove('active')
        } else {
            allSidebarSubmenu.forEach(i => {
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

allSidebarDropdownMenu.forEach(item => {
    const a = item.previousElementSibling

    a.addEventListener('click', function(e) {
        e.preventDefault()

        if (item.classList.contains('active')) {
            item.classList.remove('active')
            this.classList.remove('active')
        } else {
            allSidebarDropdownMenu.forEach(i => {
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

toggleSidebar.addEventListener('click', function() {
    sidebar.classList.add('active')
})







// MAIN: DROPDOWN
const allMainDropdown = document.querySelectorAll('#main .main__top .main__top__menu .main__dropdown')

allMainDropdown.forEach(item => {
    const a = item.previousElementSibling

    a.addEventListener('click', function(e) {
        e.preventDefault()

        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            allMainDropdown.forEach(i => {
                i.classList.remove('active')
            })

            item.classList.add('active')
        }
    })
})







// MAIN: MAIN BODY MENU
const allMainBodyMenu = document.querySelectorAll('#main .main__body :is(.members__menu, .sales-summary__menu) .menu')

allMainBodyMenu.forEach(item=> {
    const icon = item.previousElementSibling

    icon.addEventListener('click', function () {
        if(item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            allMainBodyMenu.forEach(i=> {
                i.classList.remove('active')
            })

            item.classList.add('active')
        }
    })
})







// DOCUMENT EVENT
document.addEventListener('click', function(e) {
    if (!e.target.matches('#sidebar, #sidebar *')) {
        allSidebarSubmenu.forEach(item => {
            item.previousElementSibling.classList.remove('clicked')
            item.classList.remove('active')
        })
    }

    if (!e.target.matches('#sidebar, #sidebar *, #sidebar-mobile .toggle-sidebar')) {
        sidebar.classList.remove('active')
    }

    if (!e.target.matches('#main .main__top .main__top__menu, #main .main__top .main__top__menu *')) {
        allMainDropdown.forEach(item => {
            item.classList.remove('active')
        })
    }

    if (!e.target.matches('#main .main__body :is(.members__menu, .sales-summary__menu), #main .main__body :is(.members__menu, .sales-summary__menu) *')) {
        allMainBodyMenu.forEach(item => {
            item.classList.remove('active')
        })
    }
})







// CHART: APEXCHART
var options = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();