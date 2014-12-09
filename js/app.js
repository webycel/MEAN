(function(){

    /**
     * anewsing angular module
     */
    var anewsing = angular.module('anewsing', ['ui.router'])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state(
                        'home', {
                            url: '/home',
                            templateUrl: '_home.html',
                            controller: 'MainCtrl'
                        }
                    )
                    .state(
                        'posts', {
                            url: '/posts/{id}',
                            templateUrl: '_posts.html',
                            controller: 'PostsCtrl'
                        }
                    );
                $urlRouterProvider.otherwise('home');
            }
        ]);

    /**
     * MainCtrl
     * @param  {[type]} $scope [scope]
     * @param  {[type]} posts  [posts service]
     */
    anewsing.controller('MainCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {

        $scope.posts = posts.posts;

        $scope.addPost = function() {
            $scope.posts.push( { 
                title: $scope.title, 
                link: $scope.link, 
                upvotes: 0
            } );
            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };

    }]);

    /**
     * PostsCtrl
     * @param  {[type]} $scope [scope]
     * @param  {[type]} posts  [posts service]
     */
    anewsing.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {

        $scope.post = posts.posts[$stateParams.id];

        $scope.addComment = function() {
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };

        $scope.incrementUpvotes = function() {

        };

    }]);

    /**
     * posts service
     */
    anewsing.factory('posts', [function() {
        var p = {
            posts: [
                {title: 'funny post', upvotes: 5,
                comments: [
                    {author: 'Joe', body: 'Cool post!', upvotes: 3},
                    {author: 'Alan', body: 'Cool article!', upvotes: 0},
                    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                ]},
                {title: 'Google', link: 'http://www.google.de', upvotes: 2,
                comments: [
                    {author: 'Joe', body: 'Cool post!', upvotes: 3},
                    {author: 'Alan', body: 'Cool article!', upvotes: 0},
                    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                ]},
                {title: 'very funny post', upvotes: 15,
                comments: [
                    {author: 'Joe', body: 'Cool post!', upvotes: 3},
                    {author: 'Alan', body: 'Cool article!', upvotes: 0},
                    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                ]},
                {title: 'post', upvotes: 9},
                {title: 'posting post', upvotes: 0}
            ]
        };
        return p;
    }]);

})();