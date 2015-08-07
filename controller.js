var app = angular.module('reddit');
app.controller('PostsController', function($scope, FirebaseService){
	
	$scope.getPosts = function(){
		FirebaseService.getAllPosts().then(function(posts){
			$scope.posts = posts
		});
	}
	
	$scope.getPosts();
	
	$scope.addPost = function(){
		FirebaseService.addPost($scope.newPost)
		.then($scope.getPosts)
	}
	
	$scope.vote = function(post.id, direction){
		FirebaseService.vote()
	}

})
