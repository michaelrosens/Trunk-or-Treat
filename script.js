

  $(document).ready(function() {
    $('.trunk-card').hover(
      function() {
        $(this).find('.trunk-description').slideDown();
      },
      function() {
        $(this).find('.trunk-description').slideUp();
      }
    );
  });

