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
   * Register a custom post type called "stream".
   * @see get_post_type_labels() for label keys.
   */
  public function register_post_type()
  {
    $labels = array(
      'name' => _x('Streams', 'Post type general name', 'stream-control'),
      'singular_name' => _x('Stream', 'Post type singular name', 'stream-control'),
      'menu_name' => _x('Streams', 'Admin Menu text', 'stream-control'),
      'name_admin_bar' => _x('Stream', 'Add New on Toolbar', 'stream-control'),
      'add_new' => __('Add New', 'stream-control'),
      'add_new_item' => __('Add New Stream', 'stream-control'),
      'new_item' => __('New Stream', 'stream-control'),
      'edit_item' => __('Edit Stream', 'stream-control'),
      'view_item' => __('View Stream', 'stream-control'),
      'all_items' => __('All Streams', 'stream-control'),
      'search_items' => __('Search Streams', 'stream-control'),
      'parent_item_colon' => __('Parent Streams:', 'stream-control'),
      'not_found' => __('No Streams found.', 'stream-control'),
      'not_found_in_trash' => __('No streams found in Trash.', 'stream-control'),
      'featured_image' => _x(
        'Stream Cover Image',
        'Overrides the "Featured Image" phrase for this post type. Added in 4.3',
        'stream-control'
      ),
      'set_featured_image' => _x(
        'Set cover image',
        'Overrides the "Set featured image" phrase for this post type. Added in 4.3',
        'stream-control'
      ),
      'remove_featured_image' => _x(
        'Remove cover image',
        'Overrides the "Remove featured image" phrase for this post type. Added in 4.3',
        'stream-control'
      ),
      'use_featured_image' => _x(
        'Use as cover image',
        'Overrides the "Use as featured image" phrase for this post type. Added in 4.3',
        'stream-control'
      ),
      'archives' => _x(
        'Stream archives',
        'The post type archive label used in nav menus. Default "Post Archives". Added in 4.4',
        'stream-control'
      ),
      'insert_into_item' => _x(
        'Insert into stream',
        'Overrides the "Insert into post" / "Insert into page" phrase (used when inserting media into a post). Added in 4.4',
        'stream-control'
      ),
      'uploaded_to_this_item' => _x(
        'Uploaded to this stream',
        'Overrides the "Uploaded to this post"/"Uploaded to this page" phrase (used when viewing media attached to a post). Added in 4.4',
        'stream-control'
      ),
      'filter_items_list' => _x(
        'Filter stream list',
        'Screen reader text for the filter links heading on the post type listing screen. Default "Filter posts list"/"Filter pages list". Added in 4.4',
        'stream-control'
      ),
      'items_list_navigation' => _x(
        'Streams list navigation',
        'Screen reader text for the pagination heading on the post type listing screen. Default "Posts list navigation"/"Pages list navigation". Added in 4.4',
        'stream-control'
      ),
      'items_list' => _x(
        'Streams list',
        'Screen reader text for the items list heading on the post type listing screen. Default "Posts list"/"Pages list". Added in 4.4',
        'stream-control'
      )
    );

    $args = array(
      'labels' => $labels,
      'description' => '(╯°□°）╯︵ 🏐',
      'public' => true,
      'hierarchical' => false,
      'exclude_from_search' => true,
      'publicly_queryable' => true,
      'show_ui' => true,
      'show_in_menu' => true,
      'show_in_nav_menus' => true,
      'show_in_rest' => true,
      'menu_position' => null,
      'menu_icon' => 'dashicons-playlist-video',
      'capability_type' => 'post',
      'supports' => array('title', 'thumbnail'),
      'has_archive' => true,
      'rewrite' => array('slug' => 'stream'),
      'query_var' => true,
      'can_export' => true
    );

    register_post_type('stream-control', $args);
  }

  /**
   * @see https://www.advancedcustomfields.com/resources/local-json/#saving-explained
   */
  public function set_acf_json_save_folder($path)
  {
    return plugin_dir_path(__FILE__) . '/settings';
  }

  /**
   * @see https://www.advancedcustomfields.com/resources/local-json/#loading-explained
   */
  public function set_acf_json_load_folder($paths)
  {
    unset($paths[0]);
    $paths[] = plugin_dir_path(__FILE__) . '/settings';

    return $paths;
  }

  /**
   * Hide ACF menu for all users.
   */
  public function register_acf_menu()
  {
    return false;
  }

  /**
   * Register the stylesheets for the admin area.
   */
  public function enqueue_styles()
  {
    if (get_post_type() === 'stream-control') {
      $path = plugin_dir_url(__FILE__) . '/assets/css/stream-control.css';
      wp_enqueue_style($this->plugin_name, $path, array(), $this->version, 'all');
    }
  }

  /**
   * Register the JavaScript for the admin area.
   */
  public function enqueue_scripts()
  {
    if (get_post_type() === 'stream-control') {
      $path = plugin_dir_url(__FILE__) . 'assets/js/stream-control.js';
      wp_enqueue_script($this->plugin_name, $path, array('jquery'), $this->version, true);
    }
  }
}
