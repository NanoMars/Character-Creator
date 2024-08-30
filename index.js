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

function searchByName(name, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            return data[i].path
        }
    }
    return null;
}

function drawButton(ctx, x, y, width, height) {
    const arrowButton = new Image()
    arrowButton.src = './ArrowButton.svg'
    arrowButton.onload = function() {
        ctx.drawImage(arrowButton, 10, 10, arrowButton.width, arrowButton.height)
    }
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

function drawCharacter(x, y, scale = 1, skin, pantsColour, shirtColour, face, hat, hair) {
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

drawCharacter(100, 200, 1, 1, "lightgrey", "cornflowerblue", 1, 0, [1, 1, '#aacede'])
drawCharacter(500, 200, 1, 4, "lightgrey", "cornflowerblue", 0, 0, [0, 0, '#592C1D'])
drawCharacter(900, 200, 1, 2, "lightgrey", "cornflowerblue", 0, 0, [-1, 1, '#592C1D'])

