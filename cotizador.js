$('#Nosotros-click').click( function(e) {
    e.preventDefault();
   
    $('html, body').animate({
        scrollTop: $("#Nosotros").offset().top  
    }, 1000);
} );

$('#Portfolio-click').click( function(e) {
    e.preventDefault();
   
    $('html, body').animate({
        scrollTop: $("#Portfolio").offset().top  
    }, 1000);
} );

$('#Servicios-click').click( function(e) {
    e.preventDefault();
   
    $('html, body').animate({
        scrollTop: $("#Servicios").offset().top  
    }, 1000);
} );

$('#Contacto-click').click( function(e) {
    e.preventDefault();
   
    $('html, body').animate({
        scrollTop: $("#Contacto").offset().top
    }, 1000);
} );

var outputSup3 = $("#customRange3");
 var sliderValue3 = $("#valueSlider3");

var outputSup4 = $("#customRange4");
 var sliderValue4 = $("#valueSlider4");

var outputSup5 = $("#customRange5");
 var sliderValue5 = $("#valueSlider5");

var outputSup6 = $("#customRange6");
 var sliderValue6 = $("#valueSlider6");


function calculoAuto1(val) {
    var divobj = $("#totalparcial1");
    var tot_price = val * Servicio1.precio;
    divobj.val(tot_price);
    divobj.html(tot_price);
}
function calculoAuto2(val) {
    var divobj = $("#totalparcial2");
    var tot_price = val * Servicio2.precio;
    divobj.val(tot_price);
    divobj.html(tot_price);
}
function calculoAuto3() {
    sliderValue3.html(outputSup3.val());
    var checkSuperficie = outputSup3.val();
    var divobj = $("#totalparcial3");
    var sup3 = 0;
    if(checkSuperficie >= 1 && checkSuperficie < 800) {
        sup3 = 1;
    } else if (checkSuperficie >= 800 && checkSuperficie < 1300) {
        sup3 = 1.2;
    } else if (checkSuperficie >= 1300) {
        sup3 = 1.3;
    }
    var tot_price = Servicio3.precio * $("#cantidad3").val() * sup3;
    divobj.val(tot_price);
    divobj.html(tot_price);
}
function calculoAuto4() {
    sliderValue4.html(outputSup4.val());
    var checkSuperficie = outputSup4.val();
    var divobj = $("#totalparcial4");
    var sup4 = 0;
    if(checkSuperficie >= 1 && checkSuperficie < 800) {
        sup4 = 1;
    } else if (checkSuperficie >= 800 && checkSuperficie < 1300) {
        sup4 = 1.2;
    } else if (checkSuperficie >= 1300) {
        sup4 = 1.3;
    }
    var tot_price = Servicio4.precio * $("#cantidad4").val() * sup4;
    divobj.val(tot_price);
    divobj.html(tot_price);
}
function calculoAuto5() {
    sliderValue5.html(outputSup5.val());
    var checkSuperficie = outputSup5.val();
    var divobj = $("#totalparcial5");
    var sup5 = 0;
    if(checkSuperficie >= 1 && checkSuperficie < 800) {
        sup5 = 1;
    } else if (checkSuperficie >= 800 && checkSuperficie < 1300) {
        sup5 = 1.2;
    } else if (checkSuperficie >= 1300) {
        sup5 = 1.3;
    }
    var tot_price = Servicio5.precio * $("#cantidad5").val() * sup5;
    divobj.val(tot_price);
    divobj.html(tot_price);
}
function calculoAuto6() {
    sliderValue6.html(outputSup6.val());
    var checkSuperficie = outputSup6.val();
    var divobj = $("#totalparcial6");
    var sup6 = 0;
    if(checkSuperficie >= 1 && checkSuperficie < 800) {
        sup6 = 1;
    } else if (checkSuperficie >= 800 && checkSuperficie < 1300) {
        sup6 = 1.2;
    } else if (checkSuperficie >= 1300) {
        sup6 = 1.3;
    }
    var tot_price = Servicio6.precio * $("#cantidad6").val() * sup6;
    divobj.val(tot_price);
    divobj.html(tot_price);
}

class Product {
    constructor(nombre, precio, superficie, cantidad, total) {
        this.nombre = nombre;
        this.precio = precio; 
        this.superficie = superficie
        this.cantidad = cantidad;
        this.total = this.precio*this.cantidad || 0;
    }
}

var Servicio1 = new Product("Render Exterior", 1800, 1, $("#cantidad1").val(), 1);
var Servicio2 = new Product("Render Interior", 1300, 1, $("#cantidad2").val(), 1);
var Servicio3 = new Product("Plano de Arquitectura", 1300, outputSup3.val(), $("#cantidad3").val(), 1);
var Servicio4 = new Product("Presentacion Municipal", 3500, outputSup4.val(), $("#cantidad4").val(), 1);
var Servicio5 = new Product("Simulacion de Incendio", 3500, outputSup5.val(), $("#cantidad5").val(), 1);
var Servicio6 = new Product("Plano de Evacuacion", 1500, outputSup6.val(), $("#cantidad6").val(), 1);

function Calcular(){
    var totalGuardado = parseInt(($("#totalparcial1")).html()) + 
    parseInt(($("#totalparcial2")).html()) +
    parseInt(($("#totalparcial3")).html()) + 
    parseInt(($("#totalparcial4")).html()) +
    parseInt(($("#totalparcial5")).html()) + 
    parseInt(($("#totalparcial6")).html())

    $("#total").html(totalGuardado)
    
    localStorage.clear();
        localStorage.setItem("cotizacionPrevia1",JSON.stringify({"Servicio1" : Servicio1.nombre, "Cantidad1" : parseInt($("#cantidad1").val()),"TotalParcial1" : $("#totalparcial1").html()}))
        localStorage.setItem("cotizacionPrevia2",JSON.stringify({"Servicio2" : Servicio2.nombre, "Cantidad2" : parseInt($("#cantidad2").val()),"TotalParcial2" : $("#totalparcial2").html()}))
        localStorage.setItem("cotizacionPrevia3",JSON.stringify({"Servicio3" : Servicio3.nombre, "Cantidad3" : parseInt($("#cantidad3").val()),"TotalParcial3" : $("#totalparcial3").html()}))
        localStorage.setItem("cotizacionPrevia4",JSON.stringify({"Servicio4" : Servicio4.nombre, "Cantidad4" : parseInt($("#cantidad4").val()),"TotalParcial4" : $("#totalparcial4").html()}))
        localStorage.setItem("cotizacionPrevia5",JSON.stringify({"Servicio5" : Servicio5.nombre, "Cantidad5" : parseInt($("#cantidad5").val()),"TotalParcial5" : $("#totalparcial5").html()}))
        localStorage.setItem("cotizacionPrevia6",JSON.stringify({"Servicio6" : Servicio6.nombre, "Cantidad6" : parseInt($("#cantidad6").val()),"TotalParcial6" : $("#totalparcial6").html()}))
        localStorage.setItem("cotizacionPreviaTotal", JSON.stringify({"Total": totalGuardado}))
}

$.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales',
        function(data, status){ 
            var dolarventa = (data[1].casa).venta;
            sessionStorage.setItem("Preciodolar",JSON.stringify({"Preciodolar": (data[1].casa).venta}))      
});

function CotizacionPrevia(){
    document.getElementById("thead").innerHTML=`
        <tr>
            <th scope="col" style="width: 10em;">Servicio</th>
            <th scope="col" style="width: 7em;">Cantidad</th>
            <th scope="col" style="width: 10em;">Precio</th>
        </tr>`

    if((JSON.parse(localStorage.getItem("cotizacionPrevia1"))).Cantidad1 > 0){
        document.getElementById("tbody1").innerHTML=`
                <th scope="row">${(JSON.parse(localStorage.getItem("cotizacionPrevia1"))).Servicio1}</th>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia1"))).Cantidad1}</td>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia1"))).TotalParcial1}</td>`
    }
    if((JSON.parse(localStorage.getItem("cotizacionPrevia2"))).Cantidad2 > 0){
        document.getElementById("tbody2").innerHTML=`
                <th scope="row">${(JSON.parse(localStorage.getItem("cotizacionPrevia2"))).Servicio2}</th>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia2"))).Cantidad2}</td>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia2"))).TotalParcial2}</td>`
    }
    if((JSON.parse(localStorage.getItem("cotizacionPrevia3"))).Cantidad3 > 0){
        document.getElementById("tbody3").innerHTML=`
                <th scope="row">${(JSON.parse(localStorage.getItem("cotizacionPrevia3"))).Servicio3}</th>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia3"))).Cantidad3}</td>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia3"))).TotalParcial3}</td>`
    }
    if((JSON.parse(localStorage.getItem("cotizacionPrevia4"))).Cantidad4 > 0){
        document.getElementById("tbody4").innerHTML=`
                <th scope="row">${(JSON.parse(localStorage.getItem("cotizacionPrevia4"))).Servicio4}</th>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia4"))).Cantidad4}</td>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia4"))).TotalParcial4}</td>`
    }
    if((JSON.parse(localStorage.getItem("cotizacionPrevia5"))).Cantidad5 > 0){
        document.getElementById("tbody5").innerHTML=`
                <th scope="row">${(JSON.parse(localStorage.getItem("cotizacionPrevia5"))).Servicio5}</th>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia5"))).Cantidad5}</td>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia5"))).TotalParcial5}</td>`
    }
    if((JSON.parse(localStorage.getItem("cotizacionPrevia6"))).Cantidad6 > 0){
        document.getElementById("tbody6").innerHTML=`
                <th scope="row">${(JSON.parse(localStorage.getItem("cotizacionPrevia6"))).Servicio6}</th>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia6"))).Cantidad6}</td>
                <td>${(JSON.parse(localStorage.getItem("cotizacionPrevia6"))).TotalParcial6}</td>`
    }
    document.getElementById("tbodyTotal").innerHTML=`
            <th scope="row">Total</th>
            <td> </td>
            <th scope="col">${(JSON.parse(localStorage.getItem("cotizacionPreviaTotal"))).Total}</th>`

    document.getElementById("tbodyTotalUsd").innerHTML=`
            <th scope="row">Total U$D</th>
            <td> </td>
            <th scope="col">${((JSON.parse(localStorage.getItem("cotizacionPreviaTotal"))).Total / 
            parseInt((JSON.parse(sessionStorage.getItem("Preciodolar"))).Preciodolar)).toFixed(2)}</th>`

    $("#btn-cotizacionPrevia").disabled = true;
}