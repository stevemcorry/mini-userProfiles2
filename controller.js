angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.currentPage = 1;
  $scope.getUsers = function() {
    mainService.getUsers($scope.currentPage).then(function(response) {
      $scope.users = response.data.data;
    });
  };
  $scope.getUsers();

$scope.prev = function() {
  if($scope.currentPage > 1){
  $scope.currentPage--;
  $scope.getUsers();
}
};

$scope.next = function() {
  if($scope.currentPage < 4){
  $scope.currentPage++;
  $scope.getUsers();
}
};

  });
