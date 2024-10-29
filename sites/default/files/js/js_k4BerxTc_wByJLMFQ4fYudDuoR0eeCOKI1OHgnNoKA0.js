/*!
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CKEditor5=e():(t.CKEditor5=t.CKEditor5||{},t.CKEditor5.wordCountAdapter=e())}(self,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>r});const r={WordCountAdapter:class{constructor(t){this.editor=t}init(){if(this.elementId=this.editor.sourceElement.getAttribute("id"),this.isRevHistoryEnabled=!1,this.elementId.includes("revision-history"))return void(this.isRevHistoryEnabled=!0);this.wordCountId=this.elementId+"-ck-word-count";const t=this.editor.sourceElement.closest(".form-item");if(this.wordCountWrapper=document.createElement("div"),this.wordCountWrapper.setAttribute("class","ck-word-count-container"),this.wordCountWrapper.setAttribute("id",this.wordCountId),t.parentNode.insertBefore(this.wordCountWrapper,t.nextSibling),this.isRevHistoryEnabled)return;const e=this.editor.plugins.get("WordCount");for(var r=0;r<e.wordCountContainer.children.length;r++)e.wordCountContainer.children[r].innerHTML=this.wrapNumber(e.wordCountContainer.children[r].innerHTML);this.wordCountWrapper.appendChild(e.wordCountContainer)}afterInit(){if(this.isRevHistoryEnabled)return;const t=this.editor.plugins.get("WordCount"),e=this.wordCountWrapper.querySelector(".ck-word-count__words span"),r=this.wordCountWrapper.querySelector(".ck-word-count__characters span");if(t.on("update",((t,o)=>{e&&(e.innerText=o.words),r&&(r.innerText=o.characters)})),this.editor.plugins.has("SourceEditing")){this.editor.plugins.get("SourceEditing").on("change:isSourceEditingMode",((t,e,r)=>{!0===r?this.wordCountWrapper.classList.add("ck-word-count-hide-element"):this.wordCountWrapper.classList.remove("ck-word-count-hide-element")}))}}wrapNumber(t){return t.replace(/(\d+)/gi,"<span>$1</span>")}}};return e=e.default})()));;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Block quote":"Block quote"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={446:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(609),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}",""]);const i=r},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&r[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},62:(e,t,o)=>{"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),c=[];function s(e){for(var t=-1,o=0;o<c.length;o++)if(c[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],a=o[l]||0,u="".concat(l," ").concat(a);o[l]=a+1;var d=s(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:u,updater:v(f,t),references:1}),n.push(u)}return n}function a(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function p(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,h=0;function v(e,t){var o,n,r;if(t.singleton){var i=h++;o=m||(m=a(t)),n=f.bind(null,o,i,!1),r=f.bind(null,o,i,!0)}else o=a(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=s(o[n]);c[r].references--}for(var i=l(e,t),a=0;a<o.length;a++){var u=s(o[a]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}o=i}}}},704:(e,t,o)=>{e.exports=o(79)("./src/core.js")},331:(e,t,o)=>{e.exports=o(79)("./src/enter.js")},181:(e,t,o)=>{e.exports=o(79)("./src/typing.js")},273:(e,t,o)=>{e.exports=o(79)("./src/ui.js")},209:(e,t,o)=>{e.exports=o(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};(()=>{"use strict";o.r(n),o.d(n,{BlockQuote:()=>g,BlockQuoteEditing:()=>u,BlockQuoteUI:()=>v});var e=o(704),t=o(331),r=o(181),i=o(209);class c extends e.Command{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,o=t.schema,n=t.document.selection,r=Array.from(n.getSelectedBlocks()),i=void 0===e.forceValue?!this.value:e.forceValue;t.change((e=>{if(i){const t=r.filter((e=>s(e)||a(o,e)));this._applyQuote(e,t)}else this._removeQuote(e,r.filter(s))}))}_getValue(){const e=this.editor.model.document.selection,t=(0,i.first)(e.getSelectedBlocks());return!(!t||!s(t))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,o=(0,i.first)(e.getSelectedBlocks());return!!o&&a(t,o)}_removeQuote(e,t){l(e,t).reverse().forEach((t=>{if(t.start.isAtStart&&t.end.isAtEnd)return void e.unwrap(t.start.parent);if(t.start.isAtStart){const o=e.createPositionBefore(t.start.parent);return void e.move(t,o)}t.end.isAtEnd||e.split(t.end);const o=e.createPositionAfter(t.end.parent);e.move(t,o)}))}_applyQuote(e,t){const o=[];l(e,t).reverse().forEach((t=>{let n=s(t.start);n||(n=e.createElement("blockQuote"),e.wrap(t,n)),o.push(n)})),o.reverse().reduce(((t,o)=>t.nextSibling==o?(e.merge(e.createPositionAfter(t)),t):o))}}function s(e){return"blockQuote"==e.parent.name?e.parent:null}function l(e,t){let o,n=0;const r=[];for(;n<t.length;){const i=t[n],c=t[n+1];o||(o=e.createPositionBefore(i)),c&&i.nextSibling==c||(r.push(e.createRange(o,e.createPositionAfter(i))),o=null),n++}return r}function a(e,t){const o=e.checkChild(t.parent,"blockQuote"),n=e.checkChild(["$root","blockQuote"],t);return o&&n}class u extends e.Plugin{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[t.Enter,r.Delete]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new c(e)),t.register("blockQuote",{inheritAllFrom:"$container"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer((o=>{const n=e.model.document.differ.getChanges();for(const e of n)if("insert"==e.type){const n=e.position.nodeAfter;if(!n)continue;if(n.is("element","blockQuote")&&n.isEmpty)return o.remove(n),!0;if(n.is("element","blockQuote")&&!t.checkChild(e.position,n))return o.unwrap(n),!0;if(n.is("element")){const e=o.createRangeIn(n);for(const n of e.getItems())if(n.is("element","blockQuote")&&!t.checkChild(o.createPositionBefore(n),n))return o.unwrap(n),!0}}else if("remove"==e.type){const t=e.position.parent;if(t.is("element","blockQuote")&&t.isEmpty)return o.remove(t),!0}return!1}));const o=this.editor.editing.view.document,n=e.model.document.selection,r=e.commands.get("blockQuote");this.listenTo(o,"enter",((t,o)=>{if(!n.isCollapsed||!r.value)return;n.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),o.preventDefault(),t.stop())}),{context:"blockquote"}),this.listenTo(o,"delete",((t,o)=>{if("backward"!=o.direction||!n.isCollapsed||!r.value)return;const i=n.getLastPosition().parent;i.isEmpty&&!i.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),o.preventDefault(),t.stop())}),{context:"blockquote"})}}var d=o(273),f=o(62),p=o.n(f),m=o(446),h={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};p()(m.Z,h);m.Z.locals;class v extends e.Plugin{static get pluginName(){return"BlockQuoteUI"}init(){const t=this.editor,o=t.t;t.ui.componentFactory.add("blockQuote",(n=>{const r=t.commands.get("blockQuote"),i=new d.ButtonView(n);return i.set({label:o("Block quote"),icon:e.icons.quote,tooltip:!0,isToggleable:!0}),i.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(i,"execute",(()=>{t.execute("blockQuote"),t.editing.view.focus()})),i}))}}class g extends e.Plugin{static get requires(){return[u,v]}static get pluginName(){return"BlockQuote"}}})(),(window.CKEditor5=window.CKEditor5||{}).blockQuote=n})();;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{Downloadable:"Downloadable","Edit link":"Edit link",Link:"Link","Link image":"Link image","Link URL":"Link URL","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","This link has no URL":"This link has no URL",Unlink:"Unlink"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={23:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}",""]);const s=o},952:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}",""]);const s=o},871:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}",""]);const s=o},269:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',""]);const s=o},764:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',""]);const s=o},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);n&&o[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}},62:(e,t,i)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),r=[];function a(e){for(var t=-1,i=0;i<r.length;i++)if(r[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},n=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var d=a(u),k={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(r[d].references++,r[d].updater(k)):r.push({identifier:u,updater:g(k,t),references:1}),n.push(u)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function k(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function h(e,t,i){var n=i.css,o=i.media,s=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,m=0;function g(e,t){var i,n,o;if(t.singleton){var s=m++;i=f||(f=l(t)),n=k.bind(null,i,s,!1),o=k.bind(null,i,s,!0)}else i=l(t),n=h.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=a(i[n]);r[o].references--}for(var s=c(e,t),l=0;l<i.length;l++){var u=a(i[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=s}}}},945:(e,t,i)=>{e.exports=i(79)("./src/clipboard.js")},704:(e,t,i)=>{e.exports=i(79)("./src/core.js")},492:(e,t,i)=>{e.exports=i(79)("./src/engine.js")},181:(e,t,i)=>{e.exports=i(79)("./src/typing.js")},273:(e,t,i)=>{e.exports=i(79)("./src/ui.js")},209:(e,t,i)=>{e.exports=i(79)("./src/utils.js")},995:(e,t,i)=>{e.exports=i(79)("./src/widget.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0;var n={};(()=>{"use strict";i.r(n),i.d(n,{AutoLink:()=>Me,Link:()=>Be,LinkEditing:()=>fe,LinkImage:()=>Re,LinkImageEditing:()=>Ne,LinkImageUI:()=>Ue,LinkUI:()=>Le});var e=i(704),t=i(492),o=i(181),s=i(945),r=i(209);class a{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(e){Array.isArray(e)?e.forEach((e=>this._definitions.add(e))):this._definitions.add(e)}getDispatcher(){return e=>{e.on("attribute:linkHref",((e,t,i)=>{if(!i.consumable.test(t.item,"attribute:linkHref"))return;if(!t.item.is("selection")&&!i.schema.isInline(t.item))return;const n=i.writer,o=n.document.selection;for(const e of this._definitions){const s=n.createAttributeElement("a",e.attributes,{priority:5});e.classes&&n.addClass(e.classes,s);for(const t in e.styles)n.setStyle(t,e.styles[t],s);n.setCustomProperty("link",!0,s),e.callback(t.attributeNewValue)?t.item.is("selection")?n.wrap(o.getFirstRange(),s):n.wrap(i.mapper.toViewRange(t.range),s):n.unwrap(i.mapper.toViewRange(t.range),s)}}),{priority:"high"})}}getDispatcherForLinkedImage(){return e=>{e.on("attribute:linkHref:imageBlock",((e,t,{writer:i,mapper:n})=>{const o=n.toViewElement(t.item),s=Array.from(o.getChildren()).find((e=>"a"===e.name));for(const e of this._definitions){const n=(0,r.toMap)(e.attributes);if(e.callback(t.attributeNewValue)){for(const[e,t]of n)"class"===e?i.addClass(t,s):i.setAttribute(e,t,s);e.classes&&i.addClass(e.classes,s);for(const t in e.styles)i.setStyle(t,e.styles[t],s)}else{for(const[e,t]of n)"class"===e?i.removeClass(t,s):i.removeAttribute(e,s);e.classes&&i.removeClass(e.classes,s);for(const t in e.styles)i.removeStyle(t,s)}}}))}}}const c=function(e,t,i){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(i=i>o?o:i)<0&&(i+=o),o=t>i?0:i-t>>>0,t>>>=0;for(var s=Array(o);++n<o;)s[n]=e[n+t];return s};const l=function(e,t,i){var n=e.length;return i=void 0===i?n:i,!t&&i>=n?e:c(e,t,i)};var u=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");const d=function(e){return u.test(e)};const k=function(e){return e.split("")};var h="\\ud800-\\udfff",f="["+h+"]",m="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",g="\\ud83c[\\udffb-\\udfff]",b="[^"+h+"]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",w="[\\ud800-\\udbff][\\udc00-\\udfff]",v="(?:"+m+"|"+g+")"+"?",_="[\\ufe0e\\ufe0f]?",y=_+v+("(?:\\u200d(?:"+[b,p,w].join("|")+")"+_+v+")*"),A="(?:"+[b+m+"?",m,p,w,f].join("|")+")",x=RegExp(g+"(?="+g+")|"+A+y,"g");const I=function(e){return e.match(x)||[]};const S=function(e){return d(e)?I(e):k(e)};const T="object"==typeof global&&global&&global.Object===Object&&global;var V="object"==typeof self&&self&&self.Object===Object&&self;const E=(T||V||Function("return this")()).Symbol;const L=function(e,t){for(var i=-1,n=null==e?0:e.length,o=Array(n);++i<n;)o[i]=t(e[i],i,e);return o};const C=Array.isArray;var D=Object.prototype,M=D.hasOwnProperty,j=D.toString,B=E?E.toStringTag:void 0;const N=function(e){var t=M.call(e,B),i=e[B];try{e[B]=void 0;var n=!0}catch(e){}var o=j.call(e);return n&&(t?e[B]=i:delete e[B]),o};var O=Object.prototype.toString;const H=function(e){return O.call(e)};var U=E?E.toStringTag:void 0;const P=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":U&&U in Object(e)?N(e):H(e)};const F=function(e){return null!=e&&"object"==typeof e};const R=function(e){return"symbol"==typeof e||F(e)&&"[object Symbol]"==P(e)};var z=E?E.prototype:void 0,Z=z?z.toString:void 0;const q=function e(t){if("string"==typeof t)return t;if(C(t))return L(t,e)+"";if(R(t))return Z?Z.call(t):"";var i=t+"";return"0"==i&&1/t==-Infinity?"-0":i};const K=function(e){return null==e?"":q(e)};const Q=function(e){return function(t){t=K(t);var i=d(t)?S(t):void 0,n=i?i[0]:t.charAt(0),o=i?l(i,1).join(""):t.slice(1);return n[e]()+o}}("toUpperCase"),$=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,W=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,Y=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,G=/^((\w+:(\/{2,})?)|(\W))/i,J="Ctrl+K";function X(e,{writer:t}){const i=t.createAttributeElement("a",{href:e},{priority:5});return t.setCustomProperty("link",!0,i),i}function ee(e){return function(e){const t=e.replace($,"");return t.match(W)}(e=String(e))?e:"#"}function te(e,t){return!!e&&t.checkAttribute(e.name,"linkHref")}function ie(e,t){const i=(n=e,Y.test(n)?"mailto:":t);var n;const o=!!i&&!ne(e);return e&&o?i+e:e}function ne(e){return G.test(e)}function oe(e){window.open(e,"_blank","noopener")}class se extends e.Command{constructor(e){super(e),this.manualDecorators=new r.Collection,this.automaticDecorators=new a}restoreManualDecoratorStates(){for(const e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}refresh(){const e=this.editor.model,t=e.document.selection,i=t.getSelectedElement()||(0,r.first)(t.getSelectedBlocks());te(i,e.schema)?(this.value=i.getAttribute("linkHref"),this.isEnabled=e.schema.checkAttribute(i,"linkHref")):(this.value=t.getAttribute("linkHref"),this.isEnabled=e.schema.checkAttributeInSelection(t,"linkHref"));for(const e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}execute(e,t={}){const i=this.editor.model,n=i.document.selection,s=[],a=[];for(const e in t)t[e]?s.push(e):a.push(e);i.change((t=>{if(n.isCollapsed){const c=n.getFirstPosition();if(n.hasAttribute("linkHref")){const r=(0,o.findAttributeRange)(c,"linkHref",n.getAttribute("linkHref"),i);t.setAttribute("linkHref",e,r),s.forEach((e=>{t.setAttribute(e,!0,r)})),a.forEach((e=>{t.removeAttribute(e,r)})),t.setSelection(t.createPositionAfter(r.end.nodeBefore))}else if(""!==e){const o=(0,r.toMap)(n.getAttributes());o.set("linkHref",e),s.forEach((e=>{o.set(e,!0)}));const{end:a}=i.insertContent(t.createText(e,o),c);t.setSelection(a)}["linkHref",...s,...a].forEach((e=>{t.removeSelectionAttribute(e)}))}else{const o=i.schema.getValidRanges(n.getRanges(),"linkHref"),r=[];for(const e of n.getSelectedBlocks())i.schema.checkAttribute(e,"linkHref")&&r.push(t.createRangeOn(e));const c=r.slice();for(const e of o)this._isRangeToUpdate(e,r)&&c.push(e);for(const i of c)t.setAttribute("linkHref",e,i),s.forEach((e=>{t.setAttribute(e,!0,i)})),a.forEach((e=>{t.removeAttribute(e,i)}))}}))}_getDecoratorStateFromModel(e){const t=this.editor.model,i=t.document.selection,n=i.getSelectedElement();return te(n,t.schema)?n.getAttribute(e):i.getAttribute(e)}_isRangeToUpdate(e,t){for(const i of t)if(i.containsRange(e))return!1;return!0}}class re extends e.Command{refresh(){const e=this.editor.model,t=e.document.selection,i=t.getSelectedElement();te(i,e.schema)?this.isEnabled=e.schema.checkAttribute(i,"linkHref"):this.isEnabled=e.schema.checkAttributeInSelection(t,"linkHref")}execute(){const e=this.editor,t=this.editor.model,i=t.document.selection,n=e.commands.get("link");t.change((e=>{const s=i.isCollapsed?[(0,o.findAttributeRange)(i.getFirstPosition(),"linkHref",i.getAttribute("linkHref"),t)]:t.schema.getValidRanges(i.getRanges(),"linkHref");for(const t of s)if(e.removeAttribute("linkHref",t),n)for(const i of n.manualDecorators)e.removeAttribute(i.id,t)}))}}class ae{constructor({id:e,label:t,attributes:i,classes:n,styles:o,defaultValue:s}){this.id=e,this.set("value"),this.defaultValue=s,this.label=t,this.attributes=i,this.classes=n,this.styles=o}_createPattern(){return{attributes:this.attributes,classes:this.classes,styles:this.styles}}}(0,r.mix)(ae,r.ObservableMixin);var ce=i(62),le=i.n(ce),ue=i(23),de={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};le()(ue.Z,de);ue.Z.locals;const ke="automatic",he=/^(https?:)?\/\//;class fe extends e.Plugin{static get pluginName(){return"LinkEditing"}static get requires(){return[o.TwoStepCaretMovement,o.Input,s.ClipboardPipeline]}constructor(e){super(e),e.config.define("link",{addTargetToExternalLinks:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"linkHref"}),e.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:X}),e.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(e,t)=>X(ee(e),t)}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:e=>e.getAttribute("href")}}),e.commands.add("link",new se(e)),e.commands.add("unlink",new re(e));const t=function(e,t){const i={"Open in a new tab":e("Open in a new tab"),Downloadable:e("Downloadable")};return t.forEach((e=>(e.label&&i[e.label]&&(e.label=i[e.label]),e))),t}(e.t,function(e){const t=[];if(e)for(const[i,n]of Object.entries(e)){const e=Object.assign({},n,{id:`link${Q(i)}`});t.push(e)}return t}(e.config.get("link.decorators")));this._enableAutomaticDecorators(t.filter((e=>e.mode===ke))),this._enableManualDecorators(t.filter((e=>"manual"===e.mode)));e.plugins.get(o.TwoStepCaretMovement).registerAttribute("linkHref"),(0,o.inlineHighlight)(e,"linkHref","a","ck-link_selected"),this._enableLinkOpen(),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink(),this._enableTypingOverLink(),this._handleDeleteContentAfterLink()}_enableAutomaticDecorators(e){const t=this.editor,i=t.commands.get("link").automaticDecorators;t.config.get("link.addTargetToExternalLinks")&&i.add({id:"linkIsExternal",mode:ke,callback:e=>he.test(e),attributes:{target:"_blank",rel:"noopener noreferrer"}}),i.add(e),i.length&&t.conversion.for("downcast").add(i.getDispatcher())}_enableManualDecorators(e){if(!e.length)return;const t=this.editor,i=t.commands.get("link").manualDecorators;e.forEach((e=>{t.model.schema.extend("$text",{allowAttributes:e.id}),e=new ae(e),i.add(e),t.conversion.for("downcast").attributeToElement({model:e.id,view:(t,{writer:i,schema:n},{item:o})=>{if((o.is("selection")||n.isInline(o))&&t){const t=i.createAttributeElement("a",e.attributes,{priority:5});e.classes&&i.addClass(e.classes,t);for(const n in e.styles)i.setStyle(n,e.styles[n],t);return i.setCustomProperty("link",!0,t),t}}}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",...e._createPattern()},model:{key:e.id}})}))}_enableLinkOpen(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"click",((e,t)=>{if(!(r.env.isMac?t.domEvent.metaKey:t.domEvent.ctrlKey))return;let i=t.domTarget;if("a"!=i.tagName.toLowerCase()&&(i=i.closest("a")),!i)return;const n=i.getAttribute("href");n&&(e.stop(),t.preventDefault(),oe(n))}),{context:"$capture"}),this.listenTo(t,"keydown",((t,i)=>{const n=e.commands.get("link").value;n&&i.keyCode===r.keyCodes.enter&&i.altKey&&(t.stop(),oe(n))}))}_enableInsertContentSelectionAttributesFixer(){const e=this.editor.model,t=e.document.selection;this.listenTo(e,"insertContent",(()=>{const i=t.anchor.nodeBefore,n=t.anchor.nodeAfter;t.hasAttribute("linkHref")&&i&&i.hasAttribute("linkHref")&&(n&&n.hasAttribute("linkHref")||e.change((t=>{me(t,be(e.schema))})))}),{priority:"low"})}_enableClickingAfterLink(){const e=this.editor,i=e.model;e.editing.view.addObserver(t.MouseObserver);let n=!1;this.listenTo(e.editing.view.document,"mousedown",(()=>{n=!0})),this.listenTo(e.editing.view.document,"selectionChange",(()=>{if(!n)return;n=!1;const e=i.document.selection;if(!e.isCollapsed)return;if(!e.hasAttribute("linkHref"))return;const t=e.getFirstPosition(),s=(0,o.findAttributeRange)(t,"linkHref",e.getAttribute("linkHref"),i);(t.isTouching(s.start)||t.isTouching(s.end))&&i.change((e=>{me(e,be(i.schema))}))}))}_enableTypingOverLink(){const e=this.editor,t=e.editing.view;let i,n;this.listenTo(t.document,"delete",(()=>{n=!0}),{priority:"high"}),this.listenTo(e.model,"deleteContent",(()=>{const t=e.model.document.selection;t.isCollapsed||(n?n=!1:ge(e)&&function(e){const t=e.document.selection,i=t.getFirstPosition(),n=t.getLastPosition(),s=i.nodeAfter;if(!s)return!1;if(!s.is("$text"))return!1;if(!s.hasAttribute("linkHref"))return!1;const r=n.textNode||n.nodeBefore;if(s===r)return!0;return(0,o.findAttributeRange)(i,"linkHref",s.getAttribute("linkHref"),e).containsRange(e.createRange(i,n),!0)}(e.model)&&(i=t.getAttributes()))}),{priority:"high"}),this.listenTo(e.model,"insertContent",((t,[o])=>{n=!1,ge(e)&&i&&(e.model.change((e=>{for(const[t,n]of i)e.setAttribute(t,n,o)})),i=null)}),{priority:"high"})}_handleDeleteContentAfterLink(){const e=this.editor,t=e.model,i=t.document.selection,n=e.editing.view;let s=!1,r=!1;this.listenTo(n.document,"delete",((e,t)=>{r="backward"===t.direction}),{priority:"high"}),this.listenTo(t,"deleteContent",(()=>{s=!1;const e=i.getFirstPosition(),n=i.getAttribute("linkHref");if(!n)return;const r=(0,o.findAttributeRange)(e,"linkHref",n,t);s=r.containsPosition(e)||r.end.isEqual(e)}),{priority:"high"}),this.listenTo(t,"deleteContent",(()=>{r&&(r=!1,s||e.model.enqueueChange((e=>{me(e,be(t.schema))})))}),{priority:"low"})}}function me(e,t){e.removeSelectionAttribute("linkHref");for(const i of t)e.removeSelectionAttribute(i)}function ge(e){return e.model.change((e=>e.batch)).isTyping}function be(e){return e.getDefinition("$text").allowAttributes.filter((e=>e.startsWith("link")))}var pe=i(273),we=i(995),ve=i(764),_e={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};le()(ve.Z,_e);ve.Z.locals;var ye=i(871),Ae={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};le()(ye.Z,Ae);ye.Z.locals;class xe extends pe.View{constructor(t,i){super(t);const n=t.t;this.focusTracker=new r.FocusTracker,this.keystrokes=new r.KeystrokeHandler,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),e.icons.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("Cancel"),e.icons.cancel,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(i),this.children=this._createFormChildren(i.manualDecorators),this._focusables=new pe.ViewCollection,this._focusCycler=new pe.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});const o=["ck","ck-link-form","ck-responsive-form"];i.manualDecorators.length&&o.push("ck-link-form_layout-vertical","ck-vertical-form"),this.setTemplate({tag:"form",attributes:{class:o,tabindex:"-1"},children:this.children}),(0,pe.injectCssTransitionDisabler)(this)}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce(((e,t)=>(e[t.name]=t.isOn,e)),{})}render(){super.render(),(0,pe.submitHandler)({view:this});[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const e=this.locale.t,t=new pe.LabeledFieldView(this.locale,pe.createLabeledInputText);return t.label=e("Link URL"),t}_createButton(e,t,i,n){const o=new pe.ButtonView(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),n&&o.delegate("execute").to(this,n),o}_createManualDecoratorSwitches(e){const t=this.createCollection();for(const i of e.manualDecorators){const n=new pe.SwitchButtonView(this.locale);n.set({name:i.id,label:i.label,withText:!0}),n.bind("isOn").toMany([i,e],"value",((e,t)=>void 0===t&&void 0===e?i.defaultValue:e)),n.on("execute",(()=>{i.set("value",!n.isOn)})),t.add(n)}return t}_createFormChildren(e){const t=this.createCollection();if(t.add(this.urlInputView),e.length){const e=new pe.View;e.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map((e=>({tag:"li",children:[e],attributes:{class:["ck","ck-list__item"]}}))),attributes:{class:["ck","ck-reset","ck-list"]}}),t.add(e)}return t.add(this.saveButtonView),t.add(this.cancelButtonView),t}}var Ie=i(952),Se={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};le()(Ie.Z,Se);Ie.Z.locals;class Te extends pe.View{constructor(t){super(t);const i=t.t;this.focusTracker=new r.FocusTracker,this.keystrokes=new r.KeystrokeHandler,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(i("Unlink"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',"unlink"),this.editButtonView=this._createButton(i("Edit link"),e.icons.pencil,"edit"),this.set("href"),this._focusables=new pe.ViewCollection,this._focusCycler=new pe.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions","ck-responsive-form"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render();[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createButton(e,t,i){const n=new pe.ButtonView(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n.delegate("execute").to(this,i),n}_createPreviewButton(){const e=new pe.ButtonView(this.locale),t=this.bindTemplate,i=this.t;return e.set({withText:!0,tooltip:i("Open link in new tab")}),e.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:t.to("href",(e=>e&&ee(e))),target:"_blank",rel:"noopener noreferrer"}}),e.bind("label").to(this,"href",(e=>e||i("This link has no URL"))),e.bind("isEnabled").to(this,"href",(e=>!!e)),e.template.tag="a",e.template.eventListeners={},e}}const Ve='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',Ee="link-ui";class Le extends e.Plugin{static get requires(){return[pe.ContextualBalloon]}static get pluginName(){return"LinkUI"}init(){const e=this.editor;e.editing.view.addObserver(t.ClickObserver),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=e.plugins.get(pe.ContextualBalloon),this._createToolbarLinkButton(),this._enableUserBalloonInteractions(),e.conversion.for("editingDowncast").markerToHighlight({model:Ee,view:{classes:["ck-fake-link-selection"]}}),e.conversion.for("editingDowncast").markerToElement({model:Ee,view:{name:"span",classes:["ck-fake-link-selection","ck-fake-link-selection_collapsed"]}})}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const e=this.editor,t=new Te(e.locale),i=e.commands.get("link"),n=e.commands.get("unlink");return t.bind("href").to(i,"value"),t.editButtonView.bind("isEnabled").to(i),t.unlinkButtonView.bind("isEnabled").to(n),this.listenTo(t,"edit",(()=>{this._addFormView()})),this.listenTo(t,"unlink",(()=>{e.execute("unlink"),this._hideUI()})),t.keystrokes.set("Esc",((e,t)=>{this._hideUI(),t()})),t.keystrokes.set(J,((e,t)=>{this._addFormView(),t()})),t}_createFormView(){const e=this.editor,t=e.commands.get("link"),i=e.config.get("link.defaultProtocol"),n=new xe(e.locale,t);return n.urlInputView.fieldView.bind("value").to(t,"value"),n.urlInputView.bind("isReadOnly").to(t,"isEnabled",(e=>!e)),n.saveButtonView.bind("isEnabled").to(t),this.listenTo(n,"submit",(()=>{const{value:t}=n.urlInputView.fieldView.element,o=ie(t,i);e.execute("link",o,n.getDecoratorSwitchesState()),this._closeFormView()})),this.listenTo(n,"cancel",(()=>{this._closeFormView()})),n.keystrokes.set("Esc",((e,t)=>{this._closeFormView(),t()})),n}_createToolbarLinkButton(){const e=this.editor,t=e.commands.get("link"),i=e.t;e.keystrokes.set(J,((e,i)=>{i(),t.isEnabled&&this._showUI(!0)})),e.ui.componentFactory.add("link",(e=>{const n=new pe.ButtonView(e);return n.isEnabled=!0,n.label=i("Link"),n.icon=Ve,n.keystroke=J,n.tooltip=!0,n.isToggleable=!0,n.bind("isEnabled").to(t,"isEnabled"),n.bind("isOn").to(t,"value",(e=>!!e)),this.listenTo(n,"execute",(()=>this._showUI(!0))),n}))}_enableUserBalloonInteractions(){const e=this.editor.editing.view.document;this.listenTo(e,"click",(()=>{this._getSelectedLinkElement()&&this._showUI()})),this.editor.keystrokes.set("Tab",((e,t)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),t())}),{priority:"high"}),this.editor.keystrokes.set("Esc",((e,t)=>{this._isUIVisible&&(this._hideUI(),t())})),(0,pe.clickOutsideHandler)({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const e=this.editor.commands.get("link");this.formView.disableCssTransitions(),this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.enableCssTransitions(),this.formView.urlInputView.fieldView.element.value=e.value||""}_closeFormView(){const e=this.editor.commands.get("link");e.restoreManualDecoratorStates(),void 0!==e.value?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(e=!1){this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),e&&this._balloon.showStack("main")):(this._showFakeVisualSelection(),this._addActionsView(),e&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;const e=this.editor;this.stopListening(e.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),e.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){const e=this.editor,t=e.editing.view.document;let i=this._getSelectedLinkElement(),n=s();const o=()=>{const e=this._getSelectedLinkElement(),t=s();i&&!e||!i&&t!==n?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),i=e,n=t};function s(){return t.selection.focus.getAncestors().reverse().find((e=>e.is("element")))}this.listenTo(e.ui,"update",o),this.listenTo(this._balloon,"change:visibleView",o)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const e=this.editor.editing.view,t=this.editor.model,i=e.document;let n=null;if(t.markers.has(Ee)){const t=Array.from(this.editor.editing.mapper.markerNameToElements(Ee)),i=e.createRange(e.createPositionBefore(t[0]),e.createPositionAfter(t[t.length-1]));n=e.domConverter.viewRangeToDom(i)}else n=()=>{const t=this._getSelectedLinkElement();return t?e.domConverter.mapViewToDom(t):e.domConverter.viewRangeToDom(i.selection.getFirstRange())};return{target:n}}_getSelectedLinkElement(){const e=this.editor.editing.view,t=e.document.selection,i=t.getSelectedElement();if(t.isCollapsed||i&&(0,we.isWidget)(i))return Ce(t.getFirstPosition());{const i=t.getFirstRange().getTrimmed(),n=Ce(i.start),o=Ce(i.end);return n&&n==o&&e.createRangeIn(n).getTrimmed().isEqual(i)?n:null}}_showFakeVisualSelection(){const e=this.editor.model;e.change((t=>{const i=e.document.selection.getFirstRange();if(e.markers.has(Ee))t.updateMarker(Ee,{range:i});else if(i.start.isAtEnd){const n=i.start.getLastMatchingPosition((({item:t})=>!e.schema.isContent(t)),{boundaries:i});t.addMarker(Ee,{usingOperation:!1,affectsData:!1,range:t.createRange(n,i.end)})}else t.addMarker(Ee,{usingOperation:!1,affectsData:!1,range:i})}))}_hideFakeVisualSelection(){const e=this.editor.model;e.markers.has(Ee)&&e.change((e=>{e.removeMarker(Ee)}))}}function Ce(e){return e.getAncestors().find((e=>{return(t=e).is("attributeElement")&&!!t.getCustomProperty("link");var t}))}const De=new RegExp("(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$","i");class Me extends e.Plugin{static get requires(){return[o.Delete]}static get pluginName(){return"AutoLink"}init(){const e=this.editor.model.document.selection;e.on("change:range",(()=>{this.isEnabled=!e.anchor.parent.is("element","codeBlock")})),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){const e=this.editor,t=new o.TextWatcher(e.model,(e=>{if(!function(e){return e.length>4&&" "===e[e.length-1]&&" "!==e[e.length-2]}(e))return;const t=je(e.substr(0,e.length-1));return t?{url:t}:void 0}));t.on("matched:data",((t,i)=>{const{batch:n,range:o,url:s}=i;if(!n.isTyping)return;const r=o.end.getShiftedBy(-1),a=r.getShiftedBy(-s.length),c=e.model.createRange(a,r);this._applyAutoLink(s,c)})),t.bind("isEnabled").to(this)}_enableEnterHandling(){const e=this.editor,t=e.model,i=e.commands.get("enter");i&&i.on("execute",(()=>{const e=t.document.selection.getFirstPosition();if(!e.parent.previousSibling)return;const i=t.createRangeIn(e.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(i)}))}_enableShiftEnterHandling(){const e=this.editor,t=e.model,i=e.commands.get("shiftEnter");i&&i.on("execute",(()=>{const e=t.document.selection.getFirstPosition(),i=t.createRange(t.createPositionAt(e.parent,0),e.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(i)}))}_checkAndApplyAutoLinkOnRange(e){const t=this.editor.model,{text:i,range:n}=(0,o.getLastTextLine)(e,t),s=je(i);if(s){const e=t.createRange(n.end.getShiftedBy(-s.length),n.end);this._applyAutoLink(s,e)}}_applyAutoLink(e,t){const i=this.editor.model,n=ie(e,this.editor.config.get("link.defaultProtocol"));this.isEnabled&&function(e,t){return t.schema.checkAttributeInSelection(t.createSelection(e),"linkHref")}(t,i)&&ne(n)&&!function(e){const t=e.start.nodeAfter;return t&&t.hasAttribute("linkHref")}(t)&&this._persistAutoLink(n,t)}_persistAutoLink(e,t){const i=this.editor.model,n=this.editor.plugins.get("Delete");i.enqueueChange((o=>{o.setAttribute("linkHref",e,t),i.enqueueChange((()=>{n.requestUndoOnBackspace()}))}))}}function je(e){const t=De.exec(e);return t?t[2]:null}class Be extends e.Plugin{static get requires(){return[fe,Le,Me]}static get pluginName(){return"Link"}}class Ne extends e.Plugin{static get requires(){return["ImageEditing","ImageUtils",fe]}static get pluginName(){return"LinkImageEditing"}init(){const e=this.editor,t=e.model.schema;e.plugins.has("ImageBlockEditing")&&t.extend("imageBlock",{allowAttributes:["linkHref"]}),e.conversion.for("upcast").add(function(e){const t=e.plugins.has("ImageInlineEditing"),i=e.plugins.get("ImageUtils");return e=>{e.on("element:a",((e,n,o)=>{const s=n.viewItem,r=i.findViewImgElement(s);if(!r)return;const a=r.findAncestor((e=>i.isBlockImageView(e)));if(t&&!a)return;const c={attributes:["href"]};if(!o.consumable.consume(s,c))return;const l=s.getAttribute("href");if(!l)return;let u=n.modelCursor.parent;if(!u.is("element","imageBlock")){const e=o.convertItem(r,n.modelCursor);n.modelRange=e.modelRange,n.modelCursor=e.modelCursor,u=n.modelCursor.nodeBefore}u&&u.is("element","imageBlock")&&o.writer.setAttribute("linkHref",l,u)}),{priority:"high"})}}(e)),e.conversion.for("downcast").add(function(e){const t=e.plugins.get("ImageUtils");return e=>{e.on("attribute:linkHref:imageBlock",((e,i,n)=>{if(!n.consumable.consume(i.item,e.name))return;const o=n.mapper.toViewElement(i.item),s=n.writer,r=Array.from(o.getChildren()).find((e=>"a"===e.name)),a=t.findViewImgElement(o),c=a.parent.is("element","picture")?a.parent:a;if(r)i.attributeNewValue?s.setAttribute("href",i.attributeNewValue,r):(s.move(s.createRangeOn(c),s.createPositionAt(o,0)),s.remove(r));else{const e=s.createContainerElement("a",{href:i.attributeNewValue});s.insert(s.createPositionAt(o,0),e),s.move(s.createRangeOn(c),s.createPositionAt(e,0))}}),{priority:"high"})}}(e)),this._enableAutomaticDecorators(),this._enableManualDecorators()}_enableAutomaticDecorators(){const e=this.editor,t=e.commands.get("link").automaticDecorators;t.length&&e.conversion.for("downcast").add(t.getDispatcherForLinkedImage())}_enableManualDecorators(){const e=this.editor,t=e.commands.get("link");for(const i of t.manualDecorators)e.plugins.has("ImageBlockEditing")&&e.model.schema.extend("imageBlock",{allowAttributes:i.id}),e.plugins.has("ImageInlineEditing")&&e.model.schema.extend("imageInline",{allowAttributes:i.id}),e.conversion.for("downcast").add(Oe(i)),e.conversion.for("upcast").add(He(e,i))}}function Oe(e){return t=>{t.on(`attribute:${e.id}:imageBlock`,((t,i,n)=>{const o=n.mapper.toViewElement(i.item),s=Array.from(o.getChildren()).find((e=>"a"===e.name));if(s){for(const[t,i]of(0,r.toMap)(e.attributes))n.writer.setAttribute(t,i,s);e.classes&&n.writer.addClass(e.classes,s);for(const t in e.styles)n.writer.setStyle(t,e.styles[t],s)}}))}}function He(e,i){const n=e.plugins.has("ImageInlineEditing"),o=e.plugins.get("ImageUtils");return e=>{e.on("element:a",((e,s,r)=>{const a=s.viewItem,c=o.findViewImgElement(a);if(!c)return;const l=c.findAncestor((e=>o.isBlockImageView(e)));if(n&&!l)return;const u=new t.Matcher(i._createPattern()).match(a);if(!u)return;if(!r.consumable.consume(a,u.match))return;const d=s.modelCursor.nodeBefore||s.modelCursor.parent;r.writer.setAttribute(i.id,!0,d)}),{priority:"high"})}}class Ue extends e.Plugin{static get requires(){return[fe,Le,"ImageBlockEditing"]}static get pluginName(){return"LinkImageUI"}init(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"click",((t,i)=>{this._isSelectedLinkedImage(e.model.document.selection)&&(i.preventDefault(),t.stop())}),{priority:"high"}),this._createToolbarLinkImageButton()}_createToolbarLinkImageButton(){const e=this.editor,t=e.t;e.ui.componentFactory.add("linkImage",(i=>{const n=new pe.ButtonView(i),o=e.plugins.get("LinkUI"),s=e.commands.get("link");return n.set({isEnabled:!0,label:t("Link image"),icon:Ve,keystroke:J,tooltip:!0,isToggleable:!0}),n.bind("isEnabled").to(s,"isEnabled"),n.bind("isOn").to(s,"value",(e=>!!e)),this.listenTo(n,"execute",(()=>{this._isSelectedLinkedImage(e.model.document.selection)?o._addActionsView():o._showUI(!0)})),n}))}_isSelectedLinkedImage(e){const t=e.getSelectedElement();return this.editor.plugins.get("ImageUtils").isImage(t)&&t.hasAttribute("linkHref")}}var Pe=i(269),Fe={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};le()(Pe.Z,Fe);Pe.Z.locals;class Re extends e.Plugin{static get requires(){return[Ne,Ue]}static get pluginName(){return"LinkImage"}}})(),(window.CKEditor5=window.CKEditor5||{}).link=n})();;
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Circle:"Circle",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero",Disc:"Disc","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Reversed order":"Reversed order",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.","To-do List":"To-do List","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={389:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}",""]);const r=s},78:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}",""]);const r=s},543:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}",""]);const r=s},657:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".ck.ck-list-styles-list{display:grid}.ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:circle}.ck-content ul ul{list-style-type:disc}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}",""]);const r=s},250:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',""]);const r=s},609:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var l=0;l<t.length;l++){var a=[].concat(t[l]);n&&s[a[0]]||(i&&(a[2]?a[2]="".concat(i," and ").concat(a[2]):a[2]=i),e.push(a))}},e}},62:(t,e,i)=>{"use strict";var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function l(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function a(t,e){for(var i={},n=[],s=0;s<t.length;s++){var r=t[s],a=e.base?r[0]+e.base:r[0],c=i[a]||0,d="".concat(a," ").concat(c);i[a]=c+1;var u=l(d),m={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(m)):o.push({identifier:d,updater:g(m,e),references:1}),n.push(d)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function m(t,e,i,n){var s=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function p(t,e,i){var n=i.css,s=i.media,r=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,f=0;function g(t,e){var i,n,s;if(e.singleton){var r=f++;i=h||(h=c(e)),n=m.bind(null,i,r,!1),s=m.bind(null,i,r,!0)}else i=c(e),n=p.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var s=l(i[n]);o[s].references--}for(var r=a(t,e),c=0;c<i.length;c++){var d=l(i[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}i=r}}}},704:(t,e,i)=>{t.exports=i(79)("./src/core.js")},492:(t,e,i)=>{t.exports=i(79)("./src/engine.js")},331:(t,e,i)=>{t.exports=i(79)("./src/enter.js")},181:(t,e,i)=>{t.exports=i(79)("./src/typing.js")},273:(t,e,i)=>{t.exports=i(79)("./src/ui.js")},209:(t,e,i)=>{t.exports=i(79)("./src/utils.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nc=void 0;var n={};(()=>{"use strict";i.r(n),i.d(n,{DocumentList:()=>ft,DocumentListEditing:()=>Y,DocumentListProperties:()=>Ht,DocumentListPropertiesEditing:()=>Vt,DocumentListPropertiesUtils:()=>Ct,DocumentListUtils:()=>E,List:()=>ae,ListEditing:()=>oe,ListProperties:()=>ve,ListPropertiesEditing:()=>pe,ListPropertiesUI:()=>Ot,ListUI:()=>ht,ListUtils:()=>Zt,TodoList:()=>Ee,TodoListEditing:()=>_e,TodoListUI:()=>Ce});var t=i(704),e=i(331),s=i(181),r=i(209);class o{constructor(t,e){this._startElement=t,this._referenceIndent=t.getAttribute("listIndent"),this._isForward="forward"==e.direction,this._includeSelf=!!e.includeSelf,this._sameAttributes=(0,r.toArray)(e.sameAttributes||[]),this._sameIndent=!!e.sameIndent,this._lowerIndent=!!e.lowerIndent,this._higherIndent=!!e.higherIndent}static first(t,e){const i=new this(t,e)[Symbol.iterator]();return(0,r.first)(i)}*[Symbol.iterator](){const t=[];for(const{node:e}of l(this._getStartNode(),this._isForward?"forward":"backward")){const i=e.getAttribute("listIndent");if(i<this._referenceIndent){if(!this._lowerIndent)break;this._referenceIndent=i}else if(i>this._referenceIndent){if(!this._higherIndent)continue;if(!this._isForward){t.push(e);continue}}else{if(!this._sameIndent){if(this._higherIndent){t.length&&(yield*t,t.length=0);break}continue}if(this._sameAttributes.some((t=>e.getAttribute(t)!==this._startElement.getAttribute(t))))break}t.length&&(yield*t,t.length=0),yield e}}_getStartNode(){return this._includeSelf?this._startElement:this._isForward?this._startElement.nextSibling:this._startElement.previousSibling}}function*l(t,e="forward"){const i="forward"==e;let n=null;for(;d(t);)yield{node:t,previous:n},n=t,t=i?t.nextSibling:t.previousSibling}class a{constructor(t){this._listHead=t}[Symbol.iterator](){return l(this._listHead,"forward")}}class c{static next(){return(0,r.uid)()}}function d(t){return!!t&&t.is("element")&&t.hasAttribute("listItemId")}function u(t,e={}){return[...m(t,{...e,direction:"backward"}),...m(t,{...e,direction:"forward"})]}function m(t,e={}){const i="forward"==e.direction,n=Array.from(new o(t,{...e,includeSelf:i,sameIndent:!0,sameAttributes:"listItemId"}));return i?n:n.reverse()}function p(t){const e=new o(t,{sameIndent:!0,sameAttributes:"listType"}),i=new o(t,{sameIndent:!0,sameAttributes:"listType",includeSelf:!0,direction:"forward"});return[...Array.from(e).reverse(),...i]}function h(t){return!o.first(t,{sameIndent:!0,sameAttributes:"listItemId"})}function f(t){return!o.first(t,{direction:"forward",sameIndent:!0,sameAttributes:"listItemId"})}function g(t,e={}){t=(0,r.toArray)(t);const i=!1!==e.withNested,n=new Set;for(const e of t)for(const t of u(e,{higherIndent:i}))n.add(t);return k(n)}function b(t){t=(0,r.toArray)(t);const e=new Set;for(const i of t)for(const t of p(i))e.add(t);return k(e)}function y(t,e){const i=m(t,{direction:"forward"}),n=c.next();for(const t of i)e.setAttribute("listItemId",n,t);return i}function v(t,e,i){const n={};for(const[t,i]of e.getAttributes())t.startsWith("list")&&(n[t]=i);const s=m(t,{direction:"forward"});for(const t of s)i.setAttributes(n,t);return s}function w(t,e,{expand:i,indentBy:n=1}={}){t=(0,r.toArray)(t);const s=i?g(t):t;for(const t of s){const i=t.getAttribute("listIndent")+n;i<0?A(t,e):e.setAttribute("listIndent",i,t)}return s}function A(t,e){t=(0,r.toArray)(t);for(const i of t)for(const t of i.getAttributeKeys())t.startsWith("list")&&e.removeAttribute(t,i);return t}function I(t){if(!t.length)return!1;const e=t[0].getAttribute("listItemId");return!!e&&!t.some((t=>t.getAttribute("listItemId")!=e))}function k(t){return Array.from(t).filter((t=>"$graveyard"!==t.root.rootName)).sort(((t,e)=>t.index-e.index))}function x(t){const e=t.document.selection.getSelectedElement();return e&&t.schema.isObject(e)&&t.schema.isBlock(e)?e:null}function T(t,e,i){return m(e,{direction:"forward"}).pop().index>t.index?v(t,e,i):[]}class S extends t.Command{constructor(t,e){super(t),this._direction=e}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=_(t.document.selection);t.change((t=>{const i=[];I(e)&&!h(e[0])?("forward"==this._direction&&i.push(...w(e,t)),i.push(...y(e[0],t))):"forward"==this._direction?i.push(...w(e,t,{expand:!0})):i.push(...function(t,e){const i=g(t=(0,r.toArray)(t)),n=new Set,s=Math.min(...i.map((t=>t.getAttribute("listIndent")))),l=new Map;for(const t of i)l.set(t,o.first(t,{lowerIndent:!0}));for(const t of i){if(n.has(t))continue;n.add(t);const i=t.getAttribute("listIndent")-1;if(i<0)A(t,e);else{if(t.getAttribute("listIndent")==s){const i=T(t,l.get(t),e);for(const t of i)n.add(t);if(i.length)continue}e.setAttribute("listIndent",i,t)}}return k(n)}(e,t));for(const e of i){if(!e.hasAttribute("listType"))continue;const i=o.first(e,{sameIndent:!0});i&&t.setAttribute("listType",i.getAttribute("listType"),e)}this._fireAfterExecute(i)}))}_fireAfterExecute(t){this.fire("afterExecute",k(new Set(t)))}_checkEnabled(){let t=_(this.editor.model.document.selection),e=t[0];if(!e)return!1;if("backward"==this._direction)return!0;if(I(t)&&!h(t[0]))return!0;t=g(t),e=t[0];const i=o.first(e,{sameIndent:!0});return!!i&&i.getAttribute("listType")==e.getAttribute("listType")}}function _(t){const e=Array.from(t.getSelectedBlocks()),i=e.findIndex((t=>!d(t)));return-1!=i&&(e.length=i),e}class C extends t.Command{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,i=e.document,n=x(e),s=Array.from(i.selection.getSelectedBlocks()).filter((t=>e.schema.checkAttribute(t,"listType"))),r=void 0!==t.forceValue?!t.forceValue:this.value;e.change((t=>{if(r){const e=s[s.length-1],i=m(e,{direction:"forward"}),n=[];i.length>1&&n.push(...y(i[1],t)),n.push(...A(s,t)),n.push(...function(t,e){const i=[];let n=Number.POSITIVE_INFINITY;for(const{node:s}of l(t.nextSibling,"forward")){const t=s.getAttribute("listIndent");if(0==t)break;t<n&&(n=t);const r=t-n;e.setAttribute("listIndent",r,s),i.push(s)}return i}(e,t)),this._fireAfterExecute(n)}else if((n||i.selection.isCollapsed)&&d(s[0])){const e=p(n||s[0]);for(const i of e)t.setAttribute("listType",this.type,i);this._fireAfterExecute(e)}else{const e=[];for(const i of s)if(i.hasAttribute("listType"))for(const n of g(i,{withNested:!1}))n.getAttribute("listType")!=this.type&&(t.setAttribute("listType",this.type,n),e.push(n));else t.setAttributes({listIndent:0,listItemId:c.next(),listType:this.type},i),e.push(i);this._fireAfterExecute(e)}}))}_fireAfterExecute(t){this.fire("afterExecute",k(new Set(t)))}_getValue(){const t=this.editor.model.document.selection,e=Array.from(t.getSelectedBlocks());if(!e.length)return!1;for(const t of e)if(t.getAttribute("listType")!=this.type)return!1;return!0}_checkEnabled(){const t=this.editor.model.document.selection,e=this.editor.model.schema,i=Array.from(t.getSelectedBlocks());if(!i.length)return!1;if(this.value)return!0;for(const t of i)if(e.checkAttribute(t,"listType"))return!0;return!1}}class L extends t.Command{constructor(t,e){super(t),this._direction=e}refresh(){this.isEnabled=this._checkEnabled()}execute({shouldMergeOnBlocksContentLevel:t=!1}={}){const e=this.editor.model,i=e.document.selection,n=[];e.change((s=>{const{firstElement:r,lastElement:l}=this._getMergeSubjectElements(i,t),a=r.getAttribute("listIndent")||0,c=l.getAttribute("listIndent"),d=l.getAttribute("listItemId");if(a!=c){const t=(u=l,Array.from(new o(u,{direction:"forward",higherIndent:!0})));n.push(...w([l,...t],s,{indentBy:a-c,expand:a<c}))}var u;if(t){let t=i;i.isCollapsed&&(t=s.createSelection(s.createRange(s.createPositionAt(r,"end"),s.createPositionAt(l,0)))),e.deleteContent(t,{doNotResetEntireContent:i.isCollapsed});const o=t.getLastPosition().parent,a=o.nextSibling;n.push(o),a&&a!==l&&a.getAttribute("listItemId")==d&&n.push(...v(a,o,s))}else n.push(...v(l,r,s));this._fireAfterExecute(n)}))}_fireAfterExecute(t){this.fire("afterExecute",k(new Set(t)))}_checkEnabled(){const t=this.editor.model,e=t.document.selection,i=x(t);if(e.isCollapsed||i){const t=i||e.getFirstPosition().parent;if(!d(t))return!1;const n="backward"==this._direction?t.previousSibling:t.nextSibling;if(!n)return!1;if(I([t,n]))return!1}else{const t=e.getLastPosition(),i=e.getFirstPosition();if(t.parent===i.parent)return!1;if(!d(t.parent))return!1}return!0}_getMergeSubjectElements(t,e){const i=x(this.editor.model);let n,s;if(t.isCollapsed||i){const r=i||t.getFirstPosition().parent,l=h(r);"backward"==this._direction?(s=r,n=l&&!e?o.first(r,{sameIndent:!0,lowerIndent:!0}):r.previousSibling):(n=r,s=r.nextSibling)}else n=t.getFirstPosition().parent,s=t.getLastPosition().parent;return{firstElement:n,lastElement:s}}}class V extends t.Command{constructor(t,e){super(t),this._direction=e}refresh(){this.isEnabled=this._checkEnabled()}execute(){this.editor.model.change((t=>{const e=y(this._getStartBlock(),t);this._fireAfterExecute(e)}))}_fireAfterExecute(t){this.fire("afterExecute",k(new Set(t)))}_checkEnabled(){const t=this.editor.model.document.selection,e=this._getStartBlock();return t.isCollapsed&&d(e)&&!h(e)}_getStartBlock(){const t=this.editor.model.document.selection.getFirstPosition().parent;return"before"==this._direction?t:t.nextSibling}}class E extends t.Plugin{static get pluginName(){return"DocumentListUtils"}expandListBlocksToCompleteList(t){return b(t)}isFirstBlockOfListItem(t){return h(t)}isListItemBlock(t){return d(t)}}function P(t){return t.is("element","ol")||t.is("element","ul")}function z(t){return t.is("element","li")}function B(t){let e=0,i=t.parent;for(;i;){if(z(i))e++;else{const t=i.previousSibling;t&&z(t)&&e++}i=i.parent}return e}function N(t,e,i,n=F(i,e)){return t.createAttributeElement(D(i),null,{priority:2*e/100-100,id:n})}function M(t,e,i){return t.createAttributeElement("li",null,{priority:(2*e+1)/100-100,id:i})}function D(t){return"numbered"==t?"ol":"ul"}function F(t,e){return`list-${t}-${e}`}function O(t,e){const i=t.nodeBefore;if(d(i)){let t=i;for(const{node:i}of l(t,"backward"))if(t=i,e.has(t))return;e.set(i,t)}else{const i=t.nodeAfter;d(i)&&e.set(i,i)}}var R=i(492);function H(){return(t,e,i)=>{if(!i.consumable.test(e.viewItem,{name:!0}))return;const n=new R.UpcastWriter(e.viewItem.document);for(const t of Array.from(e.viewItem.getChildren()))z(t)||P(t)||n.remove(t)}}function U(t,e,i){const n=function(t){return(e,i)=>{const n=[];for(const i of t)e.hasAttribute(i)&&n.push(`attribute:${i}`);return!!n.every((t=>!1!==i.test(e,t)))&&(n.forEach((t=>i.consume(e,t))),!0)}}(t);return(s,r,l)=>{const{writer:a,mapper:c,consumable:d}=l,u=r.item;if(!t.includes(r.attributeKey))return;if(!n(u,d))return;const m=function(t,e,i){const n=i.createRangeOn(t),s=e.toViewRange(n).getTrimmed();return s.getContainedElement()}(u,c,i);!function(t,e){let i=t.parent;for(;i.is("attributeElement")&&["ul","ol","li"].includes(i.name);){const n=i.parent;e.unwrap(e.createRangeOn(t),i),i=n}}(m,a),function(t,e,i,n){if(!t.hasAttribute("listIndent"))return;const s=t.getAttribute("listIndent");let r=t;for(let t=s;t>=0;t--){const s=M(n,t,r.getAttribute("listItemId")),l=N(n,t,r.getAttribute("listType"));for(const t of i)r.hasAttribute(t.attributeName)&&t.setAttributeOnDowncast(n,r.getAttribute(t.attributeName),"list"==t.scope?l:s);if(e=n.wrap(e,s),e=n.wrap(e,l),0==t)break;if(r=o.first(r,{lowerIndent:!0}),!r)break}}(u,a.createRangeOn(m),e,a)}}function j(t,{dataPipeline:e}={}){return(i,{writer:n})=>{if(!q(i,t))return;const s=n.createContainerElement("span",{class:"ck-list-bogus-paragraph"});return e&&n.setCustomProperty("dataPipeline:transparentRendering",!0,s),s}}function q(t,e,i=u(t)){if(!d(t))return!1;for(const i of t.getAttributeKeys())if(!i.startsWith("selection:")&&!e.includes(i))return!1;return i.length<2}var K=i(62),Z=i.n(K),$=i(78),W={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Z()($.Z,W);$.Z.locals;const G=["listType","listIndent","listItemId"];class Y extends t.Plugin{static get pluginName(){return"DocumentListEditing"}static get requires(){return[e.Enter,s.Delete,E]}constructor(t){super(t),this._downcastStrategies=[]}init(){const t=this.editor,e=t.model;if(t.plugins.has("ListEditing"))throw new r.CKEditorError("document-list-feature-conflict",this,{conflictPlugin:"ListEditing"});e.schema.extend("$container",{allowAttributes:G}),e.schema.extend("$block",{allowAttributes:G}),e.schema.extend("$blockObject",{allowAttributes:G});for(const t of G)e.schema.setAttributeProperties(t,{copyOnReplace:!0});t.commands.add("numberedList",new C(t,"numbered")),t.commands.add("bulletedList",new C(t,"bulleted")),t.commands.add("indentList",new S(t,"forward")),t.commands.add("outdentList",new S(t,"backward")),t.commands.add("mergeListItemBackward",new L(t,"backward")),t.commands.add("mergeListItemForward",new L(t,"forward")),t.commands.add("splitListItemBefore",new V(t,"before")),t.commands.add("splitListItemAfter",new V(t,"after")),this._setupDeleteIntegration(),this._setupEnterIntegration(),this._setupTabIntegration(),this._setupClipboardIntegration()}afterInit(){const t=this.editor.commands,e=t.get("indent"),i=t.get("outdent");e&&e.registerChildCommand(t.get("indentList"),{priority:"high"}),i&&i.registerChildCommand(t.get("outdentList"),{priority:"lowest"}),this._setupModelPostFixing(),this._setupConversion()}registerDowncastStrategy(t){this._downcastStrategies.push(t)}_getListAttributeNames(){return[...G,...this._downcastStrategies.map((t=>t.attributeName))]}_setupDeleteIntegration(){const t=this.editor,e=t.commands.get("mergeListItemBackward"),i=t.commands.get("mergeListItemForward");this.listenTo(t.editing.view.document,"delete",((n,s)=>{const r=t.model.document.selection;x(t.model)||t.model.change((()=>{const l=r.getFirstPosition();if(r.isCollapsed&&"backward"==s.direction){if(!l.isAtStart)return;const i=l.parent;if(!d(i))return;if(o.first(i,{sameAttributes:"listType",sameIndent:!0})||0!==i.getAttribute("listIndent")){if(!e.isEnabled)return;e.execute({shouldMergeOnBlocksContentLevel:J(t.model,"backward")})}else f(i)||t.execute("splitListItemAfter"),t.execute("outdentList");s.preventDefault(),n.stop()}else{if(r.isCollapsed&&!r.getLastPosition().isAtEnd)return;if(!i.isEnabled)return;i.execute({shouldMergeOnBlocksContentLevel:J(t.model,"forward")}),s.preventDefault(),n.stop()}}))}),{context:"li"})}_setupEnterIntegration(){const t=this.editor,e=t.model,i=t.commands,n=i.get("enter");this.listenTo(t.editing.view.document,"enter",((i,n)=>{const s=e.document,r=s.selection.getFirstPosition().parent;if(s.selection.isCollapsed&&d(r)&&r.isEmpty&&!n.isSoft){const e=h(r),s=f(r);e&&s?(t.execute("outdentList"),n.preventDefault(),i.stop()):e&&!s?(t.execute("splitListItemAfter"),n.preventDefault(),i.stop()):s&&(t.execute("splitListItemBefore"),n.preventDefault(),i.stop())}}),{context:"li"}),this.listenTo(n,"afterExecute",(()=>{const e=i.get("splitListItemBefore");if(e.refresh(),!e.isEnabled)return;2===u(t.model.document.selection.getLastPosition().parent).length&&e.execute()}))}_setupTabIntegration(){const t=this.editor;this.listenTo(t.editing.view.document,"tab",((e,i)=>{const n=i.shiftKey?"outdentList":"indentList";this.editor.commands.get(n).isEnabled&&(t.execute(n),i.stopPropagation(),i.preventDefault(),e.stop())}),{context:"li"})}_setupConversion(){const t=this.editor,e=t.model,i=this._getListAttributeNames();t.conversion.for("upcast").elementToElement({view:"li",model:"paragraph"}).add((t=>{t.on("element:li",((t,e,i)=>{const{writer:n,schema:s}=i;if(!e.modelRange)return;const r=Array.from(e.modelRange.getItems({shallow:!0})).filter((t=>s.checkAttribute(t,"listItemId")));if(!r.length)return;const o={listItemId:c.next(),listIndent:B(e.viewItem),listType:e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted"};for(const t of r)d(t)||n.setAttributes(o,t);r.length>1&&r[1].getAttribute("listItemId")!=o.listItemId&&i.keepEmptyElement(r[0])})),t.on("element:ul",H(),{priority:"high"}),t.on("element:ol",H(),{priority:"high"})})),t.conversion.for("editingDowncast").elementToElement({model:"paragraph",view:j(i),converterPriority:"high"}),t.conversion.for("dataDowncast").elementToElement({model:"paragraph",view:j(i,{dataPipeline:!0}),converterPriority:"high"}),t.conversion.for("downcast").add((t=>{t.on("attribute",U(i,this._downcastStrategies,e))})),this.listenTo(e.document,"change:data",function(t,e,i,n){return()=>{const n=t.document.differ.getChanges(),o=[],l=new Map,a=new Set;for(const t of n)if("insert"==t.type&&"$text"!=t.name)O(t.position,l),t.attributes.has("listItemId")?a.add(t.position.nodeAfter):O(t.position.getShiftedBy(t.length),l);else if("remove"==t.type&&t.attributes.has("listItemId"))O(t.position,l);else if("attribute"==t.type){const e=t.range.start.nodeAfter;i.includes(t.attributeKey)?(O(t.range.start,l),null===t.attributeNewValue?(O(t.range.start.getShiftedBy(1),l),r(e)&&o.push(e)):a.add(e)):d(e)&&r(e)&&o.push(e)}for(const t of l.values())o.push(...s(t,a));for(const t of new Set(o))e.reconvertItem(t)};function s(t,e){const n=[],s=new Set,a=[];for(const{node:c,previous:d}of l(t,"forward")){if(s.has(c))continue;const t=c.getAttribute("listIndent");d&&t<d.getAttribute("listIndent")&&(a.length=t+1),a[t]=Object.fromEntries(Array.from(c.getAttributes()).filter((([t])=>i.includes(t))));const l=m(c,{direction:"forward"});for(const t of l)s.add(t),(r(t,l)||o(t,a,e))&&n.push(t)}return n}function r(t,n){if(!t.is("element","paragraph"))return!1;const s=e.mapper.toViewElement(t);if(!s)return!1;const r=q(t,i,n);return!(!r||!s.is("element","p"))||!(r||!s.is("element","span"))}function o(t,i,s){if(s.has(t))return!1;const r=e.mapper.toViewElement(t);let o=i.length-1;for(let t=r.parent;!t.is("editableElement");t=t.parent){const e=z(t),s=P(t);if(!s&&!e)continue;const r="checkAttributes:"+(e?"item":"list");if(n.fire(r,{viewElement:t,modelAttributes:i[o]}))break;if(s&&(o--,o<0))return!1}return!0}}(e,t.editing,i,this)),this.on("checkAttributes:item",((t,{viewElement:e,modelAttributes:i})=>{e.id!=i.listItemId&&(t.return=!0,t.stop())})),this.on("checkAttributes:list",((t,{viewElement:e,modelAttributes:i})=>{e.name==D(i.listType)&&e.id==F(i.listType,i.listIndent)||(t.return=!0,t.stop())}))}_setupModelPostFixing(){const t=this.editor.model,e=this._getListAttributeNames();t.document.registerPostFixer((i=>function(t,e,i,n){const s=t.document.differ.getChanges(),r=new Map;let o=!1;for(const n of s)if("insert"==n.type&&"$text"!=n.name){const s=n.position.nodeAfter;if(!t.schema.checkAttribute(s,"listItemId"))for(const t of Array.from(s.getAttributeKeys()))i.includes(t)&&(e.removeAttribute(t,s),o=!0);O(n.position,r),n.attributes.has("listItemId")||O(n.position.getShiftedBy(n.length),r);for(const{item:e,previousPosition:i}of t.createRangeIn(s))d(e)&&O(i,r)}else"remove"==n.type?O(n.position,r):"attribute"==n.type&&i.includes(n.attributeKey)&&(O(n.range.start,r),null===n.attributeNewValue&&O(n.range.start.getShiftedBy(1),r));const l=new Set;for(const t of r.values())o=n.fire("postFixer",{listNodes:new a(t),listHead:t,writer:e,seenIds:l})||o;return o}(t,i,e,this))),this.on("postFixer",((t,{listNodes:e,writer:i})=>{t.return=function(t,e){let i=0,n=-1,s=null,r=!1;for(const{node:o}of t){const t=o.getAttribute("listIndent");if(t>i){let l;null===s?(s=t-i,l=i):(s>t&&(s=t),l=t-s),l>n+1&&(l=n+1),e.setAttribute("listIndent",l,o),r=!0,n=l}else s=null,i=t+1,n=t}return r}(e,i)||t.return}),{priority:"high"}),this.on("postFixer",((t,{listNodes:e,writer:i,seenIds:n})=>{t.return=function(t,e,i){const n=new Set;let s=!1;for(const{node:r}of t){if(n.has(r))continue;let t=r.getAttribute("listType"),o=r.getAttribute("listItemId");e.has(o)&&(o=c.next()),e.add(o);for(const e of m(r,{direction:"forward"}))n.add(e),e.getAttribute("listType")!=t&&(o=c.next(),t=e.getAttribute("listType")),e.getAttribute("listItemId")!=o&&(i.setAttribute("listItemId",o,e),s=!0)}return s}(e,n,i)||t.return}),{priority:"high"})}_setupClipboardIntegration(){const t=this.editor.model;this.listenTo(t,"insertContent",function(t){return(e,[i,n])=>{const s=i.is("documentFragment")?i.getChild(0):i;if(!d(s))return;let r;r=n?t.createSelection(n):t.document.selection;const o=r.getFirstPosition();let a=null;if(d(o.parent)?a=o.parent:d(o.nodeBefore)&&(a=o.nodeBefore),!a)return;const c=a.getAttribute("listIndent")-s.getAttribute("listIndent");c<=0||t.change((t=>{for(const{node:e}of l(s,"forward"))t.setAttribute("listIndent",e.getAttribute("listIndent")+c,e)}))}}(t),{priority:"high"}),this.listenTo(t,"getSelectedContent",((e,[i])=>{I(Array.from(i.getSelectedBlocks()))&&t.change((t=>A(Array.from(e.return.getChildren()),t)))}))}}function J(t,e){const i=t.document.selection;if(!i.isCollapsed)return!x(t);if("forward"===e)return!0;const n=i.getFirstPosition().parent,s=n.previousSibling;return!t.schema.isObject(s)&&(!!s.isEmpty||I([n,s]))}var Q=i(273);function X(t,e){const i=e.mapper,n=e.writer,s="numbered"==t.getAttribute("listType")?"ol":"ul",r=function(t){const e=t.createContainerElement("li");return e.getFillerOffset=ut,e}(n),o=n.createContainerElement(s,null);return n.insert(n.createPositionAt(o,0),r),i.bindElements(t,r),r}function tt(t,e,i,n){const s=e.parent,r=i.mapper,o=i.writer;let l=r.toViewPosition(n.createPositionBefore(t));const a=nt(t.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:t.getAttribute("listIndent")}),c=t.previousSibling;if(a&&a.getAttribute("listIndent")==t.getAttribute("listIndent")){const t=r.toViewElement(a);l=o.breakContainer(o.createPositionAfter(t))}else if(c&&"listItem"==c.name){l=r.toViewPosition(n.createPositionAt(c,"end"));const t=r.findMappedViewAncestor(l),e=rt(t);l=e?o.createPositionBefore(e):o.createPositionAt(t,"end")}else l=r.toViewPosition(n.createPositionBefore(t));if(l=it(l),o.insert(l,s),c&&"listItem"==c.name){const t=r.toViewElement(c),i=o.createRange(o.createPositionAt(t,0),l).getWalker({ignoreElementEnd:!0});for(const t of i)if(t.item.is("element","li")){const n=o.breakContainer(o.createPositionBefore(t.item)),s=t.item.parent,r=o.createPositionAt(e,"end");et(o,r.nodeBefore,r.nodeAfter),o.move(o.createRangeOn(s),r),i.position=n}}else{const i=s.nextSibling;if(i&&(i.is("element","ul")||i.is("element","ol"))){let n=null;for(const e of i.getChildren()){const i=r.toModelElement(e);if(!(i&&i.getAttribute("listIndent")>t.getAttribute("listIndent")))break;n=e}n&&(o.breakContainer(o.createPositionAfter(n)),o.move(o.createRangeOn(n.parent),o.createPositionAt(e,"end")))}}et(o,s,s.nextSibling),et(o,s.previousSibling,s)}function et(t,e,i){return!e||!i||"ul"!=e.name&&"ol"!=e.name||e.name!=i.name||e.getAttribute("class")!==i.getAttribute("class")?null:t.mergeContainers(t.createPositionAfter(e))}function it(t){return t.getLastMatchingPosition((t=>t.item.is("uiElement")))}function nt(t,e){const i=!!e.sameIndent,n=!!e.smallerIndent,s=e.listIndent;let r=t;for(;r&&"listItem"==r.name;){const t=r.getAttribute("listIndent");if(i&&s==t||n&&s>t)return r;r="forward"===e.direction?r.nextSibling:r.previousSibling}return null}function st(t,e,i,n){t.ui.componentFactory.add(e,(s=>{const r=t.commands.get(e),o=new Q.ButtonView(s);return o.set({label:i,icon:n,tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(r,"value","isEnabled"),o.on("execute",(()=>{t.execute(e),t.editing.view.focus()})),o}))}function rt(t){for(const e of t.getChildren())if("ul"==e.name||"ol"==e.name)return e;return null}function ot(t,e){const i=[],n=t.parent,s={ignoreElementEnd:!1,startPosition:t,shallow:!0,direction:e},r=n.getAttribute("listIndent"),o=[...new R.TreeWalker(s)].filter((t=>t.item.is("element"))).map((t=>t.item));for(const t of o){if(!t.is("element","listItem"))break;if(t.getAttribute("listIndent")<r)break;if(!(t.getAttribute("listIndent")>r)){if(t.getAttribute("listType")!==n.getAttribute("listType"))break;if(t.getAttribute("listStyle")!==n.getAttribute("listStyle"))break;if(t.getAttribute("listReversed")!==n.getAttribute("listReversed"))break;if(t.getAttribute("listStart")!==n.getAttribute("listStart"))break;"backward"===e?i.unshift(t):i.push(t)}}return i}function lt(t){let e=[...t.document.selection.getSelectedBlocks()].filter((t=>t.is("element","listItem"))).map((e=>{const i=t.change((t=>t.createPositionAt(e,0)));return[...ot(i,"backward"),...ot(i,"forward")]})).flat();return e=[...new Set(e)],e}const at=["disc","circle","square"],ct=["decimal","decimal-leading-zero","lower-roman","upper-roman","lower-latin","upper-latin"];function dt(t){return at.includes(t)?"bulleted":ct.includes(t)?"numbered":null}function ut(){const t=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||t?0:R.getFillerOffset.call(this)}const mt='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',pt='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>';class ht extends t.Plugin{static get pluginName(){return"ListUI"}init(){const t=this.editor.t;st(this.editor,"numberedList",t("Numbered List"),mt),st(this.editor,"bulletedList",t("Bulleted List"),pt)}}class ft extends t.Plugin{static get requires(){return[Y,ht]}static get pluginName(){return"DocumentList"}}class gt extends t.Command{refresh(){const t=this._getValue();this.value=t,this.isEnabled=null!=t}execute(t={}){const e=this.editor.model,i=e.document;let n=Array.from(i.selection.getSelectedBlocks()).filter((t=>d(t)&&"numbered"==t.getAttribute("listType")));n=b(n),e.change((e=>{for(const i of n)e.setAttribute("listStart",t.startIndex>=0?t.startIndex:1,i)}))}_getValue(){const t=this.editor.model.document,e=(0,r.first)(t.selection.getSelectedBlocks());return e&&d(e)&&"numbered"==e.getAttribute("listType")?e.getAttribute("listStart"):null}}const bt={},yt={},vt={},wt=[{listStyle:"disc",typeAttribute:"disc",listType:"bulleted"},{listStyle:"circle",typeAttribute:"circle",listType:"bulleted"},{listStyle:"square",typeAttribute:"square",listType:"bulleted"},{listStyle:"decimal",typeAttribute:"1",listType:"numbered"},{listStyle:"decimal-leading-zero",typeAttribute:null,listType:"numbered"},{listStyle:"lower-roman",typeAttribute:"i",listType:"numbered"},{listStyle:"upper-roman",typeAttribute:"I",listType:"numbered"},{listStyle:"lower-alpha",typeAttribute:"a",listType:"numbered"},{listStyle:"upper-alpha",typeAttribute:"A",listType:"numbered"},{listStyle:"lower-latin",typeAttribute:"a",listType:"numbered"},{listStyle:"upper-latin",typeAttribute:"A",listType:"numbered"}];for(const{listStyle:t,typeAttribute:e,listType:i}of wt)bt[t]=i,yt[t]=e,e&&(vt[e]=t);function At(){return wt.map((t=>t.listStyle))}function It(t){return bt[t]||null}function kt(t){return vt[t]||null}function xt(t){return yt[t]||null}class Tt extends t.Command{constructor(t,e,i){super(t),this._defaultType=e,this._supportedTypes=i}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,i=e.document;e.change((e=>{this._tryToConvertItemsToList(t);let n=Array.from(i.selection.getSelectedBlocks()).filter((t=>t.hasAttribute("listType")));if(n.length){n=b(n);for(const i of n)e.setAttribute("listStyle",t.type||this._defaultType,i)}}))}isStyleTypeSupported(t){return!this._supportedTypes||this._supportedTypes.includes(t)}_getValue(){const t=(0,r.first)(this.editor.model.document.selection.getSelectedBlocks());return d(t)?t.getAttribute("listStyle"):null}_checkEnabled(){const t=this.editor,e=t.commands.get("numberedList"),i=t.commands.get("bulletedList");return e.isEnabled||i.isEnabled}_tryToConvertItemsToList(t){if(!t.type)return;const e=It(t.type);if(!e)return;const i=this.editor,n=e+"List";i.commands.get(n).value||i.execute(n)}}class St extends t.Command{refresh(){const t=this._getValue();this.value=t,this.isEnabled=null!=t}execute(t={}){const e=this.editor.model,i=e.document;let n=Array.from(i.selection.getSelectedBlocks()).filter((t=>d(t)&&"numbered"==t.getAttribute("listType")));n=b(n),e.change((e=>{for(const i of n)e.setAttribute("listReversed",!!t.reversed,i)}))}_getValue(){const t=this.editor.model.document,e=(0,r.first)(t.selection.getSelectedBlocks());return d(e)&&"numbered"==e.getAttribute("listType")?e.getAttribute("listReversed"):null}}function _t(t){return(e,i,n)=>{const{writer:s,schema:r,consumable:o}=n;if(!1===o.test(i.viewItem,t.viewConsumables))return;i.modelRange||Object.assign(i,n.convertChildren(i.viewItem,i.modelCursor));let l=!1;for(const e of i.modelRange.getItems({shallow:!0}))r.checkAttribute(e,t.attributeName)&&t.appliesToListItem(e)&&(e.hasAttribute(t.attributeName)||(s.setAttribute(t.attributeName,t.getAttributeOnUpcast(i.viewItem),e),l=!0));l&&o.consume(i.viewItem,t.viewConsumables)}}class Ct extends t.Plugin{static get pluginName(){return"DocumentListPropertiesUtils"}getAllSupportedStyleTypes(){return At()}getListTypeFromListStyleType(t){return It(t)}getListStyleTypeFromTypeAttribute(t){return kt(t)}getTypeAttributeFromListStyleType(t){return xt(t)}}const Lt="default";class Vt extends t.Plugin{static get requires(){return[Y,Ct]}static get pluginName(){return"DocumentListPropertiesEditing"}constructor(t){super(t),t.config.define("list",{properties:{styles:!0,startIndex:!1,reversed:!1}})}init(){const t=this.editor,e=t.model,i=t.plugins.get(Y),n=function(t){const e=[];if(t.styles){const i="object"==typeof t.styles&&t.styles.useAttribute;e.push({attributeName:"listStyle",defaultValue:Lt,viewConsumables:{styles:"list-style-type"},addCommand(t){let e=At();i&&(e=e.filter((t=>!!xt(t)))),t.commands.add("listStyle",new Tt(t,Lt,e))},appliesToListItem:()=>!0,hasValidAttribute(t){if(!t.hasAttribute("listStyle"))return!1;const e=t.getAttribute("listStyle");return e==Lt||It(e)==t.getAttribute("listType")},setAttributeOnDowncast(t,e,n){if(e&&e!==Lt){if(!i)return void t.setStyle("list-style-type",e,n);{const i=xt(e);if(i)return void t.setAttribute("type",i,n)}}t.removeStyle("list-style-type",n),t.removeAttribute("type",n)},getAttributeOnUpcast(t){const e=t.getStyle("list-style-type");if(e)return e;const i=t.getAttribute("type");return i?kt(i):Lt}})}t.reversed&&e.push({attributeName:"listReversed",defaultValue:!1,viewConsumables:{attributes:"reversed"},addCommand(t){t.commands.add("listReversed",new St(t))},appliesToListItem:t=>"numbered"==t.getAttribute("listType"),hasValidAttribute(t){return this.appliesToListItem(t)==t.hasAttribute("listReversed")},setAttributeOnDowncast(t,e,i){e?t.setAttribute("reversed","reversed",i):t.removeAttribute("reversed",i)},getAttributeOnUpcast:t=>t.hasAttribute("reversed")});t.startIndex&&e.push({attributeName:"listStart",defaultValue:1,viewConsumables:{attributes:"start"},addCommand(t){t.commands.add("listStart",new gt(t))},appliesToListItem:t=>"numbered"==t.getAttribute("listType"),hasValidAttribute(t){return this.appliesToListItem(t)==t.hasAttribute("listStart")},setAttributeOnDowncast(t,e,i){0==e||e>1?t.setAttribute("start",e,i):t.removeAttribute("start",i)},getAttributeOnUpcast(t){const e=t.getAttribute("start");return e>=0?e:1}});return e}(t.config.get("list.properties"));for(const s of n)s.addCommand(t),e.schema.extend("$container",{allowAttributes:s.attributeName}),e.schema.extend("$block",{allowAttributes:s.attributeName}),e.schema.extend("$blockObject",{allowAttributes:s.attributeName}),i.registerDowncastStrategy({scope:"list",attributeName:s.attributeName,setAttributeOnDowncast(t,e,i){s.setAttributeOnDowncast(t,e,i)}});t.conversion.for("upcast").add((t=>{for(const e of n)t.on("element:ol",_t(e)),t.on("element:ul",_t(e))})),i.on("checkAttributes:list",((t,{viewElement:e,modelAttributes:i})=>{for(const s of n)s.getAttributeOnUpcast(e)!=i[s.attributeName]&&(t.return=!0,t.stop())})),this.listenTo(t.commands.get("indentList"),"afterExecute",((t,i)=>{e.change((t=>{for(const e of i)for(const i of n)i.appliesToListItem(e)&&t.setAttribute(i.attributeName,i.defaultValue,e)}))})),i.on("postFixer",((t,{listNodes:e,writer:i})=>{for(const{node:s}of e)for(const e of n)e.hasValidAttribute(s)||(e.appliesToListItem(s)?i.setAttribute(e.attributeName,e.defaultValue,s):i.removeAttribute(e.attributeName,s),t.return=!0)})),i.on("postFixer",((t,{listNodes:e,writer:i})=>{const s=[];for(const{node:r,previous:o}of e){if(!o)continue;const e=r.getAttribute("listIndent"),l=o.getAttribute("listIndent");let a=null;if(e>l?s[l]=o:e<l?(a=s[e],s.length=e):a=o,a&&a.getAttribute("listType")==r.getAttribute("listType"))for(const e of n){const{attributeName:n}=e;if(!e.appliesToListItem(r))continue;const s=a.getAttribute(n);r.getAttribute(n)!=s&&(i.setAttribute(n,s,r),t.return=!0)}}}))}}var Et=i(389),Pt={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Z()(Et.Z,Pt);Et.Z.locals;class zt extends Q.View{constructor(t,e){super(t);const i=this.bindTemplate;this.set("isCollapsed",!1),this.set("label",""),this.buttonView=this._createButtonView(),this.children=this.createCollection(),this.set("_collapsibleAriaLabelUid"),e&&this.children.addMany(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-collapsible",i.if("isCollapsed","ck-collapsible_collapsed")]},children:[this.buttonView,{tag:"div",attributes:{class:["ck","ck-collapsible__children"],role:"region",hidden:i.if("isCollapsed","hidden"),"aria-labelledby":i.to("_collapsibleAriaLabelUid")},children:this.children}]})}render(){super.render(),this._collapsibleAriaLabelUid=this.buttonView.labelView.element.id}_createButtonView(){const t=new Q.ButtonView(this.locale),e=t.bindTemplate;return t.set({withText:!0,icon:'<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>'}),t.extendTemplate({attributes:{"aria-expanded":e.to("isOn",(t=>String(t)))}}),t.bind("label").to(this),t.bind("isOn").to(this,"isCollapsed",(t=>!t)),t.on("execute",(()=>{this.isCollapsed=!this.isCollapsed})),t}}var Bt=i(543),Nt={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Z()(Bt.Z,Nt);Bt.Z.locals;class Mt extends Q.View{constructor(t,{enabledProperties:e,styleButtonViews:i,styleGridAriaLabel:n}){super(t);const s=["ck","ck-list-properties"];this.children=this.createCollection(),this.stylesView=null,this.additionalPropertiesCollapsibleView=null,this.startIndexFieldView=null,this.reversedSwitchButtonView=null,this.focusTracker=new r.FocusTracker,this.keystrokes=new r.KeystrokeHandler,this.focusables=new Q.ViewCollection,this.focusCycler=new Q.FocusCycler({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),e.styles?(this.stylesView=this._createStylesView(i,n),this.children.add(this.stylesView)):s.push("ck-list-properties_without-styles"),(e.startIndex||e.reversed)&&(this._addNumberedListPropertyViews(e,i),s.push("ck-list-properties_with-numbered-properties")),this.setTemplate({tag:"div",attributes:{class:s},children:this.children})}render(){if(super.render(),this.stylesView){this.focusables.add(this.stylesView),this.focusTracker.add(this.stylesView.element),(this.startIndexFieldView||this.reversedSwitchButtonView)&&(this.focusables.add(this.children.last.buttonView),this.focusTracker.add(this.children.last.buttonView.element));for(const t of this.stylesView.children)this.stylesView.focusTracker.add(t.element);(0,Q.addKeyboardHandlingForGrid)({keystrokeHandler:this.stylesView.keystrokes,focusTracker:this.stylesView.focusTracker,gridItems:this.stylesView.children,numberOfColumns:()=>r.global.window.getComputedStyle(this.stylesView.element).getPropertyValue("grid-template-columns").split(" ").length,uiLanguageDirection:this.locale&&this.locale.uiLanguageDirection})}if(this.startIndexFieldView){this.focusables.add(this.startIndexFieldView),this.focusTracker.add(this.startIndexFieldView.element),this.listenTo(this.startIndexFieldView.element,"selectstart",((t,e)=>{e.stopPropagation()}),{priority:"high"});const t=t=>t.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}this.reversedSwitchButtonView&&(this.focusables.add(this.reversedSwitchButtonView),this.focusTracker.add(this.reversedSwitchButtonView.element)),this.keystrokes.listenTo(this.element)}focus(){this.focusCycler.focusFirst()}focusLast(){this.focusCycler.focusLast()}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}_createStylesView(t,e){const i=new Q.View(this.locale);return i.children=i.createCollection(this.locale),i.children.addMany(t),i.setTemplate({tag:"div",attributes:{"aria-label":e,class:["ck","ck-list-styles-list"]},children:i.children}),i.children.delegate("execute").to(this),i.focus=function(){this.children.first.focus()},i.focusTracker=new r.FocusTracker,i.keystrokes=new r.KeystrokeHandler,i.render(),i.keystrokes.listenTo(i.element),i}_addNumberedListPropertyViews(t){const e=this.locale.t,i=[];t.startIndex&&(this.startIndexFieldView=this._createStartIndexField(),i.push(this.startIndexFieldView)),t.reversed&&(this.reversedSwitchButtonView=this._createReversedSwitchButton(),i.push(this.reversedSwitchButtonView)),t.styles?(this.additionalPropertiesCollapsibleView=new zt(this.locale,i),this.additionalPropertiesCollapsibleView.set({label:e("List properties"),isCollapsed:!0}),this.additionalPropertiesCollapsibleView.buttonView.bind("isEnabled").toMany(i,"isEnabled",((...t)=>t.some((t=>t)))),this.additionalPropertiesCollapsibleView.buttonView.on("change:isEnabled",((t,e,i)=>{i||(this.additionalPropertiesCollapsibleView.isCollapsed=!0)})),this.children.add(this.additionalPropertiesCollapsibleView)):this.children.addMany(i)}_createStartIndexField(){const t=this.locale.t,e=new Q.LabeledFieldView(this.locale,Q.createLabeledInputNumber);return e.set({label:t("Start at"),class:"ck-numbered-list-properties__start-index"}),e.fieldView.set({min:0,step:1,value:1,inputMode:"numeric"}),e.fieldView.on("input",(()=>{const i=e.fieldView.element,n=i.valueAsNumber;Number.isNaN(n)||(i.checkValidity()?this.fire("listStart",{startIndex:n}):e.errorText=t("Start index must be greater than 0."))})),e}_createReversedSwitchButton(){const t=this.locale.t,e=new Q.SwitchButtonView(this.locale);return e.set({withText:!0,label:t("Reversed order"),class:"ck-numbered-list-properties__reversed-order"}),e.delegate("execute").to(this,"listReversed"),e}}var Dt=i(657),Ft={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Z()(Dt.Z,Ft);Dt.Z.locals;class Ot extends t.Plugin{static get pluginName(){return"ListPropertiesUI"}init(){const t=this.editor,e=t.locale.t,i=t.config.get("list.properties");i.styles&&t.ui.componentFactory.add("bulletedList",Rt({editor:t,parentCommandName:"bulletedList",buttonLabel:e("Bulleted List"),buttonIcon:pt,styleGridAriaLabel:e("Bulleted list styles toolbar"),styleDefinitions:[{label:e("Toggle the disc list style"),tooltip:e("Disc"),type:"disc",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M11 27a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0-9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0-9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>'},{label:e("Toggle the circle list style"),tooltip:e("Circle"),type:"circle",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M11 27a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>'},{label:e("Toggle the square list style"),tooltip:e("Square"),type:"square",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M14 27v6H8v-6h6zm0-9v6H8v-6h6zm0-9v6H8V9h6z"/></svg>'}]})),(i.styles||i.startIndex||i.reversed)&&t.ui.componentFactory.add("numberedList",Rt({editor:t,parentCommandName:"numberedList",buttonLabel:e("Numbered List"),buttonIcon:mt,styleGridAriaLabel:e("Numbered list styles toolbar"),styleDefinitions:[{label:e("Toggle the decimal list style"),tooltip:e("Decimal"),type:"decimal",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M10.29 15V8.531H9.286c-.14.393-.4.736-.778 1.03-.378.295-.728.495-1.05.6v1.121a4.257 4.257 0 0 0 1.595-.936V15h1.235zm3.343 0v-1.235h-1.235V15h1.235zM11.3 24v-1.147H8.848c.064-.111.148-.226.252-.343.104-.117.351-.354.74-.712.39-.357.66-.631.81-.821.225-.288.39-.562.494-.824.104-.263.156-.539.156-.829 0-.51-.182-.936-.545-1.279-.363-.342-.863-.514-1.499-.514-.58 0-1.063.148-1.45.444-.387.296-.617.784-.69 1.463l1.23.124c.024-.36.112-.619.264-.774.153-.155.358-.233.616-.233.26 0 .465.074.613.222.148.148.222.36.222.635 0 .25-.085.501-.255.756-.126.185-.468.536-1.024 1.055-.692.641-1.155 1.156-1.389 1.544-.234.389-.375.8-.422 1.233H11.3zm2.333 0v-1.235h-1.235V24h1.235zM9.204 34.11c.615 0 1.129-.2 1.542-.598.413-.398.62-.88.62-1.446 0-.39-.11-.722-.332-.997a1.5 1.5 0 0 0-.886-.532c.619-.337.928-.788.928-1.353 0-.399-.151-.756-.453-1.073-.366-.386-.852-.58-1.459-.58a2.25 2.25 0 0 0-.96.2 1.617 1.617 0 0 0-.668.55c-.16.232-.28.544-.358.933l1.138.194c.032-.282.123-.495.272-.642.15-.146.33-.22.54-.22.215 0 .386.065.515.194s.193.302.193.518c0 .255-.087.46-.263.613-.176.154-.43.227-.765.218l-.136 1.006c.22-.061.409-.092.567-.092.24 0 .444.09.61.272.168.182.251.428.251.739 0 .328-.087.589-.261.782a.833.833 0 0 1-.644.29.841.841 0 0 1-.607-.242c-.167-.16-.27-.394-.307-.698l-1.196.145c.062.542.285.98.668 1.316.384.335.868.503 1.45.503zm4.43-.11v-1.235h-1.236V34h1.235z"/></svg>'},{label:e("Toggle the decimal with leading zero list style"),tooltip:e("Decimal with leading zero"),type:"decimal-leading-zero",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M5.714 15.11c.624 0 1.11-.22 1.46-.66.421-.533.632-1.408.632-2.627 0-1.222-.21-2.096-.629-2.624-.351-.445-.839-.668-1.463-.668-.624 0-1.11.22-1.459.66-.422.533-.633 1.406-.633 2.619 0 1.236.192 2.095.576 2.577.384.482.89.723 1.516.723zm0-1.024a.614.614 0 0 1-.398-.14c-.115-.094-.211-.283-.287-.565-.077-.283-.115-.802-.115-1.558s.043-1.294.128-1.613c.064-.246.155-.417.272-.512a.617.617 0 0 1 .4-.143.61.61 0 0 1 .398.143c.116.095.211.284.288.567.076.283.114.802.114 1.558s-.043 1.292-.128 1.608c-.064.246-.155.417-.272.512a.617.617 0 0 1-.4.143zm6.078.914V8.531H10.79c-.14.393-.4.736-.778 1.03-.378.295-.728.495-1.05.6v1.121a4.257 4.257 0 0 0 1.595-.936V15h1.235zm3.344 0v-1.235h-1.235V15h1.235zm-9.422 9.11c.624 0 1.11-.22 1.46-.66.421-.533.632-1.408.632-2.627 0-1.222-.21-2.096-.629-2.624-.351-.445-.839-.668-1.463-.668-.624 0-1.11.22-1.459.66-.422.533-.633 1.406-.633 2.619 0 1.236.192 2.095.576 2.577.384.482.89.723 1.516.723zm0-1.024a.614.614 0 0 1-.398-.14c-.115-.094-.211-.283-.287-.565-.077-.283-.115-.802-.115-1.558s.043-1.294.128-1.613c.064-.246.155-.417.272-.512a.617.617 0 0 1 .4-.143.61.61 0 0 1 .398.143c.116.095.211.284.288.567.076.283.114.802.114 1.558s-.043 1.292-.128 1.608c-.064.246-.155.417-.272.512a.617.617 0 0 1-.4.143zm7.088.914v-1.147H10.35c.065-.111.149-.226.253-.343.104-.117.35-.354.74-.712.39-.357.66-.631.81-.821.225-.288.39-.562.493-.824.104-.263.156-.539.156-.829 0-.51-.181-.936-.544-1.279-.364-.342-.863-.514-1.499-.514-.58 0-1.063.148-1.45.444-.387.296-.617.784-.69 1.463l1.23.124c.024-.36.112-.619.264-.774.152-.155.357-.233.615-.233.261 0 .465.074.613.222.148.148.222.36.222.635 0 .25-.085.501-.255.756-.126.185-.467.536-1.024 1.055-.691.641-1.154 1.156-1.388 1.544-.235.389-.375.8-.422 1.233h4.328zm2.334 0v-1.235h-1.235V24h1.235zM5.714 34.11c.624 0 1.11-.22 1.46-.66.421-.533.632-1.408.632-2.627 0-1.222-.21-2.096-.629-2.624-.351-.445-.839-.668-1.463-.668-.624 0-1.11.22-1.459.66-.422.533-.633 1.406-.633 2.619 0 1.236.192 2.095.576 2.577.384.482.89.723 1.516.723zm0-1.024a.614.614 0 0 1-.398-.14c-.115-.094-.211-.283-.287-.565-.077-.283-.115-.802-.115-1.558s.043-1.294.128-1.613c.064-.246.155-.417.272-.512a.617.617 0 0 1 .4-.143.61.61 0 0 1 .398.143c.116.095.211.284.288.567.076.283.114.802.114 1.558s-.043 1.292-.128 1.608c-.064.246-.155.417-.272.512a.617.617 0 0 1-.4.143zm4.992 1.024c.616 0 1.13-.2 1.543-.598.413-.398.62-.88.62-1.446 0-.39-.111-.722-.332-.997a1.5 1.5 0 0 0-.886-.532c.618-.337.927-.788.927-1.353 0-.399-.15-.756-.452-1.073-.366-.386-.853-.58-1.46-.58a2.25 2.25 0 0 0-.96.2 1.617 1.617 0 0 0-.667.55c-.16.232-.28.544-.359.933l1.139.194c.032-.282.123-.495.272-.642.15-.146.33-.22.54-.22.214 0 .386.065.515.194s.193.302.193.518c0 .255-.088.46-.264.613-.175.154-.43.227-.764.218l-.136 1.006c.22-.061.408-.092.566-.092.24 0 .444.09.611.272.167.182.25.428.25.739 0 .328-.086.589-.26.782a.833.833 0 0 1-.644.29.841.841 0 0 1-.607-.242c-.167-.16-.27-.394-.308-.698l-1.195.145c.062.542.284.98.668 1.316.384.335.867.503 1.45.503zm4.43-.11v-1.235h-1.235V34h1.235z"/></svg>'},{label:e("Toggle the lower–roman list style"),tooltip:e("Lower–roman"),type:"lower-roman",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M11.88 8.7V7.558h-1.234V8.7h1.234zm0 5.3V9.333h-1.234V14h1.234zm2.5 0v-1.235h-1.234V14h1.235zm-4.75 4.7v-1.142H8.395V18.7H9.63zm0 5.3v-4.667H8.395V24H9.63zm2.5-5.3v-1.142h-1.234V18.7h1.235zm0 5.3v-4.667h-1.234V24h1.235zm2.501 0v-1.235h-1.235V24h1.235zM7.38 28.7v-1.142H6.145V28.7H7.38zm0 5.3v-4.667H6.145V34H7.38zm2.5-5.3v-1.142H8.646V28.7H9.88zm0 5.3v-4.667H8.646V34H9.88zm2.5-5.3v-1.142h-1.234V28.7h1.235zm0 5.3v-4.667h-1.234V34h1.235zm2.501 0v-1.235h-1.235V34h1.235z"/></svg>'},{label:e("Toggle the upper–roman list style"),tooltip:e("Upper-roman"),type:"upper-roman",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M11.916 15V8.558h-1.301V15h1.3zm2.465 0v-1.235h-1.235V15h1.235zM9.665 25v-6.442h-1.3V25h1.3zm2.5 0v-6.442h-1.3V25h1.3zm2.466 0v-1.235h-1.235V25h1.235zm-7.216 9v-6.442h-1.3V34h1.3zm2.5 0v-6.442h-1.3V34h1.3zm2.501 0v-6.442h-1.3V34h1.3zm2.465 0v-1.235h-1.235V34h1.235z"/></svg>'},{label:e("Toggle the lower–latin list style"),tooltip:e("Lower-latin"),type:"lower-latin",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="M9.62 14.105c.272 0 .528-.05.768-.153s.466-.257.677-.462c.009.024.023.072.044.145.047.161.086.283.119.365h1.221a2.649 2.649 0 0 1-.222-.626c-.04-.195-.059-.498-.059-.908l.013-1.441c0-.536-.055-.905-.165-1.105-.11-.201-.3-.367-.569-.497-.27-.13-.68-.195-1.23-.195-.607 0-1.064.108-1.371.325-.308.217-.525.55-.65 1.002l1.12.202c.076-.217.176-.369.299-.455.123-.086.294-.13.514-.13.325 0 .546.05.663.152.118.101.176.27.176.508v.123c-.222.093-.622.194-1.2.303-.427.082-.755.178-.982.288-.227.11-.403.268-.53.474a1.327 1.327 0 0 0-.188.706c0 .398.138.728.415.988.277.261.656.391 1.136.391zm.368-.87a.675.675 0 0 1-.492-.189.606.606 0 0 1-.193-.448c0-.176.08-.32.241-.435.106-.07.33-.142.673-.215a7.19 7.19 0 0 0 .751-.19v.247c0 .296-.016.496-.048.602a.773.773 0 0 1-.295.409 1.07 1.07 0 0 1-.637.22zm4.645.765v-1.235h-1.235V14h1.235zM10.2 25.105c.542 0 1.003-.215 1.382-.646.38-.43.57-1.044.57-1.84 0-.771-.187-1.362-.559-1.774a1.82 1.82 0 0 0-1.41-.617c-.522 0-.973.216-1.354.65v-2.32H7.594V25h1.147v-.686a1.9 1.9 0 0 0 .67.592c.26.133.523.2.79.2zm-.299-.975c-.354 0-.638-.164-.852-.492-.153-.232-.229-.59-.229-1.073 0-.468.098-.818.295-1.048a.93.93 0 0 1 .738-.345c.302 0 .55.118.743.354.193.236.29.62.29 1.154 0 .5-.096.868-.288 1.1-.192.233-.424.35-.697.35zm4.478.87v-1.235h-1.234V25h1.234zm-4.017 9.105c.6 0 1.08-.142 1.437-.426.357-.284.599-.704.725-1.261l-1.213-.207c-.061.326-.167.555-.316.688a.832.832 0 0 1-.576.2.916.916 0 0 1-.75-.343c-.185-.228-.278-.62-.278-1.173 0-.498.091-.853.274-1.066.183-.212.429-.318.736-.318.232 0 .42.061.565.184.145.123.238.306.28.55l1.216-.22c-.146-.501-.387-.874-.722-1.119-.336-.244-.788-.366-1.356-.366-.695 0-1.245.214-1.653.643-.407.43-.61 1.03-.61 1.8 0 .762.202 1.358.608 1.788.406.431.95.646 1.633.646zM14.633 34v-1.235h-1.235V34h1.235z"/></svg>'},{label:e("Toggle the upper–latin list style"),tooltip:e("Upper-latin"),type:"upper-latin",icon:'<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path d="M35 29a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17zm0-9a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h17z" fill-opacity=".163"/><path d="m7.88 15 .532-1.463h2.575L11.549 15h1.415l-2.58-6.442H9.01L6.5 15h1.38zm2.69-2.549H8.811l.87-2.39.887 2.39zM14.88 15v-1.235h-1.234V15h1.234zM9.352 25c.83-.006 1.352-.02 1.569-.044.346-.038.636-.14.872-.305.236-.166.422-.387.558-.664.137-.277.205-.562.205-.855 0-.372-.106-.695-.317-.97-.21-.276-.512-.471-.905-.585a1.51 1.51 0 0 0 .661-.567 1.5 1.5 0 0 0 .244-.83c0-.28-.066-.53-.197-.754a1.654 1.654 0 0 0-.495-.539 1.676 1.676 0 0 0-.672-.266c-.25-.042-.63-.063-1.14-.063H7.158V25h2.193zm.142-3.88H8.46v-1.49h.747c.612 0 .983.007 1.112.022.217.026.38.102.49.226.11.125.165.287.165.486a.68.68 0 0 1-.192.503.86.86 0 0 1-.525.23 11.47 11.47 0 0 1-.944.023h.18zm.17 2.795H8.46v-1.723h1.05c.592 0 .977.03 1.154.092.177.062.313.16.406.295a.84.84 0 0 1 .14.492c0 .228-.06.41-.181.547a.806.806 0 0 1-.473.257c-.126.026-.423.04-.892.04zM14.88 25v-1.235h-1.234V25h1.234zm-5.018 9.11c.691 0 1.262-.17 1.711-.512.45-.341.772-.864.965-1.567l-1.261-.4c-.109.472-.287.818-.536 1.037-.25.22-.547.33-.892.33-.47 0-.85-.173-1.143-.519-.293-.345-.44-.925-.44-1.74 0-.767.15-1.322.447-1.665.297-.343.684-.514 1.162-.514.346 0 .64.096.881.29.242.193.4.457.477.79l1.288-.307c-.147-.516-.367-.911-.66-1.187-.492-.465-1.132-.698-1.92-.698-.902 0-1.63.296-2.184.89-.554.593-.83 1.426-.83 2.498 0 1.014.275 1.813.825 2.397.551.585 1.254.877 2.11.877zM14.88 34v-1.235h-1.234V34h1.234z"/></svg>'}]}))}}function Rt({editor:t,parentCommandName:e,buttonLabel:i,buttonIcon:n,styleGridAriaLabel:s,styleDefinitions:r}){const o=t.commands.get(e);return l=>{const a=(0,Q.createDropdown)(l,Q.SplitButtonView),c=a.buttonView;a.bind("isEnabled").to(o),a.class="ck-list-styles-dropdown",c.on("execute",(()=>{t.execute(e),t.editing.view.focus()})),c.set({label:i,icon:n,tooltip:!0,isToggleable:!0}),c.bind("isOn").to(o,"value",(t=>!!t));const d=function({editor:t,dropdownView:e,parentCommandName:i,styleDefinitions:n,styleGridAriaLabel:s}){const r=t.locale,o=t.config.get("list.properties");let l;"numberedList"!=i&&(o.startIndex=!1,o.reversed=!1);if(o.styles){const e=t.commands.get("listStyle"),s=function({editor:t,listStyleCommand:e,parentCommandName:i}){const n=t.locale,s=t.commands.get(i);return({label:i,type:r,icon:o,tooltip:l})=>{const a=new Q.ButtonView(n);return a.set({label:i,icon:o,tooltip:l}),e.on("change:value",(()=>{a.isOn=e.value===r})),a.on("execute",(()=>{s.value?e.value!==r?t.execute("listStyle",{type:r}):t.execute("listStyle",{type:e._defaultType}):t.model.change((()=>{t.execute("listStyle",{type:r})}))})),a}}({editor:t,parentCommandName:i,listStyleCommand:e}),r="function"==typeof e.isStyleTypeSupported?t=>e.isStyleTypeSupported(t.type):()=>!0;l=n.filter(r).map(s)}const a=new Mt(r,{styleGridAriaLabel:s,enabledProperties:o,styleButtonViews:l});o.styles&&(0,Q.focusChildOnDropdownOpen)(e,(()=>a.stylesView.children.find((t=>t.isOn))));if(o.startIndex){const e=t.commands.get("listStart");a.startIndexFieldView.bind("isEnabled").to(e),a.startIndexFieldView.fieldView.bind("value").to(e),a.on("listStart",((e,i)=>t.execute("listStart",i)))}if(o.reversed){const e=t.commands.get("listReversed");a.reversedSwitchButtonView.bind("isEnabled").to(e),a.reversedSwitchButtonView.bind("isOn").to(e,"value"),a.on("listReversed",(()=>{const i=e.value;t.execute("listReversed",{reversed:!i})}))}return a.delegate("execute").to(e),a}({editor:t,dropdownView:a,parentCommandName:e,styleGridAriaLabel:s,styleDefinitions:r});return a.panelView.children.add(d),a.on("execute",(()=>{t.editing.view.focus()})),a}}class Ht extends t.Plugin{static get requires(){return[Vt,Ot]}static get pluginName(){return"DocumentListProperties"}}class Ut extends t.Command{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,i=e.document,n=Array.from(i.selection.getSelectedBlocks()).filter((t=>qt(t,e.schema))),s=void 0!==t.forceValue?!t.forceValue:this.value;e.change((t=>{if(s){let e=n[n.length-1].nextSibling,i=Number.POSITIVE_INFINITY,s=[];for(;e&&"listItem"==e.name&&0!==e.getAttribute("listIndent");){const t=e.getAttribute("listIndent");t<i&&(i=t);const n=t-i;s.push({element:e,listIndent:n}),e=e.nextSibling}s=s.reverse();for(const e of s)t.setAttribute("listIndent",e.listIndent,e.element)}if(!s){let t=Number.POSITIVE_INFINITY;for(const e of n)e.is("element","listItem")&&e.getAttribute("listIndent")<t&&(t=e.getAttribute("listIndent"));t=0===t?1:t,jt(n,!0,t),jt(n,!1,t)}for(const e of n.reverse())s&&"listItem"==e.name?t.rename(e,"paragraph"):s||"listItem"==e.name?s||"listItem"!=e.name||e.getAttribute("listType")==this.type||t.setAttribute("listType",this.type,e):(t.setAttributes({listType:this.type,listIndent:0},e),t.rename(e,"listItem"));this.fire("_executeCleanup",n)}))}_getValue(){const t=(0,r.first)(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("element","listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,i=(0,r.first)(t.getSelectedBlocks());return!!i&&qt(i,e)}}function jt(t,e,i){const n=e?t[0]:t[t.length-1];if(n.is("element","listItem")){let s=n[e?"previousSibling":"nextSibling"],r=n.getAttribute("listIndent");for(;s&&s.is("element","listItem")&&s.getAttribute("listIndent")>=i;)r>s.getAttribute("listIndent")&&(r=s.getAttribute("listIndent")),s.getAttribute("listIndent")==r&&t[e?"unshift":"push"](s),s=s[e?"previousSibling":"nextSibling"]}}function qt(t,e){return e.checkChild(t.parent,"listItem")&&!e.isObject(t)}class Kt extends t.Command{constructor(t,e){super(t),this._indentBy="forward"==e?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let i=Array.from(e.selection.getSelectedBlocks());t.change((t=>{const e=i[i.length-1];let n=e.nextSibling;for(;n&&"listItem"==n.name&&n.getAttribute("listIndent")>e.getAttribute("listIndent");)i.push(n),n=n.nextSibling;this._indentBy<0&&(i=i.reverse());for(const e of i){const i=e.getAttribute("listIndent")+this._indentBy;i<0?t.rename(e,"paragraph"):t.setAttribute("listIndent",i,e)}this.fire("_executeCleanup",i)}))}_checkEnabled(){const t=(0,r.first)(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("element","listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),i=t.getAttribute("listType");let n=t.previousSibling;for(;n&&n.is("element","listItem")&&n.getAttribute("listIndent")>=e;){if(n.getAttribute("listIndent")==e)return n.getAttribute("listType")==i;n=n.previousSibling}return!1}return!0}}class Zt extends t.Plugin{static get pluginName(){return"ListUtils"}getListTypeFromListStyleType(t){return dt(t)}getSelectedListItems(t){return lt(t)}getSiblingNodes(t,e){return ot(t,e)}}function $t(t){return(e,i,n)=>{const s=n.consumable;if(!s.test(i.item,"insert")||!s.test(i.item,"attribute:listType")||!s.test(i.item,"attribute:listIndent"))return;s.consume(i.item,"insert"),s.consume(i.item,"attribute:listType"),s.consume(i.item,"attribute:listIndent");const r=i.item;tt(r,X(r,n),n,t)}}function Wt(t,e,i){if(!i.consumable.test(e.item,t.name))return;const n=i.mapper.toViewElement(e.item),s=i.writer;s.breakContainer(s.createPositionBefore(n)),s.breakContainer(s.createPositionAfter(n));const r=n.parent,o="numbered"==e.attributeNewValue?"ol":"ul";s.rename(o,r)}function Gt(t,e,i){i.consumable.consume(e.item,t.name);const n=i.mapper.toViewElement(e.item).parent,s=i.writer;et(s,n,n.nextSibling),et(s,n.previousSibling,n)}function Yt(t,e,i){if(i.consumable.test(e.item,t.name)&&"listItem"!=e.item.name){let t=i.mapper.toViewPosition(e.range.start);const n=i.writer,s=[];for(;("ul"==t.parent.name||"ol"==t.parent.name)&&(t=n.breakContainer(t),"li"==t.parent.name);){const e=t,i=n.createPositionAt(t.parent,"end");if(!e.isEqual(i)){const t=n.remove(n.createRange(e,i));s.push(t)}t=n.createPositionAfter(t.parent)}if(s.length>0){for(let e=0;e<s.length;e++){const i=t.nodeBefore;if(t=n.insert(t,s[e]).end,e>0){const e=et(n,i,i.nextSibling);e&&e.parent==i&&t.offset--}}et(n,t.nodeBefore,t.nodeAfter)}}}function Jt(t,e,i){const n=i.mapper.toViewPosition(e.position),s=n.nodeBefore,r=n.nodeAfter;et(i.writer,s,r)}function Qt(t,e,i){if(i.consumable.consume(e.viewItem,{name:!0})){const t=i.writer,n=t.createElement("listItem"),s=function(t){let e=0,i=t.parent;for(;i;){if(i.is("element","li"))e++;else{const t=i.previousSibling;t&&t.is("element","li")&&e++}i=i.parent}return e}(e.viewItem);t.setAttribute("listIndent",s,n);const r=e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted";if(t.setAttribute("listType",r,n),!i.safeInsert(n,e.modelCursor))return;const o=function(t,e,i){const{writer:n,schema:s}=i;let r=n.createPositionAfter(t);for(const o of e)if("ul"==o.name||"ol"==o.name)r=i.convertItem(o,r).modelCursor;else{const e=i.convertItem(o,n.createPositionAt(t,"end")),l=e.modelRange.start.nodeAfter;l&&l.is("element")&&!s.checkChild(t,l.name)&&(t=e.modelCursor.parent.is("element","listItem")?e.modelCursor.parent:ne(e.modelCursor),r=n.createPositionAfter(t))}return r}(n,e.viewItem.getChildren(),i);e.modelRange=t.createRange(e.modelCursor,o),i.updateConversionResult(n,e)}}function Xt(t,e,i){if(i.consumable.test(e.viewItem,{name:!0})){const t=Array.from(e.viewItem.getChildren());for(const e of t){!(e.is("element","li")||re(e))&&e._remove()}}}function te(t,e,i){if(i.consumable.test(e.viewItem,{name:!0})){if(0===e.viewItem.childCount)return;const t=[...e.viewItem.getChildren()];let i=!1;for(const e of t)i&&!re(e)&&e._remove(),re(e)&&(i=!0)}}function ee(t){return(e,i)=>{if(i.isPhantom)return;const n=i.modelPosition.nodeBefore;if(n&&n.is("element","listItem")){const e=i.mapper.toViewElement(n),s=e.getAncestors().find(re),r=t.createPositionAt(e,0).getWalker();for(const t of r){if("elementStart"==t.type&&t.item.is("element","li")){i.viewPosition=t.previousPosition;break}if("elementEnd"==t.type&&t.item==s){i.viewPosition=t.nextPosition;break}}}}}function ie(t,[e,i,n]){let s,r=e.is("documentFragment")?e.getChild(0):e;if(s=i?this.createSelection(i,n):this.document.selection,r&&r.is("element","listItem")){const t=s.getFirstPosition();let e=null;if(t.parent.is("element","listItem")?e=t.parent:t.nodeBefore&&t.nodeBefore.is("element","listItem")&&(e=t.nodeBefore),e){const t=e.getAttribute("listIndent");if(t>0)for(;r&&r.is("element","listItem");)r._setAttribute("listIndent",r.getAttribute("listIndent")+t),r=r.nextSibling}}}function ne(t){const e=new R.TreeWalker({startPosition:t});let i;do{i=e.next()}while(!i.value.item.is("element","listItem"));return i.value.item}function se(t,e,i,n,s,r){const o=nt(e.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:t,foo:"b"}),l=s.mapper,a=s.writer,c=o?o.getAttribute("listIndent"):null;let d;if(o)if(c==t){const t=l.toViewElement(o).parent;d=a.createPositionAfter(t)}else{const t=r.createPositionAt(o,"end");d=l.toViewPosition(t)}else d=i;d=it(d);for(const t of[...n.getChildren()])re(t)&&(d=a.move(a.createRangeOn(t),d).end,et(a,t,t.nextSibling),et(a,t.previousSibling,t))}function re(t){return t.is("element","ol")||t.is("element","ul")}class oe extends t.Plugin{static get pluginName(){return"ListEditing"}static get requires(){return[e.Enter,s.Delete,Zt]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,i=t.editing;var n;t.model.document.registerPostFixer((e=>function(t,e){const i=t.document.differ.getChanges(),n=new Map;let s=!1;for(const n of i)if("insert"==n.type&&"listItem"==n.name)r(n.position);else if("insert"==n.type&&"listItem"!=n.name){if("$text"!=n.name){const i=n.position.nodeAfter;i.hasAttribute("listIndent")&&(e.removeAttribute("listIndent",i),s=!0),i.hasAttribute("listType")&&(e.removeAttribute("listType",i),s=!0),i.hasAttribute("listStyle")&&(e.removeAttribute("listStyle",i),s=!0),i.hasAttribute("listReversed")&&(e.removeAttribute("listReversed",i),s=!0),i.hasAttribute("listStart")&&(e.removeAttribute("listStart",i),s=!0);for(const e of Array.from(t.createRangeIn(i)).filter((t=>t.item.is("element","listItem"))))r(e.previousPosition)}r(n.position.getShiftedBy(n.length))}else"remove"==n.type&&"listItem"==n.name?r(n.position):("attribute"==n.type&&"listIndent"==n.attributeKey||"attribute"==n.type&&"listType"==n.attributeKey)&&r(n.range.start);for(const t of n.values())o(t),l(t);return s;function r(t){const e=t.nodeBefore;if(e&&e.is("element","listItem")){let t=e;if(n.has(t))return;for(let e=t.previousSibling;e&&e.is("element","listItem");e=t.previousSibling)if(t=e,n.has(t))return;n.set(e,t)}else{const e=t.nodeAfter;e&&e.is("element","listItem")&&n.set(e,e)}}function o(t){let i=0,n=null;for(;t&&t.is("element","listItem");){const r=t.getAttribute("listIndent");if(r>i){let o;null===n?(n=r-i,o=i):(n>r&&(n=r),o=r-n),e.setAttribute("listIndent",o,t),s=!0}else n=null,i=t.getAttribute("listIndent")+1;t=t.nextSibling}}function l(t){let i=[],n=null;for(;t&&t.is("element","listItem");){const r=t.getAttribute("listIndent");if(n&&n.getAttribute("listIndent")>r&&(i=i.slice(0,r+1)),0!=r)if(i[r]){const n=i[r];t.getAttribute("listType")!=n&&(e.setAttribute("listType",n,t),s=!0)}else i[r]=t.getAttribute("listType");n=t,t=t.nextSibling}}}(t.model,e))),i.mapper.registerViewToModelLength("li",le),e.mapper.registerViewToModelLength("li",le),i.mapper.on("modelToViewPosition",ee(i.view)),i.mapper.on("viewToModelPosition",(n=t.model,(t,e)=>{const i=e.viewPosition,s=i.parent,r=e.mapper;if("ul"==s.name||"ol"==s.name){if(i.isAtEnd){const t=r.toModelElement(i.nodeBefore),s=r.getModelLength(i.nodeBefore);e.modelPosition=n.createPositionBefore(t).getShiftedBy(s)}else{const t=r.toModelElement(i.nodeAfter);e.modelPosition=n.createPositionBefore(t)}t.stop()}else if("li"==s.name&&i.nodeBefore&&("ul"==i.nodeBefore.name||"ol"==i.nodeBefore.name)){const o=r.toModelElement(s);let l=1,a=i.nodeBefore;for(;a&&re(a);)l+=r.getModelLength(a),a=a.previousSibling;e.modelPosition=n.createPositionBefore(o).getShiftedBy(l),t.stop()}})),e.mapper.on("modelToViewPosition",ee(i.view)),t.conversion.for("editingDowncast").add((e=>{e.on("insert",Yt,{priority:"high"}),e.on("insert:listItem",$t(t.model)),e.on("attribute:listType:listItem",Wt,{priority:"high"}),e.on("attribute:listType:listItem",Gt,{priority:"low"}),e.on("attribute:listIndent:listItem",function(t){return(e,i,n)=>{if(!n.consumable.consume(i.item,"attribute:listIndent"))return;const s=n.mapper.toViewElement(i.item),r=n.writer;r.breakContainer(r.createPositionBefore(s)),r.breakContainer(r.createPositionAfter(s));const o=s.parent,l=o.previousSibling,a=r.createRangeOn(o);r.remove(a),l&&l.nextSibling&&et(r,l,l.nextSibling),se(i.attributeOldValue+1,i.range.start,a.start,s,n,t),tt(i.item,s,n,t);for(const t of i.item.getChildren())n.consumable.consume(t,"insert")}}(t.model)),e.on("remove:listItem",function(t){return(e,i,n)=>{const s=n.mapper.toViewPosition(i.position).getLastMatchingPosition((t=>!t.item.is("element","li"))).nodeAfter,r=n.writer;r.breakContainer(r.createPositionBefore(s)),r.breakContainer(r.createPositionAfter(s));const o=s.parent,l=o.previousSibling,a=r.createRangeOn(o),c=r.remove(a);l&&l.nextSibling&&et(r,l,l.nextSibling),se(n.mapper.toModelElement(s).getAttribute("listIndent")+1,i.position,a.start,s,n,t);for(const t of r.createRangeIn(c).getItems())n.mapper.unbindViewElement(t);e.stop()}}(t.model)),e.on("remove",Jt,{priority:"low"})})),t.conversion.for("dataDowncast").add((e=>{e.on("insert",Yt,{priority:"high"}),e.on("insert:listItem",$t(t.model))})),t.conversion.for("upcast").add((t=>{t.on("element:ul",Xt,{priority:"high"}),t.on("element:ol",Xt,{priority:"high"}),t.on("element:li",te,{priority:"high"}),t.on("element:li",Qt)})),t.model.on("insertContent",ie,{priority:"high"}),t.commands.add("numberedList",new Ut(t,"numbered")),t.commands.add("bulletedList",new Ut(t,"bulleted")),t.commands.add("indentList",new Kt(t,"forward")),t.commands.add("outdentList",new Kt(t,"backward"));const s=i.view.document;this.listenTo(s,"enter",((t,e)=>{const i=this.editor.model.document,n=i.selection.getLastPosition().parent;i.selection.isCollapsed&&"listItem"==n.name&&n.isEmpty&&(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),{context:"li"}),this.listenTo(s,"delete",((t,e)=>{if("backward"!==e.direction)return;const i=this.editor.model.document.selection;if(!i.isCollapsed)return;const n=i.getFirstPosition();if(!n.isAtStart)return;const s=n.parent;if("listItem"!==s.name)return;s.previousSibling&&"listItem"===s.previousSibling.name||(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),{context:"li"}),this.listenTo(t.editing.view.document,"tab",((e,i)=>{const n=i.shiftKey?"outdentList":"indentList";this.editor.commands.get(n).isEnabled&&(t.execute(n),i.stopPropagation(),i.preventDefault(),e.stop())}),{context:"li"})}afterInit(){const t=this.editor.commands,e=t.get("indent"),i=t.get("outdent");e&&e.registerChildCommand(t.get("indentList")),i&&i.registerChildCommand(t.get("outdentList"))}}function le(t){let e=1;for(const i of t.getChildren())if("ul"==i.name||"ol"==i.name)for(const t of i.getChildren())e+=le(t);return e}class ae extends t.Plugin{static get requires(){return[oe,ht]}static get pluginName(){return"List"}}class ce extends t.Command{constructor(t,e){super(t),this._defaultType=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){this._tryToConvertItemsToList(t);const e=this.editor.model,i=lt(e);i.length&&e.change((e=>{for(const n of i)e.setAttribute("listStyle",t.type||this._defaultType,n)}))}_getValue(){const t=this.editor.model.document.selection.getFirstPosition().parent;return t&&t.is("element","listItem")?t.getAttribute("listStyle"):null}_checkEnabled(){const t=this.editor,e=t.commands.get("numberedList"),i=t.commands.get("bulletedList");return e.isEnabled||i.isEnabled}_tryToConvertItemsToList(t){if(!t.type)return;const e=dt(t.type);if(!e)return;const i=this.editor,n=e+"List";i.commands.get(n).value||i.execute(n)}}class de extends t.Command{refresh(){const t=this._getValue();this.value=t,this.isEnabled=null!=t}execute(t={}){const e=this.editor.model,i=lt(e).filter((t=>"numbered"==t.getAttribute("listType")));e.change((e=>{for(const n of i)e.setAttribute("listReversed",!!t.reversed,n)}))}_getValue(){const t=this.editor.model.document.selection.getFirstPosition().parent;return t&&t.is("element","listItem")&&"numbered"==t.getAttribute("listType")?t.getAttribute("listReversed"):null}}class ue extends t.Command{refresh(){const t=this._getValue();this.value=t,this.isEnabled=null!=t}execute(t={}){const e=this.editor.model,i=lt(e).filter((t=>"numbered"==t.getAttribute("listType")));e.change((e=>{for(const n of i)e.setAttribute("listStart",t.startIndex>=0?t.startIndex:1,n)}))}_getValue(){const t=this.editor.model.document.selection.getFirstPosition().parent;return t&&t.is("element","listItem")&&"numbered"==t.getAttribute("listType")?t.getAttribute("listStart"):null}}const me="default";class pe extends t.Plugin{static get requires(){return[oe]}static get pluginName(){return"ListPropertiesEditing"}constructor(t){super(t),t.config.define("list",{properties:{styles:!0,startIndex:!1,reversed:!1}})}init(){const t=this.editor,e=t.model,i=function(t){const e=[];t.styles&&e.push({attributeName:"listStyle",defaultValue:me,addCommand(t){t.commands.add("listStyle",new ce(t,me))},appliesToListItem:()=>!0,setAttributeOnDowncast(t,e,i){e&&e!==me?t.setStyle("list-style-type",e,i):t.removeStyle("list-style-type",i)},getAttributeOnUpcast:t=>t.getStyle("list-style-type")||me});t.reversed&&e.push({attributeName:"listReversed",defaultValue:!1,addCommand(t){t.commands.add("listReversed",new de(t))},appliesToListItem:t=>"numbered"==t.getAttribute("listType"),setAttributeOnDowncast(t,e,i){e?t.setAttribute("reversed","reversed",i):t.removeAttribute("reversed",i)},getAttributeOnUpcast:t=>t.hasAttribute("reversed")});t.startIndex&&e.push({attributeName:"listStart",defaultValue:1,addCommand(t){t.commands.add("listStart",new ue(t))},appliesToListItem:t=>"numbered"==t.getAttribute("listType"),setAttributeOnDowncast(t,e,i){0==e||e>1?t.setAttribute("start",e,i):t.removeAttribute("start",i)},getAttributeOnUpcast(t){const e=t.getAttribute("start");return e>=0?e:1}});return e}(t.config.get("list.properties"));e.schema.extend("listItem",{allowAttributes:i.map((t=>t.attributeName))});for(const e of i)e.addCommand(t);var n;this.listenTo(t.commands.get("indentList"),"_executeCleanup",function(t,e){return(i,n)=>{const s=n[0],r=s.getAttribute("listIndent"),o=n.filter((t=>t.getAttribute("listIndent")===r));let l=null;s.previousSibling.getAttribute("listIndent")+1!==r&&(l=nt(s.previousSibling,{sameIndent:!0,direction:"backward",listIndent:r})),t.model.change((t=>{for(const i of o)for(const n of e)if(n.appliesToListItem(i)){const e=null==l?n.defaultValue:l.getAttribute(n.attributeName);t.setAttribute(n.attributeName,e,i)}}))}}(t,i)),this.listenTo(t.commands.get("outdentList"),"_executeCleanup",function(t,e){return(i,n)=>{if(!(n=n.reverse().filter((t=>t.is("element","listItem")))).length)return;const s=n[0].getAttribute("listIndent"),r=n[0].getAttribute("listType");let o=n[0].previousSibling;if(o.is("element","listItem"))for(;o.getAttribute("listIndent")!==s;)o=o.previousSibling;else o=null;o||(o=n[n.length-1].nextSibling),o&&o.is("element","listItem")&&o.getAttribute("listType")===r&&t.model.change((t=>{const i=n.filter((t=>t.getAttribute("listIndent")===s));for(const n of i)for(const i of e)if(i.appliesToListItem(n)){const e=i.attributeName,s=o.getAttribute(e);t.setAttribute(e,s,n)}}))}}(t,i)),this.listenTo(t.commands.get("bulletedList"),"_executeCleanup",ge(t)),this.listenTo(t.commands.get("numberedList"),"_executeCleanup",ge(t)),e.document.registerPostFixer(function(t,e){return i=>{let n=!1;const s=be(t.model.document.differ.getChanges()).filter((t=>"todo"!==t.getAttribute("listType")));if(!s.length)return n;let r=s[s.length-1].nextSibling;if((!r||!r.is("element","listItem"))&&(r=s[0].previousSibling,r)){const t=s[0].getAttribute("listIndent");for(;r.is("element","listItem")&&r.getAttribute("listIndent")!==t&&(r=r.previousSibling,r););}for(const t of e){const e=t.attributeName;for(const o of s)if(t.appliesToListItem(o))if(o.hasAttribute(e)){const s=o.previousSibling;fe(s,o,t.attributeName)&&(i.setAttribute(e,s.getAttribute(e),o),n=!0)}else he(r,o,t)?i.setAttribute(e,r.getAttribute(e),o):i.setAttribute(e,t.defaultValue,o),n=!0;else i.removeAttribute(e,o)}return n}}(t,i)),t.conversion.for("upcast").add((n=i,t=>{t.on("element:li",((t,e,i)=>{const s=e.viewItem.parent,r=e.modelRange.start.nodeAfter||e.modelRange.end.nodeBefore;for(const t of n)if(t.appliesToListItem(r)){const e=t.getAttributeOnUpcast(s);i.writer.setAttribute(t.attributeName,e,r)}}),{priority:"low"})})),t.conversion.for("downcast").add(function(t){return i=>{for(const n of t)i.on(`attribute:${n.attributeName}:listItem`,((t,i,s)=>{const r=s.writer,o=i.item,l=nt(o.previousSibling,{sameIndent:!0,listIndent:o.getAttribute("listIndent"),direction:"backward"}),a=s.mapper.toViewElement(o);e(o,l)||r.breakContainer(r.createPositionBefore(a)),n.setAttributeOnDowncast(r,i.attributeNewValue,a.parent)}),{priority:"low"})};function e(t,e){return e&&t.getAttribute("listType")===e.getAttribute("listType")&&t.getAttribute("listIndent")===e.getAttribute("listIndent")&&t.getAttribute("listStyle")===e.getAttribute("listStyle")&&t.getAttribute("listReversed")===e.getAttribute("listReversed")&&t.getAttribute("listStart")===e.getAttribute("listStart")}}(i)),this._mergeListAttributesWhileMergingLists(i)}afterInit(){const t=this.editor;t.commands.get("todoList")&&t.model.document.registerPostFixer(function(t){return e=>{const i=be(t.model.document.differ.getChanges()).filter((t=>"todo"===t.getAttribute("listType")&&(t.hasAttribute("listStyle")||t.hasAttribute("listReversed")||t.hasAttribute("listStart"))));if(!i.length)return!1;for(const t of i)e.removeAttribute("listStyle",t),e.removeAttribute("listReversed",t),e.removeAttribute("listStart",t);return!0}}(t))}_mergeListAttributesWhileMergingLists(t){const e=this.editor.model;let i;this.listenTo(e,"deleteContent",((t,[e])=>{const n=e.getFirstPosition(),s=e.getLastPosition();if(n.parent===s.parent)return;if(!n.parent.is("element","listItem"))return;const r=s.parent.nextSibling;if(!r||!r.is("element","listItem"))return;const o=nt(n.parent,{sameIndent:!0,listIndent:r.getAttribute("listIndent")});o&&o.getAttribute("listType")===r.getAttribute("listType")&&(i=o)}),{priority:"high"}),this.listenTo(e,"deleteContent",(()=>{i&&(e.change((e=>{const n=nt(i.nextSibling,{sameIndent:!0,listIndent:i.getAttribute("listIndent"),direction:"forward"});if(!n)return void(i=null);const s=[n,...ot(e.createPositionAt(n,0),"forward")];for(const n of s)for(const s of t)if(s.appliesToListItem(n)){const t=s.attributeName,r=i.getAttribute(t);e.setAttribute(t,r,n)}})),i=null)}),{priority:"low"})}}function he(t,e,i){if(!t)return!1;const n=t.getAttribute(i.attributeName);return!!n&&(n!=i.defaultValue&&t.getAttribute("listType")===e.getAttribute("listType"))}function fe(t,e,i){if(!t||!t.is("element","listItem"))return!1;if(e.getAttribute("listType")!==t.getAttribute("listType"))return!1;const n=t.getAttribute("listIndent");if(n<1||n!==e.getAttribute("listIndent"))return!1;const s=t.getAttribute(i);return!(!s||s===e.getAttribute(i))}function ge(t){return(e,i)=>{i=i.filter((t=>t.is("element","listItem"))),t.model.change((t=>{for(const e of i)t.removeAttribute("listStyle",e)}))}}function be(t){const e=[];for(const i of t){const t=ye(i);t&&t.is("element","listItem")&&e.push(t)}return e}function ye(t){return"attribute"===t.type?t.range.start.nodeAfter:"insert"===t.type?t.position.nodeAfter:null}class ve extends t.Plugin{static get requires(){return[pe,Ot]}static get pluginName(){return"ListProperties"}}const we="todoListChecked";class Ae extends t.Command{constructor(t){super(t),this._selectedElements=[],this.on("execute",(()=>{this.refresh()}),{priority:"highest"})}refresh(){this._selectedElements=this._getSelectedItems(),this.value=this._selectedElements.every((t=>!!t.getAttribute("todoListChecked"))),this.isEnabled=!!this._selectedElements.length}_getSelectedItems(){const t=this.editor.model,e=t.schema,i=t.document.selection.getFirstRange(),n=i.start.parent,s=[];e.checkAttribute(n,we)&&s.push(n);for(const t of i.getItems())e.checkAttribute(t,we)&&!s.includes(t)&&s.push(t);return s}execute(t={}){this.editor.model.change((e=>{for(const i of this._selectedElements){(void 0===t.forceValue?!this.value:t.forceValue)?e.setAttribute(we,!0,i):e.removeAttribute(we,i)}}))}}function Ie(t,e,i){const n=e.modelCursor,s=n.parent,r=e.viewItem;if("checkbox"!=r.getAttribute("type")||"listItem"!=s.name||!n.isAtStart)return;if(!i.consumable.consume(r,{name:!0}))return;const o=i.writer;o.setAttribute("listType","todo",s),e.viewItem.hasAttribute("checked")&&o.setAttribute("todoListChecked",!0,s),e.modelRange=o.createRange(n)}function ke(t){return(e,i)=>{const n=i.modelPosition,s=n.parent;if(!s.is("element","listItem")||"todo"!=s.getAttribute("listType"))return;const r=Te(i.mapper.toViewElement(s),t);r&&(i.viewPosition=i.mapper.findPositionIn(r,n.offset))}}function xe(t,e,i,n){return e.createUIElement("label",{class:"todo-list__label",contenteditable:!1},(function(e){const s=(0,r.createElement)(document,"input",{type:"checkbox",tabindex:-1});i&&s.setAttribute("checked","checked"),s.addEventListener("change",(()=>n(t)));const o=this.toDomElement(e);return o.appendChild(s),o}))}function Te(t,e){const i=e.createRangeIn(t);for(const t of i)if(t.item.is("containerElement","span")&&t.item.hasClass("todo-list__label__description"))return t.item}const Se=(0,r.parseKeystroke)("Ctrl+Enter");class _e extends t.Plugin{static get pluginName(){return"TodoListEditing"}static get requires(){return[oe]}init(){const t=this.editor,{editing:e,data:i,model:n}=t;n.schema.extend("listItem",{allowAttributes:["todoListChecked"]}),n.schema.addAttributeCheck(((t,e)=>{const i=t.last;if("todoListChecked"==e&&"listItem"==i.name&&"todo"!=i.getAttribute("listType"))return!1})),t.commands.add("todoList",new Ut(t,"todo"));const s=new Ae(t);var o,l;t.commands.add("checkTodoList",s),t.commands.add("todoListCheck",s),i.downcastDispatcher.on("insert:listItem",function(t){return(e,i,n)=>{const s=n.consumable;if(!s.test(i.item,"insert")||!s.test(i.item,"attribute:listType")||!s.test(i.item,"attribute:listIndent"))return;if("todo"!=i.item.getAttribute("listType"))return;const r=i.item;s.consume(r,"insert"),s.consume(r,"attribute:listType"),s.consume(r,"attribute:listIndent"),s.consume(r,"attribute:todoListChecked");const o=n.writer,l=X(r,n);o.addClass("todo-list",l.parent);const a=o.createContainerElement("label",{class:"todo-list__label"}),c=o.createEmptyElement("input",{type:"checkbox",disabled:"disabled"}),d=o.createContainerElement("span",{class:"todo-list__label__description"});r.getAttribute("todoListChecked")&&o.setAttribute("checked","checked",c),o.insert(o.createPositionAt(l,0),a),o.insert(o.createPositionAt(a,0),c),o.insert(o.createPositionAfter(c),d),tt(r,l,n,t)}}(n),{priority:"high"}),i.upcastDispatcher.on("element:input",Ie,{priority:"high"}),e.downcastDispatcher.on("insert:listItem",function(t,e){return(i,n,s)=>{const r=s.consumable;if(!r.test(n.item,"insert")||!r.test(n.item,"attribute:listType")||!r.test(n.item,"attribute:listIndent"))return;if("todo"!=n.item.getAttribute("listType"))return;const o=n.item;r.consume(o,"insert"),r.consume(o,"attribute:listType"),r.consume(o,"attribute:listIndent"),r.consume(o,"attribute:todoListChecked");const l=s.writer,a=X(o,s),c=!!o.getAttribute("todoListChecked"),d=xe(o,l,c,e),u=l.createContainerElement("span",{class:"todo-list__label__description"});l.addClass("todo-list",a.parent),l.insert(l.createPositionAt(a,0),d),l.insert(l.createPositionAfter(d),u),tt(o,a,s,t)}}(n,(t=>this._handleCheckmarkChange(t))),{priority:"high"}),e.downcastDispatcher.on("attribute:listType:listItem",(o=t=>this._handleCheckmarkChange(t),l=e.view,(t,e,i)=>{if(!i.consumable.consume(e.item,t.name))return;const n=i.mapper.toViewElement(e.item),s=i.writer,r=function(t,e){const i=e.createRangeIn(t);for(const t of i)if(t.item.is("uiElement","label"))return t.item}(n,l);if("todo"==e.attributeNewValue){const t=!!e.item.getAttribute("todoListChecked"),i=xe(e.item,s,t,o),r=s.createContainerElement("span",{class:"todo-list__label__description"}),l=s.createRangeIn(n),a=rt(n),c=it(l.start),d=a?s.createPositionBefore(a):l.end,u=s.createRange(c,d);s.addClass("todo-list",n.parent),s.move(u,s.createPositionAt(r,0)),s.insert(s.createPositionAt(n,0),i),s.insert(s.createPositionAfter(i),r)}else if("todo"==e.attributeOldValue){const t=Te(n,l);s.removeClass("todo-list",n.parent),s.remove(r),s.move(s.createRangeIn(t),s.createPositionBefore(t)),s.remove(t)}})),e.downcastDispatcher.on("attribute:todoListChecked:listItem",function(t){return(e,i,n)=>{if("todo"!=i.item.getAttribute("listType"))return;if(!n.consumable.consume(i.item,"attribute:todoListChecked"))return;const{mapper:s,writer:r}=n,o=!!i.item.getAttribute("todoListChecked"),l=s.toViewElement(i.item).getChild(0),a=xe(i.item,r,o,t);r.insert(r.createPositionAfter(l),a),r.remove(l)}}((t=>this._handleCheckmarkChange(t)))),e.mapper.on("modelToViewPosition",ke(e.view)),i.mapper.on("modelToViewPosition",ke(e.view)),this.listenTo(e.view.document,"arrowKey",function(t,e){return(i,n)=>{if("left"!=(0,r.getLocalizedArrowKeyCodeDirection)(n.keyCode,e.contentLanguageDirection))return;const s=t.schema,o=t.document.selection;if(!o.isCollapsed)return;const l=o.getFirstPosition(),a=l.parent;if("listItem"===a.name&&"todo"==a.getAttribute("listType")&&l.isAtStart){const e=s.getNearestSelectionRange(t.createPositionBefore(a),"backward");e&&t.change((t=>t.setSelection(e))),n.preventDefault(),n.stopPropagation(),i.stop()}}}(n,t.locale),{context:"li"}),this.listenTo(e.view.document,"keydown",((e,i)=>{(0,r.getCode)(i)===Se&&(t.execute("checkTodoList"),e.stop())}),{priority:"high"});const a=new Set;this.listenTo(n,"applyOperation",((t,e)=>{const i=e[0];if("rename"==i.type&&"listItem"==i.oldName){const t=i.position.nodeAfter;t.hasAttribute("todoListChecked")&&a.add(t)}else if("changeAttribute"==i.type&&"listType"==i.key&&"todo"===i.oldValue)for(const t of i.range.getItems())t.hasAttribute("todoListChecked")&&"todo"!==t.getAttribute("listType")&&a.add(t)})),n.document.registerPostFixer((t=>{let e=!1;for(const i of a)t.removeAttribute("todoListChecked",i),e=!0;return a.clear(),e}))}_handleCheckmarkChange(t){const e=this.editor,i=e.model,n=Array.from(i.document.selection.getRanges());i.change((i=>{i.setSelection(t,"end"),e.execute("checkTodoList"),i.setSelection(n)}))}}class Ce extends t.Plugin{static get pluginName(){return"TodoListUI"}init(){const t=this.editor.t;st(this.editor,"todoList",t("To-do List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m2.315 14.705 2.224-2.24a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .949L2.865 16.07a.682.682 0 0 1-.112.089.647.647 0 0 1-.852-.051L.688 14.886a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.717.722zm5.185.045a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75zM2.329 5.745l2.21-2.226a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .95L2.865 7.125a.685.685 0 0 1-.496.196.644.644 0 0 1-.468-.187L.688 5.912a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.73.736zM7.5 5.75A.75.75 0 0 1 8.25 5h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>')}}var Le=i(250),Ve={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Z()(Le.Z,Ve);Le.Z.locals;class Ee extends t.Plugin{static get requires(){return[_e,Ce]}static get pluginName(){return"TodoList"}}})(),(window.CKEditor5=window.CKEditor5||{}).list=n})();;
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={945:(e,t,n)=>{e.exports=n(79)("./src/clipboard.js")},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{PasteFromOffice:()=>v});var e=n(704),t=n(945),s=n(492);function i(e,t,n,{blockElements:r,inlineObjectElements:s}){let i=n.createPositionAt(e,"forward"==t?"after":"before");return i=i.getLastMatchingPosition((({item:e})=>e.is("element")&&!r.includes(e.name)&&!s.includes(e.name)),{direction:t}),"forward"==t?i.nodeAfter:i.nodeBefore}function o(e,t){return!!e&&e.is("element")&&t.includes(e.name)}function c(e,t){if(!e.childCount)return;const n=new s.UpcastWriter(e.document),r=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),i=[];for(const e of n)if("elementStart"===e.type&&r.match(e.item)){const t=u(e.item);i.push({element:e.item,id:t.id,order:t.order,indent:t.indent})}return i}(e,n);if(!r.length)return;let i=null,o=1;r.forEach(((e,c)=>{const u=function(e,t){if(!e)return!0;if(e.id!==t.id)return t.indent-e.indent!=1;const n=t.element.previousSibling;if(!n)return!0;return r=n,!(r.is("element","ol")||r.is("element","ul"));var r}(r[c-1],e),f=u?null:r[c-1],d=(p=e,(m=f)?p.indent-m.indent:p.indent-1);var m,p;if(u&&(i=null,o=1),!i||0!==d){const r=function(e,t){const n=new RegExp(`@list l${e.id}:level${e.indent}\\s*({[^}]*)`,"gi"),r=/mso-level-number-format:([^;]{0,100});/gi,s=/mso-level-start-at:\s{0,100}([0-9]{0,10})\s{0,100};/gi,i=n.exec(t);let o="decimal",c="ol",a=null;if(i&&i[1]){const t=r.exec(i[1]);if(t&&t[1]&&(o=t[1].trim(),c="bullet"!==o&&"image"!==o?"ol":"ul"),"bullet"===o){const t=function(e){const t=function(e){if(e.getChild(0).is("$text"))return null;for(const t of e.getChildren()){if(!t.is("element","span"))continue;const e=t.getChild(0);return e.is("$text")?e:e.getChild(0)}}(e);if(!t)return null;const n=t._data;if("o"===n)return"circle";if("·"===n)return"disc";if("§"===n)return"square";return null}(e.element);t&&(o=t)}else{const e=s.exec(i[1]);e&&e[1]&&(a=parseInt(e[1]))}}return{type:c,startIndex:a,style:l(o)}}(e,t);if(i){if(e.indent>o){const e=i.getChild(i.childCount-1),t=e.getChild(e.childCount-1);i=a(r,t,n),o+=1}else if(e.indent<o){const t=o-e.indent;i=function(e,t){const n=e.getAncestors({parentFirst:!0});let r=null,s=0;for(const e of n)if("ul"!==e.name&&"ol"!==e.name||s++,s===t){r=e;break}return r}(i,t),o=parseInt(e.indent)}}else i=a(r,e.element,n);e.indent<=o&&(i.is("element",r.type)||(i=n.rename(r.type,i)))}const g=function(e,t){return function(e,t){const n=new s.Matcher({name:"span",styles:{"mso-list":"Ignore"}}),r=t.createRangeIn(e);for(const e of r)"elementStart"===e.type&&n.match(e.item)&&t.remove(e.item)}(e,t),t.rename("li",e)}(e.element,n);n.appendChild(g,i)}))}function l(e){if(e.startsWith("arabic-leading-zero"))return"decimal-leading-zero";switch(e){case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return e;default:return null}}function a(e,t,n){const r=t.parent,s=n.createElement(e.type),i=r.getChildIndex(t)+1;return n.insertChild(i,s,r),e.style&&n.setStyle("list-style-type",e.style,s),e.startIndex&&e.startIndex>1&&n.setAttribute("start",e.startIndex,s),s}function u(e){const t={},n=e.getStyle("mso-list");if(n){const e=n.match(/(^|\s{1,100})l(\d+)/i),r=n.match(/\s{0,100}lfo(\d+)/i),s=n.match(/\s{0,100}level(\d+)/i);e&&r&&s&&(t.id=e[2],t.order=r[1],t.indent=s[1])}return t}const f=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class d{constructor(e){this.document=e}isActive(e){return f.test(e)}execute(e){const t=new s.UpcastWriter(this.document),{body:n}=e._parsedData;!function(e,t){for(const n of e.getChildren())if(n.is("element","b")&&"normal"===n.getStyle("font-weight")){const r=e.getChildIndex(n);t.remove(n),t.insertChild(r,n.getChildren(),e)}}(n,t),function(e,t){for(const n of t.createRangeIn(e)){const e=n.item;if(e.is("element","li")){const n=e.getChild(0);n&&n.is("element","p")&&t.unwrapElement(n)}}}(n,t),function(e,t){const n=new s.ViewDocument(t.document.stylesProcessor),r=new s.DomConverter(n,{renderingMode:"data"}),c=r.blockElements,l=r.inlineObjectElements,a=[];for(const n of t.createRangeIn(e)){const e=n.item;if(e.is("element","br")){const n=i(e,"forward",t,{blockElements:c,inlineObjectElements:l}),r=i(e,"backward",t,{blockElements:c,inlineObjectElements:l}),s=o(n,c);(o(r,c)||s)&&a.push(e)}}for(const e of a)e.hasClass("Apple-interchange-newline")?t.remove(e):t.replace(e,t.createElement("p"))}(n,t),e.content=n}}function m(e,t){if(!e.childCount)return;const n=new s.UpcastWriter,r=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/v:(.+)/}),i=[];for(const e of n){if("elementStart"!=e.type)continue;const t=e.item,n=t.previousSibling&&t.previousSibling.name||null;r.match(t)&&t.getAttribute("o:gfxdata")&&"v:shapetype"!==n&&i.push(e.item.getAttribute("id"))}return i}(e,n);!function(e,t,n){const r=n.createRangeIn(t),i=new s.Matcher({name:"img"}),o=[];for(const t of r)if(i.match(t.item)){const n=t.item,r=n.getAttribute("v:shapes")?n.getAttribute("v:shapes").split(" "):[];r.length&&r.every((t=>e.indexOf(t)>-1))?o.push(n):n.getAttribute("src")||o.push(n)}for(const e of o)n.remove(e)}(r,e,n),function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/v:(.+)/}),i=[];for(const e of n)"elementStart"==e.type&&r.match(e.item)&&i.push(e.item);for(const e of i)t.remove(e)}(e,n);const i=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:"img"}),i=[];for(const e of n)r.match(e.item)&&e.item.getAttribute("src").startsWith("file://")&&i.push(e.item);return i}(e,n);i.length&&function(e,t,n){if(e.length===t.length)for(let r=0;r<e.length;r++){const s=`data:${t[r].type};base64,${p(t[r].hex)}`;n.setAttribute("src",s,e[r])}}(i,function(e){if(!e)return[];const t=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=new RegExp("(?:("+t.source+"))([\\da-fA-F\\s]+)\\}","g"),r=e.match(n),s=[];if(r)for(const e of r){let n=!1;e.includes("\\pngblip")?n="image/png":e.includes("\\jpegblip")&&(n="image/jpeg"),n&&s.push({hex:e.replace(t,"").replace(/[^\da-fA-F]/g,""),type:n})}return s}(t),n)}function p(e){return btoa(e.match(/\w{2}/g).map((e=>String.fromCharCode(parseInt(e,16)))).join(""))}const g=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,h=/xmlns:o="urn:schemas-microsoft-com/i;class y{constructor(e){this.document=e}isActive(e){return g.test(e)||h.test(e)}execute(e){const{body:t,stylesString:n}=e._parsedData;c(t,n),m(t,e.dataTransfer.getData("text/rtf")),e.content=t}}function b(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,((e,t)=>1===t.length?" ":Array(t.length+1).join("  ").substr(0,t.length)))}function w(e,t){const n=new DOMParser,r=function(e){return b(b(e)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(e){const t="</body>",n="</html>",r=e.indexOf(t);if(r<0)return e;const s=e.indexOf(n,r+t.length);return e.substring(0,r+t.length)+(s>=0?e.substring(s):"")}(e=e.replace(/<!--\[if gte vml 1]>/g,""))),i=n.parseFromString(r,"text/html");!function(e){e.querySelectorAll("span[style*=spacerun]").forEach((e=>{const t=e.innerText.length||0;e.innerText=Array(t+1).join("  ").substr(0,t)}))}(i);const o=i.body.innerHTML,c=function(e,t){const n=new s.ViewDocument(t),r=new s.DomConverter(n,{renderingMode:"data"}),i=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)i.appendChild(o[0]);return r.domToView(i,{skipComments:!0})}(i,t),l=function(e){const t=[],n=[],r=Array.from(e.getElementsByTagName("style"));for(const e of r)e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length&&(t.push(e.sheet),n.push(e.innerHTML));return{styles:t,stylesString:n.join(" ")}}(i);return{body:c,bodyString:o,styles:l.styles,stylesString:l.stylesString}}class v extends e.Plugin{static get pluginName(){return"PasteFromOffice"}static get requires(){return[t.ClipboardPipeline]}init(){const e=this.editor,t=e.editing.view.document,n=[];n.push(new y(t)),n.push(new d(t)),e.plugins.get("ClipboardPipeline").on("inputTransformation",((r,s)=>{if(s._isTransformedWithPasteFromOffice)return;if(e.model.document.selection.getFirstPosition().parent.is("element","codeBlock"))return;const i=s.dataTransfer.getData("text/html"),o=n.find((e=>e.isActive(i)));o&&(s._parsedData=w(i,t.stylesProcessor),o.execute(s),s._isTransformedWithPasteFromOffice=!0)}),{priority:"high"})}}})(),(window.CKEditor5=window.CKEditor5||{}).pasteFromOffice=r})();;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{Source:"Source"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={821:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var n=i(609),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,'.ck-source-editing-area{overflow:hidden;position:relative}.ck-source-editing-area textarea,.ck-source-editing-area:after{border:1px solid transparent;font-family:monospace;font-size:var(--ck-font-size-normal);line-height:var(--ck-line-height-base);margin:0;padding:var(--ck-spacing-large);white-space:pre-wrap}.ck-source-editing-area:after{content:attr(data-value) " ";display:block;visibility:hidden}.ck-source-editing-area textarea{border-color:var(--ck-color-base-border);border-radius:0;box-sizing:border-box;height:100%;outline:none;overflow:hidden;position:absolute;resize:none;width:100%}.ck-rounded-corners .ck-source-editing-area textarea,.ck-source-editing-area textarea.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck-source-editing-area textarea:not([readonly]):focus{border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}',""]);const r=o},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&o[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),t.push(d))}},t}},62:(e,t,i)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),a=[];function s(e){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===e){t=i;break}return t}function d(e,t){for(var i={},n=[],o=0;o<e.length;o++){var r=e[o],d=t.base?r[0]+t.base:r[0],c=i[d]||0,l="".concat(d," ").concat(c);i[d]=c+1;var u=s(l),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(h)):a.push({identifier:l,updater:p(h,t),references:1}),n.push(l)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function m(e,t,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,g=0;function p(e,t){var i,n,o;if(t.singleton){var r=g++;i=f||(f=c(t)),n=h.bind(null,i,r,!1),o=h.bind(null,i,r,!0)}else i=c(t),n=m.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=s(i[n]);a[o].references--}for(var r=d(e,t),c=0;c<i.length;c++){var l=s(i[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}i=r}}}},704:(e,t,i)=>{e.exports=i(79)("./src/core.js")},273:(e,t,i)=>{e.exports=i(79)("./src/ui.js")},209:(e,t,i)=>{e.exports=i(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0;var n={};(()=>{"use strict";i.r(n),i.d(n,{SourceEditing:()=>h});var e=i(704),t=i(273),o=i(209);function r(e){const t=[{name:"address",isVoid:!1},{name:"article",isVoid:!1},{name:"aside",isVoid:!1},{name:"blockquote",isVoid:!1},{name:"br",isVoid:!0},{name:"details",isVoid:!1},{name:"dialog",isVoid:!1},{name:"dd",isVoid:!1},{name:"div",isVoid:!1},{name:"dl",isVoid:!1},{name:"dt",isVoid:!1},{name:"fieldset",isVoid:!1},{name:"figcaption",isVoid:!1},{name:"figure",isVoid:!1},{name:"footer",isVoid:!1},{name:"form",isVoid:!1},{name:"h1",isVoid:!1},{name:"h2",isVoid:!1},{name:"h3",isVoid:!1},{name:"h4",isVoid:!1},{name:"h5",isVoid:!1},{name:"h6",isVoid:!1},{name:"header",isVoid:!1},{name:"hgroup",isVoid:!1},{name:"hr",isVoid:!0},{name:"input",isVoid:!0},{name:"li",isVoid:!1},{name:"main",isVoid:!1},{name:"nav",isVoid:!1},{name:"ol",isVoid:!1},{name:"p",isVoid:!1},{name:"section",isVoid:!1},{name:"table",isVoid:!1},{name:"tbody",isVoid:!1},{name:"td",isVoid:!1},{name:"textarea",isVoid:!1},{name:"th",isVoid:!1},{name:"thead",isVoid:!1},{name:"tr",isVoid:!1},{name:"ul",isVoid:!1}],i=t.map((e=>e.name)).join("|"),n=e.replace(new RegExp(`</?(${i})( .*?)?>`,"g"),"\n$&\n").split("\n");let o=0;return n.filter((e=>e.length)).map((e=>function(e,t){return t.some((t=>!t.isVoid&&!!new RegExp(`<${t.name}( .*?)?>`).test(e)))}(e,t)?a(e,o++):function(e,t){return t.some((t=>new RegExp(`</${t.name}>`).test(e)))}(e,t)?a(e,--o):a(e,o))).join("\n")}function a(e,t,i="    "){return`${i.repeat(Math.max(0,t))}${e}`}var s=i(62),d=i.n(s),c=i(821),l={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};d()(c.Z,l);c.Z.locals;const u="SourceEditingMode";class h extends e.Plugin{static get pluginName(){return"SourceEditing"}static get requires(){return[e.PendingActions]}constructor(e){super(e),this.set("isSourceEditingMode",!1),this._elementReplacer=new o.ElementReplacer,this._replacedRoots=new Map,this._dataFromRoots=new Map}init(){const i=this.editor,n=i.t;i.ui.componentFactory.add("sourceEditing",(o=>{const r=new t.ButtonView(o);return r.set({label:n("Source"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 0 5 4.5v15.003h-16V0h11zM3 1.5v3.25l-1.497 1-.003 8 1.5 1v3.254L7.685 18l-.001 1.504H17.5V8.002L16 9.428l-.004-4.22-4.222-3.692L3 1.5z"/><path d="M4.06 6.64a.75.75 0 0 1 .958 1.15l-.085.07L2.29 9.75l2.646 1.89c.302.216.4.62.232.951l-.058.095a.75.75 0 0 1-.951.232l-.095-.058-3.5-2.5V9.14l3.496-2.5zm4.194 6.22a.75.75 0 0 1-.958-1.149l.085-.07 2.643-1.89-2.646-1.89a.75.75 0 0 1-.232-.952l.058-.095a.75.75 0 0 1 .95-.232l.096.058 3.5 2.5v1.22l-3.496 2.5zm7.644-.836 2.122 2.122-5.825 5.809-2.125-.005.003-2.116zm2.539-1.847 1.414 1.414a.5.5 0 0 1 0 .707l-1.06 1.06-2.122-2.12 1.061-1.061a.5.5 0 0 1 .707 0z"/></svg>',tooltip:!0,withText:!0,class:"ck-source-editing-button"}),r.bind("isOn").to(this,"isSourceEditingMode"),r.bind("isEnabled").to(this,"isEnabled",i,"isReadOnly",i.plugins.get(e.PendingActions),"hasAny",((e,t,i)=>!!e&&(!t&&!i))),this.listenTo(r,"execute",(()=>{this.isSourceEditingMode=!this.isSourceEditingMode})),r})),this._isAllowedToHandleSourceEditingMode()&&(this.on("change:isSourceEditingMode",((e,t,i)=>{i?(this._showSourceEditing(),this._disableCommands()):(this._hideSourceEditing(),this._enableCommands())})),this.on("change:isEnabled",((e,t,i)=>this._handleReadOnlyMode(!i))),this.listenTo(i,"change:isReadOnly",((e,t,i)=>this._handleReadOnlyMode(i)))),i.data.on("get",(()=>{this.isSourceEditingMode&&this._updateEditorData()}),{priority:"high"})}afterInit(){const e=this.editor;["RealTimeCollaborativeEditing","CommentsEditing","TrackChangesEditing","RevisionHistory"].some((t=>e.plugins.has(t)))&&console.warn("You initialized the editor with the source editing feature and at least one of the collaboration features. Please be advised that the source editing feature may not work, and be careful when editing document source that contains markers created by the collaboration features."),e.plugins.has("RestrictedEditingModeEditing")&&console.warn("You initialized the editor with the source editing feature and restricted editing feature. Please be advised that the source editing feature may not work, and be careful when editing document source that contains markers created by the restricted editing feature.")}_showSourceEditing(){const e=this.editor,t=e.editing.view,i=e.model;i.change((e=>{e.setSelection(null),e.removeSelectionAttribute(i.document.selection.getAttributeKeys())}));for(const[i,n]of t.domRoots){const r=m(e.data.get({rootName:i})),a=(0,o.createElement)(n.ownerDocument,"textarea",{rows:"1","aria-label":"Source code editing area"}),s=(0,o.createElement)(n.ownerDocument,"div",{class:"ck-source-editing-area","data-value":r},[a]);a.value=r,a.setSelectionRange(0,0),a.addEventListener("input",(()=>{s.dataset.value=a.value})),t.change((e=>{const n=t.document.getRoot(i);e.addClass("ck-hidden",n)})),e.ui.setEditableElement("sourceEditing:"+i,a),this._replacedRoots.set(i,s),this._elementReplacer.replace(n,s),this._dataFromRoots.set(i,r)}this._focusSourceEditing()}_hideSourceEditing(){const e=this.editor.editing.view;this._updateEditorData(),e.change((t=>{for(const[i]of this._replacedRoots)t.removeClass("ck-hidden",e.document.getRoot(i))})),this._elementReplacer.restore(),this._replacedRoots.clear(),this._dataFromRoots.clear(),e.focus()}_updateEditorData(){const e=this.editor,t={};for(const[e,i]of this._replacedRoots){const n=this._dataFromRoots.get(e),o=i.dataset.value;n!==o&&(t[e]=o)}Object.keys(t).length&&e.data.set(t,{batchType:{isUndoable:!0}})}_focusSourceEditing(){const e=this.editor,[t]=this._replacedRoots.values(),i=t.querySelector("textarea");e.editing.view.document.isFocused=!1,i.focus()}_disableCommands(){const e=this.editor;for(const t of e.commands.commands())t.forceDisabled(u)}_enableCommands(){const e=this.editor;for(const t of e.commands.commands())t.clearForceDisabled(u)}_handleReadOnlyMode(e){if(this.isSourceEditingMode)for(const[,t]of this._replacedRoots)t.querySelector("textarea").readOnly=e}_isAllowedToHandleSourceEditingMode(){const e=this.editor.ui.view.editable;return e&&!e._hasExternalElement}}function m(e){return function(e){return e.startsWith("<")}(e)?r(e):e}})(),(window.CKEditor5=window.CKEditor5||{}).sourceEditing=n})();;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Insert code block":"Insert code block","Plain text":"Plain text"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={67:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(609),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,".ck-content pre{background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;color:#353535;direction:ltr;font-style:normal;min-width:200px;padding:1em;tab-size:4;text-align:left;white-space:pre-wrap}.ck-content pre code{background:unset;border-radius:0;padding:0}.ck.ck-editor__editable pre{position:relative}.ck.ck-editor__editable pre[data-language]:after{content:attr(data-language);position:absolute}:root{--ck-color-code-block-label-background:#757575}.ck.ck-editor__editable pre[data-language]:after{background:var(--ck-color-code-block-label-background);color:#fff;font-family:var(--ck-font-face);font-size:10px;line-height:16px;padding:var(--ck-spacing-tiny) var(--ck-spacing-medium);right:10px;top:-1px;white-space:nowrap}.ck.ck-code-block-dropdown .ck-dropdown__panel{max-height:250px;overflow-x:hidden;overflow-y:auto}",""]);const r=i},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},62:(e,t,n)=>{"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],s=t.base?r[0]+t.base:r[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=c(d),g={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(g)):a.push({identifier:d,updater:h(g,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function g(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,p=0;function h(e,t){var n,o,i;if(t.singleton){var r=p++;n=m||(m=l(t)),o=g.bind(null,n,r,!1),i=g.bind(null,n,r,!0)}else n=l(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);a[i].references--}for(var r=s(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},331:(e,t,n)=>{e.exports=n(79)("./src/enter.js")},273:(e,t,n)=>{e.exports=n(79)("./src/ui.js")},209:(e,t,n)=>{e.exports=n(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};(()=>{"use strict";n.r(o),n.d(o,{CodeBlock:()=>E,CodeBlockEditing:()=>v,CodeBlockUI:()=>A});var e=n(704),t=n(331),i=n(492),r=n(209);function a(e){const t=e.t,n=e.config.get("codeBlock.languages");for(const e of n)"Plain text"===e.label&&(e.label=t("Plain text")),void 0===e.class&&(e.class=`language-${e.language}`);return n}function c(e,t,n){const o={};for(const i of e)"class"===t?o[i[t].split(" ").shift()]=i[n]:o[i[t]]=i[n];return o}function s(e){return e.data.match(/^(\s*)/)[0]}function l(e){const t=e.document.selection,n=[];if(t.isCollapsed)n.push(t.anchor);else{const o=t.getFirstRange().getWalker({ignoreElementEnd:!0,direction:"backward"});for(const{item:t}of o)if(t.is("$textProxy")&&t.parent.is("element","codeBlock")){const o=s(t.textNode),{parent:i,startOffset:r}=t.textNode,a=e.createPositionAt(i,r+o.length);n.push(a)}}return n}function d(e){const t=(0,r.first)(e.getSelectedBlocks());return t&&t.is("element","codeBlock")}function u(e,t){return!t.is("rootElement")&&!e.isLimit(t)&&e.checkChild(t.parent,"codeBlock")}class g extends e.Command{constructor(e){super(e),this._lastLanguage=null}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor,n=t.model,o=n.document.selection,i=a(t)[0],r=Array.from(o.getSelectedBlocks()),c=void 0===e.forceValue?!this.value:e.forceValue,s=function(e,t,n){if(e.language)return e.language;if(e.usePreviousLanguageChoice&&t)return t;return n}(e,this._lastLanguage,i.language);n.change((e=>{c?this._applyCodeBlock(e,r,s):this._removeCodeBlock(e,r)}))}_getValue(){const e=this.editor.model.document.selection,t=(0,r.first)(e.getSelectedBlocks());return!!!(!t||!t.is("element","codeBlock"))&&t.getAttribute("language")}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=(0,r.first)(e.getSelectedBlocks());return!!n&&u(t,n)}_applyCodeBlock(e,t,n){this._lastLanguage=n;const o=this.editor.model.schema,i=t.filter((e=>u(o,e)));for(const t of i)e.rename(t,"codeBlock"),e.setAttribute("language",n,t),o.removeDisallowedAttributes([t],e),Array.from(t.getChildren()).filter((e=>!o.checkChild(t,e))).forEach((t=>e.remove(t)));i.reverse().forEach(((t,n)=>{const o=i[n+1];t.previousSibling===o&&(e.appendElement("softBreak",o),e.merge(e.createPositionBefore(t)))}))}_removeCodeBlock(e,t){const n=t.filter((e=>e.is("element","codeBlock")));for(const t of n){const n=e.createRangeOn(t);for(const t of Array.from(n.getItems()).reverse())if(t.is("element","softBreak")&&t.parent.is("element","codeBlock")){const{position:n}=e.split(e.createPositionBefore(t));e.rename(n.nodeAfter,"paragraph"),e.removeAttribute("language",n.nodeAfter),e.remove(t)}e.rename(t,"paragraph"),e.removeAttribute("language",t)}}}class f extends e.Command{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model;e.change((t=>{const n=l(e);for(const o of n){const n=t.createText(this._indentSequence);e.insertContent(n,o)}}))}_checkEnabled(){return!!this._indentSequence&&d(this.editor.model.document.selection)}}class m extends e.Command{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model;e.change((()=>{const t=l(e);for(const n of t){const t=p(e,n,this._indentSequence);t&&e.deleteContent(e.createSelection(t))}}))}_checkEnabled(){if(!this._indentSequence)return!1;const e=this.editor.model;return!!d(e.document.selection)&&l(e).some((t=>p(e,t,this._indentSequence)))}}function p(e,t,n){const o=function(e){let t=e.parent.getChild(e.index);t&&!t.is("element","softBreak")||(t=e.nodeBefore);if(!t||t.is("element","softBreak"))return null;return t}(t);if(!o)return null;const i=s(o),r=i.lastIndexOf(n);if(r+n.length!==i.length)return null;if(-1===r)return null;const{parent:a,startOffset:c}=o;return e.createRange(e.createPositionAt(a,c+r),e.createPositionAt(a,c+r+n.length))}function h(e,t,n=!1){const o=c(t,"language","class"),i=c(t,"language","label");return(t,r,a)=>{const{writer:c,mapper:s,consumable:l}=a;if(!l.consume(r.item,"insert"))return;const d=r.item.getAttribute("language"),u=s.toViewPosition(e.createPositionBefore(r.item)),g={};n&&(g["data-language"]=i[d],g.spellcheck="false");const f=c.createContainerElement("code",{class:o[d]||null}),m=c.createContainerElement("pre",g,f);c.insert(u,m),s.bindElements(r.item,f)}}const b="paragraph";class v extends e.Plugin{static get pluginName(){return"CodeBlockEditing"}static get requires(){return[t.ShiftEnter]}constructor(e){super(e),e.config.define("codeBlock",{languages:[{language:"plaintext",label:"Plain text"},{language:"c",label:"C"},{language:"cs",label:"C#"},{language:"cpp",label:"C++"},{language:"css",label:"CSS"},{language:"diff",label:"Diff"},{language:"html",label:"HTML"},{language:"java",label:"Java"},{language:"javascript",label:"JavaScript"},{language:"php",label:"PHP"},{language:"python",label:"Python"},{language:"ruby",label:"Ruby"},{language:"typescript",label:"TypeScript"},{language:"xml",label:"XML"}],indentSequence:"\t"})}init(){const e=this.editor,t=e.model.schema,n=e.model,o=e.editing.view,r=e.plugins.has("DocumentListEditing"),s=a(e);e.commands.add("codeBlock",new g(e)),e.commands.add("indentCodeBlock",new f(e)),e.commands.add("outdentCodeBlock",new m(e)),this.listenTo(o.document,"tab",((t,n)=>{const o=n.shiftKey?"outdentCodeBlock":"indentCodeBlock";e.commands.get(o).isEnabled&&(e.execute(o),n.stopPropagation(),n.preventDefault(),t.stop())}),{context:"pre"}),t.register("codeBlock",{allowWhere:"$block",allowChildren:"$text",isBlock:!0,allowAttributes:["language"]}),t.addAttributeCheck(((e,t)=>{const n=e.endsWith("codeBlock")&&t.startsWith("list")&&"list"!==t;return!(!r||!n)||!e.endsWith("codeBlock $text")&&void 0})),e.model.schema.addChildCheck(((e,t)=>{if(e.endsWith("codeBlock")&&t.isObject)return!1})),e.editing.downcastDispatcher.on("insert:codeBlock",h(n,s,!0)),e.data.downcastDispatcher.on("insert:codeBlock",h(n,s)),e.data.downcastDispatcher.on("insert:softBreak",function(e){return(t,n,o)=>{if("codeBlock"!==n.item.parent.name)return;const{writer:i,mapper:r,consumable:a}=o;if(!a.consume(n.item,"insert"))return;const c=r.toViewPosition(e.createPositionBefore(n.item));i.insert(c,i.createText("\n"))}}(n),{priority:"high"}),e.data.upcastDispatcher.on("element:code",function(e,t){const n=c(t,"class","language"),o=t[0].language;return(e,t,i)=>{const r=t.viewItem,a=r.parent;if(!a||!a.is("element","pre"))return;if(t.modelCursor.findAncestor("codeBlock"))return;const{consumable:c,writer:s}=i;if(!c.test(r,{name:!0}))return;const l=s.createElement("codeBlock"),d=[...r.getClassNames()];d.length||d.push("");for(const e of d){const t=n[e];if(t){s.setAttribute("language",t,l);break}}l.hasAttribute("language")||s.setAttribute("language",o,l),i.convertChildren(r,l),i.safeInsert(l,t.modelCursor)&&(c.consume(r,{name:!0}),i.updateConversionResult(l,t))}}(0,s)),e.data.upcastDispatcher.on("text",((e,t,{consumable:n,writer:o})=>{let i=t.modelCursor;if(!n.test(t.viewItem))return;if(!i.findAncestor("codeBlock"))return;n.consume(t.viewItem);const r=t.viewItem.data.split("\n").map((e=>o.createText(e))),a=r[r.length-1];for(const e of r)if(o.insert(e,i),i=i.getShiftedBy(e.offsetSize),e!==a){const e=o.createElement("softBreak");o.insert(e,i),i=o.createPositionAfter(e)}t.modelRange=o.createRange(t.modelCursor,i),t.modelCursor=i})),e.data.upcastDispatcher.on("element:pre",((e,t,{consumable:n})=>{const o=t.viewItem;if(o.findAncestor("pre"))return;const i=Array.from(o.getChildren()),r=i.find((e=>e.is("element","code")));if(r)for(const e of i)e!==r&&e.is("$text")&&n.consume(e,{name:!0})}),{priority:"high"}),this.listenTo(e.editing.view.document,"clipboardInput",((t,o)=>{let r=n.createRange(n.document.selection.anchor);if(o.targetRanges&&(r=e.editing.mapper.toModelRange(o.targetRanges[0])),!r.start.parent.is("element","codeBlock"))return;const a=o.dataTransfer.getData("text/plain"),c=new i.UpcastWriter(e.editing.view.document);o.content=function(e,t){const n=e.createDocumentFragment(),o=t.split("\n"),i=o.reduce(((t,n,i)=>(t.push(n),i<o.length-1&&t.push(e.createElement("br")),t)),[]);return e.appendChild(i,n),n}(c,a)})),this.listenTo(n,"getSelectedContent",((e,[o])=>{const i=o.anchor;!o.isCollapsed&&i.parent.is("element","codeBlock")&&i.hasSameParentAs(o.focus)&&n.change((n=>{const r=e.return;if(r.childCount>1||o.containsEntireContent(i.parent)){const t=n.createElement("codeBlock",i.parent.getAttributes());n.append(r,t);const o=n.createDocumentFragment();n.append(t,o),e.return=o}else{const e=r.getChild(0);t.checkAttribute(e,"code")&&n.setAttribute("code",!0,e)}}))}))}afterInit(){const e=this.editor,t=e.commands,n=t.get("indent"),o=t.get("outdent");n&&n.registerChildCommand(t.get("indentCodeBlock"),{priority:"highest"}),o&&o.registerChildCommand(t.get("outdentCodeBlock")),this.listenTo(e.editing.view.document,"enter",((t,n)=>{e.model.document.selection.getLastPosition().parent.is("element","codeBlock")&&(function(e,t){const n=e.model,o=n.document,i=e.editing.view,r=o.selection.getLastPosition(),a=r.nodeAfter;if(t||!o.selection.isCollapsed||!r.isAtStart)return!1;if(!B(a))return!1;return e.model.change((t=>{e.execute("enter");const n=o.selection.anchor.parent.previousSibling;t.rename(n,b),t.setSelection(n,"in"),e.model.schema.removeDisallowedAttributes([n],t),t.remove(a)})),i.scrollToTheSelection(),!0}(e,n.isSoft)||function(e,t){const n=e.model,o=n.document,i=e.editing.view,r=o.selection.getLastPosition(),a=r.nodeBefore;let c;if(t||!o.selection.isCollapsed||!r.isAtEnd||!a||!a.previousSibling)return!1;if(B(a)&&B(a.previousSibling))c=n.createRange(n.createPositionBefore(a.previousSibling),n.createPositionAfter(a));else if(k(a)&&B(a.previousSibling)&&B(a.previousSibling.previousSibling))c=n.createRange(n.createPositionBefore(a.previousSibling.previousSibling),n.createPositionAfter(a));else{if(!(k(a)&&B(a.previousSibling)&&k(a.previousSibling.previousSibling)&&B(a.previousSibling.previousSibling.previousSibling)))return!1;c=n.createRange(n.createPositionBefore(a.previousSibling.previousSibling.previousSibling),n.createPositionAfter(a))}return e.model.change((t=>{t.remove(c),e.execute("enter");const n=o.selection.anchor.parent;t.rename(n,b),e.model.schema.removeDisallowedAttributes([n],t)})),i.scrollToTheSelection(),!0}(e,n.isSoft)||function(e){const t=e.model,n=t.document,o=n.selection.getLastPosition(),i=o.nodeBefore||o.textNode;let r;i&&i.is("$text")&&(r=s(i));e.model.change((t=>{e.execute("shiftEnter"),r&&t.insertText(r,n.selection.anchor)}))}(e),n.preventDefault(),t.stop())}),{context:"pre"})}}function k(e){return e&&e.is("$text")&&!e.data.match(/\S/)}function B(e){return e&&e.is("element","softBreak")}var C=n(273);var w=n(62),x=n.n(w),S=n(67),y={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};x()(S.Z,y);S.Z.locals;class A extends e.Plugin{static get pluginName(){return"CodeBlockUI"}init(){const e=this.editor,t=e.t,n=e.ui.componentFactory,o=a(e);n.add("codeBlock",(n=>{const i=e.commands.get("codeBlock"),r=(0,C.createDropdown)(n,C.SplitButtonView),a=r.buttonView;return a.set({label:t("Insert code block"),tooltip:!0,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 12.61a.75.75 0 0 1-.089.976l-.085.07-3.154 2.254 3.412 2.414a.75.75 0 0 1 .237.95l-.057.095a.75.75 0 0 1-.95.237l-.096-.058-4.272-3.022-.003-1.223 4.01-2.867a.75.75 0 0 1 1.047.174zm2.795-.231.095.057 4.011 2.867-.003 1.223-4.272 3.022-.095.058a.75.75 0 0 1-.88-.151l-.07-.086-.058-.095a.75.75 0 0 1 .15-.88l.087-.07 3.412-2.414-3.154-2.253-.085-.071a.75.75 0 0 1 .862-1.207zM16 0a2 2 0 0 1 2 2v9.354l-.663-.492-.837-.001V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3.118L7.156 19H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14zM5.009 15l.003 1H3v-1h2.009zm2.188-2-1.471 1H5v-1h2.197zM10 11v.095L8.668 12H7v-1h3zm4-2v1H7V9h7zm0-2v1H7V7h7zm-4-2v1H5V5h5zM6 3v1H3V3h3z"/></svg>',isToggleable:!0}),a.bind("isOn").to(i,"value",(e=>!!e)),a.on("execute",(()=>{e.execute("codeBlock",{usePreviousLanguageChoice:!0}),e.editing.view.focus()})),r.on("execute",(t=>{e.execute("codeBlock",{language:t.source._codeBlockLanguage,forceValue:!0}),e.editing.view.focus()})),r.class="ck-code-block-dropdown",r.bind("isEnabled").to(i),(0,C.addListToDropdown)(r,this._getLanguageListItemDefinitions(o)),r}))}_getLanguageListItemDefinitions(e){const t=this.editor.commands.get("codeBlock"),n=new r.Collection;for(const o of e){const e={type:"button",model:new C.Model({_codeBlockLanguage:o.language,label:o.label,withText:!0})};e.model.bind("isOn").to(t,"value",(t=>t===e.model._codeBlockLanguage)),n.add(e)}return n}}class E extends e.Plugin{static get requires(){return[v,A]}static get pluginName(){return"CodeBlock"}}})(),(window.CKEditor5=window.CKEditor5||{}).codeBlock=o})();;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Horizontal line":"Horizontal line"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={73:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(609),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{background:#dedede;border:0;height:4px;margin:15px 0}",""]);const i=o},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},62:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:v(f,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function v(e,t){var n,r,o;if(t.singleton){var i=p++;n=m||(m=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},273:(e,t,n)=>{e.exports=n(79)("./src/ui.js")},995:(e,t,n)=>{e.exports=n(79)("./src/widget.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};(()=>{"use strict";n.r(r),n.d(r,{HorizontalLine:()=>f,HorizontalLineEditing:()=>l,HorizontalLineUI:()=>u});var e=n(704),t=n(995);class o extends e.Command{refresh(){const e=this.editor.model,n=e.schema,r=e.document.selection;this.isEnabled=function(e,n,r){const o=function(e,n){const r=(0,t.findOptimalInsertionRange)(e,n),o=r.start.parent;if(o.isEmpty&&!o.is("element","$root"))return o.parent;return o}(e,r);return n.checkChild(o,"horizontalLine")}(r,n,e)}execute(){const e=this.editor.model;e.change((t=>{const n=t.createElement("horizontalLine");e.insertObject(n,null,null,{setSelection:"after"})}))}}var i=n(62),a=n.n(i),s=n(73),c={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};a()(s.Z,c);s.Z.locals;class l extends e.Plugin{static get pluginName(){return"HorizontalLineEditing"}init(){const e=this.editor,n=e.model.schema,r=e.t,i=e.conversion;n.register("horizontalLine",{inheritAllFrom:"$blockObject"}),i.for("dataDowncast").elementToElement({model:"horizontalLine",view:(e,{writer:t})=>t.createEmptyElement("hr")}),i.for("editingDowncast").elementToStructure({model:"horizontalLine",view:(e,{writer:n})=>{const o=r("Horizontal line"),i=n.createContainerElement("div",null,n.createEmptyElement("hr"));return n.addClass("ck-horizontal-line",i),n.setCustomProperty("hr",!0,i),function(e,n,r){return n.setCustomProperty("horizontalLine",!0,e),(0,t.toWidget)(e,n,{label:r})}(i,n,o)}}),i.for("upcast").elementToElement({view:"hr",model:"horizontalLine"}),e.commands.add("horizontalLine",new o(e))}}var d=n(273);class u extends e.Plugin{static get pluginName(){return"HorizontalLineUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("horizontalLine",(n=>{const r=e.commands.get("horizontalLine"),o=new d.ButtonView(n);return o.set({label:t("Horizontal line"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9h16v2H2z"/></svg>',tooltip:!0}),o.bind("isEnabled").to(r,"isEnabled"),this.listenTo(o,"execute",(()=>{e.execute("horizontalLine"),e.editing.view.focus()})),o}))}}class f extends e.Plugin{static get requires(){return[l,u,t.Widget]}static get pluginName(){return"HorizontalLine"}}})(),(window.CKEditor5=window.CKEditor5||{}).horizontalLine=r})();;
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"Remove Format":"Remove Format"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={704:(t,e,o)=>{t.exports=o(79)("./src/core.js")},273:(t,e,o)=>{t.exports=o(79)("./src/ui.js")},209:(t,e,o)=>{t.exports=o(79)("./src/utils.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,o),s.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";o.r(r),o.d(r,{RemoveFormat:()=>m,RemoveFormatEditing:()=>c,RemoveFormatUI:()=>s});var t=o(704),e=o(273);const i="removeFormat";class s extends t.Plugin{static get pluginName(){return"RemoveFormatUI"}init(){const t=this.editor,o=t.t;t.ui.componentFactory.add(i,(r=>{const s=t.commands.get(i),n=new e.ButtonView(r);return n.set({label:o("Remove Format"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.69 14.915c.053.052.173.083.36.093a.366.366 0 0 1 .345.485l-.003.01a.738.738 0 0 1-.697.497h-2.67a.374.374 0 0 1-.353-.496l.013-.038a.681.681 0 0 1 .644-.458c.197-.012.325-.043.386-.093a.28.28 0 0 0 .072-.11L9.592 4.5H6.269c-.359-.017-.609.013-.75.09-.142.078-.289.265-.442.563-.192.29-.516.464-.864.464H4.17a.43.43 0 0 1-.407-.569L4.46 3h13.08l-.62 2.043a.81.81 0 0 1-.775.574h-.114a.486.486 0 0 1-.486-.486c.001-.284-.054-.464-.167-.54-.112-.076-.367-.106-.766-.091h-3.28l-2.68 10.257c-.006.074.007.127.038.158zM3 17h8a.5.5 0 1 1 0 1H3a.5.5 0 1 1 0-1zm11.299 1.17a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.06-1.06l1.415 1.414 1.414-1.415a.75.75 0 1 1 1.06 1.06l-1.413 1.415 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414-1.414 1.414z"/></svg>',tooltip:!0}),n.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(n,"execute",(()=>{t.execute(i),t.editing.view.focus()})),n}))}}var n=o(209);class a extends t.Command{refresh(){const t=this.editor.model;this.isEnabled=!!(0,n.first)(this._getFormattingItems(t.document.selection,t.schema))}execute(){const t=this.editor.model,e=t.schema;t.change((o=>{for(const r of this._getFormattingItems(t.document.selection,e))if(r.is("selection"))for(const t of this._getFormattingAttributes(r,e))o.removeSelectionAttribute(t);else{const t=o.createRangeOn(r);for(const i of this._getFormattingAttributes(r,e))o.removeAttribute(i,t)}}))}*_getFormattingItems(t,e){const o=t=>!!(0,n.first)(this._getFormattingAttributes(t,e));for(const r of t.getRanges())for(const t of r.getItems())!e.isBlock(t)&&o(t)&&(yield t);for(const e of t.getSelectedBlocks())o(e)&&(yield e);o(t)&&(yield t)}*_getFormattingAttributes(t,e){for(const[o]of t.getAttributes()){const t=e.getAttributeProperties(o);t&&t.isFormatting&&(yield o)}}}class c extends t.Plugin{static get pluginName(){return"RemoveFormatEditing"}init(){const t=this.editor;t.commands.add("removeFormat",new a(t))}}class m extends t.Plugin{static get requires(){return[c,s]}static get pluginName(){return"RemoveFormat"}}})(),(window.CKEditor5=window.CKEditor5||{}).removeFormat=r})();;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Background:"Background",Border:"Border","Cell properties":"Cell properties","Center table":"Center table",Color:"Color","Color picker":"Color picker",Column:"Column",Dashed:"Dashed","Delete column":"Delete column","Delete row":"Delete row",Dimensions:"Dimensions",Dotted:"Dotted",Double:"Double","Enter table caption":"Enter table caption",Groove:"Groove","Header column":"Header column","Header row":"Header row",Height:"Height","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table",Inset:"Inset","Justify cell text":"Justify cell text","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",None:"None",Outset:"Outset",Padding:"Padding",Ridge:"Ridge",Row:"Row","Select column":"Select column","Select row":"Select row",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Style:"Style","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".','The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Vertical text alignment toolbar":"Vertical text alignment toolbar",Width:"Width"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={252:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}",""]);const l=i},934:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}",""]);const l=i},333:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}",""]);const l=i},272:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}",""]);const l=i},660:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}",""]);const l=i},665:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}",""]);const l=i},773:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}",""]);const l=i},975:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}",""]);const l=i},482:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}",""]);const l=i},686:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',""]);const l=i},99:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}",""]);const l=i},475:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(609),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',""]);const l=i},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var l=0;l<this.length;l++){var r=this[l][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);n&&i[a[0]]||(o&&(a[2]?a[2]="".concat(o," and ").concat(a[2]):a[2]=o),t.push(a))}},t}},62:(e,t,o)=>{"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},l=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),r=[];function s(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function a(e,t){for(var o={},n=[],i=0;i<e.length;i++){var l=e[i],a=t.base?l[0]+t.base:l[0],c=o[a]||0,d="".concat(a," ").concat(c);o[a]=c+1;var u=s(d),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(r[u].references++,r[u].updater(h)):r.push({identifier:d,updater:p(h,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=l(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var l=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(l,r[t]):e.appendChild(l)}}function b(e,t,o){var n=o.css,i=o.media,l=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),l&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,g=0;function p(e,t){var o,n,i;if(t.singleton){var l=g++;o=m||(m=c(t)),n=h.bind(null,o,l,!1),i=h.bind(null,o,l,!0)}else o=c(t),n=b.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var o=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var i=s(o[n]);r[i].references--}for(var l=a(e,t),c=0;c<o.length;c++){var d=s(o[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=l}}}},704:(e,t,o)=>{e.exports=o(79)("./src/core.js")},492:(e,t,o)=>{e.exports=o(79)("./src/engine.js")},273:(e,t,o)=>{e.exports=o(79)("./src/ui.js")},209:(e,t,o)=>{e.exports=o(79)("./src/utils.js")},995:(e,t,o)=>{e.exports=o(79)("./src/widget.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={id:n,exports:{}};return e[n](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};(()=>{"use strict";o.r(n),o.d(n,{PlainTableOutput:()=>De,Table:()=>Fe,TableCaption:()=>Xo,TableCaptionEditing:()=>Ko,TableCaptionUI:()=>qo,TableCellProperties:()=>_o,TableCellPropertiesEditing:()=>ko,TableCellPropertiesUI:()=>io,TableCellWidthEditing:()=>so,TableClipboard:()=>xe,TableColumnResize:()=>gn,TableColumnResizeEditing:()=>hn,TableEditing:()=>ge,TableKeyboard:()=>Pe,TableMouse:()=>Be,TableProperties:()=>Ho,TablePropertiesEditing:()=>Po,TablePropertiesUI:()=>Do,TableSelection:()=>Ae,TableToolbar:()=>Ue,TableUI:()=>ve,TableUtils:()=>U});var e=o(704),t=o(995);function i(e,t){const{viewElement:o,defaultValue:n,modelAttribute:i,styleName:l,reduceBoxSides:r=!1,shouldUpcast:s=(()=>!0)}=t;e.for("upcast").attributeToAttribute({view:{name:o,styles:{[l]:/[\s\S]+/}},model:{key:i,value:e=>{if(!s(e))return;const t=e.getNormalizedStyle(l),o=r?a(t):t;return n!==o?o:void 0}}})}function l(e,t,o,n){e.for("upcast").add((e=>e.on("element:"+t,((e,t,i)=>{if(!t.modelRange)return;const l=["border-top-width","border-top-color","border-top-style","border-bottom-width","border-bottom-color","border-bottom-style","border-right-width","border-right-color","border-right-style","border-left-width","border-left-color","border-left-style"].filter((e=>t.viewItem.hasStyle(e)));if(!l.length)return;const r={styles:l};if(!i.consumable.test(t.viewItem,r))return;const s=[...t.modelRange.getItems({shallow:!0})].pop();i.consumable.consume(t.viewItem,r);const c={style:t.viewItem.getNormalizedStyle("border-style"),color:t.viewItem.getNormalizedStyle("border-color"),width:t.viewItem.getNormalizedStyle("border-width")},d={style:a(c.style),color:a(c.color),width:a(c.width)};d.style!==n.style&&i.writer.setAttribute(o.style,d.style,s),d.color!==n.color&&i.writer.setAttribute(o.color,d.color,s),d.width!==n.width&&i.writer.setAttribute(o.width,d.width,s)}))))}function r(e,{modelElement:t,modelAttribute:o,styleName:n}){e.for("downcast").attributeToAttribute({model:{name:t,key:o},view:e=>({key:"style",value:{[n]:e}})})}function s(e,{modelAttribute:t,styleName:o}){e.for("downcast").add((e=>e.on(`attribute:${t}:table`,((e,t,n)=>{const{item:i,attributeNewValue:l}=t,{mapper:r,writer:s}=n;if(!n.consumable.consume(t.item,e.name))return;const a=[...r.toViewElement(i).getChildren()].find((e=>e.is("element","table")));l?s.setStyle(o,l,a):s.removeStyle(o,a)}))))}function a(e){if(!e)return;return["top","right","bottom","left"].map((t=>e[t])).reduce(((e,t)=>e==t?e:null))||e}function c(e,t,o,n,i=1){t>i?n.setAttribute(e,t,o):n.removeAttribute(e,o)}function d(e,t,o={}){const n=e.createElement("tableCell",o);return e.insertElement("paragraph",n),e.insert(n,t),n}function u(e,t){const o=t.parent.parent,n=parseInt(o.getAttribute("headingColumns")||0),{column:i}=e.getCellLocation(t);return!!n&&i<n}function h(e,t,o){const{modelAttribute:n}=o;e.extend("tableCell",{allowAttributes:[n]}),i(t,{viewElement:/^(td|th)$/,...o}),r(t,{modelElement:"tableCell",...o})}var b=o(209);function m(){return e=>{e.on("element:table",((e,t,o)=>{const n=t.viewItem;if(!o.consumable.test(n,{name:!0}))return;const{rows:i,headingRows:l,headingColumns:r}=function(e){const t={headingRows:0,headingColumns:0},o=[],n=[];let i;for(const l of Array.from(e.getChildren()))if("tbody"===l.name||"thead"===l.name||"tfoot"===l.name){"thead"!==l.name||i||(i=l);const e=Array.from(l.getChildren()).filter((e=>e.is("element","tr")));for(const l of e)if("thead"===l.parent.name&&l.parent===i)t.headingRows++,o.push(l);else{n.push(l);const e=p(l);e>t.headingColumns&&(t.headingColumns=e)}}return t.rows=[...o,...n],t}(n),s={};r&&(s.headingColumns=r),l&&(s.headingRows=l);const a=o.writer.createElement("table",s);if(o.safeInsert(a,t.modelCursor)){if(o.consumable.consume(n,{name:!0}),i.forEach((e=>o.convertItem(e,o.writer.createPositionAt(a,"end")))),o.convertChildren(n,o.writer.createPositionAt(a,"end")),a.isEmpty){const e=o.writer.createElement("tableRow");o.writer.insert(e,o.writer.createPositionAt(a,"end")),d(o.writer,o.writer.createPositionAt(e,"end"))}o.updateConversionResult(a,t)}}))}}function g(e){return t=>{t.on(`element:${e}`,((e,t,o)=>{if(t.modelRange&&t.viewItem.isEmpty){const e=t.modelRange.start.nodeAfter,n=o.writer.createPositionAt(e,0);o.writer.insertElement("paragraph",n)}}),{priority:"low"})}}function p(e){let t=0,o=0;const n=Array.from(e.getChildren()).filter((e=>"th"===e.name||"td"===e.name));for(;o<n.length&&"th"===n[o].name;){const e=n[o];t+=parseInt(e.getAttribute("colspan")||1),o++}return t}class f{constructor(e,t={}){this._table=e,this._startRow=void 0!==t.row?t.row:t.startRow||0,this._endRow=void 0!==t.row?t.row:t.endRow,this._startColumn=void 0!==t.column?t.column:t.startColumn||0,this._endColumn=void 0!==t.column?t.column:t.endColumn,this._includeAllSlots=!!t.includeAllSlots,this._skipRows=new Set,this._row=0,this._rowIndex=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){const e=this._table.getChild(this._rowIndex);if(!e||this._isOverEndRow())return{done:!0};if(!e.is("element","tableRow"))return this._rowIndex++,this.next();if(this._isOverEndColumn())return this._advanceToNextRow();let t=null;const o=this._getSpanned();if(o)this._includeAllSlots&&!this._shouldSkipSlot()&&(t=this._formatOutValue(o.cell,o.row,o.column));else{const o=e.getChild(this._cellIndex);if(!o)return this._advanceToNextRow();const n=parseInt(o.getAttribute("colspan")||1),i=parseInt(o.getAttribute("rowspan")||1);(n>1||i>1)&&this._recordSpans(o,i,n),this._shouldSkipSlot()||(t=this._formatOutValue(o)),this._nextCellAtColumn=this._column+n}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,t||this.next()}skipRow(e){this._skipRows.add(e)}_advanceToNextRow(){return this._row++,this._rowIndex++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return void 0!==this._endRow&&this._row>this._endRow}_isOverEndColumn(){return void 0!==this._endColumn&&this._column>this._endColumn}_formatOutValue(e,t=this._row,o=this._column){return{done:!1,value:new w(this,e,t,o)}}_shouldSkipSlot(){const e=this._skipRows.has(this._row),t=this._row<this._startRow,o=this._column<this._startColumn,n=void 0!==this._endColumn&&this._column>this._endColumn;return e||t||o||n}_getSpanned(){const e=this._spannedCells.get(this._row);return e&&e.get(this._column)||null}_recordSpans(e,t,o){const n={cell:e,row:this._row,column:this._column};for(let e=this._row;e<this._row+t;e++)for(let t=this._column;t<this._column+o;t++)e==this._row&&t==this._column||this._markSpannedCell(e,t,n)}_markSpannedCell(e,t,o){this._spannedCells.has(e)||this._spannedCells.set(e,new Map);this._spannedCells.get(e).set(t,o)}}class w{constructor(e,t,o,n){this.cell=t,this.row=e._row,this.column=e._column,this.cellAnchorRow=o,this.cellAnchorColumn=n,this._cellIndex=e._cellIndex,this._rowIndex=e._rowIndex,this._table=e._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute("colspan")||1)}get cellHeight(){return parseInt(this.cell.getAttribute("rowspan")||1)}get rowIndex(){return this._rowIndex}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function k(e,o={}){return(n,{writer:i})=>{const l=n.getAttribute("headingRows")||0,r=[];l>0&&r.push(i.createContainerElement("thead",null,i.createSlot((e=>e.is("element","tableRow")&&e.index<l)))),l<e.getRows(n)&&r.push(i.createContainerElement("tbody",null,i.createSlot((e=>e.is("element","tableRow")&&e.index>=l))));const s=i.createContainerElement("figure",{class:"table"},[i.createContainerElement("table",null,r),i.createSlot((e=>!e.is("element","tableRow")))]);return o.asWidget?function(e,o){return o.setCustomProperty("table",!0,e),(0,t.toWidget)(e,o,{hasSelectionHandle:!0})}(s,i):s}}function _(e={}){return(o,{writer:n})=>{const i=o.parent,l=i.parent,r=l.getChildIndex(i),s=new f(l,{row:r}),a=l.getAttribute("headingRows")||0,c=l.getAttribute("headingColumns")||0;for(const i of s)if(i.cell==o){const o=i.row<a||i.column<c?"th":"td";return e.asWidget?(0,t.toWidgetEditable)(n.createEditableElement(o),n):n.createContainerElement(o)}}}function v(e={}){return(t,{writer:o,consumable:n,mapper:i})=>{if(t.parent.is("element","tableCell")&&C(t))return e.asWidget?o.createContainerElement("span",{class:"ck-table-bogus-paragraph"}):(n.consume(t,"insert"),void i.bindElements(t,i.toViewElement(t.parent)))}}function C(e){return 1==e.parent.childCount&&![...e.getAttributeKeys()].length}class y extends e.Command{refresh(){const e=this.editor.model,t=e.document.selection,o=e.schema;this.isEnabled=function(e,t){const o=e.getFirstPosition().parent,n=o===o.root?o:o.parent;return t.checkChild(n,"table")}(t,o)}execute(e={}){const t=this.editor.model,o=this.editor.plugins.get("TableUtils"),n=this.editor.config.get("table"),i=n.defaultHeadings.rows,l=n.defaultHeadings.columns;void 0===e.headingRows&&i&&(e.headingRows=i),void 0===e.headingColumns&&l&&(e.headingColumns=l),t.change((n=>{const i=o.createTable(n,e);t.insertObject(i,null,null,{findOptimalPosition:"auto"}),n.setSelection(n.createPositionAt(i.getNodeByPath([0,0,0]),0))}))}}class T extends e.Command{constructor(e,t={}){super(e),this.order=t.order||"below"}refresh(){const e=this.editor.model.document.selection,t=!!this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(e).length;this.isEnabled=t}execute(){const e=this.editor,t=e.model.document.selection,o=e.plugins.get("TableUtils"),n="above"===this.order,i=o.getSelectionAffectedTableCells(t),l=o.getRowIndexes(i),r=n?l.first:l.last,s=i[0].findAncestor("table");o.insertRows(s,{at:n?r:r+1,copyStructureFromAbove:!n})}}class A extends e.Command{constructor(e,t={}){super(e),this.order=t.order||"right"}refresh(){const e=this.editor.model.document.selection,t=!!this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(e).length;this.isEnabled=t}execute(){const e=this.editor,t=e.model.document.selection,o=e.plugins.get("TableUtils"),n="left"===this.order,i=o.getSelectionAffectedTableCells(t),l=o.getColumnIndexes(i),r=n?l.first:l.last,s=i[0].findAncestor("table");o.insertColumns(s,{columns:1,at:n?r:r+1})}}class x extends e.Command{constructor(e,t={}){super(e),this.direction=t.direction||"horizontally"}refresh(){const e=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=1===e.length}execute(){const e=this.editor.plugins.get("TableUtils"),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection)[0];"horizontally"===this.direction?e.splitCellHorizontally(t,2):e.splitCellVertically(t,2)}}function V(e,t,o){const{startRow:n,startColumn:i,endRow:l,endColumn:r}=t,s=o.createElement("table"),a=l-n+1;for(let e=0;e<a;e++)o.insertElement("tableRow",s,"end");const u=[...new f(e,{startRow:n,endRow:l,startColumn:i,endColumn:r,includeAllSlots:!0})];for(const{row:e,column:t,cell:a,isAnchor:c,cellAnchorRow:h,cellAnchorColumn:b}of u){const u=e-n,m=s.getChild(u);if(c){const n=o.cloneElement(a);o.append(n,m),E(n,e,t,l,r,o)}else(h<n||b<i)&&d(o,o.createPositionAt(m,"end"))}return function(e,t,o,n,i){const l=parseInt(t.getAttribute("headingRows")||0);if(l>0){c("headingRows",l-o,e,i,0)}const r=parseInt(t.getAttribute("headingColumns")||0);if(r>0){c("headingColumns",r-n,e,i,0)}}(s,e,n,i,o),s}function S(e,t,o=0){const n=[],i=new f(e,{startRow:o,endRow:t-1});for(const e of i){const{row:o,cellHeight:i}=e;o<t&&t<=o+i-1&&n.push(e)}return n}function R(e,t,o){const n=e.parent,i=n.parent,l=n.index,r=t-l,s={},a=parseInt(e.getAttribute("rowspan"))-r;a>1&&(s.rowspan=a);const u=parseInt(e.getAttribute("colspan")||1);u>1&&(s.colspan=u);const h=l+r,b=[...new f(i,{startRow:l,endRow:h,includeAllSlots:!0})];let m,g=null;for(const t of b){const{row:n,column:i,cell:l}=t;l===e&&void 0===m&&(m=i),void 0!==m&&m===i&&n===h&&(g=d(o,t.getPositionBefore(),s))}return c("rowspan",r,e,o),g}function I(e,t){const o=[],n=new f(e);for(const e of n){const{column:n,cellWidth:i}=e;n<t&&t<=n+i-1&&o.push(e)}return o}function P(e,t,o,n){const i=o-t,l={},r=parseInt(e.getAttribute("colspan"))-i;r>1&&(l.colspan=r);const s=parseInt(e.getAttribute("rowspan")||1);s>1&&(l.rowspan=s);const a=d(n,n.createPositionAfter(e),l);return c("colspan",i,e,n),a}function E(e,t,o,n,i,l){const r=parseInt(e.getAttribute("colspan")||1),s=parseInt(e.getAttribute("rowspan")||1);if(o+r-1>i){c("colspan",i-o+1,e,l,1)}if(t+s-1>n){c("rowspan",n-t+1,e,l,1)}}function z(e,t){const o=t.getColumns(e),n=new Array(o).fill(0);for(const{column:t}of new f(e))n[t]++;const i=n.reduce(((e,t,o)=>t?e:[...e,o]),[]);if(i.length>0){const o=i[i.length-1];return t.removeColumns(e,{at:o}),!0}return!1}function B(e,t){const o=[],n=t.getRows(e);for(let t=0;t<n;t++){e.getChild(t).isEmpty&&o.push(t)}if(o.length>0){const n=o[o.length-1];return t.removeRows(e,{at:n}),!0}return!1}function W(e,t){z(e,t)||B(e,t)}function L(e,t){const o=Array.from(new f(e,{startColumn:t.firstColumn,endColumn:t.lastColumn,row:t.lastRow}));if(o.every((({cellHeight:e})=>1===e)))return t.lastRow;const n=o[0].cellHeight-1;return t.lastRow+n}function N(e,t){const o=Array.from(new f(e,{startRow:t.firstRow,endRow:t.lastRow,column:t.lastColumn}));if(o.every((({cellWidth:e})=>1===e)))return t.lastColumn;const n=o[0].cellWidth-1;return t.lastColumn+n}class F extends e.Command{constructor(e,t){super(e),this.direction=t.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const e=this._getMergeableCell();this.value=e,this.isEnabled=!!e}execute(){const e=this.editor.model,t=e.document,o=this.editor.plugins.get("TableUtils").getTableCellsContainingSelection(t.selection)[0],n=this.value,i=this.direction;e.change((e=>{const t="right"==i||"down"==i,l=t?o:n,r=t?n:o,s=r.parent;!function(e,t,o){D(e)||(D(t)&&o.remove(o.createRangeIn(t)),o.move(o.createRangeIn(e),o.createPositionAt(t,"end")));o.remove(e)}(r,l,e);const a=this.isHorizontal?"colspan":"rowspan",c=parseInt(o.getAttribute(a)||1),d=parseInt(n.getAttribute(a)||1);e.setAttribute(a,c+d,l),e.setSelection(e.createRangeIn(l));const u=this.editor.plugins.get("TableUtils");W(s.findAncestor("table"),u)}))}_getMergeableCell(){const e=this.editor.model.document,t=this.editor.plugins.get("TableUtils"),o=t.getTableCellsContainingSelection(e.selection)[0];if(!o)return;const n=this.isHorizontal?function(e,t,o){const n=e.parent,i=n.parent,l="right"==t?e.nextSibling:e.previousSibling,r=(i.getAttribute("headingColumns")||0)>0;if(!l)return;const s="right"==t?e:l,a="right"==t?l:e,{column:c}=o.getCellLocation(s),{column:d}=o.getCellLocation(a),h=parseInt(s.getAttribute("colspan")||1),b=u(o,s),m=u(o,a);if(r&&b!=m)return;return c+h===d?l:void 0}(o,this.direction,t):function(e,t,o){const n=e.parent,i=n.parent,l=i.getChildIndex(n);if("down"==t&&l===o.getRows(i)-1||"up"==t&&0===l)return;const r=parseInt(e.getAttribute("rowspan")||1),s=i.getAttribute("headingRows")||0,a="down"==t&&l+r===s,c="up"==t&&l===s;if(s&&(a||c))return;const d=parseInt(e.getAttribute("rowspan")||1),u="down"==t?l+d:l,h=[...new f(i,{endRow:u})],b=h.find((t=>t.cell===e)),m=b.column,g=h.find((({row:e,cellHeight:o,column:n})=>n===m&&("down"==t?e===u:u===e+o)));return g&&g.cell}(o,this.direction,t);if(!n)return;const i=this.isHorizontal?"rowspan":"colspan",l=parseInt(o.getAttribute(i)||1);return parseInt(n.getAttribute(i)||1)===l?n:void 0}}function D(e){return 1==e.childCount&&e.getChild(0).is("element","paragraph")&&e.getChild(0).isEmpty}class H extends e.Command{refresh(){const e=this.editor.plugins.get("TableUtils"),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection),o=t[0];if(o){const n=o.findAncestor("table"),i=this.editor.plugins.get("TableUtils").getRows(n)-1,l=e.getRowIndexes(t),r=0===l.first&&l.last===i;this.isEnabled=!r}else this.isEnabled=!1}execute(){const e=this.editor.model,t=this.editor.plugins.get("TableUtils"),o=t.getSelectionAffectedTableCells(e.document.selection),n=t.getRowIndexes(o),i=o[0],l=i.findAncestor("table"),r=t.getCellLocation(i).column;e.change((e=>{const o=n.last-n.first+1;t.removeRows(l,{at:n.first,rows:o});const i=function(e,t,o,n){const i=e.getChild(Math.min(t,n-1));let l=i.getChild(0),r=0;for(const e of i.getChildren()){if(r>o)return l;l=e,r+=parseInt(e.getAttribute("colspan")||1)}return l}(l,n.first,r,t.getRows(l));e.setSelection(e.createPositionAt(i,0))}))}}class M extends e.Command{refresh(){const e=this.editor.plugins.get("TableUtils"),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection),o=t[0];if(o){const n=o.findAncestor("table"),i=e.getColumns(n),{first:l,last:r}=e.getColumnIndexes(t);this.isEnabled=r-l<i-1}else this.isEnabled=!1}execute(){const e=this.editor.plugins.get("TableUtils"),[t,o]=function(e,t){const o=t.getSelectionAffectedTableCells(e),n=o[0],i=o.pop(),l=[n,i];return n.isBefore(i)?l:l.reverse()}(this.editor.model.document.selection,e),n=t.parent.parent,i=[...new f(n)],l={first:i.find((e=>e.cell===t)).column,last:i.find((e=>e.cell===o)).column},r=function(e,t,o,n){const i=parseInt(o.getAttribute("colspan")||1);return i>1?o:t.previousSibling||o.nextSibling?o.nextSibling||t.previousSibling:n.first?e.reverse().find((({column:e})=>e<n.first)).cell:e.reverse().find((({column:e})=>e>n.last)).cell}(i,t,o,l);this.editor.model.change((e=>{const t=l.last-l.first+1;this.editor.plugins.get("TableUtils").removeColumns(n,{at:l.first,columns:t}),e.setSelection(e.createPositionAt(r,0))}))}}class O extends e.Command{refresh(){const e=this.editor.plugins.get("TableUtils"),t=this.editor.model,o=e.getSelectionAffectedTableCells(t.document.selection),n=o.length>0;this.isEnabled=n,this.value=n&&o.every((e=>this._isInHeading(e,e.parent.parent)))}execute(e={}){if(e.forceValue===this.value)return;const t=this.editor.plugins.get("TableUtils"),o=this.editor.model,n=t.getSelectionAffectedTableCells(o.document.selection),i=n[0].findAncestor("table"),{first:l,last:r}=t.getRowIndexes(n),s=this.value?l:r+1,a=i.getAttribute("headingRows")||0;o.change((e=>{if(s){const t=S(i,s,s>a?a:0);for(const{cell:o}of t)R(o,s,e)}c("headingRows",s,i,e,0)}))}_isInHeading(e,t){const o=parseInt(t.getAttribute("headingRows")||0);return!!o&&e.parent.index<o}}class j extends e.Command{refresh(){const e=this.editor.model,t=this.editor.plugins.get("TableUtils"),o=t.getSelectionAffectedTableCells(e.document.selection),n=o.length>0;this.isEnabled=n,this.value=n&&o.every((e=>u(t,e)))}execute(e={}){if(e.forceValue===this.value)return;const t=this.editor.plugins.get("TableUtils"),o=this.editor.model,n=t.getSelectionAffectedTableCells(o.document.selection),i=n[0].findAncestor("table"),{first:l,last:r}=t.getColumnIndexes(n),s=this.value?l:r+1;o.change((e=>{if(s){const t=I(i,s);for(const{cell:o,column:n}of t)P(o,n,s,e)}c("headingColumns",s,i,e,0)}))}}class U extends e.Plugin{static get pluginName(){return"TableUtils"}init(){this.decorate("insertColumns"),this.decorate("insertRows")}getCellLocation(e){const t=e.parent,o=t.parent,n=o.getChildIndex(t),i=new f(o,{row:n});for(const{cell:t,row:o,column:n}of i)if(t===e)return{row:o,column:n}}createTable(e,t){const o=e.createElement("table"),n=parseInt(t.rows)||2,i=parseInt(t.columns)||2;return $(e,o,0,n,i),t.headingRows&&c("headingRows",Math.min(t.headingRows,n),o,e,0),t.headingColumns&&c("headingColumns",Math.min(t.headingColumns,i),o,e,0),o}insertRows(e,t={}){const o=this.editor.model,n=t.at||0,i=t.rows||1,l=void 0!==t.copyStructureFromAbove,r=t.copyStructureFromAbove?n-1:n,s=this.getRows(e),a=this.getColumns(e);if(n>s)throw new b.CKEditorError("tableutils-insertrows-insert-out-of-range",this,{options:t});o.change((t=>{const o=e.getAttribute("headingRows")||0;if(o>n&&c("headingRows",o+i,e,t,0),!l&&(0===n||n===s))return void $(t,e,n,i,a);const u=l?Math.max(n,r):n,h=new f(e,{endRow:u}),b=new Array(a).fill(1);for(const{row:e,column:o,cellHeight:s,cellWidth:a,cell:c}of h){const d=e+s-1,u=e<=r&&r<=d;e<n&&n<=d?(t.setAttribute("rowspan",s+i,c),b[o]=-a):l&&u&&(b[o]=a)}for(let o=0;o<i;o++){const o=t.createElement("tableRow");t.insert(o,e,n);for(let e=0;e<b.length;e++){const n=b[e],i=t.createPositionAt(o,"end");n>0&&d(t,i,n>1?{colspan:n}:null),e+=Math.abs(n)-1}}}))}insertColumns(e,t={}){const o=this.editor.model,n=t.at||0,i=t.columns||1;o.change((t=>{const o=e.getAttribute("headingColumns");n<o&&t.setAttribute("headingColumns",o+i,e);const l=this.getColumns(e);if(0===n||l===n){for(const o of e.getChildren())o.is("element","tableRow")&&Z(i,t,t.createPositionAt(o,n?"end":0));return}const r=new f(e,{column:n,includeAllSlots:!0});for(const e of r){const{row:o,cell:l,cellAnchorColumn:s,cellAnchorRow:a,cellWidth:c,cellHeight:d}=e;if(s<n){t.setAttribute("colspan",c+i,l);const e=a+d-1;for(let t=o;t<=e;t++)r.skipRow(t)}else Z(i,t,e.getPositionBefore())}}))}removeRows(e,t){const o=this.editor.model,n=t.rows||1,i=this.getRows(e),l=t.at,r=l+n-1;if(r>i-1)throw new b.CKEditorError("tableutils-removerows-row-index-out-of-range",this,{table:e,options:t});o.change((t=>{const{cellsToMove:o,cellsToTrim:n}=function(e,t,o){const n=new Map,i=[];for(const{row:l,column:r,cellHeight:s,cell:a}of new f(e,{endRow:o})){const e=l+s-1;if(l>=t&&l<=o&&e>o){const e=s-(o-l+1);n.set(r,{cell:a,rowspan:e})}if(l<t&&e>=t){let n;n=e>=o?o-t+1:e-t+1,i.push({cell:a,rowspan:s-n})}}return{cellsToMove:n,cellsToTrim:i}}(e,l,r);if(o.size){!function(e,t,o,n){const i=new f(e,{includeAllSlots:!0,row:t}),l=[...i],r=e.getChild(t);let s;for(const{column:e,cell:t,isAnchor:i}of l)if(o.has(e)){const{cell:t,rowspan:i}=o.get(e),l=s?n.createPositionAfter(s):n.createPositionAt(r,0);n.move(n.createRangeOn(t),l),c("rowspan",i,t,n),s=t}else i&&(s=t)}(e,r+1,o,t)}for(let o=r;o>=l;o--)t.remove(e.getChild(o));for(const{rowspan:e,cell:o}of n)c("rowspan",e,o,t);!function(e,t,o,n){const i=e.getAttribute("headingRows")||0;if(t<i){c("headingRows",o<i?i-(o-t+1):t,e,n,0)}}(e,l,r,t),z(e,this)||B(e,this)}))}removeColumns(e,t){const o=this.editor.model,n=t.at,i=t.columns||1,l=t.at+i-1;o.change((t=>{!function(e,t,o){const n=e.getAttribute("headingColumns")||0;if(n&&t.first<n){const i=Math.min(n-1,t.last)-t.first+1;o.setAttribute("headingColumns",n-i,e)}}(e,{first:n,last:l},t);for(let o=l;o>=n;o--)for(const{cell:n,column:i,cellWidth:l}of[...new f(e)])i<=o&&l>1&&i+l>o?c("colspan",l-1,n,t):i===o&&t.remove(n);B(e,this)||z(e,this)}))}splitCellVertically(e,t=2){const o=this.editor.model,n=e.parent.parent,i=parseInt(e.getAttribute("rowspan")||1),l=parseInt(e.getAttribute("colspan")||1);o.change((o=>{if(l>1){const{newCellsSpan:n,updatedSpan:r}=K(l,t);c("colspan",r,e,o);const s={};n>1&&(s.colspan=n),i>1&&(s.rowspan=i);Z(l>t?t-1:l-1,o,o.createPositionAfter(e),s)}if(l<t){const r=t-l,s=[...new f(n)],{column:a}=s.find((({cell:t})=>t===e)),d=s.filter((({cell:t,cellWidth:o,column:n})=>t!==e&&n===a||n<a&&n+o>a));for(const{cell:e,cellWidth:t}of d)o.setAttribute("colspan",t+r,e);const u={};i>1&&(u.rowspan=i),Z(r,o,o.createPositionAfter(e),u);const h=n.getAttribute("headingColumns")||0;h>a&&c("headingColumns",h+r,n,o)}}))}splitCellHorizontally(e,t=2){const o=this.editor.model,n=e.parent,i=n.parent,l=i.getChildIndex(n),r=parseInt(e.getAttribute("rowspan")||1),s=parseInt(e.getAttribute("colspan")||1);o.change((o=>{if(r>1){const n=[...new f(i,{startRow:l,endRow:l+r-1,includeAllSlots:!0})],{newCellsSpan:a,updatedSpan:d}=K(r,t);c("rowspan",d,e,o);const{column:u}=n.find((({cell:t})=>t===e)),h={};a>1&&(h.rowspan=a),s>1&&(h.colspan=s);for(const e of n){const{column:t,row:n}=e;n>=l+d&&t===u&&(n+l+d)%a==0&&Z(1,o,e.getPositionBefore(),h)}}if(r<t){const n=t-r,a=[...new f(i,{startRow:0,endRow:l})];for(const{cell:t,cellHeight:i,row:r}of a)if(t!==e&&r+i>l){const e=i+n;o.setAttribute("rowspan",e,t)}const d={};s>1&&(d.colspan=s),$(o,i,l+1,n,1,d);const u=i.getAttribute("headingRows")||0;u>l&&c("headingRows",u+n,i,o)}}))}getColumns(e){return[...e.getChild(0).getChildren()].reduce(((e,t)=>e+parseInt(t.getAttribute("colspan")||1)),0)}getRows(e){return Array.from(e.getChildren()).reduce(((e,t)=>t.is("element","tableRow")?e+1:e),0)}createTableWalker(e,t={}){return new f(e,t)}getSelectedTableCells(e){const t=[];for(const o of this.sortRanges(e.getRanges())){const e=o.getContainedElement();e&&e.is("element","tableCell")&&t.push(e)}return t}getTableCellsContainingSelection(e){const t=[];for(const o of e.getRanges()){const e=o.start.findAncestor("tableCell");e&&t.push(e)}return t}getSelectionAffectedTableCells(e){const t=this.getSelectedTableCells(e);return t.length?t:this.getTableCellsContainingSelection(e)}getRowIndexes(e){const t=e.map((e=>e.parent.index));return this._getFirstLastIndexesObject(t)}getColumnIndexes(e){const t=e[0].findAncestor("table"),o=[...new f(t)].filter((t=>e.includes(t.cell))).map((e=>e.column));return this._getFirstLastIndexesObject(o)}isSelectionRectangular(e){if(e.length<2||!this._areCellInTheSameTableSection(e))return!1;const t=new Set,o=new Set;let n=0;for(const i of e){const{row:e,column:l}=this.getCellLocation(i),r=parseInt(i.getAttribute("rowspan")||1),s=parseInt(i.getAttribute("colspan")||1);t.add(e),o.add(l),r>1&&t.add(e+r-1),s>1&&o.add(l+s-1),n+=r*s}const i=function(e,t){const o=Array.from(e.values()),n=Array.from(t.values()),i=Math.max(...o),l=Math.min(...o),r=Math.max(...n),s=Math.min(...n);return(i-l+1)*(r-s+1)}(t,o);return i==n}sortRanges(e){return Array.from(e).sort(q)}_getFirstLastIndexesObject(e){const t=e.sort(((e,t)=>e-t));return{first:t[0],last:t[t.length-1]}}_areCellInTheSameTableSection(e){const t=e[0].findAncestor("table"),o=this.getRowIndexes(e),n=parseInt(t.getAttribute("headingRows")||0);if(!this._areIndexesInSameSection(o,n))return!1;const i=parseInt(t.getAttribute("headingColumns")||0),l=this.getColumnIndexes(e);return this._areIndexesInSameSection(l,i)}_areIndexesInSameSection({first:e,last:t},o){return e<o===t<o}}function $(e,t,o,n,i,l={}){for(let r=0;r<n;r++){const n=e.createElement("tableRow");e.insert(n,t,o),Z(i,e,e.createPositionAt(n,"end"),l)}}function Z(e,t,o,n={}){for(let i=0;i<e;i++)d(t,o,n)}function K(e,t){if(e<t)return{newCellsSpan:1,updatedSpan:1};const o=Math.floor(e/t);return{newCellsSpan:o,updatedSpan:e-o*t+o}}function q(e,t){const o=e.start,n=t.start;return o.isBefore(n)?-1:1}class G extends e.Command{refresh(){const e=this.editor.plugins.get(U),t=e.getSelectedTableCells(this.editor.model.document.selection);this.isEnabled=e.isSelectionRectangular(t,this.editor.plugins.get(U))}execute(){const e=this.editor.model,t=this.editor.plugins.get(U);e.change((o=>{const n=t.getSelectedTableCells(e.document.selection),i=n.shift(),{mergeWidth:l,mergeHeight:r}=function(e,t,o){let n=0,i=0;for(const e of t){const{row:t,column:l}=o.getCellLocation(e);n=Y(e,l,n,"colspan"),i=Y(e,t,i,"rowspan")}const{row:l,column:r}=o.getCellLocation(e),s=n-r,a=i-l;return{mergeWidth:s,mergeHeight:a}}(i,n,t);c("colspan",l,i,o),c("rowspan",r,i,o);for(const e of n)J(e,i,o);W(i.findAncestor("table"),t),o.setSelection(i,"in")}))}}function J(e,t,o){X(e)||(X(t)&&o.remove(o.createRangeIn(t)),o.move(o.createRangeIn(e),o.createPositionAt(t,"end"))),o.remove(e)}function X(e){return 1==e.childCount&&e.getChild(0).is("element","paragraph")&&e.getChild(0).isEmpty}function Y(e,t,o,n){const i=parseInt(e.getAttribute(n)||1);return Math.max(o,t+i)}class Q extends e.Command{constructor(e){super(e),this.affectsData=!1}refresh(){const e=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){const e=this.editor.model,t=this.editor.plugins.get("TableUtils"),o=t.getSelectionAffectedTableCells(e.document.selection),n=t.getRowIndexes(o),i=o[0].findAncestor("table"),l=[];for(let t=n.first;t<=n.last;t++)for(const o of i.getChild(t).getChildren())l.push(e.createRangeOn(o));e.change((e=>{e.setSelection(l)}))}}class ee extends e.Command{constructor(e){super(e),this.affectsData=!1}refresh(){const e=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){const e=this.editor.plugins.get("TableUtils"),t=this.editor.model,o=e.getSelectionAffectedTableCells(t.document.selection),n=o[0],i=o.pop(),l=n.findAncestor("table"),r=e.getCellLocation(n),s=e.getCellLocation(i),a=Math.min(r.column,s.column),c=Math.max(r.column,s.column),d=[];for(const e of new f(l,{startColumn:a,endColumn:c}))d.push(t.createRangeOn(e.cell));t.change((e=>{e.setSelection(d)}))}}function te(e){e.document.registerPostFixer((t=>function(e,t){const o=t.document.differ.getChanges();let n=!1;const i=new Set;for(const t of o){let o;"table"==t.name&&"insert"==t.type&&(o=t.position.nodeAfter),"tableRow"!=t.name&&"tableCell"!=t.name||(o=t.position.findAncestor("table")),ie(t)&&(o=t.range.start.findAncestor("table")),o&&!i.has(o)&&(n=oe(o,e)||n,n=ne(o,e)||n,i.add(o))}return n}(t,e)))}function oe(e,t){let o=!1;const n=function(e){const t=parseInt(e.getAttribute("headingRows")||0),o=Array.from(e.getChildren()).reduce(((e,t)=>t.is("element","tableRow")?e+1:e),0),n=[];for(const{row:i,cell:l,cellHeight:r}of new f(e)){if(r<2)continue;const e=i<t?t:o;if(i+r>e){const t=e-i;n.push({cell:l,rowspan:t})}}return n}(e);if(n.length){o=!0;for(const e of n)c("rowspan",e.rowspan,e.cell,t,1)}return o}function ne(e,t){let o=!1;const n=function(e){const t=new Array(e.childCount).fill(0);for(const{rowIndex:o}of new f(e,{includeAllSlots:!0}))t[o]++;return t}(e),i=[];for(const[t,o]of n.entries())!o&&e.getChild(t).is("element","tableRow")&&i.push(t);if(i.length){o=!0;for(const o of i.reverse())t.remove(e.getChild(o)),n.splice(o,1)}const l=n.filter(((t,o)=>e.getChild(o).is("element","tableRow"))),r=l[0];if(!l.every((e=>e===r))){const n=l.reduce(((e,t)=>t>e?t:e),0);for(const[i,r]of l.entries()){const l=n-r;if(l){for(let o=0;o<l;o++)d(t,t.createPositionAt(e.getChild(i),"end"));o=!0}}}return o}function ie(e){const t="attribute"===e.type,o=e.attributeKey;return t&&("headingRows"===o||"colspan"===o||"rowspan"===o)}function le(e){e.document.registerPostFixer((t=>function(e,t){const o=t.document.differ.getChanges();let n=!1;for(const t of o)"insert"==t.type&&"table"==t.name&&(n=re(t.position.nodeAfter,e)||n),"insert"==t.type&&"tableRow"==t.name&&(n=se(t.position.nodeAfter,e)||n),"insert"==t.type&&"tableCell"==t.name&&(n=ae(t.position.nodeAfter,e)||n),ce(t)&&(n=ae(t.position.parent,e)||n);return n}(t,e)))}function re(e,t){let o=!1;for(const n of e.getChildren())n.is("element","tableRow")&&(o=se(n,t)||o);return o}function se(e,t){let o=!1;for(const n of e.getChildren())o=ae(n,t)||o;return o}function ae(e,t){if(0==e.childCount)return t.insertElement("paragraph",e),!0;const o=Array.from(e.getChildren()).filter((e=>e.is("$text")));for(const e of o)t.wrap(t.createRangeOn(e),"paragraph");return!!o.length}function ce(e){return!(!e.position||!e.position.parent.is("element","tableCell"))&&("insert"==e.type&&"$text"==e.name||"remove"==e.type)}function de(e,t){if(!e.is("element","paragraph"))return!1;const o=t.toViewElement(e);return!!o&&C(e)!==o.is("element","span")}var ue=o(62),he=o.n(ue),be=o(482),me={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(be.Z,me);be.Z.locals;class ge extends e.Plugin{static get pluginName(){return"TableEditing"}static get requires(){return[U]}init(){const e=this.editor,t=e.model,o=t.schema,n=e.conversion,i=e.plugins.get(U);o.register("table",{inheritAllFrom:"$blockObject",allowAttributes:["headingRows","headingColumns"]}),o.register("tableRow",{allowIn:"table",isLimit:!0}),o.register("tableCell",{allowContentOf:"$container",allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0,isSelectable:!0}),n.for("upcast").add((e=>{e.on("element:figure",((e,t,o)=>{if(!o.consumable.test(t.viewItem,{name:!0,classes:"table"}))return;const n=function(e){for(const t of e.getChildren())if(t.is("element","table"))return t}(t.viewItem);if(!n||!o.consumable.test(n,{name:!0}))return;o.consumable.consume(t.viewItem,{name:!0,classes:"table"});const i=o.convertItem(n,t.modelCursor),l=(0,b.first)(i.modelRange.getItems());l?(o.convertChildren(t.viewItem,o.writer.createPositionAt(l,"end")),o.updateConversionResult(l,t)):o.consumable.revert(t.viewItem,{name:!0,classes:"table"})}))})),n.for("upcast").add(m()),n.for("editingDowncast").elementToStructure({model:{name:"table",attributes:["headingRows"]},view:k(i,{asWidget:!0})}),n.for("dataDowncast").elementToStructure({model:{name:"table",attributes:["headingRows"]},view:k(i)}),n.for("upcast").elementToElement({model:"tableRow",view:"tr"}),n.for("upcast").add((e=>{e.on("element:tr",((e,t)=>{t.viewItem.isEmpty&&0==t.modelCursor.index&&e.stop()}),{priority:"high"})})),n.for("downcast").elementToElement({model:"tableRow",view:(e,{writer:t})=>e.isEmpty?t.createEmptyElement("tr"):t.createContainerElement("tr")}),n.for("upcast").elementToElement({model:"tableCell",view:"td"}),n.for("upcast").elementToElement({model:"tableCell",view:"th"}),n.for("upcast").add(g("td")),n.for("upcast").add(g("th")),n.for("editingDowncast").elementToElement({model:"tableCell",view:_({asWidget:!0})}),n.for("dataDowncast").elementToElement({model:"tableCell",view:_()}),n.for("editingDowncast").elementToElement({model:"paragraph",view:v({asWidget:!0}),converterPriority:"high"}),n.for("dataDowncast").elementToElement({model:"paragraph",view:v(),converterPriority:"high"}),n.for("downcast").attributeToAttribute({model:"colspan",view:"colspan"}),n.for("upcast").attributeToAttribute({model:{key:"colspan",value:pe("colspan")},view:"colspan"}),n.for("downcast").attributeToAttribute({model:"rowspan",view:"rowspan"}),n.for("upcast").attributeToAttribute({model:{key:"rowspan",value:pe("rowspan")},view:"rowspan"}),e.data.mapper.on("modelToViewPosition",((e,t)=>{const o=t.modelPosition.parent,n=t.modelPosition.nodeBefore;if(!o.is("element","tableCell"))return;if(!n||!n.is("element","paragraph"))return;const i=t.mapper.toViewElement(n),l=t.mapper.toViewElement(o);i===l&&(t.viewPosition=t.mapper.findPositionIn(l,n.maxOffset))})),e.config.define("table.defaultHeadings.rows",0),e.config.define("table.defaultHeadings.columns",0),e.commands.add("insertTable",new y(e)),e.commands.add("insertTableRowAbove",new T(e,{order:"above"})),e.commands.add("insertTableRowBelow",new T(e,{order:"below"})),e.commands.add("insertTableColumnLeft",new A(e,{order:"left"})),e.commands.add("insertTableColumnRight",new A(e,{order:"right"})),e.commands.add("removeTableRow",new H(e)),e.commands.add("removeTableColumn",new M(e)),e.commands.add("splitTableCellVertically",new x(e,{direction:"vertically"})),e.commands.add("splitTableCellHorizontally",new x(e,{direction:"horizontally"})),e.commands.add("mergeTableCells",new G(e)),e.commands.add("mergeTableCellRight",new F(e,{direction:"right"})),e.commands.add("mergeTableCellLeft",new F(e,{direction:"left"})),e.commands.add("mergeTableCellDown",new F(e,{direction:"down"})),e.commands.add("mergeTableCellUp",new F(e,{direction:"up"})),e.commands.add("setTableColumnHeader",new j(e)),e.commands.add("setTableRowHeader",new O(e)),e.commands.add("selectTableRow",new Q(e)),e.commands.add("selectTableColumn",new ee(e)),te(t),le(t),this.listenTo(t.document,"change:data",(()=>{!function(e,t){const o=e.document.differ;for(const e of o.getChanges()){let o,n=!1;if("attribute"==e.type){const t=e.range.start.nodeAfter;if(!t||!t.is("element","table"))continue;if("headingRows"!=e.attributeKey&&"headingColumns"!=e.attributeKey)continue;o=t,n="headingRows"==e.attributeKey}else"tableRow"!=e.name&&"tableCell"!=e.name||(o=e.position.findAncestor("table"),n="tableRow"==e.name);if(!o)continue;const i=o.getAttribute("headingRows")||0,l=o.getAttribute("headingColumns")||0,r=new f(o);for(const e of r){const o=e.row<i||e.column<l?"th":"td",r=t.mapper.toViewElement(e.cell);r&&r.is("element")&&r.name!=o&&t.reconvertItem(n?e.cell.parent:e.cell)}}}(t,e.editing),function(e,t){const o=e.document.differ,n=new Set;for(const e of o.getChanges()){const t="attribute"==e.type?e.range.start.parent:e.position.parent;t.is("element","tableCell")&&n.add(t)}for(const e of n.values()){const o=Array.from(e.getChildren()).filter((e=>de(e,t.mapper)));for(const e of o)t.reconvertItem(e)}}(t,e.editing)}))}}function pe(e){return t=>{const o=parseInt(t.getAttribute(e));return Number.isNaN(o)||o<=0?null:o}}var fe=o(273),we=o(272),ke={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(we.Z,ke);we.Z.locals;class _e extends fe.View{constructor(e){super(e);const t=this.bindTemplate;this.items=this._createGridCollection(),this.keystrokes=new b.KeystrokeHandler,this.focusTracker=new b.FocusTracker,this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",((e,t)=>`${t} × ${e}`)),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":t.to("boxover")},children:this.items},{tag:"div",attributes:{class:["ck","ck-insert-table-dropdown__label"],"aria-hidden":!0},children:[{text:t.to("label")}]}],on:{mousedown:t.to((e=>{e.preventDefault()})),click:t.to((()=>{this.fire("execute")}))}}),this.on("boxover",((e,t)=>{const{row:o,column:n}=t.target.dataset;this.items.get(10*(parseInt(o,10)-1)+(parseInt(n,10)-1)).focus()})),this.focusTracker.on("change:focusedElement",((e,t,o)=>{if(!o)return;const{row:n,column:i}=o.dataset;this.set({rows:parseInt(n),columns:parseInt(i)})})),this.on("change:columns",(()=>this._highlightGridBoxes())),this.on("change:rows",(()=>this._highlightGridBoxes()))}render(){super.render(),(0,fe.addKeyboardHandlingForGrid)({keystrokeHandler:this.keystrokes,focusTracker:this.focusTracker,gridItems:this.items,numberOfColumns:10,uiLanguageDirection:this.locale&&this.locale.uiLanguageDirection});for(const e of this.items)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element)}focus(){this.items.get(0).focus()}focusLast(){this.items.get(0).focus()}_highlightGridBoxes(){const e=this.rows,t=this.columns;this.items.map(((o,n)=>{const i=Math.floor(n/10)<e&&n%10<t;o.set("isOn",i)}))}_createGridButton(e,t,o,n){const i=new fe.ButtonView(e);return i.set({label:n,class:"ck-insert-table-dropdown-grid-box"}),i.extendTemplate({attributes:{"data-row":t,"data-column":o}}),i}_createGridCollection(){const e=[];for(let t=0;t<100;t++){const o=Math.floor(t/10),n=t%10,i=`${o+1} × ${n+1}`;e.push(this._createGridButton(this.locale,o+1,n+1,i))}return this.createCollection(e)}}class ve extends e.Plugin{static get pluginName(){return"TableUI"}init(){const e=this.editor,t=this.editor.t,o="ltr"===e.locale.contentLanguageDirection;e.ui.componentFactory.add("insertTable",(o=>{const n=e.commands.get("insertTable"),i=(0,fe.createDropdown)(o);let l;return i.bind("isEnabled").to(n),i.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',label:t("Insert table"),tooltip:!0}),i.on("change:isOpen",(()=>{l||(l=new _e(o),i.panelView.children.add(l),l.delegate("execute").to(i),i.on("execute",(()=>{e.execute("insertTable",{rows:l.rows,columns:l.columns}),e.editing.view.focus()})))})),i})),e.ui.componentFactory.add("tableColumn",(e=>{const n=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:t("Header column"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:o?"insertTableColumnLeft":"insertTableColumnRight",label:t("Insert column left")}},{type:"button",model:{commandName:o?"insertTableColumnRight":"insertTableColumnLeft",label:t("Insert column right")}},{type:"button",model:{commandName:"removeTableColumn",label:t("Delete column")}},{type:"button",model:{commandName:"selectTableColumn",label:t("Select column")}}];return this._prepareDropdown(t("Column"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',n,e)})),e.ui.componentFactory.add("tableRow",(e=>{const o=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:t("Header row"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowAbove",label:t("Insert row above")}},{type:"button",model:{commandName:"insertTableRowBelow",label:t("Insert row below")}},{type:"button",model:{commandName:"removeTableRow",label:t("Delete row")}},{type:"button",model:{commandName:"selectTableRow",label:t("Select row")}}];return this._prepareDropdown(t("Row"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',o,e)})),e.ui.componentFactory.add("mergeTableCells",(e=>{const n=[{type:"button",model:{commandName:"mergeTableCellUp",label:t("Merge cell up")}},{type:"button",model:{commandName:o?"mergeTableCellRight":"mergeTableCellLeft",label:t("Merge cell right")}},{type:"button",model:{commandName:"mergeTableCellDown",label:t("Merge cell down")}},{type:"button",model:{commandName:o?"mergeTableCellLeft":"mergeTableCellRight",label:t("Merge cell left")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:t("Split cell vertically")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:t("Split cell horizontally")}}];return this._prepareMergeSplitButtonDropdown(t("Merge cells"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',n,e)}))}_prepareDropdown(e,t,o,n){const i=this.editor,l=(0,fe.createDropdown)(n),r=this._fillDropdownWithListOptions(l,o);return l.buttonView.set({label:e,icon:t,tooltip:!0}),l.bind("isEnabled").toMany(r,"isEnabled",((...e)=>e.some((e=>e)))),this.listenTo(l,"execute",(e=>{i.execute(e.source.commandName),e.source instanceof fe.SwitchButtonView||i.editing.view.focus()})),l}_prepareMergeSplitButtonDropdown(e,t,o,n){const i=this.editor,l=(0,fe.createDropdown)(n,fe.SplitButtonView),r="mergeTableCells",s=i.commands.get(r),a=this._fillDropdownWithListOptions(l,o);return l.buttonView.set({label:e,icon:t,tooltip:!0,isEnabled:!0}),l.bind("isEnabled").toMany([s,...a],"isEnabled",((...e)=>e.some((e=>e)))),this.listenTo(l.buttonView,"execute",(()=>{i.execute(r),i.editing.view.focus()})),this.listenTo(l,"execute",(e=>{i.execute(e.source.commandName),i.editing.view.focus()})),l}_fillDropdownWithListOptions(e,t){const o=this.editor,n=[],i=new b.Collection;for(const e of t)Ce(e,o,n,i);return(0,fe.addListToDropdown)(e,i,o.ui.componentFactory),n}}function Ce(e,t,o,n){const i=e.model=new fe.Model(e.model),{commandName:l,bindIsOn:r}=e.model;if("button"===e.type||"switchbutton"===e.type){const e=t.commands.get(l);o.push(e),i.set({commandName:l}),i.bind("isEnabled").to(e),r&&i.bind("isOn").to(e,"value")}i.set({withText:!0}),n.add(e)}var ye=o(475),Te={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(ye.Z,Te);ye.Z.locals;class Ae extends e.Plugin{static get pluginName(){return"TableSelection"}static get requires(){return[U,U]}init(){const e=this.editor,t=e.model,o=e.editing.view;this.listenTo(t,"deleteContent",((e,t)=>this._handleDeleteContent(e,t)),{priority:"high"}),this.listenTo(o.document,"insertText",((e,t)=>this._handleInsertTextEvent(e,t)),{priority:"high"}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){const e=this.editor.plugins.get(U),t=this.editor.model.document.selection,o=e.getSelectedTableCells(t);return 0==o.length?null:o}getSelectionAsFragment(){const e=this.editor.plugins.get(U),t=this.getSelectedTableCells();return t?this.editor.model.change((o=>{const n=o.createDocumentFragment(),{first:i,last:l}=e.getColumnIndexes(t),{first:r,last:s}=e.getRowIndexes(t),a=t[0].findAncestor("table");let c=s,d=l;if(e.isSelectionRectangular(t)){const e={firstColumn:i,lastColumn:l,firstRow:r,lastRow:s};c=L(a,e),d=N(a,e)}const u=V(a,{startRow:r,startColumn:i,endRow:c,endColumn:d},o);return o.insert(u,n,0),n})):null}setCellSelection(e,t){const o=this._getCellsToSelect(e,t);this.editor.model.change((e=>{e.setSelection(o.cells.map((t=>e.createRangeOn(t))),{backward:o.backward})}))}getFocusCell(){const e=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return e&&e.is("element","tableCell")?e:null}getAnchorCell(){const e=this.editor.model.document.selection,t=(0,b.first)(e.getRanges()).getContainedElement();return t&&t.is("element","tableCell")?t:null}_defineSelectionConverter(){const e=this.editor,t=new Set;e.conversion.for("editingDowncast").add((e=>e.on("selection",((e,o,n)=>{const i=n.writer;!function(e){for(const o of t)e.removeClass("ck-editor__editable_selected",o);t.clear()}(i);const l=this.getSelectedTableCells();if(!l)return;for(const e of l){const o=n.mapper.toViewElement(e);i.addClass("ck-editor__editable_selected",o),t.add(o)}const r=n.mapper.toViewElement(l[l.length-1]);i.setSelection(r,0)}),{priority:"lowest"})))}_enablePluginDisabling(){const e=this.editor;this.on("change:isEnabled",(()=>{if(!this.isEnabled){const t=this.getSelectedTableCells();if(!t)return;e.model.change((o=>{const n=o.createPositionAt(t[0],0),i=e.model.schema.getNearestSelectionRange(n);o.setSelection(i)}))}}))}_handleDeleteContent(e,t){const o=this.editor.plugins.get(U),[n,i]=t,l=this.editor.model,r=!i||"backward"==i.direction,s=o.getSelectedTableCells(n);s.length&&(e.stop(),l.change((e=>{const t=s[r?s.length-1:0];l.change((e=>{for(const t of s)l.deleteContent(e.createSelection(t,"in"))}));const o=l.schema.getNearestSelectionRange(e.createPositionAt(t,0));n.is("documentSelection")?e.setSelection(o):n.setTo(o)})))}_handleInsertTextEvent(e,t){const o=this.editor,n=o.model.document.selection,i=this.getSelectedTableCells(n);if(!i)return;const l=o.editing.view,r=o.editing.mapper,s=i.map((e=>l.createRangeOn(r.toViewElement(e))));t.selection=l.createSelection(s)}_getCellsToSelect(e,t){const o=this.editor.plugins.get("TableUtils"),n=o.getCellLocation(e),i=o.getCellLocation(t),l=Math.min(n.row,i.row),r=Math.max(n.row,i.row),s=Math.min(n.column,i.column),a=Math.max(n.column,i.column),c=new Array(r-l+1).fill(null).map((()=>[])),d={startRow:l,endRow:r,startColumn:s,endColumn:a};for(const{row:t,cell:o}of new f(e.findAncestor("table"),d))c[t-l].push(o);const u=i.row<n.row,h=i.column<n.column;return u&&c.reverse(),h&&c.forEach((e=>e.reverse())),{cells:c.flat(),backward:u||h}}}class xe extends e.Plugin{static get pluginName(){return"TableClipboard"}static get requires(){return[Ae,U]}init(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"copy",((e,t)=>this._onCopyCut(e,t))),this.listenTo(t,"cut",((e,t)=>this._onCopyCut(e,t))),this.listenTo(e.model,"insertContent",((e,t)=>this._onInsertContent(e,...t)),{priority:"high"}),this.decorate("_replaceTableSlotCell")}_onCopyCut(e,t){const o=this.editor.plugins.get(Ae);if(!o.getSelectedTableCells())return;if("cut"==e.name&&this.editor.isReadOnly)return;t.preventDefault(),e.stop();const n=this.editor.data,i=this.editor.editing.view.document,l=n.toView(o.getSelectionAsFragment());i.fire("clipboardOutput",{dataTransfer:t.dataTransfer,content:l,method:e.name})}_onInsertContent(e,t,o){if(o&&!o.is("documentSelection"))return;const n=this.editor.model,i=this.editor.plugins.get(U);let l=Ve(t,n);if(!l)return;const r=i.getSelectionAffectedTableCells(n.document.selection);r.length?(e.stop(),n.change((e=>{const t={width:i.getColumns(l),height:i.getRows(l)},o=function(e,t,o,n){const i=e[0].findAncestor("table"),l=n.getColumnIndexes(e),r=n.getRowIndexes(e),s={firstColumn:l.first,lastColumn:l.last,firstRow:r.first,lastRow:r.last},a=1===e.length;a&&(s.lastRow+=t.height-1,s.lastColumn+=t.width-1,function(e,t,o,n){const i=n.getColumns(e),l=n.getRows(e);o>i&&n.insertColumns(e,{at:i,columns:o-i});t>l&&n.insertRows(e,{at:l,rows:t-l})}(i,s.lastRow+1,s.lastColumn+1,n));a||!n.isSelectionRectangular(e)?function(e,t,o){const{firstRow:n,lastRow:i,firstColumn:l,lastColumn:r}=t,s={first:n,last:i},a={first:l,last:r};Re(e,l,s,o),Re(e,r+1,s,o),Se(e,n,a,o),Se(e,i+1,a,o,n)}(i,s,o):(s.lastRow=L(i,s),s.lastColumn=N(i,s));return s}(r,t,e,i),n=o.lastRow-o.firstRow+1,s=o.lastColumn-o.firstColumn+1,a={startRow:0,startColumn:0,endRow:Math.min(n,t.height)-1,endColumn:Math.min(s,t.width)-1};l=V(l,a,e);const c=r[0].findAncestor("table"),d=this._replaceSelectedCellsWithPasted(l,t,c,o,e);if(this.editor.plugins.get("TableSelection").isEnabled){const t=i.sortRanges(d.map((t=>e.createRangeOn(t))));e.setSelection(t)}else e.setSelection(d[0],0)}))):W(l,i)}_replaceSelectedCellsWithPasted(e,t,o,n,i){const{width:l,height:r}=t,s=function(e,t,o){const n=new Array(o).fill(null).map((()=>new Array(t).fill(null)));for(const{column:t,row:o,cell:i}of new f(e))n[o][t]=i;return n}(e,l,r),a=[...new f(o,{startRow:n.firstRow,endRow:n.lastRow,startColumn:n.firstColumn,endColumn:n.lastColumn,includeAllSlots:!0})],c=[];let d;for(const e of a){const{row:t,column:o}=e;o===n.firstColumn&&(d=e.getPositionBefore());const a=t-n.firstRow,u=o-n.firstColumn,h=s[a%r][u%l],b=h?i.cloneElement(h):null,m=this._replaceTableSlotCell(e,b,d,i);m&&(E(m,t,o,n.lastRow,n.lastColumn,i),c.push(m),d=i.createPositionAfter(m))}const u=parseInt(o.getAttribute("headingRows")||0),h=parseInt(o.getAttribute("headingColumns")||0),b=n.firstRow<u&&u<=n.lastRow,m=n.firstColumn<h&&h<=n.lastColumn;if(b){const e=Se(o,u,{first:n.firstColumn,last:n.lastColumn},i,n.firstRow);c.push(...e)}if(m){const e=Re(o,h,{first:n.firstRow,last:n.lastRow},i);c.push(...e)}return c}_replaceTableSlotCell(e,t,o,n){const{cell:i,isAnchor:l}=e;return l&&n.remove(i),t?(n.insert(t,o),t):null}getTableIfOnlyTableInContent(e,t){return Ve(e,t)}}function Ve(e,t){if(!e.is("documentFragment")&&!e.is("element"))return null;if(e.is("element","table"))return e;if(1==e.childCount&&e.getChild(0).is("element","table"))return e.getChild(0);const o=t.createRangeIn(e);for(const e of o.getItems())if(e.is("element","table")){const n=t.createRange(o.start,t.createPositionBefore(e));if(t.hasContent(n,{ignoreWhitespaces:!0}))return null;const i=t.createRange(t.createPositionAfter(e),o.end);return t.hasContent(i,{ignoreWhitespaces:!0})?null:e}return null}function Se(e,t,o,n,i=0){if(t<1)return;return S(e,t,i).filter((({column:e,cellWidth:t})=>Ie(e,t,o))).map((({cell:e})=>R(e,t,n)))}function Re(e,t,o,n){if(t<1)return;return I(e,t).filter((({row:e,cellHeight:t})=>Ie(e,t,o))).map((({cell:e,column:o})=>P(e,o,t,n)))}function Ie(e,t,o){const n=e+t-1,{first:i,last:l}=o;return e>=i&&e<=l||e<i&&n>=i}class Pe extends e.Plugin{static get pluginName(){return"TableKeyboard"}static get requires(){return[Ae,U]}init(){const e=this.editor.editing.view.document;this.listenTo(e,"arrowKey",((...e)=>this._onArrowKey(...e)),{context:"table"}),this.listenTo(e,"tab",((...e)=>this._handleTabOnSelectedTable(...e)),{context:"figure"}),this.listenTo(e,"tab",((...e)=>this._handleTab(...e)),{context:["th","td"]})}_handleTabOnSelectedTable(e,t){const o=this.editor,n=o.model.document.selection.getSelectedElement();n&&n.is("element","table")&&(t.preventDefault(),t.stopPropagation(),e.stop(),o.model.change((e=>{e.setSelection(e.createRangeIn(n.getChild(0).getChild(0)))})))}_handleTab(e,t){const o=this.editor,n=this.editor.plugins.get(U),i=o.model.document.selection,l=!t.shiftKey;let r=n.getTableCellsContainingSelection(i)[0];if(r||(r=this.editor.plugins.get("TableSelection").getFocusCell()),!r)return;t.preventDefault(),t.stopPropagation(),e.stop();const s=r.parent,a=s.parent,c=a.getChildIndex(s),d=s.getChildIndex(r),u=0===d;if(!l&&u&&0===c)return void o.model.change((e=>{e.setSelection(e.createRangeOn(a))}));const h=d===s.childCount-1,b=c===n.getRows(a)-1;if(l&&b&&h&&(o.execute("insertTableRowBelow"),c===n.getRows(a)-1))return void o.model.change((e=>{e.setSelection(e.createRangeOn(a))}));let m;if(l&&h){const e=a.getChild(c+1);m=e.getChild(0)}else if(!l&&u){const e=a.getChild(c-1);m=e.getChild(e.childCount-1)}else m=s.getChild(d+(l?1:-1));o.model.change((e=>{e.setSelection(e.createRangeIn(m))}))}_onArrowKey(e,t){const o=this.editor,n=t.keyCode,i=(0,b.getLocalizedArrowKeyCodeDirection)(n,o.locale.contentLanguageDirection);this._handleArrowKeys(i,t.shiftKey)&&(t.preventDefault(),t.stopPropagation(),e.stop())}_handleArrowKeys(e,t){const o=this.editor.plugins.get(U),n=this.editor.model,i=n.document.selection,l=["right","down"].includes(e),r=o.getSelectedTableCells(i);if(r.length){let o;return o=t?this.editor.plugins.get("TableSelection").getFocusCell():l?r[r.length-1]:r[0],this._navigateFromCellInDirection(o,e,t),!0}const s=i.focus.findAncestor("tableCell");if(!s)return!1;if(!i.isCollapsed)if(t){if(i.isBackward==l&&!i.containsEntireContent(s))return!1}else{const e=i.getSelectedElement();if(!e||!n.schema.isObject(e))return!1}return!!this._isSelectionAtCellEdge(i,s,l)&&(this._navigateFromCellInDirection(s,e,t),!0)}_isSelectionAtCellEdge(e,t,o){const n=this.editor.model,i=this.editor.model.schema,l=o?e.getLastPosition():e.getFirstPosition();if(!i.getLimitElement(l).is("element","tableCell")){return n.createPositionAt(t,o?"end":0).isTouching(l)}const r=n.createSelection(l);return n.modifySelection(r,{direction:o?"forward":"backward"}),l.isEqual(r.focus)}_navigateFromCellInDirection(e,t,o=!1){const n=this.editor.model,i=e.findAncestor("table"),l=[...new f(i,{includeAllSlots:!0})],{row:r,column:s}=l[l.length-1],a=l.find((({cell:t})=>t==e));let{row:c,column:d}=a;switch(t){case"left":d--;break;case"up":c--;break;case"right":d+=a.cellWidth;break;case"down":c+=a.cellHeight}if(c<0||c>r||d<0&&c<=0||d>s&&c>=r)return void n.change((e=>{e.setSelection(e.createRangeOn(i))}));d<0?(d=o?0:s,c--):d>s&&(d=o?s:0,c++);const u=l.find((e=>e.row==c&&e.column==d)).cell,h=["right","down"].includes(t),b=this.editor.plugins.get("TableSelection");if(o&&b.isEnabled){const t=b.getAnchorCell()||e;b.setCellSelection(t,u)}else{const e=n.createPositionAt(u,h?0:"end");n.change((t=>{t.setSelection(e)}))}}}var Ee=o(492);class ze extends Ee.DomEventObserver{constructor(e){super(e),this.domEventType=["mousemove","mouseleave"]}onDomEvent(e){this.fire(e.type,e)}}class Be extends e.Plugin{static get pluginName(){return"TableMouse"}static get requires(){return[Ae,U]}init(){this.editor.editing.view.addObserver(ze),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){const e=this.editor,t=e.plugins.get(U);let o=!1;const n=e.plugins.get(Ae);this.listenTo(e.editing.view.document,"mousedown",((i,l)=>{const r=e.model.document.selection;if(!this.isEnabled||!n.isEnabled)return;if(!l.domEvent.shiftKey)return;const s=n.getAnchorCell()||t.getTableCellsContainingSelection(r)[0];if(!s)return;const a=this._getModelTableCellFromDomEvent(l);a&&We(s,a)&&(o=!0,n.setCellSelection(s,a),l.preventDefault())})),this.listenTo(e.editing.view.document,"mouseup",(()=>{o=!1})),this.listenTo(e.editing.view.document,"selectionChange",(e=>{o&&e.stop()}),{priority:"highest"})}_enableMouseDragSelection(){const e=this.editor;let t,o,n=!1,i=!1;const l=e.plugins.get(Ae);this.listenTo(e.editing.view.document,"mousedown",((e,o)=>{this.isEnabled&&l.isEnabled&&(o.domEvent.shiftKey||o.domEvent.ctrlKey||o.domEvent.altKey||(t=this._getModelTableCellFromDomEvent(o)))})),this.listenTo(e.editing.view.document,"mousemove",((e,r)=>{if(!r.domEvent.buttons)return;if(!t)return;const s=this._getModelTableCellFromDomEvent(r);s&&We(t,s)&&(o=s,n||o==t||(n=!0)),n&&(i=!0,l.setCellSelection(t,o),r.preventDefault())})),this.listenTo(e.editing.view.document,"mouseup",(()=>{n=!1,i=!1,t=null,o=null})),this.listenTo(e.editing.view.document,"selectionChange",(e=>{i&&e.stop()}),{priority:"highest"})}_getModelTableCellFromDomEvent(e){const t=e.target,o=this.editor.editing.view.createPositionAt(t,0);return this.editor.editing.mapper.toModelPosition(o).parent.findAncestor("tableCell",{includeSelf:!0})}}function We(e,t){return e.parent.parent==t.parent.parent}var Le=o(660),Ne={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(Le.Z,Ne);Le.Z.locals;class Fe extends e.Plugin{static get requires(){return[ge,ve,Ae,Be,Pe,xe,t.Widget]}static get pluginName(){return"Table"}}class De extends e.Plugin{static get pluginName(){return"PlainTableOutput"}static get requires(){return[Fe]}init(){const e=this.editor;e.conversion.for("dataDowncast").elementToStructure({model:"table",view:He,converterPriority:"high"}),e.plugins.has("TableCaption")&&e.conversion.for("dataDowncast").elementToElement({model:"caption",view:(e,{writer:t})=>{if("table"===e.parent.name)return t.createContainerElement("caption")},converterPriority:"high"}),e.plugins.has("TableProperties")&&function(e){const t={"border-width":"tableBorderWidth","border-color":"tableBorderColor","border-style":"tableBorderStyle","background-color":"tableBackgroundColor"};for(const[o,n]of Object.entries(t))e.conversion.for("dataDowncast").add((e=>e.on(`attribute:${n}:table`,((e,t,n)=>{const{item:i,attributeNewValue:l}=t,{mapper:r,writer:s}=n;if(!n.consumable.consume(i,e.name))return;const a=r.toViewElement(i);l?s.setStyle(o,l,a):s.removeStyle(o,a)}),{priority:"high"})))}(e)}}function He(e,{writer:t}){const o=e.getAttribute("headingRows")||0,n=t.createSlot((e=>e.is("element","tableRow")&&e.index<o)),i=t.createSlot((e=>e.is("element","tableRow")&&e.index>=o)),l=t.createSlot((e=>!e.is("element","tableRow"))),r=t.createContainerElement("thead",null,n),s=t.createContainerElement("tbody",null,i),a=[];return o&&a.push(r),o<e.childCount&&a.push(s),t.createContainerElement("table",null,[l,...a])}function Me(e){const t=e.getSelectedElement();return t&&je(t)?t:null}function Oe(e){const t=e.getFirstPosition();if(!t)return null;let o=t.parent;for(;o;){if(o.is("element")&&je(o))return o;o=o.parent}return null}function je(e){return!!e.getCustomProperty("table")&&(0,t.isWidget)(e)}class Ue extends e.Plugin{static get requires(){return[t.WidgetToolbarRepository]}static get pluginName(){return"TableToolbar"}afterInit(){const e=this.editor,o=e.t,n=e.plugins.get(t.WidgetToolbarRepository),i=e.config.get("table.contentToolbar"),l=e.config.get("table.tableToolbar");i&&n.register("tableContent",{ariaLabel:o("Table toolbar"),items:i,getRelatedElement:Oe}),l&&n.register("table",{ariaLabel:o("Table toolbar"),items:l,getRelatedElement:Me})}}var $e=o(252),Ze={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()($e.Z,Ze);$e.Z.locals;class Ke extends fe.View{constructor(e,t){super(e),this.set("value",""),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isEmpty",!0),this.options=t,this.focusTracker=new b.FocusTracker,this._focusables=new fe.ViewCollection,this.dropdownView=this._createDropdownView(),this.inputView=this._createInputTextView(),this.keystrokes=new b.KeystrokeHandler,this._stillTyping=!1,this._focusCycler=new fe.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-input-color"]},children:[this.dropdownView,this.inputView]}),this.on("change:value",((e,t,o)=>this._setInputValue(o)))}render(){super.render(),this.keystrokes.listenTo(this.dropdownView.panelView.element)}focus(){this.inputView.focus()}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}_createDropdownView(){const e=this.locale,t=e.t,o=this.bindTemplate,n=this._createColorGrid(e),i=(0,fe.createDropdown)(e),l=new fe.View,r=this._createRemoveColorButton();return l.setTemplate({tag:"span",attributes:{class:["ck","ck-input-color__button__preview"],style:{backgroundColor:o.to("value")}},children:[{tag:"span",attributes:{class:["ck","ck-input-color__button__preview__no-color-indicator",o.if("value","ck-hidden",(e=>""!=e))]}}]}),i.buttonView.extendTemplate({attributes:{class:"ck-input-color__button"}}),i.buttonView.children.add(l),i.buttonView.label=t("Color picker"),i.buttonView.tooltip=!0,i.panelPosition="rtl"===e.uiLanguageDirection?"se":"sw",i.panelView.children.add(r),i.panelView.children.add(n),i.bind("isEnabled").to(this,"isReadOnly",(e=>!e)),this._focusables.add(r),this._focusables.add(n),this.focusTracker.add(r.element),this.focusTracker.add(n.element),i}_createInputTextView(){const e=this.locale,t=new fe.InputTextView(e);return t.extendTemplate({on:{blur:t.bindTemplate.to("blur")}}),t.value=this.value,t.bind("isReadOnly","hasError").to(this),this.bind("isFocused","isEmpty").to(t),t.on("input",(()=>{const e=t.element.value,o=this.options.colorDefinitions.find((t=>e===t.label));this._stillTyping=!0,this.value=o&&o.color||e})),t.on("blur",(()=>{this._stillTyping=!1,this._setInputValue(t.element.value)})),t.delegate("input").to(this),t}_createRemoveColorButton(){const t=this.locale,o=t.t,n=new fe.ButtonView(t),i=this.options.defaultColorValue||"",l=o(i?"Restore default":"Remove color");return n.class="ck-input-color__remove-color",n.withText=!0,n.icon=e.icons.eraser,n.label=l,n.on("execute",(()=>{this.value=i,this.dropdownView.isOpen=!1,this.fire("input")})),n}_createColorGrid(e){const t=new fe.ColorGridView(e,{colorDefinitions:this.options.colorDefinitions,columns:this.options.columns});return t.on("execute",((e,t)=>{this.value=t.value,this.dropdownView.isOpen=!1,this.fire("input")})),t.bind("selectedColor").to(this,"value"),t}_setInputValue(e){if(!this._stillTyping){const t=qe(e),o=this.options.colorDefinitions.find((e=>t===qe(e.color)));this.inputView.value=o?o.label:e||""}}}function qe(e){return e.replace(/([(,])\s+/g,"$1").replace(/^\s+|\s+(?=[),\s]|$)/g,"").replace(/,|\s/g," ")}const Ge=e=>""===e;function Je(e){return{none:e("None"),solid:e("Solid"),dotted:e("Dotted"),dashed:e("Dashed"),double:e("Double"),groove:e("Groove"),ridge:e("Ridge"),inset:e("Inset"),outset:e("Outset")}}function Xe(e){return e('The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".')}function Ye(e){return e('The value is invalid. Try "10px" or "2em" or simply "2".')}function Qe(e){return e=e.trim(),Ge(e)||(0,Ee.isColor)(e)}function et(e){return e=e.trim(),Ge(e)||rt(e)||(0,Ee.isLength)(e)||(0,Ee.isPercentage)(e)}function tt(e){return e=e.trim(),Ge(e)||rt(e)||(0,Ee.isLength)(e)}function ot(e,t){const o=new b.Collection,n=Je(e.t);for(const i in n){const l={type:"button",model:new fe.Model({_borderStyleValue:i,label:n[i],withText:!0})};"none"===i?l.model.bind("isOn").to(e,"borderStyle",(e=>"none"===t?!e:e===i)):l.model.bind("isOn").to(e,"borderStyle",(e=>e===i)),o.add(l)}return o}function nt(e){const{view:t,icons:o,toolbar:n,labels:i,propertyName:l,nameToValue:r,defaultValue:s}=e;for(const e in i){const a=new fe.ButtonView(t.locale);a.set({label:i[e],icon:o[e],tooltip:i[e]});const c=r?r(e):e;a.bind("isOn").to(t,l,(e=>{let t=e;return""===e&&s&&(t=s),c===t})),a.on("execute",(()=>{t[l]=c})),n.items.add(a)}}const it=[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}];function lt(e){return(t,o,n)=>{const i=new Ke(t.locale,{colorDefinitions:(l=e.colorConfig,l.map((e=>({color:e.model,label:e.label,options:{hasBorder:e.hasBorder}})))),columns:e.columns,defaultColorValue:e.defaultColorValue});var l;return i.inputView.set({id:o,ariaDescribedById:n}),i.bind("isReadOnly").to(t,"isEnabled",(e=>!e)),i.bind("hasError").to(t,"errorText",(e=>!!e)),i.on("input",(()=>{t.errorText=null})),t.bind("isEmpty","isFocused").to(i),i}}function rt(e){const t=parseFloat(e);return!Number.isNaN(t)&&e===String(t)}var st=o(333),at={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(st.Z,at);st.Z.locals;class ct extends fe.View{constructor(e,t={}){super(e);const o=this.bindTemplate;this.set("class",t.class||null),this.children=this.createCollection(),t.children&&t.children.forEach((e=>this.children.add(e))),this.set("_role",null),this.set("_ariaLabelledBy",null),t.labelView&&this.set({_role:"group",_ariaLabelledBy:t.labelView.id}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-form__row",o.to("class")],role:o.to("_role"),"aria-labelledby":o.to("_ariaLabelledBy")},children:this.children})}}var dt=o(934),ut={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(dt.Z,ut);dt.Z.locals;var ht=o(686),bt={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(ht.Z,bt);ht.Z.locals;var mt=o(773),gt={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(mt.Z,gt);mt.Z.locals;const pt={left:e.icons.alignLeft,center:e.icons.alignCenter,right:e.icons.alignRight,justify:e.icons.alignJustify,top:e.icons.alignTop,middle:e.icons.alignMiddle,bottom:e.icons.alignBottom};class ft extends fe.View{constructor(e,t){super(e),this.set({borderStyle:"",borderWidth:"",borderColor:"",padding:"",backgroundColor:"",width:"",height:"",horizontalAlignment:"",verticalAlignment:""}),this.options=t;const{borderStyleDropdown:o,borderWidthInput:n,borderColorInput:i,borderRowLabel:l}=this._createBorderFields(),{backgroundRowLabel:r,backgroundInput:s}=this._createBackgroundFields(),{widthInput:a,operatorLabel:c,heightInput:d,dimensionsLabel:u}=this._createDimensionFields(),{horizontalAlignmentToolbar:h,verticalAlignmentToolbar:m,alignmentLabel:g}=this._createAlignmentFields();this.focusTracker=new b.FocusTracker,this.keystrokes=new b.KeystrokeHandler,this.children=this.createCollection(),this.borderStyleDropdown=o,this.borderWidthInput=n,this.borderColorInput=i,this.backgroundInput=s,this.paddingInput=this._createPaddingField(),this.widthInput=a,this.heightInput=d,this.horizontalAlignmentToolbar=h,this.verticalAlignmentToolbar=m;const{saveButtonView:p,cancelButtonView:f}=this._createActionButtons();this.saveButtonView=p,this.cancelButtonView=f,this._focusables=new fe.ViewCollection,this._focusCycler=new fe.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.children.add(new fe.FormHeaderView(e,{label:this.t("Cell properties")})),this.children.add(new ct(e,{labelView:l,children:[l,o,i,n],class:"ck-table-form__border-row"})),this.children.add(new ct(e,{labelView:r,children:[r,s],class:"ck-table-form__background-row"})),this.children.add(new ct(e,{children:[new ct(e,{labelView:u,children:[u,a,c,d],class:"ck-table-form__dimensions-row"}),new ct(e,{children:[this.paddingInput],class:"ck-table-cell-properties-form__padding-row"})]})),this.children.add(new ct(e,{labelView:g,children:[g,h,m],class:"ck-table-cell-properties-form__alignment-row"})),this.children.add(new ct(e,{children:[this.saveButtonView,this.cancelButtonView],class:"ck-table-form__action-row"})),this.setTemplate({tag:"form",attributes:{class:["ck","ck-form","ck-table-form","ck-table-cell-properties-form"],tabindex:"-1"},children:this.children})}render(){super.render(),(0,fe.submitHandler)({view:this}),[this.borderStyleDropdown,this.borderColorInput,this.borderColorInput.fieldView.dropdownView.buttonView,this.borderWidthInput,this.backgroundInput,this.backgroundInput.fieldView.dropdownView.buttonView,this.widthInput,this.heightInput,this.paddingInput,this.horizontalAlignmentToolbar,this.verticalAlignmentToolbar,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createBorderFields(){const e=this.options.defaultTableCellProperties,t={style:e.borderStyle,width:e.borderWidth,color:e.borderColor},o=lt({colorConfig:this.options.borderColors,columns:5,defaultColorValue:t.color}),n=this.locale,i=this.t,l=new fe.LabelView(n);l.text=i("Border");const r=Je(i),s=new fe.LabeledFieldView(n,fe.createLabeledDropdown);s.set({label:i("Style"),class:"ck-table-form__border-style"}),s.fieldView.buttonView.set({isOn:!1,withText:!0,tooltip:i("Style")}),s.fieldView.buttonView.bind("label").to(this,"borderStyle",(e=>r[e||"none"])),s.fieldView.on("execute",(e=>{this.borderStyle=e.source._borderStyleValue})),s.bind("isEmpty").to(this,"borderStyle",(e=>!e)),(0,fe.addListToDropdown)(s.fieldView,ot(this,t.style));const a=new fe.LabeledFieldView(n,fe.createLabeledInputText);a.set({label:i("Width"),class:"ck-table-form__border-width"}),a.fieldView.bind("value").to(this,"borderWidth"),a.bind("isEnabled").to(this,"borderStyle",wt),a.fieldView.on("input",(()=>{this.borderWidth=a.fieldView.element.value}));const c=new fe.LabeledFieldView(n,o);return c.set({label:i("Color"),class:"ck-table-form__border-color"}),c.fieldView.bind("value").to(this,"borderColor"),c.bind("isEnabled").to(this,"borderStyle",wt),c.fieldView.on("input",(()=>{this.borderColor=c.fieldView.value})),this.on("change:borderStyle",((e,o,n,i)=>{wt(n)||(this.borderColor="",this.borderWidth=""),wt(i)||(this.borderColor=t.color,this.borderWidth=t.width)})),{borderRowLabel:l,borderStyleDropdown:s,borderColorInput:c,borderWidthInput:a}}_createBackgroundFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Background");const n=lt({colorConfig:this.options.backgroundColors,columns:5,defaultColorValue:this.options.defaultTableCellProperties.backgroundColor}),i=new fe.LabeledFieldView(e,n);return i.set({label:t("Color"),class:"ck-table-cell-properties-form__background"}),i.fieldView.bind("value").to(this,"backgroundColor"),i.fieldView.on("input",(()=>{this.backgroundColor=i.fieldView.value})),{backgroundRowLabel:o,backgroundInput:i}}_createDimensionFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Dimensions");const n=new fe.LabeledFieldView(e,fe.createLabeledInputText);n.set({label:t("Width"),class:"ck-table-form__dimensions-row__width"}),n.fieldView.bind("value").to(this,"width"),n.fieldView.on("input",(()=>{this.width=n.fieldView.element.value}));const i=new fe.View(e);i.setTemplate({tag:"span",attributes:{class:["ck-table-form__dimension-operator"]},children:[{text:"×"}]});const l=new fe.LabeledFieldView(e,fe.createLabeledInputText);return l.set({label:t("Height"),class:"ck-table-form__dimensions-row__height"}),l.fieldView.bind("value").to(this,"height"),l.fieldView.on("input",(()=>{this.height=l.fieldView.element.value})),{dimensionsLabel:o,widthInput:n,operatorLabel:i,heightInput:l}}_createPaddingField(){const e=this.locale,t=this.t,o=new fe.LabeledFieldView(e,fe.createLabeledInputText);return o.set({label:t("Padding"),class:"ck-table-cell-properties-form__padding"}),o.fieldView.bind("value").to(this,"padding"),o.fieldView.on("input",(()=>{this.padding=o.fieldView.element.value})),o}_createAlignmentFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Table cell text alignment");const n=new fe.ToolbarView(e),i="rtl"===this.locale.contentLanguageDirection;n.set({isCompact:!0,ariaLabel:t("Horizontal text alignment toolbar")}),nt({view:this,icons:pt,toolbar:n,labels:this._horizontalAlignmentLabels,propertyName:"horizontalAlignment",nameToValue:e=>{if(i){if("left"===e)return"right";if("right"===e)return"left"}return e},defaultValue:this.options.defaultTableCellProperties.horizontalAlignment});const l=new fe.ToolbarView(e);return l.set({isCompact:!0,ariaLabel:t("Vertical text alignment toolbar")}),nt({view:this,icons:pt,toolbar:l,labels:this._verticalAlignmentLabels,propertyName:"verticalAlignment",defaultValue:this.options.defaultTableCellProperties.verticalAlignment}),{horizontalAlignmentToolbar:n,verticalAlignmentToolbar:l,alignmentLabel:o}}_createActionButtons(){const t=this.locale,o=this.t,n=new fe.ButtonView(t),i=new fe.ButtonView(t),l=[this.borderWidthInput,this.borderColorInput,this.backgroundInput,this.paddingInput];return n.set({label:o("Save"),icon:e.icons.check,class:"ck-button-save",type:"submit",withText:!0}),n.bind("isEnabled").toMany(l,"errorText",((...e)=>e.every((e=>!e)))),i.set({label:o("Cancel"),icon:e.icons.cancel,class:"ck-button-cancel",withText:!0}),i.delegate("execute").to(this,"cancel"),{saveButtonView:n,cancelButtonView:i}}get _horizontalAlignmentLabels(){const e=this.locale,t=this.t,o=t("Align cell text to the left"),n=t("Align cell text to the center"),i=t("Align cell text to the right"),l=t("Justify cell text");return"rtl"===e.uiLanguageDirection?{right:i,center:n,left:o,justify:l}:{left:o,center:n,right:i,justify:l}}get _verticalAlignmentLabels(){const e=this.t;return{top:e("Align cell text to the top"),middle:e("Align cell text to the middle"),bottom:e("Align cell text to the bottom")}}}function wt(e){return"none"!==e}const kt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const _t="object"==typeof global&&global&&global.Object===Object&&global;var vt="object"==typeof self&&self&&self.Object===Object&&self;const Ct=_t||vt||Function("return this")();const yt=function(){return Ct.Date.now()};var Tt=/\s/;const At=function(e){for(var t=e.length;t--&&Tt.test(e.charAt(t)););return t};var xt=/^\s+/;const Vt=function(e){return e?e.slice(0,At(e)+1).replace(xt,""):e};const St=Ct.Symbol;var Rt=Object.prototype,It=Rt.hasOwnProperty,Pt=Rt.toString,Et=St?St.toStringTag:void 0;const zt=function(e){var t=It.call(e,Et),o=e[Et];try{e[Et]=void 0;var n=!0}catch(e){}var i=Pt.call(e);return n&&(t?e[Et]=o:delete e[Et]),i};var Bt=Object.prototype.toString;const Wt=function(e){return Bt.call(e)};var Lt=St?St.toStringTag:void 0;const Nt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Lt&&Lt in Object(e)?zt(e):Wt(e)};const Ft=function(e){return null!=e&&"object"==typeof e};const Dt=function(e){return"symbol"==typeof e||Ft(e)&&"[object Symbol]"==Nt(e)};var Ht=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,Ot=/^0o[0-7]+$/i,jt=parseInt;const Ut=function(e){if("number"==typeof e)return e;if(Dt(e))return NaN;if(kt(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=kt(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Vt(e);var o=Mt.test(e);return o||Ot.test(e)?jt(e.slice(2),o?2:8):Ht.test(e)?NaN:+e};var $t=Math.max,Zt=Math.min;const Kt=function(e,t,o){var n,i,l,r,s,a,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var o=n,l=i;return n=i=void 0,c=t,r=e.apply(l,o)}function m(e){return c=e,s=setTimeout(p,t),d?b(e):r}function g(e){var o=e-a;return void 0===a||o>=t||o<0||u&&e-c>=l}function p(){var e=yt();if(g(e))return f(e);s=setTimeout(p,function(e){var o=t-(e-a);return u?Zt(o,l-(e-c)):o}(e))}function f(e){return s=void 0,h&&n?b(e):(n=i=void 0,r)}function w(){var e=yt(),o=g(e);if(n=arguments,i=this,a=e,o){if(void 0===s)return m(a);if(u)return clearTimeout(s),s=setTimeout(p,t),b(a)}return void 0===s&&(s=setTimeout(p,t)),r}return t=Ut(t)||0,kt(o)&&(d=!!o.leading,l=(u="maxWait"in o)?$t(Ut(o.maxWait)||0,t):l,h="trailing"in o?!!o.trailing:h),w.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=a=i=s=void 0},w.flush=function(){return void 0===s?r:f(yt())},w},qt=fe.BalloonPanelView.defaultPositions,Gt=[qt.northArrowSouth,qt.northArrowSouthWest,qt.northArrowSouthEast,qt.southArrowNorth,qt.southArrowNorthWest,qt.southArrowNorthEast,qt.viewportStickyNorth];function Jt(e,t){const o=e.plugins.get("ContextualBalloon");if(Oe(e.editing.view.document.selection)){let n;n="cell"===t?Yt(e):Xt(e),o.updatePosition(n)}}function Xt(e){const t=e.model.document.selection.getFirstPosition().findAncestor("table"),o=e.editing.mapper.toViewElement(t);return{target:e.editing.view.domConverter.mapViewToDom(o),positions:Gt}}function Yt(e){const t=e.editing.mapper,o=e.editing.view.domConverter,n=e.model.document.selection;if(n.rangeCount>1)return{target:()=>function(e,t){const o=t.editing.mapper,n=t.editing.view.domConverter,i=Array.from(e).map((e=>{const t=Qt(e.start),i=o.toViewElement(t);return new b.Rect(n.mapViewToDom(i))}));return b.Rect.getBoundingRect(i)}(n.getRanges(),e),positions:Gt};const i=Qt(n.getFirstPosition()),l=t.toViewElement(i);return{target:o.mapViewToDom(l),positions:Gt}}function Qt(e){return e.nodeAfter&&e.nodeAfter.is("element","tableCell")?e.nodeAfter:e.findAncestor("tableCell")}function eo(e){if(!e||!kt(e))return e;const{top:t,right:o,bottom:n,left:i}=e;return t==o&&o==n&&n==i?t:void 0}function to(e,t){const o=parseFloat(e);return Number.isNaN(o)||String(o)!==String(e)?e:`${o}${t}`}function oo(e,t={}){const o=Object.assign({borderStyle:"none",borderWidth:"",borderColor:"",backgroundColor:"",width:"",height:""},e);return t.includeAlignmentProperty&&!o.alignment&&(o.alignment="center"),t.includePaddingProperty&&!o.padding&&(o.padding=""),t.includeVerticalAlignmentProperty&&!o.verticalAlignment&&(o.verticalAlignment="middle"),t.includeHorizontalAlignmentProperty&&!o.horizontalAlignment&&(o.horizontalAlignment=t.isRightToLeftContent?"right":"left"),o}const no={borderStyle:"tableCellBorderStyle",borderColor:"tableCellBorderColor",borderWidth:"tableCellBorderWidth",height:"tableCellHeight",width:"tableCellWidth",padding:"tableCellPadding",backgroundColor:"tableCellBackgroundColor",horizontalAlignment:"tableCellHorizontalAlignment",verticalAlignment:"tableCellVerticalAlignment"};class io extends e.Plugin{static get requires(){return[fe.ContextualBalloon]}static get pluginName(){return"TableCellPropertiesUI"}constructor(e){super(e),e.config.define("table.tableCellProperties",{borderColors:it,backgroundColors:it})}init(){const e=this.editor,t=e.t;this._defaultTableCellProperties=oo(e.config.get("table.tableCellProperties.defaultProperties"),{includeVerticalAlignmentProperty:!0,includeHorizontalAlignmentProperty:!0,includePaddingProperty:!0,isRightToLeftContent:"rtl"===e.locale.contentLanguageDirection}),this._balloon=e.plugins.get(fe.ContextualBalloon),this.view=this._createPropertiesView(),this._undoStepBatch=null,e.ui.componentFactory.add("tableCellProperties",(o=>{const n=new fe.ButtonView(o);n.set({label:t("Cell properties"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.105 18-.17 1H2.5A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1h15A1.5 1.5 0 0 1 19 2.5v9.975l-.85-.124-.15-.302V8h-5v4h.021l-.172.351-1.916.28-.151.027c-.287.063-.54.182-.755.341L8 13v5h3.105zM2 12h5V8H2v4zm10-4H8v4h4V8zM2 2v5h5V2H2zm0 16h5v-5H2v5zM13 7h5V2h-5v5zM8 2v5h4V2H8z" opacity=".6"/><path d="m15.5 11.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L15.5 18.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L15.5 11.5zM13 6a1 1 0 0 1 1 1v3.172a2.047 2.047 0 0 0-.293.443l-.858 1.736-1.916.28-.151.027A1.976 1.976 0 0 0 9.315 14H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm-1 2H8v4h4V8z"/></svg>',tooltip:!0}),this.listenTo(n,"execute",(()=>this._showView()));const i=Object.values(no).map((t=>e.commands.get(t)));return n.bind("isEnabled").toMany(i,"isEnabled",((...e)=>e.some((e=>e)))),n}))}destroy(){super.destroy(),this.view.destroy()}_createPropertiesView(){const e=this.editor,t=e.editing.view.document,o=e.config.get("table.tableCellProperties"),n=(0,fe.normalizeColorOptions)(o.borderColors),i=(0,fe.getLocalizedColorOptions)(e.locale,n),l=(0,fe.normalizeColorOptions)(o.backgroundColors),r=(0,fe.getLocalizedColorOptions)(e.locale,l),s=new ft(e.locale,{borderColors:i,backgroundColors:r,defaultTableCellProperties:this._defaultTableCellProperties}),a=e.t;s.render(),this.listenTo(s,"submit",(()=>{this._hideView()})),this.listenTo(s,"cancel",(()=>{this._undoStepBatch.operations.length&&e.execute("undo",this._undoStepBatch),this._hideView()})),s.keystrokes.set("Esc",((e,t)=>{this._hideView(),t()})),this.listenTo(e.ui,"update",(()=>{Oe(t.selection)?this._isViewVisible&&Jt(e,"cell"):this._hideView()})),(0,fe.clickOutsideHandler)({emitter:s,activator:()=>this._isViewInBalloon,contextElements:[this._balloon.view.element],callback:()=>this._hideView()});const c=Xe(a),d=Ye(a);return s.on("change:borderStyle",this._getPropertyChangeCallback("tableCellBorderStyle",this._defaultTableCellProperties.borderStyle)),s.on("change:borderColor",this._getValidatedPropertyChangeCallback({viewField:s.borderColorInput,commandName:"tableCellBorderColor",errorText:c,validator:Qe,defaultValue:this._defaultTableCellProperties.borderColor})),s.on("change:borderWidth",this._getValidatedPropertyChangeCallback({viewField:s.borderWidthInput,commandName:"tableCellBorderWidth",errorText:d,validator:tt,defaultValue:this._defaultTableCellProperties.borderWidth})),s.on("change:padding",this._getValidatedPropertyChangeCallback({viewField:s.paddingInput,commandName:"tableCellPadding",errorText:d,validator:et,defaultValue:this._defaultTableCellProperties.padding})),s.on("change:width",this._getValidatedPropertyChangeCallback({viewField:s.widthInput,commandName:"tableCellWidth",errorText:d,validator:et,defaultValue:this._defaultTableCellProperties.width})),s.on("change:height",this._getValidatedPropertyChangeCallback({viewField:s.heightInput,commandName:"tableCellHeight",errorText:d,validator:et,defaultValue:this._defaultTableCellProperties.height})),s.on("change:backgroundColor",this._getValidatedPropertyChangeCallback({viewField:s.backgroundInput,commandName:"tableCellBackgroundColor",errorText:c,validator:Qe,defaultValue:this._defaultTableCellProperties.backgroundColor})),s.on("change:horizontalAlignment",this._getPropertyChangeCallback("tableCellHorizontalAlignment",this._defaultTableCellProperties.horizontalAlignment)),s.on("change:verticalAlignment",this._getPropertyChangeCallback("tableCellVerticalAlignment",this._defaultTableCellProperties.verticalAlignment)),s}_fillViewFormFromCommandValues(){const e=this.editor.commands,t=e.get("tableCellBorderStyle");Object.entries(no).map((([t,o])=>{const n=this._defaultTableCellProperties[t]||"";return[t,e.get(o).value||n]})).forEach((([e,o])=>{("borderColor"!==e&&"borderWidth"!==e||"none"!==t.value)&&this.view.set(e,o)}))}_showView(){const e=this.editor;this._fillViewFormFromCommandValues(),this._balloon.add({view:this.view,position:Yt(e)}),this._undoStepBatch=e.model.createBatch(),this.view.focus()}_hideView(){if(!this._isViewInBalloon)return;const e=this.editor;this.stopListening(e.ui,"update"),this.view.saveButtonView.focus(),this._balloon.remove(this.view),this.editor.editing.view.focus()}get _isViewVisible(){return this._balloon.visibleView===this.view}get _isViewInBalloon(){return this._balloon.hasView(this.view)}_getPropertyChangeCallback(e,t){return(o,n,i,l)=>{(l||t!==i)&&this.editor.execute(e,{value:i,batch:this._undoStepBatch})}}_getValidatedPropertyChangeCallback(e){const{commandName:t,viewField:o,validator:n,errorText:i,defaultValue:l}=e,r=Kt((()=>{o.errorText=i}),500);return(e,i,s,a)=>{r.cancel(),(a||l!==s)&&(n(s)?(this.editor.execute(t,{value:s,batch:this._undoStepBatch}),o.errorText=null):r())}}}class lo extends e.Command{constructor(e,t,o){super(e),this.attributeName=t,this._defaultValue=o}refresh(){const e=this.editor,t=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(e.model.document.selection);this.isEnabled=!!t.length,this.value=this._getSingleValue(t)}execute(e={}){const{value:t,batch:o}=e,n=this.editor.model,i=this.editor.plugins.get("TableUtils").getSelectionAffectedTableCells(n.document.selection),l=this._getValueToSet(t);n.enqueueChange(o,(e=>{l?i.forEach((t=>e.setAttribute(this.attributeName,l,t))):i.forEach((t=>e.removeAttribute(this.attributeName,t)))}))}_getAttribute(e){if(!e)return;const t=e.getAttribute(this.attributeName);return t!==this._defaultValue?t:void 0}_getValueToSet(e){if(e!==this._defaultValue)return e}_getSingleValue(e){const t=this._getAttribute(e[0]);return e.every((e=>this._getAttribute(e)===t))?t:void 0}}class ro extends lo{constructor(e,t){super(e,"tableCellWidth",t)}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}class so extends e.Plugin{static get pluginName(){return"TableCellWidthEditing"}static get requires(){return[ge]}init(){const e=this.editor,t=oo(e.config.get("table.tableCellProperties.defaultProperties"));h(e.model.schema,e.conversion,{modelAttribute:"tableCellWidth",styleName:"width",defaultValue:t.width}),e.commands.add("tableCellWidth",new ro(e,t.width))}}class ao extends lo{constructor(e,t){super(e,"tableCellPadding",t)}_getAttribute(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}class co extends lo{constructor(e,t){super(e,"tableCellHeight",t)}_getValueToSet(e){return(e=to(e,"px"))===this._defaultValue?null:e}}class uo extends lo{constructor(e,t){super(e,"tableCellBackgroundColor",t)}}class ho extends lo{constructor(e,t){super(e,"tableCellVerticalAlignment",t)}}class bo extends lo{constructor(e,t){super(e,"tableCellHorizontalAlignment",t)}}class mo extends lo{constructor(e,t){super(e,"tableCellBorderStyle",t)}_getAttribute(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}}class go extends lo{constructor(e,t){super(e,"tableCellBorderColor",t)}_getAttribute(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}}class po extends lo{constructor(e,t){super(e,"tableCellBorderWidth",t)}_getAttribute(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}const fo=/^(top|middle|bottom)$/,wo=/^(left|center|right|justify)$/;class ko extends e.Plugin{static get pluginName(){return"TableCellPropertiesEditing"}static get requires(){return[ge,so]}init(){const e=this.editor,t=e.model.schema,o=e.conversion;e.config.define("table.tableCellProperties.defaultProperties",{});const n=oo(e.config.get("table.tableCellProperties.defaultProperties"),{includeVerticalAlignmentProperty:!0,includeHorizontalAlignmentProperty:!0,includePaddingProperty:!0,isRightToLeftContent:"rtl"===e.locale.contentLanguageDirection});e.data.addStyleProcessorRules(Ee.addBorderRules),function(e,t,o){const n={width:"tableCellBorderWidth",color:"tableCellBorderColor",style:"tableCellBorderStyle"};e.extend("tableCell",{allowAttributes:Object.values(n)}),l(t,"td",n,o),l(t,"th",n,o),r(t,{modelElement:"tableCell",modelAttribute:n.style,styleName:"border-style"}),r(t,{modelElement:"tableCell",modelAttribute:n.color,styleName:"border-color"}),r(t,{modelElement:"tableCell",modelAttribute:n.width,styleName:"border-width"})}(t,o,{color:n.borderColor,style:n.borderStyle,width:n.borderWidth}),e.commands.add("tableCellBorderStyle",new mo(e,n.borderStyle)),e.commands.add("tableCellBorderColor",new go(e,n.borderColor)),e.commands.add("tableCellBorderWidth",new po(e,n.borderWidth)),h(t,o,{modelAttribute:"tableCellHeight",styleName:"height",defaultValue:n.height}),e.commands.add("tableCellHeight",new co(e,n.height)),e.data.addStyleProcessorRules(Ee.addPaddingRules),h(t,o,{modelAttribute:"tableCellPadding",styleName:"padding",reduceBoxSides:!0,defaultValue:n.padding}),e.commands.add("tableCellPadding",new ao(e,n.padding)),e.data.addStyleProcessorRules(Ee.addBackgroundRules),h(t,o,{modelAttribute:"tableCellBackgroundColor",styleName:"background-color",defaultValue:n.backgroundColor}),e.commands.add("tableCellBackgroundColor",new uo(e,n.backgroundColor)),function(e,t,o){e.extend("tableCell",{allowAttributes:["tableCellHorizontalAlignment"]}),t.for("downcast").attributeToAttribute({model:{name:"tableCell",key:"tableCellHorizontalAlignment"},view:e=>({key:"style",value:{"text-align":e}})}),t.for("upcast").attributeToAttribute({view:{name:/^(td|th)$/,styles:{"text-align":wo}},model:{key:"tableCellHorizontalAlignment",value:e=>{const t=e.getStyle("text-align");return t===o?null:t}}}).attributeToAttribute({view:{name:/^(td|th)$/,attributes:{align:wo}},model:{key:"tableCellHorizontalAlignment",value:e=>{const t=e.getAttribute("align");return t===o?null:t}}})}(t,o,n.horizontalAlignment),e.commands.add("tableCellHorizontalAlignment",new bo(e,n.horizontalAlignment)),function(e,t,o){e.extend("tableCell",{allowAttributes:["tableCellVerticalAlignment"]}),t.for("downcast").attributeToAttribute({model:{name:"tableCell",key:"tableCellVerticalAlignment"},view:e=>({key:"style",value:{"vertical-align":e}})}),t.for("upcast").attributeToAttribute({view:{name:/^(td|th)$/,styles:{"vertical-align":fo}},model:{key:"tableCellVerticalAlignment",value:e=>{const t=e.getStyle("vertical-align");return t===o?null:t}}}).attributeToAttribute({view:{name:/^(td|th)$/,attributes:{valign:fo}},model:{key:"tableCellVerticalAlignment",value:e=>{const t=e.getAttribute("valign");return t===o?null:t}}})}(t,o,n.verticalAlignment),e.commands.add("tableCellVerticalAlignment",new ho(e,n.verticalAlignment))}}class _o extends e.Plugin{static get pluginName(){return"TableCellProperties"}static get requires(){return[ko,io]}}class vo extends e.Command{constructor(e,t,o){super(e),this.attributeName=t,this._defaultValue=o}refresh(){const e=this.editor.model.document.selection.getFirstPosition().findAncestor("table");this.isEnabled=!!e,this.value=this._getValue(e)}execute(e={}){const t=this.editor.model,o=t.document.selection,{value:n,batch:i}=e,l=o.getFirstPosition().findAncestor("table"),r=this._getValueToSet(n);t.enqueueChange(i,(e=>{r?e.setAttribute(this.attributeName,r,l):e.removeAttribute(this.attributeName,l)}))}_getValue(e){if(!e)return;const t=e.getAttribute(this.attributeName);return t!==this._defaultValue?t:void 0}_getValueToSet(e){if(e!==this._defaultValue)return e}}class Co extends vo{constructor(e,t){super(e,"tableBackgroundColor",t)}}class yo extends vo{constructor(e,t){super(e,"tableBorderColor",t)}_getValue(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}}class To extends vo{constructor(e,t){super(e,"tableBorderStyle",t)}_getValue(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}}class Ao extends vo{constructor(e,t){super(e,"tableBorderWidth",t)}_getValue(e){if(!e)return;const t=eo(e.getAttribute(this.attributeName));return t!==this._defaultValue?t:void 0}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}class xo extends vo{constructor(e,t){super(e,"tableWidth",t)}_getValueToSet(e){if((e=to(e,"px"))!==this._defaultValue)return e}}class Vo extends vo{constructor(e,t){super(e,"tableHeight",t)}_getValueToSet(e){return(e=to(e,"px"))===this._defaultValue?null:e}}class So extends vo{constructor(e,t){super(e,"tableAlignment",t)}}const Ro=/^(left|center|right)$/,Io=/^(left|none|right)$/;class Po extends e.Plugin{static get pluginName(){return"TablePropertiesEditing"}static get requires(){return[ge]}init(){const e=this.editor,t=e.model.schema,o=e.conversion;e.config.define("table.tableProperties.defaultProperties",{});const n=oo(e.config.get("table.tableProperties.defaultProperties"),{includeAlignmentProperty:!0});e.data.addStyleProcessorRules(Ee.addBorderRules),function(e,t,o){const n={width:"tableBorderWidth",color:"tableBorderColor",style:"tableBorderStyle"};e.extend("table",{allowAttributes:Object.values(n)}),l(t,"table",n,o),s(t,{modelAttribute:n.color,styleName:"border-color"}),s(t,{modelAttribute:n.style,styleName:"border-style"}),s(t,{modelAttribute:n.width,styleName:"border-width"})}(t,o,{color:n.borderColor,style:n.borderStyle,width:n.borderWidth}),e.commands.add("tableBorderColor",new yo(e,n.borderColor)),e.commands.add("tableBorderStyle",new To(e,n.borderStyle)),e.commands.add("tableBorderWidth",new Ao(e,n.borderWidth)),function(e,t,o){e.extend("table",{allowAttributes:["tableAlignment"]}),t.for("downcast").attributeToAttribute({model:{name:"table",key:"tableAlignment"},view:e=>({key:"style",value:{float:"center"===e?"none":e}}),converterPriority:"high"}),t.for("upcast").attributeToAttribute({view:{name:/^(table|figure)$/,styles:{float:Io}},model:{key:"tableAlignment",value:e=>{let t=e.getStyle("float");return"none"===t&&(t="center"),t===o?null:t}}}).attributeToAttribute({view:{attributes:{align:Ro}},model:{name:"table",key:"tableAlignment",value:e=>{const t=e.getAttribute("align");return t===o?null:t}}})}(t,o,n.alignment),e.commands.add("tableAlignment",new So(e,n.alignment)),Eo(t,o,{modelAttribute:"tableWidth",styleName:"width",defaultValue:n.width}),e.commands.add("tableWidth",new xo(e,n.width)),Eo(t,o,{modelAttribute:"tableHeight",styleName:"height",defaultValue:n.height}),e.commands.add("tableHeight",new Vo(e,n.height)),e.data.addStyleProcessorRules(Ee.addBackgroundRules),function(e,t,o){const{modelAttribute:n}=o;e.extend("table",{allowAttributes:[n]}),i(t,{viewElement:"table",...o}),s(t,o)}(t,o,{modelAttribute:"tableBackgroundColor",styleName:"background-color",defaultValue:n.backgroundColor}),e.commands.add("tableBackgroundColor",new Co(e,n.backgroundColor))}}function Eo(e,t,o){const{modelAttribute:n}=o;e.extend("table",{allowAttributes:[n]}),i(t,{viewElement:/^(table|figure)$/,shouldUpcast:e=>!("table"==e.name&&"figure"==e.parent.name),...o}),r(t,{modelElement:"table",...o})}var zo=o(99),Bo={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(zo.Z,Bo);zo.Z.locals;const Wo={left:e.icons.objectLeft,center:e.icons.objectCenter,right:e.icons.objectRight};class Lo extends fe.View{constructor(e,t){super(e),this.set({borderStyle:"",borderWidth:"",borderColor:"",backgroundColor:"",width:"",height:"",alignment:""}),this.options=t;const{borderStyleDropdown:o,borderWidthInput:n,borderColorInput:i,borderRowLabel:l}=this._createBorderFields(),{backgroundRowLabel:r,backgroundInput:s}=this._createBackgroundFields(),{widthInput:a,operatorLabel:c,heightInput:d,dimensionsLabel:u}=this._createDimensionFields(),{alignmentToolbar:h,alignmentLabel:m}=this._createAlignmentFields();this.focusTracker=new b.FocusTracker,this.keystrokes=new b.KeystrokeHandler,this.children=this.createCollection(),this.borderStyleDropdown=o,this.borderWidthInput=n,this.borderColorInput=i,this.backgroundInput=s,this.widthInput=a,this.heightInput=d,this.alignmentToolbar=h;const{saveButtonView:g,cancelButtonView:p}=this._createActionButtons();this.saveButtonView=g,this.cancelButtonView=p,this._focusables=new fe.ViewCollection,this._focusCycler=new fe.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.children.add(new fe.FormHeaderView(e,{label:this.t("Table properties")})),this.children.add(new ct(e,{labelView:l,children:[l,o,i,n],class:"ck-table-form__border-row"})),this.children.add(new ct(e,{labelView:r,children:[r,s],class:"ck-table-form__background-row"})),this.children.add(new ct(e,{children:[new ct(e,{labelView:u,children:[u,a,c,d],class:"ck-table-form__dimensions-row"}),new ct(e,{labelView:m,children:[m,h],class:"ck-table-properties-form__alignment-row"})]})),this.children.add(new ct(e,{children:[this.saveButtonView,this.cancelButtonView],class:"ck-table-form__action-row"})),this.setTemplate({tag:"form",attributes:{class:["ck","ck-form","ck-table-form","ck-table-properties-form"],tabindex:"-1"},children:this.children})}render(){super.render(),(0,fe.submitHandler)({view:this}),[this.borderStyleDropdown,this.borderColorInput,this.borderColorInput.fieldView.dropdownView.buttonView,this.borderWidthInput,this.backgroundInput,this.backgroundInput.fieldView.dropdownView.buttonView,this.widthInput,this.heightInput,this.alignmentToolbar,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createBorderFields(){const e=this.options.defaultTableProperties,t={style:e.borderStyle,width:e.borderWidth,color:e.borderColor},o=lt({colorConfig:this.options.borderColors,columns:5,defaultColorValue:t.color}),n=this.locale,i=this.t,l=new fe.LabelView(n);l.text=i("Border");const r=Je(this.t),s=new fe.LabeledFieldView(n,fe.createLabeledDropdown);s.set({label:i("Style"),class:"ck-table-form__border-style"}),s.fieldView.buttonView.set({isOn:!1,withText:!0,tooltip:i("Style")}),s.fieldView.buttonView.bind("label").to(this,"borderStyle",(e=>r[e||"none"])),s.fieldView.on("execute",(e=>{this.borderStyle=e.source._borderStyleValue})),s.bind("isEmpty").to(this,"borderStyle",(e=>!e)),(0,fe.addListToDropdown)(s.fieldView,ot(this,t.style));const a=new fe.LabeledFieldView(n,fe.createLabeledInputText);a.set({label:i("Width"),class:"ck-table-form__border-width"}),a.fieldView.bind("value").to(this,"borderWidth"),a.bind("isEnabled").to(this,"borderStyle",No),a.fieldView.on("input",(()=>{this.borderWidth=a.fieldView.element.value}));const c=new fe.LabeledFieldView(n,o);return c.set({label:i("Color"),class:"ck-table-form__border-color"}),c.fieldView.bind("value").to(this,"borderColor"),c.bind("isEnabled").to(this,"borderStyle",No),c.fieldView.on("input",(()=>{this.borderColor=c.fieldView.value})),this.on("change:borderStyle",((e,o,n,i)=>{No(n)||(this.borderColor="",this.borderWidth=""),No(i)||(this.borderColor=t.color,this.borderWidth=t.width)})),{borderRowLabel:l,borderStyleDropdown:s,borderColorInput:c,borderWidthInput:a}}_createBackgroundFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Background");const n=lt({colorConfig:this.options.backgroundColors,columns:5,defaultColorValue:this.options.defaultTableProperties.backgroundColor}),i=new fe.LabeledFieldView(e,n);return i.set({label:t("Color"),class:"ck-table-properties-form__background"}),i.fieldView.bind("value").to(this,"backgroundColor"),i.fieldView.on("input",(()=>{this.backgroundColor=i.fieldView.value})),{backgroundRowLabel:o,backgroundInput:i}}_createDimensionFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Dimensions");const n=new fe.LabeledFieldView(e,fe.createLabeledInputText);n.set({label:t("Width"),class:"ck-table-form__dimensions-row__width"}),n.fieldView.bind("value").to(this,"width"),n.fieldView.on("input",(()=>{this.width=n.fieldView.element.value}));const i=new fe.View(e);i.setTemplate({tag:"span",attributes:{class:["ck-table-form__dimension-operator"]},children:[{text:"×"}]});const l=new fe.LabeledFieldView(e,fe.createLabeledInputText);return l.set({label:t("Height"),class:"ck-table-form__dimensions-row__height"}),l.fieldView.bind("value").to(this,"height"),l.fieldView.on("input",(()=>{this.height=l.fieldView.element.value})),{dimensionsLabel:o,widthInput:n,operatorLabel:i,heightInput:l}}_createAlignmentFields(){const e=this.locale,t=this.t,o=new fe.LabelView(e);o.text=t("Alignment");const n=new fe.ToolbarView(e);return n.set({isCompact:!0,ariaLabel:t("Table alignment toolbar")}),nt({view:this,icons:Wo,toolbar:n,labels:this._alignmentLabels,propertyName:"alignment",defaultValue:this.options.defaultTableProperties.alignment}),{alignmentLabel:o,alignmentToolbar:n}}_createActionButtons(){const t=this.locale,o=this.t,n=new fe.ButtonView(t),i=new fe.ButtonView(t),l=[this.borderWidthInput,this.borderColorInput,this.backgroundInput,this.widthInput,this.heightInput];return n.set({label:o("Save"),icon:e.icons.check,class:"ck-button-save",type:"submit",withText:!0}),n.bind("isEnabled").toMany(l,"errorText",((...e)=>e.every((e=>!e)))),i.set({label:o("Cancel"),icon:e.icons.cancel,class:"ck-button-cancel",withText:!0}),i.delegate("execute").to(this,"cancel"),{saveButtonView:n,cancelButtonView:i}}get _alignmentLabels(){const e=this.locale,t=this.t,o=t("Align table to the left"),n=t("Center table"),i=t("Align table to the right");return"rtl"===e.uiLanguageDirection?{right:i,center:n,left:o}:{left:o,center:n,right:i}}}function No(e){return"none"!==e}const Fo={borderStyle:"tableBorderStyle",borderColor:"tableBorderColor",borderWidth:"tableBorderWidth",backgroundColor:"tableBackgroundColor",width:"tableWidth",height:"tableHeight",alignment:"tableAlignment"};class Do extends e.Plugin{static get requires(){return[fe.ContextualBalloon]}static get pluginName(){return"TablePropertiesUI"}constructor(e){super(e),e.config.define("table.tableProperties",{borderColors:it,backgroundColors:it})}init(){const e=this.editor,t=e.t;this._defaultTableProperties=oo(e.config.get("table.tableProperties.defaultProperties"),{includeAlignmentProperty:!0}),this._balloon=e.plugins.get(fe.ContextualBalloon),this.view=this._createPropertiesView(),this._undoStepBatch=null,e.ui.componentFactory.add("tableProperties",(o=>{const n=new fe.ButtonView(o);n.set({label:t("Table properties"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v5h4V2h1v5h5v1h-5v4h.021l-.172.351-1.916.28-.151.027c-.287.063-.54.182-.755.341L8 13v5H7v-5H2v-1h5V8H2V7h5V2h1zm4 6H8v4h4V8z" opacity=".6"/><path d="m15.5 11.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L15.5 18.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L15.5 11.5zM17 1a2 2 0 0 1 2 2v9.475l-.85-.124-.857-1.736a2.048 2.048 0 0 0-.292-.44L17 3H3v14h7.808l.402.392L10.935 19H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14z"/></svg>',tooltip:!0}),this.listenTo(n,"execute",(()=>this._showView()));const i=Object.values(Fo).map((t=>e.commands.get(t)));return n.bind("isEnabled").toMany(i,"isEnabled",((...e)=>e.some((e=>e)))),n}))}destroy(){super.destroy(),this.view.destroy()}_createPropertiesView(){const e=this.editor,t=e.config.get("table.tableProperties"),o=(0,fe.normalizeColorOptions)(t.borderColors),n=(0,fe.getLocalizedColorOptions)(e.locale,o),i=(0,fe.normalizeColorOptions)(t.backgroundColors),l=(0,fe.getLocalizedColorOptions)(e.locale,i),r=new Lo(e.locale,{borderColors:n,backgroundColors:l,defaultTableProperties:this._defaultTableProperties}),s=e.t;r.render(),this.listenTo(r,"submit",(()=>{this._hideView()})),this.listenTo(r,"cancel",(()=>{this._undoStepBatch.operations.length&&e.execute("undo",this._undoStepBatch),this._hideView()})),r.keystrokes.set("Esc",((e,t)=>{this._hideView(),t()})),(0,fe.clickOutsideHandler)({emitter:r,activator:()=>this._isViewInBalloon,contextElements:[this._balloon.view.element],callback:()=>this._hideView()});const a=Xe(s),c=Ye(s);return r.on("change:borderStyle",this._getPropertyChangeCallback("tableBorderStyle",this._defaultTableProperties.borderStyle)),r.on("change:borderColor",this._getValidatedPropertyChangeCallback({viewField:r.borderColorInput,commandName:"tableBorderColor",errorText:a,validator:Qe,defaultValue:this._defaultTableProperties.borderColor})),r.on("change:borderWidth",this._getValidatedPropertyChangeCallback({viewField:r.borderWidthInput,commandName:"tableBorderWidth",errorText:c,validator:tt,defaultValue:this._defaultTableProperties.borderWidth})),r.on("change:backgroundColor",this._getValidatedPropertyChangeCallback({viewField:r.backgroundInput,commandName:"tableBackgroundColor",errorText:a,validator:Qe,defaultValue:this._defaultTableProperties.backgroundColor})),r.on("change:width",this._getValidatedPropertyChangeCallback({viewField:r.widthInput,commandName:"tableWidth",errorText:c,validator:et,defaultValue:this._defaultTableProperties.width})),r.on("change:height",this._getValidatedPropertyChangeCallback({viewField:r.heightInput,commandName:"tableHeight",errorText:c,validator:et,defaultValue:this._defaultTableProperties.height})),r.on("change:alignment",this._getPropertyChangeCallback("tableAlignment",this._defaultTableProperties.alignment)),r}_fillViewFormFromCommandValues(){const e=this.editor.commands,t=e.get("tableBorderStyle");Object.entries(Fo).map((([t,o])=>{const n=this._defaultTableProperties[t]||"";return[t,e.get(o).value||n]})).forEach((([e,o])=>{("borderColor"!==e&&"borderWidth"!==e||"none"!==t.value)&&this.view.set(e,o)}))}_showView(){const e=this.editor;this.listenTo(e.ui,"update",(()=>{this._updateView()})),this._fillViewFormFromCommandValues(),this._balloon.add({view:this.view,position:Xt(e)}),this._undoStepBatch=e.model.createBatch(),this.view.focus()}_hideView(){const e=this.editor;this.stopListening(e.ui,"update"),this.view.saveButtonView.focus(),this._balloon.remove(this.view),this.editor.editing.view.focus()}_updateView(){const e=this.editor;Oe(e.editing.view.document.selection)?this._isViewVisible&&Jt(e,"table"):this._hideView()}get _isViewVisible(){return this._balloon.visibleView===this.view}get _isViewInBalloon(){return this._balloon.hasView(this.view)}_getPropertyChangeCallback(e,t){return(o,n,i,l)=>{(l||t!==i)&&this.editor.execute(e,{value:i,batch:this._undoStepBatch})}}_getValidatedPropertyChangeCallback(e){const{commandName:t,viewField:o,validator:n,errorText:i,defaultValue:l}=e,r=Kt((()=>{o.errorText=i}),500);return(e,i,s,a)=>{r.cancel(),(a||l!==s)&&(n(s)?(this.editor.execute(t,{value:s,batch:this._undoStepBatch}),o.errorText=null):r())}}}class Ho extends e.Plugin{static get pluginName(){return"TableProperties"}static get requires(){return[Po,Do]}}function Mo(e){e.document.registerPostFixer((t=>function(e,t){const o=t.document.differ.getChanges();let n=!1;for(const t of o){if("insert"!=t.type)continue;if(t.position.parent.is("element","table")||"table"==t.name){const o="table"==t.name?t.position.nodeAfter:t.position.parent,i=Array.from(o.getChildren()).filter((e=>e.is("element","caption"))),l=i.shift();if(!l)continue;for(const t of i)e.move(e.createRangeIn(t),l,"end"),e.remove(t);l.nextSibling&&(e.move(e.createRangeOn(l),o,"end"),n=!0),n=!!i.length||n}}return n}(t,e)))}function Oo(e){return!!e&&e.is("element","table")}function jo(e){for(const t of e.getChildren())if(t.is("element","caption"))return t;return null}function Uo(e){const t=e.parent;return"figcaption"==e.name&&t&&"figure"==t.name&&t.hasClass("table")||"caption"==e.name&&t&&"table"==t.name?{name:!0}:null}function $o(e){const t=e.getSelectedElement();return t&&t.is("element","table")?t:e.getFirstPosition().findAncestor("table")}class Zo extends e.Command{refresh(){const e=$o(this.editor.model.document.selection);this.isEnabled=!!e,this.isEnabled?this.value=!!jo(e):this.value=!1}execute(e={}){const{focusCaptionOnShow:t}=e;this.editor.model.change((e=>{this.value?this._hideTableCaption(e):this._showTableCaption(e,t)}))}_showTableCaption(e,t){const o=this.editor.model,n=$o(o.document.selection),i=this.editor.plugins.get("TableCaptionEditing")._getSavedCaption(n)||e.createElement("caption");o.insertContent(i,n,"end"),t&&e.setSelection(i,"in")}_hideTableCaption(e){const t=this.editor.model,o=$o(t.document.selection),n=this.editor.plugins.get("TableCaptionEditing"),i=jo(o);n._saveCaption(o,i),t.deleteContent(e.createSelection(i,"on"))}}class Ko extends e.Plugin{static get pluginName(){return"TableCaptionEditing"}constructor(e){super(e),this._savedCaptionsMap=new WeakMap}init(){const e=this.editor,o=e.model.schema,n=e.editing.view,i=e.t;o.isRegistered("caption")?o.extend("caption",{allowIn:"table"}):o.register("caption",{allowIn:"table",allowContentOf:"$block",isLimit:!0}),e.commands.add("toggleTableCaption",new Zo(this.editor)),e.conversion.for("upcast").elementToElement({view:Uo,model:"caption"}),e.conversion.for("dataDowncast").elementToElement({model:"caption",view:(e,{writer:t})=>Oo(e.parent)?t.createContainerElement("figcaption"):null}),e.conversion.for("editingDowncast").elementToElement({model:"caption",view:(e,{writer:o})=>{if(!Oo(e.parent))return null;const l=o.createEditableElement("figcaption");return o.setCustomProperty("tableCaption",!0,l),(0,Ee.enablePlaceholder)({view:n,element:l,text:i("Enter table caption"),keepOnFocus:!0}),(0,t.toWidgetEditable)(l,o)}}),Mo(e.model)}_getSavedCaption(e){const t=this._savedCaptionsMap.get(e);return t?Ee.Element.fromJSON(t):null}_saveCaption(e,t){this._savedCaptionsMap.set(e,t.toJSON())}}class qo extends e.Plugin{static get pluginName(){return"TableCaptionUI"}init(){const t=this.editor,o=t.editing.view,n=t.t;t.ui.componentFactory.add("toggleTableCaption",(i=>{const l=t.commands.get("toggleTableCaption"),r=new fe.ButtonView(i);return r.set({icon:e.icons.caption,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(l,"value","isEnabled"),r.bind("label").to(l,"value",(e=>n(e?"Toggle caption off":"Toggle caption on"))),this.listenTo(r,"execute",(()=>{if(t.execute("toggleTableCaption",{focusCaptionOnShow:!0}),l.value){const e=function(e){const t=$o(e);return t?jo(t):null}(t.model.document.selection),n=t.editing.mapper.toViewElement(e);if(!n)return;o.scrollToTheSelection(),o.change((e=>{e.addClass("table__caption_highlighted",n)}))}t.editing.view.focus()})),r}))}}var Go=o(665),Jo={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(Go.Z,Jo);Go.Z.locals;class Xo extends e.Plugin{static get pluginName(){return"TableCaption"}static get requires(){return[Ko,qo]}}const Yo=function(e,t,o){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return kt(o)&&(n="leading"in o?!!o.leading:n,i="trailing"in o?!!o.trailing:i),Kt(e,t,{leading:n,maxWait:t,trailing:i})};class Qo extends vo{constructor(e,t){super(e,"tableWidth",t)}refresh(){this.isEnabled=!0}execute(e={}){const t=this.editor.model,o=e.table||t.document.selection.getSelectedElement(),{tableWidth:n,columnWidths:i}=e;t.change((e=>{n?e.setAttribute(this.attributeName,n,o):e.removeAttribute(this.attributeName,o),i?e.setAttribute("columnWidths",i,o):e.removeAttribute("columnWidths",o)}))}}class en extends vo{constructor(e,t){super(e,"columnWidths",t)}refresh(){this.isEnabled=!0}execute(e={}){const t=this.editor.model,o=e.table||t.document.selection.getSelectedElement(),{columnWidths:n}=e;t.change((e=>{n?e.setAttribute(this.attributeName,n,o):e.removeAttribute(this.attributeName,o)}))}}function tn(e,t){return 4e3/on(e,t)}function on(e,t){const o=nn(e,"tbody",t)||nn(e,"thead",t);return ln(t.editing.view.domConverter.mapViewToDom(o))}function nn(e,t,o){return[...[...o.editing.mapper.toViewElement(e).getChildren()].find((e=>e.is("element","table"))).getChildren()].find((e=>e.is("element",t)))}function ln(e){const t=b.global.window.getComputedStyle(e);return"border-box"===t.boxSizing?parseFloat(t.width)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth):parseFloat(t.width)}function rn(e){const t=Math.pow(10,2),o=parseFloat(e);return Math.round(o*t)/t}function sn(e){return e.map((e=>parseFloat(e))).filter((e=>!Number.isNaN(e))).reduce(((e,t)=>e+t),0)}function an(e){e=function(e){const t=e.filter((e=>"auto"===e)).length;if(0===t)return e.map((e=>rn(e)));const o=sn(e),n=Math.max((100-o)/t,5);return e.map((e=>"auto"===e?n:e)).map((e=>rn(e)))}(e);const t=sn(e);return 100===t?e:e.map((e=>rn(100*e/t))).map(((e,t,o)=>{if(!(t===o.length-1))return e;return rn(e+100-sn(o))}))}function cn(e,t){let o=[...t.getChildren()].find((e=>e.hasClass("ck-table-column-resizer")));o||(o=e.createUIElement("div",{class:"ck-table-column-resizer"}),e.insert(e.createPositionAt(t,"end"),o))}function dn(e){const t=b.global.window.getComputedStyle(e);return"border-box"===t.boxSizing?parseInt(t.width):parseFloat(t.width)+parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderWidth)}function un(){return e=>e.on("attribute:columnWidths:table",((e,t,o)=>{const n=o.writer,i=t.item,l=[...o.mapper.toViewElement(i).getChildren()].find((e=>e.is("element","table")));t.attributeNewValue?(!function(e,t,o){const n=o.split(",");let i=[...t.getChildren()].find((e=>e.is("element","colgroup")));if(i)for(const t of[...i.getChildren()])e.remove(t);else i=e.createContainerElement("colgroup");for(const t of Array(n.length).keys()){const o=e.createEmptyElement("col");e.setStyle("width",n[t],o),e.insert(e.createPositionAt(i,"end"),o)}e.insert(e.createPositionAt(t,"start"),i)}(n,l,t.attributeNewValue),n.addClass("ck-table-resized",l)):(!function(e,t){const o=[...t.getChildren()].find((e=>e.is("element","colgroup")));e.remove(o)}(n,l),n.removeClass("ck-table-resized",l))}))}class hn extends e.Plugin{static get requires(){return[ge,U]}static get pluginName(){return"TableColumnResizeEditing"}constructor(e){super(e),this._isResizingActive=!1,this.set("_isResizingAllowed",!0),this._resizingData=null,this._domEmitter=Object.create(b.DomEmitterMixin),this._tableUtilsPlugin=e.plugins.get("TableUtils"),this.on("change:_isResizingAllowed",((t,o,n)=>{e.editing.view.change((t=>{t[n?"removeClass":"addClass"]("ck-column-resize_disabled",e.editing.view.document.getRoot())}))}))}init(){this._extendSchema(),this._registerPostFixer(),this._registerConverters(),this._registerResizingListeners(),this._registerColgroupFixer(),this._registerResizerInserter();const e=this.editor,t=e.plugins.get("TableColumnResize");e.commands.add("resizeTableWidth",new Qo(e)),e.commands.add("resizeColumnWidths",new en(e));const o=e.commands.get("resizeTableWidth"),n=e.commands.get("resizeColumnWidths");this.bind("_isResizingAllowed").to(e,"isReadOnly",t,"isEnabled",o,"isEnabled",n,"isEnabled",((e,t,o,n)=>!e&&t&&o&&n))}destroy(){this._domEmitter.stopListening(),super.destroy()}_extendSchema(){this.editor.model.schema.extend("table",{allowAttributes:["tableWidth","columnWidths"]})}_registerPostFixer(){const e=this.editor.model;function t(e,t,o){const n=o._tableUtilsPlugin.getColumns(t);if(0===n-e.length)return;const i=function(e,t){const o=new Set;for(const n of e.getChanges())if("insert"==n.type&&n.position.nodeAfter&&"tableCell"==n.position.nodeAfter.name&&n.position.nodeAfter.getAncestors().includes(t))o.add(n.position.nodeAfter);else if("remove"==n.type){const e=n.position.nodeBefore||n.position.nodeAfter;"tableCell"==e.name&&e.getAncestors().includes(t)&&o.add(e)}return o}(o.editor.model.document.differ,t);for(const r of i){const i=n-e.length;if(0===i)continue;const s=i>0,a=o._tableUtilsPlugin.getCellLocation(r).column;if(s){const n=tn(t,o.editor),r=(l=n,Array(i).fill(l));e.splice(a,0,...r)}else{const t=e.splice(a,Math.abs(i));e[a]+=sn(t)}}var l}e.document.registerPostFixer((o=>{let n=!1;for(const i of function(e){const t=new Set;for(const o of e.document.differ.getChanges()){let n=null;switch(o.type){case"insert":n=["table","tableRow","tableCell"].includes(o.name)?o.position:null;break;case"remove":n=["tableRow","tableCell"].includes(o.name)?o.position:null;break;case"attribute":o.range.start.nodeAfter&&(n=["table","tableRow","tableCell"].includes(o.range.start.nodeAfter.name)?o.range.start:null)}if(!n)continue;const i=n.nodeAfter&&"table"===n.nodeAfter.name?n.nodeAfter:n.findAncestor("table");for(const o of e.createRangeOn(i).getItems())o.is("element")&&"table"===o.name&&o.hasAttribute("columnWidths")&&t.add(o)}return t}(e)){const e=an(i.getAttribute("columnWidths").split(","));t(e,i,this);const l=e.map((e=>`${e}%`)).join(",");i.getAttribute("columnWidths")!==l&&(o.setAttribute("columnWidths",l,i),n=!0)}return n}))}_registerConverters(){const e=this.editor.conversion;var t;e.for("upcast").attributeToAttribute({view:{name:"figure",key:"style",value:{width:/[\s\S]+/}},model:{name:"table",key:"tableWidth",value:e=>e.getStyle("width")}}),e.for("upcast").add((t=this._tableUtilsPlugin,e=>e.on("element:colgroup",((e,o,n)=>{const i=o.viewItem;if(!n.consumable.test(i,{name:!0}))return;n.consumable.consume(i,{name:!0});const l=o.modelCursor.findAncestor("table"),r=t.getColumns(l);let s=[...Array(r).keys()].map((e=>{const t=i.getChild(e);if(!t||!t.is("element","col"))return"auto";const o=t.getStyle("width");return o&&o.endsWith("%")?o:"auto"}));s.includes("auto")&&(s=an(s).map((e=>e+"%"))),n.writer.setAttribute("columnWidths",s.join(","),l)})))),e.for("downcast").attributeToAttribute({model:{name:"table",key:"tableWidth"},view:e=>({name:"figure",key:"style",value:{width:e}})}),e.for("downcast").add(un())}_registerResizingListeners(){const e=this.editor.editing.view;e.addObserver(ze),e.document.on("mousedown",this._onMouseDownHandler.bind(this),{priority:"high"}),this._domEmitter.listenTo(b.global.window.document,"mousemove",Yo(this._onMouseMoveHandler.bind(this),50)),this._domEmitter.listenTo(b.global.window.document,"mouseup",this._onMouseUpHandler.bind(this))}_onMouseDownHandler(e,t){const o=t.target;if(!o.hasClass("ck-table-column-resizer"))return;if(!this._isResizingAllowed)return;t.preventDefault(),e.stop();const n=this.editor,i=function(e,t,o){const n=Array(t.getColumns(e)),i=new f(e);for(const e of i){const t=o.editing.mapper.toViewElement(e.cell),i=dn(o.editing.view.domConverter.mapViewToDom(t));(!n[e.column]||i<n[e.column])&&(n[e.column]=rn(i))}return n}(n.editing.mapper.toModelElement(o.findAncestor("figure")),this._tableUtilsPlugin,n),l=o.findAncestor("table"),r=n.editing.view;[...l.getChildren()].find((e=>e.is("element","colgroup")))||r.change((e=>{!function(e,t,o){const n=e.createContainerElement("colgroup");for(let o=0;o<t.length;o++){const i=e.createEmptyElement("col"),l=`${rn(t[o]/sn(t)*100)}%`;e.setStyle("width",l,i),e.insert(e.createPositionAt(n,"end"),i)}e.insert(e.createPositionAt(o,"start"),n)}(e,i,l)})),this._isResizingActive=!0,this._resizingData=this._getResizingData(t,i),r.change((e=>function(e,t,o){const n=o.widths.viewFigureWidth/o.widths.viewFigureParentWidth;e.addClass("ck-table-resized",t),e.addClass("ck-table-column-resizer__active",o.elements.viewResizer),e.setStyle("width",`${rn(100*n)}%`,t.findAncestor("figure"))}(e,l,this._resizingData)))}_onMouseMoveHandler(e,t){if(!this._isResizingActive)return;if(!this._isResizingAllowed)return void this._onMouseUpHandler();const{columnPosition:o,flags:{isRightEdge:n,isTableCentered:i,isLtrContent:l},elements:{viewFigure:r,viewLeftColumn:s,viewRightColumn:a},widths:{viewFigureParentWidth:c,tableWidth:d,leftColumnWidth:u,rightColumnWidth:h}}=this._resizingData,b=40-u,m=n?c-d:h-40,g=(l?1:-1)*(n&&i?2:1),p=(f=(t.clientX-o)*g,w=Math.min(b,0),k=Math.max(m,0),rn(f<=w?w:f>=k?k:f));var f,w,k;0!==p&&this.editor.editing.view.change((e=>{const t=rn(100*(u+p)/d);if(e.setStyle("width",`${t}%`,s),n){const t=rn(100*(d+p)/c);e.setStyle("width",`${t}%`,r)}else{const t=rn(100*(h-p)/d);e.setStyle("width",`${t}%`,a)}}))}_onMouseUpHandler(){if(!this._isResizingActive)return;const{viewResizer:e,modelTable:t,viewFigure:o,viewColgroup:n}=this._resizingData.elements,i=this.editor,l=i.editing.view,r=t.getAttribute("columnWidths"),s=[...n.getChildren()].map((e=>e.getStyle("width"))).join(","),a=r!==s,c=t.getAttribute("tableWidth"),d=o.getStyle("width"),u=c!==d;(a||u)&&(this._isResizingAllowed?u?i.execute("resizeTableWidth",{table:t,tableWidth:`${rn(d)}%`,columnWidths:s}):i.execute("resizeColumnWidths",{columnWidths:s,table:t}):l.change((e=>{if(r){const t=r.split(",");for(const o of n.getChildren())e.setStyle("width",t.shift(),o)}else e.remove(n);u&&(c?e.setStyle("width",c,o):e.removeStyle("width",o)),r||c||e.removeClass("ck-table-resized",[...o.getChildren()].find((e=>"table"===e.name)))}))),l.change((t=>{t.removeClass("ck-table-column-resizer__active",e)})),this._isResizingActive=!1,this._resizingData=null}_getResizingData(e,t){const o=this.editor,n=e.domEvent.clientX,i=e.target,l=i.findAncestor("td")||i.findAncestor("th"),r=o.editing.mapper.toModelElement(l),s=r.findAncestor("table"),a=function(e,t){const o=t.getCellLocation(e).column;return{leftEdge:o,rightEdge:o+(e.getAttribute("colspan")||1)-1}}(r,this._tableUtilsPlugin).rightEdge,c=a===this._tableUtilsPlugin.getColumns(s)-1,d=!s.hasAttribute("tableAlignment"),u="rtl"!==o.locale.contentLanguageDirection,h=l.findAncestor("table"),b=h.findAncestor("figure"),m=[...h.getChildren()].find((e=>e.is("element","colgroup"))),g=m.getChild(a),p=c?void 0:m.getChild(a+1);return{columnPosition:n,flags:{isRightEdge:c,isTableCentered:d,isLtrContent:u},elements:{viewResizer:i,modelTable:s,viewFigure:b,viewColgroup:m,viewLeftColumn:g,viewRightColumn:p},widths:{viewFigureParentWidth:ln(o.editing.view.domConverter.mapViewToDom(b.parent)),viewFigureWidth:ln(o.editing.view.domConverter.mapViewToDom(b)),tableWidth:on(s,o),leftColumnWidth:t[a],rightColumnWidth:c?void 0:t[a+1]}}}_registerColgroupFixer(){const e=this.editor;this.listenTo(e.editing.view.document,"layoutChanged",(()=>{const t=e.editing.view.document.selection.getFirstPosition().getAncestors().reverse().find((e=>"table"===e.name)),o=t&&[...t.getChildren()].find((e=>e.is("element","colgroup"))),n=e.model.document.selection.getFirstPosition().findAncestor("table");n&&n.hasAttribute("columnWidths")&&t&&!o&&e.editing.reconvertItem(n)}),{priority:"low"})}_registerResizerInserter(){const e=this.editor.editing.view;e.on("render",(()=>{for(const t of e.createRangeIn(e.document.getRoot()))["td","th"].includes(t.item.name)&&e.change((e=>{cn(e,t.item)}))}),{priority:"lowest"})}}var bn=o(975),mn={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};he()(bn.Z,mn);bn.Z.locals;class gn extends e.Plugin{static get requires(){return[hn,so]}static get pluginName(){return"TableColumnResize"}}})(),(window.CKEditor5=window.CKEditor5||{}).table=n})();;
/**
 * @file
 * Text behaviors.
 */

(function ($, Drupal) {
  /**
   * Auto-hide summary textarea if empty and show hide and unhide links.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches auto-hide behavior on `text-summary` events.
   */
  Drupal.behaviors.textSummary = {
    attach(context, settings) {
      once('text-summary', '.js-text-summary', context).forEach((summary) => {
        const $widget = $(summary).closest('.js-text-format-wrapper');

        const $summary = $widget.find('.js-text-summary-wrapper');
        const $summaryLabel = $summary.find('label').eq(0);
        const $full = $widget.children('.js-form-type-textarea');
        let $fullLabel = $full.find('label').eq(0);

        // Create a placeholder label when the field cardinality is greater
        // than 1.
        if ($fullLabel.length === 0) {
          $fullLabel = $('<label></label>').prependTo($full);
        }

        // To ensure the summary toggle is shown in case the label is hidden
        // (in multivalue fields in particular), show the label but hide
        // the original text of the label.
        if ($fullLabel.hasClass('visually-hidden')) {
          $fullLabel.html(
            (index, oldHtml) =>
              `<span class="visually-hidden">${oldHtml}</span>`,
          );
          $fullLabel.removeClass('visually-hidden');
        }

        // Set up the edit/hide summary link.
        const $link = $(
          `<span class="field-edit-link"> (<button type="button" class="link link-edit-summary">${Drupal.t(
            'Hide summary',
          )}</button>)</span>`,
        );
        const $button = $link.find('button');
        let toggleClick = true;
        $link
          .on('click', (e) => {
            if (toggleClick) {
              $summary.hide();
              $button.html(Drupal.t('Edit summary'));
              $link.appendTo($fullLabel);
            } else {
              $summary.show();
              $button.html(Drupal.t('Hide summary'));
              $link.appendTo($summaryLabel);
            }
            e.preventDefault();
            toggleClick = !toggleClick;
          })
          .appendTo($summaryLabel);

        // If no summary is set, hide the summary field.
        if (summary.value === '') {
          $link.trigger('click');
        }
      });
    },
  };
})(jQuery, Drupal);
;
/**
 * @file
 * Builds a nested accordion widget.
 *
 * Invoke on an HTML list element with the jQuery plugin pattern.
 *
 * @example
 * $('.toolbar-menu').drupalToolbarMenu();
 */

(function ($, Drupal, drupalSettings) {
  /**
   * Store the open menu tray.
   */
  let activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    const ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse'),
    };

    /**
     * Toggle the open/close state of a list is a menu.
     *
     * @param {jQuery} $item
     *   The li item to be toggled.
     *
     * @param {Boolean} switcher
     *   A flag that forces toggleClass to add or a remove a class, rather than
     *   simply toggling its presence.
     */
    function toggleList($item, switcher) {
      const $toggle = $item
        .children('.toolbar-box')
        .children('.toolbar-handle');
      switcher =
        typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      // Toggle the item open state.
      $item.toggleClass('open', switcher);
      // Twist the toggle.
      $toggle.toggleClass('open', switcher);
      // Adjust the toggle text.
      $toggle.find('.action').each((index, element) => {
        // Expand Structure, Collapse Structure.
        element.textContent = switcher ? ui.handleClose : ui.handleOpen;
      });
    }

    /**
     * Handle clicks from the disclosure button on an item with sub-items.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function toggleClickHandler(event) {
      const $toggle = $(event.target);
      const $item = $toggle.closest('li');
      // Toggle the list item.
      toggleList($item);
      // Close open sibling menus.
      const $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    /**
     * Handle clicks from a menu item link.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function linkClickHandler(event) {
      // If the toolbar is positioned fixed (and therefore hiding content
      // underneath), then users expect clicks in the administration menu tray
      // to take them to that destination but for the menu tray to be closed
      // after clicking: otherwise the toolbar itself is obstructing the view
      // of the destination they chose.
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      // Stopping propagation to make sure that once a toolbar-box is clicked
      // (the whitespace part), the page is not redirected anymore.
      event.stopPropagation();
    }

    /**
     * Add markup to the menu elements.
     *
     * Items with sub-elements have a list toggle attached to them. Menu item
     * links and the corresponding list toggle are wrapped with in a div
     * classed with .toolbar-box. The .toolbar-box div provides a positioning
     * context for the item list toggle.
     *
     * @param {jQuery} $menu
     *   The root of the menu to be initialized.
     */
    function initItems($menu) {
      const options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: '',
      };
      // Initialize items and their links.
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      // Add a handle to each list item if it has a menu.
      $menu.find('li').each((index, element) => {
        const $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          const $box = $item.children('.toolbar-box');
          const $link = $box.find('a');
          options.text = Drupal.t('@label', {
            '@label': $link.length ? $link[0].textContent : '',
          });
          $item
            .children('.toolbar-box')
            .append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    /**
     * Adds a level class to each list based on its depth in the menu.
     *
     * This function is called recursively on each sub level of lists elements
     * until the depth of the menu is exhausted.
     *
     * @param {jQuery} $lists
     *   A jQuery object of ul elements.
     *
     * @param {number} level
     *   The current level number to be assigned to the list elements.
     */
    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      const $lis = $lists.children('li').addClass(`level-${level}`);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    /**
     * On page load, open the active menu item.
     *
     * Marks the trail of the active link in the menu back to the root of the
     * menu with .menu-item--active-trail.
     *
     * @param {jQuery} $menu
     *   The root of the menu.
     */
    function openActiveItem($menu) {
      const pathItem = $menu.find(`a[href="${window.location.pathname}"]`);
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        const $activeItem = $menu
          .find(`a[href="${activeItem}"]`)
          .addClass('menu-item--active');
        const $activeTrail = $activeItem
          .parentsUntil('.root', 'li')
          .addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    // Return the jQuery object.
    return this.each(function (selector) {
      const menu = once('toolbar-menu', this);
      if (menu.length) {
        const $menu = $(menu);
        // Bind event handlers.
        $menu
          .on('click.toolbar', '.toolbar-box', toggleClickHandler)
          .on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        // Restore previous and active states.
        openActiveItem($menu);
      }
    });
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @param {object} options
   *   Options for the button.
   * @param {string} options.class
   *   Class to set on the button.
   * @param {string} options.action
   *   Action for the button.
   * @param {string} options.text
   *   Used as label for the button.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return `<button class="${options.class}"><span class="action">${options.action}</span> <span class="label">${options.text}</span></button>`;
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Defines the behavior of the Drupal administration toolbar.
 */

(function ($, Drupal, drupalSettings) {
  // Merge run-time settings with the defaults.
  const options = $.extend(
    {
      breakpoints: {
        'toolbar.narrow': '',
        'toolbar.standard': '',
        'toolbar.wide': '',
      },
    },
    drupalSettings.toolbar,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        horizontal: Drupal.t('Horizontal orientation'),
        vertical: Drupal.t('Vertical orientation'),
      },
    },
  );

  /**
   * Registers tabs with the toolbar.
   *
   * The Drupal toolbar allows modules to register top-level tabs. These may
   * point directly to a resource or toggle the visibility of a tray.
   *
   * Modules register tabs with hook_toolbar().
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the toolbar rendering functionality to the toolbar element.
   */
  Drupal.behaviors.toolbar = {
    attach(context) {
      // Verify that the user agent understands media queries. Complex admin
      // toolbar layouts require media query support.
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      // Process the administrative toolbar.
      once('toolbar', '#toolbar-administration', context).forEach((toolbar) => {
        // Establish the toolbar models and views.
        const model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(
            localStorage.getItem('Drupal.toolbar.trayVerticalLocked'),
          ),
          activeTab: document.getElementById(
            JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID')),
          ),
          height: $('#toolbar-administration').outerHeight(),
        });

        Drupal.toolbar.models.toolbarModel = model;

        // Attach a listener to the configured media query breakpoints.
        // Executes it before Drupal.toolbar.views to avoid extra rendering.
        Object.keys(options.breakpoints).forEach((label) => {
          const mq = options.breakpoints[label];
          const mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          // Curry the model and the label of the media query breakpoint to
          // the mediaQueryChangeHandler function.
          mql.addListener(
            Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label),
          );
          // Fire the mediaQueryChangeHandler for each configured breakpoint
          // so that they process once.
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView =
          new Drupal.toolbar.ToolbarVisualView({
            el: toolbar,
            model,
            strings: options.strings,
          });
        Drupal.toolbar.views.toolbarAuralView =
          new Drupal.toolbar.ToolbarAuralView({
            el: toolbar,
            model,
            strings: options.strings,
          });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView(
          {
            el: toolbar,
            model,
          },
        );

        // Force layout render to fix mobile view. Only needed on load, not
        // for every media query match.
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        // Render collapsible menus.
        const menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView(
          {
            el: $(toolbar).find('.toolbar-menu-administration').get(0),
            model: menuModel,
            strings: options.strings,
          },
        );

        // Handle the resolution of Drupal.toolbar.setSubtrees.
        // This is handled with a deferred so that the function may be invoked
        // asynchronously.
        Drupal.toolbar.setSubtrees.done((subtrees) => {
          menuModel.set('subtrees', subtrees);
          const theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem(
            `Drupal.toolbar.subtrees.${theme}`,
            JSON.stringify(subtrees),
          );
          // Indicate on the toolbarModel that subtrees are now loaded.
          model.set('areSubtreesLoaded', true);
        });

        // Trigger an initial attempt to load menu subitems. This first attempt
        // is made after the media query handlers have had an opportunity to
        // process. The toolbar starts in the vertical orientation by default,
        // unless the viewport is wide enough to accommodate a horizontal
        // orientation. Thus we give the Toolbar a chance to determine if it
        // should be set to horizontal orientation before attempting to load
        // menu subtrees.
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document)
          // Update the model when the viewport offset changes.
          .on('drupalViewportOffsetChange.toolbar', (event, offsets) => {
            model.set('offsets', offsets);
          });

        // Broadcast model changes to other modules.
        model
          .on('change:orientation', (model, orientation) => {
            $(document).trigger('drupalToolbarOrientationChange', orientation);
          })
          .on('change:activeTab', (model, tab) => {
            $(document).trigger('drupalToolbarTabChange', tab);
          })
          .on('change:activeTray', (model, tray) => {
            $(document).trigger('drupalToolbarTrayChange', tray);
          });

        // If the toolbar's orientation is horizontal and no active tab is
        // defined then show the tray of the first toolbar tab by default (but
        // not the first 'Home' toolbar tab).
        if (
          Drupal.toolbar.models.toolbarModel.get('orientation') ===
            'horizontal' &&
          Drupal.toolbar.models.toolbarModel.get('activeTab') === null
        ) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $(
              '.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a',
            ).get(0),
          });
        }

        $(window).on({
          'dialog:aftercreate': (event, dialog, $element, settings) => {
            const $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            // When off-canvas is positioned in top, toolbar has to be moved down.
            if (settings.drupalOffCanvasPosition === 'top') {
              const height = Drupal.offCanvas
                .getContainer($element)
                .outerHeight();
              $toolbar.css('margin-top', `${height}px`);

              $element.on('dialogContentResize.off-canvas', () => {
                const newHeight = Drupal.offCanvas
                  .getContainer($element)
                  .outerHeight();
                $toolbar.css('margin-top', `${newHeight}px`);
              });
            }
          },
          'dialog:beforeclose': () => {
            $('#toolbar-bar').css('margin-top', '0');
          },
        });
      });
    },
  };

  /**
   * Toolbar methods of Backbone objects.
   *
   * @namespace
   */
  Drupal.toolbar = {
    /**
     * A hash of View instances.
     *
     * @type {object.<string, Backbone.View>}
     */
    views: {},

    /**
     * A hash of Model instances.
     *
     * @type {object.<string, Backbone.Model>}
     */
    models: {},

    /**
     * A hash of MediaQueryList objects tracked by the toolbar.
     *
     * @type {object.<string, object>}
     */
    mql: {},

    /**
     * Accepts a list of subtree menu elements.
     *
     * A deferred object that is resolved by an inlined JavaScript callback.
     *
     * @type {jQuery.Deferred}
     *
     * @see toolbar_subtrees_jsonp().
     */
    setSubtrees: new $.Deferred(),

    /**
     * Respond to configured narrow media query changes.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   A toolbar model
     * @param {string} label
     *   Media query label.
     * @param {object} mql
     *   A MediaQueryList object.
     */
    mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false,
          });
          // If the toolbar doesn't have an explicit orientation yet, or if the
          // narrow media query doesn't match then set the orientation to
          // vertical.
          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches,
          });
          break;

        case 'toolbar.wide':
          model.set(
            {
              orientation:
                mql.matches && !model.get('locked') ? 'horizontal' : 'vertical',
            },
            { validate: true },
          );
          // The tray orientation toggle visibility does not need to be
          // validated.
          model.set({
            isTrayToggleVisible: mql.matches,
          });
          break;

        default:
          break;
      }
    },
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarOrientationToggle = function () {
    return (
      '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' +
      '<button class="toolbar-icon" type="button"></button>' +
      '</div></div>'
    );
  };

  /**
   * Ajax command to set the toolbar subtrees.
   *
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   JSON response from the Ajax request.
   * @param {number} [status]
   *   XMLHttpRequest status.
   */
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (
    ajax,
    response,
    status,
  ) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * A Backbone Model for collapsible menus.
 */

(function (Backbone, Drupal) {
  /**
   * Backbone Model for collapsible menus.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.MenuModel = Backbone.Model.extend(
    /** @lends Drupal.toolbar.MenuModel# */ {
      /**
       * @type {object}
       *
       * @prop {object} subtrees
       */
      defaults: /** @lends Drupal.toolbar.MenuModel# */ {
        /**
         * @type {object}
         */
        subtrees: {},
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone Model for the toolbar.
 */

(function (Backbone, Drupal) {
  /**
   * Backbone model for the toolbar.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend(
    /** @lends Drupal.toolbar.ToolbarModel# */ {
      /**
       * @type {object}
       *
       * @prop activeTab
       * @prop activeTray
       * @prop isOriented
       * @prop isFixed
       * @prop areSubtreesLoaded
       * @prop isViewportOverflowConstrained
       * @prop orientation
       * @prop locked
       * @prop isTrayToggleVisible
       * @prop height
       * @prop offsets
       */
      defaults: /** @lends Drupal.toolbar.ToolbarModel# */ {
        /**
         * The active toolbar tab. All other tabs should be inactive under
         * normal circumstances. It will remain active across page loads. The
         * active item is stored as an ID selector e.g. '#toolbar-item--1'.
         *
         * @type {string}
         */
        activeTab: null,

        /**
         * Represents whether a tray is open or not. Stored as an ID selector e.g.
         * '#toolbar-item--1-tray'.
         *
         * @type {string}
         */
        activeTray: null,

        /**
         * Indicates whether the toolbar is displayed in an oriented fashion,
         * either horizontal or vertical.
         *
         * @type {boolean}
         */
        isOriented: false,

        /**
         * Indicates whether the toolbar is positioned absolute (false) or fixed
         * (true).
         *
         * @type {boolean}
         */
        isFixed: false,

        /**
         * Menu subtrees are loaded through an AJAX request only when the Toolbar
         * is set to a vertical orientation.
         *
         * @type {boolean}
         */
        areSubtreesLoaded: false,

        /**
         * If the viewport overflow becomes constrained, isFixed must be true so
         * that elements in the trays aren't lost off-screen and impossible to
         * get to.
         *
         * @type {boolean}
         */
        isViewportOverflowConstrained: false,

        /**
         * The orientation of the active tray.
         *
         * @type {string}
         */
        orientation: 'horizontal',

        /**
         * A tray is locked if a user toggled it to vertical. Otherwise a tray
         * will switch between vertical and horizontal orientation based on the
         * configured breakpoints. The locked state will be maintained across page
         * loads.
         *
         * @type {boolean}
         */
        locked: false,

        /**
         * Indicates whether the tray orientation toggle is visible.
         *
         * @type {boolean}
         */
        isTrayToggleVisible: true,

        /**
         * The height of the toolbar.
         *
         * @type {number}
         */
        height: null,

        /**
         * The current viewport offsets determined by {@link Drupal.displace}. The
         * offsets suggest how a module might position is components relative to
         * the viewport.
         *
         * @type {object}
         *
         * @prop {number} top
         * @prop {number} right
         * @prop {number} bottom
         * @prop {number} left
         */
        offsets: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },

      /**
       * {@inheritdoc}
       *
       * @param {object} attributes
       *   Attributes for the toolbar.
       * @param {object} options
       *   Options for the toolbar.
       *
       * @return {string|undefined}
       *   Returns an error message if validation failed.
       */
      validate(attributes, options) {
        // Prevent the orientation being set to horizontal if it is locked, unless
        // override has not been passed as an option.
        if (
          attributes.orientation === 'horizontal' &&
          this.get('locked') &&
          !options.override
        ) {
          return Drupal.t(
            'The toolbar cannot be set to a horizontal orientation when it is locked.',
          );
        }
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the body element.
 */

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.BodyVisualView# */ {
      /**
       * Adjusts the body element with the toolbar position and dimension changes.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:activeTray ', this.render);
        this.listenTo(
          this.model,
          'change:isFixed change:isViewportOverflowConstrained',
          this.isToolbarFixed,
        );
      },

      isToolbarFixed() {
        // When the toolbar is fixed, it will not scroll with page scrolling.
        const isViewportOverflowConstrained = this.model.get(
          'isViewportOverflowConstrained',
        );
        $('body').toggleClass(
          'toolbar-fixed',
          isViewportOverflowConstrained || this.model.get('isFixed'),
        );
      },

      /**
       * {@inheritdoc}
       */
      render() {
        $('body')
          // Toggle the toolbar-tray-open class on the body element. The class is
          // applied when a toolbar tray is active. Padding might be applied to
          // the body element to prevent the tray from overlapping content.
          .toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
      },
    },
  );
})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone view for the collapsible menus.
 */

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.MenuVisualView# */ {
      /**
       * Backbone View for collapsible menus.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:subtrees', this.render);
      },

      /**
       * {@inheritdoc}
       */
      render() {
        const subtrees = this.model.get('subtrees');
        // Add subtrees.
        Object.keys(subtrees || {}).forEach((id) => {
          $(
            once('toolbar-subtrees', this.$el.find(`#toolbar-link-${id}`)),
          ).after(subtrees[id]);
        });
        // Render the main menu as a nested, collapsible accordion.
        if ('drupalToolbarMenu' in $.fn) {
          this.$el.children('.toolbar-menu').drupalToolbarMenu();
        }
      },
    },
  );
})(jQuery, Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the aural feedback of the toolbar.
 */

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend(
    /** @lends Drupal.toolbar.ToolbarAuralView# */ {
      /**
       * Backbone view for the aural feedback of the toolbar.
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view.
       * @param {object} options.strings
       *   Various strings to use in the view.
       */
      initialize(options) {
        this.strings = options.strings;

        this.listenTo(
          this.model,
          'change:orientation',
          this.onOrientationChange,
        );
        this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
      },

      /**
       * Announces an orientation change.
       *
       * @param {Drupal.toolbar.ToolbarModel} model
       *   The toolbar model in question.
       * @param {string} orientation
       *   The new value of the orientation attribute in the model.
       */
      onOrientationChange(model, orientation) {
        Drupal.announce(
          Drupal.t('Tray orientation changed to @orientation.', {
            '@orientation': orientation,
          }),
        );
      },

      /**
       * Announces a changed active tray.
       *
       * @param {Drupal.toolbar.ToolbarModel} model
       *   The toolbar model in question.
       * @param {HTMLElement} tray
       *   The new value of the tray attribute in the model.
       */
      onActiveTrayChange(model, tray) {
        const relevantTray =
          tray === null ? model.previous('activeTray') : tray;
        // Current activeTray and previous activeTray are empty, no state change
        // to announce.
        if (!relevantTray) {
          return;
        }
        const action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
        const trayNameElement =
          relevantTray.querySelector('.toolbar-tray-name');
        let text;
        if (trayNameElement !== null) {
          text = Drupal.t('Tray "@tray" @action.', {
            '@tray': trayNameElement.textContent,
            '@action': action,
          });
        } else {
          text = Drupal.t('Tray @action.', { '@action': action });
        }
        Drupal.announce(text);
      },
    },
  );
})(Backbone, Drupal);
;
/**
 * @file
 * A Backbone view for the toolbar element. Listens to mouse & touch.
 */

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend(
    /** @lends Drupal.toolbar.ToolbarVisualView# */ {
      /**
       * Event map for the `ToolbarVisualView`.
       *
       * @return {object}
       *   A map of events.
       */
      events() {
        // Prevents delay and simulated mouse events.
        const touchEndToClick = function (event) {
          event.preventDefault();
          event.target.click();
        };

        return {
          'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
          'click .toolbar-toggle-orientation button':
            'onOrientationToggleClick',
          'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
          'touchend .toolbar-toggle-orientation button': touchEndToClick,
        };
      },

      /**
       * Backbone view for the toolbar element. Listens to mouse & touch.
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view object.
       * @param {object} options.strings
       *   Various strings to use in the view.
       */
      initialize(options) {
        this.strings = options.strings;

        this.listenTo(
          this.model,
          'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible',
          this.render,
        );
        this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
        this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
        this.listenTo(
          this.model,
          'change:activeTab change:orientation change:isOriented',
          this.updateToolbarHeight,
        );

        // Add the tray orientation toggles, but only if there is a menu.
        this.$el
          .find('.toolbar-tray .toolbar-lining')
          .has('.toolbar-menu')
          .append(Drupal.theme('toolbarOrientationToggle'));

        // Trigger an activeTab change so that listening scripts can respond on
        // page load. This will call render.
        this.model.trigger('change:activeTab');
      },

      /**
       * Update the toolbar element height.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      updateToolbarHeight() {
        const toolbarTabOuterHeight =
          $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
        const toolbarTrayHorizontalOuterHeight =
          $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
        this.model.set(
          'height',
          toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight,
        );

        $('body').css({
          'padding-top': this.model.get('height'),
        });
        $('html').css({
          'scroll-padding-top': this.model.get('height'),
        });

        this.triggerDisplace();
      },

      // Trigger a recalculation of viewport displacing elements. Use setTimeout
      // to ensure this recalculation happens after changes to visual elements
      // have processed.
      triggerDisplace() {
        _.defer(() => {
          Drupal.displace(true);
        });
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.toolbar.ToolbarVisualView}
       *   The `ToolbarVisualView` instance.
       */
      render() {
        this.updateTabs();
        this.updateTrayOrientation();
        this.updateBarAttributes();

        $('body').removeClass('toolbar-loading');

        // Load the subtrees if the orientation of the toolbar is changed to
        // vertical. This condition responds to the case that the toolbar switches
        // from horizontal to vertical orientation. The toolbar starts in a
        // vertical orientation by default and then switches to horizontal during
        // initialization if the media query conditions are met. Simply checking
        // that the orientation is vertical here would result in the subtrees
        // always being loaded, even when the toolbar initialization ultimately
        // results in a horizontal orientation.
        //
        // @see Drupal.behaviors.toolbar.attach() where admin menu subtrees
        // loading is invoked during initialization after media query conditions
        // have been processed.
        if (
          this.model.changed.orientation === 'vertical' ||
          this.model.changed.activeTab
        ) {
          this.loadSubtrees();
        }

        return this;
      },

      /**
       * Responds to a toolbar tab click.
       *
       * @param {jQuery.Event} event
       *   The event triggered.
       */
      onTabClick(event) {
        // If this tab has a tray associated with it, it is considered an
        // activatable tab.
        if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
          const activeTab = this.model.get('activeTab');
          const clickedTab = event.currentTarget;

          // Set the event target as the active item if it is not already.
          this.model.set(
            'activeTab',
            !activeTab || clickedTab !== activeTab ? clickedTab : null,
          );

          event.preventDefault();
          event.stopPropagation();
        }
      },

      /**
       * Toggles the orientation of a toolbar tray.
       *
       * @param {jQuery.Event} event
       *   The event triggered.
       */
      onOrientationToggleClick(event) {
        const orientation = this.model.get('orientation');
        // Determine the toggle-to orientation.
        const antiOrientation =
          orientation === 'vertical' ? 'horizontal' : 'vertical';
        const locked = antiOrientation === 'vertical';
        // Remember the locked state.
        if (locked) {
          localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
        } else {
          localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
        }
        // Update the model.
        this.model.set(
          {
            locked,
            orientation: antiOrientation,
          },
          {
            validate: true,
            override: true,
          },
        );

        event.preventDefault();
        event.stopPropagation();
      },

      /**
       * Updates the display of the tabs: toggles a tab and the associated tray.
       */
      updateTabs() {
        const $tab = $(this.model.get('activeTab'));
        // Deactivate the previous tab.
        $(this.model.previous('activeTab'))
          .removeClass('is-active')
          .prop('aria-pressed', false);
        // Deactivate the previous tray.
        $(this.model.previous('activeTray')).removeClass('is-active');

        // Activate the selected tab.
        if ($tab.length > 0) {
          $tab
            .addClass('is-active')
            // Mark the tab as pressed.
            .prop('aria-pressed', true);
          const name = $tab.attr('data-toolbar-tray');
          // Store the active tab name or remove the setting.
          const id = $tab.get(0).id;
          if (id) {
            localStorage.setItem(
              'Drupal.toolbar.activeTabID',
              JSON.stringify(id),
            );
          }
          // Activate the associated tray.
          const $tray = this.$el.find(
            `[data-toolbar-tray="${name}"].toolbar-tray`,
          );
          if ($tray.length) {
            $tray.addClass('is-active');
            this.model.set('activeTray', $tray.get(0));
          } else {
            // There is no active tray.
            this.model.set('activeTray', null);
          }
        } else {
          // There is no active tray.
          this.model.set('activeTray', null);
          localStorage.removeItem('Drupal.toolbar.activeTabID');
        }
      },

      /**
       * Update the attributes of the toolbar bar element.
       */
      updateBarAttributes() {
        const isOriented = this.model.get('isOriented');
        if (isOriented) {
          this.$el.find('.toolbar-bar').attr('data-offset-top', '');
        } else {
          this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
        }
        // Toggle between a basic vertical view and a more sophisticated
        // horizontal and vertical display of the toolbar bar and trays.
        this.$el.toggleClass('toolbar-oriented', isOriented);
      },

      /**
       * Updates the orientation of the active tray if necessary.
       */
      updateTrayOrientation() {
        const orientation = this.model.get('orientation');

        // The antiOrientation is used to render the view of action buttons like
        // the tray orientation toggle.
        const antiOrientation =
          orientation === 'vertical' ? 'horizontal' : 'vertical';

        // Toggle toolbar's parent classes before other toolbar classes to avoid
        // potential flicker and re-rendering.
        $('body')
          .toggleClass('toolbar-vertical', orientation === 'vertical')
          .toggleClass('toolbar-horizontal', orientation === 'horizontal');

        const removeClass =
          antiOrientation === 'horizontal'
            ? 'toolbar-tray-horizontal'
            : 'toolbar-tray-vertical';
        const $trays = this.$el
          .find('.toolbar-tray')
          .removeClass(removeClass)
          .addClass(`toolbar-tray-${orientation}`);

        // Update the tray orientation toggle button.
        const iconClass = `toolbar-icon-toggle-${orientation}`;
        const iconAntiClass = `toolbar-icon-toggle-${antiOrientation}`;
        const $orientationToggle = this.$el
          .find('.toolbar-toggle-orientation')
          .toggle(this.model.get('isTrayToggleVisible'));
        const $orientationToggleButton = $orientationToggle.find('button');
        $orientationToggleButton[0].value = antiOrientation;
        $orientationToggleButton
          .attr('title', this.strings[antiOrientation])
          .removeClass(iconClass)
          .addClass(iconAntiClass);
        $orientationToggleButton[0].textContent = this.strings[antiOrientation];

        // Update data offset attributes for the trays.
        const dir = document.documentElement.dir;
        const edge = dir === 'rtl' ? 'right' : 'left';
        // Remove data-offset attributes from the trays so they can be refreshed.
        $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
        // If an active vertical tray exists, mark it as an offset element.
        $trays
          .filter('.toolbar-tray-vertical.is-active')
          .attr(`data-offset-${edge}`, '');
        // If an active horizontal tray exists, mark it as an offset element.
        $trays
          .filter('.toolbar-tray-horizontal.is-active')
          .attr('data-offset-top', '');
      },

      /**
       * Sets the tops of the trays so that they align with the bottom of the bar.
       */
      adjustPlacement() {
        const $trays = this.$el.find('.toolbar-tray');
        if (!this.model.get('isOriented')) {
          $trays
            .removeClass('toolbar-tray-horizontal')
            .addClass('toolbar-tray-vertical');
        }
      },

      /**
       * Calls the endpoint URI that builds an AJAX command with the rendered
       * subtrees.
       *
       * The rendered admin menu subtrees HTML is cached on the client in
       * localStorage until the cache of the admin menu subtrees on the server-
       * side is invalidated. The subtreesHash is stored in localStorage as well
       * and compared to the subtreesHash in drupalSettings to determine when the
       * admin menu subtrees cache has been invalidated.
       */
      loadSubtrees() {
        const $activeTab = $(this.model.get('activeTab'));
        const orientation = this.model.get('orientation');
        // Only load and render the admin menu subtrees if:
        //   (1) They have not been loaded yet.
        //   (2) The active tab is the administration menu tab, indicated by the
        //       presence of the data-drupal-subtrees attribute.
        //   (3) The orientation of the tray is vertical.
        if (
          !this.model.get('areSubtreesLoaded') &&
          typeof $activeTab.data('drupal-subtrees') !== 'undefined' &&
          orientation === 'vertical'
        ) {
          const subtreesHash = drupalSettings.toolbar.subtreesHash;
          const theme = drupalSettings.ajaxPageState.theme;
          const endpoint = Drupal.url(`toolbar/subtrees/${subtreesHash}`);
          const cachedSubtreesHash = localStorage.getItem(
            `Drupal.toolbar.subtreesHash.${theme}`,
          );
          const cachedSubtrees = JSON.parse(
            localStorage.getItem(`Drupal.toolbar.subtrees.${theme}`),
          );
          const isVertical = this.model.get('orientation') === 'vertical';
          // If we have the subtrees in localStorage and the subtree hash has not
          // changed, then use the cached data.
          if (
            isVertical &&
            subtreesHash === cachedSubtreesHash &&
            cachedSubtrees
          ) {
            Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
          }
          // Only make the call to get the subtrees if the orientation of the
          // toolbar is vertical.
          else if (isVertical) {
            // Remove the cached menu information.
            localStorage.removeItem(`Drupal.toolbar.subtreesHash.${theme}`);
            localStorage.removeItem(`Drupal.toolbar.subtrees.${theme}`);
            // The AJAX response's command will trigger the resolve method of the
            // Drupal.toolbar.setSubtrees Promise.
            Drupal.ajax({ url: endpoint }).execute();
            // Cache the hash for the subtrees locally.
            localStorage.setItem(
              `Drupal.toolbar.subtreesHash.${theme}`,
              subtreesHash,
            );
          }
        }
      },
    },
  );
})(jQuery, Drupal, drupalSettings, Backbone);
;
/*! shepherd.js 10.0.1 */

'use strict';(function(O,pa){"object"===typeof exports&&"undefined"!==typeof module?module.exports=pa():"function"===typeof define&&define.amd?define(pa):(O="undefined"!==typeof globalThis?globalThis:O||self,O.Shepherd=pa())})(this,function(){function O(a,b){return!1!==b.clone&&b.isMergeableObject(a)?ea(Array.isArray(a)?[]:{},a,b):a}function pa(a,b,c){return a.concat(b).map(function(d){return O(d,c)})}function Db(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Sa(a){return Object.keys(a).concat(Db(a))}function Ta(a,b){try{return b in a}catch(c){return!1}}function Eb(a,b,c){var d={};c.isMergeableObject(a)&&Sa(a).forEach(function(e){d[e]=O(a[e],c)});Sa(b).forEach(function(e){if(!Ta(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ta(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:ea}else f=ea;d[e]=f(a[e],b[e],c)}else d[e]=O(b[e],c)});return d}function ea(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||pa;c.isMergeableObject=c.isMergeableObject||Fb;c.cloneUnlessOtherwiseSpecified=O;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?O(b,c):d?c.arrayMerge(a,b,c):Eb(a,b,c)}function Z(a){return"function"===typeof a}function qa(a){return"string"===typeof a}function Ua(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function Gb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function Hb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=Gb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function M(a){return a?(a.nodeName||"").toLowerCase():null}function K(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function fa(a){var b=K(a).Element;return a instanceof b||a instanceof Element}function F(a){var b=K(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function Ea(a){if("undefined"===typeof ShadowRoot)return!1;var b=K(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function N(a){return a.split("-")[0]}
function ha(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;F(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=ia(c.width)/a||1),0<b&&(e=ia(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function Fa(a){var b=ha(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Va(a,b){var c=
b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&Ea(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function P(a){return K(a).getComputedStyle(a)}function U(a){return((fa(a)?a.ownerDocument:a.document)||window.document).documentElement}function wa(a){return"html"===M(a)?a:a.assignedSlot||a.parentNode||(Ea(a)?a.host:null)||U(a)}function Wa(a){return F(a)&&"fixed"!==P(a).position?a.offsetParent:null}function ra(a){for(var b=K(a),c=Wa(a);c&&0<=["table","td",
"th"].indexOf(M(c))&&"static"===P(c).position;)c=Wa(c);if(c&&("html"===M(c)||"body"===M(c)&&"static"===P(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!F(a)||"fixed"!==P(a).position)for(a=wa(a),Ea(a)&&(a=a.host);F(a)&&0>["html","body"].indexOf(M(a));){var d=P(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||
c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function Ga(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Xa(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function Ya(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function ja(a){return a.split("-")[1]}function Za(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,l=a.position,m=a.gpuAcceleration,k=a.adaptive,p=a.roundOffsets,q=a.isFixed;a=g.x;a=void 0===
a?0:a;var n=g.y,r=void 0===n?0:n;n="function"===typeof p?p({x:a,y:r}):{x:a,y:r};a=n.x;r=n.y;n=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var x="left",h="top",t=window;if(k){var v=ra(c),A="clientHeight",u="clientWidth";v===K(c)&&(v=U(c),"static"!==P(v).position&&"absolute"===l&&(A="scrollHeight",u="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)h="bottom",r-=(q&&v===t&&t.visualViewport?t.visualViewport.height:v[A])-d.height,r*=m?1:-1;if("left"===e||("top"===e||"bottom"===e)&&
"end"===f)x="right",a-=(q&&v===t&&t.visualViewport?t.visualViewport.width:v[u])-d.width,a*=m?1:-1}c=Object.assign({position:l},k&&Ib);!0===p?(p=r,d=window.devicePixelRatio||1,a={x:ia(a*d)/d||0,y:ia(p*d)/d||0}):a={x:a,y:r};p=a;a=p.x;r=p.y;if(m){var w;return Object.assign({},c,(w={},w[h]=g?"0":"",w[x]=n?"0":"",w.transform=1>=(t.devicePixelRatio||1)?"translate("+a+"px, "+r+"px)":"translate3d("+a+"px, "+r+"px, 0)",w))}return Object.assign({},c,(b={},b[h]=g?r+"px":"",b[x]=n?a+"px":"",b.transform="",b))}
function xa(a){return a.replace(/left|right|bottom|top/g,function(b){return Jb[b]})}function $a(a){return a.replace(/start|end/g,function(b){return Kb[b]})}function Ha(a){a=K(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function Ia(a){return ha(U(a)).left+Ha(a).scrollLeft}function Ja(a){a=P(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function ab(a){return 0<=["html","body","#document"].indexOf(M(a))?a.ownerDocument.body:F(a)&&Ja(a)?a:ab(wa(a))}function sa(a,
b){var c;void 0===b&&(b=[]);var d=ab(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=K(d);d=a?[c].concat(c.visualViewport||[],Ja(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(sa(wa(d)))}function Ka(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function bb(a,b){if("viewport"===b){b=K(a);var c=U(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(e=b.offsetLeft,
f=b.offsetTop));a={width:d,height:c,x:e+Ia(a),y:f};a=Ka(a)}else fa(b)?(a=ha(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=U(a),a=U(f),d=Ha(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=L(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=L(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+Ia(f),d=-d.scrollTop,"rtl"===P(b||
a).direction&&(f+=L(a.clientWidth,b?b.clientWidth:0)-c),a=Ka({width:c,height:e,x:f,y:d}));return a}function Lb(a){var b=sa(wa(a)),c=0<=["absolute","fixed"].indexOf(P(a).position)&&F(a)?ra(a):a;return fa(c)?b.filter(function(d){return fa(d)&&Va(d,c)&&"body"!==M(d)}):[]}function Mb(a,b,c){b="clippingParents"===b?Lb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=bb(a,e);d.top=L(e.top,d.top);d.right=V(e.right,d.right);d.bottom=V(e.bottom,d.bottom);d.left=L(e.left,d.left);return d},bb(a,
c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function cb(a){var b=a.reference,c=a.element,d=(a=a.placement)?N(a):null;a=a?ja(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?Ga(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=
b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ta(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,l=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=Xa("number"!==typeof c?c:Ya(c,ua));g=a.rects.popper;l=a.elements[l?"popper"===d?"reference":"popper":d];e=Mb(fa(l)?l:l.contextElement||U(a.elements.popper),
e,f);f=ha(a.elements.reference);l=cb({reference:f,element:g,strategy:"absolute",placement:b});g=Ka(Object.assign({},g,l));f="popper"===d?g:f;var m={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var k=a[b];Object.keys(m).forEach(function(p){var q=0<=["right","bottom"].indexOf(p)?1:-1,n=0<=["top","bottom"].indexOf(p)?"y":"x";m[p]+=k[n]*q})}return m}function Nb(a,b){void 0===b&&(b={});var c=
b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,g=b.allowedAutoPlacements,l=void 0===g?db:g,m=ja(b.placement);b=m?f?eb:eb.filter(function(p){return ja(p)===m}):ua;f=b.filter(function(p){return 0<=l.indexOf(p)});0===f.length&&(f=b);var k=f.reduce(function(p,q){p[q]=ta(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[N(q)];return p},{});return Object.keys(k).sort(function(p,q){return k[p]-k[q]})}function Ob(a){if("auto"===N(a))return[];var b=xa(a);return[$a(a),b,$a(b)]}function fb(a,
b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function gb(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Pb(a,b,c){void 0===c&&(c=!1);var d=F(b),e;if(e=F(b)){var f=b.getBoundingClientRect();e=ia(f.width)/b.offsetWidth||1;f=ia(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=U(b);a=ha(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==M(b)||Ja(e))f=
b!==K(b)&&F(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:Ha(b);F(b)?(g=ha(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=Ia(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Qb(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Rb(a){var b=
Qb(a);return Sb.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===d}))},[])}function Tb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Ub(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function hb(){for(var a=
arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&"function"===typeof d.getBoundingClientRect)})}function La(){La=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return La.apply(this,arguments)}function Vb(){return[{name:"applyStyles",fn(a){let {state:b}=a;Object.keys(b.elements).forEach(c=>{if("popper"===c){var d=b.attributes[c]||
{},e=b.elements[c];Object.assign(e.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});Object.keys(d).forEach(f=>{let g=d[f];!1===g?e.removeAttribute(f):e.setAttribute(f,!0===g?"":g)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function ib(a){return{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus({preventScroll:!0})},300)}}}function jb(a){return qa(a)&&""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Ma(){let a=
Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function kb(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(e=>e.name);b=b.modifiers.filter(e=>!d.includes(e.name));c.modifiers=Array.from(new Set([...b,...a.popperOptions.modifiers]))}return c}return b}function G(){}
function Wb(a,b){for(let c in b)a[c]=b[c];return a}function ka(a){return a()}function lb(a){return"function"===typeof a}function Q(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function H(a){a.parentNode.removeChild(a)}function mb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function ya(a,b,c,d){a.addEventListener(b,c,d);return()=>a.removeEventListener(b,c,d)}function B(a,b,c){null==c?a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}
function nb(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:B(a,d,b[d])}function la(a,b,c){a.classList[c?"add":"remove"](b)}function za(){if(!R)throw Error("Function called outside component initialization");return R}function Na(a){Aa.push(a)}function ob(){let a=R;do{for(;Ba<va.length;){var b=va[Ba];Ba++;R=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(ka);
var c=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,c);b.after_update.forEach(Na)}}R=null;for(Ba=va.length=0;ma.length;)ma.pop()();for(b=0;b<Aa.length;b+=1)c=Aa[b],Oa.has(c)||(Oa.add(c),c());Aa.length=0}while(va.length);for(;pb.length;)pb.pop()();Pa=!1;Oa.clear();R=a}function aa(){ba={r:0,c:[],p:ba}}function ca(){ba.r||ba.c.forEach(ka);ba=ba.p}function z(a,b){a&&a.i&&(Ca.delete(a),a.i(b))}function C(a,b,c,d){a&&a.o?Ca.has(a)||(Ca.add(a),ba.c.push(()=>{Ca.delete(a);d&&(c&&a.d(1),d())}),a.o(b)):
d&&d()}function da(a){a&&a.c()}function W(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:g,after_update:l}=a.$$;e&&e.m(b,c);d||Na(()=>{let m=f.map(ka).filter(lb);g?g.push(...m):m.forEach(ka);a.$$.on_mount=[]});l.forEach(Na)}function X(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(ka),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function S(a,b,c,d,e,f,g,l){void 0===l&&(l=[-1]);let m=R;R=a;let k=a.$$={fragment:null,ctx:null,props:f,update:G,not_equal:e,bound:Object.create(null),
on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(b.context||(m?m.$$.context:[])),callbacks:Object.create(null),dirty:l,skip_bound:!1,root:b.target||m.$$.root};g&&g(k.root);let p=!1;k.ctx=c?c(a,b.props||{},function(q,n){let r=(2>=arguments.length?0:arguments.length-2)?2>=arguments.length?void 0:arguments[2]:n;if(k.ctx&&e(k.ctx[q],k.ctx[q]=r)){if(!k.skip_bound&&k.bound[q])k.bound[q](r);p&&(-1===a.$$.dirty[0]&&(va.push(a),Pa||(Pa=!0,Xb.then(ob)),a.$$.dirty.fill(0)),
a.$$.dirty[q/31|0]|=1<<q%31)}return n}):[];k.update();p=!0;k.before_update.forEach(ka);k.fragment=d?d(k.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),k.fragment&&k.fragment.l(c),c.forEach(H)):k.fragment&&k.fragment.c(),b.intro&&z(a.$$.fragment),W(a,b.target,b.anchor,b.customElement),ob());R=m}function Yb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");B(b,"aria-label",c=a[3]?a[3]:null);B(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);
b.disabled=a[2];B(b,"tabindex","0")},m(g,l){g.insertBefore(b,l||null);b.innerHTML=a[5];e||(f=ya(b,"click",function(){lb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(g,l){[l]=l;a=g;l&32&&(b.innerHTML=a[5]);l&8&&c!==(c=a[3]?a[3]:null)&&B(b,"aria-label",c);l&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&B(b,"class",d);l&4&&(b.disabled=a[2])},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function Zb(a,b,c){function d(n){return Z(n)?n.call(f):n}let {config:e,step:f}=b,g,l,m,k,p,q;
a.$$set=n=>{"config"in n&&c(6,e=n.config);"step"in n&&c(7,f=n.step)};a.$$.update=()=>{a.$$.dirty&192&&(c(0,g=e.action?e.action.bind(f.tour):null),c(1,l=e.classes),c(2,m=e.disabled?d(e.disabled):!1),c(3,k=e.label?d(e.label):null),c(4,p=e.secondary),c(5,q=e.text?d(e.text):null))};return[g,l,m,k,p,q,e,f]}function qb(a,b,c){a=a.slice();a[2]=b[c];return a}function rb(a){let b,c,d=a[1],e=[];for(let g=0;g<d.length;g+=1)e[g]=sb(qb(a,d,g));let f=g=>C(e[g],1,1,()=>{e[g]=null});return{c(){for(let g=0;g<e.length;g+=
1)e[g].c();b=document.createTextNode("")},m(g,l){for(let m=0;m<e.length;m+=1)e[m].m(g,l);g.insertBefore(b,l||null);c=!0},p(g,l){if(l&3){d=g[1];let m;for(m=0;m<d.length;m+=1){let k=qb(g,d,m);e[m]?(e[m].p(k,l),z(e[m],1)):(e[m]=sb(k),e[m].c(),z(e[m],1),e[m].m(b.parentNode,b))}aa();for(m=d.length;m<e.length;m+=1)f(m);ca()}},i(g){if(!c){for(g=0;g<d.length;g+=1)z(e[g]);c=!0}},o(g){e=e.filter(Boolean);for(g=0;g<e.length;g+=1)C(e[g]);c=!1},d(g){var l=e;for(let m=0;m<l.length;m+=1)l[m]&&l[m].d(g);g&&H(b)}}}
function sb(a){let b,c;b=new $b({props:{config:a[2],step:a[0]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.config=d[2]);e&1&&(f.step=d[0]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ac(a){let b,c,d=a[1]&&rb(a);return{c(){b=document.createElement("footer");d&&d.c();B(b,"class","shepherd-footer")},m(e,f){e.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(e,f){[f]=f;e[1]?d?(d.p(e,f),f&2&&z(d,1)):(d=rb(e),d.c(),z(d,
1),d.m(b,null)):d&&(aa(),C(d,1,1,()=>{d=null}),ca())},i(e){c||(z(d),c=!0)},o(e){C(d);c=!1},d(e){e&&H(b);d&&d.d()}}}function bc(a,b,c){let d,{step:e}=b;a.$$set=f=>{"step"in f&&c(0,e=f.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function cc(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";B(c,"aria-hidden","true");B(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");B(b,"class","shepherd-cancel-icon");
B(b,"type","button")},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);e||(f=ya(b,"click",a[1]),e=!0)},p(g,l){[l]=l;l&1&&d!==(d=g[0].label?g[0].label:"Close Tour")&&B(b,"aria-label",d)},i:G,o:G,d(g){g&&H(b);e=!1;f()}}}function dc(a,b,c){let {cancelIcon:d,step:e}=b;a.$$set=f=>{"cancelIcon"in f&&c(0,d=f.cancelIcon);"step"in f&&c(2,e=f.step)};return[d,f=>{f.preventDefault();e.cancel()},e]}function ec(a){let b;return{c(){b=document.createElement("h3");B(b,"id",a[1]);B(b,"class","shepherd-title")},m(c,
d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function fc(a,b,c){let {labelId:d,element:e,title:f}=b;za().$$.after_update.push(()=>{Z(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=g=>{"labelId"in g&&c(1,d=g.labelId);"element"in g&&c(0,e=g.element);"title"in g&&c(2,f=g.title)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function tb(a){let b,c;b=new gc({props:{labelId:a[0],title:a[2]}});return{c(){da(b.$$.fragment)},
m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.labelId=d[0]);e&4&&(f.title=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ub(a){let b,c;b=new hc({props:{cancelIcon:a[3],step:a[1]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&8&&(f.cancelIcon=d[3]);e&2&&(f.step=d[1]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function ic(a){let b,c,d,e=a[2]&&tb(a),f=a[3]&&a[3].enabled&&
ub(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();B(b,"class","shepherd-header")},m(g,l){g.insertBefore(b,l||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(g,l){[l]=l;g[2]?e?(e.p(g,l),l&4&&z(e,1)):(e=tb(g),e.c(),z(e,1),e.m(b,c)):e&&(aa(),C(e,1,1,()=>{e=null}),ca());g[3]&&g[3].enabled?f?(f.p(g,l),l&8&&z(f,1)):(f=ub(g),f.c(),z(f,1),f.m(b,null)):f&&(aa(),C(f,1,1,()=>{f=null}),ca())},i(g){d||(z(e),z(f),d=!0)},o(g){C(e);C(f);d=!1},d(g){g&&
H(b);e&&e.d();f&&f.d()}}}function jc(a,b,c){let {labelId:d,step:e}=b,f,g;a.$$set=l=>{"labelId"in l&&c(0,d=l.labelId);"step"in l&&c(1,e=l.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,g=e.options.cancelIcon))};return[d,e,f,g]}function kc(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-text");B(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(c,d){[d]=d;d&2&&B(b,"id",c[1])},i:G,o:G,d(c){c&&H(b);a[3](null)}}}function lc(a,b,c){let {descriptionId:d,
element:e,step:f}=b;za().$$.after_update.push(()=>{let {text:g}=f.options;Z(g)&&(g=g.call(f));g instanceof HTMLElement?e.appendChild(g):c(0,e.innerHTML=g,e)});a.$$set=g=>{"descriptionId"in g&&c(1,d=g.descriptionId);"element"in g&&c(0,e=g.element);"step"in g&&c(2,f=g.step)};return[e,d,f,function(g){ma[g?"unshift":"push"](()=>{e=g;c(0,e)})}]}function vb(a){let b,c;b=new mc({props:{labelId:a[1],step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&2&&(f.labelId=d[1]);e&4&&
(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function wb(a){let b,c;b=new nc({props:{descriptionId:a[0],step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};e&1&&(f.descriptionId=d[0]);e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function xb(a){let b,c;b=new oc({props:{step:a[2]}});return{c(){da(b.$$.fragment)},m(d,e){W(b,d,e);c=!0},p(d,e){let f={};
e&4&&(f.step=d[2]);b.$set(f)},i(d){c||(z(b.$$.fragment,d),c=!0)},o(d){C(b.$$.fragment,d);c=!1},d(d){X(b,d)}}}function pc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,g=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,l,m=c&&vb(a),k=e&&wb(a),p=g&&xb(a);return{c(){b=document.createElement("div");m&&m.c();d=document.createTextNode(" ");k&&k.c();f=document.createTextNode(" ");p&&p.c();B(b,"class","shepherd-content")},
m(q,n){q.insertBefore(b,n||null);m&&m.m(b,null);b.appendChild(d);k&&k.m(b,null);b.appendChild(f);p&&p.m(b,null);l=!0},p(q,n){[n]=n;n&4&&(c=void 0!==q[2].options.title||q[2].options.cancelIcon&&q[2].options.cancelIcon.enabled);c?m?(m.p(q,n),n&4&&z(m,1)):(m=vb(q),m.c(),z(m,1),m.m(b,d)):m&&(aa(),C(m,1,1,()=>{m=null}),ca());n&4&&(e=void 0!==q[2].options.text);e?k?(k.p(q,n),n&4&&z(k,1)):(k=wb(q),k.c(),z(k,1),k.m(b,f)):k&&(aa(),C(k,1,1,()=>{k=null}),ca());n&4&&(g=Array.isArray(q[2].options.buttons)&&q[2].options.buttons.length);
g?p?(p.p(q,n),n&4&&z(p,1)):(p=xb(q),p.c(),z(p,1),p.m(b,null)):p&&(aa(),C(p,1,1,()=>{p=null}),ca())},i(q){l||(z(m),z(k),z(p),l=!0)},o(q){C(m);C(k);C(p);l=!1},d(q){q&&H(b);m&&m.d();k&&k.d();p&&p.d()}}}function qc(a,b,c){let {descriptionId:d,labelId:e,step:f}=b;a.$$set=g=>{"descriptionId"in g&&c(0,d=g.descriptionId);"labelId"in g&&c(1,e=g.labelId);"step"in g&&c(2,f=g.step)};return[d,e,f]}function yb(a){let b;return{c(){b=document.createElement("div");B(b,"class","shepherd-arrow");B(b,"data-popper-arrow",
"")},m(c,d){c.insertBefore(b,d||null)},d(c){c&&H(b)}}}function rc(a){let b,c,d,e,f,g,l,m,k=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on&&yb();d=new sc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let p=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:null},a[1],{role:"dialog"},{tabindex:"0"}],q={};for(let n=0;n<p.length;n+=1)q=Wb(q,p[n]);return{c(){b=document.createElement("div");
k&&k.c();c=document.createTextNode(" ");da(d.$$.fragment);nb(b,q);la(b,"shepherd-has-cancel-icon",a[5]);la(b,"shepherd-has-title",a[6]);la(b,"shepherd-element",!0)},m(n,r){n.insertBefore(b,r||null);k&&k.m(b,null);b.appendChild(c);W(d,b,null);a[13](b);g=!0;l||(m=ya(b,"keydown",a[7]),l=!0)},p(n,r){var [x]=r;n[4].options.arrow&&n[4].options.attachTo&&n[4].options.attachTo.element&&n[4].options.attachTo.on?k||(k=yb(),k.c(),k.m(b,c)):k&&(k.d(1),k=null);r={};x&4&&(r.descriptionId=n[2]);x&8&&(r.labelId=
n[3]);x&16&&(r.step=n[4]);d.$set(r);r=b;x=[(!g||x&20&&e!==(e=void 0!==n[4].options.text?n[2]:null))&&{"aria-describedby":e},(!g||x&24&&f!==(f=n[4].options.title?n[3]:null))&&{"aria-labelledby":f},x&2&&n[1],{role:"dialog"},{tabindex:"0"}];let h={},t={},v={$$scope:1},A=p.length;for(;A--;){let u=p[A],w=x[A];if(w){for(let y in u)y in w||(t[y]=1);for(let y in w)v[y]||(h[y]=w[y],v[y]=1);p[A]=w}else for(let y in u)v[y]=1}for(let u in t)u in h||(h[u]=void 0);nb(r,q=h);la(b,"shepherd-has-cancel-icon",n[5]);
la(b,"shepherd-has-title",n[6]);la(b,"shepherd-element",!0)},i(n){g||(z(d.$$.fragment,n),g=!0)},o(n){C(d.$$.fragment,n);g=!1},d(n){n&&H(b);k&&k.d();X(d);a[13](null);l=!1;m()}}}function zb(a){return a.split(" ").filter(b=>!!b.length)}function tc(a,b,c){let {classPrefix:d,element:e,descriptionId:f,firstFocusableElement:g,focusableElements:l,labelId:m,lastFocusableElement:k,step:p,dataStepId:q}=b,n,r,x;za().$$.on_mount.push(()=>{c(1,q={[`data-${d}shepherd-step-id`]:p.id});c(9,l=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));
c(8,g=l[0]);c(10,k=l[l.length-1])});za().$$.after_update.push(()=>{if(x!==p.options.classes){var h=x;qa(h)&&(h=zb(h),h.length&&e.classList.remove(...h));h=x=p.options.classes;qa(h)&&(h=zb(h),h.length&&e.classList.add(...h))}});a.$$set=h=>{"classPrefix"in h&&c(11,d=h.classPrefix);"element"in h&&c(0,e=h.element);"descriptionId"in h&&c(2,f=h.descriptionId);"firstFocusableElement"in h&&c(8,g=h.firstFocusableElement);"focusableElements"in h&&c(9,l=h.focusableElements);"labelId"in h&&c(3,m=h.labelId);"lastFocusableElement"in
h&&c(10,k=h.lastFocusableElement);"step"in h&&c(4,p=h.step);"dataStepId"in h&&c(1,q=h.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,n=p.options&&p.options.cancelIcon&&p.options.cancelIcon.enabled),c(6,r=p.options&&p.options.title))};return[e,q,f,m,p,n,r,h=>{const {tour:t}=p;switch(h.keyCode){case 9:if(0===l.length){h.preventDefault();break}if(h.shiftKey){if(document.activeElement===g||document.activeElement.classList.contains("shepherd-element"))h.preventDefault(),k.focus()}else document.activeElement===
k&&(h.preventDefault(),g.focus());break;case 27:t.options.exitOnEsc&&p.cancel();break;case 37:t.options.keyboardNavigation&&t.back();break;case 39:t.options.keyboardNavigation&&t.next()}},g,l,k,d,()=>e,function(h){ma[h?"unshift":"push"](()=>{e=h;c(0,e)})}]}function uc(a){a&&({steps:a}=a,a.forEach(b=>{b.options&&!1===b.options.canClickTarget&&b.options.attachTo&&b.target instanceof HTMLElement&&b.target.classList.remove("shepherd-target-click-disabled")}))}function vc(a){let b,c,d,e,f;return{c(){b=
mb("svg");c=mb("path");B(c,"d",a[2]);B(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(g,l){g.insertBefore(b,l||null);b.appendChild(c);a[11](b);e||(f=ya(b,"touchmove",a[3]),e=!0)},p(g,l){[l]=l;l&4&&B(c,"d",g[2]);l&2&&d!==(d=`${g[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&B(b,"class",d)},i:G,o:G,d(g){g&&H(b);a[11](null);e=!1;f()}}}function Ab(a){if(!a)return null;let b=a instanceof HTMLElement&&window.getComputedStyle(a).overflowY;
return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:Ab(a.parentElement)}function wc(a,b,c){function d(){c(4,p={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,q=!1);l()}function f(h,t,v,A){void 0===h&&(h=0);void 0===t&&(t=0);if(A){var u=A.getBoundingClientRect();let y=u.y||u.top;u=u.bottom||y+u.height;if(v){var w=v.getBoundingClientRect();v=w.y||w.top;w=w.bottom||v+w.height;y=Math.max(y,v);u=Math.min(u,w)}let {y:Y,height:E}={y,height:Math.max(u-y,0)},{x:I,width:D,left:na}=A.getBoundingClientRect();
c(4,p={width:D+2*h,height:E+2*h,x:(I||na)-h,y:Y-h,r:t})}else d()}function g(){c(1,q=!0)}function l(){n&&(cancelAnimationFrame(n),n=void 0);window.removeEventListener("touchmove",x,{passive:!1})}function m(h){let {modalOverlayOpeningPadding:t,modalOverlayOpeningRadius:v}=h.options,A=Ab(h.target),u=()=>{n=void 0;f(t,v,A,h.target);n=requestAnimationFrame(u)};u();window.addEventListener("touchmove",x,{passive:!1})}let {element:k,openingProperties:p}=b;Ma();let q=!1,n=void 0,r;d();let x=h=>{h.preventDefault()};
a.$$set=h=>{"element"in h&&c(0,k=h.element);"openingProperties"in h&&c(4,p=h.openingProperties)};a.$$.update=()=>{if(a.$$.dirty&16){let {width:h,height:t,x:v=0,y:A=0,r:u=0}=p,{innerWidth:w,innerHeight:y}=window;c(2,r=`M${w},${y}\
H0\
V0\
H${w}\
V${y}\
Z\
M${v+u},${A}\
a${u},${u},0,0,0-${u},${u}\
V${t+A-u}\
a${u},${u},0,0,0,${u},${u}\
H${h+v-u}\
a${u},${u},0,0,0,${u}-${u}\
V${A+u}\
a${u},${u},0,0,0-${u}-${u}\
Z`)}};return[k,q,r,h=>{h.stopPropagation()},p,()=>k,d,e,f,function(h){l();h.tour.options.useModalOverlay?(m(h),g()):e()},g,function(h){ma[h?"unshift":"push"](()=>{k=h;c(0,k)})}]}var Fb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===xc);return b},xc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;ea.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");
return a.reduce(function(c,d){return ea(c,d,b)},{})};var yc=ea;class Qa{on(a,b,c,d){void 0===d&&(d=!1);void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a){for(var b=
arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((e,f)=>{let {ctx:g,handler:l,once:m}=e;l.apply(g||this,c);m&&this.bindings[a].splice(f,1)});return this}}var ua=["top","bottom","right","left"],eb=ua.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),db=[].concat(ua,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Sb="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
L=Math.max,V=Math.min,ia=Math.round,Ib={top:"auto",right:"auto",bottom:"auto",left:"auto"},Da={passive:!0},Jb={left:"right",right:"left",bottom:"top",top:"bottom"},Kb={start:"end",end:"start"},Bb={placement:"bottom",modifiers:[],strategy:"absolute"},zc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?Bb:a;return function(e,f,g){function l(){k.orderedModifiers.forEach(function(r){var x=r.name,h=r.options;h=void 0===h?{}:h;r=r.effect;"function"===
typeof r&&(x=r({state:k,name:x,instance:n,options:h}),p.push(x||function(){}))})}function m(){p.forEach(function(r){return r()});p=[]}void 0===g&&(g=d);var k={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bb,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},p=[],q=!1,n={state:k,setOptions:function(r){r="function"===typeof r?r(k.options):r;m();k.options=Object.assign({},d,k.options,r);k.scrollParents={reference:fa(e)?sa(e):e.contextElement?sa(e.contextElement):
[],popper:sa(f)};r=Rb(Ub([].concat(c,k.options.modifiers)));k.orderedModifiers=r.filter(function(x){return x.enabled});l();return n.update()},forceUpdate:function(){if(!q){var r=k.elements,x=r.reference;r=r.popper;if(hb(x,r))for(k.rects={reference:Pb(x,ra(r),"fixed"===k.options.strategy),popper:Fa(r)},k.reset=!1,k.placement=k.options.placement,k.orderedModifiers.forEach(function(v){return k.modifiersData[v.name]=Object.assign({},v.data)}),x=0;x<k.orderedModifiers.length;x++)if(!0===k.reset)k.reset=
!1,x=-1;else{var h=k.orderedModifiers[x];r=h.fn;var t=h.options;t=void 0===t?{}:t;h=h.name;"function"===typeof r&&(k=r({state:k,options:t,name:h,instance:n})||k)}}},update:Tb(function(){return new Promise(function(r){n.forceUpdate();r(k)})}),destroy:function(){m();q=!0}};if(!hb(e,f))return n;n.setOptions(g).then(function(r){if(!q&&g.onFirstUpdate)g.onFirstUpdate(r)});return n}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;
a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=K(b.elements.popper),l=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&l.forEach(function(m){m.addEventListener("scroll",c.update,Da)});f&&g.addEventListener("resize",c.update,Da);return function(){e&&l.forEach(function(m){m.removeEventListener("scroll",c.update,Da)});f&&g.removeEventListener("resize",c.update,Da)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=
cb({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:N(b.placement),variation:ja(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&
(b.styles.popper=Object.assign({},b.styles.popper,Za(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,Za(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",
fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];F(f)&&M(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var l=e[g];!1===l?f.removeAttribute(g):f.setAttribute(g,!0===l?"":l)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&
Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,l){g[l]="";return g},{});F(e)&&M(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;
var d=void 0===a?[0,0]:a;a=db.reduce(function(g,l){var m=b.rects;var k=N(l);var p=0<=["left","top"].indexOf(k)?-1:1,q="function"===typeof d?d(Object.assign({},m,{placement:l})):d;m=q[0];q=q[1];m=m||0;q=(q||0)*p;k=0<=["left","right"].indexOf(k)?{x:q,y:m}:{x:m,y:q};g[l]=k;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=
a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,l=c.boundary,m=c.rootBoundary,k=c.altBoundary,p=c.flipVariations,q=void 0===p?!0:p,n=c.allowedAutoPlacements;c=b.options.placement;p=N(c);f=f||(p!==c&&q?Ob(c):[xa(c)]);var r=[c].concat(f).reduce(function(E,I){return E.concat("auto"===N(I)?Nb(b,{placement:I,boundary:l,rootBoundary:m,padding:g,flipVariations:q,allowedAutoPlacements:n}):
I)},[]);c=b.rects.reference;f=b.rects.popper;var x=new Map;p=!0;for(var h=r[0],t=0;t<r.length;t++){var v=r[t],A=N(v),u="start"===ja(v),w=0<=["top","bottom"].indexOf(A),y=w?"width":"height",Y=ta(b,{placement:v,boundary:l,rootBoundary:m,altBoundary:k,padding:g});u=w?u?"right":"left":u?"bottom":"top";c[y]>f[y]&&(u=xa(u));y=xa(u);w=[];d&&w.push(0>=Y[A]);e&&w.push(0>=Y[u],0>=Y[y]);if(w.every(function(E){return E})){h=v;p=!1;break}x.set(v,w)}if(p)for(d=function(E){var I=r.find(function(D){if(D=x.get(D))return D.slice(0,
E).every(function(na){return na})});if(I)return h=I,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==h&&(b.modifiersData[a]._skip=!0,b.placement=h,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var l=void 0===d?0:d,m=ta(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary}),k=N(b.placement),p=ja(b.placement),q=!p,n=Ga(k);c="x"===n?"y":"x";d=b.modifiersData.popperOffsets;var r=b.rects.reference,x=b.rects.popper;l="function"===typeof l?l(Object.assign({},b.rects,{placement:b.placement})):l;var h="number"===typeof l?{mainAxis:l,altAxis:l}:Object.assign({mainAxis:0,altAxis:0},l),t=b.modifiersData.offset?b.modifiersData.offset[b.placement]:null;l={x:0,y:0};if(d){if(e){var v,A="y"===n?"top":"left",u="y"===n?"bottom":"right",w=
"y"===n?"height":"width";e=d[n];var y=e+m[A],Y=e-m[u],E=g?-x[w]/2:0,I="start"===p?r[w]:x[w];p="start"===p?-x[w]:-r[w];var D=b.elements.arrow;D=g&&D?Fa(D):{width:0,height:0};var na=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};A=na[A];u=na[u];D=L(0,V(r[w],D[w]));I=q?r[w]/2-E-D-A-h.mainAxis:I-D-A-h.mainAxis;q=q?-r[w]/2+E+D+u+h.mainAxis:p+D+u+h.mainAxis;w=(w=b.elements.arrow&&ra(b.elements.arrow))?"y"===n?w.clientTop||0:w.clientLeft||
0:0;E=null!=(v=null==t?void 0:t[n])?v:0;v=e+q-E;y=g?V(y,e+I-E-w):y;v=g?L(Y,v):Y;v=L(y,V(e,v));d[n]=v;l[n]=v-e}if(f){var J;f=d[c];e="y"===c?"height":"width";v=f+m["x"===n?"top":"left"];m=f-m["x"===n?"bottom":"right"];k=-1!==["top","left"].indexOf(k);n=null!=(J=null==t?void 0:t[c])?J:0;J=k?v:f-r[e]-x[e]-n+h.altAxis;r=k?f+r[e]+x[e]-n-h.altAxis:m;g&&k?(J=L(J,V(f,r)),J=J>r?r:J):J=L(g?J:v,V(f,g?r:m));d[c]=J;l[c]=J-f}b.modifiersData[a]=l}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",
fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,l=N(c.placement);a=Ga(l);l=0<=["left","right"].indexOf(l)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Xa("number"!==typeof e?e:Ya(e,ua));var m=Fa(f),k="y"===a?"top":"left",p="y"===a?"bottom":"right",q=c.rects.reference[l]+c.rects.reference[a]-g[a]-c.rects.popper[l];g=g[a]-c.rects.reference[a];f=(f=ra(f))?"y"===a?f.clientHeight||
0:f.clientWidth||0:0;g=f/2-m[l]/2+(q/2-g/2);l=L(e[k],V(g,f-m[l]-e[p]));c.modifiersData[d]=(b={},b[a]=l,b.centerOffset=l-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Va(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=
a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ta(b,{elementContext:"reference"}),g=ta(b,{altBoundary:!0});c=fb(f,c);d=fb(g,d,e);e=gb(c);g=gb(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});let R,va=[],ma=[],Aa=[],pb=[],Xb=Promise.resolve(),Pa=!1,Oa=new Set,Ba=0,Ca=new Set,
ba;class T{$destroy(){X(this,1);this.$destroy=G}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let d=c.indexOf(b);-1!==d&&c.splice(d,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class $b extends T{constructor(a){super();S(this,a,Zb,Yb,Q,{config:6,step:7})}}class oc extends T{constructor(a){super();S(this,a,bc,ac,Q,{step:0})}}class hc extends T{constructor(a){super();S(this,a,dc,cc,Q,{cancelIcon:0,
step:2})}}class gc extends T{constructor(a){super();S(this,a,fc,ec,Q,{labelId:1,element:0,title:2})}}class mc extends T{constructor(a){super();S(this,a,jc,ic,Q,{labelId:0,step:1})}}class nc extends T{constructor(a){super();S(this,a,lc,kc,Q,{descriptionId:1,element:0,step:2})}}class sc extends T{constructor(a){super();S(this,a,qc,pc,Q,{descriptionId:0,labelId:1,step:2})}}class Ac extends T{constructor(a){super();S(this,a,tc,rc,Q,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,
labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var Cb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function c(h,t){this.scrollLeft=h;this.scrollTop=t}function d(h){if(null===h||"object"!==typeof h||void 0===h.behavior||"auto"===h.behavior||"instant"===h.behavior)return!0;if("object"===typeof h&&"smooth"===h.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+
h.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(h,t){if("Y"===t)return h.clientHeight+x<h.scrollHeight;if("X"===t)return h.clientWidth+x<h.scrollWidth}function f(h,t){h=k.getComputedStyle(h,null)["overflow"+t];return"auto"===h||"scroll"===h}function g(h){var t=e(h,"Y")&&f(h,"Y");h=e(h,"X")&&f(h,"X");return t||h}function l(h){var t=(r()-h.startTime)/468;var v=.5*(1-Math.cos(Math.PI*(1<t?1:t)));t=h.startX+(h.x-h.startX)*v;v=h.startY+(h.y-h.startY)*v;h.method.call(h.scrollable,
t,v);t===h.x&&v===h.y||k.requestAnimationFrame(l.bind(k,h))}function m(h,t,v){var A=r();if(h===p.body){var u=k;var w=k.scrollX||k.pageXOffset;h=k.scrollY||k.pageYOffset;var y=n.scroll}else u=h,w=h.scrollLeft,h=h.scrollTop,y=c;l({scrollable:u,method:y,startTime:A,startX:w,startY:h,x:t,y:v})}var k=window,p=document;if(!("scrollBehavior"in p.documentElement.style&&!0!==k.__forceSmoothScrollPolyfill__)){var q=k.HTMLElement||k.Element,n={scroll:k.scroll||k.scrollTo,scrollBy:k.scrollBy,elementScroll:q.prototype.scroll||
c,scrollIntoView:q.prototype.scrollIntoView},r=k.performance&&k.performance.now?k.performance.now.bind(k.performance):Date.now,x=/MSIE |Trident\/|Edge\//.test(k.navigator.userAgent)?1:0;k.scroll=k.scrollTo=function(h,t){void 0!==h&&(!0===d(h)?n.scroll.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:k.scrollX||k.pageXOffset,void 0!==h.top?h.top:void 0!==t?t:k.scrollY||k.pageYOffset):m.call(k,p.body,void 0!==h.left?~~h.left:k.scrollX||k.pageXOffset,void 0!==h.top?~~h.top:k.scrollY||k.pageYOffset))};
k.scrollBy=function(h,t){void 0!==h&&(d(h)?n.scrollBy.call(k,void 0!==h.left?h.left:"object"!==typeof h?h:0,void 0!==h.top?h.top:void 0!==t?t:0):m.call(k,p.body,~~h.left+(k.scrollX||k.pageXOffset),~~h.top+(k.scrollY||k.pageYOffset)))};q.prototype.scroll=q.prototype.scrollTo=function(h,t){if(void 0!==h)if(!0===d(h)){if("number"===typeof h&&void 0===t)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==h.left?~~h.left:"object"!==typeof h?~~h:this.scrollLeft,void 0!==
h.top?~~h.top:void 0!==t?~~t:this.scrollTop)}else t=h.left,h=h.top,m.call(this,this,"undefined"===typeof t?this.scrollLeft:~~t,"undefined"===typeof h?this.scrollTop:~~h)};q.prototype.scrollBy=function(h,t){void 0!==h&&(!0===d(h)?n.elementScroll.call(this,void 0!==h.left?~~h.left+this.scrollLeft:~~h+this.scrollLeft,void 0!==h.top?~~h.top+this.scrollTop:~~t+this.scrollTop):this.scroll({left:~~h.left+this.scrollLeft,top:~~h.top+this.scrollTop,behavior:h.behavior}))};q.prototype.scrollIntoView=function(h){if(!0===
d(h))n.scrollIntoView.call(this,void 0===h?!0:h);else{for(h=this;h!==p.body&&!1===g(h);)h=h.parentNode||h.host;var t=h.getBoundingClientRect(),v=this.getBoundingClientRect();h!==p.body?(m.call(this,h,h.scrollLeft+v.left-t.left,h.scrollTop+v.top-t.top),"fixed"!==k.getComputedStyle(h).position&&k.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):k.scrollBy({left:v.left,top:v.top,behavior:"smooth"})}}}}}})()});Cb.polyfill;Cb.polyfill();class Ra extends Qa{constructor(a,b){void 0===b&&(b={});super(a,
b);this.tour=a;this.classPrefix=this.tour.options?jb(this.tour.options.classPrefix):"";this.styles=a.styles;this._resolvedAttachTo=null;Ua(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();
this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}_resolveAttachToOptions(){let a=this.options.attachTo||{},b=Object.assign({},a);Z(b.element)&&(b.element=b.element.call(this));if(qa(b.element)){try{b.element=document.querySelector(b.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return this._resolvedAttachTo=b}_getResolvedAttachToOptions(){return null===this._resolvedAttachTo?
this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return!(!this.el||this.el.hidden)}show(){if(Z(this.options.beforeShowPromise)){let a=this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=new Ac({target:this.tour.options.stepsContainer||
document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=this._getResolvedAttachToOptions();Z(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=
b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a){void 0===a&&(a={});let b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=yc({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Ma()}`;c&&Object.keys(c).forEach(d=>{this.on(d,c[d],this)})}_setupElements(){void 0!==
this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&Hb(this);this.tooltip&&this.tooltip.destroy();let a=this._getResolvedAttachToOptions(),b=a.element;var c={modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!1}},ib(this)],strategy:"absolute"};if(void 0!==a&&null!==a&&a.element&&a.on)c.placement=a.on;else{c=Vb();var d={placement:"top",strategy:"fixed",modifiers:[ib(this)]};c=d=La({},d,{modifiers:Array.from(new Set([...d.modifiers,...c]))})}(d=this.tour&&
this.tour.options&&this.tour.options.defaultStepOptions)&&(c=kb(d,c));c=kb(this.options,c);void 0!==a&&null!==a&&a.element&&a.on||(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=zc(b,this.el,c);this.target=a.element}_show(){this.trigger("before-show");this._resolveAttachToOptions();this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);this.el.hidden=!1;this.options.scrollTo&&
setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),b.classList.remove("shepherd-target-click-disabled"),!1===a.options.canClickTarget&&
b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class Bc extends T{constructor(a){super();S(this,a,wc,vc,Q,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}
let oa=new Qa;class Cc extends Qa{constructor(a){void 0===a&&(a={});super(a);Ua(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=jb(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(b=>{(c=>{this.on(c,d=>{d=d||{};d.tour=this;oa.trigger(c,d)})})(b)});this._setTourID();return this}addStep(a,b){a instanceof Ra?a.tour=this:a=new Ra(this,a);void 0!==b?this.steps.splice(b,0,a):
this.steps.push(a);return a}addSteps(a){Array.isArray(a)&&a.forEach(b=>{this.addStep(b)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return oa.activeTour===
this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((c,d)=>{if(c.id===a)return c.isOpen()&&c.hide(),c.destroy(),this.steps.splice(d,1),!0});b&&b.id===a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a,b){void 0===a&&(a=0);void 0===b&&(b=!0);if(a=qa(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),Z(a.options.showOn)&&!a.options.showOn()?
this._skipStep(a,b):(this.trigger("show",{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(c=>c.destroy());uc(this);this.trigger(a,{index:b});oa.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==
a&&"complete"!==a||!this.modal||(a=document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});oa.activeTour=this}_setupModal(){this.modal=new Bc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);a===this.steps.length-1?this.complete():this.show(b?a+1:a-
1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Ma()}`}}Object.assign(oa,{Tour:Cc,Step:Ra});return oa})

;
/**
 * @file
 * Attaches behaviors for the Tour module's toolbar tab.
 */

(($, Backbone, Drupal, settings, document, Shepherd) => {
  const queryString = decodeURI(window.location.search);

  /**
   * Attaches the tour's toolbar tab behavior.
   *
   * It uses the query string for:
   * - tour: When ?tour=1 is present, the tour will start automatically after
   *   the page has loaded.
   * - tips: Pass ?tips=class in the url to filter the available tips to the
   *   subset which match the given class.
   *
   * @example
   * http://example.com/foo?tour=1&tips=bar
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach tour functionality on `tour` events.
   */
  Drupal.behaviors.tour = {
    attach(context) {
      once('tour', 'body').forEach(() => {
        const model = new Drupal.tour.models.StateModel();
        // eslint-disable-next-line no-new
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model,
        });

        model
          // Allow other scripts to respond to tour events.
          .on('change:isActive', (tourModel, isActive) => {
            $(document).trigger(
              isActive ? 'drupalTourStarted' : 'drupalTourStopped',
            );
          });
        // Initialization: check whether a tour is available on the current
        // page.
        if (settings._tour_internal) {
          model.set('tour', settings._tour_internal);
        }
        // Start the tour immediately if toggled via query string.
        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    },
  };

  /**
   * @namespace
   */
  Drupal.tour = Drupal.tour || {
    /**
     * @namespace Drupal.tour.models
     */
    models: {},

    /**
     * @namespace Drupal.tour.views
     */
    views: {},
  };

  /**
   * Backbone Model for tours.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.tour.models.StateModel = Backbone.Model.extend(
    /** @lends Drupal.tour.models.StateModel# */ {
      /**
       * @type {object}
       */
      defaults: /** @lends Drupal.tour.models.StateModel# */ {
        /**
         * Indicates whether the Drupal root window has a tour.
         *
         * @type {Array}
         */
        tour: [],

        /**
         * Indicates whether the tour is currently running.
         *
         * @type {boolean}
         */
        isActive: false,

        /**
         * Indicates which tour is the active one (necessary to cleanly stop).
         *
         * @type {Array}
         */
        activeTour: [],
      },
    },
  );

  Drupal.tour.views.ToggleTourView = Backbone.View.extend(
    /** @lends Drupal.tour.views.ToggleTourView# */ {
      /**
       * @type {object}
       */
      events: { click: 'onClick' },

      /**
       * Handles edit mode toggle interactions.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change:tour change:isActive', this.render);
        this.listenTo(this.model, 'change:isActive', this.toggleTour);
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.tour.views.ToggleTourView}
       *   The `ToggleTourView` view.
       */
      render() {
        // Render the visibility.
        this.$el.toggleClass('hidden', this._getTour().length === 0);
        // Render the state.
        const isActive = this.model.get('isActive');
        this.$el
          .find('button')
          .toggleClass('is-active', isActive)
          .attr('aria-pressed', isActive);
        return this;
      },

      /**
       * Model change handler; starts or stops the tour.
       */
      toggleTour() {
        if (this.model.get('isActive')) {
          this._removeIrrelevantTourItems(this._getTour());
          const tourItems = this.model.get('tour');
          const that = this;

          if (tourItems.length) {
            // If Joyride is positioned relative to the top or bottom of an
            // element, and its secondary position is right or left, then the
            // arrow is also positioned right or left. Shepherd defaults to
            // center positioning the arrow.
            //
            // In most cases, this arrow positioning difference has
            // little impact. However, tours built with Joyride may have tips
            // using a higher level selector than the element the tip is
            // expected to point to, and relied on Joyride's arrow positioning
            // to align the arrow with the expected reference element. Joyride's
            // arrow positioning behavior is replicated here to prevent those
            // use cases from causing UI regressions.
            //
            // This modifier is provided here instead of TourViewBuilder (where
            // most position modifications are) because it includes adding a
            // JavaScript callback function.
            settings.tourShepherdConfig.defaultStepOptions.popperOptions.modifiers.push(
              {
                name: 'moveArrowJoyridePosition',
                enabled: true,
                phase: 'write',
                fn({ state }) {
                  const { arrow } = state.elements;
                  const { placement } = state;
                  if (
                    arrow &&
                    /^top|bottom/.test(placement) &&
                    /-start|-end$/.test(placement)
                  ) {
                    const horizontalPosition = placement.split('-')[1];
                    const offset =
                      horizontalPosition === 'start'
                        ? 28
                        : state.elements.popper.clientWidth - 56;
                    arrow.style.transform = `translate3d(${offset}px, 0px, 0px)`;
                  }
                },
              },
            );
            const shepherdTour = new Shepherd.Tour(settings.tourShepherdConfig);
            shepherdTour.on('cancel', () => {
              that.model.set('isActive', false);
            });
            shepherdTour.on('complete', () => {
              that.model.set('isActive', false);
            });

            tourItems.forEach((tourStepConfig, index) => {
              // Create the configuration for a given tour step by using values
              // defined in TourViewBuilder.
              // @see \Drupal\tour\TourViewBuilder::viewMultiple()
              const tourItemOptions = {
                title: tourStepConfig.title
                  ? Drupal.checkPlain(tourStepConfig.title)
                  : null,
                text: () => Drupal.theme('tourItemContent', tourStepConfig),
                attachTo: tourStepConfig.attachTo,
                buttons: [Drupal.tour.nextButton(shepherdTour, tourStepConfig)],
                classes: tourStepConfig.classes,
                index,
              };

              tourItemOptions.when = {
                show() {
                  const nextButton =
                    shepherdTour.currentStep.el.querySelector('footer button');

                  // Drupal disables Shepherd's built in focus after item
                  // creation functionality due to focus being set on the tour
                  // item container after every scroll and resize event. In its
                  // place, the 'next' button is focused here.
                  nextButton.focus();

                  // When Stable 9 is part of the active theme, the
                  // Drupal.tour.convertToJoyrideMarkup() function is available.
                  // This function converts Shepherd markup to Joyride markup,
                  // facilitating the use of the Shepherd library that is
                  // backwards compatible with customizations intended for
                  // Joyride.
                  // The Drupal.tour.convertToJoyrideMarkup() function is
                  // internal, and will eventually be removed from Drupal core.
                  if (Drupal.tour.hasOwnProperty('convertToJoyrideMarkup')) {
                    Drupal.tour.convertToJoyrideMarkup(shepherdTour);
                  }
                },
              };

              shepherdTour.addStep(tourItemOptions);
            });
            shepherdTour.start();
            this.model.set({ isActive: true, activeTour: shepherdTour });
          }
        } else {
          this.model.get('activeTour').cancel();
          this.model.set({ isActive: false, activeTour: [] });
        }
      },

      /**
       * Toolbar tab click event handler; toggles isActive.
       *
       * @param {jQuery.Event} event
       *   The click event.
       */
      onClick(event) {
        this.model.set('isActive', !this.model.get('isActive'));
        event.preventDefault();
        event.stopPropagation();
      },

      /**
       * Gets the tour.
       *
       * @return {array}
       *   An array of Shepherd tour item objects.
       */
      _getTour() {
        return this.model.get('tour');
      },

      /**
       * Removes tour items for elements that don't have matching page elements.
       *
       * Or that are explicitly filtered out via the 'tips' query string.
       *
       * @example
       * <caption>This will filter out tips that do not have a matching
       * page element or don't have the "bar" class.</caption>
       * http://example.com/foo?tips=bar
       *
       * @param {Object[]} tourItems
       *   An array containing tour Step config objects.
       *   The object properties relevant to this function:
       *   - classes {string}: A string of classes to be added to the tour step
       *     when rendered.
       *   - selector {string}: The selector a tour step is associated with.
       */
      _removeIrrelevantTourItems(tourItems) {
        const tips = /tips=([^&]+)/.exec(queryString);
        const filteredTour = tourItems.filter((tourItem) => {
          // If the query parameter 'tips' is set, remove all tips that don't
          // have the matching class. The `tourItem` variable is a step config
          // object, and the 'classes' property is a ShepherdJS Step() config
          // option that provides a string.
          if (
            tips &&
            tourItem.hasOwnProperty('classes') &&
            tourItem.classes.indexOf(tips[1]) === -1
          ) {
            return false;
          }

          // If a selector is configured but there isn't a matching element,
          // return false.
          return !(
            tourItem.selector && !document.querySelector(tourItem.selector)
          );
        });

        // If there are tours filtered, we'll have to update model.
        if (tourItems.length !== filteredTour.length) {
          filteredTour.forEach((filteredTourItem, filteredTourItemId) => {
            filteredTour[filteredTourItemId].counter = Drupal.t(
              '!tour_item of !total',
              {
                '!tour_item': filteredTourItemId + 1,
                '!total': filteredTour.length,
              },
            );

            if (filteredTourItemId === filteredTour.length - 1) {
              filteredTour[filteredTourItemId].cancelText =
                Drupal.t('End tour');
            }
          });
          this.model.set('tour', filteredTour);
        }
      },
    },
  );

  /**
   * Provides an object that will become the tour item's 'next' button.
   *
   * Similar to a theme function, themes can override this function to customize
   * the resulting button. Unlike a theme function, it returns an object instead
   * of a string, which is why it is not part of Drupal.theme.
   *
   * @param {Tour} shepherdTour
   *  A class representing a Shepherd site tour.
   * @param {Object} tourStepConfig
   *   An object generated in TourViewBuilder used for creating the options
   *   passed to `Tour.addStep(options)`.
   *   Contains the following properties:
   *   - id {string}: The tour.tip ID specified by its config
   *   - selector {string|null}: The selector of the element the tour step is
   *     attaching to.
   *   - module {string}: The module providing the tip plugin used by this step.
   *   - counter {string}: A string indicating which tour step this is out of
   *     how many total steps.
   *   - attachTo {Object} This is directly mapped to the `attachTo` Step()
   *     option. It has two properties:
   *     - element {string}: The selector of the element the step attaches to.
   *     - on {string}: a PopperJS compatible string to specify step position.
   *   - classes {string}: Will be added to the class attribute of the step.
   *   - body {string}: Markup that is mapped to the `text` Step() option. Will
   *     become the step content.
   *   - title {string}: is mapped to the `title` Step() option.
   *
   * @return {{classes: string, action: string, text: string}}
   *    An object structured in the manner Shepherd requires to create the
   *    'next' button.
   *
   * @see https://shepherdjs.dev/docs/Tour.html
   * @see \Drupal\tour\TourViewBuilder::viewMultiple()
   * @see https://shepherdjs.dev/docs/Step.html
   */
  Drupal.tour.nextButton = (shepherdTour, tourStepConfig) => {
    return {
      classes: 'button button--primary',
      text: tourStepConfig.cancelText
        ? tourStepConfig.cancelText
        : Drupal.t('Next'),
      action: tourStepConfig.cancelText
        ? shepherdTour.cancel
        : shepherdTour.next,
    };
  };

  /**
   * Theme function for tour item content.
   *
   * @param {Object} tourStepConfig
   *   An object generated in TourViewBuilder used for creating the options
   *   passed to `Tour.addStep(options)`.
   *   Contains the following properties:
   *   - id {string}: The tour.tip ID specified by its config
   *   - selector {string|null}: The selector of the element the tour step is
   *     attaching to.
   *   - module {string}: The module providing the tip plugin used by this step.
   *   - counter {string}: A string indicating which tour step this is out of
   *     how many total steps.
   *   - attachTo {Object} This is directly mapped to the `attachTo` Step()
   *     option. It has two properties:
   *     - element {string}: The selector of the element the step attaches to.
   *     - on {string}: a PopperJS compatible string to specify step position.
   *   - classes {string}: Will be added to the class attribute of the step.
   *   - body {string}: Markup that is mapped to the `text` Step() option. Will
   *     become the step content.
   *   - title {string}: is mapped to the `title` Step() option.
   *
   * @return {string}
   *   The tour item content markup.
   *
   * @see \Drupal\tour\TourViewBuilder::viewMultiple()
   * @see https://shepherdjs.dev/docs/Step.html
   */
  Drupal.theme.tourItemContent = (tourStepConfig) =>
    `${tourStepConfig.body}<div class="tour-progress">${tourStepConfig.counter}</div>`;
})(jQuery, Backbone, Drupal, drupalSettings, document, window.Shepherd);
;
/**
 * @file
 * Manages page tabbing modifications made by modules.
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingConstrained
 */

/**
 * Allow modules to respond to the tabbingContext release event.
 *
 * @event drupalTabbingContextReleased
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextActivated
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextDeactivated
 */

(function ($, Drupal, { tabbable, isTabbable }) {
  /**
   * Provides an API for managing page tabbing order modifications.
   *
   * @constructor Drupal~TabbingManager
   */
  function TabbingManager() {
    /**
     * Tabbing sets are stored as a stack. The active set is at the top of the
     * stack. We use a JavaScript array as if it were a stack; we consider the
     * first element to be the bottom and the last element to be the top. This
     * allows us to use JavaScript's built-in Array.push() and Array.pop()
     * methods.
     *
     * @type {Array.<Drupal~TabbingContext>}
     */
    this.stack = [];
  }

  /**
   * Stores a set of tabbable elements.
   *
   * This constraint can be removed with the release() method.
   *
   * @constructor Drupal~TabbingContext
   *
   * @param {object} options
   *   A set of initiating values
   * @param {number} options.level
   *   The level in the TabbingManager's stack of this tabbingContext.
   * @param {jQuery} options.$tabbableElements
   *   The DOM elements that should be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {jQuery} options.$disabledElements
   *   The DOM elements that should not be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {boolean} options.released
   *   A released tabbingContext can never be activated again. It will be
   *   cleaned up when the TabbingManager unwinds its stack.
   * @param {boolean} options.active
   *   When true, the tabbable elements of this tabbingContext will be reachable
   *   via the tab key and the disabled elements will not. Only one
   *   tabbingContext can be active at a time.
   *  @param {boolean} options.trapFocus
   *   When true, focus is trapped within the tabbable elements, i.e. focus will
   *   remain within the browser.
   */
  function TabbingContext(options) {
    $.extend(
      this,
      /** @lends Drupal~TabbingContext# */ {
        /**
         * @type {?number}
         */
        level: null,

        /**
         * @type {jQuery}
         */
        $tabbableElements: $(),

        /**
         * @type {jQuery}
         */
        $disabledElements: $(),

        /**
         * @type {boolean}
         */
        released: false,

        /**
         * @type {boolean}
         */
        active: false,

        /**
         * @type {boolean}
         */
        trapFocus: false,
      },
      options,
    );
  }

  /**
   * Add public methods to the TabbingManager class.
   */
  $.extend(
    TabbingManager.prototype,
    /** @lends Drupal~TabbingManager# */ {
      /**
       * Constrain tabbing to the specified set of elements only.
       *
       * Makes elements outside of the specified set of elements unreachable via
       * the tab key.
       *
       * @param {jQuery|Selector|Element|ElementArray|object|selection} elements
       *   The set of elements to which tabbing should be constrained. Can also
       *   be any jQuery-compatible argument.
       * @param {object} [options={}]
       *   Constrain options.
       * @param {boolean} [options.trapFocus=false]
       *   When true, tabbing is trapped within the set of elements and can't
       *   leave the browser. If the final element in the set is tabbed, the
       *   first element in the set will receive focus. If the first element in
       *   the set is shift-tabbed, the last element in the set will receive
       *   focus.
       *   When false, it is possible to tab out of the browser window by
       *   tabbing the final element in the set or shift-tabbing the first
       *   element in the set.
       *
       * @return {Drupal~TabbingContext}
       *   The TabbingContext instance.
       *
       * @fires event:drupalTabbingConstrained
       */
      constrain(elements, { trapFocus = false } = {}) {
        // Deactivate all tabbingContexts to prepare for the new constraint. A
        // tabbingContext instance will only be reactivated if the stack is
        // unwound to it in the _unwindStack() method.
        const il = this.stack.length;
        for (let i = 0; i < il; i++) {
          this.stack[i].deactivate();
        }

        // The "active tabbing set" are the elements tabbing should be constrained
        // to.
        let tabbableElements = [];
        $(elements).each((index, rootElement) => {
          tabbableElements = [...tabbableElements, ...tabbable(rootElement)];
          if (isTabbable(rootElement)) {
            tabbableElements = [...tabbableElements, rootElement];
          }
        });

        const tabbingContext = new TabbingContext({
          // The level is the current height of the stack before this new
          // tabbingContext is pushed on top of the stack.
          level: this.stack.length,
          $tabbableElements: $(tabbableElements),
          trapFocus,
        });

        this.stack.push(tabbingContext);

        // Activates the tabbingContext; this will manipulate the DOM to constrain
        // tabbing.
        tabbingContext.activate();

        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingConstrained', tabbingContext);

        return tabbingContext;
      },

      /**
       * Restores a former tabbingContext when an active one is released.
       *
       * The TabbingManager stack of tabbingContext instances will be unwound
       * from the top-most released tabbingContext down to the first non-released
       * tabbingContext instance. This non-released instance is then activated.
       */
      release() {
        // Unwind as far as possible: find the topmost non-released
        // tabbingContext.
        let toActivate = this.stack.length - 1;
        while (toActivate >= 0 && this.stack[toActivate].released) {
          toActivate--;
        }

        // Delete all tabbingContexts after the to be activated one. They have
        // already been deactivated, so their effect on the DOM has been reversed.
        this.stack.splice(toActivate + 1);

        // Get topmost tabbingContext, if one exists, and activate it.
        if (toActivate >= 0) {
          this.stack[toActivate].activate();
        }
      },

      /**
       * Makes all elements outside of the tabbingContext's set untabbable.
       *
       * Elements made untabbable have their original tabindex and autofocus
       * values stored so that they might be restored later when this
       * tabbingContext is deactivated.
       *
       * @param {Drupal~TabbingContext} tabbingContext
       *   The TabbingContext instance that has been activated.
       */
      activate(tabbingContext) {
        const $set = tabbingContext.$tabbableElements;
        const level = tabbingContext.level;
        // Determine which elements are reachable via tabbing by default.
        const $disabledSet = $(tabbable(document.body))
          // Exclude elements of the active tabbing set.
          .not($set);
        // Set the disabled set on the tabbingContext.
        tabbingContext.$disabledElements = $disabledSet;
        // Record the tabindex for each element, so we can restore it later.
        const il = $disabledSet.length;
        for (let i = 0; i < il; i++) {
          this.recordTabindex($disabledSet.eq(i), level);
        }
        // Make all tabbable elements outside of the active tabbing set
        // unreachable.
        $disabledSet.prop('tabindex', -1).prop('autofocus', false);

        // Set focus on an element in the tabbingContext's set of tabbable
        // elements. First, check if there is an element with an autofocus
        // attribute. Select the last one from the DOM order.
        let $hasFocus = $set.filter('[autofocus]').eq(-1);
        // If no element in the tabbable set has an autofocus attribute, select
        // the first element in the set.
        if ($hasFocus.length === 0) {
          $hasFocus = $set.eq(0);
        }
        $hasFocus.trigger('focus');

        // Trap focus within the set.
        if ($set.length && tabbingContext.trapFocus) {
          $set.last().on('keydown.focus-trap', (event) => {
            if (event.key === 'Tab' && !event.shiftKey) {
              event.preventDefault();
              $set.first().focus();
            }
          });
          $set.first().on('keydown.focus-trap', (event) => {
            if (event.key === 'Tab' && event.shiftKey) {
              event.preventDefault();
              $set.last().focus();
            }
          });
        }
      },

      /**
       * Restores that tabbable state of a tabbingContext's disabled elements.
       *
       * Elements that were made untabbable have their original tabindex and
       * autofocus values restored.
       *
       * @param {Drupal~TabbingContext} tabbingContext
       *   The TabbingContext instance that has been deactivated.
       */
      deactivate(tabbingContext) {
        const $set = tabbingContext.$disabledElements;
        const level = tabbingContext.level;
        const il = $set.length;

        tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
        tabbingContext.$tabbableElements.last().off('keydown.focus-trap');
        for (let i = 0; i < il; i++) {
          this.restoreTabindex($set.eq(i), level);
        }
      },

      /**
       * Records the tabindex and autofocus values of an untabbable element.
       *
       * @param {jQuery} $el
       *   The set of elements that have been disabled.
       * @param {number} level
       *   The stack level for which the tabindex attribute should be recorded.
       */
      recordTabindex($el, level) {
        const tabInfo = $el.data('drupalOriginalTabIndices') || {};
        tabInfo[level] = {
          tabindex: $el[0].getAttribute('tabindex'),
          autofocus: $el[0].hasAttribute('autofocus'),
        };
        $el.data('drupalOriginalTabIndices', tabInfo);
      },

      /**
       * Restores the tabindex and autofocus values of a reactivated element.
       *
       * @param {jQuery} $el
       *   The element that is being reactivated.
       * @param {number} level
       *   The stack level for which the tabindex attribute should be restored.
       */
      restoreTabindex($el, level) {
        const tabInfo = $el.data('drupalOriginalTabIndices');
        if (tabInfo && tabInfo[level]) {
          const data = tabInfo[level];
          if (data.tabindex) {
            $el[0].setAttribute('tabindex', data.tabindex);
          }
          // If the element did not have a tabindex at this stack level then
          // remove it.
          else {
            $el[0].removeAttribute('tabindex');
          }
          if (data.autofocus) {
            $el[0].setAttribute('autofocus', 'autofocus');
          }

          // Clean up $.data.
          if (level === 0) {
            // Remove all data.
            $el.removeData('drupalOriginalTabIndices');
          } else {
            // Remove the data for this stack level and higher.
            let levelToDelete = level;
            while (tabInfo.hasOwnProperty(levelToDelete)) {
              delete tabInfo[levelToDelete];
              levelToDelete++;
            }
            $el.data('drupalOriginalTabIndices', tabInfo);
          }
        }
      },
    },
  );

  /**
   * Add public methods to the TabbingContext class.
   */
  $.extend(
    TabbingContext.prototype,
    /** @lends Drupal~TabbingContext# */ {
      /**
       * Releases this TabbingContext.
       *
       * Once a TabbingContext object is released, it can never be activated
       * again.
       *
       * @fires event:drupalTabbingContextReleased
       */
      release() {
        if (!this.released) {
          this.deactivate();
          this.released = true;
          Drupal.tabbingManager.release(this);
          // Allow modules to respond to the tabbingContext release event.
          $(document).trigger('drupalTabbingContextReleased', this);
        }
      },

      /**
       * Activates this TabbingContext.
       *
       * @fires event:drupalTabbingContextActivated
       */
      activate() {
        // A released TabbingContext object can never be activated again.
        if (!this.active && !this.released) {
          this.active = true;
          Drupal.tabbingManager.activate(this);
          // Allow modules to respond to the constrain event.
          $(document).trigger('drupalTabbingContextActivated', this);
        }
      },

      /**
       * Deactivates this TabbingContext.
       *
       * @fires event:drupalTabbingContextDeactivated
       */
      deactivate() {
        if (this.active) {
          this.active = false;
          Drupal.tabbingManager.deactivate(this);
          // Allow modules to respond to the constrain event.
          $(document).trigger('drupalTabbingContextDeactivated', this);
        }
      },
    },
  );

  // Mark this behavior as processed on the first pass and return if it is
  // already processed.
  if (Drupal.tabbingManager) {
    return;
  }

  /**
   * @type {Drupal~TabbingManager}
   */
  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);
;
/**
 * @file
 * Attaches behaviors for the Contextual module's edit toolbar tab.
 */

(function ($, Drupal, Backbone) {
  const strings = {
    tabbingReleased: Drupal.t(
      'Tabbing is no longer constrained by the Contextual module.',
    ),
    tabbingConstrained: Drupal.t(
      'Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.',
    ),
    pressEsc: Drupal.t('Press the esc key to exit.'),
  };

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {HTMLElement} context
   *   A contextual links DOM element as rendered by the server.
   */
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    const contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel(
      {
        // Checks whether localStorage indicates we should start in edit mode
        // rather than view mode.
        // @see Drupal.contextualToolbar.VisualView.persist
        isViewing:
          localStorage.getItem('Drupal.contextualToolbar.isViewing') !==
          'false',
      },
      {
        contextualCollection: Drupal.contextual.collection,
      },
    );

    const viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings,
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  /**
   * Attaches contextual's edit toolbar tab behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches contextual toolbar behavior on a contextualToolbar-init event.
   */
  Drupal.behaviors.contextualToolbar = {
    attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    },
  };

  /**
   * Namespace for the contextual toolbar.
   *
   * @namespace
   *
   * @private
   */
  Drupal.contextualToolbar = {
    /**
     * The {@link Drupal.contextualToolbar.StateModel} instance.
     *
     * @type {?Drupal.contextualToolbar.StateModel}
     *
     * @deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is
     * no replacement.
     */
    model: null,
  };
})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone Model for the state of Contextual module's edit toolbar tab.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend(
    /** @lends Drupal.contextualToolbar.StateModel# */ {
      /**
       * @type {object}
       *
       * @prop {boolean} isViewing
       * @prop {boolean} isVisible
       * @prop {number} contextualCount
       * @prop {Drupal~TabbingContext} tabbingContext
       */
      defaults: /** @lends Drupal.contextualToolbar.StateModel# */ {
        /**
         * Indicates whether the toggle is currently in "view" or "edit" mode.
         *
         * @type {boolean}
         */
        isViewing: true,

        /**
         * Indicates whether the toggle should be visible or hidden. Automatically
         * calculated, depends on contextualCount.
         *
         * @type {boolean}
         */
        isVisible: false,

        /**
         * Tracks how many contextual links exist on the page.
         *
         * @type {number}
         */
        contextualCount: 0,

        /**
         * A TabbingContext object as returned by {@link Drupal~TabbingManager}:
         * the set of tabbable elements when edit mode is enabled.
         *
         * @type {?Drupal~TabbingContext}
         */
        tabbingContext: null,
      },

      /**
       * Models the state of the edit mode toggle.
       *
       * @constructs
       *
       * @augments Backbone.Model
       *
       * @param {object} attrs
       *   Attributes for the backbone model.
       * @param {object} options
       *   An object with the following option:
       * @param {Backbone.collection} options.contextualCollection
       *   The collection of {@link Drupal.contextual.StateModel} models that
       *   represent the contextual links on the page.
       */
      initialize(attrs, options) {
        // Respond to new/removed contextual links.
        this.listenTo(
          options.contextualCollection,
          'reset remove add',
          this.countContextualLinks,
        );
        this.listenTo(
          options.contextualCollection,
          'add',
          this.lockNewContextualLinks,
        );

        // Automatically determine visibility.
        this.listenTo(this, 'change:contextualCount', this.updateVisibility);

        // Whenever edit mode is toggled, lock all contextual links.
        this.listenTo(this, 'change:isViewing', (model, isViewing) => {
          options.contextualCollection.each((contextualModel) => {
            contextualModel.set('isLocked', !isViewing);
          });
        });
      },

      /**
       * Tracks the number of contextual link models in the collection.
       *
       * @param {Drupal.contextual.StateModel} contextualModel
       *   The contextual links model that was added or removed.
       * @param {Backbone.Collection} contextualCollection
       *    The collection of contextual link models.
       */
      countContextualLinks(contextualModel, contextualCollection) {
        this.set('contextualCount', contextualCollection.length);
      },

      /**
       * Lock newly added contextual links if edit mode is enabled.
       *
       * @param {Drupal.contextual.StateModel} contextualModel
       *   The contextual links model that was added.
       * @param {Backbone.Collection} [contextualCollection]
       *    The collection of contextual link models.
       */
      lockNewContextualLinks(contextualModel, contextualCollection) {
        if (!this.get('isViewing')) {
          contextualModel.set('isLocked', true);
        }
      },

      /**
       * Automatically updates visibility of the view/edit mode toggle.
       */
      updateVisibility() {
        this.set('isVisible', this.get('contextualCount') > 0);
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of the edit mode toggle.
 */

(function ($, Drupal, Backbone, _) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.AuralView = Backbone.View.extend(
    /** @lends Drupal.contextualToolbar.AuralView# */ {
      /**
       * Tracks whether the tabbing constraint announcement has been read once.
       *
       * @type {boolean}
       */
      announcedOnce: false,

      /**
       * Renders the aural view of the edit mode toggle (screen reader support).
       *
       * @constructs
       *
       * @augments Backbone.View
       *
       * @param {object} options
       *   Options for the view.
       */
      initialize(options) {
        this.options = options;

        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

        $(document).on('keyup', _.bind(this.onKeypress, this));
        this.manageTabbing();
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.contextualToolbar.AuralView}
       *   The current contextual toolbar aural view.
       */
      render() {
        // Render the state.
        this.$el
          .find('button')
          .attr('aria-pressed', !this.model.get('isViewing'));

        return this;
      },

      /**
       * Limits tabbing to the contextual links and edit mode toolbar tab.
       */
      manageTabbing() {
        let tabbingContext = this.model.get('tabbingContext');
        // Always release an existing tabbing context.
        if (tabbingContext) {
          // Only announce release when the context was active.
          if (tabbingContext.active) {
            Drupal.announce(this.options.strings.tabbingReleased);
          }
          tabbingContext.release();
        }
        // Create a new tabbing context when edit mode is enabled.
        if (!this.model.get('isViewing')) {
          tabbingContext = Drupal.tabbingManager.constrain(
            $('.contextual-toolbar-tab, .contextual'),
          );
          this.model.set('tabbingContext', tabbingContext);
          this.announceTabbingConstraint();
          this.announcedOnce = true;
        }
      },

      /**
       * Announces the current tabbing constraint.
       */
      announceTabbingConstraint() {
        const strings = this.options.strings;
        Drupal.announce(
          Drupal.formatString(strings.tabbingConstrained, {
            '@contextualsCount': Drupal.formatPlural(
              Drupal.contextual.collection.length,
              '@count contextual link',
              '@count contextual links',
            ),
          }),
        );
        Drupal.announce(strings.pressEsc);
      },

      /**
       * Responds to esc and tab key press events.
       *
       * @param {jQuery.Event} event
       *   The keypress event.
       */
      onKeypress(event) {
        // The first tab key press is tracked so that an announcement about
        // tabbing constraints can be raised if edit mode is enabled when the page
        // is loaded.
        if (
          !this.announcedOnce &&
          event.keyCode === 9 &&
          !this.model.get('isViewing')
        ) {
          this.announceTabbingConstraint();
          // Set announce to true so that this conditional block won't run again.
          this.announcedOnce = true;
        }
        // Respond to the ESC key. Exit out of edit mode.
        if (event.keyCode === 27) {
          this.model.set('isViewing', true);
        }
      },
    },
  );
})(jQuery, Drupal, Backbone, _);
;
/**
 * @file
 * A Backbone View that provides the visual view of the edit mode toggle.
 */

(function (Drupal, Backbone) {
  /**
   * @deprecated in drupal:9.4.0 and is removed from drupal:10.0.0. There is no
   *  replacement.
   */
  Drupal.contextualToolbar.VisualView = Backbone.View.extend(
    /** @lends Drupal.contextualToolbar.VisualView# */ {
      /**
       * Events for the Backbone view.
       *
       * @return {object}
       *   A mapping of events to be used in the view.
       */
      events() {
        // Prevents delay and simulated mouse events.
        const touchEndToClick = function (event) {
          event.preventDefault();
          event.target.click();
        };

        return {
          click() {
            this.model.set('isViewing', !this.model.get('isViewing'));
          },
          touchend: touchEndToClick,
        };
      },

      /**
       * Renders the visual view of the edit mode toggle.
       *
       * Listens to mouse & touch and handles edit mode toggle interactions.
       *
       * @constructs
       *
       * @augments Backbone.View
       */
      initialize() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'change:isViewing', this.persist);
      },

      /**
       * {@inheritdoc}
       *
       * @return {Drupal.contextualToolbar.VisualView}
       *   The current contextual toolbar visual view.
       */
      render() {
        // Render the visibility.
        this.$el.toggleClass('hidden', !this.model.get('isVisible'));
        // Render the state.
        this.$el
          .find('button')
          .toggleClass('is-active', !this.model.get('isViewing'));

        return this;
      },

      /**
       * Model change handler; persists the isViewing value to localStorage.
       *
       * `isViewing === true` is the default, so only stores in localStorage when
       * it's not the default value (i.e. false).
       *
       * @param {Drupal.contextualToolbar.StateModel} model
       *   A {@link Drupal.contextualToolbar.StateModel} model.
       * @param {boolean} isViewing
       *   The value of the isViewing attribute in the model.
       */
      persist(model, isViewing) {
        if (!isViewing) {
          localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
        } else {
          localStorage.removeItem('Drupal.contextualToolbar.isViewing');
        }
      },
    },
  );
})(Drupal, Backbone);
;
/**
 * @file
 * Replaces the home link in toolbar with a back to site link.
 */

(function ($, Drupal, drupalSettings) {
  const pathInfo = drupalSettings.path;
  const escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  const windowLocation = window.location;

  // Saves the last non-administrative page in the browser to be able to link
  // back to it when browsing administrative pages. If there is a destination
  // parameter there is not need to save the current path because the page is
  // loaded within an existing "workflow".
  if (
    !pathInfo.currentPathIsAdmin &&
    !/destination=/.test(windowLocation.search)
  ) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  /**
   * Replaces the "Home" link with "Back to site" link.
   *
   * Back to site link points to the last non-administrative page the user
   * visited within the same browser tab.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the replacement functionality to the toolbar-escape-admin element.
   */
  Drupal.behaviors.escapeAdmin = {
    attach() {
      const toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');
      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $(toolbarEscape).attr('href', escapeAdminPath);
        } else {
          toolbarEscape[0].textContent = Drupal.t('Home');
        }
      }
    },
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Renders BigPipe placeholders using Drupal's Ajax system.
 */

(function (Drupal, drupalSettings) {
  /**
   * Maps textContent of <script type="application/vnd.drupal-ajax"> to an AJAX response.
   *
   * @param {string} content
   *   The text content of a <script type="application/vnd.drupal-ajax"> DOM node.
   * @return {Array|boolean}
   *   The parsed Ajax response containing an array of Ajax commands, or false in
   *   case the DOM node hasn't fully arrived yet.
   */
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  /**
   * Executes Ajax commands in <script type="application/vnd.drupal-ajax"> tag.
   *
   * These Ajax commands replace placeholders with HTML and load missing CSS/JS.
   *
   * @param {HTMLScriptElement} placeholderReplacement
   *   Script tag created by BigPipe.
   */
  function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
    const placeholderId = placeholderReplacement.getAttribute(
      'data-big-pipe-replacement-for-placeholder-with-id',
    );
    const content = placeholderReplacement.textContent.trim();
    // Ignore any placeholders that are not in the known placeholder list. Used
    // to avoid someone trying to XSS the site via the placeholdering mechanism.
    if (
      typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined'
    ) {
      const response = mapTextContentToAjaxResponse(content);
      // If we try to parse the content too early (when the JSON containing Ajax
      // commands is still arriving), textContent will be empty or incomplete.
      if (response === false) {
        /**
         * Mark as unprocessed so this will be retried later.
         * @see bigPipeProcessDocument()
         */
        once.remove('big-pipe', placeholderReplacement);
      } else {
        // Create a Drupal.Ajax object without associating an element, a
        // progress indicator or a URL.
        const ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false,
        });
        // Then, simulate an AJAX response having arrived, and let the Ajax
        // system handle it.
        ajaxObject.success(response, 'success');
      }
    }
  }

  // The frequency with which to check for newly arrived BigPipe placeholders.
  // Hence 50 ms means we check 20 times per second. Setting this to 100 ms or
  // more would cause the user to see content appear noticeably slower.
  const interval = drupalSettings.bigPipeInterval || 50;

  // The internal ID to contain the watcher service.
  let timeoutID;

  /**
   * Processes a streamed HTML document receiving placeholder replacements.
   *
   * @param {HTMLDocument} context
   *   The HTML document containing <script type="application/vnd.drupal-ajax">
   *   tags generated by BigPipe.
   *
   * @return {bool}
   *   Returns true when processing has been finished and a stop signal has been
   *   found.
   */
  function bigPipeProcessDocument(context) {
    // Make sure we have BigPipe-related scripts before processing further.
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    // Attach Drupal behaviors early, if possible.
    once('big-pipe-early-behaviors', 'body', context).forEach((el) => {
      Drupal.attachBehaviors(el);
    });

    once(
      'big-pipe',
      'script[data-big-pipe-replacement-for-placeholder-with-id]',
      context,
    ).forEach(bigPipeProcessPlaceholderReplacement);

    // If we see the stop signal, clear the timeout: all placeholder
    // replacements are guaranteed to be received and processed.
    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(() => {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();

  // If something goes wrong, make sure everything is cleaned up and has had a
  // chance to be processed with everything loaded.
  window.addEventListener('load', () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(Drupal, drupalSettings);
;
