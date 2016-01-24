var LanguageLayerAPI = require('language-detection');
var languageLayerAPI = new LanguageLayerAPI({
    access_key: 'aab530f2dd1856e238a7c9875ca3876c'
});

var detectQuery = {
    query: 'I like apples & oranges.',
    show_query: 0
};

languageLayerAPI.detect(detectQuery)
    .then(function (result) {
        console.log('Detect Promise Resolve: ' + JSON.stringify(result));
    })
    .catch(function (err) {
        console.log('Detect Promise Reject: ' + JSON.stringify(err));
    });