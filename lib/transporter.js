/**
 * Copyright 2016 Peter Andreas Moelgaard. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
Transporter.prototype.USER_AGENT = 'languagelayer-javascript-client/' + pkg.version;

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