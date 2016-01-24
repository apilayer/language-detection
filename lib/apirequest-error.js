'use strict';

var Errors = {};

Errors.MissingArgumentError = function(contextName, argumentName) {
    this.message = 'The following argument is required for the `'+ contextName +'` function: '+ argumentName;
};

Errors.InvalidArgumentError = function(contextName, argumentName, errorLabel) {
    this.message = 'The '+ argumentName +' argument is invalid for the `'+ contextName +'` function: '+ errorLabel;
};

Errors.APIError = {
    MISSING_ACCESS_KEY: 101,
    INVALID_ACCESS_KEY: 101,
    INVALID_API_FUNCTION: 103,
    USAGE_LIMIT_REACHED: 104,
    HTTPS_ACCESS_RESTRICTED: 105,
    FUNCTION_ACCESS_RESTRICTED: 106,
    INACTIVE_USER: 102,
    QUERY_TEXT_IS_ARRAY: 211,
    QUERY_TEXT_NO_ARRAY: 212,
    TOO_MANY_QUERIES: 221,
    DETECTION_FAILED: 910,
    BATCH_DETECTION_FAILED: 911,
    NO_QUERY_TEXT_PROVIDED: 210,
    '404_NOT_FOUND': 404
};

/**
 * Exports ResultStatus
 * @type {Function}
 */
module.exports = Errors;