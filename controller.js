angular.module('reddit');
app.controller('PostsController', function($scope, FirebaseService){
	
	$scope.getPosts(){
		FirebaseService.getAllPosts().then(function(data){
			$scope.posts = data
		});
	}
	
	$scope.getPosts();
	
})
