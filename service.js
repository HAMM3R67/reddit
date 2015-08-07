angular.module('reddit');
app.service('FirebaseService', function($http, $q){
	
	this.getAllPosts = function(){
		return $q(function(resolve, reject){
			$.ajax({
				method: 'GET',
				url: 'https://devmtn.firebaseio.com/posts.json'
			})
		})
	}
	
	
	
})