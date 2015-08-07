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
		
		// below is the addPost function that will add parts to the object
		
	}
		
		this.addPost = function(post){
			post.timestamp = Date.now();
			post.comments= [];
			post.karma = 0;
			post.id = guid();
			
			var url = 'https://devmtn.firebaseio.com/posts/' + post.id + '.json'
			return $http.put(url, post)
		}
		
		//The below function gives the post.id from the guid function a unique id
		
		var guid = function() {
    		var s4 = function() {
      		return Math.floor((1 + Math.random()) * 0x10000)
        	.toString(16)
       	 	.substring(1);
    	}	
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	      s4() + '-' + s4() + s4() + s4();
  		}

	
})