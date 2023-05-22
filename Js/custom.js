
// Web_designing my skill slider

var swiper = new Swiper("#web_design_my_skill", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: false,
    navigation: false,
    autoplay: true,
    navigation: {
        nextEl: "#sider_right",
        prevEl: "#sider_left",
    },
    breakpoints: {
        420: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        980: {
            slidesPerView: 4,
        },
        1660: {
            slidesPerView: 5,
        },
        2220: {
            slidesPerView: 7,
        },
    },
});


var swiper = new Swiper("#web_design_my_project", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: false,
    navigation: false,
    autoplay: true,
    breakpoints: {
        529: {
            slidesPerView: 2,
        },
        820: {
            slidesPerView: 3,
        },
        1260: {
            slidesPerView: 4,
        },
        2220: {
            slidesPerView: 5,
        },
    },
});



// Close Web_designing my skill slider



// Ux_UI_my_skill slider


var swiper = new Swiper("#Ux_UI_my_skill", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: true,
    pagination: false,
    navigation: false,
    breakpoints: {
        440: {
            slidesPerView: 1.5,
        },
        560: {
            slidesPerView: 2,
        },
        980: {
            slidesPerView: 3,
            autoplay: false,
        },
    },
    navigation: {
        nextEl: "#sider_right",
        prevEl: "#sider_left",
    },
});


var swiper = new Swiper("#ux_ui_my_project", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: true,
    pagination: false,
    loop: true,
    navigation: false,
    breakpoints: {
        690: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        }
    },
});


// close Ux_UI_my_skill slider


// Graphic_design_my_skill slider


var swiper = new Swiper("#Graphic_design_my_skill", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: false,
    navigation: false,
    autoplay: true,
    navigation: {
        nextEl: "#sider_right",
        prevEl: "#sider_left",
    },
    breakpoints: {
        440: {
            slidesPerView: 2,
        },
        840: {
            slidesPerView: 4,
        },
    },
});



var swiper = new Swiper("#Graphic_design_my_project", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: false,
    navigation: false,
    autoplay: true,
    navigation: {
        nextEl: "#sider_right",
        prevEl: "#sider_left",
    },
    breakpoints: {
        560: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 3,
        },
    },
});


// close Graphic_design_my_skill slider



// custom  tabs

$('.tab-list-item').click(function () {

    var tabID = $(this).attr('data-tab');

    $(this).addClass('active-tab').siblings().removeClass('active-tab');

    $('#tab-' + tabID).addClass('active-tab-content').siblings().removeClass('active-tab-content');
});

// close custom tabs


// custom  hover-bar

$('.bg-text').hover(function () {

    var hover = $(this).attr('data-hover');

    $(this).addClass('active-bg-text').siblings().removeClass('active-bg-text');

    $('#hover_' + hover).addClass('active-hover-tab', 2000).siblings().removeClass('active-hover-tab', 2000);
});

// close custom hover-bar



// day night mode script

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// close day night mode script
