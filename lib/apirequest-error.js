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