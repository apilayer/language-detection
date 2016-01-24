var path = require('path');

var LanguageLayerAPIPath = path.join(__dirname, '../', 'index');
var LanguageLayerAPI = require(LanguageLayerAPIPath);

var languageLayerAPI = new LanguageLayerAPI({
    access_key: process.env.ACCESS_KEY
});

var detectQuery = {
    query: 'I like apples & oranges.',
    show_query: 1
};

languageLayerAPI.detect(detectQuery, function (err, result) {
    if (err) {
        return console.log('Detect Callback (Error): ' + err.toJSON());
    }
    console.log('Detect Callback (Result): ' + result);
});

languageLayerAPI.detect(detectQuery)
    .then(function (result) {
        console.log('Detect Promise Resolve: ' + result);
    })
    .catch(function (err) {
        console.log('Detect Promise Reject: ' + err.toJSON());
    });