$( '.navbar-nav .nav-item a' ).on( 'click', function () {
      $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      $( this ).parent( 'li' ).addClass( 'active' );
});
