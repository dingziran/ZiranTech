/**
 * Created by dingziran on 2015/3/26.
 */
var inventory=require("./inventory");
var worldgen=require("./worldgen");
var items = require("./items");
var _ = require("underscore");
var init_manager = require("./init_manager");
var tick=1000;
init_manager.init(function(){
    //console.log(items.all.items);
    setInterval(function(){
        inventory.add(worldgen.generate());
        inventory.load(function(inv){
            var m=_.map(inv,function(value,key){
                var t={};
                if(!items.all.items[key]){
                    return null;
                }
                else {
                    t.name = items.all.items[key].display;
                    t.number = value;
                    //inv[key]=items.all.items[key];
                    return t;
                }
            });
            console.log(_.compact(m));
        })

    },tick);

});