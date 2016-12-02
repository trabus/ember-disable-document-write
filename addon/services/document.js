import Ember from 'ember';
const { computed, get } = Ember;

export default Ember.Service.extend({
    init() {
        this._super(...arguments);
        let document = get(this, 'document');
        if (document) {
            document.write = get(this, 'write').bind(this);
        }
    },
    document: computed({
        get() {
            return window && window.document;
        }
    }),
    write() {
        // noop
    }
});
