<?php

/**
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 */

class Stream_Control_i18n
{
  public function load_plugin_textdomain()
  {
    $path = dirname(dirname(plugin_basename(__FILE__))) . '/languages/';
    load_plugin_textdomain('stream-control', false, $path);
  }
}
