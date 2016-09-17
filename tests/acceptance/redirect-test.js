import { test } from 'qunit';
import moduleForAcceptance from 'dojo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | redirect');

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("Nosotros")');
  andThen(function () {
    assert.equal(currentURL(), '/perfil', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contacto")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});


test('should list available spies.',function (assert){
	visit('/');
	andThen(function(){
		assert.equal(find('.listening').length,3,'shoul navigate to contact');
	});
});
