<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/drupal8_zymphonies_theme/templates/layout/page.html.twig */
class __TwigTemplate_88e75789dac3e422fe03b8a60e5f486d extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 60
        echo "

<!-- Header and Navbar -->
<header class=\"main-header\">
  <nav class=\"navbar navbar-default\" role=\"navigation\">
    <div class=\"container\">
      <div class=\"row\">
      <div class=\"navbar-header col-md-3\">
        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-navigation\">
          <span class=\"sr-only\">Toggle navigation</span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
        </button>
        ";
        // line 74
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 74)) {
            // line 75
            echo "          ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 75), 75, $this->source), "html", null, true);
            echo "
        ";
        }
        // line 77
        echo "      </div>

      <!-- Navigation -->
      <div class=\"col-md-9\">
        ";
        // line 81
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 81)) {
            // line 82
            echo "          ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
            echo "
        ";
        }
        // line 83
        echo "      
      </div>
      <!--End Navigation -->

      </div>
    </div>
  </nav>

  ";
        // line 91
        if ((($context["is_front"] ?? null) && ($context["show_slideshow"] ?? null))) {
            // line 92
            echo "    <div class=\"container\">
      <div class=\"flexslider\">
        <ul class=\"slides\">
          ";
            // line 95
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["slider_content"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["slider_contents"]) {
                // line 96
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed($context["slider_contents"], 96, $this->source));
                echo "
          ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['slider_contents'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 98
            echo "        </ul>
      </div>
    </div>
  ";
        }
        // line 102
        echo "
</header>
<!--End Header & Navbar -->


<!--Highlighted-->
  ";
        // line 108
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 108)) {
            // line 109
            echo "    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-md-12\">
          ";
            // line 112
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 112), 112, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    </div>
  ";
        }
        // line 117
        echo "<!--End Highlighted-->


<!-- Start Top Widget -->
";
        // line 121
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 121) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 121)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 121))) {
            // line 122
            echo "  <div class=\"topwidget\">
    <!-- start: Container -->
    <div class=\"container\">
      
      <div class=\"row\">
        <!-- Top widget first region -->
        <div class = ";
            // line 128
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_class"] ?? null), 128, $this->source), "html", null, true);
            echo ">
          ";
            // line 129
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 129)) {
                // line 130
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_first", [], "any", false, false, true, 130), 130, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 132
            echo "        </div>
        <!-- End top widget third region -->
        <!-- Top widget second region -->
        <div class = ";
            // line 135
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_class"] ?? null), 135, $this->source), "html", null, true);
            echo ">
          ";
            // line 136
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 136)) {
                // line 137
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_second", [], "any", false, false, true, 137), 137, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 139
            echo "        </div>
        <!-- End top widget third region -->
        <!-- Top widget third region -->
        <div class = ";
            // line 142
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["topwidget_third_class"] ?? null), 142, $this->source), "html", null, true);
            echo ">
          ";
            // line 143
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 143)) {
                // line 144
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topwidget_third", [], "any", false, false, true, 144), 144, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 146
            echo "        </div>
        <!-- End top widget third region -->
      </div>
    </div>
  </div>
";
        }
        // line 152
        echo "<!--End Top Widget -->


<!-- Page Title -->
";
        // line 156
        if ((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "page_title", [], "any", false, false, true, 156) &&  !($context["is_front"] ?? null))) {
            // line 157
            echo "  <div id=\"page-title\">
    <div id=\"page-title-inner\">
      <!-- start: Container -->
      <div class=\"container\">
        ";
            // line 161
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "page_title", [], "any", false, false, true, 161), 161, $this->source), "html", null, true);
            echo "
      </div>
    </div>
  </div>
";
        }
        // line 166
        echo "<!-- End Page Title -- >


<!-- layout -->
<div id=\"wrapper\">
  <!-- start: Container -->
  <div class=\"container\">
    
    <!--Content top-->
      ";
        // line 175
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content_top", [], "any", false, false, true, 175)) {
            // line 176
            echo "        <div class=\"row\">
          ";
            // line 177
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content_top", [], "any", false, false, true, 177), 177, $this->source), "html", null, true);
            echo "
        </div>
      ";
        }
        // line 180
        echo "    <!--End Content top-->
    
    <!--start:content -->
    <div class=\"row\">
      <div class=\"col-md-12\">";
        // line 184
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 184), 184, $this->source), "html", null, true);
        echo "</div>
    </div>

    <div class=\"row layout\">
      <!--- Start Left SideBar -->
      ";
        // line 189
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 189)) {
            // line 190
            echo "        <div class=\"sidebar\" >
          <div class = ";
            // line 191
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebarfirst"] ?? null), 191, $this->source), "html", null, true);
            echo " >
            ";
            // line 192
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 192), 192, $this->source), "html", null, true);
            echo "
          </div>
        </div>
      ";
        }
        // line 196
        echo "      <!---End Right SideBar -->

      <!--- Start content -->
      ";
        // line 199
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 199)) {
            // line 200
            echo "        <div class=\"content_layout\">
          <div class=";
            // line 201
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["contentlayout"] ?? null), 201, $this->source), "html", null, true);
            echo ">
            ";
            // line 202
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 202), 202, $this->source), "html", null, true);
            echo "
          </div>
        </div>
      ";
        }
        // line 206
        echo "      <!---End content -->

      <!--- Start Right SideBar -->
      ";
        // line 209
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 209)) {
            // line 210
            echo "        <div class=\"sidebar\">
          <div class=";
            // line 211
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sidebarsecond"] ?? null), 211, $this->source), "html", null, true);
            echo ">
            ";
            // line 212
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 212), 212, $this->source), "html", null, true);
            echo "
          </div>
        </div>
      ";
        }
        // line 216
        echo "      <!---End Right SideBar -->
      
    </div>
    <!--End Content -->

    <!--Start Content Bottom-->
    ";
        // line 222
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content_bottom", [], "any", false, false, true, 222)) {
            // line 223
            echo "      <div class=\"row\">
        ";
            // line 224
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content_bottom", [], "any", false, false, true, 224), 224, $this->source), "html", null, true);
            echo "
      </div>
    ";
        }
        // line 227
        echo "    <!--End Content Bottom-->
  </div>
</div>
<!-- End layout -->


<!-- Start Middle Widget -->
";
        // line 234
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_first", [], "any", false, false, true, 234) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_second", [], "any", false, false, true, 234)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_third", [], "any", false, false, true, 234))) {
            // line 235
            echo "  <div class=\"middlewidget\">
    <!-- start: Container -->
    <div class=\"container\">
      
      <div class=\"row\">
        <!-- Top widget first region -->
        <div class = ";
            // line 241
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["middle_class"] ?? null), 241, $this->source), "html", null, true);
            echo ">
          ";
            // line 242
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_first", [], "any", false, false, true, 242)) {
                // line 243
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_first", [], "any", false, false, true, 243), 243, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 245
            echo "        </div>
        <!-- End top widget third region -->
        <!-- Top widget second region -->
        <div class = ";
            // line 248
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["middle_class"] ?? null), 248, $this->source), "html", null, true);
            echo ">
          ";
            // line 249
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_second", [], "any", false, false, true, 249)) {
                // line 250
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_second", [], "any", false, false, true, 250), 250, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 252
            echo "        </div>
        <!-- End top widget third region -->
        <!-- Top widget third region -->
        <div class = ";
            // line 255
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["middle_third_class"] ?? null), 255, $this->source), "html", null, true);
            echo ">
          ";
            // line 256
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_third", [], "any", false, false, true, 256)) {
                // line 257
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "middle_third", [], "any", false, false, true, 257), 257, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 259
            echo "        </div>
        <!-- End top widget third region -->
      </div>
    </div>
  </div>
";
        }
        // line 265
        echo "<!--End Top Widget -->


<!-- Start bottom -->
";
        // line 269
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 269) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 269)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 269))) {
            // line 270
            echo "  <div class=\"bottom-widgets\">
    <!-- Start Container -->
    <div class=\"container\">
      
      <div class=\"row\">

        <!-- Start Bottom First Region -->
        <div class = ";
            // line 277
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 277, $this->source), "html", null, true);
            echo ">
          ";
            // line 278
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 278)) {
                // line 279
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_first", [], "any", false, false, true, 279), 279, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 281
            echo "        </div>
        <!-- End Bottom First Region -->

        <!-- Start Bottom Second Region -->
        <div class = ";
            // line 285
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 285, $this->source), "html", null, true);
            echo ">
          ";
            // line 286
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 286)) {
                // line 287
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_second", [], "any", false, false, true, 287), 287, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 289
            echo "        </div>
        <!-- End Bottom Second Region -->

        <!-- Start Bottom third Region -->
        <div class = ";
            // line 293
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 293, $this->source), "html", null, true);
            echo ">
          ";
            // line 294
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 294)) {
                // line 295
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_third", [], "any", false, false, true, 295), 295, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 297
            echo "        </div>
        <!-- End Bottom Third Region -->

        <div class = ";
            // line 300
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["bottom_class"] ?? null), 300, $this->source), "html", null, true);
            echo ">
          ";
            // line 301
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_forth", [], "any", false, false, true, 301)) {
                // line 302
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_forth", [], "any", false, false, true, 302), 302, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 304
            echo "        </div>

      </div>
    </div>
  </div>
";
        }
        // line 310
        echo "<!--End Bottom -->


<!-- start: Footer -->
";
        // line 314
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 314) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 314)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 314))) {
            // line 315
            echo "  <div class=\"footerwidget\">
    <div class=\"container\">
      
      <div class=\"row\">
        
        <!-- Start Footer First Region -->
        <div class = ";
            // line 321
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_class"] ?? null), 321, $this->source), "html", null, true);
            echo ">
          ";
            // line 322
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 322)) {
                // line 323
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 323), 323, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 325
            echo "        </div>
        <!-- End Footer First Region -->

        <!-- Start Footer Second Region -->
        <div class = ";
            // line 329
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_class"] ?? null), 329, $this->source), "html", null, true);
            echo ">
          ";
            // line 330
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 330)) {
                // line 331
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 331), 331, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 333
            echo "        </div>
        <!-- End Footer Second Region -->

        <!-- Start Footer third Region -->
        <div class = ";
            // line 337
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer_third_class"] ?? null), 337, $this->source), "html", null, true);
            echo ">
          ";
            // line 338
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 338)) {
                // line 339
                echo "            ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 339), 339, $this->source), "html", null, true);
                echo "
          ";
            }
            // line 341
            echo "        </div>
        <!-- End Footer Third Region -->
      </div>
    </div>
  </div>
";
        }
        // line 347
        echo "<!--End Footer -->


<!-- Start Footer Menu -->
";
        // line 351
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_menu", [], "any", false, false, true, 351)) {
            // line 352
            echo "  <div class=\"footer-menu\">
    <div class=\"container\">
      <div class=\"row\">
        <div class=\"col-sm-6 col-md-6\">
          ";
            // line 356
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_menu", [], "any", false, false, true, 356), 356, $this->source), "html", null, true);
            echo "
        </div>
        ";
            // line 358
            if (($context["show_social_icon"] ?? null)) {
                // line 359
                echo "        <div class=\"col-sm-6 col-md-6\">
          <div class=\"social-media\">
            ";
                // line 361
                if (($context["facebook_url"] ?? null)) {
                    // line 362
                    echo "              <a href=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["facebook_url"] ?? null), 362, $this->source), "html", null, true);
                    echo "\"  class=\"facebook\" target=\"_blank\" ><i class=\"fab fa-facebook-f\"></i></a>
            ";
                }
                // line 364
                echo "            ";
                if (($context["twitter_url"] ?? null)) {
                    // line 365
                    echo "              <a href=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["twitter_url"] ?? null), 365, $this->source), "html", null, true);
                    echo "\" class=\"twitter\" target=\"_blank\" ><i class=\"fab fa-twitter\"></i></a>
            ";
                }
                // line 367
                echo "            ";
                if (($context["linkedin_url"] ?? null)) {
                    // line 368
                    echo "              <a href=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["linkedin_url"] ?? null), 368, $this->source), "html", null, true);
                    echo "\" class=\"linkedin\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>
            ";
                }
                // line 370
                echo "            ";
                if (($context["pinterest_url"] ?? null)) {
                    // line 371
                    echo "              <a href=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pinterest_url"] ?? null), 371, $this->source), "html", null, true);
                    echo "\" class=\"pinterest\" target=\"_blank\" ><i class=\"fab fa-pinterest-p\"></i></a>
            ";
                }
                // line 373
                echo "            ";
                if (($context["rss_url"] ?? null)) {
                    // line 374
                    echo "              <a href=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rss_url"] ?? null), 374, $this->source), "html", null, true);
                    echo "\" class=\"rss\" target=\"_blank\" ><i class=\"fas fa-rss\"></i></a>
            ";
                }
                // line 376
                echo "          </div>
        </div>
        ";
            }
            // line 379
            echo "      </div>
    </div>
  </div>
";
        }
        // line 383
        echo "<!-- End Footer Menu -->


";
        // line 386
        if ((($context["copyright_text"] ?? null) || ($context["show_credit_link"] ?? null))) {
            // line 387
            echo "<div class=\"copyright\">
  <div class=\"container\">
    <div class=\"row\">

      <!-- Copyright -->
      <div class=\"col-sm-6 col-md-6\">
        ";
            // line 393
            if (($context["copyright_text"] ?? null)) {
                echo "        
          <p>";
                // line 394
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["copyright_text"] ?? null), 394, $this->source), "html", null, true);
                echo "</p>        
        ";
            }
            // line 396
            echo "      </div>
      <!-- End Copyright -->

      <!-- Credit link -->
      ";
            // line 400
            if (($context["show_credit_link"] ?? null)) {
                // line 401
                echo "        <div class=\"col-sm-6 col-md-6\">
          <p class=\"credit-link\">Designed by <a href=\"http://www.zymphonies.com\" target=\"_blank\">Zymphonies</a></p>
        </div>
      ";
            }
            // line 405
            echo "      <!-- End Credit link -->
      
    </div>
  </div>
</div>
";
        }
        // line 411
        echo "

<!-- Google map -->
";
        // line 414
        if ((($context["is_front"] ?? null) && twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "google_map", [], "any", false, false, true, 414))) {
            // line 415
            echo "  <div class=\"google_map\">
    ";
            // line 416
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "google_map", [], "any", false, false, true, 416), 416, $this->source), "html", null, true);
            echo "
  </div>
";
        }
        // line 419
        echo "<!-- End Google map -->";
    }

    public function getTemplateName()
    {
        return "themes/drupal8_zymphonies_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  718 => 419,  712 => 416,  709 => 415,  707 => 414,  702 => 411,  694 => 405,  688 => 401,  686 => 400,  680 => 396,  675 => 394,  671 => 393,  663 => 387,  661 => 386,  656 => 383,  650 => 379,  645 => 376,  639 => 374,  636 => 373,  630 => 371,  627 => 370,  621 => 368,  618 => 367,  612 => 365,  609 => 364,  603 => 362,  601 => 361,  597 => 359,  595 => 358,  590 => 356,  584 => 352,  582 => 351,  576 => 347,  568 => 341,  562 => 339,  560 => 338,  556 => 337,  550 => 333,  544 => 331,  542 => 330,  538 => 329,  532 => 325,  526 => 323,  524 => 322,  520 => 321,  512 => 315,  510 => 314,  504 => 310,  496 => 304,  490 => 302,  488 => 301,  484 => 300,  479 => 297,  473 => 295,  471 => 294,  467 => 293,  461 => 289,  455 => 287,  453 => 286,  449 => 285,  443 => 281,  437 => 279,  435 => 278,  431 => 277,  422 => 270,  420 => 269,  414 => 265,  406 => 259,  400 => 257,  398 => 256,  394 => 255,  389 => 252,  383 => 250,  381 => 249,  377 => 248,  372 => 245,  366 => 243,  364 => 242,  360 => 241,  352 => 235,  350 => 234,  341 => 227,  335 => 224,  332 => 223,  330 => 222,  322 => 216,  315 => 212,  311 => 211,  308 => 210,  306 => 209,  301 => 206,  294 => 202,  290 => 201,  287 => 200,  285 => 199,  280 => 196,  273 => 192,  269 => 191,  266 => 190,  264 => 189,  256 => 184,  250 => 180,  244 => 177,  241 => 176,  239 => 175,  228 => 166,  220 => 161,  214 => 157,  212 => 156,  206 => 152,  198 => 146,  192 => 144,  190 => 143,  186 => 142,  181 => 139,  175 => 137,  173 => 136,  169 => 135,  164 => 132,  158 => 130,  156 => 129,  152 => 128,  144 => 122,  142 => 121,  136 => 117,  128 => 112,  123 => 109,  121 => 108,  113 => 102,  107 => 98,  98 => 96,  94 => 95,  89 => 92,  87 => 91,  77 => 83,  71 => 82,  69 => 81,  63 => 77,  57 => 75,  55 => 74,  39 => 60,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/drupal8_zymphonies_theme/templates/layout/page.html.twig", "C:\\xampp\\htdocs\\projet1\\themes\\drupal8_zymphonies_theme\\templates\\layout\\page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 74, "for" => 95);
        static $filters = array("escape" => 75, "raw" => 96);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['escape', 'raw'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
