!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const r=function(){class t{constructor(t="",e=new Date,n="",r=null,a="default",i="",o=!1){this.title=t,this.dueDate=e,this.description=n,this.priority=r,this.project=a,this.notes=i,this.checked=o}}class e{constructor(t="",e=!1){this.title=t,this.active=e}}const n=JSON.parse(localStorage.getItem("todoListArray"))||[],r=JSON.parse(localStorage.getItem("projectListArray"))||[],a=()=>{localStorage.setItem("todoListArray",JSON.stringify(n)),localStorage.setItem("projectListArray",JSON.stringify(r))};return{addTodo:(e,r,i,o,c,s,u)=>{const d=new t(e,r,i,o,c,s,u);n.push(d),a()},getTodo:t=>n[t],getTodoList:()=>n,deleteTodo:t=>{n[t]?(n.splice(t,1),a()):console.error("Can't delete, index doesn't exist.")},todoListArray:n,saveToLocalStorage:a,editTitle:(t,e)=>{n[e].title=String(t)||""},editDueDate:(t,e)=>{n[e].dueDate=t},editDescription:(t,e)=>{n[e].description=String(t)||""},editPriority:(t,e)=>{n[e].priority=parseInt(t)||null},editProject:(t,e)=>{n[e].project=String(t)},toggleChecked:t=>{n[t].checked=!n[t].checked},getProjectList:()=>r,addProject:(t,n)=>{const a=new e(t,n);r.push(a)},deleteProject:t=>r.splice(t,1),toggleProjectActive:t=>r[t].active=!r[t].active,undoAllActiveProjects:()=>r.forEach(t=>t.active=!1),getActiveProject:()=>{let t="";return r.forEach(e=>{!0===e.active&&(t=e.title)}),t}}}();function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t){a(1,arguments);var e=i(t);return!isNaN(e)}var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var u={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var c=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[c]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function f(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],c=r.match(o);if(!c)return null;var s,u=c[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(u)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(u)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(u.length)}}}var h,g={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof c[t]?c[t]:1===e?c[t].one:c[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(t,e,n,r){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(h.matchPattern);if(!a)return null;var i=a[0],o=n.match(h.parsePattern);if(!o)return null;var c=h.valueCallback?h.valueCallback(o[0]):o[0];return{value:c=r.valueCallback?r.valueCallback(c):c,rest:n.slice(i.length)}}),era:f({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:f({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:f({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:f({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:f({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function m(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function p(t,e){a(2,arguments);var n=i(t).getTime(),r=m(e);return new Date(n+r)}function v(t,e){a(2,arguments);var n=m(e);return p(t,-n)}function w(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var y={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return w("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):w(n+1,2)},d:function(t,e){return w(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return w(t.getUTCHours()%12||12,e.length)},H:function(t,e){return w(t.getUTCHours(),e.length)},m:function(t,e){return w(t.getUTCMinutes(),e.length)},s:function(t,e){return w(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return w(Math.floor(r*Math.pow(10,n-3)),e.length)}};function b(t){a(1,arguments);var e=1,n=i(t),r=n.getUTCDay(),o=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function T(t){a(1,arguments);var e=i(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=b(r),c=new Date(0);c.setUTCFullYear(n,0,4),c.setUTCHours(0,0,0,0);var s=b(c);return e.getTime()>=o.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function P(t){a(1,arguments);var e=T(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=b(n);return r}function j(t,e){a(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,c=null==o?0:m(o),s=null==n.weekStartsOn?c:m(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=i(t),d=u.getUTCDay(),l=(d<s?7:0)+d-s;return u.setUTCDate(u.getUTCDate()-l),u.setUTCHours(0,0,0,0),u}function M(t,e){a(1,arguments);var n=i(t,e),r=n.getUTCFullYear(),o=e||{},c=o.locale,s=c&&c.options&&c.options.firstWeekContainsDate,u=null==s?1:m(s),d=null==o.firstWeekContainsDate?u:m(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,d),l.setUTCHours(0,0,0,0);var f=j(l,e),h=new Date(0);h.setUTCFullYear(r,0,d),h.setUTCHours(0,0,0,0);var g=j(h,e);return n.getTime()>=f.getTime()?r+1:n.getTime()>=g.getTime()?r:r-1}function C(t,e){a(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:m(i),c=null==n.firstWeekContainsDate?o:m(n.firstWeekContainsDate),s=M(t,e),u=new Date(0);u.setUTCFullYear(s,0,c),u.setUTCHours(0,0,0,0);var d=j(u,e);return d}var D="midnight",x="noon",S="morning",L="afternoon",k="evening",E="night";function U(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+w(i,2)}function O(t,e){return t%60==0?(t>0?"-":"+")+w(Math.abs(t)/60,2):W(t,e)}function W(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+w(Math.floor(a/60),2)+n+w(a%60,2)}var q={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(t,e)},Y:function(t,e,n,r){var a=M(t,r),i=a>0?a:1-a;return"YY"===e?w(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):w(i,e.length)},R:function(t,e){return w(T(t),e.length)},u:function(t,e){return w(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var o=function(t,e){a(1,arguments);var n=i(t),r=j(n,e).getTime()-C(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):w(o,e.length)},I:function(t,e,n){var r=function(t){a(1,arguments);var e=i(t),n=b(e).getTime()-P(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):w(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,n){var r=function(t){a(1,arguments);var e=i(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),o=n-r;return Math.floor(o/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):w(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return w(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return w(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return w(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?x:0===a?D:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?k:a>=12?L:a>=4?S:E,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return O(a);case"XXXX":case"XX":return W(a);case"XXXXX":case"XXX":default:return W(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return O(a);case"xxxx":case"xx":return W(a);case"xxxxx":case"xxx":default:return W(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(a,":");case"OOOO":default:return"GMT"+W(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(a,":");case"zzzz":default:return"GMT"+W(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return w(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return w((r._originalDate||t).getTime(),e.length)}};function A(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function N(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var Y={p:N,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return A(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",A(a,e)).replace("{{time}}",N(i,e))}};function H(t){return t.getTime()%6e4}function z(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+H(e))%6e4:H(e))}var F=["D","DD"],X=["YY","YYYY"];function Q(t){return-1!==F.indexOf(t)}function G(t){return-1!==X.indexOf(t)}function B(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,_=/''/g,I=/[a-zA-Z]/;function V(t,e,n){a(2,arguments);var r=String(e),c=n||{},s=c.locale||g,u=s.options&&s.options.firstWeekContainsDate,d=null==u?1:m(u),l=null==c.firstWeekContainsDate?d:m(c.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=s.options&&s.options.weekStartsOn,h=null==f?0:m(f),p=null==c.weekStartsOn?h:m(c.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var w=i(t);if(!o(w))throw new RangeError("Invalid time value");var y=z(w),b=v(w,y),T={firstWeekContainsDate:l,weekStartsOn:p,locale:s,_originalDate:w},P=r.match($).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Y[e])(t,s.formatLong,T):t})).join("").match(R).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return K(n);var a=q[r];if(a)return!c.useAdditionalWeekYearTokens&&G(n)&&B(n,e,t),!c.useAdditionalDayOfYearTokens&&Q(n)&&B(n,e,t),a(b,n,s.localize,T);if(r.match(I))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return P}function K(t){return t.match(J)[1].replace(_,"'")}function Z(t){if(a(1,arguments),"string"==typeof t){var e=t.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|\+00:?00)?/);return e?new Date(Date.UTC(+e[1],e[2]-1,+e[3],+e[4],+e[5],+e[6],+((e[7]||"0")+"00").substring(0,3))):new Date(NaN)}return i(t)}const tt=function(){const t=document.querySelector(".content"),e=t.querySelector(".todo-list"),n=document.querySelector(".pop-editor"),a=document.querySelector(".add-todo"),i=document.querySelector(".sort-ascend"),o=document.querySelector(".sort-descend"),c=document.querySelector(".add-project"),s=document.querySelector(".project-menu"),u=document.querySelector(".add-project-form");return{container:t,todolistContent:e,editor:n,renderTodos:t=>{e.innerHTML="",t.forEach((t,n)=>{const r=document.createElement("div"),a=t.checked?"checked":"";r.classList="todo",t.index?r.setAttribute("data-index",t.index):r.setAttribute("data-index",n);const i=Z(t.dueDate),o=V(i,"EEEEEE, do MMM yyyy");r.innerHTML=`<i class="fas fa-check todo-icon check-icon ${a}" title="Check/uncheck"></i>\n            <label for="date"><i class="far fa-calendar-alt todo-icon calendar-icon" title="Set date"></i></label>\n            <input type="date" id="date" name="date" class="date" value="${V(i,"yyyy-MM-dd")}"> \n            <label for="projects"><i class="fas fa-folder todo-icon project-icon" title="Add to project"></i></label>\n            <select name="projects" id="projects" class="projects">\n            </select>\n            <i class="fas fa-edit todo-icon edit-icon" title="Edit"></i>\n            <p class="todo-text">${t.title}</p>\n            <p class="project-text">${t.project}</p>\n            <p class="todo-date">${o}</p>\n            <i class="fas fa-times todo-icon delete-icon" title="Delete"></i>`,e.appendChild(r)})},openDatePicker:t=>{t.target.parentElement.nextElementSibling.classList.toggle("active-date")},closeDatePicker:t=>{t.target.classList.toggle("active-date")},renderEditor:t=>{n.innerHTML="";const e=document.createElement("form");e.classList="edit-todo",e.innerHTML=`<label for="title-input" class="editor-item">Title</label>\n        <input type="text" id="title-input" class="editor-item" value="${t.title}">\n        <label for="date-input" class="editor-item">Due</label>\n        <input type="date" id="date-input" class="editor-item" value="${V(Z(t.dueDate),"yyyy-MM-dd")}">\n        <label for="description-input" class="editor-item">Description</label>\n        <textarea cols="30" rows="5" id="description-input" class="editor-item">${t.description}</textarea>\n        <label for="priority-input" class="editor-item">Priority</label>\n        <input type="number" min="0" max="5" id="priority-input" class="editor-item" value="${t.priority}">\n        <label for="project-input" class="editor-item">Project</label>\n        <input type="text" id="project-input" class="editor-item" value="${t.project}">\n        <input type="submit" value="Save" class="editor-item" id="submit">`,n.appendChild(e),e.firstChild.focus()},hideEditor:()=>{n.innerHTML=""},addTodo:a,sortDescend:o,sortAscend:i,addProject:c,projectMenu:s,projectForm:u,renderProjectAdder:()=>{u.innerHTML='<input type="text" class="add-project-input">\n        <input type="submit" value="Add Project" class="add-project-submit">',u.firstChild.focus()},hideProjectAdder:()=>{u.innerHTML=""},renderProjects:t=>{s.innerHTML="",t.forEach((t,e)=>{const n=document.createElement("div"),r=!0===t.active?"project-active":"";n.classList="project "+r,n.setAttribute("data-project",e),n.innerHTML=`<p>${t.title}</p>\n            <i class="fas fa-times project-icon delete-project-icon" title="Delete"></i>`,s.appendChild(n)})},renderProjectPicker:t=>{const e=t.target.parentElement.nextElementSibling;e.classList.toggle("active-project-picker"),e.innerHTML="";const n=document.createElement("option");e.appendChild(n),r.getProjectList().forEach(t=>{console.log(t);const n=document.createElement("option");n.setAttribute("value",t.title),n.innerText=t.title,e.appendChild(n)})},hideProjectPicker:t=>{const e=t.target;e.innerHTML="",e.classList.toggle("active-project-picker")}}}();!function(){let t=null,e=new Date;const n=()=>{if("default"===r.getActiveProject())r.getTodoList().forEach((t,e)=>{t.index=e}),tt.renderTodos(r.getTodoList());else{const t=[...r.getTodoList()].filter((t,e)=>(t.index=e,t.project===r.getActiveProject()));tt.renderTodos(t)}};0===r.getProjectList().length&&(r.addProject("default",!0),r.saveToLocalStorage()),tt.renderTodos(r.getTodoList()),tt.renderProjects(r.getProjectList()),n();const a=t=>{tt.closeDatePicker(t);const e=t.target.parentElement.dataset.index;r.editDueDate(new Date(t.target.value),e),n(),r.saveToLocalStorage()};tt.todolistContent.addEventListener("focusout",t=>{"date"===t.target.id?a(t):"projects"===t.target.id&&tt.hideProjectPicker(t)}),tt.todolistContent.addEventListener("change",t=>{"date"===t.target.id?a(t):"projects"===t.target.id&&(t=>{const e=t.target.parentElement.dataset.index,a=r.getProjectList()[t.target.options.selectedIndex-1].title;console.log(e,a),r.editProject(a,e),tt.hideProjectPicker(t),n()})(t)}),tt.todolistContent.addEventListener("click",(function(e){const a=e.target.parentElement.dataset.index,i=r.getTodo(a);e.target.classList.contains("calendar-icon")&&tt.openDatePicker(e),e.target.classList.contains("check-icon")&&(r.toggleChecked(a),n()),e.target.classList.contains("edit-icon")&&(tt.renderEditor(i),t=a),e.target.classList.contains("delete-icon")&&(r.deleteTodo(a),n()),e.target.classList.contains("project-icon")&&tt.renderProjectPicker(e),r.saveToLocalStorage()})),tt.editor.addEventListener("click",(function(e){if("submit"===e.target.id){const a=e.target.parentElement,i=a[0].value,o=new Date(a[1].value),c=a[2].value,s=a[3].value,u=a[4].value;r.editTitle(i,t),r.editDueDate(o,t),r.editDescription(c,t),r.editPriority(s,t),r.editProject(u,t),tt.hideEditor(),n(),r.saveToLocalStorage()}})),tt.addTodo.addEventListener("click",(function(a){r.addTodo("",e,"",null,"default","",!1);const i=r.getTodoList()[r.getTodoList().length-1];t=r.todoListArray.indexOf(i),n(),tt.renderEditor(i)})),tt.sortAscend.addEventListener("click",(function(t){r.getTodoList().sort((t,e)=>t.dueDate>e.dueDate?1:t.dueDate<e.dueDate?-1:0),n(),r.saveToLocalStorage()})),tt.sortDescend.addEventListener("click",(function(t){r.getTodoList().sort((t,e)=>t.dueDate>e.dueDate?-1:t.dueDate<e.dueDate?1:0),n(),r.saveToLocalStorage()})),tt.addProject.addEventListener("click",tt.renderProjectAdder),tt.projectForm.addEventListener("click",(function(t){console.log(t.target),t.target.classList.contains("add-project-submit")&&(r.addProject(t.target.previousElementSibling.value),tt.hideProjectAdder(),tt.renderProjects(r.getProjectList()),n(),r.saveToLocalStorage(),console.log(r.getProjectList()))})),tt.projectMenu.addEventListener("click",(function(t){if(t.target.classList.contains("delete-project-icon")){const e=t.target.parentElement.dataset.project;r.deleteProject(e),r.saveToLocalStorage(),tt.renderProjects(r.getProjectList()),n()}if(t.target.classList.contains("project")||"p"===t.target.localName){let e;e=t.target.classList.contains("project")?t.target.dataset.project:t.target.parentElement.dataset.project,r.undoAllActiveProjects(),r.toggleProjectActive(e),tt.renderProjects(r.getProjectList()),n()}}))}()}]);