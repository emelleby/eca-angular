function activeClass() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
	  console.log('toggle');
  });
};


//Change button class and insert the checkmark
$(document).ready(function() {
  $('[data-toggle=filter]').click(function() {
	var button = $(this);
	$(button).toggleClass('btn-success');
	$(button).toggleClass('btn-info');
	  console.log('toggle');
  });
});

$(document).'.sidebar'.button.click =(function() {
  $('[data-toggle=filter]').click(function() {
	var button = $(this);
	$(button).toggleClass('btn-success');
	$(button).toggleClass('btn-info');
  });
});