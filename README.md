LanguageLayer API
===
Node JavaScript wrapper for [LanguageLayer Service](https://languagelayer.com/).

Supports traditional callback call style and A+ promises.

&nbsp;

Installation
---
	npm install language-detection [--save]

&nbsp;

Configuration
---

Before using LanguageLayer API client you have to setup your account and obtain your API Access Key.  
You can get it by signing up at [https://languagelayer.com/product](https://languagelayer.com/product)

&nbsp;

Usage
---

The general API is documented here: [https://languagelayer.com/documentation](https://languagelayer.com/documentation)
You can find parameters, result set definitions and status codes documented here as well.


### Setup

	var LanguageLayerAPI = require('language-detection');
	
	var languageLayerAPI = new LanguageLayerAPI({
    	access_key: [ACCESS_KEY],
    	show_query: [0|1] (defaults to 0)
    	secure: [true|false] (defaults to false)
	});

#### Optional Parameters
##### Secure (only available for Basic, Pro and Enterprise accounts)
Boolean value to indicate if the calls to the API should use a secure protocol or insecure (HTTP/HTTPS). Defaults to false (HTTP, insecure).

    
### Simple Detection
Takes a simple string and detects the language with a list of detections.

###### Define Query

	var detectQuery = {
    	query: 'I like apples & oranges.'
	};

###### Simple Request (using Callback)

	languageLayerAPI.detect(detectQuery, function (err, result) {
    	if (err) {
        	return console.log('Detect Callback (Error): ' + JSON.stringify(err));
    	}
	    console.log('Detect Callback (Result): ' + JSON.stringify(result));
	});
	
###### Simple Request (using Promises)

	languageLayerAPI.detect(detectQuery)
    	.then(function (result) {
        	console.log('Detect Promise Resolve: ' + JSON.stringify(result));
    	})
    	.catch(function (err) {
        	console.log('Detect Promise Reject: ' + JSON.stringify(err));
    	});
    
###### Response
    {
		"success": true,
		"results":[
			{
				"language_code": "en",
				"language_name": "English",
				"probability": 12.141682269266,
				"percentage": 100,
				"reliable_result": true
			}
		]
	}

&nbsp;

Author
---
Peter Andreas Moelgaard ([GitHub](https://github.com/pmoelgaard), [Twitter](https://twitter.com/petermoelgaard))

&nbsp;

License
---
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2016 Peter Andreas Moelgaard & APILayer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.