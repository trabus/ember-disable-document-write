import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | document');

test('calling document.write doesn\'t clear the page', function(assert) {
  visit('/');

  andThen(function() {
    document.write('');
    assert.equal(currentURL(), '/');
    assert.equal(find('.main').text().trim(), 'Disable document write!');
  });
});
