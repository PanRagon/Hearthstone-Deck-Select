var html = document.getElementById("html");
var btn = document.getElementById("battletagBtn");
$("imagePicker").imagepicker({limit: 3});

var picksCount = 0;
var bansCount = 0;
var myBattletag = "";
var enemyBattletag = "";

btn.addEventListener("click", function() {
    var goToPickPage = true;
    picksCount = document.getElementById("picksCount").value;
    myBattletag = document.getElementById("myBattletag").value;
    enemyBattletag = document.getElementById("enemyBattletag").value;
    bansCount = document.getElementById("bansCount").value;
    if(myBattletag == "") {
        alert("Please enter a battletag for yourself");
        return;
    }
    if(enemyBattletag == ""){
        alert("Please enter a battletag for your opponent");
        goToPickPage = false;
        return;
    }
    if(picksCount <= bansCount) {
        alert("You need to pick more heroes than you ban");
        return;
    }
    window.location="picks.html";
    
})

function renderPicksHTML(battletag, picks) {
    html.innerHTML = `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Picks</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="assets/image-picker.js"></script>
</head>
<body>
    <div id="mainPageWrapper">
        <h1>Player ${battletag}</h1>
        <h3>Pick ${picks} heroes</h3>
        <select class="imagePicker" class="classLogo" data-limit="3" multiple="multiple">
            <option data-img-src="images/druid.png" data-img-class="classLogo" value="friendlyDruid">Druid</option>
            <option data-img-src="images/hunter.png" data-img-class="classLogo" value="friendlyHunter">Hunter</option>
            <option data-img-class="classLogo" data-img-src="images/mage.png" value="friendlyMage">Mage</option>
            <option data-img-class="classLogo" data-img-src="images/paladin.png" value="friendlyPaladin">Paladin</option>
            <option data-img-class="classLogo" data-img-src="images/priest.png" value="friendlyPriest">Priest</option>
            <option data-img-class="classLogo" data-img-src="images/rogue.png" value="friendlyRogue">Rogue</option>
            <option data-img-class="classLogo" data-img-src="images/shaman.png" value="friendlyShaman">Shaman</option>
            <option data-img-class="classLogo" data-img-src="images/warlock.png" value="friendlyWarlock">Warlock</option>
            <option data-img-class="classLogo" data-img-src="images/warrior.png" value="friendlyWarrior">Warrior</option>
        </select>

        <button id="friendlyBtn" type="button">Submit</button>
    </div>
    <footer id="footer">
        <p>Created by: <a href="https://github.com/panragon">PanRagon</a></p>
        <p>Contact me on <a href="https://twitter.com/PanRagon">Twitter</a> or <a href="mailto:christian.nicolai.iversen@gmail.com">email</a></p>
    </footer>
    <script src="index.js"></script>

</body>`

setTimeout(function(){$("imagePicker").imagepicker({limit: 3})}, 0);
}
