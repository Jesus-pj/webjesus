function identificar()
{
    var numero = document.getElementById("id_valor1").value;
    if(numero >85)
    {
        document.getElementById("resultado").innerHTML ="<h3 style='color: green;'>El deporte apropiado a practicar es: Natacion</h3>"

    }else{
        if(numero>70 & numero<=85){
            document.getElementById("resultado").innerHTML ="<h3 style='color: pink;'>El deporte apropiado a practicar es: tenis</h3>"
        }else{
            if(numero>32 & numero <=70){
                document.getElementById("resultado").innerHTML ="<h3 style='color: blue;'>El deporte apropiado a practicar es: Golf</h3>"
            }else{
                if(numero >10 & numero <=32){
                    document.getElementById("resultado").innerHTML ="<h3 style='color: red;'>El deporte apropiado a practicar es:Esquit</h3>"

                }else{
                    if(numero <=10){
                        document.getElementById("resultado").innerHTML ="<h3 style='color: green;'>El deporte apropiado a practicar es: Marcha</h3>"
                    }
                }
            }
        }
    }
}
