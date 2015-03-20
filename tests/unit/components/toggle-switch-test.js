import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('toggle-switch', {
});

test('it renders', function(assert) {
  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it contains accessibility message', function(assert) {
  assert.equal(this.$('.toggle-switch-a11y-message').text().trim(), 'Click to toggle');
});

test('it toggles correctly', function(assert) {
  var component = this.subject();

  assert.equal(this.$().hasClass('toggle-switch-is-on'), false);

  this.$('.toggle-switch').click();

  assert.equal(this.$().hasClass('toggle-switch-is-on'), true);
});

test('it displays toggle message when requested', function (assert) {
  var component = this.subject({displayToggleMessage: true});

  assert.equal(this.$('.toggle-message').text().trim(), 'No');

  this.$('.toggle-switch').click();

  assert.equal(this.$('.toggle-message').text().trim(), 'Yes');
});
