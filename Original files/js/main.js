(function($) {

	// mobile menu 

	$("#mobile-menu-icon").on("click", function(){
		$("#main-nav").slideToggle();
		$("header.header").toggleClass('open');
		$(this).toggleClass('close');
	})

	//Campaign wizard tab indicators
	//width of the active tab should be the width of tablist - total width of the step numbers
	if($(window).width()>640) {
		var activeTabWidth = $(".tab-list").width() - 228 - 32;
		$(".tab1>.tab1, .tab2>.tab2, .tab3>.tab3, .tab4>.tab4, .tab5>.tab5").width(activeTabWidth);
		//console.log("the window width is bigger than 640px");
	}


	// checkout confirmation page progress bar

	$('#progress-confirm.active').prevAll().hide();


	//datepicker functions

	$(".calendar").each(function(){
		$(this).click(function(){
			$(this).next(".datepicker").toggle();
		})
	})
	$( ".datepicker" ).datepicker({
		dateFormat:"mm-dd-yy",
 	    onSelect: function(dateText, inst) { 
        	var date = $(this).datepicker('getDate'),
            day  = date.getDate(),  
            month = date.getMonth() + 1,              
            year =  date.getFullYear();
	        $(this).siblings("select.month").find("option:selected").val(month).text(month);
	        $(this).siblings("select.date").find("option:selected").val(day).text(day);
	        $(this).siblings("select.year").find("option:selected").val(year).text(year);
	        $(this).siblings("select").find("option:selected").siblings().remove();
	        $(this).toggle();
	    }
	});



	//make focused field have blue outline

	$(".field-container").click(function(){
		$(this).focus();
	})

	//campaign wizard step 1: optional fields slidedown
	$(".toggle-optional-fields").on('click', function(){
		$(".optional-fields").slideToggle('slow');
		$(".toggle-optional-fields .icon").toggleClass('add');
		$(".toggle-optional-fields .icon").toggleClass('minus');
		$("body, html").animate({
			scrollTop: $('.toggle-optional-fields').offset().top
		});
	})

	//chosen container - dropdown js
	$(".chosen").chosen();
	$("#searchChildForm select").chosen();

	$(".chosen-container").each(function() {
		$(this).click(function(){
			$(this).find("ul").slideToggle();
			$(this).toggleClass('arrow-up');
		})
	})

	//responsive width for chosen container
	var callback = function (){

   $('.chosen-container.chosen-container-single').innerWidth("100%"); 

	};

	$(document).ready(callback);

	$(window).resize(callback);//responsive width

	//campaign wizard: select a child js
	$(".js-child-photo .img-thumb").click(
		function(){
			x = this;
			$(".js-child-photo input[type='radio']").attr('checked', false);
			$(".js-child-photo .img-thumb").removeClass("ON");
			//$(x).siblings("img").addClass("ON");
			$(x).addClass("ON");
			$(x).children("input[type='radio']").attr('checked', true);
		}
	); 

	// CONTACTS MODAL HEIGHT
	if($(window).width()>641) {
		var contactContainerHeight = $(".email-share-modal").height() - $(".meail-share-modal-button").height() - 250;
		$(".js-contacts-container").height(contactContainerHeight);
	} else if($(window).width()<642) {
		var contactContainerHeight = $(".email-share-modal").height() - $(".meail-share-modal-button").height() - 220;
		$(".js-contacts-container").height(contactContainerHeight);
	}


	// camapign preview popovers 
	//$("#report .text").on('click', function(){
		//$("#report .popover-container").css('display','block');
	//})
	//$(".edit-goal").on('click', function(){
	//	$("#goal-editor .popover-container").css('display','block');
    //	})

	//$('.popover-content .circle-close').on('click',function(){
		//$(this).closest('.popover-container').css('display','none');
	//})

	//campaign title in-place editing
	//$("h1.campaign-title .pencil-icon").on('click', function(){
		//$("h1.campaign-title").css('display',"none");
		//$(".campaign-title-editing").css('display',"block");
	//})

	// $(".campaign-title-editing .cancel").on('click', function(){
	// 	$("h1.campaign-title").css('display',"block");
	// 	$(".campaign-title-editing").css('display',"none");
	// })

	
	// $('#progress-confirm.active').closest('#checkout-progress').css('width','100%');

	//checkout confirmation page donation details toggle

	//$('#toggleDetails').on('click', function(){
		//$('.wi-complete').slideToggle();
		//$('#toggleDetails i').toggleClass('fa-sort-down');
		//$('#toggleDetails i').toggleClass('fa-sort-up');
	//})

	$('.timepicker').timepicki();

	//message banners

	


})(jQuery);  

//for adding years

for(y=0; y<4; y++) {
	var yearElements = document.getElementsByClassName("year")
	for (var i = 0; i < yearElements.length; ++i) {
		var today = new Date();           // today's date
		var year = today.getFullYear();   // year of today
		var yearNode = document.createElement("option");                 // Create <option> node
		var yearAtt = document.createAttribute("value");       // Create a "value" attribute
		yearAtt.value = y + year;                           // Set the value of the value attribute
		yearNode.setAttributeNode(yearAtt);                          // Add the value attribute to <option>
		yearNode.innerHTML = y + year;
		    var yearElement = yearElements[i];  
		    yearElement.appendChild(yearNode);
	}
}


function getDaysInMonth(month) {
	var selectedYear = month.previousElementSibling.value;
    var selectedMonth = month.value;
	var x = month.nextElementSibling.options.length;
	var dateSelectField = month.nextElementSibling;
	dateSelectField.length = 1;
    if(!isNaN(selectedYear) && !isNaN(selectedMonth) ) {
    	var dayNumber = new Date(selectedYear,selectedMonth, 0).getDate();
    	for(i=0; i < dayNumber; i++) {
			var dateNode = document.createElement("option");                 // Create <option> node
			var dateAtt = document.createAttribute("value");       // Create a "value" attribute
			dateAtt.value = i+1;                           // Set the value of the value attribute
			dateNode.setAttributeNode(dateAtt);                          // Add the value attribute to <option>
			dateNode.innerHTML = i+1;
			dateSelectField.appendChild(dateNode);     // Append <option> to <select>
		}
    } 
}

function textCounter(field, counter, maxlimit) {          
	var counterField = document.getElementById(counter);	
    if (field.value.length > maxlimit) {
     	field.value = field.value.substring(0, maxlimit);
    } else {
		counterField.innerHTML = maxlimit - field.value.length;
	}
}

//show password in create account form
$(function () {
  $(".showpassword").each(function (index, input) {
    var $input = $(input);
    $(".toggle-password").click(function () {
      var change = "";
      if ($(this).html() === "Show Password") {
        $(this).html("Hide Password")
        change = "text";
      } else {
        $(this).html("Show Password");
        change = "password";
      }
      var rep = $("<input type='" + change + "' />")
        .attr("id", $input.attr("id"))
        .attr("name", $input.attr("name"))
        .attr('class', $input.attr('class'))
        .val($input.val())
        .insertBefore($input);
      $input.remove();
      $input = rep;
    }).insertAfter($input);
  });
});

