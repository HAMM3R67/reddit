angular.module('app');
app.service('FirebaseService', function($http, $q){
	
	this.getPosts = function(){
		return $q(function(resolve, reject){
			$.ajax({
				method: 'GET',
				url: 'https://devmtn.firebaseio.com/posts.json'
			})
		})
	}
	
	
	
})