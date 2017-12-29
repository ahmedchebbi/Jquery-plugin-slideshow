(function ( $ ) {

    $.fn.ahmedshow = function(arr) {
$('head').append('<link rel="stylesheet" href="ahmedshow-style.css" type="text/css" />');
      var slideshow = $('<div>', {class: 'slideshow'});
var slides = $('<div>', {class: 'slides'});

var s = slideshow.append(slides);

$(this).append(s);

$.each(arr, function( i, val ) {

  //$( "#" + i ).append( document.createTextNode( " - " + val ) );
  var a = $('<div>', {class: 'slide', id: 'slide_'+i});
  var b = $('<img>', {class: 'image', src: val});
  var c = a.append(b);
  $('.slides').append(c);
});

$(function(){
      var position = 0;
      setInterval(function(){
         position -= 350;
         $(".slides").animate({left:-350},800,function(){
          var slide = $(".slide").first().detach();
          $(this).append(slide);
					$(this).css({left : 0});        	/*$(this).css({left:0}).find("div:last").after($(this).find("div:first"));*/
          if(position == -350 * arr.length) {
            position = 0;
          }
         })
      }, 3500);
   });

        return this;
    };

}( jQuery ));
