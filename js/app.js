(function(){

    var anewsing = angular.module('anewsing', []);

    anewsing.controller('MainCtrl', ['$scope', function($scope) {

        $scope.posts = [
            {title: 'post 1', upvotes: 5},
		    {title: 'Google', link: 'http://www.google.de', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 0}
        ];

        $scope.addPost = function() {
            $scope.posts.push( { title: $scope.title, link: $scope.link, upvotes: 0 } );
            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };

    }]);

})();