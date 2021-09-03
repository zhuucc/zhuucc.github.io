(function($){
  $(function(){

    $('.button-collapse').sideNav({
      closeOnClick: true
    });
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset:50
    });
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.modal').modal();
    $('.materialboxed').materialbox();

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );

/*    var options = [
      {selector: '.header', offset: 100, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
    ];
    Materialize.scrollFire(options);*/

    var wow = new WOW(
        {
            offset: 50,
            mobile: false,
            live: true
        }
    );
    wow.init();

  }); // end of document ready
})(jQuery); // end of jQuery name space
