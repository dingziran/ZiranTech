/**
 * Created by dingziran on 2015/3/26.
 */
var changelog=require('conventional-changelog');
var fs = require('fs');

changelog({},function(err,log){
    if (err) {
        throw new Error(err);
    }
    fs.writeFileSync('CHANGELOG.md', log);
});