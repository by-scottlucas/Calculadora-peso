function pesoIdeal() {

    let sexoSelecionado = [];

    let sexo = document.getElementsByName('sexo');

    for (var i=0; i<sexo.length; i++) {
        if (sexo[i].checked) {
            console.log("o sexo selecionado foi " + sexo[i].value)
            sexoSelecionado.push(sexo[i].value)
        }
    }

    var idade = parseInt(document.getElementById("idade").value);

    var altura = parseInt(document.getElementById("altura").value);

    var pesoMinMulher = altura - 110;
    var pesoMaxMulher = pesoMinMulher + 15;

    var pesoMinHomem = altura - 100;
    var pesoMaxHomem = pesoMinHomem + 15;

    var pesoMulher = pesoMinMulher + 7;
    var pesoHomem = pesoMinHomem + 7;

    var div = document.getElementById("result"); // exibir resultado

    if (sexoSelecionado == 'feminino') {                        
    document.getElementById("resultado").innerHTML = 'Seu peso ideal é ' + pesoMulher + 'kg. ' + 'No entanto, continua sendo considerado saudável se variar entre ' + pesoMinMulher + 'kg e ' + pesoMaxMulher + 'kg.'+ '<br><br> Caso você sinta que este resultado não se adequa ao seu biotipo é aconselhado que busque aconselhamento individual com um nutricionista ou um profissional de educação física, por exemplo, para fazer outras medições mais objetivas, como uma bioimpedância, para entender qual o peso que melhor se adequa para você.';

    div.style.display = "block";

    resultado.scrollIntoView({ behavior: 'smooth' });
    }

    else{
        if (sexoSelecionado == 'masculino') {
            document.getElementById("resultado").innerHTML = 'Seu peso ideal é ' + pesoHomem + 'kg. ' + 'No entanto, continua sendo considerado saudável se variar entre ' + pesoMinHomem + 'kg e ' + pesoMaxHomem + 'kg.' + '<br><br> caso você sinta que este resultado não se adequa ao seu biotipo é aconselhado que busque aconselhamento individual com um nutricionista ou um profissional de educação física, por exemplo, para fazer outras medições mais objetivas, como uma bioimpedância, para entender qual o peso que melhor se adequa para você.';

            div.style.display = "block";

            resultado.scrollIntoView({ behavior: 'smooth' });
        }
    }

}