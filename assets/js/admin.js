var providers;


function set_aftership_tracking_provider() {
	function hide_input_and_label(id) {
		jQuery('#' + id).hide();
		jQuery('label[for=' + id + ']').hide();
	}

	function show_input_and_label(id) {
		jQuery('#' + id).show();
		jQuery('label[for=' + id + ']').show();
	}

	jQuery('#aftership_tracking_provider').change(function() {
		hide_input_and_label('aftership_tracking_shipdate');
		hide_input_and_label('aftership_tracking_postal');
		hide_input_and_label('aftership_tracking_account');

		var slug = jQuery(this).val();
		if (slug) {
			var provider = providers[slug];
			var fields = [];
			if (jQuery.isArray(provider.required_fields)) {
				fields = provider.required_fields;
			} else {
				fields.push(provider.required_fields);
			}
			jQuery.each(fields, function(index, item) {
				if (item == 'tracking_ship_date') {
					show_input_and_label('aftership_tracking_shipdate');
				} else if (item == 'tracking_postal_code') {
					show_input_and_label('aftership_tracking_postal');
				} else if (item == 'tracking_account_number') {
					show_input_and_label('aftership_tracking_account');
				}
			});
			jQuery('#aftership_tracking_provider_name').val(provider.name);
			jQuery('#aftership_tracking_required_fields').val(fields.join());
		}
	});
}


function fill_meta_box(json) {
	var response = JSON.parse(json);
	if (response.code == 800) {
		jQuery('#aftership_spinner').fadeOut(function() {
			jQuery('#aftership_error_insert_api').fadeIn();
		});
	} else if (response.code == 401) {
		jQuery('#aftership_spinner').fadeOut(function() {
			jQuery('#aftership_error_update_api').fadeIn();
		});
	} else if (response.code != 200) {
		jQuery('#aftership_spinner').fadeOut(function() {
			jQuery('#aftership_error').html(response.message).fadeIn();
		});
	} else {
		var couriers = {};
		jQuery.each(response.response.data.couriers, function(index, courier) {
			couriers[courier.slug] = courier;
		});

		var selected_provider = jQuery('#aftership_tracking_provider_hidden').val();
		if (!couriers[selected_provider]) {
			couriers[selected_provider] = {
				slug: selected_provider,
				name: jQuery("#aftership_tracking_provider_name").val(),
				required_fields: jQuery("#aftership_tracking_required_fields").val()
			};
		}
		jQuery.each(couriers, function(key, courier) {
			var str = '<option ';
			if (courier['slug'] == selected_provider) {
				str += 'style="display:none;" ';
			}
			str += 'value="' + courier['slug'] + '" ';
			if (courier['slug'] == selected_provider) {
				str += 'selected="selected"';
			}
			str += '>' + courier['name'] + '</option>';
			jQuery('#aftership_tracking_provider').append(str);
		});
		jQuery('#aftership_tracking_provider').trigger("chosen:updated");
		jQuery('#aftership_tracking_provider_chosen').css({width: '100%'});

		providers = couriers;
		set_aftership_tracking_provider();
		jQuery('#aftership_tracking_provider').trigger('change');

		jQuery('#aftership_spinner').fadeOut(function() {
			jQuery('#aftership_wrapper').fadeIn();
		});
	}
}

