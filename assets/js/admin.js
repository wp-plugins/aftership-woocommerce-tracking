jQuery(function() {


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


	function fill_meta_box(couriers_selected) {
		var response = get_couriers();
		var couriers = [];
		jQuery.each(response, function(index, courier) {
			if (couriers_selected.indexOf(courier.slug) != -1) {
				couriers.push(courier);
			}
		});

		var selected_provider = jQuery('#aftership_tracking_provider_hidden').val();
		var find_selected_provider = couriers_selected.indexOf(selected_provider) != -1;
		if (!find_selected_provider) {
			couriers.push({
				slug: selected_provider,
				name: jQuery("#aftership_tracking_provider_name").val(),
				required_fields: jQuery("#aftership_tracking_required_fields").val()
			});
		}
//		console.log(couriers);

		couriers = sort_couriers(couriers);

		jQuery.each(couriers, function(key, courier) {
			var str = '<option ';
			if (!find_selected_provider && courier['slug'] == selected_provider) {
				str += 'style="display:none;" ';
			}
			str += 'value="' + courier['slug'] + '" ';
			if (courier['slug'] == selected_provider) {
				str += 'selected="selected"';
			}
			str += '>' + courier['name'] + '</option>';
			jQuery('#aftership_tracking_provider').append(str);
		});
//		jQuery('#aftership_tracking_provider').val(selected_provider);
		jQuery('#aftership_tracking_provider').trigger("chosen:updated");
		jQuery('#aftership_tracking_provider_chosen').css({width: '100%'});

		providers = {};
		jQuery.each(couriers, function(index, courier) {
			providers[courier.slug] = courier;
		});
		set_aftership_tracking_provider();
		jQuery('#aftership_tracking_provider').trigger('change');
	}

	if (jQuery('#aftership_tracking_provider')) {
		var couriers_selected = jQuery('#aftership_couriers_selected').val();
		var couriers_selected_arr = (couriers_selected) ? couriers_selected.split(',') : [];
		fill_meta_box(couriers_selected_arr);
	}

	if (jQuery('#aftership_tracking_provider_name')) {
		jQuery('#aftership_tracking_provider_name').parent().hide();
	}

	if (jQuery('#aftership_tracking_required_fields')) {
		jQuery('#aftership_tracking_required_fields').parent().hide();
	}
});