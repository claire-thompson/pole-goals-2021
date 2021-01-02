let [chooseLevel, levelDetails, result, trickName, trickImage] = ['choose-level', 'level-details', 'result', 'trick-name', 'trick-image'].map(id => document.getElementById(id));

let beginnerTricks = ['Attitude Spin', 'Back Hook', 'Basic Climb', 'Chair Spin', 'Chopper', 'Cradle Spin', 'Dip', 'Drama Queen', 'Fan Kick', 'Fireman Spin', 'Front Hook', 'Hello Boys', 'Knee Spin', 'Martini Spin', 'Pirouette', 'Pole Sit', 'Reverse Stag Spin', 'Reverse Sunwheel', 'Scissor Sit', 'Secretary Sit', 'Secretary Spin', 'Stag Spin', 'Sunwheel'];
let intermediateTricks = ['Anastasia Frog', 'Assisted Pencil Spin', 'Baby Valentine', 'Ballerina Spin', 'Brass Monkey', 'Butterfly', 'Carousel Spin', 'Closed Rainbow', 'Corkscrew Spin', 'Cross Knee Layback', 'Crucifix', 'Cupid', 'Dive Down', 'Eros', 'Fairy Sit', 'Figurehead', 'Flag Dismount', 'Flatline Scorpio', 'Genie', 'Hood Ornament', 'Jamilla', 'Jasmine', 'Juliet Spin', 'Knee Hold', 'Knee Swing', 'Marley', 'One Leg Crucifix', 'Outside Leg Hang', 'Pike Hip Hold', 'Reiko', 'Reiko Mount', 'Remi Layback', 'Remi Sit', 'Reverse Grab Spin', 'Side Climb', 'Sit Spin', 'Split Grip Splits', 'Stargazer', 'Straddle Spin', 'Superman', 'Switch Leap', 'Upright Split Grip Straddle', 'Z Pose'];
let advancedTricks = ['Aerial Chopper', 'Anastasia', 'Apprentice', 'Archer', 'Ayesha', 'Broken Doll', 'Cartwheel Dismount', 'Cheba Split', 'Dangerous Bird', 'Dragon Tail', 'Elbow Grip Ayesha', 'Extended Butterfly', 'Fang', 'Martini Sit', 'Inside Leg Hang', 'Inverted Ankle Grip Split', 'Jade Split', 'One Arm Invert', 'Poison', 'Seahorse', 'Shoulder Mount', 'Sneaky V', 'Tailpipe', 'Tornado', 'Twisted Grip Handspring', 'Twisted Grip Handspring Pencil'];
let extremeTricks = ['Aerial Shoulder Mount', 'Agata', 'Bird of Paradise', 'Bui Bui Bend', 'Cast-off', 'Chopsticks', 'Elf', 'Flip', 'Full Moon', 'Hip Hold Tuck', 'Iron X', 'Jallegra', 'Meathook', 'Meridian', 'Pegasus', 'Planche', 'Russian Layback', 'Shoulder Mount Twist'];

let beginnerImages = ['img/attitude-spin.gif', 'img/back-hook.gif', 'img/basic-climb.gif', 'img/chair-spin.gif', 'img/chopper.gif', 'img/cradle-spin.gif', 'img/dip.gif', 'img/drama-queen.gif', 'img/fan-kick.gif', 'img/fireman-spin.gif', 'img/front-hook.gif', 'img/hello-boys.gif', 'img/knee-spin.gif', 'img/martini-spin.jpg', 'img/pirouette.gif', 'img/pole-sit.gif', 'img/reverse-stag-spin.jpg', 'img/reverse-sunwheel.gif', 'img/scissor-sit.gif', 'img/secretary-sit.gif', 'img/secretary-spin.gif', 'img/stag-spin.jpg', 'img/sunwheel.gif'];
let intermediateImages = ['img/anastasia-frog.gif', 'img/assisted-pencil-spin.gif', 'img/babyvalentine.jpg', 'img/ballerina-spin.gif', 'img/brass-monkey.jpg', 'img/butterfly.jpg', 'img/carousel-spin.gif', 'img/closed-rainbow.jpg', 'img/corkscrew-spin.gif', 'img/cross-knee-layback.gif', 'img/crucifix.jpg', 'img/cupid.jpg', 'img/dive-down.jpg', 'img/eros.jpg', 'img/fairy-sit.jpg', 'img/figurehead.jpg', 'img/flag-dismount.jpg', 'img/flatline-scorpio.jpg', 'img/genie.jpg', 'img/hood-ornament.jpg', 'img/jamilla.gif', 'img/jasmine.gif', 'img/juliet-spin.gif', 'img/knee-hold.jpg', 'img/knee-swing.jpg', 'img/marley.jpg', 'img/one-leg-crucifix.jpg', 'img/outside-leg-hang.jpg', 'img/pike-hip-hold.jpg', 'img/reiko.jpg', 'img/reiko-mount.jpg', 'img/remi-layback.jpg', 'img/remi-sit.jpg', 'img/reverse-grab-spin.jpg', 'img/reverse-handstand-variation.jpg', 'img/reverse-superman.jpg', 'img/side-climb.jpg', 'img/sit-spin.jpg', 'img/split-grip-splits.jpg', 'img/stargazer.jpg', 'img/straddle-spin.jpg', 'img/superman.jpg', 'img/switchleap.jpg', 'img/upright-split-grip-straddle.jpg', 'img/z-pose.jpg'];
let advancedImages = ['img/aerial-invert.jpg', ' img/anastasia.jpg', 'img/apprentice.jpg', 'img/archer.jpg', 'img/ayesha.jpg', 'img/broken-doll.jpg', 'img/cartwheel-dismount.gif', 'img/cheba-split.jpg', 'img/dangerous-bird.jpg', 'img/dragontail.jpg', 'img/elbow-grip-ayesha.jpg', 'img/extended-butterfly.jpg', 'img/fang.jpg', 'img/martini-sit.jpg', 'img/inside-leg-hang.jpg', 'img/inverted-ankle-grip-split.jpg', 'img/jade-split.jpg', 'img/one-arm-invert.jpg', 'img/poison.jpg', 'img/seahorse.jpg', 'img/shoulder-mount.jpg', 'img/sneaky-v.jpg', 'img/tailpipe.jpg', 'img/tornado.jpg', 'img/twisted-grip-handspring.jpg', 'img/twisted-grip-handspring-pencil.jpg'];
let extremeImages = ['img/aerial-shoulder-mount.jpg', 'img/agata.jpg', 'img/bird-of-paradise.jpg', 'img/bui-bui-bend.jpg', 'img/cast-off.jpg', 'img/chopsticks.jpg', 'img/elf.jpg', 'img/flip.jpg', 'img/full-moon.jpg', 'img/hip-hold-tuck.jpg', 'img/iron-x.jpg', 'img/jallegra.jpg', 'img/meathook.jpg', 'img/meridian.jpg', 'img/pegasus.jpg', 'img/planche.jpg', 'img/russian-layback.jpg', 'img/shoulder-mount-twist.jpg'];

/* Initial States */

result.style.display = 'none';
levelDetails.style.display = 'none';

/* Functions */

function beginnerResult() {
    trickList = beginnerTricks;
    imageList = beginnerImages;

    randomNumber = Math.floor((Math.random() * trickList.length));

    trick = trickList[randomNumber];
    image = imageList[randomNumber];

    chooseLevel.style.display = 'none';
    result.style.display = 'block';
    trickName.innerHTML = trick;
    trickImage.src = image;
};

function intermediateResult() {
    trickList = intermediateTricks;
    imageList = intermediateImages;

    randomNumber = Math.floor((Math.random() * trickList.length));

    trick = trickList[randomNumber];
    image = imageList[randomNumber];

    chooseLevel.style.display = 'none';
    result.style.display = 'block';
    trickName.innerHTML = trick;
    trickImage.src = image;
};


function advancedResult() {
    trickList = advancedTricks;
    imageList = advancedImages;

    randomNumber = Math.floor((Math.random() * trickList.length));

    trick = trickList[randomNumber];
    image = imageList[randomNumber];

    chooseLevel.style.display = 'none';
    result.style.display = 'block';
    trickName.innerHTML = trick;
    trickImage.src = image;
};

function extremeResult() {
    trickList = extremeTricks;
    imageList = extremeImages;

    randomNumber = Math.floor((Math.random() * trickList.length));

    trick = trickList[randomNumber];
    image = imageList[randomNumber];

    chooseLevel.style.display = 'none';
    result.style.display = 'block';
    trickName.innerHTML = trick;
    trickImage.src = image;
};

function explainLevels() {
    levelDetails.style.display = 'block';
}

function closeExplain() {
    levelDetails.style.display = 'none';
}

function reset() {
    chooseLevel.style.display = 'block';
    result.style.display = 'none';
};