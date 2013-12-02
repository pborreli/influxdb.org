!function(t,e,i){"use strict";Foundation.libs.section={name:"section",version:"4.3.2",settings:{deep_linking:!1,small_breakpoint:768,one_up:!0,multi_expand:!1,section_selector:"[data-section]",region_selector:"section, .section, [data-section-region]",title_selector:".title, [data-section-title]",resized_data_attr:"data-section-resized",small_style_data_attr:"data-section-small-style",content_selector:".content, [data-section-content]",nav_selector:'[data-section="vertical-nav"], [data-section="horizontal-nav"]',active_class:"active",callback:function(){}},init:function(e,i,n){var s=this;return Foundation.inherit(this,"throttle data_options position_right offset_right"),"object"==typeof i&&t.extend(!0,s.settings,i),"string"!=typeof i?(this.events(),!0):this[i].call(this,n)},events:function(){for(var n=this,s=[],o=n.settings.section_selector,a=n.settings.region_selector.split(","),r=n.settings.title_selector.split(","),c=0,l=a.length;l>c;c++)for(var u=a[c],d=0,h=r.length;h>d;d++){var f=o+">"+u+">"+r[d];s.push(f+" a"),s.push(f)}t(n.scope).on("click.fndtn.section",s.join(","),function(e){var i=t(this).closest(n.settings.title_selector);n.close_navs(i),i.siblings(n.settings.content_selector).length>0&&n.toggle_active.call(i[0],e)}),t(e).on("resize.fndtn.section",n.throttle(function(){n.resize()},30)).on("hashchange.fndtn.section",n.set_active_from_hash),t(i).on("click.fndtn.section",function(e){e.isPropagationStopped&&e.isPropagationStopped()||e.target!==i&&n.close_navs(t(e.target).closest(n.settings.title_selector))}),t(e).triggerHandler("resize.fndtn.section"),t(e).triggerHandler("hashchange.fndtn.section")},close_navs:function(e){var i=Foundation.libs.section,n=t(i.settings.nav_selector).filter(function(){return!t.extend({},i.settings,i.data_options(t(this))).one_up});if(e.length>0){var s=e.parent().parent();(i.is_horizontal_nav(s)||i.is_vertical_nav(s))&&(n=n.filter(function(){return this!==s[0]}))}n.children(i.settings.region_selector).removeClass(i.settings.active_class)},toggle_active:function(e){var i=t(this),n=Foundation.libs.section,s=i.parent(),o=i.siblings(n.settings.content_selector),a=s.parent(),r=t.extend({},n.settings,n.data_options(a)),c=a.children(n.settings.region_selector).filter("."+n.settings.active_class);!r.deep_linking&&o.length>0&&e.preventDefault(),e.stopPropagation(),s.hasClass(n.settings.active_class)?(s.hasClass(n.settings.active_class)&&n.is_accordion(a)||!r.one_up&&(n.small(a)||n.is_vertical_nav(a)||n.is_horizontal_nav(a)||n.is_accordion(a)))&&(s.removeClass(n.settings.active_class),s.trigger("closed.fndtn.section")):((!n.is_accordion(a)||n.is_accordion(a)&&!n.settings.multi_expand)&&(c.removeClass(n.settings.active_class),c.trigger("closed.fndtn.section")),s.addClass(n.settings.active_class),n.resize(s.find(n.settings.section_selector).not("["+n.settings.resized_data_attr+"]"),!0),s.trigger("opened.fndtn.section")),r.callback(a)},check_resize_timer:null,resize:function(e,i){var n=Foundation.libs.section,s=t(n.settings.section_selector),o=n.small(s),a=function(t,e){return!(n.is_accordion(t)||t.is("["+n.settings.resized_data_attr+"]")||o&&!n.is_horizontal_tabs(t)||e!==("none"===t.css("display")||!t.parent().is(":visible")))};e=e||t(n.settings.section_selector),clearTimeout(n.check_resize_timer),o||e.removeAttr(n.settings.small_style_data_attr),e.filter(function(){return a(t(this),!1)}).each(function(){var e=t(this),s=e.children(n.settings.region_selector),o=s.children(n.settings.title_selector),a=s.children(n.settings.content_selector),r=0;if(i&&0==e.children(n.settings.region_selector).filter("."+n.settings.active_class).length){var c=t.extend({},n.settings,n.data_options(e));c.deep_linking||!c.one_up&&(n.is_horizontal_nav(e)||n.is_vertical_nav(e)||n.is_accordion(e))||s.filter(":visible").first().addClass(n.settings.active_class)}if(n.is_horizontal_tabs(e)||n.is_auto(e)){var l=0;o.each(function(){var e=t(this);if(e.is(":visible")){e.css(n.rtl?"right":"left",l);var i=parseInt(e.css("border-"+(n.rtl?"left":"right")+"-width"),10);"Nan"===i.toString()&&(i=0),l+=n.outerWidth(e)-i,r=Math.max(r,n.outerHeight(e))}}),o.css("height",r),s.each(function(){var e=t(this),i=e.children(n.settings.content_selector),s=parseInt(i.css("border-top-width"),10);"Nan"===s.toString()&&(s=0),e.css("padding-top",r-s)}),e.css("min-height",r)}else if(n.is_horizontal_nav(e)){var u=!0;o.each(function(){r=Math.max(r,n.outerHeight(t(this)))}),s.each(function(){var i=t(this);i.css("margin-left","-"+(u?e:i.children(n.settings.title_selector)).css("border-left-width")),u=!1}),s.css("margin-top","-"+e.css("border-top-width")),o.css("height",r),a.css("top",r),e.css("min-height",r)}else if(n.is_vertical_tabs(e)){var d=0;o.each(function(){var e=t(this);if(e.is(":visible")){e.css("top",d);var i=parseInt(e.css("border-top-width"),10);"Nan"===i.toString()&&(i=0),d+=n.outerHeight(e)-i}}),a.css("min-height",d+1)}else if(n.is_vertical_nav(e)){var h=0,f=!0;o.each(function(){h=Math.max(h,n.outerWidth(t(this)))}),s.each(function(){var i=t(this);i.css("margin-top","-"+(f?e:i.children(n.settings.title_selector)).css("border-top-width")),f=!1}),o.css("width",h),a.css(n.rtl?"right":"left",h),e.css("width",h)}e.attr(n.settings.resized_data_attr,!0)}),t(n.settings.section_selector).filter(function(){return a(t(this),!0)}).length>0&&(n.check_resize_timer=setTimeout(function(){n.resize(e.filter(function(){return a(t(this),!1)}),!0)},700)),o&&e.attr(n.settings.small_style_data_attr,!0)},is_vertical_nav:function(t){return/vertical-nav/i.test(t.data("section"))},is_horizontal_nav:function(t){return/horizontal-nav/i.test(t.data("section"))},is_accordion:function(t){return/accordion/i.test(t.data("section"))},is_horizontal_tabs:function(t){return/^tabs$/i.test(t.data("section"))},is_vertical_tabs:function(t){return/vertical-tabs/i.test(t.data("section"))},is_auto:function(t){var e=t.data("section");return""===e||/auto/i.test(e)},set_active_from_hash:function(){var i,n=Foundation.libs.section,s=e.location.hash.substring(1),o=t(n.settings.section_selector);o.each(function(){var e=t(this),o=e.children(n.settings.region_selector);return o.each(function(){var o=t(this),a=o.children(n.settings.content_selector).data("slug");return new RegExp(a,"i").test(s)?(i=e,!1):void 0}),null!=i?!1:void 0}),null!=i&&o.each(function(){if(i==t(this)){var e=t(this),o=t.extend({},n.settings,n.data_options(e)),a=e.children(n.settings.region_selector),r=o.deep_linking&&s.length>0,c=!1;a.each(function(){var e=t(this);if(c)e.removeClass(n.settings.active_class);else if(r){var i=e.children(n.settings.content_selector).data("slug");i&&new RegExp(i,"i").test(s)?(e.hasClass(n.settings.active_class)||e.addClass(n.settings.active_class),c=!0):e.removeClass(n.settings.active_class)}else e.hasClass(n.settings.active_class)&&(c=!0)}),c||!o.one_up&&(n.is_horizontal_nav(e)||n.is_vertical_nav(e)||n.is_accordion(e))||a.filter(":visible").first().addClass(n.settings.active_class)}})},reflow:function(){var e=Foundation.libs.section;t(e.settings.section_selector).removeAttr(e.settings.resized_data_attr),e.throttle(function(){e.resize()},30)()},small:function(e){var i=t.extend({},this.settings,this.data_options(e));return this.is_horizontal_tabs(e)?!1:e&&this.is_accordion(e)?!0:t("html").hasClass("lt-ie9")?!0:t("html").hasClass("ie8compat")?!0:t(this.scope).width()<i.small_breakpoint},off:function(){t(this.scope).off(".fndtn.section"),t(e).off(".fndtn.section"),t(i).off(".fndtn.section")}},t.fn.reflow_section=function(t){var e=this,i=Foundation.libs.section;return e.removeAttr(i.settings.resized_data_attr),i.throttle(function(){i.resize(e,t)},30)(),this}}(Foundation.zj,window,document);