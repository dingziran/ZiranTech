/**
 * Created by Administrator on 2015/3/24.
 */
var redis_client=require("./db_config").redis_client;
function load(){
    redis_client.hmset("inventory", "11", "1", "another", "23", "home", "1234");
    redis_client.hgetall("inventory",function(err,obj){
        if(err) throw err;
        console.log(obj);
        console.log("sdfsdf");
    });
}
function add(list){
    //list=[{id:2,p:200},{id:3,p:299}];
    list.forEach(function(item){
        //item={id:2,p:290}
        //redis_client.
    })
}
load();