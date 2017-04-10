app.controller ('cadastroController', function($scope, $location, Produto) {
	$scope.produto = {}
	var persons = Produto.lista()

	// Iteramos sobe a lista com todos produtos
	persons.map(function(person) {
		// Concatenamos a url
		var personWithUri = '/editar/' + person.codigo

		// Comparamos se é igual a que passamos pela URL
		if(personWithUri == $location.path()) {
			// Jogamos para a view 
			$scope.produto = person
		}
	})

	$scope.listagem = function() {
		$location.path("/listagem");
	}

	$scope.salvar = function(person = null) {
		if(person != null) {
			Produto.deletar(person.codigo)
			Produto.cadastrar($scope.produto)			
			$scope.listagem()
			return
		}

			Produto.cadastrar($scope.produto);
			$scope.listagem();
			return
	}
})