var app = angular.module("myShoppingList",[]);
app.controller("myCtrl",function($scope){
	$scope.produtos = ["Milk","Bread ","Cheese","Outro"];
	$scope.nomes = ["Hagleyson","Fernandes","Leite"]; 
	$scope.addItem = function(){
		if ($scope.produtos.indexOf($scope.item) == -1) {
	      $scope.produtos.push($scope.item);
	    } else {
	      $scope.errortext = "The item is already in your shopping list.";
	      console.log($scope.errortext)
	    }
	}
	$scope.removeItem = function (x) {
	    $scope.errortext = "";
	    $scope.produtos.splice(x, 1);
	  }
})