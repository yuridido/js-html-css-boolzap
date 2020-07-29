$(document).ready(function() {
    // FACCIO PARTIRE IL MESSAGGIO CON IL TASTO INVIO
    $('#mess-text').keydown(function(event) {
        if (event.which == 13) {
            invio();
            $('#mess-text').val('');
        }
    });
    // E QUANDO USO L'ICONA
    $('#enter').click(function() {
        invio();
        $('#mess-text').val('');
    });





















});








// FUNZIONI
// funzione per creare il mio messaggio
function invio() {
    var testo = $('#mess-text').val();
    var contenitore = $('.template .messaggio').clone().addClass('mandato');
    var d = new Date();
    var ora = d.getHours();
    var minuti = d.getMinutes();
    $(contenitore).children('p').append(testo);
    $(contenitore).children('.ora-mess').append(ora + ':' + minuti);
    $('.text-box').append(contenitore);

}
