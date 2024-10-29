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

/* themes/solo/templates/layout/page.html.twig */
class __TwigTemplate_137237e127a0b82a6445152e9cdd9e72 extends Template
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
        // line 59
        ob_start(function () { return ''; });
        // line 60
        $this->loadTemplate("@solo/partials/svg/_svg-bars.html.twig", "themes/solo/templates/layout/page.html.twig", 60)->display($context);
        $context["svg_bars"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 62
        ob_start(function () { return ''; });
        // line 63
        $this->loadTemplate("@solo/partials/svg/_svg-search.html.twig", "themes/solo/templates/layout/page.html.twig", 63)->display($context);
        $context["svg_search"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 65
        echo "
<!-- Start: Page Wrapper -->
";
        // line 67
        $context["page_wrapper_classes"] = (((((((((((("page-wrapper" . ((        // line 68
($context["site_width_class"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["site_width_class"] ?? null), 68, $this->source))) : (""))) . ((        // line 69
($context["site_global_breakpoints"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["site_global_breakpoints"] ?? null), 69, $this->source))) : (""))) . ((        // line 70
($context["site_menu_breakpoints"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["site_menu_breakpoints"] ?? null), 70, $this->source))) : (""))) . ((        // line 71
($context["site_pagetitle_google_font"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["site_pagetitle_google_font"] ?? null), 71, $this->source))) : (""))) . ((        // line 72
($context["site_pagetitle_animate_on"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["site_pagetitle_animate_on"] ?? null), 72, $this->source))) : (""))) . ((        // line 73
($context["site_pagetitle_center"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["site_pagetitle_center"] ?? null), 73, $this->source))) : (""))) . ((        // line 74
($context["title_size_l"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["title_size_l"] ?? null), 74, $this->source))) : (""))) . ((        // line 75
($context["title_size_s"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["title_size_s"] ?? null), 75, $this->source))) : (""))) . ((        // line 76
($context["classes_page_wrapper"] ?? null)) ? ((" " . $this->sandbox->ensureToStringAllowed(($context["classes_page_wrapper"] ?? null), 76, $this->source))) : (""))) . ((        // line 77
($context["opacity_page_wrapper"] ?? null)) ? (" solo__fade-in") : (""))) . ((        // line 78
($context["site_breadcrumb_scroll"] ?? null)) ? (" solo__bc-scroll") : (""))) . ((        // line 79
($context["site_inline_items_on"] ?? null)) ? (" solo__inline-items") : ("")));
        // line 81
        echo "

<div id=\"page-wrapper\" class=\"";
        // line 83
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_wrapper_classes"] ?? null), 83, $this->source), "html", null, true);
        echo "\" ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes_page_wrapper"] ?? null), 83, $this->source), "html", null, true);
        echo ">

  ";
        // line 85
        if ((($context["site_regions_highlighted_disable"] ?? null) == 0)) {
            // line 86
            echo "  ";
            $this->loadTemplate("@solo/partials/_highlighted.html.twig", "themes/solo/templates/layout/page.html.twig", 86)->display($context);
            // line 87
            echo "  ";
        }
        // line 88
        echo "  ";
        if (((($context["site_regions_highlighted_disable"] ?? null) == 1) && ($context["is_front"] ?? null))) {
            // line 89
            echo "  ";
            $this->loadTemplate("@solo/partials/_highlighted.html.twig", "themes/solo/templates/layout/page.html.twig", 89)->display($context);
            // line 90
            echo "  ";
        }
        // line 91
        echo "  ";
        if (((($context["site_regions_highlighted_disable"] ?? null) == 2) &&  !($context["is_front"] ?? null))) {
            // line 92
            echo "  ";
            $this->loadTemplate("@solo/partials/_highlighted.html.twig", "themes/solo/templates/layout/page.html.twig", 92)->display($context);
            // line 93
            echo "  ";
        }
        // line 94
        echo "
  ";
        // line 95
        $this->loadTemplate("@solo/partials/_primary-sidebar-menu.html.twig", "themes/solo/templates/layout/page.html.twig", 95)->display($context);
        // line 96
        echo "
  ";
        // line 97
        $this->loadTemplate("@solo/partials/_fixed-search-block.html.twig", "themes/solo/templates/layout/page.html.twig", 97)->display($context);
        // line 98
        echo "
  ";
        // line 99
        $this->loadTemplate("@solo/partials/_popup-login-block.html.twig", "themes/solo/templates/layout/page.html.twig", 99)->display($context);
        // line 100
        echo "
  ";
        // line 101
        if (($context["site_flip_header_menu"] ?? null)) {
            // line 102
            echo "  ";
            $this->loadTemplate("@solo/partials/_primary-menu.html.twig", "themes/solo/templates/layout/page.html.twig", 102)->display($context);
            // line 103
            echo "  ";
            $this->loadTemplate("@solo/partials/_header.html.twig", "themes/solo/templates/layout/page.html.twig", 103)->display($context);
            // line 104
            echo "  ";
        } else {
            // line 105
            echo "  ";
            $this->loadTemplate("@solo/partials/_header.html.twig", "themes/solo/templates/layout/page.html.twig", 105)->display($context);
            // line 106
            echo "  ";
            $this->loadTemplate("@solo/partials/_primary-menu.html.twig", "themes/solo/templates/layout/page.html.twig", 106)->display($context);
            // line 107
            echo "  ";
        }
        // line 108
        echo "
  ";
        // line 109
        if ((($context["site_regions_welcome_disable"] ?? null) == 0)) {
            // line 110
            echo "  ";
            $this->loadTemplate("@solo/partials/_welcome-text.html.twig", "themes/solo/templates/layout/page.html.twig", 110)->display($context);
            // line 111
            echo "  ";
        }
        // line 112
        echo "  ";
        if (((($context["site_regions_welcome_disable"] ?? null) == 1) && ($context["is_front"] ?? null))) {
            // line 113
            echo "  ";
            $this->loadTemplate("@solo/partials/_welcome-text.html.twig", "themes/solo/templates/layout/page.html.twig", 113)->display($context);
            // line 114
            echo "  ";
        }
        // line 115
        echo "  ";
        if (((($context["site_regions_welcome_disable"] ?? null) == 2) &&  !($context["is_front"] ?? null))) {
            // line 116
            echo "  ";
            $this->loadTemplate("@solo/partials/_welcome-text.html.twig", "themes/solo/templates/layout/page.html.twig", 116)->display($context);
            // line 117
            echo "  ";
        }
        // line 118
        echo "
  ";
        // line 119
        if ((($context["site_regions_top_disable"] ?? null) == 0)) {
            // line 120
            echo "  ";
            $this->loadTemplate("@solo/partials/_top-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 120)->display($context);
            // line 121
            echo "  ";
        }
        // line 122
        echo "  ";
        if (((($context["site_regions_top_disable"] ?? null) == 1) && ($context["is_front"] ?? null))) {
            // line 123
            echo "  ";
            $this->loadTemplate("@solo/partials/_top-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 123)->display($context);
            // line 124
            echo "  ";
        }
        // line 125
        echo "  ";
        if (((($context["site_regions_top_disable"] ?? null) == 2) &&  !($context["is_front"] ?? null))) {
            // line 126
            echo "  ";
            $this->loadTemplate("@solo/partials/_top-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 126)->display($context);
            // line 127
            echo "  ";
        }
        // line 128
        echo "
  ";
        // line 129
        $this->loadTemplate("@solo/partials/_system-messages.html.twig", "themes/solo/templates/layout/page.html.twig", 129)->display($context);
        // line 130
        echo "
  ";
        // line 131
        $this->loadTemplate("@solo/partials/_page-title.html.twig", "themes/solo/templates/layout/page.html.twig", 131)->display($context);
        // line 132
        echo "
  ";
        // line 133
        $this->loadTemplate("@solo/partials/_breadcrumb.html.twig", "themes/solo/templates/layout/page.html.twig", 133)->display($context);
        // line 134
        echo "
  ";
        // line 135
        $this->loadTemplate("@solo/partials/_main-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 135)->display($context);
        // line 136
        echo "
  ";
        // line 137
        if ((($context["site_regions_bottom_disable"] ?? null) == 0)) {
            // line 138
            echo "  ";
            $this->loadTemplate("@solo/partials/_bottom-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 138)->display($context);
            // line 139
            echo "  ";
        }
        // line 140
        echo "  ";
        if (((($context["site_regions_bottom_disable"] ?? null) == 1) && ($context["is_front"] ?? null))) {
            // line 141
            echo "  ";
            $this->loadTemplate("@solo/partials/_bottom-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 141)->display($context);
            // line 142
            echo "  ";
        }
        // line 143
        echo "  ";
        if (((($context["site_regions_bottom_disable"] ?? null) == 2) &&  !($context["is_front"] ?? null))) {
            // line 144
            echo "  ";
            $this->loadTemplate("@solo/partials/_bottom-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 144)->display($context);
            // line 145
            echo "  ";
        }
        // line 146
        echo "
  ";
        // line 147
        if ((($context["site_regions_footer_disable"] ?? null) == 0)) {
            // line 148
            echo "  ";
            $this->loadTemplate("@solo/partials/_footer-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 148)->display($context);
            // line 149
            echo "  ";
        }
        // line 150
        echo "  ";
        if (((($context["site_regions_footer_disable"] ?? null) == 1) && ($context["is_front"] ?? null))) {
            // line 151
            echo "  ";
            $this->loadTemplate("@solo/partials/_footer-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 151)->display($context);
            // line 152
            echo "  ";
        }
        // line 153
        echo "  ";
        if (((($context["site_regions_footer_disable"] ?? null) == 2) &&  !($context["is_front"] ?? null))) {
            // line 154
            echo "  ";
            $this->loadTemplate("@solo/partials/_footer-regions.html.twig", "themes/solo/templates/layout/page.html.twig", 154)->display($context);
            // line 155
            echo "  ";
        }
        // line 156
        echo "
  ";
        // line 157
        $this->loadTemplate("@solo/partials/_footer-menu.html.twig", "themes/solo/templates/layout/page.html.twig", 157)->display($context);
        // line 158
        echo "
  ";
        // line 159
        $this->loadTemplate("@solo/partials/_copyright.html.twig", "themes/solo/templates/layout/page.html.twig", 159)->display($context);
        // line 160
        echo "</div>
<!-- End: Page Wrapper -->
";
    }

    public function getTemplateName()
    {
        return "themes/solo/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  288 => 160,  286 => 159,  283 => 158,  281 => 157,  278 => 156,  275 => 155,  272 => 154,  269 => 153,  266 => 152,  263 => 151,  260 => 150,  257 => 149,  254 => 148,  252 => 147,  249 => 146,  246 => 145,  243 => 144,  240 => 143,  237 => 142,  234 => 141,  231 => 140,  228 => 139,  225 => 138,  223 => 137,  220 => 136,  218 => 135,  215 => 134,  213 => 133,  210 => 132,  208 => 131,  205 => 130,  203 => 129,  200 => 128,  197 => 127,  194 => 126,  191 => 125,  188 => 124,  185 => 123,  182 => 122,  179 => 121,  176 => 120,  174 => 119,  171 => 118,  168 => 117,  165 => 116,  162 => 115,  159 => 114,  156 => 113,  153 => 112,  150 => 111,  147 => 110,  145 => 109,  142 => 108,  139 => 107,  136 => 106,  133 => 105,  130 => 104,  127 => 103,  124 => 102,  122 => 101,  119 => 100,  117 => 99,  114 => 98,  112 => 97,  109 => 96,  107 => 95,  104 => 94,  101 => 93,  98 => 92,  95 => 91,  92 => 90,  89 => 89,  86 => 88,  83 => 87,  80 => 86,  78 => 85,  71 => 83,  67 => 81,  65 => 79,  64 => 78,  63 => 77,  62 => 76,  61 => 75,  60 => 74,  59 => 73,  58 => 72,  57 => 71,  56 => 70,  55 => 69,  54 => 68,  53 => 67,  49 => 65,  46 => 63,  44 => 62,  41 => 60,  39 => 59,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/solo/templates/layout/page.html.twig", "C:\\xampp\\htdocs\\projet1\\themes\\solo\\templates\\layout\\page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 59, "include" => 60, "if" => 85);
        static $filters = array("escape" => 83);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'include', 'if'],
                ['escape'],
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
