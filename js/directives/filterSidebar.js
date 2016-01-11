app.directive('filterSidebar', function () {
  return {
	  // E for Element, A for attribute
    restrict: 'EA',
	  // Isolating the Scope. Defining the model here for this directive.
    //scope: {
		// '@' is text, '=' is object with two-way binding, '&' for a function
      //data: '='
   //},
	  // Replace the custom tags
    replace: true,
	  // 
    templateUrl: 'pages/filterSidebar.html'
  };
});
