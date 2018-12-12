var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic MWE4YTg2YjMtMTAwOC00M2I4LWJhOTAtNDVkMTIyZGM4YzVj"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = { 
  app_id: "1e54993c-e3e3-4a78-9b5c-f48353a797e1",
  contents: {"en": "Привет Юля и Сергей! Я знаю где вы живете и я уже выехал за вами"},
  //included_segments: ["All"]
  include_player_ids: ["85cf1841-395d-4317-9a48-3524142c31e9", "9223df0c-fda7-4a74-89e8-1151822a29b1"],
};

sendNotification(message);