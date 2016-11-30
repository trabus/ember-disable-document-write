import DocumentService from 'ember-disable-document-write/services/document';

export default DocumentService.extend({
    init() {
        this._super(...arguments);
    },
    write() {
        console.log('overruled!');
    }
});
