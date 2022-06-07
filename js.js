var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var width = 1920
var height = 1080
var inner_Width = window.innerWidth;

const fps = 75;
const animation_speed = 1; //speed 1 = 1 second; speed 2 = 0.5 second
const gravitation = 80; //80 = 1m/s2

const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0],
    [0, 0, 7, 7, 7, 0, 0, 7, 7, 7, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 0],
    [0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 0],
    [0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

const map2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const map_background = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 0, 3, 0],
    [0, 0, 7, 0, 7, 0, 0, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const map_before_player = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]



var backgrounds = {
    "default": "images/backgrounds/background.jpg"
}
for (const el of Object.keys(backgrounds)) {
    let img = new Image();
    img.src = backgrounds[el];
    backgrounds[el] = img;
}

var blocks = {
    0: { "img": "images/blocks/air.png", "name": "air", "solid": false, "can_climb": false, "drop_shadow": false },
    1: { "img": "images/blocks/dirt.png", "name": "dirt", "solid": true, "can_climb": false, "drop_shadow": false },
    2: { "img": "images/blocks/grass.png", "name": "grass", "solid": true, "can_climb": false, "drop_shadow": false },
    3: { "img": "images/blocks/cobblestone.png", "name": "cobblestone", "solid": true, "can_climb": false, "drop_shadow": false },
    4: { "img": "images/blocks/ladder.png", "name": "ladder", "solid": false, "can_climb": true, "drop_shadow": true },
    5: { "img": "images/blocks/black.png", "name": "black", "solid": true, "can_climb": false, "drop_shadow": false },
    6: { "img": "images/blocks/oak_log.png", "name": "oak_log", "solid": true, "can_climb": false, "drop_shadow": false },
    7: { "img": "images/blocks/leaves.png", "name": "leaves", "solid": true, "can_climb": false, "drop_shadow": false },
}
for (const el in blocks) {
    let img = new Image;
    img.src = blocks[el]["img"];
    blocks[el]["img"] = img;
}


c.style.position = "fixed"

class Player {
    constructor() {
        this.size = 192;
        this.movement_speed = 3;
        this.moving_speed = 2;
        this.jump_height = 20;
        this.gravitation_work = true;
        this.foot = [this.size / 6, this.size / 7 * 3];
        this.y = 600;
        this.x = 50;
        this.row = Math.floor((this.y + this.size) / (height / 14));
        this.column = Math.floor(this.x / (width / 24));
        this.name = 'timberman';
        this.move = false;
        this.moving = false;
        this.direction = "right";
        this.animation = false;
        this.falling = false;
        this.falling_velocity = 0;
        this.climb = false
        this.can_climb = false;
        this.hp = 10;
        this.exp = 0;
        this.lvl = 0;
        this.exp_bar = document.querySelector("#exp_bar");
        this.exp_bar.style.width = 600 + "px";
        this.exp_bar_full = document.querySelector("#exp_bar_full");
        this.exp_bar_level = document.querySelector("#exp_level");
        this.health_bar = document.querySelector("#health_grid");
        this.fall_damage = true;
        this.skins = {
            "attack1": "timberman/attack1.png",
            "attack2": "timberman/attack2.png",
            "climb": "timberman/climb.png",
            "craft": "timberman/craft.png",
            "death": "timberman/death.png",
            "hurt": "timberman/hurt.png",
            "icon": "timberman/icon.png",
            "idle": "timberman/idle.png",
            "jump": "timberman/jump.png",
            "push": "timberman/push.png",
            "run": "timberman/run.png",
            "walk": "timberman/walk.png",
        }
        for (var el in this.skins) {
            let skin = this.skins[el]
            skin = new Image();
            skin.src = "images/" + this.skins[el]
            this.skins[el] = skin;
        }

        setInterval(() => {
            switch (this.animation) {
                case false:
                    switch (this.move) {
                        case "walk":
                            this.moving_speed = this.movement_speed;
                            check_border([this])
                            break;
                        case "run":
                            this.moving_speed = this.movement_speed * 2;
                            check_border([this])
                            break;
                        case false:
                            this.moving_speed = 0;
                            break;

                    }
                    switch (this.direction) {
                        case "right":
                            this.moving_speed = Math.abs(this.moving_speed);
                            check_border([this])
                            break;
                        case "left":
                            this.moving_speed = Math.abs(this.moving_speed);
                            this.moving_speed = parseInt('-' + String(this.moving_speed));
                            check_border([this])
                            break;
                    }
                    this.x += this.moving_speed;
                    break;
                case "jump":
                    if (this.move != "jump") {
                        this.move = "jump"
                        setTimeout(() => {
                            check_border([this])
                            let i = 0;
                            let jump_interval = setInterval(() => {
                                let solid = blocks[map[Math.floor((this.y + this.size + 1) / (height / 14))][Math.floor((this.x + this.foot[0] + 15) / (width / 24))]]["solid"];
                                if (i > 10 && i < 30) this.y -= this.jump_height / 20;
                                if (i > 30 && i < 40 && !solid) {
                                    this.y += this.jump_height / 10;
                                }
                                if (i >= 50) {
                                    clearInterval(jump_interval);
                                    i = 0;
                                } else i++
                            }, 10)
                        }, 0)
                    }
                    this.x += this.moving_speed * 1.5;
                    break;
            }
            let climb_under;
            try {
                let foot1 = blocks[map2[Math.floor((this.y + this.size + 5) / (height / 14))][Math.floor((this.x + this.foot[0] + 15) / (width / 24))]]["can_climb"];
                let foot2 = blocks[map2[Math.floor((this.y + this.size + 5) / (height / 14))][Math.floor((this.x + this.foot[1] - 15) / (width / 24))]]["can_climb"];
                climb_under = foot1 || foot2;
            } catch {}
            if (climb_under) {
                this.gravitation_work = false;
                this.fall_damage = false;
            } else {
                this.gravitation_work = true;
                setTimeout(() => {
                    this.fall_damage = true;
                }, 10)
            }

            if (this.animation == false) {
                if (keyboard_map["Space"] && !this.falling) {
                    this.animation = "jump";
                    player_moves["animation_six"] = 0;
                }
                if (keyboard_map["0"]) {
                    this.animation = "attack1";
                    player_moves["animation_six"] = 0;
                    animation_counter = 0;
                    keyboard_map["0"] = false
                }
                if (keyboard_map["2"]) {
                    this.animation = "attack2";
                    player_moves["animation_six"] = 0;
                    animation_counter = 0;
                    keyboard_map["2"] = false
                }
                if (keyboard_map["KeyD"]) {
                    this.direction = "right";
                    if (keyboard_map["ShiftLeft"]) this.move = "run"
                    else this.move = "walk"
                }
                if (keyboard_map["KeyA"]) {
                    this.direction = "left";
                    if (keyboard_map["ShiftLeft"]) this.move = "run"
                    else this.move = "walk"
                }
                if (keyboard_map["KeyW"]) {
                    let foot1 = blocks[map2[Math.floor((this.y + this.size - 1) / (height / 14))][Math.floor((this.x + this.foot[0] + 15) / (width / 24))]]["can_climb"];
                    let foot2 = blocks[map2[Math.floor((this.y + this.size - 1) / (height / 14))][Math.floor((this.x + this.foot[1] - 15) / (width / 24))]]["can_climb"];
                    if ((foot1 && foot2)) {
                        this.move = false;
                        this.climb = true;
                        this.move = "climb";
                        this.gravitation_work = false;
                        this.y -= this.movement_speed;
                    } else {
                        if (this.move == "climb") this.move = false;
                        this.climb = false;
                    }
                }
                if (keyboard_map["KeyS"]) {
                    this.gravitation_work = true;
                }
                if (!keyboard_map["Space"] && !keyboard_map["0"] && !keyboard_map["2"] && !keyboard_map["KeyD"] && !keyboard_map["KeyA"] && !keyboard_map["KeyW"]) {
                    this.move = false;
                }
            }
        }, 10)

    }
    setposition(x, y) {
        this.y = y - this.size / 2;
        this.x = x - this.size / 2;
    }
    setLevel() {
        let size = parseInt(this.exp_bar.style.width.slice(0, -2));
        this.exp_bar_full.style = "clip:rect(0px, " + (size * ((this.exp % 100) / 100)) + "px, 25px, 0px);"
        if (this.exp >= 100) {
            this.lvl = Math.floor(this.exp / 100);
            this.exp = this.exp % 100;
        }
        if (this.lvl > 0) {
            this.exp_bar_level.innerHTML = this.lvl;
        }
    }
    setHealth() {
        let hearts = this.health_bar.children;
        for (let i = 0; i < hearts.length; i++) {
            if (i <= this.hp / 2 - 1) {
                hearts[i].src = "./images/gui/full_heart.png";
            } else if (i == Math.ceil(this.hp / 2 - 1)) {
                hearts[i].src = "./images/gui/half_heart.png";
            } else {
                hearts[i].src = "./images/gui/heart_background.png";
            }
        }
    }
    getDamage(howMuch) {
        this.animation = "hurt";
        player_moves["hurt"] == 0;
        this.hp -= howMuch;
        this.setHealth();
    }
}

var player = new Player();
player.setLevel()
player.setHealth()

function set_canvas_size() {
    c.width = width
    c.height = height
    if (window.innerWidth - inner_Width != 0) {
        let left = parseFloat(c.style.left.slice(0, -2));
        if (left < 0) {
            c.style.left = left + (window.innerWidth - inner_Width) + "px"
        } else {
            c.style.left = 0 + "px"
        }
        inner_Width = window.innerWidth
    }
    if ((player.x + player.size / 2 >= window.innerWidth / 2 && player.x - width + player.size / 2 <= -window.innerWidth / 2)) {
        c.style.left = -player.x + window.innerWidth / 2 - player.size / 2 + "px";
    }
    if (height / 2 - player.y - player.size < 0) {
        c.style.bottom = 0 + "px"
    } else {
        c.style.bottom = -(height - innerHeight) + "px"
    }
}

var keyboard_map = {};

var player_moves = {
    6: 0,
    4: 0,
    3: 0,
    "animation_six": 0,
    "hurt": 0
}

var animation_counter = 0;

function play_animation(witch) {
    switch (witch) {
        case "jump":
            ctx.drawImage(player.skins['jump'], 192 * player_moves["animation_six"], 0, 192, 192, player.x, player.y, player.size, player.size)
            if (animation_counter >= 6) {
                animation_counter = 0;
                player.animation = false;
            }
            break;
        case "attack1":
            ctx.drawImage(player.skins['attack1'], 192 * player_moves["animation_six"], 0, 192, 192, player.x, player.y, player.size, player.size)
            if (animation_counter >= 6) {
                animation_counter = 0;
                player.animation = false;
            }
            break;
        case "attack2":
            ctx.drawImage(player.skins['attack2'], 192 * player_moves["animation_six"], 0, 192, 192, player.x, player.y, player.size, player.size)
            if (animation_counter >= 6) {
                animation_counter = 0;
                player.animation = false;
            }
            break;
        case "climb":
            break;
        case "hurt":
            ctx.drawImage(player.skins['hurt'], 192 * player_moves["hurt"], 0, 192, 192, player.x, player.y, player.size, player.size)
            if (player_moves["hurt"] >= 2) {
                player_moves["hurt"] = 0;
                player.animation = false;
            }
            break;
    }
}

function player_rotate(direction) {
    if (direction == "left") {
        ctx.translate(player.size + player.x * 2 - player.size / 3, 0);
        ctx.scale(-1, 1);
    } else if (direction == "right") {
        ctx.translate(0, 0);
        ctx.scale(1, 1);
    }
}

function draw_background(witch) {
    ctx.save()
    ctx.drawImage(witch, 0, 0)
    ctx.restore()
}

function draw_block(from, name, opacity = 1) {
    ctx.save()
    for (i = 0; i < from.length; i++) {
        for (j = 0; j < from[i].length; j++) {
            try {
                ctx.drawImage(blocks[from[i][j]]["img"], 0, 0, 192, 192, width / 24 * j, height / 14 * i, width / 24, height / 14)
            } catch {
                console.error("Draw image block: " + name + ". Collumn: " + j + ". Row: " + i);
                console.error("Missing block had been replaced with block id: 0");
                from[i][j] = 0;
                ctx.drawImage(blocks[0]["img"], 0, 0, 192, 192, width / 24 * j, height / 14 * i, width / 24, height / 14)
            }
            if (opacity != 1 && from[i][j] != 0) {
                ctx.save()
                ctx.globalAlpha = opacity
                ctx.drawImage(blocks[5]["img"], 0, 0, 192, 192, width / 24 * j, height / 14 * i, width / 24, height / 14)
                ctx.restore()
            }
        }
    }
    ctx.restore()
}


function player_draw() {
    ctx.save()
    ctx.shadowColor = "black";
    ctx.shadowBlur = 5;
    player_rotate(player.direction);
    if (!player.move && !player.animation) ctx.drawImage(player.skins['idle'], 192 * player_moves[4], 0, 192, 192, player.x, player.y, player.size, player.size);
    if (player.animation) {
        play_animation(player.animation)
    } else if (!player.jump) {
        if (player.move == "run") ctx.drawImage(player.skins['run'], 192 * player_moves[6], 0, 192, 192, player.x, player.y, player.size, player.size);
        else if (player.move == "walk") ctx.drawImage(player.skins['walk'], 192 * player_moves[6], 0, 192, 192, player.x, player.y, player.size, player.size);
        else if (player.move == "climb") ctx.drawImage(player.skins['climb'], 192 * player_moves[6], 0, 192, 192, player.x, player.y, player.size, player.size)
    }
    ctx.restore()
}

let iteration = 0;

function gravitation_pull(for_what) {
    for (var el of for_what) {
        el.row = Math.floor((el.y + el.size) / (height / 14));
        el.column = [Math.floor((el.x + el.foot[0]) / (width / 24)), Math.floor((el.x + el.foot[1]) / (width / 24))];

        if ((!blocks[map[el.row][el.column[0]]]["solid"] && (!blocks[map[el.row][el.column[1]]]["solid"])) && !el.falling && el.animation != "jump" && el.gravitation_work) {
            el.falling = true;
            let interval = setInterval(() => {
                el.row = Math.floor((el.y + el.size) / (height / 14));
                el.column = [Math.floor((el.x + el.foot[0]) / (width / 24)), Math.floor((el.x + el.foot[1]) / (width / 24))];
                if (!blocks[map[el.row][el.column[0]]]["solid"]) {
                    iteration += 0.01;
                    el.falling_velocity += gravitation / 100;
                    el.y += el.falling_velocity;
                } else if (el.falling) {
                    if (el.falling_velocity > 20 && el.fall_damage) {
                        el.getDamage(Math.floor((el.falling_velocity - 20) / 10))
                    }
                    el.falling = false
                    el.falling_velocity = 0;
                    el.y = Math.ceil(el.row * (height / 14) - el.size)
                    clearInterval(interval)
                }
            }, 10)
        }

    }
}

function check_border(for_what) {
    for (const el of for_what) {
        if (el.x <= 0 - el.size / 10 && el.direction == "left") {
            el.moving_speed = 0;
        } else if (el.x >= width - el.size / 2 && el.direction == "right") {
            el.moving_speed = 0;
        }
        try {
            check_block_colision(for_what)
        } catch {}
    }
}

function check_block_colision(for_what) {
    for (var el of for_what) {
        if (blocks[map[Math.floor((el.y + el.size - 10) / (height / 14))][Math.floor((el.x + el.foot[0] - 10) / (width / 24))]]["solid"] && el.direction == "left") {
            el.moving_speed = 0;
        }
        if (blocks[map[Math.floor((el.y + el.size - 10) / (height / 14))][Math.floor((el.x + el.foot[1] + 20) / (width / 24))]]["solid"] && el.direction == "right") {
            el.moving_speed = 0;
        }

    }
}

setInterval(() => {
    set_canvas_size();

    draw_background(backgrounds["default"])

    draw_block(map_background, "map_background", 0.6);
    draw_block(map2, "map2");

    check_border([player])

    player_draw();
    draw_block(map_before_player, "map_before_player");
    draw_block(map, "map");

    gravitation_pull([player]);

    onkeydown = onkeyup = function(e) {
        e = e || event;
        keyboard_map[e.code] = e.type == 'keydown';
    }
    onmousedown = function(e) {
        e.preventDefault()
        e = e || event
        keyboard_map[e.button] = e.isTrusted;
    }
    oncontextmenu = e => e.preventDefault();
}, 1000 / fps)

setInterval(() => {
    player_moves[6]++;
    if (player_moves[6] == 6) player_moves[6] = 0;
}, 1000 / (6 * animation_speed))
setInterval(() => {
    player_moves[4]++;
    if (player_moves[4] == 4) player_moves[4] = 0;
}, 1000 / (4 * animation_speed))
setInterval(() => {
    player_moves[3]++;
    if (player_moves[3] == 3) player_moves[3] = 0;
}, 1000 / (3 * animation_speed))
setInterval(() => {
    animation_counter++;
    player_moves["animation_six"]++;
    if (player_moves["animation_six"] == 6) player_moves["animation_six"] = 0;
}, 1000 / (12 * animation_speed))
setInterval(() => {
    player_moves["hurt"]++;
    if (player_moves["hurt"] == 3) player_moves["hurt"] = 0;
}, 100)