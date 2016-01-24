'use strict';

var _ = require('lodash');
var utils = require('../lib/utils');
var Promise = require('../lib/promise');
var APIResult = require('../lib/apirequest-result');

// Declare our main module scope
var API = {};

/**
 * List of Supported Languages
 *
 * @param  {object} params - Parameters for request
 * @param  {callback} callback - The callback that handles the response.
 * @return {object} Result
 */
API.languages = function (params, callback) {

    // Ensure callback is set to make the main functions slightly simpler by avoiding nested conditionals
    callback = callback || _.noop;


    // Set Options for the Request
    var options = utils.extend({}, this.options, {
            service: 'languages',
            method: 'GET'
        }
    );

    // Prepare Parameters and prepare it for the Request modus
    params = {
        options: options,
        params: {
            json: true,
            qs: params
        }
    };

    // Declare the main function where we call the API
    var requestFn = function (resolve, reject) {

        var APIRequest = require('../lib/apirequest');
        APIRequest.request(params, function (err, result) {

            // If an error happens, we return early
            if (err) {
                return reject(err);
            }

            // parse the results to make the caller only get the actual data and hide the transport information
            result = _.get(result, APIResult.BODY_LANGUAGES_EXPR);

            // and we resolve and return (not necessary to return, but keeps consistency)
            return resolve(result);
        });
    };

    // Declare the promise we will use to wrap the request call
    var promise = new Promise(requestFn);

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