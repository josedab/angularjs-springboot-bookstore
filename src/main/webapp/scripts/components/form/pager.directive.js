/* globals $ */
'use strict';

angular.module('bookstoreApp')
    .directive('bookstoreAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
