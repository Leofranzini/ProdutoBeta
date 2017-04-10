app.config(function($routeProvider){
	$routeProvider
	.when("/listagem",{
		templateUrl : "listagem.html",
		controller : "listagemController"
	})
	.when("/cadastro",{
		templateUrl : "cadastro.html",
		controller : "cadastroController"
	})
	.when("/editar/:id",{
		templateUrl : "cadastro.html",
		controller : "cadastroController"
	})
	.otherwise("/listagem")
});