/* jshint node: true */
'use strict';

module.exports = {
  name: 'toggle-switch',
 
  included: function(app) {
    this._super.included(app);
    app.import('vendor/css/toggle-switch.css');
  }
};
