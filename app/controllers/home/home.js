/**
 * Created by adventis on 3/26/16.
 */
angular.module('angularjs-client-template').controller('HomeController', [
    "$scope",
    function($scope) {

        $scope.alert = function (text) {
            alert(text);
        }

    }]);