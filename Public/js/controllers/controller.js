app.controller('mainCtrl', ['$scope', 'posts', function($scope, posts) {
	posts.getAll().then(function () {
    $scope.posts = posts.posts;

  });
	

	//recieving the specification from the user
	$scope.addQuestion = function(q) {

		var question = {
			question:$scope.question,
			askingTimes:$scope.askingTimes,
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
				$scope.posts.push(question);
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
	 //counter modelimiz için ilk değer atamasını yaptık.   
	$scope.counter = 5;
	var stopped;
	var ans;
	var _run = true;
	var timeBefore, timeAfter;
	//timeout function
	//1000 milliseconds = 1 second
	//Every second counts
	//Cancels a task associated with the promise. As a result of this, the //promise will be resolved with a rejection.  
	$scope.stop = function(){
	   $timeout.cancel(stopped);  
	   _run = false; 
	};

	$scope.countdown = function() {
		// while(run)
		// {
			if($scope.counter === 0) {
				ans=prompt("bla");
				console.log(ans);

				$scope.counter = 5;
				console.log(_run);


			}
		//}
	    stopped = $timeout(function() {
	       console.log($scope.counter);
	     $scope.counter--;   
	     $scope.countdown();   
	    }, 1000);
	  };
	   
	    
	 


}]);


