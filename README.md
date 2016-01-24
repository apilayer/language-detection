LanguageLayer API [![Travis](https://img.shields.io/travis/pmoelgaard/languagelayer.svg)](Travis)
===
Node JavaScript wrapper for [LanguageLayer Service](https://languagelayer.com/).

Supports traditional callbacks and Promises/A+.

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


## Callbacks vs. Promises

The Promises/A+ implementation used for this is this excellent bare bones library:  
[https://www.npmjs.com/package/promise](https://www.npmjs.com/package/promise)

The language-detection library supports either mode and use of either one is not mutually exclusive to the alternative, so it's possible to use either just one exclusively or a combination, even in the same call.

    
## Simple Detection
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

## Batch Detection
Takes an array of strings and detects the language with a corresponding list of detections for each string.

###### Define Query

	var batchQuery = {
    	query: [
        	'Good afternoon, how are you today?',
        	'Guten Tag mein Herr, wie geht es Ihnen?',
        	'Buenos días señor, cómo está hoy?'
    	],
    	show_query: 1
	};

###### Request (using Callback)

	languageLayerAPI.batch(batchQuery, function (err, result) {
    	if (err) {
        	return console.log('Batch Callback (Error): ' + JSON.stringify(err));
    	}
	    console.log('Batch Callback (Result): ' + JSON.stringify(result));
	});
	
###### Request (using Promises)

	languageLayerAPI.batch(batchQuery)
    	.then(function (result) {
        	console.log('Batch Promise Resolve: ' + JSON.stringify(result));
    	})
    	.catch(function (err) {
        	console.log('Batch Promise Reject: ' + JSON.stringify(err));
    	});
    
###### Response
	{
     	"success": true,
      	"results": [
			[
	          	{
	            	"language_code": "en",
	            	"language_name": "English",
	            	"probability": 12.141682269266,
	            	"percentage": 100,
	            	"reliable_result": true
	          	}
	        ],
		    [
	        	{
	            	"language_code": "de",
	            	"language_name": "German",
	            	"probability": 23.045066185021,
	            	"percentage": 100,
	            	"reliable_result": false
	          	}
	        ],
	        [
	          	{
	            	"language_code": "es",
	            	"language_name": "Spanish",
	            	"probability": 14.560273752505,
	            	"percentage": 100,
	            	"reliable_result": false
	          	},
	          	{
	            	"language_code": "pt",
	            	"language_name": "Portuguese",
	            	"probability": 13.98519485076,
	            	"percentage": 96.05035652818,
	            	"reliable_result": false
	          	},
	          	{
	            	"language_code": "gl",
	            	"language_name": "Galician",
	            	"probability": 13.585199932687,
	            	"percentage": 93.30319033562,
	            	"reliable_result": false
	          	}
			]
	 	]
	 }
	
## Supported Languages
Returns the list of Supported Languages, similar to the list found here:  
[https://languagelayer.com/languages](https://languagelayer.com/languages)

###### Request (using Callback)

	languageLayerAPI.languages(function (err, result) {
    	if (err) {
        	return console.log('Languages Callback (Error): ' + JSON.stringify(err));
    	}
	    console.log('Languages Callback (Result): ' + JSON.stringify(result));
	});
	
###### Request (using Promises)

	languageLayerAPI.languages(detectQuery)
    	.then(function (result) {
        	console.log('Languages Promise Resolve: ' + JSON.stringify(result));
    	})
    	.catch(function (err) {
        	console.log('Languages Promise Reject: ' + JSON.stringify(err));
    	});
    
###### Response
	{
  		"success": true,
  		"languages": [
    		{
      			"language_code": "en",
      			"language_name": "English"
    		},
    		{
      			"language_code": "af",
      			"language_name": "Afrikaans"
    		},
    		{
      			"language_code": "ar",
      			"language_name": "Arabic"
    		},
    		...
    	]
    }
	
## Example Application

In the [rootdir]/example directory there is a fully functional application which runs all requests against all the endpoints in the API, the examples above can be seen there as source code.

The example application uses a process.env variable to hold the access key.

For running in development environments, it's easy to use the [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) to load variables from a local file into the environment.

## Tests

The tests are written for any NodeJS testing library, but has been run and targeted at the [https://mochajs.org/](https://mochajs.org/) testing library.

## Customer Support

Need any assistance? [Get in touch with Customer Support](mailto:support@apilayer.net?subject=%5Blanguagelayer%5D).

## Updates
Stay up to date by following [@apilayernet](https://twitter.com/apilayernet) on Twitter.

## Legal

All usage of the languagelayer website, API, and services is subject to the [languagelayer Terms & Conditions](https://languagelayer.com/terms) and all annexed legal documents and agreements.

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