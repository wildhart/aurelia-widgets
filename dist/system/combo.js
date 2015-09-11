System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customElement, inject, bindable, bindingMode, Combo;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
    }],
    execute: function () {
      Combo = (function () {
        function Combo(element) {
          _classCallCheck(this, _Combo);

          this.element = element;
          this._boundChange = this._change.bind(this);
        }

        _createClass(Combo, [{
          key: 'attached',
          value: function attached() {
            this.combo = this.element.querySelector('select');

            if (this.selected) this.combo.value = this.selected;

            this.combo.addEventListener('change', this._boundChange);
          }
        }, {
          key: 'detached',
          value: function detached() {
            this.combo.removeEventListener('change', this._boundChange);
          }
        }, {
          key: '_change',
          value: function _change(change) {
            this.selected = change.target.value;
          }
        }, {
          key: '_handleSelectedChanged',
          value: function _handleSelectedChanged(newValue) {
            if (this.combo) this.combo.value = newValue;
          }
        }]);

        var _Combo = Combo;
        Combo = inject(Element)(Combo) || Combo;
        Combo = bindable({
          name: 'selected',
          attribute: 'selected',
          defaultBindingMode: bindingMode.twoWay,
          changeHandler: '_handleSelectedChanged'
        })(Combo) || Combo;
        Combo = bindable({
          name: 'options',
          attribute: 'options',
          defaultBindingMode: bindingMode.oneTime
        })(Combo) || Combo;
        Combo = bindable({
          name: 'title',
          attribute: 'title',
          defaultBindingMode: bindingMode.oneTime
        })(Combo) || Combo;
        Combo = customElement('combo')(Combo) || Combo;
        return Combo;
      })();

      _export('Combo', Combo);
    }
  };
});