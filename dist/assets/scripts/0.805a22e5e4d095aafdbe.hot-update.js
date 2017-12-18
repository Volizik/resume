webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});
	
	(0, _jquery2.default)(document).on('click', '.menu-btn', function () {
		(0, _jquery2.default)(this).toggleClass('menu-btn__active');
		if ((0, _jquery2.default)(this).hasClass('menu-btn__active')) {
			(0, _jquery2.default)('.col:first-of-type').css({
				width: '0'
			});
		} else {
			(0, _jquery2.default)('.col:first-of-type').css({
				width: '100%'
			});
		}
	});

/***/ }
])
//# sourceMappingURL=0.805a22e5e4d095aafdbe.hot-update.js.map