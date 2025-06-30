//1. store "username" on local storage (yes that should work)
//2. BAN system adopted from scratch (YES)

//1: 10,X,2 | 10: 10,10,X | 11: 10,X,1,2

localStorage.setItem("username",typeof localStorage.getItem("username")==undefined?Math.random():localStorage.getItem("username"));
var cloud_last_remixed = typeof cloud_last_remixed==undefined?-1:cloud_last_remixed;
var cloud_remixes = typeof cloud_remixes==undefined?0:cloud_remixes;

function stack(init,num){
    prefix = [10]
    suffix = []
    jnum = num
    while (jnum % 10 == 0){
        prefix=prefix.concat(10);
        jnum /= 10
    }
    jnum--
    while (jnum != 0){
        suffix=suffix.concat(jnum % 10+1)
        jnum -= jnum % 10;
        jnum /= 10;
    }
    return "{"+prefix+","+init+(suffix.length!=0?(","+suffix):"")+"}"
    
}
function num_to_ban(num){
    gay = []
    inum = num
    while (inum>1){
        gay = [Math.floor(inum)].concat(gay);
        inum*=(inum % 1) //what the fuck is this???
    }
    result = (10**(10**inum)).toFixed(3)
    for (let i in gay){
        result = stack(result,gay[i])
    }
    return result
}

function Remix(){
    if (cloud_last_remixed != localStorage.getItem("username")){
        cloud_last_remixed = localStorage.getItem("username")
        cloud_remixes++
    }
    else {
        console.warn("fuck you self-remixer nobody likes you fuck you fuck you fuck you")
    }
}

function mainLoop(){
    document.getElementById("number").innerHTML = num_to_ban(1.001**cloud_remixes-1);
    document.getElementById("remix").innerHTML = "Remix <font size=+3>"+cloud_remixes+"</font>"
}

setInterval(mainLoop,100,1)