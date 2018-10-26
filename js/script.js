/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function () {

    // $.getJSON("./info/teamMembers.json", function (data) {  
    let array = staff
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const $element = '<div class="team-member"><img src="' + element.image + '" alt="team member" class="img-responsive"><div class="team-member-overlay"><div class="team-member-info text-center"><h6>' + element.name + '</h6><p>' + element.occupation + '</p><p class="member">' + element.description + '</p></div></div></div>'

        $('#team-members').append($element)

    }
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
    // });
    staff = undefined
});



/* =========================================
                Progress Bars
============================================ */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});


/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({
        filter: '.services'
    });

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =========================================
               Magnifier
============================================ */

function closePopUp() {
    $.magnificPopup.proto.close.call(this);

}

$(function () {

    $("#portfolio-wrapper1").magnificPopup({
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        // delegate: 'a', // child items selector, by clicking on it popup will open
        items: [

            {
                src: $(
                    `
                    <h3 class="fix-heading adasdsad">
                    How To Ace An Interview In The Modern World
                    </h3>
                    <p class="fix">
                    You will not only learn how to write a meaningful CV. As part of your training, you will be coached on how to enhance your interviewing skills in order to accurately convey your personality, abilities and technical skills. Just as importantly, and as part of the 21st century requirements, we will help you develop and update your online presence on a variety of platforms including Quora and Linkedin.
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "

                       >
                      CLOSE
                      </button>
                      
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        },
        callbacks: {
            beforeOpen: function () {


            },
            open: function () {



            },
            close: function () {


            }
        }


    });

    $("#portfolio-wrapper2").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Enhanced Technical Mentoring
                    </h3>
                    <p class="fix";>
                    During the Immersive stage of your course, you will not only be trained using the latest technical curriculum alone. Mentoring by market experienced Software Engineers from top companies operating in Jordan will be baked into your course. With this, you will gain valuable knowledge in how to incorporate what you have learned using methodologies applied by real companies in the real world.
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper3").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    21st Century Soft Skills
                    </h3>
                    <p class="fix">
                    In the real world, employers do not only seek technical proficiency. More crucial are the soft skills that companies would like to see in their staff. These range from the ability to teach, problem solving, critical thinking, creativity and many more. During your journey, these skills will be integrated into your daily schedule to make you one of the most wanted programmers on the market.
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper4").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Visiting Tech Mentors
                    </h3>
                    <p class="fix">
                    Don’t be surprised if you see a western guy or girl @ RBK. We have an exchange program whereby highly experienced developers come from all over the world to share their experience and help you get in-depth understanding of what you’re learning and how to apply it. They take time off from their work and fly to Jordan just to be with you, share your culture and learn how to pronounce your name !
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper5").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Your Mind And Body
                    </h3>
                    <p class="fix">
                    As your days will be long, we ensure that your mind and body are treated in a manner that can support your learning. You will experience a variety of activities that are designed to relieve your stress and help keep your mind sharp and ready. From meditation to yoga, we take care to provide you with an environment that promotes the absorption of continuous learning.
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper6").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Social Nights
                    </h3>
                    <p class="fix">
                    Every end of week ends with a bang ! Water-balloon fights, relaxing in a candle-lit garden, BBQ, music, or bring your own instrument, bowling, AR games, movies, …, etc., is how we wrap up a hard week’s work. You’ll deserve it !
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper7").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Counselor
                    </h3>
                    <p class="fix">
                    The Immersive Course can be quite stressful due to the amount of information you will be required to digest in short periods of time. Your days will be long and some might find this difficult. The stress is not limited to students. Even the staff encounter tough days and need to express their frustration. So you don’t have to keep the pressure inside you, we have provided an in-house counsellor who is ready to listen and give you advice.
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper8").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Transportation
                    </h3>
                    <p class="fix">
                    During the Immersive Course, RBK provides transportation to its students. Unfortunately, this is only available to students who live within the Greater Amman area.
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper9").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Housing
                    </h3>
                    <p class="fix">
                    During the Immersive Course, and since your days will be extremely long, RBK provides basic housing for those who live outside the Greater Amman area. Because the space is extremely limited, housing is allocated on a first-come first-served basis.
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper10").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Meals
                    </h3>
                    <p class="fix">
                    We take your health and ability to learn very seriously. RBK students during the Immersive Course will be offered three meals a day prepared by our in-house chef. The meals are carefully planned in order to supply you with adequate protein, vitamins, fats and carbohydrates so that you don’t have to worry about exhausting your brain or body as you create your future.
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#portfolio-wrapper11").magnificPopup({
        // delegate: 'a', // child items selector, by clicking on it popup will open
        fixedContentPos: true,
        overflowY: 'scroll',
        closeBtnInside: false,
        closeOnBgClick: false,
        items: [
            {
                src: $(
                    `
                    <h3 class="fix-heading">
                    Labs with Computers
                    </h3>
                    <p class="fix">
                       Talk about stuff here
                    </p>
                    <div style="text-align:center">
                      <button 
                        onClick="closePopUp()"
                        style="color: #fff;
                        border: 1px solid #b40381;
                        background-color: #b40381;
                        border-radius:28px;
                        "
                       >
                      CLOSE
                      </button>
                    </div>
                    `
                ),
                type: 'inline'
      }
    ],
        type: 'image',
        gallery: {
            enabled: true
        }
    });


});

/* =========================================
               Testimonials
============================================ */

$(function () {
    let array = graduates
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //change the div contan class bfore h3 col-md-6 col-sm-6 col-xs-6
        const $element = '<div class="testimonial">'

            +
            '<div class="row" style="margin-bottom:20px">' +
            '<h1 style="margin-left:8%"><b>' + element.occupation + '</b></h1>' +
            '<h3 style="margin-left:8%">' + element.company + '</h3>' +
            '</div>'

            +
            '<div class="row" style="margin-left:8%">'

            +
            '<div class=" author" style="display:flex;">'

            +
            '<div class="col-md-2 col-sm-3 col-xs-6" style="padding-left:0px;padding-right:0px;" >' +
            '<img src="' + element.image + '" alt="client" class="img-responsive img-circle">' +
            '</div>'

            +
            '<div class="col-md-10 col-sm-3 col-xs-6" style="align-self:center;">'

            +
            '<div class="author-name-des">' +
            '<p><b>' + element.name + '</b></p>' +
            '<p>' + element.cohort_number + '</p>' +
            '<p>' + element.nationality + '</p>' +
            '</div>'

            +
            '</div>' +
            '</div>' +
            '<p "><b>“</b><i>' + element.quote + ' </i><b>”</b></p>'




            +
            '</div>' +
            '</div>'

        /*
         + '<div class="row">'

        + '<div class=" author">'

        // + '<div class="d-flex align-items-center">'
        + '<div class="col-md-2" style="padding-left:0px;padding-right:0px;" >'
        + '<img src="' + element.image + '" alt="client" class="img-responsive img-circle">'
        + '</div>'

        + '<div class="col-md-10">'

        + '<div class="author-name-des">'
        + '<p><b>' + element.name + '</b></p>'
        + '<p>' + element.cohort_number + '</p>'
        + '<p><b>' + element.nationality + '</b></p>'
        // +'<br>'
        + '<p style="margin:0px;"><b>“</b>' + element.quote + '<b>”</b></p>'
        + '</div>'

        + '</div>'
      
        // + '</div>'


        +'</div>'
        */
        $('#testimonial-slider').append($element)
    }
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    graduates = undefined
});


/* =========================================
              Stats
============================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});


/* =========================================
              Clients
============================================ */
$(function () {
    //  $.getJSON("./info/graduates.json", function (data) {  
    let array = hiringPartners
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const $element = '<div class="client"><a target="_blank" href="' + element.url + '"><img src="' + element.image + '" class="img-responsive" alt="client"></a></div>'

        //  $('a').on('click', function() {
        //    console.log('element url', element.url)
        //    window.open(`${element.url}`);
        //  });

        $('#clients-list').append($element)

    }
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
    //    })
    hiringPartners = undefined
});


/* =========================================
              Google Map
============================================ */
$(window).on('load', function () {

    // Map Variables
    var addressString = '19 Zarkashi Street, Khalda, Amman, Jordan';
    var myLatlng = {
        lat: 31.986680,
        lng: 35.837785
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });

});


/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 20) {

            // Show white nav
            $("#navbar").addClass("white-nav-top");

            // Show Dark logo
            $("#logo img").attr("src", "img/logo/logo.png");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("#navbar").removeClass("white-nav-top");

            // Show White logo
            $("#logo img").attr("src", "img/logo/white-logo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#founding-partner").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});


/* =========================================
                Reactor logo
============================================ */
$(function () {
    $("#hackreactor").on({
        mouseenter: function () {
            $(this).attr('src', './img/logo/hack-reactor-logo.png');
        },
        mouseleave: function () {
            $(this).attr('src', './img/logo/hack-reactor-logo-white.png');
        }
    });
});


/* =========================================
            Vertical Navigation Bar
============================================ */
$(function () {
    if ($('.vertical-nav').length > 0) {
        var stretchyNavs = $('.vertical-nav');

        stretchyNavs.each(function () {
            var stretchyNav = $(this),
                stretchyNavTrigger = stretchyNav.find('.vertical-trigger');

            stretchyNavTrigger.on('click', function (event) {
                event.preventDefault();
                stretchyNav.toggleClass('nav-is-visible');
            });
        });

        $(document).on('click', function (event) {
            (!$(event.target).is('.vertical-trigger') && !$(event.target).is('.vertical-trigger span')) && stretchyNavs.removeClass('nav-is-visible');
        });
    }
});

// Vertical Navbar Smooth Scrolling 
$(function () {
    $('.vertical-nav ul li a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 64
        }, 1250, 'easeInOutExpo');
    });
});


function test() {

    $('.submit').click(function () {
        $.ajax({
            type: 'POST',
            url: "https://docs.google.com/forms/d/e/1FAIpQLScHAIv8OFLYtPhGqZK-JmyyjEghSaWAtO9M5AVh0Kx5OOqn8w/formResponse",
            data: $(this).serialize(),
            error: function () {
                window.location.reload()
            },
            success: function (response) {
                window.location.reload()
            }
        });
        return false;
    });

}

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});