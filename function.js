var numeroSecreto = parseInt(Math.random() * 1000) +1;
var cont = 1;
var tentativa = 'chute';
var tentativasRestantes = 10;

while (chute != numeroSecreto || cont <= tentativasRestantes) {    
    alert(`Vamos começar o jogo! Você tem ${tentativasRestantes} tentativas`)   
    var chute = prompt('Digite um número entre 0 e 1000');
    if (chute == numeroSecreto) {
        alert(`Você acertou com ${cont} ${tentativa}`);
    } else if (chute < numeroSecreto) {
        alert(`Você errou! O número secreto é maior que ${chute} :( Você já deu ${cont} ${tentativa}`);
    } else if (chute > numeroSecreto) {
        alert(`Você errou! O número secreto é menor que  ${chute} :( Você já deu ${cont} ${tentativa}`);    
    }
    tentativasRestantes--; 
    cont++;
    if (cont == 1) {
        tentativa = 'chute';
    } else {
        tentativa = 'chutes';
    }
}


