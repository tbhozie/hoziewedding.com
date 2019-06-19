jQuery(document).ready(function(){

  $('#attending').change(function(){

    if($(this).val() == 'Yes') {
      $('.attending-guests').show();
      $('.guest-options').show();
    } else {
      $('.attending-guests').hide();
      $('.guest-options').hide();
    }

  });

  $('#addGuest').click(function(e){
    e.preventDefault();
    $('<input class="w-100 f5 pv3 ph3 bg-light-gray bn" type="text" name="guest-name[]" value="" placeholder="Guest Name">').appendTo('.attending-guests .inputs');
  });

  if (window.location.href.indexOf("?success") > -1) {
      $('#message').show();
  }

});
