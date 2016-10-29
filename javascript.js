angular.module('portalApp')
.controller('crowdmarkCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Math 135',
			details: 'Assignment 1'
		},
		{
			title:'Math 137',
			details: 'Mauris cursus, sapien et malesuada ultrices, purus sapien iaculis tellus, quis semper magna est at leo.'
		},
		{
			title:'CS 135',
			details: 'Donec id quam eu odio feugiat sagittis. Duis a tempus neque. Praesent elementum quis ante quis commodo. Sed tincidunt aliquet dolor sit amet laoreet. '
		},
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('crowdmarkMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('crowdmarkDetails.html', 2);
	}
}]);