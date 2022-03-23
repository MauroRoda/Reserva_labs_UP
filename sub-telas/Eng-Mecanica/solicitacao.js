
function Professor(){
    var Prof = document.getElementById("opcao").value;
    var Prof = 1;

    if (Prof == 1){
        var NomeDaLabel = 
            "<label for=" + "RGM" + "class=" + "field-label" + ">" + "Informe seu Nome" + "</label>"+" "
            +"<input type=" + "number" + "class=" + "field" + "placeholder=" + "Informe seu RGM ou CPF"
            +"required></input>" ;
        var Elemento1 = document.getElementById("CriaDiv");
        Elemento1.innerHTML = NomeDaLabel;
    }else{
        Elemento1.innerHTML = "";
    }

}

function Aluno(){
    var Aluno = document.getElementById("opcao").value;
    var Aluno = 1;

    if (Aluno == 1){
        var NomeDaLabel = 
            "<label for=" + "nome" + "class=" + "field-label" + ">" + "Informe seu Nome" + "</label>" + 
            " " + "<input type=" + "text" + "class=" + "field" + "placeholder=" + "Informe seu RGM ou CPF" + "></input>"
            +"<br/>" +
            "<label for=" + "RGM" + "class=" + "field-label" + ">" + "Informe seu RGM ou CPF" + "</label>" + 
            " " + "<input type=" + "number" + "class=" + "field" + "></input>";
        var Elemento1 = document.getElementById("CriaDiv");
        Elemento1.innerHTML = NomeDaLabel;
        console.log(NomeDaLabel);
    }else{
        Elemento1.innerHTML = "";
    }
}