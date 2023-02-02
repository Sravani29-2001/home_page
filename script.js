
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
  
};

//document.getElementById("button").onclick = function() {alertt()};
function message(){
    
    alert("You are logging in as a requester!");
}

//document.getElementById("button").onclick = function() {message1()};
function message1(){
    
    alert("You are logging in as a Rider!");
}
