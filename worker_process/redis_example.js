const redis = require('redis');
let client = redis.createClient();


client.on('connect', () => {
    console.log('connected');
});

client.set('framework', 'AngularJS', (err, reply) => {
  console.log(reply);
});

client.get('framework', function(err, reply) {
    console.log(reply);
});
