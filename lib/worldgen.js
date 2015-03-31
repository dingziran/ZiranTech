/**
 * Created by Administrator on 2015/3/25.
 */
var _ = require('underscore');
//per thousand
var genConfig= [
    {id:4,p:500},//cobble
    {id:3,p:100},//dirt
    {id:12,p:100},//sand
    {id:13,p:100},//gravel
    {id:14,p:100},//Gold Ore
    {id:15,p:100},//Iron Ore
    {id:16,p:100},//Coal Ore
    {id:35,p:10},//Wool
    {id:82,p:100},//Clay
    {id:264,p:1},//Diamond
    {id:331,p:50},//Redstone
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