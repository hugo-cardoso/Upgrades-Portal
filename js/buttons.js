		function altera1(){
		    valor = document.getElementById('um').innerHTML;
		    if(valor == 'Fechar'){
		       document.getElementById('um').innerHTML = 'Próximo';
		       document.getElementById('um').className = 'btn btn-success';
		   }else{
		       document.getElementById('um').innerHTML = 'Fechar';
		       document.getElementById('um').className = 'btn btn-danger';
		   }
		}

		function altera2(){
		    valor = document.getElementById('dois').innerHTML;
		    if(valor == 'Fechar'){
		       document.getElementById('dois').innerHTML = 'Próximo';
		       document.getElementById('dois').className = 'btn btn-success';
		   }else{
		       document.getElementById('dois').innerHTML = 'Fechar';
		       document.getElementById('dois').className = 'btn btn-danger';
		   }
		}