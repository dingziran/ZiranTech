/**
 * Created by dingziran on 2015/3/23.
 */
var items=require("./items");
function init(next){
    items.init(function(err){
        if(err) throw err;
        next();
    });
}
exports.init=init;