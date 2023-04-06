let xp = 0;
let gold = 50;
let health = 100;
let currentWeapon = 0;
let fighting;
let inverntory = ["stick"];
let monsterHealth;
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const text = document.querySelector("#text")
const xpText = document.querySelector("#xpText")
const healthText = document.querySelector("#healthText")
const goldText = document.querySelector("#goldText")
const monsterStats = document.querySelector("#mosterStats")
const monsterHealthText = document.querySelector("#monsterHealth")
const monsterNameText = document.querySelector('#mosterName')
const locations = [
    {
        name: "Town Square",
        "button text": ["Go to store", "Go to cave", "fight the dragon"],
        "button function": [goStore, goCave, fightDragon],
        text: "You in da town square."
    },
    {
        name: "Shop",
        "button text": ["Buy health", "Buy weapon", "Back to town"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: "You in da shop." 
    },
    {
        name: "Cave",
        "button text": ["Attack Slime", "Attack Were-wolf", "Back to town"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: "You in da shop." 
    }
]

const weapons = [
    {name: "Stick", power: 5, cost: 5},
    {name: "dagger", power: 10, cost: 10},
    {name: "claw hammer", power: 50, cost: 20},
    {name: "Sword", power: 100, cost: 40}
]

//initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
console.log("Go to store running");

function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button function"][0];
    button2.onclick = location["button function"][1];
    button3.onclick = location["button function"][2];
    text.innerText = location.text;
} 

function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);

}

function buyHealth(){
    if(gold < 10) text.innerText = "Not enough gold.";
    else if(health == 100) text.innerText = "Already full health";
    else{
        gold -= 10;
        if(health + 10 >= 100) health = 100
        else health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }
}
function buyWeapon(){
    let weapon1 = Math.floor(Math.random() * 4);
    let weapon2 = Math.floor(Math.random() * 4);

    while(weapon1 == weapon2){ 
        if(weapon2 == 3) weapon2 = 0;
        else weapon2 += 1; 
    }

    let weapon3 = Math.floor(Math.random() * 4);

    while(weapon1 == weapon3 || weapon2 == weapon3){
        if(weapon3 == 3) weapon3 = 0
        else weapon3 += 1;
    }

    button1.innerText = weapons[weapon1].name;
    button2.innerText = weapons[weapon2].name;
    button3.innerText = weapons[weapon3].name;
    button1.onclick = function(){takeWeapon(weapon1);}
    button2.onclick = function(){takeWeapon(weapon2);}
    button3.onclick = function(){takeWeapon(weapon3);}


}

function takeWeapon(wNum) {
    console.log("taken weapon");
    console.log("gold is:" + gold);
    console.log("weapon cost is: " + weapons[wNum].cost);
    if(gold < weapons[wNum].cost) text.innerText = "Not enough gold";
    else{
        inverntory = weapons[wNum].name;
        gold = gold - weapons[wNum].cost;
        console.log("gold is:" + gold);
        goldText.innerText = gold;
    }
    console.log("current weapon: " + inverntory);
    goStore;
}



function goCave(){
    update(locations[2]);
    console.log("CAVe");
}





function fightDragon(){
    console.log("Fight dragon.")
}