app.controller('mainCtrl', ['$scope', 'posts', function($scope, posts) {
	posts.getAll().then(function () {
    $scope.posts = posts.posts;

  });
	// //the array where you place your data from the user
	// $scope.feel = [];

	//recieving the specification from the user
	$scope.addQuestion = function(q) {

		var question = {
			question:$scope.que,
			time:$scope.time
			// start:$scope.start,
			// end:$scope.end,
			// int:$scope.intervals
		};

		$scope.posts.push(question);
	};
}]);