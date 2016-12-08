app.controller('mainCtrl', ['$scope', 'posts', function($scope, posts) {
	posts.getAll().then(function () {
    $scope.posts = posts.posts;

  });
	

	//recieving the specification from the user
	$scope.addQuestion = function(q) {

		var question = {
			question:$scope.question,
			askingTimes:[$scope.askingTimes],
			_avctive: true
			// clock:
			// startTime:$scope.start,
			// endTime:$scope.end
			// int:$scope.intervals
		};

		posts.create(question).success(function(data){
			console.log('got back from the server successfully');
			console.log(data);
			posts.getAll().then(function(data){
				console.log('here lies the data in the controller from the get all');
				console.log(data);
			});
		});

		
	};

	$scope.remove = function(post) {
		// $scope.beers.splice($index, 1);
		console.log(post);
		posts.delete(post);
	};
}]);

 

//timeout and scope are Angular's built-in services
//Adding injector
//Module timeout ve scope servislerini ekledik. Bunlar Anguların bizim için sağladığı yapısal servislerdir.
app.controller("counterCtrl",['$scope','$timeout', function($scope,$timeout){

	 //Adding initial value for counter 
	$scope.counter =  $scope.post.askingTimes[0];//5;
	var fla_g = $scope.post._avctive;
	var stopped;
	var ans;
	
	var timeBefore, timeAfter;
	//timeout function
	//1000 milliseconds = 1 second
	//Every second counts
	//Cancels a task associated with the promise. As a result of this, the //promise will be resolved with a rejection.  
	$scope.stop = function(){
	   $timeout.cancel(stopped);  
	   $scope.post._avctive = false; 
	};

	$scope.countdown = function() {
		$scope.post._avctive = true;		
			if($scope.counter === 0) {
				ans=prompt($scope.post.question);
				console.log(ans);

				$scope.counter = $scope.post.askingTimes[0];
				console.log($scope.post.askingTimes[0]);


			}
		//}
	    stopped = $timeout(function() {
	       console.log($scope.counter);
	     $scope.counter--;   
	     $scope.countdown();   
	    }, 1000);
	  };
	
	if (fla_g) {
		$scope.countdown();
	}
	 


}]);


