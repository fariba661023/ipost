var app = angular.module("myModule", []);
app.controller('myCtrl',function($scope){
  $scope.method=["GET","Post","Put","Patch","Delete"];
});
switch (method) {
  case "method[1]":
           app.controller('myCtrl',function($scope,$Http){
           $http({
            method:"Get",
            url:"your-url"
            }).then(function mySuccess(response){
            $scope.myGet=response.data;
            },function myError(response){
            $scope.myGet=response.StatusText;
           });
         });
    break;
    case "method[2]":

      break;
  default:

}
