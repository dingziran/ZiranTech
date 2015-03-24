/**
 * Created by dingziran on 2015/3/24.
 */

var redis = require('redis');
var database="42.96.187.59";
var url=database;
var redis_client=redis.createClient(6379,url);
redis_client.on('error',function(err){
    console.log('Redis Error '+err);
});
exports.redis_client=redis_client;