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

});
