/**
 * Created by dingziran on 2015/3/23.
 */
var fs = require('fs');
var csv = require('csv');
var _ = require('underscore')
var all={};
exports.all=all;
exports.init=function(next) {
    var parser = csv.parse({delimiter: ','}, function(err, data){
        data.shift();
        //console.log(data[0]);
        //item = [ 'minecraft:stone', '1', '0', 'false', 'Stone' ]
        var rule=['name','id','meta','hasNbt','display'];
        all.items=_.chain(data).map(function(item){
            return _.object(rule,item);
        }).indexBy('id').value();
        //console.log(results);
        //{
        //'6128':
        //{ name: 'IC2NuclearControl:NC-BRreactorCard',
        //    id: '6128',
        //    meta: '0',
        //    hasNbt: 'false',
        //    display: 'RF Reactor Sensor Location Card' },
        //'6129':
        //{ name: 'IC2NuclearControl:NC-BRrfsensorKit',
        //    id: '6129',
        //    meta: '0',
        //    hasNbt: 'false',
        //    display: 'Remote RF Reactor Kit' } }

        next();
    });
    fs.createReadStream(__dirname + '/../resource/itempanel.csv').pipe(parser);
};


exports.init(function(){})