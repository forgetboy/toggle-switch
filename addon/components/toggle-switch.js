import Ember from "ember";

export default Ember.Component.extend({

  classNameBindings: ['isOn:toggle-switch-is-on'],

  isOn: false,
  a11yMessage: 'Click to toggle',  
  toggleMessageWhenOn: 'Yes',
  toggleMessageWhenOff: 'No',
  displayToggleMessage: false,

  actions: {
    toggle: function() {
      this.toggleProperty('isOn');
      this.sendAction('action', this.get('isOn'));
    }
  }
    
});
