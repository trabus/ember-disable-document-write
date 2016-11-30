# Ember-disable-document-write
[![Travis CI Build Status](https://travis-ci.org/trabus/ember-disable-document-write.svg?branch=master)](https://travis-ci.org/trabus/ember-disable-document-write)

## Why disable document.write?
Have you ever had users of your Ember app complain about your site going completely blank for no apparent reason? You and your customers are probably experiencing an unwanted side effect from third party code trying to insert a script into your page using `document.write()`.

Calling `document.write()` on a page with an Ember app has the unfortunate side effect of completely replacing the content of your page with whatever is passed as an argument, [effectively blanking out your page](http://stackoverflow.com/questions/10873942/document-write-clears-page). This is because `document.write()` will call `document.open()` on an already loaded document [(see notes section here)](https://developer.mozilla.org/en-US/docs/Web/API/Document/write).

Most developers avoid using `document.write` for this exact reason, however in this age of third party ads and addons, you never know when someone's irresponsible use of `document.write` is going to bite you.

## What can we do about it?
One common way to prevent third parties from using `document.write` is to reassign the function to a non-operation. That's the approach this addon takes, using a service and an instance initializer to replace the `document.write` function with whatever you'd like (or a noop by default).

### Write function replacement
This addon provides a `document-service` blueprint to generate a `services/document.js` to allow you to override the write function.

```js
ember generate document-service
```

This will generate the following:
```js
// app/services/document.js
import DocumentService from 'ember-disable-document-write/services/document';

export default DocumentService.extend({
    init() {
        this._super(...arguments);
    },
    write(/* content */) {
        // insert any functionality to be executed when document.write is called
        // you can log, report, or use a "safe" write option like `Node.insertBefore`
    }
});
```

# Contributing
This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-disable-document-write`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
