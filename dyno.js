/** 
 * Created by Hanif Dwy Putra S.
 * JavaScript Tips and Tricks for Dynosaurus Game by Google Inc.
 * 22 August 2020
 * MIT License
**/

document.title = "Dyno Script made with Hanif Dwy  Putra S.";
document.querySelector("#main-content").remove();
document.body.append("Thanks, you've been using dyno script Hanif Dwy Putra S.");
document.execCommand("console", false, "clear()");

function addCloud(len) {
    if (!Obstacle) throw Error('Obstacle Dyno ERR');
    if (isNaN(len)) throw Error('addCloud(val) must be number!');
    else {
        Runner.config.MAX_CLOUDS = len;
    }
}

function hackTarget() {
    if (!Obstacle) throw Error('Obstacle Dyno ERR');
        for (let i = 0; i < Obstacle.types.length; i++) 
        {
            Obstacle.types[i].yPos = -10;
            console.log(`Obstacle with name ${Obstacle.types[i].type} has been moving.`);
            document.body.append(`\n${i+1}. ${Obstacle.types[i].type} have been changed to -10 position of y coordinate.`);
        }
};

function hackSpeed(len) {
    if (!Obstacle) throw Error('Obstacle Dyno ERR');
    if (isNaN(len)) throw Error('hackSpeed(val) must be number!');
    else {
        Runner.config.ACCELERATION = len;
        for (let i = 0; i < 10; i++) {
        document.body.append("SPEED HAS BEEN CHANGED FOR " + len);
        }
    }
}

function multipleHackSpeed(len) {
    if (!Obstacle) throw Error('Obstacle Dyno ERR');
    if (isNaN(len)) throw Error('multipleHackSpeed(val) must be number!');
    else {
        for (let i = 0; i < Obstacle.types.length; i++) {
            Obstacle.types[i].multipleSpeed = len;
            console.log(`Obstacle with name ${Obstacle.types[i].type} has been set to multiple speed for ${len}`);
        }
    }
}
