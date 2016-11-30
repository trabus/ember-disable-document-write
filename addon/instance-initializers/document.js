export function initialize(appInstance) {
  let lookupSource;

  if (appInstance.lookup) {
    lookupSource = appInstance;
  } else {
    // ember 1.13 support
    lookupSource = appInstance.container;
  }

  lookupSource.lookup('service:document');
}

export default {
  name: 'document',
  initialize
};
