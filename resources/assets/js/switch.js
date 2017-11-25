//
// Switches
//

var Switch = function(){
	var $switch = $('.c-switch');

	$switch.on('click', function(e){
		$(this).toggleClass('is-active');
		var $input = $(this).find('input');
		$input.prop('checked', !$input.prop('checked'));
		return false;
	});
};