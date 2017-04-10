app.controller ('listagemController', function($scope, Produto, $location){
	$scope.listagem = Produto.lista()

	$scope.novo = function() {
		$location.path("/cadastro");
	}	

	$scope.deletar = function(produto) {
		Produto.deletar(produto);
		$scope.listagem = Produto.lista();
	}

	$scope.editar = function(produto) {
		$location.path("/editar/" + Produto.codigo);
	}
});