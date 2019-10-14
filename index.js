var html = document.getElementById("html");
var btn = document.getElementById("battletagBtn");

btn.addEventListener("click", function() {
    var goToPickPage = true;
    var picksCount = document.getElementById("picksCount").value;
    var myBattletag = document.getElementById("myBattletag").value;
    var enemyBattletag = document.getElementById("enemyBattletag").value;
    var bansCount = document.getElementById("bansCount").value;
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
        renderPicksHTML(myBattletag, enemyBattletag, picksCount, bansCount)
    
})

function renderPicksHTML(myBattletag, enemyBattletag, picks, bans) {
    html.innerHTML = `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Picks</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="mainPageWrapper">
        <div id="leftScreen">
            <h1>${myBattletag}</h1>
            <h3>Pick ${picks} heroes</h3>
            <image id="friendlyDruid" class="classLogo"src="images/druid.png"></image>
            <image id="friendlyHunter" class="classLogo" src="images/hunter.png"></image>
            <image id="friendlyMage" class="classLogo" src="images/mage.png"></image>
            <image id="friendlyPaladin" class="classLogo" src="images/paladin.png"></image>
            <image id="friendlyPriest" class="classLogo" src="images/priest.png"></image>
            <image id="friendlyRogue" class="classLogo" src="images/rogue.png"></image>
            <image id="friendlyShaman" class="classLogo" src="images/shaman.png"></image>
            <image id="friendlyWarlock" class="classLogo" src="images/warlock.png"></image>
            <image id="friendlyWarrior" class="classLogo" src="images/warrior.png"></image>
        </div>
        <div id="rightScreen">
            <h1>${enemyBattletag}</h1>
            <h3>Pick ${picks} heroes</h3>
            <image id="enemyDruid" class="classLogo"src="images/druid.png"></image>
            <image id="enemyHunter" class="classLogo" src="images/hunter.png"></image>
            <image id="enemyMage" class="classLogo" src="images/mage.png"></image>
            <image id="enemyPaladin" class="classLogo" src="images/paladin.png"></image>
            <image id="enemyPriest" class="classLogo" src="images/priest.png"></image>
            <image id="enemyRogue" class="classLogo" src="images/rogue.png"></image>
            <image id="enemyShaman" class="classLogo" src="images/shaman.png"></image>
            <image id="enemyWarlock" class="classLogo" src="images/warlock.png"></image>
            <image id="enemyWarrior" class="classLogo" src="images/warrior.png"></image>
        </div>
        
    </div>
    <footer id="footer">
        <p>Created by: <a href="https://github.com/panragon">PanRagon</a></p>
        <p>Contact me on <a href="https://twitter.com/PanRagon">Twitter</a> or <a href="mailto:christian.nicolai.iversen@gmail.com">email</a></p>
    </footer>
    <script src="index.js"></script>
</body>`
}