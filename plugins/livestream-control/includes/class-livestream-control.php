<?php

/**
 * A class definition that includes attributes and functions used across both
 * the public-facing side of the site and the admin area.
 */

class Livestream_Control
{
  protected $loader;
  protected $plugin_name;
  protected $version;

  /**
   * Set the plugin name and the plugin version that can be used throughout the plugin.
   * Load the dependencies, define the locale, and set the hooks for the admin area and
   * the public-facing side of the site.
   */
  public function __construct()
  {
    $this->version = LIVESTREAM_CONTROL_VERSION;
    $this->plugin_name = 'livestream-control';

    $this->load_dependencies();
    $this->set_locale();
    $this->define_admin_hooks();
  }

  /**
   * Load the required dependencies for this plugin.
   */
  private function load_dependencies()
  {
    $path = plugin_dir_path(dirname(__FILE__));

    require_once $path . 'vendors/advanced-custom-fields/acf.php';
    require_once $path . 'includes/class-livestream-control-loader.php';
    require_once $path . 'includes/class-livestream-control-i18n.php';
    require_once $path . 'side-admin/class-livestream-control-admin.php';

    $this->loader = new Livestream_Control_Loader();
  }

  /**
   * Uses the Livestream_Control_i18n class in order to set the domain and to register
   * the hook with WordPress.
   */
  private function set_locale()
  {
    $plugin_i18n = new Livestream_Control_i18n();
    $this->loader->add_action('plugins_loaded', $plugin_i18n, 'load_plugin_textdomain');
  }

  /**
   * Register all of the hooks related to the admin area functionality of the
   * plugin and vendor admin settings.
   */
  private function define_admin_hooks()
  {
    $plugin_admin = new Livestream_Control_Admin($this->get_plugin_name(), $this->get_version());

    $this->loader->add_action('init', $plugin_admin, 'register_post_type');

    $this->loader->add_action('acf/settings/save_json', $plugin_admin, 'set_acf_json_save_folder');
    $this->loader->add_action('acf/settings/load_json', $plugin_admin, 'set_acf_json_load_folder');
    $this->loader->add_filter('acf/settings/show_admin', $plugin_admin, 'register_acf_menu');

    $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
    $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
  }

  /**
   * Run the loader to execute all of the hooks with WordPress.
   */
  public function run()
  {
    $this->loader->run();
  }

  /**
   * The name of the plugin used to uniquely identify it within the context of
   * WordPress and to define internationalization functionality.
   */
  public function get_plugin_name()
  {
    return $this->plugin_name;
  }

  /**
   * The reference to the class that orchestrates the hooks with the plugin.
   */
  public function get_loader()
  {
    return $this->loader;
  }

  /**
   * Retrieve the version number of the plugin.
   */
  public function get_version()
  {
    return $this->version;
  }
}
