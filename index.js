// index.js

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

import {body} from "./db.js"
import {skinColours} from "./db.js"
import {hairBack} from "./db.js"
import {hairFront} from "./db.js"
import {hairColours} from "./db.js"
import {eyes} from "./db.js"
import {hats} from "./db.js"
import {clothingColours} from "./db.js"


class button {
    constructor(ctx, imgSrc, action, number, reverse) {
        this.ctx = ctx
        this.action = action
        this.number = number
        this.reverse = reverse
        this.img = new Image()
        this.img.src = imgSrc
        this.loaded = false
    }

    draw() {
        if (this.reverse) {
            this.x = window.innerWidth - 140
            this.y = (window.innerHeight / look.length) * this.number
        } else {
            this.x = 100
            this.y = (window.innerHeight / look.length) * this.number
        }
        
        this.scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1920)

        if (this.loaded) {
            this.ctx.drawImage(this.img, this.x, this.y, this.img.width * this.scale, this.img.height * this.scale)
        } else {
            this.img.onload = () => {
                this.ctx.drawImage(this.img, this.x, this.y, this.img.width * this.scale, this.img.height * this.scale)
                this.loaded = true
            }
        }
    }

    isClicked(x, y) {
        if (x > this.x && x < this.x + this.img.width * this.scale && y > this.y && y < this.y + this.img.height * this.scale) {
            this.action()
        }
    }
}

function searchByName(name, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            return data[i].path
        }
    }
    return null;
}

function drawPath(ctx, path, x, y, scale = 1, color = '#fffff') {
    const path2D = new Path2D(path)
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(scale, scale)
    ctx.fillStyle = color
    ctx.fill(path2D)
    ctx.restore()
}

const shirt = searchByName('shirt', body)
const head = searchByName('head', body)
const arms = searchByName('arms', body)
const legs = searchByName('legs', body)

function drawCharacter(ctx, skin, pantsColour, shirtColour, face, hat, hair) {
    skin = Math.abs(skin)
    pantsColour = Math.abs(pantsColour)
    shirtColour = Math.abs(shirtColour)
    face = Math.abs(face)
    hat = Math.abs(hat)
    hair[0] = Math.abs(hair[0])
    hair[1] = Math.abs(hair[1])
    hair[2] = Math.abs(hair[2])

    let x = (window.innerWidth / 2) - 200 * Math.min(window.innerWidth / 1000, window.innerHeight / 1000)
    let y = (window.innerHeight / 2) - 220 * Math.min(window.innerWidth / 1000, window.innerHeight / 1000)
    let scale = Math.min(window.innerWidth / 1000, window.innerHeight / 1000)
    const colour = skinColours[skin % (skinColours.length)]
    drawPath(ctx, hairBack[hair[0] % (hairBack.length + 1)], x, y, scale, hairColours[hair[2] % hairColours.length])
    drawPath(ctx, head, x, y, scale, colour)
    drawPath(ctx, eyes[face % (eyes.length + 1)], x + (75 * scale), y + (100 * scale), scale, "black")
    drawPath(ctx, hairFront[hair[1] % (hairFront.length + 1)], x, y, scale, hairColours[hair[2] % hairColours.length])
    drawPath(ctx, arms, x + (90 * scale), y + (320 * scale), scale, colour)
    drawPath(ctx, legs, x + (133 * scale), y + (430 * scale), scale, clothingColours[pantsColour % clothingColours.length])
    drawPath(ctx, shirt, x + (85 * scale), y + (250 * scale), scale, clothingColours[shirtColour % clothingColours.length])
    console.log(shirtColour % clothingColours.length)
    console.log(clothingColours[shirtColour % clothingColours.length])
    const img = new Image();
    img.src = hats[hat % (hats.length)]
    console.log(hat)
    img.onload = function() {
        let hatScale = 4.4
        ctx.drawImage(img, x, y - 29 * hatScale * scale, img.width * hatScale * scale, img.height * hatScale * scale)
    }
}

function drawEverything() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCharacter(ctx, look[0], look[6], look[7], look[1], look[2], [look[3], look[4], look[5]])
    drawButtons();
}

let look = [0,0,0,0,0,0,0,0];
let buttons = []

function createButtonPair(number) {
    buttons[number] = []
    buttons[number][0] = new button(ctx, 'ArrowButton.svg', () => look[number] += 1, number, true)
    buttons[number][1] = new button(ctx, 'ArrowButtonReverse.svg', () => look[number] -= 1, number, false)
    console.log(number)
}

for (let i = 0; i < 8; i++) {
    createButtonPair(i)
}

function drawButtons() {
    for (let i = 0; i < buttons.length; i++) {
        for (let j = 0; j < buttons[i].length; j++) {
            buttons[i][j].draw()
        }
    }
}

drawEverything()

canvas.addEventListener('click', (e) => {
    for (let i = 0; i < buttons.length; i++) {
        for (let j = 0; j < buttons[i].length; j++) {
            buttons[i][j].isClicked(e.clientX, e.clientY)
        }
    }
    drawEverything()
});

window.addEventListener('resize', drawEverything);
