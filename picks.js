$("select").imagepicker({limit: 3});

var friendlyBtn = document.getElementById("friendlyBtn");

var enemyBtn = document.getElementById("enemyBtn");

var friendlyReady = false;
var enemyReady = true;

friendlyBtn.addEventListener("clicK", function() {
    friendlyReady = true;
    console.log("friendly hit");
    if(enemyReady) {
        renderBansHTML();
    }
})

enemyBtn.addEventListener("clicK", function() {
    enemyReady = true;
    console.log("enemy hit");
    if(friendlyReady) {
        renderBansHTML();
    }
})




function renderBansHTML() {

}