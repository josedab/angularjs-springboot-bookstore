'use strict';

angular.module('bookstoreApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


