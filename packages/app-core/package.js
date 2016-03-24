Package.describe({
  name: 'app-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  /*
  * meteor modules
  * */
  api.use('ecmascript');
  api.use('accounts-password');
  api.use('mongo');
  api.use('aldeed:collection2@2.9.1');
  /*
  * meteor files
  * */
  api.addFiles([
    'schemas/users.js',
    'shared/keyMirror.js',
    'shared/modules.js',
    'app-core.js'
  ]);
  /*
  * export
  * */
  api.export(['Accounts']);
});

