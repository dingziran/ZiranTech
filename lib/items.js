/**
 * Created by dingziran on 2015/3/23.
 */
var fs = require('fs');
var csv = require('csv');
var items=[];
exports.items=items;
exports.init=function(next) {
    var parser = csv.parse({delimiter: ','}, function(err, data){
        data.shift();
        //console.log(data[0]);
        //item = [ 'minecraft:stone', '1', '0', 'false', 'Stone' ]
        data.forEach(function(itemArray){
            var item={};
            item.id=parseInt(itemArray[1]);
            item.meta=parseInt(itemArray[2]);
            item.name=itemArray[0];
            item.display=itemArray[4];
            item.hasNbt=itemArray[3];
            items.push(item);
        });
        //console.log(items);
        next();
    });
    fs.createReadStream(__dirname + '/../resource/itempanel.csv').pipe(parser);
};