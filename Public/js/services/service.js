

app.factory('posts', ['$http', function ($http) {
  var track = {
    posts: []
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
    return $http.post('/questions' , post);
    
  };

  track.delete = function (post) {
    console.log(post);
    return $http.delete('/questions/' + post._id).success(function(data){
    	console.log(track.posts.indexOf(post));
    	track.posts.splice(track.posts.indexOf(post),1);
    });
  };


  return track;
}]);