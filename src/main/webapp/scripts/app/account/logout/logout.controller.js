'use strict';

angular.module('bookstoreApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
