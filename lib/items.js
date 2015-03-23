/**
 * Created by dingziran on 2015/3/23.
 */
var fs = require('fs');
var csv = require('csv');
var items=[];
var parser = csv.parse({delimiter: ','}, function(err, data){
    data.shift();
    //console.log(data[0]);
    items=data;
});
exports.init=function() {
    fs.createReadStream(__dirname + '/../resource/itempanel.csv').pipe(parser);
};