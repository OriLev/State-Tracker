app.controller('mainCtrl', function($scope) {

	//the array where you place your data from the user
	$scope.feel = [];

	//recieving the specification from the user
	$scope.addQuestion = function(q) {

		var question = {
			qusetion:$scope.que,
			time:$scope.time,
			start:$scope.start,
			end:$scope.end,
			int:$scope.intervals
		};

		$scope.feel.push(question);
	};
});