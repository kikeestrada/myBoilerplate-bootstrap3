(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _example = require("./modules/example");

var _bFilter = require("./modules/bFilter");

var _toolTop = require("./modules/toolTop");

var _popover = require("./modules/popover");

(0, _example.hello)();
(0, _example.bye)();
(0, _bFilter.bFilter)();
(0, _toolTop.toolTip)();
(0, _popover.popover)();

(function () {
	if (document.body.classList.contains('home')) {
		// functions here
	} else if (document.body.classList.contains('page2')) {
		// functions here
	} else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();

},{"./modules/bFilter":2,"./modules/example":3,"./modules/popover":4,"./modules/toolTop":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var bFilter = exports.bFilter = function bFilter() {
	$(document).ready(function () {
		$("#myInput").on("keyup", function () {
			var value = $(this).val().toLowerCase();
			$('#myTable tr').filter(function () {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		});
	});
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var hello = exports.hello = function hello() {
	console.log('Hello World');
};
var bye = exports.bye = function bye() {
	console.log('Bye World');
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var popover = exports.popover = function popover() {
	$(document).ready(function () {
		$('[data-toggle="popover"]').popover();
	});
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var toolTip = exports.toolTip = function toolTip() {
	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
};

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
