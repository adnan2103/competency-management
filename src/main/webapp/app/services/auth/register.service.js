(function () {
    'use strict';

    angular
        .module('dbsCompetencyPortalApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
