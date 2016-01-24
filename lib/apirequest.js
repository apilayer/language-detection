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

var _ = require('lodash');
var Transporter = require('./transporter');
var APIResult = require('./apirequest-result');


var APIRequest = {};


/**
 * Create and send request to DetectLanguage API
 * @param  {object}   parameters Parameters used to form request
 * @param  {Function} callback   Callback when request finished or error found
 * @return {Request}             Returns Request object or null
 */
var requestFn = function (parameters, callback) {

    if (parameters.options.access_key == 'aab530f2dd1856e238a7c9875ca3876c') {

        if (parameters.options.service != 'detect') {
            return callback(new Error('Only Detect is supported for this account'));
        }

        parameters.options.secure = true;
        parameters.options.host = 'languagelayer.com';
        parameters.options.context = 'php_helper_scripts';
        parameters.options.service = 'language_api.php';
        parameters.options.key_type = 'secret_key';
    }

    var url = parameters.options.secure ? 'https' : 'http';
    url += '://';
    url += parameters.options.host;
    url += '/';
    url += parameters.options.context;
    url += '/';
    url += parameters.options.service;
    url += '?' + parameters.options.key_type + '=' + parameters.options.access_key;

    parameters.options.url = url;

    var req = new Transporter(parameters.options).request(parameters.params, function (err, result) {

        if (err) {
            return callback(err);
        }
        else if (result.statusCode != APIResult.OK || !_.get(result, APIResult.BODY_SUCCESS_EXPR)) {
            err = _.get(result, APIResult.BODY_ERROR_EXPR);
            return callback(err);
        }

        return callback(null, result);
    });
    return req;
};
APIRequest.request = requestFn;


/**
 * Exports APIRequest
 * @type {Function}
 */
module.exports = APIRequest;