var tabuleiro,
posicaoDoNavio,
numLinhas,
numColunas,
numTentativas,
barraDeInformacoes;
var posNavio, array = null;
var venceu = false;

function inicializarTabuleiro(){
    var str = ""; 
    
	tabuleiro = document.getElementById("tabuleiro");
	numLinhas = document.getElementById("numLinhas").value;
	numColunas = document.getElementById("numColunas").value;
	numTentativas = document.getElementById("numTentativas").value;
	barraDeInformacoes = document.getElementById("barraDeInformacoes");
    
    posNavio = [Math.floor(Math.random() * numLinhas), Math.floor(Math.random() * numColunas)];
    
    console.log(numColunas);
    console.log(numLinhas);
    console.log(numTentativas);
    console.log(barraDeInformacoes);
	
	for(var i = 0; i < numColunas ; i++){
        str += "<tr>";
        
		for(var j = 0; j < numLinhas ; j++){           
            str += "<td class='' id="+  i +","+ j+ " onclick='myFunction(this)'></td>";		
        }
        str += "</tr>";
	}
    
    tabuleiro.innerHTML = str;
    
    return false;
}

function myFunction(e) {
    var classname = e.className;
    var tdId = e.id;
    
    if(venceu) {
        alert('Você já venceu o jogo!');
        return;
    }
    
    if (numTentativas > 0) {
        if(classname == '') { // posição nova
            if(posNavio == tdId) { // acertou o submarino
                e.setAttribute('class', 'com_submarino com_explosao');
                setTimeout(function(){
                    e.setAttribute('class', 'com_submarino');
                }, 1000);
                barraDeInformacoes.innerHTML = 'Parabéns, você venceu!';
                venceu = true;
                
                return;
            } else { // errou
                e.setAttribute('class', 'com_explosao');
                setTimeout(function(){
                    e.setAttribute('class', 'desabilitado');
                }, 500);
            }         
        } else { // posição desabilitada
            alert('Você já atirou aqui! Tente outra posição');
            return;
        }
    } else {        
        alert('Sua quantidade de tentativas chegou ao fim, reinicie o jogo!');        
        return;
    }
    
    numTentativas--;
    if(numTentativas == 0){
        venceu = false;
        barraDeInformacoes.innerHTML = 'Você perdeu, reinicie o jogo!';
    } else
        barraDeInformacoes.innerHTML = 'Ainda resta(m) <b>'+ numTentativas +'</b> tentativa(s)';
}

function exibirRanking(){

}


function loginCookie() {

}

function deleteCookie(){





}