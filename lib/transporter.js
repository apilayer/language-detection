'use strict';

var request = require('request'),
    utils = require('./utils'),
    pkg = require('../package.json');

/**
 * Default transporter constructor.
 * Wraps request and callback functions.
 */
function Transporter(options) {
    this.options = options;
}

/**
 * Default user agent.
 */
Transporter.prototype.USER_AGENT = pkg.name + '.' + pkg.version;

/**
 * Configures request options before making a request.
 * @param {object} opts Options to configure.
 * @return {object} Configured options.
 */
Transporter.prototype.configure = function (args) {

    // set transporter user agent
    var headers = args && args.headers ? args.headers : {};
    headers['User-Agent'] = headers['User-Agent'] ? headers['User-Agent'] + ' ' + this.USER_AGENT : this.USER_AGENT;

    args = utils.extend(
        this.options,
        args,
        {headers: headers}
    );

    return args;
};

/**
 * Makes a request with given options and invokes callback.
 * @param {object} opts Options.
 * @param {Function=} opt_callback Optional callback.
 * @return {Request} Request object
 */
Transporter.prototype.request = function (args, callback) {
    args = this.configure(args);
    return request(args, callback);
};

/**
 * Exports Transporter.
 */
module.exports = Transporter;