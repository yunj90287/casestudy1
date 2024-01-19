$(function(){
	/* main slider */
	const mainSwiper=new Swiper(".mainSwiper",{
		loop: true,
		pagination: {
		el: ".mainSwiper .swiper-pagination",
		type: "fraction"
		},
		autoplay: {
		delay: 5000,
		},
		// breakpoints: {
		// 	750: {
		// 		slidesPerView: 3,
		// 	}
		  // },
	});
	$("#main_slider .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$("#main_slider .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});

	/* lang */

		$(".lang li").click(function(e){
			e.preventDefault();

			$(".lang li").removeClass("active");
			$(this).addClass("active");
		});

	/* gnb */
	$("#gnb > ul > li").hover(
		function(){
			$("#gnb").addClass("active");

			// console.log($(this).find("ul").length);
			if($(this).find("ul").length !== 0){
				$(this).find("ul").addClass("active");
				$(".menu_bg").addClass("active");
			}
		},
		function(){
			$("#gnb").removeClass("active");

			if($(this).find("ul").length !== 0){
				$(this).find("ul").removeClass("active");
				$(".menu_bg").removeClass("active");
			}
		}
	);

	$("#gnb > ul > li > a").focusin(function(){
		$("#gnb").addClass("active");
		$(this).parent().addClass("active");

		if($(this).next("ul").length !== 0){
			$(this).next().addClass("active");
			$(".menu_bg").addClass("active");
		}
	});

	$("#gnb > ul > li > a").focusout(function(){
		if($(this).next("ul").length === 0){
			$(this).parent().removeClass("active");
		}
	});

	$("#gnb li li:last-child").focusout(function(){
		$("#gnb").removeClass("active");
		$(this).parent().parent().removeClass("active");
		$(this).parent().removeClass("active");
		$(".menu_bg").removeClass("active");
	});


	/* tab */
	$("#tab").click(function(e){
		e.preventDefault();
		
		if(mobile === false) return;

	if($("#mobile").hasClass("active") == false){
	$(this).removeAttr("class");
	$("#mobile").addClass("active");
	$("#tab").addClass("close");
	$(".dim").addClass("active");

	}
	else{
	$("#mobile").removeClass("active");
	$(this).removeAttr("class");
	$("#tab").addClass("open");
	$(".dim").removeClass("active");
	}

	});

	/* dim */

	$(".dim").click(function(){
		
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
		$("#tab").removeClass("close");
		$("#tab").addClass("open");
		
	});

	/* mobile */

	$("#mobile > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false) {
			$("#mobile > ul > li").removeClass("active"); 
			$(this).addClass("active");
			$("#mobile ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	});

	let mobile=false;

	$(window).resize(function(){
		mw=$(window).width();

		if(mw > 1109){
			$("#mobile").removeClass("active");
			$(".dim").removeClass("active");
			mobile=false;
		}
		else{
			mobile=true;
		}

	});

$(window).trigger("resize");
});