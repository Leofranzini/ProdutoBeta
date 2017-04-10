app.service('Produto',function(){
		
	var vetor =[
		{codigo:123,descricao:"batata",preco:2 },
		{codigo:124,descricao:"cebola",preco:3 },
		{codigo:125,descricao:"feijao",preco:2.5 }
	]

	this.lista = function(){
		return vetor;
	}

	this.cadastrar = function(produto){
		vetor.push(produto);
	}

	this.deletar = function(codigo){
		var index = 0;
		console.log(codigo);
		for(i in vetor) {
			if(codigo ==vetor[i].codigo){
				index = i;
			}
		}
			vetor.splice(index,1);
	}
})