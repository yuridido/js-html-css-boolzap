$(document).ready(function() {
    var risp = [
        "ok",
        "ciao",
        "saluti",
        "devo andare, ciao"
    ];

    // FACCIO PARTIRE IL MESSAGGIO CON IL TASTO INVIO
    $('#mess-text').keydown(function(event) {
        if (event.which == 13 || event.keyCode == 13) {
            invio();
            $('#mess-text').val('');
        }
    });
    // E QUANDO USO L'ICONA
    $('#enter').click(function() {
        invio();
        $('#mess-text').val('');
    });
    // al click sull'utente sposto l'area attiva
    $('.area-mess .blocco-mess').click(seleziona);










    // FUNZIONI
    // funzione per creare il mio messaggio
    function invio() {
        if ($('#mess-text').val() != "") {
            var testo = $('#mess-text').val();
            var contenitore = $('.template .messaggio').clone().addClass('mandato');
            // var d = new Date();
            // var ora = d.getHours();
            // var minuti = d.getMinutes();
            $(contenitore).children('p').append(testo);
            $(contenitore).children('.ora-mess').append(dataOrario());
            $('.text-box.active').append(contenitore);
            setTimeout(risposta, 2000);
        }
    }
    //funzione per risposta automatica
    function risposta() {

        var contenitore = $('.template .messaggio').clone().addClass('ricevuto');
        // var d = new Date();
        // var ora = d.getHours();
        // var minuti = d.getMinutes();
        $(contenitore).children('p').append(risp[random(0, 3)]);
        $(contenitore).children('.ora-mess').append(dataOrario());
        $('.text-box.active').append(contenitore);
        scroll();
    }
    // funzione per numero random
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // tentativo funzione scroll
    function scroll() {
        var ancor = $('.text-box.active .messaggio:last-child').position();
        $('.text-box.active').scrollTop(ancor.bottom);
    }

    function seleziona() {
        $('.area-mess .blocco-mess').removeClass('active');
        $(this).addClass('active');
        $('.chat .text-box').removeClass('active');
        var i = $(this).index();
        $('.chat .text-box').eq(i).addClass('active');
    }

    function dataOrario() {
        var d = new Date();
        var ora = d.getHours();
        var minuti = d.getMinutes();
        return addZero(ora) + ':' + minuti
    }

    function addZero(numero) {
        if (numero < 10) {
            return '0' + numero
        } else { return numero
        }
    }




});
