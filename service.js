var app = angular.module('reddit');
app.service('FirebaseService', function($http, $q){
	
	this.getAllPosts = function(){
				
		// Below is the syntax for creating your own promise
		
		 var myPromise = $q(function(resolve, reject){
			$http.get('https://devmtn.firebaseio.com/posts.json').then(function(response){
				resolve(response.data)
		 }, reject)	
		 })
		 return myPromise
		
		// You could do a simple, elegant way without creating your own promise like below:
		
		//$http.get('https://devmtn.firebaseio.com/posts.json').then(function(response){
		//		return response.data
		//})
		
		// You can also do it without using the $http but $.ajax
		
		//return $q(function(resolve, reject){
		//	$.ajax({
		//		method: 'GET',
		//		url: 'https://devmtn.firebaseio.com/posts.json'
		//	})
		// })
	}
	
	
	
})