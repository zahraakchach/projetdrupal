/*!
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.CKEditor5=o():(t.CKEditor5=t.CKEditor5||{},t.CKEditor5.textTransformationAdapter=o())}(self,(()=>(()=>{"use strict";var t={d:(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o)},o={};t.d(o,{default:()=>e});const e={TextTransformationAdapter:class{static get pluginName(){return"TextTransformationAdapter"}constructor(t){this.editor=t;const o=this.editor.config._config.typing?.transformations?.drupal_config?.regex;if(!o||0===o.length)return;let e=[];for(const t of o){let o={},r=new RegExp(t.from);o.from=r,o.to=[];for(let e of t.to)"null"===e?o.to.push(null):o.to.push(e);e.push(o)}this.editor.config._config.typing.transformations.extra?this.editor.config._config.typing.transformations.extra=this.editor.config._config.typing.transformations.extra.concat(e):this.editor.config._config.typing.transformations.extra=e}}};return o=o.default})()));