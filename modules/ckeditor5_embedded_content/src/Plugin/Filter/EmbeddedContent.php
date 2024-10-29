<?php

namespace Drupal\ckeditor5_embedded_content\Plugin\Filter;

use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;

/**
 * Provides a text filter that turns < embedded-content > tags into markup.
 *
 * This filter will no longer apply and is replaced by the filter provided by
 * the embedded_content module.
 *
 * @Filter(
 *   id = "ckeditor5_embedded_content",
 *   title = @Translation("Embedded content"),
 *   description = @Translation("Converts < embedded-content > tags to results."),
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_TRANSFORM_REVERSIBLE,
 *   weight = 100,
 * )
 *
 * @internal
 */
class EmbeddedContent extends FilterBase {

  /**
   * {@inheritdoc}
   */
  public function process($text, $langcode) {
    return new FilterProcessResult($text);
  }

}
