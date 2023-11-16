var numeroSecreto = parseInt(Math.random() * 1000) +1;
var cont = 1;
var tentativa = 'chute';
var numeromaximo = prompt("Vamos começar um Jogo!! \nCom quantas tentativas você descobre o número secreto entre 0 e 1000?");
var tentativasRestantes = numeromaximo;


while (chute != numeroSecreto && cont <= numeromaximo) {    
    var chute = prompt('Digite um número entre 0 e 1000');
    if (chute == numeroSecreto) {
        alert(`Você acertou com ${cont} ${tentativa}`);
    } else if (chute < numeroSecreto) {
        alert(`Você errou! O número secreto é maior que ${chute} :( \nVocê já deu ${cont} ${tentativa}`);
    } else if (chute > numeroSecreto) {
        alert(`Você errou! O número secreto é menor que  ${chute} :( \nVocê já deu ${cont} ${tentativa}`);    
    }

    tentativasRestantes--; 
    cont++;

    if (cont == 1) {
        tentativa = 'chute';
    } else {
        tentativa = 'chutes';
    }
}


