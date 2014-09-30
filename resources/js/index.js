var tabuleiro,
posicaoDoNavio,
numLinhas,
numColunas,
numTentativas,
barraDeInformacoes,
ranking;
var posNavio, array = null;
var venceu = false;
var person, total;
var dur, dataIni;
var cookies, cookiesAll;

barraDeInformacoes = document.getElementById("barraDeInformacoes");
ranking = document.getElementById("ranking");
    
function inicializarTabuleiro(){
    var str = ""; 
    
	tabuleiro = document.getElementById("tabuleiro");
	numLinhas = document.getElementById("numLinhas").value;
	numColunas = document.getElementById("numColunas").value;
	numTentativas = document.getElementById("numTentativas").value;
	
    total = numTentativas;

    posNavio = [Math.floor(Math.random() * numLinhas), Math.floor(Math.random() * numColunas)];
    
    venceu = false;
	barraDeInformacoes.innerHTML = "";

	for(var i = 0; i < numColunas ; i++){
        str += "<tr>";
        
		for(var j = 0; j < numLinhas ; j++){           
            str += "<td class='' id="+  i +","+ j+ " onclick='myFunction(this)'></td>";		
        }
        str += "</tr>";
	}
    
    tabuleiro.innerHTML = str;
    
    dataIni = new Date();
    
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
                
                var points = total - numTentativas + 1;
                var dataFinal = new Date();
                
                dur = dataFinal.getTime() - dataIni.getTime();
                var seg = (dur/1000)%60;
                
                cookies = getCookie(person)+"<hidden><tr><td>"+dataFinal.toDateString()+"</td>"+
                            "<td>"+dataIni.toTimeString()+"</td>"+
                            "<td>"+numLinhas+'x'+numColunas+"</td>"+
                            "<td>"+points+"</td>"+
                            "<td>"+seg+"</td></tr>";
                
                setCookie(person, cookies, 30);
                    
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
    ranking.setAttribute('class', 'exibir');
    var tentativas = getCookie(person);
    document.getElementById('corpoDaListaDoRanking').innerHTML = tentativas;
    
}

function fecharRanking() {
    ranking.removeAttribute('class', 'exibir');
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

/*function setCookie(cname,date, time, size, tentativas, duracao,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}*/

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {

            return c.substring(name.length, c.length);
        }
    }
    return ""; 
    
}

function loginCookie() {
    person=getCookie("username");
    
    if (person) {
        barraDeInformacoes.innerHTML = "Welcome again " + person;
    }
    else{
        person = prompt("Please enter your name :)", "Winner");

        document.cookie="username=" + person + "; expires=Thu, 18 Dec 2015 12:00:00 UTC; path=/";
        barraDeInformacoes.innerHTML = "Hello " + person + "! Lets play!";
    }

}

function deleteCookie() {
    document.cookie = encodeURIComponent("username") + "=deleted; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    document.cookie = encodeURIComponent(person) + "=deleted; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    barraDeInformacoes.innerHTML = 'Successfully erased!';
    document.getElementById('corpoDaListaDoRanking').innerHTML = "";
}