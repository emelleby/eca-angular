function activeClass() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
};


//Change button class and insert the checkmark
$(document).ready(function() {
  $('[data-toggle=filter]').click(function() {
	var button = $(this);
	$(button).toggleClass('btn-success');
	$(button).toggleClass('btn-info');
  });
});

$(document).'sidebar'.button.click =(function() {
  $('[data-toggle=filter]').click(function() {
	var button = $(this);
	$(button).toggleClass('btn-success');
	$(button).toggleClass('btn-info');
  });
});