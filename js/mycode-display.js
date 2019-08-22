$(document).ready(function() {
	var numberLine = 0;
	var lang = 'html';
	var borderColor = '#d5d5d5';

	$('.mycode p').each(function() {
		if ($(this).parent().hasClass('dark')) {
			borderColor = '#181915';
		}

		if ($(this).hasClass('lang')) {
			if (numberLine != 1) {
				$(this).prev().after('<p style="margin:0; border-top:1px solid '+borderColor+';">&nbsp;</p>');
			}

			lang = $(this).text().toLowerCase().replace(' ','');
			$(this).parent().addClass(lang);
			numberLine = 1;
		} else {
			$(this).addClass(lang);
			$(this).attr('data-line',numberLine);

			if ($(this).attr('class').indexOf("space-") > -1) {
				var offsetPos = ($(this).attr('class').indexOf("space-")+6);
		    if (Number.isInteger(parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1))))) {
		      if (Number.isInteger(parseInt($(this).attr('class').substring((offsetPos+1),(offsetPos+2))))) {
		        tab($(this),(parseInt($(this).attr('class').substring(offsetPos,(offsetPos+2)))));
		      } else {
		        tab($(this),(parseInt($(this).attr('class').substring(offsetPos,(offsetPos+1)))));
		      }
		    }
			}

			if (!$(this).next().is('p')) {
				$(this).after('<p style="margin:0; border-top:1px solid '+borderColor+'; font-size:3px;">&nbsp;</p>');
			}

			numberLine++;
		}
	});
});

function tab(element,tabs) {
	var i;
	for (i = 0; i < (tabs*4); i++) { 
	  element.prepend('&nbsp;');
	}
}