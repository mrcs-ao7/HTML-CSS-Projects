const imc = (peso, altura) => peso / (altura * altura);

const situacao = (valor_imc) => {
    if(valor_imc <= 18.5) {
        return "Abaixo do Peso.";
    } else if(valor_imc <= 24.9) {
        return "Peso Ideal (Parabéns!).";
    } else if(valor_imc <= 29.9) {
        return "Levemente Acima do Peso.";
    } else if(valor_imc <= 34.9) {
        return "Obesidade Grau I.";
    } else if(valor_imc <= 39.9) {
        return "Obesidade Grau II (Severa).";
    } else {
        return "Obesidade Grau III (Mórbida).";
    }
}