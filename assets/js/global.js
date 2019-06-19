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

  });

});
