(function() {
    angular.module('ngInnovation')
    .controller('homeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.test = "this is me!!!!";

        $scope.onUpload = function () {
            console.log("hello");
            let file = $scope.myFile;
            console.log("file ===", file);
            var fileFormData = new FormData();
            fileFormData.append('file', file);
            console.log(JSON.stringify(fileFormData));
        }

    }

})();