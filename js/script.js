function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(44.773599, 20.462422),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

function proveri(){
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var poruka = document.getElementById("tekst").value;
    var tel = document.getElementById("tel").value;
    var bi = 0;
    var bp = 0;
    var bt = 0;
    
    for(var i = 0; i < ime.length; i++){
        if(ime.charAt(i) === " " || !isNaN(ime.charAt(i))){
            bi++;
        }
    }
    if(bi > 0){
        alert("Niste pravilno uneli ime!");
    }
    
    for(var i = 0; i < prezime.length; i++){
        if(prezime.charAt(i) ===" " || !isNaN(prezime.charAt(i))){
            bp++;
        }
    }
    if(bp > 0){
        alert("Niste pravilno uneli prezime!");
    }
    
    if(poruka.length < 16){
        alert("Tekst poruke Vam je prekratak!");
    }
    else if(poruka.length > 550){
        alert("Tekst poruke Vam je predugačak!");
    }
    for(var i = 0; i < tel.length; i++){
        if(tel.charAt(0) === "+" && !isNaN(tel.charAt(i))){
            bt++;
        }
    }
    if(bt < tel.length - 1){
        alert("Niste pravilno uneli broj telefona!");
    }
}

function izracunaj(){
    var br = 0;
    var km = document.getElementById("km").value;
    var odabir = document.getElementById("model");
    var upis = document.getElementById("gorivo");
    var uVrednost = odabir.options[odabir.selectedIndex].value;
    var gorivo = uVrednost * km;
    var iGorivo = gorivo.toFixed(2);
    for(var i = 0; i < km.length; i++){
        if(isNaN(km.charAt(i))){
            br++;
        }
    }
    if(br > 0){
        alert("Niste ispravno uneli broj kilometara!");
    }
    else{
        upis.innerHTML = "<p align='center'>" + iGorivo + " litara" + "</p>";
    }
}