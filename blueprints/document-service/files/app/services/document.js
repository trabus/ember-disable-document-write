import DocumentService from 'ember-disable-document-write/services/document';

export default DocumentService.extend({
    init() {
        this._super(...arguments);
    },
    write(/* content */) {
        // insert any functionality to be executed when document.write is called
    }
});
