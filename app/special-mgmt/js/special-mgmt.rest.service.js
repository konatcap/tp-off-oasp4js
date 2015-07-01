angular.module('app.special-mgmt').factory('specialManagementRestService', function ($http, currentContextPath) {
    'use strict';

    var servicePath = currentContextPath.get() + 'services/rest/offermanagement/v1';

    return {
        getPaginatedSpecials: function (searchCriteria) {
			return $http.post(servicePath + '/special/search', searchCriteria);
        },
        deleteSpecial: function (id) {
            return $http.delete(servicePath + '/special/' + id);
        },
        saveSpecial: function (special) {
            return $http.post(servicePath + '/special/', special);
        },
        getSpecial: function (id) {
            return $http.get(servicePath + '/special/' + id);
        }
    };
});
