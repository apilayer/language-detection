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
    	access_key: [ACCESS_KEY]
	});

    
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
Licensed under the Apache License, Version 2.0: [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)