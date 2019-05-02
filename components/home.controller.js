(function() {
    angular.module('ngInnovation')
    .controller('homeController', HomeController);

    HomeController.$inject = ['$scope', '$http'];

    function HomeController($scope, $http) {
        $scope.test = "this is me!!!!";

        $scope.onUpload = function () {
            console.log("hello");
            let file = $scope.myFile;
            console.log("file ===", file);
            var fileFormData = new FileReader();
            fileFormData.readAsText(file);
            //fileFormData.append('file', file);
            console.log(JSON.stringify(fileFormData));

            // var request = {
            //     method: 'POST',
            //     url: '/api/fileupload/',
            //     data: formdata,
            //     headers: {
            //         'Content-Type': undefined
            //     }
            // };

            // // SEND THE FILES.
            // $http(request)
            //     .success(function (d) {
            //         alert(d);
            //     })
            //     .error(function () {
            //     });
        }

    }

})();