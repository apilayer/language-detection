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


    // For demo purposes we enable being able to use the publicly available key, and if so, we use the reserved demo gateway
    if (parameters.options.access_key == '[SECRET_KEY]') {

        if (parameters.options.service != 'detect') {
            return callback(new Error('Only Detect is supported for this account'));
        }

        parameters.options.secure = true;
        parameters.options.host = 'languagelayer.com';
        parameters.options.context = 'php_helper_scripts';
        parameters.options.service = 'language_api.php';
        parameters.options.key_type = 'secret_key';
        parameters.options.access_key = 'aab530f2dd1856e238a7c9875ca3876c';
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