<?php

/**
 * This bootstrap file includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions and defines a function
 * that starts the plugin.
 *
 * @wordpress-plugin
 * Plugin Name:       <code>Stream Control</code>
 * Plugin URI:        https://github.com/Den3er/stream-control
 * Description:       The easiest way to schedule and broadcast your pre-recorded videos.
 * Version:           1.0.0
 * Author:            Avakov Denis
 * Author URI:        https://github.com/den3er
 * License:           MIT License
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       stream-control
 * Domain Path:       /languages
 */

if (!defined('WPINC')) {
  die();
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use semver.org
 */
define('STREAM_CONTROL_VERSION', '1.0.0');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-stream-control-activator.php
 */
function activate_stream_control()
{
  require_once plugin_dir_path(__FILE__) . 'includes/class-stream-control-activator.php';
  Stream_Control_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-stream-control-deactivator.php
 */
function deactivate_stream_control()
{
  require_once plugin_dir_path(__FILE__) . 'includes/class-stream-control-deactivator.php';
  Stream_Control_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_stream_control');
register_deactivation_hook(__FILE__, 'deactivate_stream_control');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-stream-control.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks, then kicking off
 * the plugin from this point in the file does not affect the page life cycle.
 */
function run_stream_control()
{
  $plugin = new Stream_Control();
  $plugin->run();
}
run_stream_control();
