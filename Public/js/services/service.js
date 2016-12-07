

app.factory('posts', ['$http', function ($http) {
  var track = {
    posts: [{question:"why did i learn code?", time:12}]
  };

  // $scope.beers = beers.beers;

  track.getAll = function () {
  return $http.get('/questions').success(function (data) {
    // this copies the response posts to the client side
    // 'posts' under 'track'
    angular.copy(data, track.posts);
    return data;
  	});
  };

  track.create = function (post) {
    console.log('went from the controller to the service');
    console.log(post);
    return $http.post('/' , post);
    
  };

  // track.delete = function (post) {
  //   console.log(post);
  //   return $http.delete('/' + post._id).success(function(data){
  //   	console.log(track.posts.indexOf(post));
  //   	track.posts.splice(track.posts.indexOf(post),1);
  //   });
  // };

  // beerService.put = function(beerId, rate) {
  // 	console.log("edit this beer" + beerId);
  // 	return $http.put('/beers/' + beerId).success(function(data){
  // 		console.log(data);

  // 	});
  // };

  return track;
}]);