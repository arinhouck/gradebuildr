"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('frontend/adapters/application', ['exports', 'ember-data', 'jquery'], function (exports, _emberData, _jquery) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    headers: {
      "X-CSRF-Token": (0, _jquery['default'])('meta[name="csrf-token"]').attr('content')
    }
  });
});
define('frontend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'frontend/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _frontendConfigEnvironment) {

  var App;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _frontendConfigEnvironment['default'].modulePrefix,
    Resolver: _emberResolver['default']
  });

  _ember['default'].Router.reopen({
    notifyGoogleAnalytics: (function () {
      if (!ga || EmberENV.environment == 'test' || EmberENV.environment == 'development') {
        return;
      }
      return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
    }).on('didTransition')
  });

  (0, _emberLoadInitializers['default'])(App, _frontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('frontend/components/bs-popover', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: '',
    placement: 'auto',

    click: function click() {
      this.sendAction('action', this.get('model'));
    },

    didInsertElement: function didInsertElement() {
      var component = this,
          contents = this.$('.popoverJs');
      component.$().popover({
        animation: false,
        title: component.get('title'),
        placement: component.get('placement'),
        trigger: 'hover focus click',
        html: true,
        content: contents
      }).on('show.bs.popover', function () {
        contents.removeClass('hide');
      });
    },
    willDestroyElement: function willDestroyElement() {
      this.$().popover('destroy');
    }
  });
});
define('frontend/components/em-accordion-item', ['exports', 'ember-idx-accordion/accordion-item'], function (exports, _emberIdxAccordionAccordionItem) {
  exports['default'] = _emberIdxAccordionAccordionItem['default'];
});
define('frontend/components/em-accordion', ['exports', 'ember-idx-accordion/accordion'], function (exports, _emberIdxAccordionAccordion) {
  exports['default'] = _emberIdxAccordionAccordion['default'];
});
define('frontend/components/em-button', ['exports', 'ember-idx-button/button'], function (exports, _emberIdxButtonButton) {
  exports['default'] = _emberIdxButtonButton['default'];
});
define('frontend/components/em-checkbox', ['exports', 'ember', 'ember-idx-forms/checkbox'], function (exports, _ember, _emberIdxFormsCheckbox) {
  exports['default'] = _emberIdxFormsCheckbox['default'];
});
define('frontend/components/em-form-control-help', ['exports', 'ember', 'ember-idx-forms/control_help'], function (exports, _ember, _emberIdxFormsControl_help) {
  exports['default'] = _emberIdxFormsControl_help['default'];
});
define('frontend/components/em-form-group', ['exports', 'ember', 'ember-idx-forms/group'], function (exports, _ember, _emberIdxFormsGroup) {
  exports['default'] = _emberIdxFormsGroup['default'];
});
define('frontend/components/em-form-label', ['exports', 'ember', 'ember-idx-forms/label'], function (exports, _ember, _emberIdxFormsLabel) {
  exports['default'] = _emberIdxFormsLabel['default'];
});
define('frontend/components/em-form-submit', ['exports', 'ember', 'ember-idx-forms/submit_button'], function (exports, _ember, _emberIdxFormsSubmit_button) {
  exports['default'] = _emberIdxFormsSubmit_button['default'];
});
define('frontend/components/em-form', ['exports', 'ember', 'ember-idx-forms/form'], function (exports, _ember, _emberIdxFormsForm) {
  exports['default'] = _emberIdxFormsForm['default'];
});
define('frontend/components/em-input', ['exports', 'ember', 'ember-idx-forms/input'], function (exports, _ember, _emberIdxFormsInput) {
  exports['default'] = _emberIdxFormsInput['default'];
});
define('frontend/components/em-modal-body', ['exports', 'ember-idx-modal/modal-body'], function (exports, _emberIdxModalModalBody) {
  exports['default'] = _emberIdxModalModalBody['default'];
});
define('frontend/components/em-modal-confirm-with-reason', ['exports', 'ember-idx-modal/modal-confirm-with-reason'], function (exports, _emberIdxModalModalConfirmWithReason) {
  exports['default'] = _emberIdxModalModalConfirmWithReason['default'];
});
define('frontend/components/em-modal-confirm', ['exports', 'ember-idx-modal/modal-confirm'], function (exports, _emberIdxModalModalConfirm) {
  exports['default'] = _emberIdxModalModalConfirm['default'];
});
define('frontend/components/em-modal-emform', ['exports', 'ember-idx-modal/modal-emform'], function (exports, _emberIdxModalModalEmform) {
  exports['default'] = _emberIdxModalModalEmform['default'];
});
define('frontend/components/em-modal-footer', ['exports', 'ember-idx-modal/modal-footer'], function (exports, _emberIdxModalModalFooter) {
  exports['default'] = _emberIdxModalModalFooter['default'];
});
define('frontend/components/em-modal-form', ['exports', 'ember-idx-modal/modal-form'], function (exports, _emberIdxModalModalForm) {
  exports['default'] = _emberIdxModalModalForm['default'];
});
define('frontend/components/em-modal-title', ['exports', 'ember-idx-modal/modal-title'], function (exports, _emberIdxModalModalTitle) {
  exports['default'] = _emberIdxModalModalTitle['default'];
});
define('frontend/components/em-modal-toggler', ['exports', 'ember-idx-modal/modal-toggler'], function (exports, _emberIdxModalModalToggler) {
  exports['default'] = _emberIdxModalModalToggler['default'];
});
define('frontend/components/em-modal', ['exports', 'ember-idx-modal/modal'], function (exports, _emberIdxModalModal) {
  exports['default'] = _emberIdxModalModal['default'];
});
define('frontend/components/em-select', ['exports', 'ember', 'ember-idx-forms/select'], function (exports, _ember, _emberIdxFormsSelect) {
  exports['default'] = _emberIdxFormsSelect['default'];
});
define('frontend/components/em-text', ['exports', 'ember', 'ember-idx-forms/text'], function (exports, _ember, _emberIdxFormsText) {
  exports['default'] = _emberIdxFormsText['default'];
});
define('frontend/components/grade-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group'],

    setWeight: (function () {
      var grade = this.get('grade');
      this.store.find('weight', grade.get('selectedWeight')).then(function (weight) {
        grade.set('weight', weight);
      });
    }).observes('grade.selectedWeight'),

    actions: {
      removeGrade: function removeGrade(grade) {
        var grades = this.get('parent.grades');
        grade.destroyRecord();
        $.growl.notice({ title: 'Grade', message: 'Successfully deleted.' });
        grades.removeObject(grade);
      }
    }

  });
});
define('frontend/components/grade-row', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'tr',
    actions: {
      deleteGrade: function deleteGrade(grade) {
        var component = this;
        var gradeName = grade.get('name');
        var grades = this.get('parent.pagedGradeContent');
        grade.destroyRecord().then(function (grade) {
          component.store.find('user', component.get('session.currentUser.id')).then(function (user) {
            user.reload();
          });
          grades.removeObject(grade);
          $.growl.notice({ title: 'Grade', message: "Sucessfully deleted " + gradeName + "." });
        });
      }
    }
  });
});
define('frontend/components/gravatar-image', ['exports', 'ember-cli-gravatar/components/gravatar-image'], function (exports, _emberCliGravatarComponentsGravatarImage) {
  exports['default'] = _emberCliGravatarComponentsGravatarImage['default'];
});
define('frontend/components/info-box', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['info-box'],
    average: (function () {
      var values = this.get('values');
      if (values) {
        var component = this;
        var sum = 0,
            count = 0;
        values.forEach(function (value) {
          var gpa = value.get(component.get('value'));
          if (!isNaN(parseFloat(gpa)) && isFinite(gpa)) {
            sum += parseFloat(gpa);
            count += 1;
          }
        });
        if (count > 0) {
          return (sum / count).toFixed(2);
        } else {
          return '—';
        }
      }
    }).property('values')
  });
});
define('frontend/components/link-li-toggle', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = Em.Component.extend({
        tagName: 'li',
        classNameBindings: ['active'],
        click: function click() {
            $('body').toggleClass('sidebar-open');
        },
        active: (function () {
            return this.get('childViews').anyBy('active');
        }).property('childViews.@each.active')
    });
});
define('frontend/components/link-li', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = Em.Component.extend({
        tagName: 'li',
        classNameBindings: ['active'],

        active: (function () {
            return this.get('childViews').anyBy('active');
        }).property('childViews.@each.active')
    });
});
define('frontend/components/page-numbers', ['exports', 'ember', 'ember-cli-pagination/util', 'ember-cli-pagination/lib/page-items', 'ember-cli-pagination/validate'], function (exports, _ember, _emberCliPaginationUtil, _emberCliPaginationLibPageItems, _emberCliPaginationValidate) {
  exports['default'] = _ember['default'].Component.extend({
    currentPageBinding: "content.page",
    totalPagesBinding: "content.totalPages",

    hasPages: _ember['default'].computed.gt('totalPages', 1),

    watchInvalidPage: (function () {
      var me = this;
      var c = this.get('content');
      if (c && c.on) {
        c.on('invalidPage', function (e) {
          me.sendAction('invalidPageAction', e);
        });
      }
    }).observes("content"),

    truncatePages: true,
    numPagesToShow: 10,

    validate: function validate() {
      if (_emberCliPaginationUtil['default'].isBlank(this.get('currentPage'))) {
        _emberCliPaginationValidate['default'].internalError("no currentPage for page-numbers");
      }
      if (_emberCliPaginationUtil['default'].isBlank(this.get('totalPages'))) {
        _emberCliPaginationValidate['default'].internalError('no totalPages for page-numbers');
      }
    },

    pageItemsObj: (function () {
      return _emberCliPaginationLibPageItems['default'].create({
        parent: this,
        currentPageBinding: "parent.currentPage",
        totalPagesBinding: "parent.totalPages",
        truncatePagesBinding: "parent.truncatePages",
        numPagesToShowBinding: "parent.numPagesToShow",
        showFLBinding: "parent.showFL"
      });
    }).property(),

    //pageItemsBinding: "pageItemsObj.pageItems",

    pageItems: (function () {
      this.validate();
      return this.get("pageItemsObj.pageItems");
    }).property("pageItemsObj.pageItems", "pageItemsObj"),

    canStepForward: (function () {
      var page = Number(this.get("currentPage"));
      var totalPages = Number(this.get("totalPages"));
      return page < totalPages;
    }).property("currentPage", "totalPages"),

    canStepBackward: (function () {
      var page = Number(this.get("currentPage"));
      return page > 1;
    }).property("currentPage"),

    actions: {
      pageClicked: function pageClicked(number) {
        _emberCliPaginationUtil['default'].log("PageNumbers#pageClicked number " + number);
        this.set("currentPage", number);
        this.sendAction('action', number);
      },
      incrementPage: function incrementPage(num) {
        var currentPage = Number(this.get("currentPage")),
            totalPages = Number(this.get("totalPages"));

        if (currentPage === totalPages && num === 1) {
          return false;
        }
        if (currentPage <= 1 && num === -1) {
          return false;
        }
        this.incrementProperty('currentPage', num);

        var newPage = this.get('currentPage');
        this.sendAction('action', newPage);
      }
    }
  });
});
define('frontend/components/progress-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    colors: 'primary,info,success,warning,danger,gray,navy,teal,purple,orange,maroon,black',
    classNames: ['progress-bar'],
    attributeBindings: ['style', 'role', 'aria-valuemin', 'ariaValueNow:aria-valuenow', 'aria-valuemax'],
    classTypePrefix: 'progress-bar',
    role: 'progressbar',
    'aria-valuemin': 0,
    'aria-valuemax': 100,

    init: function init() {
      return this._super();
    },

    didInsertElement: function didInsertElement() {
      var colors = this.colors.split(',');
      var randColor = colors[Math.floor(Math.random() * colors.length)];
      this.$().addClass('bg-' + randColor);
    },

    style: (function () {
      return "width:" + this.percentage + "%;";
    }).property('percentage'),

    // color: function() {
    //   this.$().
    // }.observes('color'),
    ariaValueNow: (function () {
      return this.percentage;
    }).property('percentage')

  });
});
define('frontend/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _emberRadioButtonsComponentsRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonsComponentsRadioButton['default'];
    }
  });
});
define('frontend/components/rl-dropdown-container', ['exports', 'ember-rl-dropdown/components/rl-dropdown-container'], function (exports, _emberRlDropdownComponentsRlDropdownContainer) {
  exports['default'] = _emberRlDropdownComponentsRlDropdownContainer['default'];
});
define('frontend/components/rl-dropdown-toggle', ['exports', 'ember-rl-dropdown/components/rl-dropdown-toggle'], function (exports, _emberRlDropdownComponentsRlDropdownToggle) {
  exports['default'] = _emberRlDropdownComponentsRlDropdownToggle['default'];
});
define('frontend/components/rl-dropdown', ['exports', 'ember-rl-dropdown/components/rl-dropdown'], function (exports, _emberRlDropdownComponentsRlDropdown) {
  exports['default'] = _emberRlDropdownComponentsRlDropdown['default'];
});
define('frontend/components/social-icons', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: ''
  });
});
define('frontend/components/split-button', ['exports', 'ember', 'ember-rl-dropdown/mixins/rl-dropdown-component'], function (exports, _ember, _emberRlDropdownMixinsRlDropdownComponent) {
  exports['default'] = _ember['default'].Component.extend(_emberRlDropdownMixinsRlDropdownComponent['default'], {
    classNames: ['btn-group'],
    selection: null,

    actions: {
      filter: function filter(selection) {
        this.set('selection', selection);
      },
      all: function all() {
        this.set('selection', null);
      }
    }
  });
});
define('frontend/components/stripe-checkout', ['exports', 'ember', 'frontend/config/environment'], function (exports, _ember, _frontendConfigEnvironment) {

  /**
   * Stripe checkout component for accepting payments with
   * an embedded form.
   *
   * Stripe docs: https://stripe.com/docs/tutorials/checkout
   *
   * Usage:
   * {{stripe-checkout
   *   description=billingPlan.description
   *   amount=billingPlan.amount
   * }}
   */
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['stripe-checkout'],
    attributeBindings: ['isDisabled:disabled'],

    /**********************************
     * Required attributes
     **********************************/

    /**
     * Your publishable key (test or live).
     */
    key: _frontendConfigEnvironment['default'].stripe.key,

    /**********************************
     * Highly recommended attributes
     **********************************/

    /**
     * A relative URL pointing to a square image of your brand or
     * product. The recommended minimum size is 128x128px.
     * Eg. "/square-image.png"
     */
    image: null,

    /**
     * The name of your company or website.
     */
    name: "Demo Site",

    /**
     * A description of the product or service being purchased.
     */
    description: "2 widgets ($20.00)",

    /**
     * The amount (in cents) that's shown to the user. Note that you
     * will still have to explicitly include it when you create a
     * charge using the Stripe API.
     */
    amount: 2000,

    /**********************************
     * Optional attributes
     **********************************/

    /**
     * Accept Bitcoin payments.
     */
    bitcoin: false,

    /**
     * The currency of the amount (3-letter ISO code). The default is USD.
     */
    currency: "USD",

    /**
     * The label of the payment button in the Checkout form (e.g. “Subscribe”,
     * “Pay {{amount}}”, etc.). If you include {{amount}}, it will be replaced
     * by the provided amount. Otherwise, the amount will be appended to the
     * end of your label.
     */
    panelLabel: null,

    /**
     * Specify whether Checkout should validate the billing ZIP code
     * (true or false). The default is false.
     */
    zipCode: false,

    /**
     * Specify whether Checkout should collect the customer's billing address
     * (true or false). The default is false.
     */
    address: false,

    /**
     * If you already know the email address of your user, you can provide
     * it to Checkout to be pre-filled.
     */
    email: null,

    /**
     * The text to be shown on the default blue button.
     */
    label: "Pay with card",

    /**
     * Specify whether to include the option to "Remember Me" for future
     * purchases (true or false). The default is true.
     */
    allowRememberMe: true,

    /**********************************
     * Extras
     **********************************/

    /**
     * Bind to this attribute to disable the stripe
     * button until the user completes prior requirements
     * (like choosing a plan)
     */
    isDisabled: false,

    /**
     * Stripe handler
     */
    handler: null,

    /**
     * By default we add stripe button classes.
     * Set to false to disable Stripe styles
     *
     * TODO: Need to load stripe styles in order for this to apply
     */
    useStripeStyles: true,

    /**
     * Sets up Stripe and sends component action
     * with the Stripe token when checkout succeeds.
     *
     * The token looks like this
     * {
     *   "id": "tok_150enDGA2quO03uZPF8Nve2a",
     *   "livemode": false,
     *   "created": 1416427871,
     *   "used": false,
     *   "object": "token",
     *   "type": "card",
     *   "card": {
     *     "id": "card_150enDGA2quO03uZK8AwnT9x",
     *     "object": "card",
     *     "last4": "4242",
     *     "brand": "Visa",
     *     "funding": "credit",
     *     "exp_month": 8,
     *     "exp_year": 2015,
     *     "fingerprint": "AwGY3mROvhSpEvSc",
     *     "country": "US",
     *     "name": null,
     *     "address_line1": null,
     *     "address_line2": null,
     *     "address_city": null,
     *     "address_state": null,
     *     "address_zip": null,
     *     "address_country": null,
     *     "dynamic_last4": null,
     *     "customer": null
     *   }
     * }
     *
     * Source: https://stripe.com/docs/api#tokens
     */
    setupStripe: _ember['default'].on('init', function () {
      var self = this;

      if (_ember['default'].isNone(this.get('key'))) {
        throw ["Your Stripe key must be set to use the stripe-checkout component. ", "Set the key in your environment.js file (ENV.stripe.key) or set the ", "key property on the component when instantiating it in your hbs template. ", "Find your Stripe publishable key at https://dashboard.stripe.com/account/apikeys"].join('\n');
      }

      var handler = StripeCheckout.configure({
        key: this.get('key'),
        token: function token(_token) {
          self.sendAction('action', _token);
        },
        opened: function opened() {
          self.sendAction('opened');
        },
        closed: function closed() {
          self.sendAction('closed');
        }
      });
      this.set('handler', handler);
    }),

    /**
     * Kick up the modal if we're clicked
     */
    click: function click(e) {
      this.openModal();
      e.preventDefault();
    },

    /**
     * Opens the Stripe modal for payment
     */
    openModal: function openModal() {
      var options = this.getProperties(['image', 'name', 'description', 'amount', 'bitcoin', 'currency', 'panelLabel', 'zipCode', 'address', 'email', 'label', 'allowRememberMe']);
      this.get('handler').open(options);
    },

    closeOnDestroy: _ember['default'].on('willDestroyElement', function () {
      // Close modal if the user navigates away from page
      this.get('handler').close();
    })
  });
});
define('frontend/components/user-menu', ['exports', 'ember', 'ember-rl-dropdown/mixins/rl-dropdown-component'], function (exports, _ember, _emberRlDropdownMixinsRlDropdownComponent) {
  exports['default'] = _ember['default'].Component.extend(_emberRlDropdownMixinsRlDropdownComponent['default'], {
    authenticator: 'simple-auth-authenticator:devise',
    tagName: 'li',
    classNames: ['user', 'user-menu'],

    actions: {
      authenticate: function authenticate() {
        var data = this.getProperties('identification', 'password');
        return this.get('session').authenticate('simple-auth-authenticator:devise', data)['catch'](function (response) {
          $.growl.error({ message: response.error });
        });
      },
      invalidateSession: function invalidateSession() {
        this.get('session').invalidate();
      }
    }
  });
});
define('frontend/components/weight-row', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    alertBox: false,
    confirm: false,
    weightToDelete: null,
    onlyWeight: _ember['default'].computed.equal('parent.weights.length', 1),

    didInsertElement: function didInsertElement() {
      this.validatePercentage();
    },

    validatePercentage: (function () {
      var percentageSum = 0;
      var weights = this.get('parent.weights');
      weights.forEach(function (weight) {
        percentageSum += parseInt(weight.get('percentage'));
      });

      this.set('parent.isValid', percentageSum == 100);
    }).observes('weight.percentage', 'parent.weights.length'),

    deleteWeight: (function () {
      var component = this;
      var weight = this.get('weightToDelete');
      var weights = this.get('parent.weights');
      weight.destroyRecord().then(function () {
        component.store.find('user', component.get('session.currentUser.id')).then(function (user) {
          user.reload();
        });
        $.growl.notice({ title: 'Weight', message: 'Successfully deleted.' });
        weights.removeObject(weight);
      });
    }).observes('confirm'),

    actions: {
      yes: function yes() {
        this.set('confirm', true);
      },
      no: function no() {
        this.set('alertBox', false);
      },
      removeWeight: function removeWeight(weight) {
        this.set('weightToDelete', weight);
        this.set('alertBox', true);
      }
    }
  });
});
define('frontend/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    openModal: false,

    isDashboard: (function () {
      if (!this.get('currentPath')) {
        return false;
      } else {
        return this.get('currentPath').indexOf('dashboard') >= 0;
      }
    }).property('currentPath'),

    // TODO: Messes up testing when clicking user menu
    // isAuthenticatedChanged: function() {
    //   if (this.get('session.isAuthenticated')) {
    //     $.growl.notice({message: 'Sucessfully logged in.'})
    //   } else {
    //     $.growl.notice({message: 'Sucessfully logged out.'})
    //   }
    // }.observes('session.isAuthenticated'),

    containerClass: (function () {
      if (this.get('isDashboard')) {
        $('body').removeClass('layout-top-nav');
      } else {
        $('body').addClass('layout-top-nav');
      }
    }).observes('isDashboard').on('init'),

    actions: {
      openModal: function openModal() {
        this.set('openModal', true);
      },
      toggleSidebar: function toggleSidebar() {
        $('body').toggleClass('sidebar-collapse');
        $('body').toggleClass('sidebar-open');
      }
    }

  });
});
define('frontend/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('frontend/controllers/confirmation', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    isOpenDidChange: (function () {
      if (!this.get('isOpen')) {
        this.transitionToRoute('index');
      }
    }).observes('isOpen')

  });
});
define('frontend/controllers/dashboard/courses/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
    semesterNames: _ember['default'].computed.alias('semesters.@each.name'),
    isntValid: Em.computed.not('isValid'),
    weights: Em.computed.alias('model.weights'),

    isOpenDidChange: (function () {
      if (!this.get('isOpen') && !this.get('isSaving')) {
        this.transitionToRoute('dashboard.courses');
      }
    }).observes('isOpen'),

    actions: {
      editCourse: function editCourse() {
        var controller = this;
        var course = this.get('model');
        var weights = this.get('model.weights');
        this.set('isSaving', true);
        course.save().then(function (course) {
          var dirtyWeights = weights.filterProperty('isDirty');
          if (dirtyWeights.length > 0) {
            dirtyWeights.forEach(function (weight) {
              weight.save();
            });
          }
        }).then(function () {
          course.reload();
          course.get('grades').forEach(function (grade) {
            grade.reload();
          });
          controller.store.find('user', controller.get('session.currentUser.id')).then(function (user) {
            user.reload();
          });
          controller.transitionToRoute('dashboard.courses');
          $.growl.notice({ title: 'Course', message: 'Sucessfully updated.' });
        });
      },
      addWeight: function addWeight() {
        var weight = this.store.createRecord('weight');
        weight.set('course', this.get('model'));
        this.get('model.weights').pushObject(weight);
      }
    }
  });
});
define('frontend/controllers/dashboard/courses/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    scales: ['Regular', 'Plus/Minus', 'Plus', 'Minus'],
    semesterNames: _ember['default'].computed.alias('semesters.@each.name'),
    isntValid: Em.computed.not('isValid'),

    isOpenDidChange: (function () {
      if (!this.get('isOpen') && !this.get('isSaving')) {
        this.transitionToRoute('dashboard.courses');
      }
    }).observes('isOpen'),

    actions: {
      createCourse: function createCourse() {
        var controller = this;
        var course = this.get('model');
        var weights = this.get('weights');
        this.set('isSaving', true);
        this.get('session.currentUser').then(function (user) {
          course.set('user', user);
          return course.save();
        }).then(function (course) {
          if (weights.length > 0) {
            weights.forEach(function (weight) {
              weight.save();
            });
          }
        }).then(function () {
          course.reload();
          controller.store.find('user', controller.get('session.currentUser.id')).then(function (user) {
            user.reload();
          });
          controller.transitionToRoute('dashboard.courses');
          controller.send('updateIndex');
          $.growl.notice({ title: 'Course', message: 'Sucessfully created.' });
        });
      },
      addWeight: function addWeight() {
        var weight = this.store.createRecord('weight');
        weight.set('course', this.get('model'));
        this.get('weights').pushObject(weight);
      }
    }
  });
});
define('frontend/controllers/dashboard/courses/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    donut: { title: 'Weights' },
    size: { height: 280, width: 280 },

    isOpenDidChange: (function () {
      if (!this.get('isOpen')) {
        this.transitionToRoute('dashboard.courses');
      }
    }).observes('isOpen'),

    chartData: (function () {
      var data = { columns: [], type: 'donut', size: { height: 300, width: 300 } };
      this.get('model.weights').forEach(function (weight) {
        var weightPiece = [weight.get('name'), weight.get('percentage')];
        data.columns.push(weightPiece);
      });
      return data;
    }).property('model.weights')

  });
});
define('frontend/controllers/dashboard/courses', ['exports', 'ember', 'frontend/mixins/courses'], function (exports, _ember, _frontendMixinsCourses) {
  exports['default'] = _ember['default'].Controller.extend(_frontendMixinsCourses['default'], {
    courses: _ember['default'].computed.map('model.courses', function (item) {
      return item;
    }),
    actions: {
      deleteCourse: function deleteCourse(course) {
        var controller = this;
        var courseName = course.get('name');
        course.destroyRecord().then(function () {
          controller.store.find('user', controller.get('session.currentUser.id')).then(function (user) {
            user.reload();
          });
          controller.get('pagedCourseContent').removeObject(course);
          $.growl.notice({ title: 'Course', message: "Sucessfully deleted " + courseName + "." });
        });
      }
    }
  });
});
define('frontend/controllers/dashboard/feedback', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    isOpenDidChange: (function () {
      if (!this.get('isOpen') && !this.get('isSaving')) {
        this.transitionToRoute('dashboard.index');
      }
    }).observes('isOpen'),

    actions: {
      submitFeedback: function submitFeedback() {
        var controller = this;
        this.set('isSaving', true);
        this.get('model').save().then(function () {
          controller.transitionToRoute('dashboard.index');
          $.growl.notice({ title: 'Feedback', message: 'Sucessfully sent.' });
        }, function (response) {
          var errors = response.errors;
          errors.forEach(function (error_message) {
            $.growl.error({ message: error_message });
          });
          controller.set('isSaving', false);
        });
      }
    }
  });
});
define('frontend/controllers/dashboard/grades/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    isOpenDidChange: (function () {
      if (!this.get('isOpen') && !this.get('isSaving')) {
        this.transitionToRoute('dashboard.grades');
      }
    }).observes('isOpen'),

    setCourse: (function () {
      var controller = this;
      this.set('gradeWeights', []); // Reset gradeWeights

      this.store.find('course', this.get('selectedCourse')).then(function (course) {
        controller.set('course', course);
        if (course) {
          controller.set('gradeWeights', course.get('weights'));
        }
      });
    }).observes('selectedCourse'),

    actions: {
      editGrade: function editGrade() {
        var controller = this;
        var grade = this.get('model');
        this.set('isSaving', true);
        controller.store.find('weight', grade.get('selectedWeight')).then(function (weight) {
          grade.set('course', controller.get('course'));
          grade.set('weight', weight);
          grade.save().then(function () {
            controller.get('course').reload();
            controller.store.find('user', controller.get('session.currentUser.id')).then(function (user) {
              user.reload();
            });
            controller.transitionToRoute('dashboard.grades');
            $.growl.notice({ title: 'Grade', message: 'Sucessfully updated.' });
          });
        });
      }
    }

  });
});
define('frontend/controllers/dashboard/grades/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    courses: _ember['default'].computed.map('model.courses', function (item) {
      return item;
    }),
    noGrades: _ember['default'].computed.empty('grades'),

    isOpenDidChange: (function () {
      if (!this.get('isOpen') && !this.get('isSaving')) {
        this.transitionToRoute('dashboard.grades');
      }
    }).observes('isOpen'),

    setCourse: (function () {
      var course = this.get('selectedCourse');
      if (course) {
        this.send('rollbackGrades', this.get('grades')); // Reset grades
        this.set('grades', []);
        this.set('gradeWeights', []); // Reset gradeWeights
        this.send('addGrade'); // Push first grade
        this.set('gradeWeights', course.get('weights'));
      }
    }).observes('selectedCourse'),

    actions: {
      createGrades: function createGrades() {
        var controller = this;
        var grades = this.get('grades');
        if (grades.length > 0) {
          this.set('isSaving', true);

          var promises = grades.map(function (grade) {
            return grade.save();
          }, []);

          _ember['default'].RSVP.all(promises).then(function (grades) {
            controller.store.find('user', controller.get('session.currentUser.id')).then(function (user) {
              user.reload();
            });
            controller.get('selectedCourse').reload();
            controller.send('updateIndex');
            controller.transitionToRoute('dashboard.grades');
            $.growl.notice({ title: 'Grades', message: 'Sucessfully created.' });
          });
        }
      },
      addGrade: function addGrade() {
        var grade = this.store.createRecord('grade');
        grade.set('course', this.get('selectedCourse'));
        grade.set('user', this.get('model'));
        this.get('grades').pushObject(grade);
      },
      removeGrade: function removeGrade(grade) {
        this.get('grades').removeObject(grade);
      }
    }

  });
});
define('frontend/controllers/dashboard/grades', ['exports', 'ember', 'frontend/mixins/grades'], function (exports, _ember, _frontendMixinsGrades) {
  exports['default'] = _ember['default'].Controller.extend(_frontendMixinsGrades['default'], {
    grades: _ember['default'].computed.map('model.grades', function (item) {
      return item;
    }),
    courses: _ember['default'].computed.map('model.courses', function (item) {
      return item;
    })
  });
});
define('frontend/controllers/dashboard/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('frontend/controllers/dashboard/profile/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    semesterNames: _ember['default'].computed.alias('semesters.@each.name'),

    actions: {
      rollbackUser: function rollbackUser() {
        this.get('model').rollback();
      },
      saveUser: function saveUser() {
        var controller = this;
        this.get('model').save().then(function () {
          controller.transitionToRoute('dashboard.profile.index');
          $.growl.notice({ title: 'User', message: 'Sucessfully updated profile.' });
        });
      }
    }
  });
});
define('frontend/controllers/dashboard/profile/organizations/join', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Controller.extend({

    isOpenDidChange: (function () {
      if (!this.get('isOpen') && !this.get('isSaving')) {
        this.transitionToRoute('dashboard.profile.organizations');
      }
    }).observes('isOpen'),

    actions: {
      joinOrganization: function joinOrganization() {
        var controller = this;
        var data = { code: this.get('code'), user_id: this.get('session.currentUser.id') };
        (0, _emberAjax['default'])({
          type: 'POST',
          url: '/groups/join.json',
          data: data
        }).then(function (response) {
          controller.send('pushMemberships', response.groups);
          $.growl.notice({ title: 'Organization', message: 'Successfully joined.' });
        }, function (response) {
          controller.set('code', null);
          $.growl.error({ title: 'Organization', message: response.jqXHR.responseJSON.error });
        });
      }
    }
  });
});
define('frontend/controllers/dashboard/profile/organizations', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Controller.extend({
    directors: _ember['default'].computed.map('model.directors', function (item) {
      return item;
    }),
    director: _ember['default'].computed('model.groupMemberships', function () {
      return this.get('directors.firstObject');
    }),

    organizations: _ember['default'].computed.map('model.groupMemberships', function (item) {
      return item;
    }),
    uniqueOrganizations: _ember['default'].computed('organizations', function () {
      var organizations = this.get('model.groupMemberships');
      if (organizations) {
        return _.uniq(organizations.toArray(), 'groupId');
      }
    }),
    inOrganization: _ember['default'].computed.equal('uniqueOrganizations.length', 1),

    actions: {
      leaveOrganization: function leaveOrganization(organization) {
        var controller = this;
        var organizations = this.get('organizations');
        (0, _emberAjax['default'])({
          type: 'post',
          url: '/group_memberships/remove.json',
          data: {
            user_id: this.get('session.currentUser.id'),
            group_id: organization.get('groupId')
          }
        }).then(function (response) {
          // TODO: This needs serious refactor
          var remove = _.remove(organizations.toArray(), function (org) {
            var condition = org.get('groupId') != organization.get('groupId');
            if (!condition) {
              org.deleteRecord();
            }
            return condition;
          });
          // controller.set('model.groupMemberships', remove);
          controller.send('updateIndex');
          $.growl.notice({ title: 'Organization', message: 'Successfully deleted.' });
        });
      }
    }
  });
});
define('frontend/controllers/dashboard/profile/password', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      rollbackUser: function rollbackUser() {
        this.get('model').rollback();
      },
      saveUser: function saveUser() {
        var controller = this;
        this.get('model').save().then(function () {
          controller.transitionToRoute('dashboard.profile.password');
          $.growl.notice({ title: 'User', message: 'Sucessfully updated password.' });
        });
      }
    }

  });
});
define('frontend/controllers/dashboard/profile/subscriptions/cancel', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Controller.extend({

    isOpenDidChange: (function () {
      if (!this.get('isOpen')) {
        this.transitionToRoute('dashboard.profile.subscriptions');
      }
    }).observes('isOpen'),

    actions: {
      yes: function yes() {
        (0, _emberAjax['default'])({
          type: 'POST',
          url: '/users/cancel_subscription.json',
          data: { user_id: this.get('session.currentUser.id') }
        }).then(function (response) {
          $.growl.notice({ title: 'Subscription', message: response.message });
        }, function (error) {
          // TODO: REMOVE THESE ON LIVE STRIPE
          console.log(error);
        });
      },
      no: function no() {
        this.transitionToRoute('dashboard.profile.subscriptions');
      }
    }
  });
});
define('frontend/controllers/dashboard/profile/subscriptions', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Controller.extend({
    name: 'Gradebuildr',
    logo: 'http://i.imgur.com/SSW2gda.png',
    basic: { name: 'Basic', identifier: 'basic_monthly', to_cents: 1000 },
    premium: { name: 'Premium', identifier: 'premium_monthly', to_cents: 2500 },
    ultimate: { name: 'Ultimate', identifier: 'ultimate_monthly', to_cents: 9900 },
    noPlan: _ember['default'].computed.not('plan'),
    plan: null,
    canceledSubscription: _ember['default'].computed.alias('session.currentUser.canceledSubscription'),
    noSubscription: _ember['default'].computed.not('session.currentUser.subscription'),
    canceledSubscriptionOrNoSubscription: _ember['default'].computed.or('noSubscription', 'canceledSubscription'),
    sameAsBasic: _ember['default'].computed.equal('session.currentUser.subscription', 'basic_monthly'),
    sameAsPremium: _ember['default'].computed.equal('session.currentUser.subscription', 'premium_monthly'),
    sameAsUltimate: _ember['default'].computed.equal('session.currentUser.subscription', 'ultimate_monthly'),
    actions: {
      selectPlan: function selectPlan(plan) {
        var controller = this;
        $('.price-table').removeClass('active');
        $('#' + plan.name.toLowerCase()).addClass('active');
        this.set('plan', plan);
        if (this.get('session.currentUser.subscription')) {
          (0, _emberAjax['default'])({
            type: 'POST',
            url: '/users/proration_price.json',
            data: { plan: this.get('plan.identifier'), user_id: this.get('session.currentUser.id') }
          }).then(function (response) {
            controller.set('proratedPrice', response.cost);
            alert('Your price will be prorated for current month to $' + controller.get('proratedPrice') / 100 + ' because you already have an existing subscription. These changes will reflect next bill cycle on ' + moment(controller.get('session.currentUser.activeUntil')).format('LL') + '.');
            controller.set('prorationDate', response.proration_date);
          }, function (error) {
            // TODO: REMOVE THESE ON LIVE STRIPE
            console.log(error);
          });
        }
      },
      processStripeToken: function processStripeToken(token) {
        var controller = this;
        token.plan = this.get('plan.identifier');
        if (this.get('prorationDate')) {
          token.proration_date = this.get('prorationDate');
        }
        (0, _emberAjax['default'])({
          type: 'POST',
          url: '/users/process_payment.json',
          data: { token: token, user_id: this.get('session.currentUser.id') }
        }).then(function (response) {
          $.growl.notice({ title: 'Subscription', message: response.message });
        }, function (error) {
          // TODO: REMOVE THESE ON LIVE STRIPE
          console.log(error);
        });
      }
    }
  });
});
define('frontend/controllers/dashboard/students/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend(_ember['default'].SortableMixin, {
    // students: Ember.computed.map('model.students', item => item),
    sortProperties: ['fullName'], // Default sort
    // sortAscending: true,

    sortedStudents: _ember['default'].computed.sort('students', 'sortProperties'),

    // sortedStudents: function() {
    //   debugger
    //   return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
    //     sortProperties: this.get('sortProperties'),
    //     sortAscending: this.get('sortAscending'),
    //     content: this.get('model.students')
    //   });
    // }.property('model.students'),

    actions: {
      sortBy: function sortBy(sortProperty) {
        // if (sortProperty == this.get('sortProperties')[0]) {
        //   this.toggleProperty('sortAscending');
        // } else {
        //   this.set('sortAscending', true);
        // }
        this.set('sortProperties', [sortProperty]);
      }
    }

  });
});
define('frontend/controllers/dashboard/students/show', ['exports', 'ember', 'frontend/mixins/courses', 'frontend/mixins/grades'], function (exports, _ember, _frontendMixinsCourses, _frontendMixinsGrades) {
  exports['default'] = _ember['default'].Controller.extend(_frontendMixinsCourses['default'], _frontendMixinsGrades['default'], {
    courses: _ember['default'].computed.alias('model.courses'),
    grades: _ember['default'].computed.alias('model.grades'),

    actions: {
      back: function back() {
        this.transitionToRoute('dashboard.students');
      },
      clearPage: function clearPage() {
        this.set('page', 1);
      }
    }
  });
});
define('frontend/controllers/dashboard/students', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('frontend/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('frontend/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('frontend/controllers/password/edit', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Controller.extend({
    queryParams: ['reset_password_token'],
    reset_password_token: null,

    actions: {
      changePassword: function changePassword() {
        var controller = this;
        (0, _emberAjax['default'])({
          type: 'PUT',
          url: '/users/password.json',
          data: {
            user: {
              password: this.get('password'),
              password_confirmation: this.get('passwordConfirmation'),
              reset_password_token: this.get('reset_password_token')
            }
          }
        }).then(function (response) {
          controller.transitionToRoute('index');
          $.growl.notice({ title: 'Password', message: response.message });
        }, function (response) {
          if (response.jqXHR.responseJSON.errors.password) {
            response.jqXHR.responseJSON.errors.password.forEach(function (error) {
              $.growl.error({ title: 'Password', message: error });
            });
          }
          if (response.jqXHR.responseJSON.errors.password_confirmation) {
            response.jqXHR.responseJSON.errors.password_confirmation.forEach(function (error) {
              $.growl.error({ title: 'Password Confirmation', message: error });
            });
          }
        });
      }
    }
  });
});
define('frontend/controllers/password/new', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      newPassword: function newPassword() {
        var controller = this;
        (0, _emberAjax['default'])({
          type: 'POST',
          url: '/users/password.json',
          data: { user: { email: this.get('email') } }
        }).then(function (response) {
          controller.transitionToRoute('index');
          $.growl.notice({ title: 'Reset Password', message: response.message });
        }, function (error) {
          $.growl.error({ title: 'Reset Password', message: error.jqXHR.responseJSON.message });
        });
      }
    }
  });
});
define('frontend/controllers/passwords/edit', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      changePassword: function changePassword() {
        (0, _emberAjax['default'])({
          type: 'PUT',
          url: '/users/password.json',
          data: { user: { password: this.get('password'), password_confirmation: this.get('passwordConfirmation') } }
        }).then(function (response) {
          $.growl.notice({ title: 'Password', message: response.message });
        }, function (error) {
          $.growl.error({ title: 'Password', message: error.jqXHR.responseJSON.message });
        });
      }
    }
  });
});
define('frontend/controllers/passwords/new', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      newPassword: function newPassword() {
        (0, _emberAjax['default'])({
          type: 'POST',
          url: '/users/password.json',
          data: { user: { email: this.get('email') } }
        }).then(function (response) {
          $.growl.notice({ title: 'Reset Password', message: response.message });
        }, function (error) {
          $.growl.error({ title: 'Reset Password', message: error.jqXHR.responseJSON.message });
        });
      }
    }
  });
});
define('frontend/controllers/register', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    model: {},
    semesterNames: _ember['default'].computed.alias('semesters.@each.name'),
    isStudent: _ember['default'].computed.equal('model.accountType', 'student'),

    actions: {
      'continue': function _continue() {
        this.set('registration', true);
      },
      back: function back() {
        this.set('registration', false);
      },
      createUser: function createUser() {
        var user = this.get('model');
        var self = this;
        this.set('isSaving', true);
        user.save().then(function () {
          // self.get('session').authenticate('simple-auth-authenticator:devise', {
          //   identification: user.get('email'),
          //   password: user.get('password')
          // }).then((function() {
          self.transitionToRoute('confirmation').then(function (route) {
            route.controller.set('email', user.get('email'));
          });
          // }));
        }, function (response) {
          var errors = response.errors;
          errors.forEach(function (error_message) {
            $.growl.error({ message: error_message });
          });

          self.set('isSaving', false);
        });
      }
    }

  });
});
define('frontend/helpers/fa-icon', ['exports', 'ember'], function (exports, _ember) {

  var FA_PREFIX = /^fa\-.+/;

  var warn = _ember['default'].Logger.warn;

  /**
   * Handlebars helper for generating HTML that renders a FontAwesome icon.
   *
   * @param  {String} name    The icon name. Note that the `fa-` prefix is optional.
   *                          For example, you can pass in either `fa-camera` or just `camera`.
   * @param  {Object} options Options passed to helper.
   * @return {Ember.Handlebars.SafeString} The HTML markup.
   */
  var faIcon = function faIcon(name, options) {
    if (_ember['default'].typeOf(name) !== 'string') {
      var message = "fa-icon: no icon specified";
      warn(message);
      return _ember['default'].String.htmlSafe(message);
    }

    var params = options.hash,
        classNames = [],
        html = "";

    classNames.push("fa");
    if (!name.match(FA_PREFIX)) {
      name = "fa-" + name;
    }
    classNames.push(name);
    if (params.spin) {
      classNames.push("fa-spin");
    }
    if (params.flip) {
      classNames.push("fa-flip-" + params.flip);
    }
    if (params.rotate) {
      classNames.push("fa-rotate-" + params.rotate);
    }
    if (params.lg) {
      warn("fa-icon: the 'lg' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\"lg\"}}");
      classNames.push("fa-lg");
    }
    if (params.x) {
      warn("fa-icon: the 'x' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\"" + params.x + "\"}}");
      classNames.push("fa-" + params.x + "x");
    }
    if (params.size) {
      if (_ember['default'].typeOf(params.size) === "string" && params.size.match(/\d+/)) {
        params.size = Number(params.size);
      }
      if (_ember['default'].typeOf(params.size) === "number") {
        classNames.push("fa-" + params.size + "x");
      } else {
        classNames.push("fa-" + params.size);
      }
    }
    if (params.fixedWidth) {
      classNames.push("fa-fw");
    }
    if (params.listItem) {
      classNames.push("fa-li");
    }
    if (params.pull) {
      classNames.push("pull-" + params.pull);
    }
    if (params.border) {
      classNames.push("fa-border");
    }
    if (params.classNames && !_ember['default'].isArray(params.classNames)) {
      params.classNames = [params.classNames];
    }
    if (!_ember['default'].isEmpty(params.classNames)) {
      Array.prototype.push.apply(classNames, params.classNames);
    }

    html += "<";
    var tagName = params.tagName || 'i';
    html += tagName;
    html += " class='" + classNames.join(" ") + "'";
    if (params.title) {
      html += " title='" + params.title + "'";
    }
    if (params.ariaHidden === undefined || params.ariaHidden) {
      html += " aria-hidden=\"true\"";
    }
    html += "></" + tagName + ">";
    return _ember['default'].String.htmlSafe(html);
  };

  exports.faIcon = faIcon;
  exports['default'] = _ember['default'].Handlebars.makeBoundHelper(faIcon);
});
define('frontend/helpers/format-date', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].HTMLBars.makeBoundHelper(function (params) {
    return moment(params[0]).format(params[1]);
  });
});
define('frontend/helpers/pluralize', ['exports', 'ember'], function (exports, _ember) {
  exports.pluralize = pluralize;

  function pluralize(params /*, hash*/) {
    return params;
  }

  exports['default'] = _ember['default'].HTMLBars.makeBoundHelper(pluralize);
});
define('frontend/initialize', ['exports', 'ember', 'ember-idx-utils/config'], function (exports, _ember, _emberIdxUtilsConfig) {
  exports['default'] = {
    name: 'ember-idx-utils',
    initialize: function initialize() {
      if (!_ember['default'].IdxConfig) {
        _ember['default'].IdxConfig = _emberIdxUtilsConfig['default'].create();
      }
    }
  };
});
define('frontend/initializers/app-version', ['exports', 'frontend/config/environment', 'ember'], function (exports, _frontendConfigEnvironment, _ember) {

  var classify = _ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        _ember['default'].libraries.register(appName, _frontendConfigEnvironment['default'].APP.version);
        registered = true;
      }
    }
  };
});
define('frontend/initializers/ember-cli-rails-addon-csrf', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  exports['default'] = {
    name: 'ember-cli-rails-addon-csrf',

    initialize: function initialize() {
      $.ajaxPrefilter(function (options, originalOptions, xhr) {
        var token = $('meta[name="csrf-token"]').attr('content');
        xhr.setRequestHeader('X-CSRF-Token', token);
      });
    }
  };
});
define('frontend/initializers/ember-idx-modal', ['exports', 'ember', 'ember-idx-utils/config'], function (exports, _ember, _emberIdxUtilsConfig) {
    exports['default'] = {
        name: 'ember-idx-modal',
        initialize: function initialize() {
            var Config = _ember['default'].IdxConfig = _ember['default'].IdxConfig ? _ember['default'].IdxConfig : _emberIdxUtilsConfig['default'].create();

            var defaultConfig = Config.getConfig('bs');
            if (!defaultConfig) {
                Config.addConfig('bs');
                defaultConfig = Config.getConfig('bs');
            }

            defaultConfig['modal'] = {
                classes: ['em-modal', 'modal', 'fade'],
                bodyClasses: ['modal-body'],
                titleClasses: ['modal-header'],
                footerClasses: ['modal-footer']
            };
        }
    };
});
define('frontend/initializers/export-application-global', ['exports', 'ember', 'frontend/config/environment'], function (exports, _ember, _frontendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_frontendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _frontendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_frontendConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('frontend/initializers/general-setup', ['exports', 'ember'], function (exports, _ember) {

    //The intent of this file is to hold initializers
    //that are general and lack specific context or scope
    exports['default'] = {
        name: 'general-setup',
        after: 'store',
        initialize: function initialize(container) {
            container.injection('component', 'store', 'store:main');
        }
    };
});
//initializers/general-setup.js
define('frontend/initializers/idx-accordion-config', ['exports', 'ember', 'ember-idx-utils/config'], function (exports, _ember, _emberIdxUtilsConfig) {
    exports['default'] = {
        name: 'ember-idx-accordion',
        initialize: function initialize() {
            var Config = _ember['default'].IdxConfig = _ember['default'].IdxConfig ? _ember['default'].IdxConfig : _emberIdxUtilsConfig['default'].create();

            var defaultConfig = Config.getConfig('default');
            if (!defaultConfig) {
                Config.addConfig('default');
                defaultConfig = Config.getConfig('default');
            }

            //Bootstrap
            var bsConfig = Config.getConfig('bs');
            if (!bsConfig) {
                Config.addConfig('bs');
                bsConfig = Config.getConfig('bs');
            }
            bsConfig['accordion'] = {
                classes: ['panel-group'],
                itemClasses: ['panel', 'panel-default'],
                itemSelectedClasses: ['active'],
                panelHeaderClasses: ['panel-heading'],
                panelTitleClasses: ['panel-title'],
                panelTogglerClasses: ['accordion-toggle'],
                panelBodyContainerClasses: ['panel-collapse', 'collapse'],
                panelBodyClasses: ['panel-body']
            };
        }
    };
});
define('frontend/initializers/pluralize-initializer', ['exports', 'ember', 'ember-pluralize/helpers/h-pluralize'], function (exports, _ember, _emberPluralizeHelpersHPluralize) {
  var initialize = function initialize() {
    _ember['default'].Handlebars.helper('h-pluralize', _emberPluralizeHelpersHPluralize.hPluralize);
  };

  exports.initialize = initialize;
  exports['default'] = {
    name: 'ember-pluralize',
    initialize: initialize
  };
});
define('frontend/initializers/session-store', ['exports'], function (exports) {
  exports.initialize = initialize;
  //app/initializers/session-store

  function initialize(container, application) {
    application.inject('session:custom', '_store', 'store:main');
  }

  exports['default'] = {
    name: 'session-store',
    after: 'ember-data',
    initialize: initialize
  };
});
define('frontend/initializers/simple-auth-devise', ['exports', 'simple-auth-devise/configuration', 'simple-auth-devise/authenticators/devise', 'simple-auth-devise/authorizers/devise', 'frontend/config/environment'], function (exports, _simpleAuthDeviseConfiguration, _simpleAuthDeviseAuthenticatorsDevise, _simpleAuthDeviseAuthorizersDevise, _frontendConfigEnvironment) {
  exports['default'] = {
    name: 'simple-auth-devise',
    before: 'simple-auth',
    initialize: function initialize(container, application) {
      _simpleAuthDeviseConfiguration['default'].load(container, _frontendConfigEnvironment['default']['simple-auth-devise'] || {});
      container.register('simple-auth-authorizer:devise', _simpleAuthDeviseAuthorizersDevise['default']);
      container.register('simple-auth-authenticator:devise', _simpleAuthDeviseAuthenticatorsDevise['default']);
    }
  };
});
define('frontend/initializers/simple-auth', ['exports', 'simple-auth/configuration', 'simple-auth/setup', 'frontend/config/environment'], function (exports, _simpleAuthConfiguration, _simpleAuthSetup, _frontendConfigEnvironment) {
  exports['default'] = {
    name: 'simple-auth',
    initialize: function initialize(container, application) {
      _simpleAuthConfiguration['default'].load(container, _frontendConfigEnvironment['default']['simple-auth'] || {});
      (0, _simpleAuthSetup['default'])(container, application);
    }
  };
});
define('frontend/mixins/courses', ['exports', 'ember', 'ember-cli-pagination/computed/paged-array'], function (exports, _ember, _emberCliPaginationComputedPagedArray) {
  exports['default'] = _ember['default'].Mixin.create({
    sortProperties: ['createdAt:desc'],
    sortedCourses: _ember['default'].computed.sort('courses', 'sortProperties'),
    semesterNames: _ember['default'].computed.alias('semesters.@each.name'),
    uniqueSemesters: _ember['default'].computed.uniq('semesterNames'),
    selectedSemester: null,
    filteredCourses: _ember['default'].computed.oneWay('sortedCourses'),

    coursesDidChange: (function () {
      var courses = this.get('sortedCourses');
      var selectedSemester = this.get('selectedSemester');
      if (selectedSemester) {
        this.set('page', 1);
      }
      if (selectedSemester) {
        this.set('filteredCourses', courses.filterBy('semester', selectedSemester));
      } else {
        this.set('filteredCourses', courses);
      }
    }).observes('sortedCourses', 'sortedCourses.[]', 'selectedSemester'),

    // setup our query params
    queryParams: ["page", "perPage"],

    // set default values, can cause problems if left out
    // if value matches default, it won't display in the URL
    page: 1,
    perPage: 10,

    // can be called anything, I've called it pagedContent
    // remember to iterate over pagedContent in your template
    pagedCourseContent: (0, _emberCliPaginationComputedPagedArray['default'])('filteredCourses', { pageBinding: 'page', perPageBinding: 'perPage' }),

    // binding the property on the paged array
    // to a property on the controller
    totalPagesBinding: 'pagedCourseContent.totalPages'
  });
});
define('frontend/mixins/director', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    beforeModel: function beforeModel(transition) {
      if (!this.get('session.currentUser.isOrganization')) {
        transition.abort();
        this.transitionTo('dashboard');
      }
    }
  });
});
define('frontend/mixins/grades', ['exports', 'ember', 'ember-cli-pagination/computed/paged-array'], function (exports, _ember, _emberCliPaginationComputedPagedArray) {
  exports['default'] = _ember['default'].Mixin.create({
    sortProperties: ['createdAt:desc'],
    semesterNames: _ember['default'].computed.alias('semesters.@each.name'),
    uniqueSemesters: _ember['default'].computed.uniq('semesterNames'),
    sortedGrades: _ember['default'].computed.sort('grades', 'sortProperties'),
    filteredGrades: _ember['default'].computed.oneWay('sortedGrades'),
    names: _ember['default'].computed.alias('courses.@each.name'),
    uniqueNames: _ember['default'].computed.uniq('names'),
    selectedSemester: null,
    selectedCourse: null,

    gradesDidChange: (function () {
      var grades = this.get('sortedGrades');
      var selectedSemester = this.get('selectedSemester');
      var selectedCourse = this.get('selectedCourse');
      if (selectedCourse || selectedSemester) {
        this.set('page', 1);
      }
      if (selectedSemester && selectedCourse) {
        this.set('filteredGrades', grades.filterBy("course.semester", selectedSemester).filterBy('course.name', selectedCourse));
      } else if (selectedSemester) {
        this.set('filteredGrades', grades.filterBy("course.semester", selectedSemester));
      } else if (selectedCourse) {
        this.set('filteredGrades', grades.filterBy("course.name", selectedCourse));
      } else {
        this.set('filteredGrades', grades);
      }
    }).observes('sortedGrades', 'sortedGrades.[]', 'selectedSemester', 'selectedCourse'),

    // setup our query params
    queryParams: ["page", "perPage"],

    // set default values, can cause problems if left out
    // if value matches default, it won't display in the URL
    page: 1,
    perPage: 10,

    // can be called anything, I've called it pagedContent
    // remember to iterate over pagedContent in your template
    pagedGradeContent: (0, _emberCliPaginationComputedPagedArray['default'])('filteredGrades', { pageBinding: "page", perPageBinding: "perPage" }),

    // binding the property on the paged array
    // to a property on the controller
    totalPagesBinding: "pagedGradeContent.totalPages"
  });
});
define('frontend/mixins/user', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({
    semesterGpa: DS.attr('string'),
    cumulativeGpa: DS.attr('string'),
    semesterCreditHours: DS.attr('number'),
    gradeCount: DS.attr('number'),
    courseCount: DS.attr('number'),

    fullName: (function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    }).property('firstName', 'lastName')

  });
});
define('frontend/models/course', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    user: _emberData['default'].belongsTo('user'),
    weights: _emberData['default'].hasMany('weight', { async: true }),
    grades: _emberData['default'].hasMany('grade', { async: true }),
    subject: _emberData['default'].attr('string'),
    number: _emberData['default'].attr('number'),
    creditHours: _emberData['default'].attr('number'),
    gradingScale: _emberData['default'].attr('string'),
    semester: _emberData['default'].attr('string'),
    createdAt: _emberData['default'].attr('date'),
    currentGrade: _emberData['default'].attr('string'),
    letterGrade: _emberData['default'].attr('string'),
    score: _emberData['default'].attr('number'),

    name: (function () {
      return this.get('subject') + ' ' + this.get('number');
    }).property('subject', 'number')

  });
});
define('frontend/models/director', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    organization: _emberData['default'].attr('string'),
    groupCode: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string')
  });
});
define('frontend/models/feedback', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string'),
    body: _emberData['default'].attr('string')

  });
});
define('frontend/models/grade', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    user: _emberData['default'].belongsTo('user'),
    course: _emberData['default'].belongsTo('course', { async: true }),
    weight: _emberData['default'].belongsTo('weight', { async: true }),
    name: _emberData['default'].attr('string'),
    score: _emberData['default'].attr('number'),
    scoreTotal: _emberData['default'].attr('number'),
    percentage: _emberData['default'].attr('number'),
    createdAt: _emberData['default'].attr('date')
  });
});
define('frontend/models/group-membership', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    groupId: _emberData['default'].attr('number'),
    groupName: _emberData['default'].attr('string')
  });
});
define('frontend/models/semester', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string')
  });
});
define('frontend/models/student', ['exports', 'ember-data', 'frontend/mixins/user'], function (exports, _emberData, _frontendMixinsUser) {
  exports['default'] = _emberData['default'].Model.extend(_frontendMixinsUser['default'], {
    user: _emberData['default'].belongsTo('user'),
    courses: _emberData['default'].hasMany('course', { async: true }),
    grades: _emberData['default'].hasMany('grade', { async: true }),
    email: _emberData['default'].attr('string'),
    firstName: _emberData['default'].attr('string'),
    lastName: _emberData['default'].attr('string'),
    gradePoints: _emberData['default'].attr('number'),
    gradeUnits: _emberData['default'].attr('number'),
    activeSemester: _emberData['default'].attr('string')

  });
});
define('frontend/models/user', ['exports', 'ember-data', 'frontend/mixins/user'], function (exports, _emberData, _frontendMixinsUser) {
  exports['default'] = _emberData['default'].Model.extend(_frontendMixinsUser['default'], {
    courses: _emberData['default'].hasMany('course', { async: true }),
    grades: _emberData['default'].hasMany('grade', { async: true }),
    isOrganization: _emberData['default'].attr('boolean'),
    isStudent: _emberData['default'].attr('boolean'),
    organization: _emberData['default'].attr('string'),
    accountType: _emberData['default'].attr('string'),
    activeUntil: _emberData['default'].attr('date'),
    subscription: _emberData['default'].attr('string'),
    canceledSubscription: _emberData['default'].attr('boolean'),
    students: _emberData['default'].hasMany('student', { async: true }),
    directors: _emberData['default'].hasMany('director', { async: true }),
    groupMemberships: _emberData['default'].hasMany('groupMembership'),
    email: _emberData['default'].attr('string'),
    unconfirmedEmail: _emberData['default'].attr('string'),
    firstName: _emberData['default'].attr('string'),
    lastName: _emberData['default'].attr('string'),
    gradePoints: _emberData['default'].attr('number'),
    gradeUnits: _emberData['default'].attr('number'),
    activeSemester: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    password_confirmation: _emberData['default'].attr('string')
  });
});
define('frontend/models/weight', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    course: _emberData['default'].belongsTo('course'),
    grades: _emberData['default'].hasMany('grade', { async: true }),
    name: _emberData['default'].attr('string'),
    percentage: _emberData['default'].attr('number')
  });
});
define('frontend/router', ['exports', 'ember', 'frontend/config/environment'], function (exports, _ember, _frontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _frontendConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('dashboard', function () {
      this.route('courses', function () {
        this.route('new');
        this.route('edit', { path: 'edit/:course_id' });
        this.route('show', { path: '/:course_id' });
      });
      this.route('grades', function () {
        this.route('new');
        this.route('edit', { path: 'edit/:grade_id' });
      });
      this.route('profile', function () {
        this.route('password');
        this.route('subscriptions', function () {
          this.route('cancel');
        });
        this.route('organizations', function () {
          this.route('join');
        });
      });
      this.route('feedback');
      this.route('students', function () {
        this.route('show', { path: '/:user_id' });
      });
    });
    this.route('register');
    this.route('confirmation');
    this.route('confirmed');

    this.route('password', function () {
      this.route('new');
      this.route('edit');
    });
    this.route('faq');
  });

  exports['default'] = Router;
});
define('frontend/routes/application', ['exports', 'simple-auth/mixins/application-route-mixin'], function (exports, _simpleAuthMixinsApplicationRouteMixin) {
  exports['default'] = Ember.Route.extend(_simpleAuthMixinsApplicationRouteMixin['default'], {});
});
define('frontend/routes/confirmation', ['exports', 'ember', 'simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _ember, _simpleAuthMixinsUnauthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsUnauthenticatedRouteMixin['default'], {});
});
define('frontend/routes/confirmed', ['exports', 'ember', 'simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _ember, _simpleAuthMixinsUnauthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsUnauthenticatedRouteMixin['default'], {

    confirmed: (function () {
      this.transitionTo('index');
      $.growl.notice({ title: 'Email', message: 'Sucessfully confirmed email. You may login now.' });
    }).on('activate')

  });
});
define('frontend/routes/dashboard/courses/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      controller.set('model', model);
      controller.set('semesters', this.store.all('semester'));
      controller.set('isSaving', false);
    },
    deactivate: function deactivate() {
      this.get('controller.weights').filterProperty('isDirty').forEach(function (weight) {
        weight.rollback();
      });
    }
  });
});
define('frontend/routes/dashboard/courses/new', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _simpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      var store = this.store;
      return _ember['default'].RSVP.hash({
        course: store.createRecord('course'),
        semesters: store.find('semester')
      });
    },
    setupController: function setupController(controller, model) {
      controller.set('model', model.course);
      controller.set('semesters', model.semesters);
      controller.set('selectedSemester', null);
      controller.set('isSaving', false);
      controller.set('weights', [controller.store.createRecord('weight', { course: model.course })]);
    }
  });
});
define('frontend/routes/dashboard/courses/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      controller.set('model', model);
    }
  });
});
define('frontend/routes/dashboard/courses', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _simpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.get('session.currentUser');
    },
    afterModel: function afterModel(model) {
      return this.store.find('course', { user_id: model.get('id') });
    },
    setupController: function setupController(controller, model) {
      var store = controller.get('store');
      controller.set('model', model);
      store.find('semester').then(function (semesters) {
        controller.set('semesters', semesters);
      });
    },
    actions: {
      updateIndex: function updateIndex() {
        this.refresh();
      }
    }
  });
});
define('frontend/routes/dashboard/feedback', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      var store = this.store;
      this.get('session.currentUser').then(function (user) {
        controller.set('model', store.createRecord('feedback', { email: user.get('email') }));
      });
      controller.set('isSaving', false);
    }
  });
});
define('frontend/routes/dashboard/grades/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      controller.set('model', model);
      controller.set('isSaving', false);
      controller.set('courses', this.store.all('course'));
      controller.set('selectedCourse', model.get('course.id'));
      controller.set('model.selectedWeight', model.get('weight.id'));
    },
    deactivate: function deactivate() {
      this.get('controller.model').rollback();
    }
  });
});
define('frontend/routes/dashboard/grades/new', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _simpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.get('session.currentUser');
    },
    afterModel: function afterModel(model) {
      return _ember['default'].RSVP.hash({
        courses: model.get('courses'),
        weights: model.get('weights')
      });
    },
    setupController: function setupController(controller, model) {
      controller.set('model', model);
      controller.set('grades', []);
      controller.set('selectedCourse', void 0);
      controller.set('isSaving', false);
    },
    deactivate: function deactivate() {
      this.send('rollbackGrades', this.get('controller.grades'));
    }
  });
});
define('frontend/routes/dashboard/grades', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _simpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.get('session.currentUser');
    },
    afterModel: function afterModel(model) {
      return _ember['default'].RSVP.hash({
        courses: this.store.find('course', { user_id: model.get('id') }),
        grades: this.store.find('grade', { user_id: model.get('id') })
      });
    },
    setupController: function setupController(controller, model) {
      var store = controller.get('store');
      controller.set('model', model);
      store.find('semester').then(function (semesters) {
        controller.set('semesters', semesters);
      });
    },
    actions: {
      updateIndex: function updateIndex() {
        this.refresh();
      },
      rollbackGrades: function rollbackGrades(grades) {
        grades.filterProperty('isDirty').forEach(function (grade) {
          grade.rollback();
        });
      }
    }
  });
});
define('frontend/routes/dashboard/index', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin', 'ember-cli-pagination/remote/route-mixin'], function (exports, _ember, _simpleAuthMixinsAuthenticatedRouteMixin, _emberCliPaginationRemoteRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsAuthenticatedRouteMixin['default'], _emberCliPaginationRemoteRouteMixin['default'], {
    perPage: 5,

    model: function model() {
      return this.get('session.currentUser');
    },
    afterModel: function afterModel(model) {
      var params = this.paramsFor();
      params.user_id = model.get('id');
      this.controllerFor('dashboard.index').set('grades', this.findPaged('grade', params));
      this.controllerFor('dashboard.index').set('courses', this.findPaged('course', params));
    }
  });
});
define('frontend/routes/dashboard/profile/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      var store = controller.get('store');
      this.get('session.currentUser').then(function (user) {
        controller.set('model', user);
        store.find('semester').then(function (semesters) {
          controller.set('semesters', semesters);
        });
      });
    },
    actions: {
      willTransition: function willTransition() {
        var isDirty = this.get('controller.model.isDirty');
        if (isDirty) {
          this.get('controller').send('rollbackUser');
        }
        return true;
      }
    }
  });
});
define('frontend/routes/dashboard/profile/organizations/join', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('frontend/routes/dashboard/profile/organizations', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('session.currentUser');
    },
    afterModel: function afterModel(model) {
      return _ember['default'].RSVP.hash({
        groupMemberships: model.get('groupMemberships'),
        directors: model.get('directors')
      });
    },
    actions: {
      pushMemberships: function pushMemberships(response) {
        this.controller.set('uniqueOrganizations', _.uniq(response, 'groupId'));
      },
      updateIndex: function updateIndex() {
        this.transitionTo('dashboard.profile.organizations');
      }
    }
  });
});
define('frontend/routes/dashboard/profile/password', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      var store = controller.get('store');
      this.get('session.currentUser').then(function (user) {
        controller.set('model', user);
      });
    }
  });
});
define('frontend/routes/dashboard/profile/subscriptions/cancel', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('frontend/routes/dashboard/profile/subscriptions', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('frontend/routes/dashboard/profile', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _simpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsAuthenticatedRouteMixin['default'], {});
});
define('frontend/routes/dashboard/students/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('session.currentUser');
    },
    afterModel: function afterModel(model) {
      this.controllerFor('dashboard.students.index').set('students', model.get('students'));
    }

  });
});
define('frontend/routes/dashboard/students/show', ['exports', 'ember', 'ember-ajax'], function (exports, _ember, _emberAjax) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      this.controllerFor('dashboard.students').set('isLoading', true);
      return this.store.find('student', params.user_id);
    },
    afterModel: function afterModel(model) {
      return _ember['default'].RSVP.hash({
        courses: this.store.find('course', { user_id: model.get('id') }),
        grades: this.store.find('grade', { user_id: model.get('id') })
      });
    },
    setupController: function setupController(controller, model) {
      controller.set('model', model);
      this.controllerFor('dashboard.students').set('isLoading', false);
    }
  });
});
define('frontend/routes/dashboard/students', ['exports', 'ember', 'simple-auth/mixins/authenticated-route-mixin', 'frontend/mixins/director'], function (exports, _ember, _simpleAuthMixinsAuthenticatedRouteMixin, _frontendMixinsDirector) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsAuthenticatedRouteMixin['default'], _frontendMixinsDirector['default'], {});
});
define('frontend/routes/faq', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('frontend/routes/password/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    setupController: function setupController(controller, model) {
      this._super(controller, model);
      if (_ember['default'].isBlank(this.get('controller.reset_password_token'))) {
        this.transitionTo('index');
      }
    }
  });
});
define('frontend/routes/password/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('frontend/routes/register', ['exports', 'ember', 'simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _ember, _simpleAuthMixinsUnauthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_simpleAuthMixinsUnauthenticatedRouteMixin['default'], {
    model: function model() {
      var store = this.store;
      return _ember['default'].RSVP.hash({
        user: store.createRecord('user', { accountType: 'student' }),
        semesters: store.find('semester')
      });
    },
    setupController: function setupController(controller, model) {
      controller.set('model', model.user);
      controller.set('semesters', model.semesters);
      controller.set('isSaving', false);
      controller.set('registration', false);
    }
  });
});
define('frontend/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].ActiveModelSerializer.extend({});
});
define('frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('frontend/services/validations', ['exports', 'ember'], function (exports, _ember) {

  var set = _ember['default'].set;

  exports['default'] = _ember['default'].Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });
});
define('frontend/sessions/custom', ['exports', 'simple-auth/session'], function (exports, _simpleAuthSession) {
  exports['default'] = _simpleAuthSession['default'].extend({

    currentUser: (function () {
      var userId = this.get('secure.id');
      if (userId && this.get('isAuthenticated')) {
        return this._store.find('user', userId);
      }
    }).property('secure.id', 'isAuthenticated')

  });
});
define("frontend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "id", "tab");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "link-to", ["Feedback", "dashboard.feedback"], [], ["loc", [null, [7, 4], [7, 47]]]], ["inline", "partial", ["partials/sidebar"], [], ["loc", [null, [9, 2], [9, 32]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        return morphs;
      },
      statements: [["inline", "partial", ["partials/header"], [], ["loc", [null, [3, 0], [3, 29]]]], ["block", "if", [["get", "isDashboard", ["loc", [null, [5, 6], [5, 17]]]]], [], 0, null, ["loc", [null, [5, 0], [10, 7]]]], ["content", "outlet", ["loc", [null, [12, 0], [12, 10]]]], ["inline", "partial", ["partials/footer"], [], ["loc", [null, [14, 0], [14, 29]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/components/bs-popover", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/bs-popover.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "popoverJs hide");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "fa-icon", [["get", "icon", ["loc", [null, [1, 10], [1, 14]]]]], [], ["loc", [null, [1, 0], [1, 16]]]], ["content", "yield", ["loc", [null, [3, 2], [3, 11]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/em-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 6
          }
        },
        "moduleName": "frontend/templates/components/em-accordion-item.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("panel-heading");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("panel-title");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("accordion-toggle");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("panel-collapse collapse");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("panel-body");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "style", "cursor: pointer;");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [10]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(fragment, [12]);
        var element4 = dom.childAt(element3, [1]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createAttrMorph(element2, 'class');
        morphs[3] = dom.createMorphAt(element2, 1, 1);
        morphs[4] = dom.createAttrMorph(element3, 'class');
        morphs[5] = dom.createAttrMorph(element4, 'class');
        morphs[6] = dom.createMorphAt(element4, 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "panelHeaderClasses", []], "panel-header-classes"], [], []]]]], ["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "panelTitleClasses", []], "panel-title-classes"], [], []]]]], ["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "panelTogglerClasses", []], "panel-toggler-classes"], [], []]]]], ["content", "view.title", ["loc", [null, [10, 12], [10, 26]]]], ["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "panelBodyContainerClasses", []], "panel-body-container-classes"], [], []]]]], ["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "panelBodyClasses", []], "panel-body-classes"], [], []]]]], ["content", "yield", ["loc", [null, [15, 46], [15, 55]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/em-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/em-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "icon-classes", []], "icon-classes"], [], []]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 9
          }
        },
        "moduleName": "frontend/templates/components/em-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon-classes", ["loc", [null, [1, 6], [1, 18]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["content", "label", ["loc", [null, [4, 0], [4, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/components/em-form-control-help", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "moduleName": "frontend/templates/components/em-form-control-help.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "helpText", ["loc", [null, [1, 0], [1, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/em-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/em-form-group.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "wrapperClass", []], "wrapper-class"], [], []]]]], ["inline", "partial", ["components/formgroup/form-group"], [], ["loc", [null, [3, 8], [3, 53]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/em-form-group.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "partial", ["components/formgroup/form-group"], [], ["loc", [null, [6, 4], [6, 49]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "frontend/templates/components/em-form-group.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "wrapperClass", ["loc", [null, [1, 6], [1, 18]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/components/em-form-label", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 8
          }
        },
        "moduleName": "frontend/templates/components/em-form-label.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["content", "text", ["loc", [null, [2, 0], [2, 8]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/em-form-submit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/em-form-submit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element2, 'class');
          morphs[2] = dom.createAttrMorph(element2, 'disabled');
          morphs[3] = dom.createMorphAt(element2, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "horiClass", []], "hori-class"], [], []]]]], ["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "classes", []], "classes"], [], []]]]], ["attribute", "disabled", ["get", "disabled", ["loc", [null, [3, 65], [3, 73]]]]], ["content", "text", ["loc", [null, [3, 76], [3, 84]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/em-form-submit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'disabled');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "classes", []], "classes"], [], []]]]], ["attribute", "disabled", ["get", "disabled", ["loc", [null, [6, 61], [6, 69]]]]], ["content", "text", ["loc", [null, [6, 72], [6, 80]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "frontend/templates/components/em-form-submit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "form.isHorizontal", ["loc", [null, [1, 6], [1, 23]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/components/em-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/em-form.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "em-form-submit", ["loc", [null, [3, 4], [3, 22]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "frontend/templates/components/em-form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "if", [["get", "submit_button", ["loc", [null, [2, 6], [2, 19]]]]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/components/em-modal-confirm", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 8
                },
                "end": {
                  "line": 3,
                  "column": 116
                }
              },
              "moduleName": "frontend/templates/components/em-modal-confirm.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/components/em-modal-confirm.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 8], [3, 137]]]], ["content", "title", ["loc", [null, [4, 32], [4, 41]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 8
                },
                "end": {
                  "line": 12,
                  "column": 8
                }
              },
              "moduleName": "frontend/templates/components/em-modal-confirm.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "view", [["get", "Ember.Select", ["loc", [null, [11, 15], [11, 27]]]]], ["value", ["subexpr", "@mut", [["get", "message", []]], [], []], "content", ["subexpr", "@mut", [["get", "messages", []]], [], []], "optionValuePath", "id", "optionLabelPath", "content.msg"], ["loc", [null, [11, 8], [11, 129]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/components/em-modal-confirm.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("Confirmation with a reason");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 7, 7, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "message", ["loc", [null, [7, 8], [7, 19]]]], ["content", "yield", ["loc", [null, [8, 8], [8, 17]]]], ["block", "if", [["get", "reasonModal", ["loc", [null, [10, 14], [10, 25]]]]], [], 0, null, ["loc", [null, [10, 8], [12, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 8
                },
                "end": {
                  "line": 19,
                  "column": 8
                }
              },
              "moduleName": "frontend/templates/components/em-modal-confirm.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("i");
              dom.setAttribute(el1, "class", "fa fa-thumbs-o-down");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              return morphs;
            },
            statements: [["content", "cancel-button-title", ["loc", [null, [18, 12], [18, 35]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 4
              },
              "end": {
                "line": 20,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/components/em-modal-confirm.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "em-button", [], ["class", ["subexpr", "@mut", [["get", "cancel-button-classes", ["loc", [null, [15, 26], [15, 47]]]]], [], []], "on-click", "confirmPressed", "default", ["subexpr", "@mut", [["get", "submit-button-title", ["loc", [null, [15, 82], [15, 101]]]]], [], []], "icon-default", ["subexpr", "@mut", [["get", "submit-button-default-icons", ["loc", [null, [15, 115], [15, 142]]]]], [], []], "icon-executing", ["subexpr", "@mut", [["get", "submit-button-execute-icons", ["loc", [null, [15, 158], [15, 185]]]]], [], []], "executing", ["subexpr", "@mut", [["get", "submit-button-submitting-title", ["loc", [null, [15, 196], [15, 226]]]]], [], []]], ["loc", [null, [15, 8], [15, 228]]]], ["block", "em-modal-toggler", [], ["class", ["subexpr", "@mut", [["get", "submit-button-classes", ["loc", [null, [16, 34], [16, 55]]]]], [], []]], 0, null, ["loc", [null, [16, 8], [19, 29]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/em-modal-confirm.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], ["classes", ["subexpr", "@mut", [["get", "modal-title-classes", ["loc", [null, [2, 30], [2, 49]]]]], [], []]], 0, null, ["loc", [null, [2, 4], [5, 23]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [6, 4], [13, 22]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [14, 4], [20, 24]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 13
          }
        },
        "moduleName": "frontend/templates/components/em-modal-confirm.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal", [], ["id", ["subexpr", "@mut", [["get", "confirm-id", ["loc", [null, [1, 15], [1, 25]]]]], [], []], "configName", ["subexpr", "@mut", [["get", "configName", ["loc", [null, [1, 37], [1, 47]]]]], [], []], "model-id", ["subexpr", "@mut", [["get", "model-id", ["loc", [null, [1, 57], [1, 65]]]]], [], []], "open-if", ["subexpr", "@mut", [["get", "open-if", ["loc", [null, [1, 74], [1, 81]]]]], [], []], "close-if", ["subexpr", "@mut", [["get", "close-if", ["loc", [null, [1, 91], [1, 99]]]]], [], []], "on-hide", ["subexpr", "@mut", [["get", "on-hide", ["loc", [null, [1, 108], [1, 115]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [21, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/components/em-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/em-modal.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "modal-dialog");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "modal-content");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [4, 12], [4, 21]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "frontend/templates/components/em-modal.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "is-open", ["loc", [null, [1, 6], [1, 13]]]]], [], 0, null, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/components/formgroup/control-within-label", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/formgroup/control-within-label.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "partial", ["components/formgroup/form-group-control"], [], ["loc", [null, [2, 4], [2, 57]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 18
          }
        },
        "moduleName": "frontend/templates/components/formgroup/control-within-label.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-form-label", [], ["text", ["subexpr", "@mut", [["get", "label", ["loc", [null, [1, 22], [1, 27]]]]], [], []], "horiClass", "", "inlineClass", "", "viewName", ["subexpr", "@mut", [["get", "labelViewName", ["loc", [null, [1, 65], [1, 78]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [3, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/components/formgroup/form-group-control", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/formgroup/form-group-control.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "controlWrapper", []], "control-wrapper"], [], []]]]], ["inline", "view", [["get", "controlView", ["loc", [null, [3, 15], [3, 26]]]]], ["viewName", ["subexpr", "@mut", [["get", "controlViewName", ["loc", [null, [3, 36], [3, 51]]]]], [], []], "property", ["subexpr", "@mut", [["get", "propertyName", ["loc", [null, [3, 61], [3, 73]]]]], [], []], "id", ["subexpr", "@mut", [["get", "cid", ["loc", [null, [3, 77], [3, 80]]]]], [], []]], ["loc", [null, [3, 8], [3, 82]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/formgroup/form-group-control.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "view", [["get", "controlView", ["loc", [null, [6, 11], [6, 22]]]]], ["viewName", ["subexpr", "@mut", [["get", "controlViewName", ["loc", [null, [6, 32], [6, 47]]]]], [], []], "property", ["subexpr", "@mut", [["get", "propertyName", ["loc", [null, [6, 57], [6, 69]]]]], [], []], "id", ["subexpr", "@mut", [["get", "cid", ["loc", [null, [6, 73], [6, 76]]]]], [], []]], ["loc", [null, [6, 4], [6, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 7
          }
        },
        "moduleName": "frontend/templates/components/formgroup/form-group-control.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "controlWrapper", ["loc", [null, [1, 6], [1, 20]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/components/formgroup/form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 4,
                    "column": 12
                  },
                  "end": {
                    "line": 8,
                    "column": 12
                  }
                },
                "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                var el2 = dom.createTextNode("\n                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element2 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createAttrMorph(element2, 'class');
                morphs[1] = dom.createMorphAt(element2, 1, 1);
                return morphs;
              },
              statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "labelWrapperClass", []], "label-wrapper-class"], [], []]]]], ["inline", "partial", ["components/formgroup/control-within-label"], [], ["loc", [null, [6, 20], [6, 75]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 8,
                    "column": 12
                  },
                  "end": {
                    "line": 10,
                    "column": 12
                  }
                },
                "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "partial", ["components/formgroup/control-within-label"], [], ["loc", [null, [9, 16], [9, 71]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 8
                },
                "end": {
                  "line": 11,
                  "column": 8
                }
              },
              "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "labelWrapperClass", ["loc", [null, [4, 18], [4, 35]]]]], [], 0, 1, ["loc", [null, [4, 12], [10, 19]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 12,
                    "column": 12
                  },
                  "end": {
                    "line": 17,
                    "column": 12
                  }
                },
                "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                var el2 = dom.createTextNode("\n                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element1 = dom.childAt(fragment, [1]);
                var morphs = new Array(3);
                morphs[0] = dom.createAttrMorph(element1, 'class');
                morphs[1] = dom.createMorphAt(element1, 1, 1);
                morphs[2] = dom.createMorphAt(element1, 3, 3);
                return morphs;
              },
              statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "labelWrapperClass", []], "label-wrapper-class"], [], []]]]], ["inline", "em-form-label", [], ["text", ["subexpr", "@mut", [["get", "label", ["loc", [null, [14, 41], [14, 46]]]]], [], []], "viewName", ["subexpr", "@mut", [["get", "labelViewName", ["loc", [null, [14, 56], [14, 69]]]]], [], []]], ["loc", [null, [14, 20], [14, 71]]]], ["inline", "partial", ["components/formgroup/form-group-control"], [], ["loc", [null, [15, 20], [15, 73]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 17,
                    "column": 12
                  },
                  "end": {
                    "line": 20,
                    "column": 12
                  }
                },
                "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
                return morphs;
              },
              statements: [["inline", "em-form-label", [], ["text", ["subexpr", "@mut", [["get", "label", ["loc", [null, [18, 37], [18, 42]]]]], [], []], "viewName", ["subexpr", "@mut", [["get", "labelViewName", ["loc", [null, [18, 52], [18, 65]]]]], [], []]], ["loc", [null, [18, 16], [18, 67]]]], ["inline", "partial", ["components/formgroup/form-group-control"], [], ["loc", [null, [19, 16], [19, 69]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 8
                },
                "end": {
                  "line": 21,
                  "column": 8
                }
              },
              "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "labelWrapperClass", ["loc", [null, [12, 18], [12, 35]]]]], [], 0, 1, ["loc", [null, [12, 12], [20, 19]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 22,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "yieldInLabel", ["loc", [null, [3, 14], [3, 26]]]]], [], 0, 1, ["loc", [null, [3, 8], [21, 15]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 4
              },
              "end": {
                "line": 24,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["components/formgroup/form-group-control"], [], ["loc", [null, [23, 8], [23, 61]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 4
              },
              "end": {
                "line": 28,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "form-control-feedback");
            var el2 = dom.createElement("i");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 0]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", [["subexpr", "-bind-attr-class", [["get", "v_icon", []], "v-icon"], [], []]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 32,
                  "column": 8
                },
                "end": {
                  "line": 34,
                  "column": 8
                }
              },
              "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "em-form-control-help", [], ["text", ["subexpr", "@mut", [["get", "help", ["loc", [null, [33, 40], [33, 44]]]]], [], []], "viewName", ["subexpr", "@mut", [["get", "helpViewName", ["loc", [null, [33, 54], [33, 66]]]]], [], []]], ["loc", [null, [33, 12], [33, 68]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 4
              },
              "end": {
                "line": 35,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "canShowErrors", ["loc", [null, [32, 14], [32, 27]]]]], [], 0, null, ["loc", [null, [32, 8], [34, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 36,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "label", ["loc", [null, [2, 10], [2, 15]]]]], [], 0, 1, ["loc", [null, [2, 4], [24, 11]]]], ["block", "if", [["get", "v_icons", ["loc", [null, [26, 10], [26, 17]]]]], [], 2, null, ["loc", [null, [26, 4], [28, 11]]]], ["block", "unless", [["get", "form.isInline", ["loc", [null, [31, 14], [31, 27]]]]], [], 3, null, ["loc", [null, [31, 4], [35, 15]]]]],
        locals: [],
        templates: [child0, child1, child2, child3]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 0
            },
            "end": {
              "line": 38,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [37, 4], [37, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 11
          }
        },
        "moduleName": "frontend/templates/components/formgroup/form-group.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "template", ["loc", [null, [1, 10], [1, 18]]]]], [], 0, 1, ["loc", [null, [1, 0], [38, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/components/grade-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/grade-form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-3 col-xs-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-4 col-xs-6");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-4 col-xs-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-group");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "input-group-addon lead no-border");
        var el5 = dom.createTextNode("/");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-1 center-button-sm");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "button");
        dom.setAttribute(el3, "class", "btn btn-xs btn-default btn-flat text-red");
        dom.setAttribute(el3, "name", "button");
        dom.setAttribute(el3, "title", "Remove");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5, 1]);
        var element2 = dom.childAt(element0, [7, 1]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(element1, 1, 1);
        morphs[3] = dom.createMorphAt(element1, 5, 5);
        morphs[4] = dom.createElementMorph(element2);
        morphs[5] = dom.createMorphAt(element2, 0, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "grade.name", ["loc", [null, [3, 18], [3, 28]]]]], [], []], "class", "form-control input-sm", "required", "true", "placeholder", "Enter grade name", "name", "name"], ["loc", [null, [3, 4], [3, 119]]]], ["inline", "view", ["select"], ["content", ["subexpr", "@mut", [["get", "gradeWeights", ["loc", [null, [7, 17], [7, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "grade.selectedWeight", ["loc", [null, [8, 15], [8, 35]]]]], [], []], "optionValuePath", "content.id", "optionLabelPath", "content.name", "class", "form-control input-sm grade-weight", "prompt", "Please select a grade weight", "required", "true"], ["loc", [null, [6, 6], [14, 8]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "grade.score", ["loc", [null, [18, 20], [18, 31]]]]], [], []], "class", "form-control input-sm no-border", "type", "number", "required", "true", "step", "any", "placeholder", "Score", "name", "score"], ["loc", [null, [18, 6], [18, 147]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "grade.scoreTotal", ["loc", [null, [20, 20], [20, 36]]]]], [], []], "class", "form-control input-sm no-border", "type", "number", "required", "true", "step", "any", "placeholder", "Total", "name", "total"], ["loc", [null, [20, 6], [20, 152]]]], ["element", "action", ["removeGrade", ["get", "grade", ["loc", [null, [24, 49], [24, 54]]]]], [], ["loc", [null, [24, 26], [24, 56]]]], ["inline", "fa-icon", ["minus-circle"], [], ["loc", [null, [24, 135], [24, 161]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/grade-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/components/grade-row.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["edit"], [], ["loc", [null, [10, 4], [10, 22]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/grade-row.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("td");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "type", "button");
          dom.setAttribute(el2, "name", "button");
          dom.setAttribute(el2, "class", "btn btn-danger btn-flat btn-xs");
          dom.setAttribute(el2, "title", "Delete");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0, 1, 1);
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.grades.edit", ["get", "grade", ["loc", [null, [9, 37], [9, 42]]]]], ["class", "btn btn-default btn-flat btn-xs edit-btn"], 0, null, ["loc", [null, [9, 2], [11, 14]]]], ["element", "action", ["deleteGrade", ["get", "grade", ["loc", [null, [12, 115], [12, 120]]]]], [], ["loc", [null, [12, 92], [12, 122]]]], ["inline", "fa-icon", ["trash"], [], ["loc", [null, [12, 123], [12, 142]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/grade-row.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createElement("h4");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("small");
        var el4 = dom.createTextNode("/");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("small");
        var el3 = dom.createTextNode("%");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "label label-primary");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("small");
        var el4 = dom.createTextNode("%");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [6, 0]);
        var element3 = dom.childAt(fragment, [10, 0]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 0, 0);
        morphs[3] = dom.createMorphAt(element2, 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [2]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [8]), 0, 0);
        morphs[6] = dom.createMorphAt(element3, 0, 0);
        morphs[7] = dom.createMorphAt(element3, 2, 2);
        morphs[8] = dom.createMorphAt(fragment, 12, 12, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "grade.name", ["loc", [null, [1, 4], [1, 18]]]], ["content", "grade.course.name", ["loc", [null, [2, 4], [2, 25]]]], ["content", "grade.course.semester", ["loc", [null, [3, 4], [3, 29]]]], ["content", "grade.score", ["loc", [null, [4, 8], [4, 23]]]], ["content", "grade.scoreTotal", ["loc", [null, [4, 32], [4, 52]]]], ["content", "grade.percentage", ["loc", [null, [5, 4], [5, 24]]]], ["content", "grade.weight.name", ["loc", [null, [6, 38], [6, 59]]]], ["content", "grade.weight.percentage", ["loc", [null, [6, 60], [6, 87]]]], ["block", "unless", [["get", "hideActions", ["loc", [null, [7, 10], [7, 21]]]]], [], 0, null, ["loc", [null, [7, 0], [14, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/components/info-box", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/info-box.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "info-box-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "info-box-text");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "info-box-number");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["info-box-icon bg-", ["get", "color", ["loc", [null, [1, 32], [1, 37]]]]]]], ["inline", "fa-icon", [["get", "icon", ["loc", [null, [1, 51], [1, 55]]]]], [], ["loc", [null, [1, 41], [1, 57]]]], ["content", "text", ["loc", [null, [3, 30], [3, 38]]]], ["content", "average", ["loc", [null, [4, 32], [4, 43]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/link-li-toggle", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/link-li-toggle.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/link-li", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/link-li.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/page-numbers", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "frontend/templates/components/page-numbers.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "arrow prev enabled-arrow");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("«");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [["element", "action", ["incrementPage", -1], [], ["loc", [null, [5, 11], [5, 40]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 11,
              "column": 4
            }
          },
          "moduleName": "frontend/templates/components/page-numbers.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "arrow prev disabled");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("«");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["element", "action", ["incrementPage", -1], [], ["loc", [null, [9, 11], [9, 40]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 6
              },
              "end": {
                "line": 18,
                "column": 6
              }
            },
            "moduleName": "frontend/templates/components/page-numbers.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "active page-number");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "item.page", ["loc", [null, [16, 13], [16, 26]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 6
              },
              "end": {
                "line": 22,
                "column": 6
              }
            },
            "moduleName": "frontend/templates/components/page-numbers.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "page-number");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element2);
            morphs[1] = dom.createMorphAt(element2, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["pageClicked", ["get", "item.page", ["loc", [null, [20, 36], [20, 45]]]]], [], ["loc", [null, [20, 13], [20, 47]]]], ["content", "item.page", ["loc", [null, [20, 48], [20, 61]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 23,
              "column": 4
            }
          },
          "moduleName": "frontend/templates/components/page-numbers.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "item.current", ["loc", [null, [14, 12], [14, 24]]]]], [], 0, 1, ["loc", [null, [14, 6], [22, 13]]]]],
        locals: ["item"],
        templates: [child0, child1]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 4
            },
            "end": {
              "line": 29,
              "column": 4
            }
          },
          "moduleName": "frontend/templates/components/page-numbers.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "arrow next enabled-arrow");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("»");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["element", "action", ["incrementPage", 1], [], ["loc", [null, [27, 11], [27, 39]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 4
            },
            "end": {
              "line": 33,
              "column": 4
            }
          },
          "moduleName": "frontend/templates/components/page-numbers.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "arrow next disabled");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("»");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["incrementPage", 1], [], ["loc", [null, [31, 11], [31, 39]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/page-numbers.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "pagination-centered");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "pagination");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element5, 1, 1);
        morphs[1] = dom.createMorphAt(element5, 3, 3);
        morphs[2] = dom.createMorphAt(element5, 5, 5);
        return morphs;
      },
      statements: [["block", "if", [["get", "canStepBackward", ["loc", [null, [3, 10], [3, 25]]]]], [], 0, 1, ["loc", [null, [3, 4], [11, 11]]]], ["block", "each", [["get", "pageItems", ["loc", [null, [13, 20], [13, 29]]]]], [], 2, null, ["loc", [null, [13, 4], [23, 13]]]], ["block", "if", [["get", "canStepForward", ["loc", [null, [25, 10], [25, 24]]]]], [], 3, 4, ["loc", [null, [25, 4], [33, 11]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("frontend/templates/components/progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/progress-bar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("% ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 0, 0);
        morphs[1] = dom.createMorphAt(element0, 2, 2);
        return morphs;
      },
      statements: [["content", "percentage", ["loc", [null, [1, 6], [1, 20]]]], ["content", "name", ["loc", [null, [1, 22], [1, 30]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/social-icons", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/social-icons.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("li");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "target", "_blank");
        dom.setAttribute(el2, "href", "https://www.facebook.com/gradebuildr");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "target", "_blank");
        dom.setAttribute(el2, "href", "https://twitter.com/gradebuildr");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "target", "_blank");
        dom.setAttribute(el2, "href", "https://instagram.com/gradebuildr/");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 0]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4, 0]), 0, 0);
        return morphs;
      },
      statements: [["inline", "fa-icon", ["facebook"], [], ["loc", [null, [1, 67], [1, 89]]]], ["inline", "fa-icon", ["twitter"], [], ["loc", [null, [2, 62], [2, 83]]]], ["inline", "fa-icon", ["instagram"], [], ["loc", [null, [3, 65], [3, 88]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/components/split-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 62
            },
            "end": {
              "line": 1,
              "column": 94
            }
          },
          "moduleName": "frontend/templates/components/split-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "selection", ["loc", [null, [1, 80], [1, 93]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 94
            },
            "end": {
              "line": 1,
              "column": 122
            }
          },
          "moduleName": "frontend/templates/components/split-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" Filter by ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "name", ["loc", [null, [1, 113], [1, 121]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/components/split-button.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 0]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(element0, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["filter", ["get", "filter", ["loc", [null, [10, 29], [10, 35]]]]], [], ["loc", [null, [10, 11], [10, 37]]]], ["content", "filter", ["loc", [null, [10, 38], [10, 48]]]]],
          locals: ["filter"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/split-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("ul");
          dom.setAttribute(el1, "class", "dropdown-menu rl-dropdown");
          dom.setAttribute(el1, "role", "menu");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("li");
          var el3 = dom.createElement("a");
          var el4 = dom.createTextNode("All");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [0]);
          var element2 = dom.childAt(element1, [1, 0]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(element1, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["all"], [], ["loc", [null, [8, 9], [8, 25]]]], ["block", "each", [["get", "filterContent", ["loc", [null, [9, 10], [9, 23]]]]], [], 0, null, ["loc", [null, [9, 2], [11, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 7
          }
        },
        "moduleName": "frontend/templates/components/split-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "button");
        dom.setAttribute(el1, "class", "btn btn-default btn-flat btn-sm");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "button");
        dom.setAttribute(el1, "class", "btn btn-default btn-flat btn-sm rl-dropdown-toggle");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "caret");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "sr-only");
        var el3 = dom.createTextNode("Toggle Dropdown");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "selection", ["loc", [null, [1, 68], [1, 77]]]]], [], 0, 1, ["loc", [null, [1, 62], [1, 129]]]], ["element", "action", ["toggleDropdown"], [], ["loc", [null, [2, 81], [2, 108]]]], ["block", "if", [["get", "dropdownExpanded", ["loc", [null, [6, 6], [6, 22]]]]], [], 2, null, ["loc", [null, [6, 0], [13, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("frontend/templates/components/stripe-checkout", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/stripe-checkout.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [2, 2], [2, 11]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/stripe-checkout.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "label", ["loc", [null, [4, 2], [4, 11]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 7
          }
        },
        "moduleName": "frontend/templates/components/stripe-checkout.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "template", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [5, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/components/user-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 8
                },
                "end": {
                  "line": 22,
                  "column": 8
                }
              },
              "moduleName": "frontend/templates/components/user-menu.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("p");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "row");
              var el3 = dom.createTextNode("\n              ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "col-xs-6");
              var el4 = dom.createTextNode("\n                ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("small");
              var el5 = dom.createElement("b");
              var el6 = dom.createTextNode("Grade Points:");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode(" ");
              dom.appendChild(el4, el5);
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n              ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "col-xs-6");
              var el4 = dom.createTextNode("\n                  ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("small");
              var el5 = dom.createElement("b");
              var el6 = dom.createTextNode("Grade Units:");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode(" ");
              dom.appendChild(el4, el5);
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element7 = dom.childAt(fragment, [1]);
              var element8 = dom.childAt(element7, [3]);
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(dom.childAt(element7, [1]), 0, 0);
              morphs[1] = dom.createMorphAt(dom.childAt(element8, [1, 1]), 2, 2);
              morphs[2] = dom.createMorphAt(dom.childAt(element8, [3, 1]), 2, 2);
              return morphs;
            },
            statements: [["content", "session.currentUser.activeSemester", ["loc", [null, [12, 15], [12, 53]]]], ["content", "session.currentUser.gradePoints", ["loc", [null, [15, 44], [15, 79]]]], ["content", "session.currentUser.gradeUnits", ["loc", [null, [18, 45], [18, 79]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 23,
                  "column": 8
                },
                "end": {
                  "line": 35,
                  "column": 8
                }
              },
              "moduleName": "frontend/templates/components/user-menu.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("p");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "row");
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "col-xs-6");
              var el4 = dom.createTextNode("\n                  ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("small");
              var el5 = dom.createElement("b");
              var el6 = dom.createTextNode("Organization:");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode(" ");
              dom.appendChild(el4, el5);
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "col-xs-6");
              var el4 = dom.createTextNode("\n                  ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("small");
              var el5 = dom.createElement("b");
              var el6 = dom.createTextNode("Students:");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode(" ");
              dom.appendChild(el4, el5);
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element5 = dom.childAt(fragment, [1]);
              var element6 = dom.childAt(element5, [3]);
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(dom.childAt(element5, [1]), 0, 0);
              morphs[1] = dom.createMorphAt(dom.childAt(element6, [1, 1]), 2, 2);
              morphs[2] = dom.createMorphAt(dom.childAt(element6, [3, 1]), 2, 2);
              return morphs;
            },
            statements: [["content", "session.currentUser.activeSemester", ["loc", [null, [25, 15], [25, 53]]]], ["content", "session.currentUser.organization", ["loc", [null, [28, 46], [28, 82]]]], ["content", "session.currentUser.students.length", ["loc", [null, [31, 42], [31, 81]]]]],
            locals: [],
            templates: []
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 39,
                  "column": 10
                },
                "end": {
                  "line": 41,
                  "column": 10
                }
              },
              "moduleName": "frontend/templates/components/user-menu.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            Profile\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 48,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/components/user-menu.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            dom.setAttribute(el1, "class", "dropdown-menu rl-dropdown");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            dom.setAttribute(el2, "class", "user-header text-center");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            dom.setAttribute(el2, "class", "user-footer");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "pull-left");
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "pull-right");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("button");
            dom.setAttribute(el4, "class", "btn btn-default btn-flat");
            var el5 = dom.createTextNode("Log out");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element9 = dom.childAt(fragment, [1]);
            var element10 = dom.childAt(element9, [1]);
            var element11 = dom.childAt(element9, [3]);
            var element12 = dom.childAt(element11, [1]);
            var element13 = dom.childAt(element11, [3, 1]);
            var morphs = new Array(6);
            morphs[0] = dom.createMorphAt(element10, 1, 1);
            morphs[1] = dom.createMorphAt(element10, 3, 3);
            morphs[2] = dom.createMorphAt(element10, 4, 4);
            morphs[3] = dom.createElementMorph(element12);
            morphs[4] = dom.createMorphAt(element12, 1, 1);
            morphs[5] = dom.createElementMorph(element13);
            return morphs;
          },
          statements: [["inline", "gravatar-image", [], ["email", ["subexpr", "@mut", [["get", "session.currentUser.email", ["loc", [null, [9, 31], [9, 56]]]]], [], []], "class", "img-circle"], ["loc", [null, [9, 8], [9, 77]]]], ["block", "if", [["get", "session.currentUser.isStudent", ["loc", [null, [10, 14], [10, 43]]]]], [], 0, null, ["loc", [null, [10, 8], [22, 15]]]], ["block", "if", [["get", "session.currentUser.isOrganization", ["loc", [null, [23, 14], [23, 48]]]]], [], 1, null, ["loc", [null, [23, 8], [35, 15]]]], ["element", "action", ["toggleDropdown"], [], ["loc", [null, [38, 31], [38, 59]]]], ["block", "link-to", ["dashboard.profile.index"], ["class", "btn btn-default btn-flat", "tagName", "button"], 2, null, ["loc", [null, [39, 10], [41, 22]]]], ["element", "action", ["invalidateSession"], [], ["loc", [null, [44, 18], [44, 48]]]]],
          locals: [],
          templates: [child0, child1, child2]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 49,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/user-menu.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "class", "rl-dropdown-toggle");
          dom.setAttribute(el1, "id", "user-menu-link");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "hidden-xs");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element14 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createElementMorph(element14);
          morphs[1] = dom.createMorphAt(element14, 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element14, [3]), 0, 0);
          morphs[3] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["element", "action", ["toggleDropdown"], [], ["loc", [null, [2, 7], [2, 34]]]], ["inline", "gravatar-image", [], ["email", ["subexpr", "@mut", [["get", "session.currentUser.email", ["loc", [null, [3, 29], [3, 54]]]]], [], []], "class", "user-image"], ["loc", [null, [3, 6], [3, 75]]]], ["content", "session.currentUser.firstName", ["loc", [null, [4, 30], [4, 63]]]], ["block", "if", [["get", "dropdownExpanded", ["loc", [null, [6, 10], [6, 26]]]]], [], 0, null, ["loc", [null, [6, 4], [48, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 54,
                "column": 2
              },
              "end": {
                "line": 77,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/components/user-menu.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            dom.setAttribute(el1, "class", "dropdown-menu rl-dropdown");
            dom.setAttribute(el1, "role", "menu");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            dom.setAttribute(el2, "class", "user-body");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("form");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "form-group");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("label");
            dom.setAttribute(el5, "for", "identification");
            var el6 = dom.createTextNode("Email address");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "form-group");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("label");
            dom.setAttribute(el5, "for", "password");
            var el6 = dom.createTextNode("Password");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("small");
            dom.setAttribute(el5, "class", "pull-right");
            var el6 = dom.createComment("");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "form-group");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "pull-right");
            var el6 = dom.createTextNode("\n              ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("button");
            dom.setAttribute(el6, "type", "submit");
            dom.setAttribute(el6, "enter", "authenticate");
            dom.setAttribute(el6, "class", "btn btn-default btn-flat");
            dom.setAttribute(el6, "id", "login");
            var el7 = dom.createTextNode("Log in");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n            ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "pull-left");
            var el6 = dom.createTextNode("\n              ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("button");
            dom.setAttribute(el6, "class", "btn btn-default btn-flat");
            dom.setAttribute(el6, "id", "cancel");
            var el7 = dom.createTextNode("Cancel");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n            ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1, 1]);
            var element1 = dom.childAt(element0, [3]);
            var element2 = dom.childAt(element1, [2]);
            var element3 = dom.childAt(element0, [5, 3, 1]);
            var morphs = new Array(6);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
            morphs[2] = dom.createElementMorph(element2);
            morphs[3] = dom.createMorphAt(element2, 0, 0);
            morphs[4] = dom.createMorphAt(element1, 4, 4);
            morphs[5] = dom.createElementMorph(element3);
            return morphs;
          },
          statements: [["element", "action", ["authenticate"], ["on", "submit"], ["loc", [null, [57, 16], [57, 53]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "identification", ["loc", [null, [60, 26], [60, 40]]]]], [], []], "placeholder", "Email address", "type", "text", "name", "email", "class", "form-control"], ["loc", [null, [60, 12], [60, 116]]]], ["element", "action", ["toggleDropdown"], [], ["loc", [null, [63, 57], [63, 85]]]], ["inline", "link-to", ["Forgot your password?", "password.new"], [], ["loc", [null, [63, 105], [63, 155]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [64, 26], [64, 34]]]]], [], []], "placeholder", "Password", "type", "password", "name", "password", "class", "form-control"], ["loc", [null, [64, 12], [64, 112]]]], ["element", "action", ["toggleDropdown"], [], ["loc", [null, [71, 22], [71, 49]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 0
            },
            "end": {
              "line": 78,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/user-menu.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          dom.setAttribute(el1, "id", "login-nav");
          dom.setAttribute(el1, "class", "rl-dropdown-toggle");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Login");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element4 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element4);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["element", "action", ["toggleDropdown"], [], ["loc", [null, [50, 5], [50, 33]]]], ["block", "if", [["get", "dropdownExpanded", ["loc", [null, [54, 8], [54, 24]]]]], [], 0, null, ["loc", [null, [54, 2], [77, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 79,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/user-menu.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [1, 6], [1, 29]]]]], [], 0, 1, ["loc", [null, [1, 0], [78, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/components/weight-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 0
            },
            "end": {
              "line": 31,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/components/weight-row.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "callout callout-danger");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Are you sure you want to do that?");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n      Clicking yes will delete all weighted grades associated with ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(".\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "type", "button");
          dom.setAttribute(el3, "class", "btn btn-sm btn-success btn-flat");
          dom.setAttribute(el3, "name", "button");
          dom.setAttribute(el3, "title", "Yes");
          var el4 = dom.createTextNode("Yes");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "type", "button");
          dom.setAttribute(el3, "class", "btn btn-sm btn-default btn-flat");
          dom.setAttribute(el3, "name", "button");
          dom.setAttribute(el3, "title", "No");
          var el4 = dom.createTextNode("No");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [5]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element1, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[1] = dom.createElementMorph(element2);
          morphs[2] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["content", "weight.name", ["loc", [null, [24, 67], [24, 82]]]], ["element", "action", ["yes"], [], ["loc", [null, [27, 28], [27, 44]]]], ["element", "action", ["no"], [], ["loc", [null, [28, 28], [28, 43]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/components/weight-row.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-5");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "input-group-addon");
        var el6 = dom.createTextNode("%");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-1 center-button-sm");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-xs btn-default btn-flat text-red remove-weight");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "title", "Remove");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [0, 1]);
        var element5 = dom.childAt(element4, [3, 1]);
        var element6 = dom.childAt(element4, [5, 1]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[1] = dom.createAttrMorph(element5, 'class');
        morphs[2] = dom.createMorphAt(element5, 1, 1);
        morphs[3] = dom.createAttrMorph(element6, 'disabled');
        morphs[4] = dom.createElementMorph(element6);
        morphs[5] = dom.createMorphAt(element6, 0, 0);
        morphs[6] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "weight.name", ["loc", [null, [5, 20], [5, 31]]]]], [], []], "class", "form-control input-sm weight-name", "required", "true", "placeholder", "Enter weight name"], ["loc", [null, [5, 6], [5, 123]]]], ["attribute", "class", ["concat", ["input-group", " ", ["subexpr", "if", [["get", "parent.isntValid", []], "has-error", ""], [], []]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "weight.percentage", ["loc", [null, [9, 22], [9, 39]]]]], [], []], "class", "form-control input-sm weight-percentage", "required", "true", "type", "number", "placeholder", "Enter weight percentage"], ["loc", [null, [9, 8], [9, 157]]]], ["attribute", "disabled", ["get", "onlyWeight", ["loc", [null, [14, 82], [14, 92]]]]], ["element", "action", ["removeWeight", ["get", "weight", ["loc", [null, [14, 52], [14, 58]]]]], [], ["loc", [null, [14, 28], [14, 60]]]], ["inline", "fa-icon", ["minus-circle"], [], ["loc", [null, [14, 187], [14, 213]]]], ["block", "if", [["get", "alertBox", ["loc", [null, [20, 6], [20, 14]]]]], [], 0, null, ["loc", [null, [20, 0], [31, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/confirmation", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/confirmation.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/confirmation.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createTextNode("Sucessfully Registered");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 20,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/confirmation.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "box-body text-center");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "lead");
            var el3 = dom.createTextNode("\n        We sent a confirmation email to ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("b");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(".");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        Click the verification link to get started with Gradebuildr.");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "lead");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("small");
            var el4 = dom.createTextNode("\n          You should also like or share our facebook ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("br");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "fb-like");
            dom.setAttribute(el4, "data-href", "https://www.facebook.com/gradebuildr/");
            dom.setAttribute(el4, "data-layout", "button");
            dom.setAttribute(el4, "data-action", "like");
            dom.setAttribute(el4, "data-show-faces", "false");
            dom.setAttribute(el4, "data-share", "true");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "email", ["loc", [null, [10, 43], [10, 52]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 23,
                  "column": 4
                },
                "end": {
                  "line": 23,
                  "column": 62
                }
              },
              "moduleName": "frontend/templates/confirmation.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Okay");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 2
              },
              "end": {
                "line": 24,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/confirmation.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "btn btn-primary btn-flat"], 0, null, ["loc", [null, [23, 4], [23, 83]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/confirmation.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "id", "fb-root");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("script");
          var el2 = dom.createTextNode("(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = \"//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=1441812812795175\";\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'facebook-jssdk'));");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [7, 2], [20, 20]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [22, 2], [24, 22]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/confirmation.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 20], [1, 29]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 38], [1, 44]]]]], [], []], "configName", "bs", "id", "confirmationModal"], 0, null, ["loc", [null, [1, 0], [35, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/confirmed", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/confirmed.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/dashboard/courses/-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 45,
              "column": 2
            },
            "end": {
              "line": 45,
              "column": 109
            }
          },
          "moduleName": "frontend/templates/dashboard/courses/-form.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("small");
          dom.setAttribute(el1, "class", "text-red");
          dom.setAttribute(el1, "style", "margin-left: 10px;");
          var el2 = dom.createTextNode("(Weights must add up to 100%)");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 2
            },
            "end": {
              "line": 48,
              "column": 2
            }
          },
          "moduleName": "frontend/templates/dashboard/courses/-form.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "weight-row", [], ["weight", ["subexpr", "@mut", [["get", "weight", ["loc", [null, [47, 24], [47, 30]]]]], [], []], "parent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [47, 38], [47, 42]]]]], [], []]], ["loc", [null, [47, 4], [47, 44]]]]],
        locals: ["weight"],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 2
            },
            "end": {
              "line": 50,
              "column": 2
            }
          },
          "moduleName": "frontend/templates/dashboard/courses/-form.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "text-muted");
          var el2 = dom.createTextNode(" No weights. ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 52,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/courses/-form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "subject");
        var el5 = dom.createTextNode("Subject");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "number");
        var el5 = dom.createTextNode("Number");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "creditHours");
        var el5 = dom.createTextNode("Credit Hours");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "semester");
        var el3 = dom.createTextNode("Semester");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "gradingScale");
        var el3 = dom.createTextNode("Grading Scale");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "label bg-green pull-right");
        dom.setAttribute(el2, "id", "add-weight");
        var el3 = dom.createElement("small");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Add Weight");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "weights");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode(" Weights ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(fragment, [6]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [2]), 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [4]), 3, 3);
        morphs[5] = dom.createElementMorph(element2);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [0]), 0, 0);
        morphs[7] = dom.createMorphAt(element1, 5, 5);
        morphs[8] = dom.createMorphAt(element1, 7, 7);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.subject", ["loc", [null, [5, 20], [5, 33]]]]], [], []], "class", "form-control", "id", "subject", "required", "true", "placeholder", "Enter subject name"], ["loc", [null, [5, 6], [5, 118]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.number", ["loc", [null, [9, 20], [9, 32]]]]], [], []], "class", "form-control", "id", "subjectNumber", "required", "true", "type", "number", "placeholder", "Enter subject number"], ["loc", [null, [9, 6], [9, 140]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.creditHours", ["loc", [null, [13, 20], [13, 37]]]]], [], []], "class", "form-control", "id", "creditHours", "required", "true", "type", "number", "placeholder", "Enter credit hours"], ["loc", [null, [13, 6], [13, 140]]]], ["inline", "view", ["select"], ["content", ["subexpr", "@mut", [["get", "semesterNames", ["loc", [null, [20, 13], [20, 26]]]]], [], []], "value", ["subexpr", "@mut", [["get", "model.semester", ["loc", [null, [21, 11], [21, 25]]]]], [], []], "class", "form-control", "id", "semester", "prompt", "Please select a semester", "required", "true"], ["loc", [null, [19, 2], [26, 4]]]], ["inline", "view", ["select"], ["content", ["subexpr", "@mut", [["get", "scales", ["loc", [null, [31, 13], [31, 19]]]]], [], []], "value", ["subexpr", "@mut", [["get", "model.gradingScale", ["loc", [null, [32, 11], [32, 29]]]]], [], []], "class", "form-control", "id", "grading-scale", "prompt", "Please select a grading scale", "required", "true"], ["loc", [null, [30, 2], [37, 4]]]], ["element", "action", ["addWeight"], [], ["loc", [null, [41, 55], [41, 77]]]], ["inline", "fa-icon", ["plus"], [], ["loc", [null, [41, 85], [41, 103]]]], ["block", "if", [["get", "isntValid", ["loc", [null, [45, 8], [45, 17]]]]], [], 0, null, ["loc", [null, [45, 2], [45, 116]]]], ["block", "each", [["get", "weights", ["loc", [null, [46, 20], [46, 27]]]]], [], 1, 2, ["loc", [null, [46, 2], [50, 11]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("frontend/templates/dashboard/courses/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/dashboard/courses/edit.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/edit.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createTextNode("Edit Course");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 11,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/edit.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "box-body");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["inline", "partial", ["dashboard/courses/form"], [], ["loc", [null, [9, 6], [9, 42]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 0
              },
              "end": {
                "line": 14,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/edit.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "btn btn-primary btn-flat");
            dom.setAttribute(el1, "id", "editCourse");
            var el2 = dom.createTextNode("Save");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'disabled');
            return morphs;
          },
          statements: [["attribute", "disabled", ["get", "isntValid", ["loc", [null, [13, 94], [13, 103]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/courses/edit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [7, 0], [11, 18]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [12, 0], [14, 20]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/courses/edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal-form", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 25], [1, 34]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 43], [1, 49]]]]], [], []], "configName", "bs", "id", "editCourseModal", "on-submit", "editCourse"], 0, null, ["loc", [null, [1, 0], [16, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/dashboard/courses/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/dashboard/courses/new.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/new.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createTextNode("New Course");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/new.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "box-body");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["inline", "partial", ["dashboard/courses/form"], [], ["loc", [null, [9, 8], [9, 44]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 2
              },
              "end": {
                "line": 14,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/new.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "btn btn-primary btn-flat");
            dom.setAttribute(el1, "id", "createCourse");
            var el2 = dom.createTextNode("New");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'disabled');
            return morphs;
          },
          statements: [["attribute", "disabled", ["get", "isntValid", ["loc", [null, [13, 98], [13, 107]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/courses/new.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [7, 2], [11, 20]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [12, 2], [14, 22]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/courses/new.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal-form", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 25], [1, 34]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 43], [1, 49]]]]], [], []], "configName", "bs", "id", "newCourseModal", "on-submit", "createCourse"], 0, null, ["loc", [null, [1, 0], [15, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/dashboard/courses/show", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/dashboard/courses/show.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/show.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("small");
            dom.setAttribute(el2, "class", "btn-sm btn-default");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element5 = dom.childAt(fragment, [3]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(element5, 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(element5, [2]), 0, 0);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]], ["content", "model.name", ["loc", [null, [4, 28], [4, 42]]]], ["content", "model.semester", ["loc", [null, [4, 77], [4, 95]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 41,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/show.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "box-body");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "row");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "col-sm-12");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "info-box bg-green");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "info-box-icon");
            var el6 = dom.createComment("");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "info-box-content");
            var el6 = dom.createTextNode("\n              ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("div");
            dom.setAttribute(el6, "class", "col-sm-4");
            var el7 = dom.createTextNode("\n                ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("span");
            dom.setAttribute(el7, "class", "info-box-text");
            var el8 = dom.createTextNode("Current Grade");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("span");
            dom.setAttribute(el7, "class", "info-box-number");
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            var el8 = dom.createTextNode(" (");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            var el8 = dom.createTextNode(" %)");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n              ");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n              ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("div");
            dom.setAttribute(el6, "class", "col-sm-4");
            var el7 = dom.createTextNode("\n                ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("span");
            dom.setAttribute(el7, "class", "info-box-text");
            var el8 = dom.createTextNode("Credit Hours");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("span");
            dom.setAttribute(el7, "class", "info-box-number");
            var el8 = dom.createElement("small");
            dom.appendChild(el7, el8);
            var el8 = dom.createTextNode(" ");
            dom.appendChild(el7, el8);
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n              ");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n              ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("div");
            dom.setAttribute(el6, "class", "col-sm-4");
            dom.setAttribute(el6, "style", "margin-bottom:20px;");
            var el7 = dom.createTextNode("\n                ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("span");
            dom.setAttribute(el7, "class", "info-box-text");
            var el8 = dom.createTextNode("Grading Scale");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n                ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("span");
            dom.setAttribute(el7, "class", "info-box-number");
            var el8 = dom.createComment("");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n              ");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n              ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("div");
            dom.setAttribute(el6, "class", "col-sm-12");
            var el7 = dom.createTextNode("\n                ");
            dom.appendChild(el6, el7);
            var el7 = dom.createElement("div");
            dom.setAttribute(el7, "class", "progress");
            var el8 = dom.createTextNode("\n                  ");
            dom.appendChild(el7, el8);
            var el8 = dom.createElement("div");
            dom.setAttribute(el8, "class", "progress-bar");
            dom.appendChild(el7, el8);
            var el8 = dom.createTextNode("\n                ");
            dom.appendChild(el7, el8);
            dom.appendChild(el6, el7);
            var el7 = dom.createTextNode("\n              ");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n            ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "col-sm-12 text-center");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1, 1, 1]);
            var element2 = dom.childAt(element1, [3]);
            var element3 = dom.childAt(element2, [1, 3]);
            var element4 = dom.childAt(element2, [7, 1, 1]);
            var morphs = new Array(7);
            morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
            morphs[1] = dom.createMorphAt(element3, 0, 0);
            morphs[2] = dom.createMorphAt(element3, 2, 2);
            morphs[3] = dom.createMorphAt(dom.childAt(element2, [3, 3]), 2, 2);
            morphs[4] = dom.createMorphAt(dom.childAt(element2, [5, 3]), 0, 0);
            morphs[5] = dom.createAttrMorph(element4, 'style');
            morphs[6] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["bar-chart"], [], ["loc", [null, [12, 40], [12, 63]]]], ["content", "model.letterGrade", ["loc", [null, [16, 46], [16, 67]]]], ["content", "model.currentGrade", ["loc", [null, [16, 69], [16, 91]]]], ["content", "model.creditHours", ["loc", [null, [20, 62], [20, 83]]]], ["content", "model.gradingScale", ["loc", [null, [24, 46], [24, 68]]]], ["attribute", "style", ["concat", ["width: ", ["get", "model.currentGrade", ["loc", [null, [28, 60], [28, 78]]]], "%"]]], ["inline", "c3-chart", [], ["data", ["subexpr", "@mut", [["get", "chartData", ["loc", [null, [36, 24], [36, 33]]]]], [], []], "donut", ["subexpr", "@mut", [["get", "donut", ["loc", [null, [36, 40], [36, 45]]]]], [], []], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [36, 51], [36, 55]]]]], [], []]], ["loc", [null, [36, 8], [36, 57]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 44,
                  "column": 2
                },
                "end": {
                  "line": 44,
                  "column": 61
                }
              },
              "moduleName": "frontend/templates/dashboard/courses/show.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Close");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 0
              },
              "end": {
                "line": 45,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/courses/show.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "btn btn-primary btn-flat"], 0, null, ["loc", [null, [44, 2], [44, 82]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 47,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/courses/show.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [7, 0], [41, 18]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [43, 0], [45, 20]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 48,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/courses/show.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 20], [1, 29]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 38], [1, 44]]]]], [], []], "configName", "bs", "id", "showCourseModal"], 0, null, ["loc", [null, [1, 0], [47, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/dashboard/courses", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 6
            },
            "end": {
              "line": 7,
              "column": 6
            }
          },
          "moduleName": "frontend/templates/dashboard/courses.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        New Course\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 20
              },
              "end": {
                "line": 39,
                "column": 20
              }
            },
            "moduleName": "frontend/templates/dashboard/courses.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "course.name", ["loc", [null, [38, 22], [38, 37]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 60,
                "column": 20
              },
              "end": {
                "line": 62,
                "column": 20
              }
            },
            "moduleName": "frontend/templates/dashboard/courses.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["edit"], [], ["loc", [null, [61, 22], [61, 40]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 63,
                "column": 20
              },
              "end": {
                "line": 67,
                "column": 20
              }
            },
            "moduleName": "frontend/templates/dashboard/courses.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("small");
            dom.setAttribute(el2, "class", "text-red");
            var el3 = dom.createElement("b");
            var el4 = dom.createTextNode("This will delete all grades associated with ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode(".");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1, 0]), 1, 1);
            return morphs;
          },
          statements: [["content", "course.name", ["loc", [null, [65, 95], [65, 110]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 14
            },
            "end": {
              "line": 70,
              "column": 16
            }
          },
          "moduleName": "frontend/templates/dashboard/courses.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("small");
          var el4 = dom.createTextNode("%");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "label-group");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [15]);
          var morphs = new Array(9);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
          morphs[5] = dom.createMorphAt(dom.childAt(element0, [11]), 1, 1);
          morphs[6] = dom.createMorphAt(dom.childAt(element0, [13]), 1, 1);
          morphs[7] = dom.createMorphAt(element1, 1, 1);
          morphs[8] = dom.createMorphAt(element1, 2, 2);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.courses.show", ["get", "course", ["loc", [null, [37, 56], [37, 62]]]]], [], 0, null, ["loc", [null, [37, 20], [39, 32]]]], ["content", "course.creditHours", ["loc", [null, [42, 20], [42, 42]]]], ["content", "course.currentGrade", ["loc", [null, [45, 20], [45, 43]]]], ["content", "course.letterGrade", ["loc", [null, [48, 20], [48, 42]]]], ["content", "course.gradingScale", ["loc", [null, [51, 20], [51, 43]]]], ["content", "course.semester", ["loc", [null, [54, 20], [54, 39]]]], ["content", "course.weights.length", ["loc", [null, [57, 20], [57, 45]]]], ["block", "link-to", ["dashboard.courses.edit", ["get", "course", ["loc", [null, [60, 56], [60, 62]]]]], ["class", "btn btn-default btn-flat btn-xs edit-btn", "title", "Edit"], 1, null, ["loc", [null, [60, 20], [62, 32]]]], ["block", "bs-popover", [], ["title", "Are you sure?", "icon", "trash", "class", "btn btn-danger btn-flat btn-xs", "action", "deleteCourse", "model", ["subexpr", "@mut", [["get", "course", ["loc", [null, [63, 136], [63, 142]]]]], [], []]], 2, null, ["loc", [null, [63, 20], [67, 35]]]]],
        locals: ["course"],
        templates: [child0, child1, child2]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 70,
              "column": 16
            },
            "end": {
              "line": 76,
              "column": 16
            }
          },
          "moduleName": "frontend/templates/dashboard/courses.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          dom.setAttribute(el1, "class", "lead");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "8");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n                      No courses.\n                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 90,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/courses.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content-wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "pull-right");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("\n      Courses\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "box box-default");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "box-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "table-responsive");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("table");
        dom.setAttribute(el6, "class", "table no-margin");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("thead");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("tr");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Name");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Credit Hours");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Current Grade");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Letter Grade");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Grading Scale");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Semester");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Weights");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Actions");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("tbody");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "box-footer clearfix");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "pull-right");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element2, [3]);
        var element5 = dom.childAt(element4, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element3, 1, 1);
        morphs[1] = dom.createMorphAt(element3, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element5, [1, 1, 1, 3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element5, [3, 1]), 0, 0);
        morphs[4] = dom.createMorphAt(element4, 3, 3);
        return morphs;
      },
      statements: [["inline", "split-button", [], ["parent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [4, 28], [4, 32]]]]], [], []], "selection", ["subexpr", "@mut", [["get", "selectedSemester", ["loc", [null, [4, 43], [4, 59]]]]], [], []], "filterContent", ["subexpr", "@mut", [["get", "uniqueSemesters", ["loc", [null, [4, 74], [4, 89]]]]], [], []], "name", "Semester"], ["loc", [null, [4, 6], [4, 107]]]], ["block", "link-to", ["dashboard.courses.new"], ["class", "btn btn-sm btn-success btn-flat", "id", "newCourse"], 0, null, ["loc", [null, [5, 6], [7, 18]]]], ["block", "each", [["get", "pagedCourseContent", ["loc", [null, [34, 22], [34, 40]]]]], [], 1, 2, ["loc", [null, [34, 14], [76, 25]]]], ["inline", "page-numbers", [], ["content", ["subexpr", "@mut", [["get", "pagedCourseContent", ["loc", [null, [82, 56], [82, 74]]]]], [], []]], ["loc", [null, [82, 33], [82, 76]]]], ["content", "outlet", ["loc", [null, [86, 4], [86, 14]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("frontend/templates/dashboard/feedback", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/dashboard/feedback.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/feedback.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createTextNode("Feedback");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/feedback.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "box-body");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "form-group");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("label");
            dom.setAttribute(el3, "for", "email");
            var el4 = dom.createTextNode("Email");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "form-group");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("label");
            dom.setAttribute(el3, "for", "body");
            var el4 = dom.createTextNode("Body");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 3, 3);
            return morphs;
          },
          statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [10, 22], [10, 33]]]]], [], []], "class", "form-control", "type", "email", "id", "email", "required", "true", "disabled", "true"], ["loc", [null, [10, 8], [10, 112]]]], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "model.body", ["loc", [null, [14, 25], [14, 35]]]]], [], []], "id", "body", "class", "form-control", "rows", "6"], ["loc", [null, [14, 8], [14, 77]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 0
              },
              "end": {
                "line": 20,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/feedback.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "btn btn-primary btn-flat");
            dom.setAttribute(el1, "id", "submitFeedback");
            var el2 = dom.createTextNode("Send");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/feedback.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [6, 2], [17, 20]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [18, 0], [20, 20]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/feedback.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal-form", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 25], [1, 34]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 43], [1, 49]]]]], [], []], "configName", "bs", "id", "feedbackModal", "on-submit", "submitFeedback"], 0, null, ["loc", [null, [1, 0], [22, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/dashboard/grades/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/dashboard/grades/edit.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/grades/edit.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createTextNode("Edit Grade");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 2
                },
                "end": {
                  "line": 10,
                  "column": 2
                }
              },
              "moduleName": "frontend/templates/dashboard/grades/edit.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      Submitting, please wait...\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 2
                },
                "end": {
                  "line": 28,
                  "column": 2
                }
              },
              "moduleName": "frontend/templates/dashboard/grades/edit.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "box-body");
              var el2 = dom.createTextNode("\n\n      ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "form-group");
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("label");
              dom.setAttribute(el3, "for", "course");
              var el4 = dom.createTextNode("Course");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n      ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n\n      ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n    ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
              morphs[1] = dom.createMorphAt(element1, 3, 3);
              return morphs;
            },
            statements: [["inline", "view", ["select"], ["content", ["subexpr", "@mut", [["get", "courses", ["loc", [null, [16, 19], [16, 26]]]]], [], []], "value", ["subexpr", "@mut", [["get", "selectedCourse", ["loc", [null, [17, 17], [17, 31]]]]], [], []], "optionValuePath", "content.id", "optionLabelPath", "content.name", "class", "form-control", "prompt", "Please select a course", "required", "true"], ["loc", [null, [15, 8], [23, 10]]]], ["inline", "grade-form", [], ["grade", ["subexpr", "@mut", [["get", "model", ["loc", [null, [26, 25], [26, 30]]]]], [], []], "gradeWeights", ["subexpr", "@mut", [["get", "gradeWeights", ["loc", [null, [26, 44], [26, 56]]]]], [], []]], ["loc", [null, [26, 6], [26, 58]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 29,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/grades/edit.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "model.async", ["loc", [null, [8, 8], [8, 19]]]]], [], 0, 1, ["loc", [null, [8, 2], [28, 9]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 30,
                "column": 0
              },
              "end": {
                "line": 32,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/grades/edit.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "btn btn-primary btn-flat");
            dom.setAttribute(el1, "id", "editGrade");
            var el2 = dom.createTextNode("Save");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'disabled');
            return morphs;
          },
          statements: [["attribute", "disabled", ["get", "async", ["loc", [null, [31, 93], [31, 98]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 34,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/grades/edit.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [7, 0], [29, 18]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [30, 0], [32, 20]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/grades/edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal-form", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 25], [1, 34]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 43], [1, 49]]]]], [], []], "configName", "bs", "id", "editGradeModal", "on-submit", "editGrade", "in-async", ["subexpr", "@mut", [["get", "async", ["loc", [null, [1, 117], [1, 122]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [34, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/dashboard/grades/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/dashboard/grades/new.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/grades/new.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createTextNode("New Grades");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 2
                },
                "end": {
                  "line": 10,
                  "column": 2
                }
              },
              "moduleName": "frontend/templates/dashboard/grades/new.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      Submitting, please wait...\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 32,
                    "column": 8
                  },
                  "end": {
                    "line": 34,
                    "column": 8
                  }
                },
                "moduleName": "frontend/templates/dashboard/grades/new.hbs"
              },
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "grade-form", [], ["parent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [33, 30], [33, 34]]]]], [], []], "grade", ["subexpr", "@mut", [["get", "grade", ["loc", [null, [33, 41], [33, 46]]]]], [], []], "gradeWeights", ["subexpr", "@mut", [["get", "gradeWeights", ["loc", [null, [33, 60], [33, 72]]]]], [], []]], ["loc", [null, [33, 10], [33, 74]]]]],
              locals: ["grade"],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 34,
                    "column": 8
                  },
                  "end": {
                    "line": 36,
                    "column": 8
                  }
                },
                "moduleName": "frontend/templates/dashboard/grades/new.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("p");
                dom.setAttribute(el1, "class", "text-muted");
                var el2 = dom.createTextNode(" No grades. ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 10,
                  "column": 2
                },
                "end": {
                  "line": 39,
                  "column": 2
                }
              },
              "moduleName": "frontend/templates/dashboard/grades/new.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "box-body");
              var el2 = dom.createTextNode("\n\n      ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "form-group");
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("label");
              dom.setAttribute(el3, "for", "course");
              var el4 = dom.createTextNode("Course");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n      ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n\n      ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "form-group");
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3, "id", "add-grade");
              var el4 = dom.createElement("small");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode(" Add Grade");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("label");
              dom.setAttribute(el3, "for", "grades");
              var el4 = dom.createTextNode("\n          Grades\n        ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("      ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n    ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [1]);
              var element2 = dom.childAt(element1, [3]);
              var element3 = dom.childAt(element2, [1]);
              var morphs = new Array(5);
              morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
              morphs[1] = dom.createAttrMorph(element3, 'class');
              morphs[2] = dom.createElementMorph(element3);
              morphs[3] = dom.createMorphAt(dom.childAt(element3, [0]), 0, 0);
              morphs[4] = dom.createMorphAt(element2, 5, 5);
              return morphs;
            },
            statements: [["inline", "view", ["select"], ["content", ["subexpr", "@mut", [["get", "courses", ["loc", [null, [16, 19], [16, 26]]]]], [], []], "selection", ["subexpr", "@mut", [["get", "selectedCourse", ["loc", [null, [17, 21], [17, 35]]]]], [], []], "optionValuePath", "content.id", "optionLabelPath", "content.name", "class", "form-control", "id", "select-course", "prompt", "Please select a course", "required", "true"], ["loc", [null, [15, 8], [24, 10]]]], ["attribute", "class", ["concat", ["label", " ", "bg-green", " ", "pull-right", " ", ["subexpr", "if", [["get", "selectedCourse", []], "", "hide"], [], []]]]], ["element", "action", ["addGrade"], [], ["loc", [null, [28, 83], [28, 104]]]], ["inline", "fa-icon", ["plus"], [], ["loc", [null, [28, 127], [28, 145]]]], ["block", "each", [["get", "grades", ["loc", [null, [32, 25], [32, 31]]]]], [], 0, 1, ["loc", [null, [32, 8], [36, 17]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 40,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/grades/new.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "model.async", ["loc", [null, [8, 8], [8, 19]]]]], [], 0, 1, ["loc", [null, [8, 2], [39, 9]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 41,
                "column": 0
              },
              "end": {
                "line": 43,
                "column": 0
              }
            },
            "moduleName": "frontend/templates/dashboard/grades/new.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "btn btn-primary btn-flat");
            dom.setAttribute(el1, "id", "createGrade");
            var el2 = dom.createTextNode("New");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'disabled');
            return morphs;
          },
          statements: [["attribute", "disabled", ["get", "noGrades", ["loc", [null, [42, 95], [42, 103]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 45,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/grades/new.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [7, 0], [40, 18]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [41, 0], [43, 20]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/grades/new.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal-form", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 25], [1, 34]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 43], [1, 49]]]]], [], []], "configName", "bs", "id", "newGradeModal", "on-submit", "createGrades", "in-async", ["subexpr", "@mut", [["get", "async", ["loc", [null, [1, 119], [1, 124]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [45, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/dashboard/grades", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 6
            },
            "end": {
              "line": 8,
              "column": 6
            }
          },
          "moduleName": "frontend/templates/dashboard/grades.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        New Grade\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 14
            },
            "end": {
              "line": 36,
              "column": 14
            }
          },
          "moduleName": "frontend/templates/dashboard/grades.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "grade-row", [], ["parent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [35, 35], [35, 39]]]]], [], []], "grade", ["subexpr", "@mut", [["get", "grade", ["loc", [null, [35, 46], [35, 51]]]]], [], []]], ["loc", [null, [35, 16], [35, 53]]]]],
        locals: ["grade"],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 14
            },
            "end": {
              "line": 42,
              "column": 14
            }
          },
          "moduleName": "frontend/templates/dashboard/grades.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          dom.setAttribute(el1, "class", "lead");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "7");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n                    No grades.\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 56,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/grades.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content-wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "pull-right");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("\n      Grades\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "box box-default");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "box-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "table-responsive");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("table");
        dom.setAttribute(el6, "class", "table no-margin");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("thead");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("tr");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Name");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Class");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Semester");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Score");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Weighted Percentage");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Weight");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("th");
        var el10 = dom.createTextNode("Actions");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("tbody");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "box-footer clearfix");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "pull-right");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createMorphAt(element1, 5, 5);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [1, 1, 1, 3]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element3, [3, 1]), 0, 0);
        morphs[5] = dom.createMorphAt(element2, 3, 3);
        return morphs;
      },
      statements: [["inline", "split-button", [], ["parent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [4, 28], [4, 32]]]]], [], []], "selection", ["subexpr", "@mut", [["get", "selectedSemester", ["loc", [null, [4, 43], [4, 59]]]]], [], []], "filterContent", ["subexpr", "@mut", [["get", "uniqueSemesters", ["loc", [null, [4, 74], [4, 89]]]]], [], []], "name", "Semester"], ["loc", [null, [4, 6], [4, 107]]]], ["inline", "split-button", [], ["parent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [5, 28], [5, 32]]]]], [], []], "selection", ["subexpr", "@mut", [["get", "selectedCourse", ["loc", [null, [5, 43], [5, 57]]]]], [], []], "filterContent", ["subexpr", "@mut", [["get", "uniqueNames", ["loc", [null, [5, 72], [5, 83]]]]], [], []], "name", "Course"], ["loc", [null, [5, 6], [5, 99]]]], ["block", "link-to", ["dashboard.grades.new"], ["class", "btn btn-sm btn-success btn-flat", "id", "newGrade"], 0, null, ["loc", [null, [6, 6], [8, 18]]]], ["block", "each", [["get", "pagedGradeContent", ["loc", [null, [34, 22], [34, 39]]]]], [], 1, 2, ["loc", [null, [34, 14], [42, 23]]]], ["inline", "page-numbers", [], ["content", ["subexpr", "@mut", [["get", "pagedGradeContent", ["loc", [null, [48, 56], [48, 73]]]]], [], []]], ["loc", [null, [48, 33], [48, 75]]]], ["content", "outlet", ["loc", [null, [52, 4], [52, 14]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("frontend/templates/dashboard/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 10
            },
            "end": {
              "line": 22,
              "column": 10
            }
          },
          "moduleName": "frontend/templates/dashboard/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            View all ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "fa-icon", ["arrow-circle-right"], [], ["loc", [null, [21, 21], [21, 53]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 10
            },
            "end": {
              "line": 36,
              "column": 10
            }
          },
          "moduleName": "frontend/templates/dashboard/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            View all ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "fa-icon", ["arrow-circle-right"], [], ["loc", [null, [35, 21], [35, 53]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 85,
              "column": 18
            },
            "end": {
              "line": 87,
              "column": 18
            }
          },
          "moduleName": "frontend/templates/dashboard/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "grade-row", [], ["grade", ["subexpr", "@mut", [["get", "grade", ["loc", [null, [86, 38], [86, 43]]]]], [], []], "hideActions", true], ["loc", [null, [86, 20], [86, 62]]]]],
        locals: ["grade"],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 87,
              "column": 18
            },
            "end": {
              "line": 93,
              "column": 18
            }
          },
          "moduleName": "frontend/templates/dashboard/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          dom.setAttribute(el1, "class", "lead");
          var el2 = dom.createTextNode("\n                      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "6");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n                        No grades.\n                      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 99,
              "column": 12
            },
            "end": {
              "line": 101,
              "column": 12
            }
          },
          "moduleName": "frontend/templates/dashboard/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              View All Grades\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 125,
              "column": 18
            },
            "end": {
              "line": 146,
              "column": 20
            }
          },
          "moduleName": "frontend/templates/dashboard/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n                      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("small");
          var el4 = dom.createTextNode("%");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
          morphs[5] = dom.createMorphAt(dom.childAt(element0, [11]), 1, 1);
          return morphs;
        },
        statements: [["content", "course.name", ["loc", [null, [128, 24], [128, 39]]]], ["content", "course.creditHours", ["loc", [null, [131, 24], [131, 46]]]], ["content", "course.currentGrade", ["loc", [null, [134, 24], [134, 47]]]], ["content", "course.letterGrade", ["loc", [null, [137, 24], [137, 46]]]], ["content", "course.gradingScale", ["loc", [null, [140, 24], [140, 47]]]], ["content", "course.semester", ["loc", [null, [143, 24], [143, 43]]]]],
        locals: ["course"],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 146,
              "column": 20
            },
            "end": {
              "line": 152,
              "column": 20
            }
          },
          "moduleName": "frontend/templates/dashboard/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          dom.setAttribute(el1, "class", "lead");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "6");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n                          No courses.\n                        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 158,
              "column": 12
            },
            "end": {
              "line": 160,
              "column": 12
            }
          },
          "moduleName": "frontend/templates/dashboard/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              View All Courses\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 169,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content-wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("\n      Dashboard\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("small");
        var el5 = dom.createTextNode("Version 1.0");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-3 col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "small-box bg-aqua");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "inner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "id", "course-count");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "icon");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "ion ion-university");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-3 col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "small-box bg-yellow");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "inner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "id", "grade-count");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "icon");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "ion ion-document");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-3 col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "small-box bg-green");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "inner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "id", "semester-gpa");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Semester GPA");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "icon");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "ion ion-pie-graph");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-3 col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "small-box bg-red");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "inner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "id", "cumulative-gpa");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("Cumulative GPA");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "icon");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "ion ion-stats-bars");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-6 col-md-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "box box-default");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-header with-border");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "class", "box-title");
        var el8 = dom.createTextNode("Latest Grades");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-body equal-height");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "table-responsive table-condensed");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("table");
        dom.setAttribute(el8, "class", "table no-margin");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("thead");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Name");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Course");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Semester");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Score");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Weighted Percentage");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Weight");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("tbody");
        var el10 = dom.createTextNode("\n");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-footer clearfix");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-lg-6 col-md-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "box box-default");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-header with-border");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "class", "box-title");
        var el8 = dom.createTextNode("Latest Courses");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-body equal-height");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "table-responsive table-condensed");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("table");
        dom.setAttribute(el8, "class", "table no-margin");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("thead");
        var el10 = dom.createTextNode("\n                  ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("tr");
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Name");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Credit Hours");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Current Grade");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Letter Grade");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Grading Scale");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                    ");
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("th");
        var el12 = dom.createTextNode("Semester");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createTextNode("\n                  ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("tbody");
        var el10 = dom.createTextNode("\n");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("                ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-footer clearfix");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 3]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element2, [3, 1]);
        var element6 = dom.childAt(element5, [1]);
        var element7 = dom.childAt(element1, [3]);
        var element8 = dom.childAt(element7, [1, 1]);
        var element9 = dom.childAt(element7, [3, 1]);
        var morphs = new Array(12);
        morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(element3, 5, 5);
        morphs[3] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element6, [3]), 0, 0);
        morphs[5] = dom.createMorphAt(element5, 5, 5);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [5, 1, 1, 1]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(element2, [7, 1, 1, 1]), 0, 0);
        morphs[8] = dom.createMorphAt(dom.childAt(element8, [3, 1, 1, 3]), 1, 1);
        morphs[9] = dom.createMorphAt(dom.childAt(element8, [5]), 1, 1);
        morphs[10] = dom.createMorphAt(dom.childAt(element9, [3, 1, 1, 3]), 1, 1);
        morphs[11] = dom.createMorphAt(dom.childAt(element9, [5]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.courseCount", ["loc", [null, [14, 34], [14, 55]]]], ["inline", "h-pluralize", [["get", "model.courseCount", ["loc", [null, [15, 29], [15, 46]]]], "Course"], ["omitCount", true], ["loc", [null, [15, 15], [15, 72]]]], ["block", "link-to", ["dashboard.courses"], ["class", "small-box-footer hidden-md hidden-lg"], 0, null, ["loc", [null, [20, 10], [22, 22]]]], ["content", "model.gradeCount", ["loc", [null, [28, 33], [28, 53]]]], ["inline", "h-pluralize", [["get", "grades.length", ["loc", [null, [29, 29], [29, 42]]]], "Grade"], ["omitCount", true], ["loc", [null, [29, 15], [29, 67]]]], ["block", "link-to", ["dashboard.grades"], ["class", "small-box-footer hidden-md hidden-lg"], 1, null, ["loc", [null, [34, 10], [36, 22]]]], ["content", "model.semesterGpa", ["loc", [null, [43, 34], [43, 55]]]], ["content", "model.cumulativeGpa", ["loc", [null, [54, 36], [54, 59]]]], ["block", "each", [["get", "grades", ["loc", [null, [85, 26], [85, 32]]]]], [], 2, 3, ["loc", [null, [85, 18], [93, 27]]]], ["block", "link-to", ["dashboard.grades"], ["class", "btn btn-sm btn-default btn-flat pull-right", "id", "allGrades"], 4, null, ["loc", [null, [99, 12], [101, 24]]]], ["block", "each", [["get", "courses", ["loc", [null, [125, 26], [125, 33]]]]], [], 5, 6, ["loc", [null, [125, 18], [152, 29]]]], ["block", "link-to", ["dashboard.courses"], ["class", "btn btn-sm btn-default btn-flat pull-right", "id", "allCourses"], 7, null, ["loc", [null, [158, 12], [160, 24]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7]
    };
  })());
});
define("frontend/templates/dashboard/profile/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 8
              },
              "end": {
                "line": 24,
                "column": 8
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("\n            This is a measurement that helps us calculate your current\n            GPA. This number can be found in your university portal or\n            on your unofficial/official transcript.\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 8
              },
              "end": {
                "line": 35,
                "column": 8
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            var el2 = dom.createTextNode("\n            This is a measurement that helps us calculate your current\n            GPA. This number is your total units taken at your university.\n            This can be found in your university portal or on your unofficial/official transcript.\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 40,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "form-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "col-xs-6");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "gradePoints");
          var el5 = dom.createTextNode("Grade Points");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "col-xs-6");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "gradeUnits");
          var el5 = dom.createTextNode("Grade Units");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element1, 3, 3);
          morphs[1] = dom.createMorphAt(element1, 5, 5);
          morphs[2] = dom.createMorphAt(element2, 3, 3);
          morphs[3] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["block", "bs-popover", [], ["title", "Grade Points", "icon", "info-circle", "tagName", "span", "placement", "top"], 0, null, ["loc", [null, [18, 8], [24, 23]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.gradePoints", ["loc", [null, [25, 22], [25, 39]]]]], [], []], "class", "form-control", "id", "gradePoints", "placeholder", "Enter grade points"], ["loc", [null, [25, 8], [25, 112]]]], ["block", "bs-popover", [], ["title", "Grade Units", "icon", "info-circle", "tagName", "span", "placement", "top"], 1, null, ["loc", [null, [29, 8], [35, 23]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.gradeUnits", ["loc", [null, [36, 22], [36, 38]]]]], [], []], "class", "form-control", "id", "gradeUnits", "placeholder", "Enter grade units"], ["loc", [null, [36, 8], [36, 109]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 0
            },
            "end": {
              "line": 45,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "form-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "for", "organization");
          var el3 = dom.createTextNode("Organization");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
          return morphs;
        },
        statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.organization", ["loc", [null, [43, 18], [43, 36]]]]], [], []], "class", "form-control", "id", "organization", "placeholder", "Enter organization name"], ["loc", [null, [43, 4], [43, 115]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 66,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/profile/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "firstName");
        var el5 = dom.createTextNode("First Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "for", "lastName");
        var el5 = dom.createTextNode("Last Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "semester");
        var el3 = dom.createTextNode("Active Semester");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "email");
        var el3 = dom.createTextNode("Email address");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group pull-right");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "submit");
        dom.setAttribute(el2, "class", "btn btn-default btn-flat");
        dom.setAttribute(el2, "id", "cancelUser");
        var el3 = dom.createTextNode("Cancel");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "submit");
        dom.setAttribute(el2, "class", "btn btn-primary btn-flat");
        dom.setAttribute(el2, "id", "editUser");
        var el3 = dom.createTextNode("Save");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0, 1]);
        var element4 = dom.childAt(fragment, [7]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element4, [3]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [3]), 3, 3);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [5]), 3, 3);
        morphs[5] = dom.createElementMorph(element5);
        morphs[6] = dom.createElementMorph(element6);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.firstName", ["loc", [null, [5, 20], [5, 35]]]]], [], []], "class", "form-control", "id", "firstName", "placeholder", "Enter first name"], ["loc", [null, [5, 6], [5, 104]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.lastName", ["loc", [null, [9, 20], [9, 34]]]]], [], []], "class", "form-control", "id", "lastName", "placeholder", "Enter last name"], ["loc", [null, [9, 6], [9, 101]]]], ["block", "if", [["get", "session.currentUser.isStudent", ["loc", [null, [13, 6], [13, 35]]]]], [], 0, 1, ["loc", [null, [13, 0], [45, 7]]]], ["inline", "view", ["select"], ["content", ["subexpr", "@mut", [["get", "semesterNames", ["loc", [null, [49, 13], [49, 26]]]]], [], []], "value", ["subexpr", "@mut", [["get", "model.activeSemester", ["loc", [null, [50, 11], [50, 31]]]]], [], []], "class", "form-control", "id", "activeSemester", "prompt", "Please select a semester", "required", "true"], ["loc", [null, [48, 2], [55, 4]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [59, 16], [59, 27]]]]], [], []], "type", "email", "class", "form-control", "id", "email", "placeholder", "Enter email"], ["loc", [null, [59, 2], [59, 100]]]], ["element", "action", ["rollbackUser"], [], ["loc", [null, [63, 73], [63, 98]]]], ["element", "action", ["saveUser"], [], ["loc", [null, [64, 71], [64, 92]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/dashboard/profile/organizations/join", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/dashboard/profile/organizations/join.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/organizations/join.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createTextNode("Join Organization");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 14,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/organizations/join.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "box-body");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "form-group");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("label");
            dom.setAttribute(el3, "for", "code");
            var el4 = dom.createTextNode("Invite Code");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 3, 3);
            return morphs;
          },
          statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "code", ["loc", [null, [11, 22], [11, 26]]]]], [], []], "class", "form-control", "id", "code", "placeholder", "Enter invite code"], ["loc", [null, [11, 8], [11, 91]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 2
              },
              "end": {
                "line": 18,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/organizations/join.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "btn btn-primary btn-flat");
            dom.setAttribute(el1, "id", "join");
            var el2 = dom.createTextNode("Join");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/organizations/join.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [7, 2], [14, 20]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [16, 2], [18, 22]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/profile/organizations/join.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal-form", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 25], [1, 34]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 43], [1, 49]]]]], [], []], "configName", "bs", "id", "joinOrganizationModal", "on-submit", "joinOrganization"], 0, null, ["loc", [null, [1, 0], [20, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/dashboard/profile/organizations", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 10
              },
              "end": {
                "line": 14,
                "column": 10
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/organizations.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "pull-right");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2, "type", "button");
            var el3 = dom.createTextNode("Leave");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["btn", " ", "btn-lg", " ", "btn-flat", " ", "btn-danger"]]], ["element", "action", ["leaveOrganization", ["get", "organization", ["loc", [null, [12, 62], [12, 74]]]]], [], ["loc", [null, [12, 33], [12, 76]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 10
              },
              "end": {
                "line": 19,
                "column": 10
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/organizations.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" has view only access to your profile.\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "director.organization", ["loc", [null, [18, 12], [18, 37]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 10
              },
              "end": {
                "line": 22,
                "column": 10
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/organizations.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            Organization code: ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("code");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "director.groupCode", ["loc", [null, [21, 37], [21, 59]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 26,
              "column": 2
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/organizations.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "item");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "product-img");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "product-info");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "product-title");
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "product-description");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(element1, [3]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element2, [3]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(element3, 1, 1);
          morphs[2] = dom.createMorphAt(element3, 3, 3);
          morphs[3] = dom.createMorphAt(element4, 1, 1);
          morphs[4] = dom.createMorphAt(element4, 2, 2);
          return morphs;
        },
        statements: [["inline", "gravatar-image", [], ["email", ["subexpr", "@mut", [["get", "director.email", ["loc", [null, [5, 31], [5, 45]]]]], [], []], "class", "img-circle"], ["loc", [null, [5, 8], [5, 66]]]], ["content", "director.organization", ["loc", [null, [9, 10], [9, 35]]]], ["block", "if", [["get", "session.currentUser.isStudent", ["loc", [null, [10, 16], [10, 45]]]]], [], 0, null, ["loc", [null, [10, 10], [14, 17]]]], ["block", "if", [["get", "session.currentUser.isStudent", ["loc", [null, [17, 16], [17, 45]]]]], [], 1, null, ["loc", [null, [17, 10], [19, 17]]]], ["block", "if", [["get", "session.currentUser.isOrganization", ["loc", [null, [20, 16], [20, 50]]]]], [], 2, null, ["loc", [null, [20, 10], [22, 17]]]]],
        locals: ["organization"],
        templates: [child0, child1, child2]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 2
            },
            "end": {
              "line": 32,
              "column": 2
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/organizations.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "text-center well");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          dom.setAttribute(el2, "class", "lead");
          var el3 = dom.createTextNode("\n        No joined organizations.\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 4
              },
              "end": {
                "line": 40,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/organizations.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      Join Organization\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 0
            },
            "end": {
              "line": 43,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/organizations.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "box-footer");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.profile.organizations.join"], ["class", "btn pull-right btn-success btn-flat", "id", "joinOrganization", "disabled", ["subexpr", "@mut", [["get", "inOrganization", ["loc", [null, [38, 129], [38, 143]]]]], [], []]], 0, null, ["loc", [null, [38, 4], [40, 16]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 45,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/profile/organizations.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "products-list product-list-in-box");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "uniqueOrganizations", ["loc", [null, [2, 10], [2, 29]]]]], [], 0, 1, ["loc", [null, [2, 2], [32, 11]]]], ["block", "if", [["get", "session.currentUser.isStudent", ["loc", [null, [35, 6], [35, 35]]]]], [], 2, null, ["loc", [null, [35, 0], [43, 7]]]], ["content", "outlet", ["loc", [null, [44, 0], [44, 10]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("frontend/templates/dashboard/profile/password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/profile/password.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "password");
        var el3 = dom.createTextNode("New Password");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "for", "passwordConfirmation");
        var el3 = dom.createTextNode("Confirm Password");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group pull-right");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "submit");
        dom.setAttribute(el2, "class", "btn btn-default btn-flat");
        dom.setAttribute(el2, "id", "cancelUser");
        var el3 = dom.createTextNode("Cancel");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "submit");
        dom.setAttribute(el2, "class", "btn btn-primary btn-flat");
        dom.setAttribute(el2, "id", "changePassword");
        var el3 = dom.createTextNode("Save");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 3, 3);
        morphs[2] = dom.createElementMorph(element1);
        morphs[3] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [3, 16], [3, 30]]]]], [], []], "type", "password", "class", "form-control", "id", "password"], ["loc", [null, [3, 2], [3, 83]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.password_confirmation", ["loc", [null, [7, 16], [7, 43]]]]], [], []], "type", "password", "class", "form-control", "id", "passwordConfirmation"], ["loc", [null, [7, 2], [7, 108]]]], ["element", "action", ["rollbackUser"], [], ["loc", [null, [11, 73], [11, 98]]]], ["element", "action", ["saveUser"], [], ["loc", [null, [12, 77], [12, 98]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/dashboard/profile/subscriptions/cancel", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 106
                }
              },
              "moduleName": "frontend/templates/dashboard/profile/subscriptions/cancel.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "aria-hidden", "true");
              var el2 = dom.createTextNode("×");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "sr-only");
              var el2 = dom.createTextNode("Close");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/subscriptions/cancel.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h4");
            dom.setAttribute(el1, "class", "modal-title");
            var el2 = dom.createTextNode("Are you sure you want to cancel?");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "em-modal-toggler", [], ["class", "close"], 0, null, ["loc", [null, [3, 4], [3, 127]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 16,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/subscriptions/cancel.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "box-body");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "lead");
            var el3 = dom.createTextNode("\n        You will no longer be charged after cancellation takes effect.");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        If you changed subscription plans during current month then you will be charged prorated cost on your next bill period.");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        There will be no refund on current month's service.");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        Your service will stay active until end of subscription.\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 2
              },
              "end": {
                "line": 21,
                "column": 2
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/subscriptions/cancel.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "btn btn-default btn-flat");
            dom.setAttribute(el1, "id", "yes");
            var el2 = dom.createTextNode("No");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "submit");
            dom.setAttribute(el1, "class", "btn btn-danger btn-flat");
            dom.setAttribute(el1, "id", "no");
            var el2 = dom.createTextNode("Yes");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["no"], [], ["loc", [null, [19, 54], [19, 69]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 23,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/subscriptions/cancel.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "em-modal-title", [], [], 0, null, ["loc", [null, [2, 2], [5, 21]]]], ["block", "em-modal-body", [], [], 1, null, ["loc", [null, [7, 2], [16, 20]]]], ["block", "em-modal-footer", [], [], 2, null, ["loc", [null, [18, 2], [21, 22]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/profile/subscriptions/cancel.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "em-modal-form", [], ["open-if", ["subexpr", "@mut", [["get", "openModal", ["loc", [null, [1, 25], [1, 34]]]]], [], []], "is-open", ["subexpr", "@mut", [["get", "isOpen", ["loc", [null, [1, 43], [1, 49]]]]], [], []], "configName", "bs", "id", "cancelSubscriptionModal", "on-submit", "yes"], 0, null, ["loc", [null, [1, 0], [23, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/dashboard/profile/subscriptions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 67,
              "column": 4
            },
            "end": {
              "line": 82,
              "column": 4
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/subscriptions.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "lead text-center");
          var el2 = dom.createTextNode("\n        Your canceled subscription is active until ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(".\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "format-date", [["get", "session.currentUser.activeUntil", ["loc", [null, [69, 68], [69, 99]]]], "LL"], [], ["loc", [null, [69, 54], [69, 106]]]], ["inline", "stripe-checkout", [], ["class", "btn btn-lg btn-success btn-flat", "image", ["subexpr", "@mut", [["get", "logo", ["loc", [null, [73, 14], [73, 18]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [74, 13], [74, 17]]]]], [], []], "description", ["subexpr", "@mut", [["get", "plan.name", ["loc", [null, [75, 20], [75, 29]]]]], [], []], "amount", ["subexpr", "@mut", [["get", "plan.to_cents", ["loc", [null, [76, 15], [76, 28]]]]], [], []], "label", "Change subscription", "panelLabel", "Subscribe for {{amount}}/mo", "isDisabled", ["subexpr", "@mut", [["get", "noPlan", ["loc", [null, [79, 19], [79, 25]]]]], [], []], "action", "processStripeToken"], ["loc", [null, [71, 6], [81, 8]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 83,
                "column": 6
              },
              "end": {
                "line": 95,
                "column": 6
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/subscriptions.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "stripe-checkout", [], ["class", "btn btn-lg btn-success btn-flat", "image", ["subexpr", "@mut", [["get", "logo", ["loc", [null, [86, 16], [86, 20]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [87, 15], [87, 19]]]]], [], []], "description", ["subexpr", "@mut", [["get", "plan.name", ["loc", [null, [88, 22], [88, 31]]]]], [], []], "amount", ["subexpr", "@mut", [["get", "plan.to_cents", ["loc", [null, [89, 17], [89, 30]]]]], [], []], "label", "Subscribe now", "panelLabel", "Subscribe for {{amount}}/mo", "isDisabled", ["subexpr", "@mut", [["get", "noPlan", ["loc", [null, [92, 21], [92, 27]]]]], [], []], "action", "processStripeToken"], ["loc", [null, [84, 8], [94, 10]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 99,
                  "column": 8
                },
                "end": {
                  "line": 101,
                  "column": 8
                }
              },
              "moduleName": "frontend/templates/dashboard/profile/subscriptions.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          Cancel Subscription\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 95,
                "column": 6
              },
              "end": {
                "line": 113,
                "column": 6
              }
            },
            "moduleName": "frontend/templates/dashboard/profile/subscriptions.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("p");
            dom.setAttribute(el1, "class", "lead text-center");
            var el2 = dom.createTextNode("\n          Your next payment is due on ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("b");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(".\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["inline", "format-date", [["get", "session.currentUser.activeUntil", ["loc", [null, [97, 55], [97, 86]]]], "LL"], [], ["loc", [null, [97, 41], [97, 93]]]], ["block", "link-to", ["dashboard.profile.subscriptions.cancel"], ["class", "btn btn-lg btn-danger btn-flat", "id", "cancelSubscription"], 0, null, ["loc", [null, [99, 8], [101, 20]]]], ["inline", "stripe-checkout", [], ["class", "btn btn-lg btn-success btn-flat", "image", ["subexpr", "@mut", [["get", "logo", ["loc", [null, [104, 16], [104, 20]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [105, 15], [105, 19]]]]], [], []], "description", ["subexpr", "@mut", [["get", "plan.name", ["loc", [null, [106, 22], [106, 31]]]]], [], []], "amount", ["subexpr", "@mut", [["get", "plan.to_cents", ["loc", [null, [107, 17], [107, 30]]]]], [], []], "label", "Change Subscription", "panelLabel", "Subscribe for {{amount}}/mo", "isDisabled", ["subexpr", "@mut", [["get", "noPlan", ["loc", [null, [110, 21], [110, 27]]]]], [], []], "action", "processStripeToken"], ["loc", [null, [102, 8], [112, 10]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 82,
              "column": 4
            },
            "end": {
              "line": 114,
              "column": 4
            }
          },
          "moduleName": "frontend/templates/dashboard/profile/subscriptions.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "noSubscription", ["loc", [null, [83, 12], [83, 26]]]]], [], 0, 1, ["loc", [null, [83, 6], [113, 13]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 118,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/profile/subscriptions.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-xs-12 col-sm-4");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "price-table text-center");
        dom.setAttribute(el3, "id", "basic");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-heading");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("BASIC PLAN");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-body");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("$10");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("small");
        var el7 = dom.createTextNode("/month");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" Organization use");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("25");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" students");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" 24/7 support");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-footer");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "name", "button");
        dom.setAttribute(el5, "class", "btn btn-lg btn-success btn-flat");
        var el6 = dom.createTextNode("Select");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 col-sm-12 margin-bottom-20");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-xs-12 col-sm-4");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "price-table text-center");
        dom.setAttribute(el3, "id", "premium");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-heading");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("PREMIUM PLAN");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-body");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("$25");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("small");
        var el7 = dom.createTextNode("/month");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" Organization use");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("100");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" students");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" 24/7 support");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-footer");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "name", "button");
        dom.setAttribute(el5, "class", "btn btn-lg btn-success btn-flat");
        var el6 = dom.createTextNode("Select");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 col-sm-12 margin-bottom-20");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-xs-12 col-sm-4");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "price-table text-center");
        dom.setAttribute(el3, "id", "ultimate");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-heading");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("ULTIMATE");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-body");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("$99");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("small");
        var el7 = dom.createTextNode("/month");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" Organization use");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createElement("i");
        var el8 = dom.createTextNode("Unlimited");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" students");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6, "class", "icon-ok text-success");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" 24/7 support");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "price-table-footer");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "name", "button");
        dom.setAttribute(el5, "class", "btn btn-lg btn-success btn-flat");
        var el6 = dom.createTextNode("Select");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 col-sm-12 margin-bottom-20");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-offset-2 col-sm-8 col-sm-offset-2 text-center");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1, 7, 1]);
        var element2 = dom.childAt(element0, [3, 1, 7, 1]);
        var element3 = dom.childAt(element0, [5, 1, 7, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createAttrMorph(element1, 'disabled');
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createAttrMorph(element2, 'disabled');
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createAttrMorph(element3, 'disabled');
        morphs[5] = dom.createElementMorph(element3);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        morphs[7] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["attribute", "disabled", ["get", "sameAsBasic", ["loc", [null, [16, 43], [16, 54]]]]], ["element", "action", ["selectPlan", ["get", "basic", ["loc", [null, [16, 147], [16, 152]]]]], [], ["loc", [null, [16, 125], [16, 154]]]], ["attribute", "disabled", ["get", "sameAsPremium", ["loc", [null, [37, 43], [37, 56]]]]], ["element", "action", ["selectPlan", ["get", "premium", ["loc", [null, [37, 149], [37, 156]]]]], [], ["loc", [null, [37, 127], [37, 158]]]], ["attribute", "disabled", ["get", "sameAsUltimate", ["loc", [null, [58, 43], [58, 57]]]]], ["element", "action", ["selectPlan", ["get", "ultimate", ["loc", [null, [58, 150], [58, 158]]]]], [], ["loc", [null, [58, 128], [58, 160]]]], ["block", "if", [["get", "canceledSubscription", ["loc", [null, [67, 10], [67, 30]]]]], [], 0, 1, ["loc", [null, [67, 4], [114, 11]]]], ["content", "outlet", ["loc", [null, [117, 0], [117, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/dashboard/profile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 14
              },
              "end": {
                "line": 20,
                "column": 14
              }
            },
            "moduleName": "frontend/templates/dashboard/profile.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Edit Profile\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["user"], [], ["loc", [null, [19, 16], [19, 34]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 12
            },
            "end": {
              "line": 21,
              "column": 12
            }
          },
          "moduleName": "frontend/templates/dashboard/profile.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.profile.index"], [], 0, null, ["loc", [null, [18, 14], [20, 26]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 14
              },
              "end": {
                "line": 25,
                "column": 14
              }
            },
            "moduleName": "frontend/templates/dashboard/profile.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Change Password\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["key"], [], ["loc", [null, [24, 16], [24, 33]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 12
            },
            "end": {
              "line": 26,
              "column": 12
            }
          },
          "moduleName": "frontend/templates/dashboard/profile.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.profile.password"], [], 0, null, ["loc", [null, [23, 14], [25, 26]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 16
                },
                "end": {
                  "line": 31,
                  "column": 16
                }
              },
              "moduleName": "frontend/templates/dashboard/profile.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" Subscriptions\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "fa-icon", ["credit-card"], [], ["loc", [null, [30, 18], [30, 43]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 14
              },
              "end": {
                "line": 32,
                "column": 14
              }
            },
            "moduleName": "frontend/templates/dashboard/profile.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "link-to", ["dashboard.profile.subscriptions"], ["disabled", true, "title", "Currently unavailable."], 0, null, ["loc", [null, [29, 16], [31, 28]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 12
            },
            "end": {
              "line": 33,
              "column": 12
            }
          },
          "moduleName": "frontend/templates/dashboard/profile.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-li", [], ["class", "disabled"], 0, null, ["loc", [null, [28, 14], [32, 26]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 35,
                "column": 12
              },
              "end": {
                "line": 37,
                "column": 12
              }
            },
            "moduleName": "frontend/templates/dashboard/profile.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" Organizations\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["users"], [], ["loc", [null, [36, 14], [36, 33]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 12
            },
            "end": {
              "line": 38,
              "column": 10
            }
          },
          "moduleName": "frontend/templates/dashboard/profile.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.profile.organizations"], [], 0, null, ["loc", [null, [35, 12], [37, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 54,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/profile.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content-wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("\n      Profile\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "box box-solid");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-header with-border");
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h3");
        dom.setAttribute(el7, "class", "box-title");
        var el8 = dom.createTextNode("Manage");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-body no-padding");
        dom.setAttribute(el6, "style", "display: block;");
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7, "class", "nav nav-pills nav-stacked");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-9");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "box box-primary");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "box-body");
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3, 1]);
        var element1 = dom.childAt(element0, [1, 1, 3, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(element1, 2, 2);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [3, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-li", [], [], 0, null, ["loc", [null, [17, 12], [21, 24]]]], ["block", "link-li", [], [], 1, null, ["loc", [null, [22, 12], [26, 24]]]], ["block", "if", [["get", "session.currentUser.isOrganization", ["loc", [null, [27, 18], [27, 52]]]]], [], 2, null, ["loc", [null, [27, 12], [33, 19]]]], ["block", "link-li", [], [], 3, null, ["loc", [null, [34, 12], [38, 22]]]], ["content", "outlet", ["loc", [null, [46, 10], [46, 20]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("frontend/templates/dashboard/students/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 8
            },
            "end": {
              "line": 48,
              "column": 8
            }
          },
          "moduleName": "frontend/templates/dashboard/students/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]), 0, 0);
          return morphs;
        },
        statements: [["inline", "link-to", [["get", "student.fullName", ["loc", [null, [42, 26], [42, 42]]]], "dashboard.students.show", ["get", "student.id", ["loc", [null, [42, 69], [42, 79]]]]], [], ["loc", [null, [42, 16], [42, 81]]]], ["content", "student.activeSemester", ["loc", [null, [43, 16], [43, 42]]]], ["content", "student.semesterCreditHours", ["loc", [null, [44, 16], [44, 47]]]], ["content", "student.semesterGpa", ["loc", [null, [45, 16], [45, 39]]]], ["content", "student.cumulativeGpa", ["loc", [null, [46, 16], [46, 41]]]]],
        locals: ["student"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 8
            },
            "end": {
              "line": 54,
              "column": 8
            }
          },
          "moduleName": "frontend/templates/dashboard/students/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          dom.setAttribute(el1, "class", "lead");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "5");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n                No students.\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 64,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/students/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6 col-xs-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-sm-6 col-xs-12");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "box box-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "box-body");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "table-responsive");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("table");
        dom.setAttribute(el4, "class", "table no-margin");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("thead");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tr");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n            Name\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n            Active Semester\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n            Semester Credit Hours\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n            Semester GPA\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("th");
        var el8 = dom.createTextNode("\n            Cumulative GPA\n          ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tbody");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(fragment, [2, 1, 1, 1]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element3, [2]);
        var element5 = dom.childAt(element3, [4]);
        var element6 = dom.childAt(element3, [6]);
        var element7 = dom.childAt(element3, [8]);
        var element8 = dom.childAt(element3, [10]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createElementMorph(element4);
        morphs[3] = dom.createElementMorph(element5);
        morphs[4] = dom.createElementMorph(element6);
        morphs[5] = dom.createElementMorph(element7);
        morphs[6] = dom.createElementMorph(element8);
        morphs[7] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "info-box", [], ["color", "aqua", "icon", "pie-chart", "text", "Average Semester GPA", "values", ["subexpr", "@mut", [["get", "students", ["loc", [null, [3, 80], [3, 88]]]]], [], []], "value", "semesterGpa"], ["loc", [null, [3, 4], [3, 110]]]], ["inline", "info-box", [], ["color", "orange", "icon", "bar-chart", "text", "Average Cumulative GPA", "values", ["subexpr", "@mut", [["get", "students", ["loc", [null, [6, 84], [6, 92]]]]], [], []], "value", "cumulativeGpa"], ["loc", [null, [6, 4], [6, 116]]]], ["element", "action", ["sortBy", "fullName"], [], ["loc", [null, [16, 14], [16, 44]]]], ["element", "action", ["sortBy", "activeSemester"], [], ["loc", [null, [19, 14], [19, 50]]]], ["element", "action", ["sortBy", "semesterCreditHours"], [], ["loc", [null, [22, 14], [22, 55]]]], ["element", "action", ["sortBy", "semesterGpa"], [], ["loc", [null, [25, 14], [25, 47]]]], ["element", "action", ["sortBy", "cumulativeGpa"], [], ["loc", [null, [28, 14], [28, 49]]]], ["block", "each", [["get", "sortedStudents", ["loc", [null, [40, 16], [40, 30]]]]], [], 0, 1, ["loc", [null, [40, 8], [54, 17]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/dashboard/students/show", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 98,
                "column": 20
              },
              "end": {
                "line": 100,
                "column": 20
              }
            },
            "moduleName": "frontend/templates/dashboard/students/show.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "progress-bar", [], ["name", ["subexpr", "@mut", [["get", "weight.name", ["loc", [null, [99, 42], [99, 53]]]]], [], []], "percentage", ["subexpr", "@mut", [["get", "weight.percentage", ["loc", [null, [99, 65], [99, 82]]]]], [], []]], ["loc", [null, [99, 22], [99, 84]]]]],
          locals: ["weight"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 76,
              "column": 12
            },
            "end": {
              "line": 104,
              "column": 14
            }
          },
          "moduleName": "frontend/templates/dashboard/students/show.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" %\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "progress");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("                  ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
          morphs[5] = dom.createMorphAt(dom.childAt(element0, [11]), 1, 1);
          morphs[6] = dom.createMorphAt(dom.childAt(element0, [13, 1]), 1, 1);
          return morphs;
        },
        statements: [["content", "course.name", ["loc", [null, [79, 18], [79, 33]]]], ["content", "course.creditHours", ["loc", [null, [82, 18], [82, 40]]]], ["content", "course.currentGrade", ["loc", [null, [85, 18], [85, 41]]]], ["content", "course.letterGrade", ["loc", [null, [88, 18], [88, 40]]]], ["content", "course.gradingScale", ["loc", [null, [91, 18], [91, 41]]]], ["content", "course.semester", ["loc", [null, [94, 18], [94, 37]]]], ["block", "each", [["get", "course.weights", ["loc", [null, [98, 28], [98, 42]]]]], [], 0, null, ["loc", [null, [98, 20], [100, 29]]]]],
        locals: ["course"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 104,
              "column": 14
            },
            "end": {
              "line": 110,
              "column": 14
            }
          },
          "moduleName": "frontend/templates/dashboard/students/show.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          dom.setAttribute(el1, "class", "lead");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "6");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n                    No courses.\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 132,
              "column": 12
            },
            "end": {
              "line": 134,
              "column": 12
            }
          },
          "moduleName": "frontend/templates/dashboard/students/show.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "grade-row", [], ["parent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [133, 33], [133, 37]]]]], [], []], "grade", ["subexpr", "@mut", [["get", "grade", ["loc", [null, [133, 44], [133, 49]]]]], [], []], "hideActions", true], ["loc", [null, [133, 14], [133, 68]]]]],
        locals: ["grade"],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 134,
              "column": 12
            },
            "end": {
              "line": 140,
              "column": 12
            }
          },
          "moduleName": "frontend/templates/dashboard/students/show.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          dom.setAttribute(el1, "class", "lead");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "colspan", "5");
          dom.setAttribute(el2, "class", "text-center");
          var el3 = dom.createTextNode("\n                  No grades.\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 150,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/students/show.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-3 col-xs-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "small-box bg-aqua");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "inner");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "icon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "ion ion-university");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-3 col-xs-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "small-box bg-yellow");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "inner");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "icon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "ion ion-document");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-3 col-xs-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "small-box bg-green");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "inner");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Semester GPA");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "icon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "ion ion-pie-graph");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-lg-3 col-xs-6");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "small-box bg-red");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "inner");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Cumulative GPA");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "icon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        dom.setAttribute(el5, "class", "ion ion-stats-bars");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "nav-tabs-custom");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "nav nav-tabs pull-right");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "active");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#courses");
        dom.setAttribute(el4, "data-toggle", "tab");
        var el5 = dom.createTextNode("Courses");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#grades");
        dom.setAttribute(el4, "data-toggle", "tab");
        var el5 = dom.createTextNode("Grades");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "pull-left header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-xs btn-default btn-flat");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "header");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "label label-default");
        dom.setAttribute(el4, "title", "Active Semester");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "tab-content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "tab-pane active");
        dom.setAttribute(el3, "id", "courses");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "table-responsive");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("table");
        dom.setAttribute(el5, "class", "table no-margin");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("thead");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("tr");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Name");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Credit Hours");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Current Grade");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Letter Grade");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Grading Scale");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Semester");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Weights");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tbody");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "box-footer clearfix");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "pull-right");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "tab-pane");
        dom.setAttribute(el3, "id", "grades");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "table-responsive");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("table");
        dom.setAttribute(el5, "class", "table no-margin");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("thead");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("tr");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Name");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Class");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Semester");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Score");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Weighted Percentage");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("th");
        var el9 = dom.createTextNode("Weight");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tbody");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "box-footer clearfix");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "pull-right");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1, 1, 1]);
        var element3 = dom.childAt(element1, [3, 1, 1]);
        var element4 = dom.childAt(fragment, [2]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element5, [1, 0]);
        var element7 = dom.childAt(element5, [3, 0]);
        var element8 = dom.childAt(element5, [5]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element4, [3]);
        var element11 = dom.childAt(element10, [1]);
        var element12 = dom.childAt(element10, [3]);
        var morphs = new Array(17);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [5, 1, 1, 1]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [7, 1, 1, 1]), 0, 0);
        morphs[6] = dom.createElementMorph(element6);
        morphs[7] = dom.createElementMorph(element7);
        morphs[8] = dom.createElementMorph(element9);
        morphs[9] = dom.createMorphAt(element9, 0, 0);
        morphs[10] = dom.createMorphAt(element8, 3, 3);
        morphs[11] = dom.createMorphAt(element8, 5, 5);
        morphs[12] = dom.createMorphAt(dom.childAt(element5, [7, 0]), 0, 0);
        morphs[13] = dom.createMorphAt(dom.childAt(element11, [1, 1, 3]), 1, 1);
        morphs[14] = dom.createMorphAt(dom.childAt(element11, [3, 1]), 0, 0);
        morphs[15] = dom.createMorphAt(dom.childAt(element12, [1, 1, 3]), 1, 1);
        morphs[16] = dom.createMorphAt(dom.childAt(element12, [3, 1]), 0, 0);
        return morphs;
      },
      statements: [["content", "model.courseCount", ["loc", [null, [5, 12], [5, 33]]]], ["inline", "h-pluralize", [["get", "model.courseCount", ["loc", [null, [6, 25], [6, 42]]]], "Course"], ["omitCount", true], ["loc", [null, [6, 11], [6, 68]]]], ["content", "model.gradeCount", ["loc", [null, [16, 12], [16, 32]]]], ["inline", "h-pluralize", [["get", "model.gradeCount", ["loc", [null, [17, 25], [17, 41]]]], "Grade"], ["omitCount", true], ["loc", [null, [17, 11], [17, 66]]]], ["content", "model.semesterGpa", ["loc", [null, [28, 12], [28, 33]]]], ["content", "model.cumulativeGpa", ["loc", [null, [39, 12], [39, 35]]]], ["element", "action", ["clearPage"], [], ["loc", [null, [51, 60], [51, 82]]]], ["element", "action", ["clearPage"], [], ["loc", [null, [52, 44], [52, 66]]]], ["element", "action", ["back"], [], ["loc", [null, [54, 82], [54, 99]]]], ["inline", "fa-icon", ["reply"], [], ["loc", [null, [54, 100], [54, 119]]]], ["inline", "gravatar-image", [], ["email", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [55, 29], [55, 40]]]]], [], []], "class", "img-circle", "title", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [55, 66], [55, 77]]]]], [], []]], ["loc", [null, [55, 6], [55, 79]]]], ["content", "model.fullName", ["loc", [null, [56, 6], [56, 24]]]], ["content", "model.activeSemester", ["loc", [null, [58, 81], [58, 105]]]], ["block", "each", [["get", "pagedCourseContent", ["loc", [null, [76, 20], [76, 38]]]]], [], 0, 1, ["loc", [null, [76, 12], [110, 23]]]], ["inline", "page-numbers", [], ["content", ["subexpr", "@mut", [["get", "pagedCourseContent", ["loc", [null, [115, 56], [115, 74]]]]], [], []]], ["loc", [null, [115, 33], [115, 76]]]], ["block", "each", [["get", "pagedGradeContent", ["loc", [null, [132, 20], [132, 37]]]]], [], 2, 3, ["loc", [null, [132, 12], [140, 21]]]], ["inline", "page-numbers", [], ["content", ["subexpr", "@mut", [["get", "pagedGradeContent", ["loc", [null, [145, 56], [145, 73]]]]], [], []]], ["loc", [null, [145, 33], [145, 75]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("frontend/templates/dashboard/students", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 15
            },
            "end": {
              "line": 4,
              "column": 65
            }
          },
          "moduleName": "frontend/templates/dashboard/students.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "fa-icon", ["spinner"], ["spin", true], ["loc", [null, [4, 33], [4, 64]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/dashboard/students.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content-wrapper");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("\n      Students ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "isLoading", ["loc", [null, [4, 21], [4, 30]]]]], [], 0, null, ["loc", [null, [4, 15], [4, 72]]]], ["content", "outlet", ["loc", [null, [9, 4], [9, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/faq", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 16
              },
              "end": {
                "line": 20,
                "column": 16
              }
            },
            "moduleName": "frontend/templates/faq.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ol");
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createTextNode("Go to your university portal page and download your unofficial transcript.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createTextNode("\n                      Scroll to the very end of the transcript and you should see something similar to this image. ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("br");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                      ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "src", "assets/transcript-example.png");
            dom.setAttribute(el3, "alt", "");
            dom.setAttribute(el3, "style", "width: 100%;");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("li");
            var el3 = dom.createTextNode("Looking at the image, the number marked (1) is your grade units and (2) is your grade points.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 12
            },
            "end": {
              "line": 21,
              "column": 12
            }
          },
          "moduleName": "frontend/templates/faq.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "em-accordion-item", [], ["title", "How do I find my grade points and grade units on an unoffcial transcript?"], 0, null, ["loc", [null, [11, 16], [20, 38]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/faq.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content space");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-sm-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5, "class", "text-center");
        var el6 = dom.createTextNode("Frequently Asked Questions");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-sm-offset-3 col-sm-6 col-sm-offset-3");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "lead text-center");
        var el6 = dom.createTextNode("Didn't answer your question? Then ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "mailto:contact@gradebuildr.com");
        var el7 = dom.createTextNode("contact us");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" and we will help you.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1, 1, 1, 3, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "em-accordion", [], ["configName", "bs", "class", "space", "selected-idx", 1], 0, null, ["loc", [null, [10, 12], [21, 29]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("frontend/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 10
              },
              "end": {
                "line": 14,
                "column": 10
              }
            },
            "moduleName": "frontend/templates/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            Go to Dashboard\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 15,
              "column": 8
            }
          },
          "moduleName": "frontend/templates/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.index"], ["class", "btn btn-outline btn-flat btn-lg"], 0, null, ["loc", [null, [12, 10], [14, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 10
              },
              "end": {
                "line": 18,
                "column": 10
              }
            },
            "moduleName": "frontend/templates/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            Register now\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 8
            },
            "end": {
              "line": 19,
              "column": 8
            }
          },
          "moduleName": "frontend/templates/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["register"], ["class", "btn btn-flat btn-outline btn-lg"], 0, null, ["loc", [null, [16, 10], [18, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "jumbotron bg-green vertical-align");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("video");
        dom.setAttribute(el2, "loop", "");
        dom.setAttribute(el2, "muted", "");
        dom.setAttribute(el2, "autoplay", "");
        dom.setAttribute(el2, "poster", "assets/intro.jpg");
        dom.setAttribute(el2, "class", "fullscreen-video");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("source");
        dom.setAttribute(el3, "src", "assets/intro.mp4");
        dom.setAttribute(el3, "type", "video/mp4");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("source");
        dom.setAttribute(el3, "src", "assets/intro.webm");
        dom.setAttribute(el3, "type", "video/webm");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-9 col-xs-12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("Welcome, fellow students!");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("This application was made to help you track your grades in your college curriculum and properly weigh grades based on your course criteria.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content space");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-sm-4 text-center");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "assets/courses.png");
        dom.setAttribute(el5, "alt", "Courses");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("Courses");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "lead");
        var el6 = dom.createTextNode("Keep track of your entire academic curriculum cumulatively and by semester is easy. Define your coursework for your highly customizable profile. ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-sm-4 text-center");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "assets/grades.png");
        dom.setAttribute(el5, "alt", "Grades");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("Grades");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "lead");
        var el6 = dom.createTextNode("Fill out your assignments, homeworks, quizzes, and exams to the best of your ability and we will accurately represent your real-time grade during the semester. ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n     ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-sm-4 text-center");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "assets/weights.png");
        dom.setAttribute(el5, "alt", "Weights");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        var el6 = dom.createTextNode("Weights");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "lead");
        var el6 = dom.createTextNode("All academic courses can be weighted properly to do all the heavy lifting for you. We weight your grades to accurately represent all of your letter grades.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3, 1, 5]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "session.isAuthenticated", ["loc", [null, [11, 14], [11, 37]]]]], [], 0, 1, ["loc", [null, [11, 8], [19, 15]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/partials/_footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/partials/_footer.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("footer");
        dom.setAttribute(el2, "class", "main-footer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-right hidden-xs");
        var el4 = dom.createTextNode("\n      Built by ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("strong");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://www.arinhouck.com");
        dom.setAttribute(el5, "target", "_blank");
        dom.setAttribute(el5, "title", "Arin Houck Web Development");
        var el6 = dom.createTextNode(" Arin Houck ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("Copyright © 2015 ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "mailto:contact@gradebuildr.com");
        var el5 = dom.createTextNode("Gradebuildr");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(".");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" All rights reserved. | ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1, 5]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "isDashboard", ["loc", [null, [1, 17], [1, 28]]]], "", "container"], [], ["loc", [null, [1, 12], [1, 45]]]]]]], ["inline", "link-to", ["FAQ", "faq"], [], ["loc", [null, [6, 132], [6, 155]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/partials/_header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "frontend/templates/partials/_header.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("b");
            var el2 = dom.createTextNode("grade");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("buildr");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sub");
            var el2 = dom.createTextNode("beta");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/partials/_header.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("header");
          dom.setAttribute(el1, "class", "main-header");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("nav");
          dom.setAttribute(el2, "class", "navbar");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          dom.setAttribute(el3, "class", "sidebar-toggle");
          dom.setAttribute(el3, "role", "button");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "sr-only");
          var el5 = dom.createTextNode("Toggle navigation");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "navbar-custom-menu");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4, "class", "nav navbar-nav");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [3]);
          var element4 = dom.childAt(element3, [1]);
          var element5 = dom.childAt(element3, [3, 1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createElementMorph(element4);
          morphs[2] = dom.createMorphAt(element5, 1, 1);
          morphs[3] = dom.createMorphAt(element5, 3, 3);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.index"], ["class", "logo"], 0, null, ["loc", [null, [3, 4], [5, 16]]]], ["element", "action", ["toggleSidebar"], [], ["loc", [null, [7, 32], [7, 58]]]], ["content", "social-icons", ["loc", [null, [12, 10], [12, 26]]]], ["content", "user-menu", ["loc", [null, [13, 10], [13, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 10
              },
              "end": {
                "line": 25,
                "column": 10
              }
            },
            "moduleName": "frontend/templates/partials/_header.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("b");
            var el2 = dom.createTextNode("grade");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("buildr");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sub");
            var el2 = dom.createTextNode("beta");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 33,
                  "column": 16
                },
                "end": {
                  "line": 35,
                  "column": 16
                }
              },
              "moduleName": "frontend/templates/partials/_header.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                  Register\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 12
              },
              "end": {
                "line": 37,
                "column": 12
              }
            },
            "moduleName": "frontend/templates/partials/_header.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "link-to", ["register"], ["id", "register"], 0, null, ["loc", [null, [33, 16], [35, 28]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 0
            },
            "end": {
              "line": 45,
              "column": 0
            }
          },
          "moduleName": "frontend/templates/partials/_header.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("header");
          dom.setAttribute(el1, "class", "main-header");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("nav");
          dom.setAttribute(el2, "class", "navbar");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "container");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "navbar-header");
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "navbar-custom-menu");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("ul");
          dom.setAttribute(el5, "class", "nav navbar-nav");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1, 1]);
          var element1 = dom.childAt(element0, [3, 1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(element1, 3, 3);
          morphs[3] = dom.createMorphAt(element1, 5, 5);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["class", "logo navbar-brand"], 0, null, ["loc", [null, [23, 10], [25, 22]]]], ["content", "social-icons", ["loc", [null, [30, 12], [30, 28]]]], ["block", "unless", [["get", "session.isAuthenticated", ["loc", [null, [31, 22], [31, 45]]]]], [], 1, null, ["loc", [null, [31, 12], [37, 23]]]], ["content", "user-menu", ["loc", [null, [38, 12], [38, 25]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/partials/_header.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "isDashboard", ["loc", [null, [1, 6], [1, 17]]]]], [], 0, 1, ["loc", [null, [1, 0], [45, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("frontend/templates/partials/_sidebar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 8
              },
              "end": {
                "line": 17,
                "column": 8
              }
            },
            "moduleName": "frontend/templates/partials/_sidebar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Dashboard");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["dashboard"], [], ["loc", [null, [16, 10], [16, 33]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 6
            },
            "end": {
              "line": 18,
              "column": 6
            }
          },
          "moduleName": "frontend/templates/partials/_sidebar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["dashboard.index"], [], 0, null, ["loc", [null, [15, 8], [17, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 10
                },
                "end": {
                  "line": 23,
                  "column": 10
                }
              },
              "moduleName": "frontend/templates/partials/_sidebar.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createTextNode("Courses");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "fa-icon", ["university"], [], ["loc", [null, [22, 12], [22, 36]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 8
              },
              "end": {
                "line": 24,
                "column": 8
              }
            },
            "moduleName": "frontend/templates/partials/_sidebar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "link-to", ["dashboard.courses"], [], 0, null, ["loc", [null, [21, 10], [23, 22]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 26,
                  "column": 10
                },
                "end": {
                  "line": 28,
                  "column": 10
                }
              },
              "moduleName": "frontend/templates/partials/_sidebar.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createTextNode("Grades");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "fa-icon", ["file-text-o"], [], ["loc", [null, [27, 12], [27, 37]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 8
              },
              "end": {
                "line": 29,
                "column": 8
              }
            },
            "moduleName": "frontend/templates/partials/_sidebar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "link-to", ["dashboard.grades"], [], 0, null, ["loc", [null, [26, 10], [28, 22]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 6
            },
            "end": {
              "line": 30,
              "column": 6
            }
          },
          "moduleName": "frontend/templates/partials/_sidebar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-li-toggle", [], [], 0, null, ["loc", [null, [20, 8], [24, 27]]]], ["block", "link-li-toggle", [], [], 1, null, ["loc", [null, [25, 8], [29, 27]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 33,
                  "column": 10
                },
                "end": {
                  "line": 35,
                  "column": 10
                }
              },
              "moduleName": "frontend/templates/partials/_sidebar.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createTextNode("Students");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "fa-icon", ["users"], [], ["loc", [null, [34, 12], [34, 31]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 8
              },
              "end": {
                "line": 36,
                "column": 8
              }
            },
            "moduleName": "frontend/templates/partials/_sidebar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "link-to", ["dashboard.students"], [], 0, null, ["loc", [null, [33, 10], [35, 22]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 6
            },
            "end": {
              "line": 37,
              "column": 6
            }
          },
          "moduleName": "frontend/templates/partials/_sidebar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-li-toggle", [], [], 0, null, ["loc", [null, [32, 8], [36, 27]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 42,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/partials/_sidebar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("aside");
        dom.setAttribute(el1, "class", "main-sidebar");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("section");
        dom.setAttribute(el2, "class", "sidebar");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "action", "#");
        dom.setAttribute(el3, "method", "get");
        dom.setAttribute(el3, "class", "sidebar-form");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "input-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "name", "q");
        dom.setAttribute(el5, "class", "form-control");
        dom.setAttribute(el5, "placeholder", "Search...");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "input-group-btn");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "submit");
        dom.setAttribute(el6, "name", "search");
        dom.setAttribute(el6, "id", "search-btn");
        dom.setAttribute(el6, "class", "btn btn-flat");
        dom.setAttribute(el6, "disabled", "true");
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "fa fa-search");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "nav sidebar-menu");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "class", "header");
        var el5 = dom.createTextNode("MAIN NAVIGATION");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 3, 3);
        morphs[1] = dom.createMorphAt(element0, 4, 4);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["block", "link-li-toggle", [], [], 0, null, ["loc", [null, [14, 6], [18, 25]]]], ["block", "if", [["get", "session.currentUser.isStudent", ["loc", [null, [19, 12], [19, 41]]]]], [], 1, null, ["loc", [null, [19, 6], [30, 13]]]], ["block", "if", [["get", "session.currentUser.isOrganization", ["loc", [null, [31, 12], [31, 46]]]]], [], 2, null, ["loc", [null, [31, 6], [37, 13]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("frontend/templates/password/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/password/edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode(" Change your Password ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "password");
        var el6 = dom.createTextNode("New Password");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "passwordConfirmation");
        var el6 = dom.createTextNode("Confirm New Password");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-primary btn-flat");
        var el5 = dom.createTextNode("Change my Password");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
        morphs[2] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [7, 22], [7, 30]]]]], [], []], "type", "password", "class", "form-control", "id", "password"], ["loc", [null, [7, 8], [7, 83]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "passwordConfirmation", ["loc", [null, [11, 22], [11, 42]]]]], [], []], "type", "password", "class", "form-control", "id", "passwordConfirmation"], ["loc", [null, [11, 8], [11, 107]]]], ["element", "action", ["changePassword"], [], ["loc", [null, [16, 75], [16, 102]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/password/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/password/new.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode(" Forgot your Password? ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group col-sm-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "email");
        var el6 = dom.createTextNode("Email address");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-primary btn-flat");
        var el5 = dom.createTextNode("Send me reset password instructions");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [5, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 3, 3);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [7, 22], [7, 27]]]]], [], []], "type", "email", "class", "form-control", "id", "email", "placeholder", "Enter email", "required", "true"], ["loc", [null, [7, 8], [7, 116]]]], ["element", "action", ["newPassword"], [], ["loc", [null, [13, 75], [13, 99]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/passwords/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/passwords/edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode(" Change your Password ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "password");
        var el6 = dom.createTextNode("New Password");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "passwordConfirmation");
        var el6 = dom.createTextNode("Confirm New Password");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-primary btn-flat");
        var el5 = dom.createTextNode("Change my Password");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
        morphs[2] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "password", ["loc", [null, [7, 22], [7, 30]]]]], [], []], "type", "password", "class", "form-control", "id", "password"], ["loc", [null, [7, 8], [7, 83]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "passwordConfirmation", ["loc", [null, [11, 22], [11, 42]]]]], [], []], "type", "password", "class", "form-control", "id", "passwordConfirmation"], ["loc", [null, [11, 8], [11, 107]]]], ["element", "action", ["changePassword"], [], ["loc", [null, [16, 75], [16, 102]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/passwords/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/passwords/new.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode(" Forget your Password ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group col-sm-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "for", "email");
        var el6 = dom.createTextNode("Email address");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-group");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "name", "button");
        dom.setAttribute(el4, "class", "btn btn-primary btn-flat");
        var el5 = dom.createTextNode("Send me reset password instructions");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [5, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 3, 3);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "email", ["loc", [null, [7, 22], [7, 27]]]]], [], []], "type", "email", "class", "form-control", "id", "email", "placeholder", "Enter email"], ["loc", [null, [7, 8], [7, 100]]]], ["element", "action", ["newPassword"], [], ["loc", [null, [13, 75], [13, 99]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("frontend/templates/register", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 8,
              "column": 8
            }
          },
          "moduleName": "frontend/templates/register.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "assets/student-profile-computer.png");
          dom.setAttribute(el1, "style", "width: 100%;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "frontend/templates/register.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "assets/organization-profile-computer.png");
          dom.setAttribute(el1, "style", "width: 100%;");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 42,
              "column": 8
            }
          },
          "moduleName": "frontend/templates/register.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("Sign up for free.");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "lead");
          var el2 = dom.createTextNode("\n          Choose from two types of accounts:\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "form-group");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "radio");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "radio-option");
          var el5 = dom.createTextNode("Student Account");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "p-radio");
          var el4 = dom.createTextNode("\n              Manage weighted courses, grades, or grade point averages both semester and cumulatively. Save yourself time by keeping track of your coursework and all for free.\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "radio");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "radio-option");
          var el5 = dom.createTextNode("Organization Account");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "p-radio");
          var el4 = dom.createTextNode("\n              Monitor all your student's coursework in your organization securely. Our tool provides charts, graphs, and tables to analyze metrics on your members and options to filter results\n              to your liking.\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "name", "button");
          dom.setAttribute(el1, "class", "btn btn-lg bg-green btn-flat pull-right");
          var el2 = dom.createTextNode("Continue");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [5]);
          var element9 = dom.childAt(fragment, [7]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element8, [1, 1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element8, [3, 1]), 1, 1);
          morphs[2] = dom.createElementMorph(element9);
          return morphs;
        },
        statements: [["inline", "radio-button", [], ["value", "student", "checked", ["subexpr", "@mut", [["get", "model.accountType", ["loc", [null, [22, 53], [22, 70]]]]], [], []]], ["loc", [null, [22, 14], [22, 72]]]], ["inline", "radio-button", [], ["value", "organization", "checked", ["subexpr", "@mut", [["get", "model.accountType", ["loc", [null, [31, 58], [31, 75]]]]], [], []]], ["loc", [null, [31, 14], [31, 77]]]], ["element", "action", ["continue"], [], ["loc", [null, [40, 92], [40, 113]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 63,
                  "column": 20
                },
                "end": {
                  "line": 69,
                  "column": 20
                }
              },
              "moduleName": "frontend/templates/register.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode("\n                        This is a measurement that helps us calculate your current\n                        GPA. This number can be found in your university portal or\n                        on your unofficial/official transcript.\n                      ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 74,
                  "column": 20
                },
                "end": {
                  "line": 80,
                  "column": 20
                }
              },
              "moduleName": "frontend/templates/register.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createTextNode("\n                        This is a measurement that helps us calculate your current\n                        GPA. This number is your total units taken at your university.\n                        This can be found in your university portal or on your unofficial/official transcript.\n                      ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 58,
                "column": 12
              },
              "end": {
                "line": 85,
                "column": 12
              }
            },
            "moduleName": "frontend/templates/register.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "form-group");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "row");
            var el3 = dom.createTextNode("\n                  ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "col-sm-6");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("label");
            dom.setAttribute(el4, "for", "gradePoints");
            var el5 = dom.createTextNode("Grade Points");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                  ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                  ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "col-sm-6");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("label");
            dom.setAttribute(el4, "for", "gradeUnits");
            var el5 = dom.createTextNode("Grade Units towards GPA");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                  ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var element1 = dom.childAt(element0, [1]);
            var element2 = dom.childAt(element0, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(element1, 3, 3);
            morphs[1] = dom.createMorphAt(element1, 5, 5);
            morphs[2] = dom.createMorphAt(element2, 3, 3);
            morphs[3] = dom.createMorphAt(element2, 5, 5);
            return morphs;
          },
          statements: [["block", "bs-popover", [], ["title", "Grade Points", "icon", "info-circle", "tagName", "span", "placement", "top"], 0, null, ["loc", [null, [63, 20], [69, 35]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.gradePoints", ["loc", [null, [70, 34], [70, 51]]]]], [], []], "class", "form-control", "id", "gradePoints", "step", "any", "placeholder", "Enter grade points"], ["loc", [null, [70, 20], [70, 135]]]], ["block", "bs-popover", [], ["title", "Grade Units", "icon", "info-circle", "tagName", "span", "placement", "top"], 1, null, ["loc", [null, [74, 20], [80, 35]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.gradeUnits", ["loc", [null, [81, 34], [81, 50]]]]], [], []], "class", "form-control", "id", "gradeUnits", "step", "any", "placeholder", "Enter grade units"], ["loc", [null, [81, 20], [81, 132]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 85,
                "column": 12
              },
              "end": {
                "line": 90,
                "column": 12
              }
            },
            "moduleName": "frontend/templates/register.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "form-group");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            dom.setAttribute(el2, "for", "oranization");
            var el3 = dom.createTextNode("Organization");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 3, 3);
            return morphs;
          },
          statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.organization", ["loc", [null, [88, 30], [88, 48]]]]], [], []], "class", "form-control", "id", "organization", "step", "any", "placeholder", "Enter organization name", "required", "true"], ["loc", [null, [88, 16], [88, 154]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 124,
                "column": 23
              },
              "end": {
                "line": 124,
                "column": 81
              }
            },
            "moduleName": "frontend/templates/register.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode(" ");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "fa-icon", ["spinner spin"], ["spin", ["subexpr", "@mut", [["get", "isSaving", ["loc", [null, [124, 70], [124, 78]]]]], [], []]], ["loc", [null, [124, 40], [124, 80]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 8
            },
            "end": {
              "line": 130,
              "column": 8
            }
          },
          "moduleName": "frontend/templates/register.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("form");
          dom.setAttribute(el1, "role", "form");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "box-body");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-6");
          var el6 = dom.createTextNode("\n                  ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          dom.setAttribute(el6, "for", "firstName");
          var el7 = dom.createTextNode("First Name");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                  ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-6");
          var el6 = dom.createTextNode("\n                  ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("label");
          dom.setAttribute(el6, "for", "lastName");
          var el7 = dom.createTextNode("Last Name");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                  ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n              ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "semester");
          var el5 = dom.createTextNode("Active Semester");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "email");
          var el5 = dom.createTextNode("Email address");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "password");
          var el5 = dom.createTextNode("Password");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "passwordConfirmation");
          var el5 = dom.createTextNode("Confirm Password");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group pull-right");
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4, "class", "btn btn-default btn-lg btn-flat");
          dom.setAttribute(el4, "id", "createUser");
          var el5 = dom.createTextNode("\n                Back\n              ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n              ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4, "type", "submit");
          dom.setAttribute(el4, "class", "btn btn-lg btn-primary btn-flat");
          dom.setAttribute(el4, "id", "createUser");
          var el5 = dom.createTextNode("\n                Submit ");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n              ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1, 1]);
          var element4 = dom.childAt(element3, [1, 1]);
          var element5 = dom.childAt(element3, [14]);
          var element6 = dom.childAt(element5, [1]);
          var element7 = dom.childAt(element5, [3]);
          var morphs = new Array(12);
          morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element4, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(element3, 3, 3);
          morphs[3] = dom.createMorphAt(dom.childAt(element3, [5]), 3, 3);
          morphs[4] = dom.createMorphAt(dom.childAt(element3, [7]), 3, 3);
          morphs[5] = dom.createMorphAt(dom.childAt(element3, [9]), 3, 3);
          morphs[6] = dom.createMorphAt(dom.childAt(element3, [11]), 3, 3);
          morphs[7] = dom.createAttrMorph(element6, 'disabled');
          morphs[8] = dom.createElementMorph(element6);
          morphs[9] = dom.createAttrMorph(element7, 'disabled');
          morphs[10] = dom.createElementMorph(element7);
          morphs[11] = dom.createMorphAt(element7, 1, 1);
          return morphs;
        },
        statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.firstName", ["loc", [null, [50, 32], [50, 47]]]]], [], []], "class", "form-control", "id", "firstName", "placeholder", "Enter first name"], ["loc", [null, [50, 18], [50, 116]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.lastName", ["loc", [null, [54, 32], [54, 46]]]]], [], []], "class", "form-control", "id", "lastName", "placeholder", "Enter last name"], ["loc", [null, [54, 18], [54, 113]]]], ["block", "if", [["get", "isStudent", ["loc", [null, [58, 18], [58, 27]]]]], [], 0, 1, ["loc", [null, [58, 12], [90, 19]]]], ["inline", "view", ["select"], ["content", ["subexpr", "@mut", [["get", "semesterNames", ["loc", [null, [94, 25], [94, 38]]]]], [], []], "value", ["subexpr", "@mut", [["get", "model.activeSemester", ["loc", [null, [95, 23], [95, 43]]]]], [], []], "class", "form-control", "id", "activeSemester", "prompt", "Please select a semester", "required", "true"], ["loc", [null, [93, 14], [100, 16]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.email", ["loc", [null, [104, 28], [104, 39]]]]], [], []], "type", "email", "class", "form-control", "id", "email", "placeholder", "Enter email"], ["loc", [null, [104, 14], [104, 112]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.password", ["loc", [null, [108, 28], [108, 42]]]]], [], []], "type", "password", "class", "form-control", "id", "password"], ["loc", [null, [108, 14], [108, 95]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "model.password_confirmation", ["loc", [null, [112, 28], [112, 55]]]]], [], []], "type", "password", "class", "form-control", "id", "passwordConfirmation"], ["loc", [null, [112, 14], [112, 120]]]], ["attribute", "disabled", ["get", "isSaving", ["loc", [null, [120, 117], [120, 125]]]]], ["element", "action", ["back"], [], ["loc", [null, [120, 78], [120, 95]]]], ["attribute", "disabled", ["get", "isSaving", ["loc", [null, [123, 137], [123, 145]]]]], ["element", "action", ["createUser"], [], ["loc", [null, [123, 92], [123, 115]]]], ["block", "if", [["get", "isSaving", ["loc", [null, [124, 29], [124, 37]]]]], [], 2, null, ["loc", [null, [124, 23], [124, 88]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 139,
            "column": 0
          }
        },
        "moduleName": "frontend/templates/register.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row space");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-sm-6 border-right");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-sm-6");
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element10 = dom.childAt(fragment, [0, 1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element10, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element10, [3]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "isStudent", ["loc", [null, [6, 14], [6, 23]]]]], [], 0, 1, ["loc", [null, [6, 8], [10, 15]]]], ["block", "unless", [["get", "registration", ["loc", [null, [14, 18], [14, 30]]]]], [], 2, 3, ["loc", [null, [14, 8], [130, 19]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define('frontend/views/confirmation', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }

  });
});
define('frontend/views/dashboard/courses/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }

  });
});
define('frontend/views/dashboard/courses/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }

  });
});
define('frontend/views/dashboard/courses/show', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }

  });
});
define('frontend/views/dashboard/feedback', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }
  });
});
define('frontend/views/dashboard/grades/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }

  });
});
define('frontend/views/dashboard/grades/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }

  });
});
define('frontend/views/dashboard/profile/organizations/join', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }
  });
});
define('frontend/views/dashboard/profile/subscriptions/cancel', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }
  });
});
define('frontend/views/register', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({
    didInsertElement: function didInsertElement() {
      this.set('controller.openModal', true);
    }

  });
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('frontend/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"frontend","environment":"production","baseURL":"/","locationType":"auto","EmberENV":{"environment":"production","FEATURES":{}},"APP":{"name":"frontend","version":"0.0.1.bd16f995"},"simple-auth":{"authorizer":"simple-auth-authorizer:devise","session":"session:custom","authenticationRoute":"index","routeAfterAuthentication":"dashboard"},"simple-auth-devise":{"tokenAttributeName":"token","identificationAttributeName":"email"},"stripe":{"key":"pk_test_i7DLT5bKxzxVFCJi5gmHE8Ys"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","contentSecurityPolicy":{"default-src":"'none'","script-src":"'self'","font-src":"'self'","connect-src":"'self'","img-src":"'self'","style-src":"'self'","media-src":"'self'"},"exportApplicationGlobal":false}};
});

if (!runningTests) {
  require("frontend/app")["default"].create({"name":"frontend","version":"0.0.1.bd16f995"});
}

/* jshint ignore:end */
