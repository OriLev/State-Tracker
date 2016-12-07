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

		posts.create(question).success(function(data){
			console.log('got back from the server successfully');
			console.log(data);
			posts.getAll().then(function(data){
				console.log('here lies the data in the controller from the get all');
				console.log(data)
			});
		});

		// $scope.posts.push(question);
	};
}]);