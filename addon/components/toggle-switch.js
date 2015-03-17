import Ember from "ember";

export default Ember.Component.extend({

  classNameBindings: ['isOn:toggle-switch-is-on'],
 
  isOn: false,
  shouldDisplayOnOffMessage: false,
  onMessage: 'On',
  offMessage: 'Off',
  a11yMessage: 'Click to toggle',  

  actions: {
    toggle: function () {
      this.toggleProperty('isOn');
      this.sendAction('action', this.get('isOn'));
    }
  }
    
});
