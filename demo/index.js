var LL = require('./index');
var ll = new LL({
    access_key: '1b6ca80e888317cd45089fd711456677'
});
ll.detect({
    query: 'I like apples & oranges.',
    show_query: 1
}, function (err, result) {
    console.log(result);
});