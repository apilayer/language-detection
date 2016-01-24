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
var utils = require('../lib/utils');
var Promise = require('../lib/promise');

var API = {};

/**
 * Detect Language from String
 *
 * @param  {object} params - Parameters for request
 * @param  {callback} callback - The callback that handles the response.
 * @return {object} Result
 */
API.detect = function (params, callback) {

    var options = utils.extend({}, this.options, {
            service: 'detect',
            method: 'GET'
        }
    );

    // Prepare Parameters and prepare it for the Request modus
    params = _.isString(params) ? {query: params} : params;
    params = {
        options: options,
        params: {
            json: true,
            qs: params
        }
    };


    var requestFn = function(resolve, reject) {

        var APIRequest = require('../lib/apirequest');
        APIRequest.request(params, function (err, result) {

            if (err) {
                return reject(err);
            }

            result = _.get(result.body, 'results');

            resolve(result);
        });
    };

    var promise = new Promise(requestFn);

    if(callback) {
        promise
            .then(function(result) {
                callback(null, result);
            })
            .catch(function(err) {
                callback(err);
            })
    }

    return promise;
};


/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = API;