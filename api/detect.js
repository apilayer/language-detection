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

var utils = require('../lib/utils');
var Promise = require('../lib/promise');
var APIResult = require('../lib/apirequest-result');
var APIError = require('../lib/apirequest-error');


// Declare our main module scope
var API = {};


/**
 * Detect Language from String
 *
 * @param  {object} params - Parameters for request
 * @param  {callback} callback - The callback that handles the response.
 * @return {object} Result
 */
API.detect = function (params, callback, options) {


    options = utils.defaults({}, options, this.options, {
            service: 'detect',
            method: 'GET'
        }
    );


    // Declare the promise we will use to wrap the request call
    var promise = new Promise(function (resolve, reject) {


        // Input Validation (we only do the most basic, and let the server do the most so validation will always be up to date)
        if (!params) {
            return reject(new APIError.MissingArgumentError('detect', 'params'));
        }


        // URI Encoding of the Query as per recommendation, and ensuring we are working on a new instance of the params
        if (params.query && utils.isString(params.query)) {
            params = utils.extend({}, params, {
                query: encodeURIComponent(params.query)
            });
        }


        // Prepare Parameters and prepare it for the Request modus
        params = {
            options: options,
            params: {
                json: true,
                qs: params
            }
        };


        var APIRequest = require('../lib/apirequest');
        APIRequest.request(params, function (err, result) {

            // If an error happens, we return early
            if (err) {
                return reject(err);
            }

            // parse the results to make the caller only get the actual data and hide the transport information
            result = utils.get(result, APIResult.BODY_RESULTS_EXPR);

            // and we resolve and return (not necessary to return, but keeps consistency)
            return resolve(result);
        });
    });


    // Ensure callback is set to make the main functions slightly simpler by avoiding nested conditionals
    callback = callback || utils.noop;

    // We offer callback support in addition to promise style (we know callback is set as we default it in the beginning)
    promise
        .then(function (result) {
            callback(null, result);
        })
        .catch(function (err) {
            callback(err);
        });


    // return the promise to the caller
    return promise;
};


/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;