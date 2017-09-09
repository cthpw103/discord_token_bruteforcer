//yeah ok
const discord = require("discordie"); //i use discordie b'cuz lazy
var user = new discord(); //user object
var start = ["Mj", "its_a_bot"];
var length = [59, 64, 57, 80]; //some tokens are 59 chars longs and some are 64 chars long, mainly 59 though.
function try_to_do_a_thing(token) { 
    try{
    console.log("trying "+token)
    user.connect({
        token: token
    });   
    console.log("ok");
    client.Dispatcher.on("GATEWAY_READY", a => {
        console.log("Yay! Found " + client.User.username + "'s token, it's "+ token);
    });
    } catch (err) {
    console.log("Can't Login /shrug");
    gener8();
    }
}
function gener8() { 
    try{
        console.log("generating token");
        //you can joke about murder but not about rape :'(
        //token alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ.abcdefghijklmnopqrstuvwxyz-0123456789_
        console.log("trying token");
        var chance = Math.random() * 100;
        if (chance < 80) {
            try_to_do_a_thing(make_token2());
        } else if (chance < 85) {
            try_to_do_a_thing(make_token());
        } else {
            try_to_do_a_thing(make_token2());
        }
        
    } catch (err) {
        console.log("lol error");
    }
}
function do_it() { 
    console.log("hi!");
    try{
        console.log("generating!");
        gener8();
    } catch (err) {
        console.log("lol error");
    }
}
function make_token() {
  var text = "";
  var possible = "MJABCDEFGHIJKLMNOPQRSTUVWXYZ.abcdefghijklmnopqrstuvwxyz-0123456789_";

  for (var i = 0; i < length[1]; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function make_token2() {
  var text = "";
  var possible = "MJABCDEFGHIJKLMNOPQRSTUVWXYZ.abcdefghijklmnopqrstuvwxyz-0123456789_";

  for (var i = 0; i < length[3]; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return "Mj"+text;
}
do_it(); //b1nzy dont ratelimit me ;-;
//dabbit is the god
