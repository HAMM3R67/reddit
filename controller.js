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
	
	//var post = post.id
	//$scope.vote = function(post, direction){
	//	FirebaseService.vote($scope.post)
	//	.then($scope.getPosts)
	//}

})
