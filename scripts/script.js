function calcularPesoIdeal() {

    const sexoSelecionado = Array.from(document.getElementsByName('gender')).find(sexo => sexo.checked)?.value;
    const idade = parseInt(document.getElementById("age").value);
    const altura = parseInt(document.getElementById("height").value);

    if (!sexoSelecionado || isNaN(idade) || isNaN(altura)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const pesoIdeal = sexoSelecionado === 'feminino' ? altura - 110 + 7 : altura - 100 + 7;
    const pesoMin = sexoSelecionado === 'feminino' ? altura - 110 : altura - 100;
    const pesoMax = pesoMin + 15;

    const resultadoTexto = `Seu peso ideal é ${pesoIdeal}kg. No entanto, continua sendo considerado saudável se variar entre ${pesoMin}kg e ${pesoMax}kg.<br><br> 
                            Caso você sinta que este resultado não se adequa ao seu biotipo, é aconselhado que busque aconselhamento individual com um nutricionista ou um profissional de educação física, 
                            por exemplo, para fazer outras medições mais objetivas, como uma bioimpedância, para entender qual o peso que melhor se adequa para você.`;

    const divResultado = document.getElementById("results");
    const textoResultado = document.getElementById("results-text");

    textoResultado.innerHTML = resultadoTexto;
    divResultado.style.display = "block";
    divResultado.scrollIntoView({ behavior: 'smooth' });

}
