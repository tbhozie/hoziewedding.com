jQuery(document).ready(function(){

  $('#attending').change(function(){

    if($(this).val() == 'Yes') {
      $('.attending-guests').show();
      $('.guest-options').show();
      $('.attending-guests input').attr('required', TRUE);
    } else {
      $('.attending-guests').hide();
      $('.guest-options').hide();
      $('.attending-guests input').attr('required', FALSE);
    }

  });

  $('#addGuest').click(function(){
    $('<input class="w-100 f5 pv3 ph3 bg-light-gray bn" type="text" name="guest-name[]" value="" placeholder="Guest Name">').appendTo('.attending-guests .inputs');
  });

});
