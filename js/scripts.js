
$('#entry').height($('#entry-left').height());
$('.entry img').width($('#entry-left h1').width());
$('#closure').height($('#closure-left').height());

$('.hamburger').mouseover(function() {
	if(nav_showed == 1)
		$(".bar").css("background-color","white")	
	else   
		$(".bar").css("background-color","grey");
})
$('.hamburger').mouseout(function() {
	$(".bar").css("background-color","black");	
})

var map_showed = 0;
function show_hide_map() {
	let map = $("#adress_and_map");
	if (map_showed == "0") {
		map_showed = 1;
		map.fadeIn();
	} else if (map_showed==1) {
		map_showed=0;
		map.fadeOut();
	}
}

var nav_showed = 0;
function show_hide_nav() {
	let nav = $("nav");
	if (nav_showed == "0") {
		nav_showed = 1;
		nav.fadeIn();
		$(".bar").css("background-color","black");
	} else if (nav_showed==1) {
		nav_showed=0;
		nav.fadeOut();
		$(".bar").css("background-color","black");
	}
}

function nav_switch_main(argument) {
	let map = $("#adress_and_map");
	$("[id ^= main]").hide();
	if(argument!="button_acceptance") show_hide_nav();
	if (map_showed==1) {
		map_showed=0;
		map.fadeOut();
	}
	$(".bar").css("background-color","black");	
	switch(argument) {
		case 1:
		$("#main_home").fadeIn();
		$("#checkbox3").prop('checked', false);
		$("#main_home")[0].scrollIntoView(true);
		break;
		case 2:
		$("#main_acceptance").fadeIn();
		$("#checkbox3").prop('checked', false);
		$("#main_acceptance")[0].scrollIntoView(true);
		break;
		case 3:
		$("#main_home").fadeIn();
		$("#checkbox3").prop('checked', false);
		$("#about")[0].scrollIntoView(true);
		break;
		case 4:
		$("#main_history").fadeIn();
		$("#checkbox3").prop('checked', false);
		$("#main_history")[0].scrollIntoView(true);
		break;
		case 5:
		$("#main_idea").fadeIn();
		$("#checkbox3").prop('checked', false);
		$("#main_idea")[0].scrollIntoView(true);
		break;
		case 6:
		$("#main_prize").fadeIn();
		$("#checkbox3").prop('checked', false);
		$("#main_prize")[0].scrollIntoView(true);
		break;
		case 7:
		$("#main_faq").fadeIn();
		$("#checkbox3").prop('checked', false);
		$("#main_faq")[0].scrollIntoView(true);
		break;
		case "button_acceptance":
		$("#main_acceptance").fadeIn();
		$("#main_acceptance")[0].scrollIntoView(true);
		break;
		default:
		break;
	}
}

function show_map_hide_nav() {
	$("#checkbox3").prop('checked', false);
	show_hide_nav();
	show_hide_map();
}

var cur_exhib_showed = 0;
function show_hide_current_exhibition() {
	let exhib = $("#current_exhibition");
	if (cur_exhib_showed == "0") {
		cur_exhib_showed = 1;
		exhib.fadeIn();
	} else if (cur_exhib_showed==1) {
		cur_exhib_showed=0;
		exhib.fadeOut();
	}
}

