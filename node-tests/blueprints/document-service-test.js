'use strict';

var blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
var setupTestHooks = blueprintHelpers.setupTestHooks;
var emberNew = blueprintHelpers.emberNew;
var emberGenerate = blueprintHelpers.emberGenerate;
var emberDestroy = blueprintHelpers.emberDestroy;
var chai = require('ember-cli-blueprint-test-helpers/chai');
var file = chai.file;
var expect = chai.expect;

describe('Acceptance: ember generate and destroy document-service', function() {
  setupTestHooks(this);

  it('document-service', function() {
    return emberNew()
     .then(() => emberGenerate(['document-service']))
     .then(() => expect(file('app/services/document.js'))
       .to.contain('this._super(...arguments)')
       .to.contain('write('))
     .then(() => emberDestroy(['service','document']))
     .then(() => expect(file('app/services/document.js')).to.not.exist);
  });
});
