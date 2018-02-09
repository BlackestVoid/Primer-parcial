$(document).ready(function(){

    $("#btn_contacto").click(function(e){
        e.preventDefault();
        let user = $("#usuario").val();
        let password = $("#pass").val();

        if (user=="") {
            $("#usuario").focus();
            $("#usuario").addClass("error");
        }
        if (password=="") {
            $("#pass").focus();
            $("#pass").addClass("error");
        }


        let personas = [{ "nombre": "Abraham Pech", "materia": "Tecnología Web", "password": 123456, "Cuatrimestre": "8vo" },
            { "nombre": "Israel Mézquita","materia": "Tecnología Web II", "password": 9876212,"Cuatrimestre": "9vo" },
            { "nombre": "Jorge Campos", "materia": "Administración", "password": 648514, "Cuatrimestre": "1vo" },
            { "nombre": "Hugo Sánchez", "materia": "Contabilidad","password": 231126, "Cuatrimestre": "3vo" },
            { "nombre": "Carlos Calvo", "materia": "Matemáticas", "password": 1231231, "Cuatrimestre": "2vo"},
            { "nombre": "Cristina Jiménez", "materia": "Mercadotecnia", "password": 1231585, "Cuatrimestre": "3vo"}];

        personas.forEach(function(persona){


            if (persona.nombre===user && persona.password==password) {
                $("#respuesta").html("Usuario: "+persona.nombre+ " Materia:"+persona.materia+ " Password:"
                +persona.password+" Cuatrimestre en curso:"+persona.Cuatrimestre);
            }
            /*else {
                $("#respuesta").html("user o pass incorrecto");
            }*/




        });
        $("#usuario,#pass").keyup(function(){
            $(this).removeClass("error");
        });

    });
});


$("#btn_contacto").click(function(){
    let objeto = {};
    $(".form-control").each(function(){
        $(this).parent().removeClass("has-error");


        if($(this).val() == ""){
            $(this).parent().addClass("has-error");
        }else{
            objeto[$(this).attr("name")] = $(this).val();
        }



    });

    $.post( "includes/login.php",objeto, function( data ) {
    });


});

$(".form-control").keypress(function(){
    $(this).parent().removeClass("has-error");
});