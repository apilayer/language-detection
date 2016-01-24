var path = require('path');

var LanguageLayerAPIPath = path.join(__dirname, '../', 'index');
var LanguageLayerAPI = require(LanguageLayerAPIPath);

var languageLayerAPI = new LanguageLayerAPI({
    access_key: process.env.ACCESS_KEY
});

// ERRORS

//var errorQuery = null;
//
//languageLayerAPI.detect(errorQuery, function (err, result) {
//    if (err) {
//        return console.log('Detect Callback Null (Error): ' + JSON.stringify(err));
//    }
//    console.log('Detect Callback Null (Result): ' + JSON.stringify(result));
//});


// DETECT

//var detectQuery = {
//    query: 'I like apples & oranges.',
//    show_query: 1
//};
//
//languageLayerAPI.detect(detectQuery, function (err, result) {
//    if (err) {
//        return console.log('Detect Callback (Error): ' + JSON.stringify(err));
//    }
//    console.log('Detect Callback (Result): ' + JSON.stringify(result));
//});
//
//languageLayerAPI.detect(detectQuery)
//    .then(function (result) {
//        console.log('Detect Promise Resolve: ' + JSON.stringify(result));
//    })
//    .catch(function (err) {
//        console.log('Detect Promise Reject: ' + JSON.stringify(err));
//    });


// BATCH

//var batchQuery = {
//    query: [
//        'Good afternoon, how are you today ?',
//        'Guten Tag mein Herr, wie geht es Ihnen?',
//        'Buenos días señor, cómo está hoy?'
//    ],
//    show_query: 1
//};
//
//languageLayerAPI.batch(batchQuery, function (err, result) {
//    if (err) {
//        return console.log('Batch Callback (Error): ' + JSON.stringify(err));
//    }
//    console.log('Batch Callback (Result): ' + JSON.stringify(result));
//});
//
//languageLayerAPI.batch(batchQuery)
//    .then(function (result) {
//        console.log('Batch Promise Resolve: ' + JSON.stringify(result));
//    })
//    .catch(function (err) {
//        console.log('Batch Promise Reject: ' + JSON.stringify(err));
//    });


// SUPPORTED LANGUAGES

var languagesQuery = {};

languageLayerAPI.languages(languagesQuery, function (err, result) {
    if (err) {
        return console.log('Languages Callback (Error): ' + JSON.stringify(err));
    }
    console.log('Languages Callback (Result): ' + JSON.stringify(result));
});

languageLayerAPI.languages()
    .then(function (result) {
        console.log('Languages Promise Resolve: ' + JSON.stringify(result));
    })
    .catch(function (err) {
        console.log('Languages Promise Reject: ' + JSON.stringify(err));
    });