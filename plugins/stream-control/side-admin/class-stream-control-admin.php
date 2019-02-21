<?php

/**
 * The admin-specific functionality of the plugin.
 */

class Stream_Control_Admin
{
  private $plugin_name;
  private $version;

  /**
   * Initialize the class and set its properties.
   */
  public function __construct($plugin_name, $version)
  {
    $this->plugin_name = $plugin_name;
    $this->version = $version;
  }

  /**
   * Register the stylesheets for the admin area.
   */
  public function enqueue_styles()
  {
    if (get_post_type() === 'stream-control') {
      $dir_path = plugin_dir_url(__FILE__) . '/assets/css/stream-control.css';
      wp_enqueue_style($this->plugin_name, $dir_path, array(), $this->version, 'all');
    }
  }

  /**
   * Register the JavaScript for the admin area.
   */
  public function enqueue_scripts()
  {
    if (get_post_type() === 'stream-control') {
      $dir_path = plugin_dir_url(__FILE__) . 'assets/js/stream-control.js';
      wp_enqueue_script($this->plugin_name, $dir_path, array('jquery'), $this->version, true);
    }
  }
}
