//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function b(a){sd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wd===!1&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null):(e=ne.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:(e=ne.call(this._longMonthsParse,g),e!==-1?e:null)):(e=ne.call(this._longMonthsParse,g),e!==-1?e:(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c,e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Be=c)),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&b===-1&&(b=le),n(a)._overflowWeekday&&b===-1&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=Ke[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i=k.indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),e=hb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&n(b).bigHour===!0&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){var a=[].slice.call(arguments,0);return ub("isBefore",a)}function wb(){var a=[].slice.call(arguments,0);return ub("isAfter",a)}function xb(a){for(var b in a)if(Re.indexOf(b)===-1||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb(_d,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Dd="Invalid date",Ed="%d",Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:Dd,ordinal:Ed,dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",b(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a});
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * FullCalendar v3.5.1
 * Docs & License: https://fullcalendar.io/
 * (c) 2017 Adam Shaw
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery', 'moment' ], factory);
	}
	else if (typeof exports === 'object') { // Node/CommonJS
		module.exports = factory(require('jquery'), require('moment'));
	}
	else {
		factory(jQuery, moment);
	}
})(function($, moment) {

;;

var FC = $.fullCalendar = {
	version: "3.5.1",
	// When introducing internal API incompatibilities (where fullcalendar plugins would break),
	// the minor version of the calendar should be upped (ex: 2.7.2 -> 2.8.0)
	// and the below integer should be incremented.
	internalApiVersion: 10
};
var fcViews = FC.views = {};


$.fn.fullCalendar = function(options) {
	var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
	var res = this; // what this function will return (this jQuery object by default)

	this.each(function(i, _element) { // loop each DOM element involved
		var element = $(_element);
		var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
		var singleRes; // the returned value of this single method call

		// a method call
		if (typeof options === 'string') {

			if (options === 'getCalendar') {
				if (!i) { // first element only
					res = calendar;
				}
			}
			else if (options === 'destroy') { // don't warn if no calendar object
				if (calendar) {
					calendar.destroy();
					element.removeData('fullCalendar');
				}
			}
			else if (!calendar) {
				FC.warn("Attempting to call a FullCalendar method on an element with no calendar.");
			}
			else if ($.isFunction(calendar[options])) {
				singleRes = calendar[options].apply(calendar, args);

				if (!i) {
					res = singleRes; // record the first method call result
				}
				if (options === 'destroy') { // for the destroy method, must remove Calendar object data
					element.removeData('fullCalendar');
				}
			}
			else {
				FC.warn("'" + options + "' is an unknown FullCalendar method.");
			}
		}
		// a new calendar initialization
		else if (!calendar) { // don't initialize twice
			calendar = new Calendar(element, options);
			element.data('fullCalendar', calendar);
			calendar.render();
		}
	});

	return res;
};


var complexOptions = [ // names of options that are objects whose properties should be combined
	'header',
	'footer',
	'buttonText',
	'buttonIcons',
	'themeButtonIcons'
];


// Merges an array of option objects into a single object
function mergeOptions(optionObjs) {
	return mergeProps(optionObjs, complexOptions);
}

;;

// exports
FC.applyAll = applyAll;
FC.debounce = debounce;
FC.isInt = isInt;
FC.htmlEscape = htmlEscape;
FC.cssToStr = cssToStr;
FC.proxy = proxy;
FC.capitaliseFirstLetter = capitaliseFirstLetter;


/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/


// Given the scrollbar widths of some other container, create borders/margins on rowEls in order to match the left
// and right space that was offset by the scrollbars. A 1-pixel border first, then margin beyond that.
function compensateScroll(rowEls, scrollbarWidths) {
	if (scrollbarWidths.left) {
		rowEls.css({
			'border-left-width': 1,
			'margin-left': scrollbarWidths.left - 1
		});
	}
	if (scrollbarWidths.right) {
		rowEls.css({
			'border-right-width': 1,
			'margin-right': scrollbarWidths.right - 1
		});
	}
}


// Undoes compensateScroll and restores all borders/margins
function uncompensateScroll(rowEls) {
	rowEls.css({
		'margin-left': '',
		'margin-right': '',
		'border-left-width': '',
		'border-right-width': ''
	});
}


// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
	$('body').addClass('fc-not-allowed');
}


// Returns the mouse cursor to its original look
function enableCursor() {
	$('body').removeClass('fc-not-allowed');
}


// Given a total available height to fill, have `els` (essentially child rows) expand to accomodate.
// By default, all elements that are shorter than the recommended height are expanded uniformly, not considering
// any other els that are already too tall. if `shouldRedistribute` is on, it considers these tall rows and 
// reduces the available height.
function distributeHeight(els, availableHeight, shouldRedistribute) {

	// *FLOORING NOTE*: we floor in certain places because zoom can give inaccurate floating-point dimensions,
	// and it is better to be shorter than taller, to avoid creating unnecessary scrollbars.

	var minOffset1 = Math.floor(availableHeight / els.length); // for non-last element
	var minOffset2 = Math.floor(availableHeight - minOffset1 * (els.length - 1)); // for last element *FLOORING NOTE*
	var flexEls = []; // elements that are allowed to expand. array of DOM nodes
	var flexOffsets = []; // amount of vertical space it takes up
	var flexHeights = []; // actual css height
	var usedHeight = 0;

	undistributeHeight(els); // give all elements their natural height

	// find elements that are below the recommended height (expandable).
	// important to query for heights in a single first pass (to avoid reflow oscillation).
	els.each(function(i, el) {
		var minOffset = i === els.length - 1 ? minOffset2 : minOffset1;
		var naturalOffset = $(el).outerHeight(true);

		if (naturalOffset < minOffset) {
			flexEls.push(el);
			flexOffsets.push(naturalOffset);
			flexHeights.push($(el).height());
		}
		else {
			// this element stretches past recommended height (non-expandable). mark the space as occupied.
			usedHeight += naturalOffset;
		}
	});

	// readjust the recommended height to only consider the height available to non-maxed-out rows.
	if (shouldRedistribute) {
		availableHeight -= usedHeight;
		minOffset1 = Math.floor(availableHeight / flexEls.length);
		minOffset2 = Math.floor(availableHeight - minOffset1 * (flexEls.length - 1)); // *FLOORING NOTE*
	}

	// assign heights to all expandable elements
	$(flexEls).each(function(i, el) {
		var minOffset = i === flexEls.length - 1 ? minOffset2 : minOffset1;
		var naturalOffset = flexOffsets[i];
		var naturalHeight = flexHeights[i];
		var newHeight = minOffset - (naturalOffset - naturalHeight); // subtract the margin/padding

		if (naturalOffset < minOffset) { // we check this again because redistribution might have changed things
			$(el).height(newHeight);
		}
	});
}


// Undoes distrubuteHeight, restoring all els to their natural height
function undistributeHeight(els) {
	els.height('');
}


// Given `els`, a jQuery set of <td> cells, find the cell with the largest natural width and set the widths of all the
// cells to be that width.
// PREREQUISITE: if you want a cell to take up width, it needs to have a single inner element w/ display:inline
function matchCellWidths(els) {
	var maxInnerWidth = 0;

	els.find('> *').each(function(i, innerEl) {
		var innerWidth = $(innerEl).outerWidth();
		if (innerWidth > maxInnerWidth) {
			maxInnerWidth = innerWidth;
		}
	});

	maxInnerWidth++; // sometimes not accurate of width the text needs to stay on one line. insurance

	els.width(maxInnerWidth);

	return maxInnerWidth;
}


// Given one element that resides inside another,
// Subtracts the height of the inner element from the outer element.
function subtractInnerElHeight(outerEl, innerEl) {
	var both = outerEl.add(innerEl);
	var diff;

	// effin' IE8/9/10/11 sometimes returns 0 for dimensions. this weird hack was the only thing that worked
	both.css({
		position: 'relative', // cause a reflow, which will force fresh dimension recalculation
		left: -1 // ensure reflow in case the el was already relative. negative is less likely to cause new scroll
	});
	diff = outerEl.outerHeight() - innerEl.outerHeight(); // grab the dimensions
	both.css({ position: '', left: '' }); // undo hack

	return diff;
}


/* Element Geom Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.getOuterRect = getOuterRect;
FC.getClientRect = getClientRect;
FC.getContentRect = getContentRect;
FC.getScrollbarWidths = getScrollbarWidths;


// borrowed from https://github.com/jquery/jquery-ui/blob/1.11.0/ui/core.js#L51
function getScrollParent(el) {
	var position = el.css('position'),
		scrollParent = el.parents().filter(function() {
			var parent = $(this);
			return (/(auto|scroll)/).test(
				parent.css('overflow') + parent.css('overflow-y') + parent.css('overflow-x')
			);
		}).eq(0);

	return position === 'fixed' || !scrollParent.length ? $(el[0].ownerDocument || document) : scrollParent;
}


// Queries the outer bounding area of a jQuery element.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getOuterRect(el, origin) {
	var offset = el.offset();
	var left = offset.left - (origin ? origin.left : 0);
	var top = offset.top - (origin ? origin.top : 0);

	return {
		left: left,
		right: left + el.outerWidth(),
		top: top,
		bottom: top + el.outerHeight()
	};
}


// Queries the area within the margin/border/scrollbars of a jQuery element. Does not go within the padding.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
// WARNING: given element can't have borders
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getClientRect(el, origin) {
	var offset = el.offset();
	var scrollbarWidths = getScrollbarWidths(el);
	var left = offset.left + getCssFloat(el, 'border-left-width') + scrollbarWidths.left - (origin ? origin.left : 0);
	var top = offset.top + getCssFloat(el, 'border-top-width') + scrollbarWidths.top - (origin ? origin.top : 0);

	return {
		left: left,
		right: left + el[0].clientWidth, // clientWidth includes padding but NOT scrollbars
		top: top,
		bottom: top + el[0].clientHeight // clientHeight includes padding but NOT scrollbars
	};
}


// Queries the area within the margin/border/padding of a jQuery element. Assumed not to have scrollbars.
// Returns a rectangle with absolute coordinates: left, right (exclusive), top, bottom (exclusive).
// Origin is optional.
function getContentRect(el, origin) {
	var offset = el.offset(); // just outside of border, margin not included
	var left = offset.left + getCssFloat(el, 'border-left-width') + getCssFloat(el, 'padding-left') -
		(origin ? origin.left : 0);
	var top = offset.top + getCssFloat(el, 'border-top-width') + getCssFloat(el, 'padding-top') -
		(origin ? origin.top : 0);

	return {
		left: left,
		right: left + el.width(),
		top: top,
		bottom: top + el.height()
	};
}


// Returns the computed left/right/top/bottom scrollbar widths for the given jQuery element.
// WARNING: given element can't have borders (which will cause offsetWidth/offsetHeight to be larger).
// NOTE: should use clientLeft/clientTop, but very unreliable cross-browser.
function getScrollbarWidths(el) {
	var leftRightWidth = el[0].offsetWidth - el[0].clientWidth;
	var bottomWidth = el[0].offsetHeight - el[0].clientHeight;
	var widths;

	leftRightWidth = sanitizeScrollbarWidth(leftRightWidth);
	bottomWidth = sanitizeScrollbarWidth(bottomWidth);

	widths = { left: 0, right: 0, top: 0, bottom: bottomWidth };

	if (getIsLeftRtlScrollbars() && el.css('direction') == 'rtl') { // is the scrollbar on the left side?
		widths.left = leftRightWidth;
	}
	else {
		widths.right = leftRightWidth;
	}

	return widths;
}


// The scrollbar width computations in getScrollbarWidths are sometimes flawed when it comes to
// retina displays, rounding, and IE11. Massage them into a usable value.
function sanitizeScrollbarWidth(width) {
	width = Math.max(0, width); // no negatives
	width = Math.round(width);
	return width;
}


// Logic for determining if, when the element is right-to-left, the scrollbar appears on the left side

var _isLeftRtlScrollbars = null;

function getIsLeftRtlScrollbars() { // responsible for caching the computation
	if (_isLeftRtlScrollbars === null) {
		_isLeftRtlScrollbars = computeIsLeftRtlScrollbars();
	}
	return _isLeftRtlScrollbars;
}

function computeIsLeftRtlScrollbars() { // creates an offscreen test element, then removes it
	var el = $('<div><div/></div>')
		.css({
			position: 'absolute',
			top: -1000,
			left: 0,
			border: 0,
			padding: 0,
			overflow: 'scroll',
			direction: 'rtl'
		})
		.appendTo('body');
	var innerEl = el.children();
	var res = innerEl.offset().left > el.offset().left; // is the inner div shifted to accommodate a left scrollbar?
	el.remove();
	return res;
}


// Retrieves a jQuery element's computed CSS value as a floating-point number.
// If the queried value is non-numeric (ex: IE can return "medium" for border width), will just return zero.
function getCssFloat(el, prop) {
	return parseFloat(el.css(prop)) || 0;
}


/* Mouse / Touch Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.preventDefault = preventDefault;


// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
	return ev.which == 1 && !ev.ctrlKey;
}


function getEvX(ev) {
	var touches = ev.originalEvent.touches;

	// on mobile FF, pageX for touch events is present, but incorrect,
	// so, look at touch coordinates first.
	if (touches && touches.length) {
		return touches[0].pageX;
	}

	return ev.pageX;
}


function getEvY(ev) {
	var touches = ev.originalEvent.touches;

	// on mobile FF, pageX for touch events is present, but incorrect,
	// so, look at touch coordinates first.
	if (touches && touches.length) {
		return touches[0].pageY;
	}

	return ev.pageY;
}


function getEvIsTouch(ev) {
	return /^touch/.test(ev.type);
}


function preventSelection(el) {
	el.addClass('fc-unselectable')
		.on('selectstart', preventDefault);
}


function allowSelection(el) {
	el.removeClass('fc-unselectable')
		.off('selectstart', preventDefault);
}


// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
	ev.preventDefault();
}


/* General Geometry Utils
----------------------------------------------------------------------------------------------------------------------*/

FC.intersectRects = intersectRects;

// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
	var res = {
		left: Math.max(rect1.left, rect2.left),
		right: Math.min(rect1.right, rect2.right),
		top: Math.max(rect1.top, rect2.top),
		bottom: Math.min(rect1.bottom, rect2.bottom)
	};

	if (res.left < res.right && res.top < res.bottom) {
		return res;
	}
	return false;
}


// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
	return {
		left: Math.min(Math.max(point.left, rect.left), rect.right),
		top: Math.min(Math.max(point.top, rect.top), rect.bottom)
	};
}


// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
	return {
		left: (rect.left + rect.right) / 2,
		top: (rect.top + rect.bottom) / 2
	};
}


// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
	return {
		left: point1.left - point2.left,
		top: point1.top - point2.top
	};
}


/* Object Ordering by Field
----------------------------------------------------------------------------------------------------------------------*/

FC.parseFieldSpecs = parseFieldSpecs;
FC.compareByFieldSpecs = compareByFieldSpecs;
FC.compareByFieldSpec = compareByFieldSpec;
FC.flexibleCompare = flexibleCompare;


function parseFieldSpecs(input) {
	var specs = [];
	var tokens = [];
	var i, token;

	if (typeof input === 'string') {
		tokens = input.split(/\s*,\s*/);
	}
	else if (typeof input === 'function') {
		tokens = [ input ];
	}
	else if ($.isArray(input)) {
		tokens = input;
	}

	for (i = 0; i < tokens.length; i++) {
		token = tokens[i];

		if (typeof token === 'string') {
			specs.push(
				token.charAt(0) == '-' ?
					{ field: token.substring(1), order: -1 } :
					{ field: token, order: 1 }
			);
		}
		else if (typeof token === 'function') {
			specs.push({ func: token });
		}
	}

	return specs;
}


function compareByFieldSpecs(obj1, obj2, fieldSpecs) {
	var i;
	var cmp;

	for (i = 0; i < fieldSpecs.length; i++) {
		cmp = compareByFieldSpec(obj1, obj2, fieldSpecs[i]);
		if (cmp) {
			return cmp;
		}
	}

	return 0;
}


function compareByFieldSpec(obj1, obj2, fieldSpec) {
	if (fieldSpec.func) {
		return fieldSpec.func(obj1, obj2);
	}
	return flexibleCompare(obj1[fieldSpec.field], obj2[fieldSpec.field]) *
		(fieldSpec.order || 1);
}


function flexibleCompare(a, b) {
	if (!a && !b) {
		return 0;
	}
	if (b == null) {
		return -1;
	}
	if (a == null) {
		return 1;
	}
	if ($.type(a) === 'string' || $.type(b) === 'string') {
		return String(a).localeCompare(String(b));
	}
	return a - b;
}


/* Date Utilities
----------------------------------------------------------------------------------------------------------------------*/

FC.computeGreatestUnit = computeGreatestUnit;
FC.divideRangeByDuration = divideRangeByDuration;
FC.divideDurationByDuration = divideDurationByDuration;
FC.multiplyDuration = multiplyDuration;
FC.durationHasTime = durationHasTime;

var dayIDs = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
var unitsDesc = [ 'year', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond' ]; // descending


// Diffs the two moments into a Duration where full-days are recorded first, then the remaining time.
// Moments will have their timezones normalized.
function diffDayTime(a, b) {
	return moment.duration({
		days: a.clone().stripTime().diff(b.clone().stripTime(), 'days'),
		ms: a.time() - b.time() // time-of-day from day start. disregards timezone
	});
}


// Diffs the two moments via their start-of-day (regardless of timezone). Produces whole-day durations.
function diffDay(a, b) {
	return moment.duration({
		days: a.clone().stripTime().diff(b.clone().stripTime(), 'days')
	});
}


// Diffs two moments, producing a duration, made of a whole-unit-increment of the given unit. Uses rounding.
function diffByUnit(a, b, unit) {
	return moment.duration(
		Math.round(a.diff(b, unit, true)), // returnFloat=true
		unit
	);
}


// Computes the unit name of the largest whole-unit period of time.
// For example, 48 hours will be "days" whereas 49 hours will be "hours".
// Accepts start/end, a range object, or an original duration object.
function computeGreatestUnit(start, end) {
	var i, unit;
	var val;

	for (i = 0; i < unitsDesc.length; i++) {
		unit = unitsDesc[i];
		val = computeRangeAs(unit, start, end);

		if (val >= 1 && isInt(val)) {
			break;
		}
	}

	return unit; // will be "milliseconds" if nothing else matches
}


// like computeGreatestUnit, but has special abilities to interpret the source input for clues
function computeDurationGreatestUnit(duration, durationInput) {
	var unit = computeGreatestUnit(duration);

	// prevent days:7 from being interpreted as a week
	if (unit === 'week' && typeof durationInput === 'object' && durationInput.days) {
		unit = 'day';
	}

	return unit;
}


// Computes the number of units (like "hours") in the given range.
// Range can be a {start,end} object, separate start/end args, or a Duration.
// Results are based on Moment's .as() and .diff() methods, so results can depend on internal handling
// of month-diffing logic (which tends to vary from version to version).
function computeRangeAs(unit, start, end) {

	if (end != null) { // given start, end
		return end.diff(start, unit, true);
	}
	else if (moment.isDuration(start)) { // given duration
		return start.as(unit);
	}
	else { // given { start, end } range object
		return start.end.diff(start.start, unit, true);
	}
}


// Intelligently divides a range (specified by a start/end params) by a duration
function divideRangeByDuration(start, end, dur) {
	var months;

	if (durationHasTime(dur)) {
		return (end - start) / dur;
	}
	months = dur.asMonths();
	if (Math.abs(months) >= 1 && isInt(months)) {
		return end.diff(start, 'months', true) / months;
	}
	return end.diff(start, 'days', true) / dur.asDays();
}


// Intelligently divides one duration by another
function divideDurationByDuration(dur1, dur2) {
	var months1, months2;

	if (durationHasTime(dur1) || durationHasTime(dur2)) {
		return dur1 / dur2;
	}
	months1 = dur1.asMonths();
	months2 = dur2.asMonths();
	if (
		Math.abs(months1) >= 1 && isInt(months1) &&
		Math.abs(months2) >= 1 && isInt(months2)
	) {
		return months1 / months2;
	}
	return dur1.asDays() / dur2.asDays();
}


// Intelligently multiplies a duration by a number
function multiplyDuration(dur, n) {
	var months;

	if (durationHasTime(dur)) {
		return moment.duration(dur * n);
	}
	months = dur.asMonths();
	if (Math.abs(months) >= 1 && isInt(months)) {
		return moment.duration({ months: months * n });
	}
	return moment.duration({ days: dur.asDays() * n });
}


// Returns a boolean about whether the given duration has any time parts (hours/minutes/seconds/ms)
function durationHasTime(dur) {
	return Boolean(dur.hours() || dur.minutes() || dur.seconds() || dur.milliseconds());
}


function isNativeDate(input) {
	return  Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
}


// Returns a boolean about whether the given input is a time string, like "06:40:00" or "06:00"
function isTimeString(str) {
	return typeof str === 'string' &&
		/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(str);
}


/* Logging and Debug
----------------------------------------------------------------------------------------------------------------------*/

FC.log = function() {
	var console = window.console;

	if (console && console.log) {
		return console.log.apply(console, arguments);
	}
};

FC.warn = function() {
	var console = window.console;

	if (console && console.warn) {
		return console.warn.apply(console, arguments);
	}
	else {
		return FC.log.apply(FC, arguments);
	}
};


/* General Utilities
----------------------------------------------------------------------------------------------------------------------*/

var hasOwnPropMethod = {}.hasOwnProperty;


// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexProps) {
	var dest = {};
	var i, name;
	var complexObjs;
	var j, val;
	var props;

	if (complexProps) {
		for (i = 0; i < complexProps.length; i++) {
			name = complexProps[i];
			complexObjs = [];

			// collect the trailing object values, stopping when a non-object is discovered
			for (j = propObjs.length - 1; j >= 0; j--) {
				val = propObjs[j][name];

				if (typeof val === 'object') {
					complexObjs.unshift(val);
				}
				else if (val !== undefined) {
					dest[name] = val; // if there were no objects, this value will be used
					break;
				}
			}

			// if the trailing values were objects, use the merged value
			if (complexObjs.length) {
				dest[name] = mergeProps(complexObjs);
			}
		}
	}

	// copy values into the destination, going from last to first
	for (i = propObjs.length - 1; i >= 0; i--) {
		props = propObjs[i];

		for (name in props) {
			if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
				dest[name] = props[name];
			}
		}
	}

	return dest;
}


function copyOwnProps(src, dest) {
	for (var name in src) {
		if (hasOwnProp(src, name)) {
			dest[name] = src[name];
		}
	}
}


function hasOwnProp(obj, name) {
	return hasOwnPropMethod.call(obj, name);
}


function applyAll(functions, thisObj, args) {
	if ($.isFunction(functions)) {
		functions = [ functions ];
	}
	if (functions) {
		var i;
		var ret;
		for (i=0; i<functions.length; i++) {
			ret = functions[i].apply(thisObj, args) || ret;
		}
		return ret;
	}
}


function removeMatching(array, testFunc) {
	var removeCnt = 0;
	var i = 0;

	while (i < array.length) {
		if (testFunc(array[i])) { // truthy value means *remove*
			array.splice(i, 1);
			removeCnt++;
		}
		else {
			i++;
		}
	}

	return removeCnt;
}


function removeExact(array, exactVal) {
	var removeCnt = 0;
	var i = 0;

	while (i < array.length) {
		if (array[i] === exactVal) {
			array.splice(i, 1);
			removeCnt++;
		}
		else {
			i++;
		}
	}

	return removeCnt;
}
FC.removeExact = removeExact;



function firstDefined() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] !== undefined) {
			return arguments[i];
		}
	}
}


function htmlEscape(s) {
	return (s + '').replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');
}


function stripHtmlEntities(text) {
	return text.replace(/&.*?;/g, '');
}


// Given a hash of CSS properties, returns a string of CSS.
// Uses property names as-is (no camel-case conversion). Will not make statements for null/undefined values.
function cssToStr(cssProps) {
	var statements = [];

	$.each(cssProps, function(name, val) {
		if (val != null) {
			statements.push(name + ':' + val);
		}
	});

	return statements.join(';');
}


// Given an object hash of HTML attribute names to values,
// generates a string that can be injected between < > in HTML
function attrsToStr(attrs) {
	var parts = [];

	$.each(attrs, function(name, val) {
		if (val != null) {
			parts.push(name + '="' + htmlEscape(val) + '"');
		}
	});

	return parts.join(' ');
}


function capitaliseFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}


function compareNumbers(a, b) { // for .sort()
	return a - b;
}


function isInt(n) {
	return n % 1 === 0;
}


// Returns a method bound to the given object context.
// Just like one of the jQuery.proxy signatures, but without the undesired behavior of treating the same method with
// different contexts as identical when binding/unbinding events.
function proxy(obj, methodName) {
	var method = obj[methodName];

	return function() {
		return method.apply(obj, arguments);
	};
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// https://github.com/jashkenas/underscore/blob/1.6.0/underscore.js#L714
function debounce(func, wait, immediate) {
	var timeout, args, context, timestamp, result;

	var later = function() {
		var last = +new Date() - timestamp;
		if (last < wait) {
			timeout = setTimeout(later, wait - last);
		}
		else {
			timeout = null;
			if (!immediate) {
				result = func.apply(context, args);
				context = args = null;
			}
		}
	};

	return function() {
		context = this;
		args = arguments;
		timestamp = +new Date();
		var callNow = immediate && !timeout;
		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}
		return result;
	};
}

;;

/*
GENERAL NOTE on moments throughout the *entire rest* of the codebase:
All moments are assumed to be ambiguously-zoned unless otherwise noted,
with the NOTABLE EXCEOPTION of start/end dates that live on *Event Objects*.
Ambiguously-TIMED moments are assumed to be ambiguously-zoned by nature.
*/

var ambigDateOfMonthRegex = /^\s*\d{4}-\d\d$/;
var ambigTimeOrZoneRegex =
	/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
var newMomentProto = moment.fn; // where we will attach our new methods
var oldMomentProto = $.extend({}, newMomentProto); // copy of original moment methods

// tell momentjs to transfer these properties upon clone
var momentProperties = moment.momentProperties;
momentProperties.push('_fullCalendar');
momentProperties.push('_ambigTime');
momentProperties.push('_ambigZone');


// Creating
// -------------------------------------------------------------------------------------------------

// Creates a new moment, similar to the vanilla moment(...) constructor, but with
// extra features (ambiguous time, enhanced formatting). When given an existing moment,
// it will function as a clone (and retain the zone of the moment). Anything else will
// result in a moment in the local zone.
FC.moment = function() {
	return makeMoment(arguments);
};

// Sames as FC.moment, but forces the resulting moment to be in the UTC timezone.
FC.moment.utc = function() {
	var mom = makeMoment(arguments, true);

	// Force it into UTC because makeMoment doesn't guarantee it
	// (if given a pre-existing moment for example)
	if (mom.hasTime()) { // don't give ambiguously-timed moments a UTC zone
		mom.utc();
	}

	return mom;
};

// Same as FC.moment, but when given an ISO8601 string, the timezone offset is preserved.
// ISO8601 strings with no timezone offset will become ambiguously zoned.
FC.moment.parseZone = function() {
	return makeMoment(arguments, true, true);
};

// Builds an enhanced moment from args. When given an existing moment, it clones. When given a
// native Date, or called with no arguments (the current time), the resulting moment will be local.
// Anything else needs to be "parsed" (a string or an array), and will be affected by:
//    parseAsUTC - if there is no zone information, should we parse the input in UTC?
//    parseZone - if there is zone information, should we force the zone of the moment?
function makeMoment(args, parseAsUTC, parseZone) {
	var input = args[0];
	var isSingleString = args.length == 1 && typeof input === 'string';
	var isAmbigTime;
	var isAmbigZone;
	var ambigMatch;
	var mom;

	if (moment.isMoment(input) || isNativeDate(input) || input === undefined) {
		mom = moment.apply(null, args);
	}
	else { // "parsing" is required
		isAmbigTime = false;
		isAmbigZone = false;

		if (isSingleString) {
			if (ambigDateOfMonthRegex.test(input)) {
				// accept strings like '2014-05', but convert to the first of the month
				input += '-01';
				args = [ input ]; // for when we pass it on to moment's constructor
				isAmbigTime = true;
				isAmbigZone = true;
			}
			else if ((ambigMatch = ambigTimeOrZoneRegex.exec(input))) {
				isAmbigTime = !ambigMatch[5]; // no time part?
				isAmbigZone = true;
			}
		}
		else if ($.isArray(input)) {
			// arrays have no timezone information, so assume ambiguous zone
			isAmbigZone = true;
		}
		// otherwise, probably a string with a format

		if (parseAsUTC || isAmbigTime) {
			mom = moment.utc.apply(moment, args);
		}
		else {
			mom = moment.apply(null, args);
		}

		if (isAmbigTime) {
			mom._ambigTime = true;
			mom._ambigZone = true; // ambiguous time always means ambiguous zone
		}
		else if (parseZone) { // let's record the inputted zone somehow
			if (isAmbigZone) {
				mom._ambigZone = true;
			}
			else if (isSingleString) {
				mom.utcOffset(input); // if not a valid zone, will assign UTC
			}
		}
	}

	mom._fullCalendar = true; // flag for extended functionality

	return mom;
}


// Week Number
// -------------------------------------------------------------------------------------------------


// Returns the week number, considering the locale's custom week number calcuation
// `weeks` is an alias for `week`
newMomentProto.week = newMomentProto.weeks = function(input) {
	var weekCalc = this._locale._fullCalendar_weekCalc;

	if (input == null && typeof weekCalc === 'function') { // custom function only works for getter
		return weekCalc(this);
	}
	else if (weekCalc === 'ISO') {
		return oldMomentProto.isoWeek.apply(this, arguments); // ISO getter/setter
	}

	return oldMomentProto.week.apply(this, arguments); // local getter/setter
};


// Time-of-day
// -------------------------------------------------------------------------------------------------

// GETTER
// Returns a Duration with the hours/minutes/seconds/ms values of the moment.
// If the moment has an ambiguous time, a duration of 00:00 will be returned.
//
// SETTER
// You can supply a Duration, a Moment, or a Duration-like argument.
// When setting the time, and the moment has an ambiguous time, it then becomes unambiguous.
newMomentProto.time = function(time) {

	// Fallback to the original method (if there is one) if this moment wasn't created via FullCalendar.
	// `time` is a generic enough method name where this precaution is necessary to avoid collisions w/ other plugins.
	if (!this._fullCalendar) {
		return oldMomentProto.time.apply(this, arguments);
	}

	if (time == null) { // getter
		return moment.duration({
			hours: this.hours(),
			minutes: this.minutes(),
			seconds: this.seconds(),
			milliseconds: this.milliseconds()
		});
	}
	else { // setter

		this._ambigTime = false; // mark that the moment now has a time

		if (!moment.isDuration(time) && !moment.isMoment(time)) {
			time = moment.duration(time);
		}

		// The day value should cause overflow (so 24 hours becomes 00:00:00 of next day).
		// Only for Duration times, not Moment times.
		var dayHours = 0;
		if (moment.isDuration(time)) {
			dayHours = Math.floor(time.asDays()) * 24;
		}

		// We need to set the individual fields.
		// Can't use startOf('day') then add duration. In case of DST at start of day.
		return this.hours(dayHours + time.hours())
			.minutes(time.minutes())
			.seconds(time.seconds())
			.milliseconds(time.milliseconds());
	}
};

// Converts the moment to UTC, stripping out its time-of-day and timezone offset,
// but preserving its YMD. A moment with a stripped time will display no time
// nor timezone offset when .format() is called.
newMomentProto.stripTime = function() {

	if (!this._ambigTime) {

		this.utc(true); // keepLocalTime=true (for keeping *date* value)

		// set time to zero
		this.set({
			hours: 0,
			minutes: 0,
			seconds: 0,
			ms: 0
		});

		// Mark the time as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
		// which clears all ambig flags.
		this._ambigTime = true;
		this._ambigZone = true; // if ambiguous time, also ambiguous timezone offset
	}

	return this; // for chaining
};

// Returns if the moment has a non-ambiguous time (boolean)
newMomentProto.hasTime = function() {
	return !this._ambigTime;
};


// Timezone
// -------------------------------------------------------------------------------------------------

// Converts the moment to UTC, stripping out its timezone offset, but preserving its
// YMD and time-of-day. A moment with a stripped timezone offset will display no
// timezone offset when .format() is called.
newMomentProto.stripZone = function() {
	var wasAmbigTime;

	if (!this._ambigZone) {

		wasAmbigTime = this._ambigTime;

		this.utc(true); // keepLocalTime=true (for keeping date and time values)

		// the above call to .utc()/.utcOffset() unfortunately might clear the ambig flags, so restore
		this._ambigTime = wasAmbigTime || false;

		// Mark the zone as ambiguous. This needs to happen after the .utc() call, which might call .utcOffset(),
		// which clears the ambig flags.
		this._ambigZone = true;
	}

	return this; // for chaining
};

// Returns of the moment has a non-ambiguous timezone offset (boolean)
newMomentProto.hasZone = function() {
	return !this._ambigZone;
};


// implicitly marks a zone
newMomentProto.local = function(keepLocalTime) {

	// for when converting from ambiguously-zoned to local,
	// keep the time values when converting from UTC -> local
	oldMomentProto.local.call(this, this._ambigZone || keepLocalTime);

	// ensure non-ambiguous
	// this probably already happened via local() -> utcOffset(), but don't rely on Moment's internals
	this._ambigTime = false;
	this._ambigZone = false;

	return this; // for chaining
};


// implicitly marks a zone
newMomentProto.utc = function(keepLocalTime) {

	oldMomentProto.utc.call(this, keepLocalTime);

	// ensure non-ambiguous
	// this probably already happened via utc() -> utcOffset(), but don't rely on Moment's internals
	this._ambigTime = false;
	this._ambigZone = false;

	return this;
};


// implicitly marks a zone (will probably get called upon .utc() and .local())
newMomentProto.utcOffset = function(tzo) {

	if (tzo != null) { // setter
		// these assignments needs to happen before the original zone method is called.
		// I forget why, something to do with a browser crash.
		this._ambigTime = false;
		this._ambigZone = false;
	}

	return oldMomentProto.utcOffset.apply(this, arguments);
};


// Formatting
// -------------------------------------------------------------------------------------------------

newMomentProto.format = function() {

	if (this._fullCalendar && arguments[0]) { // an enhanced moment? and a format string provided?
		return formatDate(this, arguments[0]); // our extended formatting
	}
	if (this._ambigTime) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
	}
	if (this._ambigZone) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
	}
	if (this._fullCalendar) { // enhanced non-ambig moment?
		// moment.format() doesn't ensure english, but we want to.
		return oldMomentFormat(englishMoment(this));
	}

	return oldMomentProto.format.apply(this, arguments);
};

newMomentProto.toISOString = function() {

	if (this._ambigTime) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD');
	}
	if (this._ambigZone) {
		return oldMomentFormat(englishMoment(this), 'YYYY-MM-DD[T]HH:mm:ss');
	}
	if (this._fullCalendar) { // enhanced non-ambig moment?
		// depending on browser, moment might not output english. ensure english.
		// https://github.com/moment/moment/blob/2.18.1/src/lib/moment/format.js#L22
		return oldMomentProto.toISOString.apply(englishMoment(this), arguments);
	}

	return oldMomentProto.toISOString.apply(this, arguments);
};

function englishMoment(mom) {
	if (mom.locale() !== 'en') {
		return mom.clone().locale('en');
	}
	return mom;
}

;;
(function() {

// exports
FC.formatDate = formatDate;
FC.formatRange = formatRange;
FC.oldMomentFormat = oldMomentFormat;
FC.queryMostGranularFormatUnit = queryMostGranularFormatUnit;


// Config
// ---------------------------------------------------------------------------------------------------------------------

/*
Inserted between chunks in the fake ("intermediate") formatting string.
Important that it passes as whitespace (\s) because moment often identifies non-standalone months
via a regexp with an \s.
*/
var PART_SEPARATOR = '\u000b'; // vertical tab

/*
Inserted as the first character of a literal-text chunk to indicate that the literal text is not actually literal text,
but rather, a "special" token that has custom rendering (see specialTokens map).
*/
var SPECIAL_TOKEN_MARKER = '\u001f'; // information separator 1

/*
Inserted at the beginning and end of a span of text that must have non-zero numeric characters.
Handling of these markers is done in a post-processing step at the very end of text rendering.
*/
var MAYBE_MARKER = '\u001e'; // information separator 2
var MAYBE_REGEXP = new RegExp(MAYBE_MARKER + '([^' + MAYBE_MARKER + ']*)' + MAYBE_MARKER, 'g'); // must be global

/*
Addition formatting tokens we want recognized
*/
var specialTokens = {
	t: function(date) { // "a" or "p"
		return oldMomentFormat(date, 'a').charAt(0);
	},
	T: function(date) { // "A" or "P"
		return oldMomentFormat(date, 'A').charAt(0);
	}
};

/*
The first characters of formatting tokens for units that are 1 day or larger.
`value` is for ranking relative size (lower means bigger).
`unit` is a normalized unit, used for comparing moments.
*/
var largeTokenMap = {
	Y: { value: 1, unit: 'year' },
	M: { value: 2, unit: 'month' },
	W: { value: 3, unit: 'week' }, // ISO week
	w: { value: 3, unit: 'week' }, // local week
	D: { value: 4, unit: 'day' }, // day of month
	d: { value: 4, unit: 'day' } // day of week
};


// Single Date Formatting
// ---------------------------------------------------------------------------------------------------------------------

/*
Formats `date` with a Moment formatting string, but allow our non-zero areas and special token
*/
function formatDate(date, formatStr) {
	return renderFakeFormatString(
		getParsedFormatString(formatStr).fakeFormatString,
		date
	);
}

/*
Call this if you want Moment's original format method to be used
*/
function oldMomentFormat(mom, formatStr) {
	return oldMomentProto.format.call(mom, formatStr); // oldMomentProto defined in moment-ext.js
}


// Date Range Formatting
// -------------------------------------------------------------------------------------------------
// TODO: make it work with timezone offset

/*
Using a formatting string meant for a single date, generate a range string, like
"Sep 2 - 9 2013", that intelligently inserts a separator where the dates differ.
If the dates are the same as far as the format string is concerned, just return a single
rendering of one date, without any separator.
*/
function formatRange(date1, date2, formatStr, separator, isRTL) {
	var localeData;

	date1 = FC.moment.parseZone(date1);
	date2 = FC.moment.parseZone(date2);

	localeData = date1.localeData();

	// Expand localized format strings, like "LL" -> "MMMM D YYYY".
	// BTW, this is not important for `formatDate` because it is impossible to put custom tokens
	// or non-zero areas in Moment's localized format strings.
	formatStr = localeData.longDateFormat(formatStr) || formatStr;

	return renderParsedFormat(
		getParsedFormatString(formatStr),
		date1,
		date2,
		separator || ' - ',
		isRTL
	);
}

/*
Renders a range with an already-parsed format string.
*/
function renderParsedFormat(parsedFormat, date1, date2, separator, isRTL) {
	var sameUnits = parsedFormat.sameUnits;
	var unzonedDate1 = date1.clone().stripZone(); // for same-unit comparisons
	var unzonedDate2 = date2.clone().stripZone(); // "

	var renderedParts1 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date1);
	var renderedParts2 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date2);

	var leftI;
	var leftStr = '';
	var rightI;
	var rightStr = '';
	var middleI;
	var middleStr1 = '';
	var middleStr2 = '';
	var middleStr = '';

	// Start at the leftmost side of the formatting string and continue until you hit a token
	// that is not the same between dates.
	for (
		leftI = 0;
		leftI < sameUnits.length && (!sameUnits[leftI] || unzonedDate1.isSame(unzonedDate2, sameUnits[leftI]));
		leftI++
	) {
		leftStr += renderedParts1[leftI];
	}

	// Similarly, start at the rightmost side of the formatting string and move left
	for (
		rightI = sameUnits.length - 1;
		rightI > leftI && (!sameUnits[rightI] || unzonedDate1.isSame(unzonedDate2, sameUnits[rightI]));
		rightI--
	) {
		// If current chunk is on the boundary of unique date-content, and is a special-case
		// date-formatting postfix character, then don't consume it. Consider it unique date-content.
		// TODO: make configurable
		if (rightI - 1 === leftI && renderedParts1[rightI] === '.') {
			break;
		}

		rightStr = renderedParts1[rightI] + rightStr;
	}

	// The area in the middle is different for both of the dates.
	// Collect them distinctly so we can jam them together later.
	for (middleI = leftI; middleI <= rightI; middleI++) {
		middleStr1 += renderedParts1[middleI];
		middleStr2 += renderedParts2[middleI];
	}

	if (middleStr1 || middleStr2) {
		if (isRTL) {
			middleStr = middleStr2 + separator + middleStr1;
		}
		else {
			middleStr = middleStr1 + separator + middleStr2;
		}
	}

	return processMaybeMarkers(
		leftStr + middleStr + rightStr
	);
}


// Format String Parsing
// ---------------------------------------------------------------------------------------------------------------------

var parsedFormatStrCache = {};

/*
Returns a parsed format string, leveraging a cache.
*/
function getParsedFormatString(formatStr) {
	return parsedFormatStrCache[formatStr] ||
		(parsedFormatStrCache[formatStr] = parseFormatString(formatStr));
}

/*
Parses a format string into the following:
- fakeFormatString: a momentJS formatting string, littered with special control characters that get post-processed.
- sameUnits: for every part in fakeFormatString, if the part is a token, the value will be a unit string (like "day"),
  that indicates how similar a range's start & end must be in order to share the same formatted text.
  If not a token, then the value is null.
  Always a flat array (not nested liked "chunks").
*/
function parseFormatString(formatStr) {
	var chunks = chunkFormatString(formatStr);
	
	return {
		fakeFormatString: buildFakeFormatString(chunks),
		sameUnits: buildSameUnits(chunks)
	};
}

/*
Break the formatting string into an array of chunks.
A 'maybe' chunk will have nested chunks.
*/
function chunkFormatString(formatStr) {
	var chunks = [];
	var match;

	// TODO: more descrimination
	// \4 is a backreference to the first character of a multi-character set.
	var chunker = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;

	while ((match = chunker.exec(formatStr))) {
		if (match[1]) { // a literal string inside [ ... ]
			chunks.push.apply(chunks, // append
				splitStringLiteral(match[1])
			);
		}
		else if (match[2]) { // non-zero formatting inside ( ... )
			chunks.push({ maybe: chunkFormatString(match[2]) });
		}
		else if (match[3]) { // a formatting token
			chunks.push({ token: match[3] });
		}
		else if (match[5]) { // an unenclosed literal string
			chunks.push.apply(chunks, // append
				splitStringLiteral(match[5])
			);
		}
	}

	return chunks;
}

/*
Potentially splits a literal-text string into multiple parts. For special cases.
*/
function splitStringLiteral(s) {
	if (s === '. ') {
		return [ '.', ' ' ]; // for locales with periods bound to the end of each year/month/date
	}
	else {
		return [ s ];
	}
}

/*
Given chunks parsed from a real format string, generate a fake (aka "intermediate") format string with special control
characters that will eventually be given to moment for formatting, and then post-processed.
*/
function buildFakeFormatString(chunks) {
	var parts = [];
	var i, chunk;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (typeof chunk === 'string') {
			parts.push('[' + chunk + ']');
		}
		else if (chunk.token) {
			if (chunk.token in specialTokens) {
				parts.push(
					SPECIAL_TOKEN_MARKER + // useful during post-processing
					'[' + chunk.token + ']' // preserve as literal text
				);
			}
			else {
				parts.push(chunk.token); // unprotected text implies a format string
			}
		}
		else if (chunk.maybe) {
			parts.push(
				MAYBE_MARKER + // useful during post-processing
				buildFakeFormatString(chunk.maybe) +
				MAYBE_MARKER
			);
		}
	}

	return parts.join(PART_SEPARATOR);
}

/*
Given parsed chunks from a real formatting string, generates an array of unit strings (like "day") that indicate
in which regard two dates must be similar in order to share range formatting text.
The `chunks` can be nested (because of "maybe" chunks), however, the returned array will be flat.
*/
function buildSameUnits(chunks) {
	var units = [];
	var i, chunk;
	var tokenInfo;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (chunk.token) {
			tokenInfo = largeTokenMap[chunk.token.charAt(0)];
			units.push(tokenInfo ? tokenInfo.unit : 'second'); // default to a very strict same-second
		}
		else if (chunk.maybe) {
			units.push.apply(units, // append
				buildSameUnits(chunk.maybe)
			);
		}
		else {
			units.push(null);
		}
	}

	return units;
}


// Rendering to text
// ---------------------------------------------------------------------------------------------------------------------

/*
Formats a date with a fake format string, post-processes the control characters, then returns.
*/
function renderFakeFormatString(fakeFormatString, date) {
	return processMaybeMarkers(
		renderFakeFormatStringParts(fakeFormatString, date).join('')
	);
}

/*
Formats a date into parts that will have been post-processed, EXCEPT for the "maybe" markers.
*/
function renderFakeFormatStringParts(fakeFormatString, date) {
	var parts = [];
	var fakeRender = oldMomentFormat(date, fakeFormatString);
	var fakeParts = fakeRender.split(PART_SEPARATOR);
	var i, fakePart;

	for (i = 0; i < fakeParts.length; i++) {
		fakePart = fakeParts[i];

		if (fakePart.charAt(0) === SPECIAL_TOKEN_MARKER) {
			parts.push(
				// the literal string IS the token's name.
				// call special token's registered function.
				specialTokens[fakePart.substring(1)](date)
			);
		}
		else {
			parts.push(fakePart);
		}
	}

	return parts;
}

/*
Accepts an almost-finally-formatted string and processes the "maybe" control characters, returning a new string.
*/
function processMaybeMarkers(s) {
	return s.replace(MAYBE_REGEXP, function(m0, m1) { // regex assumed to have 'g' flag
		if (m1.match(/[1-9]/)) { // any non-zero numeric characters?
			return m1;
		}
		else {
			return '';
		}
	});
}


// Misc Utils
// -------------------------------------------------------------------------------------------------

/*
Returns a unit string, either 'year', 'month', 'day', or null for the most granular formatting token in the string.
*/
function queryMostGranularFormatUnit(formatStr) {
	var chunks = chunkFormatString(formatStr);
	var i, chunk;
	var candidate;
	var best;

	for (i = 0; i < chunks.length; i++) {
		chunk = chunks[i];

		if (chunk.token) {
			candidate = largeTokenMap[chunk.token.charAt(0)];
			if (candidate) {
				if (!best || candidate.value > best.value) {
					best = candidate;
				}
			}
		}
	}

	if (best) {
		return best.unit;
	}

	return null;
};

})();

// quick local references
var formatDate = FC.formatDate;
var formatRange = FC.formatRange;
var oldMomentFormat = FC.oldMomentFormat;

;;

FC.Class = Class; // export

// Class that all other classes will inherit from
function Class() { }


// Called on a class to create a subclass.
// Last argument contains instance methods. Any argument before the last are considered mixins.
Class.extend = function() {
	var members = {};
	var i;

	for (i = 0; i < arguments.length; i++) {
		copyOwnProps(arguments[i], members);
	}

	return extendClass(this, members);
};


// Adds new member variables/methods to the class's prototype.
// Can be called with another class, or a plain object hash containing new members.
Class.mixin = function(members) {
	copyOwnProps(members, this.prototype);
};


function extendClass(superClass, members) {
	var subClass;

	// ensure a constructor for the subclass, forwarding all arguments to the super-constructor if it doesn't exist
	if (hasOwnProp(members, 'constructor')) {
		subClass = members.constructor;
	}
	if (typeof subClass !== 'function') {
		subClass = members.constructor = function() {
			superClass.apply(this, arguments);
		};
	}

	// build the base prototype for the subclass, which is an new object chained to the superclass's prototype
	subClass.prototype = Object.create(superClass.prototype);

	// copy each member variable/method onto the the subclass's prototype
	copyOwnProps(members, subClass.prototype);

	// copy over all class variables/methods to the subclass, such as `extend` and `mixin`
	copyOwnProps(superClass, subClass);

	return subClass;
}

;;

var EmitterMixin = FC.EmitterMixin = {

	// jQuery-ification via $(this) allows a non-DOM object to have
	// the same event handling capabilities (including namespaces).


	on: function(types, handler) {
		$(this).on(types, this._prepareIntercept(handler));
		return this; // for chaining
	},


	one: function(types, handler) {
		$(this).one(types, this._prepareIntercept(handler));
		return this; // for chaining
	},


	_prepareIntercept: function(handler) {
		// handlers are always called with an "event" object as their first param.
		// sneak the `this` context and arguments into the extra parameter object
		// and forward them on to the original handler.
		var intercept = function(ev, extra) {
			return handler.apply(
				extra.context || this,
				extra.args || []
			);
		};

		// mimick jQuery's internal "proxy" system (risky, I know)
		// causing all functions with the same .guid to appear to be the same.
		// https://github.com/jquery/jquery/blob/2.2.4/src/core.js#L448
		// this is needed for calling .off with the original non-intercept handler.
		if (!handler.guid) {
			handler.guid = $.guid++;
		}
		intercept.guid = handler.guid;

		return intercept;
	},


	off: function(types, handler) {
		$(this).off(types, handler);

		return this; // for chaining
	},


	trigger: function(types) {
		var args = Array.prototype.slice.call(arguments, 1); // arguments after the first

		// pass in "extra" info to the intercept
		$(this).triggerHandler(types, { args: args });

		return this; // for chaining
	},


	triggerWith: function(types, context, args) {

		// `triggerHandler` is less reliant on the DOM compared to `trigger`.
		// pass in "extra" info to the intercept.
		$(this).triggerHandler(types, { context: context, args: args });

		return this; // for chaining
	},


	hasHandlers: function(type) {
		var hash = $._data(this, 'events'); // http://blog.jquery.com/2012/08/09/jquery-1-8-released/

		return hash && hash[type] && hash[type].length > 0;
	}

};

;;

/*
Utility methods for easily listening to events on another object,
and more importantly, easily unlistening from them.
*/
var ListenerMixin = FC.ListenerMixin = (function() {
	var guid = 0;
	var ListenerMixin = {

		listenerId: null,

		/*
		Given an `other` object that has on/off methods, bind the given `callback` to an event by the given name.
		The `callback` will be called with the `this` context of the object that .listenTo is being called on.
		Can be called:
			.listenTo(other, eventName, callback)
		OR
			.listenTo(other, {
				eventName1: callback1,
				eventName2: callback2
			})
		*/
		listenTo: function(other, arg, callback) {
			if (typeof arg === 'object') { // given dictionary of callbacks
				for (var eventName in arg) {
					if (arg.hasOwnProperty(eventName)) {
						this.listenTo(other, eventName, arg[eventName]);
					}
				}
			}
			else if (typeof arg === 'string') {
				other.on(
					arg + '.' + this.getListenerNamespace(), // use event namespacing to identify this object
					$.proxy(callback, this) // always use `this` context
						// the usually-undesired jQuery guid behavior doesn't matter,
						// because we always unbind via namespace
				);
			}
		},

		/*
		Causes the current object to stop listening to events on the `other` object.
		`eventName` is optional. If omitted, will stop listening to ALL events on `other`.
		*/
		stopListeningTo: function(other, eventName) {
			other.off((eventName || '') + '.' + this.getListenerNamespace());
		},

		/*
		Returns a string, unique to this object, to be used for event namespacing
		*/
		getListenerNamespace: function() {
			if (this.listenerId == null) {
				this.listenerId = guid++;
			}
			return '_listener' + this.listenerId;
		}

	};
	return ListenerMixin;
})();
;;

var ParsableModelMixin = {

	standardPropMap: {}, // will be cloned by allowRawProps


	/*
	Returns true/false for success
	*/
	applyRawProps: function(rawProps) {
		var standardPropMap = this.standardPropMap;
		var manualProps = {};
		var otherProps = {};
		var propName;

		for (propName in rawProps) {
			if (standardPropMap[propName] === true) { // copy automatically
				this[propName] = rawProps[propName];
			}
			else if (standardPropMap[propName] === false) {
				manualProps[propName] = rawProps[propName];
			}
			else {
				otherProps[propName] = rawProps[propName];
			}
		}

		this.applyOtherRawProps(otherProps);

		return this.applyManualRawProps(manualProps);
	},


	/*
	If subclasses override, they must call this supermethod and return the boolean response.
	*/
	applyManualRawProps: function(rawProps) {
		return true;
	},


	applyOtherRawProps: function(rawProps) {
		// subclasses can implement
	}

};


/*
TODO: devise a better system
*/
var ParsableModelMixin_allowRawProps = function(propDefs) {
	var proto = this.prototype;

	proto.standardPropMap = Object.create(proto.standardPropMap);

	copyOwnProps(propDefs, proto.standardPropMap);
};


/*
TODO: devise a better system
*/
var ParsableModelMixin_copyVerbatimStandardProps = function(src, dest) {
	var map = this.prototype.standardPropMap;
	var propName;

	for (propName in map) {
		if (
			src[propName] != null && // in the src object?
			map[propName] === true // false means "copy verbatim"
		) {
			dest[propName] = src[propName];
		}
	}
};

;;

var Model = Class.extend(EmitterMixin, ListenerMixin, {

	_props: null,
	_watchers: null,
	_globalWatchArgs: null,

	constructor: function() {
		this._watchers = {};
		this._props = {};
		this.applyGlobalWatchers();
	},

	applyGlobalWatchers: function() {
		var argSets = this._globalWatchArgs || [];
		var i;

		for (i = 0; i < argSets.length; i++) {
			this.watch.apply(this, argSets[i]);
		}
	},

	has: function(name) {
		return name in this._props;
	},

	get: function(name) {
		if (name === undefined) {
			return this._props;
		}

		return this._props[name];
	},

	set: function(name, val) {
		var newProps;

		if (typeof name === 'string') {
			newProps = {};
			newProps[name] = val === undefined ? null : val;
		}
		else {
			newProps = name;
		}

		this.setProps(newProps);
	},

	reset: function(newProps) {
		var oldProps = this._props;
		var changeset = {}; // will have undefined's to signal unsets
		var name;

		for (name in oldProps) {
			changeset[name] = undefined;
		}

		for (name in newProps) {
			changeset[name] = newProps[name];
		}

		this.setProps(changeset);
	},

	unset: function(name) { // accepts a string or array of strings
		var newProps = {};
		var names;
		var i;

		if (typeof name === 'string') {
			names = [ name ];
		}
		else {
			names = name;
		}

		for (i = 0; i < names.length; i++) {
			newProps[names[i]] = undefined;
		}

		this.setProps(newProps);
	},

	setProps: function(newProps) {
		var changedProps = {};
		var changedCnt = 0;
		var name, val;

		for (name in newProps) {
			val = newProps[name];

			// a change in value?
			// if an object, don't check equality, because might have been mutated internally.
			// TODO: eventually enforce immutability.
			if (
				typeof val === 'object' ||
				val !== this._props[name]
			) {
				changedProps[name] = val;
				changedCnt++;
			}
		}

		if (changedCnt) {

			this.trigger('before:batchChange', changedProps);

			for (name in changedProps) {
				val = changedProps[name];

				this.trigger('before:change', name, val);
				this.trigger('before:change:' + name, val);
			}

			for (name in changedProps) {
				val = changedProps[name];

				if (val === undefined) {
					delete this._props[name];
				}
				else {
					this._props[name] = val;
				}

				this.trigger('change:' + name, val);
				this.trigger('change', name, val);
			}

			this.trigger('batchChange', changedProps);
		}
	},

	watch: function(name, depList, startFunc, stopFunc) {
		var _this = this;

		this.unwatch(name);

		this._watchers[name] = this._watchDeps(depList, function(deps) {
			var res = startFunc.call(_this, deps);

			if (res && res.then) {
				_this.unset(name); // put in an unset state while resolving
				res.then(function(val) {
					_this.set(name, val);
				});
			}
			else {
				_this.set(name, res);
			}
		}, function() {
			_this.unset(name);

			if (stopFunc) {
				stopFunc.call(_this);
			}
		});
	},

	unwatch: function(name) {
		var watcher = this._watchers[name];

		if (watcher) {
			delete this._watchers[name];
			watcher.teardown();
		}
	},

	_watchDeps: function(depList, startFunc, stopFunc) {
		var _this = this;
		var queuedChangeCnt = 0;
		var depCnt = depList.length;
		var satisfyCnt = 0;
		var values = {}; // what's passed as the `deps` arguments
		var bindTuples = []; // array of [ eventName, handlerFunc ] arrays
		var isCallingStop = false;

		function onBeforeDepChange(depName, val, isOptional) {
			queuedChangeCnt++;
			if (queuedChangeCnt === 1) { // first change to cause a "stop" ?
				if (satisfyCnt === depCnt) { // all deps previously satisfied?
					isCallingStop = true;
					stopFunc();
					isCallingStop = false;
				}
			}
		}

		function onDepChange(depName, val, isOptional) {

			if (val === undefined) { // unsetting a value?

				// required dependency that was previously set?
				if (!isOptional && values[depName] !== undefined) {
					satisfyCnt--;
				}

				delete values[depName];
			}
			else { // setting a value?

				// required dependency that was previously unset?
				if (!isOptional && values[depName] === undefined) {
					satisfyCnt++;
				}

				values[depName] = val;
			}

			queuedChangeCnt--;
			if (!queuedChangeCnt) { // last change to cause a "start"?

				// now finally satisfied or satisfied all along?
				if (satisfyCnt === depCnt) {

					// if the stopFunc initiated another value change, ignore it.
					// it will be processed by another change event anyway.
					if (!isCallingStop) {
						startFunc(values);
					}
				}
			}
		}

		// intercept for .on() that remembers handlers
		function bind(eventName, handler) {
			_this.on(eventName, handler);
			bindTuples.push([ eventName, handler ]);
		}

		// listen to dependency changes
		depList.forEach(function(depName) {
			var isOptional = false;

			if (depName.charAt(0) === '?') { // TODO: more DRY
				depName = depName.substring(1);
				isOptional = true;
			}

			bind('before:change:' + depName, function(val) {
				onBeforeDepChange(depName, val, isOptional);
			});

			bind('change:' + depName, function(val) {
				onDepChange(depName, val, isOptional);
			});
		});

		// process current dependency values
		depList.forEach(function(depName) {
			var isOptional = false;

			if (depName.charAt(0) === '?') { // TODO: more DRY
				depName = depName.substring(1);
				isOptional = true;
			}

			if (_this.has(depName)) {
				values[depName] = _this.get(depName);
				satisfyCnt++;
			}
			else if (isOptional) {
				satisfyCnt++;
			}
		});

		// initially satisfied
		if (satisfyCnt === depCnt) {
			startFunc(values);
		}

		return {
			teardown: function() {
				// remove all handlers
				for (var i = 0; i < bindTuples.length; i++) {
					_this.off(bindTuples[i][0], bindTuples[i][1]);
				}
				bindTuples = null;

				// was satisfied, so call stopFunc
				if (satisfyCnt === depCnt) {
					stopFunc();
				}
			},
			flash: function() {
				if (satisfyCnt === depCnt) {
					stopFunc();
					startFunc(values);
				}
			}
		};
	},

	flash: function(name) {
		var watcher = this._watchers[name];

		if (watcher) {
			watcher.flash();
		}
	}

});


Model.watch = function(/* same arguments as this.watch() */) {
	var proto = this.prototype;

	if (!proto._globalWatchArgs) {
		proto._globalWatchArgs = [];
	}

	proto._globalWatchArgs.push(arguments);
};


FC.Model = Model;


;;

var Promise = {

	construct: function(executor) {
		var deferred = $.Deferred();
		var promise = deferred.promise();

		if (typeof executor === 'function') {
			executor(
				function(val) { // resolve
					deferred.resolve(val);
					attachImmediatelyResolvingThen(promise, val);
				},
				function() { // reject
					deferred.reject();
					attachImmediatelyRejectingThen(promise);
				}
			);
		}

		return promise;
	},

	resolve: function(val) {
		var deferred = $.Deferred().resolve(val);
		var promise = deferred.promise();

		attachImmediatelyResolvingThen(promise, val);

		return promise;
	},

	reject: function() {
		var deferred = $.Deferred().reject();
		var promise = deferred.promise();

		attachImmediatelyRejectingThen(promise);

		return promise;
	}

};


function attachImmediatelyResolvingThen(promise, val) {
	promise.then = function(onResolve) {
		if (typeof onResolve === 'function') {
			return Promise.resolve(onResolve(val));
		}
		return promise;
	};
}


function attachImmediatelyRejectingThen(promise) {
	promise.then = function(onResolve, onReject) {
		if (typeof onReject === 'function') {
			onReject();
		}
		return promise;
	};
}


FC.Promise = Promise;

;;

var TaskQueue = Class.extend(EmitterMixin, {

	q: null,
	isPaused: false,
	isRunning: false,


	constructor: function() {
		this.q = [];
	},


	queue: function(/* taskFunc, taskFunc... */) {
		this.q.push.apply(this.q, arguments); // append
		this.tryStart();
	},


	pause: function() {
		this.isPaused = true;
	},


	resume: function() {
		this.isPaused = false;
		this.tryStart();
	},


	tryStart: function() {
		if (!this.isRunning && this.canRunNext()) {
			this.isRunning = true;
			this.trigger('start');
			this.runNext();
		}
	},


	canRunNext: function() {
		return !this.isPaused && this.q.length;
	},


	runNext: function() { // does not check canRunNext
		this.runTask(this.q.shift());
	},


	runTask: function(task) {
		this.runTaskFunc(task);
	},


	runTaskFunc: function(taskFunc) {
		var _this = this;
		var res = taskFunc();

		if (res && res.then) {
			res.then(done);
		}
		else {
			done();
		}

		function done() {
			if (_this.canRunNext()) {
				_this.runNext();
			}
			else {
				_this.isRunning = false;
				_this.trigger('stop');
			}
		}
	}

});

FC.TaskQueue = TaskQueue;

;;

var RenderQueue = TaskQueue.extend({

	waitsByNamespace: null,
	waitNamespace: null,
	waitId: null,


	constructor: function(waitsByNamespace) {
		TaskQueue.call(this); // super-constructor

		this.waitsByNamespace = waitsByNamespace || {};
	},


	queue: function(taskFunc, namespace, type) {
		var task = {
			func: taskFunc,
			namespace: namespace,
			type: type
		};
		var waitMs;

		if (namespace) {
			waitMs = this.waitsByNamespace[namespace];
		}

		if (this.waitNamespace) {
			if (namespace === this.waitNamespace && waitMs != null) {
				this.delayWait(waitMs);
			}
			else {
				this.clearWait();
				this.tryStart();
			}
		}

		if (this.compoundTask(task)) { // appended to queue?

			if (!this.waitNamespace && waitMs != null) {
				this.startWait(namespace, waitMs);
			}
			else {
				this.tryStart();
			}
		}
	},


	startWait: function(namespace, waitMs) {
		this.waitNamespace = namespace;
		this.spawnWait(waitMs);
	},


	delayWait: function(waitMs) {
		clearTimeout(this.waitId);
		this.spawnWait(waitMs);
	},


	spawnWait: function(waitMs) {
		var _this = this;

		this.waitId = setTimeout(function() {
			_this.waitNamespace = null;
			_this.tryStart();
		}, waitMs);
	},


	clearWait: function() {
		if (this.waitNamespace) {
			clearTimeout(this.waitId);
			this.waitId = null;
			this.waitNamespace = null;
		}
	},


	canRunNext: function() {
		if (!TaskQueue.prototype.canRunNext.apply(this, arguments)) {
			return false;
		}

		// waiting for a certain namespace to stop receiving tasks?
		if (this.waitNamespace) {

			// if there was a different namespace task in the meantime,
			// that forces all previously-waiting tasks to suddenly execute.
			// TODO: find a way to do this in constant time.
			for (var q = this.q, i = 0; i < q.length; i++) {
				if (q[i].namespace !== this.waitNamespace) {
					return true; // allow execution
				}
			}

			return false;
		}

		return true;
	},


	runTask: function(task) {
		this.runTaskFunc(task.func);
	},


	compoundTask: function(newTask) {
		var q = this.q;
		var shouldAppend = true;
		var i, task;

		if (newTask.namespace) {

			if (newTask.type === 'destroy' || newTask.type === 'init') {

				// remove all add/remove ops with same namespace, regardless of order
				for (i = q.length - 1; i >= 0; i--) {
					task = q[i];

					if (
						task.namespace === newTask.namespace &&
						(task.type === 'add' || task.type === 'remove')
					) {
						q.splice(i, 1); // remove task
					}
				}

				if (newTask.type === 'destroy') {
					// eat away final init/destroy operation
					if (q.length) {
						task = q[q.length - 1]; // last task

						if (task.namespace === newTask.namespace) {

							// the init and our destroy cancel each other out
							if (task.type === 'init') {
								shouldAppend = false;
								q.pop();
							}
							// prefer to use the destroy operation that's already present
							else if (task.type === 'destroy') {
								shouldAppend = false;
							}
						}
					}
				}
				else if (newTask.type === 'init') {
					// eat away final init operation
					if (q.length) {
						task = q[q.length - 1]; // last task

						if (
							task.namespace === newTask.namespace &&
							task.type === 'init'
						) {
							// our init operation takes precedence
							q.pop();
						}
					}
				}
			}
		}

		if (shouldAppend) {
			q.push(newTask);
		}

		return shouldAppend;
	}

});

FC.RenderQueue = RenderQueue;

;;

/* A rectangular panel that is absolutely positioned over other content
------------------------------------------------------------------------------------------------------------------------
Options:
	- className (string)
	- content (HTML string or jQuery element set)
	- parentEl
	- top
	- left
	- right (the x coord of where the right edge should be. not a "CSS" right)
	- autoHide (boolean)
	- show (callback)
	- hide (callback)
*/

var Popover = Class.extend(ListenerMixin, {

	isHidden: true,
	options: null,
	el: null, // the container element for the popover. generated by this object
	margin: 10, // the space required between the popover and the edges of the scroll container


	constructor: function(options) {
		this.options = options || {};
	},


	// Shows the popover on the specified position. Renders it if not already
	show: function() {
		if (this.isHidden) {
			if (!this.el) {
				this.render();
			}
			this.el.show();
			this.position();
			this.isHidden = false;
			this.trigger('show');
		}
	},


	// Hides the popover, through CSS, but does not remove it from the DOM
	hide: function() {
		if (!this.isHidden) {
			this.el.hide();
			this.isHidden = true;
			this.trigger('hide');
		}
	},


	// Creates `this.el` and renders content inside of it
	render: function() {
		var _this = this;
		var options = this.options;

		this.el = $('<div class="fc-popover"/>')
			.addClass(options.className || '')
			.css({
				// position initially to the top left to avoid creating scrollbars
				top: 0,
				left: 0
			})
			.append(options.content)
			.appendTo(options.parentEl);

		// when a click happens on anything inside with a 'fc-close' className, hide the popover
		this.el.on('click', '.fc-close', function() {
			_this.hide();
		});

		if (options.autoHide) {
			this.listenTo($(document), 'mousedown', this.documentMousedown);
		}
	},


	// Triggered when the user clicks *anywhere* in the document, for the autoHide feature
	documentMousedown: function(ev) {
		// only hide the popover if the click happened outside the popover
		if (this.el && !$(ev.target).closest(this.el).length) {
			this.hide();
		}
	},


	// Hides and unregisters any handlers
	removeElement: function() {
		this.hide();

		if (this.el) {
			this.el.remove();
			this.el = null;
		}

		this.stopListeningTo($(document), 'mousedown');
	},


	// Positions the popover optimally, using the top/left/right options
	position: function() {
		var options = this.options;
		var origin = this.el.offsetParent().offset();
		var width = this.el.outerWidth();
		var height = this.el.outerHeight();
		var windowEl = $(window);
		var viewportEl = getScrollParent(this.el);
		var viewportTop;
		var viewportLeft;
		var viewportOffset;
		var top; // the "position" (not "offset") values for the popover
		var left; //

		// compute top and left
		top = options.top || 0;
		if (options.left !== undefined) {
			left = options.left;
		}
		else if (options.right !== undefined) {
			left = options.right - width; // derive the left value from the right value
		}
		else {
			left = 0;
		}

		if (viewportEl.is(window) || viewportEl.is(document)) { // normalize getScrollParent's result
			viewportEl = windowEl;
			viewportTop = 0; // the window is always at the top left
			viewportLeft = 0; // (and .offset() won't work if called here)
		}
		else {
			viewportOffset = viewportEl.offset();
			viewportTop = viewportOffset.top;
			viewportLeft = viewportOffset.left;
		}

		// if the window is scrolled, it causes the visible area to be further down
		viewportTop += windowEl.scrollTop();
		viewportLeft += windowEl.scrollLeft();

		// constrain to the view port. if constrained by two edges, give precedence to top/left
		if (options.viewportConstrain !== false) {
			top = Math.min(top, viewportTop + viewportEl.outerHeight() - height - this.margin);
			top = Math.max(top, viewportTop + this.margin);
			left = Math.min(left, viewportLeft + viewportEl.outerWidth() - width - this.margin);
			left = Math.max(left, viewportLeft + this.margin);
		}

		this.el.css({
			top: top - origin.top,
			left: left - origin.left
		});
	},


	// Triggers a callback. Calls a function in the option hash of the same name.
	// Arguments beyond the first `name` are forwarded on.
	// TODO: better code reuse for this. Repeat code
	trigger: function(name) {
		if (this.options[name]) {
			this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}

});

;;

/*
A cache for the left/right/top/bottom/width/height values for one or more elements.
Works with both offset (from topleft document) and position (from offsetParent).

options:
- els
- isHorizontal
- isVertical
*/
var CoordCache = FC.CoordCache = Class.extend({

	els: null, // jQuery set (assumed to be siblings)
	forcedOffsetParentEl: null, // options can override the natural offsetParent
	origin: null, // {left,top} position of offsetParent of els
	boundingRect: null, // constrain cordinates to this rectangle. {left,right,top,bottom} or null
	isHorizontal: false, // whether to query for left/right/width
	isVertical: false, // whether to query for top/bottom/height

	// arrays of coordinates (offsets from topleft of document)
	lefts: null,
	rights: null,
	tops: null,
	bottoms: null,


	constructor: function(options) {
		this.els = $(options.els);
		this.isHorizontal = options.isHorizontal;
		this.isVertical = options.isVertical;
		this.forcedOffsetParentEl = options.offsetParent ? $(options.offsetParent) : null;
	},


	// Queries the els for coordinates and stores them.
	// Call this method before using and of the get* methods below.
	build: function() {
		var offsetParentEl = this.forcedOffsetParentEl;
		if (!offsetParentEl && this.els.length > 0) {
			offsetParentEl = this.els.eq(0).offsetParent();
		}

		this.origin = offsetParentEl ?
			offsetParentEl.offset() :
			null;

		this.boundingRect = this.queryBoundingRect();

		if (this.isHorizontal) {
			this.buildElHorizontals();
		}
		if (this.isVertical) {
			this.buildElVerticals();
		}
	},


	// Destroys all internal data about coordinates, freeing memory
	clear: function() {
		this.origin = null;
		this.boundingRect = null;
		this.lefts = null;
		this.rights = null;
		this.tops = null;
		this.bottoms = null;
	},


	// When called, if coord caches aren't built, builds them
	ensureBuilt: function() {
		if (!this.origin) {
			this.build();
		}
	},


	// Populates the left/right internal coordinate arrays
	buildElHorizontals: function() {
		var lefts = [];
		var rights = [];

		this.els.each(function(i, node) {
			var el = $(node);
			var left = el.offset().left;
			var width = el.outerWidth();

			lefts.push(left);
			rights.push(left + width);
		});

		this.lefts = lefts;
		this.rights = rights;
	},


	// Populates the top/bottom internal coordinate arrays
	buildElVerticals: function() {
		var tops = [];
		var bottoms = [];

		this.els.each(function(i, node) {
			var el = $(node);
			var top = el.offset().top;
			var height = el.outerHeight();

			tops.push(top);
			bottoms.push(top + height);
		});

		this.tops = tops;
		this.bottoms = bottoms;
	},


	// Given a left offset (from document left), returns the index of the el that it horizontally intersects.
	// If no intersection is made, returns undefined.
	getHorizontalIndex: function(leftOffset) {
		this.ensureBuilt();

		var lefts = this.lefts;
		var rights = this.rights;
		var len = lefts.length;
		var i;

		for (i = 0; i < len; i++) {
			if (leftOffset >= lefts[i] && leftOffset < rights[i]) {
				return i;
			}
		}
	},


	// Given a top offset (from document top), returns the index of the el that it vertically intersects.
	// If no intersection is made, returns undefined.
	getVerticalIndex: function(topOffset) {
		this.ensureBuilt();

		var tops = this.tops;
		var bottoms = this.bottoms;
		var len = tops.length;
		var i;

		for (i = 0; i < len; i++) {
			if (topOffset >= tops[i] && topOffset < bottoms[i]) {
				return i;
			}
		}
	},


	// Gets the left offset (from document left) of the element at the given index
	getLeftOffset: function(leftIndex) {
		this.ensureBuilt();
		return this.lefts[leftIndex];
	},


	// Gets the left position (from offsetParent left) of the element at the given index
	getLeftPosition: function(leftIndex) {
		this.ensureBuilt();
		return this.lefts[leftIndex] - this.origin.left;
	},


	// Gets the right offset (from document left) of the element at the given index.
	// This value is NOT relative to the document's right edge, like the CSS concept of "right" would be.
	getRightOffset: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex];
	},


	// Gets the right position (from offsetParent left) of the element at the given index.
	// This value is NOT relative to the offsetParent's right edge, like the CSS concept of "right" would be.
	getRightPosition: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex] - this.origin.left;
	},


	// Gets the width of the element at the given index
	getWidth: function(leftIndex) {
		this.ensureBuilt();
		return this.rights[leftIndex] - this.lefts[leftIndex];
	},


	// Gets the top offset (from document top) of the element at the given index
	getTopOffset: function(topIndex) {
		this.ensureBuilt();
		return this.tops[topIndex];
	},


	// Gets the top position (from offsetParent top) of the element at the given position
	getTopPosition: function(topIndex) {
		this.ensureBuilt();
		return this.tops[topIndex] - this.origin.top;
	},

	// Gets the bottom offset (from the document top) of the element at the given index.
	// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
	getBottomOffset: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex];
	},


	// Gets the bottom position (from the offsetParent top) of the element at the given index.
	// This value is NOT relative to the offsetParent's bottom edge, like the CSS concept of "bottom" would be.
	getBottomPosition: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex] - this.origin.top;
	},


	// Gets the height of the element at the given index
	getHeight: function(topIndex) {
		this.ensureBuilt();
		return this.bottoms[topIndex] - this.tops[topIndex];
	},


	// Bounding Rect
	// TODO: decouple this from CoordCache

	// Compute and return what the elements' bounding rectangle is, from the user's perspective.
	// Right now, only returns a rectangle if constrained by an overflow:scroll element.
	// Returns null if there are no elements
	queryBoundingRect: function() {
		var scrollParentEl;

		if (this.els.length > 0) {
			scrollParentEl = getScrollParent(this.els.eq(0));

			if (!scrollParentEl.is(document)) {
				return getClientRect(scrollParentEl);
			}
		}

		return null;
	},

	isPointInBounds: function(leftOffset, topOffset) {
		return this.isLeftInBounds(leftOffset) && this.isTopInBounds(topOffset);
	},

	isLeftInBounds: function(leftOffset) {
		return !this.boundingRect || (leftOffset >= this.boundingRect.left && leftOffset < this.boundingRect.right);
	},

	isTopInBounds: function(topOffset) {
		return !this.boundingRect || (topOffset >= this.boundingRect.top && topOffset < this.boundingRect.bottom);
	}

});

;;

/* Tracks a drag's mouse movement, firing various handlers
----------------------------------------------------------------------------------------------------------------------*/
// TODO: use Emitter

var DragListener = FC.DragListener = Class.extend(ListenerMixin, {

	options: null,
	subjectEl: null,

	// coordinates of the initial mousedown
	originX: null,
	originY: null,

	// the wrapping element that scrolls, or MIGHT scroll if there's overflow.
	// TODO: do this for wrappers that have overflow:hidden as well.
	scrollEl: null,

	isInteracting: false,
	isDistanceSurpassed: false,
	isDelayEnded: false,
	isDragging: false,
	isTouch: false,
	isGeneric: false, // initiated by 'dragstart' (jqui)

	delay: null,
	delayTimeoutId: null,
	minDistance: null,

	shouldCancelTouchScroll: true,
	scrollAlwaysKills: false,


	constructor: function(options) {
		this.options = options || {};
	},


	// Interaction (high-level)
	// -----------------------------------------------------------------------------------------------------------------


	startInteraction: function(ev, extraOptions) {

		if (ev.type === 'mousedown') {
			if (GlobalEmitter.get().shouldIgnoreMouse()) {
				return;
			}
			else if (!isPrimaryMouseButton(ev)) {
				return;
			}
			else {
				ev.preventDefault(); // prevents native selection in most browsers
			}
		}

		if (!this.isInteracting) {

			// process options
			extraOptions = extraOptions || {};
			this.delay = firstDefined(extraOptions.delay, this.options.delay, 0);
			this.minDistance = firstDefined(extraOptions.distance, this.options.distance, 0);
			this.subjectEl = this.options.subjectEl;

			preventSelection($('body'));

			this.isInteracting = true;
			this.isTouch = getEvIsTouch(ev);
			this.isGeneric = ev.type === 'dragstart';
			this.isDelayEnded = false;
			this.isDistanceSurpassed = false;

			this.originX = getEvX(ev);
			this.originY = getEvY(ev);
			this.scrollEl = getScrollParent($(ev.target));

			this.bindHandlers();
			this.initAutoScroll();
			this.handleInteractionStart(ev);
			this.startDelay(ev);

			if (!this.minDistance) {
				this.handleDistanceSurpassed(ev);
			}
		}
	},


	handleInteractionStart: function(ev) {
		this.trigger('interactionStart', ev);
	},


	endInteraction: function(ev, isCancelled) {
		if (this.isInteracting) {
			this.endDrag(ev);

			if (this.delayTimeoutId) {
				clearTimeout(this.delayTimeoutId);
				this.delayTimeoutId = null;
			}

			this.destroyAutoScroll();
			this.unbindHandlers();

			this.isInteracting = false;
			this.handleInteractionEnd(ev, isCancelled);

			allowSelection($('body'));
		}
	},


	handleInteractionEnd: function(ev, isCancelled) {
		this.trigger('interactionEnd', ev, isCancelled || false);
	},


	// Binding To DOM
	// -----------------------------------------------------------------------------------------------------------------


	bindHandlers: function() {
		// some browsers (Safari in iOS 10) don't allow preventDefault on touch events that are bound after touchstart,
		// so listen to the GlobalEmitter singleton, which is always bound, instead of the document directly.
		var globalEmitter = GlobalEmitter.get();

		if (this.isGeneric) {
			this.listenTo($(document), { // might only work on iOS because of GlobalEmitter's bind :(
				drag: this.handleMove,
				dragstop: this.endInteraction
			});
		}
		else if (this.isTouch) {
			this.listenTo(globalEmitter, {
				touchmove: this.handleTouchMove,
				touchend: this.endInteraction,
				scroll: this.handleTouchScroll
			});
		}
		else {
			this.listenTo(globalEmitter, {
				mousemove: this.handleMouseMove,
				mouseup: this.endInteraction
			});
		}

		this.listenTo(globalEmitter, {
			selectstart: preventDefault, // don't allow selection while dragging
			contextmenu: preventDefault // long taps would open menu on Chrome dev tools
		});
	},


	unbindHandlers: function() {
		this.stopListeningTo(GlobalEmitter.get());
		this.stopListeningTo($(document)); // for isGeneric
	},


	// Drag (high-level)
	// -----------------------------------------------------------------------------------------------------------------


	// extraOptions ignored if drag already started
	startDrag: function(ev, extraOptions) {
		this.startInteraction(ev, extraOptions); // ensure interaction began

		if (!this.isDragging) {
			this.isDragging = true;
			this.handleDragStart(ev);
		}
	},


	handleDragStart: function(ev) {
		this.trigger('dragStart', ev);
	},


	handleMove: function(ev) {
		var dx = getEvX(ev) - this.originX;
		var dy = getEvY(ev) - this.originY;
		var minDistance = this.minDistance;
		var distanceSq; // current distance from the origin, squared

		if (!this.isDistanceSurpassed) {
			distanceSq = dx * dx + dy * dy;
			if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
				this.handleDistanceSurpassed(ev);
			}
		}

		if (this.isDragging) {
			this.handleDrag(dx, dy, ev);
		}
	},


	// Called while the mouse is being moved and when we know a legitimate drag is taking place
	handleDrag: function(dx, dy, ev) {
		this.trigger('drag', dx, dy, ev);
		this.updateAutoScroll(ev); // will possibly cause scrolling
	},


	endDrag: function(ev) {
		if (this.isDragging) {
			this.isDragging = false;
			this.handleDragEnd(ev);
		}
	},


	handleDragEnd: function(ev) {
		this.trigger('dragEnd', ev);
	},


	// Delay
	// -----------------------------------------------------------------------------------------------------------------


	startDelay: function(initialEv) {
		var _this = this;

		if (this.delay) {
			this.delayTimeoutId = setTimeout(function() {
				_this.handleDelayEnd(initialEv);
			}, this.delay);
		}
		else {
			this.handleDelayEnd(initialEv);
		}
	},


	handleDelayEnd: function(initialEv) {
		this.isDelayEnded = true;

		if (this.isDistanceSurpassed) {
			this.startDrag(initialEv);
		}
	},


	// Distance
	// -----------------------------------------------------------------------------------------------------------------


	handleDistanceSurpassed: function(ev) {
		this.isDistanceSurpassed = true;

		if (this.isDelayEnded) {
			this.startDrag(ev);
		}
	},


	// Mouse / Touch
	// -----------------------------------------------------------------------------------------------------------------


	handleTouchMove: function(ev) {

		// prevent inertia and touchmove-scrolling while dragging
		if (this.isDragging && this.shouldCancelTouchScroll) {
			ev.preventDefault();
		}

		this.handleMove(ev);
	},


	handleMouseMove: function(ev) {
		this.handleMove(ev);
	},


	// Scrolling (unrelated to auto-scroll)
	// -----------------------------------------------------------------------------------------------------------------


	handleTouchScroll: function(ev) {
		// if the drag is being initiated by touch, but a scroll happens before
		// the drag-initiating delay is over, cancel the drag
		if (!this.isDragging || this.scrollAlwaysKills) {
			this.endInteraction(ev, true); // isCancelled=true
		}
	},


	// Utils
	// -----------------------------------------------------------------------------------------------------------------


	// Triggers a callback. Calls a function in the option hash of the same name.
	// Arguments beyond the first `name` are forwarded on.
	trigger: function(name) {
		if (this.options[name]) {
			this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		// makes _methods callable by event name. TODO: kill this
		if (this['_' + name]) {
			this['_' + name].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}


});

;;
/*
this.scrollEl is set in DragListener
*/
DragListener.mixin({

	isAutoScroll: false,

	scrollBounds: null, // { top, bottom, left, right }
	scrollTopVel: null, // pixels per second
	scrollLeftVel: null, // pixels per second
	scrollIntervalId: null, // ID of setTimeout for scrolling animation loop

	// defaults
	scrollSensitivity: 30, // pixels from edge for scrolling to start
	scrollSpeed: 200, // pixels per second, at maximum speed
	scrollIntervalMs: 50, // millisecond wait between scroll increment


	initAutoScroll: function() {
		var scrollEl = this.scrollEl;

		this.isAutoScroll =
			this.options.scroll &&
			scrollEl &&
			!scrollEl.is(window) &&
			!scrollEl.is(document);

		if (this.isAutoScroll) {
			// debounce makes sure rapid calls don't happen
			this.listenTo(scrollEl, 'scroll', debounce(this.handleDebouncedScroll, 100));
		}
	},


	destroyAutoScroll: function() {
		this.endAutoScroll(); // kill any animation loop

		// remove the scroll handler if there is a scrollEl
		if (this.isAutoScroll) {
			this.stopListeningTo(this.scrollEl, 'scroll'); // will probably get removed by unbindHandlers too :(
		}
	},


	// Computes and stores the bounding rectangle of scrollEl
	computeScrollBounds: function() {
		if (this.isAutoScroll) {
			this.scrollBounds = getOuterRect(this.scrollEl);
			// TODO: use getClientRect in future. but prevents auto scrolling when on top of scrollbars
		}
	},


	// Called when the dragging is in progress and scrolling should be updated
	updateAutoScroll: function(ev) {
		var sensitivity = this.scrollSensitivity;
		var bounds = this.scrollBounds;
		var topCloseness, bottomCloseness;
		var leftCloseness, rightCloseness;
		var topVel = 0;
		var leftVel = 0;

		if (bounds) { // only scroll if scrollEl exists

			// compute closeness to edges. valid range is from 0.0 - 1.0
			topCloseness = (sensitivity - (getEvY(ev) - bounds.top)) / sensitivity;
			bottomCloseness = (sensitivity - (bounds.bottom - getEvY(ev))) / sensitivity;
			leftCloseness = (sensitivity - (getEvX(ev) - bounds.left)) / sensitivity;
			rightCloseness = (sensitivity - (bounds.right - getEvX(ev))) / sensitivity;

			// translate vertical closeness into velocity.
			// mouse must be completely in bounds for velocity to happen.
			if (topCloseness >= 0 && topCloseness <= 1) {
				topVel = topCloseness * this.scrollSpeed * -1; // negative. for scrolling up
			}
			else if (bottomCloseness >= 0 && bottomCloseness <= 1) {
				topVel = bottomCloseness * this.scrollSpeed;
			}

			// translate horizontal closeness into velocity
			if (leftCloseness >= 0 && leftCloseness <= 1) {
				leftVel = leftCloseness * this.scrollSpeed * -1; // negative. for scrolling left
			}
			else if (rightCloseness >= 0 && rightCloseness <= 1) {
				leftVel = rightCloseness * this.scrollSpeed;
			}
		}

		this.setScrollVel(topVel, leftVel);
	},


	// Sets the speed-of-scrolling for the scrollEl
	setScrollVel: function(topVel, leftVel) {

		this.scrollTopVel = topVel;
		this.scrollLeftVel = leftVel;

		this.constrainScrollVel(); // massages into realistic values

		// if there is non-zero velocity, and an animation loop hasn't already started, then START
		if ((this.scrollTopVel || this.scrollLeftVel) && !this.scrollIntervalId) {
			this.scrollIntervalId = setInterval(
				proxy(this, 'scrollIntervalFunc'), // scope to `this`
				this.scrollIntervalMs
			);
		}
	},


	// Forces scrollTopVel and scrollLeftVel to be zero if scrolling has already gone all the way
	constrainScrollVel: function() {
		var el = this.scrollEl;

		if (this.scrollTopVel < 0) { // scrolling up?
			if (el.scrollTop() <= 0) { // already scrolled all the way up?
				this.scrollTopVel = 0;
			}
		}
		else if (this.scrollTopVel > 0) { // scrolling down?
			if (el.scrollTop() + el[0].clientHeight >= el[0].scrollHeight) { // already scrolled all the way down?
				this.scrollTopVel = 0;
			}
		}

		if (this.scrollLeftVel < 0) { // scrolling left?
			if (el.scrollLeft() <= 0) { // already scrolled all the left?
				this.scrollLeftVel = 0;
			}
		}
		else if (this.scrollLeftVel > 0) { // scrolling right?
			if (el.scrollLeft() + el[0].clientWidth >= el[0].scrollWidth) { // already scrolled all the way right?
				this.scrollLeftVel = 0;
			}
		}
	},


	// This function gets called during every iteration of the scrolling animation loop
	scrollIntervalFunc: function() {
		var el = this.scrollEl;
		var frac = this.scrollIntervalMs / 1000; // considering animation frequency, what the vel should be mult'd by

		// change the value of scrollEl's scroll
		if (this.scrollTopVel) {
			el.scrollTop(el.scrollTop() + this.scrollTopVel * frac);
		}
		if (this.scrollLeftVel) {
			el.scrollLeft(el.scrollLeft() + this.scrollLeftVel * frac);
		}

		this.constrainScrollVel(); // since the scroll values changed, recompute the velocities

		// if scrolled all the way, which causes the vels to be zero, stop the animation loop
		if (!this.scrollTopVel && !this.scrollLeftVel) {
			this.endAutoScroll();
		}
	},


	// Kills any existing scrolling animation loop
	endAutoScroll: function() {
		if (this.scrollIntervalId) {
			clearInterval(this.scrollIntervalId);
			this.scrollIntervalId = null;

			this.handleScrollEnd();
		}
	},


	// Get called when the scrollEl is scrolled (NOTE: this is delayed via debounce)
	handleDebouncedScroll: function() {
		// recompute all coordinates, but *only* if this is *not* part of our scrolling animation
		if (!this.scrollIntervalId) {
			this.handleScrollEnd();
		}
	},


	// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
	handleScrollEnd: function() {
	}

});
;;

/* Tracks mouse movements over a component and raises events about which hit the mouse is over.
------------------------------------------------------------------------------------------------------------------------
options:
- subjectEl
- subjectCenter
*/

var HitDragListener = DragListener.extend({

	component: null, // converts coordinates to hits
		// methods: hitsNeeded, hitsNotNeeded, queryHit

	origHit: null, // the hit the mouse was over when listening started
	hit: null, // the hit the mouse is over
	coordAdjust: null, // delta that will be added to the mouse coordinates when computing collisions


	constructor: function(component, options) {
		DragListener.call(this, options); // call the super-constructor

		this.component = component;
	},


	// Called when drag listening starts (but a real drag has not necessarily began).
	// ev might be undefined if dragging was started manually.
	handleInteractionStart: function(ev) {
		var subjectEl = this.subjectEl;
		var subjectRect;
		var origPoint;
		var point;

		this.component.hitsNeeded();
		this.computeScrollBounds(); // for autoscroll

		if (ev) {
			origPoint = { left: getEvX(ev), top: getEvY(ev) };
			point = origPoint;

			// constrain the point to bounds of the element being dragged
			if (subjectEl) {
				subjectRect = getOuterRect(subjectEl); // used for centering as well
				point = constrainPoint(point, subjectRect);
			}

			this.origHit = this.queryHit(point.left, point.top);

			// treat the center of the subject as the collision point?
			if (subjectEl && this.options.subjectCenter) {

				// only consider the area the subject overlaps the hit. best for large subjects.
				// TODO: skip this if hit didn't supply left/right/top/bottom
				if (this.origHit) {
					subjectRect = intersectRects(this.origHit, subjectRect) ||
						subjectRect; // in case there is no intersection
				}

				point = getRectCenter(subjectRect);
			}

			this.coordAdjust = diffPoints(point, origPoint); // point - origPoint
		}
		else {
			this.origHit = null;
			this.coordAdjust = null;
		}

		// call the super-method. do it after origHit has been computed
		DragListener.prototype.handleInteractionStart.apply(this, arguments);
	},


	// Called when the actual drag has started
	handleDragStart: function(ev) {
		var hit;

		DragListener.prototype.handleDragStart.apply(this, arguments); // call the super-method

		// might be different from this.origHit if the min-distance is large
		hit = this.queryHit(getEvX(ev), getEvY(ev));

		// report the initial hit the mouse is over
		// especially important if no min-distance and drag starts immediately
		if (hit) {
			this.handleHitOver(hit);
		}
	},


	// Called when the drag moves
	handleDrag: function(dx, dy, ev) {
		var hit;

		DragListener.prototype.handleDrag.apply(this, arguments); // call the super-method

		hit = this.queryHit(getEvX(ev), getEvY(ev));

		if (!isHitsEqual(hit, this.hit)) { // a different hit than before?
			if (this.hit) {
				this.handleHitOut();
			}
			if (hit) {
				this.handleHitOver(hit);
			}
		}
	},


	// Called when dragging has been stopped
	handleDragEnd: function() {
		this.handleHitDone();
		DragListener.prototype.handleDragEnd.apply(this, arguments); // call the super-method
	},


	// Called when a the mouse has just moved over a new hit
	handleHitOver: function(hit) {
		var isOrig = isHitsEqual(hit, this.origHit);

		this.hit = hit;

		this.trigger('hitOver', this.hit, isOrig, this.origHit);
	},


	// Called when the mouse has just moved out of a hit
	handleHitOut: function() {
		if (this.hit) {
			this.trigger('hitOut', this.hit);
			this.handleHitDone();
			this.hit = null;
		}
	},


	// Called after a hitOut. Also called before a dragStop
	handleHitDone: function() {
		if (this.hit) {
			this.trigger('hitDone', this.hit);
		}
	},


	// Called when the interaction ends, whether there was a real drag or not
	handleInteractionEnd: function() {
		DragListener.prototype.handleInteractionEnd.apply(this, arguments); // call the super-method

		this.origHit = null;
		this.hit = null;

		this.component.hitsNotNeeded();
	},


	// Called when scrolling has stopped, whether through auto scroll, or the user scrolling
	handleScrollEnd: function() {
		DragListener.prototype.handleScrollEnd.apply(this, arguments); // call the super-method

		// hits' absolute positions will be in new places after a user's scroll.
		// HACK for recomputing.
		if (this.isDragging) {
			this.component.releaseHits();
			this.component.prepareHits();
		}
	},


	// Gets the hit underneath the coordinates for the given mouse event
	queryHit: function(left, top) {

		if (this.coordAdjust) {
			left += this.coordAdjust.left;
			top += this.coordAdjust.top;
		}

		return this.component.queryHit(left, top);
	}

});


// Returns `true` if the hits are identically equal. `false` otherwise. Must be from the same component.
// Two null values will be considered equal, as two "out of the component" states are the same.
function isHitsEqual(hit0, hit1) {

	if (!hit0 && !hit1) {
		return true;
	}

	if (hit0 && hit1) {
		return hit0.component === hit1.component &&
			isHitPropsWithin(hit0, hit1) &&
			isHitPropsWithin(hit1, hit0); // ensures all props are identical
	}

	return false;
}


// Returns true if all of subHit's non-standard properties are within superHit
function isHitPropsWithin(subHit, superHit) {
	for (var propName in subHit) {
		if (!/^(component|left|right|top|bottom)$/.test(propName)) {
			if (subHit[propName] !== superHit[propName]) {
				return false;
			}
		}
	}
	return true;
}

;;

/*
Listens to document and window-level user-interaction events, like touch events and mouse events,
and fires these events as-is to whoever is observing a GlobalEmitter.
Best when used as a singleton via GlobalEmitter.get()

Normalizes mouse/touch events. For examples:
- ignores the the simulated mouse events that happen after a quick tap: mousemove+mousedown+mouseup+click
- compensates for various buggy scenarios where a touchend does not fire
*/

FC.touchMouseIgnoreWait = 500;

var GlobalEmitter = Class.extend(ListenerMixin, EmitterMixin, {

	isTouching: false,
	mouseIgnoreDepth: 0,
	handleScrollProxy: null,


	bind: function() {
		var _this = this;

		this.listenTo($(document), {
			touchstart: this.handleTouchStart,
			touchcancel: this.handleTouchCancel,
			touchend: this.handleTouchEnd,
			mousedown: this.handleMouseDown,
			mousemove: this.handleMouseMove,
			mouseup: this.handleMouseUp,
			click: this.handleClick,
			selectstart: this.handleSelectStart,
			contextmenu: this.handleContextMenu
		});

		// because we need to call preventDefault
		// because https://www.chromestatus.com/features/5093566007214080
		// TODO: investigate performance because this is a global handler
		window.addEventListener(
			'touchmove',
			this.handleTouchMoveProxy = function(ev) {
				_this.handleTouchMove($.Event(ev));
			},
			{ passive: false } // allows preventDefault()
		);

		// attach a handler to get called when ANY scroll action happens on the page.
		// this was impossible to do with normal on/off because 'scroll' doesn't bubble.
		// http://stackoverflow.com/a/32954565/96342
		window.addEventListener(
			'scroll',
			this.handleScrollProxy = function(ev) {
				_this.handleScroll($.Event(ev));
			},
			true // useCapture
		);
	},

	unbind: function() {
		this.stopListeningTo($(document));

		window.removeEventListener(
			'touchmove',
			this.handleTouchMoveProxy
		);

		window.removeEventListener(
			'scroll',
			this.handleScrollProxy,
			true // useCapture
		);
	},


	// Touch Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleTouchStart: function(ev) {

		// if a previous touch interaction never ended with a touchend, then implicitly end it,
		// but since a new touch interaction is about to begin, don't start the mouse ignore period.
		this.stopTouch(ev, true); // skipMouseIgnore=true

		this.isTouching = true;
		this.trigger('touchstart', ev);
	},

	handleTouchMove: function(ev) {
		if (this.isTouching) {
			this.trigger('touchmove', ev);
		}
	},

	handleTouchCancel: function(ev) {
		if (this.isTouching) {
			this.trigger('touchcancel', ev);

			// Have touchcancel fire an artificial touchend. That way, handlers won't need to listen to both.
			// If touchend fires later, it won't have any effect b/c isTouching will be false.
			this.stopTouch(ev);
		}
	},

	handleTouchEnd: function(ev) {
		this.stopTouch(ev);
	},


	// Mouse Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleMouseDown: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mousedown', ev);
		}
	},

	handleMouseMove: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mousemove', ev);
		}
	},

	handleMouseUp: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('mouseup', ev);
		}
	},

	handleClick: function(ev) {
		if (!this.shouldIgnoreMouse()) {
			this.trigger('click', ev);
		}
	},


	// Misc Handlers
	// -----------------------------------------------------------------------------------------------------------------

	handleSelectStart: function(ev) {
		this.trigger('selectstart', ev);
	},

	handleContextMenu: function(ev) {
		this.trigger('contextmenu', ev);
	},

	handleScroll: function(ev) {
		this.trigger('scroll', ev);
	},


	// Utils
	// -----------------------------------------------------------------------------------------------------------------

	stopTouch: function(ev, skipMouseIgnore) {
		if (this.isTouching) {
			this.isTouching = false;
			this.trigger('touchend', ev);

			if (!skipMouseIgnore) {
				this.startTouchMouseIgnore();
			}
		}
	},

	startTouchMouseIgnore: function() {
		var _this = this;
		var wait = FC.touchMouseIgnoreWait;

		if (wait) {
			this.mouseIgnoreDepth++;
			setTimeout(function() {
				_this.mouseIgnoreDepth--;
			}, wait);
		}
	},

	shouldIgnoreMouse: function() {
		return this.isTouching || Boolean(this.mouseIgnoreDepth);
	}

});


// Singleton
// ---------------------------------------------------------------------------------------------------------------------

(function() {
	var globalEmitter = null;
	var neededCount = 0;


	// gets the singleton
	GlobalEmitter.get = function() {

		if (!globalEmitter) {
			globalEmitter = new GlobalEmitter();
			globalEmitter.bind();
		}

		return globalEmitter;
	};


	// called when an object knows it will need a GlobalEmitter in the near future.
	GlobalEmitter.needed = function() {
		GlobalEmitter.get(); // ensures globalEmitter
		neededCount++;
	};


	// called when the object that originally called needed() doesn't need a GlobalEmitter anymore.
	GlobalEmitter.unneeded = function() {
		neededCount--;

		if (!neededCount) { // nobody else needs it
			globalEmitter.unbind();
			globalEmitter = null;
		}
	};

})();

;;

/* Creates a clone of an element and lets it track the mouse as it moves
----------------------------------------------------------------------------------------------------------------------*/

var MouseFollower = Class.extend(ListenerMixin, {

	options: null,

	sourceEl: null, // the element that will be cloned and made to look like it is dragging
	el: null, // the clone of `sourceEl` that will track the mouse
	parentEl: null, // the element that `el` (the clone) will be attached to

	// the initial position of el, relative to the offset parent. made to match the initial offset of sourceEl
	top0: null,
	left0: null,

	// the absolute coordinates of the initiating touch/mouse action
	y0: null,
	x0: null,

	// the number of pixels the mouse has moved from its initial position
	topDelta: null,
	leftDelta: null,

	isFollowing: false,
	isHidden: false,
	isAnimating: false, // doing the revert animation?

	constructor: function(sourceEl, options) {
		this.options = options = options || {};
		this.sourceEl = sourceEl;
		this.parentEl = options.parentEl ? $(options.parentEl) : sourceEl.parent(); // default to sourceEl's parent
	},


	// Causes the element to start following the mouse
	start: function(ev) {
		if (!this.isFollowing) {
			this.isFollowing = true;

			this.y0 = getEvY(ev);
			this.x0 = getEvX(ev);
			this.topDelta = 0;
			this.leftDelta = 0;

			if (!this.isHidden) {
				this.updatePosition();
			}

			if (getEvIsTouch(ev)) {
				this.listenTo($(document), 'touchmove', this.handleMove);
			}
			else {
				this.listenTo($(document), 'mousemove', this.handleMove);
			}
		}
	},


	// Causes the element to stop following the mouse. If shouldRevert is true, will animate back to original position.
	// `callback` gets invoked when the animation is complete. If no animation, it is invoked immediately.
	stop: function(shouldRevert, callback) {
		var _this = this;
		var revertDuration = this.options.revertDuration;

		function complete() { // might be called by .animate(), which might change `this` context
			_this.isAnimating = false;
			_this.removeElement();

			_this.top0 = _this.left0 = null; // reset state for future updatePosition calls

			if (callback) {
				callback();
			}
		}

		if (this.isFollowing && !this.isAnimating) { // disallow more than one stop animation at a time
			this.isFollowing = false;

			this.stopListeningTo($(document));

			if (shouldRevert && revertDuration && !this.isHidden) { // do a revert animation?
				this.isAnimating = true;
				this.el.animate({
					top: this.top0,
					left: this.left0
				}, {
					duration: revertDuration,
					complete: complete
				});
			}
			else {
				complete();
			}
		}
	},


	// Gets the tracking element. Create it if necessary
	getEl: function() {
		var el = this.el;

		if (!el) {
			el = this.el = this.sourceEl.clone()
				.addClass(this.options.additionalClass || '')
				.css({
					position: 'absolute',
					visibility: '', // in case original element was hidden (commonly through hideEvents())
					display: this.isHidden ? 'none' : '', // for when initially hidden
					margin: 0,
					right: 'auto', // erase and set width instead
					bottom: 'auto', // erase and set height instead
					width: this.sourceEl.width(), // explicit height in case there was a 'right' value
					height: this.sourceEl.height(), // explicit width in case there was a 'bottom' value
					opacity: this.options.opacity || '',
					zIndex: this.options.zIndex
				});

			// we don't want long taps or any mouse interaction causing selection/menus.
			// would use preventSelection(), but that prevents selectstart, causing problems.
			el.addClass('fc-unselectable');

			el.appendTo(this.parentEl);
		}

		return el;
	},


	// Removes the tracking element if it has already been created
	removeElement: function() {
		if (this.el) {
			this.el.remove();
			this.el = null;
		}
	},


	// Update the CSS position of the tracking element
	updatePosition: function() {
		var sourceOffset;
		var origin;

		this.getEl(); // ensure this.el

		// make sure origin info was computed
		if (this.top0 === null) {
			sourceOffset = this.sourceEl.offset();
			origin = this.el.offsetParent().offset();
			this.top0 = sourceOffset.top - origin.top;
			this.left0 = sourceOffset.left - origin.left;
		}

		this.el.css({
			top: this.top0 + this.topDelta,
			left: this.left0 + this.leftDelta
		});
	},


	// Gets called when the user moves the mouse
	handleMove: function(ev) {
		this.topDelta = getEvY(ev) - this.y0;
		this.leftDelta = getEvX(ev) - this.x0;

		if (!this.isHidden) {
			this.updatePosition();
		}
	},


	// Temporarily makes the tracking element invisible. Can be called before following starts
	hide: function() {
		if (!this.isHidden) {
			this.isHidden = true;
			if (this.el) {
				this.el.hide();
			}
		}
	},


	// Show the tracking element after it has been temporarily hidden
	show: function() {
		if (this.isHidden) {
			this.isHidden = false;
			this.updatePosition();
			this.getEl().show();
		}
	}

});

;;

var ChronoComponent = Model.extend({

	children: null,

	el: null, // the view's containing element. set by Calendar(?)

	// frequently accessed options
	isRTL: false,
	nextDayThreshold: null,


	constructor: function() {
		Model.call(this);

		this.children = [];

		this.nextDayThreshold = moment.duration(this.opt('nextDayThreshold'));
		this.isRTL = this.opt('isRTL');
	},


	addChild: function(chronoComponent) {
		this.children.push(chronoComponent);
	},


	// Options
	// -----------------------------------------------------------------------------------------------------------------


	opt: function(name) {
		// subclasses must implement
	},


	publiclyTrigger: function(/**/) {
		var calendar = this._getCalendar();

		return calendar.publiclyTrigger.apply(calendar, arguments);
	},


	hasPublicHandlers: function(/**/) {
		var calendar = this._getCalendar();

		return calendar.hasPublicHandlers.apply(calendar, arguments);
	},


	// Element
	// -----------------------------------------------------------------------------------------------------------------


	// Sets the container element that the view should render inside of, does global DOM-related initializations,
	// and renders all the non-date-related content inside.
	setElement: function(el) {
		this.el = el;
		this.bindGlobalHandlers();
		this.renderSkeleton();
	},


	// Removes the view's container element from the DOM, clearing any content beforehand.
	// Undoes any other DOM-related attachments.
	removeElement: function() {
		this.unrenderSkeleton();
		this.unbindGlobalHandlers();

		this.el.remove();
		// NOTE: don't null-out this.el in case the View was destroyed within an API callback.
		// We don't null-out the View's other jQuery element references upon destroy,
		//  so we shouldn't kill this.el either.
	},


	bindGlobalHandlers: function() {
	},


	unbindGlobalHandlers: function() {
	},


	// Skeleton
	// -----------------------------------------------------------------------------------------------------------------


	// Renders the basic structure of the view before any content is rendered
	renderSkeleton: function() {
		// subclasses should implement
	},


	// Unrenders the basic structure of the view
	unrenderSkeleton: function() {
		// subclasses should implement
	},


	// Date Low-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	// date-cell content only
	renderDates: function() {
		// subclasses should implement
	},


	// date-cell content only
	unrenderDates: function() {
		// subclasses should override
	},


	// Now-Indicator
	// -----------------------------------------------------------------------------------------------------------------


	// Returns a string unit, like 'second' or 'minute' that defined how often the current time indicator
	// should be refreshed. If something falsy is returned, no time indicator is rendered at all.
	getNowIndicatorUnit: function() {
		// subclasses should implement
	},


	// Renders a current time indicator at the given datetime
	renderNowIndicator: function(date) {
		this.callChildren('renderNowIndicator', date);
	},


	// Undoes the rendering actions from renderNowIndicator
	unrenderNowIndicator: function() {
		this.callChildren('unrenderNowIndicator');
	},


	// Business Hours
	// ---------------------------------------------------------------------------------------------------------------


	// Renders business-hours onto the view. Assumes updateSize has already been called.
	renderBusinessHours: function() {
		this.callChildren('renderBusinessHours');
	},


	// Unrenders previously-rendered business-hours
	unrenderBusinessHours: function() {
		this.callChildren('unrenderBusinessHours');
	},


	// Event Low-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	// Renders the events onto the view.
	// TODO: eventually rename to `renderEvents` once legacy is gone.
	renderEventsPayload: function(eventsPayload) {
		this.callChildren('renderEventsPayload', eventsPayload);
	},


	// Removes event elements from the view.
	unrenderEvents: function() {
		this.callChildren('unrenderEvents');

		// we DON'T need to call updateHeight() because
		// a renderEventsPayload() call always happens after this, which will eventually call updateHeight()
	},


	// Retrieves all segment objects that are rendered in the view
	getEventSegs: function() {
		var children = this.children;
		var segs = [];
		var i;

		for (i = 0; i < children.length; i++) {
			segs.push.apply( // append
				segs,
				children[i].getEventSegs()
			);
		}

		return segs;
	},


	// Drag-n-Drop Rendering (for both events and external elements)
	// ---------------------------------------------------------------------------------------------------------------


	// Renders a visual indication of a event or external-element drag over the given drop zone.
	// If an external-element, seg will be `null`.
	// Must return elements used for any mock events.
	renderDrag: function(eventFootprints, seg) {
		var dragEls = null;
		var children = this.children;
		var i;
		var childDragEls;

		for (i = 0; i < children.length; i++) {
			childDragEls = children[i].renderDrag(eventFootprints, seg);

			if (childDragEls) {
				if (!dragEls) {
					dragEls = childDragEls;
				}
				else {
					dragEls = dragEls.add(childDragEls);
				}
			}
		}

		return dragEls;
	},


	// Unrenders a visual indication of an event or external-element being dragged.
	unrenderDrag: function() {
		this.callChildren('unrenderDrag');
	},


	// Selection
	// ---------------------------------------------------------------------------------------------------------------


	// Renders a visual indication of the selection
	// TODO: rename to `renderSelection` after legacy is gone
	renderSelectionFootprint: function(componentFootprint) {
		this.callChildren('renderSelectionFootprint', componentFootprint);
	},


	// Unrenders a visual indication of selection
	unrenderSelection: function() {
		this.callChildren('unrenderSelection');
	},


	// Hit Areas
	// ---------------------------------------------------------------------------------------------------------------


	hitsNeeded: function() {
		this.callChildren('hitsNeeded');
	},


	hitsNotNeeded: function() {
		this.callChildren('hitsNotNeeded');
	},


	// Called before one or more queryHit calls might happen. Should prepare any cached coordinates for queryHit
	prepareHits: function() {
		this.callChildren('prepareHits');
	},


	// Called when queryHit calls have subsided. Good place to clear any coordinate caches.
	releaseHits: function() {
		this.callChildren('releaseHits');
	},


	// Given coordinates from the topleft of the document, return data about the date-related area underneath.
	// Can return an object with arbitrary properties (although top/right/left/bottom are encouraged).
	// Must have a `grid` property, a reference to this current grid. TODO: avoid this
	// The returned object will be processed by getHitFootprint and getHitEl.
	queryHit: function(leftOffset, topOffset) {
		var children = this.children;
		var i;
		var hit;

		for (i = 0; i < children.length; i++) {
			hit = children[i].queryHit(leftOffset, topOffset);

			if (hit) {
				break;
			}
		}

		return hit;
	},



	// Event Drag-n-Drop
	// ---------------------------------------------------------------------------------------------------------------


	// Computes if the given event is allowed to be dragged by the user
	isEventDefDraggable: function(eventDef) {
		return this.isEventDefStartEditable(eventDef);
	},


	isEventDefStartEditable: function(eventDef) {
		var isEditable = eventDef.isStartExplicitlyEditable();

		if (isEditable == null) {
			isEditable = this.opt('eventStartEditable');

			if (isEditable == null) {
				isEditable = this.isEventDefGenerallyEditable(eventDef);
			}
		}

		return isEditable;
	},


	isEventDefGenerallyEditable: function(eventDef) {
		var isEditable = eventDef.isExplicitlyEditable();

		if (isEditable == null) {
			isEditable = this.opt('editable');
		}

		return isEditable;
	},


	// Event Resizing
	// ---------------------------------------------------------------------------------------------------------------


	// Computes if the given event is allowed to be resized from its starting edge
	isEventDefResizableFromStart: function(eventDef) {
		return this.opt('eventResizableFromStart') && this.isEventDefResizable(eventDef);
	},


	// Computes if the given event is allowed to be resized from its ending edge
	isEventDefResizableFromEnd: function(eventDef) {
		return this.isEventDefResizable(eventDef);
	},


	// Computes if the given event is allowed to be resized by the user at all
	isEventDefResizable: function(eventDef) {
		var isResizable = eventDef.isDurationExplicitlyEditable();

		if (isResizable == null) {
			isResizable = this.opt('eventDurationEditable');

			if (isResizable == null) {
				isResizable = this.isEventDefGenerallyEditable(eventDef);
			}
		}
		return isResizable;
	},


	// Foreground Segment Rendering
	// ---------------------------------------------------------------------------------------------------------------


	// Renders foreground event segments onto the grid. May return a subset of segs that were rendered.
	renderFgSegs: function(segs) {
		// subclasses must implement
	},


	// Unrenders all currently rendered foreground segments
	unrenderFgSegs: function() {
		// subclasses must implement
	},


	// Renders and assigns an `el` property for each foreground event segment.
	// Only returns segments that successfully rendered.
	// A utility that subclasses may use.
	renderFgSegEls: function(segs, disableResizing) {
		var _this = this;
		var hasEventRenderHandlers = this.hasPublicHandlers('eventRender');
		var html = '';
		var renderedSegs = [];
		var i;

		if (segs.length) { // don't build an empty html string

			// build a large concatenation of event segment HTML
			for (i = 0; i < segs.length; i++) {
				html += this.fgSegHtml(segs[i], disableResizing);
			}

			// Grab individual elements from the combined HTML string. Use each as the default rendering.
			// Then, compute the 'el' for each segment. An el might be null if the eventRender callback returned false.
			$(html).each(function(i, node) {
				var seg = segs[i];
				var el = $(node);

				if (hasEventRenderHandlers) { // optimization
					el = _this.filterEventRenderEl(seg.footprint, el);
				}

				if (el) {
					el.data('fc-seg', seg); // used by handlers
					seg.el = el;
					renderedSegs.push(seg);
				}
			});
		}

		return renderedSegs;
	},


	// Generates the HTML for the default rendering of a foreground event segment. Used by renderFgSegEls()
	fgSegHtml: function(seg, disableResizing) {
		// subclasses should implement
	},


	// Given an event and the default element used for rendering, returns the element that should actually be used.
	// Basically runs events and elements through the eventRender hook.
	filterEventRenderEl: function(eventFootprint, el) {
		var legacy = eventFootprint.getEventLegacy();

		var custom = this.publiclyTrigger('eventRender', {
			context: legacy,
			args: [ legacy, el, this._getView() ]
		});

		if (custom === false) { // means don't render at all
			el = null;
		}
		else if (custom && custom !== true) {
			el = $(custom);
		}

		return el;
	},


	// Navigation
	// ----------------------------------------------------------------------------------------------------------------


	// Generates HTML for an anchor to another view into the calendar.
	// Will either generate an <a> tag or a non-clickable <span> tag, depending on enabled settings.
	// `gotoOptions` can either be a moment input, or an object with the form:
	// { date, type, forceOff }
	// `type` is a view-type like "day" or "week". default value is "day".
	// `attrs` and `innerHtml` are use to generate the rest of the HTML tag.
	buildGotoAnchorHtml: function(gotoOptions, attrs, innerHtml) {
		var date, type, forceOff;
		var finalOptions;

		if ($.isPlainObject(gotoOptions)) {
			date = gotoOptions.date;
			type = gotoOptions.type;
			forceOff = gotoOptions.forceOff;
		}
		else {
			date = gotoOptions; // a single moment input
		}
		date = FC.moment(date); // if a string, parse it

		finalOptions = { // for serialization into the link
			date: date.format('YYYY-MM-DD'),
			type: type || 'day'
		};

		if (typeof attrs === 'string') {
			innerHtml = attrs;
			attrs = null;
		}

		attrs = attrs ? ' ' + attrsToStr(attrs) : ''; // will have a leading space
		innerHtml = innerHtml || '';

		if (!forceOff && this.opt('navLinks')) {
			return '<a' + attrs +
				' data-goto="' + htmlEscape(JSON.stringify(finalOptions)) + '">' +
				innerHtml +
				'</a>';
		}
		else {
			return '<span' + attrs + '>' +
				innerHtml +
				'</span>';
		}
	},


	// Date Formatting Utils
	// ---------------------------------------------------------------------------------------------------------------


	// Utility for formatting a range. Accepts a range object, formatting string, and optional separator.
	// Displays all-day ranges naturally, with an inclusive end. Takes the current isRTL into account.
	// The timezones of the dates within `range` will be respected.
	formatRange: function(range, isAllDay, formatStr, separator) {
		var end = range.end;

		if (isAllDay) {
			end = end.clone().subtract(1); // convert to inclusive. last ms of previous day
		}

		return formatRange(range.start, end, formatStr, separator, this.isRTL);
	},


	getAllDayHtml: function() {
		return this.opt('allDayHtml') || htmlEscape(this.opt('allDayText'));
	},


	// Computes HTML classNames for a single-day element
	getDayClasses: function(date, noThemeHighlight) {
		var view = this._getView();
		var classes = [];
		var today;

		if (!view.activeUnzonedRange.containsDate(date)) {
			classes.push('fc-disabled-day'); // TODO: jQuery UI theme?
		}
		else {
			classes.push('fc-' + dayIDs[date.day()]);

			if (view.isDateInOtherMonth(date)) { // TODO: use ChronoComponent subclass somehow
				classes.push('fc-other-month');
			}

			today = view.calendar.getNow();

			if (date.isSame(today, 'day')) {
				classes.push('fc-today');

				if (noThemeHighlight !== true) {
					classes.push(view.calendar.theme.getClass('today'));
				}
			}
			else if (date < today) {
				classes.push('fc-past');
			}
			else {
				classes.push('fc-future');
			}
		}

		return classes;
	},


	// Date Utils
	// ---------------------------------------------------------------------------------------------------------------


	// Returns the date range of the full days the given range visually appears to occupy.
	// Returns a plain object with start/end, NOT an UnzonedRange!
	computeDayRange: function(unzonedRange) {
		var calendar = this._getCalendar();
		var startDay = calendar.msToUtcMoment(unzonedRange.startMs, true); // the beginning of the day the range starts
		var end = calendar.msToUtcMoment(unzonedRange.endMs);
		var endTimeMS = +end.time(); // # of milliseconds into `endDay`
		var endDay = end.clone().stripTime(); // the beginning of the day the range exclusively ends

		// If the end time is actually inclusively part of the next day and is equal to or
		// beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
		// Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
		if (endTimeMS && endTimeMS >= this.nextDayThreshold) {
			endDay.add(1, 'days');
		}

		// If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
		if (endDay <= startDay) {
			endDay = startDay.clone().add(1, 'days');
		}

		return { start: startDay, end: endDay };
	},


	// Does the given range visually appear to occupy more than one day?
	isMultiDayRange: function(unzonedRange) {
		var dayRange = this.computeDayRange(unzonedRange);

		return dayRange.end.diff(dayRange.start, 'days') > 1;
	},


	// Utils
	// ---------------------------------------------------------------------------------------------------------------


	callChildren: function(methodName) {
		var args = Array.prototype.slice.call(arguments, 1);
		var children = this.children;
		var i, child;

		for (i = 0; i < children.length; i++) {
			child = children[i];
			child[methodName].apply(child, args);
		}
	},


	_getCalendar: function() { // TODO: strip out. move to generic parent.
		return this.calendar || this.view.calendar;
	},


	_getView: function() { // TODO: strip out. move to generic parent.
		return this.view;
	}

});

;;

/* An abstract class comprised of a "grid" of areas that each represent a specific datetime
----------------------------------------------------------------------------------------------------------------------
Contains:
- hit system
- range->footprint->seg pipeline
- initializing day click
- initializing selection system
- initializing mouse/touch handlers for everything
- initializing event rendering-related options
*/

var Grid = FC.Grid = ChronoComponent.extend({

	// self-config, overridable by subclasses
	hasDayInteractions: true, // can user click/select ranges of time?

	view: null, // a View object
	isRTL: null, // shortcut to the view's isRTL option

	unzonedRange: null,

	hitsNeededDepth: 0, // necessary because multiple callers might need the same hits

	dayClickListener: null,
	daySelectListener: null,
	segDragListener: null,
	segResizeListener: null,
	externalDragListener: null,


	constructor: function(view) {
		this.view = view;

		ChronoComponent.call(this);

		this.initFillInternals();

		this.dayClickListener = this.buildDayClickListener();
		this.daySelectListener = this.buildDaySelectListener();
	},


	opt: function(name) {
		return this.view.opt(name);
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	// Tells the grid about what period of time to display.
	// Any date-related internal data should be generated.
	setRange: function(unzonedRange) {
		this.unzonedRange = unzonedRange;

		this.rangeUpdated();
		this.processRangeOptions();
	},


	// Called when internal variables that rely on the range should be updated
	rangeUpdated: function() {
	},


	// Updates values that rely on options and also relate to range
	processRangeOptions: function() {
		var displayEventTime;
		var displayEventEnd;

		this.eventTimeFormat = // for Grid.event-rendering.js
			this.opt('eventTimeFormat') ||
			this.opt('timeFormat') || // deprecated
			this.computeEventTimeFormat();

		displayEventTime = this.opt('displayEventTime');
		if (displayEventTime == null) {
			displayEventTime = this.computeDisplayEventTime(); // might be based off of range
		}

		displayEventEnd = this.opt('displayEventEnd');
		if (displayEventEnd == null) {
			displayEventEnd = this.computeDisplayEventEnd(); // might be based off of range
		}

		this.displayEventTime = displayEventTime;
		this.displayEventEnd = displayEventEnd;
	},



	/* Hit Area
	------------------------------------------------------------------------------------------------------------------*/


	hitsNeeded: function() {
		if (!(this.hitsNeededDepth++)) {
			this.prepareHits();
		}
	},


	hitsNotNeeded: function() {
		if (this.hitsNeededDepth && !(--this.hitsNeededDepth)) {
			this.releaseHits();
		}
	},


	getSafeHitFootprint: function(hit) {
		var footprint = this.getHitFootprint(hit);

		if (!this.view.activeUnzonedRange.containsRange(footprint.unzonedRange)) {
			return null;
		}

		return footprint;
	},


	getHitFootprint: function(hit) {
	},


	// Given position-level information about a date-related area within the grid,
	// should return a jQuery element that best represents it. passed to dayClick callback.
	getHitEl: function(hit) {
	},


	/* Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Sets the container element that the grid should render inside of.
	// Does other DOM-related initializations.
	setElement: function(el) {
		ChronoComponent.prototype.setElement.apply(this, arguments);

		if (this.hasDayInteractions) {
			preventSelection(el);

			this.bindDayHandler('touchstart', this.dayTouchStart);
			this.bindDayHandler('mousedown', this.dayMousedown);
		}

		// attach event-element-related handlers. in Grid.events
		// same garbage collection note as above.
		this.bindSegHandlers();
	},


	bindDayHandler: function(name, handler) {
		var _this = this;

		// attach a handler to the grid's root element.
		// jQuery will take care of unregistering them when removeElement gets called.
		this.el.on(name, function(ev) {
			if (
				!$(ev.target).is(
					_this.segSelector + ',' + // directly on an event element
					_this.segSelector + ' *,' + // within an event element
					'.fc-more,' + // a "more.." link
					'a[data-goto]' // a clickable nav link
				)
			) {
				return handler.call(_this, ev);
			}
		});
	},


	// Removes the grid's container element from the DOM. Undoes any other DOM-related attachments.
	// DOES NOT remove any content beforehand (doesn't clear events or call unrenderDates), unlike View
	removeElement: function() {
		ChronoComponent.prototype.removeElement.apply(this, arguments);

		this.clearDragListeners();
	},


	/* Handlers
	------------------------------------------------------------------------------------------------------------------*/


	// Binds DOM handlers to elements that reside outside the grid, such as the document
	bindGlobalHandlers: function() {
		ChronoComponent.prototype.bindGlobalHandlers.apply(this, arguments);

		this.listenTo($(document), {
			dragstart: this.externalDragStart, // jqui
			sortstart: this.externalDragStart // jqui
		});
	},


	// Unbinds DOM handlers from elements that reside outside the grid
	unbindGlobalHandlers: function() {
		ChronoComponent.prototype.unbindGlobalHandlers.apply(this, arguments);

		this.stopListeningTo($(document));
	},


	// Process a mousedown on an element that represents a day. For day clicking and selecting.
	dayMousedown: function(ev) {

		// HACK
		// This will still work even though bindDayHandler doesn't use GlobalEmitter.
		if (GlobalEmitter.get().shouldIgnoreMouse()) {
			return;
		}

		this.dayClickListener.startInteraction(ev);

		if (this.opt('selectable')) {
			this.daySelectListener.startInteraction(ev, {
				distance: this.opt('selectMinDistance')
			});
		}
	},


	dayTouchStart: function(ev) {
		var view = this.view;
		var selectLongPressDelay;

		// On iOS (and Android?) when a new selection is initiated overtop another selection,
		// the touchend never fires because the elements gets removed mid-touch-interaction (my theory).
		// HACK: simply don't allow this to happen.
		// ALSO: prevent selection when an *event* is already raised.
		if (view.isSelected || view.selectedEvent) {
			return;
		}

		selectLongPressDelay = this.opt('selectLongPressDelay');
		if (selectLongPressDelay == null) {
			selectLongPressDelay = this.opt('longPressDelay'); // fallback
		}

		this.dayClickListener.startInteraction(ev);

		if (this.opt('selectable')) {
			this.daySelectListener.startInteraction(ev, {
				delay: selectLongPressDelay
			});
		}
	},


	// Kills all in-progress dragging.
	// Useful for when public API methods that result in re-rendering are invoked during a drag.
	// Also useful for when touch devices misbehave and don't fire their touchend.
	clearDragListeners: function() {
		this.dayClickListener.endInteraction();
		this.daySelectListener.endInteraction();

		if (this.segDragListener) {
			this.segDragListener.endInteraction(); // will clear this.segDragListener
		}
		if (this.segResizeListener) {
			this.segResizeListener.endInteraction(); // will clear this.segResizeListener
		}
		if (this.externalDragListener) {
			this.externalDragListener.endInteraction(); // will clear this.externalDragListener
		}
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	// Renders an emphasis on the given date range. Given a span (unzoned start/end and other misc data)
	renderHighlight: function(componentFootprint) {
		this.renderFill('highlight', this.componentFootprintToSegs(componentFootprint));
	},


	// Unrenders the emphasis on a date range
	unrenderHighlight: function() {
		this.unrenderFill('highlight');
	},


	/* Converting eventRange -> eventFootprint
	------------------------------------------------------------------------------------------------------------------*/


	eventRangesToEventFootprints: function(eventRanges) {
		var eventFootprints = [];
		var i;

		for (i = 0; i < eventRanges.length; i++) {
			eventFootprints.push.apply(eventFootprints,
				this.eventRangeToEventFootprints(eventRanges[i])
			);
		}

		return eventFootprints;
	},


	// Given an event's unzoned date range, return an array of eventSpan objects.
	// eventSpan - { start, end, isStart, isEnd, otherthings... }
	// Subclasses can override.
	// Subclasses are obligated to forward eventRange.isStart/isEnd to the resulting spans.
	// TODO: somehow more DRY with Calendar::eventRangeToEventFootprints
	eventRangeToEventFootprints: function(eventRange) {
		return [
			new EventFootprint(
				new ComponentFootprint(
					eventRange.unzonedRange,
					eventRange.eventDef.isAllDay()
				),
				eventRange.eventDef,
				eventRange.eventInstance // might not exist
			)
		];
	},


	/* Converting componentFootprint/eventFootprint -> segs
	------------------------------------------------------------------------------------------------------------------*/


	eventFootprintsToSegs: function(eventFootprints) {
		var segs = [];
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			segs.push.apply(segs,
				this.eventFootprintToSegs(eventFootprints[i])
			);
		}

		return segs;
	},


	// Given an event's span (unzoned start/end and other misc data), and the event itself,
	// slices into segments and attaches event-derived properties to them.
	// eventSpan - { start, end, isStart, isEnd, otherthings... }
	// constraintRange allow additional clipping. optional. eventually remove this.
	eventFootprintToSegs: function(eventFootprint, constraintRange) {
		var unzonedRange = eventFootprint.componentFootprint.unzonedRange;
		var segs;
		var i, seg;

		if (constraintRange) {
			unzonedRange = unzonedRange.intersect(constraintRange);
		}

		segs = this.componentFootprintToSegs(eventFootprint.componentFootprint);

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			if (!unzonedRange.isStart) {
				seg.isStart = false;
			}
			if (!unzonedRange.isEnd) {
				seg.isEnd = false;
			}

			seg.footprint = eventFootprint;
			// TODO: rename to seg.eventFootprint
		}

		return segs;
	},


	componentFootprintToSegs: function(componentFootprint) {
		// subclasses must implement
	}

});

;;

Grid.mixin({

	// Creates a listener that tracks the user's drag across day elements, for day clicking.
	buildDayClickListener: function() {
		var _this = this;
		var dayClickHit; // null if invalid dayClick

		var dragListener = new HitDragListener(this, {
			scroll: this.opt('dragScroll'),
			interactionStart: function() {
				dayClickHit = dragListener.origHit;
			},
			hitOver: function(hit, isOrig, origHit) {
				// if user dragged to another cell at any point, it can no longer be a dayClick
				if (!isOrig) {
					dayClickHit = null;
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				dayClickHit = null;
			},
			interactionEnd: function(ev, isCancelled) {
				var componentFootprint;

				if (!isCancelled && dayClickHit) {
					componentFootprint = _this.getSafeHitFootprint(dayClickHit);

					if (componentFootprint) {
						_this.view.triggerDayClick(componentFootprint, _this.getHitEl(dayClickHit), ev);
					}
				}
			}
		});

		// because dayClickListener won't be called with any time delay, "dragging" will begin immediately,
		// which will kill any touchmoving/scrolling. Prevent this.
		dragListener.shouldCancelTouchScroll = false;

		dragListener.scrollAlwaysKills = true;

		return dragListener;
	}

});

;;

Grid.mixin({

	// Creates a listener that tracks the user's drag across day elements, for day selecting.
	buildDaySelectListener: function() {
		var _this = this;
		var selectionFootprint; // null if invalid selection

		var dragListener = new HitDragListener(this, {
			scroll: this.opt('dragScroll'),
			interactionStart: function() {
				selectionFootprint = null;
			},
			dragStart: function() {
				_this.view.unselect(); // since we could be rendering a new selection, we want to clear any old one
			},
			hitOver: function(hit, isOrig, origHit) {
				var origHitFootprint;
				var hitFootprint;

				if (origHit) { // click needs to have started on a hit

					origHitFootprint = _this.getSafeHitFootprint(origHit);
					hitFootprint = _this.getSafeHitFootprint(hit);

					if (origHitFootprint && hitFootprint) {
						selectionFootprint = _this.computeSelection(origHitFootprint, hitFootprint);
					}
					else {
						selectionFootprint = null;
					}

					if (selectionFootprint) {
						_this.renderSelectionFootprint(selectionFootprint);
					}
					else if (selectionFootprint === false) {
						disableCursor();
					}
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				selectionFootprint = null;
				_this.unrenderSelection();
			},
			hitDone: function() { // called after a hitOut OR before a dragEnd
				enableCursor();
			},
			interactionEnd: function(ev, isCancelled) {
				if (!isCancelled && selectionFootprint) {
					// the selection will already have been rendered. just report it
					_this.view.reportSelection(selectionFootprint, ev);
				}
			}
		});

		return dragListener;
	},


	// Renders a visual indication of a selection. Will highlight by default but can be overridden by subclasses.
	// Given a span (unzoned start/end and other misc data)
	renderSelectionFootprint: function(componentFootprint) {
		this.renderHighlight(componentFootprint);
	},


	// Unrenders any visual indications of a selection. Will unrender a highlight by default.
	unrenderSelection: function() {
		this.unrenderHighlight();
	},


	// Given the first and last date-spans of a selection, returns another date-span object.
	// Subclasses can override and provide additional data in the span object. Will be passed to renderSelectionFootprint().
	// Will return false if the selection is invalid and this should be indicated to the user.
	// Will return null/undefined if a selection invalid but no error should be reported.
	computeSelection: function(footprint0, footprint1) {
		var wholeFootprint = this.computeSelectionFootprint(footprint0, footprint1);

		if (wholeFootprint && !this.isSelectionFootprintAllowed(wholeFootprint)) {
			return false;
		}

		return wholeFootprint;
	},


	// Given two spans, must return the combination of the two.
	// TODO: do this separation of concerns (combining VS validation) for event dnd/resize too.
	// Assumes both footprints are non-open-ended.
	computeSelectionFootprint: function(footprint0, footprint1) {
		var ms = [
			footprint0.unzonedRange.startMs,
			footprint0.unzonedRange.endMs,
			footprint1.unzonedRange.startMs,
			footprint1.unzonedRange.endMs
		];

		ms.sort(compareNumbers);

		return new ComponentFootprint(
			new UnzonedRange(ms[0], ms[3]),
			footprint0.isAllDay
		);
	},


	isSelectionFootprintAllowed: function(componentFootprint) {
		return this.view.validUnzonedRange.containsRange(componentFootprint.unzonedRange) &&
			this.view.calendar.isSelectionFootprintAllowed(componentFootprint);
	}

});

;;

Grid.mixin({

	// Generates an array of classNames to be used for the rendering business hours overlay. Called by the fill system.
	// Called by fillSegHtml.
	businessHoursSegClasses: function(seg) {
		return [ 'fc-nonbusiness', 'fc-bgevent' ];
	},


	// Compute business hour segs for the grid's current date range.
	// Caller must ask if whole-day business hours are needed.
	buildBusinessHourSegs: function(wholeDay) {
		return this.eventFootprintsToSegs(
			this.buildBusinessHourEventFootprints(wholeDay)
		);
	},


	// Compute business hour *events* for the grid's current date range.
	// Caller must ask if whole-day business hours are needed.
	// FOR RENDERING
	buildBusinessHourEventFootprints: function(wholeDay) {
		var calendar = this.view.calendar;

		return this._buildBusinessHourEventFootprints(wholeDay, calendar.opt('businessHours'));
	},


	_buildBusinessHourEventFootprints: function(wholeDay, businessHourDef) {
		var calendar = this.view.calendar;
		var eventInstanceGroup;
		var eventRanges;

		eventInstanceGroup = calendar.buildBusinessInstanceGroup(
			wholeDay,
			businessHourDef,
			this.unzonedRange
		);

		if (eventInstanceGroup) {
			eventRanges = eventInstanceGroup.sliceRenderRanges(
				this.unzonedRange,
				calendar
			);
		}
		else {
			eventRanges = [];
		}

		return this.eventRangesToEventFootprints(eventRanges);
	}

});

;;

Grid.mixin({

	segs: null, // the *event* segments currently rendered in the grid. TODO: rename to `eventSegs`

	// derived from options
	// TODO: move initialization from Grid.js
	eventTimeFormat: null,
	displayEventTime: null,
	displayEventEnd: null,


	// Generates the format string used for event time text, if not explicitly defined by 'timeFormat'
	computeEventTimeFormat: function() {
		return this.opt('smallTimeFormat');
	},


	// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventTime'.
	// Only applies to non-all-day events.
	computeDisplayEventTime: function() {
		return true;
	},


	// Determines whether events should have their end times displayed, if not explicitly defined by 'displayEventEnd'
	computeDisplayEventEnd: function() {
		return true;
	},


	renderEventsPayload: function(eventsPayload) {
		var id, eventInstanceGroup;
		var eventRenderRanges;
		var eventFootprints;
		var eventSegs;
		var bgSegs = [];
		var fgSegs = [];

		for (id in eventsPayload) {
			eventInstanceGroup = eventsPayload[id];

			eventRenderRanges = eventInstanceGroup.sliceRenderRanges(this.view.activeUnzonedRange);
			eventFootprints = this.eventRangesToEventFootprints(eventRenderRanges);
			eventSegs = this.eventFootprintsToSegs(eventFootprints);

			if (eventInstanceGroup.getEventDef().hasBgRendering()) {
				bgSegs.push.apply(bgSegs, // append
					eventSegs
				);
			}
			else {
				fgSegs.push.apply(fgSegs, // append
					eventSegs
				);
			}
		}

		this.segs = [].concat( // record all segs
			this.renderBgSegs(bgSegs) || bgSegs,
			this.renderFgSegs(fgSegs) || fgSegs
		);
	},


	// Unrenders all events currently rendered on the grid
	unrenderEvents: function() {
		this.handleSegMouseout(); // trigger an eventMouseout if user's mouse is over an event
		this.clearDragListeners();

		this.unrenderFgSegs();
		this.unrenderBgSegs();

		this.segs = null;
	},


	// Retrieves all rendered segment objects currently rendered on the grid
	getEventSegs: function() {
		return this.segs || [];
	},


	// Background Segment Rendering
	// ---------------------------------------------------------------------------------------------------------------
	// TODO: move this to ChronoComponent, but without fill


	// Renders the given background event segments onto the grid.
	// Returns a subset of the segs that were actually rendered.
	renderBgSegs: function(segs) {
		return this.renderFill('bgEvent', segs);
	},


	// Unrenders all the currently rendered background event segments
	unrenderBgSegs: function() {
		this.unrenderFill('bgEvent');
	},


	// Renders a background event element, given the default rendering. Called by the fill system.
	bgEventSegEl: function(seg, el) {
		return this.filterEventRenderEl(seg.footprint, el);
	},


	// Generates an array of classNames to be used for the default rendering of a background event.
	// Called by fillSegHtml.
	bgEventSegClasses: function(seg) {
		var eventDef = seg.footprint.eventDef;

		return [ 'fc-bgevent' ].concat(
			eventDef.className,
			eventDef.source.className
		);
	},


	// Generates a semicolon-separated CSS string to be used for the default rendering of a background event.
	// Called by fillSegHtml.
	bgEventSegCss: function(seg) {
		return {
			'background-color': this.getSegSkinCss(seg)['background-color']
		};
	},


	/* Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Compute the text that should be displayed on an event's element.
	// `range` can be the Event object itself, or something range-like, with at least a `start`.
	// If event times are disabled, or the event has no time, will return a blank string.
	// If not specified, formatStr will default to the eventTimeFormat setting,
	// and displayEnd will default to the displayEventEnd setting.
	getEventTimeText: function(eventFootprint, formatStr, displayEnd) {
		return this._getEventTimeText(
			eventFootprint.eventInstance.dateProfile.start,
			eventFootprint.eventInstance.dateProfile.end,
			eventFootprint.componentFootprint.isAllDay,
			formatStr,
			displayEnd
		);
	},


	_getEventTimeText: function(start, end, isAllDay, formatStr, displayEnd) {

		if (formatStr == null) {
			formatStr = this.eventTimeFormat;
		}

		if (displayEnd == null) {
			displayEnd = this.displayEventEnd;
		}

		if (this.displayEventTime && !isAllDay) {
			if (displayEnd && end) {
				return this.view.formatRange(
					{ start: start, end: end },
					false, // allDay
					formatStr
				);
			}
			else {
				return start.format(formatStr);
			}
		}

		return '';
	},


	// Generic utility for generating the HTML classNames for an event segment's element
	getSegClasses: function(seg, isDraggable, isResizable) {
		var view = this.view;
		var classes = [
			'fc-event',
			seg.isStart ? 'fc-start' : 'fc-not-start',
			seg.isEnd ? 'fc-end' : 'fc-not-end'
		].concat(this.getSegCustomClasses(seg));

		if (isDraggable) {
			classes.push('fc-draggable');
		}
		if (isResizable) {
			classes.push('fc-resizable');
		}

		// event is currently selected? attach a className.
		if (view.isEventDefSelected(seg.footprint.eventDef)) {
			classes.push('fc-selected');
		}

		return classes;
	},


	// List of classes that were defined by the caller of the API in some way
	getSegCustomClasses: function(seg) {
		var eventDef = seg.footprint.eventDef;

		return [].concat(
			eventDef.className, // guaranteed to be an array
			eventDef.source.className
		);
	},


	// Utility for generating event skin-related CSS properties
	getSegSkinCss: function(seg) {
		return {
			'background-color': this.getSegBackgroundColor(seg),
			'border-color': this.getSegBorderColor(seg),
			color: this.getSegTextColor(seg)
		};
	},


	// Queries for caller-specified color, then falls back to default
	getSegBackgroundColor: function(seg) {
		var eventDef = seg.footprint.eventDef;

		return eventDef.backgroundColor ||
			eventDef.color ||
			this.getSegDefaultBackgroundColor(seg);
	},


	getSegDefaultBackgroundColor: function(seg) {
		var source = seg.footprint.eventDef.source;

		return source.backgroundColor ||
			source.color ||
			this.opt('eventBackgroundColor') ||
			this.opt('eventColor');
	},


	// Queries for caller-specified color, then falls back to default
	getSegBorderColor: function(seg) {
		var eventDef = seg.footprint.eventDef;

		return eventDef.borderColor ||
			eventDef.color ||
			this.getSegDefaultBorderColor(seg);
	},


	getSegDefaultBorderColor: function(seg) {
		var source = seg.footprint.eventDef.source;

		return source.borderColor ||
			source.color ||
			this.opt('eventBorderColor') ||
			this.opt('eventColor');
	},


	// Queries for caller-specified color, then falls back to default
	getSegTextColor: function(seg) {
		var eventDef = seg.footprint.eventDef;

		return eventDef.textColor ||
			this.getSegDefaultTextColor(seg);
	},


	getSegDefaultTextColor: function(seg) {
		var source = seg.footprint.eventDef.source;

		return source.textColor ||
			this.opt('eventTextColor');
	},


	sortEventSegs: function(segs) {
		segs.sort(proxy(this, 'compareEventSegs'));
	},


	// A cmp function for determining which segments should take visual priority
	compareEventSegs: function(seg1, seg2) {
		var f1 = seg1.footprint.componentFootprint;
		var r1 = f1.unzonedRange;
		var f2 = seg2.footprint.componentFootprint;
		var r2 = f2.unzonedRange;

		return r1.startMs - r2.startMs || // earlier events go first
			(r2.endMs - r2.startMs) - (r1.endMs - r1.startMs) || // tie? longer events go first
			f2.isAllDay - f1.isAllDay || // tie? put all-day events first (booleans cast to 0/1)
			compareByFieldSpecs(
				seg1.footprint.eventDef,
				seg2.footprint.eventDef,
				this.view.eventOrderSpecs
			);
	}

});

;;

/*
Contains:
- event clicking/mouseover/mouseout
- things that are common to event dragging AND resizing
- event helper rendering
*/
Grid.mixin({

	// self-config, overridable by subclasses
	segSelector: '.fc-event-container > *', // what constitutes an event element?

	mousedOverSeg: null, // the segment object the user's mouse is over. null if over nothing

	// if defined, holds the unit identified (ex: "year" or "month") that determines the level of granularity
	// of the date areas. if not defined, assumes to be day and time granularity.
	// TODO: port isTimeScale into same system?
	largeUnit: null,


	// Diffs the two dates, returning a duration, based on granularity of the grid
	// TODO: port isTimeScale into this system?
	diffDates: function(a, b) {
		if (this.largeUnit) {
			return diffByUnit(a, b, this.largeUnit);
		}
		else {
			return diffDayTime(a, b);
		}
	},


	// Attaches event-element-related handlers for *all* rendered event segments of the view.
	bindSegHandlers: function() {
		this.bindSegHandlersToEl(this.el);
	},


	// Attaches event-element-related handlers to an arbitrary container element. leverages bubbling.
	bindSegHandlersToEl: function(el) {
		this.bindSegHandlerToEl(el, 'touchstart', this.handleSegTouchStart);
		this.bindSegHandlerToEl(el, 'mouseenter', this.handleSegMouseover);
		this.bindSegHandlerToEl(el, 'mouseleave', this.handleSegMouseout);
		this.bindSegHandlerToEl(el, 'mousedown', this.handleSegMousedown);
		this.bindSegHandlerToEl(el, 'click', this.handleSegClick);
	},


	// Executes a handler for any a user-interaction on a segment.
	// Handler gets called with (seg, ev), and with the `this` context of the Grid
	bindSegHandlerToEl: function(el, name, handler) {
		var _this = this;

		el.on(name, this.segSelector, function(ev) {
			var seg = $(this).data('fc-seg'); // grab segment data. put there by View::renderEventsPayload

			// only call the handlers if there is not a drag/resize in progress
			if (seg && !_this.isDraggingSeg && !_this.isResizingSeg) {
				return handler.call(_this, seg, ev); // context will be the Grid
			}
		});
	},


	handleSegClick: function(seg, ev) {
		var res = this.publiclyTrigger('eventClick', { // can return `false` to cancel
			context: seg.el[0],
			args: [ seg.footprint.getEventLegacy(), ev, this.view ]
		});

		if (res === false) {
			ev.preventDefault();
		}
	},


	// Updates internal state and triggers handlers for when an event element is moused over
	handleSegMouseover: function(seg, ev) {
		if (
			!GlobalEmitter.get().shouldIgnoreMouse() &&
			!this.mousedOverSeg
		) {
			this.mousedOverSeg = seg;

			if (this.view.isEventDefResizable(seg.footprint.eventDef)) {
				seg.el.addClass('fc-allow-mouse-resize');
			}

			this.publiclyTrigger('eventMouseover', {
				context: seg.el[0],
				args: [ seg.footprint.getEventLegacy(), ev, this.view ]
			});
		}
	},


	// Updates internal state and triggers handlers for when an event element is moused out.
	// Can be given no arguments, in which case it will mouseout the segment that was previously moused over.
	handleSegMouseout: function(seg, ev) {
		ev = ev || {}; // if given no args, make a mock mouse event

		if (this.mousedOverSeg) {
			seg = seg || this.mousedOverSeg; // if given no args, use the currently moused-over segment
			this.mousedOverSeg = null;

			if (this.view.isEventDefResizable(seg.footprint.eventDef)) {
				seg.el.removeClass('fc-allow-mouse-resize');
			}

			this.publiclyTrigger('eventMouseout', {
				context: seg.el[0],
				args: [ seg.footprint.getEventLegacy(), ev, this.view ]
			});
		}
	},


	handleSegMousedown: function(seg, ev) {
		var isResizing = this.startSegResize(seg, ev, { distance: 5 });

		if (!isResizing && this.view.isEventDefDraggable(seg.footprint.eventDef)) {
			this.buildSegDragListener(seg)
				.startInteraction(ev, {
					distance: 5
				});
		}
	},


	handleSegTouchStart: function(seg, ev) {
		var view = this.view;
		var eventDef = seg.footprint.eventDef;
		var isSelected = view.isEventDefSelected(eventDef);
		var isDraggable = view.isEventDefDraggable(eventDef);
		var isResizable = view.isEventDefResizable(eventDef);
		var isResizing = false;
		var dragListener;
		var eventLongPressDelay;

		if (isSelected && isResizable) {
			// only allow resizing of the event is selected
			isResizing = this.startSegResize(seg, ev);
		}

		if (!isResizing && (isDraggable || isResizable)) { // allowed to be selected?

			eventLongPressDelay = this.opt('eventLongPressDelay');
			if (eventLongPressDelay == null) {
				eventLongPressDelay = this.opt('longPressDelay'); // fallback
			}

			dragListener = isDraggable ?
				this.buildSegDragListener(seg) :
				this.buildSegSelectListener(seg); // seg isn't draggable, but still needs to be selected

			dragListener.startInteraction(ev, { // won't start if already started
				delay: isSelected ? 0 : eventLongPressDelay // do delay if not already selected
			});
		}
	},


	// seg isn't draggable, but let's use a generic DragListener
	// simply for the delay, so it can be selected.
	// Has side effect of setting/unsetting `segDragListener`
	buildSegSelectListener: function(seg) {
		var _this = this;
		var view = this.view;
		var eventDef = seg.footprint.eventDef;
		var eventInstance = seg.footprint.eventInstance; // null for inverse-background events

		if (this.segDragListener) {
			return this.segDragListener;
		}

		var dragListener = this.segDragListener = new DragListener({
			dragStart: function(ev) {
				if (
					dragListener.isTouch &&
					!view.isEventDefSelected(eventDef) &&
					eventInstance
				) {
					// if not previously selected, will fire after a delay. then, select the event
					view.selectEventInstance(eventInstance);
				}
			},
			interactionEnd: function(ev) {
				_this.segDragListener = null;
			}
		});

		return dragListener;
	},


	// is it allowed, in relation to the view's validRange?
	// NOTE: very similar to isExternalInstanceGroupAllowed
	isEventInstanceGroupAllowed: function(eventInstanceGroup) {
		var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			// TODO: just use getAllEventRanges directly
			if (!this.view.validUnzonedRange.containsRange(eventFootprints[i].componentFootprint.unzonedRange)) {
				return false;
			}
		}

		return this.view.calendar.isEventInstanceGroupAllowed(eventInstanceGroup);
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: should probably move this to Grid.events, like we did event dragging / resizing


	renderHelperEventFootprints: function(eventFootprints, sourceSeg) {
		return this.renderHelperEventFootprintEls(eventFootprints, sourceSeg)
			.addClass('fc-helper');
	},


	renderHelperEventFootprintEls: function(eventFootprints, sourceSeg) {
		// Subclasses must implement.
		// Must return all mock event elements.
	},


	// Unrenders a mock event
	// TODO: have this in ChronoComponent
	unrenderHelper: function() {
		// subclasses must implement
	},


	fabricateEventFootprint: function(componentFootprint) {
		var calendar = this.view.calendar;
		var eventDateProfile = calendar.footprintToDateProfile(componentFootprint);
		var dummyEvent = new SingleEventDef(new EventSource(calendar));
		var dummyInstance;

		dummyEvent.dateProfile = eventDateProfile;
		dummyInstance = dummyEvent.buildInstance();

		return new EventFootprint(componentFootprint, dummyEvent, dummyInstance);
	}

});

;;

/*
Wired up via Grid.event-interation.js by calling
buildSegDragListener
*/
Grid.mixin({

	isDraggingSeg: false, // is a segment being dragged? boolean


	// Builds a listener that will track user-dragging on an event segment.
	// Generic enough to work with any type of Grid.
	// Has side effect of setting/unsetting `segDragListener`
	buildSegDragListener: function(seg) {
		var _this = this;
		var view = this.view;
		var calendar = view.calendar;
		var eventManager = calendar.eventManager;
		var el = seg.el;
		var eventDef = seg.footprint.eventDef;
		var eventInstance = seg.footprint.eventInstance; // null for inverse-background events
		var isDragging;
		var mouseFollower; // A clone of the original element that will move with the mouse
		var eventDefMutation;

		if (this.segDragListener) {
			return this.segDragListener;
		}

		// Tracks mouse movement over the *view's* coordinate map. Allows dragging and dropping between subcomponents
		// of the view.
		var dragListener = this.segDragListener = new HitDragListener(view, {
			scroll: this.opt('dragScroll'),
			subjectEl: el,
			subjectCenter: true,
			interactionStart: function(ev) {
				seg.component = _this; // for renderDrag
				isDragging = false;
				mouseFollower = new MouseFollower(seg.el, {
					additionalClass: 'fc-dragging',
					parentEl: view.el,
					opacity: dragListener.isTouch ? null : _this.opt('dragOpacity'),
					revertDuration: _this.opt('dragRevertDuration'),
					zIndex: 2 // one above the .fc-view
				});
				mouseFollower.hide(); // don't show until we know this is a real drag
				mouseFollower.start(ev);
			},
			dragStart: function(ev) {
				if (
					dragListener.isTouch &&
					!view.isEventDefSelected(eventDef) &&
					eventInstance
				) {
					// if not previously selected, will fire after a delay. then, select the event
					view.selectEventInstance(eventInstance);
				}
				isDragging = true;
				_this.handleSegMouseout(seg, ev); // ensure a mouseout on the manipulated event has been reported
				_this.segDragStart(seg, ev);
				view.hideEventsWithId(eventDef.id); // hide all event segments. our mouseFollower will take over
			},
			hitOver: function(hit, isOrig, origHit) {
				var isAllowed = true;
				var origFootprint;
				var footprint;
				var mutatedEventInstanceGroup;
				var dragHelperEls;

				// starting hit could be forced (DayGrid.limit)
				if (seg.hit) {
					origHit = seg.hit;
				}

				// hit might not belong to this grid, so query origin grid
				origFootprint = origHit.component.getSafeHitFootprint(origHit);
				footprint = hit.component.getSafeHitFootprint(hit);

				if (origFootprint && footprint) {
					eventDefMutation = _this.computeEventDropMutation(origFootprint, footprint, eventDef);

					if (eventDefMutation) {
						mutatedEventInstanceGroup = eventManager.buildMutatedEventInstanceGroup(
							eventDef.id,
							eventDefMutation
						);
						isAllowed = _this.isEventInstanceGroupAllowed(mutatedEventInstanceGroup);
					}
					else {
						isAllowed = false;
					}
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					eventDefMutation = null;
					disableCursor();
				}

				// if a valid drop location, have the subclass render a visual indication
				if (
					eventDefMutation &&
					(dragHelperEls = view.renderDrag(
						_this.eventRangesToEventFootprints(
							mutatedEventInstanceGroup.sliceRenderRanges(_this.unzonedRange, calendar)
						),
						seg
					))
				) {
					dragHelperEls.addClass('fc-dragging');
					if (!dragListener.isTouch) {
						_this.applyDragOpacity(dragHelperEls);
					}

					mouseFollower.hide(); // if the subclass is already using a mock event "helper", hide our own
				}
				else {
					mouseFollower.show(); // otherwise, have the helper follow the mouse (no snapping)
				}

				if (isOrig) {
					// needs to have moved hits to be a valid drop
					eventDefMutation = null;
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				view.unrenderDrag(); // unrender whatever was done in renderDrag
				mouseFollower.show(); // show in case we are moving out of all hits
				eventDefMutation = null;
			},
			hitDone: function() { // Called after a hitOut OR before a dragEnd
				enableCursor();
			},
			interactionEnd: function(ev) {
				delete seg.component; // prevent side effects

				// do revert animation if hasn't changed. calls a callback when finished (whether animation or not)
				mouseFollower.stop(!eventDefMutation, function() {
					if (isDragging) {
						view.unrenderDrag();
						_this.segDragStop(seg, ev);
					}

					if (eventDefMutation) {
						// no need to re-show original, will rerender all anyways. esp important if eventRenderWait
						view.reportEventDrop(eventInstance, eventDefMutation, el, ev);
					}
					else {
						view.showEventsWithId(eventDef.id);
					}
				});
				_this.segDragListener = null;
			}
		});

		return dragListener;
	},


	// Called before event segment dragging starts
	segDragStart: function(seg, ev) {
		this.isDraggingSeg = true;
		this.publiclyTrigger('eventDragStart', {
			context: seg.el[0],
			args: [
				seg.footprint.getEventLegacy(),
				ev,
				{}, // jqui dummy
				this.view
			]
		});
	},


	// Called after event segment dragging stops
	segDragStop: function(seg, ev) {
		this.isDraggingSeg = false;
		this.publiclyTrigger('eventDragStop', {
			context: seg.el[0],
			args: [
				seg.footprint.getEventLegacy(),
				ev,
				{}, // jqui dummy
				this.view
			]
		});
	},


	// DOES NOT consider overlap/constraint
	computeEventDropMutation: function(startFootprint, endFootprint, eventDef) {
		var date0 = startFootprint.unzonedRange.getStart();
		var date1 = endFootprint.unzonedRange.getStart();
		var clearEnd = false;
		var forceTimed = false;
		var forceAllDay = false;
		var dateDelta;
		var dateMutation;
		var eventDefMutation;

		if (startFootprint.isAllDay !== endFootprint.isAllDay) {
			clearEnd = true;

			if (endFootprint.isAllDay) {
				forceAllDay = true;
				date0.stripTime();
			}
			else {
				forceTimed = true;
			}
		}

		dateDelta = this.diffDates(date1, date0);

		dateMutation = new EventDefDateMutation();
		dateMutation.clearEnd = clearEnd;
		dateMutation.forceTimed = forceTimed;
		dateMutation.forceAllDay = forceAllDay;
		dateMutation.setDateDelta(dateDelta);

		eventDefMutation = new EventDefMutation();
		eventDefMutation.setDateMutation(dateMutation);

		return eventDefMutation;
	},


	// Utility for apply dragOpacity to a jQuery set
	applyDragOpacity: function(els) {
		var opacity = this.opt('dragOpacity');

		if (opacity != null) {
			els.css('opacity', opacity);
		}
	}

});

;;

/*
Wired up via Grid.event-interation.js by calling
startSegResize
*/
Grid.mixin({

	isResizingSeg: false, // is a segment being resized? boolean


	// returns boolean whether resizing actually started or not.
	// assumes the seg allows resizing.
	// `dragOptions` are optional.
	startSegResize: function(seg, ev, dragOptions) {
		if ($(ev.target).is('.fc-resizer')) {
			this.buildSegResizeListener(seg, $(ev.target).is('.fc-start-resizer'))
				.startInteraction(ev, dragOptions);
			return true;
		}
		return false;
	},


	// Creates a listener that tracks the user as they resize an event segment.
	// Generic enough to work with any type of Grid.
	buildSegResizeListener: function(seg, isStart) {
		var _this = this;
		var view = this.view;
		var calendar = view.calendar;
		var eventManager = calendar.eventManager;
		var el = seg.el;
		var eventDef = seg.footprint.eventDef;
		var eventInstance = seg.footprint.eventInstance;
		var isDragging;
		var resizeMutation; // zoned event date properties. falsy if invalid resize

		// Tracks mouse movement over the *grid's* coordinate map
		var dragListener = this.segResizeListener = new HitDragListener(this, {
			scroll: this.opt('dragScroll'),
			subjectEl: el,
			interactionStart: function() {
				isDragging = false;
			},
			dragStart: function(ev) {
				isDragging = true;
				_this.handleSegMouseout(seg, ev); // ensure a mouseout on the manipulated event has been reported
				_this.segResizeStart(seg, ev);
			},
			hitOver: function(hit, isOrig, origHit) {
				var isAllowed = true;
				var origHitFootprint = _this.getSafeHitFootprint(origHit);
				var hitFootprint = _this.getSafeHitFootprint(hit);
				var mutatedEventInstanceGroup;

				if (origHitFootprint && hitFootprint) {
					resizeMutation = isStart ?
						_this.computeEventStartResizeMutation(origHitFootprint, hitFootprint, seg.footprint) :
						_this.computeEventEndResizeMutation(origHitFootprint, hitFootprint, seg.footprint);

					if (resizeMutation) {
						mutatedEventInstanceGroup = eventManager.buildMutatedEventInstanceGroup(
							eventDef.id,
							resizeMutation
						);
						isAllowed = _this.isEventInstanceGroupAllowed(mutatedEventInstanceGroup);
					}
					else {
						isAllowed = false;
					}
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					resizeMutation = null;
					disableCursor();
				}
				else if (resizeMutation.isEmpty()) {
					// no change. (FYI, event dates might have zones)
					resizeMutation = null;
				}

				if (resizeMutation) {
					view.hideEventsWithId(eventDef.id);

					_this.renderEventResize(
						_this.eventRangesToEventFootprints(
							mutatedEventInstanceGroup.sliceRenderRanges(_this.unzonedRange, calendar)
						),
						seg
					);
				}
			},
			hitOut: function() { // called before mouse moves to a different hit OR moved out of all hits
				resizeMutation = null;
				view.showEventsWithId(eventDef.id); // for when out-of-bounds. show original
			},
			hitDone: function() { // resets the rendering to show the original event
				_this.unrenderEventResize();
				enableCursor();
			},
			interactionEnd: function(ev) {
				if (isDragging) {
					_this.segResizeStop(seg, ev);
				}

				if (resizeMutation) { // valid date to resize to?
					// no need to re-show original, will rerender all anyways. esp important if eventRenderWait
					view.reportEventResize(eventInstance, resizeMutation, el, ev);
				}
				else {
					view.showEventsWithId(eventDef.id);
				}
				_this.segResizeListener = null;
			}
		});

		return dragListener;
	},


	// Called before event segment resizing starts
	segResizeStart: function(seg, ev) {
		this.isResizingSeg = true;
		this.publiclyTrigger('eventResizeStart', {
			context: seg.el[0],
			args: [
				seg.footprint.getEventLegacy(),
				ev,
				{}, // jqui dummy
				this.view
			]
		});
	},


	// Called after event segment resizing stops
	segResizeStop: function(seg, ev) {
		this.isResizingSeg = false;
		this.publiclyTrigger('eventResizeStop', {
			context: seg.el[0],
			args: [
				seg.footprint.getEventLegacy(),
				ev,
				{}, // jqui dummy
				this.view
			]
		});
	},


	// Returns new date-information for an event segment being resized from its start
	computeEventStartResizeMutation: function(startFootprint, endFootprint, origEventFootprint) {
		var origRange = origEventFootprint.componentFootprint.unzonedRange;
		var startDelta = this.diffDates(
			endFootprint.unzonedRange.getStart(),
			startFootprint.unzonedRange.getStart()
		);
		var dateMutation;
		var eventDefMutation;

		if (origRange.getStart().add(startDelta) < origRange.getEnd()) {

			dateMutation = new EventDefDateMutation();
			dateMutation.setStartDelta(startDelta);

			eventDefMutation = new EventDefMutation();
			eventDefMutation.setDateMutation(dateMutation);

			return eventDefMutation;
		}

		return false;
	},


	// Returns new date-information for an event segment being resized from its end
	computeEventEndResizeMutation: function(startFootprint, endFootprint, origEventFootprint) {
		var origRange = origEventFootprint.componentFootprint.unzonedRange;
		var endDelta = this.diffDates(
			endFootprint.unzonedRange.getEnd(),
			startFootprint.unzonedRange.getEnd()
		);
		var dateMutation;
		var eventDefMutation;

		if (origRange.getEnd().add(endDelta) > origRange.getStart()) {

			dateMutation = new EventDefDateMutation();
			dateMutation.setEndDelta(endDelta);

			eventDefMutation = new EventDefMutation();
			eventDefMutation.setDateMutation(dateMutation);

			return eventDefMutation;
		}

		return false;
	},


	// Renders a visual indication of an event being resized.
	// Must return elements used for any mock events.
	renderEventResize: function(eventFootprints, seg) {
		// subclasses must implement
	},


	// Unrenders a visual indication of an event being resized.
	unrenderEventResize: function() {
		// subclasses must implement
	}

});

;;

/*
Wired up via Grid.js by calling
externalDragStart
*/
Grid.mixin({

	isDraggingExternal: false, // jqui-dragging an external element? boolean


	// Called when a jQuery UI drag is initiated anywhere in the DOM
	externalDragStart: function(ev, ui) {
		var el;
		var accept;

		if (this.opt('droppable')) { // only listen if this setting is on
			el = $((ui ? ui.item : null) || ev.target);

			// Test that the dragged element passes the dropAccept selector or filter function.
			// FYI, the default is "*" (matches all)
			accept = this.opt('dropAccept');
			if ($.isFunction(accept) ? accept.call(el[0], el) : el.is(accept)) {
				if (!this.isDraggingExternal) { // prevent double-listening if fired twice
					this.listenToExternalDrag(el, ev, ui);
				}
			}
		}
	},


	// Called when a jQuery UI drag starts and it needs to be monitored for dropping
	listenToExternalDrag: function(el, ev, ui) {
		var _this = this;
		var view = this.view;
		var meta = getDraggedElMeta(el); // extra data about event drop, including possible event to create
		var singleEventDef; // a null value signals an unsuccessful drag

		// listener that tracks mouse movement over date-associated pixel regions
		var dragListener = _this.externalDragListener = new HitDragListener(this, {
			interactionStart: function() {
				_this.isDraggingExternal = true;
			},
			hitOver: function(hit) {
				var isAllowed = true;
				var hitFootprint = hit.component.getSafeHitFootprint(hit); // hit might not belong to this grid
				var mutatedEventInstanceGroup;

				if (hitFootprint) {
					singleEventDef = _this.computeExternalDrop(hitFootprint, meta);

					if (singleEventDef) {
						mutatedEventInstanceGroup = new EventInstanceGroup(
							singleEventDef.buildInstances()
						);
						isAllowed = meta.eventProps ? // isEvent?
							_this.isEventInstanceGroupAllowed(mutatedEventInstanceGroup) :
							_this.isExternalInstanceGroupAllowed(mutatedEventInstanceGroup);
					}
					else {
						isAllowed = false;
					}
				}
				else {
					isAllowed = false;
				}

				if (!isAllowed) {
					singleEventDef = null;
					disableCursor();
				}

				if (singleEventDef) {
					_this.renderDrag( // called without a seg parameter
						_this.eventRangesToEventFootprints(
							mutatedEventInstanceGroup.sliceRenderRanges(_this.unzonedRange, view.calendar)
						)
					);
				}
			},
			hitOut: function() {
				singleEventDef = null; // signal unsuccessful
			},
			hitDone: function() { // Called after a hitOut OR before a dragEnd
				enableCursor();
				_this.unrenderDrag();
			},
			interactionEnd: function(ev) {

				if (singleEventDef) { // element was dropped on a valid hit
					view.reportExternalDrop(
						singleEventDef,
						Boolean(meta.eventProps), // isEvent
						Boolean(meta.stick), // isSticky
						el, ev, ui
					);
				}

				_this.isDraggingExternal = false;
				_this.externalDragListener = null;
			}
		});

		dragListener.startDrag(ev); // start listening immediately
	},


	// Given a hit to be dropped upon, and misc data associated with the jqui drag (guaranteed to be a plain object),
	// returns the zoned start/end dates for the event that would result from the hypothetical drop. end might be null.
	// Returning a null value signals an invalid drop hit.
	// DOES NOT consider overlap/constraint.
	// Assumes both footprints are non-open-ended.
	computeExternalDrop: function(componentFootprint, meta) {
		var calendar = this.view.calendar;
		var start = FC.moment.utc(componentFootprint.unzonedRange.startMs).stripZone();
		var end;
		var eventDef;

		if (componentFootprint.isAllDay) {
			// if dropped on an all-day span, and element's metadata specified a time, set it
			if (meta.startTime) {
				start.time(meta.startTime);
			}
			else {
				start.stripTime();
			}
		}

		if (meta.duration) {
			end = start.clone().add(meta.duration);
		}

		start = calendar.applyTimezone(start);

		if (end) {
			end = calendar.applyTimezone(end);
		}

		eventDef = SingleEventDef.parse(
			$.extend({}, meta.eventProps, {
				start: start,
				end: end
			}),
			new EventSource(calendar)
		);

		return eventDef;
	},


	// NOTE: very similar to isEventInstanceGroupAllowed
	// when it's a completely anonymous external drag, no event.
	isExternalInstanceGroupAllowed: function(eventInstanceGroup) {
		var calendar = this.view.calendar;
		var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			if (!this.view.validUnzonedRange.containsRange(eventFootprints[i].componentFootprint.unzonedRange)) {
				return false;
			}
		}

		for (i = 0; i < eventFootprints.length; i++) {
			// treat it as a selection
			// TODO: pass in eventInstanceGroup instead
			//  because we don't want calendar's constraint system to depend on a component's
			//  determination of footprints.
			if (!calendar.isSelectionFootprintAllowed(eventFootprints[i].componentFootprint)) {
				return false;
			}
		}

		return true;
	}

});


/* External-Dragging-Element Data
----------------------------------------------------------------------------------------------------------------------*/

// Require all HTML5 data-* attributes used by FullCalendar to have this prefix.
// A value of '' will query attributes like data-event. A value of 'fc' will query attributes like data-fc-event.
FC.dataAttrPrefix = '';

// Given a jQuery element that might represent a dragged FullCalendar event, returns an intermediate data structure
// to be used for Event Object creation.
// A defined `.eventProps`, even when empty, indicates that an event should be created.
function getDraggedElMeta(el) {
	var prefix = FC.dataAttrPrefix;
	var eventProps; // properties for creating the event, not related to date/time
	var startTime; // a Duration
	var duration;
	var stick;

	if (prefix) { prefix += '-'; }
	eventProps = el.data(prefix + 'event') || null;

	if (eventProps) {
		if (typeof eventProps === 'object') {
			eventProps = $.extend({}, eventProps); // make a copy
		}
		else { // something like 1 or true. still signal event creation
			eventProps = {};
		}

		// pluck special-cased date/time properties
		startTime = eventProps.start;
		if (startTime == null) { startTime = eventProps.time; } // accept 'time' as well
		duration = eventProps.duration;
		stick = eventProps.stick;
		delete eventProps.start;
		delete eventProps.time;
		delete eventProps.duration;
		delete eventProps.stick;
	}

	// fallback to standalone attribute values for each of the date/time properties
	if (startTime == null) { startTime = el.data(prefix + 'start'); }
	if (startTime == null) { startTime = el.data(prefix + 'time'); } // accept 'time' as well
	if (duration == null) { duration = el.data(prefix + 'duration'); }
	if (stick == null) { stick = el.data(prefix + 'stick'); }

	// massage into correct data types
	startTime = startTime != null ? moment.duration(startTime) : null;
	duration = duration != null ? moment.duration(duration) : null;
	stick = Boolean(stick);

	return { eventProps: eventProps, startTime: startTime, duration: duration, stick: stick };
}

;;

Grid.mixin({

	/* Fill System (highlight, background events, business hours)
	--------------------------------------------------------------------------------------------------------------------
	TODO: remove this system. like we did in TimeGrid
	*/


	elsByFill: null, // a hash of jQuery element sets used for rendering each fill. Keyed by fill name.


	initFillInternals: function() {
		this.elsByFill = {};
	},


	// Renders a set of rectangles over the given segments of time.
	// MUST RETURN a subset of segs, the segs that were actually rendered.
	// Responsible for populating this.elsByFill. TODO: better API for expressing this requirement
	renderFill: function(type, segs) {
		// subclasses must implement
	},


	// Unrenders a specific type of fill that is currently rendered on the grid
	unrenderFill: function(type) {
		var el = this.elsByFill[type];

		if (el) {
			el.remove();
			delete this.elsByFill[type];
		}
	},


	// Renders and assigns an `el` property for each fill segment. Generic enough to work with different types.
	// Only returns segments that successfully rendered.
	// To be harnessed by renderFill (implemented by subclasses).
	// Analagous to renderFgSegEls.
	renderFillSegEls: function(type, segs) {
		var _this = this;
		var segElMethod = this[type + 'SegEl'];
		var html = '';
		var renderedSegs = [];
		var i;

		if (segs.length) {

			// build a large concatenation of segment HTML
			for (i = 0; i < segs.length; i++) {
				html += this.fillSegHtml(type, segs[i]);
			}

			// Grab individual elements from the combined HTML string. Use each as the default rendering.
			// Then, compute the 'el' for each segment.
			$(html).each(function(i, node) {
				var seg = segs[i];
				var el = $(node);

				// allow custom filter methods per-type
				if (segElMethod) {
					el = segElMethod.call(_this, seg, el);
				}

				if (el) { // custom filters did not cancel the render
					el = $(el); // allow custom filter to return raw DOM node

					// correct element type? (would be bad if a non-TD were inserted into a table for example)
					if (el.is(_this.fillSegTag)) {
						seg.el = el;
						renderedSegs.push(seg);
					}
				}
			});
		}

		return renderedSegs;
	},


	fillSegTag: 'div', // subclasses can override


	// Builds the HTML needed for one fill segment. Generic enough to work with different types.
	fillSegHtml: function(type, seg) {

		// custom hooks per-type
		var classesMethod = this[type + 'SegClasses'];
		var cssMethod = this[type + 'SegCss'];

		var classes = classesMethod ? classesMethod.call(this, seg) : [];
		var css = cssToStr(cssMethod ? cssMethod.call(this, seg) : {});

		return '<' + this.fillSegTag +
			(classes.length ? ' class="' + classes.join(' ') + '"' : '') +
			(css ? ' style="' + css + '"' : '') +
			' />';
	},


	// Generates an array of classNames for rendering the highlight. Used by the fill system.
	highlightSegClasses: function() {
		return [ 'fc-highlight' ];
	}

});

;;

/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
var DayTableMixin = FC.DayTableMixin = {

	breakOnWeeks: false, // should create a new row for each week?
	dayDates: null, // whole-day dates for each column. left to right
	dayIndices: null, // for each day from start, the offset
	daysPerRow: null,
	rowCnt: null,
	colCnt: null,
	colHeadFormat: null,


	// Populates internal variables used for date calculation and rendering
	updateDayTable: function() {
		var view = this.view;
		var calendar = view.calendar;
		var date = calendar.msToUtcMoment(this.unzonedRange.startMs, true);
		var end = calendar.msToUtcMoment(this.unzonedRange.endMs, true);
		var dayIndex = -1;
		var dayIndices = [];
		var dayDates = [];
		var daysPerRow;
		var firstDay;
		var rowCnt;

		while (date.isBefore(end)) { // loop each day from start to end
			if (view.isHiddenDay(date)) {
				dayIndices.push(dayIndex + 0.5); // mark that it's between indices
			}
			else {
				dayIndex++;
				dayIndices.push(dayIndex);
				dayDates.push(date.clone());
			}
			date.add(1, 'days');
		}

		if (this.breakOnWeeks) {
			// count columns until the day-of-week repeats
			firstDay = dayDates[0].day();
			for (daysPerRow = 1; daysPerRow < dayDates.length; daysPerRow++) {
				if (dayDates[daysPerRow].day() == firstDay) {
					break;
				}
			}
			rowCnt = Math.ceil(dayDates.length / daysPerRow);
		}
		else {
			rowCnt = 1;
			daysPerRow = dayDates.length;
		}

		this.dayDates = dayDates;
		this.dayIndices = dayIndices;
		this.daysPerRow = daysPerRow;
		this.rowCnt = rowCnt;

		this.updateDayTableCols();
	},


	// Computes and assigned the colCnt property and updates any options that may be computed from it
	updateDayTableCols: function() {
		this.colCnt = this.computeColCnt();
		this.colHeadFormat = this.opt('columnFormat') || this.computeColHeadFormat();
	},


	// Determines how many columns there should be in the table
	computeColCnt: function() {
		return this.daysPerRow;
	},


	// Computes the ambiguously-timed moment for the given cell
	getCellDate: function(row, col) {
		return this.dayDates[
				this.getCellDayIndex(row, col)
			].clone();
	},


	// Computes the ambiguously-timed date range for the given cell
	getCellRange: function(row, col) {
		var start = this.getCellDate(row, col);
		var end = start.clone().add(1, 'days');

		return { start: start, end: end };
	},


	// Returns the number of day cells, chronologically, from the first of the grid (0-based)
	getCellDayIndex: function(row, col) {
		return row * this.daysPerRow + this.getColDayIndex(col);
	},


	// Returns the numner of day cells, chronologically, from the first cell in *any given row*
	getColDayIndex: function(col) {
		if (this.isRTL) {
			return this.colCnt - 1 - col;
		}
		else {
			return col;
		}
	},


	// Given a date, returns its chronolocial cell-index from the first cell of the grid.
	// If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
	// If before the first offset, returns a negative number.
	// If after the last offset, returns an offset past the last cell offset.
	// Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
	getDateDayIndex: function(date) {
		var dayIndices = this.dayIndices;
		var dayOffset = date.diff(this.dayDates[0], 'days');

		if (dayOffset < 0) {
			return dayIndices[0] - 1;
		}
		else if (dayOffset >= dayIndices.length) {
			return dayIndices[dayIndices.length - 1] + 1;
		}
		else {
			return dayIndices[dayOffset];
		}
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Computes a default column header formatting string if `colFormat` is not explicitly defined
	computeColHeadFormat: function() {
		// if more than one week row, or if there are a lot of columns with not much space,
		// put just the day numbers will be in each cell
		if (this.rowCnt > 1 || this.colCnt > 10) {
			return 'ddd'; // "Sat"
		}
		// multiple days, so full single date string WON'T be in title text
		else if (this.colCnt > 1) {
			return this.opt('dayOfMonthFormat'); // "Sat 12/10"
		}
		// single day, so full single date string will probably be in title text
		else {
			return 'dddd'; // "Saturday"
		}
	},


	/* Slicing
	------------------------------------------------------------------------------------------------------------------*/


	// Slices up a date range into a segment for every week-row it intersects with
	sliceRangeByRow: function(unzonedRange) {
		var daysPerRow = this.daysPerRow;
		var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
		var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
		var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
		var segs = [];
		var row;
		var rowFirst, rowLast; // inclusive day-index range for current row
		var segFirst, segLast; // inclusive day-index range for segment

		for (row = 0; row < this.rowCnt; row++) {
			rowFirst = row * daysPerRow;
			rowLast = rowFirst + daysPerRow - 1;

			// intersect segment's offset range with the row's
			segFirst = Math.max(rangeFirst, rowFirst);
			segLast = Math.min(rangeLast, rowLast);

			// deal with in-between indices
			segFirst = Math.ceil(segFirst); // in-between starts round to next cell
			segLast = Math.floor(segLast); // in-between ends round to prev cell

			if (segFirst <= segLast) { // was there any intersection with the current row?
				segs.push({
					row: row,

					// normalize to start of row
					firstRowDayIndex: segFirst - rowFirst,
					lastRowDayIndex: segLast - rowFirst,

					// must be matching integers to be the segment's start/end
					isStart: segFirst === rangeFirst,
					isEnd: segLast === rangeLast
				});
			}
		}

		return segs;
	},


	// Slices up a date range into a segment for every day-cell it intersects with.
	// TODO: make more DRY with sliceRangeByRow somehow.
	sliceRangeByDay: function(unzonedRange) {
		var daysPerRow = this.daysPerRow;
		var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
		var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
		var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
		var segs = [];
		var row;
		var rowFirst, rowLast; // inclusive day-index range for current row
		var i;
		var segFirst, segLast; // inclusive day-index range for segment

		for (row = 0; row < this.rowCnt; row++) {
			rowFirst = row * daysPerRow;
			rowLast = rowFirst + daysPerRow - 1;

			for (i = rowFirst; i <= rowLast; i++) {

				// intersect segment's offset range with the row's
				segFirst = Math.max(rangeFirst, i);
				segLast = Math.min(rangeLast, i);

				// deal with in-between indices
				segFirst = Math.ceil(segFirst); // in-between starts round to next cell
				segLast = Math.floor(segLast); // in-between ends round to prev cell

				if (segFirst <= segLast) { // was there any intersection with the current row?
					segs.push({
						row: row,

						// normalize to start of row
						firstRowDayIndex: segFirst - rowFirst,
						lastRowDayIndex: segLast - rowFirst,

						// must be matching integers to be the segment's start/end
						isStart: segFirst === rangeFirst,
						isEnd: segLast === rangeLast
					});
				}
			}
		}

		return segs;
	},


	/* Header Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderHeadHtml: function() {
		var theme = this.view.calendar.theme;

		return '' +
			'<div class="fc-row ' + theme.getClass('headerRow') + '">' +
				'<table class="' + theme.getClass('tableGrid') + '">' +
					'<thead>' +
						this.renderHeadTrHtml() +
					'</thead>' +
				'</table>' +
			'</div>';
	},


	renderHeadIntroHtml: function() {
		return this.renderIntroHtml(); // fall back to generic
	},


	renderHeadTrHtml: function() {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderHeadIntroHtml()) +
				this.renderHeadDateCellsHtml() +
				(this.isRTL ? this.renderHeadIntroHtml() : '') +
			'</tr>';
	},


	renderHeadDateCellsHtml: function() {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(0, col);
			htmls.push(this.renderHeadDateCellHtml(date));
		}

		return htmls.join('');
	},


	// TODO: when internalApiVersion, accept an object for HTML attributes
	// (colspan should be no different)
	renderHeadDateCellHtml: function(date, colspan, otherAttrs) {
		var view = this.view;
		var isDateValid = view.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
		var classNames = [
			'fc-day-header',
			view.calendar.theme.getClass('widgetHeader')
		];
		var innerHtml = htmlEscape(date.format(this.colHeadFormat));

		// if only one row of days, the classNames on the header can represent the specific days beneath
		if (this.rowCnt === 1) {
			classNames = classNames.concat(
				// includes the day-of-week class
				// noThemeHighlight=true (don't highlight the header)
				this.getDayClasses(date, true)
			);
		}
		else {
			classNames.push('fc-' + dayIDs[date.day()]); // only add the day-of-week class
		}

		return '' +
            '<th class="' + classNames.join(' ') + '"' +
				((isDateValid && this.rowCnt) === 1 ?
					' data-date="' + date.format('YYYY-MM-DD') + '"' :
					'') +
				(colspan > 1 ?
					' colspan="' + colspan + '"' :
					'') +
				(otherAttrs ?
					' ' + otherAttrs :
					'') +
				'>' +
				(isDateValid ?
					// don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
					view.buildGotoAnchorHtml(
						{ date: date, forceOff: this.rowCnt > 1 || this.colCnt === 1 },
						innerHtml
					) :
					// if not valid, display text, but no link
					innerHtml
				) +
			'</th>';
	},


	/* Background Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderBgTrHtml: function(row) {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderBgIntroHtml(row)) +
				this.renderBgCellsHtml(row) +
				(this.isRTL ? this.renderBgIntroHtml(row) : '') +
			'</tr>';
	},


	renderBgIntroHtml: function(row) {
		return this.renderIntroHtml(); // fall back to generic
	},


	renderBgCellsHtml: function(row) {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(row, col);
			htmls.push(this.renderBgCellHtml(date));
		}

		return htmls.join('');
	},


	renderBgCellHtml: function(date, otherAttrs) {
		var view = this.view;
		var isDateValid = view.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
		var classes = this.getDayClasses(date);

		classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'));

		return '<td class="' + classes.join(' ') + '"' +
			(isDateValid ?
				' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
				'') +
			(otherAttrs ?
				' ' + otherAttrs :
				'') +
			'></td>';
	},


	/* Generic
	------------------------------------------------------------------------------------------------------------------*/


	// Generates the default HTML intro for any row. User classes should override
	renderIntroHtml: function() {
	},


	// TODO: a generic method for dealing with <tr>, RTL, intro
	// when increment internalApiVersion
	// wrapTr (scheduler)


	/* Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Applies the generic "intro" and "outro" HTML to the given cells.
	// Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
	bookendCells: function(trEl) {
		var introHtml = this.renderIntroHtml();

		if (introHtml) {
			if (this.isRTL) {
				trEl.append(introHtml);
			}
			else {
				trEl.prepend(introHtml);
			}
		}
	}

};

;;

/* A component that renders a grid of whole-days that runs horizontally. There can be multiple rows, one per week.
----------------------------------------------------------------------------------------------------------------------*/

var DayGrid = FC.DayGrid = Grid.extend(DayTableMixin, {

	numbersVisible: false, // should render a row for day/week numbers? set by outside view. TODO: make internal
	bottomCoordPadding: 0, // hack for extending the hit area for the last row of the coordinate grid

	rowEls: null, // set of fake row elements
	cellEls: null, // set of whole-day elements comprising the row's background
	helperEls: null, // set of cell skeleton elements for rendering the mock event "helper"

	rowCoordCache: null,
	colCoordCache: null,


	// Renders the rows and columns into the component's `this.el`, which should already be assigned.
	// isRigid determins whether the individual rows should ignore the contents and be a constant height.
	// Relies on the view's colCnt and rowCnt. In the future, this component should probably be self-sufficient.
	renderDates: function(isRigid) {
		var view = this.view;
		var rowCnt = this.rowCnt;
		var colCnt = this.colCnt;
		var html = '';
		var row;
		var col;

		for (row = 0; row < rowCnt; row++) {
			html += this.renderDayRowHtml(row, isRigid);
		}
		this.el.html(html);

		this.rowEls = this.el.find('.fc-row');
		this.cellEls = this.el.find('.fc-day, .fc-disabled-day');

		this.rowCoordCache = new CoordCache({
			els: this.rowEls,
			isVertical: true
		});
		this.colCoordCache = new CoordCache({
			els: this.cellEls.slice(0, this.colCnt), // only the first row
			isHorizontal: true
		});

		// trigger dayRender with each cell's element
		for (row = 0; row < rowCnt; row++) {
			for (col = 0; col < colCnt; col++) {
				this.publiclyTrigger('dayRender', {
					context: view,
					args: [
						this.getCellDate(row, col),
						this.getCellEl(row, col),
						view
					]
				});
			}
		}
	},


	unrenderDates: function() {
		this.removeSegPopover();
	},


	renderBusinessHours: function() {
		var segs = this.buildBusinessHourSegs(true); // wholeDay=true
		this.renderFill('businessHours', segs, 'bgevent');
	},


	unrenderBusinessHours: function() {
		this.unrenderFill('businessHours');
	},


	// Generates the HTML for a single row, which is a div that wraps a table.
	// `row` is the row number.
	renderDayRowHtml: function(row, isRigid) {
		var theme = this.view.calendar.theme;
		var classes = [ 'fc-row', 'fc-week', theme.getClass('dayRow') ];

		if (isRigid) {
			classes.push('fc-rigid');
		}

		return '' +
			'<div class="' + classes.join(' ') + '">' +
				'<div class="fc-bg">' +
					'<table class="' + theme.getClass('tableGrid') + '">' +
						this.renderBgTrHtml(row) +
					'</table>' +
				'</div>' +
				'<div class="fc-content-skeleton">' +
					'<table>' +
						(this.numbersVisible ?
							'<thead>' +
								this.renderNumberTrHtml(row) +
							'</thead>' :
							''
							) +
					'</table>' +
				'</div>' +
			'</div>';
	},


	/* Grid Number Rendering
	------------------------------------------------------------------------------------------------------------------*/


	renderNumberTrHtml: function(row) {
		return '' +
			'<tr>' +
				(this.isRTL ? '' : this.renderNumberIntroHtml(row)) +
				this.renderNumberCellsHtml(row) +
				(this.isRTL ? this.renderNumberIntroHtml(row) : '') +
			'</tr>';
	},


	renderNumberIntroHtml: function(row) {
		return this.renderIntroHtml();
	},


	renderNumberCellsHtml: function(row) {
		var htmls = [];
		var col, date;

		for (col = 0; col < this.colCnt; col++) {
			date = this.getCellDate(row, col);
			htmls.push(this.renderNumberCellHtml(date));
		}

		return htmls.join('');
	},


	// Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
	// The number row will only exist if either day numbers or week numbers are turned on.
	renderNumberCellHtml: function(date) {
		var view = this.view;
		var html = '';
		var isDateValid = view.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
		var isDayNumberVisible = view.dayNumbersVisible && isDateValid;
		var classes;
		var weekCalcFirstDoW;

		if (!isDayNumberVisible && !view.cellWeekNumbersVisible) {
			// no numbers in day cell (week number must be along the side)
			return '<td/>'; //  will create an empty space above events :(
		}

		classes = this.getDayClasses(date);
		classes.unshift('fc-day-top');

		if (view.cellWeekNumbersVisible) {
			// To determine the day of week number change under ISO, we cannot
			// rely on moment.js methods such as firstDayOfWeek() or weekday(),
			// because they rely on the locale's dow (possibly overridden by
			// our firstDay option), which may not be Monday. We cannot change
			// dow, because that would affect the calendar start day as well.
			if (date._locale._fullCalendar_weekCalc === 'ISO') {
				weekCalcFirstDoW = 1;  // Monday by ISO 8601 definition
			}
			else {
				weekCalcFirstDoW = date._locale.firstDayOfWeek();
			}
		}

		html += '<td class="' + classes.join(' ') + '"' +
			(isDateValid ?
				' data-date="' + date.format() + '"' :
				''
				) +
			'>';

		if (view.cellWeekNumbersVisible && (date.day() == weekCalcFirstDoW)) {
			html += view.buildGotoAnchorHtml(
				{ date: date, type: 'week' },
				{ 'class': 'fc-week-number' },
				date.format('w') // inner HTML
			);
		}

		if (isDayNumberVisible) {
			html += view.buildGotoAnchorHtml(
				date,
				{ 'class': 'fc-day-number' },
				date.date() // inner HTML
			);
		}

		html += '</td>';

		return html;
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Computes a default event time formatting string if `timeFormat` is not explicitly defined
	computeEventTimeFormat: function() {
		return this.opt('extraSmallTimeFormat'); // like "6p" or "6:30p"
	},


	// Computes a default `displayEventEnd` value if one is not expliclty defined
	computeDisplayEventEnd: function() {
		return this.colCnt == 1; // we'll likely have space if there's only one day
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	rangeUpdated: function() {
		this.updateDayTable();
	},


	// Slices up the given span (unzoned start/end with other misc data) into an array of segments
	componentFootprintToSegs: function(componentFootprint) {
		var segs = this.sliceRangeByRow(componentFootprint.unzonedRange);
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			if (this.isRTL) {
				seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex;
				seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex;
			}
			else {
				seg.leftCol = seg.firstRowDayIndex;
				seg.rightCol = seg.lastRowDayIndex;
			}
		}

		return segs;
	},


	/* Hit System
	------------------------------------------------------------------------------------------------------------------*/


	prepareHits: function() {
		this.colCoordCache.build();
		this.rowCoordCache.build();
		this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding; // hack
	},


	releaseHits: function() {
		this.colCoordCache.clear();
		this.rowCoordCache.clear();
	},


	queryHit: function(leftOffset, topOffset) {
		if (this.colCoordCache.isLeftInBounds(leftOffset) && this.rowCoordCache.isTopInBounds(topOffset)) {
			var col = this.colCoordCache.getHorizontalIndex(leftOffset);
			var row = this.rowCoordCache.getVerticalIndex(topOffset);

			if (row != null && col != null) {
				return this.getCellHit(row, col);
			}
		}
	},


	getHitFootprint: function(hit) {
		var range = this.getCellRange(hit.row, hit.col);

		return new ComponentFootprint(
			new UnzonedRange(range.start, range.end),
			true // all-day?
		);
	},


	getHitEl: function(hit) {
		return this.getCellEl(hit.row, hit.col);
	},


	/* Cell System
	------------------------------------------------------------------------------------------------------------------*/
	// FYI: the first column is the leftmost column, regardless of date


	getCellHit: function(row, col) {
		return {
			row: row,
			col: col,
			component: this, // needed unfortunately :(
			left: this.colCoordCache.getLeftOffset(col),
			right: this.colCoordCache.getRightOffset(col),
			top: this.rowCoordCache.getTopOffset(row),
			bottom: this.rowCoordCache.getBottomOffset(row)
		};
	},


	getCellEl: function(row, col) {
		return this.cellEls.eq(row * this.colCnt + col);
	},


	/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: move to DayGrid.event, similar to what we did with Grid's drag methods


	// Renders a visual indication of an event or external element being dragged.
	// `eventLocation` has zoned start and end (optional)
	renderDrag: function(eventFootprints, seg) {
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			this.renderHighlight(eventFootprints[i].componentFootprint);
		}

		// if a segment from the same calendar but another component is being dragged, render a helper event
		if (seg && seg.component !== this) {
			return this.renderHelperEventFootprints(eventFootprints, seg); // returns mock event elements
		}
	},


	// Unrenders any visual indication of a hovering event
	unrenderDrag: function() {
		this.unrenderHighlight();
		this.unrenderHelper();
	},


	/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being resized
	renderEventResize: function(eventFootprints, seg) {
		var i;

		for (i = 0; i < eventFootprints.length; i++) {
			this.renderHighlight(eventFootprints[i].componentFootprint);
		}

		return this.renderHelperEventFootprints(eventFootprints, seg); // returns mock event elements
	},


	// Unrenders a visual indication of an event being resized
	unrenderEventResize: function() {
		this.unrenderHighlight();
		this.unrenderHelper();
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a mock "helper" event. `sourceSeg` is the associated internal segment object. It can be null.
	renderHelperEventFootprintEls: function(eventFootprints, sourceSeg) {
		var helperNodes = [];
		var segs = this.eventFootprintsToSegs(eventFootprints);
		var rowStructs;

		segs = this.renderFgSegEls(segs); // assigns each seg's el and returns a subset of segs that were rendered
		rowStructs = this.renderSegRows(segs);

		// inject each new event skeleton into each associated row
		this.rowEls.each(function(row, rowNode) {
			var rowEl = $(rowNode); // the .fc-row
			var skeletonEl = $('<div class="fc-helper-skeleton"><table/></div>'); // will be absolutely positioned
			var skeletonTop;

			// If there is an original segment, match the top position. Otherwise, put it at the row's top level
			if (sourceSeg && sourceSeg.row === row) {
				skeletonTop = sourceSeg.el.position().top;
			}
			else {
				skeletonTop = rowEl.find('.fc-content-skeleton tbody').position().top;
			}

			skeletonEl.css('top', skeletonTop)
				.find('table')
					.append(rowStructs[row].tbodyEl);

			rowEl.append(skeletonEl);
			helperNodes.push(skeletonEl[0]);
		});

		return ( // must return the elements rendered
			this.helperEls = $(helperNodes) // array -> jQuery set
		);
	},


	// Unrenders any visual indication of a mock helper event
	unrenderHelper: function() {
		if (this.helperEls) {
			this.helperEls.remove();
			this.helperEls = null;
		}
	},


	/* Fill System (highlight, background events, business hours)
	------------------------------------------------------------------------------------------------------------------*/


	fillSegTag: 'td', // override the default tag name


	// Renders a set of rectangles over the given segments of days.
	// Only returns segments that successfully rendered.
	renderFill: function(type, segs, className) {
		var nodes = [];
		var i, seg;
		var skeletonEl;

		segs = this.renderFillSegEls(type, segs); // assignes `.el` to each seg. returns successfully rendered segs

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			skeletonEl = this.renderFillRow(type, seg, className);
			this.rowEls.eq(seg.row).append(skeletonEl);
			nodes.push(skeletonEl[0]);
		}

		if (this.elsByFill[type]) {
			this.elsByFill[type] = this.elsByFill[type].add(nodes);
		}
		else {
			this.elsByFill[type] = $(nodes);
		}

		return segs;
	},


	// Generates the HTML needed for one row of a fill. Requires the seg's el to be rendered.
	renderFillRow: function(type, seg, className) {
		var colCnt = this.colCnt;
		var startCol = seg.leftCol;
		var endCol = seg.rightCol + 1;
		var skeletonEl;
		var trEl;

		className = className || type.toLowerCase();

		skeletonEl = $(
			'<div class="fc-' + className + '-skeleton">' +
				'<table><tr/></table>' +
			'</div>'
		);
		trEl = skeletonEl.find('tr');

		if (startCol > 0) {
			trEl.append('<td colspan="' + startCol + '"/>');
		}

		trEl.append(
			seg.el.attr('colspan', endCol - startCol)
		);

		if (endCol < colCnt) {
			trEl.append('<td colspan="' + (colCnt - endCol) + '"/>');
		}

		this.bookendCells(trEl);

		return skeletonEl;
	}

});

;;

/* Event-rendering methods for the DayGrid class
----------------------------------------------------------------------------------------------------------------------*/

DayGrid.mixin({

	rowStructs: null, // an array of objects, each holding information about a row's foreground event-rendering


	// Unrenders all events currently rendered on the grid
	unrenderEvents: function() {
		this.removeSegPopover(); // removes the "more.." events popover
		Grid.prototype.unrenderEvents.apply(this, arguments); // calls the super-method
	},


	// Retrieves all rendered segment objects currently rendered on the grid
	getEventSegs: function() {
		return Grid.prototype.getEventSegs.call(this) // get the segments from the super-method
			.concat(this.popoverSegs || []); // append the segments from the "more..." popover
	},


	// Renders the given background event segments onto the grid
	renderBgSegs: function(segs) {

		// don't render timed background events
		var allDaySegs = $.grep(segs, function(seg) {
			return seg.footprint.componentFootprint.isAllDay;
		});

		return Grid.prototype.renderBgSegs.call(this, allDaySegs); // call the super-method
	},


	// Renders the given foreground event segments onto the grid
	renderFgSegs: function(segs) {
		var rowStructs;

		// render an `.el` on each seg
		// returns a subset of the segs. segs that were actually rendered
		segs = this.renderFgSegEls(segs);

		rowStructs = this.rowStructs = this.renderSegRows(segs);

		// append to each row's content skeleton
		this.rowEls.each(function(i, rowNode) {
			$(rowNode).find('.fc-content-skeleton > table').append(
				rowStructs[i].tbodyEl
			);
		});

		return segs; // return only the segs that were actually rendered
	},


	// Unrenders all currently rendered foreground event segments
	unrenderFgSegs: function() {
		var rowStructs = this.rowStructs || [];
		var rowStruct;

		while ((rowStruct = rowStructs.pop())) {
			rowStruct.tbodyEl.remove();
		}

		this.rowStructs = null;
	},


	// Uses the given events array to generate <tbody> elements that should be appended to each row's content skeleton.
	// Returns an array of rowStruct objects (see the bottom of `renderSegRow`).
	// PRECONDITION: each segment shoud already have a rendered and assigned `.el`
	renderSegRows: function(segs) {
		var rowStructs = [];
		var segRows;
		var row;

		segRows = this.groupSegRows(segs); // group into nested arrays

		// iterate each row of segment groupings
		for (row = 0; row < segRows.length; row++) {
			rowStructs.push(
				this.renderSegRow(row, segRows[row])
			);
		}

		return rowStructs;
	},


	// Builds the HTML to be used for the default element for an individual segment
	fgSegHtml: function(seg, disableResizing) {
		var view = this.view;
		var eventDef = seg.footprint.eventDef;
		var isAllDay = seg.footprint.componentFootprint.isAllDay;
		var isDraggable = view.isEventDefDraggable(eventDef);
		var isResizableFromStart = !disableResizing && isAllDay &&
			seg.isStart && view.isEventDefResizableFromStart(eventDef);
		var isResizableFromEnd = !disableResizing && isAllDay &&
			seg.isEnd && view.isEventDefResizableFromEnd(eventDef);
		var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
		var skinCss = cssToStr(this.getSegSkinCss(seg));
		var timeHtml = '';
		var timeText;
		var titleHtml;

		classes.unshift('fc-day-grid-event', 'fc-h-event');

		// Only display a timed events time if it is the starting segment
		if (seg.isStart) {
			timeText = this.getEventTimeText(seg.footprint);
			if (timeText) {
				timeHtml = '<span class="fc-time">' + htmlEscape(timeText) + '</span>';
			}
		}

		titleHtml =
			'<span class="fc-title">' +
				(htmlEscape(eventDef.title || '') || '&nbsp;') + // we always want one line of height
			'</span>';
		
		return '<a class="' + classes.join(' ') + '"' +
				(eventDef.url ?
					' href="' + htmlEscape(eventDef.url) + '"' :
					''
					) +
				(skinCss ?
					' style="' + skinCss + '"' :
					''
					) +
			'>' +
				'<div class="fc-content">' +
					(this.isRTL ?
						titleHtml + ' ' + timeHtml : // put a natural space in between
						timeHtml + ' ' + titleHtml   //
						) +
				'</div>' +
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				(isResizableFromEnd ?
					'<div class="fc-resizer fc-end-resizer" />' :
					''
					) +
			'</a>';
	},


	// Given a row # and an array of segments all in the same row, render a <tbody> element, a skeleton that contains
	// the segments. Returns object with a bunch of internal data about how the render was calculated.
	// NOTE: modifies rowSegs
	renderSegRow: function(row, rowSegs) {
		var colCnt = this.colCnt;
		var segLevels = this.buildSegLevels(rowSegs); // group into sub-arrays of levels
		var levelCnt = Math.max(1, segLevels.length); // ensure at least one level
		var tbody = $('<tbody/>');
		var segMatrix = []; // lookup for which segments are rendered into which level+col cells
		var cellMatrix = []; // lookup for all <td> elements of the level+col matrix
		var loneCellMatrix = []; // lookup for <td> elements that only take up a single column
		var i, levelSegs;
		var col;
		var tr;
		var j, seg;
		var td;

		// populates empty cells from the current column (`col`) to `endCol`
		function emptyCellsUntil(endCol) {
			while (col < endCol) {
				// try to grab a cell from the level above and extend its rowspan. otherwise, create a fresh cell
				td = (loneCellMatrix[i - 1] || [])[col];
				if (td) {
					td.attr(
						'rowspan',
						parseInt(td.attr('rowspan') || 1, 10) + 1
					);
				}
				else {
					td = $('<td/>');
					tr.append(td);
				}
				cellMatrix[i][col] = td;
				loneCellMatrix[i][col] = td;
				col++;
			}
		}

		for (i = 0; i < levelCnt; i++) { // iterate through all levels
			levelSegs = segLevels[i];
			col = 0;
			tr = $('<tr/>');

			segMatrix.push([]);
			cellMatrix.push([]);
			loneCellMatrix.push([]);

			// levelCnt might be 1 even though there are no actual levels. protect against this.
			// this single empty row is useful for styling.
			if (levelSegs) {
				for (j = 0; j < levelSegs.length; j++) { // iterate through segments in level
					seg = levelSegs[j];

					emptyCellsUntil(seg.leftCol);

					// create a container that occupies or more columns. append the event element.
					td = $('<td class="fc-event-container"/>').append(seg.el);
					if (seg.leftCol != seg.rightCol) {
						td.attr('colspan', seg.rightCol - seg.leftCol + 1);
					}
					else { // a single-column segment
						loneCellMatrix[i][col] = td;
					}

					while (col <= seg.rightCol) {
						cellMatrix[i][col] = td;
						segMatrix[i][col] = seg;
						col++;
					}

					tr.append(td);
				}
			}

			emptyCellsUntil(colCnt); // finish off the row
			this.bookendCells(tr);
			tbody.append(tr);
		}

		return { // a "rowStruct"
			row: row, // the row number
			tbodyEl: tbody,
			cellMatrix: cellMatrix,
			segMatrix: segMatrix,
			segLevels: segLevels,
			segs: rowSegs
		};
	},


	// Stacks a flat array of segments, which are all assumed to be in the same row, into subarrays of vertical levels.
	// NOTE: modifies segs
	buildSegLevels: function(segs) {
		var levels = [];
		var i, seg;
		var j;

		// Give preference to elements with certain criteria, so they have
		// a chance to be closer to the top.
		this.sortEventSegs(segs);
		
		for (i = 0; i < segs.length; i++) {
			seg = segs[i];

			// loop through levels, starting with the topmost, until the segment doesn't collide with other segments
			for (j = 0; j < levels.length; j++) {
				if (!isDaySegCollision(seg, levels[j])) {
					break;
				}
			}
			// `j` now holds the desired subrow index
			seg.level = j;

			// create new level array if needed and append segment
			(levels[j] || (levels[j] = [])).push(seg);
		}

		// order segments left-to-right. very important if calendar is RTL
		for (j = 0; j < levels.length; j++) {
			levels[j].sort(compareDaySegCols);
		}

		return levels;
	},


	// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's row
	groupSegRows: function(segs) {
		var segRows = [];
		var i;

		for (i = 0; i < this.rowCnt; i++) {
			segRows.push([]);
		}

		for (i = 0; i < segs.length; i++) {
			segRows[segs[i].row].push(segs[i]);
		}

		return segRows;
	}

});


// Computes whether two segments' columns collide. They are assumed to be in the same row.
function isDaySegCollision(seg, otherSegs) {
	var i, otherSeg;

	for (i = 0; i < otherSegs.length; i++) {
		otherSeg = otherSegs[i];

		if (
			otherSeg.leftCol <= seg.rightCol &&
			otherSeg.rightCol >= seg.leftCol
		) {
			return true;
		}
	}

	return false;
}


// A cmp function for determining the leftmost event
function compareDaySegCols(a, b) {
	return a.leftCol - b.leftCol;
}

;;

/* Methods relate to limiting the number events for a given day on a DayGrid
----------------------------------------------------------------------------------------------------------------------*/
// NOTE: all the segs being passed around in here are foreground segs

DayGrid.mixin({

	segPopover: null, // the Popover that holds events that can't fit in a cell. null when not visible
	popoverSegs: null, // an array of segment objects that the segPopover holds. null when not visible


	removeSegPopover: function() {
		if (this.segPopover) {
			this.segPopover.hide(); // in handler, will call segPopover's removeElement
		}
	},


	// Limits the number of "levels" (vertically stacking layers of events) for each row of the grid.
	// `levelLimit` can be false (don't limit), a number, or true (should be computed).
	limitRows: function(levelLimit) {
		var rowStructs = this.rowStructs || [];
		var row; // row #
		var rowLevelLimit;

		for (row = 0; row < rowStructs.length; row++) {
			this.unlimitRow(row);

			if (!levelLimit) {
				rowLevelLimit = false;
			}
			else if (typeof levelLimit === 'number') {
				rowLevelLimit = levelLimit;
			}
			else {
				rowLevelLimit = this.computeRowLevelLimit(row);
			}

			if (rowLevelLimit !== false) {
				this.limitRow(row, rowLevelLimit);
			}
		}
	},


	// Computes the number of levels a row will accomodate without going outside its bounds.
	// Assumes the row is "rigid" (maintains a constant height regardless of what is inside).
	// `row` is the row number.
	computeRowLevelLimit: function(row) {
		var rowEl = this.rowEls.eq(row); // the containing "fake" row div
		var rowHeight = rowEl.height(); // TODO: cache somehow?
		var trEls = this.rowStructs[row].tbodyEl.children();
		var i, trEl;
		var trHeight;

		function iterInnerHeights(i, childNode) {
			trHeight = Math.max(trHeight, $(childNode).outerHeight());
		}

		// Reveal one level <tr> at a time and stop when we find one out of bounds
		for (i = 0; i < trEls.length; i++) {
			trEl = trEls.eq(i).removeClass('fc-limited'); // reset to original state (reveal)

			// with rowspans>1 and IE8, trEl.outerHeight() would return the height of the largest cell,
			// so instead, find the tallest inner content element.
			trHeight = 0;
			trEl.find('> td > :first-child').each(iterInnerHeights);

			if (trEl.position().top + trHeight > rowHeight) {
				return i;
			}
		}

		return false; // should not limit at all
	},


	// Limits the given grid row to the maximum number of levels and injects "more" links if necessary.
	// `row` is the row number.
	// `levelLimit` is a number for the maximum (inclusive) number of levels allowed.
	limitRow: function(row, levelLimit) {
		var _this = this;
		var rowStruct = this.rowStructs[row];
		var moreNodes = []; // array of "more" <a> links and <td> DOM nodes
		var col = 0; // col #, left-to-right (not chronologically)
		var levelSegs; // array of segment objects in the last allowable level, ordered left-to-right
		var cellMatrix; // a matrix (by level, then column) of all <td> jQuery elements in the row
		var limitedNodes; // array of temporarily hidden level <tr> and segment <td> DOM nodes
		var i, seg;
		var segsBelow; // array of segment objects below `seg` in the current `col`
		var totalSegsBelow; // total number of segments below `seg` in any of the columns `seg` occupies
		var colSegsBelow; // array of segment arrays, below seg, one for each column (offset from segs's first column)
		var td, rowspan;
		var segMoreNodes; // array of "more" <td> cells that will stand-in for the current seg's cell
		var j;
		var moreTd, moreWrap, moreLink;

		// Iterates through empty level cells and places "more" links inside if need be
		function emptyCellsUntil(endCol) { // goes from current `col` to `endCol`
			while (col < endCol) {
				segsBelow = _this.getCellSegs(row, col, levelLimit);
				if (segsBelow.length) {
					td = cellMatrix[levelLimit - 1][col];
					moreLink = _this.renderMoreLink(row, col, segsBelow);
					moreWrap = $('<div/>').append(moreLink);
					td.append(moreWrap);
					moreNodes.push(moreWrap[0]);
				}
				col++;
			}
		}

		if (levelLimit && levelLimit < rowStruct.segLevels.length) { // is it actually over the limit?
			levelSegs = rowStruct.segLevels[levelLimit - 1];
			cellMatrix = rowStruct.cellMatrix;

			limitedNodes = rowStruct.tbodyEl.children().slice(levelLimit) // get level <tr> elements past the limit
				.addClass('fc-limited').get(); // hide elements and get a simple DOM-nodes array

			// iterate though segments in the last allowable level
			for (i = 0; i < levelSegs.length; i++) {
				seg = levelSegs[i];
				emptyCellsUntil(seg.leftCol); // process empty cells before the segment

				// determine *all* segments below `seg` that occupy the same columns
				colSegsBelow = [];
				totalSegsBelow = 0;
				while (col <= seg.rightCol) {
					segsBelow = this.getCellSegs(row, col, levelLimit);
					colSegsBelow.push(segsBelow);
					totalSegsBelow += segsBelow.length;
					col++;
				}

				if (totalSegsBelow) { // do we need to replace this segment with one or many "more" links?
					td = cellMatrix[levelLimit - 1][seg.leftCol]; // the segment's parent cell
					rowspan = td.attr('rowspan') || 1;
					segMoreNodes = [];

					// make a replacement <td> for each column the segment occupies. will be one for each colspan
					for (j = 0; j < colSegsBelow.length; j++) {
						moreTd = $('<td class="fc-more-cell"/>').attr('rowspan', rowspan);
						segsBelow = colSegsBelow[j];
						moreLink = this.renderMoreLink(
							row,
							seg.leftCol + j,
							[ seg ].concat(segsBelow) // count seg as hidden too
						);
						moreWrap = $('<div/>').append(moreLink);
						moreTd.append(moreWrap);
						segMoreNodes.push(moreTd[0]);
						moreNodes.push(moreTd[0]);
					}

					td.addClass('fc-limited').after($(segMoreNodes)); // hide original <td> and inject replacements
					limitedNodes.push(td[0]);
				}
			}

			emptyCellsUntil(this.colCnt); // finish off the level
			rowStruct.moreEls = $(moreNodes); // for easy undoing later
			rowStruct.limitedEls = $(limitedNodes); // for easy undoing later
		}
	},


	// Reveals all levels and removes all "more"-related elements for a grid's row.
	// `row` is a row number.
	unlimitRow: function(row) {
		var rowStruct = this.rowStructs[row];

		if (rowStruct.moreEls) {
			rowStruct.moreEls.remove();
			rowStruct.moreEls = null;
		}

		if (rowStruct.limitedEls) {
			rowStruct.limitedEls.removeClass('fc-limited');
			rowStruct.limitedEls = null;
		}
	},


	// Renders an <a> element that represents hidden event element for a cell.
	// Responsible for attaching click handler as well.
	renderMoreLink: function(row, col, hiddenSegs) {
		var _this = this;
		var view = this.view;

		return $('<a class="fc-more"/>')
			.text(
				this.getMoreLinkText(hiddenSegs.length)
			)
			.on('click', function(ev) {
				var clickOption = _this.opt('eventLimitClick');
				var date = _this.getCellDate(row, col);
				var moreEl = $(this);
				var dayEl = _this.getCellEl(row, col);
				var allSegs = _this.getCellSegs(row, col);

				// rescope the segments to be within the cell's date
				var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
				var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);

				if (typeof clickOption === 'function') {
					// the returned value can be an atomic option
					clickOption = _this.publiclyTrigger('eventLimitClick', {
						context: view,
						args: [
							{
								date: date.clone(),
								dayEl: dayEl,
								moreEl: moreEl,
								segs: reslicedAllSegs,
								hiddenSegs: reslicedHiddenSegs
							},
							ev,
							view
						]
					});
				}

				if (clickOption === 'popover') {
					_this.showSegPopover(row, col, moreEl, reslicedAllSegs);
				}
				else if (typeof clickOption === 'string') { // a view name
					view.calendar.zoomTo(date, clickOption);
				}
			});
	},


	// Reveals the popover that displays all events within a cell
	showSegPopover: function(row, col, moreLink, segs) {
		var _this = this;
		var view = this.view;
		var moreWrap = moreLink.parent(); // the <div> wrapper around the <a>
		var topEl; // the element we want to match the top coordinate of
		var options;

		if (this.rowCnt == 1) {
			topEl = view.el; // will cause the popover to cover any sort of header
		}
		else {
			topEl = this.rowEls.eq(row); // will align with top of row
		}

		options = {
			className: 'fc-more-popover ' + view.calendar.theme.getClass('popover'),
			content: this.renderSegPopoverContent(row, col, segs),
			parentEl: view.el, // attach to root of view. guarantees outside of scrollbars.
			top: topEl.offset().top,
			autoHide: true, // when the user clicks elsewhere, hide the popover
			viewportConstrain: this.opt('popoverViewportConstrain'),
			hide: function() {
				// kill everything when the popover is hidden
				// notify events to be removed
				if (_this.popoverSegs) {
					var seg;
					var legacy;
					var i;

					for (i = 0; i < _this.popoverSegs.length; ++i) {
						seg = _this.popoverSegs[i];
						legacy = seg.footprint.getEventLegacy();

						_this.publiclyTrigger('eventDestroy', {
							context: legacy,
							args: [ legacy, seg.el, view ]
						});
					}
				}
				_this.segPopover.removeElement();
				_this.segPopover = null;
				_this.popoverSegs = null;
			}
		};

		// Determine horizontal coordinate.
		// We use the moreWrap instead of the <td> to avoid border confusion.
		if (this.isRTL) {
			options.right = moreWrap.offset().left + moreWrap.outerWidth() + 1; // +1 to be over cell border
		}
		else {
			options.left = moreWrap.offset().left - 1; // -1 to be over cell border
		}

		this.segPopover = new Popover(options);
		this.segPopover.show();

		// the popover doesn't live within the grid's container element, and thus won't get the event
		// delegated-handlers for free. attach event-related handlers to the popover.
		this.bindSegHandlersToEl(this.segPopover.el);
	},


	// Builds the inner DOM contents of the segment popover
	renderSegPopoverContent: function(row, col, segs) {
		var view = this.view;
		var theme = view.calendar.theme;
		var title = this.getCellDate(row, col).format(this.opt('dayPopoverFormat'));
		var content = $(
			'<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
				'<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
				'<span class="fc-title">' +
					htmlEscape(title) +
				'</span>' +
				'<div class="fc-clear"/>' +
			'</div>' +
			'<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
				'<div class="fc-event-container"></div>' +
			'</div>'
		);
		var segContainer = content.find('.fc-event-container');
		var i;

		// render each seg's `el` and only return the visible segs
		segs = this.renderFgSegEls(segs, true); // disableResizing=true
		this.popoverSegs = segs;

		for (i = 0; i < segs.length; i++) {

			// because segments in the popover are not part of a grid coordinate system, provide a hint to any
			// grids that want to do drag-n-drop about which cell it came from
			this.hitsNeeded();
			segs[i].hit = this.getCellHit(row, col);
			this.hitsNotNeeded();

			segContainer.append(segs[i].el);
		}

		return content;
	},


	// Given the events within an array of segment objects, reslice them to be in a single day
	resliceDaySegs: function(segs, dayDate) {
		var dayStart = dayDate.clone();
		var dayEnd = dayStart.clone().add(1, 'days');
		var dayRange = new UnzonedRange(dayStart, dayEnd);
		var newSegs = [];
		var i;

		for (i = 0; i < segs.length; i++) {
			newSegs.push.apply(newSegs, // append
				this.eventFootprintToSegs(segs[i].footprint, dayRange)
			);
		}

		// force an order because eventsToSegs doesn't guarantee one
		// TODO: research if still needed
		this.sortEventSegs(newSegs);

		return newSegs;
	},


	// Generates the text that should be inside a "more" link, given the number of events it represents
	getMoreLinkText: function(num) {
		var opt = this.opt('eventLimitText');

		if (typeof opt === 'function') {
			return opt(num);
		}
		else {
			return '+' + num + ' ' + opt;
		}
	},


	// Returns segments within a given cell.
	// If `startLevel` is specified, returns only events including and below that level. Otherwise returns all segs.
	getCellSegs: function(row, col, startLevel) {
		var segMatrix = this.rowStructs[row].segMatrix;
		var level = startLevel || 0;
		var segs = [];
		var seg;

		while (level < segMatrix.length) {
			seg = segMatrix[level][col];
			if (seg) {
				segs.push(seg);
			}
			level++;
		}

		return segs;
	}

});

;;

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
// We mixin DayTable, even though there is only a single row of days

var TimeGrid = FC.TimeGrid = Grid.extend(DayTableMixin, {

	dayRanges: null, // UnzonedRange[], of start-end of each day
	slotDuration: null, // duration of a "slot", a distinct time segment on given day, visualized by lines
	snapDuration: null, // granularity of time for dragging and selecting
	snapsPerSlot: null,
	labelFormat: null, // formatting string for times running along vertical axis
	labelInterval: null, // duration of how often a label should be displayed for a slot

	colEls: null, // cells elements in the day-row background
	slatContainerEl: null, // div that wraps all the slat rows
	slatEls: null, // elements running horizontally across all columns
	nowIndicatorEls: null,

	colCoordCache: null,
	slatCoordCache: null,


	constructor: function() {
		Grid.apply(this, arguments); // call the super-constructor

		this.processOptions();
	},


	// Renders the time grid into `this.el`, which should already be assigned.
	// Relies on the view's colCnt. In the future, this component should probably be self-sufficient.
	renderDates: function() {
		this.el.html(this.renderHtml());
		this.colEls = this.el.find('.fc-day, .fc-disabled-day');
		this.slatContainerEl = this.el.find('.fc-slats');
		this.slatEls = this.slatContainerEl.find('tr');

		this.colCoordCache = new CoordCache({
			els: this.colEls,
			isHorizontal: true
		});
		this.slatCoordCache = new CoordCache({
			els: this.slatEls,
			isVertical: true
		});

		this.renderContentSkeleton();
	},


	// Renders the basic HTML skeleton for the grid
	renderHtml: function() {
		var theme = this.view.calendar.theme;

		return '' +
			'<div class="fc-bg">' +
				'<table class="' + theme.getClass('tableGrid') + '">' +
					this.renderBgTrHtml(0) + // row=0
				'</table>' +
			'</div>' +
			'<div class="fc-slats">' +
				'<table class="' + theme.getClass('tableGrid') + '">' +
					this.renderSlatRowHtml() +
				'</table>' +
			'</div>';
	},


	// Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
	renderSlatRowHtml: function() {
		var view = this.view;
		var calendar = view.calendar;
		var theme = calendar.theme;
		var isRTL = this.isRTL;
		var html = '';
		var slotTime = moment.duration(+this.view.minTime); // wish there was .clone() for durations
		var slotIterator = moment.duration(0);
		var slotDate; // will be on the view's first day, but we only care about its time
		var isLabeled;
		var axisHtml;

		// Calculate the time for each slot
		while (slotTime < view.maxTime) {
			slotDate = calendar.msToUtcMoment(this.unzonedRange.startMs).time(slotTime);
			isLabeled = isInt(divideDurationByDuration(slotIterator, this.labelInterval));

			axisHtml =
				'<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '>' +
					(isLabeled ?
						'<span>' + // for matchCellWidths
							htmlEscape(slotDate.format(this.labelFormat)) +
						'</span>' :
						''
						) +
				'</td>';

			html +=
				'<tr data-time="' + slotDate.format('HH:mm:ss') + '"' +
					(isLabeled ? '' : ' class="fc-minor"') +
					'>' +
					(!isRTL ? axisHtml : '') +
					'<td class="' + theme.getClass('widgetContent') + '"/>' +
					(isRTL ? axisHtml : '') +
				"</tr>";

			slotTime.add(this.slotDuration);
			slotIterator.add(this.slotDuration);
		}

		return html;
	},


	/* Options
	------------------------------------------------------------------------------------------------------------------*/


	// Parses various options into properties of this object
	processOptions: function() {
		var slotDuration = this.opt('slotDuration');
		var snapDuration = this.opt('snapDuration');
		var input;

		slotDuration = moment.duration(slotDuration);
		snapDuration = snapDuration ? moment.duration(snapDuration) : slotDuration;

		this.slotDuration = slotDuration;
		this.snapDuration = snapDuration;
		this.snapsPerSlot = slotDuration / snapDuration; // TODO: ensure an integer multiple?

		// might be an array value (for TimelineView).
		// if so, getting the most granular entry (the last one probably).
		input = this.opt('slotLabelFormat');
		if ($.isArray(input)) {
			input = input[input.length - 1];
		}

		this.labelFormat = input ||
			this.opt('smallTimeFormat'); // the computed default

		input = this.opt('slotLabelInterval');
		this.labelInterval = input ?
			moment.duration(input) :
			this.computeLabelInterval(slotDuration);
	},


	// Computes an automatic value for slotLabelInterval
	computeLabelInterval: function(slotDuration) {
		var i;
		var labelInterval;
		var slotsPerLabel;

		// find the smallest stock label interval that results in more than one slots-per-label
		for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
			labelInterval = moment.duration(AGENDA_STOCK_SUB_DURATIONS[i]);
			slotsPerLabel = divideDurationByDuration(labelInterval, slotDuration);
			if (isInt(slotsPerLabel) && slotsPerLabel > 1) {
				return labelInterval;
			}
		}

		return moment.duration(slotDuration); // fall back. clone
	},


	// Computes a default event time formatting string if `timeFormat` is not explicitly defined
	computeEventTimeFormat: function() {
		return this.opt('noMeridiemTimeFormat'); // like "6:30" (no AM/PM)
	},


	// Computes a default `displayEventEnd` value if one is not expliclty defined
	computeDisplayEventEnd: function() {
		return true;
	},


	/* Hit System
	------------------------------------------------------------------------------------------------------------------*/


	prepareHits: function() {
		this.colCoordCache.build();
		this.slatCoordCache.build();
	},


	releaseHits: function() {
		this.colCoordCache.clear();
		// NOTE: don't clear slatCoordCache because we rely on it for computeTimeTop
	},


	queryHit: function(leftOffset, topOffset) {
		var snapsPerSlot = this.snapsPerSlot;
		var colCoordCache = this.colCoordCache;
		var slatCoordCache = this.slatCoordCache;

		if (colCoordCache.isLeftInBounds(leftOffset) && slatCoordCache.isTopInBounds(topOffset)) {
			var colIndex = colCoordCache.getHorizontalIndex(leftOffset);
			var slatIndex = slatCoordCache.getVerticalIndex(topOffset);

			if (colIndex != null && slatIndex != null) {
				var slatTop = slatCoordCache.getTopOffset(slatIndex);
				var slatHeight = slatCoordCache.getHeight(slatIndex);
				var partial = (topOffset - slatTop) / slatHeight; // floating point number between 0 and 1
				var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
				var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
				var snapTop = slatTop + (localSnapIndex / snapsPerSlot) * slatHeight;
				var snapBottom = slatTop + ((localSnapIndex + 1) / snapsPerSlot) * slatHeight;

				return {
					col: colIndex,
					snap: snapIndex,
					component: this, // needed unfortunately :(
					left: colCoordCache.getLeftOffset(colIndex),
					right: colCoordCache.getRightOffset(colIndex),
					top: snapTop,
					bottom: snapBottom
				};
			}
		}
	},


	getHitFootprint: function(hit) {
		var start = this.getCellDate(0, hit.col); // row=0
		var time = this.computeSnapTime(hit.snap); // pass in the snap-index
		var end;

		start.time(time);
		end = start.clone().add(this.snapDuration);

		return new ComponentFootprint(
			new UnzonedRange(start, end),
			false // all-day?
		);
	},


	getHitEl: function(hit) {
		return this.colEls.eq(hit.col);
	},


	/* Dates
	------------------------------------------------------------------------------------------------------------------*/


	rangeUpdated: function() {
		var view = this.view;

		this.updateDayTable();

		this.dayRanges = this.dayDates.map(function(dayDate) {
			return new UnzonedRange(
				dayDate.clone().add(view.minTime),
				dayDate.clone().add(view.maxTime)
			);
		});
	},


	// Given a row number of the grid, representing a "snap", returns a time (Duration) from its start-of-day
	computeSnapTime: function(snapIndex) {
		return moment.duration(this.view.minTime + this.snapDuration * snapIndex);
	},


	// Slices up the given span (unzoned start/end with other misc data) into an array of segments
	componentFootprintToSegs: function(componentFootprint) {
		var segs = this.sliceRangeByTimes(componentFootprint.unzonedRange);
		var i;

		for (i = 0; i < segs.length; i++) {
			if (this.isRTL) {
				segs[i].col = this.daysPerRow - 1 - segs[i].dayIndex;
			}
			else {
				segs[i].col = segs[i].dayIndex;
			}
		}

		return segs;
	},


	sliceRangeByTimes: function(unzonedRange) {
		var segs = [];
		var segRange;
		var dayIndex;

		for (dayIndex = 0; dayIndex < this.daysPerRow; dayIndex++) {

			segRange = unzonedRange.intersect(this.dayRanges[dayIndex]);

			if (segRange) {
				segs.push({
					startMs: segRange.startMs,
					endMs: segRange.endMs,
					isStart: segRange.isStart,
					isEnd: segRange.isEnd,
					dayIndex: dayIndex
				});
			}
		}

		return segs;
	},


	/* Coordinates
	------------------------------------------------------------------------------------------------------------------*/


	updateSize: function(isResize) { // NOT a standard Grid method
		this.slatCoordCache.build();

		if (isResize) {
			this.updateSegVerticals(
				[].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || [])
			);
		}
	},


	getTotalSlatHeight: function() {
		return this.slatContainerEl.outerHeight();
	},


	// Computes the top coordinate, relative to the bounds of the grid, of the given date.
	// `ms` can be a millisecond UTC time OR a UTC moment.
	// A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
	computeDateTop: function(ms, startOfDayDate) {
		return this.computeTimeTop(
			moment.duration(
				ms - startOfDayDate.clone().stripTime()
			)
		);
	},


	// Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
	computeTimeTop: function(time) {
		var len = this.slatEls.length;
		var slatCoverage = (time - this.view.minTime) / this.slotDuration; // floating-point value of # of slots covered
		var slatIndex;
		var slatRemainder;

		// compute a floating-point number for how many slats should be progressed through.
		// from 0 to number of slats (inclusive)
		// constrained because minTime/maxTime might be customized.
		slatCoverage = Math.max(0, slatCoverage);
		slatCoverage = Math.min(len, slatCoverage);

		// an integer index of the furthest whole slat
		// from 0 to number slats (*exclusive*, so len-1)
		slatIndex = Math.floor(slatCoverage);
		slatIndex = Math.min(slatIndex, len - 1);

		// how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
		// could be 1.0 if slatCoverage is covering *all* the slots
		slatRemainder = slatCoverage - slatIndex;

		return this.slatCoordCache.getTopPosition(slatIndex) +
			this.slatCoordCache.getHeight(slatIndex) * slatRemainder;
	},



	/* Event Drag Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being dragged over the specified date(s).
	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(eventFootprints, seg) {
		var i;

		if (seg) { // if there is event information for this drag, render a helper event

			// returns mock event elements
			// signal that a helper has been rendered
			return this.renderHelperEventFootprints(eventFootprints);
		}
		else { // otherwise, just render a highlight

			for (i = 0; i < eventFootprints.length; i++) {
				this.renderHighlight(eventFootprints[i].componentFootprint);
			}
		}
	},


	// Unrenders any visual indication of an event being dragged
	unrenderDrag: function() {
		this.unrenderHelper();
		this.unrenderHighlight();
	},


	/* Event Resize Visualization
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of an event being resized
	renderEventResize: function(eventFootprints, seg) {
		return this.renderHelperEventFootprints(eventFootprints, seg); // returns mock event elements
	},


	// Unrenders any visual indication of an event being resized
	unrenderEventResize: function() {
		this.unrenderHelper();
	},


	/* Event Helper
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a mock "helper" event. `sourceSeg` is the original segment object and might be null (an external drag)
	renderHelperEventFootprintEls: function(eventFootprints, sourceSeg) {
		var segs = this.eventFootprintsToSegs(eventFootprints);

		return this.renderHelperSegs( // returns mock event elements
			segs,
			sourceSeg
		);
	},


	// Unrenders any mock helper event
	unrenderHelper: function() {
		this.unrenderHelperSegs();
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessHours: function() {
		this.renderBusinessSegs(
			this.buildBusinessHourSegs()
		);
	},


	unrenderBusinessHours: function() {
		this.unrenderBusinessSegs();
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
		return 'minute'; // will refresh on the minute
	},


	renderNowIndicator: function(date) {
		// seg system might be overkill, but it handles scenario where line needs to be rendered
		//  more than once because of columns with the same date (resources columns for example)
		var segs = this.componentFootprintToSegs(
			new ComponentFootprint(
				new UnzonedRange(date, date.valueOf() + 1), // protect against null range
				false // all-day
			)
		);
		var top = this.computeDateTop(date, date);
		var nodes = [];
		var i;

		// render lines within the columns
		for (i = 0; i < segs.length; i++) {
			nodes.push($('<div class="fc-now-indicator fc-now-indicator-line"></div>')
				.css('top', top)
				.appendTo(this.colContainerEls.eq(segs[i].col))[0]);
		}

		// render an arrow over the axis
		if (segs.length > 0) { // is the current time in view?
			nodes.push($('<div class="fc-now-indicator fc-now-indicator-arrow"></div>')
				.css('top', top)
				.appendTo(this.el.find('.fc-content-skeleton'))[0]);
		}

		this.nowIndicatorEls = $(nodes);
	},


	unrenderNowIndicator: function() {
		if (this.nowIndicatorEls) {
			this.nowIndicatorEls.remove();
			this.nowIndicatorEls = null;
		}
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection. Overrides the default, which was to simply render a highlight.
	renderSelectionFootprint: function(componentFootprint) {
		if (this.opt('selectHelper')) { // this setting signals that a mock helper event should be rendered
			this.renderHelperEventFootprints([
				this.fabricateEventFootprint(componentFootprint)
			]);
		}
		else {
			this.renderHighlight(componentFootprint);
		}
	},


	// Unrenders any visual indication of a selection
	unrenderSelection: function() {
		this.unrenderHelper();
		this.unrenderHighlight();
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	renderHighlight: function(componentFootprint) {
		this.renderHighlightSegs(
			this.componentFootprintToSegs(componentFootprint)
		);
	},


	unrenderHighlight: function() {
		this.unrenderHighlightSegs();
	}

});

;;

/* Methods for rendering SEGMENTS, pieces of content that live on the view
 ( this file is no longer just for events )
----------------------------------------------------------------------------------------------------------------------*/

TimeGrid.mixin({

	colContainerEls: null, // containers for each column

	// inner-containers for each column where different types of segs live
	fgContainerEls: null,
	bgContainerEls: null,
	helperContainerEls: null,
	highlightContainerEls: null,
	businessContainerEls: null,

	// arrays of different types of displayed segments
	fgSegs: null,
	bgSegs: null,
	helperSegs: null,
	highlightSegs: null,
	businessSegs: null,


	// Renders the DOM that the view's content will live in
	renderContentSkeleton: function() {
		var cellHtml = '';
		var i;
		var skeletonEl;

		for (i = 0; i < this.colCnt; i++) {
			cellHtml +=
				'<td>' +
					'<div class="fc-content-col">' +
						'<div class="fc-event-container fc-helper-container"></div>' +
						'<div class="fc-event-container"></div>' +
						'<div class="fc-highlight-container"></div>' +
						'<div class="fc-bgevent-container"></div>' +
						'<div class="fc-business-container"></div>' +
					'</div>' +
				'</td>';
		}

		skeletonEl = $(
			'<div class="fc-content-skeleton">' +
				'<table>' +
					'<tr>' + cellHtml + '</tr>' +
				'</table>' +
			'</div>'
		);

		this.colContainerEls = skeletonEl.find('.fc-content-col');
		this.helperContainerEls = skeletonEl.find('.fc-helper-container');
		this.fgContainerEls = skeletonEl.find('.fc-event-container:not(.fc-helper-container)');
		this.bgContainerEls = skeletonEl.find('.fc-bgevent-container');
		this.highlightContainerEls = skeletonEl.find('.fc-highlight-container');
		this.businessContainerEls = skeletonEl.find('.fc-business-container');

		this.bookendCells(skeletonEl.find('tr')); // TODO: do this on string level
		this.el.append(skeletonEl);
	},


	/* Foreground Events
	------------------------------------------------------------------------------------------------------------------*/


	renderFgSegs: function(segs) {
		segs = this.renderFgSegsIntoContainers(segs, this.fgContainerEls);
		this.fgSegs = segs;
		return segs; // needed for Grid::renderEvents
	},


	unrenderFgSegs: function() {
		this.unrenderNamedSegs('fgSegs');
	},


	/* Foreground Helper Events
	------------------------------------------------------------------------------------------------------------------*/


	renderHelperSegs: function(segs, sourceSeg) {
		var helperEls = [];
		var i, seg;
		var sourceEl;

		segs = this.renderFgSegsIntoContainers(segs, this.helperContainerEls);

		// Try to make the segment that is in the same row as sourceSeg look the same
		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			if (sourceSeg && sourceSeg.col === seg.col) {
				sourceEl = sourceSeg.el;
				seg.el.css({
					left: sourceEl.css('left'),
					right: sourceEl.css('right'),
					'margin-left': sourceEl.css('margin-left'),
					'margin-right': sourceEl.css('margin-right')
				});
			}
			helperEls.push(seg.el[0]);
		}

		this.helperSegs = segs;

		return $(helperEls); // must return rendered helpers
	},


	unrenderHelperSegs: function() {
		this.unrenderNamedSegs('helperSegs');
	},


	/* Background Events
	------------------------------------------------------------------------------------------------------------------*/


	renderBgSegs: function(segs) {
		segs = this.renderFillSegEls('bgEvent', segs); // TODO: old fill system
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.bgContainerEls);
		this.bgSegs = segs;
		return segs; // needed for Grid::renderEvents
	},


	unrenderBgSegs: function() {
		this.unrenderNamedSegs('bgSegs');
	},


	/* Highlight
	------------------------------------------------------------------------------------------------------------------*/


	renderHighlightSegs: function(segs) {
		segs = this.renderFillSegEls('highlight', segs); // TODO: instead of calling renderFill directly
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.highlightContainerEls);
		this.highlightSegs = segs;
	},


	unrenderHighlightSegs: function() {
		this.unrenderNamedSegs('highlightSegs');
	},


	/* Business Hours
	------------------------------------------------------------------------------------------------------------------*/


	renderBusinessSegs: function(segs) {
		segs = this.renderFillSegEls('businessHours', segs); // TODO: instead of calling renderFill directly
		this.updateSegVerticals(segs);
		this.attachSegsByCol(this.groupSegsByCol(segs), this.businessContainerEls);
		this.businessSegs = segs;
	},


	unrenderBusinessSegs: function() {
		this.unrenderNamedSegs('businessSegs');
	},


	/* Seg Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given a flat array of segments, return an array of sub-arrays, grouped by each segment's col
	groupSegsByCol: function(segs) {
		var segsByCol = [];
		var i;

		for (i = 0; i < this.colCnt; i++) {
			segsByCol.push([]);
		}

		for (i = 0; i < segs.length; i++) {
			segsByCol[segs[i].col].push(segs[i]);
		}

		return segsByCol;
	},


	// Given segments grouped by column, insert the segments' elements into a parallel array of container
	// elements, each living within a column.
	attachSegsByCol: function(segsByCol, containerEls) {
		var col;
		var segs;
		var i;

		for (col = 0; col < this.colCnt; col++) { // iterate each column grouping
			segs = segsByCol[col];

			for (i = 0; i < segs.length; i++) {
				containerEls.eq(col).append(segs[i].el);
			}
		}
	},


	// Given the name of a property of `this` object, assumed to be an array of segments,
	// loops through each segment and removes from DOM. Will null-out the property afterwards.
	unrenderNamedSegs: function(propName) {
		var segs = this[propName];
		var i;

		if (segs) {
			for (i = 0; i < segs.length; i++) {
				segs[i].el.remove();
			}
			this[propName] = null;
		}
	},



	/* Foreground Event Rendering Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given an array of foreground segments, render a DOM element for each, computes position,
	// and attaches to the column inner-container elements.
	renderFgSegsIntoContainers: function(segs, containerEls) {
		var segsByCol;
		var col;

		segs = this.renderFgSegEls(segs); // will call fgSegHtml
		segsByCol = this.groupSegsByCol(segs);

		for (col = 0; col < this.colCnt; col++) {
			this.updateFgSegCoords(segsByCol[col]);
		}

		this.attachSegsByCol(segsByCol, containerEls);

		return segs;
	},


	// Renders the HTML for a single event segment's default rendering
	fgSegHtml: function(seg, disableResizing) {
		var view = this.view;
		var calendar = view.calendar;
		var componentFootprint = seg.footprint.componentFootprint;
		var isAllDay = componentFootprint.isAllDay;
		var eventDef = seg.footprint.eventDef;
		var isDraggable = view.isEventDefDraggable(eventDef);
		var isResizableFromStart = !disableResizing && seg.isStart && view.isEventDefResizableFromStart(eventDef);
		var isResizableFromEnd = !disableResizing && seg.isEnd && view.isEventDefResizableFromEnd(eventDef);
		var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
		var skinCss = cssToStr(this.getSegSkinCss(seg));
		var timeText;
		var fullTimeText; // more verbose time text. for the print stylesheet
		var startTimeText; // just the start time text

		classes.unshift('fc-time-grid-event', 'fc-v-event');

		// if the event appears to span more than one day...
		if (view.isMultiDayRange(componentFootprint.unzonedRange)) {
			// Don't display time text on segments that run entirely through a day.
			// That would appear as midnight-midnight and would look dumb.
			// Otherwise, display the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
			if (seg.isStart || seg.isEnd) {
				var zonedStart = calendar.msToMoment(seg.startMs);
				var zonedEnd = calendar.msToMoment(seg.endMs);
				timeText = this._getEventTimeText(zonedStart, zonedEnd, isAllDay);
				fullTimeText = this._getEventTimeText(zonedStart, zonedEnd, isAllDay, 'LT');
				startTimeText = this._getEventTimeText(zonedStart, zonedEnd, isAllDay, null, false); // displayEnd=false
			}
		}
		else {
			// Display the normal time text for the *event's* times
			timeText = this.getEventTimeText(seg.footprint);
			fullTimeText = this.getEventTimeText(seg.footprint, 'LT');
			startTimeText = this.getEventTimeText(seg.footprint, null, false); // displayEnd=false
		}

		return '<a class="' + classes.join(' ') + '"' +
			(eventDef.url ?
				' href="' + htmlEscape(eventDef.url) + '"' :
				''
				) +
			(skinCss ?
				' style="' + skinCss + '"' :
				''
				) +
			'>' +
				'<div class="fc-content">' +
					(timeText ?
						'<div class="fc-time"' +
						' data-start="' + htmlEscape(startTimeText) + '"' +
						' data-full="' + htmlEscape(fullTimeText) + '"' +
						'>' +
							'<span>' + htmlEscape(timeText) + '</span>' +
						'</div>' :
						''
						) +
					(eventDef.title ?
						'<div class="fc-title">' +
							htmlEscape(eventDef.title) +
						'</div>' :
						''
						) +
				'</div>' +
				'<div class="fc-bg"/>' +
				/* TODO: write CSS for this
				(isResizableFromStart ?
					'<div class="fc-resizer fc-start-resizer" />' :
					''
					) +
				*/
				(isResizableFromEnd ?
					'<div class="fc-resizer fc-end-resizer" />' :
					''
					) +
			'</a>';
	},


	/* Seg Position Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes the CSS top/bottom coordinates for each segment element.
	// Works when called after initial render, after a window resize/zoom for example.
	updateSegVerticals: function(segs) {
		this.computeSegVerticals(segs);
		this.assignSegVerticals(segs);
	},


	// For each segment in an array, computes and assigns its top and bottom properties
	computeSegVerticals: function(segs) {
		var i, seg;
		var dayDate;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			dayDate = this.dayDates[seg.dayIndex];

			seg.top = this.computeDateTop(seg.startMs, dayDate);
			seg.bottom = this.computeDateTop(seg.endMs, dayDate);
		}
	},


	// Given segments that already have their top/bottom properties computed, applies those values to
	// the segments' elements.
	assignSegVerticals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.el.css(this.generateSegVerticalCss(seg));
		}
	},


	// Generates an object with CSS properties for the top/bottom coordinates of a segment element
	generateSegVerticalCss: function(seg) {
		return {
			top: seg.top,
			bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
		};
	},


	/* Foreground Event Positioning Utils
	------------------------------------------------------------------------------------------------------------------*/


	// Given segments that are assumed to all live in the *same column*,
	// compute their verical/horizontal coordinates and assign to their elements.
	updateFgSegCoords: function(segs) {
		this.computeSegVerticals(segs); // horizontals relies on this
		this.computeFgSegHorizontals(segs); // compute horizontal coordinates, z-index's, and reorder the array
		this.assignSegVerticals(segs);
		this.assignFgSegHorizontals(segs);
	},


	// Given an array of segments that are all in the same column, sets the backwardCoord and forwardCoord on each.
	// NOTE: Also reorders the given array by date!
	computeFgSegHorizontals: function(segs) {
		var levels;
		var level0;
		var i;

		this.sortEventSegs(segs); // order by certain criteria
		levels = buildSlotSegLevels(segs);
		computeForwardSlotSegs(levels);

		if ((level0 = levels[0])) {

			for (i = 0; i < level0.length; i++) {
				computeSlotSegPressures(level0[i]);
			}

			for (i = 0; i < level0.length; i++) {
				this.computeFgSegForwardBack(level0[i], 0, 0);
			}
		}
	},


	// Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
	// from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
	// seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
	//
	// The segment might be part of a "series", which means consecutive segments with the same pressure
	// who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
	// segments behind this one in the current series, and `seriesBackwardCoord` is the starting
	// coordinate of the first segment in the series.
	computeFgSegForwardBack: function(seg, seriesBackwardPressure, seriesBackwardCoord) {
		var forwardSegs = seg.forwardSegs;
		var i;

		if (seg.forwardCoord === undefined) { // not already computed

			if (!forwardSegs.length) {

				// if there are no forward segments, this segment should butt up against the edge
				seg.forwardCoord = 1;
			}
			else {

				// sort highest pressure first
				this.sortForwardSegs(forwardSegs);

				// this segment's forwardCoord will be calculated from the backwardCoord of the
				// highest-pressure forward segment.
				this.computeFgSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
				seg.forwardCoord = forwardSegs[0].backwardCoord;
			}

			// calculate the backwardCoord from the forwardCoord. consider the series
			seg.backwardCoord = seg.forwardCoord -
				(seg.forwardCoord - seriesBackwardCoord) / // available width for series
				(seriesBackwardPressure + 1); // # of segments in the series

			// use this segment's coordinates to computed the coordinates of the less-pressurized
			// forward segments
			for (i=0; i<forwardSegs.length; i++) {
				this.computeFgSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
			}
		}
	},


	sortForwardSegs: function(forwardSegs) {
		forwardSegs.sort(proxy(this, 'compareForwardSegs'));
	},


	// A cmp function for determining which forward segment to rely on more when computing coordinates.
	compareForwardSegs: function(seg1, seg2) {
		// put higher-pressure first
		return seg2.forwardPressure - seg1.forwardPressure ||
			// put segments that are closer to initial edge first (and favor ones with no coords yet)
			(seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) ||
			// do normal sorting...
			this.compareEventSegs(seg1, seg2);
	},


	// Given foreground event segments that have already had their position coordinates computed,
	// assigns position-related CSS values to their elements.
	assignFgSegHorizontals: function(segs) {
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			seg.el.css(this.generateFgSegHorizontalCss(seg));

			// if the height is short, add a className for alternate styling
			if (seg.bottom - seg.top < 30) {
				seg.el.addClass('fc-short');
			}
		}
	},


	// Generates an object with CSS properties/values that should be applied to an event segment element.
	// Contains important positioning-related properties that should be applied to any event element, customized or not.
	generateFgSegHorizontalCss: function(seg) {
		var shouldOverlap = this.opt('slotEventOverlap');
		var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
		var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
		var props = this.generateSegVerticalCss(seg); // get top/bottom first
		var left; // amount of space from left edge, a fraction of the total width
		var right; // amount of space from right edge, a fraction of the total width

		if (shouldOverlap) {
			// double the width, but don't go beyond the maximum forward coordinate (1.0)
			forwardCoord = Math.min(1, backwardCoord + (forwardCoord - backwardCoord) * 2);
		}

		if (this.isRTL) {
			left = 1 - forwardCoord;
			right = backwardCoord;
		}
		else {
			left = backwardCoord;
			right = 1 - forwardCoord;
		}

		props.zIndex = seg.level + 1; // convert from 0-base to 1-based
		props.left = left * 100 + '%';
		props.right = right * 100 + '%';

		if (shouldOverlap && seg.forwardPressure) {
			// add padding to the edge so that forward stacked events don't cover the resizer's icon
			props[this.isRTL ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
		}

		return props;
	}

});


// Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
// left-to-right, or the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
function buildSlotSegLevels(segs) {
	var levels = [];
	var i, seg;
	var j;

	for (i=0; i<segs.length; i++) {
		seg = segs[i];

		// go through all the levels and stop on the first level where there are no collisions
		for (j=0; j<levels.length; j++) {
			if (!computeSlotSegCollisions(seg, levels[j]).length) {
				break;
			}
		}

		seg.level = j;

		(levels[j] || (levels[j] = [])).push(seg);
	}

	return levels;
}


// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
	var i, level;
	var j, seg;
	var k;

	for (i=0; i<levels.length; i++) {
		level = levels[i];

		for (j=0; j<level.length; j++) {
			seg = level[j];

			seg.forwardSegs = [];
			for (k=i+1; k<levels.length; k++) {
				computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
			}
		}
	}
}


// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
	var forwardSegs = seg.forwardSegs;
	var forwardPressure = 0;
	var i, forwardSeg;

	if (seg.forwardPressure === undefined) { // not already computed

		for (i=0; i<forwardSegs.length; i++) {
			forwardSeg = forwardSegs[i];

			// figure out the child's maximum forward path
			computeSlotSegPressures(forwardSeg);

			// either use the existing maximum, or use the child's forward pressure
			// plus one (for the forwardSeg itself)
			forwardPressure = Math.max(
				forwardPressure,
				1 + forwardSeg.forwardPressure
			);
		}

		seg.forwardPressure = forwardPressure;
	}
}


// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
	results = results || [];

	for (var i=0; i<otherSegs.length; i++) {
		if (isSlotSegCollision(seg, otherSegs[i])) {
			results.push(otherSegs[i]);
		}
	}

	return results;
}


// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
	return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
}

;;

/* An abstract class from which other views inherit from
----------------------------------------------------------------------------------------------------------------------*/

var View = FC.View = ChronoComponent.extend({

	type: null, // subclass' view name (string)
	name: null, // deprecated. use `type` instead
	title: null, // the text that will be displayed in the header's title

	calendar: null, // owner Calendar object
	viewSpec: null,
	options: null, // hash containing all options. already merged with view-specific-options

	renderQueue: null,
	batchRenderDepth: 0,
	isDatesRendered: false,
	isEventsRendered: false,
	isBaseRendered: false, // related to viewRender/viewDestroy triggers

	queuedScroll: null,

	isSelected: false, // boolean whether a range of time is user-selected or not
	selectedEventInstance: null,

	eventOrderSpecs: null, // criteria for ordering events when they have same date/time

	// for date utils, computed from options
	isHiddenDayHash: null,

	// now indicator
	isNowIndicatorRendered: null,
	initialNowDate: null, // result first getNow call
	initialNowQueriedMs: null, // ms time the getNow was called
	nowIndicatorTimeoutID: null, // for refresh timing of now indicator
	nowIndicatorIntervalID: null, // "


	constructor: function(calendar, viewSpec) {
		this.calendar = calendar;
		this.viewSpec = viewSpec;

		// shortcuts
		this.type = viewSpec.type;
		this.options = viewSpec.options;

		// .name is deprecated
		this.name = this.type;

		ChronoComponent.call(this);

		this.initHiddenDays();
		this.eventOrderSpecs = parseFieldSpecs(this.opt('eventOrder'));

		this.renderQueue = this.buildRenderQueue();
		this.initAutoBatchRender();

		this.initialize();
	},


	buildRenderQueue: function() {
		var _this = this;
		var renderQueue = new RenderQueue({
			event: this.opt('eventRenderWait')
		});

		renderQueue.on('start', function() {
			_this.freezeHeight();
			_this.addScroll(_this.queryScroll());
		});

		renderQueue.on('stop', function() {
			_this.thawHeight();
			_this.popScroll();
		});

		return renderQueue;
	},


	initAutoBatchRender: function() {
		var _this = this;

		this.on('before:change', function() {
			_this.startBatchRender();
		});

		this.on('change', function() {
			_this.stopBatchRender();
		});
	},


	startBatchRender: function() {
		if (!(this.batchRenderDepth++)) {
			this.renderQueue.pause();
		}
	},


	stopBatchRender: function() {
		if (!(--this.batchRenderDepth)) {
			this.renderQueue.resume();
		}
	},


	// A good place for subclasses to initialize member variables
	initialize: function() {
		// subclasses can implement
	},


	// Retrieves an option with the given name
	opt: function(name) {
		return this.options[name];
	},


	/* Title and Date Formatting
	------------------------------------------------------------------------------------------------------------------*/


	// Computes what the title at the top of the calendar should be for this view
	computeTitle: function() {
		var unzonedRange;

		// for views that span a large unit of time, show the proper interval, ignoring stray days before and after
		if (/^(year|month)$/.test(this.currentRangeUnit)) {
			unzonedRange = this.currentUnzonedRange;
		}
		else { // for day units or smaller, use the actual day range
			unzonedRange = this.activeUnzonedRange;
		}

		return this.formatRange(
			{
				start: this.calendar.msToMoment(unzonedRange.startMs, this.isRangeAllDay),
				end: this.calendar.msToMoment(unzonedRange.endMs, this.isRangeAllDay)
			},
			this.isRangeAllDay,
			this.opt('titleFormat') || this.computeTitleFormat(),
			this.opt('titleRangeSeparator')
		);
	},


	// Generates the format string that should be used to generate the title for the current date range.
	// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
	computeTitleFormat: function() {
		if (this.currentRangeUnit == 'year') {
			return 'YYYY';
		}
		else if (this.currentRangeUnit == 'month') {
			return this.opt('monthYearFormat'); // like "September 2014"
		}
		else if (this.currentRangeAs('days') > 1) {
			return 'll'; // multi-day range. shorter, like "Sep 9 - 10 2014"
		}
		else {
			return 'LL'; // one day. longer, like "September 9 2014"
		}
	},


	// Element
	// -----------------------------------------------------------------------------------------------------------------


	setElement: function(el) {
		ChronoComponent.prototype.setElement.apply(this, arguments);

		this.bindBaseRenderHandlers();
	},


	removeElement: function() {
		this.unsetDate();
		this.unbindBaseRenderHandlers();

		ChronoComponent.prototype.removeElement.apply(this, arguments);
	},


	// Date Setting/Unsetting
	// -----------------------------------------------------------------------------------------------------------------


	setDate: function(date) {
		var currentDateProfile = this.get('dateProfile');
		var newDateProfile = this.buildDateProfile(date, null, true); // forceToValid=true

		if (
			!currentDateProfile ||
			!currentDateProfile.activeUnzonedRange.equals(newDateProfile.activeUnzonedRange)
		) {
			this.set('dateProfile', newDateProfile);
		}

		return newDateProfile.date;
	},


	unsetDate: function() {
		this.unset('dateProfile');
	},


	// Date Rendering
	// -----------------------------------------------------------------------------------------------------------------


	requestDateRender: function(dateProfile) {
		var _this = this;

		this.renderQueue.queue(function() {
			_this.executeDateRender(dateProfile);
		}, 'date', 'init');
	},


	requestDateUnrender: function() {
		var _this = this;

		this.renderQueue.queue(function() {
			_this.executeDateUnrender();
		}, 'date', 'destroy');
	},


	// Event Data
	// -----------------------------------------------------------------------------------------------------------------


	fetchInitialEvents: function(dateProfile) {
		var calendar = this.calendar;
		var forceAllDay = dateProfile.isRangeAllDay && !this.usesMinMaxTime;

		return calendar.requestEvents(
			calendar.msToMoment(dateProfile.activeUnzonedRange.startMs, forceAllDay),
			calendar.msToMoment(dateProfile.activeUnzonedRange.endMs, forceAllDay)
		);
	},


	bindEventChanges: function() {
		this.listenTo(this.calendar, 'eventsReset', this.resetEvents);
	},


	unbindEventChanges: function() {
		this.stopListeningTo(this.calendar, 'eventsReset');
	},


	setEvents: function(eventsPayload) {
		this.set('currentEvents', eventsPayload);
		this.set('hasEvents', true);
	},


	unsetEvents: function() {
		this.unset('currentEvents');
		this.unset('hasEvents');
	},


	resetEvents: function(eventsPayload) {
		this.startBatchRender();
		this.unsetEvents();
		this.setEvents(eventsPayload);
		this.stopBatchRender();
	},


	// Event Rendering
	// -----------------------------------------------------------------------------------------------------------------


	requestEventsRender: function(eventsPayload) {
		var _this = this;

		this.renderQueue.queue(function() {
			_this.executeEventsRender(eventsPayload);
		}, 'event', 'init');
	},


	requestEventsUnrender: function() {
		var _this = this;

		this.renderQueue.queue(function() {
			_this.executeEventsUnrender();
		}, 'event', 'destroy');
	},


	// Date High-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	// if dateProfile not specified, uses current
	executeDateRender: function(dateProfile, skipScroll) {

		this.setDateProfileForRendering(dateProfile);

		if (this.render) {
			this.render(); // TODO: deprecate
		}

		this.renderDates();
		this.updateSize();
		this.renderBusinessHours(); // might need coordinates, so should go after updateSize()
		this.startNowIndicator();

		if (!skipScroll) {
			this.addScroll(this.computeInitialDateScroll());
		}

		this.isDatesRendered = true;
		this.trigger('datesRendered');
	},


	executeDateUnrender: function() {

		this.unselect();
		this.stopNowIndicator();

		this.trigger('before:datesUnrendered');

		this.unrenderBusinessHours();
		this.unrenderDates();

		if (this.destroy) {
			this.destroy(); // TODO: deprecate
		}

		this.isDatesRendered = false;
	},


	// Determing when the "meat" of the view is rendered (aka the base)
	// -----------------------------------------------------------------------------------------------------------------


	bindBaseRenderHandlers: function() {
		var _this = this;

		this.on('datesRendered.baseHandler', function() {
			_this.onBaseRender();
		});

		this.on('before:datesUnrendered.baseHandler', function() {
			_this.onBeforeBaseUnrender();
		});
	},


	unbindBaseRenderHandlers: function() {
		this.off('.baseHandler');
	},


	onBaseRender: function() {
		this.applyScreenState();
		this.publiclyTrigger('viewRender', {
			context: this,
			args: [ this, this.el ]
		});
	},


	onBeforeBaseUnrender: function() {
		this.applyScreenState();
		this.publiclyTrigger('viewDestroy', {
			context: this,
			args: [ this, this.el ]
		});
	},


	// Misc view rendering utils
	// -----------------------------------------------------------------------------------------------------------------


	// Binds DOM handlers to elements that reside outside the view container, such as the document
	bindGlobalHandlers: function() {
		this.listenTo(GlobalEmitter.get(), {
			touchstart: this.processUnselect,
			mousedown: this.handleDocumentMousedown
		});
	},


	// Unbinds DOM handlers from elements that reside outside the view container
	unbindGlobalHandlers: function() {
		this.stopListeningTo(GlobalEmitter.get());
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	// Immediately render the current time indicator and begins re-rendering it at an interval,
	// which is defined by this.getNowIndicatorUnit().
	// TODO: somehow do this for the current whole day's background too
	startNowIndicator: function() {
		var _this = this;
		var unit;
		var update;
		var delay; // ms wait value

		if (this.opt('nowIndicator')) {
			unit = this.getNowIndicatorUnit();
			if (unit) {
				update = proxy(this, 'updateNowIndicator'); // bind to `this`

				this.initialNowDate = this.calendar.getNow();
				this.initialNowQueriedMs = +new Date();
				this.renderNowIndicator(this.initialNowDate);
				this.isNowIndicatorRendered = true;

				// wait until the beginning of the next interval
				delay = this.initialNowDate.clone().startOf(unit).add(1, unit) - this.initialNowDate;
				this.nowIndicatorTimeoutID = setTimeout(function() {
					_this.nowIndicatorTimeoutID = null;
					update();
					delay = +moment.duration(1, unit);
					delay = Math.max(100, delay); // prevent too frequent
					_this.nowIndicatorIntervalID = setInterval(update, delay); // update every interval
				}, delay);
			}
		}
	},


	// rerenders the now indicator, computing the new current time from the amount of time that has passed
	// since the initial getNow call.
	updateNowIndicator: function() {
		if (this.isNowIndicatorRendered) {
			this.unrenderNowIndicator();
			this.renderNowIndicator(
				this.initialNowDate.clone().add(new Date() - this.initialNowQueriedMs) // add ms
			);
		}
	},


	// Immediately unrenders the view's current time indicator and stops any re-rendering timers.
	// Won't cause side effects if indicator isn't rendered.
	stopNowIndicator: function() {
		if (this.isNowIndicatorRendered) {

			if (this.nowIndicatorTimeoutID) {
				clearTimeout(this.nowIndicatorTimeoutID);
				this.nowIndicatorTimeoutID = null;
			}
			if (this.nowIndicatorIntervalID) {
				clearTimeout(this.nowIndicatorIntervalID);
				this.nowIndicatorIntervalID = null;
			}

			this.unrenderNowIndicator();
			this.isNowIndicatorRendered = false;
		}
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: move some of these to ChronoComponent


	// Refreshes anything dependant upon sizing of the container element of the grid
	updateSize: function(isResize) {
		var scroll;

		if (isResize) {
			scroll = this.queryScroll();
		}

		this.updateHeight(isResize);
		this.updateWidth(isResize);
		this.updateNowIndicator();

		if (isResize) {
			this.applyScroll(scroll);
		}
	},


	// Refreshes the horizontal dimensions of the calendar
	updateWidth: function(isResize) {
		// subclasses should implement
	},


	// Refreshes the vertical dimensions of the calendar
	updateHeight: function(isResize) {
		var calendar = this.calendar; // we poll the calendar for height information

		this.setHeight(
			calendar.getSuggestedViewHeight(),
			calendar.isHeightAuto()
		);
	},


	// Updates the vertical dimensions of the calendar to the specified height.
	// if `isAuto` is set to true, height becomes merely a suggestion and the view should use its "natural" height.
	setHeight: function(height, isAuto) {
		// subclasses should implement
	},


	/* Scroller
	------------------------------------------------------------------------------------------------------------------*/


	addForcedScroll: function(scroll) {
		this.addScroll(
			$.extend(scroll, { isForced: true })
		);
	},


	addScroll: function(scroll) {
		var queuedScroll = this.queuedScroll || (this.queuedScroll = {});

		if (!queuedScroll.isForced) {
			$.extend(queuedScroll, scroll);
		}
	},


	popScroll: function() {
		this.applyQueuedScroll();
		this.queuedScroll = null;
	},


	applyQueuedScroll: function() {
		if (this.queuedScroll) {
			this.applyScroll(this.queuedScroll);
		}
	},


	queryScroll: function() {
		var scroll = {};

		if (this.isDatesRendered) {
			$.extend(scroll, this.queryDateScroll());
		}

		return scroll;
	},


	applyScroll: function(scroll) {
		if (this.isDatesRendered) {
			this.applyDateScroll(scroll);
		}
	},


	computeInitialDateScroll: function() {
		return {}; // subclasses must implement
	},


	queryDateScroll: function() {
		return {}; // subclasses must implement
	},


	applyDateScroll: function(scroll) {
		; // subclasses must implement
	},


	/* Height Freezing
	------------------------------------------------------------------------------------------------------------------*/


	freezeHeight: function() {
		this.calendar.freezeContentHeight();
	},


	thawHeight: function() {
		this.calendar.thawContentHeight();
	},


	// Event High-level Rendering
	// -----------------------------------------------------------------------------------------------------------------


	executeEventsRender: function(eventsPayload) {

		if (this.renderEvents) { // for legacy custom views
			this.renderEvents(convertEventsPayloadToLegacyArray(eventsPayload));
		}
		else {
			this.renderEventsPayload(eventsPayload);
		}

		this.isEventsRendered = true;

		this.onEventsRender();
	},


	executeEventsUnrender: function() {
		this.onBeforeEventsUnrender();

		if (this.destroyEvents) {
			this.destroyEvents(); // TODO: deprecate
		}

		this.unrenderEvents();
		this.isEventsRendered = false;
	},


	// Event Rendering Triggers
	// -----------------------------------------------------------------------------------------------------------------


	// Signals that all events have been rendered
	onEventsRender: function() {
		var _this = this;
		var hasSingleHandlers = this.hasPublicHandlers('eventAfterRender');

		if (hasSingleHandlers || this.hasPublicHandlers('eventAfterAllRender')) {
			this.applyScreenState();
		}

		if (hasSingleHandlers) {
			this.getEventSegs().forEach(function(seg) {
				var legacy;

				if (seg.el) { // necessary?
					legacy = seg.footprint.getEventLegacy();

					_this.publiclyTrigger('eventAfterRender', {
						context: legacy,
						args: [ legacy, seg.el, _this ]
					});
				}
			});
		}

		this.publiclyTrigger('eventAfterAllRender', {
			context: this,
			args: [ this ]
		});
	},


	// Signals that all event elements are about to be removed
	onBeforeEventsUnrender: function() {
		var _this = this;

		if (this.hasPublicHandlers('eventDestroy')) {

			this.applyScreenState();

			this.getEventSegs().forEach(function(seg) {
				var legacy;

				if (seg.el) { // necessary?
					legacy = seg.footprint.getEventLegacy();

					_this.publiclyTrigger('eventDestroy', {
						context: legacy,
						args: [ legacy, seg.el, _this ]
					});
				}
			});
		}
	},


	applyScreenState: function() {
		this.thawHeight();
		this.freezeHeight();
		this.applyQueuedScroll();
	},


	// Event Rendering Utils
	// -----------------------------------------------------------------------------------------------------------------
	// TODO: move this to ChronoComponent


	// Hides all rendered event segments linked to the given event
	showEventsWithId: function(eventDefId) {
		this.getEventSegs().forEach(function(seg) {
			if (
				seg.footprint.eventDef.id === eventDefId &&
				seg.el // necessary?
			) {
				seg.el.css('visibility', '');
			}
		});
	},


	// Shows all rendered event segments linked to the given event
	hideEventsWithId: function(eventDefId) {
		this.getEventSegs().forEach(function(seg) {
			if (
				seg.footprint.eventDef.id === eventDefId &&
				seg.el // necessary?
			) {
				seg.el.css('visibility', 'hidden');
			}
		});
	},


	/* Event Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/


	reportEventDrop: function(eventInstance, eventMutation, el, ev) {
		var eventManager = this.calendar.eventManager;
		var undoFunc = eventManager.mutateEventsWithId(
			eventInstance.def.id,
			eventMutation,
			this.calendar
		);
		var dateMutation = eventMutation.dateMutation;

		// update the EventInstance, for handlers
		if (dateMutation) {
			eventInstance.dateProfile = dateMutation.buildNewDateProfile(
				eventInstance.dateProfile,
				this.calendar
			);
		}

		this.triggerEventDrop(
			eventInstance,
			// a drop doesn't necessarily mean a date mutation (ex: resource change)
			(dateMutation && dateMutation.dateDelta) || moment.duration(),
			undoFunc,
			el, ev
		);
	},


	// Triggers event-drop handlers that have subscribed via the API
	triggerEventDrop: function(eventInstance, dateDelta, undoFunc, el, ev) {
		this.publiclyTrigger('eventDrop', {
			context: el[0],
			args: [
				eventInstance.toLegacy(),
				dateDelta,
				undoFunc,
				ev,
				{}, // {} = jqui dummy
				this
			]
		});
	},


	/* External Element Drag-n-Drop
	------------------------------------------------------------------------------------------------------------------*/


	// Must be called when an external element, via jQuery UI, has been dropped onto the calendar.
	// `meta` is the parsed data that has been embedded into the dragging event.
	// `dropLocation` is an object that contains the new zoned start/end/allDay values for the event.
	reportExternalDrop: function(singleEventDef, isEvent, isSticky, el, ev, ui) {

		if (isEvent) {
			this.calendar.eventManager.addEventDef(singleEventDef, isSticky);
		}

		this.triggerExternalDrop(singleEventDef, isEvent, el, ev, ui);
	},


	// Triggers external-drop handlers that have subscribed via the API
	triggerExternalDrop: function(singleEventDef, isEvent, el, ev, ui) {

		// trigger 'drop' regardless of whether element represents an event
		this.publiclyTrigger('drop', {
			context: el[0],
			args: [
				singleEventDef.dateProfile.start.clone(),
				ev,
				ui,
				this
			]
		});

		if (isEvent) {
			// signal an external event landed
			this.publiclyTrigger('eventReceive', {
				context: this,
				args: [
					singleEventDef.buildInstance().toLegacy(),
					this
				]
			});
		}
	},


	/* Event Resizing
	------------------------------------------------------------------------------------------------------------------*/


	// Must be called when an event in the view has been resized to a new length
	reportEventResize: function(eventInstance, eventMutation, el, ev) {
		var eventManager = this.calendar.eventManager;
		var undoFunc = eventManager.mutateEventsWithId(
			eventInstance.def.id,
			eventMutation,
			this.calendar
		);

		// update the EventInstance, for handlers
		eventInstance.dateProfile = eventMutation.dateMutation.buildNewDateProfile(
			eventInstance.dateProfile,
			this.calendar
		);

		this.triggerEventResize(
			eventInstance,
			eventMutation.dateMutation.endDelta,
			undoFunc,
			el, ev
		);
	},


	// Triggers event-resize handlers that have subscribed via the API
	triggerEventResize: function(eventInstance, durationDelta, undoFunc, el, ev) {
		this.publiclyTrigger('eventResize', {
			context: el[0],
			args: [
				eventInstance.toLegacy(),
				durationDelta,
				undoFunc,
				ev,
				{}, // {} = jqui dummy
				this
			]
		});
	},


	/* Selection (time range)
	------------------------------------------------------------------------------------------------------------------*/


	// Selects a date span on the view. `start` and `end` are both Moments.
	// `ev` is the native mouse event that begin the interaction.
	select: function(footprint, ev) {
		this.unselect(ev);
		this.renderSelectionFootprint(footprint);
		this.reportSelection(footprint, ev);
	},


	renderSelectionFootprint: function(footprint, ev) {
		if (this.renderSelection) { // legacy method in custom view classes
			this.renderSelection(
				footprint.toLegacy(this.calendar)
			);
		}
		else {
			ChronoComponent.prototype.renderSelectionFootprint.apply(this, arguments);
		}
	},


	// Called when a new selection is made. Updates internal state and triggers handlers.
	reportSelection: function(footprint, ev) {
		this.isSelected = true;
		this.triggerSelect(footprint, ev);
	},


	// Triggers handlers to 'select'
	triggerSelect: function(footprint, ev) {
		var dateProfile = this.calendar.footprintToDateProfile(footprint); // abuse of "Event"DateProfile?

		this.publiclyTrigger('select', {
			context: this,
			args: [
				dateProfile.start,
				dateProfile.end,
				ev,
				this
			]
		});
	},


	// Undoes a selection. updates in the internal state and triggers handlers.
	// `ev` is the native mouse event that began the interaction.
	unselect: function(ev) {
		if (this.isSelected) {
			this.isSelected = false;
			if (this.destroySelection) {
				this.destroySelection(); // TODO: deprecate
			}
			this.unrenderSelection();
			this.publiclyTrigger('unselect', {
				context: this,
				args: [ ev, this ]
			});
		}
	},


	/* Event Selection
	------------------------------------------------------------------------------------------------------------------*/


	selectEventInstance: function(eventInstance) {
		if (
			!this.selectedEventInstance ||
			this.selectedEventInstance !== eventInstance
		) {
			this.unselectEventInstance();

			this.getEventSegs().forEach(function(seg) {
				if (
					seg.footprint.eventInstance === eventInstance &&
					seg.el // necessary?
				) {
					seg.el.addClass('fc-selected');
				}
			});

			this.selectedEventInstance = eventInstance;
		}
	},


	unselectEventInstance: function() {
		if (this.selectedEventInstance) {

			this.getEventSegs().forEach(function(seg) {
				if (seg.el) { // necessary?
					seg.el.removeClass('fc-selected');
				}
			});

			this.selectedEventInstance = null;
		}
	},


	isEventDefSelected: function(eventDef) {
		// event references might change on refetchEvents(), while selectedEventInstance doesn't,
		// so compare IDs
		return this.selectedEventInstance && this.selectedEventInstance.def.id === eventDef.id;
	},


	/* Mouse / Touch Unselecting (time range & event unselection)
	------------------------------------------------------------------------------------------------------------------*/
	// TODO: move consistently to down/start or up/end?
	// TODO: don't kill previous selection if touch scrolling


	handleDocumentMousedown: function(ev) {
		if (isPrimaryMouseButton(ev)) {
			this.processUnselect(ev);
		}
	},


	processUnselect: function(ev) {
		this.processRangeUnselect(ev);
		this.processEventUnselect(ev);
	},


	processRangeUnselect: function(ev) {
		var ignore;

		// is there a time-range selection?
		if (this.isSelected && this.opt('unselectAuto')) {
			// only unselect if the clicked element is not identical to or inside of an 'unselectCancel' element
			ignore = this.opt('unselectCancel');
			if (!ignore || !$(ev.target).closest(ignore).length) {
				this.unselect(ev);
			}
		}
	},


	processEventUnselect: function(ev) {
		if (this.selectedEventInstance) {
			if (!$(ev.target).closest('.fc-selected').length) {
				this.unselectEventInstance();
			}
		}
	},


	/* Day Click
	------------------------------------------------------------------------------------------------------------------*/


	// Triggers handlers to 'dayClick'
	// Span has start/end of the clicked area. Only the start is useful.
	triggerDayClick: function(footprint, dayEl, ev) {
		var dateProfile = this.calendar.footprintToDateProfile(footprint); // abuse of "Event"DateProfile?

		this.publiclyTrigger('dayClick', {
			context: dayEl,
			args: [ dateProfile.start, ev, this ]
		});
	}

});


View.watch('displayingDates', [ 'dateProfile' ], function(deps) {
	this.requestDateRender(deps.dateProfile);
}, function() {
	this.requestDateUnrender();
});


View.watch('initialEvents', [ 'dateProfile' ], function(deps) {
	return this.fetchInitialEvents(deps.dateProfile);
});


View.watch('bindingEvents', [ 'initialEvents' ], function(deps) {
	this.setEvents(deps.initialEvents);
	this.bindEventChanges();
}, function() {
	this.unbindEventChanges();
	this.unsetEvents();
});


View.watch('displayingEvents', [ 'displayingDates', 'hasEvents' ], function() {
	this.requestEventsRender(this.get('currentEvents')); // if there were event mutations after initialEvents
}, function() {
	this.requestEventsUnrender();
});


function convertEventsPayloadToLegacyArray(eventsPayload) {
	var legacyEvents = [];
	var id;
	var eventInstances;
	var i;

	for (id in eventsPayload) {

		eventInstances = eventsPayload[id].eventInstances;

		for (i = 0; i < eventInstances.length; i++) {
			legacyEvents.push(
				eventInstances[i].toLegacy()
			);
		}
	}

	return legacyEvents;
}

;;

View.mixin({

	// range the view is formally responsible for.
	// for example, a month view might have 1st-31st, excluding padded dates
	currentUnzonedRange: null,
	currentRangeUnit: null, // name of largest unit being displayed, like "month" or "week"

	isRangeAllDay: false,

	// date range with a rendered skeleton
	// includes not-active days that need some sort of DOM
	renderUnzonedRange: null,

	// dates that display events and accept drag-n-drop
	activeUnzonedRange: null,

	// constraint for where prev/next operations can go and where events can be dragged/resized to.
	// an object with optional start and end properties.
	validUnzonedRange: null,

	// how far the current date will move for a prev/next operation
	dateIncrement: null,

	minTime: null, // Duration object that denotes the first visible time of any given day
	maxTime: null, // Duration object that denotes the exclusive visible end time of any given day
	usesMinMaxTime: false, // whether minTime/maxTime will affect the activeUnzonedRange. Views must opt-in.

	// DEPRECATED
	start: null, // use activeUnzonedRange
	end: null, // use activeUnzonedRange
	intervalStart: null, // use currentUnzonedRange
	intervalEnd: null, // use currentUnzonedRange


	/* Date Range Computation
	------------------------------------------------------------------------------------------------------------------*/


	setDateProfileForRendering: function(dateProfile) {
		var calendar = this.calendar;

		this.currentUnzonedRange = dateProfile.currentUnzonedRange;
		this.currentRangeUnit = dateProfile.currentRangeUnit;
		this.isRangeAllDay = dateProfile.isRangeAllDay;
		this.renderUnzonedRange = dateProfile.renderUnzonedRange;
		this.activeUnzonedRange = dateProfile.activeUnzonedRange;
		this.validUnzonedRange = dateProfile.validUnzonedRange;
		this.dateIncrement = dateProfile.dateIncrement;
		this.minTime = dateProfile.minTime;
		this.maxTime = dateProfile.maxTime;

		// DEPRECATED, but we need to keep it updated...
		this.start = calendar.msToMoment(dateProfile.activeUnzonedRange.startMs, this.isRangeAllDay);
		this.end = calendar.msToMoment(dateProfile.activeUnzonedRange.endMs, this.isRangeAllDay);
		this.intervalStart = calendar.msToMoment(dateProfile.currentUnzonedRange.startMs, this.isRangeAllDay);
		this.intervalEnd = calendar.msToMoment(dateProfile.currentUnzonedRange.endMs, this.isRangeAllDay);

		this.title = this.computeTitle();
		this.calendar.reportViewDatesChanged(this, dateProfile);
	},


	// Builds a structure with info about what the dates/ranges will be for the "prev" view.
	buildPrevDateProfile: function(date) {
		var prevDate = date.clone().startOf(this.currentRangeUnit).subtract(this.dateIncrement);

		return this.buildDateProfile(prevDate, -1);
	},


	// Builds a structure with info about what the dates/ranges will be for the "next" view.
	buildNextDateProfile: function(date) {
		var nextDate = date.clone().startOf(this.currentRangeUnit).add(this.dateIncrement);

		return this.buildDateProfile(nextDate, 1);
	},


	// Builds a structure holding dates/ranges for rendering around the given date.
	// Optional direction param indicates whether the date is being incremented/decremented
	// from its previous value. decremented = -1, incremented = 1 (default).
	buildDateProfile: function(date, direction, forceToValid) {
		var isDateAllDay = !date.hasTime();
		var validUnzonedRange = this.buildValidRange();
		var minTime = null;
		var maxTime = null;
		var currentInfo;
		var renderUnzonedRange;
		var activeUnzonedRange;
		var isValid;

		if (forceToValid) {
			date = this.calendar.msToUtcMoment(
				validUnzonedRange.constrainDate(date), // returns MS
				isDateAllDay
			);
		}

		currentInfo = this.buildCurrentRangeInfo(date, direction);
		renderUnzonedRange = this.buildRenderRange(currentInfo.unzonedRange, currentInfo.unit);
		activeUnzonedRange = renderUnzonedRange.clone();

		if (!this.opt('showNonCurrentDates')) {
			activeUnzonedRange = activeUnzonedRange.intersect(currentInfo.unzonedRange);
		}

		minTime = moment.duration(this.opt('minTime'));
		maxTime = moment.duration(this.opt('maxTime'));
		activeUnzonedRange = this.adjustActiveRange(activeUnzonedRange, minTime, maxTime);

		activeUnzonedRange = activeUnzonedRange.intersect(validUnzonedRange);

		if (activeUnzonedRange) {
			date = this.calendar.msToUtcMoment(
				activeUnzonedRange.constrainDate(date), // returns MS
				isDateAllDay
			);
		}

		// it's invalid if the originally requested date is not contained,
		// or if the range is completely outside of the valid range.
		isValid = currentInfo.unzonedRange.intersectsWith(validUnzonedRange);

		return {
			validUnzonedRange: validUnzonedRange,
			currentUnzonedRange: currentInfo.unzonedRange,
			currentRangeUnit: currentInfo.unit,
			isRangeAllDay: /^(year|month|week|day)$/.test(currentInfo.unit),
			activeUnzonedRange: activeUnzonedRange,
			renderUnzonedRange: renderUnzonedRange,
			minTime: minTime,
			maxTime: maxTime,
			isValid: isValid,
			date: date,
			dateIncrement: this.buildDateIncrement(currentInfo.duration)
				// pass a fallback (might be null) ^
		};
	},


	// Builds an object with optional start/end properties.
	// Indicates the minimum/maximum dates to display.
	buildValidRange: function() {
		return this.getUnzonedRangeOption('validRange', this.calendar.getNow()) ||
			new UnzonedRange(); // completely open-ended
	},


	// Builds a structure with info about the "current" range, the range that is
	// highlighted as being the current month for example.
	// See buildDateProfile for a description of `direction`.
	// Guaranteed to have `range` and `unit` properties. `duration` is optional.
	// TODO: accept a MS-time instead of a moment `date`?
	buildCurrentRangeInfo: function(date, direction) {
		var duration = null;
		var unit = null;
		var unzonedRange = null;
		var dayCount;

		if (this.viewSpec.duration) {
			duration = this.viewSpec.duration;
			unit = this.viewSpec.durationUnit;
			unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
		}
		else if ((dayCount = this.opt('dayCount'))) {
			unit = 'day';
			unzonedRange = this.buildRangeFromDayCount(date, direction, dayCount);
		}
		else if ((unzonedRange = this.buildCustomVisibleRange(date))) {
			unit = computeGreatestUnit(unzonedRange.getStart(), unzonedRange.getEnd());
		}
		else {
			duration = this.getFallbackDuration();
			unit = computeGreatestUnit(duration);
			unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
		}

		return { duration: duration, unit: unit, unzonedRange: unzonedRange };
	},


	getFallbackDuration: function() {
		return moment.duration({ days: 1 });
	},


	// Returns a new activeUnzonedRange to have time values (un-ambiguate)
	// minTime or maxTime causes the range to expand.
	adjustActiveRange: function(unzonedRange, minTime, maxTime) {
		var start = unzonedRange.getStart();
		var end = unzonedRange.getEnd();

		if (this.usesMinMaxTime) {

			if (minTime < 0) {
				start.time(0).add(minTime);
			}

			if (maxTime > 24 * 60 * 60 * 1000) { // beyond 24 hours?
				end.time(maxTime - (24 * 60 * 60 * 1000));
			}
		}

		return new UnzonedRange(start, end);
	},


	// Builds the "current" range when it is specified as an explicit duration.
	// `unit` is the already-computed computeGreatestUnit value of duration.
	// TODO: accept a MS-time instead of a moment `date`?
	buildRangeFromDuration: function(date, direction, duration, unit) {
		var alignment = this.opt('dateAlignment');
		var start = date.clone();
		var end;
		var dateIncrementInput;
		var dateIncrementDuration;

		// if the view displays a single day or smaller
		if (duration.as('days') <= 1) {
			if (this.isHiddenDay(start)) {
				start = this.skipHiddenDays(start, direction);
				start.startOf('day');
			}
		}

		// compute what the alignment should be
		if (!alignment) {
			dateIncrementInput = this.opt('dateIncrement');

			if (dateIncrementInput) {
				dateIncrementDuration = moment.duration(dateIncrementInput);

				// use the smaller of the two units
				if (dateIncrementDuration < duration) {
					alignment = computeDurationGreatestUnit(dateIncrementDuration, dateIncrementInput);
				}
				else {
					alignment = unit;
				}
			}
			else {
				alignment = unit;
			}
		}

		start.startOf(alignment);
		end = start.clone().add(duration);

		return new UnzonedRange(start, end);
	},


	// Builds the "current" range when a dayCount is specified.
	// TODO: accept a MS-time instead of a moment `date`?
	buildRangeFromDayCount: function(date, direction, dayCount) {
		var customAlignment = this.opt('dateAlignment');
		var runningCount = 0;
		var start = date.clone();
		var end;

		if (customAlignment) {
			start.startOf(customAlignment);
		}

		start.startOf('day');
		start = this.skipHiddenDays(start, direction);

		end = start.clone();
		do {
			end.add(1, 'day');
			if (!this.isHiddenDay(end)) {
				runningCount++;
			}
		} while (runningCount < dayCount);

		return new UnzonedRange(start, end);
	},


	// Builds a normalized range object for the "visible" range,
	// which is a way to define the currentUnzonedRange and activeUnzonedRange at the same time.
	// TODO: accept a MS-time instead of a moment `date`?
	buildCustomVisibleRange: function(date) {
		var visibleUnzonedRange = this.getUnzonedRangeOption(
			'visibleRange',
			this.calendar.applyTimezone(date) // correct zone. also generates new obj that avoids mutations
		);

		if (visibleUnzonedRange && (visibleUnzonedRange.startMs === null || visibleUnzonedRange.endMs === null)) {
			return null;
		}

		return visibleUnzonedRange;
	},


	// Computes the range that will represent the element/cells for *rendering*,
	// but which may have voided days/times.
	buildRenderRange: function(currentUnzonedRange, currentRangeUnit) {
		// cut off days in the currentUnzonedRange that are hidden
		return this.trimHiddenDays(currentUnzonedRange);
	},


	// Compute the duration value that should be added/substracted to the current date
	// when a prev/next operation happens.
	buildDateIncrement: function(fallback) {
		var dateIncrementInput = this.opt('dateIncrement');
		var customAlignment;

		if (dateIncrementInput) {
			return moment.duration(dateIncrementInput);
		}
		else if ((customAlignment = this.opt('dateAlignment'))) {
			return moment.duration(1, customAlignment);
		}
		else if (fallback) {
			return fallback;
		}
		else {
			return moment.duration({ days: 1 });
		}
	},


	// Remove days from the beginning and end of the range that are computed as hidden.
	trimHiddenDays: function(inputUnzonedRange) {
		var start = inputUnzonedRange.getStart();
		var end = inputUnzonedRange.getEnd();

		start = this.skipHiddenDays(start);
		end = this.skipHiddenDays(end, -1, true);

		return new UnzonedRange(start, end);
	},


	// Compute the number of the give units in the "current" range.
	// Will return a floating-point number. Won't round.
	currentRangeAs: function(unit) {
		var currentUnzonedRange = this.currentUnzonedRange;

		return moment.utc(currentUnzonedRange.endMs).diff(
			moment.utc(currentUnzonedRange.startMs),
			unit,
			true
		);
	},


	// For ChronoComponent::getDayClasses
	isDateInOtherMonth: function(date) {
		return false;
	},


	// Arguments after name will be forwarded to a hypothetical function value
	// WARNING: passed-in arguments will be given to generator functions as-is and can cause side-effects.
	// Always clone your objects if you fear mutation.
	getUnzonedRangeOption: function(name) {
		var val = this.opt(name);

		if (typeof val === 'function') {
			val = val.apply(
				null,
				Array.prototype.slice.call(arguments, 1)
			);
		}

		if (val) {
			return this.calendar.parseUnzonedRange(val);
		}
	},


	/* Hidden Days
	------------------------------------------------------------------------------------------------------------------*/


	// Initializes internal variables related to calculating hidden days-of-week
	initHiddenDays: function() {
		var hiddenDays = this.opt('hiddenDays') || []; // array of day-of-week indices that are hidden
		var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
		var dayCnt = 0;
		var i;

		if (this.opt('weekends') === false) {
			hiddenDays.push(0, 6); // 0=sunday, 6=saturday
		}

		for (i = 0; i < 7; i++) {
			if (
				!(isHiddenDayHash[i] = $.inArray(i, hiddenDays) !== -1)
			) {
				dayCnt++;
			}
		}

		if (!dayCnt) {
			throw 'invalid hiddenDays'; // all days were hidden? bad.
		}

		this.isHiddenDayHash = isHiddenDayHash;
	},


	// Is the current day hidden?
	// `day` is a day-of-week index (0-6), or a Moment
	isHiddenDay: function(day) {
		if (moment.isMoment(day)) {
			day = day.day();
		}
		return this.isHiddenDayHash[day];
	},


	// Incrementing the current day until it is no longer a hidden day, returning a copy.
	// DOES NOT CONSIDER validUnzonedRange!
	// If the initial value of `date` is not a hidden day, don't do anything.
	// Pass `isExclusive` as `true` if you are dealing with an end date.
	// `inc` defaults to `1` (increment one day forward each time)
	skipHiddenDays: function(date, inc, isExclusive) {
		var out = date.clone();
		inc = inc || 1;
		while (
			this.isHiddenDayHash[(out.day() + (isExclusive ? inc : 0) + 7) % 7]
		) {
			out.add(inc, 'days');
		}
		return out;
	}

});

;;

/*
Embodies a div that has potential scrollbars
*/
var Scroller = FC.Scroller = Class.extend({

	el: null, // the guaranteed outer element
	scrollEl: null, // the element with the scrollbars
	overflowX: null,
	overflowY: null,


	constructor: function(options) {
		options = options || {};
		this.overflowX = options.overflowX || options.overflow || 'auto';
		this.overflowY = options.overflowY || options.overflow || 'auto';
	},


	render: function() {
		this.el = this.renderEl();
		this.applyOverflow();
	},


	renderEl: function() {
		return (this.scrollEl = $('<div class="fc-scroller"></div>'));
	},


	// sets to natural height, unlocks overflow
	clear: function() {
		this.setHeight('auto');
		this.applyOverflow();
	},


	destroy: function() {
		this.el.remove();
	},


	// Overflow
	// -----------------------------------------------------------------------------------------------------------------


	applyOverflow: function() {
		this.scrollEl.css({
			'overflow-x': this.overflowX,
			'overflow-y': this.overflowY
		});
	},


	// Causes any 'auto' overflow values to resolves to 'scroll' or 'hidden'.
	// Useful for preserving scrollbar widths regardless of future resizes.
	// Can pass in scrollbarWidths for optimization.
	lockOverflow: function(scrollbarWidths) {
		var overflowX = this.overflowX;
		var overflowY = this.overflowY;

		scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();

		if (overflowX === 'auto') {
			overflowX = (
					scrollbarWidths.top || scrollbarWidths.bottom || // horizontal scrollbars?
					// OR scrolling pane with massless scrollbars?
					this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth
						// subtract 1 because of IE off-by-one issue
				) ? 'scroll' : 'hidden';
		}

		if (overflowY === 'auto') {
			overflowY = (
					scrollbarWidths.left || scrollbarWidths.right || // vertical scrollbars?
					// OR scrolling pane with massless scrollbars?
					this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight
						// subtract 1 because of IE off-by-one issue
				) ? 'scroll' : 'hidden';
		}

		this.scrollEl.css({ 'overflow-x': overflowX, 'overflow-y': overflowY });
	},


	// Getters / Setters
	// -----------------------------------------------------------------------------------------------------------------


	setHeight: function(height) {
		this.scrollEl.height(height);
	},


	getScrollTop: function() {
		return this.scrollEl.scrollTop();
	},


	setScrollTop: function(top) {
		this.scrollEl.scrollTop(top);
	},


	getClientWidth: function() {
		return this.scrollEl[0].clientWidth;
	},


	getClientHeight: function() {
		return this.scrollEl[0].clientHeight;
	},


	getScrollbarWidths: function() {
		return getScrollbarWidths(this.scrollEl);
	}

});

;;
function Iterator(items) {
    this.items = items || [];
}


/* Calls a method on every item passing the arguments through */
Iterator.prototype.proxyCall = function(methodName) {
    var args = Array.prototype.slice.call(arguments, 1);
    var results = [];

    this.items.forEach(function(item) {
        results.push(item[methodName].apply(item, args));
    });

    return results;
};

;;

/* Toolbar with buttons and title
----------------------------------------------------------------------------------------------------------------------*/

function Toolbar(calendar, toolbarOptions) {
	var t = this;

	// exports
	t.setToolbarOptions = setToolbarOptions;
	t.render = render;
	t.removeElement = removeElement;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	t.getViewsWithButtons = getViewsWithButtons;
	t.el = null; // mirrors local `el`

	// locals
	var el;
	var viewsWithButtons = [];

	// method to update toolbar-specific options, not calendar-wide options
	function setToolbarOptions(newToolbarOptions) {
		toolbarOptions = newToolbarOptions;
	}

	// can be called repeatedly and will rerender
	function render() {
		var sections = toolbarOptions.layout;

		if (sections) {
			if (!el) {
				el = this.el = $("<div class='fc-toolbar "+ toolbarOptions.extraClasses + "'/>");
			}
			else {
				el.empty();
			}
			el.append(renderSection('left'))
				.append(renderSection('right'))
				.append(renderSection('center'))
				.append('<div class="fc-clear"/>');
		}
		else {
			removeElement();
		}
	}


	function removeElement() {
		if (el) {
			el.remove();
			el = t.el = null;
		}
	}


	function renderSection(position) {
		var theme = calendar.theme;
		var sectionEl = $('<div class="fc-' + position + '"/>');
		var buttonStr = toolbarOptions.layout[position];
		var calendarCustomButtons = calendar.opt('customButtons') || {};
		var calendarButtonTextOverrides = calendar.overrides.buttonText || {};
		var calendarButtonText = calendar.opt('buttonText') || {};

		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				var groupChildren = $();
				var isOnlyButtons = true;
				var groupEl;

				$.each(this.split(','), function(j, buttonName) {
					var customButtonProps;
					var viewSpec;
					var buttonClick;
					var buttonIcon; // only one of these will be set
					var buttonText; // "
					var buttonInnerHtml;
					var buttonClasses;
					var buttonEl;

					if (buttonName == 'title') {
						groupChildren = groupChildren.add($('<h2>&nbsp;</h2>')); // we always want it to take up height
						isOnlyButtons = false;
					}
					else {

						if ((customButtonProps = calendarCustomButtons[buttonName])) {
							buttonClick = function(ev) {
								if (customButtonProps.click) {
									customButtonProps.click.call(buttonEl[0], ev);
								}
							};
							(buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
							(buttonIcon = theme.getIconClass(buttonName)) ||
							(buttonText = customButtonProps.text); // jshint ignore:line
						}
						else if ((viewSpec = calendar.getViewSpec(buttonName))) {
							viewsWithButtons.push(buttonName);
							buttonClick = function() {
								calendar.changeView(buttonName);
							};
							(buttonText = viewSpec.buttonTextOverride) ||
							(buttonIcon = theme.getIconClass(buttonName)) ||
							(buttonText = viewSpec.buttonTextDefault); // jshint ignore:line
						}
						else if (calendar[buttonName]) { // a calendar method
							buttonClick = function() {
								calendar[buttonName]();
							};
							(buttonText = calendarButtonTextOverrides[buttonName]) ||
							(buttonIcon = theme.getIconClass(buttonName)) ||
							(buttonText = calendarButtonText[buttonName]); // jshint ignore:line
							//            ^ everything else is considered default
						}

						if (buttonClick) {

							buttonClasses = [
								'fc-' + buttonName + '-button',
								theme.getClass('button'),
								theme.getClass('stateDefault')
							];

							if (buttonText) {
								buttonInnerHtml = htmlEscape(buttonText);
							}
							else if (buttonIcon) {
								buttonInnerHtml = "<span class='" + buttonIcon + "'></span>";
							}

							buttonEl = $( // type="button" so that it doesn't submit a form
								'<button type="button" class="' + buttonClasses.join(' ') + '">' +
									buttonInnerHtml +
								'</button>'
								)
								.click(function(ev) {
									// don't process clicks for disabled buttons
									if (!buttonEl.hasClass(theme.getClass('stateDisabled'))) {

										buttonClick(ev);

										// after the click action, if the button becomes the "active" tab, or disabled,
										// it should never have a hover class, so remove it now.
										if (
											buttonEl.hasClass(theme.getClass('stateActive')) ||
											buttonEl.hasClass(theme.getClass('stateDisabled'))
										) {
											buttonEl.removeClass(theme.getClass('stateHover'));
										}
									}
								})
								.mousedown(function() {
									// the *down* effect (mouse pressed in).
									// only on buttons that are not the "active" tab, or disabled
									buttonEl
										.not('.' + theme.getClass('stateActive'))
										.not('.' + theme.getClass('stateDisabled'))
										.addClass(theme.getClass('stateDown'));
								})
								.mouseup(function() {
									// undo the *down* effect
									buttonEl.removeClass(theme.getClass('stateDown'));
								})
								.hover(
									function() {
										// the *hover* effect.
										// only on buttons that are not the "active" tab, or disabled
										buttonEl
											.not('.' + theme.getClass('stateActive'))
											.not('.' + theme.getClass('stateDisabled'))
											.addClass(theme.getClass('stateHover'));
									},
									function() {
										// undo the *hover* effect
										buttonEl
											.removeClass(theme.getClass('stateHover'))
											.removeClass(theme.getClass('stateDown')); // if mouseleave happens before mouseup
									}
								);

							groupChildren = groupChildren.add(buttonEl);
						}
					}
				});

				if (isOnlyButtons) {
					groupChildren
						.first().addClass(theme.getClass('cornerLeft')).end()
						.last().addClass(theme.getClass('cornerRight')).end();
				}

				if (groupChildren.length > 1) {
					groupEl = $('<div/>');
					if (isOnlyButtons) {
						groupEl.addClass(theme.getClass('buttonGroup'));
					}
					groupEl.append(groupChildren);
					sectionEl.append(groupEl);
				}
				else {
					sectionEl.append(groupChildren); // 1 or 0 children
				}
			});
		}

		return sectionEl;
	}


	function updateTitle(text) {
		if (el) {
			el.find('h2').text(text);
		}
	}


	function activateButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.addClass(calendar.theme.getClass('stateActive'));
		}
	}


	function deactivateButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.removeClass(calendar.theme.getClass('stateActive'));
		}
	}


	function disableButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.prop('disabled', true)
				.addClass(calendar.theme.getClass('stateDisabled'));
		}
	}


	function enableButton(buttonName) {
		if (el) {
			el.find('.fc-' + buttonName + '-button')
				.prop('disabled', false)
				.removeClass(calendar.theme.getClass('stateDisabled'));
		}
	}


	function getViewsWithButtons() {
		return viewsWithButtons;
	}

}

;;

var Calendar = FC.Calendar = Class.extend(EmitterMixin, {

	view: null, // current View object
	viewsByType: null, // holds all instantiated view instances, current or not
	currentDate: null, // unzoned moment. private (public API should use getDate instead)
	theme: null,
	loadingLevel: 0, // number of simultaneous loading tasks


	constructor: function(el, overrides) {

		// declare the current calendar instance relies on GlobalEmitter. needed for garbage collection.
		// unneeded() is called in destroy.
		GlobalEmitter.needed();

		this.el = el;
		this.viewsByType = {};
		this.viewSpecCache = {};

		this.initOptionsInternals(overrides);
		this.initMomentInternals(); // needs to happen after options hash initialized
		this.initCurrentDate();
		this.initEventManager();

		EventManager.call(this); // needs options immediately
		this.initialize();
	},


	// Subclasses can override this for initialization logic after the constructor has been called
	initialize: function() {
	},


	// Public API
	// -----------------------------------------------------------------------------------------------------------------


	getView: function() {
		return this.view;
	},


	publiclyTrigger: function(name, triggerInfo) {
		var optHandler = this.opt(name);
		var context;
		var args;

		if ($.isPlainObject(triggerInfo)) {
			context = triggerInfo.context;
			args = triggerInfo.args;
		}
		else if ($.isArray(triggerInfo)) {
			args = triggerInfo;
		}

		if (context == null) {
			context = this.el[0]; // fallback context
		}

		if (!args) {
			args = [];
		}

		this.triggerWith(name, context, args); // Emitter's method

		if (optHandler) {
			return optHandler.apply(context, args);
		}
	},


	hasPublicHandlers: function(name) {
		return this.hasHandlers(name) ||
			this.opt(name); // handler specified in options
	},


	// View
	// -----------------------------------------------------------------------------------------------------------------


	// Given a view name for a custom view or a standard view, creates a ready-to-go View object
	instantiateView: function(viewType) {
		var spec = this.getViewSpec(viewType);

		return new spec['class'](this, spec);
	},


	// Returns a boolean about whether the view is okay to instantiate at some point
	isValidViewType: function(viewType) {
		return Boolean(this.getViewSpec(viewType));
	},


	changeView: function(viewName, dateOrRange) {

		if (dateOrRange) {

			if (dateOrRange.start && dateOrRange.end) { // a range
				this.recordOptionOverrides({ // will not rerender
					visibleRange: dateOrRange
				});
			}
			else { // a date
				this.currentDate = this.moment(dateOrRange).stripZone(); // just like gotoDate
			}
		}

		this.renderView(viewName);
	},


	// Forces navigation to a view for the given date.
	// `viewType` can be a specific view name or a generic one like "week" or "day".
	zoomTo: function(newDate, viewType) {
		var spec;

		viewType = viewType || 'day'; // day is default zoom
		spec = this.getViewSpec(viewType) || this.getUnitViewSpec(viewType);

		this.currentDate = newDate.clone();
		this.renderView(spec ? spec.type : null);
	},


	// Current Date
	// -----------------------------------------------------------------------------------------------------------------


	initCurrentDate: function() {
		var defaultDateInput = this.opt('defaultDate');

		// compute the initial ambig-timezone date
		if (defaultDateInput != null) {
			this.currentDate = this.moment(defaultDateInput).stripZone();
		}
		else {
			this.currentDate = this.getNow(); // getNow already returns unzoned
		}
	},


	reportViewDatesChanged: function(view, dateProfile) {
		this.currentDate = dateProfile.date; // might have been constrained by view dates
		this.setToolbarsTitle(view.title);
		this.updateToolbarButtons();
	},


	prev: function() {
		var prevInfo = this.view.buildPrevDateProfile(this.currentDate);

		if (prevInfo.isValid) {
			this.currentDate = prevInfo.date;
			this.renderView();
		}
	},


	next: function() {
		var nextInfo = this.view.buildNextDateProfile(this.currentDate);

		if (nextInfo.isValid) {
			this.currentDate = nextInfo.date;
			this.renderView();
		}
	},


	prevYear: function() {
		this.currentDate.add(-1, 'years');
		this.renderView();
	},


	nextYear: function() {
		this.currentDate.add(1, 'years');
		this.renderView();
	},


	today: function() {
		this.currentDate = this.getNow(); // should deny like prev/next?
		this.renderView();
	},


	gotoDate: function(zonedDateInput) {
		this.currentDate = this.moment(zonedDateInput).stripZone();
		this.renderView();
	},


	incrementDate: function(delta) {
		this.currentDate.add(moment.duration(delta));
		this.renderView();
	},


	// for external API
	getDate: function() {
		return this.applyTimezone(this.currentDate); // infuse the calendar's timezone
	},


	// Loading Triggering
	// -----------------------------------------------------------------------------------------------------------------


	// Should be called when any type of async data fetching begins
	pushLoading: function() {
		if (!(this.loadingLevel++)) {
			this.publiclyTrigger('loading', [ true, this.view ]);
		}
	},


	// Should be called when any type of async data fetching completes
	popLoading: function() {
		if (!(--this.loadingLevel)) {
			this.publiclyTrigger('loading', [ false, this.view ]);
		}
	},


	// Selection
	// -----------------------------------------------------------------------------------------------------------------


	// this public method receives start/end dates in any format, with any timezone
	select: function(zonedStartInput, zonedEndInput) {
		this.view.select(
			this.buildSelectFootprint.apply(this, arguments)
		);
	},


	unselect: function() { // safe to be called before renderView
		if (this.view) {
			this.view.unselect();
		}
	},


	// Given arguments to the select method in the API, returns a span (unzoned start/end and other info)
	buildSelectFootprint: function(zonedStartInput, zonedEndInput) {
		var start = this.moment(zonedStartInput).stripZone();
		var end;

		if (zonedEndInput) {
			end = this.moment(zonedEndInput).stripZone();
		}
		else if (start.hasTime()) {
			end = start.clone().add(this.defaultTimedEventDuration);
		}
		else {
			end = start.clone().add(this.defaultAllDayEventDuration);
		}

		return new ComponentFootprint(
			new UnzonedRange(start, end),
			!start.hasTime()
		);
	},


	// Misc
	// -----------------------------------------------------------------------------------------------------------------


	// will return `null` if invalid range
	parseUnzonedRange: function(rangeInput) {
		var start = null;
		var end = null;

		if (rangeInput.start) {
			start = this.moment(rangeInput.start).stripZone();
		}

		if (rangeInput.end) {
			end = this.moment(rangeInput.end).stripZone();
		}

		if (!start && !end) {
			return null;
		}

		if (start && end && end.isBefore(start)) {
			return null;
		}

		return new UnzonedRange(start, end);
	},


	rerenderEvents: function() { // API method. destroys old events if previously rendered.
		if (this.elementVisible()) {
			this.view.flash('displayingEvents');
		}
	},


	initEventManager: function() {
		var _this = this;
		var eventManager = new EventManager(this);
		var rawSources = this.opt('eventSources') || [];
		var singleRawSource = this.opt('events');

		this.eventManager = eventManager;

		if (singleRawSource) {
			rawSources.unshift(singleRawSource);
		}

		eventManager.on('release', function(eventsPayload) {
			_this.trigger('eventsReset', eventsPayload);
		});

		eventManager.freeze();

		rawSources.forEach(function(rawSource) {
			var source = EventSourceParser.parse(rawSource, _this);

			if (source) {
				eventManager.addSource(source);
			}
		});

		eventManager.thaw();
	},


	requestEvents: function(start, end) {
		return this.eventManager.requestEvents(
			start,
			end,
			this.opt('timezone'),
			!this.opt('lazyFetching')
		);
	}

});

;;
/*
Options binding/triggering system.
*/
Calendar.mixin({

	dirDefaults: null, // option defaults related to LTR or RTL
	localeDefaults: null, // option defaults related to current locale
	overrides: null, // option overrides given to the fullCalendar constructor
	dynamicOverrides: null, // options set with dynamic setter method. higher precedence than view overrides.
	optionsModel: null, // all defaults combined with overrides


	initOptionsInternals: function(overrides) {
		this.overrides = $.extend({}, overrides); // make a copy
		this.dynamicOverrides = {};
		this.optionsModel = new Model();

		this.populateOptionsHash();
	},


	// public getter/setter
	option: function(name, value) {
		var newOptionHash;

		if (typeof name === 'string') {
			if (value === undefined) { // getter
				return this.optionsModel.get(name);
			}
			else { // setter for individual option
				newOptionHash = {};
				newOptionHash[name] = value;
				this.setOptions(newOptionHash);
			}
		}
		else if (typeof name === 'object') { // compound setter with object input
			this.setOptions(name);
		}
	},


	// private getter
	opt: function(name) {
		return this.optionsModel.get(name);
	},


	setOptions: function(newOptionHash) {
		var optionCnt = 0;
		var optionName;

		this.recordOptionOverrides(newOptionHash); // will trigger optionsModel watchers

		for (optionName in newOptionHash) {
			optionCnt++;
		}

		// special-case handling of single option change.
		// if only one option change, `optionName` will be its name.
		if (optionCnt === 1) {
			if (optionName === 'height' || optionName === 'contentHeight' || optionName === 'aspectRatio') {
				this.updateSize(true); // true = allow recalculation of height
				return;
			}
			else if (optionName === 'defaultDate') {
				return; // can't change date this way. use gotoDate instead
			}
			else if (optionName === 'businessHours') {
				if (this.view) {
					this.view.unrenderBusinessHours();
					this.view.renderBusinessHours();
				}
				return;
			}
			else if (optionName === 'timezone') {
				this.view.flash('initialEvents');
				return;
			}
		}

		// catch-all. rerender the header and footer and rebuild/rerender the current view
		this.renderHeader();
		this.renderFooter();

		// even non-current views will be affected by this option change. do before rerender
		// TODO: detangle
		this.viewsByType = {};

		this.reinitView();
	},


	// Computes the flattened options hash for the calendar and assigns to `this.options`.
	// Assumes this.overrides and this.dynamicOverrides have already been initialized.
	populateOptionsHash: function() {
		var locale, localeDefaults;
		var isRTL, dirDefaults;
		var rawOptions;

		locale = firstDefined( // explicit locale option given?
			this.dynamicOverrides.locale,
			this.overrides.locale
		);
		localeDefaults = localeOptionHash[locale];
		if (!localeDefaults) { // explicit locale option not given or invalid?
			locale = Calendar.defaults.locale;
			localeDefaults = localeOptionHash[locale] || {};
		}

		isRTL = firstDefined( // based on options computed so far, is direction RTL?
			this.dynamicOverrides.isRTL,
			this.overrides.isRTL,
			localeDefaults.isRTL,
			Calendar.defaults.isRTL
		);
		dirDefaults = isRTL ? Calendar.rtlDefaults : {};

		this.dirDefaults = dirDefaults;
		this.localeDefaults = localeDefaults;

		rawOptions = mergeOptions([ // merge defaults and overrides. lowest to highest precedence
			Calendar.defaults, // global defaults
			dirDefaults,
			localeDefaults,
			this.overrides,
			this.dynamicOverrides
		]);
		populateInstanceComputableOptions(rawOptions); // fill in gaps with computed options

		this.optionsModel.reset(rawOptions);
	},


	// stores the new options internally, but does not rerender anything.
	recordOptionOverrides: function(newOptionHash) {
		var optionName;

		for (optionName in newOptionHash) {
			this.dynamicOverrides[optionName] = newOptionHash[optionName];
		}

		this.viewSpecCache = {}; // the dynamic override invalidates the options in this cache, so just clear it
		this.populateOptionsHash(); // this.options needs to be recomputed after the dynamic override
	}

});

;;

Calendar.mixin({

	defaultAllDayEventDuration: null,
	defaultTimedEventDuration: null,
	localeData: null,


	initMomentInternals: function() {
		var _this = this;

		this.defaultAllDayEventDuration = moment.duration(this.opt('defaultAllDayEventDuration'));
		this.defaultTimedEventDuration = moment.duration(this.opt('defaultTimedEventDuration'));

		// Called immediately, and when any of the options change.
		// Happens before any internal objects rebuild or rerender, because this is very core.
		this.optionsModel.watch('buildingMomentLocale', [
			'?locale', '?monthNames', '?monthNamesShort', '?dayNames', '?dayNamesShort',
			'?firstDay', '?weekNumberCalculation'
		], function(opts) {
			var weekNumberCalculation = opts.weekNumberCalculation;
			var firstDay = opts.firstDay;
			var _week;

			// normalize
			if (weekNumberCalculation === 'iso') {
				weekNumberCalculation = 'ISO'; // normalize
			}

			var localeData = Object.create( // make a cheap copy
				getMomentLocaleData(opts.locale) // will fall back to en
			);

			if (opts.monthNames) {
				localeData._months = opts.monthNames;
			}
			if (opts.monthNamesShort) {
				localeData._monthsShort = opts.monthNamesShort;
			}
			if (opts.dayNames) {
				localeData._weekdays = opts.dayNames;
			}
			if (opts.dayNamesShort) {
				localeData._weekdaysShort = opts.dayNamesShort;
			}

			if (firstDay == null && weekNumberCalculation === 'ISO') {
				firstDay = 1;
			}
			if (firstDay != null) {
				_week = Object.create(localeData._week); // _week: { dow: # }
				_week.dow = firstDay;
				localeData._week = _week;
			}

			if ( // whitelist certain kinds of input
				weekNumberCalculation === 'ISO' ||
				weekNumberCalculation === 'local' ||
				typeof weekNumberCalculation === 'function'
			) {
				localeData._fullCalendar_weekCalc = weekNumberCalculation; // moment-ext will know what to do with it
			}

			_this.localeData = localeData;

			// If the internal current date object already exists, move to new locale.
			// We do NOT need to do this technique for event dates, because this happens when converting to "segments".
			if (_this.currentDate) {
				_this.localizeMoment(_this.currentDate); // sets to localeData
			}
		});
	},


	// Builds a moment using the settings of the current calendar: timezone and locale.
	// Accepts anything the vanilla moment() constructor accepts.
	moment: function() {
		var mom;

		if (this.opt('timezone') === 'local') {
			mom = FC.moment.apply(null, arguments);

			// Force the moment to be local, because FC.moment doesn't guarantee it.
			if (mom.hasTime()) { // don't give ambiguously-timed moments a local zone
				mom.local();
			}
		}
		else if (this.opt('timezone') === 'UTC') {
			mom = FC.moment.utc.apply(null, arguments); // process as UTC
		}
		else {
			mom = FC.moment.parseZone.apply(null, arguments); // let the input decide the zone
		}

		this.localizeMoment(mom); // TODO

		return mom;
	},


	msToMoment: function(ms, forceAllDay) {
		var mom = FC.moment.utc(ms); // TODO: optimize by using Date.UTC

		if (forceAllDay) {
			mom.stripTime();
		}
		else {
			mom = this.applyTimezone(mom); // may or may not apply locale
		}

		this.localizeMoment(mom);

		return mom;
	},


	msToUtcMoment: function(ms, forceAllDay) {
		var mom = FC.moment.utc(ms); // TODO: optimize by using Date.UTC

		if (forceAllDay) {
			mom.stripTime();
		}

		this.localizeMoment(mom);

		return mom;
	},


	// Updates the given moment's locale settings to the current calendar locale settings.
	localizeMoment: function(mom) {
		mom._locale = this.localeData;
	},


	// Returns a boolean about whether or not the calendar knows how to calculate
	// the timezone offset of arbitrary dates in the current timezone.
	getIsAmbigTimezone: function() {
		return this.opt('timezone') !== 'local' && this.opt('timezone') !== 'UTC';
	},


	// Returns a copy of the given date in the current timezone. Has no effect on dates without times.
	applyTimezone: function(date) {
		if (!date.hasTime()) {
			return date.clone();
		}

		var zonedDate = this.moment(date.toArray());
		var timeAdjust = date.time() - zonedDate.time();
		var adjustedZonedDate;

		// Safari sometimes has problems with this coersion when near DST. Adjust if necessary. (bug #2396)
		if (timeAdjust) { // is the time result different than expected?
			adjustedZonedDate = zonedDate.clone().add(timeAdjust); // add milliseconds
			if (date.time() - adjustedZonedDate.time() === 0) { // does it match perfectly now?
				zonedDate = adjustedZonedDate;
			}
		}

		return zonedDate;
	},


	/*
	Assumes the footprint is non-open-ended.
	*/
	footprintToDateProfile: function(componentFootprint, ignoreEnd) {
		var start = FC.moment.utc(componentFootprint.unzonedRange.startMs);
		var end;

		if (!ignoreEnd) {
			end = FC.moment.utc(componentFootprint.unzonedRange.endMs);
		}

		if (componentFootprint.isAllDay) {
			start.stripTime();

			if (end) {
				end.stripTime();
			}
		}
		else {
			start = this.applyTimezone(start);

			if (end) {
				end = this.applyTimezone(end);
			}
		}

		return new EventDateProfile(start, end, this);
	},


	// Returns a moment for the current date, as defined by the client's computer or from the `now` option.
	// Will return an moment with an ambiguous timezone.
	getNow: function() {
		var now = this.opt('now');
		if (typeof now === 'function') {
			now = now();
		}
		return this.moment(now).stripZone();
	},


	// Produces a human-readable string for the given duration.
	// Side-effect: changes the locale of the given duration.
	humanizeDuration: function(duration) {
		return duration.locale(this.opt('locale')).humanize();
	},



	// Event-Specific Date Utilities. TODO: move
	// -----------------------------------------------------------------------------------------------------------------


	// Get an event's normalized end date. If not present, calculate it from the defaults.
	getEventEnd: function(event) {
		if (event.end) {
			return event.end.clone();
		}
		else {
			return this.getDefaultEventEnd(event.allDay, event.start);
		}
	},


	// Given an event's allDay status and start date, return what its fallback end date should be.
	// TODO: rename to computeDefaultEventEnd
	getDefaultEventEnd: function(allDay, zonedStart) {
		var end = zonedStart.clone();

		if (allDay) {
			end.stripTime().add(this.defaultAllDayEventDuration);
		}
		else {
			end.add(this.defaultTimedEventDuration);
		}

		if (this.getIsAmbigTimezone()) {
			end.stripZone(); // we don't know what the tzo should be
		}

		return end;
	}

});

;;

Calendar.mixin({

	viewSpecCache: null, // cache of view definitions (initialized in Calendar.js)


	// Gets information about how to create a view. Will use a cache.
	getViewSpec: function(viewType) {
		var cache = this.viewSpecCache;

		return cache[viewType] || (cache[viewType] = this.buildViewSpec(viewType));
	},


	// Given a duration singular unit, like "week" or "day", finds a matching view spec.
	// Preference is given to views that have corresponding buttons.
	getUnitViewSpec: function(unit) {
		var viewTypes;
		var i;
		var spec;

		if ($.inArray(unit, unitsDesc) != -1) {

			// put views that have buttons first. there will be duplicates, but oh well
			viewTypes = this.header.getViewsWithButtons(); // TODO: include footer as well?
			$.each(FC.views, function(viewType) { // all views
				viewTypes.push(viewType);
			});

			for (i = 0; i < viewTypes.length; i++) {
				spec = this.getViewSpec(viewTypes[i]);
				if (spec) {
					if (spec.singleUnit == unit) {
						return spec;
					}
				}
			}
		}
	},


	// Builds an object with information on how to create a given view
	buildViewSpec: function(requestedViewType) {
		var viewOverrides = this.overrides.views || {};
		var specChain = []; // for the view. lowest to highest priority
		var defaultsChain = []; // for the view. lowest to highest priority
		var overridesChain = []; // for the view. lowest to highest priority
		var viewType = requestedViewType;
		var spec; // for the view
		var overrides; // for the view
		var durationInput;
		var duration;
		var unit;

		// iterate from the specific view definition to a more general one until we hit an actual View class
		while (viewType) {
			spec = fcViews[viewType];
			overrides = viewOverrides[viewType];
			viewType = null; // clear. might repopulate for another iteration

			if (typeof spec === 'function') { // TODO: deprecate
				spec = { 'class': spec };
			}

			if (spec) {
				specChain.unshift(spec);
				defaultsChain.unshift(spec.defaults || {});
				durationInput = durationInput || spec.duration;
				viewType = viewType || spec.type;
			}

			if (overrides) {
				overridesChain.unshift(overrides); // view-specific option hashes have options at zero-level
				durationInput = durationInput || overrides.duration;
				viewType = viewType || overrides.type;
			}
		}

		spec = mergeProps(specChain);
		spec.type = requestedViewType;
		if (!spec['class']) {
			return false;
		}

		// fall back to top-level `duration` option
		durationInput = durationInput ||
			this.dynamicOverrides.duration ||
			this.overrides.duration;

		if (durationInput) {
			duration = moment.duration(durationInput);

			if (duration.valueOf()) { // valid?

				unit = computeDurationGreatestUnit(duration, durationInput);

				spec.duration = duration;
				spec.durationUnit = unit;

				// view is a single-unit duration, like "week" or "day"
				// incorporate options for this. lowest priority
				if (duration.as(unit) === 1) {
					spec.singleUnit = unit;
					overridesChain.unshift(viewOverrides[unit] || {});
				}
			}
		}

		spec.defaults = mergeOptions(defaultsChain);
		spec.overrides = mergeOptions(overridesChain);

		this.buildViewSpecOptions(spec);
		this.buildViewSpecButtonText(spec, requestedViewType);

		return spec;
	},


	// Builds and assigns a view spec's options object from its already-assigned defaults and overrides
	buildViewSpecOptions: function(spec) {
		spec.options = mergeOptions([ // lowest to highest priority
			Calendar.defaults, // global defaults
			spec.defaults, // view's defaults (from ViewSubclass.defaults)
			this.dirDefaults,
			this.localeDefaults, // locale and dir take precedence over view's defaults!
			this.overrides, // calendar's overrides (options given to constructor)
			spec.overrides, // view's overrides (view-specific options)
			this.dynamicOverrides // dynamically set via setter. highest precedence
		]);
		populateInstanceComputableOptions(spec.options);
	},


	// Computes and assigns a view spec's buttonText-related options
	buildViewSpecButtonText: function(spec, requestedViewType) {

		// given an options object with a possible `buttonText` hash, lookup the buttonText for the
		// requested view, falling back to a generic unit entry like "week" or "day"
		function queryButtonText(options) {
			var buttonText = options.buttonText || {};
			return buttonText[requestedViewType] ||
				// view can decide to look up a certain key
				(spec.buttonTextKey ? buttonText[spec.buttonTextKey] : null) ||
				// a key like "month"
				(spec.singleUnit ? buttonText[spec.singleUnit] : null);
		}

		// highest to lowest priority
		spec.buttonTextOverride =
			queryButtonText(this.dynamicOverrides) ||
			queryButtonText(this.overrides) || // constructor-specified buttonText lookup hash takes precedence
			spec.overrides.buttonText; // `buttonText` for view-specific options is a string

		// highest to lowest priority. mirrors buildViewSpecOptions
		spec.buttonTextDefault =
			queryButtonText(this.localeDefaults) ||
			queryButtonText(this.dirDefaults) ||
			spec.defaults.buttonText || // a single string. from ViewSubclass.defaults
			queryButtonText(Calendar.defaults) ||
			(spec.duration ? this.humanizeDuration(spec.duration) : null) || // like "3 days"
			requestedViewType; // fall back to given view name
	}

});

;;

Calendar.mixin({

	el: null,
	contentEl: null,
	suggestedViewHeight: null,
	windowResizeProxy: null,
	ignoreWindowResize: 0,


	render: function() {
		if (!this.contentEl) {
			this.initialRender();
		}
		else if (this.elementVisible()) {
			// mainly for the public API
			this.calcSize();
			this.renderView();
		}
	},


	initialRender: function() {
		var _this = this;
		var el = this.el;

		el.addClass('fc');

		// event delegation for nav links
		el.on('click.fc', 'a[data-goto]', function(ev) {
			var anchorEl = $(this);
			var gotoOptions = anchorEl.data('goto'); // will automatically parse JSON
			var date = _this.moment(gotoOptions.date);
			var viewType = gotoOptions.type;

			// property like "navLinkDayClick". might be a string or a function
			var customAction = _this.view.opt('navLink' + capitaliseFirstLetter(viewType) + 'Click');

			if (typeof customAction === 'function') {
				customAction(date, ev);
			}
			else {
				if (typeof customAction === 'string') {
					viewType = customAction;
				}
				_this.zoomTo(date, viewType);
			}
		});

		// called immediately, and upon option change
		this.optionsModel.watch('settingTheme', [ '?theme', '?themeSystem' ], function(opts) {
			var themeClass = ThemeRegistry.getThemeClass(opts.themeSystem || opts.theme);
			var theme = new themeClass(_this.optionsModel);
			var widgetClass = theme.getClass('widget');

			_this.theme = theme;

			if (widgetClass) {
				el.addClass(widgetClass);
			}
		}, function() {
			var widgetClass = _this.theme.getClass('widget');

			_this.theme = null;

			if (widgetClass) {
				el.removeClass(widgetClass);
			}
		});

		// called immediately, and upon option change.
		// HACK: locale often affects isRTL, so we explicitly listen to that too.
		this.optionsModel.watch('applyingDirClasses', [ '?isRTL', '?locale' ], function(opts) {
			el.toggleClass('fc-ltr', !opts.isRTL);
			el.toggleClass('fc-rtl', opts.isRTL);
		});

		this.contentEl = $("<div class='fc-view-container'/>").prependTo(el);

		this.initToolbars();
		this.renderHeader();
		this.renderFooter();
		this.renderView(this.opt('defaultView'));

		if (this.opt('handleWindowResize')) {
			$(window).resize(
				this.windowResizeProxy = debounce( // prevents rapid calls
					this.windowResize.bind(this),
					this.opt('windowResizeDelay')
				)
			);
		}
	},


	destroy: function() {

		if (this.view) {
			this.view.removeElement();

			// NOTE: don't null-out this.view in case API methods are called after destroy.
			// It is still the "current" view, just not rendered.
		}

		this.toolbarsManager.proxyCall('removeElement');
		this.contentEl.remove();
		this.el.removeClass('fc fc-ltr fc-rtl');

		// removes theme-related root className
		this.optionsModel.unwatch('settingTheme');

		this.el.off('.fc'); // unbind nav link handlers

		if (this.windowResizeProxy) {
			$(window).unbind('resize', this.windowResizeProxy);
			this.windowResizeProxy = null;
		}

		GlobalEmitter.unneeded();
	},


	elementVisible: function() {
		return this.el.is(':visible');
	},



	// View Rendering
	// -----------------------------------------------------------------------------------


	// Renders a view because of a date change, view-type change, or for the first time.
	// If not given a viewType, keep the current view but render different dates.
	// Accepts an optional scroll state to restore to.
	renderView: function(viewType, forcedScroll) {

		this.ignoreWindowResize++;

		var needsClearView = this.view && viewType && this.view.type !== viewType;

		// if viewType is changing, remove the old view's rendering
		if (needsClearView) {
			this.freezeContentHeight(); // prevent a scroll jump when view element is removed
			this.clearView();
		}

		// if viewType changed, or the view was never created, create a fresh view
		if (!this.view && viewType) {
			this.view =
				this.viewsByType[viewType] ||
				(this.viewsByType[viewType] = this.instantiateView(viewType));

			this.view.setElement(
				$("<div class='fc-view fc-" + viewType + "-view' />").appendTo(this.contentEl)
			);
			this.toolbarsManager.proxyCall('activateButton', viewType);
		}

		if (this.view) {

			if (forcedScroll) {
				this.view.addForcedScroll(forcedScroll);
			}

			if (this.elementVisible()) {
				this.view.setDate(this.currentDate);
			}
		}

		if (needsClearView) {
			this.thawContentHeight();
		}

		this.ignoreWindowResize--;
	},


	// Unrenders the current view and reflects this change in the Header.
	// Unregsiters the `view`, but does not remove from viewByType hash.
	clearView: function() {
		this.toolbarsManager.proxyCall('deactivateButton', this.view.type);
		this.view.removeElement();
		this.view = null;
	},


	// Destroys the view, including the view object. Then, re-instantiates it and renders it.
	// Maintains the same scroll state.
	// TODO: maintain any other user-manipulated state.
	reinitView: function() {
		this.ignoreWindowResize++;
		this.freezeContentHeight();

		var viewType = this.view.type;
		var scrollState = this.view.queryScroll();
		this.clearView();
		this.calcSize();
		this.renderView(viewType, scrollState);

		this.thawContentHeight();
		this.ignoreWindowResize--;
	},


	// Resizing
	// -----------------------------------------------------------------------------------


	getSuggestedViewHeight: function() {
		if (this.suggestedViewHeight === null) {
			this.calcSize();
		}
		return this.suggestedViewHeight;
	},


	isHeightAuto: function() {
		return this.opt('contentHeight') === 'auto' || this.opt('height') === 'auto';
	},


	updateSize: function(shouldRecalc) {
		if (this.elementVisible()) {

			if (shouldRecalc) {
				this._calcSize();
			}

			this.ignoreWindowResize++;
			this.view.updateSize(true); // isResize=true. will poll getSuggestedViewHeight() and isHeightAuto()
			this.ignoreWindowResize--;

			return true; // signal success
		}
	},


	calcSize: function() {
		if (this.elementVisible()) {
			this._calcSize();
		}
	},


	_calcSize: function() { // assumes elementVisible
		var contentHeightInput = this.opt('contentHeight');
		var heightInput = this.opt('height');

		if (typeof contentHeightInput === 'number') { // exists and not 'auto'
			this.suggestedViewHeight = contentHeightInput;
		}
		else if (typeof contentHeightInput === 'function') { // exists and is a function
			this.suggestedViewHeight = contentHeightInput();
		}
		else if (typeof heightInput === 'number') { // exists and not 'auto'
			this.suggestedViewHeight = heightInput - this.queryToolbarsHeight();
		}
		else if (typeof heightInput === 'function') { // exists and is a function
			this.suggestedViewHeight = heightInput() - this.queryToolbarsHeight();
		}
		else if (heightInput === 'parent') { // set to height of parent element
			this.suggestedViewHeight = this.el.parent().height() - this.queryToolbarsHeight();
		}
		else {
			this.suggestedViewHeight = Math.round(
				this.contentEl.width() /
				Math.max(this.opt('aspectRatio'), .5)
			);
		}
	},


	windowResize: function(ev) {
		if (
			!this.ignoreWindowResize &&
			ev.target === window && // so we don't process jqui "resize" events that have bubbled up
			this.view.renderUnzonedRange // view has already been rendered
		) {
			if (this.updateSize(true)) {
				this.publiclyTrigger('windowResize', [ this.view ]);
			}
		}
	},


	/* Height "Freezing"
	-----------------------------------------------------------------------------*/


	freezeContentHeight: function() {
		this.contentEl.css({
			width: '100%',
			height: this.contentEl.height(),
			overflow: 'hidden'
		});
	},


	thawContentHeight: function() {
		this.contentEl.css({
			width: '',
			height: '',
			overflow: ''
		});
	}

});

;;

Calendar.mixin({

	header: null,
	footer: null,
	toolbarsManager: null,


	initToolbars: function() {
		this.header = new Toolbar(this, this.computeHeaderOptions());
		this.footer = new Toolbar(this, this.computeFooterOptions());
		this.toolbarsManager = new Iterator([ this.header, this.footer ]);
	},


	computeHeaderOptions: function() {
		return {
			extraClasses: 'fc-header-toolbar',
			layout: this.opt('header')
		};
	},


	computeFooterOptions: function() {
		return {
			extraClasses: 'fc-footer-toolbar',
			layout: this.opt('footer')
		};
	},


	// can be called repeatedly and Header will rerender
	renderHeader: function() {
		var header = this.header;

		header.setToolbarOptions(this.computeHeaderOptions());
		header.render();

		if (header.el) {
			this.el.prepend(header.el);
		}
	},


	// can be called repeatedly and Footer will rerender
	renderFooter: function() {
		var footer = this.footer;

		footer.setToolbarOptions(this.computeFooterOptions());
		footer.render();

		if (footer.el) {
			this.el.append(footer.el);
		}
	},


	setToolbarsTitle: function(title) {
		this.toolbarsManager.proxyCall('updateTitle', title);
	},


	updateToolbarButtons: function() {
		var now = this.getNow();
		var view = this.view;
		var todayInfo = view.buildDateProfile(now);
		var prevInfo = view.buildPrevDateProfile(this.currentDate);
		var nextInfo = view.buildNextDateProfile(this.currentDate);

		this.toolbarsManager.proxyCall(
			(todayInfo.isValid && !view.currentUnzonedRange.containsDate(now)) ?
				'enableButton' :
				'disableButton',
			'today'
		);

		this.toolbarsManager.proxyCall(
			prevInfo.isValid ?
				'enableButton' :
				'disableButton',
			'prev'
		);

		this.toolbarsManager.proxyCall(
			nextInfo.isValid ?
				'enableButton' :
				'disableButton',
			'next'
		);
	},


	queryToolbarsHeight: function() {
		return this.toolbarsManager.items.reduce(function(accumulator, toolbar) {
			var toolbarHeight = toolbar.el ? toolbar.el.outerHeight(true) : 0; // includes margin
			return accumulator + toolbarHeight;
		}, 0);
	}

});

;;

var BUSINESS_HOUR_EVENT_DEFAULTS = {
	start: '09:00',
	end: '17:00',
	dow: [ 1, 2, 3, 4, 5 ], // monday - friday
	rendering: 'inverse-background'
	// classNames are defined in businessHoursSegClasses
};


/*
returns ComponentFootprint[]
`businessHourDef` is optional. Use Calendar's setting if omitted.
*/
Calendar.prototype.buildCurrentBusinessFootprints = function(wholeDay) {
	return this._buildCurrentBusinessFootprints(wholeDay, this.opt('businessHours'));
};


Calendar.prototype._buildCurrentBusinessFootprints = function(wholeDay, businessDefInput) {
	var eventPeriod = this.eventManager.currentPeriod;
	var businessInstanceGroup;

	if (eventPeriod) {
		businessInstanceGroup = this.buildBusinessInstanceGroup(
			wholeDay,
			businessDefInput,
			eventPeriod.unzonedRange
		);

		if (businessInstanceGroup) {
			return this.eventInstancesToFootprints( // in Calendar.constraints.js
				businessInstanceGroup.eventInstances
			);
		}
	}

	return [];
};


/*
If there are business hours, and they are within range, returns populated EventInstanceGroup.
If there are business hours, but they aren't within range, returns a zero-item EventInstanceGroup.
If there are NOT business hours, returns undefined.
*/
Calendar.prototype.buildBusinessInstanceGroup = function(wholeDay, rawComplexDef, unzonedRange) {
	var eventDefs = this.buildBusinessDefs(wholeDay, rawComplexDef);
	var eventInstanceGroup;

	if (eventDefs.length) {
		eventInstanceGroup = new EventInstanceGroup(
			eventDefsToEventInstances(eventDefs, unzonedRange)
		);

		// so that inverse-background rendering can happen even when no eventRanges in view
		eventInstanceGroup.explicitEventDef = eventDefs[0];

		return eventInstanceGroup;
	}
};


Calendar.prototype.buildBusinessDefs = function(wholeDay, rawComplexDef) {
	var rawDefs = [];
	var requireDow = false;
	var i;
	var defs = [];

	if (rawComplexDef === true) {
		rawDefs = [ {} ]; // will get BUSINESS_HOUR_EVENT_DEFAULTS verbatim
	}
	else if ($.isPlainObject(rawComplexDef)) {
		rawDefs = [ rawComplexDef ];
	}
	else if ($.isArray(rawComplexDef)) {
		rawDefs = rawComplexDef;
		requireDow = true; // every sub-definition NEEDS a day-of-week
	}

	for (i = 0; i < rawDefs.length; i++) {
		if (!requireDow || rawDefs[i].dow) {
			defs.push(
				this.buildBusinessDef(wholeDay, rawDefs[i])
			);
		}
	}

	return defs;
};


Calendar.prototype.buildBusinessDef = function(wholeDay, rawDef) {
	var fullRawDef = $.extend({}, BUSINESS_HOUR_EVENT_DEFAULTS, rawDef);

	if (wholeDay) {
		fullRawDef.start = null;
		fullRawDef.end = null;
	}

	return RecurringEventDef.parse(
		fullRawDef,
		new EventSource(this) // dummy source
	);
};

;;

/*
determines if eventInstanceGroup is allowed,
in relation to other EVENTS and business hours.
*/
Calendar.prototype.isEventInstanceGroupAllowed = function(eventInstanceGroup) {
	var eventDef = eventInstanceGroup.getEventDef();
	var eventFootprints = this.eventRangesToEventFootprints(eventInstanceGroup.getAllEventRanges());
	var i;

	var peerEventInstances = this.getPeerEventInstances(eventDef);
	var peerEventRanges = eventInstancesToEventRanges(peerEventInstances);
	var peerEventFootprints = this.eventRangesToEventFootprints(peerEventRanges);

	var constraintVal = eventDef.getConstraint();
	var overlapVal = eventDef.getOverlap();

	var eventAllowFunc = this.opt('eventAllow');

	for (i = 0; i < eventFootprints.length; i++) {
		if (
			!this.isFootprintAllowed(
				eventFootprints[i].componentFootprint,
				peerEventFootprints,
				constraintVal,
				overlapVal,
				eventFootprints[i].eventInstance
			)
		) {
			return false;
		}
	}

	if (eventAllowFunc) {
		for (i = 0; i < eventFootprints.length; i++) {
			if (
				eventAllowFunc(
					eventFootprints[i].componentFootprint.toLegacy(this),
					eventFootprints[i].getEventLegacy()
				) === false
			) {
				return false;
			}
		}
	}

	return true;
};


Calendar.prototype.getPeerEventInstances = function(eventDef) {
	return this.eventManager.getEventInstancesWithoutId(eventDef.id);
};


Calendar.prototype.isSelectionFootprintAllowed = function(componentFootprint) {
	var peerEventInstances = this.eventManager.getEventInstances();
	var peerEventRanges = eventInstancesToEventRanges(peerEventInstances);
	var peerEventFootprints = this.eventRangesToEventFootprints(peerEventRanges);

	var selectAllowFunc;

	if (
		this.isFootprintAllowed(
			componentFootprint,
			peerEventFootprints,
			this.opt('selectConstraint'),
			this.opt('selectOverlap')
		)
	) {
		selectAllowFunc = this.opt('selectAllow');

		if (selectAllowFunc) {
			return selectAllowFunc(componentFootprint.toLegacy(this)) !== false;
		}
		else {
			return true;
		}
	}

	return false;
};


Calendar.prototype.isFootprintAllowed = function(
	componentFootprint,
	peerEventFootprints,
	constraintVal,
	overlapVal,
	subjectEventInstance // optional
) {
	var constraintFootprints; // ComponentFootprint[]
	var overlapEventFootprints; // EventFootprint[]

	if (constraintVal != null) {
		constraintFootprints = this.constraintValToFootprints(constraintVal, componentFootprint.isAllDay);

		if (!this.isFootprintWithinConstraints(componentFootprint, constraintFootprints)) {
			return false;
		}
	}

	overlapEventFootprints = this.collectOverlapEventFootprints(peerEventFootprints, componentFootprint);

	if (overlapVal === false) {
		if (overlapEventFootprints.length) {
			return false;
		}
	}
	else if (typeof overlapVal === 'function') {
		if (!isOverlapsAllowedByFunc(overlapEventFootprints, overlapVal, subjectEventInstance)) {
			return false;
		}
	}

	if (subjectEventInstance) {
		if (!isOverlapEventInstancesAllowed(overlapEventFootprints, subjectEventInstance)) {
			return false;
		}
	}

	return true;
};


// Constraint
// ------------------------------------------------------------------------------------------------


Calendar.prototype.isFootprintWithinConstraints = function(componentFootprint, constraintFootprints) {
	var i;

	for (i = 0; i < constraintFootprints.length; i++) {
		if (this.footprintContainsFootprint(constraintFootprints[i], componentFootprint)) {
			return true;
		}
	}

	return false;
};


Calendar.prototype.constraintValToFootprints = function(constraintVal, isAllDay) {
	var eventInstances;

	if (constraintVal === 'businessHours') {
		return this.buildCurrentBusinessFootprints(isAllDay);
	}
	else if (typeof constraintVal === 'object') {
		eventInstances = this.parseEventDefToInstances(constraintVal); // handles recurring events

		if (!eventInstances) { // invalid input. fallback to parsing footprint directly
			return this.parseFootprints(constraintVal);
		}
		else {
			return this.eventInstancesToFootprints(eventInstances);
		}
	}
	else if (constraintVal != null) { // an ID
		eventInstances = this.eventManager.getEventInstancesWithId(constraintVal);

		return this.eventInstancesToFootprints(eventInstances);
	}
};


// conversion util
Calendar.prototype.eventInstancesToFootprints = function(eventInstances) {
	return eventFootprintsToComponentFootprints(
		this.eventRangesToEventFootprints(
			eventInstancesToEventRanges(eventInstances)
		)
	);
};


// Overlap
// ------------------------------------------------------------------------------------------------


Calendar.prototype.collectOverlapEventFootprints = function(peerEventFootprints, targetFootprint) {
	var overlapEventFootprints = [];
	var i;

	for (i = 0; i < peerEventFootprints.length; i++) {
		if (
			this.footprintsIntersect(
				targetFootprint,
				peerEventFootprints[i].componentFootprint
			)
		) {
			overlapEventFootprints.push(peerEventFootprints[i]);
		}
	}

	return overlapEventFootprints;
};


// optional subjectEventInstance
function isOverlapsAllowedByFunc(overlapEventFootprints, overlapFunc, subjectEventInstance) {
	var i;

	for (i = 0; i < overlapEventFootprints.length; i++) {
		if (
			!overlapFunc(
				overlapEventFootprints[i].eventInstance.toLegacy(),
				subjectEventInstance ? subjectEventInstance.toLegacy() : null
			)
		) {
			return false;
		}
	}

	return true;
}


function isOverlapEventInstancesAllowed(overlapEventFootprints, subjectEventInstance) {
	var subjectLegacyInstance = subjectEventInstance.toLegacy();
	var i;
	var overlapEventInstance;
	var overlapEventDef;
	var overlapVal;

	for (i = 0; i < overlapEventFootprints.length; i++) {
		overlapEventInstance = overlapEventFootprints[i].eventInstance;
		overlapEventDef = overlapEventInstance.def;

		// don't need to pass in calendar, because don't want to consider global eventOverlap property,
		// because we already considered that earlier in the process.
		overlapVal = overlapEventDef.getOverlap();

		if (overlapVal === false) {
			return false;
		}
		else if (typeof overlapVal === 'function') {
			if (
				!overlapVal(
					overlapEventInstance.toLegacy(),
					subjectLegacyInstance
				)
			) {
				return false;
			}
		}
	}

	return true;
}


// Conversion: eventDefs -> eventInstances -> eventRanges -> eventFootprints -> componentFootprints
// ------------------------------------------------------------------------------------------------
// NOTE: this might seem like repetitive code with the Grid class, however, this code is related to
// constraints whereas the Grid code is related to rendering. Each approach might want to convert
// eventRanges -> eventFootprints in a different way. Regardless, there are opportunities to make
// this more DRY.


/*
Returns false on invalid input.
*/
Calendar.prototype.parseEventDefToInstances = function(eventInput) {
	var eventPeriod = this.eventManager.currentPeriod;
	var eventDef = EventDefParser.parse(eventInput, new EventSource(this));

	if (!eventDef) { // invalid
		return false;
	}

	if (eventPeriod) {
		return eventDef.buildInstances(eventPeriod.unzonedRange);
	}
	else {
		return [];
	}
};


Calendar.prototype.eventRangesToEventFootprints = function(eventRanges) {
	var i;
	var eventFootprints = [];

	for (i = 0; i < eventRanges.length; i++) {
		eventFootprints.push.apply(eventFootprints, // append
			this.eventRangeToEventFootprints(eventRanges[i])
		);
	}

	return eventFootprints;
};


/*
TODO: somehow more DRY with Grid::eventRangeToEventFootprints
*/
Calendar.prototype.eventRangeToEventFootprints = function(eventRange) {
	return [
		new EventFootprint(
			new ComponentFootprint(
				eventRange.unzonedRange,
				eventRange.eventDef.isAllDay()
			),
			eventRange.eventDef,
			eventRange.eventInstance // might not exist
		)
	];
};


/*
Parses footprints directly.
Very similar to EventDateProfile::parse :(
*/
Calendar.prototype.parseFootprints = function(rawInput) {
	var start, end;

	if (rawInput.start) {
		start = this.moment(rawInput.start);

		if (!start.isValid()) {
			start = null;
		}
	}

	if (rawInput.end) {
		end = this.moment(rawInput.end);

		if (!end.isValid()) {
			end = null;
		}
	}

	return [
		new ComponentFootprint(
			new UnzonedRange(start, end),
			(start && !start.hasTime()) || (end && !end.hasTime()) // isAllDay
		)
	];
};


// Footprint Utils
// ----------------------------------------------------------------------------------------


Calendar.prototype.footprintContainsFootprint = function(outerFootprint, innerFootprint) {
	return outerFootprint.unzonedRange.containsRange(innerFootprint.unzonedRange);
};


Calendar.prototype.footprintsIntersect = function(footprint0, footprint1) {
	return footprint0.unzonedRange.intersectsWith(footprint1.unzonedRange);
};

;;

Calendar.mixin({

	// Sources
	// ------------------------------------------------------------------------------------


	getEventSources: function() {
		return this.eventManager.otherSources.slice(); // clone
	},


	getEventSourceById: function(id) {
		return this.eventManager.getSourceById(
			EventSource.normalizeId(id)
		);
	},


	addEventSource: function(sourceInput) {
		var source = EventSourceParser.parse(sourceInput, this);

		if (source) {
			this.eventManager.addSource(source);
		}
	},


	removeEventSources: function(sourceMultiQuery) {
		var eventManager = this.eventManager;
		var sources;
		var i;

		if (sourceMultiQuery == null) {
			this.eventManager.removeAllSources();
		}
		else {
			sources = eventManager.multiQuerySources(sourceMultiQuery);

			eventManager.freeze();

			for (i = 0; i < sources.length; i++) {
				eventManager.removeSource(sources[i]);
			}

			eventManager.thaw();
		}
	},


	removeEventSource: function(sourceQuery) {
		var eventManager = this.eventManager;
		var sources = eventManager.querySources(sourceQuery);
		var i;

		eventManager.freeze();

		for (i = 0; i < sources.length; i++) {
			eventManager.removeSource(sources[i]);
		}

		eventManager.thaw();
	},


	refetchEventSources: function(sourceMultiQuery) {
		var eventManager = this.eventManager;
		var sources = eventManager.multiQuerySources(sourceMultiQuery);
		var i;

		eventManager.freeze();

		for (i = 0; i < sources.length; i++) {
			eventManager.refetchSource(sources[i]);
		}

		eventManager.thaw();
	},


	// Events
	// ------------------------------------------------------------------------------------


	refetchEvents: function() {
		this.eventManager.refetchAllSources();
	},


	renderEvents: function(eventInputs, isSticky) {
		this.eventManager.freeze();

		for (var i = 0; i < eventInputs.length; i++) {
			this.renderEvent(eventInputs[i], isSticky);
		}

		this.eventManager.thaw();
	},


	renderEvent: function(eventInput, isSticky) {
		var eventManager = this.eventManager;
		var eventDef = EventDefParser.parse(
			eventInput,
			eventInput.source || eventManager.stickySource
		);

		if (eventDef) {
			eventManager.addEventDef(eventDef, isSticky);
		}
	},


	// legacyQuery operates on legacy event instance objects
	removeEvents: function(legacyQuery) {
		var eventManager = this.eventManager;
		var eventInstances = eventManager.getEventInstances();
		var legacyInstances;
		var idMap = {};
		var eventDef;
		var i;

		if (legacyQuery == null) { // shortcut for removing all
			eventManager.removeAllEventDefs();
		}
		else {
			legacyInstances = eventInstances.map(function(eventInstance) {
				return eventInstance.toLegacy();
			});

			legacyInstances = filterLegacyEventInstances(legacyInstances, legacyQuery);

			// compute unique IDs
			for (i = 0; i < legacyInstances.length; i++) {
				eventDef = this.eventManager.getEventDefByUid(legacyInstances[i]._id);
				idMap[eventDef.id] = true;
			}

			eventManager.freeze();

			for (i in idMap) { // reuse `i` as an "id"
				eventManager.removeEventDefsById(i);
			}

			eventManager.thaw();
		}
	},


	// legacyQuery operates on legacy event instance objects
	clientEvents: function(legacyQuery) {
		var eventInstances = this.eventManager.getEventInstances();
		var legacyEventInstances = eventInstances.map(function(eventInstance) {
			return eventInstance.toLegacy();
		});

		return filterLegacyEventInstances(legacyEventInstances, legacyQuery);
	},


	updateEvents: function(eventPropsArray) {
		this.eventManager.freeze();

		for (var i = 0; i < eventPropsArray.length; i++) {
			this.updateEvent(eventPropsArray[i]);
		}

		this.eventManager.thaw();
	},


	updateEvent: function(eventProps) {
		var eventDef = this.eventManager.getEventDefByUid(eventProps._id);
		var eventInstance;
		var eventDefMutation;

		if (eventDef instanceof SingleEventDef) {
			eventInstance = eventDef.buildInstance();

			eventDefMutation = EventDefMutation.createFromRawProps(
				eventInstance,
				eventProps, // raw props
				null // largeUnit -- who uses it?
			);

			this.eventManager.mutateEventsWithId(eventDef.id, eventDefMutation); // will release
		}
	}

});


function filterLegacyEventInstances(legacyEventInstances, legacyQuery) {
	if (legacyQuery == null) {
		return legacyEventInstances;
	}
	else if ($.isFunction(legacyQuery)) {
		return legacyEventInstances.filter(legacyQuery);
	}
	else { // an event ID
		legacyQuery += ''; // normalize to string

		return legacyEventInstances.filter(function(legacyEventInstance) {
			// soft comparison because id not be normalized to string
			return legacyEventInstance.id == legacyQuery;
		});
	}
}

;;

Calendar.defaults = {

	titleRangeSeparator: ' \u2013 ', // en dash
	monthYearFormat: 'MMMM YYYY', // required for en. other locales rely on datepicker computable option

	defaultTimedEventDuration: '02:00:00',
	defaultAllDayEventDuration: { days: 1 },
	forceEventDuration: false,
	nextDayThreshold: '09:00:00', // 9am

	// display
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: '',
		right: 'today prev,next'
	},
	weekends: true,
	weekNumbers: false,

	weekNumberTitle: 'W',
	weekNumberCalculation: 'local',
	
	//editable: false,

	//nowIndicator: false,

	scrollTime: '06:00:00',
	minTime: '00:00:00',
	maxTime: '24:00:00',
	showNonCurrentDates: true,
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	timezoneParam: 'timezone',

	timezone: false,

	//allDayDefault: undefined,

	// locale
	isRTL: false,
	buttonText: {
		prev: "prev",
		next: "next",
		prevYear: "prev year",
		nextYear: "next year",
		year: 'year', // TODO: locale files need to specify this
		today: 'today',
		month: 'month',
		week: 'week',
		day: 'day'
	},
	//buttonIcons: null,

	allDayText: 'all-day',
	
	// jquery-ui theming
	theme: false,
	//themeButtonIcons: null,

	//eventResizableFromStart: false,
	dragOpacity: .75,
	dragRevertDuration: 500,
	dragScroll: true,
	
	//selectable: false,
	unselectAuto: true,
	//selectMinDistance: 0,
	
	dropAccept: '*',

	eventOrder: 'title',
	//eventRenderWait: null,

	eventLimit: false,
	eventLimitText: 'more',
	eventLimitClick: 'popover',
	dayPopoverFormat: 'LL',
	
	handleWindowResize: true,
	windowResizeDelay: 100, // milliseconds before an updateSize happens

	longPressDelay: 1000
	
};


Calendar.englishDefaults = { // used by locale.js
	dayPopoverFormat: 'dddd, MMMM D'
};


Calendar.rtlDefaults = { // right-to-left defaults
	header: { // TODO: smarter solution (first/center/last ?)
		left: 'next,prev today',
		center: '',
		right: 'title'
	},
	buttonIcons: {
		prev: 'right-single-arrow',
		next: 'left-single-arrow',
		prevYear: 'right-double-arrow',
		nextYear: 'left-double-arrow'
	},
	themeButtonIcons: {
		prev: 'circle-triangle-e',
		next: 'circle-triangle-w',
		nextYear: 'seek-prev',
		prevYear: 'seek-next'
	}
};

;;

var localeOptionHash = FC.locales = {}; // initialize and expose


// TODO: document the structure and ordering of a FullCalendar locale file


// Initialize jQuery UI datepicker translations while using some of the translations
// Will set this as the default locales for datepicker.
FC.datepickerLocale = function(localeCode, dpLocaleCode, dpOptions) {

	// get the FullCalendar internal option hash for this locale. create if necessary
	var fcOptions = localeOptionHash[localeCode] || (localeOptionHash[localeCode] = {});

	// transfer some simple options from datepicker to fc
	fcOptions.isRTL = dpOptions.isRTL;
	fcOptions.weekNumberTitle = dpOptions.weekHeader;

	// compute some more complex options from datepicker
	$.each(dpComputableOptions, function(name, func) {
		fcOptions[name] = func(dpOptions);
	});

	// is jQuery UI Datepicker is on the page?
	if ($.datepicker) {

		// Register the locale data.
		// FullCalendar and MomentJS use locale codes like "pt-br" but Datepicker
		// does it like "pt-BR" or if it doesn't have the locale, maybe just "pt".
		// Make an alias so the locale can be referenced either way.
		$.datepicker.regional[dpLocaleCode] =
			$.datepicker.regional[localeCode] = // alias
				dpOptions;

		// Alias 'en' to the default locale data. Do this every time.
		$.datepicker.regional.en = $.datepicker.regional[''];

		// Set as Datepicker's global defaults.
		$.datepicker.setDefaults(dpOptions);
	}
};


// Sets FullCalendar-specific translations. Will set the locales as the global default.
FC.locale = function(localeCode, newFcOptions) {
	var fcOptions;
	var momOptions;

	// get the FullCalendar internal option hash for this locale. create if necessary
	fcOptions = localeOptionHash[localeCode] || (localeOptionHash[localeCode] = {});

	// provided new options for this locales? merge them in
	if (newFcOptions) {
		fcOptions = localeOptionHash[localeCode] = mergeOptions([ fcOptions, newFcOptions ]);
	}

	// compute locale options that weren't defined.
	// always do this. newFcOptions can be undefined when initializing from i18n file,
	// so no way to tell if this is an initialization or a default-setting.
	momOptions = getMomentLocaleData(localeCode); // will fall back to en
	$.each(momComputableOptions, function(name, func) {
		if (fcOptions[name] == null) {
			fcOptions[name] = func(momOptions, fcOptions);
		}
	});

	// set it as the default locale for FullCalendar
	Calendar.defaults.locale = localeCode;
};


// NOTE: can't guarantee any of these computations will run because not every locale has datepicker
// configs, so make sure there are English fallbacks for these in the defaults file.
var dpComputableOptions = {

	buttonText: function(dpOptions) {
		return {
			// the translations sometimes wrongly contain HTML entities
			prev: stripHtmlEntities(dpOptions.prevText),
			next: stripHtmlEntities(dpOptions.nextText),
			today: stripHtmlEntities(dpOptions.currentText)
		};
	},

	// Produces format strings like "MMMM YYYY" -> "September 2014"
	monthYearFormat: function(dpOptions) {
		return dpOptions.showMonthAfterYear ?
			'YYYY[' + dpOptions.yearSuffix + '] MMMM' :
			'MMMM YYYY[' + dpOptions.yearSuffix + ']';
	}

};

var momComputableOptions = {

	// Produces format strings like "ddd M/D" -> "Fri 9/15"
	dayOfMonthFormat: function(momOptions, fcOptions) {
		var format = momOptions.longDateFormat('l'); // for the format like "M/D/YYYY"

		// strip the year off the edge, as well as other misc non-whitespace chars
		format = format.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, '');

		if (fcOptions.isRTL) {
			format += ' ddd'; // for RTL, add day-of-week to end
		}
		else {
			format = 'ddd ' + format; // for LTR, add day-of-week to beginning
		}
		return format;
	},

	// Produces format strings like "h:mma" -> "6:00pm"
	mediumTimeFormat: function(momOptions) { // can't be called `timeFormat` because collides with option
		return momOptions.longDateFormat('LT')
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h(:mm)a" -> "6pm" / "6:30pm"
	smallTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '(:mm)')
			.replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h(:mm)t" -> "6p" / "6:30p"
	extraSmallTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '(:mm)')
			.replace(/(\Wmm)$/, '($1)') // like above, but for foreign locales
			.replace(/\s*a$/i, 't'); // convert to AM/PM/am/pm to lowercase one-letter. remove any spaces beforehand
	},

	// Produces format strings like "ha" / "H" -> "6pm" / "18"
	hourFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(':mm', '')
			.replace(/(\Wmm)$/, '') // like above, but for foreign locales
			.replace(/\s*a$/i, 'a'); // convert AM/PM/am/pm to lowercase. remove any spaces beforehand
	},

	// Produces format strings like "h:mm" -> "6:30" (with no AM/PM)
	noMeridiemTimeFormat: function(momOptions) {
		return momOptions.longDateFormat('LT')
			.replace(/\s*a$/i, ''); // remove trailing AM/PM
	}

};


// options that should be computed off live calendar options (considers override options)
// TODO: best place for this? related to locale?
// TODO: flipping text based on isRTL is a bad idea because the CSS `direction` might want to handle it
var instanceComputableOptions = {

	// Produces format strings for results like "Mo 16"
	smallDayDateFormat: function(options) {
		return options.isRTL ?
			'D dd' :
			'dd D';
	},

	// Produces format strings for results like "Wk 5"
	weekFormat: function(options) {
		return options.isRTL ?
			'w[ ' + options.weekNumberTitle + ']' :
			'[' + options.weekNumberTitle + ' ]w';
	},

	// Produces format strings for results like "Wk5"
	smallWeekFormat: function(options) {
		return options.isRTL ?
			'w[' + options.weekNumberTitle + ']' :
			'[' + options.weekNumberTitle + ']w';
	}

};

// TODO: make these computable properties in optionsModel
function populateInstanceComputableOptions(options) {
	$.each(instanceComputableOptions, function(name, func) {
		if (options[name] == null) {
			options[name] = func(options);
		}
	});
}


// Returns moment's internal locale data. If doesn't exist, returns English.
function getMomentLocaleData(localeCode) {
	return moment.localeData(localeCode) || moment.localeData('en');
}


// Initialize English by forcing computation of moment-derived options.
// Also, sets it as the default.
FC.locale('en', Calendar.englishDefaults);

;;

var UnzonedRange = FC.UnzonedRange = Class.extend({

	startMs: null, // if null, no start constraint
	endMs: null, // if null, no end constraint

	// TODO: move these into footprint.
	// Especially, doesn't make sense for null startMs/endMs.
	isStart: true,
	isEnd: true,

	constructor: function(startInput, endInput) {

		if (moment.isMoment(startInput)) {
			startInput = startInput.clone().stripZone();
		}

		if (moment.isMoment(endInput)) {
			endInput = endInput.clone().stripZone();
		}

		if (startInput) {
			this.startMs = startInput.valueOf();
		}

		if (endInput) {
			this.endMs = endInput.valueOf();
		}
	},

	intersect: function(otherRange) {
		var startMs = this.startMs;
		var endMs = this.endMs;
		var newRange = null;

		if (otherRange.startMs !== null) {
			if (startMs === null) {
				startMs = otherRange.startMs;
			}
			else {
				startMs = Math.max(startMs, otherRange.startMs);
			}
		}

		if (otherRange.endMs !== null) {
			if (endMs === null) {
				endMs = otherRange.endMs;
			}
			else {
				endMs = Math.min(endMs, otherRange.endMs);
			}
		}

		if (startMs === null || endMs === null || startMs < endMs) {
			newRange = new UnzonedRange(startMs, endMs);
			newRange.isStart = this.isStart && startMs === this.startMs;
			newRange.isEnd = this.isEnd && endMs === this.endMs;
		}

		return newRange;
	},


	intersectsWith: function(otherRange) {
		return (this.endMs === null || otherRange.startMs === null || this.endMs > otherRange.startMs) &&
			(this.startMs === null || otherRange.endMs === null || this.startMs < otherRange.endMs);
	},


	containsRange: function(innerRange) {
		return (this.startMs === null || (innerRange.startMs !== null && innerRange.startMs >= this.startMs)) &&
			(this.endMs === null || (innerRange.endMs !== null && innerRange.endMs <= this.endMs));
	},


	// `date` can be a moment, a Date, or a millisecond time.
	containsDate: function(date) {
		var ms = date.valueOf();

		return (this.startMs === null || ms >= this.startMs) &&
			(this.endMs === null || ms < this.endMs);
	},


	// If the given date is not within the given range, move it inside.
	// (If it's past the end, make it one millisecond before the end).
	// `date` can be a moment, a Date, or a millisecond time.
	// Returns a MS-time.
	constrainDate: function(date) {
		var ms = date.valueOf();

		if (this.startMs !== null && ms < this.startMs) {
			ms = this.startMs;
		}

		if (this.endMs !== null && ms >= this.endMs) {
			ms = this.endMs - 1;
		}

		return ms;
	},


	equals: function(otherRange) {
		return this.startMs === otherRange.startMs && this.endMs === otherRange.endMs;
	},


	clone: function() {
		var range = new UnzonedRange(this.startMs, this.endMs);

		range.isStart = this.isStart;
		range.isEnd = this.isEnd;

		return range;
	},


	// Returns an ambig-zoned moment from startMs.
	// BEWARE: returned moment is not localized.
	// Formatting and start-of-week will be default.
	getStart: function() {
		if (this.startMs !== null) {
			return FC.moment.utc(this.startMs).stripZone();
		}
	},

	// Returns an ambig-zoned moment from startMs.
	// BEWARE: returned moment is not localized.
	// Formatting and start-of-week will be default.
	getEnd: function() {
		if (this.endMs !== null) {
			return FC.moment.utc(this.endMs).stripZone();
		}
	}

});


/*
SIDEEFFECT: will mutate eventRanges.
Will return a new array result.
Only works for non-open-ended ranges.
*/
function invertUnzonedRanges(ranges, constraintRange) {
	var invertedRanges = [];
	var startMs = constraintRange.startMs; // the end of the previous range. the start of the new range
	var i;
	var dateRange;

	// ranges need to be in order. required for our date-walking algorithm
	ranges.sort(compareUnzonedRanges);

	for (i = 0; i < ranges.length; i++) {
		dateRange = ranges[i];

		// add the span of time before the event (if there is any)
		if (dateRange.startMs > startMs) { // compare millisecond time (skip any ambig logic)
			invertedRanges.push(
				new UnzonedRange(startMs, dateRange.startMs)
			);
		}

		if (dateRange.endMs > startMs) {
			startMs = dateRange.endMs;
		}
	}

	// add the span of time after the last event (if there is any)
	if (startMs < constraintRange.endMs) { // compare millisecond time (skip any ambig logic)
		invertedRanges.push(
			new UnzonedRange(startMs, constraintRange.endMs)
		);
	}

	return invertedRanges;
}


/*
Only works for non-open-ended ranges.
*/
function compareUnzonedRanges(range1, range2) {
	return range1.startMs - range2.startMs; // earlier ranges go first
}

;;

/*
Meant to be immutable
*/
var ComponentFootprint = FC.ComponentFootprint = Class.extend({

	unzonedRange: null,
	isAllDay: false, // component can choose to ignore this


	constructor: function(unzonedRange, isAllDay) {
		this.unzonedRange = unzonedRange;
		this.isAllDay = isAllDay;
	},


	/*
	Only works for non-open-ended ranges.
	*/
	toLegacy: function(calendar) {
		return {
			start: calendar.msToMoment(this.unzonedRange.startMs, this.isAllDay),
			end: calendar.msToMoment(this.unzonedRange.endMs, this.isAllDay)
		};
	}

});

;;

var EventManager = Class.extend(EmitterMixin, ListenerMixin, {

	currentPeriod: null,

	calendar: null,
	stickySource: null,
	otherSources: null, // does not include sticky source


	constructor: function(calendar) {
		this.calendar = calendar;
		this.stickySource = new ArrayEventSource(calendar);
		this.otherSources = [];
	},


	requestEvents: function(start, end, timezone, force) {
		if (
			force ||
			!this.currentPeriod ||
			!this.currentPeriod.isWithinRange(start, end) ||
			timezone !== this.currentPeriod.timezone
		) {
			this.setPeriod( // will change this.currentPeriod
				new EventPeriod(start, end, timezone)
			);
		}

		return this.currentPeriod.whenReleased();
	},


	// Source Adding/Removing
	// -----------------------------------------------------------------------------------------------------------------


	addSource: function(eventSource) {
		this.otherSources.push(eventSource);

		if (this.currentPeriod) {
			this.currentPeriod.requestSource(eventSource); // might release
		}
	},


	removeSource: function(doomedSource) {
		removeExact(this.otherSources, doomedSource);

		if (this.currentPeriod) {
			this.currentPeriod.purgeSource(doomedSource); // might release
		}
	},


	removeAllSources: function() {
		this.otherSources = [];

		if (this.currentPeriod) {
			this.currentPeriod.purgeAllSources(); // might release
		}
	},


	// Source Refetching
	// -----------------------------------------------------------------------------------------------------------------


	refetchSource: function(eventSource) {
		var currentPeriod = this.currentPeriod;

		if (currentPeriod) {
			currentPeriod.freeze();
			currentPeriod.purgeSource(eventSource);
			currentPeriod.requestSource(eventSource);
			currentPeriod.thaw();
		}
	},


	refetchAllSources: function() {
		var currentPeriod = this.currentPeriod;

		if (currentPeriod) {
			currentPeriod.freeze();
			currentPeriod.purgeAllSources();
			currentPeriod.requestSources(this.getSources());
			currentPeriod.thaw();
		}
	},


	// Source Querying
	// -----------------------------------------------------------------------------------------------------------------


	getSources: function() {
		return [ this.stickySource ].concat(this.otherSources);
	},


	// like querySources, but accepts multple match criteria (like multiple IDs)
	multiQuerySources: function(matchInputs) {

		// coerce into an array
		if (!matchInputs) {
			matchInputs = [];
		}
		else if (!$.isArray(matchInputs)) {
			matchInputs = [ matchInputs ];
		}

		var matchingSources = [];
		var i;

		// resolve raw inputs to real event source objects
		for (i = 0; i < matchInputs.length; i++) {
			matchingSources.push.apply( // append
				matchingSources,
				this.querySources(matchInputs[i])
			);
		}

		return matchingSources;
	},


	// matchInput can either by a real event source object, an ID, or the function/URL for the source.
	// returns an array of matching source objects.
	querySources: function(matchInput) {
		var sources = this.otherSources;
		var i, source;

		// given a proper event source object
		for (i = 0; i < sources.length; i++) {
			source = sources[i];

			if (source === matchInput) {
				return [ source ];
			}
		}

		// an ID match
		source = this.getSourceById(EventSource.normalizeId(matchInput));
		if (source) {
			return [ source ];
		}

		// parse as an event source
		matchInput = EventSourceParser.parse(matchInput, this.calendar);
		if (matchInput) {

			return $.grep(sources, function(source) {
				return isSourcesEquivalent(matchInput, source);
			});
		}
	},


	/*
	ID assumed to already be normalized
	*/
	getSourceById: function(id) {
		return $.grep(this.otherSources, function(source) {
			return source.id && source.id === id;
		})[0];
	},


	// Event-Period
	// -----------------------------------------------------------------------------------------------------------------


	setPeriod: function(eventPeriod) {
		if (this.currentPeriod) {
			this.unbindPeriod(this.currentPeriod);
			this.currentPeriod = null;
		}

		this.currentPeriod = eventPeriod;
		this.bindPeriod(eventPeriod);

		eventPeriod.requestSources(this.getSources());
	},


	bindPeriod: function(eventPeriod) {
		this.listenTo(eventPeriod, 'release', function(eventsPayload) {
			this.trigger('release', eventsPayload);
		});
	},


	unbindPeriod: function(eventPeriod) {
		this.stopListeningTo(eventPeriod);
	},


	// Event Getting/Adding/Removing
	// -----------------------------------------------------------------------------------------------------------------


	getEventDefByUid: function(uid) {
		if (this.currentPeriod) {
			return this.currentPeriod.getEventDefByUid(uid);
		}
	},


	addEventDef: function(eventDef, isSticky) {
		if (isSticky) {
			this.stickySource.addEventDef(eventDef);
		}

		if (this.currentPeriod) {
			this.currentPeriod.addEventDef(eventDef); // might release
		}
	},


	removeEventDefsById: function(eventId) {
		this.getSources().forEach(function(eventSource) {
			eventSource.removeEventDefsById(eventId);
		});

		if (this.currentPeriod) {
			this.currentPeriod.removeEventDefsById(eventId); // might release
		}
	},


	removeAllEventDefs: function() {
		this.getSources().forEach(function(eventSource) {
			eventSource.removeAllEventDefs();
		});

		if (this.currentPeriod) {
			this.currentPeriod.removeAllEventDefs();
		}
	},


	// Event Mutating
	// -----------------------------------------------------------------------------------------------------------------


	/*
	Returns an undo function.
	*/
	mutateEventsWithId: function(eventDefId, eventDefMutation) {
		var currentPeriod = this.currentPeriod;
		var eventDefs;
		var undoFuncs = [];

		if (currentPeriod) {

			currentPeriod.freeze();

			eventDefs = currentPeriod.getEventDefsById(eventDefId);
			eventDefs.forEach(function(eventDef) {
				// add/remove esp because id might change
				currentPeriod.removeEventDef(eventDef);
				undoFuncs.push(eventDefMutation.mutateSingle(eventDef));
				currentPeriod.addEventDef(eventDef);
			});

			currentPeriod.thaw();

			return function() {
				currentPeriod.freeze();

				for (var i = 0; i < eventDefs.length; i++) {
					currentPeriod.removeEventDef(eventDefs[i]);
					undoFuncs[i]();
					currentPeriod.addEventDef(eventDefs[i]);
				}

				currentPeriod.thaw();
			};
		}

		return function() { };
	},


	/*
	copies and then mutates
	*/
	buildMutatedEventInstanceGroup: function(eventDefId, eventDefMutation) {
		var eventDefs = this.getEventDefsById(eventDefId);
		var i;
		var defCopy;
		var allInstances = [];

		for (i = 0; i < eventDefs.length; i++) {
			defCopy = eventDefs[i].clone();

			if (defCopy instanceof SingleEventDef) {
				eventDefMutation.mutateSingle(defCopy);

				allInstances.push.apply(allInstances, // append
					defCopy.buildInstances()
				);
			}
		}

		return new EventInstanceGroup(allInstances);
	},


	// Freezing
	// -----------------------------------------------------------------------------------------------------------------


	freeze: function() {
		if (this.currentPeriod) {
			this.currentPeriod.freeze();
		}
	},


	thaw: function() {
		if (this.currentPeriod) {
			this.currentPeriod.thaw();
		}
	}

});


// Methods that straight-up query the current EventPeriod for an array of results.
[
	'getEventDefsById',
	'getEventInstances',
	'getEventInstancesWithId',
	'getEventInstancesWithoutId'
].forEach(function(methodName) {

	EventManager.prototype[methodName] = function() {
		var currentPeriod = this.currentPeriod;

		if (currentPeriod) {
			return currentPeriod[methodName].apply(currentPeriod, arguments);
		}

		return [];
	};
});


function isSourcesEquivalent(source0, source1) {
	return source0.getPrimitive() == source1.getPrimitive();
}

;;

var EventPeriod = Class.extend(EmitterMixin, {

	start: null,
	end: null,
	timezone: null,

	unzonedRange: null,

	requestsByUid: null,
	pendingCnt: 0,

	freezeDepth: 0,
	stuntedReleaseCnt: 0,
	releaseCnt: 0,

	eventDefsByUid: null,
	eventDefsById: null,
	eventInstanceGroupsById: null,


	constructor: function(start, end, timezone) {
		this.start = start;
		this.end = end;
		this.timezone = timezone;

		this.unzonedRange = new UnzonedRange(
			start.clone().stripZone(),
			end.clone().stripZone()
		);

		this.requestsByUid = {};
		this.eventDefsByUid = {};
		this.eventDefsById = {};
		this.eventInstanceGroupsById = {};
	},


	isWithinRange: function(start, end) {
		// TODO: use a range util function?
		return !start.isBefore(this.start) && !end.isAfter(this.end);
	},


	// Requesting and Purging
	// -----------------------------------------------------------------------------------------------------------------


	requestSources: function(sources) {
		this.freeze();

		for (var i = 0; i < sources.length; i++) {
			this.requestSource(sources[i]);
		}

		this.thaw();
	},


	requestSource: function(source) {
		var _this = this;
		var request = { source: source, status: 'pending' };

		this.requestsByUid[source.uid] = request;
		this.pendingCnt += 1;

		source.fetch(this.start, this.end, this.timezone).then(function(eventDefs) {
			if (request.status !== 'cancelled') {
				request.status = 'completed';
				request.eventDefs = eventDefs;

				_this.addEventDefs(eventDefs);
				_this.pendingCnt--;
				_this.tryRelease();
			}
		}, function() { // failure
			if (request.status !== 'cancelled') {
				request.status = 'failed';

				_this.pendingCnt--;
				_this.tryRelease();
			}
		});
	},


	purgeSource: function(source) {
		var request = this.requestsByUid[source.uid];

		if (request) {
			delete this.requestsByUid[source.uid];

			if (request.status === 'pending') {
				request.status = 'cancelled';
				this.pendingCnt--;
				this.tryRelease();
			}
			else if (request.status === 'completed') {
				request.eventDefs.forEach(this.removeEventDef.bind(this));
			}
		}
	},


	purgeAllSources: function() {
		var requestsByUid = this.requestsByUid;
		var uid, request;
		var completedCnt = 0;

		for (uid in requestsByUid) {
			request = requestsByUid[uid];

			if (request.status === 'pending') {
				request.status = 'cancelled';
			}
			else if (request.status === 'completed') {
				completedCnt++;
			}
		}

		this.requestsByUid = {};
		this.pendingCnt = 0;

		if (completedCnt) {
			this.removeAllEventDefs(); // might release
		}
	},


	// Event Definitions
	// -----------------------------------------------------------------------------------------------------------------


	getEventDefByUid: function(eventDefUid) {
		return this.eventDefsByUid[eventDefUid];
	},


	getEventDefsById: function(eventDefId) {
		var a = this.eventDefsById[eventDefId];

		if (a) {
			return a.slice(); // clone
		}

		return [];
	},


	addEventDefs: function(eventDefs) {
		for (var i = 0; i < eventDefs.length; i++) {
			this.addEventDef(eventDefs[i]);
		}
	},


	addEventDef: function(eventDef) {
		var eventDefsById = this.eventDefsById;
		var eventDefId = eventDef.id;
		var eventDefs = eventDefsById[eventDefId] || (eventDefsById[eventDefId] = []);
		var eventInstances = eventDef.buildInstances(this.unzonedRange);
		var i;

		eventDefs.push(eventDef);

		this.eventDefsByUid[eventDef.uid] = eventDef;

		for (i = 0; i < eventInstances.length; i++) {
			this.addEventInstance(eventInstances[i], eventDefId);
		}
	},


	removeEventDefsById: function(eventDefId) {
		var _this = this;

		this.getEventDefsById(eventDefId).forEach(function(eventDef) {
			_this.removeEventDef(eventDef);
		});
	},


	removeAllEventDefs: function() {
		var isEmpty = $.isEmptyObject(this.eventDefsByUid);

		this.eventDefsByUid = {};
		this.eventDefsById = {};
		this.eventInstanceGroupsById = {};

		if (!isEmpty) {
			this.tryRelease();
		}
	},


	removeEventDef: function(eventDef) {
		var eventDefsById = this.eventDefsById;
		var eventDefs = eventDefsById[eventDef.id];

		delete this.eventDefsByUid[eventDef.uid];

		if (eventDefs) {
			removeExact(eventDefs, eventDef);

			if (!eventDefs.length) {
				delete eventDefsById[eventDef.id];
			}

			this.removeEventInstancesForDef(eventDef);
		}
	},


	// Event Instances
	// -----------------------------------------------------------------------------------------------------------------


	getEventInstances: function() { // TODO: consider iterator
		var eventInstanceGroupsById = this.eventInstanceGroupsById;
		var eventInstances = [];
		var id;

		for (id in eventInstanceGroupsById) {
			eventInstances.push.apply(eventInstances, // append
				eventInstanceGroupsById[id].eventInstances
			);
		}

		return eventInstances;
	},


	getEventInstancesWithId: function(eventDefId) {
		var eventInstanceGroup = this.eventInstanceGroupsById[eventDefId];

		if (eventInstanceGroup) {
			return eventInstanceGroup.eventInstances.slice(); // clone
		}

		return [];
	},


	getEventInstancesWithoutId: function(eventDefId) { // TODO: consider iterator
		var eventInstanceGroupsById = this.eventInstanceGroupsById;
		var matchingInstances = [];
		var id;

		for (id in eventInstanceGroupsById) {
			if (id !== eventDefId) {
				matchingInstances.push.apply(matchingInstances, // append
					eventInstanceGroupsById[id].eventInstances
				);
			}
		}

		return matchingInstances;
	},


	addEventInstance: function(eventInstance, eventDefId) {
		var eventInstanceGroupsById = this.eventInstanceGroupsById;
		var eventInstanceGroup = eventInstanceGroupsById[eventDefId] ||
			(eventInstanceGroupsById[eventDefId] = new EventInstanceGroup());

		eventInstanceGroup.eventInstances.push(eventInstance);

		this.tryRelease();
	},


	removeEventInstancesForDef: function(eventDef) {
		var eventInstanceGroupsById = this.eventInstanceGroupsById;
		var eventInstanceGroup = eventInstanceGroupsById[eventDef.id];
		var removeCnt;

		if (eventInstanceGroup) {
			removeCnt = removeMatching(eventInstanceGroup.eventInstances, function(currentEventInstance) {
				return currentEventInstance.def === eventDef;
			});

			if (!eventInstanceGroup.eventInstances.length) {
				delete eventInstanceGroupsById[eventDef.id];
			}

			if (removeCnt) {
				this.tryRelease();
			}
		}
	},


	// Releasing and Freezing
	// -----------------------------------------------------------------------------------------------------------------


	tryRelease: function() {
		if (!this.pendingCnt) {
			if (!this.freezeDepth) {
				this.release();
			}
			else {
				this.stuntedReleaseCnt++;
			}
		}
	},


	release: function() {
		this.releaseCnt++;
		this.trigger('release', this.eventInstanceGroupsById);
	},


	whenReleased: function() {
		var _this = this;

		if (this.releaseCnt) {
			return Promise.resolve(this.eventInstanceGroupsById);
		}
		else {
			return Promise.construct(function(onResolve) {
				_this.one('release', onResolve);
			});
		}
	},


	freeze: function() {
		if (!(this.freezeDepth++)) {
			this.stuntedReleaseCnt = 0;
		}
	},


	thaw: function() {
		if (!(--this.freezeDepth) && this.stuntedReleaseCnt && !this.pendingCnt) {
			this.release();
		}
	}

});

;;

var EventDefParser = {

	parse: function(eventInput, source) {
		if (
			isTimeString(eventInput.start) || moment.isDuration(eventInput.start) ||
			isTimeString(eventInput.end) || moment.isDuration(eventInput.end)
		) {
			return RecurringEventDef.parse(eventInput, source);
		}
		else {
			return SingleEventDef.parse(eventInput, source);
		}
	}

};

;;

var EventDef = FC.EventDef = Class.extend(ParsableModelMixin, {

	source: null, // required

	id: null, // normalized supplied ID
	rawId: null, // unnormalized supplied ID
	uid: null, // internal ID. new ID for every definition

	// NOTE: eventOrder sorting relies on these
	title: null,
	url: null,
	rendering: null,
	constraint: null,
	overlap: null,
	editable: null,
	startEditable: null,
	durationEditable: null,
	color: null,
	backgroundColor: null,
	borderColor: null,
	textColor: null,

	className: null, // an array. TODO: rename to className*s* (API breakage)
	miscProps: null,


	constructor: function(source) {
		this.source = source;
		this.className = [];
		this.miscProps = {};
	},


	isAllDay: function() {
		// subclasses must implement
	},


	buildInstances: function(unzonedRange) {
		// subclasses must implement
	},


	clone: function() {
		var copy = new this.constructor(this.source);

		copy.id = this.id;
		copy.rawId = this.rawId;
		copy.uid = this.uid; // not really unique anymore :(

		EventDef.copyVerbatimStandardProps(this, copy);

		copy.className = this.className; // should clone?
		copy.miscProps = $.extend({}, this.miscProps);

		return copy;
	},


	hasInverseRendering: function() {
		return this.getRendering() === 'inverse-background';
	},


	hasBgRendering: function() {
		var rendering = this.getRendering();

		return rendering === 'inverse-background' || rendering === 'background';
	},


	getRendering: function() {
		if (this.rendering != null) {
			return this.rendering;
		}

		return this.source.rendering;
	},


	getConstraint: function() {
		if (this.constraint != null) {
			return this.constraint;
		}

		if (this.source.constraint != null) {
			return this.source.constraint;
		}

		return this.source.calendar.opt('eventConstraint'); // what about View option?
	},


	getOverlap: function() {
		if (this.overlap != null) {
			return this.overlap;
		}

		if (this.source.overlap != null) {
			return this.source.overlap;
		}

		return this.source.calendar.opt('eventOverlap'); // what about View option?
	},


	isStartExplicitlyEditable: function() {
		if (this.startEditable !== null) {
			return this.startEditable;
		}

		return this.source.startEditable;
	},


	isDurationExplicitlyEditable: function() {
		if (this.durationEditable !== null) {
			return this.durationEditable;
		}

		return this.source.durationEditable;
	},


	isExplicitlyEditable: function() {
		if (this.editable !== null) {
			return this.editable;
		}

		return this.source.editable;
	},


	toLegacy: function() {
		var obj = $.extend({}, this.miscProps);

		obj._id = this.uid;
		obj.source = this.source;
		obj.className = this.className; // should clone?
		obj.allDay = this.isAllDay();

		if (this.rawId != null) {
			obj.id = this.rawId;
		}

		EventDef.copyVerbatimStandardProps(this, obj);

		return obj;
	},


	applyManualRawProps: function(rawProps) {

		if (rawProps.id != null) {
			this.id = EventDef.normalizeId((this.rawId = rawProps.id));
		}
		else {
			this.id = EventDef.generateId();
		}

		if (rawProps._id != null) { // accept this prop, even tho somewhat internal
			this.uid = String(rawProps._id);
		}
		else {
			this.uid = EventDef.generateId();
		}

		// TODO: converge with EventSource
		if ($.isArray(rawProps.className)) {
			this.className = rawProps.className;
		}
		if (typeof rawProps.className === 'string') {
			this.className = rawProps.className.split(/\s+/);
		}

		return true;
	},


	applyOtherRawProps: function(rawProps) {
		this.miscProps = rawProps;
	}

});

// finish initializing the mixin
EventDef.allowRawProps = ParsableModelMixin_allowRawProps;
EventDef.copyVerbatimStandardProps = ParsableModelMixin_copyVerbatimStandardProps;


// IDs
// ---------------------------------------------------------------------------------------------------------------------
// TODO: converge with EventSource


EventDef.uuid = 0;


EventDef.normalizeId = function(id) {
	return String(id);
};


EventDef.generateId = function() {
	return '_fc' + (EventDef.uuid++);
};


// Parsing
// ---------------------------------------------------------------------------------------------------------------------


EventDef.allowRawProps({
	// not automatically assigned (`false`)
	_id: false,
	id: false,
	className: false,
	source: false, // will ignored

	// automatically assigned (`true`)
	title: true,
	url: true,
	rendering: true,
	constraint: true,
	overlap: true,
	editable: true,
	startEditable: true,
	durationEditable: true,
	color: true,
	backgroundColor: true,
	borderColor: true,
	textColor: true
});


EventDef.parse = function(rawInput, source) {
	var def = new this(source);
	var calendarTransform = source.calendar.opt('eventDataTransform');
	var sourceTransform = source.eventDataTransform;

	if (calendarTransform) {
		rawInput = calendarTransform(rawInput);
	}
	if (sourceTransform) {
		rawInput = sourceTransform(rawInput);
	}

	if (def.applyRawProps(rawInput)) {
		return def;
	}

	return false;
};

;;

var SingleEventDef = EventDef.extend({

	dateProfile: null,


	/*
	Will receive start/end params, but will be ignored.
	*/
	buildInstances: function() {
		return [ this.buildInstance() ];
	},


	buildInstance: function() {
		return new EventInstance(
			this, // definition
			this.dateProfile
		);
	},


	isAllDay: function() {
		return this.dateProfile.isAllDay();
	},


	clone: function() {
		var def = EventDef.prototype.clone.call(this);

		def.dateProfile = this.dateProfile;

		return def;
	},


	rezone: function() {
		var calendar = this.source.calendar;
		var dateProfile = this.dateProfile;

		this.dateProfile = new EventDateProfile(
			calendar.moment(dateProfile.start),
			dateProfile.end ? calendar.moment(dateProfile.end) : null,
			calendar
		);
	},


	/*
	NOTE: if super-method fails, should still attempt to apply
	*/
	applyManualRawProps: function(rawProps) {
		var superSuccess = EventDef.prototype.applyManualRawProps.apply(this, arguments);
		var dateProfile = EventDateProfile.parse(rawProps, this.source); // returns null on failure

		if (dateProfile) {
			this.dateProfile = dateProfile;

			// make sure `date` shows up in the legacy event objects as-is
			if (rawProps.date != null) {
				this.miscProps.date = rawProps.date;
			}

			return superSuccess;
		}
		else {
			return false;
		}
	}

});


// Parsing
// ---------------------------------------------------------------------------------------------------------------------


SingleEventDef.allowRawProps({ // false = manually process
	start: false,
	date: false, // alias for 'start'
	end: false,
	allDay: false
});

;;

var RecurringEventDef = EventDef.extend({

	startTime: null, // duration
	endTime: null, // duration, or null
	dowHash: null, // object hash, or null


	isAllDay: function() {
		return !this.startTime && !this.endTime;
	},


	buildInstances: function(unzonedRange) {
		var calendar = this.source.calendar;
		var unzonedDate = unzonedRange.getStart();
		var unzonedEnd = unzonedRange.getEnd();
		var zonedDayStart;
		var instanceStart, instanceEnd;
		var instances = [];

		while (unzonedDate.isBefore(unzonedEnd)) {

			// if everyday, or this particular day-of-week
			if (!this.dowHash || this.dowHash[unzonedDate.day()]) {

				zonedDayStart = calendar.applyTimezone(unzonedDate);
				instanceStart = zonedDayStart.clone();
				instanceEnd = null;

				if (this.startTime) {
					instanceStart.time(this.startTime);
				}
				else {
					instanceStart.stripTime();
				}

				if (this.endTime) {
					instanceEnd = zonedDayStart.clone().time(this.endTime);
				}

				instances.push(
					new EventInstance(
						this, // definition
						new EventDateProfile(instanceStart, instanceEnd, calendar)
					)
				);
			}

			unzonedDate.add(1, 'days');
		}

		return instances;
	},


	setDow: function(dowNumbers) {

		if (!this.dowHash) {
			this.dowHash = {};
		}

		for (var i = 0; i < dowNumbers.length; i++) {
			this.dowHash[dowNumbers[i]] = true;
		}
	},


	clone: function() {
		var def = EventDef.prototype.clone.call(this);

		if (def.startTime) {
			def.startTime = moment.duration(this.startTime);
		}

		if (def.endTime) {
			def.endTime = moment.duration(this.endTime);
		}

		if (this.dowHash) {
			def.dowHash = $.extend({}, this.dowHash);
		}

		return def;
	},


	/*
	NOTE: if super-method fails, should still attempt to apply
	*/
	applyRawProps: function(rawProps) {
		var superSuccess = EventDef.prototype.applyRawProps.apply(this, arguments);

		if (rawProps.start) {
			this.startTime = moment.duration(rawProps.start);
		}

		if (rawProps.end) {
			this.endTime = moment.duration(rawProps.end);
		}

		if (rawProps.dow) {
			this.setDow(rawProps.dow);
		}

		return superSuccess;
	}

});


// Parsing
// ---------------------------------------------------------------------------------------------------------------------


RecurringEventDef.allowRawProps({ // false = manually process
	start: false,
	end: false,
	dow: false
});

;;

var EventInstance = Class.extend({

	def: null, // EventDef
	dateProfile: null, // EventDateProfile


	constructor: function(def, dateProfile) {
		this.def = def;
		this.dateProfile = dateProfile;
	},


	toLegacy: function() {
		var dateProfile = this.dateProfile;
		var obj = this.def.toLegacy();

		obj.start = dateProfile.start.clone();
		obj.end = dateProfile.end ? dateProfile.end.clone() : null;

		return obj;
	}

});

;;

/*
It's expected that there will be at least one EventInstance,
OR that an explicitEventDef is assigned.
*/
var EventInstanceGroup = Class.extend({

	eventInstances: null,
	explicitEventDef: null, // optional


	constructor: function(eventInstances) {
		this.eventInstances = eventInstances || [];
	},


	getAllEventRanges: function() {
		return eventInstancesToEventRanges(this.eventInstances);
	},


	sliceRenderRanges: function(constraintRange) {
		if (this.isInverse()) {
			return this.sliceInverseRenderRanges(constraintRange);
		}
		else {
			return this.sliceNormalRenderRanges(constraintRange);
		}
	},


	sliceNormalRenderRanges: function(constraintRange) {
		var eventInstances = this.eventInstances;
		var i, eventInstance;
		var slicedRange;
		var slicedEventRanges = [];

		for (i = 0; i < eventInstances.length; i++) {
			eventInstance = eventInstances[i];

			slicedRange = eventInstance.dateProfile.unzonedRange.intersect(constraintRange);

			if (slicedRange) {
				slicedEventRanges.push(
					new EventRange(
						slicedRange,
						eventInstance.def,
						eventInstance
					)
				);
			}
		}

		return slicedEventRanges;
	},


	sliceInverseRenderRanges: function(constraintRange) {
		var unzonedRanges = eventInstancesToUnzonedRanges(this.eventInstances);
		var ownerDef = this.getEventDef();

		unzonedRanges = invertUnzonedRanges(unzonedRanges, constraintRange);

		return unzonedRanges.map(function(unzonedRange) {
			return new EventRange(unzonedRange, ownerDef); // don't give an EventDef
		});
	},


	isInverse: function() {
		return this.getEventDef().hasInverseRendering();
	},


	getEventDef: function() {
		return this.explicitEventDef || this.eventInstances[0].def;
	}

});

;;

/*
Meant to be immutable
*/
var EventDateProfile = Class.extend({

	start: null,
	end: null,
	unzonedRange: null,


	constructor: function(start, end, calendar) {
		this.start = start;
		this.end = end || null;
		this.unzonedRange = this.buildUnzonedRange(calendar);
	},


	isAllDay: function() {
		return !(this.start.hasTime() || (this.end && this.end.hasTime()));
	},


	/*
	Needs a Calendar object
	*/
	buildUnzonedRange: function(calendar) {
		var startMs = this.start.clone().stripZone().valueOf();
		var endMs = this.getEnd(calendar).stripZone().valueOf();

		return new UnzonedRange(startMs, endMs);
	},


	/*
	Needs a Calendar object
	*/
	getEnd: function(calendar) {
		return this.end ?
			this.end.clone() :
			// derive the end from the start and allDay. compute allDay if necessary
			calendar.getDefaultEventEnd(
				this.isAllDay(),
				this.start
			);
	}

});


/*
Needs an EventSource object
*/
EventDateProfile.parse = function(rawProps, source) {
	var startInput = rawProps.start || rawProps.date;
	var endInput = rawProps.end;

	if (!startInput) {
		return false;
	}

	var calendar = source.calendar;
	var start = calendar.moment(startInput);
	var end = endInput ? calendar.moment(endInput) : null;
	var forcedAllDay = rawProps.allDay;
	var forceEventDuration = calendar.opt('forceEventDuration');

	if (!start.isValid()) {
		return false;
	}

	if (end && (!end.isValid() || !end.isAfter(start))) {
		end = null;
	}

	if (forcedAllDay == null) {
		forcedAllDay = source.allDayDefault;
		if (forcedAllDay == null) {
			forcedAllDay = calendar.opt('allDayDefault');
		}
	}

	if (forcedAllDay === true) {
		start.stripTime();
		if (end) {
			end.stripTime();
		}
	}
	else if (forcedAllDay === false) {
		if (!start.hasTime()) {
			start.time(0);
		}
		if (end && !end.hasTime()) {
			end.time(0);
		}
	}

	if (!end && forceEventDuration) {
		end = calendar.getDefaultEventEnd(!start.hasTime(), start);
	}

	return new EventDateProfile(start, end, calendar);
};

;;

var EventRange = Class.extend({

	unzonedRange: null,
	eventDef: null,
	eventInstance: null, // optional


	constructor: function(unzonedRange, eventDef, eventInstance) {
		this.unzonedRange = unzonedRange;
		this.eventDef = eventDef;

		if (eventInstance) {
			this.eventInstance = eventInstance;
		}
	}

});

;;

var EventFootprint = FC.EventFootprint = Class.extend({

	componentFootprint: null,
	eventDef: null,
	eventInstance: null, // optional


	constructor: function(componentFootprint, eventDef, eventInstance) {
		this.componentFootprint = componentFootprint;
		this.eventDef = eventDef;

		if (eventInstance) {
			this.eventInstance = eventInstance;
		}
	},


	getEventLegacy: function() {
		return (this.eventInstance || this.eventDef).toLegacy();
	}

});

;;

var EventDefMutation = FC.EventDefMutation = Class.extend({

	// won't ever be empty. will be null instead.
	// callers should use setDateMutation for setting.
	dateMutation: null,

	// hack to get updateEvent/createFromRawProps to work.
	// not undo-able and not considered in isEmpty.
	rawProps: null, // raw (pre-parse-like)


	/*
	eventDef assumed to be a SingleEventDef.
	returns an undo function.
	*/
	mutateSingle: function(eventDef) {
		var origDateProfile;

		if (this.dateMutation) {
			origDateProfile = eventDef.dateProfile;

			eventDef.dateProfile = this.dateMutation.buildNewDateProfile(
				origDateProfile,
				eventDef.source.calendar
			);
		}

		// can't undo
		if (this.rawProps) {
			eventDef.applyRawProps(this.rawProps);
		}

		if (origDateProfile) {
			return function() {
				eventDef.dateProfile = origDateProfile;
			};
		}
		else {
			return function() { };
		}
	},


	setDateMutation: function(dateMutation) {
		if (dateMutation && !dateMutation.isEmpty()) {
			this.dateMutation = dateMutation;
		}
		else {
			this.dateMutation = null;
		}
	},


	isEmpty: function() {
		return !this.dateMutation;
	}

});


EventDefMutation.createFromRawProps = function(eventInstance, newRawProps, largeUnit) {
	var eventDef = eventInstance.def;
	var applicableRawProps = {};
	var propName;
	var newDateProfile;
	var dateMutation;
	var defMutation;

	for (propName in newRawProps) {
		if (
			// ignore object-type custom properties and any date-related properties,
			// as well as any other internal property
			typeof newRawProps[propName] !== 'object' &&
			propName !== 'start' && propName !== 'end' && propName !== 'allDay' &&
			propName !== 'source' && propName !== '_id'
		) {
			applicableRawProps[propName] = newRawProps[propName];
		}
	}

	newDateProfile = EventDateProfile.parse(newRawProps, eventDef.source);

	if (newDateProfile) { // no failure?
		dateMutation = EventDefDateMutation.createFromDiff(
			eventInstance.dateProfile,
			newDateProfile,
			largeUnit
		);
	}

	defMutation = new EventDefMutation();
	defMutation.rawProps = applicableRawProps;

	if (dateMutation) {
		defMutation.dateMutation = dateMutation;
	}

	return defMutation;
};

;;

var EventDefDateMutation = Class.extend({

	clearEnd: false,
	forceTimed: false,
	forceAllDay: false,

	// Durations. if 0-ms duration, will be null instead.
	// Callers should not set this directly.
	dateDelta: null,
	startDelta: null,
	endDelta: null,


	/*
	returns an undo function.
	*/
	buildNewDateProfile: function(eventDateProfile, calendar) {
		var start = eventDateProfile.start.clone();
		var end = null;
		var shouldRezone = false;

		if (!this.clearEnd && eventDateProfile.end) {
			end = eventDateProfile.end.clone();
		}

		if (this.forceTimed) {
			shouldRezone = true;

			if (!start.hasTime()) {
				start.time(0);
			}

			if (end && !end.hasTime()) {
				end.time(0);
			}
		}
		else if (this.forceAllDay) {

			if (start.hasTime()) {
				start.stripTime();
			}

			if (end && end.hasTime()) {
				end.stripTime();
			}
		}

		if (this.dateDelta) {
			shouldRezone = true;

			start.add(this.dateDelta);

			if (end) {
				end.add(this.dateDelta);
			}
		}

		// do this before adding startDelta to start, so we can work off of start
		if (this.endDelta) {
			shouldRezone = true;

			if (!end) {
				end = calendar.getDefaultEventEnd(eventDateProfile.isAllDay(), start);
			}

			end.add(this.endDelta);
		}

		if (this.startDelta) {
			shouldRezone = true;

			start.add(this.startDelta);
		}

		if (shouldRezone) {
			start = calendar.applyTimezone(start);

			if (end) {
				end = calendar.applyTimezone(end);
			}
		}

		// TODO: okay to access calendar option?
		if (!end && calendar.opt('forceEventDuration')) {
			end = calendar.getDefaultEventEnd(eventDateProfile.isAllDay(), start);
		}

		return new EventDateProfile(start, end, calendar);
	},


	setDateDelta: function(dateDelta) {
		if (dateDelta && dateDelta.valueOf()) {
			this.dateDelta = dateDelta;
		}
		else {
			this.dateDelta = null;
		}
	},


	setStartDelta: function(startDelta) {
		if (startDelta && startDelta.valueOf()) {
			this.startDelta = startDelta;
		}
		else {
			this.startDelta = null;
		}
	},


	setEndDelta: function(endDelta) {
		if (endDelta && endDelta.valueOf()) {
			this.endDelta = endDelta;
		}
		else {
			this.endDelta = null;
		}
	},


	isEmpty: function() {
		return !this.clearEnd && !this.forceTimed && !this.forceAllDay &&
			!this.dateDelta && !this.startDelta && !this.endDelta;
	}

});


EventDefDateMutation.createFromDiff = function(dateProfile0, dateProfile1, largeUnit) {
	var clearEnd = dateProfile0.end && !dateProfile1.end;
	var forceTimed = dateProfile0.isAllDay() && !dateProfile1.isAllDay();
	var forceAllDay = !dateProfile0.isAllDay() && dateProfile1.isAllDay();
	var dateDelta;
	var endDiff;
	var endDelta;
	var mutation;

	// subtracts the dates in the appropriate way, returning a duration
	function subtractDates(date1, date0) { // date1 - date0
		if (largeUnit) {
			return diffByUnit(date1, date0, largeUnit); // poorly named
		}
		else if (dateProfile1.isAllDay()) {
			return diffDay(date1, date0); // poorly named
		}
		else {
			return diffDayTime(date1, date0); // poorly named
		}
	}

	dateDelta = subtractDates(dateProfile1.start, dateProfile0.start);

	if (dateProfile1.end) {
		// use unzonedRanges because dateProfile0.end might be null
		endDiff = subtractDates(
			dateProfile1.unzonedRange.getEnd(),
			dateProfile0.unzonedRange.getEnd()
		);
		endDelta = endDiff.subtract(dateDelta);
	}

	mutation = new EventDefDateMutation();
	mutation.clearEnd = clearEnd;
	mutation.forceTimed = forceTimed;
	mutation.forceAllDay = forceAllDay;
	mutation.setDateDelta(dateDelta);
	mutation.setEndDelta(endDelta);

	return mutation;
};

;;

function eventDefsToEventInstances(eventDefs, unzonedRange) {
	var eventInstances = [];
	var i;

	for (i = 0; i < eventDefs.length; i++) {
		eventInstances.push.apply(eventInstances, // append
			eventDefs[i].buildInstances(unzonedRange)
		);
	}

	return eventInstances;
}


function eventInstancesToEventRanges(eventInstances) {
	return eventInstances.map(function(eventInstance) {
		return new EventRange(
			eventInstance.dateProfile.unzonedRange,
			eventInstance.def,
			eventInstance
		);
	});
}


function eventInstancesToUnzonedRanges(eventInstances) {
	return eventInstances.map(function(eventInstance) {
		return eventInstance.dateProfile.unzonedRange;
	});
}


function eventFootprintsToComponentFootprints(eventFootprints) {
	return eventFootprints.map(function(eventFootprint) {
		return eventFootprint.componentFootprint;
	});
}

;;

var EventSource = Class.extend(ParsableModelMixin, {

	calendar: null,

	id: null, // can stay null
	uid: null,
	color: null,
	backgroundColor: null,
	borderColor: null,
	textColor: null,
	className: null, // array
	editable: null,
	startEditable: null,
	durationEditable: null,
	rendering: null,
	overlap: null,
	constraint: null,
	allDayDefault: null,
	eventDataTransform: null, // optional function


	constructor: function(calendar) {
		this.calendar = calendar;
		this.className = [];
		this.uid = String(EventSource.uuid++);
	},


	fetch: function(start, end, timezone) {
		// subclasses must implement. must return a promise.
	},


	removeEventDefsById: function(eventDefId) {
		// optional for subclasses to implement
	},


	removeAllEventDefs: function() {
		// optional for subclasses to implement
	},


	/*
	For compairing/matching
	*/
	getPrimitive: function(otherSource) {
		// subclasses must implement
	},


	parseEventDefs: function(rawEventDefs) {
		var i;
		var eventDef;
		var eventDefs = [];

		for (i = 0; i < rawEventDefs.length; i++) {
			eventDef = EventDefParser.parse(
				rawEventDefs[i],
				this // source
			);

			if (eventDef) {
				eventDefs.push(eventDef);
			}
		}

		return eventDefs;
	},


	applyManualRawProps: function(rawProps) {

		if (rawProps.id != null) {
			this.id = EventSource.normalizeId(rawProps.id);
		}

		// TODO: converge with EventDef
		if ($.isArray(rawProps.className)) {
			this.className = rawProps.className;
		}
		else if (typeof rawProps.className === 'string') {
			this.className = rawProps.className.split(/\s+/);
		}

		return true;
	}

});


// finish initializing the mixin
EventSource.allowRawProps = ParsableModelMixin_allowRawProps;


// IDs
// ---------------------------------------------------------------------------------------------------------------------
// TODO: converge with EventDef


EventSource.uuid = 0;


EventSource.normalizeId = function(id) {
	if (id) {
		return String(id);
	}

	return null;
};


// Parsing
// ---------------------------------------------------------------------------------------------------------------------


EventSource.allowRawProps({
	// manually process...
	id: false,
	className: false,

	// automatically transfer...
	color: true,
	backgroundColor: true,
	borderColor: true,
	textColor: true,
	editable: true,
	startEditable: true,
	durationEditable: true,
	rendering: true,
	overlap: true,
	constraint: true,
	allDayDefault: true,
	eventDataTransform: true
});


/*
rawInput can be any data type!
*/
EventSource.parse = function(rawInput, calendar) {
	var source = new this(calendar);

	if (typeof rawInput === 'object') {
		if (source.applyRawProps(rawInput)) {
			return source;
		}
	}

	return false;
};


FC.EventSource = EventSource;

;;

var EventSourceParser = {

	sourceClasses: [],


	registerClass: function(EventSourceClass) {
		this.sourceClasses.unshift(EventSourceClass); // give highest priority
	},


	parse: function(rawInput, calendar) {
		var sourceClasses = this.sourceClasses;
		var i;
		var eventSource;

		for (i = 0; i < sourceClasses.length; i++) {
			eventSource = sourceClasses[i].parse(rawInput, calendar);

			if (eventSource) {
				return eventSource;
			}
		}
	}

};


FC.EventSourceParser = EventSourceParser;

;;

var ArrayEventSource = EventSource.extend({

	rawEventDefs: null, // unparsed
	eventDefs: null,
	currentTimezone: null,


	constructor: function(calendar) {
		EventSource.apply(this, arguments); // super-constructor
		this.eventDefs = []; // for if setRawEventDefs is never called
	},


	setRawEventDefs: function(rawEventDefs) {
		this.rawEventDefs = rawEventDefs;
		this.eventDefs = this.parseEventDefs(rawEventDefs);
	},


	fetch: function(start, end, timezone) {
		var eventDefs = this.eventDefs;
		var i;

		if (
			this.currentTimezone !== null &&
			this.currentTimezone !== timezone
		) {
			for (i = 0; i < eventDefs.length; i++) {
				if (eventDefs[i] instanceof SingleEventDef) {
					eventDefs[i].rezone();
				}
			}
		}

		this.currentTimezone = timezone;

		return Promise.resolve(eventDefs);
	},


	addEventDef: function(eventDef) {
		this.eventDefs.push(eventDef);
	},


	/*
	eventDefId already normalized to a string
	*/
	removeEventDefsById: function(eventDefId) {
		return removeMatching(this.eventDefs, function(eventDef) {
			return eventDef.id === eventDefId;
		});
	},


	removeAllEventDefs: function() {
		this.eventDefs = [];
	},


	getPrimitive: function() {
		return this.rawEventDefs;
	},


	applyManualRawProps: function(rawProps) {
		var superSuccess = EventSource.prototype.applyManualRawProps.apply(this, arguments);

		this.setRawEventDefs(rawProps.events);

		return superSuccess;
	}

});


ArrayEventSource.allowRawProps({
	events: false // don't automatically transfer
});


ArrayEventSource.parse = function(rawInput, calendar) {
	var rawProps;

	// normalize raw input
	if ($.isArray(rawInput.events)) { // extended form
		rawProps = rawInput;
	}
	else if ($.isArray(rawInput)) { // short form
		rawProps = { events: rawInput };
	}

	if (rawProps) {
		return EventSource.parse.call(this, rawProps, calendar);
	}

	return false;
};


EventSourceParser.registerClass(ArrayEventSource);

FC.ArrayEventSource = ArrayEventSource;

;;

var FuncEventSource = EventSource.extend({

	func: null,


	fetch: function(start, end, timezone) {
		var _this = this;

		this.calendar.pushLoading();

		return Promise.construct(function(onResolve) {
			_this.func.call(
				this.calendar,
				start.clone(),
				end.clone(),
				timezone,
				function(rawEventDefs) {
					_this.calendar.popLoading();

					onResolve(_this.parseEventDefs(rawEventDefs));
				}
			);
		});
	},


	getPrimitive: function() {
		return this.func;
	},


	applyManualRawProps: function(rawProps) {
		var superSuccess = EventSource.prototype.applyManualRawProps.apply(this, arguments);

		this.func = rawProps.events;

		return superSuccess;
	}

});


FuncEventSource.allowRawProps({
	events: false // don't automatically transfer
});


FuncEventSource.parse = function(rawInput, calendar) {
	var rawProps;

	// normalize raw input
	if ($.isFunction(rawInput.events)) { // extended form
		rawProps = rawInput;
	}
	else if ($.isFunction(rawInput)) { // short form
		rawProps = { events: rawInput };
	}

	if (rawProps) {
		return EventSource.parse.call(this, rawProps, calendar);
	}

	return false;
};


EventSourceParser.registerClass(FuncEventSource);

FC.FuncEventSource = FuncEventSource;

;;

var JsonFeedEventSource = EventSource.extend({

	// these props must all be manually set before calling fetch
	startParam: null,
	endParam: null,
	timezoneParam: null,
	ajaxSettings: null,


	fetch: function(start, end, timezone) {
		var _this = this;
		var ajaxSettings = this.ajaxSettings;
		var onSuccess = ajaxSettings.success;
		var onError = ajaxSettings.error;
		var requestParams = this.buildRequestParams(start, end, timezone);

		// todo: eventually handle the promise's then,
		// don't intercept success/error
		// tho will be a breaking API change

		this.calendar.pushLoading();

		return Promise.construct(function(onResolve, onReject) {
			$.ajax($.extend(
				{}, // avoid mutation
				JsonFeedEventSource.AJAX_DEFAULTS,
				ajaxSettings, // should have a `url`
				{
					data: requestParams,
					success: function(rawEventDefs) {
						var callbackRes;

						_this.calendar.popLoading();

						if (rawEventDefs) {
							callbackRes = applyAll(onSuccess, this, arguments); // redirect `this`

							if ($.isArray(callbackRes)) {
								rawEventDefs = callbackRes;
							}

							onResolve(_this.parseEventDefs(rawEventDefs));
						}
						else {
							onReject();
						}
					},
					error: function() {
						_this.calendar.popLoading();

						applyAll(onError, this, arguments); // redirect `this`
						onReject();
					}
				}
			));
		});
	},


	buildRequestParams: function(start, end, timezone) {
		var calendar = this.calendar;
		var ajaxSettings = this.ajaxSettings;
		var startParam, endParam, timezoneParam;
		var customRequestParams;
		var params = {};

		startParam = this.startParam;
		if (startParam == null) {
			startParam = calendar.opt('startParam');
		}

		endParam = this.endParam;
		if (endParam == null) {
			endParam = calendar.opt('endParam');
		}

		timezoneParam = this.timezoneParam;
		if (timezoneParam == null) {
			timezoneParam = calendar.opt('timezoneParam');
		}

		// retrieve any outbound GET/POST $.ajax data from the options
		if ($.isFunction(ajaxSettings.data)) {
			// supplied as a function that returns a key/value object
			customRequestParams = ajaxSettings.data();
		}
		else {
			// probably supplied as a straight key/value object
			customRequestParams = ajaxSettings.data || {};
		}

		$.extend(params, customRequestParams);

		params[startParam] = start.format();
		params[endParam] = end.format();

		if (timezone && timezone !== 'local') {
			params[timezoneParam] = timezone;
		}

		return params;
	},


	getPrimitive: function() {
		return this.ajaxSettings.url;
	},


	applyOtherRawProps: function(rawProps) {
		EventSource.prototype.applyOtherRawProps.apply(this, arguments);

		this.ajaxSettings = rawProps;
	}

});


JsonFeedEventSource.AJAX_DEFAULTS = {
	dataType: 'json',
	cache: false
};


JsonFeedEventSource.allowRawProps({
	// automatically transfer (true)...
	startParam: true,
	endParam: true,
	timezoneParam: true
});


JsonFeedEventSource.parse = function(rawInput, calendar) {
	var rawProps;

	// normalize raw input
	if (typeof rawInput.url === 'string') { // extended form
		rawProps = rawInput;
	}
	else if (typeof rawInput === 'string') { // short form
		rawProps = { url: rawInput }; // will end up in ajaxSettings
	}

	if (rawProps) {
		return EventSource.parse.call(this, rawProps, calendar);
	}

	return false;
};


EventSourceParser.registerClass(JsonFeedEventSource);

FC.JsonFeedEventSource = JsonFeedEventSource;

;;

var ThemeRegistry = FC.ThemeRegistry = {

	themeClassHash: {},


	register: function(themeName, themeClass) {
		this.themeClassHash[themeName] = themeClass;
	},


	getThemeClass: function(themeSetting) {
		if (!themeSetting) {
			return StandardTheme;
		}
		else if (themeSetting === true) {
			return JqueryUiTheme;
		}
		else {
			return this.themeClassHash[themeSetting];
		}
	}

};

;;

var Theme = FC.Theme = Class.extend({

	classes: {},
	iconClasses: {},
	baseIconClass: '',
	iconOverrideOption: null,
	iconOverrideCustomButtonOption: null,
	iconOverridePrefix: '',


	constructor: function(optionsModel) {
		this.optionsModel = optionsModel;
		this.processIconOverride();
	},


	processIconOverride: function() {
		if (this.iconOverrideOption) {
			this.setIconOverride(
				this.optionsModel.get(this.iconOverrideOption)
			);
		}
	},


	setIconOverride: function(iconOverrideHash) {
		var iconClassesCopy;
		var buttonName;

		if ($.isPlainObject(iconOverrideHash)) {
			iconClassesCopy = $.extend({}, this.iconClasses);

			for (buttonName in iconOverrideHash) {
				iconClassesCopy[buttonName] = this.applyIconOverridePrefix(
					iconOverrideHash[buttonName]
				);
			}

			this.iconClasses = iconClassesCopy;
		}
		else if (iconOverrideHash === false) {
			this.iconClasses = {};
		}
	},


	applyIconOverridePrefix: function(className) {
		var prefix = this.iconOverridePrefix;

		if (prefix && className.indexOf(prefix) !== 0) { // if not already present
			className = prefix + className;
		}

		return className;
	},


	getClass: function(key) {
		return this.classes[key] || '';
	},


	getIconClass: function(buttonName) {
		var className = this.iconClasses[buttonName];

		if (className) {
			return this.baseIconClass + ' ' + className;
		}

		return '';
	},


	getCustomButtonIconClass: function(customButtonProps) {
		var className;

		if (this.iconOverrideCustomButtonOption) {
			className = customButtonProps[this.iconOverrideCustomButtonOption];

			if (className) {
				return this.baseIconClass + ' ' + this.applyIconOverridePrefix(className);
			}
		}

		return '';
	}

});

;;

var StandardTheme = Theme.extend({

	classes: {
		widget: 'fc-unthemed',
		widgetHeader: 'fc-widget-header',
		widgetContent: 'fc-widget-content',

		buttonGroup: 'fc-button-group',
		button: 'fc-button',
		cornerLeft: 'fc-corner-left',
		cornerRight: 'fc-corner-right',
		stateDefault: 'fc-state-default',
		stateActive: 'fc-state-active',
		stateDisabled: 'fc-state-disabled',
		stateHover: 'fc-state-hover',
		stateDown: 'fc-state-down',

		popoverHeader: 'fc-widget-header',
		popoverContent: 'fc-widget-content',

		// day grid
		headerRow: 'fc-widget-header',
		dayRow: 'fc-widget-content',

		// list view
		listView: 'fc-widget-content'
	},

	baseIconClass: 'fc-icon',
	iconClasses: {
		close: 'fc-icon-x',
		prev: 'fc-icon-left-single-arrow',
		next: 'fc-icon-right-single-arrow',
		prevYear: 'fc-icon-left-double-arrow',
		nextYear: 'fc-icon-right-double-arrow'
	},

	iconOverrideOption: 'buttonIcons',
	iconOverrideCustomButtonOption: 'icon',
	iconOverridePrefix: 'fc-icon-'

});

ThemeRegistry.register('standard', StandardTheme);

;;

var JqueryUiTheme = Theme.extend({

	classes: {
		widget: 'ui-widget',
		widgetHeader: 'ui-widget-header',
		widgetContent: 'ui-widget-content',

		buttonGroup: 'fc-button-group',
		button: 'ui-button',
		cornerLeft: 'ui-corner-left',
		cornerRight: 'ui-corner-right',
		stateDefault: 'ui-state-default',
		stateActive: 'ui-state-active',
		stateDisabled: 'ui-state-disabled',
		stateHover: 'ui-state-hover',
		stateDown: 'ui-state-down',

		today: 'ui-state-highlight',

		popoverHeader: 'ui-widget-header',
		popoverContent: 'ui-widget-content',

		// day grid
		headerRow: 'ui-widget-header',
		dayRow: 'ui-widget-content',

		// list view
		listView: 'ui-widget-content'
	},

	baseIconClass: 'ui-icon',
	iconClasses: {
		close: 'ui-icon-closethick',
		prev: 'ui-icon-circle-triangle-w',
		next: 'ui-icon-circle-triangle-e',
		prevYear: 'ui-icon-seek-prev',
		nextYear: 'ui-icon-seek-next'
	},

	iconOverrideOption: 'themeButtonIcons',
	iconOverrideCustomButtonOption: 'themeIcon',
	iconOverridePrefix: 'ui-icon-'

});

ThemeRegistry.register('jquery-ui', JqueryUiTheme);

;;

var BootstrapTheme = Theme.extend({

	classes: {
		widget: 'fc-bootstrap3',

		tableGrid: 'table-bordered', // avoid `table` class b/c don't want margins. only border color
		tableList: 'table table-striped', // `table` class creates bottom margin but who cares

		buttonGroup: 'btn-group',
		button: 'btn btn-default',
		stateActive: 'active',
		stateDisabled: 'disabled',

		today: 'alert alert-info', // the plain `info` class requires `.table`, too much to ask

		popover: 'panel panel-default',
		popoverHeader: 'panel-heading',
		popoverContent: 'panel-body',

		// day grid
		headerRow: 'panel-default', // avoid `panel` class b/c don't want margins/radius. only border color
		dayRow: 'panel-default', // "

		// list view
		listView: 'panel panel-default'
	},

	baseIconClass: 'glyphicon',
	iconClasses: {
		close: 'glyphicon-remove',
		prev: 'glyphicon-chevron-left',
		next: 'glyphicon-chevron-right',
		prevYear: 'glyphicon-backward',
		nextYear: 'glyphicon-forward'
	},

	iconOverrideOption: 'bootstrapGlyphicons',
	iconOverrideCustomButtonOption: 'bootstrapGlyphicon',
	iconOverridePrefix: 'glyphicon-'

});

ThemeRegistry.register('bootstrap3', BootstrapTheme);

;;

/* An abstract class for the "basic" views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a DayGrid subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.

var BasicView = FC.BasicView = View.extend({

	scroller: null,

	dayGridClass: DayGrid, // class the dayGrid will be instantiated from (overridable by subclasses)
	dayGrid: null, // the main subcomponent that does most of the heavy lifting

	dayNumbersVisible: false, // display day numbers on each day cell?
	colWeekNumbersVisible: false, // display week numbers along the side?
	cellWeekNumbersVisible: false, // display week numbers in day cell?

	weekNumberWidth: null, // width of all the week-number cells running down the side

	headContainerEl: null, // div that hold's the dayGrid's rendered date header
	headRowEl: null, // the fake row element of the day-of-week header


	initialize: function() {
		this.dayGrid = this.instantiateDayGrid();
		this.addChild(this.dayGrid);

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	// Generates the DayGrid object this view needs. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		// generate a subclass on the fly with BasicView-specific behavior
		// TODO: cache this subclass
		var subclass = this.dayGridClass.extend(basicDayGridMethods);

		return new subclass(this);
	},


	// Computes the date range that will be rendered.
	buildRenderRange: function(currentUnzonedRange, currentRangeUnit) {
		var renderUnzonedRange = View.prototype.buildRenderRange.apply(this, arguments); // an UnzonedRange
		var start = this.calendar.msToUtcMoment(renderUnzonedRange.startMs, this.isRangeAllDay);
		var end = this.calendar.msToUtcMoment(renderUnzonedRange.endMs, this.isRangeAllDay);

		// year and month views should be aligned with weeks. this is already done for week
		if (/^(year|month)$/.test(currentRangeUnit)) {
			start.startOf('week');

			// make end-of-week if not already
			if (end.weekday()) {
				end.add(1, 'week').startOf('week'); // exclusively move backwards
			}
		}

		return this.trimHiddenDays(new UnzonedRange(start, end));
	},


	// Renders the view into `this.el`, which should already be assigned
	renderDates: function() {

		this.dayGrid.breakOnWeeks = /year|month|week/.test(this.currentRangeUnit); // do before Grid::setRange
		this.dayGrid.setRange(this.renderUnzonedRange);

		this.dayNumbersVisible = this.dayGrid.rowCnt > 1; // TODO: make grid responsible
		if (this.opt('weekNumbers')) {
			if (this.opt('weekNumbersWithinDays')) {
				this.cellWeekNumbersVisible = true;
				this.colWeekNumbersVisible = false;
			}
			else {
				this.cellWeekNumbersVisible = false;
				this.colWeekNumbersVisible = true;
			};
		}
		this.dayGrid.numbersVisible = this.dayNumbersVisible ||
			this.cellWeekNumbersVisible || this.colWeekNumbersVisible;

		this.el.addClass('fc-basic-view').html(this.renderSkeletonHtml());
		this.renderHead();

		this.scroller.render();
		var dayGridContainerEl = this.scroller.el.addClass('fc-day-grid-container');
		var dayGridEl = $('<div class="fc-day-grid" />').appendTo(dayGridContainerEl);
		this.el.find('.fc-body > tr > td').append(dayGridContainerEl);

		this.dayGrid.setElement(dayGridEl);
		this.dayGrid.renderDates(this.hasRigidRows());
	},


	// render the day-of-week headers
	renderHead: function() {
		this.headContainerEl =
			this.el.find('.fc-head-container')
				.html(this.dayGrid.renderHeadHtml());
		this.headRowEl = this.headContainerEl.find('.fc-row');
	},


	// Unrenders the content of the view. Since we haven't separated skeleton rendering from date rendering,
	// always completely kill the dayGrid's rendering.
	unrenderDates: function() {
		this.dayGrid.unrenderDates();
		this.dayGrid.removeElement();
		this.scroller.destroy();
	},


	// Builds the HTML skeleton for the view.
	// The day-grid component will render inside of a container defined by this HTML.
	renderSkeletonHtml: function() {
		var theme = this.calendar.theme;

		return '' +
			'<table class="' + theme.getClass('tableGrid') + '">' +
				'<thead class="fc-head">' +
					'<tr>' +
						'<td class="fc-head-container ' + theme.getClass('widgetHeader') + '"></td>' +
					'</tr>' +
				'</thead>' +
				'<tbody class="fc-body">' +
					'<tr>' +
						'<td class="' + theme.getClass('widgetContent') + '"></td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	},


	// Generates an HTML attribute string for setting the width of the week number column, if it is known
	weekNumberStyleAttr: function() {
		if (this.weekNumberWidth !== null) {
			return 'style="width:' + this.weekNumberWidth + 'px"';
		}
		return '';
	},


	// Determines whether each row should have a constant height
	hasRigidRows: function() {
		var eventLimit = this.opt('eventLimit');
		return eventLimit && typeof eventLimit !== 'number';
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	// Refreshes the horizontal dimensions of the view
	updateWidth: function() {
		if (this.colWeekNumbersVisible) {
			// Make sure all week number cells running down the side have the same width.
			// Record the width for cells created later.
			this.weekNumberWidth = matchCellWidths(
				this.el.find('.fc-week-number')
			);
		}
	},


	// Adjusts the vertical dimensions of the view to the specified values
	setHeight: function(totalHeight, isAuto) {
		var eventLimit = this.opt('eventLimit');
		var scrollerHeight;
		var scrollbarWidths;

		// reset all heights to be natural
		this.scroller.clear();
		uncompensateScroll(this.headRowEl);

		this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

		// is the event limit a constant level number?
		if (eventLimit && typeof eventLimit === 'number') {
			this.dayGrid.limitRows(eventLimit); // limit the levels first so the height can redistribute after
		}

		// distribute the height to the rows
		// (totalHeight is a "recommended" value if isAuto)
		scrollerHeight = this.computeScrollerHeight(totalHeight);
		this.setGridHeight(scrollerHeight, isAuto);

		// is the event limit dynamically calculated?
		if (eventLimit && typeof eventLimit !== 'number') {
			this.dayGrid.limitRows(eventLimit); // limit the levels after the grid's row heights have been set
		}

		if (!isAuto) { // should we force dimensions of the scroll container?

			this.scroller.setHeight(scrollerHeight);
			scrollbarWidths = this.scroller.getScrollbarWidths();

			if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?

				compensateScroll(this.headRowEl, scrollbarWidths);

				// doing the scrollbar compensation might have created text overflow which created more height. redo
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}

			// guarantees the same scrollbar widths
			this.scroller.lockOverflow(scrollbarWidths);
		}
	},


	// given a desired total height of the view, returns what the height of the scroller should be
	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	// Sets the height of just the DayGrid component in this view
	setGridHeight: function(height, isAuto) {
		if (isAuto) {
			undistributeHeight(this.dayGrid.rowEls); // let the rows be their natural height with no expanding
		}
		else {
			distributeHeight(this.dayGrid.rowEls, height, true); // true = compensate for height-hogging rows
		}
	},


	/* Scroll
	------------------------------------------------------------------------------------------------------------------*/


	computeInitialDateScroll: function() {
		return { top: 0 };
	},


	queryDateScroll: function() {
		return { top: this.scroller.getScrollTop() };
	},


	applyDateScroll: function(scroll) {
		if (scroll.top !== undefined) {
			this.scroller.setScrollTop(scroll.top);
		}
	},


	/* Events
	------------------------------------------------------------------------------------------------------------------*/


	// Renders the given events onto the view and populates the segments array
	renderEventsPayload: function(eventsPayload) {
		this.dayGrid.renderEventsPayload(eventsPayload);

		// must compensate for events that overflow the row
		// TODO: how will ChronoComponent handle this?
		this.updateHeight();
	}

});


// Methods that will customize the rendering behavior of the BasicView's dayGrid
var basicDayGridMethods = {


	// Generates the HTML that will go before the day-of week header cells
	renderHeadIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '' +
				'<th class="fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.weekNumberStyleAttr() + '>' +
					'<span>' + // needed for matchCellWidths
						htmlEscape(this.opt('weekNumberTitle')) +
					'</span>' +
				'</th>';
		}

		return '';
	},


	// Generates the HTML that will go before content-skeleton cells that display the day/week numbers
	renderNumberIntroHtml: function(row) {
		var view = this.view;
		var weekStart = this.getCellDate(row, 0);

		if (view.colWeekNumbersVisible) {
			return '' +
				'<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
					view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
						{ date: weekStart, type: 'week', forceOff: this.colCnt === 1 },
						weekStart.format('w') // inner HTML
					) +
				'</td>';
		}

		return '';
	},


	// Generates the HTML that goes before the day bg cells for each day-row
	renderBgIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '<td class="fc-week-number ' + view.calendar.theme.getClass('widgetContent') + '" ' +
				view.weekNumberStyleAttr() + '></td>';
		}

		return '';
	},


	// Generates the HTML that goes before every other type of row generated by DayGrid.
	// Affects helper-skeleton and highlight-skeleton rows.
	renderIntroHtml: function() {
		var view = this.view;

		if (view.colWeekNumbersVisible) {
			return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
		}

		return '';
	}

};

;;

/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/

var MonthView = FC.MonthView = BasicView.extend({


	// Computes the date range that will be rendered.
	buildRenderRange: function() {
		var renderUnzonedRange = BasicView.prototype.buildRenderRange.apply(this, arguments);
		var start = this.calendar.msToUtcMoment(renderUnzonedRange.startMs, this.isRangeAllDay);
		var end = this.calendar.msToUtcMoment(renderUnzonedRange.endMs, this.isRangeAllDay);
		var rowCnt;

		// ensure 6 weeks
		if (this.isFixedWeeks()) {
			rowCnt = Math.ceil( // could be partial weeks due to hiddenDays
				end.diff(start, 'weeks', true) // dontRound=true
			);
			end.add(6 - rowCnt, 'weeks');
		}

		return new UnzonedRange(start, end);
	},


	// Overrides the default BasicView behavior to have special multi-week auto-height logic
	setGridHeight: function(height, isAuto) {

		// if auto, make the height of each row the height that it would be if there were 6 weeks
		if (isAuto) {
			height *= this.rowCnt / 6;
		}

		distributeHeight(this.dayGrid.rowEls, height, !isAuto); // if auto, don't compensate for height-hogging rows
	},


	isFixedWeeks: function() {
		return this.opt('fixedWeekCount');
	},


	isDateInOtherMonth: function(date) {
		return date.month() !== moment.utc(this.currentUnzonedRange.startMs).month(); // TODO: optimize
	}

});

;;

fcViews.basic = {
	'class': BasicView
};

fcViews.basicDay = {
	type: 'basic',
	duration: { days: 1 }
};

fcViews.basicWeek = {
	type: 'basic',
	duration: { weeks: 1 }
};

fcViews.month = {
	'class': MonthView,
	duration: { months: 1 }, // important for prev/next
	defaults: {
		fixedWeekCount: true
	}
};
;;

/* An abstract class for all agenda-related views. Displays one more columns with time slots running vertically.
----------------------------------------------------------------------------------------------------------------------*/
// Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
// Responsible for managing width/height.

var AgendaView = FC.AgendaView = View.extend({

	scroller: null,

	timeGridClass: TimeGrid, // class used to instantiate the timeGrid. subclasses can override
	timeGrid: null, // the main time-grid subcomponent of this view

	dayGridClass: DayGrid, // class used to instantiate the dayGrid. subclasses can override
	dayGrid: null, // the "all-day" subcomponent. if all-day is turned off, this will be null

	axisWidth: null, // the width of the time axis running down the side

	headContainerEl: null, // div that hold's the timeGrid's rendered date header
	noScrollRowEls: null, // set of fake row elements that must compensate when scroller has scrollbars

	// when the time-grid isn't tall enough to occupy the given height, we render an <hr> underneath
	bottomRuleEl: null,

	// indicates that minTime/maxTime affects rendering
	usesMinMaxTime: true,


	initialize: function() {
		this.timeGrid = this.instantiateTimeGrid();
		this.addChild(this.timeGrid);

		if (this.opt('allDaySlot')) { // should we display the "all-day" area?
			this.dayGrid = this.instantiateDayGrid(); // the all-day subcomponent of this view
			this.addChild(this.dayGrid);
		}

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},


	// Instantiates the TimeGrid object this view needs. Draws from this.timeGridClass
	instantiateTimeGrid: function() {
		var subclass = this.timeGridClass.extend(agendaTimeGridMethods);

		return new subclass(this);
	},


	// Instantiates the DayGrid object this view might need. Draws from this.dayGridClass
	instantiateDayGrid: function() {
		var subclass = this.dayGridClass.extend(agendaDayGridMethods);

		return new subclass(this);
	},


	/* Rendering
	------------------------------------------------------------------------------------------------------------------*/


	// Renders the view into `this.el`, which has already been assigned
	renderDates: function() {

		this.timeGrid.setRange(this.renderUnzonedRange);

		if (this.dayGrid) {
			this.dayGrid.setRange(this.renderUnzonedRange);
		}

		this.el.addClass('fc-agenda-view').html(this.renderSkeletonHtml());
		this.renderHead();

		this.scroller.render();
		var timeGridWrapEl = this.scroller.el.addClass('fc-time-grid-container');
		var timeGridEl = $('<div class="fc-time-grid" />').appendTo(timeGridWrapEl);
		this.el.find('.fc-body > tr > td').append(timeGridWrapEl);

		this.timeGrid.setElement(timeGridEl);
		this.timeGrid.renderDates();

		// the <hr> that sometimes displays under the time-grid
		this.bottomRuleEl = $('<hr class="fc-divider ' + this.calendar.theme.getClass('widgetHeader') + '"/>')
			.appendTo(this.timeGrid.el); // inject it into the time-grid

		if (this.dayGrid) {
			this.dayGrid.setElement(this.el.find('.fc-day-grid'));
			this.dayGrid.renderDates();

			// have the day-grid extend it's coordinate area over the <hr> dividing the two grids
			this.dayGrid.bottomCoordPadding = this.dayGrid.el.next('hr').outerHeight();
		}

		this.noScrollRowEls = this.el.find('.fc-row:not(.fc-scroller *)'); // fake rows not within the scroller
	},


	// render the day-of-week headers
	renderHead: function() {
		this.headContainerEl =
			this.el.find('.fc-head-container')
				.html(this.timeGrid.renderHeadHtml());
	},


	// Unrenders the content of the view. Since we haven't separated skeleton rendering from date rendering,
	// always completely kill each grid's rendering.
	// TODO: move this over to ChronoComponent
	unrenderDates: function() {
		this.timeGrid.unrenderDates();
		this.timeGrid.removeElement();

		if (this.dayGrid) {
			this.dayGrid.unrenderDates();
			this.dayGrid.removeElement();
		}

		this.scroller.destroy();
	},


	// Builds the HTML skeleton for the view.
	// The day-grid and time-grid components will render inside containers defined by this HTML.
	renderSkeletonHtml: function() {
		var theme = this.calendar.theme;

		return '' +
			'<table class="' + theme.getClass('tableGrid') + '">' +
				'<thead class="fc-head">' +
					'<tr>' +
						'<td class="fc-head-container ' + theme.getClass('widgetHeader') + '"></td>' +
					'</tr>' +
				'</thead>' +
				'<tbody class="fc-body">' +
					'<tr>' +
						'<td class="' + theme.getClass('widgetContent') + '">' +
							(this.dayGrid ?
								'<div class="fc-day-grid"/>' +
								'<hr class="fc-divider ' + theme.getClass('widgetHeader') + '"/>' :
								''
								) +
						'</td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	},


	// Generates an HTML attribute string for setting the width of the axis, if it is known
	axisStyleAttr: function() {
		if (this.axisWidth !== null) {
			 return 'style="width:' + this.axisWidth + 'px"';
		}
		return '';
	},


	/* Now Indicator
	------------------------------------------------------------------------------------------------------------------*/


	getNowIndicatorUnit: function() {
		return this.timeGrid.getNowIndicatorUnit();
	},


	/* Dimensions
	------------------------------------------------------------------------------------------------------------------*/


	updateSize: function(isResize) {
		this.timeGrid.updateSize(isResize);

		View.prototype.updateSize.call(this, isResize); // call the super-method
	},


	// Refreshes the horizontal dimensions of the view
	updateWidth: function() {
		// make all axis cells line up, and record the width so newly created axis cells will have it
		this.axisWidth = matchCellWidths(this.el.find('.fc-axis'));
	},


	// Adjusts the vertical dimensions of the view to the specified values
	setHeight: function(totalHeight, isAuto) {
		var eventLimit;
		var scrollerHeight;
		var scrollbarWidths;

		// reset all dimensions back to the original state
		this.bottomRuleEl.hide(); // .show() will be called later if this <hr> is necessary
		this.scroller.clear(); // sets height to 'auto' and clears overflow
		uncompensateScroll(this.noScrollRowEls);

		// limit number of events in the all-day area
		if (this.dayGrid) {
			this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed

			eventLimit = this.opt('eventLimit');
			if (eventLimit && typeof eventLimit !== 'number') {
				eventLimit = AGENDA_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
			}
			if (eventLimit) {
				this.dayGrid.limitRows(eventLimit);
			}
		}

		if (!isAuto) { // should we force dimensions of the scroll container?

			scrollerHeight = this.computeScrollerHeight(totalHeight);
			this.scroller.setHeight(scrollerHeight);
			scrollbarWidths = this.scroller.getScrollbarWidths();

			if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?

				// make the all-day and header rows lines up
				compensateScroll(this.noScrollRowEls, scrollbarWidths);

				// the scrollbar compensation might have changed text flow, which might affect height, so recalculate
				// and reapply the desired height to the scroller.
				scrollerHeight = this.computeScrollerHeight(totalHeight);
				this.scroller.setHeight(scrollerHeight);
			}

			// guarantees the same scrollbar widths
			this.scroller.lockOverflow(scrollbarWidths);

			// if there's any space below the slats, show the horizontal rule.
			// this won't cause any new overflow, because lockOverflow already called.
			if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
				this.bottomRuleEl.show();
			}
		}
	},


	// given a desired total height of the view, returns what the height of the scroller should be
	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},


	/* Scroll
	------------------------------------------------------------------------------------------------------------------*/


	// Computes the initial pre-configured scroll state prior to allowing the user to change it
	computeInitialDateScroll: function() {
		var scrollTime = moment.duration(this.opt('scrollTime'));
		var top = this.timeGrid.computeTimeTop(scrollTime);

		// zoom can give weird floating-point values. rather scroll a little bit further
		top = Math.ceil(top);

		if (top) {
			top++; // to overcome top border that slots beyond the first have. looks better
		}

		return { top: top };
	},


	queryDateScroll: function() {
		return { top: this.scroller.getScrollTop() };
	},


	applyDateScroll: function(scroll) {
		if (scroll.top !== undefined) {
			this.scroller.setScrollTop(scroll.top);
		}
	},


	/* Hit Areas
	------------------------------------------------------------------------------------------------------------------*/
	// forward all hit-related method calls to the grids (dayGrid might not be defined)


	getHitFootprint: function(hit) {
		// TODO: hit.component is set as a hack to identify where the hit came from
		return hit.component.getHitFootprint(hit);
	},


	getHitEl: function(hit) {
		// TODO: hit.component is set as a hack to identify where the hit came from
		return hit.component.getHitEl(hit);
	},


	/* Events
	------------------------------------------------------------------------------------------------------------------*/


	// Renders events onto the view and populates the View's segment array
	renderEventsPayload: function(eventsPayload) {
		var dayEventsPayload = {};
		var timedEventsPayload = {};
		var daySegs = [];
		var timedSegs;
		var id, eventInstanceGroup;

		// separate the events into all-day and timed
		for (id in eventsPayload) {
			eventInstanceGroup = eventsPayload[id];

			if (eventInstanceGroup.getEventDef().isAllDay()) {
				dayEventsPayload[id] = eventInstanceGroup;
			}
			else {
				timedEventsPayload[id] = eventInstanceGroup;
			}
		}

		// render the events in the subcomponents
		timedSegs = this.timeGrid.renderEventsPayload(timedEventsPayload);
		if (this.dayGrid) {
			daySegs = this.dayGrid.renderEventsPayload(dayEventsPayload);
		}

		// the all-day area is flexible and might have a lot of events, so shift the height
		// TODO: how will ChronoComponent handle this?
		this.updateHeight();
	},


	/* Dragging (for events and external elements)
	------------------------------------------------------------------------------------------------------------------*/


	// A returned value of `true` signals that a mock "helper" event has been rendered.
	renderDrag: function(eventFootprints, seg) {
		if (eventFootprints.length) {
			if (!eventFootprints[0].componentFootprint.isAllDay) {
				return this.timeGrid.renderDrag(eventFootprints, seg);
			}
			else if (this.dayGrid) {
				return this.dayGrid.renderDrag(eventFootprints, seg);
			}
		}
	},


	/* Selection
	------------------------------------------------------------------------------------------------------------------*/


	// Renders a visual indication of a selection
	renderSelectionFootprint: function(componentFootprint) {
		if (!componentFootprint.isAllDay) {
			this.timeGrid.renderSelectionFootprint(componentFootprint);
		}
		else if (this.dayGrid) {
			this.dayGrid.renderSelectionFootprint(componentFootprint);
		}
	}

});


// Methods that will customize the rendering behavior of the AgendaView's timeGrid
// TODO: move into TimeGrid
var agendaTimeGridMethods = {


	// Generates the HTML that will go before the day-of week header cells
	renderHeadIntroHtml: function() {
		var view = this.view;
		var weekStart = view.calendar.msToUtcMoment(this.unzonedRange.startMs, true);
		var weekText;

		if (this.opt('weekNumbers')) {
			weekText = weekStart.format(this.opt('smallWeekFormat'));

			return '' +
				'<th class="fc-axis fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.axisStyleAttr() + '>' +
					view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
						{ date: weekStart, type: 'week', forceOff: this.colCnt > 1 },
						htmlEscape(weekText) // inner HTML
					) +
				'</th>';
		}
		else {
			return '<th class="fc-axis ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.axisStyleAttr() + '></th>';
		}
	},


	// Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
	renderBgIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis ' + view.calendar.theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '></td>';
	},


	// Generates the HTML that goes before all other types of cells.
	// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
	renderIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
	}

};


// Methods that will customize the rendering behavior of the AgendaView's dayGrid
var agendaDayGridMethods = {


	// Generates the HTML that goes before the all-day cells
	renderBgIntroHtml: function() {
		var view = this.view;

		return '' +
			'<td class="fc-axis ' + view.calendar.theme.getClass('widgetContent') + '" ' + view.axisStyleAttr() + '>' +
				'<span>' + // needed for matchCellWidths
					view.getAllDayHtml() +
				'</span>' +
			'</td>';
	},


	// Generates the HTML that goes before all other types of cells.
	// Affects content-skeleton, helper-skeleton, highlight-skeleton for both the time-grid and day-grid.
	renderIntroHtml: function() {
		var view = this.view;

		return '<td class="fc-axis" ' + view.axisStyleAttr() + '></td>';
	}

};

;;

var AGENDA_ALL_DAY_EVENT_LIMIT = 5;

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var AGENDA_STOCK_SUB_DURATIONS = [
	{ hours: 1 },
	{ minutes: 30 },
	{ minutes: 15 },
	{ seconds: 30 },
	{ seconds: 15 }
];

fcViews.agenda = {
	'class': AgendaView,
	defaults: {
		allDaySlot: true,
		slotDuration: '00:30:00',
		slotEventOverlap: true // a bad name. confused with overlap/constraint system
	}
};

fcViews.agendaDay = {
	type: 'agenda',
	duration: { days: 1 }
};

fcViews.agendaWeek = {
	type: 'agenda',
	duration: { weeks: 1 }
};
;;

/*
Responsible for the scroller, and forwarding event-related actions into the "grid"
*/
var ListView = View.extend({

	grid: null,
	scroller: null,

	initialize: function() {
		this.grid = new ListViewGrid(this);
		this.addChild(this.grid);

		this.scroller = new Scroller({
			overflowX: 'hidden',
			overflowY: 'auto'
		});
	},

	renderSkeleton: function() {
		this.el.addClass(
			'fc-list-view ' +
			this.calendar.theme.getClass('listView')
		);

		this.scroller.render();
		this.scroller.el.appendTo(this.el);

		this.grid.setElement(this.scroller.scrollEl);
	},

	unrenderSkeleton: function() {
		this.scroller.destroy(); // will remove the Grid too
	},

	setHeight: function(totalHeight, isAuto) {
		this.scroller.setHeight(this.computeScrollerHeight(totalHeight));
	},

	computeScrollerHeight: function(totalHeight) {
		return totalHeight -
			subtractInnerElHeight(this.el, this.scroller.el); // everything that's NOT the scroller
	},

	renderDates: function() {
		this.grid.setRange(this.renderUnzonedRange); // needs to process range-related options
	},

	isEventDefResizable: function(eventDef) {
		return false;
	},

	isEventDefDraggable: function(eventDef) {
		return false;
	}

});

/*
Responsible for event rendering and user-interaction.
Its "el" is the inner-content of the above view's scroller.
*/
var ListViewGrid = Grid.extend({

	dayDates: null, // localized ambig-time moment array
	dayRanges: null, // UnzonedRange[], of start-end of each day
	segSelector: '.fc-list-item', // which elements accept event actions
	hasDayInteractions: false, // no day selection or day clicking

	rangeUpdated: function() {
		var calendar = this.view.calendar;
		var dayStart = calendar.msToUtcMoment(this.unzonedRange.startMs, true);
		var viewEnd = calendar.msToUtcMoment(this.unzonedRange.endMs, true);
		var dayDates = [];
		var dayRanges = [];

		while (dayStart < viewEnd) {

			dayDates.push(dayStart.clone());

			dayRanges.push(new UnzonedRange(
				dayStart,
				dayStart.clone().add(1, 'day')
			));

			dayStart.add(1, 'day');
		}

		this.dayDates = dayDates;
		this.dayRanges = dayRanges;
	},

	// slices by day
	componentFootprintToSegs: function(footprint) {
		var view = this.view;
		var dayRanges = this.dayRanges;
		var dayIndex;
		var segRange;
		var seg;
		var segs = [];

		for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex++) {
			segRange = footprint.unzonedRange.intersect(dayRanges[dayIndex]);

			if (segRange) {
				seg = {
					startMs: segRange.startMs,
					endMs: segRange.endMs,
					isStart: segRange.isStart,
					isEnd: segRange.isEnd,
					dayIndex: dayIndex
				};

				segs.push(seg);

				// detect when footprint won't go fully into the next day,
				// and mutate the latest seg to the be the end.
				if (
					!seg.isEnd && !footprint.isAllDay &&
					footprint.unzonedRange.endMs < dayRanges[dayIndex + 1].startMs + view.nextDayThreshold
				) {
					seg.endMs = footprint.unzonedRange.endMs;
					seg.isEnd = true;
					break;
				}
			}
		}

		return segs;
	},

	// like "4:00am"
	computeEventTimeFormat: function() {
		return this.opt('mediumTimeFormat');
	},

	// for events with a url, the whole <tr> should be clickable,
	// but it's impossible to wrap with an <a> tag. simulate this.
	handleSegClick: function(seg, ev) {
		var url;

		Grid.prototype.handleSegClick.apply(this, arguments); // super. might prevent the default action

		// not clicking on or within an <a> with an href
		if (!$(ev.target).closest('a[href]').length) {
			url = seg.footprint.eventDef.url;

			if (url && !ev.isDefaultPrevented()) { // jsEvent not cancelled in handler
				window.location.href = url; // simulate link click
			}
		}
	},

	// returns list of foreground segs that were actually rendered
	renderFgSegs: function(segs) {
		segs = this.renderFgSegEls(segs); // might filter away hidden events

		if (!segs.length) {
			this.renderEmptyMessage();
		}
		else {
			this.renderSegList(segs);
		}

		return segs;
	},

	renderEmptyMessage: function() {
		this.el.html(
			'<div class="fc-list-empty-wrap2">' + // TODO: try less wraps
			'<div class="fc-list-empty-wrap1">' +
			'<div class="fc-list-empty">' +
				htmlEscape(this.opt('noEventsMessage')) +
			'</div>' +
			'</div>' +
			'</div>'
		);
	},

	// render the event segments in the view
	renderSegList: function(allSegs) {
		var segsByDay = this.groupSegsByDay(allSegs); // sparse array
		var dayIndex;
		var daySegs;
		var i;
		var tableEl = $('<table class="fc-list-table ' + this.view.calendar.theme.getClass('tableList') + '"><tbody/></table>');
		var tbodyEl = tableEl.find('tbody');

		for (dayIndex = 0; dayIndex < segsByDay.length; dayIndex++) {
			daySegs = segsByDay[dayIndex];

			if (daySegs) { // sparse array, so might be undefined

				// append a day header
				tbodyEl.append(this.dayHeaderHtml(this.dayDates[dayIndex]));

				this.sortEventSegs(daySegs);

				for (i = 0; i < daySegs.length; i++) {
					tbodyEl.append(daySegs[i].el); // append event row
				}
			}
		}

		this.el.empty().append(tableEl);
	},

	// Returns a sparse array of arrays, segs grouped by their dayIndex
	groupSegsByDay: function(segs) {
		var segsByDay = []; // sparse array
		var i, seg;

		for (i = 0; i < segs.length; i++) {
			seg = segs[i];
			(segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
				.push(seg);
		}

		return segsByDay;
	},

	// generates the HTML for the day headers that live amongst the event rows
	dayHeaderHtml: function(dayDate) {
		var view = this.view;
		var mainFormat = this.opt('listDayFormat');
		var altFormat = this.opt('listDayAltFormat');

		return '<tr class="fc-list-heading" data-date="' + dayDate.format('YYYY-MM-DD') + '">' +
			'<td class="' + view.calendar.theme.getClass('widgetHeader') + '" colspan="3">' +
				(mainFormat ?
					view.buildGotoAnchorHtml(
						dayDate,
						{ 'class': 'fc-list-heading-main' },
						htmlEscape(dayDate.format(mainFormat)) // inner HTML
					) :
					'') +
				(altFormat ?
					view.buildGotoAnchorHtml(
						dayDate,
						{ 'class': 'fc-list-heading-alt' },
						htmlEscape(dayDate.format(altFormat)) // inner HTML
					) :
					'') +
			'</td>' +
		'</tr>';
	},

	// generates the HTML for a single event row
	fgSegHtml: function(seg) {
		var view = this.view;
		var calendar = view.calendar;
		var theme = calendar.theme;
		var classes = [ 'fc-list-item' ].concat(this.getSegCustomClasses(seg));
		var bgColor = this.getSegBackgroundColor(seg);
		var eventFootprint = seg.footprint;
		var eventDef = eventFootprint.eventDef;
		var componentFootprint = eventFootprint.componentFootprint;
		var url = eventDef.url;
		var timeHtml;

		if (componentFootprint.isAllDay) {
			timeHtml = view.getAllDayHtml();
		}
		// if the event appears to span more than one day
		else if (view.isMultiDayRange(componentFootprint.unzonedRange)) {
			if (seg.isStart || seg.isEnd) { // outer segment that probably lasts part of the day
				timeHtml = htmlEscape(this._getEventTimeText(
					calendar.msToMoment(seg.startMs),
					calendar.msToMoment(seg.endMs),
					componentFootprint.isAllDay
				));
			}
			else { // inner segment that lasts the whole day
				timeHtml = view.getAllDayHtml();
			}
		}
		else {
			// Display the normal time text for the *event's* times
			timeHtml = htmlEscape(this.getEventTimeText(eventFootprint));
		}

		if (url) {
			classes.push('fc-has-url');
		}

		return '<tr class="' + classes.join(' ') + '">' +
			(this.displayEventTime ?
				'<td class="fc-list-item-time ' + theme.getClass('widgetContent') + '">' +
					(timeHtml || '') +
				'</td>' :
				'') +
			'<td class="fc-list-item-marker ' + theme.getClass('widgetContent') + '">' +
				'<span class="fc-event-dot"' +
				(bgColor ?
					' style="background-color:' + bgColor + '"' :
					'') +
				'></span>' +
			'</td>' +
			'<td class="fc-list-item-title ' + theme.getClass('widgetContent') + '">' +
				'<a' + (url ? ' href="' + htmlEscape(url) + '"' : '') + '>' +
					htmlEscape(eventDef.title || '') +
				'</a>' +
			'</td>' +
		'</tr>';
	}

});

;;

fcViews.list = {
	'class': ListView,
	buttonTextKey: 'list', // what to lookup in locale files
	defaults: {
		buttonText: 'list', // text to display for English
		listDayFormat: 'LL', // like "January 1, 2016"
		noEventsMessage: 'No events to display'
	}
};

fcViews.listDay = {
	type: 'list',
	duration: { days: 1 },
	defaults: {
		listDayFormat: 'dddd' // day-of-week is all we need. full date is probably in header
	}
};

fcViews.listWeek = {
	type: 'list',
	duration: { weeks: 1 },
	defaults: {
		listDayFormat: 'dddd', // day-of-week is more important
		listDayAltFormat: 'LL'
	}
};

fcViews.listMonth = {
	type: 'list',
	duration: { month: 1 },
	defaults: {
		listDayAltFormat: 'dddd' // day-of-week is nice-to-have
	}
};

fcViews.listYear = {
	type: 'list',
	duration: { year: 1 },
	defaults: {
		listDayAltFormat: 'dddd' // day-of-week is nice-to-have
	}
};

;;

return FC; // export for Node/CommonJS
});
(function($)
{
    
    $.fn.autogrow = function(options)
    {
        return this.filter('textarea').each(function()
        {
            var self         = this;
            var $self        = $(self);
            var minHeight    = $self.height();
            var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;

            var shadow = $('<div></div>').css({
                position:    'absolute',
                top:         -10000,
                left:        -10000,
                width:       $self.width(),
                fontSize:    $self.css('fontSize'),
                fontFamily:  $self.css('fontFamily'),
                fontWeight:  $self.css('fontWeight'),
                lineHeight:  $self.css('lineHeight'),
                resize:      'none',
                'word-wrap': 'break-word'
            }).appendTo(document.body);

            var update = function(event)
            {
                var times = function(string, number)
                {
                    for (var i=0, r=''; i<number; i++) r += string;
                    return r;
                };

                var val = self.value.replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;')
                                    .replace(/&/g, '&amp;')
                                    .replace(/\n$/, '<br/>&nbsp;')
                                    .replace(/\n/g, '<br/>')
                                    .replace(/ {2,}/g, function(space){ return times('&nbsp;', space.length - 1) + ' ' });

                // Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
                if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13) {
                    val += '<br />';
                }

                shadow.css('width', $self.width());
                shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.
                $self.height(Math.max(shadow.height() + noFlickerPad, minHeight));
            }

            $self.change(update).keyup(update).keydown({event:'keydown'},update);
            $(window).resize(update);

            update();
        });
    };
})(jQuery);
// plugins
$.fn.extend({
	_focus: $.fn.focus,
	focus: function( delay, fn ) {
		return typeof delay === "number" ?
			this.each(function() {
				var elem = this;
				setTimeout(function() {
					$( elem ).focus();
					if ( fn ) {
						fn.call( elem );
					}
				}, delay );
			}) :
			this._focus.apply( this, arguments );
	},

	scrollParent: function() {
		var scrollParent;
		if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.curCSS(this,'position',1)) && (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		}

		return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ) );
					if ( !isNaN( value ) && value != 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},
	
	disableSelection: function() {
		return this.bind(
			"mousedown.ui-disableSelection selectstart.ui-disableSelection",
			function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});
/*----------------------------------Variables----------------------------------*/
var noteZindex = 1;
var noteCounter = 0;
var posX = [184, 184, 184, 402, 402, 402];
var posY = [144, 334, 525, 144, 334, 525];

// var IDarray = []; // keep track of which note is present and which is deleted
// var checkID = []; 
/*----------------------------------Delete Note----------------------------------*/
function deleteNote(){
    console.log('----------------Deleting notes----------------');    
    var deleteID = $(this).parents('.note')[0].id; // == get ID.toString() of deleted note

    console.log(deleteID);

    if(deleteID != '0'){
        // delete the event that is associated with the note. If there is no date it doesn't matter.
        $('#calendar_full').fullCalendar('removeEvents', "note" + deleteID, true);

        var toSend = {"auth_token" : auth_token, "_id" : deleteID};
        $.ajax({
          url: 'https://test.ubcse442tada.com/delete_note',
          type: "post",
          data: JSON.stringify(toSend),
          dataType: "json",
          contentType: "application/json",
          success: function(response) {
              if ('success' in response) {	
                console.log(response['success'])
              }
              else if ('error' in response) {
                  console.log(response['error'])
              }
          },
          error: function(response) {
            console.log(response);
          },
        });
    }
    
    noteCounter = noteCounter - 1;
    console.log('note count: ', noteCounter);    
    $(this).parents('.note').remove(); // remove the note on click of corresponding x button
};
/*----------------------------------Load Note----------------------------------*/
function loadNote(title, content, ID, Xaxis, Yaxis, startTime, endTime) {    
    console.log('start time: ', startTime);
    console.log('end time: ', endTime);    

    if (startTime !== "") {
        var resultStart = chrono.parse(startTime);
        var newElement;
        if (endTime !== "") {
            var resultEnd = chrono.parse(endTime);
            newElement = {id: "note" + ID, title : title, start : resultStart[0].start.date(), end : resultEnd[0].start.date()};
        }
        else {
            newElement = {id: "note" + ID, title : title, start : resultStart[0].start.date()};
        }
        $('#calendar_full').fullCalendar('renderEvent', newElement , true);
    }  

    Xaxis = Xaxis-190;
    Yaxis = Yaxis-130;
    var noteTemp =  '<div class="note" id="' + ID + '" style="position: absolute; left:' +Xaxis+ '; top:' +Yaxis+ '">'
                        +'<a href="javascript:;" class="button remove">X</a>'
                        // +'<a href="javascript:;" class="button save">S</a>'
                        +'<a href="javascript:;" class="button edit">E</a>'                                                
                        + 	'<div class="note_cnt">'
                        +		'<textarea class="title" placeholder="Testing title">'+title+'</textarea>'
                        + 		'<textarea class="cnt" placeholder="Testing description">'+content+'</textarea>' 
                        +	'</div> '
                        +'</div>';

    $(noteTemp).hide().appendTo("#board").show("fade", 300).draggable().on('dragstart',
        function(){
            $(this).zIndex(++noteZindex);
        }); // show the loaded note to the UI
    
    noteCounter = noteCounter + 1;
    $('.remove').unbind().click(deleteNote); // onclick of delete button, trigger the deleteNote function
    // $('.save').click(saveNote);    
    $('.edit').click(editNote);            
    $('textarea').autogrow(); // text area grows automatically       
    $('.note')
    return false; 
};
/*----------------------------------New Note----------------------------------*/
function newNote() {
        var ID = 0; // To delete unsaved note
        var Xaxis, Yaxis;
        console.log('note count: ',noteCounter);
        if(noteCounter >= 6){
            Xaxis = posX[5];
            Yaxis = posY[5];
        }
        else{
            Xaxis = posX[noteCounter];            
            Yaxis = posY[noteCounter];
        }

        Xaxis = Xaxis-190;
        Yaxis = Yaxis-130;

        var noteTemp =  '<div class="note" id="' + ID.toString() + '" style="position: absolute; left:' + Xaxis + '; top:' + Yaxis + '">'
                        +'<a href="javascript:;" class="button remove">X</a>'
                        +'<a href="javascript:;" class="button save">S</a>'
                        // +'<a href="javascript:;" class="button edit">E</a>'                                                
                        + 	'<div class="note_cnt">'
                        +		'<textarea class="title" placeholder="Enter note title"></textarea>'
                        + 		'<textarea class="cnt" placeholder="Enter note description"></textarea>'
                        +	'</div> '
                        +'</div>';

        $(noteTemp).hide().appendTo("#board").show("fade", 300).draggable().on('dragstart',
            function(){
                $(this).zIndex(++noteZindex);
            }); // show the new note to the UI

        console.log($(noteTemp)[0]);
        //position the note according to the array
       
        // $(noteTemp).style.position = "absolute";
        // $(noteTemp).style.left =  +'px';
        // $(noteTemp).style.top =  +'px';

        noteCounter = noteCounter + 1;            
        $('.remove').unbind().click(deleteNote); // onclick of delete button, trigger the deleteNote function
        $('.save').unbind().click(saveNote);
        // $('.edit').click(editNote); 
        $('textarea').autogrow(); // text area grows automatically              
        $('.note')
        return false; 
    // }
};
/*----------------------------------Get Position----------------------------------*/
function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      left: el.left + window.scrollX,
      top: el.top + window.scrollY
    }
  }
/*----------------------------------Edit Note----------------------------------*/
function editNote() {
    console.log('----------------Editing notes----------------');
    var eTitle = $(this).parents('.note').children('.note_cnt').children('.title')[0].value; 
    var eText = $(this).parents('.note').children('.note_cnt').children('.cnt')[0].value; 
    var eX = getOffset($(this)[0]).left;
    var eY = getOffset($(this)[0]).top;
    var eID = $(this).parents('.note')[0].id
   
    console.log('Title: ', eTitle);
    console.log('Text: ', eText);
    console.log('Positions: ', eX,eY);
    console.log('ID: ', eID);

    // delete the event that is associated with the note. If there is no date it doesn't matter.
    $('#calendar_full').fullCalendar('removeEvents', "note" + eID, true);

    var results = chrono.parse(eText);
    var newElement, toSend;
 
    if (results.length != 0){
        if(results[0].end == null){
            newElement = {id: "note" + eID, title : eTitle, start : results[0].start.date()};
            toSend = {"auth_token" : auth_token, "username": username, "_id": eID, "title": eTitle, "noteList" : [{"text" : eText, "start" : results[0].start.date().toString(), "end" : ""}], "x": eX, "y": eY, "color" : "#ffffff"};                        
        }   
        else{
            newElement = {id: "note" + eID, title : eTitle, start : results[0].start.date(), end : results[0].end.date()};
            toSend = {"auth_token" : auth_token, "username": username, "_id": eID,"title": eTitle, "noteList" : [{"text" : eText, "start" : results[0].start.date().toString(), "end" : results[0].end.date().toString()}], "x": eX, "y": eY, "color" : "#ffffff"};                        
        }      
        $('#calendar_full').fullCalendar('renderEvent', newElement , true);       
    }
    else {
        toSend = {"auth_token" : auth_token, "username": username, "_id": eID, "title": eTitle, "noteList" : [{"text" : eText}], "x": eX, "y": eY, "color" : "#ffffff"};                    
    }    
    
    $.ajax({
      url: 'https://test.ubcse442tada.com/edit_note',
      type: "post",
      data: JSON.stringify(toSend),
      dataType: "json",
      contentType: "application/json",
      success: function(response) {
	
	      if ('success' in response) {	
		    //   $('#calendar_full').fullCalendar('updateEvent', event);
	      }
	      else if ('error' in response) {
		      console.log(response['error'])
	      }
      },
      error: function(response) {
        console.log(response);
      },
    });
  }
/*----------------------------------Save Note----------------------------------*/
function saveNote(){
    console.log('----------------Saving notes----------------');
    try{
    var eTitle = $(this).parents('.note').children('.note_cnt').children('.title')[0].value; 
    var eText = $(this).parents('.note').children('.note_cnt').children('.cnt')[0].value; 
    var ID = $(this).parents('.note')[0].id;    
    }catch(e){
        if(e){
            var eTitle = '';
            var eText = '';
            var ID = '0';
        }
    }
    var eX = getOffset($(this)[0]).left;
    var eY = getOffset($(this)[0]).top;
    var $this = $(this);
    
    console.log('Title: ', eTitle);
    console.log('Text: ', eText);
    console.log('Positions: ', eX,eY); 

    var testID = "1";
    $this.parent().attr("id", testID);

    var results = chrono.parse(eText);
    var newElement;
    var toSend;

    if (results.length != 0){
        if(results[0].end == null){
            toSend = {"auth_token" : auth_token, "username": username, "title": eTitle, "noteList" : [{"text" : eText, "start" : results[0].start.date().toString(), "end" : ""}], "x": eX, "y": eY, "color" : "#ffffff"};                        
        }   
        else{
            toSend = {"auth_token" : auth_token, "username": username, "title": eTitle, "noteList" : [{"text" : eText, "start" : results[0].start.date().toString(), "end" : results[0].end.date().toString()}], "x": eX, "y": eY, "color" : "#ffffff"};                        
        }
        console.log(results[0].start.date().toString())
                    
    }
    else {
        toSend = {"auth_token" : auth_token, "username": username, "title": eTitle, "noteList" : [{"text" : eText}], "x": eX, "y": eY, "color" : "#ffffff"};                    
    }
    
    $.ajax({
        url: 'https://test.ubcse442tada.com/add_note',
        type: "post",
        data: JSON.stringify(toSend),
        dataType: "json",
        contentType: "application/json",
        // want to put condition : if ID already exist, dont update the ID.
        success: function(response) {
  
            if ('success' in response) {

                newID = response['_id'];
                console.log('assigned ID: ',newID);
                document.getElementById("1").id = newID;
                console.log(document.getElementById(newID));
             
                if (results.length != 0){
                    if(results[0].end == null){
                        newElement = {id: "note" + newID, title : eTitle, start : results[0].start.date()};                     
                    }   
                    else{
                        newElement = {id: "note" + newID, title : eTitle, start : results[0].start.date(), end : results[0].end.date()};
                    }      
                    $('#calendar_full').fullCalendar('renderEvent', newElement , true);       
                }
            }
            else if ('error' in response) {
                console.log(response['error'])
            }
        },
        error: function(response) {
          console.log(response);
        },
      });

    var stringEdit = '<a href="javascript:;" class="button edit">E</a>' // edit button string
    $(this).parents('.note').append(stringEdit); // append edit button to the note.
    $('.edit').click(editNote); // enable edit functionality onclick of edit button
    $(this).remove(); // remove the save button 
};

/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
}

+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
}(jQuery);


+function () {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var MAX_UID = 1000000;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
        return undefined;
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    // getters

    // public

    Alert.prototype.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Alert.prototype._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest('.' + ClassName.ALERT)[0];
      }

      return parent;
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);

      $(element).trigger(closeEvent);
      return closeEvent;
    };

    Alert.prototype._removeElement = function _removeElement(element) {
      var _this2 = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return;
      }

      $(element).one(Util.TRANSITION_END, function (event) {
        return _this2._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    };

    // static

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    // getters

    // public

    Button.prototype.toggle = function toggle() {
      var triggerChangeEvent = true;
      var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
        }
      }

      this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    Button.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // static

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };

  var Event = {
    SLIDE: 'slide' + EVENT_KEY,
    SLID: 'slid' + EVENT_KEY,
    KEYDOWN: 'keydown' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = function () {
    function Carousel(element, config) {
      _classCallCheck(this, Carousel);

      this._items = null;
      this._interval = null;
      this._activeElement = null;

      this._isPaused = false;
      this._isSliding = false;

      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    }

    // getters

    // public

    Carousel.prototype.next = function next() {
      if (this._isSliding) {
        throw new Error('Carousel is sliding');
      }
      this._slide(Direction.NEXT);
    };

    Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next();
      }
    };

    Carousel.prototype.prev = function prev() {
      if (this._isSliding) {
        throw new Error('Carousel is sliding');
      }
      this._slide(Direction.PREVIOUS);
    };

    Carousel.prototype.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    Carousel.prototype.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    Carousel.prototype.to = function to(index) {
      var _this3 = this;

      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, function () {
          return _this3.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREVIOUS;

      this._slide(direction, this._items[index]);
    };

    Carousel.prototype.dispose = function dispose() {
      $(this._element).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);

      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    };

    // private

    Carousel.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Carousel.prototype._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN, function (event) {
          return _this4._keydown(event);
        });
      }

      if (this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)) {
        $(this._element).on(Event.MOUSEENTER, function (event) {
          return _this4.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this4.cycle(event);
        });
      }
    };

    Carousel.prototype._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
        default:
          return;
      }
    };

    Carousel.prototype._getItemIndex = function _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREVIOUS;
      var activeIndex = this._getItemIndex(activeElement);
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREVIOUS ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;

      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var slideEvent = $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName
      });

      $(this._element).trigger(slideEvent);

      return slideEvent;
    };

    Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    Carousel.prototype._slide = function _slide(direction, element) {
      var _this5 = this;

      var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var isCycling = Boolean(this._interval);

      var directionalClassName = void 0;
      var orderClassName = void 0;
      var eventDirectionName = void 0;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName
      });

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(orderClassName);

        Util.reflow(nextElement);

        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);

        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

          $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

          _this5._isSliding = false;

          setTimeout(function () {
            return $(_this5._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $(activeElement).removeClass(ClassName.ACTIVE);
        $(nextElement).addClass(ClassName.ACTIVE);

        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    };

    // static

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Default, $(this).data());

        if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
          $.extend(_config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error('No method named "' + action + '"');
          }
          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = $.extend({}, $(target).data(), $(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.card > .show, .card > .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // getters

    // public

    Collapse.prototype.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show() {
      var _this6 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning');
      }

      if ($(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives = void 0;
      var activesData = void 0;

      if (this._parent) {
        actives = $.makeArray($(this._parent).find(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;
      this._element.setAttribute('aria-expanded', true);

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

        _this6._element.style[dimension] = '';

        _this6.setTransitioning(false);

        $(_this6._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = 'scroll' + capitalizedDimension;

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = this._element[scrollSize] + 'px';
    };

    Collapse.prototype.hide = function hide() {
      var _this7 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning');
      }

      if (!$(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();
      var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

      this._element.style[dimension] = this._element[offsetDimension] + 'px';

      Util.reflow(this._element);

      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      this._element.setAttribute('aria-expanded', false);

      if (this._triggerArray.length) {
        $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this7.setTransitioning(false);
        $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    };

    // private

    Collapse.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Collapse.prototype._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    Collapse.prototype._getParent = function _getParent() {
      var _this8 = this;

      var parent = $(this._config.parent)[0];
      var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

      $(parent).find(selector).each(function (i, element) {
        _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });

      return parent;
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);
        element.setAttribute('aria-expanded', isOpen);

        if (triggerArray.length) {
          $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    };

    // static

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Collapse._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Collapse._jQueryInterface.call($(target), config);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUSIN_DATA_API: 'focusin' + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    BACKDROP: 'dropdown-backdrop',
    DISABLED: 'disabled',
    SHOW: 'show'
  };

  var Selector = {
    BACKDROP: '.dropdown-backdrop',
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    ROLE_MENU: '[role="menu"]',
    ROLE_LISTBOX: '[role="listbox"]',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = function () {
    function Dropdown(element) {
      _classCallCheck(this, Dropdown);

      this._element = element;

      this._addEventListeners();
    }

    // getters

    // public

    Dropdown.prototype.toggle = function toggle() {
      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return false;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return false;
      }

      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {

        // if mobile we use a backdrop because click events don't delegate
        var dropdown = document.createElement('div');
        dropdown.className = ClassName.BACKDROP;
        $(dropdown).insertBefore(this);
        $(dropdown).on('click', Dropdown._clearMenus);
      }

      var relatedTarget = {
        relatedTarget: this
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return false;
      }

      this.focus();
      this.setAttribute('aria-expanded', true);

      $(parent).toggleClass(ClassName.SHOW);
      $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

      return false;
    };

    Dropdown.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
    };

    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners() {
      $(this._element).on(Event.CLICK, this.toggle);
    };

    // static

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Dropdown(this);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config].call(this);
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && event.which === RIGHT_MOUSE_BUTTON_WHICH) {
        return;
      }

      var backdrop = $(Selector.BACKDROP)[0];
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'focusin') && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue;
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent = void 0;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && event.which !== ESCAPE_KEYCODE || isActive && event.which === ESCAPE_KEYCODE) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Dropdown;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.FOCUSIN_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    RESIZE: 'resize' + EVENT_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    // getters

    // public

    Modal.prototype.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    Modal.prototype.show = function show(relatedTarget) {
      var _this9 = this;

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning');
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }
      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this9.hide(event);
      });

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this9._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this9._element)) {
            _this9._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this9._showElement(relatedTarget);
      });
    };

    Modal.prototype.hide = function hide(event) {
      var _this10 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning');
      }

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._element).removeClass(ClassName.SHOW);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this10._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      $(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._originalBodyPadding = null;
      this._scrollbarWidth = null;
    };

    // private

    Modal.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Modal.prototype._showElement = function _showElement(relatedTarget) {
      var _this11 = this;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this11._config.focus) {
          _this11._element.focus();
        }
        _this11._isTransitioning = false;
        $(_this11._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus() {
      var _this12 = this;

      $(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this12._element !== event.target && !$(_this12._element).has(event.target).length) {
          _this12._element.focus();
        }
      });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
      var _this13 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            _this13.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent() {
      var _this14 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this14._handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal() {
      var _this15 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', 'true');
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);
        _this15._resetAdjustments();
        _this15._resetScrollbar();
        $(_this15._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop(callback) {
      var _this16 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this16._ignoreBackdropClick) {
            _this16._ignoreBackdropClick = false;
            return;
          }
          if (event.target !== event.currentTarget) {
            return;
          }
          if (_this16._config.backdrop === 'static') {
            _this16._element.focus();
          } else {
            _this16.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this16._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    };

    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._handleUpdate = function _handleUpdate() {
      this._adjustDialog();
    };

    Modal.prototype._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + 'px';
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + 'px';
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar() {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar() {
      var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

      this._originalBodyPadding = document.body.style.paddingRight || '';

      if (this._isBodyOverflowing) {
        document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar() {
      document.body.style.paddingRight = this._originalBodyPadding;
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };

    // static

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this17 = this;

    var target = void 0;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this17).is(':visible')) {
          _this17.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };

  var Event = {
    ACTIVATE: 'activate' + EVENT_KEY,
    SCROLL: 'scroll' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    NAV_LINK: 'nav-link',
    NAV: 'nav',
    ACTIVE: 'active'
  };

  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    LIST_ITEM: '.list-item',
    LI: 'li',
    LI_DROPDOWN: 'li.dropdown',
    NAV_LINKS: '.nav-link',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };

  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = function () {
    function ScrollSpy(element, config) {
      var _this18 = this;

      _classCallCheck(this, ScrollSpy);

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      $(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this18._process(event);
      });

      this.refresh();
      this._process();
    }

    // getters

    // public

    ScrollSpy.prototype.refresh = function refresh() {
      var _this19 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

      this._offsets = [];
      this._targets = [];

      this._scrollHeight = this._getScrollHeight();

      var targets = $.makeArray($(this._selector));

      targets.map(function (element) {
        var target = void 0;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $(targetSelector)[0];
        }

        if (target && (target.offsetWidth || target.offsetHeight)) {
          // todo (fat): remove sketch reliance on jQuery position/offset
          return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
        }
        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this19._offsets.push(item[0]);
        _this19._targets.push(item[1]);
      });
    };

    ScrollSpy.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);

      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    };

    // private

    ScrollSpy.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');
        if (!id) {
          id = Util.getUID(NAME);
          $(config.target).attr('id', id);
        }
        config.target = '#' + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);

      return config;
    };

    ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
    };

    ScrollSpy.prototype._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;
      var scrollHeight = this._getScrollHeight();
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    ScrollSpy.prototype._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',');
      queries = queries.map(function (selector) {
        return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
      });

      var $link = $(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // todo (fat) this is kinda sus...
        // recursively add actives to tested nav-links
        $link.parents(Selector.LI).find('> ' + Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    ScrollSpy.prototype._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    };

    // static

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    A: 'a',
    LI: 'li',
    DROPDOWN: '.dropdown',
    LIST: 'ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)',
    FADE_CHILD: '> .nav-item .fade, > .fade',
    ACTIVE: '.active',
    ACTIVE_CHILD: '> .nav-item > .active, > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    // getters

    // public

    Tab.prototype.show = function show() {
      var _this20 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target = void 0;
      var previous = void 0;
      var listElement = $(this._element).closest(Selector.LIST)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        previous = $.makeArray($(listElement).find(Selector.ACTIVE));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      });

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: _this20._element
        });

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        });

        $(previous).trigger(hiddenEvent);
        $(_this20._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    Tab.prototype.dispose = function dispose() {
      $.removeClass(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Tab.prototype._activate = function _activate(element, container, callback) {
      var _this21 = this;

      var active = $(container).find(Selector.ACTIVE_CHILD)[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));

      var complete = function complete() {
        return _this21._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        $(active).removeClass(ClassName.SHOW);
      }
    };

    Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);

        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        active.setAttribute('aria-expanded', false);
      }

      $(element).addClass(ClassName.ACTIVE);
      element.setAttribute('aria-expanded', true);

      if (isTransitioning) {
        Util.reflow(element);
        $(element).addClass(ClassName.SHOW);
      } else {
        $(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    };

    // static

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}(jQuery);

/* global Tether */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($) {

  /**
   * Check for Tether dependency
   * Tether - http://tether.io/
   */
  if (typeof Tether === 'undefined') {
    throw new Error('Bootstrap tooltips require Tether (http://tether.io/)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tether';

  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: '0 0',
    constraints: [],
    container: false
  };

  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: 'string',
    constraints: 'array',
    container: '(string|element|boolean)'
  };

  var AttachmentMap = {
    TOP: 'bottom center',
    RIGHT: 'middle left',
    BOTTOM: 'top center',
    LEFT: 'middle right'
  };

  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner'
  };

  var TetherClass = {
    element: false,
    enabled: false
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._isTransitioning = false;
      this._tether = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    // getters

    // public

    Tooltip.prototype.enable = function enable() {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable() {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle(event) {
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return;
        }

        this._enter(null, this);
      }
    };

    Tooltip.prototype.dispose = function dispose() {
      clearTimeout(this._timeout);

      this.cleanupTether();

      $.removeData(this.element, this.constructor.DATA_KEY);

      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      this._tether = null;

      this.element = null;
      this.config = null;
      this.tip = null;
    };

    Tooltip.prototype.show = function show() {
      var _this22 = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        if (this._isTransitioning) {
          throw new Error('Tooltip is transitioning');
        }
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        var container = this.config.container === false ? document.body : $(this.config.container);

        $(tip).data(this.constructor.DATA_KEY, this).appendTo(container);

        $(this.element).trigger(this.constructor.Event.INSERTED);

        this._tether = new Tether({
          attachment: attachment,
          element: tip,
          target: this.element,
          classes: TetherClass,
          classPrefix: CLASS_PREFIX,
          offset: this.config.offset,
          constraints: this.config.constraints,
          addTargetClasses: false
        });

        Util.reflow(tip);
        this._tether.position();

        $(tip).addClass(ClassName.SHOW);

        var complete = function complete() {
          var prevHoverState = _this22._hoverState;
          _this22._hoverState = null;
          _this22._isTransitioning = false;

          $(_this22.element).trigger(_this22.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this22._leave(null, _this22);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
          return;
        }

        complete();
      }
    };

    Tooltip.prototype.hide = function hide(callback) {
      var _this23 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      if (this._isTransitioning) {
        throw new Error('Tooltip is transitioning');
      }
      var complete = function complete() {
        if (_this23._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this23.element.removeAttribute('aria-describedby');
        $(_this23.element).trigger(_this23.constructor.Event.HIDDEN);
        _this23._isTransitioning = false;
        _this23.cleanupTether();

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName.SHOW);

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    // protected

    Tooltip.prototype.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    Tooltip.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Tooltip.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());

      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());

      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);

      this.cleanupTether();
    };

    Tooltip.prototype.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    Tooltip.prototype.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    };

    Tooltip.prototype.cleanupTether = function cleanupTether() {
      if (this._tether) {
        this._tether.destroy();
      }
    };

    // private

    Tooltip.prototype._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    Tooltip.prototype._setListeners = function _setListeners() {
      var _this24 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this24.element).on(_this24.constructor.Event.CLICK, _this24.config.selector, function (event) {
            return _this24.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this24.constructor.Event.MOUSEENTER : _this24.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this24.constructor.Event.MOUSELEAVE : _this24.constructor.Event.FOCUSOUT;

          $(_this24.element).on(eventIn, _this24.config.selector, function (event) {
            return _this24._enter(event);
          }).on(eventOut, _this24.config.selector, function (event) {
            return _this24._leave(event);
          });
        }

        $(_this24.element).closest('.modal').on('hide.bs.modal', function () {
          return _this24.hide();
        });
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    Tooltip.prototype._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    Tooltip.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    // static

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'popover';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = $.extend({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
  });

  var DefaultType = $.extend({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TITLE: '.popover-title',
    CONTENT: '.popover-content'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    function Popover() {
      _classCallCheck(this, Popover);

      return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
    }

    // overrides

    Popover.prototype.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    Popover.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Popover.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);

      this.cleanupTether();
    };

    // private

    Popover.prototype._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
    };

    // static

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: 'VERSION',


      // getters

      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Popover;
  }(Tooltip);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Popover._jQueryInterface;
  $.fn[NAME].Constructor = Popover;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}(jQuery);

}();

/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */(function(factory){
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$(element).data('datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.inputField.length;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}
		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('thead .datepicker-title, tfoot .today, tfoot .clear')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
		this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
		this.setDatesDisabled(this.o.datesDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view, default_value){
			if (view === 0 || view === 'days' || view === 'month') {
				return 0;
			}
			if (view === 1 || view === 'months' || view === 'year') {
				return 1;
			}
			if (view === 2 || view === 'years' || view === 'decade') {
				return 2;
			}
			if (view === 3 || view === 'decades' || view === 'century') {
				return 3;
			}
			if (view === 4 || view === 'centuries' || view === 'millennium') {
				return 4;
			}
			return default_value === undefined ? false : default_value;
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView, 0);
			o.minViewMode = this._resolveViewName(o.minViewMode, 0);
			o.maxViewMode = this._resolveViewName(o.maxViewMode, 4);

			// Check that the start view is between min and max
			o.startView = Math.min(o.startView, o.maxViewMode);
			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			o.daysOfWeekHighlighted = o.daysOfWeekHighlighted||[];
			if (!$.isArray(o.daysOfWeekHighlighted))
				o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
			o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function(d){
				return parseInt(d, 10);
			});

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = [
					o.datesDisabled
				];
			}
			o.datesDisabled = $.map(o.datesDisabled,function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            else if (this.component && this.hasInput) { // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					mousedown: $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(evt){
			var dateString;
			if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types
				&& $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
				dateString = evt.originalEvent.clipboardData.getData('text/plain');
			}
			else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			}
			else {
				return;
			}
			this.setDate(dateString);
			this.update();
			evt.preventDefault();
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (typeof selected_date !== 'undefined') {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			if (this.inputField) {
				this.inputField.val('');
			}

			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},
		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left,
				top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					// Default to left
					this.picker.addClass('datepicker-orient-left');
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);
			else
				this.viewDate = this.o.defaultViewDate;

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
			this.element.change();
			return this;
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				this.picker.find('.datepicker-days .datepicker-switch')
					.attr('colspan', function(i, val){
						return parseInt(val) + 1;
					});
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) > -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '',
			i = 0;
			while (i < 12){
        var focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');	
			} 
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, step, currentYear, startYear, endYear, callback){
			var html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;

			html      = '';
			view      = this.picker.find(selector);
			year      = parseInt(currentYear / factor, 10) * factor;
			startStep = parseInt(startYear / step, 10) * step;
			endStep   = parseInt(endYear / step, 10) * step;
			steps     = $.map(this.dates, function(d){
				return parseInt(d.getUTCFullYear() / step, 10) * step;
			});

			view.find('.datepicker-switch').text(year + '-' + (year + step * 9));

			thisYear = year - step;
			for (i = -1; i < 11; i += 1) {
				classes = [cssClass];
				tooltip = null;

				if (i === -1) {
					classes.push('old');
				} else if (i === 10) {
					classes.push('new');
				}
				if ($.inArray(thisYear, steps) !== -1) {
					classes.push('active');
				}
				if (thisYear < startStep || thisYear > endStep) {
					classes.push('disabled');
				}
        if (thisYear === this.viewDate.getFullYear()) {
				  classes.push('focused');
        }

				if (callback !== $.noop) {
					before = callback(new Date(thisYear, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof(before) === 'boolean') {
						before = {enabled: before};
					} else if (typeof(before) === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + thisYear + '</span>';
				thisYear += step;
			}
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.toggle(this.o.title !== '');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				1,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
				case 3:
				case 4:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month, monthChanged, yearChanged;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch')){
				this.showMode(1);
			}

			// Clicked on prev or next
			var navArrow = target.closest('.prev, .next');
			if (navArrow.length > 0) {
				dir = DPGlobal.modes[this.viewMode].navStep * (navArrow.hasClass('prev') ? -1 : 1);
				if (this.viewMode === 0){
					this.viewDate = this.moveMonth(this.viewDate, dir);
					this._trigger('changeMonth', this.viewDate);
				} else {
					this.viewDate = this.moveYear(this.viewDate, dir);
					if (this.viewMode === 1){
						this._trigger('changeYear', this.viewDate);
					}
				}
				this.fill();
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.showMode(-2);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a day
				if (target.hasClass('day')){
					day = parseInt(target.text(), 10) || 1;
					year = this.viewDate.getUTCFullYear();
					month = this.viewDate.getUTCMonth();

					// From last month
					if (target.hasClass('old')){
						if (month === 0) {
							month = 11;
							year = year - 1;
							monthChanged = true;
							yearChanged = true;
						} else {
							month = month - 1;
							monthChanged = true;
 						}
 					}

					// From next month
					if (target.hasClass('new')) {
						if (month === 11){
							month = 0;
							year = year + 1;
							monthChanged = true;
							yearChanged = true;
 						} else {
							month = month + 1;
							monthChanged = true;
 						}
					}
					this._setDate(UTCDate(year, month, day));
					if (yearChanged) {
						this._trigger('changeYear', this.viewDate);
					}
					if (monthChanged) {
						this._trigger('changeMonth', this.viewDate);
					}
				}

				// Clicked on a month
				if (target.hasClass('month')) {
					this.viewDate.setUTCDate(1);
					day = 1;
					month = target.parent().find('span').index(target);
					year = this.viewDate.getUTCFullYear();
					this.viewDate.setUTCMonth(month);
					this._trigger('changeMonth', this.viewDate);
					if (this.o.minViewMode === 1){
						this._setDate(UTCDate(year, month, day));
						this.showMode();
					} else {
						this.showMode(-1);
					}
					this.fill();
				}

				// Clicked on a year
				if (target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					month = 0;
					year = parseInt(target.text(), 10)||0;
					this.viewDate.setUTCFullYear(year);

					if (target.hasClass('year')){
						this._trigger('changeYear', this.viewDate);
						if (this.o.minViewMode === 2){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('decade')){
						this._trigger('changeDecade', this.viewDate);
						if (this.o.minViewMode === 3){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('century')){
						this._trigger('changeCentury', this.viewDate);
						if (this.o.minViewMode === 4){
							this._setDate(UTCDate(year, month, day));
						}
					}

					this.showMode(-1);
					this.fill();
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			if (this.inputField){
				this.inputField.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					}
  					else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					}
  					else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					}
  					else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				if (this.inputField){
					this.inputField.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
			}
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		$(element).data('datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker');

			if (typeof(dp) === "undefined") {
				return;
			}

			var new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&laquo;',
			rightArrow: '&raquo;'
		}
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
			},
			{
				clsName: 'decades',
				navFnc: 'FullDecade',
				navStep: 100
			},
			{
				clsName: 'centuries',
				navFnc: 'FullCentury',
				navStep: 1000
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
                return format.toValue(date, format, language);
            var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				part, dir, i, fn;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					fn = fn_map[part[2]];
					date = Datepicker.prototype[fn](date, dir);
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
			}

			if (typeof dateAliases[date] !== 'undefined') {
				date = dateAliases[date];
				parts = date.match(/([\-+]\d+)([dmwy])/g);

				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
					date = new Date();
				  	for (i=0; i < parts.length; i++){
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						fn = fn_map[part[2]];
						date = Datepicker.prototype[fn](date, dir);
				  	}

			  		return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
				}
			}

			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.6.4';

	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));

﻿/* =========================================================
 * bootstrap-datetimepicker.js
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Improvements by Andrew Rowls
 * Improvements by Sébastien Malot
 * Improvements by Yun Lai
 * Improvements by Kenneth Henderick
 * Improvements by CuGBabyBeaR
 * Improvements by Christian Vaas <auspex@auspex.eu>
 *
 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function(factory){
    if (typeof define === 'function' && define.amd)
      define(['jquery'], factory);
    else if (typeof exports === 'object')
      factory(require('jquery'));
    else
      factory(jQuery);

}(function($, undefined){

  // Add ECMA262-5 Array methods if not supported natively (IE8)
  if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf = function (find, i) {
      if (i === undefined) i = 0;
      if (i < 0) i += this.length;
      if (i < 0) i = 0;
      for (var n = this.length; i < n; i++) {
        if (i in this && this[i] === find) {
          return i;
        }
      }
      return -1;
    }
  }

  // Add timezone abbreviation support for ie6+, Chrome, Firefox
  function timeZoneAbbreviation() {
    var abbreviation, date, formattedStr, i, len, matchedStrings, ref, str;
    date = (new Date()).toString();
    formattedStr = ((ref = date.split('(')[1]) != null ? ref.slice(0, -1) : 0) || date.split(' ');
    if (formattedStr instanceof Array) {
      matchedStrings = [];
      for (var i = 0, len = formattedStr.length; i < len; i++) {
        str = formattedStr[i];
        if ((abbreviation = (ref = str.match(/\b[A-Z]+\b/)) !== null) ? ref[0] : 0) {
          matchedStrings.push(abbreviation);
        }
      }
      formattedStr = matchedStrings.pop();
    }
    return formattedStr;
  }

  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  // Picker object
  var Datetimepicker = function (element, options) {
    var that = this;

    this.element = $(element);

    // add container for single page application
    // when page switch the datetimepicker div will be removed also.
    this.container = options.container || 'body';

    this.language = options.language || this.element.data('date-language') || 'en';
    this.language = this.language in dates ? this.language : this.language.split('-')[0]; // fr-CA fallback to fr
    this.language = this.language in dates ? this.language : 'en';
    this.isRTL = dates[this.language].rtl || false;
    this.formatType = options.formatType || this.element.data('format-type') || 'standard';
    this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
    this.isInline = false;
    this.isVisible = false;
    this.isInput = this.element.is('input');
    this.fontAwesome = options.fontAwesome || this.element.data('font-awesome') || false;

    this.bootcssVer = options.bootcssVer || (this.isInput ? (this.element.is('.form-control') ? 3 : 2) : ( this.bootcssVer = this.element.is('.input-group') ? 3 : 2 ));

    this.component = this.element.is('.date') ? ( this.bootcssVer === 3 ? this.element.find('.input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o').parent() : this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o').parent()) : false;
    this.componentReset = this.element.is('.date') ? ( this.bootcssVer === 3 ? this.element.find('.input-group-addon .glyphicon-remove, .input-group-addon .fa-times').parent():this.element.find('.add-on .icon-remove, .add-on .fa-times').parent()) : false;
    this.hasInput = this.component && this.element.find('input').length;
    if (this.component && this.component.length === 0) {
      this.component = false;
    }
    this.linkField = options.linkField || this.element.data('link-field') || false;
    this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
    this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
    this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
    this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
    this.initialDate = options.initialDate || new Date();
    this.zIndex = options.zIndex || this.element.data('z-index') || undefined;
    this.title = typeof options.title === 'undefined' ? false : options.title;
    this.timezone = options.timezone || timeZoneAbbreviation();

    this.icons = {
      leftArrow: this.fontAwesome ? 'fa-arrow-left' : (this.bootcssVer === 3 ? 'glyphicon-arrow-left' : 'icon-arrow-left'),
      rightArrow: this.fontAwesome ? 'fa-arrow-right' : (this.bootcssVer === 3 ? 'glyphicon-arrow-right' : 'icon-arrow-right')
    }
    this.icontype = this.fontAwesome ? 'fa' : 'glyphicon';

    this._attachEvents();

    this.clickedOutside = function (e) {
        // Clicked outside the datetimepicker, hide it
        if ($(e.target).closest('.datetimepicker').length === 0) {
            that.hide();
        }
    }

    this.formatViewType = 'datetime';
    if ('formatViewType' in options) {
      this.formatViewType = options.formatViewType;
    } else if ('formatViewType' in this.element.data()) {
      this.formatViewType = this.element.data('formatViewType');
    }

    this.minView = 0;
    if ('minView' in options) {
      this.minView = options.minView;
    } else if ('minView' in this.element.data()) {
      this.minView = this.element.data('min-view');
    }
    this.minView = DPGlobal.convertViewMode(this.minView);

    this.maxView = DPGlobal.modes.length - 1;
    if ('maxView' in options) {
      this.maxView = options.maxView;
    } else if ('maxView' in this.element.data()) {
      this.maxView = this.element.data('max-view');
    }
    this.maxView = DPGlobal.convertViewMode(this.maxView);

    this.wheelViewModeNavigation = false;
    if ('wheelViewModeNavigation' in options) {
      this.wheelViewModeNavigation = options.wheelViewModeNavigation;
    } else if ('wheelViewModeNavigation' in this.element.data()) {
      this.wheelViewModeNavigation = this.element.data('view-mode-wheel-navigation');
    }

    this.wheelViewModeNavigationInverseDirection = false;

    if ('wheelViewModeNavigationInverseDirection' in options) {
      this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection;
    } else if ('wheelViewModeNavigationInverseDirection' in this.element.data()) {
      this.wheelViewModeNavigationInverseDirection = this.element.data('view-mode-wheel-navigation-inverse-dir');
    }

    this.wheelViewModeNavigationDelay = 100;
    if ('wheelViewModeNavigationDelay' in options) {
      this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay;
    } else if ('wheelViewModeNavigationDelay' in this.element.data()) {
      this.wheelViewModeNavigationDelay = this.element.data('view-mode-wheel-navigation-delay');
    }

    this.startViewMode = 2;
    if ('startView' in options) {
      this.startViewMode = options.startView;
    } else if ('startView' in this.element.data()) {
      this.startViewMode = this.element.data('start-view');
    }
    this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
    this.viewMode = this.startViewMode;

    this.viewSelect = this.minView;
    if ('viewSelect' in options) {
      this.viewSelect = options.viewSelect;
    } else if ('viewSelect' in this.element.data()) {
      this.viewSelect = this.element.data('view-select');
    }
    this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);

    this.forceParse = true;
    if ('forceParse' in options) {
      this.forceParse = options.forceParse;
    } else if ('dateForceParse' in this.element.data()) {
      this.forceParse = this.element.data('date-force-parse');
    }
    var template = this.bootcssVer === 3 ? DPGlobal.templateV3 : DPGlobal.template;
    while (template.indexOf('{iconType}') !== -1) {
      template = template.replace('{iconType}', this.icontype);
    }
    while (template.indexOf('{leftArrow}') !== -1) {
      template = template.replace('{leftArrow}', this.icons.leftArrow);
    }
    while (template.indexOf('{rightArrow}') !== -1) {
      template = template.replace('{rightArrow}', this.icons.rightArrow);
    }
    this.picker = $(template)
      .appendTo(this.isInline ? this.element : this.container) // 'body')
      .on({
        click:     $.proxy(this.click, this),
        mousedown: $.proxy(this.mousedown, this)
      });

    if (this.wheelViewModeNavigation) {
      if ($.fn.mousewheel) {
        this.picker.on({mousewheel: $.proxy(this.mousewheel, this)});
      } else {
        console.log('Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option');
      }
    }

    if (this.isInline) {
      this.picker.addClass('datetimepicker-inline');
    } else {
      this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu');
    }
    if (this.isRTL) {
      this.picker.addClass('datetimepicker-rtl');
      var selector = this.bootcssVer === 3 ? '.prev span, .next span' : '.prev i, .next i';
      this.picker.find(selector).toggleClass(this.icons.leftArrow + ' ' + this.icons.rightArrow);
    }

    $(document).on('mousedown touchend', this.clickedOutside);

    this.autoclose = false;
    if ('autoclose' in options) {
      this.autoclose = options.autoclose;
    } else if ('dateAutoclose' in this.element.data()) {
      this.autoclose = this.element.data('date-autoclose');
    }

    this.keyboardNavigation = true;
    if ('keyboardNavigation' in options) {
      this.keyboardNavigation = options.keyboardNavigation;
    } else if ('dateKeyboardNavigation' in this.element.data()) {
      this.keyboardNavigation = this.element.data('date-keyboard-navigation');
    }

    this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
    this.clearBtn = (options.clearBtn || this.element.data('date-clear-btn') || false);
    this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);

    this.weekStart = 0;
    if (typeof options.weekStart !== 'undefined') {
      this.weekStart = options.weekStart;
    } else if (typeof this.element.data('date-weekstart') !== 'undefined') {
      this.weekStart = this.element.data('date-weekstart');
    } else if (typeof dates[this.language].weekStart !== 'undefined') {
      this.weekStart = dates[this.language].weekStart;
    }
    this.weekStart = this.weekStart % 7;
    this.weekEnd = ((this.weekStart + 6) % 7);
    this.onRenderDay = function (date) {
      var render = (options.onRenderDay || function () { return []; })(date);
      if (typeof render === 'string') {
        render = [render];
      }
      var res = ['day'];
      return res.concat((render ? render : []));
    };
    this.onRenderHour = function (date) {
      var render = (options.onRenderHour || function () { return []; })(date);
      var res = ['hour'];
      if (typeof render === 'string') {
        render = [render];
      }
      return res.concat((render ? render : []));
    };
    this.onRenderMinute = function (date) {
      var render = (options.onRenderMinute || function () { return []; })(date);
      var res = ['minute'];
      if (typeof render === 'string') {
        render = [render];
      }
      if (date < this.startDate || date > this.endDate) {
        res.push('disabled');
      } else if (Math.floor(this.date.getUTCMinutes() / this.minuteStep) === Math.floor(date.getUTCMinutes() / this.minuteStep)) {
        res.push('active');
      }
      return res.concat((render ? render : []));
    };
    this.onRenderYear = function (date) {
      var render = (options.onRenderYear || function () { return []; })(date);
      var res = ['year'];
      if (typeof render === 'string') {
        render = [render];
      }
      if (this.date.getUTCFullYear() === date.getUTCFullYear()) {
        res.push('active');
      }
      var currentYear = date.getUTCFullYear();
      var endYear = this.endDate.getUTCFullYear();
      if (date < this.startDate || currentYear > endYear) {
        res.push('disabled');
      }
      return res.concat((render ? render : []));
    }
    this.onRenderMonth = function (date) {
      var render = (options.onRenderMonth || function () { return []; })(date);
      var res = ['month'];
      if (typeof render === 'string') {
        render = [render];
      }
      return res.concat((render ? render : []));
    }
    this.startDate = new Date(-8639968443048000);
    this.endDate = new Date(8639968443048000);
    this.datesDisabled = [];
    this.daysOfWeekDisabled = [];
    this.setStartDate(options.startDate || this.element.data('date-startdate'));
    this.setEndDate(options.endDate || this.element.data('date-enddate'));
    this.setDatesDisabled(options.datesDisabled || this.element.data('date-dates-disabled'));
    this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
    this.setMinutesDisabled(options.minutesDisabled || this.element.data('date-minute-disabled'));
    this.setHoursDisabled(options.hoursDisabled || this.element.data('date-hour-disabled'));
    this.fillDow();
    this.fillMonths();
    this.update();
    this.showMode();

    if (this.isInline) {
      this.show();
    }
  };

  Datetimepicker.prototype = {
    constructor: Datetimepicker,

    _events:       [],
    _attachEvents: function () {
      this._detachEvents();
      if (this.isInput) { // single input
        this._events = [
          [this.element, {
            focus:   $.proxy(this.show, this),
            keyup:   $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
          }]
        ];
      }
      else if (this.component && this.hasInput) { // component: input + button
        this._events = [
          // For components that are not readonly, allow keyboard nav
          [this.element.find('input'), {
            focus:   $.proxy(this.show, this),
            keyup:   $.proxy(this.update, this),
            keydown: $.proxy(this.keydown, this)
          }],
          [this.component, {
            click: $.proxy(this.show, this)
          }]
        ];
        if (this.componentReset) {
          this._events.push([
            this.componentReset,
            {click: $.proxy(this.reset, this)}
          ]);
        }
      }
      else if (this.element.is('div')) {  // inline datetimepicker
        this.isInline = true;
      }
      else {
        this._events = [
          [this.element, {
            click: $.proxy(this.show, this)
          }]
        ];
      }
      for (var i = 0, el, ev; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.on(ev);
      }
    },

    _detachEvents: function () {
      for (var i = 0, el, ev; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.off(ev);
      }
      this._events = [];
    },

    show: function (e) {
      this.picker.show();
      this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
      if (this.forceParse) {
        this.update();
      }
      this.place();
      $(window).on('resize', $.proxy(this.place, this));
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.isVisible = true;
      this.element.trigger({
        type: 'show',
        date: this.date
      });
    },

    hide: function () {
      if (!this.isVisible) return;
      if (this.isInline) return;
      this.picker.hide();
      $(window).off('resize', this.place);
      this.viewMode = this.startViewMode;
      this.showMode();
      if (!this.isInput) {
        $(document).off('mousedown', this.hide);
      }

      if (
        this.forceParse &&
          (
            this.isInput && this.element.val() ||
              this.hasInput && this.element.find('input').val()
            )
        )
        this.setValue();
      this.isVisible = false;
      this.element.trigger({
        type: 'hide',
        date: this.date
      });
    },

    remove: function () {
      this._detachEvents();
      $(document).off('mousedown', this.clickedOutside);
      this.picker.remove();
      delete this.picker;
      delete this.element.data().datetimepicker;
    },

    getDate: function () {
      var d = this.getUTCDate();
      if (d === null) {
        return null;
      }
      return new Date(d.getTime() + (d.getTimezoneOffset() * 60000));
    },

    getUTCDate: function () {
      return this.date;
    },

    getInitialDate: function () {
      return this.initialDate
    },

    setInitialDate: function (initialDate) {
      this.initialDate = initialDate;
    },

    setDate: function (d) {
      this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)));
    },

    setUTCDate: function (d) {
      if (d >= this.startDate && d <= this.endDate) {
        this.date = d;
        this.setValue();
        this.viewDate = this.date;
        this.fill();
      } else {
        this.element.trigger({
          type:      'outOfRange',
          date:      d,
          startDate: this.startDate,
          endDate:   this.endDate
        });
      }
    },

    setFormat: function (format) {
      this.format = DPGlobal.parseFormat(format, this.formatType);
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element && element.val()) {
        this.setValue();
      }
    },

    setValue: function () {
      var formatted = this.getFormattedDate();
      if (!this.isInput) {
        if (this.component) {
          this.element.find('input').val(formatted);
        }
        this.element.data('date', formatted);
      } else {
        this.element.val(formatted);
      }
      if (this.linkField) {
        $('#' + this.linkField).val(this.getFormattedDate(this.linkFormat));
      }
    },

    getFormattedDate: function (format) {
      format = format || this.format;
      return DPGlobal.formatDate(this.date, format, this.language, this.formatType, this.timezone);
    },

    setStartDate: function (startDate) {
      this.startDate = startDate || this.startDate;
      if (this.startDate.valueOf() !== 8639968443048000) {
        this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone);
      }
      this.update();
      this.updateNavArrows();
    },

    setEndDate: function (endDate) {
      this.endDate = endDate || this.endDate;
      if (this.endDate.valueOf() !== 8639968443048000) {
        this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone);
      }
      this.update();
      this.updateNavArrows();
    },

    setDatesDisabled: function (datesDisabled) {
      this.datesDisabled = datesDisabled || [];
      if (!$.isArray(this.datesDisabled)) {
        this.datesDisabled = this.datesDisabled.split(/,\s*/);
      }
      var mThis = this;
      this.datesDisabled = $.map(this.datesDisabled, function (d) {
        return DPGlobal.parseDate(d, mThis.format, mThis.language, mThis.formatType, mThis.timezone).toDateString();
      });
      this.update();
      this.updateNavArrows();
    },

    setTitle: function (selector, value) {
      return this.picker.find(selector)
        .find('th:eq(1)')
        .text(this.title === false ? value : this.title);
    },

    setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
      this.daysOfWeekDisabled = daysOfWeekDisabled || [];
      if (!$.isArray(this.daysOfWeekDisabled)) {
        this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
      }
      this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    setMinutesDisabled: function (minutesDisabled) {
      this.minutesDisabled = minutesDisabled || [];
      if (!$.isArray(this.minutesDisabled)) {
        this.minutesDisabled = this.minutesDisabled.split(/,\s*/);
      }
      this.minutesDisabled = $.map(this.minutesDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    setHoursDisabled: function (hoursDisabled) {
      this.hoursDisabled = hoursDisabled || [];
      if (!$.isArray(this.hoursDisabled)) {
        this.hoursDisabled = this.hoursDisabled.split(/,\s*/);
      }
      this.hoursDisabled = $.map(this.hoursDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    place: function () {
      if (this.isInline) return;

      if (!this.zIndex) {
        var index_highest = 0;
        $('div').each(function () {
          var index_current = parseInt($(this).css('zIndex'), 10);
          if (index_current > index_highest) {
            index_highest = index_current;
          }
        });
        this.zIndex = index_highest + 10;
      }

      var offset, top, left, containerOffset;
      if (this.container instanceof $) {
        containerOffset = this.container.offset();
      } else {
        containerOffset = $(this.container).offset();
      }

      if (this.component) {
        offset = this.component.offset();
        left = offset.left;
        if (this.pickerPosition === 'bottom-left' || this.pickerPosition === 'top-left') {
          left += this.component.outerWidth() - this.picker.outerWidth();
        }
      } else {
        offset = this.element.offset();
        left = offset.left;
        if (this.pickerPosition === 'bottom-left' || this.pickerPosition === 'top-left') {
          left += this.element.outerWidth() - this.picker.outerWidth();
        }
      }

      var bodyWidth = document.body.clientWidth || window.innerWidth;
      if (left + 220 > bodyWidth) {
        left = bodyWidth - 220;
      }

      if (this.pickerPosition === 'top-left' || this.pickerPosition === 'top-right') {
        top = offset.top - this.picker.outerHeight();
      } else {
        top = offset.top + this.height;
      }

      top = top - containerOffset.top;
      left = left - containerOffset.left;

      this.picker.css({
        top:    top,
        left:   left,
        zIndex: this.zIndex
      });
    },

    hour_minute: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]",

    update: function () {
      var date, fromArgs = false;
      if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
        date = arguments[0];
        fromArgs = true;
      } else {
        date = (this.isInput ? this.element.val() : this.element.find('input').val()) || this.element.data('date') || this.initialDate;
        if (typeof date === 'string') {
          date = date.replace(/^\s+|\s+$/g,'');
        }
      }

      if (!date) {
        date = new Date();
        fromArgs = false;
      }

      if (typeof date === "string") {
        if (new RegExp(this.hour_minute).test(date) || new RegExp(this.hour_minute + ":[0-5][0-9]").test(date)) {
          date = this.getDate()
        }
      }

      this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType, this.timezone);

      if (fromArgs) this.setValue();

      if (this.date < this.startDate) {
        this.viewDate = new Date(this.startDate);
      } else if (this.date > this.endDate) {
        this.viewDate = new Date(this.endDate);
      } else {
        this.viewDate = new Date(this.date);
      }
      this.fill();
    },

    fillDow: function () {
      var dowCnt = this.weekStart,
        html = '<tr>';
      while (dowCnt < this.weekStart + 7) {
        html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>';
      }
      html += '</tr>';
      this.picker.find('.datetimepicker-days thead').append(html);
    },

    fillMonths: function () {
      var html = '';
      var d = new Date(this.viewDate);
      for (var i = 0; i < 12; i++) {
        d.setUTCMonth(i);
        var classes = this.onRenderMonth(d);
        html += '<span class="' + classes.join(' ') + '">' + dates[this.language].monthsShort[i] + '</span>';
      }
      this.picker.find('.datetimepicker-months td').html(html);
    },

    fill: function () {
      if (!this.date || !this.viewDate) {
        return;
      }
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        dayMonth = d.getUTCDate(),
        hours = d.getUTCHours(),
        startYear = this.startDate.getUTCFullYear(),
        startMonth = this.startDate.getUTCMonth(),
        endYear = this.endDate.getUTCFullYear(),
        endMonth = this.endDate.getUTCMonth() + 1,
        currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
        today = new Date();
      this.setTitle('.datetimepicker-days', dates[this.language].months[month] + ' ' + year)
      if (this.formatViewType === 'time') {
        var formatted = this.getFormattedDate();
        this.setTitle('.datetimepicker-hours', formatted);
        this.setTitle('.datetimepicker-minutes', formatted);
      } else {
        this.setTitle('.datetimepicker-hours', dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
        this.setTitle('.datetimepicker-minutes', dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
      }
      this.picker.find('tfoot th.today')
        .text(dates[this.language].today || dates['en'].today)
        .toggle(this.todayBtn !== false);
      this.picker.find('tfoot th.clear')
        .text(dates[this.language].clear || dates['en'].clear)
        .toggle(this.clearBtn !== false);
      this.updateNavArrows();
      this.fillMonths();
      var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
        day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth);
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var classes;
      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() === this.weekStart) {
          html.push('<tr>');
        }
        classes = this.onRenderDay(prevMonth);
        if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() === year && prevMonth.getUTCMonth() < month)) {
          classes.push('old');
        } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() === year && prevMonth.getUTCMonth() > month)) {
          classes.push('new');
        }
        // Compare internal UTC date with local today, not UTC today
        if (this.todayHighlight &&
          prevMonth.getUTCFullYear() === today.getFullYear() &&
          prevMonth.getUTCMonth() === today.getMonth() &&
          prevMonth.getUTCDate() === today.getDate()) {
          classes.push('today');
        }
        if (prevMonth.valueOf() === currentDate) {
          classes.push('active');
        }
        if ((prevMonth.valueOf() + 86400000) <= this.startDate || prevMonth.valueOf() > this.endDate ||
          $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1 ||
          $.inArray(prevMonth.toDateString(), this.datesDisabled) !== -1) {
          classes.push('disabled');
        }
        html.push('<td class="' + classes.join(' ') + '">' + prevMonth.getUTCDate() + '</td>');
        if (prevMonth.getUTCDay() === this.weekEnd) {
          html.push('</tr>');
        }
        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }
      this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));

      html = [];
      var txt = '', meridian = '', meridianOld = '';
      var hoursDisabled = this.hoursDisabled || [];
      d = new Date(this.viewDate)
      for (var i = 0; i < 24; i++) {
        d.setUTCHours(i);
        classes = this.onRenderHour(d);
        if (hoursDisabled.indexOf(i) !== -1) {
          classes.push('disabled');
        }
        var actual = UTCDate(year, month, dayMonth, i);
        // We want the previous hour for the startDate
        if ((actual.valueOf() + 3600000) <= this.startDate || actual.valueOf() > this.endDate) {
          classes.push('disabled');
        } else if (hours === i) {
          classes.push('active');
        }
        if (this.showMeridian && dates[this.language].meridiem.length === 2) {
          meridian = (i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
          if (meridian !== meridianOld) {
            if (meridianOld !== '') {
              html.push('</fieldset>');
            }
            html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>');
          }
          meridianOld = meridian;
          txt = (i % 12 ? i % 12 : 12);
          if (i < 12) {
            classes.push('hour_am');
          } else {
            classes.push('hour_pm');
          }
          html.push('<span class="' + classes.join(' ') + '">' + txt + '</span>');
          if (i === 23) {
            html.push('</fieldset>');
          }
        } else {
          txt = i + ':00';
          html.push('<span class="' + classes.join(' ') + '">' + txt + '</span>');
        }
      }
      this.picker.find('.datetimepicker-hours td').html(html.join(''));

      html = [];
      txt = '';
      meridian = '';
      meridianOld = '';
      var minutesDisabled = this.minutesDisabled || [];
      d = new Date(this.viewDate);
      for (var i = 0; i < 60; i += this.minuteStep) {
        if (minutesDisabled.indexOf(i) !== -1) continue;
        d.setUTCMinutes(i);
        d.setUTCSeconds(0);
        classes = this.onRenderMinute(d);
        if (this.showMeridian && dates[this.language].meridiem.length === 2) {
          meridian = (hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
          if (meridian !== meridianOld) {
            if (meridianOld !== '') {
              html.push('</fieldset>');
            }
            html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>');
          }
          meridianOld = meridian;
          txt = (hours % 12 ? hours % 12 : 12);
          html.push('<span class="' + classes.join(' ') + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
          if (i === 59) {
            html.push('</fieldset>');
          }
        } else {
          txt = i + ':00';
          html.push('<span class="' + classes.join(' ') + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
        }
      }
      this.picker.find('.datetimepicker-minutes td').html(html.join(''));

      var currentYear = this.date.getUTCFullYear();
      var months = this.setTitle('.datetimepicker-months', year)
        .end()
        .find('.month').removeClass('active');
      if (currentYear === year) {
        // getUTCMonths() returns 0 based, and we need to select the next one
        // To cater bootstrap 2 we don't need to select the next one
        months.eq(this.date.getUTCMonth()).addClass('active');
      }
      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }
      if (year === startYear) {
        months.slice(0, startMonth).addClass('disabled');
      }
      if (year === endYear) {
        months.slice(endMonth).addClass('disabled');
      }

      html = '';
      year = parseInt(year / 10, 10) * 10;
      var yearCont = this.setTitle('.datetimepicker-years', year + '-' + (year + 9))
        .end()
        .find('td');
      year -= 1;
      d = new Date(this.viewDate);
      for (var i = -1; i < 11; i++) {
        d.setUTCFullYear(year);
        classes = this.onRenderYear(d);
        if (i === -1 || i === 10) {
          classes.push(old);
        }
        html += '<span class="' + classes.join(' ') + '">' + year + '</span>';
        year += 1;
      }
      yearCont.html(html);
      this.place();
    },

    updateNavArrows: function () {
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        day = d.getUTCDate(),
        hour = d.getUTCHours();
      switch (this.viewMode) {
        case 0:
          if (year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()
            && day <= this.startDate.getUTCDate()
            && hour <= this.startDate.getUTCHours()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()
            && day >= this.endDate.getUTCDate()
            && hour >= this.endDate.getUTCHours()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 1:
          if (year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()
            && day <= this.startDate.getUTCDate()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()
            && day >= this.endDate.getUTCDate()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 2:
          if (year <= this.startDate.getUTCFullYear()
            && month <= this.startDate.getUTCMonth()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (year >= this.endDate.getUTCFullYear()
            && month >= this.endDate.getUTCMonth()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
        case 3:
        case 4:
          if (year <= this.startDate.getUTCFullYear()) {
            this.picker.find('.prev').css({visibility: 'hidden'});
          } else {
            this.picker.find('.prev').css({visibility: 'visible'});
          }
          if (year >= this.endDate.getUTCFullYear()) {
            this.picker.find('.next').css({visibility: 'hidden'});
          } else {
            this.picker.find('.next').css({visibility: 'visible'});
          }
          break;
      }
    },

    mousewheel: function (e) {

      e.preventDefault();
      e.stopPropagation();

      if (this.wheelPause) {
        return;
      }

      this.wheelPause = true;

      var originalEvent = e.originalEvent;

      var delta = originalEvent.wheelDelta;

      var mode = delta > 0 ? 1 : (delta === 0) ? 0 : -1;

      if (this.wheelViewModeNavigationInverseDirection) {
        mode = -mode;
      }

      this.showMode(mode);

      setTimeout($.proxy(function () {

        this.wheelPause = false

      }, this), this.wheelViewModeNavigationDelay);

    },

    click: function (e) {
      e.stopPropagation();
      e.preventDefault();
      var target = $(e.target).closest('span, td, th, legend');
      if (target.is('.' + this.icontype)) {
        target = $(target).parent().closest('span, td, th, legend');
      }
      if (target.length === 1) {
        if (target.is('.disabled')) {
          this.element.trigger({
            type:      'outOfRange',
            date:      this.viewDate,
            startDate: this.startDate,
            endDate:   this.endDate
          });
          return;
        }
        switch (target[0].nodeName.toLowerCase()) {
          case 'th':
            switch (target[0].className) {
              case 'switch':
                this.showMode(1);
                break;
              case 'prev':
              case 'next':
                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
                switch (this.viewMode) {
                  case 0:
                    this.viewDate = this.moveHour(this.viewDate, dir);
                    break;
                  case 1:
                    this.viewDate = this.moveDate(this.viewDate, dir);
                    break;
                  case 2:
                    this.viewDate = this.moveMonth(this.viewDate, dir);
                    break;
                  case 3:
                  case 4:
                    this.viewDate = this.moveYear(this.viewDate, dir);
                    break;
                }
                this.fill();
                this.element.trigger({
                  type:      target[0].className + ':' + this.convertViewModeText(this.viewMode),
                  date:      this.viewDate,
                  startDate: this.startDate,
                  endDate:   this.endDate
                });
                break;
              case 'clear':
                this.reset();
                if (this.autoclose) {
                  this.hide();
                }
                break;
              case 'today':
                var date = new Date();
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);

                // Respect startDate and endDate.
                if (date < this.startDate) date = this.startDate;
                else if (date > this.endDate) date = this.endDate;

                this.viewMode = this.startViewMode;
                this.showMode(0);
                this._setDate(date);
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
                break;
            }
            break;
          case 'span':
            if (!target.is('.disabled')) {
              var year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                day = this.viewDate.getUTCDate(),
                hours = this.viewDate.getUTCHours(),
                minutes = this.viewDate.getUTCMinutes(),
                seconds = this.viewDate.getUTCSeconds();

              if (target.is('.month')) {
                this.viewDate.setUTCDate(1);
                month = target.parent().find('span').index(target);
                day = this.viewDate.getUTCDate();
                this.viewDate.setUTCMonth(month);
                this.element.trigger({
                  type: 'changeMonth',
                  date: this.viewDate
                });
                if (this.viewSelect >= 3) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.year')) {
                this.viewDate.setUTCDate(1);
                year = parseInt(target.text(), 10) || 0;
                this.viewDate.setUTCFullYear(year);
                this.element.trigger({
                  type: 'changeYear',
                  date: this.viewDate
                });
                if (this.viewSelect >= 4) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.hour')) {
                hours = parseInt(target.text(), 10) || 0;
                if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
                  if (hours === 12 && target.hasClass('hour_am')) {
                    hours = 0;
                  } else if (hours !== 12 && target.hasClass('hour_pm')) {
                    hours += 12;
                  }
                }
                this.viewDate.setUTCHours(hours);
                this.element.trigger({
                  type: 'changeHour',
                  date: this.viewDate
                });
                if (this.viewSelect >= 1) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.minute')) {
                minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
                this.viewDate.setUTCMinutes(minutes);
                this.element.trigger({
                  type: 'changeMinute',
                  date: this.viewDate
                });
                if (this.viewSelect >= 0) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              }
              if (this.viewMode !== 0) {
                var oldViewMode = this.viewMode;
                this.showMode(-1);
                this.fill();
                if (oldViewMode === this.viewMode && this.autoclose) {
                  this.hide();
                }
              } else {
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
              }
            }
            break;
          case 'td':
            if (target.is('.day') && !target.is('.disabled')) {
              var day = parseInt(target.text(), 10) || 1;
              var year = this.viewDate.getUTCFullYear(),
                month = this.viewDate.getUTCMonth(),
                hours = this.viewDate.getUTCHours(),
                minutes = this.viewDate.getUTCMinutes(),
                seconds = this.viewDate.getUTCSeconds();
              if (target.is('.old')) {
                if (month === 0) {
                  month = 11;
                  year -= 1;
                } else {
                  month -= 1;
                }
              } else if (target.is('.new')) {
                if (month === 11) {
                  month = 0;
                  year += 1;
                } else {
                  month += 1;
                }
              }
              this.viewDate.setUTCFullYear(year);
              this.viewDate.setUTCMonth(month, day);
              this.element.trigger({
                type: 'changeDay',
                date: this.viewDate
              });
              if (this.viewSelect >= 2) {
                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
              }
            }
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode === this.viewMode && this.autoclose) {
              this.hide();
            }
            break;
        }
      }
    },

    _setDate: function (date, which) {
      if (!which || which === 'date')
        this.date = date;
      if (!which || which === 'view')
        this.viewDate = date;
      this.fill();
      this.setValue();
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element) {
        element.change();
      }
      this.element.trigger({
        type: 'changeDate',
        date: this.getDate()
      });
      if(date === null)
        this.date = this.viewDate;
    },

    moveMinute: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
      return new_date;
    },

    moveHour: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCHours(new_date.getUTCHours() + dir);
      return new_date;
    },

    moveDate: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCDate(new_date.getUTCDate() + dir);
      return new_date;
    },

    moveMonth: function (date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf()),
        day = new_date.getUTCDate(),
        month = new_date.getUTCMonth(),
        mag = Math.abs(dir),
        new_month, test;
      dir = dir > 0 ? 1 : -1;
      if (mag === 1) {
        test = dir === -1
          // If going back one month, make sure month is not current month
          // (eg, Mar 31 -> Feb 31 === Feb 28, not Mar 02)
          ? function () {
          return new_date.getUTCMonth() === month;
        }
          // If going forward one month, make sure month is as expected
          // (eg, Jan 31 -> Feb 31 === Feb 28, not Mar 02)
          : function () {
          return new_date.getUTCMonth() !== new_month;
        };
        new_month = month + dir;
        new_date.setUTCMonth(new_month);
        // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
        if (new_month < 0 || new_month > 11)
          new_month = (new_month + 12) % 12;
      } else {
        // For magnitudes >1, move one month at a time...
        for (var i = 0; i < mag; i++)
          // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
          new_date = this.moveMonth(new_date, dir);
        // ...then reset the day, keeping it in the new month
        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);
        test = function () {
          return new_month !== new_date.getUTCMonth();
        };
      }
      // Common date-resetting loop -- if date is beyond end of month, make it
      // end of month
      while (test()) {
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }
      return new_date;
    },

    moveYear: function (date, dir) {
      return this.moveMonth(date, dir * 12);
    },

    dateWithinRange: function (date) {
      return date >= this.startDate && date <= this.endDate;
    },

    keydown: function (e) {
      if (this.picker.is(':not(:visible)')) {
        if (e.keyCode === 27) // allow escape to hide and re-show picker
          this.show();
        return;
      }
      var dateChanged = false,
        dir, newDate, newViewDate;
      switch (e.keyCode) {
        case 27: // escape
          this.hide();
          e.preventDefault();
          break;
        case 37: // left
        case 39: // right
          if (!this.keyboardNavigation) break;
          dir = e.keyCode === 37 ? -1 : 1;
          var viewMode = this.viewMode;
          if (e.ctrlKey) {
            viewMode += 2;
          } else if (e.shiftKey) {
            viewMode += 1;
          }
          if (viewMode === 4) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (viewMode === 3) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else if (viewMode === 2) {
            newDate = this.moveDate(this.date, dir);
            newViewDate = this.moveDate(this.viewDate, dir);
          } else if (viewMode === 1) {
            newDate = this.moveHour(this.date, dir);
            newViewDate = this.moveHour(this.viewDate, dir);
          } else if (viewMode === 0) {
            newDate = this.moveMinute(this.date, dir);
            newViewDate = this.moveMinute(this.viewDate, dir);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 38: // up
        case 40: // down
          if (!this.keyboardNavigation) break;
          dir = e.keyCode === 38 ? -1 : 1;
          viewMode = this.viewMode;
          if (e.ctrlKey) {
            viewMode += 2;
          } else if (e.shiftKey) {
            viewMode += 1;
          }
          if (viewMode === 4) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (viewMode === 3) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else if (viewMode === 2) {
            newDate = this.moveDate(this.date, dir * 7);
            newViewDate = this.moveDate(this.viewDate, dir * 7);
          } else if (viewMode === 1) {
            if (this.showMeridian) {
              newDate = this.moveHour(this.date, dir * 6);
              newViewDate = this.moveHour(this.viewDate, dir * 6);
            } else {
              newDate = this.moveHour(this.date, dir * 4);
              newViewDate = this.moveHour(this.viewDate, dir * 4);
            }
          } else if (viewMode === 0) {
            newDate = this.moveMinute(this.date, dir * 4);
            newViewDate = this.moveMinute(this.viewDate, dir * 4);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 13: // enter
          if (this.viewMode !== 0) {
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode === this.viewMode && this.autoclose) {
              this.hide();
            }
          } else {
            this.fill();
            if (this.autoclose) {
              this.hide();
            }
          }
          e.preventDefault();
          break;
        case 9: // tab
          this.hide();
          break;
      }
      if (dateChanged) {
        var element;
        if (this.isInput) {
          element = this.element;
        } else if (this.component) {
          element = this.element.find('input');
        }
        if (element) {
          element.change();
        }
        this.element.trigger({
          type: 'changeDate',
          date: this.getDate()
        });
      }
    },

    showMode: function (dir) {
      if (dir) {
        var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
        if (newViewMode >= this.minView && newViewMode <= this.maxView) {
          this.element.trigger({
            type:        'changeMode',
            date:        this.viewDate,
            oldViewMode: this.viewMode,
            newViewMode: newViewMode
          });

          this.viewMode = newViewMode;
        }
      }
      /*
       vitalets: fixing bug of very special conditions:
       jquery 1.7.1 + webkit + show inline datetimepicker in bootstrap popover.
       Method show() does not set display css correctly and datetimepicker is not shown.
       Changed to .css('display', 'block') solve the problem.
       See https://github.com/vitalets/x-editable/issues/37

       In jquery 1.7.2+ everything works fine.
       */
      //this.picker.find('>div').hide().filter('.datetimepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
      this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
      this.updateNavArrows();
    },

    reset: function () {
      this._setDate(null, 'date');
    },

    convertViewModeText:  function (viewMode) {
      switch (viewMode) {
        case 4:
          return 'decade';
        case 3:
          return 'year';
        case 2:
          return 'month';
        case 1:
          return 'day';
        case 0:
          return 'hour';
      }
    }
  };

  var old = $.fn.datetimepicker;
  $.fn.datetimepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    var internal_return;
    this.each(function () {
      var $this = $(this),
        data = $this.data('datetimepicker'),
        options = typeof option === 'object' && option;
      if (!data) {
        $this.data('datetimepicker', (data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))));
      }
      if (typeof option === 'string' && typeof data[option] === 'function') {
        internal_return = data[option].apply(data, args);
        if (internal_return !== undefined) {
          return false;
        }
      }
    });
    if (internal_return !== undefined)
      return internal_return;
    else
      return this;
  };

  $.fn.datetimepicker.defaults = {
  };
  $.fn.datetimepicker.Constructor = Datetimepicker;
  var dates = $.fn.datetimepicker.dates = {
    en: {
      days:        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      daysShort:   ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      daysMin:     ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      months:      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      meridiem:    ['am', 'pm'],
      suffix:      ['st', 'nd', 'rd', 'th'],
      today:       'Today',
      clear:       'Clear'
    }
  };

  var DPGlobal = {
    modes:            [
      {
        clsName: 'minutes',
        navFnc:  'Hours',
        navStep: 1
      },
      {
        clsName: 'hours',
        navFnc:  'Date',
        navStep: 1
      },
      {
        clsName: 'days',
        navFnc:  'Month',
        navStep: 1
      },
      {
        clsName: 'months',
        navFnc:  'FullYear',
        navStep: 1
      },
      {
        clsName: 'years',
        navFnc:  'FullYear',
        navStep: 10
      }
    ],
    isLeapYear:       function (year) {
      return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
    },
    getDaysInMonth:   function (year, month) {
      return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
    },
    getDefaultFormat: function (type, field) {
      if (type === 'standard') {
        if (field === 'input')
          return 'yyyy-mm-dd hh:ii';
        else
          return 'yyyy-mm-dd hh:ii:ss';
      } else if (type === 'php') {
        if (field === 'input')
          return 'Y-m-d H:i';
        else
          return 'Y-m-d H:i:s';
      } else {
        throw new Error('Invalid format type.');
      }
    },
    validParts: function (type) {
      if (type === 'standard') {
        return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
      } else if (type === 'php') {
        return /[dDjlNwzFmMnStyYaABgGhHis]/g;
      } else {
        throw new Error('Invalid format type.');
      }
    },
    nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
    parseFormat: function (format, type) {
      // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway
      var separators = format.replace(this.validParts(type), '\0').split('\0'),
        parts = format.match(this.validParts(type));
      if (!separators || !separators.length || !parts || parts.length === 0) {
        throw new Error('Invalid date format.');
      }
      return {separators: separators, parts: parts};
    },
    parseDate: function (date, format, language, type, timezone) {
      if (date instanceof Date) {
        var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
        dateUTC.setMilliseconds(0);
        return dateUTC;
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd', type);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd hh:ii', type);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type);
      }
      if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
        var part_re = /([-+]\d+)([dmwy])/,
          parts = date.match(/([-+]\d+)([dmwy])/g),
          part, dir;
        date = new Date();
        for (var i = 0; i < parts.length; i++) {
          part = part_re.exec(parts[i]);
          dir = parseInt(part[1]);
          switch (part[2]) {
            case 'd':
              date.setUTCDate(date.getUTCDate() + dir);
              break;
            case 'm':
              date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
              break;
            case 'w':
              date.setUTCDate(date.getUTCDate() + dir * 7);
              break;
            case 'y':
              date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
              break;
          }
        }
        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
      }
      var parts = date && date.toString().match(this.nonpunctuation) || [],
        date = new Date(0, 0, 0, 0, 0, 0, 0),
        parsed = {},
        setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P', 'z', 'Z'],
        setters_map = {
          hh:   function (d, v) {
            return d.setUTCHours(v);
          },
          h:    function (d, v) {
            return d.setUTCHours(v);
          },
          HH:   function (d, v) {
            return d.setUTCHours(v === 12 ? 0 : v);
          },
          H:    function (d, v) {
            return d.setUTCHours(v === 12 ? 0 : v);
          },
          ii:   function (d, v) {
            return d.setUTCMinutes(v);
          },
          i:    function (d, v) {
            return d.setUTCMinutes(v);
          },
          ss:   function (d, v) {
            return d.setUTCSeconds(v);
          },
          s:    function (d, v) {
            return d.setUTCSeconds(v);
          },
          yyyy: function (d, v) {
            return d.setUTCFullYear(v);
          },
          yy:   function (d, v) {
            return d.setUTCFullYear(2000 + v);
          },
          m:    function (d, v) {
            v -= 1;
            while (v < 0) v += 12;
            v %= 12;
            d.setUTCMonth(v);
            while (d.getUTCMonth() !== v)
              if (isNaN(d.getUTCMonth()))
                return d;
              else
                d.setUTCDate(d.getUTCDate() - 1);
            return d;
          },
          d:    function (d, v) {
            return d.setUTCDate(v);
          },
          p:    function (d, v) {
            return d.setUTCHours(v === 1 ? d.getUTCHours() + 12 : d.getUTCHours());
          },
          z:    function () {
            return timezone
          }
        },
        val, filtered, part;
      setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
      setters_map['dd'] = setters_map['d'];
      setters_map['P'] = setters_map['p'];
      setters_map['Z'] = setters_map['z'];
      date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      if (parts.length === format.parts.length) {
        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = format.parts[i];
          if (isNaN(val)) {
            switch (part) {
              case 'MM':
                filtered = $(dates[language].months).filter(function () {
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m === p;
                });
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;
              case 'M':
                filtered = $(dates[language].monthsShort).filter(function () {
                  var m = this.slice(0, parts[i].length),
                    p = parts[i].slice(0, m.length);
                  return m.toLowerCase() === p.toLowerCase();
                });
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
              case 'p':
              case 'P':
                val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
                break;
              case 'z':
              case 'Z':
                timezone;
                break;

            }
          }
          parsed[part] = val;
        }
        for (var i = 0, s; i < setters_order.length; i++) {
          s = setters_order[i];
          if (s in parsed && !isNaN(parsed[s]))
            setters_map[s](date, parsed[s])
        }
      }
      return date;
    },
    formatDate:       function (date, format, language, type, timezone) {
      if (date === null) {
        return '';
      }
      var val;
      if (type === 'standard') {
        val = {
          t:    date.getTime(),
          // year
          yy:   date.getUTCFullYear().toString().substring(2),
          yyyy: date.getUTCFullYear(),
          // month
          m:    date.getUTCMonth() + 1,
          M:    dates[language].monthsShort[date.getUTCMonth()],
          MM:   dates[language].months[date.getUTCMonth()],
          // day
          d:    date.getUTCDate(),
          D:    dates[language].daysShort[date.getUTCDay()],
          DD:   dates[language].days[date.getUTCDay()],
          p:    (dates[language].meridiem.length === 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
          // hour
          h:    date.getUTCHours(),
          // minute
          i:    date.getUTCMinutes(),
          // second
          s:    date.getUTCSeconds(),
          // timezone
          z:    timezone
        };

        if (dates[language].meridiem.length === 2) {
          val.H = (val.h % 12 === 0 ? 12 : val.h % 12);
        }
        else {
          val.H = val.h;
        }
        val.HH = (val.H < 10 ? '0' : '') + val.H;
        val.P = val.p.toUpperCase();
        val.Z = val.z;
        val.hh = (val.h < 10 ? '0' : '') + val.h;
        val.ii = (val.i < 10 ? '0' : '') + val.i;
        val.ss = (val.s < 10 ? '0' : '') + val.s;
        val.dd = (val.d < 10 ? '0' : '') + val.d;
        val.mm = (val.m < 10 ? '0' : '') + val.m;
      } else if (type === 'php') {
        // php format
        val = {
          // year
          y: date.getUTCFullYear().toString().substring(2),
          Y: date.getUTCFullYear(),
          // month
          F: dates[language].months[date.getUTCMonth()],
          M: dates[language].monthsShort[date.getUTCMonth()],
          n: date.getUTCMonth() + 1,
          t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
          // day
          j: date.getUTCDate(),
          l: dates[language].days[date.getUTCDay()],
          D: dates[language].daysShort[date.getUTCDay()],
          w: date.getUTCDay(), // 0 -> 6
          N: (date.getUTCDay() === 0 ? 7 : date.getUTCDay()),       // 1 -> 7
          S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),
          // hour
          a: (dates[language].meridiem.length === 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
          g: (date.getUTCHours() % 12 === 0 ? 12 : date.getUTCHours() % 12),
          G: date.getUTCHours(),
          // minute
          i: date.getUTCMinutes(),
          // second
          s: date.getUTCSeconds()
        };
        val.m = (val.n < 10 ? '0' : '') + val.n;
        val.d = (val.j < 10 ? '0' : '') + val.j;
        val.A = val.a.toString().toUpperCase();
        val.h = (val.g < 10 ? '0' : '') + val.g;
        val.H = (val.G < 10 ? '0' : '') + val.G;
        val.i = (val.i < 10 ? '0' : '') + val.i;
        val.s = (val.s < 10 ? '0' : '') + val.s;
      } else {
        throw new Error('Invalid format type.');
      }
      var date = [],
        seps = $.extend([], format.separators);
      for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
        if (seps.length) {
          date.push(seps.shift());
        }
        date.push(val[format.parts[i]]);
      }
      if (seps.length) {
        date.push(seps.shift());
      }
      return date.join('');
    },
    convertViewMode:  function (viewMode) {
      switch (viewMode) {
        case 4:
        case 'decade':
          viewMode = 4;
          break;
        case 3:
        case 'year':
          viewMode = 3;
          break;
        case 2:
        case 'month':
          viewMode = 2;
          break;
        case 1:
        case 'day':
          viewMode = 1;
          break;
        case 0:
        case 'hour':
          viewMode = 0;
          break;
      }

      return viewMode;
    },
    headTemplate: '<thead>' +
                '<tr>' +
                '<th class="prev"><i class="{iconType} {leftArrow}"/></th>' +
                '<th colspan="5" class="switch"></th>' +
                '<th class="next"><i class="{iconType} {rightArrow}"/></th>' +
                '</tr>' +
      '</thead>',
    headTemplateV3: '<thead>' +
                '<tr>' +
                '<th class="prev"><span class="{iconType} {leftArrow}"></span> </th>' +
                '<th colspan="5" class="switch"></th>' +
                '<th class="next"><span class="{iconType} {rightArrow}"></span> </th>' +
                '</tr>' +
      '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot>' + 
                    '<tr><th colspan="7" class="today"></th></tr>' +
                    '<tr><th colspan="7" class="clear"></th></tr>' +
                  '</tfoot>'
  };
  DPGlobal.template = '<div class="datetimepicker">' +
    '<div class="datetimepicker-minutes">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-hours">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-days">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplate +
    '<tbody></tbody>' +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-months">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-years">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplate +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '</div>';
  DPGlobal.templateV3 = '<div class="datetimepicker">' +
    '<div class="datetimepicker-minutes">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-hours">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-days">' +
    '<table class=" table-condensed">' +
    DPGlobal.headTemplateV3 +
    '<tbody></tbody>' +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-months">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '<div class="datetimepicker-years">' +
    '<table class="table-condensed">' +
    DPGlobal.headTemplateV3 +
    DPGlobal.contTemplate +
    DPGlobal.footTemplate +
    '</table>' +
    '</div>' +
    '</div>';
  $.fn.datetimepicker.DPGlobal = DPGlobal;

  /* DATETIMEPICKER NO CONFLICT
   * =================== */

  $.fn.datetimepicker.noConflict = function () {
    $.fn.datetimepicker = old;
    return this;
  };

  /* DATETIMEPICKER DATA-API
   * ================== */

  $(document).on(
    'focus.datetimepicker.data-api click.datetimepicker.data-api',
    '[data-provide="datetimepicker"]',
    function (e) {
      var $this = $(this);
      if ($this.data('datetimepicker')) return;
      e.preventDefault();
      // component click requires us to explicitly show it
      $this.datetimepicker('show');
    }
  );
  $(function () {
    $('[data-provide="datetimepicker-inline"]').datetimepicker();
  });

}));

/*
Template Name: Arialogic
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});
/*
Template Name: Arialogic
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
File: Mobile Menu JS

Thanks to:
"Convert a Menu to a Dropdown for Small Screens" from Chris Collier - http://css-tricks.com/convert-menu-to-dropdown/
"Submenu's with a dash" Daryn St. Pierre - http://jsfiddle.net/bloqhead/Kq43X/
*/

$('<form action="#"><select /></form>').appendTo("#mainav");$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#mainav select");$("#mainav a").each(function(){var e=$(this);if($(e).parents("ul ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#mainav select")}else if($(e).parents("ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#mainav select")}else if($(e).parents("ul").length>=1){$("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#mainav select")}else{$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#mainav select")}});$("#mainav select").change(function(){if($(this).find("option:selected").val()!=="#"){window.location=$(this).find("option:selected").val()}})
/* HTML5 Placeholder jQuery Plugin - v2.1.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-02-19
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder")&&f.hasClass(m.customClass))if(f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c;f.focus()}else d.value="",f.removeClass(m.customClass),d==e()&&d.select()}function d(){var d,e=this,f=a(e),g=this.id;if(""===e.value){if("password"===e.type){if(!f.data("placeholder-textinput")){try{d=f.clone().attr({type:"text"})}catch(h){d=a("<input>").attr(a.extend(b(this),{type:"text"}))}d.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",c),f.data({"placeholder-textinput":d,"placeholder-id":g}).before(d)}f=f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g).show()}f.addClass(m.customClass),f[0].value=f.attr("placeholder")}else f.removeClass(m.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks;if(i&&j)g=a.fn.placeholder=function(){return this},g.input=g.textarea=!0;else{var m={};g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};m=a.extend({},e,b);var f=this;return f.filter((i?"textarea":":input")+"[placeholder]").not("."+m.customClass).bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder"),f},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(m.customClass)?"":b.value},set:function(b,f){var g=a(b),h=g.data("placeholder-password");return h?h[0].value=f:g.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass(m.customClass)?c.call(b,!0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+m.customClass,this).each(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a("."+m.customClass).each(function(){this.value=""})})}});

// Run It
jQuery(document).ready(function($) {
    $("input, textarea").placeholder();
});
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var f=a.commonAncestorContainer;if(e!==f&&t!==f||i.contains(n))return p(f)?f:r(f);var l=s(e);return l.host?d(l.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function l(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return _(t['offset'+e],o['client'+e],o['offset'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=window.document.body,t=window.document.documentElement,o=ie()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,f=e.offsetWidth-s,m=e.offsetHeight-d;if(f||m){var g=t(e);f-=l(g,'x'),m-=l(g,'y'),r.width-=f,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),l=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],h=c({top:p.top-s.top-l,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];h.top-=l-u,h.bottom-=l-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=f(h,o)),h}function b(e){var t=window.document.documentElement,o=u(e,t),i=_(t.clientWidth,window.innerWidth||0),n=_(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var f=u(a,s);if('HTML'===a.nodeName&&!y(s)){var l=h(),m=l.height,c=l.width;p.top+=f.top-f.marginTop,p.bottom=m+f.top,p.left+=f.left-f.marginLeft,p.right=c+f.left}else p=f}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function v(e){var t=e.width,o=e.height;return t*o}function E(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:v(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),f=0<a.length?a[0].key:d[0].key,l=e.split('-')[1];return f+(l?'-'+l:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function D(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function P(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?_(document.documentElement.clientHeight,window.innerHeight||0):_(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}for(var z=Math.min,V=Math.floor,_=Math.max,X=['native code','[object MutationObserverConstructor]'],Q=function(e){return X.some(function(t){return-1<(e||'').toString().indexOf(t)})},J='undefined'!=typeof window,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(J&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=J&&Q(window.MutationObserver),oe=te?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},le=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return D.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return le.Utils=('undefined'==typeof window?global:window).PopperUtils,le.placements=de,le.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',f={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,f[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=_(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=z(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=V,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],n=e.offsets,r=n.popper,p=n.reference,s=-1!==['left','right'].indexOf(i),d=s?'height':'width',a=s?'top':'left',f=s?'left':'top',l=s?'bottom':'right',m=O(o)[d];p[l]-m<r[a]&&(e.offsets.popper[a]-=r[a]-(p[l]-m)),p[a]+m>r[l]&&(e.offsets.popper[a]+=p[a]+m-r[l]);var h=p[a]+p[d]/2-m/2,g=h-c(e.offsets.popper)[a];return g=_(z(r[d]-m,g),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[a]=Math.round(g),e.offsets.arrow[f]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,f=e.offsets.reference,l=V,m='left'===i&&l(a.right)>l(f.left)||'right'===i&&l(a.left)<l(f.right)||'top'===i&&l(a.bottom)>l(f.top)||'bottom'===i&&l(a.top)<l(f.bottom),h=l(a.left)<l(o.left),c=l(a.right)>l(o.right),g=l(a.top)<l(o.top),u=l(a.bottom)>l(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[t]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,f=r(e.instance.popper),l=g(f),m={position:n.position},h={left:V(n.left),top:V(n.top),bottom:V(n.bottom),right:V(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==c?-l.height+h.bottom:h.top,s='right'==u?-l.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var v={"x-placement":e.placement};return e.attributes=se({},v,e.attributes),e.styles=se({},m,e.styles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.offsets.arrow&&U(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=E(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},le});
//# sourceMappingURL=popper.min.js.map
