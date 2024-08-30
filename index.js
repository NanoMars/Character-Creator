// index.js

const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

import {body} from "./db.js"
import {skinColours} from "./db.js"
import {hairBack} from "./db.js"
import {hairFront} from "./db.js"
import {eyes} from "./db.js"
import {hats} from "./db.js"

class button {
    constructor(ctx, imgSrc, action, x, y, scale = 1) {
        this.ctx = ctx
        this.action = action
        this.x = x
        this.y = y
        this.scale = scale
        this.img = new Image()
        this.img.src = imgSrc
        this.loaded = false
        console.log(this.img)
        this.img.onload = function() {
            this.loaded = true
        }
    }

    draw() {
        if (this.loaded) {
            this.ctx.drawImage(this.img, this.x, this.y, this.img.width * this.scale, this.img.height * this.scale)
        } else {
            this.img.onload = () => {
                this.ctx.drawImage(this.img, this.x, this.y, this.img.width * this.scale, this.img.height * this.scale)
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

function drawCharacter(ctx, x, y, scale = 1, skin, pantsColour, shirtColour, face, hat, hair) {
    console.log(hair[2])
    const colour = skinColours[skin]
    drawPath(ctx, hairBack[hair[0]], x, y, scale, hair[2])
    drawPath(ctx, head, x, y, scale, colour)
    drawPath(ctx, hairFront[hair[1]], x, y, scale, hair[2])
    drawPath(ctx, eyes[face], x + (75 * scale), y + (100 * scale), scale, "black")
    drawPath(ctx, arms, x + (90 * scale), y + (320 * scale), scale, colour)
    drawPath(ctx, legs, x + (133 * scale), y + (430 * scale), scale, pantsColour)
    drawPath(ctx, shirt, x + (85 * scale), y + (250 * scale), scale, shirtColour)
    const img = new Image();
    img.src = hats[hat]
    img.onload = function() {
        ctx.drawImage(img, x, y - (img.height *  4/5 * scale) , img.width * 4 * scale, img.height * 4 * scale)
    }
}


let selection1 = -1

const myButton = new button(ctx, 'ArrowButton.svg', () => selection1 += 1, 100, 100, 0.7)

myButton.draw()

ctx.clearRect(0, 0, canvas.width, canvas.height)

myButton.draw()


canvas.addEventListener('click', (e) => {
    myButton.isClicked(e.clientX, e.clientY)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCharacter(ctx, 500, 200, 1, 4, "lightgrey", "cornflowerblue", 0, 0, [, 0, '#592C1D'])
    myButton.draw()
});
