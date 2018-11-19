$(document).ready(function(e) { 
 $(".owl-main").owlCarousel({
		items: 1,
		itemsCustom: false,
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [980, 1],
		itemsTablet: [768, 1],
		itemsTabletSmall: false,
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,
		autoPlay: true,
		stopOnHover: true,
		pagination : false
	});	
	
	var owlvar = $(".owl-main");
	$(".next").click(function() {
		owlvar.trigger('owl.next');
	});
	$(".prev").click(function() {
		owlvar.trigger('owl.prev');
	});
	
	 $(".owl-main2").owlCarousel({
		items: 1,
		itemsCustom: false,
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [980, 1],
		itemsTablet: [768, 1],
		itemsTabletSmall: false,
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,
		autoPlay: true,
		stopOnHover: true,
		pagination : true
	});
	});