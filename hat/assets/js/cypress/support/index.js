// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// now any cookie with the name 'session_id' or 'django_language'
// will not be cleared before each test runs
Cypress.Cookies.defaults({
    preserve: ['sessionid', 'django_language', 'sessionCookie'],
});
// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, _runnable, _promise) => {
    if (
        err.message.includes('AbortError') ||
        err.message.includes('The user aborted a request') ||
        err?.name.includes('ABORT_ERROR')
    ) {
        return false;
    }
    return true;
});
