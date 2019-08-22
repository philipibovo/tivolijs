/*!
 * 2018.08.01
 * tivolijs 1.0.0 (https://philipi.bovo.me/tivolijs)
 * By Philipi Bovo
 */

$(document).ready(function() {
  $('.tivoli-validate').each(function() {
    $(this).attr('novalidate','true');
  });

  $('.tivoli-style input, .tivoli-style textarea, .tivoli-style select').filter('[required]:visible').each(function() {
    $('label[for="'+$(this).attr('id')+'"]').append(' <span>*</span>');
  });

  $('.tvl-label-cb-disabled input[type=checkbox]').attr('disabled','true');

  $('.tvl-label-rd-disabled input[type=radio]').attr('disabled','true');

  $('.tivoli-form-group').children().each(function() {
    if ($(this).is('input')) {
      if ($(this).prev().is('button') || $(this).prev().is('span') || $(this).prev().is('a')) {
        $(this).prev().addClass('before-input');
        $(this).addClass('after-brother');
        
        if ($(this).prev().is('button')) {
          var prevWidth = (parseInt($(this).prev().css('width').replace('px',''))+10);
        } else {
          var prevWidth = (parseInt($(this).prev().css('width').replace('px',''))+32);
        }
      } else {
        var prevWidth = 0;
      }

      if ($(this).next().is('button') || $(this).next().is('span') || $(this).next().is('a')) {
        $(this).next().addClass('after-input');
        $(this).addClass('before-brother');
        
        if ($(this).next().is('button')) {
          var nextWidth = (parseInt($(this).next().css('width').replace('px',''))+10);
        } else {
          var nextWidth = (parseInt($(this).next().css('width').replace('px',''))+32);
        }
      } else {
        var nextWidth = 0;
      }

      if ((prevWidth > 0) && (nextWidth > 0)) {
        $(this).css('width','calc(100% - '+((prevWidth+nextWidth)-11)+'px)');
        $(this).next().css('margin-left',((parseInt($(this).next().css('margin-left').replace('px',''))-1)+'px'));
      } else if (prevWidth > 0) {
        $(this).css('width','calc(100% - '+prevWidth+'px)');
      } else if (nextWidth > 0) {
        $(this).css('width','calc(100% - '+nextWidth+'px)');
      }
    }
  });
});

$(function() {
  $('form').on('submit', function(e) {
      e.preventDefault();
      var tivoliFormStatus = true;
      var tivoliInputFocus = false;
      
      if ($(this).hasClass('tivoli-validate')) {
        $(this).find('.error').removeClass('error');

        $(this).find('input, textarea, select').each(function(){
          if ($(this).is("input") || $(this).is("textarea") || $(this).is("select") && (!$(this).is("input:submit")) && (!$(this).is("input:button"))) {
            if ($(this).is(":invalid")) {
              if ($(this).parent().hasClass('tivoli-form-group')) {
                $(this).prev().addClass('error');
                $(this).next().addClass('error');
              }

              $(this).addClass('error');
              
              $('label[for="'+$(this).attr('id')+'"]').addClass('error');

              if ($('p[for="'+$(this).attr('id')+'"').length) {
                $('p[for="'+$(this).attr('id')+'"').remove();
              }

              if ($(this).data('tivoli-error')) {
                if ($(this).parent().hasClass('tivoli-form-group')) {
                  $(this).parent().append('<p class="msg error" for="'+$(this).attr('id')+'">'+$(this).data('tivoli-error')+'</p>');
                } else {
                  $(this).after('<p class="msg error" for="'+$(this).attr('id')+'">'+$(this).data('tivoli-error')+'</p>');
                }
              }
              
              if (!tivoliInputFocus) {
                tivoliInputFocus = true;
                $(this).focus();
              }

              tivoliFormStatus = false;
            } else {
              if ($(this).attr('required')) {
                if ($(this).parent().hasClass('tivoli-form-group')) {
                  $(this).prev().addClass('success');
                  $(this).next().addClass('success');
                }

                $(this).addClass('success');
                
                $('label[for="'+$(this).attr('id')+'"]').addClass('success');
              }
            }
          }
        });
      }
      
      if (tivoliFormStatus) e.currentTarget.submit();
  }); 
});