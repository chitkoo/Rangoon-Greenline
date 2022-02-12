//slick
$('.pricing-slide').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				dots: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

//nav
let screenHeight = $(window).height();
console.log(screenHeight);

$(window).on('scroll', function () {
	let currentPosition = $(this).scrollTop();
	console.log(currentPosition);
	if (currentPosition > screenHeight -100) {
		$('.custome-nav').addClass('site-nav-scroll');
	} else {
		$('.custome-nav').removeClass('site-nav-scroll');
        setActive("home");
	}
});

// mobile nav icon
$('.navbar-toggler').on('click', function(){
    let result = $('.menu-icon').hasClass('fa-bars');
    // console.log(result);

    if(result){
        $('.menu-icon').removeClass('fa-bars').addClass('fa-xmark');
    }else{
        $('.menu-icon').removeClass('fa-xmark').addClass('fa-bars');
    }
})

//customize active link
function setActive(current){
    $('.nav-link').removeClass('current-section');

    $(`.nav-link[href='#${current}']`).addClass('current-section');
}

function navScroll(){

    let currentSection = $('section[id]');

    currentSection.waypoint(function(direction){

        if(direction == 'down'){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }

    },{ offset:'0px' });

    currentSection.waypoint(function(direction){

        if(direction == 'up'){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }

    },{ offset:'0px' });
}

navScroll();

//wowjs
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
});
wow.init();

$(window).on('load',function(){
	$('.loader-container').fadeOut(500,function(){
		$(this).remove();
	})
})