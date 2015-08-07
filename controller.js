angular.module('app');
app.controller('PostsController', function($scope, FirebaseService){
	
	$scope.getPosts(){
		FirebaseService.returnPosts().then(function(data){
			$scope.posts = data
		});
	}
	
	$scope.getPosts();
	
})
