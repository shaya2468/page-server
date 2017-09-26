var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var getMyIp = function(callBack){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Call a function when the state changes.

        if(xhttp.readyState == 4 && xhttp.status == 200) {
            var ip = JSON.parse(xhttp.responseText).ip
            callBack(ip)
        }else{
            //TODO: do something if there is an error
        }
    }
    xhttp.open("GET", "https://freegeoip.net/json/", true);
    xhttp.send();
}



var postStuff = function(site_name, time, referrer, user_name){
    
    const params = { user_name, site_name, time }
    
    //this field is optional
    if (referrer){
        params.referrer = referrer;
    }
    
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://localhost:3333/entries', false);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }else{
            //TODO: do something if there is an error
        }
    }
    xhttp.send(JSON.stringify(params)) // Make sure to stringify
}

var postInfo = postStuff.bind(this, 'nnn', 5555, "yahoo");

getMyIp(postInfo)
