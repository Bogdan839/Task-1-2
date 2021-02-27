

// Если браузеров поддерживатеся веб-п будет выдавать соответственный класс, если же нет - будет jpeg
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});;

    // Score
    var joro = ('Количество картинок: ' + document.getElementById('blockInner').getElementsByTagName("a").length);
    document.getElementById('score').innerHTML = joro;

    // Data
    var x = new Date();
    myVar = x.toString();
    document.getElementById('data').innerHTML = x;

    // Photo
    $(function(){
        $('.minimized').click(function(event) {
          var i_path = $(this).attr('src');
          $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
          $('#magnify').css({
           left: ($(document).width() - $('#magnify').outerWidth())/2,
           // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
                  top: ($(window).height() - $('#magnify').outerHeight())/2
         });
          $('#overlay, #magnify').fadeIn('fast');
        });
        
        $('body').on('click', '#close-popup, #overlay', function(event) {
          event.preventDefault();
          $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
          });
        });
      });
    
    






