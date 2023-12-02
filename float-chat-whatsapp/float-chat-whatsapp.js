var FloatChatWhatsapp = /** @class */ (function () {
    function FloatChatWhatsapp(el, options) {
        if (options === void 0) { options = null; }
        this.selectorDnone = 'display-none';
        this.effectClassname = 'effect-pause';
        this.options = {
            phone: options && options.phone ? options.phone : null,
            phonePrefix: options && options.phonePrefix ? options.phonePrefix : null,
            theme: options && options.theme ? options.theme : 'green',
            position: options && options.position ? options.position : 'end',
            separe: options && options.separe ? options.separe : 2,
            ui: options && options.ui ? options.ui : 'waffle'
        };
        console.log("this.options", this.options);
        this.el = document.getElementById(el);
        this.el.classList.add('theme-' + this.options.theme);
        this.el.classList.add('separe-' + this.options.separe);
        this.el.classList.add(this.options.position);
        this.el.classList.add('ui-' + this.options.ui);
        this.exe();
    }
    FloatChatWhatsapp.prototype.exe = function () {
        var _this = this;
        var btnToggle = this.el.querySelectorAll('[data-btn="button-toggle"]');
        var form = this.el.querySelector('form');
        var chat = this.el.querySelector('.chat-container');
        var subtitle = this.el.querySelector('.subtitle');
        var buttonSubmit = this.el.querySelector('[type="submit"]');
        // button toggle open-close
        btnToggle.forEach(function (btn) { return btn.addEventListener('click', function () {
            chat.classList.toggle(_this.selectorDnone);
            btnToggle[0].classList.toggle(_this.effectClassname);
        }); });
        // subtilte
        subtitle.innerText = this.formatPhoneNumber();
        // form
        form.addEventListener('input', function () {
            var inputName = form.querySelector('[name="name"]').value;
            var inputMessage = form.querySelector('[name="message"]').value;
            inputName.length > 0 && inputMessage.length > 0 ? buttonSubmit.removeAttribute('disabled') : buttonSubmit.setAttribute('disabled', 'true');
        });
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var formControl = new FormData(e.target);
            var message = "".concat(formControl.get('message'), ". ATT: ").concat(formControl.get('name'));
            if (_this.options.phone && _this.options.phonePrefix) {
                var time_1 = setTimeout(function () {
                    window.open("https://api.whatsapp.com/send?phone=+".concat(_this.options.phonePrefix).concat(_this.options.phone, "&text=").concat(message), '_blank');
                    clearTimeout(time_1);
                    e.target.reset();
                    chat.classList.add(_this.selectorDnone);
                    document.querySelectorAll('[data-btn="button-toggle"]')[0].classList.remove(_this.effectClassname);
                }, 500);
            }
            else {
                alert('UPS!. phone number or/and prefix not assigned');
            }
        });
    };
    FloatChatWhatsapp.prototype.formatPhoneNumber = function () {
        var cleaned = ('' + this.options.phone).replace(/\D/g, '');
        var match = cleaned.match(/^(.{3})(.{3})(.{4})$/);
        if (match) {
            return "(".concat(match[1], ") ").concat(match[2], "-").concat(match[3]);
        }
        return '';
    };
    return FloatChatWhatsapp;
}());
