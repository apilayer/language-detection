'use strict';

var API = {};

API.batch = require('./batch').batch;
API.detect = require('./detect').detect;
API.languages = require('./languages').languages;

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;