/*!
 * ihavecookies - jQuery plugin for displaying cookie/privacy message
 * v0.3.2
 *
 * Copyright (c) 2018 Ketan Mistry (https://iamketan.com.au)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
!function(p){p.fn.ihavecookies=function(e,o){var i=p(this),t=p.extend({cookieTypes:[{type:"Site Preferences",value:"preferences",description:"These are cookies that are related to your site preferences, e.g. remembering your username, site colours, etc."},{type:"Analytics",value:"analytics",description:"Cookies related to site visits, browser types, etc."},{type:"Marketing",value:"marketing",description:"Cookies related to marketing, e.g. newsletters, social media, etc"}],title:"Cookies & Privacy",message:"Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches, and give us insights into user behavior so we can improve our communications and products.",link:"/privacy-policy",delay:2e3,expires:30,moreInfoLabel:"More information",acceptBtnLabel:"Accept Cookies",advancedBtnLabel:"Customise Cookies",cookieTypesTitle:"Select cookies to accept",fixedCookieTypeLabel:"Necessary",fixedCookieTypeDesc:"These are cookies that are essential for the website to work correctly.",onAccept:function(){},uncheckBoxes:!1},e),n=u("cookieControl"),c=u("cookieControlPrefs");if(n&&c&&"reinit"!=o){var r=!0;"false"==n&&(r=!1),d(r,t.expires)}else{p("#gdpr-cookie-message").remove();var a='<li><input type="checkbox" name="gdpr[]" value="necessary" checked="checked" disabled="disabled"> <label title="'+t.fixedCookieTypeDesc+'">'+t.fixedCookieTypeLabel+"</label></li>";preferences=JSON.parse(c),p.each(t.cookieTypes,function(e,o){if(""!==o.type&&""!==o.value){var i="";!1!==o.description&&(i=' title="'+o.description+'"'),a+='<li><input type="checkbox" id="gdpr-cookietype-'+o.value+'" name="gdpr[]" value="'+o.value+'" data-auto="on"> <label for="gdpr-cookietype-'+o.value+'"'+i+">"+o.type+"</label></li>"}});var s='<div id="gdpr-cookie-message"><h4>'+t.title+"</h4><p>"+t.message+' <a href="'+t.link+'">'+t.moreInfoLabel+'</a><div id="gdpr-cookie-types" style="display:none;"><h5>'+t.cookieTypesTitle+"</h5><ul>"+a+'</ul></div><p><button id="gdpr-cookie-accept" type="button">'+t.acceptBtnLabel+'</button><button id="gdpr-cookie-advanced" type="button">'+t.advancedBtnLabel+"</button></p></div>";setTimeout(function(){p(i).append(s),p("#gdpr-cookie-message").hide().fadeIn("slow",function(){"reinit"==o&&(p("#gdpr-cookie-advanced").trigger("click"),p.each(preferences,function(e,o){p("input#gdpr-cookietype-"+o).prop("checked",!0)}))})},t.delay),p("body").on("click","#gdpr-cookie-accept",function(){d(!0,t.expires),p('input[name="gdpr[]"][data-auto="on"]').prop("checked",!0);var i=[];p.each(p('input[name="gdpr[]"]').serializeArray(),function(e,o){i.push(o.value)}),l("cookieControlPrefs",JSON.stringify(i),365),t.onAccept.call(this)}),p("body").on("click","#gdpr-cookie-advanced",function(){p('input[name="gdpr[]"]:not(:disabled)').attr("data-auto","off").prop("checked",!1),p("#gdpr-cookie-types").slideDown("fast",function(){p("#gdpr-cookie-advanced").prop("disabled",!0)})})}!0===t.uncheckBoxes&&p('input[type="checkbox"].ihavecookies').prop("checked",!1)},p.fn.ihavecookies.cookie=function(){var e=u("cookieControlPrefs");return JSON.parse(e)},p.fn.ihavecookies.preference=function(e){var o=u("cookieControl"),i=u("cookieControlPrefs");return i=JSON.parse(i),!1!==o&&(!1!==i&&-1!==i.indexOf(e))};var d=function(e,o){l("cookieControl",e,o),p("#gdpr-cookie-message").fadeOut("fast",function(){p(this).remove()})},l=function(e,o,i){var t=new Date;t.setTime(t.getTime()+24*i*60*60*1e3);var n="expires="+t.toUTCString();return document.cookie=e+"="+o+";"+n+";path=/",u(e)},u=function(e){for(var o=e+"=",i=decodeURIComponent(document.cookie).split(";"),t=0;t<i.length;t++){for(var n=i[t];" "==n.charAt(0);)n=n.substring(1);if(0===n.indexOf(o))return n.substring(o.length,n.length)}return!1}}(jQuery);

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
// On the load, resize dynamic images so fill the screen
$(window).load(function(){
 	resizeFeatureImage();
});

var waypoint = new Waypoint({
	element: document.getElementById('influencers'),
	handler: function(direction) {
	 	$('.percentage').attr("class", "start")
		$('.count').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).attr('data-amount')
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
		this.destroy()
	}
})

// On the resize of the window, resize dynamic images so fill the screen
var rtime;
var timeout = false;
var delta = 300;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeEnd, delta);
    }
});

function resizeEnd() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeEnd, delta);
    } else {
        timeout = false;
        resizeFeatureImage();
    }               
}

// function resizeFeatureImage() {
//     if ($(window).width() > 1200) {
// 		fullWidth = $('.categories').width();
// 		width = fullWidth / 4;
// 		$('.categories .category').each( function(index, element) {
// 			$(element).height(width - 40);
// 		});
//     }
// }

function play() {
	var audio = document.getElementById("audio");
	audio.play();
}

var url = location.search;
var urlParams = {};
    url.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) {
        urlParams[$1] = $3;
    }
);
if (urlParams.hasOwnProperty("email")) {
	$('#thankyou').addClass('show');
}

function sending(button) {
	console.log('sending');
}

function showContent(target) {
	$(target + ' .default').removeClass('show');
	$(target + ' .copy').addClass('show');
}

function hideContent(target) {
	$(target + ' .default').addClass('show');
	$(target + ' .copy').removeClass('show');
}

$( "header a" ).click(function(event) {
	event.preventDefault();
	target = $ (this).attr('href');
	$('html, body').animate({
	    scrollTop: ($(target).offset().top - 75)
	}, 500);
});

$( "#down" ).click(function(event) {
	event.preventDefault();
	target = $ (this).attr('href');
	$('html, body').animate({
	    scrollTop: ($(target).offset().top - 75)
	}, 500);
});

// $('body').ihavecookies({
// 	title: "Cookies & Privacy",
// 	message: "This website uses cookies to ensure you get the best experience on our website.",
// 	link: "/privacy.html",
// 	uncheckBoxes: true,
// 	// delay: 2000,
// 	// expires: 30, 
// 	cookieTypes: [
// 		{
// 			type: 'Analytics',
// 			value: 'analytics',
// 			description: 'Cookies related to site visits, browser types, etc.'
// 		},
// 	],
// 	onAccept: function(event){
// 		console.log(event);
// 		ga('create', 'UA-106085657-1', 'auto');
// 		ga('send', 'pageview');
// 	}
// });