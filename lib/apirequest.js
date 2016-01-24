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

var Transporter = require('./transporter');
var ResultStatus = require('./result-status');


var APIRequest = {};


/**
 * Create and send request to DetectLanguage API
 * @param  {object}   parameters Parameters used to form request
 * @param  {Function} callback   Callback when request finished or error found
 * @return {Request}             Returns Request object or null
 */
var requestFn = function(parameters, callback) {

    var url = parameters.options.ssl ? 'https' : 'http';
    url += '://';
    url += parameters.options.host;
    url += '/';
    url += parameters.options.context;
    url += '/';
    url += parameters.options.service;
    url += '?access_key=' + parameters.options.access_key;

    parameters.options.url = url;

    var req = new Transporter(parameters.options).request(parameters.params, function (err, result) {

        if (err) {
            return callback(err);
        }

        switch (result.statusCode) {
            case ResultStatus.OK:
                callback(null, result);
                break;

            default:
                callback(result);
                break;
        }
    });
    return req;
};
APIRequest.request = requestFn;


/**
 * Exports APIRequest
 * @type {Function}
 */
module.exports = APIRequest;