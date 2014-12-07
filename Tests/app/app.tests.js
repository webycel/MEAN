'use strict';

describe('MainCtrl', function(){

	var scope;//we'll use this scope in our tests
	 
    //mock anewsing to allow us to inject our own dependencies
    beforeEach(angular.mock.module('anewsing'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('MainCtrl', {$scope: scope});
    }));

    // tests start here

    it('should fetch list of posts', function() {
    	expect(scope.posts.length).toBe(5);
    	expect(scope.posts[0].title).toBe('post 1');

    	for(var i in scope.posts) {
    		expect(scope.posts[i].upvotes >= 0).toBeTruthy();
    	}
    });

});