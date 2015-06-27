/* globals $ */
'use strict';

angular.module('bookstoreApp')
    .directive('bookstoreAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
