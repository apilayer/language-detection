var path = require('path');
var async = require('async');

var utils = require('../lib/utils');


var LanguageLayerAPIPath = path.join(__dirname, '../', 'index');
var LanguageLayerAPI = require(LanguageLayerAPIPath);

var languageLayerAPI = new LanguageLayerAPI({
    access_key: process.env.ACCESS_KEY
});


// TEST START

var assert = require('assert');


describe('#detect()', function () {

    it('result with simple valid query in clear English, result is same length of exactly one', function (done) {

        this.timeout(10000);

        var detectQuery = {
            query: 'I like apples & oranges.'
        };

        languageLayerAPI.detect(detectQuery)
            .then(function (result) {
                assert.equal(1, result.length);
                return done();
            })
            .catch(function (err) {
                return done(err);
            });
    });
});


describe('#batch()', function () {

    it('result with 3 simple valid queries in clear English, German and Spanish', function (done) {

        this.timeout(5000);

        var detectQuery = {
            query: [
                'Good afternoon, how are you today?',
                'Guten Tag mein Herr, wie geht es Ihnen?',
                'Buenos días señor, cómo está hoy?'
            ]
        };

        languageLayerAPI.batch(detectQuery)
            .then(function (result) {
                assert.equal(3, result.length);
                return done();
            })
            .catch(function (err) {
                return done(err);
            });
    });
});


describe('#languages()', function () {

    this.timeout(10000);

    it('result with equivalent to as many languages as found on the website', function (done) {

        async.waterfall(
            [
                function (stepCallback) {

                    // Call the Website Directly
                    //var request = require('request');
                    //request.get({
                    //    uri: 'https://www.kimonolabs.com/api/4s1mnxue?apikey=873747901d90dd7c59dc21d9a09afdf7',
                    //    json: true
                    //}, function (err, response, result) {
                    //    stepCallback(err, result.results.languages);
                    //});

                    // Call the file embdeded in the test folder
                    var fs = require('fs');
                    fs.readFile(path.join(__dirname, 'data', 'languages.json'), {encoding: 'UTF8'}, function (err, result) {
                        result = JSON.parse(result);
                        stepCallback(err, result.languages);
                    });

                },
                function (languages, stepCallback) {
                    languageLayerAPI.languages()
                        .then(function (result) {

                            var diff1 = utils.difference(utils.map(languages, 'language_code'), utils.map(result, 'language_code'));
                            assert.equal(0, diff1.length, 'Following languages are not found in the supported languages service: ' + diff1);

                            var diff2 = utils.difference(utils.map(result, 'language_code'), utils.map(languages, 'language_code'));
                            assert.equal(0, diff2.length, 'Following languages are not found on the website: ' + diff2);

                            stepCallback();
                        })
                        .catch(function (err) {
                            stepCallback(err);
                        });
                }
            ],
            function (err) {
                return done(err);
            }
        )
    });
});