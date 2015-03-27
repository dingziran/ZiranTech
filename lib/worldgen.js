/**
 * Created by Administrator on 2015/3/25.
 */
var _ = require('underscore');
//per thousand
var genConfig= [
    {id:1,p:30},
    {id:2,p:1000},
    {id:4,p:4}
];
function generate(){
    //[ { id: 2, p: 1000 } ]
    return _.filter(genConfig,function(item){
        if(Math.random()*1000<item.p){
            return true;
        }
        else{
            return false;
        }
    });
}
exports.generate=generate;

//console.log(generate());