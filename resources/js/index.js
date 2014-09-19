var tabuleiro,
posicaoDoNavio,
numLinhas,
numColunas,
numTentativas,
barraDeInformacoes;
var str = ""; 
var posNavio, array = null;

function inicializarTabuleiro(){
	tabuleiro = document.getElementById("tabuleiro");
	numLinhas = document.getElementById("numLinhas").value;
	numColunas = document.getElementById("numColunas").value;
	numTentativas = document.getElementById("numTentativas").value;
	barraDeInformacoes = document.getElementById("barraDeInformacoes").value;
    
    posNavio = [Math.random(0, numLinhas), Math.random(0, numColunas)];
    
    console.log(numColunas);
    console.log(numLinhas);
    console.log(numTentativas);
    console.log(barraDeInformacoes);
	
	for(var i = 0; i < numColunas ; i++){
        str += "<tr>";
        
		for(var j = 0; j < numLinhas ; j++){
            str += "<td id="+ i +"x"+ j+ " onclick='myFunction(this)'></td>";		
        }
        str += "</tr>";
	}
    
    tabuleiro.innerHTML = str;

    return false;
}

function myFunction(e) {
    e.setAttribute('class', 'com_explosao');
    setTimeout(function(){
        
    });
}

function exibirRanking(){

}


function loginCookie() {

}

function deleteCookie(){





}