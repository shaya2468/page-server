// Form fields, see IDs above



var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var postStuff = function(){
    
    const params = {
        user_name: 'kyle',
        site_name: 'walla',
        time: 666333,
        referrer: "google"
    
    }
    
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3333/entries', false);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    console.log('aaa');
    http.onreadystatechange = function() {//Call a function when the state changes.
        console.log('bbb');
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }else{
            console.log('what?! ' + http.status );
        }
    }
    
    http.send(JSON.stringify(params)) // Make sure to stringify
}


// postStuff();

var getStuff = function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Call a function when the state changes.

        if(xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }else{
            // console.log('what?! ' + xhttp.status );
        }
    }
    xhttp.open("GET", "http://localhost:3333/entries/kyle?aaa=bbb&blbbbb=pppp", true);
    xhttp.send();
}

getStuff();