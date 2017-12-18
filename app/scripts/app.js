import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

$(document).on('click', '.menu-btn', function () {
	$(this).toggleClass('menu-btn__active');
	if ($(this).hasClass('menu-btn__active')) {
        $('.col:first-of-type').css({
            width: '100%'
        });
	}
	else
	{
        $('.col:first-of-type').css({
            width: '0'
        });
	}
});
