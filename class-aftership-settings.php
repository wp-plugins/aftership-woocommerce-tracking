<?php
/**
 * AfterShip Admin
 *
 * Handles AfterShip-Admin endpoint requests
 *
 * @author      AfterShip
 * @category    Admin
 * @package     AfterShip
 * @since       1.0
 */

if (!defined('ABSPATH')) exit; // Exit if accessed directly

class AfterShip_Settings
{
	/**
	 * Holds the values to be used in the fields callbacks
	 */
	private $options;

	private $plugins;

	/**
	 * Start up
	 */
	public function __construct()
	{
		$this->plugins[] = array(
			'value' => 'aftership',
			'label' => 'AfterShip',
			'path' => 'aftership-woocommerce-tracking/aftership.php'
		);
		$this->plugins[] = array(
			'value' => 'wc-shipment-tracking',
			'label' => 'WooCommerce Shipment Tracking',
			'path' => 'woocommerce-shipment-tracking/shipment-tracking.php'
		);

		add_action('admin_menu', array($this, 'add_plugin_page'));
		add_action('admin_init', array($this, 'page_init'));
		add_action('admin_print_styles', array($this, 'admin_styles'));
	}


	public function admin_styles()
	{
		wp_enqueue_style('aftership_styles', plugins_url(basename(dirname(__FILE__))) . '/assets/css/admin.css');
	}

	/**
	 * Add options page
	 */
	public function add_plugin_page()
	{
		// This page will be under "Settings"
		add_options_page(
			'AfterShip Settings Admin',
			'AfterShip',
			'manage_options',
			'aftership-setting-admin',
			array($this, 'create_admin_page')
		);
	}

	/**
	 * Options page callback
	 */
	public function create_admin_page()
	{
		// Set class property
		$this->options = get_option('aftership_option_name');
		?>
		<div class="wrap">
			<?php screen_icon(); ?>
			<h2>AfterShip Settings</h2>

			<form method="post" action="options.php">
				<?php
				// This prints out all hidden setting fields
				settings_fields('aftership_option_group');
				do_settings_sections('aftership-setting-admin');
				submit_button();
				?>
			</form>
		</div>
	<?php
	}

	/**
	 * Register and add settings
	 */
	public function page_init()
	{
		register_setting(
			'aftership_option_group', // Option group
			'aftership_option_name', // Option name
			array($this, 'sanitize') // Sanitize
		);

		add_settings_section(
			'aftership_setting_section_id', // ID
			'', // Title
			array($this, 'print_section_info'), // Callback
			'aftership-setting-admin' // Page
		);

		add_settings_field(
			'api_key',
			'AfterShip API Key',
			array($this, 'api_key_callback'),
			'aftership-setting-admin',
			'aftership_setting_section_id'
		);

		add_settings_field(
			'plugin',
			'Plugin',
			array($this, 'plugin_callback'),
			'aftership-setting-admin',
			'aftership_setting_section_id'
		);

		add_settings_field(
			'use_track_button',
			'Use Track Button',
			array($this, 'track_button_callback'),
			'aftership-setting-admin',
			'aftership_setting_section_id'
		);
	}

	/**
	 * Sanitize each setting field as needed
	 *
	 * @param array $input Contains all settings fields as array keys
	 */
	public function sanitize($input)
	{
		$new_input = array();

		if (isset($input['api_key'])) {
			$new_input['api_key'] = sanitize_text_field($input['api_key']);
		}

		if (isset($input['plugin'])) {
			$new_input['plugin'] = sanitize_text_field($input['plugin']);
		}

		if (isset($input['use_track_button'])) {
			$new_input['use_track_button'] = true;
		}


		return $new_input;
	}

	/**
	 * Print the Section text
	 */
	public function print_section_info()
	{
		//print 'Enter your settings below:';
	}

	/**
	 * Get the settings option array and print one of its values
	 */
	public function api_key_callback()
	{
		printf(
			'<input type="text" id="api_key" name="aftership_option_name[api_key]" value="%s" class="aftership_input_text" required/>',
			isset($this->options['api_key']) ? esc_attr($this->options['api_key']) : ''
		);
		printf(
			'<p>&nbsp;<a href="http://aftership.uservoice.com/knowledgebase/articles/401963" target="_blank">How to generate AfterShip API Key?</a></p>'
		);
	}

	public function plugin_callback()
	{

		$options = "";
		foreach ($this->plugins as $plugin) {
			//print_r($plugin);
			if (WC_Dependencies::plugin_active_check($plugin['path'])) {
				$option = '<option value="' . $plugin['value'] . '"';

				if (isset($this->options['plugin']) && esc_attr($this->options['plugin']) == $plugin['value']) {
					$option .= ' selected="selected"';
				}

				$option .= '>' . $plugin['label'] . '</option>';
				$options .= $option;
			}
		}

		printf(
			'<select id="plugin" name="aftership_option_name[plugin]" class="aftership_dropdown">' . $options . '</select>'
		);
	}

	public function track_button_callback()
	{
		printf(
			'<label><input type="checkbox" id="use_track_button" name="aftership_option_name[use_track_button]" %s>Use Track Button</label>',
			(isset($this->options['use_track_button']) && $this->options['use_track_button'] === true) ? 'checked="checked"' : ''
		);
	}
}


if (is_admin())
	$aftership_settings = new AfterShip_Settings();