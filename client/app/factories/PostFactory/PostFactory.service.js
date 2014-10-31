'use strict';

angular.module('yogurtCultureApp')
  .factory('PostFactory', function ($http) {
    
    var exports = {};

    exports.getAllPosts = function(){
      return $http.get('/api/posts');
    };

    exports.getPostById = function(postId){
      return $http.get('/api/posts/' + postId);
    };

    exports.createPost = function(newPost){
      return $http.post('/api/posts', newPost);
    };

    exports.updatePost = function(updatedPost){
      return $http.put('/api/posts/' + updatedPost._id, updatedPost);
    };

    exports.removePost = function(postId){
      return $http.delete('/api/posts/' + postId);
    };
    return exports;
  });
