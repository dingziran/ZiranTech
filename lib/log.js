/**
 * Created by dingziran on 2015/3/26.
 */
var changelog=require('conventional-changelog');

changelog({}, function(err, log) {
    console.log('Here is your changelog!', log);
});