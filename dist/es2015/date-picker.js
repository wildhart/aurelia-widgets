'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerWidget = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('@codelabnz/datepicker/dist/datepicker.js');

require('@codelabnz/datepicker/dist/datepicker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DatePickerWidget = exports.DatePickerWidget = (_dec = (0, _aureliaTemplating.customElement)('date-picker'), _dec2 = (0, _aureliaTemplating.bindable)('label'), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'dateValue',
  attribute: 'date-value',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec4 = (0, _aureliaTemplating.bindable)({
  name: 'textCol',
  attributeName: 'text-col',
  defaultValue: '',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec5 = (0, _aureliaTemplating.bindable)({
  name: 'labelCol',
  attributeName: 'label-col',
  defaultValue: '',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec6 = (0, _aureliaTemplating.bindable)({
  name: 'noform',
  attribute: 'no-form',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
  defaultValue: false
}), _dec7 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = function () {
  function DatePickerWidget(element) {
    _classCallCheck(this, DatePickerWidget);

    this.element = element;
  }

  _createClass(DatePickerWidget, [{
    key: 'attached',
    value: function attached() {
      this.inputElement = this.element.querySelector('input');

      var self = this;

      (0, _jquery2.default)(this.inputElement).datepicker({
        format: 'dd/mm/yyyy',
        autoHide: true
      }).on('pick.datepicker', function (e) {
        self.dateValue = (0, _moment2.default)(e.date).format('DD/MM/YYYY');
      });

      if (this.dateValue === '' || this.dateValue == null || this.dateValue == undefined) {
        self.dateValue = "";
      }
    }
  }]);

  return DatePickerWidget;
}()) || _class) || _class) || _class) || _class) || _class) || _class) || _class);