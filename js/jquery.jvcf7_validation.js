jQuery(document).ready(function(){
	jQuery('.wpcf7-validates-as-required').addClass('required');
	jQuery('.wpcf7-email').addClass('email');
	
	jQuery('form.wpcf7-form"').each(function(){
		jQuery(this).validate({
			invalidHandler: function(form, validator) {
				return false;
			}							   
		});								
	});	
});